!function (t) {
    function e(e) {
        for (var r, a, s = e[0], c = e[1], f = e[2], l = 0, h = []; l < s.length; l++) a = s[l], i[a] && h.push(i[a][0]), i[a] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        for (u && u(e); h.length;) h.shift()();
        return o.push.apply(o, f || []), n()
    }

    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== i[c] && (r = !1)
            }
            r && (o.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }

    var r = {}, i = {3: 0}, o = [];

    function a(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {i: e, l: !1, exports: {}};
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }

    a.m = t, a.c = r, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: n})
    }, a.r = function (t) {
        Object.defineProperty(t, "__esModule", {value: !0})
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [], c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var f = 0; f < s.length; f++) e(s[f]);
    var u = c;
    o.push([355, 0]), n()
}([function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : t.exports = function (t, e) {
        t.super_ = e;
        var n = function () {
        };
        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
}, function (t, e, n) {
    var r = n(2), i = r.Buffer;

    function o(t, e) {
        for (var n in t) e[n] = t[n]
    }

    function a(t, e, n) {
        return i(t, e, n)
    }

    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, e), e.Buffer = a), o(i, a), a.from = function (t, e, n) {
        if ("number" == typeof t) throw new TypeError("Argument must not be a number");
        return i(t, e, n)
    }, a.alloc = function (t, e, n) {
        if ("number" != typeof t) throw new TypeError("Argument must be a number");
        var r = i(t);
        return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
    }, a.allocUnsafe = function (t) {
        if ("number" != typeof t) throw new TypeError("Argument must be a number");
        return i(t)
    }, a.allocUnsafeSlow = function (t) {
        if ("number" != typeof t) throw new TypeError("Argument must be a number");
        return r.SlowBuffer(t)
    }
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var r = n(179), i = n(178), o = n(82);

        function a() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(t, e) {
            if (a() < e) throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
        }

        function c(t, e, n) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, t)
            }
            return f(this, t, e, n)
        }

        function f(t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = h(t, e), t
            }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | p(e, n), i = (t = s(t, r)).write(e, n);
                return i !== r && (t = t.slice(0, i)), t
            }(t, e, n) : function (t, e) {
                if (c.isBuffer(e)) {
                    var n = 0 | d(e.length);
                    return 0 === (t = s(t, n)).length ? t : (e.copy(t, 0, 0, n), t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? s(t, 0) : h(t, e);
                    if ("Buffer" === e.type && o(e.data)) return h(t, e.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }

        function u(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(t, e) {
            if (u(e), t = s(t, e < 0 ? 0 : 0 | d(e)), !c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
            return t
        }

        function h(t, e) {
            var n = e.length < 0 ? 0 : 0 | d(e.length);
            t = s(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t
        }

        function d(t) {
            if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | t
        }

        function p(t, e) {
            if (c.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1; ;) switch (e) {
                case"ascii":
                case"latin1":
                case"binary":
                    return n;
                case"utf8":
                case"utf-8":
                case void 0:
                    return U(t).length;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return 2 * n;
                case"hex":
                    return n >>> 1;
                case"base64":
                    return F(t).length;
                default:
                    if (r) return U(t).length;
                    e = ("" + e).toLowerCase(), r = !0
            }
        }

        function b(t, e, n) {
            var r = t[e];
            t[e] = t[n], t[n] = r
        }

        function g(t, e, n, r, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (i) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!i) return -1;
                n = 0
            }
            if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, n, r, i);
            if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : y(t, [e], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function y(t, e, n, r, i) {
            var o, a = 1, s = t.length, c = e.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || e.length < 2) return -1;
                a = 2, s /= 2, c /= 2, n /= 2
            }

            function f(t, e) {
                return 1 === a ? t[e] : t.readUInt16BE(e * a)
            }

            if (i) {
                var u = -1;
                for (o = n; o < s; o++) if (f(t, o) === f(e, -1 === u ? 0 : o - u)) {
                    if (-1 === u && (u = o), o - u + 1 === c) return u * a
                } else -1 !== u && (o -= o - u), u = -1
            } else for (n + c > s && (n = s - c), o = n; o >= 0; o--) {
                for (var l = !0, h = 0; h < c; h++) if (f(t, o + h) !== f(e, h)) {
                    l = !1;
                    break
                }
                if (l) return o
            }
            return -1
        }

        function m(t, e, n, r) {
            n = Number(n) || 0;
            var i = t.length - n;
            r ? (r = Number(r)) > i && (r = i) : r = i;
            var o = e.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(e.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                t[n + a] = s
            }
            return a
        }

        function v(t, e, n, r) {
            return Y(U(e, t.length - n), t, n, r)
        }

        function A(t, e, n, r) {
            return Y(function (t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e
            }(e), t, n, r)
        }

        function w(t, e, n, r) {
            return A(t, e, n, r)
        }

        function _(t, e, n, r) {
            return Y(F(e), t, n, r)
        }

        function E(t, e, n, r) {
            return Y(function (t, e) {
                for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = (n = t.charCodeAt(a)) >> 8, i = n % 256, o.push(i), o.push(r);
                return o
            }(e, t.length - n), t, n, r)
        }

        function x(t, e, n) {
            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
        }

        function C(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], i = e; i < n;) {
                var o, a, s, c, f = t[i], u = null, l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                if (i + l <= n) switch (l) {
                    case 1:
                        f < 128 && (u = f);
                        break;
                    case 2:
                        128 == (192 & (o = t[i + 1])) && (c = (31 & f) << 6 | 63 & o) > 127 && (u = c);
                        break;
                    case 3:
                        o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && (c = (15 & f) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (u = c);
                        break;
                    case 4:
                        o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & f) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (u = c)
                }
                null === u ? (u = 65533, l = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), i += l
            }
            return function (t) {
                var e = t.length;
                if (e <= B) return String.fromCharCode.apply(String, t);
                for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += B));
                return n
            }(r)
        }

        e.Buffer = c, e.SlowBuffer = function (t) {
            return +t != t && (t = 0), c.alloc(+t)
        }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype, foo: function () {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), e.kMaxLength = a(), c.poolSize = 8192, c._augment = function (t) {
            return t.__proto__ = c.prototype, t
        }, c.from = function (t, e, n) {
            return f(null, t, e, n)
        }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })), c.alloc = function (t, e, n) {
            return function (t, e, n, r) {
                return u(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e)
            }(null, t, e, n)
        }, c.allocUnsafe = function (t) {
            return l(null, t)
        }, c.allocUnsafeSlow = function (t) {
            return l(null, t)
        }, c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer)
        }, c.compare = function (t, e) {
            if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) if (t[i] !== e[i]) {
                n = t[i], r = e[i];
                break
            }
            return n < r ? -1 : r < n ? 1 : 0
        }, c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"latin1":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, c.concat = function (t, e) {
            if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return c.alloc(0);
            var n;
            if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = c.allocUnsafe(e), i = 0;
            for (n = 0; n < t.length; ++n) {
                var a = t[n];
                if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, i), i += a.length
            }
            return r
        }, c.byteLength = p, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) b(this, e, e + 1);
            return this
        }, c.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
            return this
        }, c.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
            return this
        }, c.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : function (t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return I(this, e, n);
                    case"utf8":
                    case"utf-8":
                        return C(this, e, n);
                    case"ascii":
                        return S(this, e, n);
                    case"latin1":
                    case"binary":
                        return k(this, e, n);
                    case"base64":
                        return x(this, e, n);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return M(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }.apply(this, arguments)
        }, c.prototype.equals = function (t) {
            if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === c.compare(this, t)
        }, c.prototype.inspect = function () {
            var t = "", n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
        }, c.prototype.compare = function (t, e, n, r, i) {
            if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
            for (var o = i - r, a = n - e, s = Math.min(o, a), f = this.slice(r, i), u = t.slice(e, n), l = 0; l < s; ++l) if (f[l] !== u[l]) {
                o = f[l], a = u[l];
                break
            }
            return o < a ? -1 : a < o ? 1 : 0
        }, c.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n)
        }, c.prototype.indexOf = function (t, e, n) {
            return g(this, t, e, n, !0)
        }, c.prototype.lastIndexOf = function (t, e, n) {
            return g(this, t, e, n, !1)
        }, c.prototype.write = function (t, e, n, r) {
            if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0; else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var i = this.length - e;
            if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ;) switch (r) {
                case"hex":
                    return m(this, t, e, n);
                case"utf8":
                case"utf-8":
                    return v(this, t, e, n);
                case"ascii":
                    return A(this, t, e, n);
                case"latin1":
                case"binary":
                    return w(this, t, e, n);
                case"base64":
                    return _(this, t, e, n);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return E(this, t, e, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0
            }
        }, c.prototype.toJSON = function () {
            return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
        };
        var B = 4096;

        function S(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
            return r
        }

        function k(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
            return r
        }

        function I(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = "", o = e; o < n; ++o) i += Q(t[o]);
            return i
        }

        function M(t, e, n) {
            for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }

        function T(t, e, n) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function R(t, e, n, r, i, o) {
            if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > t.length) throw new RangeError("Index out of range")
        }

        function D(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }

        function O(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
        }

        function P(t, e, n, r, i, o) {
            if (n + r > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function N(t, e, n, r, o) {
            return o || P(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
        }

        function j(t, e, n, r, o) {
            return o || P(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
        }

        c.prototype.slice = function (t, e) {
            var n, r = this.length;
            if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype; else {
                var i = e - t;
                n = new c(i, void 0);
                for (var o = 0; o < i; ++o) n[o] = this[o + t]
            }
            return n
        }, c.prototype.readUIntLE = function (t, e, n) {
            t |= 0, e |= 0, n || T(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
            return r
        }, c.prototype.readUIntBE = function (t, e, n) {
            t |= 0, e |= 0, n || T(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
            return r
        }, c.prototype.readUInt8 = function (t, e) {
            return e || T(t, 1, this.length), this[t]
        }, c.prototype.readUInt16LE = function (t, e) {
            return e || T(t, 2, this.length), this[t] | this[t + 1] << 8
        }, c.prototype.readUInt16BE = function (t, e) {
            return e || T(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, c.prototype.readUInt32LE = function (t, e) {
            return e || T(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, c.prototype.readUInt32BE = function (t, e) {
            return e || T(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, c.prototype.readIntLE = function (t, e, n) {
            t |= 0, e |= 0, n || T(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
        }, c.prototype.readIntBE = function (t, e, n) {
            t |= 0, e |= 0, n || T(t, e, this.length);
            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }, c.prototype.readInt8 = function (t, e) {
            return e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, c.prototype.readInt16LE = function (t, e) {
            e || T(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, c.prototype.readInt16BE = function (t, e) {
            e || T(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, c.prototype.readInt32LE = function (t, e) {
            return e || T(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, c.prototype.readInt32BE = function (t, e) {
            return e || T(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, c.prototype.readFloatLE = function (t, e) {
            return e || T(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }, c.prototype.readFloatBE = function (t, e) {
            return e || T(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }, c.prototype.readDoubleLE = function (t, e) {
            return e || T(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }, c.prototype.readDoubleBE = function (t, e) {
            return e || T(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }, c.prototype.writeUIntLE = function (t, e, n, r) {
            t = +t, e |= 0, n |= 0, r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1, o = 0;
            for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
            return e + n
        }, c.prototype.writeUIntBE = function (t, e, n, r) {
            t = +t, e |= 0, n |= 0, r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1, o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
            return e + n
        }, c.prototype.writeUInt8 = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, c.prototype.writeUInt16LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2
        }, c.prototype.writeUInt16BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2
        }, c.prototype.writeUInt32LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : O(this, t, e, !0), e + 4
        }, c.prototype.writeUInt32BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : O(this, t, e, !1), e + 4
        }, c.prototype.writeIntLE = function (t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                R(this, t, e, n, i - 1, -i)
            }
            var o = 0, a = 1, s = 0;
            for (this[e] = 255 & t; ++o < n && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
            return e + n
        }, c.prototype.writeIntBE = function (t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                R(this, t, e, n, i - 1, -i)
            }
            var o = n - 1, a = 1, s = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
            return e + n
        }, c.prototype.writeInt8 = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, c.prototype.writeInt16LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2
        }, c.prototype.writeInt16BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2
        }, c.prototype.writeInt32LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : O(this, t, e, !0), e + 4
        }, c.prototype.writeInt32BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : O(this, t, e, !1), e + 4
        }, c.prototype.writeFloatLE = function (t, e, n) {
            return N(this, t, e, !0, n)
        }, c.prototype.writeFloatBE = function (t, e, n) {
            return N(this, t, e, !1, n)
        }, c.prototype.writeDoubleLE = function (t, e, n) {
            return j(this, t, e, !0, n)
        }, c.prototype.writeDoubleBE = function (t, e, n) {
            return j(this, t, e, !1, n)
        }, c.prototype.copy = function (t, e, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            var i, o = r - n;
            if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n]; else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o
        }, c.prototype.fill = function (t, e, n, r) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            var o;
            if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
                var a = c.isBuffer(t) ? t : U(new c(t, r).toString()), s = a.length;
                for (o = 0; o < n - e; ++o) this[o + e] = a[o % s]
            }
            return this
        };
        var L = /[^+\/0-9A-Za-z-_]/g;

        function Q(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function U(t, e) {
            var n;
            e = e || 1 / 0;
            for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function F(t) {
            return r.toByteArray(function (t) {
                if ((t = function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }(t).replace(L, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }

        function Y(t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
            return i
        }
    }).call(this, n(8))
}, function (t, e, n) {
    (function (t) {
        !function (t, e) {
            "use strict";

            function r(t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }

            function i(t, e) {
                t.super_ = e;
                var n = function () {
                };
                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }

            function o(t, e, n) {
                if (o.isBN(t)) return t;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (n = e, e = 10), this._init(t || 0, e || 10, n || "be"))
            }

            var a;
            "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
            try {
                a = n(137).Buffer
            } catch (t) {
            }

            function s(t, e, n) {
                for (var r = 0, i = Math.min(t.length, n), o = e; o < i; o++) {
                    var a = t.charCodeAt(o) - 48;
                    r <<= 4, r |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                }
                return r
            }

            function c(t, e, n, r) {
                for (var i = 0, o = Math.min(t.length, n), a = e; a < o; a++) {
                    var s = t.charCodeAt(a) - 48;
                    i *= r, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return i
            }

            o.isBN = function (t) {
                return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
            }, o.max = function (t, e) {
                return t.cmp(e) > 0 ? t : e
            }, o.min = function (t, e) {
                return t.cmp(e) < 0 ? t : e
            }, o.prototype._init = function (t, e, n) {
                if ("number" == typeof t) return this._initNumber(t, e, n);
                if ("object" == typeof t) return this._initArray(t, e, n);
                "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), e, n)
            }, o.prototype._initNumber = function (t, e, n) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n)
            }, o.prototype._initArray = function (t, e, n) {
                if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                var o, a, s = 0;
                if ("be" === n) for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); else if ("le" === n) for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                return this.strip()
            }, o.prototype._parseHex = function (t, e) {
                this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                var r, i, o = 0;
                for (n = t.length - 6, r = 0; n >= e; n -= 6) i = s(t, n, n + 6), this.words[r] |= i << o & 67108863, this.words[r + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, r++);
                n + 6 !== e && (i = s(t, e, n + 6), this.words[r] |= i << o & 67108863, this.words[r + 1] |= i >>> 26 - o & 4194303), this.strip()
            }, o.prototype._parseBase = function (t, e, n) {
                this.words = [0], this.length = 1;
                for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
                r--, i = i / e | 0;
                for (var o = t.length - n, a = o % r, s = Math.min(o, o - a) + n, f = 0, u = n; u < s; u += r) f = c(t, u, u + r, e), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== a) {
                    var l = 1;
                    for (f = c(t, u, t.length, e), u = 0; u < a; u++) l *= e;
                    this.imuln(l), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                }
            }, o.prototype.copy = function (t) {
                t.words = new Array(this.length);
                for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                t.length = this.length, t.negative = this.negative, t.red = this.red
            }, o.prototype.clone = function () {
                var t = new o(null);
                return this.copy(t), t
            }, o.prototype._expand = function (t) {
                for (; this.length < t;) this.words[this.length++] = 0;
                return this
            }, o.prototype.strip = function () {
                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                return this._normSign()
            }, o.prototype._normSign = function () {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }, o.prototype.inspect = function () {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            };
            var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

            function h(t, e, n) {
                n.negative = e.negative ^ t.negative;
                var r = t.length + e.length | 0;
                n.length = r, r = r - 1 | 0;
                var i = 0 | t.words[0], o = 0 | e.words[0], a = i * o, s = 67108863 & a, c = a / 67108864 | 0;
                n.words[0] = s;
                for (var f = 1; f < r; f++) {
                    for (var u = c >>> 26, l = 67108863 & c, h = Math.min(f, e.length - 1), d = Math.max(0, f - t.length + 1); d <= h; d++) {
                        var p = f - d | 0;
                        u += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 67108864 | 0, l = 67108863 & a
                    }
                    n.words[f] = 0 | l, c = 0 | u
                }
                return 0 !== c ? n.words[f] = 0 | c : n.length--, n.strip()
            }

            o.prototype.toString = function (t, e) {
                var n;
                if (t = t || 10, e = 0 | e || 1, 16 === t || "hex" === t) {
                    n = "";
                    for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a], c = (16777215 & (s << i | o)).toString(16);
                        n = 0 != (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? f[6 - c.length] + c + n : c + n, (i += 2) >= 26 && (i -= 26, a--)
                    }
                    for (0 !== o && (n = o.toString(16) + n); n.length % e != 0;) n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var h = u[t], d = l[t];
                    n = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero();) {
                        var b = p.modn(d).toString(t);
                        n = (p = p.idivn(d)).isZero() ? b + n : f[h - b.length] + b + n
                    }
                    for (this.isZero() && (n = "0" + n); n.length % e != 0;) n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n
                }
                r(!1, "Base should be between 2 and 36")
            }, o.prototype.toNumber = function () {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
            }, o.prototype.toJSON = function () {
                return this.toString(16)
            }, o.prototype.toBuffer = function (t, e) {
                return r(void 0 !== a), this.toArrayLike(a, t, e)
            }, o.prototype.toArray = function (t, e) {
                return this.toArrayLike(Array, t, e)
            }, o.prototype.toArrayLike = function (t, e, n) {
                var i = this.byteLength(), o = n || Math.max(1, i);
                r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
                var a, s, c = "le" === e, f = new t(o), u = this.clone();
                if (c) {
                    for (s = 0; !u.isZero(); s++) a = u.andln(255), u.iushrn(8), f[s] = a;
                    for (; s < o; s++) f[s] = 0
                } else {
                    for (s = 0; s < o - i; s++) f[s] = 0;
                    for (s = 0; !u.isZero(); s++) a = u.andln(255), u.iushrn(8), f[o - s - 1] = a
                }
                return f
            }, Math.clz32 ? o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t)
            } : o.prototype._countBits = function (t) {
                var e = t, n = 0;
                return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e
            }, o.prototype._zeroBits = function (t) {
                if (0 === t) return 26;
                var e = t, n = 0;
                return 0 == (8191 & e) && (n += 13, e >>>= 13), 0 == (127 & e) && (n += 7, e >>>= 7), 0 == (15 & e) && (n += 4, e >>>= 4), 0 == (3 & e) && (n += 2, e >>>= 2), 0 == (1 & e) && n++, n
            }, o.prototype.bitLength = function () {
                var t = this.words[this.length - 1], e = this._countBits(t);
                return 26 * (this.length - 1) + e
            }, o.prototype.zeroBits = function () {
                if (this.isZero()) return 0;
                for (var t = 0, e = 0; e < this.length; e++) {
                    var n = this._zeroBits(this.words[e]);
                    if (t += n, 26 !== n) break
                }
                return t
            }, o.prototype.byteLength = function () {
                return Math.ceil(this.bitLength() / 8)
            }, o.prototype.toTwos = function (t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }, o.prototype.fromTwos = function (t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }, o.prototype.isNeg = function () {
                return 0 !== this.negative
            }, o.prototype.neg = function () {
                return this.clone().ineg()
            }, o.prototype.ineg = function () {
                return this.isZero() || (this.negative ^= 1), this
            }, o.prototype.iuor = function (t) {
                for (; this.length < t.length;) this.words[this.length++] = 0;
                for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                return this.strip()
            }, o.prototype.ior = function (t) {
                return r(0 == (this.negative | t.negative)), this.iuor(t)
            }, o.prototype.or = function (t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }, o.prototype.uor = function (t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }, o.prototype.iuand = function (t) {
                var e;
                e = this.length > t.length ? t : this;
                for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];
                return this.length = e.length, this.strip()
            }, o.prototype.iand = function (t) {
                return r(0 == (this.negative | t.negative)), this.iuand(t)
            }, o.prototype.and = function (t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }, o.prototype.uand = function (t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }, o.prototype.iuxor = function (t) {
                var e, n;
                this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                for (var r = 0; r < n.length; r++) this.words[r] = e.words[r] ^ n.words[r];
                if (this !== e) for (; r < e.length; r++) this.words[r] = e.words[r];
                return this.length = e.length, this.strip()
            }, o.prototype.ixor = function (t) {
                return r(0 == (this.negative | t.negative)), this.iuxor(t)
            }, o.prototype.xor = function (t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }, o.prototype.uxor = function (t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }, o.prototype.inotn = function (t) {
                r("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26), n = t % 26;
                this._expand(e), n > 0 && e--;
                for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
            }, o.prototype.notn = function (t) {
                return this.clone().inotn(t)
            }, o.prototype.setn = function (t, e) {
                r("number" == typeof t && t >= 0);
                var n = t / 26 | 0, i = t % 26;
                return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip()
            }, o.prototype.iadd = function (t) {
                var e, n, r;
                if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                this.length > t.length ? (n = this, r = t) : (n = t, r = this);
                for (var i = 0, o = 0; o < r.length; o++) e = (0 | n.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                for (; 0 !== i && o < n.length; o++) e = (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++; else if (n !== this) for (; o < n.length; o++) this.words[o] = n.words[o];
                return this
            }, o.prototype.add = function (t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }, o.prototype.isub = function (t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e = this.iadd(t);
                    return t.negative = 1, e._normSign()
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var n, r, i = this.cmp(t);
                if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                i > 0 ? (n = this, r = t) : (n = t, r = this);
                for (var o = 0, a = 0; a < r.length; a++) o = (e = (0 | n.words[a]) - (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                for (; 0 !== o && a < n.length; a++) o = (e = (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                if (0 === o && a < n.length && n !== this) for (; a < n.length; a++) this.words[a] = n.words[a];
                return this.length = Math.max(this.length, a), n !== this && (this.negative = 1), this.strip()
            }, o.prototype.sub = function (t) {
                return this.clone().isub(t)
            };
            var d = function (t, e, n) {
                var r, i, o, a = t.words, s = e.words, c = n.words, f = 0, u = 0 | a[0], l = 8191 & u, h = u >>> 13,
                    d = 0 | a[1], p = 8191 & d, b = d >>> 13, g = 0 | a[2], y = 8191 & g, m = g >>> 13, v = 0 | a[3],
                    A = 8191 & v, w = v >>> 13, _ = 0 | a[4], E = 8191 & _, x = _ >>> 13, C = 0 | a[5], B = 8191 & C,
                    S = C >>> 13, k = 0 | a[6], I = 8191 & k, M = k >>> 13, T = 0 | a[7], R = 8191 & T, D = T >>> 13,
                    O = 0 | a[8], P = 8191 & O, N = O >>> 13, j = 0 | a[9], L = 8191 & j, Q = j >>> 13, U = 0 | s[0],
                    F = 8191 & U, Y = U >>> 13, H = 0 | s[1], z = 8191 & H, V = H >>> 13, $ = 0 | s[2], G = 8191 & $,
                    J = $ >>> 13, q = 0 | s[3], W = 8191 & q, X = q >>> 13, K = 0 | s[4], Z = 8191 & K, tt = K >>> 13,
                    et = 0 | s[5], nt = 8191 & et, rt = et >>> 13, it = 0 | s[6], ot = 8191 & it, at = it >>> 13,
                    st = 0 | s[7], ct = 8191 & st, ft = st >>> 13, ut = 0 | s[8], lt = 8191 & ut, ht = ut >>> 13,
                    dt = 0 | s[9], pt = 8191 & dt, bt = dt >>> 13;
                n.negative = t.negative ^ e.negative, n.length = 19;
                var gt = (f + (r = Math.imul(l, F)) | 0) + ((8191 & (i = (i = Math.imul(l, Y)) + Math.imul(h, F) | 0)) << 13) | 0;
                f = ((o = Math.imul(h, Y)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(p, F), i = (i = Math.imul(p, Y)) + Math.imul(b, F) | 0, o = Math.imul(b, Y);
                var yt = (f + (r = r + Math.imul(l, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, V) | 0) + Math.imul(h, z) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, V) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(y, F), i = (i = Math.imul(y, Y)) + Math.imul(m, F) | 0, o = Math.imul(m, Y), r = r + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(b, z) | 0, o = o + Math.imul(b, V) | 0;
                var mt = (f + (r = r + Math.imul(l, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, J) | 0) + Math.imul(h, G) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, J) | 0) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, r = Math.imul(A, F), i = (i = Math.imul(A, Y)) + Math.imul(w, F) | 0, o = Math.imul(w, Y), r = r + Math.imul(y, z) | 0, i = (i = i + Math.imul(y, V) | 0) + Math.imul(m, z) | 0, o = o + Math.imul(m, V) | 0, r = r + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, J) | 0;
                var vt = (f + (r = r + Math.imul(l, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, X) | 0) + Math.imul(h, W) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, X) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(E, F), i = (i = Math.imul(E, Y)) + Math.imul(x, F) | 0, o = Math.imul(x, Y), r = r + Math.imul(A, z) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(w, z) | 0, o = o + Math.imul(w, V) | 0, r = r + Math.imul(y, G) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, J) | 0, r = r + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, X) | 0;
                var At = (f + (r = r + Math.imul(l, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tt) | 0) + Math.imul(h, Z) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, tt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(B, F), i = (i = Math.imul(B, Y)) + Math.imul(S, F) | 0, o = Math.imul(S, Y), r = r + Math.imul(E, z) | 0, i = (i = i + Math.imul(E, V) | 0) + Math.imul(x, z) | 0, o = o + Math.imul(x, V) | 0, r = r + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, J) | 0, r = r + Math.imul(y, W) | 0, i = (i = i + Math.imul(y, X) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, X) | 0, r = r + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, tt) | 0;
                var wt = (f + (r = r + Math.imul(l, nt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, rt) | 0) + Math.imul(h, nt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, rt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(I, F), i = (i = Math.imul(I, Y)) + Math.imul(M, F) | 0, o = Math.imul(M, Y), r = r + Math.imul(B, z) | 0, i = (i = i + Math.imul(B, V) | 0) + Math.imul(S, z) | 0, o = o + Math.imul(S, V) | 0, r = r + Math.imul(E, G) | 0, i = (i = i + Math.imul(E, J) | 0) + Math.imul(x, G) | 0, o = o + Math.imul(x, J) | 0, r = r + Math.imul(A, W) | 0, i = (i = i + Math.imul(A, X) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, X) | 0, r = r + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, tt) | 0, r = r + Math.imul(p, nt) | 0, i = (i = i + Math.imul(p, rt) | 0) + Math.imul(b, nt) | 0, o = o + Math.imul(b, rt) | 0;
                var _t = (f + (r = r + Math.imul(l, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, at) | 0) + Math.imul(h, ot) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, at) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(R, F), i = (i = Math.imul(R, Y)) + Math.imul(D, F) | 0, o = Math.imul(D, Y), r = r + Math.imul(I, z) | 0, i = (i = i + Math.imul(I, V) | 0) + Math.imul(M, z) | 0, o = o + Math.imul(M, V) | 0, r = r + Math.imul(B, G) | 0, i = (i = i + Math.imul(B, J) | 0) + Math.imul(S, G) | 0, o = o + Math.imul(S, J) | 0, r = r + Math.imul(E, W) | 0, i = (i = i + Math.imul(E, X) | 0) + Math.imul(x, W) | 0, o = o + Math.imul(x, X) | 0, r = r + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, tt) | 0, r = r + Math.imul(y, nt) | 0, i = (i = i + Math.imul(y, rt) | 0) + Math.imul(m, nt) | 0, o = o + Math.imul(m, rt) | 0, r = r + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, at) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, at) | 0;
                var Et = (f + (r = r + Math.imul(l, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ft) | 0) + Math.imul(h, ct) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, ft) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(P, F), i = (i = Math.imul(P, Y)) + Math.imul(N, F) | 0, o = Math.imul(N, Y), r = r + Math.imul(R, z) | 0, i = (i = i + Math.imul(R, V) | 0) + Math.imul(D, z) | 0, o = o + Math.imul(D, V) | 0, r = r + Math.imul(I, G) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(M, G) | 0, o = o + Math.imul(M, J) | 0, r = r + Math.imul(B, W) | 0, i = (i = i + Math.imul(B, X) | 0) + Math.imul(S, W) | 0, o = o + Math.imul(S, X) | 0, r = r + Math.imul(E, Z) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(x, Z) | 0, o = o + Math.imul(x, tt) | 0, r = r + Math.imul(A, nt) | 0, i = (i = i + Math.imul(A, rt) | 0) + Math.imul(w, nt) | 0, o = o + Math.imul(w, rt) | 0, r = r + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, at) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, at) | 0, r = r + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(b, ct) | 0, o = o + Math.imul(b, ft) | 0;
                var xt = (f + (r = r + Math.imul(l, lt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ht) | 0) + Math.imul(h, lt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, ht) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(L, F), i = (i = Math.imul(L, Y)) + Math.imul(Q, F) | 0, o = Math.imul(Q, Y), r = r + Math.imul(P, z) | 0, i = (i = i + Math.imul(P, V) | 0) + Math.imul(N, z) | 0, o = o + Math.imul(N, V) | 0, r = r + Math.imul(R, G) | 0, i = (i = i + Math.imul(R, J) | 0) + Math.imul(D, G) | 0, o = o + Math.imul(D, J) | 0, r = r + Math.imul(I, W) | 0, i = (i = i + Math.imul(I, X) | 0) + Math.imul(M, W) | 0, o = o + Math.imul(M, X) | 0, r = r + Math.imul(B, Z) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, tt) | 0, r = r + Math.imul(E, nt) | 0, i = (i = i + Math.imul(E, rt) | 0) + Math.imul(x, nt) | 0, o = o + Math.imul(x, rt) | 0, r = r + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, at) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, at) | 0, r = r + Math.imul(y, ct) | 0, i = (i = i + Math.imul(y, ft) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, ft) | 0, r = r + Math.imul(p, lt) | 0, i = (i = i + Math.imul(p, ht) | 0) + Math.imul(b, lt) | 0, o = o + Math.imul(b, ht) | 0;
                var Ct = (f + (r = r + Math.imul(l, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, bt) | 0) + Math.imul(h, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(h, bt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, r = Math.imul(L, z), i = (i = Math.imul(L, V)) + Math.imul(Q, z) | 0, o = Math.imul(Q, V), r = r + Math.imul(P, G) | 0, i = (i = i + Math.imul(P, J) | 0) + Math.imul(N, G) | 0, o = o + Math.imul(N, J) | 0, r = r + Math.imul(R, W) | 0, i = (i = i + Math.imul(R, X) | 0) + Math.imul(D, W) | 0, o = o + Math.imul(D, X) | 0, r = r + Math.imul(I, Z) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(M, Z) | 0, o = o + Math.imul(M, tt) | 0, r = r + Math.imul(B, nt) | 0, i = (i = i + Math.imul(B, rt) | 0) + Math.imul(S, nt) | 0, o = o + Math.imul(S, rt) | 0, r = r + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, at) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, at) | 0, r = r + Math.imul(A, ct) | 0, i = (i = i + Math.imul(A, ft) | 0) + Math.imul(w, ct) | 0, o = o + Math.imul(w, ft) | 0, r = r + Math.imul(y, lt) | 0, i = (i = i + Math.imul(y, ht) | 0) + Math.imul(m, lt) | 0, o = o + Math.imul(m, ht) | 0;
                var Bt = (f + (r = r + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, r = Math.imul(L, G), i = (i = Math.imul(L, J)) + Math.imul(Q, G) | 0, o = Math.imul(Q, J), r = r + Math.imul(P, W) | 0, i = (i = i + Math.imul(P, X) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, X) | 0, r = r + Math.imul(R, Z) | 0, i = (i = i + Math.imul(R, tt) | 0) + Math.imul(D, Z) | 0, o = o + Math.imul(D, tt) | 0, r = r + Math.imul(I, nt) | 0, i = (i = i + Math.imul(I, rt) | 0) + Math.imul(M, nt) | 0, o = o + Math.imul(M, rt) | 0, r = r + Math.imul(B, ot) | 0, i = (i = i + Math.imul(B, at) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, at) | 0, r = r + Math.imul(E, ct) | 0, i = (i = i + Math.imul(E, ft) | 0) + Math.imul(x, ct) | 0, o = o + Math.imul(x, ft) | 0, r = r + Math.imul(A, lt) | 0, i = (i = i + Math.imul(A, ht) | 0) + Math.imul(w, lt) | 0, o = o + Math.imul(w, ht) | 0;
                var St = (f + (r = r + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, bt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(m, bt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(L, W), i = (i = Math.imul(L, X)) + Math.imul(Q, W) | 0, o = Math.imul(Q, X), r = r + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, tt) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, tt) | 0, r = r + Math.imul(R, nt) | 0, i = (i = i + Math.imul(R, rt) | 0) + Math.imul(D, nt) | 0, o = o + Math.imul(D, rt) | 0, r = r + Math.imul(I, ot) | 0, i = (i = i + Math.imul(I, at) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, at) | 0, r = r + Math.imul(B, ct) | 0, i = (i = i + Math.imul(B, ft) | 0) + Math.imul(S, ct) | 0, o = o + Math.imul(S, ft) | 0, r = r + Math.imul(E, lt) | 0, i = (i = i + Math.imul(E, ht) | 0) + Math.imul(x, lt) | 0, o = o + Math.imul(x, ht) | 0;
                var kt = (f + (r = r + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, bt) | 0) + Math.imul(w, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(w, bt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(L, Z), i = (i = Math.imul(L, tt)) + Math.imul(Q, Z) | 0, o = Math.imul(Q, tt), r = r + Math.imul(P, nt) | 0, i = (i = i + Math.imul(P, rt) | 0) + Math.imul(N, nt) | 0, o = o + Math.imul(N, rt) | 0, r = r + Math.imul(R, ot) | 0, i = (i = i + Math.imul(R, at) | 0) + Math.imul(D, ot) | 0, o = o + Math.imul(D, at) | 0, r = r + Math.imul(I, ct) | 0, i = (i = i + Math.imul(I, ft) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, ft) | 0, r = r + Math.imul(B, lt) | 0, i = (i = i + Math.imul(B, ht) | 0) + Math.imul(S, lt) | 0, o = o + Math.imul(S, ht) | 0;
                var It = (f + (r = r + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, bt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(x, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(L, nt), i = (i = Math.imul(L, rt)) + Math.imul(Q, nt) | 0, o = Math.imul(Q, rt), r = r + Math.imul(P, ot) | 0, i = (i = i + Math.imul(P, at) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, at) | 0, r = r + Math.imul(R, ct) | 0, i = (i = i + Math.imul(R, ft) | 0) + Math.imul(D, ct) | 0, o = o + Math.imul(D, ft) | 0, r = r + Math.imul(I, lt) | 0, i = (i = i + Math.imul(I, ht) | 0) + Math.imul(M, lt) | 0, o = o + Math.imul(M, ht) | 0;
                var Mt = (f + (r = r + Math.imul(B, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, bt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(S, bt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(L, ot), i = (i = Math.imul(L, at)) + Math.imul(Q, ot) | 0, o = Math.imul(Q, at), r = r + Math.imul(P, ct) | 0, i = (i = i + Math.imul(P, ft) | 0) + Math.imul(N, ct) | 0, o = o + Math.imul(N, ft) | 0, r = r + Math.imul(R, lt) | 0, i = (i = i + Math.imul(R, ht) | 0) + Math.imul(D, lt) | 0, o = o + Math.imul(D, ht) | 0;
                var Tt = (f + (r = r + Math.imul(I, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, bt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(M, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(L, ct), i = (i = Math.imul(L, ft)) + Math.imul(Q, ct) | 0, o = Math.imul(Q, ft), r = r + Math.imul(P, lt) | 0, i = (i = i + Math.imul(P, ht) | 0) + Math.imul(N, lt) | 0, o = o + Math.imul(N, ht) | 0;
                var Rt = (f + (r = r + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, bt) | 0) + Math.imul(D, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(D, bt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul(L, lt), i = (i = Math.imul(L, ht)) + Math.imul(Q, lt) | 0, o = Math.imul(Q, ht);
                var Dt = (f + (r = r + Math.imul(P, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, bt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(N, bt) | 0) + (i >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863;
                var Ot = (f + (r = Math.imul(L, pt)) | 0) + ((8191 & (i = (i = Math.imul(L, bt)) + Math.imul(Q, pt) | 0)) << 13) | 0;
                return f = ((o = Math.imul(Q, bt)) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, c[0] = gt, c[1] = yt, c[2] = mt, c[3] = vt, c[4] = At, c[5] = wt, c[6] = _t, c[7] = Et, c[8] = xt, c[9] = Ct, c[10] = Bt, c[11] = St, c[12] = kt, c[13] = It, c[14] = Mt, c[15] = Tt, c[16] = Rt, c[17] = Dt, c[18] = Ot, 0 !== f && (c[19] = f, n.length++), n
            };

            function p(t, e, n) {
                return (new b).mulp(t, e, n)
            }

            function b(t, e) {
                this.x = t, this.y = e
            }

            Math.imul || (d = h), o.prototype.mulTo = function (t, e) {
                var n = this.length + t.length;
                return 10 === this.length && 10 === t.length ? d(this, t, e) : n < 63 ? h(this, t, e) : n < 1024 ? function (t, e, n) {
                    n.negative = e.negative ^ t.negative, n.length = t.length + e.length;
                    for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                        var a = i;
                        i = 0;
                        for (var s = 67108863 & r, c = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= c; f++) {
                            var u = o - f, l = (0 | t.words[u]) * (0 | e.words[f]), h = 67108863 & l;
                            s = 67108863 & (h = h + s | 0), i += (a = (a = a + (l / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, a &= 67108863
                        }
                        n.words[o] = s, r = a, a = i
                    }
                    return 0 !== r ? n.words[o] = r : n.length--, n.strip()
                }(this, t, e) : p(this, t, e)
            }, b.prototype.makeRBT = function (t) {
                for (var e = new Array(t), n = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, n, t);
                return e
            }, b.prototype.revBin = function (t, e, n) {
                if (0 === t || t === n - 1) return t;
                for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                return r
            }, b.prototype.permute = function (t, e, n, r, i, o) {
                for (var a = 0; a < o; a++) r[a] = e[t[a]], i[a] = n[t[a]]
            }, b.prototype.transform = function (t, e, n, r, i, o) {
                this.permute(o, t, e, n, r, i);
                for (var a = 1; a < i; a <<= 1) for (var s = a << 1, c = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s) for (var l = c, h = f, d = 0; d < a; d++) {
                    var p = n[u + d], b = r[u + d], g = n[u + d + a], y = r[u + d + a], m = l * g - h * y;
                    y = l * y + h * g, g = m, n[u + d] = p + g, r[u + d] = b + y, n[u + d + a] = p - g, r[u + d + a] = b - y, d !== s && (m = c * l - f * h, h = c * h + f * l, l = m)
                }
            }, b.prototype.guessLen13b = function (t, e) {
                var n = 1 | Math.max(e, t), r = 1 & n, i = 0;
                for (n = n / 2 | 0; n; n >>>= 1) i++;
                return 1 << i + 1 + r
            }, b.prototype.conjugate = function (t, e, n) {
                if (!(n <= 1)) for (var r = 0; r < n / 2; r++) {
                    var i = t[r];
                    t[r] = t[n - r - 1], t[n - r - 1] = i, i = e[r], e[r] = -e[n - r - 1], e[n - r - 1] = -i
                }
            }, b.prototype.normalize13b = function (t, e) {
                for (var n = 0, r = 0; r < e / 2; r++) {
                    var i = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + n;
                    t[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return t
            }, b.prototype.convert13b = function (t, e, n, i) {
                for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], n[2 * a] = 8191 & o, o >>>= 13, n[2 * a + 1] = 8191 & o, o >>>= 13;
                for (a = 2 * e; a < i; ++a) n[a] = 0;
                r(0 === o), r(0 == (-8192 & o))
            }, b.prototype.stub = function (t) {
                for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
                return e
            }, b.prototype.mulp = function (t, e, n) {
                var r = 2 * this.guessLen13b(t.length, e.length), i = this.makeRBT(r), o = this.stub(r),
                    a = new Array(r), s = new Array(r), c = new Array(r), f = new Array(r), u = new Array(r),
                    l = new Array(r), h = n.words;
                h.length = r, this.convert13b(t.words, t.length, a, r), this.convert13b(e.words, e.length, f, r), this.transform(a, o, s, c, r, i), this.transform(f, o, u, l, r, i);
                for (var d = 0; d < r; d++) {
                    var p = s[d] * u[d] - c[d] * l[d];
                    c[d] = s[d] * l[d] + c[d] * u[d], s[d] = p
                }
                return this.conjugate(s, c, r), this.transform(s, c, h, o, r, i), this.conjugate(h, o, r), this.normalize13b(h, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n.strip()
            }, o.prototype.mul = function (t) {
                var e = new o(null);
                return e.words = new Array(this.length + t.length), this.mulTo(t, e)
            }, o.prototype.mulf = function (t) {
                var e = new o(null);
                return e.words = new Array(this.length + t.length), p(this, t, e)
            }, o.prototype.imul = function (t) {
                return this.clone().mulTo(t, this)
            }, o.prototype.imuln = function (t) {
                r("number" == typeof t), r(t < 67108864);
                for (var e = 0, n = 0; n < this.length; n++) {
                    var i = (0 | this.words[n]) * t, o = (67108863 & i) + (67108863 & e);
                    e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[n] = 67108863 & o
                }
                return 0 !== e && (this.words[n] = e, this.length++), this
            }, o.prototype.muln = function (t) {
                return this.clone().imuln(t)
            }, o.prototype.sqr = function () {
                return this.mul(this)
            }, o.prototype.isqr = function () {
                return this.imul(this.clone())
            }, o.prototype.pow = function (t) {
                var e = function (t) {
                    for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                        var r = n / 26 | 0, i = n % 26;
                        e[n] = (t.words[r] & 1 << i) >>> i
                    }
                    return e
                }(t);
                if (0 === e.length) return new o(1);
                for (var n = this, r = 0; r < e.length && 0 === e[r]; r++, n = n.sqr()) ;
                if (++r < e.length) for (var i = n.sqr(); r < e.length; r++, i = i.sqr()) 0 !== e[r] && (n = n.mul(i));
                return n
            }, o.prototype.iushln = function (t) {
                r("number" == typeof t && t >= 0);
                var e, n = t % 26, i = (t - n) / 26, o = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var a = 0;
                    for (e = 0; e < this.length; e++) {
                        var s = this.words[e] & o, c = (0 | this.words[e]) - s << n;
                        this.words[e] = c | a, a = s >>> 26 - n
                    }
                    a && (this.words[e] = a, this.length++)
                }
                if (0 !== i) {
                    for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                    for (e = 0; e < i; e++) this.words[e] = 0;
                    this.length += i
                }
                return this.strip()
            }, o.prototype.ishln = function (t) {
                return r(0 === this.negative), this.iushln(t)
            }, o.prototype.iushrn = function (t, e, n) {
                var i;
                r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                var o = t % 26, a = Math.min((t - o) / 26, this.length), s = 67108863 ^ 67108863 >>> o << o, c = n;
                if (i -= a, i = Math.max(0, i), c) {
                    for (var f = 0; f < a; f++) c.words[f] = this.words[f];
                    c.length = a
                }
                if (0 === a) ; else if (this.length > a) for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a]; else this.words[0] = 0, this.length = 1;
                var u = 0;
                for (f = this.length - 1; f >= 0 && (0 !== u || f >= i); f--) {
                    var l = 0 | this.words[f];
                    this.words[f] = u << 26 - o | l >>> o, u = l & s
                }
                return c && 0 !== u && (c.words[c.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
            }, o.prototype.ishrn = function (t, e, n) {
                return r(0 === this.negative), this.iushrn(t, e, n)
            }, o.prototype.shln = function (t) {
                return this.clone().ishln(t)
            }, o.prototype.ushln = function (t) {
                return this.clone().iushln(t)
            }, o.prototype.shrn = function (t) {
                return this.clone().ishrn(t)
            }, o.prototype.ushrn = function (t) {
                return this.clone().iushrn(t)
            }, o.prototype.testn = function (t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26, n = (t - e) / 26, i = 1 << e;
                return !(this.length <= n || !(this.words[n] & i))
            }, o.prototype.imaskn = function (t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26, n = (t - e) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
                    var i = 67108863 ^ 67108863 >>> e << e;
                    this.words[this.length - 1] &= i
                }
                return this.strip()
            }, o.prototype.maskn = function (t) {
                return this.clone().imaskn(t)
            }, o.prototype.iaddn = function (t) {
                return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
            }, o.prototype._iaddn = function (t) {
                this.words[0] += t;
                for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1), this
            }, o.prototype.isubn = function (t) {
                if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                return this.strip()
            }, o.prototype.addn = function (t) {
                return this.clone().iaddn(t)
            }, o.prototype.subn = function (t) {
                return this.clone().isubn(t)
            }, o.prototype.iabs = function () {
                return this.negative = 0, this
            }, o.prototype.abs = function () {
                return this.clone().iabs()
            }, o.prototype._ishlnsubmul = function (t, e, n) {
                var i, o, a = t.length + n;
                this._expand(a);
                var s = 0;
                for (i = 0; i < t.length; i++) {
                    o = (0 | this.words[i + n]) + s;
                    var c = (0 | t.words[i]) * e;
                    s = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + n] = 67108863 & o
                }
                for (; i < this.length - n; i++) s = (o = (0 | this.words[i + n]) + s) >> 26, this.words[i + n] = 67108863 & o;
                if (0 === s) return this.strip();
                for (r(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                return this.negative = 1, this.strip()
            }, o.prototype._wordDiv = function (t, e) {
                var n = (this.length, t.length), r = this.clone(), i = t, a = 0 | i.words[i.length - 1];
                0 != (n = 26 - this._countBits(a)) && (i = i.ushln(n), r.iushln(n), a = 0 | i.words[i.length - 1]);
                var s, c = r.length - i.length;
                if ("mod" !== e) {
                    (s = new o(null)).length = c + 1, s.words = new Array(s.length);
                    for (var f = 0; f < s.length; f++) s.words[f] = 0
                }
                var u = r.clone()._ishlnsubmul(i, 1, c);
                0 === u.negative && (r = u, s && (s.words[c] = 1));
                for (var l = c - 1; l >= 0; l--) {
                    var h = 67108864 * (0 | r.words[i.length + l]) + (0 | r.words[i.length + l - 1]);
                    for (h = Math.min(h / a | 0, 67108863), r._ishlnsubmul(i, h, l); 0 !== r.negative;) h--, r.negative = 0, r._ishlnsubmul(i, 1, l), r.isZero() || (r.negative ^= 1);
                    s && (s.words[l] = h)
                }
                return s && s.strip(), r.strip(), "div" !== e && 0 !== n && r.iushrn(n), {div: s || null, mod: r}
            }, o.prototype.divmod = function (t, e, n) {
                return r(!t.isZero()), this.isZero() ? {
                    div: new o(0),
                    mod: new o(0)
                } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (i = s.div.neg()), "div" !== e && (a = s.mod.neg(), n && 0 !== a.negative && a.iadd(t)), {
                    div: i,
                    mod: a
                }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (i = s.div.neg()), {
                    div: i,
                    mod: s.mod
                }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), n && 0 !== a.negative && a.isub(t)), {
                    div: s.div,
                    mod: a
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new o(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {div: this.divn(t.words[0]), mod: null} : "mod" === e ? {
                    div: null,
                    mod: new o(this.modn(t.words[0]))
                } : {div: this.divn(t.words[0]), mod: new o(this.modn(t.words[0]))} : this._wordDiv(t, e);
                var i, a, s
            }, o.prototype.div = function (t) {
                return this.divmod(t, "div", !1).div
            }, o.prototype.mod = function (t) {
                return this.divmod(t, "mod", !1).mod
            }, o.prototype.umod = function (t) {
                return this.divmod(t, "mod", !0).mod
            }, o.prototype.divRound = function (t) {
                var e = this.divmod(t);
                if (e.mod.isZero()) return e.div;
                var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod, r = t.ushrn(1), i = t.andln(1), o = n.cmp(r);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }, o.prototype.modn = function (t) {
                r(t <= 67108863);
                for (var e = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (e * n + (0 | this.words[i])) % t;
                return n
            }, o.prototype.idivn = function (t) {
                r(t <= 67108863);
                for (var e = 0, n = this.length - 1; n >= 0; n--) {
                    var i = (0 | this.words[n]) + 67108864 * e;
                    this.words[n] = i / t | 0, e = i % t
                }
                return this.strip()
            }, o.prototype.divn = function (t) {
                return this.clone().idivn(t)
            }, o.prototype.egcd = function (t) {
                r(0 === t.negative), r(!t.isZero());
                var e = this, n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var i = new o(1), a = new o(0), s = new o(0), c = new o(1), f = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++f;
                for (var u = n.clone(), l = e.clone(); !e.isZero();) {
                    for (var h = 0, d = 1; 0 == (e.words[0] & d) && h < 26; ++h, d <<= 1) ;
                    if (h > 0) for (e.iushrn(h); h-- > 0;) (i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(l)), i.iushrn(1), a.iushrn(1);
                    for (var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p, b <<= 1) ;
                    if (p > 0) for (n.iushrn(p); p-- > 0;) (s.isOdd() || c.isOdd()) && (s.iadd(u), c.isub(l)), s.iushrn(1), c.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n), i.isub(s), a.isub(c)) : (n.isub(e), s.isub(i), c.isub(a))
                }
                return {a: s, b: c, gcd: n.iushln(f)}
            }, o.prototype._invmp = function (t) {
                r(0 === t.negative), r(!t.isZero());
                var e = this, n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var i, a = new o(1), s = new o(0), c = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                    for (var f = 0, u = 1; 0 == (e.words[0] & u) && f < 26; ++f, u <<= 1) ;
                    if (f > 0) for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
                    for (var l = 0, h = 1; 0 == (n.words[0] & h) && l < 26; ++l, h <<= 1) ;
                    if (l > 0) for (n.iushrn(l); l-- > 0;) s.isOdd() && s.iadd(c), s.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n), a.isub(s)) : (n.isub(e), s.isub(a))
                }
                return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i
            }, o.prototype.gcd = function (t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var e = this.clone(), n = t.clone();
                e.negative = 0, n.negative = 0;
                for (var r = 0; e.isEven() && n.isEven(); r++) e.iushrn(1), n.iushrn(1);
                for (; ;) {
                    for (; e.isEven();) e.iushrn(1);
                    for (; n.isEven();) n.iushrn(1);
                    var i = e.cmp(n);
                    if (i < 0) {
                        var o = e;
                        e = n, n = o
                    } else if (0 === i || 0 === n.cmpn(1)) break;
                    e.isub(n)
                }
                return n.iushln(r)
            }, o.prototype.invm = function (t) {
                return this.egcd(t).a.umod(t)
            }, o.prototype.isEven = function () {
                return 0 == (1 & this.words[0])
            }, o.prototype.isOdd = function () {
                return 1 == (1 & this.words[0])
            }, o.prototype.andln = function (t) {
                return this.words[0] & t
            }, o.prototype.bincn = function (t) {
                r("number" == typeof t);
                var e = t % 26, n = (t - e) / 26, i = 1 << e;
                if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o, this.length++), this
            }, o.prototype.isZero = function () {
                return 1 === this.length && 0 === this.words[0]
            }, o.prototype.cmpn = function (t) {
                var e, n = t < 0;
                if (0 !== this.negative && !n) return -1;
                if (0 === this.negative && n) return 1;
                if (this.strip(), this.length > 1) e = 1; else {
                    n && (t = -t), r(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -e : e
            }, o.prototype.cmp = function (t) {
                if (0 !== this.negative && 0 === t.negative) return -1;
                if (0 === this.negative && 0 !== t.negative) return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e
            }, o.prototype.ucmp = function (t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for (var e = 0, n = this.length - 1; n >= 0; n--) {
                    var r = 0 | this.words[n], i = 0 | t.words[n];
                    if (r !== i) {
                        r < i ? e = -1 : r > i && (e = 1);
                        break
                    }
                }
                return e
            }, o.prototype.gtn = function (t) {
                return 1 === this.cmpn(t)
            }, o.prototype.gt = function (t) {
                return 1 === this.cmp(t)
            }, o.prototype.gten = function (t) {
                return this.cmpn(t) >= 0
            }, o.prototype.gte = function (t) {
                return this.cmp(t) >= 0
            }, o.prototype.ltn = function (t) {
                return -1 === this.cmpn(t)
            }, o.prototype.lt = function (t) {
                return -1 === this.cmp(t)
            }, o.prototype.lten = function (t) {
                return this.cmpn(t) <= 0
            }, o.prototype.lte = function (t) {
                return this.cmp(t) <= 0
            }, o.prototype.eqn = function (t) {
                return 0 === this.cmpn(t)
            }, o.prototype.eq = function (t) {
                return 0 === this.cmp(t)
            }, o.red = function (t) {
                return new _(t)
            }, o.prototype.toRed = function (t) {
                return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
            }, o.prototype.fromRed = function () {
                return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, o.prototype._forceRed = function (t) {
                return this.red = t, this
            }, o.prototype.forceRed = function (t) {
                return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
            }, o.prototype.redAdd = function (t) {
                return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
            }, o.prototype.redIAdd = function (t) {
                return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
            }, o.prototype.redSub = function (t) {
                return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
            }, o.prototype.redISub = function (t) {
                return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
            }, o.prototype.redShl = function (t) {
                return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
            }, o.prototype.redMul = function (t) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
            }, o.prototype.redIMul = function (t) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            }, o.prototype.redSqr = function () {
                return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, o.prototype.redISqr = function () {
                return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, o.prototype.redSqrt = function () {
                return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, o.prototype.redInvm = function () {
                return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, o.prototype.redNeg = function () {
                return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, o.prototype.redPow = function (t) {
                return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
            };
            var g = {k256: null, p224: null, p192: null, p25519: null};

            function y(t, e) {
                this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }

            function m() {
                y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }

            function v() {
                y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }

            function A() {
                y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }

            function w() {
                y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }

            function _(t) {
                if ("string" == typeof t) {
                    var e = o._prime(t);
                    this.m = e.p, this.prime = e
                } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
            }

            function E(t) {
                _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }

            y.prototype._tmp = function () {
                var t = new o(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t
            }, y.prototype.ireduce = function (t) {
                var e, n = t;
                do {
                    this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                } while (e > this.n);
                var r = e < this.n ? -1 : n.ucmp(this.p);
                return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n
            }, y.prototype.split = function (t, e) {
                t.iushrn(this.n, 0, e)
            }, y.prototype.imulK = function (t) {
                return t.imul(this.k)
            }, i(m, y), m.prototype.split = function (t, e) {
                for (var n = Math.min(t.length, 9), r = 0; r < n; r++) e.words[r] = t.words[r];
                if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                var i = t.words[9];
                for (e.words[e.length++] = 4194303 & i, r = 10; r < t.length; r++) {
                    var o = 0 | t.words[r];
                    t.words[r - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                }
                i >>>= 22, t.words[r - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
            }, m.prototype.imulK = function (t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for (var e = 0, n = 0; n < t.length; n++) {
                    var r = 0 | t.words[n];
                    e += 977 * r, t.words[n] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
            }, i(v, y), i(A, y), i(w, y), w.prototype.imulK = function (t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var r = 19 * (0 | t.words[n]) + e, i = 67108863 & r;
                    r >>>= 26, t.words[n] = i, e = r
                }
                return 0 !== e && (t.words[t.length++] = e), t
            }, o._prime = function (t) {
                if (g[t]) return g[t];
                var e;
                if ("k256" === t) e = new m; else if ("p224" === t) e = new v; else if ("p192" === t) e = new A; else {
                    if ("p25519" !== t) throw new Error("Unknown prime " + t);
                    e = new w
                }
                return g[t] = e, e
            }, _.prototype._verify1 = function (t) {
                r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
            }, _.prototype._verify2 = function (t, e) {
                r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
            }, _.prototype.imod = function (t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
            }, _.prototype.neg = function (t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }, _.prototype.add = function (t, e) {
                this._verify2(t, e);
                var n = t.add(e);
                return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
            }, _.prototype.iadd = function (t, e) {
                this._verify2(t, e);
                var n = t.iadd(e);
                return n.cmp(this.m) >= 0 && n.isub(this.m), n
            }, _.prototype.sub = function (t, e) {
                this._verify2(t, e);
                var n = t.sub(e);
                return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this)
            }, _.prototype.isub = function (t, e) {
                this._verify2(t, e);
                var n = t.isub(e);
                return n.cmpn(0) < 0 && n.iadd(this.m), n
            }, _.prototype.shl = function (t, e) {
                return this._verify1(t), this.imod(t.ushln(e))
            }, _.prototype.imul = function (t, e) {
                return this._verify2(t, e), this.imod(t.imul(e))
            }, _.prototype.mul = function (t, e) {
                return this._verify2(t, e), this.imod(t.mul(e))
            }, _.prototype.isqr = function (t) {
                return this.imul(t, t.clone())
            }, _.prototype.sqr = function (t) {
                return this.mul(t, t)
            }, _.prototype.sqrt = function (t) {
                if (t.isZero()) return t.clone();
                var e = this.m.andln(3);
                if (r(e % 2 == 1), 3 === e) {
                    var n = this.m.add(new o(1)).iushrn(2);
                    return this.pow(t, n)
                }
                for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                r(!i.isZero());
                var s = new o(1).toRed(this), c = s.redNeg(), f = this.m.subn(1).iushrn(1), u = this.m.bitLength();
                for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, f).cmp(c);) u.redIAdd(c);
                for (var l = this.pow(u, i), h = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = a; 0 !== d.cmp(s);) {
                    for (var b = d, g = 0; 0 !== b.cmp(s); g++) b = b.redSqr();
                    r(g < p);
                    var y = this.pow(l, new o(1).iushln(p - g - 1));
                    h = h.redMul(y), l = y.redSqr(), d = d.redMul(l), p = g
                }
                return h
            }, _.prototype.invm = function (t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
            }, _.prototype.pow = function (t, e) {
                if (e.isZero()) return new o(1).toRed(this);
                if (0 === e.cmpn(1)) return t.clone();
                var n = new Array(16);
                n[0] = new o(1).toRed(this), n[1] = t;
                for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
                var i = n[0], a = 0, s = 0, c = e.bitLength() % 26;
                for (0 === c && (c = 26), r = e.length - 1; r >= 0; r--) {
                    for (var f = e.words[r], u = c - 1; u >= 0; u--) {
                        var l = f >> u & 1;
                        i !== n[0] && (i = this.sqr(i)), 0 !== l || 0 !== a ? (a <<= 1, a |= l, (4 == ++s || 0 === r && 0 === u) && (i = this.mul(i, n[a]), s = 0, a = 0)) : s = 0
                    }
                    c = 26
                }
                return i
            }, _.prototype.convertTo = function (t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e
            }, _.prototype.convertFrom = function (t) {
                var e = t.clone();
                return e.red = null, e
            }, o.mont = function (t) {
                return new E(t)
            }, i(E, _), E.prototype.convertTo = function (t) {
                return this.imod(t.ushln(this.shift))
            }, E.prototype.convertFrom = function (t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null, e
            }, E.prototype.imul = function (t, e) {
                if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                var n = t.imul(e), r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    i = n.isub(r).iushrn(this.shift), o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
            }, E.prototype.mul = function (t, e) {
                if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                var n = t.mul(e), r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    i = n.isub(r).iushrn(this.shift), a = i;
                return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
            }, E.prototype.invm = function (t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(void 0 === t || t, this)
    }).call(this, n(138)(t))
}, function (t, e, n) {
    "use strict";
    var r = e;
    r.version = n(131).version, r.utils = n(130), r.rand = n(61), r.curve = n(29), r.curves = n(125), r.ec = n(116), r.eddsa = n(112)
}, , function (t, e) {
    function n(t, e) {
        if (!t) throw new Error(e || "Assertion failed")
    }

    t.exports = n, n.equal = function (t, e, n) {
        if (t != e) throw new Error(n || "Assertion failed: " + t + " != " + e)
    }
}, , function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    "use strict";
    var r = n(6), i = n(124);

    function o(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
    }

    function a(t) {
        return 1 === t.length ? "0" + t : t
    }

    function s(t) {
        return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
    }

    e.inherits = i, e.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var n = [];
        if ("string" == typeof t) if (e) {
            if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), r = 0; r < t.length; r += 2) n.push(parseInt(t[r] + t[r + 1], 16))
        } else for (var r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r), o = i >> 8, a = 255 & i;
            o ? n.push(o, a) : n.push(a)
        } else for (r = 0; r < t.length; r++) n[r] = 0 | t[r];
        return n
    }, e.toHex = function (t) {
        for (var e = "", n = 0; n < t.length; n++) e += a(t[n].toString(16));
        return e
    }, e.htonl = o, e.toHex32 = function (t, e) {
        for (var n = "", r = 0; r < t.length; r++) {
            var i = t[r];
            "little" === e && (i = o(i)), n += s(i.toString(16))
        }
        return n
    }, e.zero2 = a, e.zero8 = s, e.join32 = function (t, e, n, i) {
        var o = n - e;
        r(o % 4 == 0);
        for (var a = new Array(o / 4), s = 0, c = e; s < a.length; s++, c += 4) {
            var f;
            f = "big" === i ? t[c] << 24 | t[c + 1] << 16 | t[c + 2] << 8 | t[c + 3] : t[c + 3] << 24 | t[c + 2] << 16 | t[c + 1] << 8 | t[c], a[s] = f >>> 0
        }
        return a
    }, e.split32 = function (t, e) {
        for (var n = new Array(4 * t.length), r = 0, i = 0; r < t.length; r++, i += 4) {
            var o = t[r];
            "big" === e ? (n[i] = o >>> 24, n[i + 1] = o >>> 16 & 255, n[i + 2] = o >>> 8 & 255, n[i + 3] = 255 & o) : (n[i + 3] = o >>> 24, n[i + 2] = o >>> 16 & 255, n[i + 1] = o >>> 8 & 255, n[i] = 255 & o)
        }
        return n
    }, e.rotr32 = function (t, e) {
        return t >>> e | t << 32 - e
    }, e.rotl32 = function (t, e) {
        return t << e | t >>> 32 - e
    }, e.sum32 = function (t, e) {
        return t + e >>> 0
    }, e.sum32_3 = function (t, e, n) {
        return t + e + n >>> 0
    }, e.sum32_4 = function (t, e, n, r) {
        return t + e + n + r >>> 0
    }, e.sum32_5 = function (t, e, n, r, i) {
        return t + e + n + r + i >>> 0
    }, e.sum64 = function (t, e, n, r) {
        var i = t[e], o = r + t[e + 1] >>> 0, a = (o < r ? 1 : 0) + n + i;
        t[e] = a >>> 0, t[e + 1] = o
    }, e.sum64_hi = function (t, e, n, r) {
        return (e + r >>> 0 < e ? 1 : 0) + t + n >>> 0
    }, e.sum64_lo = function (t, e, n, r) {
        return e + r >>> 0
    }, e.sum64_4_hi = function (t, e, n, r, i, o, a, s) {
        var c = 0, f = e;
        return c += (f = f + r >>> 0) < e ? 1 : 0, c += (f = f + o >>> 0) < o ? 1 : 0, t + n + i + a + (c += (f = f + s >>> 0) < s ? 1 : 0) >>> 0
    }, e.sum64_4_lo = function (t, e, n, r, i, o, a, s) {
        return e + r + o + s >>> 0
    }, e.sum64_5_hi = function (t, e, n, r, i, o, a, s, c, f) {
        var u = 0, l = e;
        return u += (l = l + r >>> 0) < e ? 1 : 0, u += (l = l + o >>> 0) < o ? 1 : 0, u += (l = l + s >>> 0) < s ? 1 : 0, t + n + i + a + c + (u += (l = l + f >>> 0) < f ? 1 : 0) >>> 0
    }, e.sum64_5_lo = function (t, e, n, r, i, o, a, s, c, f) {
        return e + r + o + s + f >>> 0
    }, e.rotr64_hi = function (t, e, n) {
        return (e << 32 - n | t >>> n) >>> 0
    }, e.rotr64_lo = function (t, e, n) {
        return (t << 32 - n | e >>> n) >>> 0
    }, e.shr64_hi = function (t, e, n) {
        return t >>> n
    }, e.shr64_lo = function (t, e, n) {
        return (t << 32 - n | e >>> n) >>> 0
    }
}, function (t, e, n) {
    var r = n(1).Buffer, i = n(33).Transform, o = n(42).StringDecoder;

    function a(t) {
        i.call(this), this.hashMode = "string" == typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }

    n(0)(a, i), a.prototype.update = function (t, e, n) {
        "string" == typeof t && (t = r.from(t, e));
        var i = this._update(t);
        return this.hashMode ? this : (n && (i = this._toString(i, n)), i)
    }, a.prototype.setAutoPadding = function () {
    }, a.prototype.getAuthTag = function () {
        throw new Error("trying to get auth tag in unsupported state")
    }, a.prototype.setAuthTag = function () {
        throw new Error("trying to set auth tag in unsupported state")
    }, a.prototype.setAAD = function () {
        throw new Error("trying to set aad in unsupported state")
    }, a.prototype._transform = function (t, e, n) {
        var r;
        try {
            this.hashMode ? this._update(t) : this.push(this._update(t))
        } catch (t) {
            r = t
        } finally {
            n(r)
        }
    }, a.prototype._flush = function (t) {
        var e;
        try {
            this.push(this.__final())
        } catch (t) {
            e = t
        }
        t(e)
    }, a.prototype._finalOrDigest = function (t) {
        var e = this.__final() || r.alloc(0);
        return t && (e = this._toString(e, t, !0)), e
    }, a.prototype._toString = function (t, e, n) {
        if (this._decoder || (this._decoder = new o(e), this._encoding = e), this._encoding !== e) throw new Error("can't switch encodings");
        var r = this._decoder.write(t);
        return n && (r += this._decoder.end()), r
    }, t.exports = a
}, function (t, e) {
    var n, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, f = [], u = !1, l = -1;

    function h() {
        u && c && (u = !1, c.length ? f = c.concat(f) : l = -1, f.length && d())
    }

    function d() {
        if (!u) {
            var t = s(h);
            u = !0;
            for (var e = f.length; e;) {
                for (c = f, f = []; ++l < e;) c && c[l].run();
                l = -1, e = f.length
            }
            c = null, u = !1, function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function b() {
    }

    i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        f.push(new p(t, e)), 1 !== f.length || u || s(d)
    }, p.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function (t) {
        return []
    }, i.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(32), i = Object.keys || function (t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
    };
    t.exports = l;
    var o = n(25);
    o.inherits = n(24);
    var a = n(81), s = n(43);
    o.inherits(l, a);
    for (var c = i(s.prototype), f = 0; f < c.length; f++) {
        var u = c[f];
        l.prototype[u] || (l.prototype[u] = s.prototype[u])
    }

    function l(t) {
        if (!(this instanceof l)) return new l(t);
        a.call(this, t), s.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h)
    }

    function h() {
        this.allowHalfOpen || this._writableState.ended || r.nextTick(d, this)
    }

    function d(t) {
        t.end()
    }

    Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1, get: function () {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(l.prototype, "destroyed", {
        get: function () {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
        }, set: function (t) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
        }
    }), l.prototype._destroy = function (t, e) {
        this.push(null), this.end(), r.nextTick(e, t)
    }
}, function (t, e, n) {
    var r = n(1).Buffer;

    function i(t, e) {
        this._block = r.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
    }

    i.prototype.update = function (t, e) {
        "string" == typeof t && (e = e || "utf8", t = r.from(t, e));
        for (var n = this._block, i = this._blockSize, o = t.length, a = this._len, s = 0; s < o;) {
            for (var c = a % i, f = Math.min(o - s, i - c), u = 0; u < f; u++) n[c + u] = t[s + u];
            s += f, (a += f) % i == 0 && this._update(n)
        }
        return this._len += o, this
    }, i.prototype.digest = function (t) {
        var e = this._len % this._blockSize;
        this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var n = 8 * this._len;
        if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4); else {
            var r = (4294967295 & n) >>> 0, i = (n - r) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
        }
        this._update(this._block);
        var o = this._hash();
        return t ? o.toString(t) : o
    }, i.prototype._update = function () {
        throw new Error("_update must be implemented by subclass")
    }, t.exports = i
}, function (t, e, n) {
    "use strict";
    (function (e, r) {
        var i = n(1).Buffer, o = e.crypto || e.msCrypto;
        o && o.getRandomValues ? t.exports = function (t, n) {
            if (t > 65536) throw new Error("requested too many random bytes");
            var a = new e.Uint8Array(t);
            t > 0 && o.getRandomValues(a);
            var s = i.from(a.buffer);
            return "function" == typeof n ? r.nextTick(function () {
                n(null, s)
            }) : s
        } : t.exports = function () {
            throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
        }
    }).call(this, n(8), n(11))
}, function (t, e) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(t) {
        return "function" == typeof t
    }

    function i(t) {
        return "object" == typeof t && null !== t
    }

    function o(t) {
        return void 0 === t
    }

    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
        if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
        return this._maxListeners = t, this
    }, n.prototype.emit = function (t) {
        var e, n, a, s, c, f;
        if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1]) instanceof Error) throw e;
            var u = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw u.context = e, u
        }
        if (o(n = this._events[t])) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (i(n)) for (s = Array.prototype.slice.call(arguments, 1), a = (f = n.slice()).length, c = 0; c < a; c++) f[c].apply(this, s);
        return !0
    }, n.prototype.addListener = function (t, e) {
        var a;
        if (!r(e)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned && (a = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[t].length > a && (this._events[t].warned = !0, console.trace), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
        if (!r(e)) throw TypeError("listener must be a function");
        var n = !1;

        function i() {
            this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
        }

        return i.listener = e, this.on(t, i), this
    }, n.prototype.removeListener = function (t, e) {
        var n, o, a, s;
        if (!r(e)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[t]) return this;
        if (a = (n = this._events[t]).length, o = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (i(n)) {
            for (s = a; s-- > 0;) if (n[s] === e || n[s].listener && n[s].listener === e) {
                o = s;
                break
            }
            if (o < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }, n.prototype.removeAllListeners = function (t) {
        var e, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
        if (0 === arguments.length) {
            for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (r(n = this._events[t])) this.removeListener(t, n); else if (n) for (; n.length;) this.removeListener(t, n[n.length - 1]);
        return delete this._events[t], this
    }, n.prototype.listeners = function (t) {
        return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, n.prototype.listenerCount = function (t) {
        if (this._events) {
            var e = this._events[t];
            if (r(e)) return 1;
            if (e) return e.length
        }
        return 0
    }, n.listenerCount = function (t, e) {
        return t.listenerCount(e)
    }
}, function (t, e, n) {
    "use strict";

    function r() {
        return window.__u_id_++, "_u_r_id__" + window.__u_id_
    }

    function i(t) {
        if (t && 401 === t.status) bootbox.alert("权限不足，不能进行此操作."); else if (t && t.responseText) {
            var e = t.responseText, n = JSON.parse(e);
            bootbox.dialog({
                title: "服务端错误",
                message: "<span style='color: red'>" + n.errorMsg + "</span>",
                buttons: [{
                    label: "查看错误堆栈", callback: function () {
                        var t = window.open("error-stack.html", "_blank");
                        $(t).load(function () {
                            var t = $(this.document.body);
                            t.css({"font-size": "13px"}), t.empty(), t.append(n.stack)
                        })
                    }
                }]
            })
        } else bootbox.alert("<span style='color: red'>服务端出错</span>")
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.generateId = r, e.pathId = function (t) {
        if (_fullpath_map.has(t)) return _fullpath_map.get(t);
        var e = r();
        return _fullpath_map.set(t, e), e
    }, e.copyCellData = function (t, e) {
        $.ajax({url: window._server + "/common/parseCellData", type: "POST", data: {type: t, xml: e}})
    }, e.pasteCellData = function (t, e) {
        $.ajax({
            url: window._server + "/common/loadCellData", type: "POST", data: {type: t}, success: function (t) {
                t ? e(t) : bootbox.alert("当前没有数据可供粘贴！")
            }, error: function (t) {
                i(t)
            }
        })
    }, e.handleError = i, e.nextIFrameId = function () {
        return window.iframe_id_++, "_iframe" + window.iframe_id_
    }, e.getParameter = function (t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), n = window.location.search.substr(1).match(e);
        return null != n ? n[2] : null
    }, e.ajaxSave = function (t, e, n) {
        $.ajax({
            type: "POST", url: t, data: e, success: function (t) {
                n(t)
            }, error: function (t) {
                i(t)
            }
        })
    }, e.formatDate = function (t, e) {
        if ("number" == typeof t && (t = new Date(t)), "string" == typeof t) return t;
        var n = {
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            "H+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds()
        };
        for (var r in/(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), n) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
        return e
    }, e.escapeXml = function (t) {
        return t.replace(/[<>&"]/g, function (t) {
            return {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;"}[t]
        })
    }, window.iframe_id_ = 1, window.__u_id_ = 0, window._fullpath_map = new Map
}, function (t, e) {
    var n = {}, r = function (t) {
        var e;
        return function () {
            return void 0 === e && (e = t.apply(this, arguments)), e
        }
    }, i = r(function () {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    }), o = r(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), a = null, s = 0, c = [];

    function f(t, e) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r], o = n[i.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) o.parts.push(p(i.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < i.parts.length; a++) s.push(p(i.parts[a], e));
                n[i.id] = {id: i.id, refs: 1, parts: s}
            }
        }
    }

    function u(t) {
        for (var e = [], n = {}, r = 0; r < t.length; r++) {
            var i = t[r], o = i[0], a = {css: i[1], media: i[2], sourceMap: i[3]};
            n[o] ? n[o].parts.push(a) : e.push(n[o] = {id: o, parts: [a]})
        }
        return e
    }

    function l(t, e) {
        var n = o(), r = c[c.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), c.push(e); else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(e)
        }
    }

    function h(t) {
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
    }

    function d(t) {
        var e = document.createElement("style");
        return e.type = "text/css", l(t, e), e
    }

    function p(t, e) {
        var n, r, i;
        if (e.singleton) {
            var o = s++;
            n = a || (a = d(e)), r = y.bind(null, n, o, !1), i = y.bind(null, n, o, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return e.rel = "stylesheet", l(t, e), e
        }(e), r = function (t, e) {
            var n = e.css, r = e.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var i = new Blob([n], {type: "text/css"}), o = t.href;
            t.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o)
        }.bind(null, n), i = function () {
            h(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = d(e), r = function (t, e) {
            var n = e.css, r = e.media;
            if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function () {
            h(n)
        });
        return r(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                r(t = e)
            } else i()
        }
    }

    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        void 0 === (e = e || {}).singleton && (e.singleton = i()), void 0 === e.insertAt && (e.insertAt = "bottom");
        var r = u(t);
        return f(r, e), function (t) {
            for (var i = [], o = 0; o < r.length; o++) {
                var a = r[o];
                (s = n[a.id]).refs--, i.push(s)
            }
            for (t && f(u(t), e), o = 0; o < i.length; o++) {
                var s;
                if (0 === (s = i[o]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete n[s.id]
                }
            }
        }
    };
    var b, g = (b = [], function (t, e) {
        return b[t] = e, b.filter(Boolean).join("\n")
    });

    function y(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = g(e, i); else {
            var o = document.createTextNode(i), a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var n = function (t, e) {
                    var n, r = t[1] || "", i = t[3];
                    if (!i) return r;
                    if (e && "function" == typeof btoa) {
                        var o = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                            a = i.sources.map(function (t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */"
                            });
                        return [r].concat(a).concat([o]).join("\n")
                    }
                    return [r].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.eventEmitter = e.HIDE_CONTENT_REFACTOR_DIALOG = e.OPEN_CONTENT_REFACTOR_DIALOG = e.HIDE_CATEGORY_REFACTOR_DIALOG = e.OPEN_CATEGORY_REFACTOR_DIALOG = e.HIDE_VERSION_SELECT_DIALOG = e.OPEN_VERSION_SELECT_DIALOG = e.HIDE_KNOWLEDGE_TREE_DIALOG = e.OPEN_KNOWLEDGE_TREE_DIALOG = e.TREE_DIR_NODE_CLICK = e.TREE_NODE_CLICK = e.HIDE_LOADING = e.SHOW_LOADING = void 0;
    var r, i = (r = n(15)) && r.__esModule ? r : {default: r};
    e.SHOW_LOADING = "show_loading", e.HIDE_LOADING = "hide_loading", e.TREE_NODE_CLICK = "tree_node_click", e.TREE_DIR_NODE_CLICK = "tree_dir_node_click", e.OPEN_KNOWLEDGE_TREE_DIALOG = "open_knowledge_tree_dialog", e.HIDE_KNOWLEDGE_TREE_DIALOG = "hide_knowledge_tree_dialog", e.OPEN_VERSION_SELECT_DIALOG = "open_version_select_dialog", e.HIDE_VERSION_SELECT_DIALOG = "hide_version_select_dialog", e.OPEN_CATEGORY_REFACTOR_DIALOG = "open_category_refactor_dialog", e.HIDE_CATEGORY_REFACTOR_DIALOG = "hide_category_refactor_dialog", e.OPEN_CONTENT_REFACTOR_DIALOG = "open_content_refactor_dialog", e.HIDE_CONTENT_REFACTOR_DIALOG = "hide_content_refactor_dialog", e.eventEmitter = new i.default.EventEmitter
}, function (t, e, n) {
    var r = e;
    r.Reporter = n(105).Reporter, r.DecoderBuffer = n(56).DecoderBuffer, r.EncoderBuffer = n(56).EncoderBuffer, r.Node = n(104)
}, function (t, e, n) {
    var r = e;
    r.bignum = n(3), r.define = n(108).define, r.base = n(20), r.constants = n(55), r.decoders = n(102), r.encoders = n(100)
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(6);

    function o() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
    }

    e.BlockHash = o, o.prototype.update = function (t, e) {
        if (t = r.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
            var n = (t = this.pending).length % this._delta8;
            this.pending = t.slice(t.length - n, t.length), 0 === this.pending.length && (this.pending = null), t = r.join32(t, 0, t.length - n, this.endian);
            for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
        }
        return this
    }, o.prototype.digest = function (t) {
        return this.update(this._pad()), i(null === this.pending), this._digest(t)
    }, o.prototype._pad = function () {
        var t = this.pendingTotal, e = this._delta8, n = e - (t + this.padLength) % e,
            r = new Array(n + this.padLength);
        r[0] = 128;
        for (var i = 1; i < n; i++) r[i] = 0;
        if (t <<= 3, "big" === this.endian) {
            for (var o = 8; o < this.padLength; o++) r[i++] = 0;
            r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = t >>> 24 & 255, r[i++] = t >>> 16 & 255, r[i++] = t >>> 8 & 255, r[i++] = 255 & t
        } else for (r[i++] = 255 & t, r[i++] = t >>> 8 & 255, r[i++] = t >>> 16 & 255, r[i++] = t >>> 24 & 255, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0, o = 8; o < this.padLength; o++) r[i++] = 0;
        return r
    }
}, function (t, e, n) {
    (function (e) {
        t.exports = function (t, n) {
            for (var r = Math.min(t.length, n.length), i = new e(r), o = 0; o < r; ++o) i[o] = t[o] ^ n[o];
            return i
        }
    }).call(this, n(2).Buffer)
}, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : t.exports = function (t, e) {
        t.super_ = e;
        var n = function () {
        };
        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
}, function (t, e, n) {
    (function (t) {
        function n(t) {
            return Object.prototype.toString.call(t)
        }

        e.isArray = function (t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t)
        }, e.isBoolean = function (t) {
            return "boolean" == typeof t
        }, e.isNull = function (t) {
            return null === t
        }, e.isNullOrUndefined = function (t) {
            return null == t
        }, e.isNumber = function (t) {
            return "number" == typeof t
        }, e.isString = function (t) {
            return "string" == typeof t
        }, e.isSymbol = function (t) {
            return "symbol" == typeof t
        }, e.isUndefined = function (t) {
            return void 0 === t
        }, e.isRegExp = function (t) {
            return "[object RegExp]" === n(t)
        }, e.isObject = function (t) {
            return "object" == typeof t && null !== t
        }, e.isDate = function (t) {
            return "[object Date]" === n(t)
        }, e.isError = function (t) {
            return "[object Error]" === n(t) || t instanceof Error
        }, e.isFunction = function (t) {
            return "function" == typeof t
        }, e.isPrimitive = function (t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }, e.isBuffer = t.isBuffer
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(45), o = n(41), a = n(40), s = n(10);

    function c(t) {
        s.call(this, "digest"), this._hash = t
    }

    r(c, s), c.prototype._update = function (t) {
        this._hash.update(t)
    }, c.prototype._final = function () {
        return this._hash.digest()
    }, t.exports = function (t) {
        return "md5" === (t = t.toLowerCase()) ? new i : "rmd160" === t || "ripemd160" === t ? new o : new c(a(t))
    }
}, , function (t, e, n) {
    (function (e) {
        var r = n(109), i = n(97), o = n(96), a = n(38), s = n(72);

        function c(t) {
            var n;
            "object" != typeof t || e.isBuffer(t) || (n = t.passphrase, t = t.key), "string" == typeof t && (t = new e(t));
            var c, f, u = o(t, n), l = u.tag, h = u.data;
            switch (l) {
                case"CERTIFICATE":
                    f = r.certificate.decode(h, "der").tbsCertificate.subjectPublicKeyInfo;
                case"PUBLIC KEY":
                    switch (f || (f = r.PublicKey.decode(h, "der")), c = f.algorithm.algorithm.join(".")) {
                        case"1.2.840.113549.1.1.1":
                            return r.RSAPublicKey.decode(f.subjectPublicKey.data, "der");
                        case"1.2.840.10045.2.1":
                            return f.subjectPrivateKey = f.subjectPublicKey, {type: "ec", data: f};
                        case"1.2.840.10040.4.1":
                            return f.algorithm.params.pub_key = r.DSAparam.decode(f.subjectPublicKey.data, "der"), {
                                type: "dsa",
                                data: f.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + c)
                    }
                    throw new Error("unknown key type " + l);
                case"ENCRYPTED PRIVATE KEY":
                    h = function (t, n) {
                        var r = t.algorithm.decrypt.kde.kdeparams.salt,
                            o = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                            c = i[t.algorithm.decrypt.cipher.algo.join(".")], f = t.algorithm.decrypt.cipher.iv,
                            u = t.subjectPrivateKey, l = parseInt(c.split("-")[1], 10) / 8,
                            h = s.pbkdf2Sync(n, r, o, l), d = a.createDecipheriv(c, h, f), p = [];
                        return p.push(d.update(u)), p.push(d.final()), e.concat(p)
                    }(h = r.EncryptedPrivateKey.decode(h, "der"), n);
                case"PRIVATE KEY":
                    switch (c = (f = r.PrivateKey.decode(h, "der")).algorithm.algorithm.join(".")) {
                        case"1.2.840.113549.1.1.1":
                            return r.RSAPrivateKey.decode(f.subjectPrivateKey, "der");
                        case"1.2.840.10045.2.1":
                            return {
                                curve: f.algorithm.curve,
                                privateKey: r.ECPrivateKey.decode(f.subjectPrivateKey, "der").privateKey
                            };
                        case"1.2.840.10040.4.1":
                            return f.algorithm.params.priv_key = r.DSAparam.decode(f.subjectPrivateKey, "der"), {
                                type: "dsa",
                                params: f.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + c)
                    }
                    throw new Error("unknown key type " + l);
                case"RSA PUBLIC KEY":
                    return r.RSAPublicKey.decode(h, "der");
                case"RSA PRIVATE KEY":
                    return r.RSAPrivateKey.decode(h, "der");
                case"DSA PRIVATE KEY":
                    return {type: "dsa", params: r.DSAPrivateKey.decode(h, "der")};
                case"EC PRIVATE KEY":
                    return {curve: (h = r.ECPrivateKey.decode(h, "der")).parameters.value, privateKey: h.privateKey};
                default:
                    throw new Error("unknown key type " + l)
            }
        }

        t.exports = c, c.signature = r.signature
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    "use strict";
    var r = e;
    r.base = n(129), r.short = n(128), r.mont = n(127), r.edwards = n(126)
}, function (t, e, n) {
    var r = n(1).Buffer, i = n(45);
    t.exports = function (t, e, n, o) {
        if (r.isBuffer(t) || (t = r.from(t, "binary")), e && (r.isBuffer(e) || (e = r.from(e, "binary")), 8 !== e.length)) throw new RangeError("salt should be Buffer with 8 byte length");
        for (var a = n / 8, s = r.alloc(a), c = r.alloc(o || 0), f = r.alloc(0); a > 0 || o > 0;) {
            var u = new i;
            u.update(f), u.update(t), e && u.update(e), f = u.digest();
            var l = 0;
            if (a > 0) {
                var h = s.length - a;
                l = Math.min(a, f.length), f.copy(s, h, 0, l), a -= l
            }
            if (l < f.length && o > 0) {
                var d = c.length - o, p = Math.min(o, f.length - l);
                f.copy(c, d, l, l + p), o -= p
            }
        }
        return f.fill(0), {key: s, iv: c}
    }
}, function (t, e, n) {
    var r = n(1).Buffer;

    function i(t) {
        r.isBuffer(t) || (t = r.from(t));
        for (var e = t.length / 4 | 0, n = new Array(e), i = 0; i < e; i++) n[i] = t.readUInt32BE(4 * i);
        return n
    }

    function o(t) {
        for (; 0 < t.length; t++) t[0] = 0
    }

    function a(t, e, n, r, i) {
        for (var o, a, s, c, f = n[0], u = n[1], l = n[2], h = n[3], d = t[0] ^ e[0], p = t[1] ^ e[1], b = t[2] ^ e[2], g = t[3] ^ e[3], y = 4, m = 1; m < i; m++) o = f[d >>> 24] ^ u[p >>> 16 & 255] ^ l[b >>> 8 & 255] ^ h[255 & g] ^ e[y++], a = f[p >>> 24] ^ u[b >>> 16 & 255] ^ l[g >>> 8 & 255] ^ h[255 & d] ^ e[y++], s = f[b >>> 24] ^ u[g >>> 16 & 255] ^ l[d >>> 8 & 255] ^ h[255 & p] ^ e[y++], c = f[g >>> 24] ^ u[d >>> 16 & 255] ^ l[p >>> 8 & 255] ^ h[255 & b] ^ e[y++], d = o, p = a, b = s, g = c;
        return o = (r[d >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[b >>> 8 & 255] << 8 | r[255 & g]) ^ e[y++], a = (r[p >>> 24] << 24 | r[b >>> 16 & 255] << 16 | r[g >>> 8 & 255] << 8 | r[255 & d]) ^ e[y++], s = (r[b >>> 24] << 24 | r[g >>> 16 & 255] << 16 | r[d >>> 8 & 255] << 8 | r[255 & p]) ^ e[y++], c = (r[g >>> 24] << 24 | r[d >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & b]) ^ e[y++], [o >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0]
    }

    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], c = function () {
        for (var t = new Array(256), e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
        for (var n = [], r = [], i = [[], [], [], []], o = [[], [], [], []], a = 0, s = 0, c = 0; c < 256; ++c) {
            var f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
            f = f >>> 8 ^ 255 & f ^ 99, n[a] = f, r[f] = a;
            var u = t[a], l = t[u], h = t[l], d = 257 * t[f] ^ 16843008 * f;
            i[0][a] = d << 24 | d >>> 8, i[1][a] = d << 16 | d >>> 16, i[2][a] = d << 8 | d >>> 24, i[3][a] = d, d = 16843009 * h ^ 65537 * l ^ 257 * u ^ 16843008 * a, o[0][f] = d << 24 | d >>> 8, o[1][f] = d << 16 | d >>> 16, o[2][f] = d << 8 | d >>> 24, o[3][f] = d, 0 === a ? a = s = 1 : (a = u ^ t[t[t[h ^ u]]], s ^= t[t[s]])
        }
        return {SBOX: n, INV_SBOX: r, SUB_MIX: i, INV_SUB_MIX: o}
    }();

    function f(t) {
        this._key = i(t), this._reset()
    }

    f.blockSize = 16, f.keySize = 32, f.prototype.blockSize = f.blockSize, f.prototype.keySize = f.keySize, f.prototype._reset = function () {
        for (var t = this._key, e = t.length, n = e + 6, r = 4 * (n + 1), i = [], o = 0; o < e; o++) i[o] = t[o];
        for (o = e; o < r; o++) {
            var a = i[o - 1];
            o % e == 0 ? (a = a << 8 | a >>> 24, a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a], a ^= s[o / e | 0] << 24) : e > 6 && o % e == 4 && (a = c.SBOX[a >>> 24] << 24 | c.SBOX[a >>> 16 & 255] << 16 | c.SBOX[a >>> 8 & 255] << 8 | c.SBOX[255 & a]), i[o] = i[o - e] ^ a
        }
        for (var f = [], u = 0; u < r; u++) {
            var l = r - u, h = i[l - (u % 4 ? 0 : 4)];
            f[u] = u < 4 || l <= 4 ? h : c.INV_SUB_MIX[0][c.SBOX[h >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[h >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[h >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & h]]
        }
        this._nRounds = n, this._keySchedule = i, this._invKeySchedule = f
    }, f.prototype.encryptBlockRaw = function (t) {
        return a(t = i(t), this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds)
    }, f.prototype.encryptBlock = function (t) {
        var e = this.encryptBlockRaw(t), n = r.allocUnsafe(16);
        return n.writeUInt32BE(e[0], 0), n.writeUInt32BE(e[1], 4), n.writeUInt32BE(e[2], 8), n.writeUInt32BE(e[3], 12), n
    }, f.prototype.decryptBlock = function (t) {
        var e = (t = i(t))[1];
        t[1] = t[3], t[3] = e;
        var n = a(t, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds), o = r.allocUnsafe(16);
        return o.writeUInt32BE(n[0], 0), o.writeUInt32BE(n[3], 4), o.writeUInt32BE(n[2], 8), o.writeUInt32BE(n[1], 12), o
    }, f.prototype.scrub = function () {
        o(this._keySchedule), o(this._invKeySchedule), o(this._key)
    }, t.exports.AES = f
}, function (t, e, n) {
    "use strict";
    (function (e) {
        !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
            nextTick: function (t, n, r, i) {
                if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                var o, a, s = arguments.length;
                switch (s) {
                    case 0:
                    case 1:
                        return e.nextTick(t);
                    case 2:
                        return e.nextTick(function () {
                            t.call(null, n)
                        });
                    case 3:
                        return e.nextTick(function () {
                            t.call(null, n, r)
                        });
                    case 4:
                        return e.nextTick(function () {
                            t.call(null, n, r, i)
                        });
                    default:
                        for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                        return e.nextTick(function () {
                            t.apply(null, o)
                        })
                }
            }
        } : t.exports = e
    }).call(this, n(11))
}, function (t, e, n) {
    t.exports = i;
    var r = n(15).EventEmitter;

    function i() {
        r.call(this)
    }

    n(0)(i, r), i.Readable = n(44), i.Writable = n(168), i.Duplex = n(167), i.Transform = n(166), i.PassThrough = n(165), i.Stream = i, i.prototype.pipe = function (t, e) {
        var n = this;

        function i(e) {
            t.writable && !1 === t.write(e) && n.pause && n.pause()
        }

        function o() {
            n.readable && n.resume && n.resume()
        }

        n.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (n.on("end", s), n.on("close", c));
        var a = !1;

        function s() {
            a || (a = !0, t.end())
        }

        function c() {
            a || (a = !0, "function" == typeof t.destroy && t.destroy())
        }

        function f(t) {
            if (u(), 0 === r.listenerCount(this, "error")) throw t
        }

        function u() {
            n.removeListener("data", i), t.removeListener("drain", o), n.removeListener("end", s), n.removeListener("close", c), n.removeListener("error", f), t.removeListener("error", f), n.removeListener("end", u), n.removeListener("close", u), t.removeListener("close", u)
        }

        return n.on("error", f), t.on("error", f), n.on("end", u), n.on("close", u), t.on("close", u), t.emit("pipe", n), t
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.uniqueID = function () {
        return "_ui_" + o++
    }, e.refactorContent = function (t, e) {
        var n = window._server + "/common/refactorContent";
        $.ajax({
            url: n, type: "POST", data: t, success: function () {
                e.call(this)
            }, error: function (t) {
                401 === t.status ? bootbox.alert("权限不足，不能进行此操作.") : t && t.responseText ? bootbox.alert("<span style='color: red'>服务端错误：" + t.responseText + "</span>") : bootbox.alert("<span style='color: red'>服务端出错</span>")
            }
        })
    }, e.loadFileVersions = function (t, e) {
        var n = window._server + "/frame/loadFileVersions";
        $.ajax({
            url: n, data: {file: t}, type: "POST", success: function (t) {
                a(t), e(t)
            }, error: function () {
                alert("加载文件[" + t + "]的版本信息失败.")
            }
        })
    }, e.loadResourceTreeData = function (t, e) {
        var n = window._server + "/common/loadResourceTreeData";
        $.ajax({
            url: n, data: t, type: "POST", success: function (t) {
                a(t), e(t)
            }, error: function () {
                alert("加载资源失败.")
            }
        })
    };
    var r, i = (r = n(85)) && r.__esModule ? r : {default: r}, o = 1;

    function a(t) {
        switch (t.type) {
            case"root":
                t._icon = i.default.frameStyle.getRootIcon(), t._style = i.default.frameStyle.getRootIconStyle();
                break;
            case"folder":
                t._icon = i.default.frameStyle.getFolderIcon(), t._style = i.default.frameStyle.getFolderIconStyle();
                break;
            case"rule":
                t._icon = i.default.frameStyle.getRuleIcon(), t._style = i.default.frameStyle.getRuleIconStyle(), t.editorPath = "/ruleeditor";
                break;
            case"project":
                t._icon = i.default.frameStyle.getProjectIcon(), t._style = i.default.frameStyle.getProjectIconStyle();
                break;
            case"resource":
                t._icon = i.default.frameStyle.getResourceIcon(), t._style = i.default.frameStyle.getResourceIconStyle();
                break;
            case"resourcePackage":
                t._icon = i.default.frameStyle.getResourcePackageIcon(), t._style = i.default.frameStyle.getResourcePackageIconStyle(), t.editorPath = "/packageeditor";
                break;
            case"lib":
                t._icon = i.default.frameStyle.getLibIcon(), t._style = i.default.frameStyle.getLibIconStyle();
                break;
            case"action":
                t._icon = i.default.frameStyle.getActionIcon(), t._style = i.default.frameStyle.getActionIconStyle(), t.editorPath = "/actioneditor";
                break;
            case"parameter":
                t._icon = i.default.frameStyle.getParameterIcon(), t._style = i.default.frameStyle.getParameterIconStyle(), t.editorPath = "/parametereditor";
                break;
            case"constant":
                t._icon = i.default.frameStyle.getConstantIcon(), t._style = i.default.frameStyle.getConstantIconStyle(), t.editorPath = "/constanteditor";
                break;
            case"variable":
                t._icon = i.default.frameStyle.getVariableIcon(), t._style = i.default.frameStyle.getVariableIconStyle(), t.editorPath = "/variableeditor";
                break;
            case"ruleLib":
                t._icon = i.default.frameStyle.getRuleLibIcon(), t._style = i.default.frameStyle.getRuleLibIconStyle();
                break;
            case"decisionTableLib":
                t._icon = i.default.frameStyle.getDecisionTableLibIcon(), t._style = i.default.frameStyle.getDecisionTableLibIconStyle();
                break;
            case"decisionTreeLib":
                t._icon = i.default.frameStyle.getDecisionTreeLibIcon(), t._style = i.default.frameStyle.getDecisionTreeLibIconStyle();
                break;
            case"flowLib":
                t._icon = i.default.frameStyle.getFlowLibIcon(), t._style = i.default.frameStyle.getFlowLibIconStyle();
                break;
            case"ul":
                t._icon = i.default.frameStyle.getUlIcon(), t._style = i.default.frameStyle.getUlIconStyle(), t.editorPath = "/uleditor";
                break;
            case"decisionTable":
                t._icon = i.default.frameStyle.getDecisionTableIcon(), t._style = i.default.frameStyle.getDecisionTableIconStyle(), t.editorPath = "/decisiontableeditor";
                break;
            case"crosstab":
                t._icon = i.default.frameStyle.getCrossDecisionTableIcon(), t._style = i.default.frameStyle.getCrossDecisionTableIconStyle(), t.editorPath = "/crosstabeditor";
                break;
            case"scriptDecisionTable":
                t._icon = i.default.frameStyle.getScriptDecisionTableIcon(), t._style = i.default.frameStyle.getScriptDecisionTableIconStyle(), t.editorPath = "/scriptdecisiontableeditor";
                break;
            case"decisionTree":
                t._icon = i.default.frameStyle.getDecisionTreeIcon(), t._style = i.default.frameStyle.getDecisionTreeIconStyle(), t.editorPath = "/decisiontreeditor";
                break;
            case"flow":
                t._icon = i.default.frameStyle.getFlowIcon(), t._style = i.default.frameStyle.getFlowIconStyle(), t.editorPath = "/floweditor";
                break;
            case"scorecard":
                t._icon = i.default.frameStyle.getScorecardIcon(), t._style = i.default.frameStyle.getScorecardIconStyle(), t.editorPath = "/scorecardeditor";
                break;
            case"complexscorecard":
                t._icon = i.default.frameStyle.getComplexScorecardIcon(), t._style = i.default.frameStyle.getComplexScorecardIconStyle(), t.editorPath = "/complexscorecardeditor"
        }
        var e = t.children;
        e && e.forEach(function (t, e) {
            a(t)
        })
    }
}, function (t, e, n) {
    var r = e;
    r.utils = n(9), r.common = n(22), r.sha = n(123), r.ripemd = n(119), r.hmac = n(118), r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
}, function (t, e, n) {
    (function (e) {
        var r = n(3), i = n(14);

        function o(t, n) {
            var i = function (t) {
                    var e = a(t);
                    return {
                        blinder: e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed(),
                        unblinder: e.invm(t.modulus)
                    }
                }(n), o = n.modulus.byteLength(), s = (r.mont(n.modulus), new r(t).mul(i.blinder).umod(n.modulus)),
                c = s.toRed(r.mont(n.prime1)), f = s.toRed(r.mont(n.prime2)), u = n.coefficient, l = n.prime1,
                h = n.prime2, d = c.redPow(n.exponent1), p = f.redPow(n.exponent2);
            d = d.fromRed(), p = p.fromRed();
            var b = d.isub(p).imul(u).umod(l);
            return b.imul(h), p.iadd(b), new e(p.imul(i.unblinder).umod(n.modulus).toArray(!1, o))
        }

        function a(t) {
            for (var e = t.modulus.byteLength(), n = new r(i(e)); n.cmp(t.modulus) >= 0 || !n.umod(t.prime1) || !n.umod(t.prime2);) n = new r(i(e));
            return n
        }

        t.exports = o, o.getr = a
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    var r = {ECB: n(148), CBC: n(147), CFB: n(146), CFB8: n(145), CFB1: n(144), OFB: n(143), CTR: n(68), GCM: n(68)},
        i = n(66);
    for (var o in i) i[o].module = r[i[o].mode];
    t.exports = i
}, function (t, e, n) {
    var r = n(149), i = n(141), o = n(66);
    e.createCipher = e.Cipher = r.createCipher, e.createCipheriv = e.Cipheriv = r.createCipheriv, e.createDecipher = e.Decipher = i.createDecipher, e.createDecipheriv = e.Decipheriv = i.createDecipheriv, e.listCiphers = e.getCiphers = function () {
        return Object.keys(o)
    }
}, function (t, e, n) {
    "use strict";
    e.utils = n(154), e.Cipher = n(153), e.DES = n(152), e.CBC = n(151), e.EDE = n(150)
}, function (t, e, n) {
    (e = t.exports = function (t) {
        t = t.toLowerCase();
        var n = e[t];
        if (!n) throw new Error(t + " is not supported (we accept pull requests)");
        return new n
    }).sha = n(163), e.sha1 = n(162), e.sha224 = n(161), e.sha256 = n(77), e.sha384 = n(160), e.sha512 = n(76)
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var r = n(0), i = n(164);

        function o() {
            i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
        }

        function a(t, e) {
            return t << e | t >>> 32 - e
        }

        function s(t, e, n, r, i, o, s, c) {
            return a(t + (e ^ n ^ r) + o + s | 0, c) + i | 0
        }

        function c(t, e, n, r, i, o, s, c) {
            return a(t + (e & n | ~e & r) + o + s | 0, c) + i | 0
        }

        function f(t, e, n, r, i, o, s, c) {
            return a(t + ((e | ~n) ^ r) + o + s | 0, c) + i | 0
        }

        function u(t, e, n, r, i, o, s, c) {
            return a(t + (e & r | n & ~r) + o + s | 0, c) + i | 0
        }

        function l(t, e, n, r, i, o, s, c) {
            return a(t + (e ^ (n | ~r)) + o + s | 0, c) + i | 0
        }

        r(o, i), o.prototype._update = function () {
            for (var t = new Array(16), e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
            var n = this._a, r = this._b, i = this._c, o = this._d, h = this._e;
            h = s(h, n = s(n, r, i, o, h, t[0], 0, 11), r, i = a(i, 10), o, t[1], 0, 14), r = s(r = a(r, 10), i = s(i, o = s(o, h, n, r, i, t[2], 0, 15), h, n = a(n, 10), r, t[3], 0, 12), o, h = a(h, 10), n, t[4], 0, 5), o = s(o = a(o, 10), h = s(h, n = s(n, r, i, o, h, t[5], 0, 8), r, i = a(i, 10), o, t[6], 0, 7), n, r = a(r, 10), i, t[7], 0, 9), n = s(n = a(n, 10), r = s(r, i = s(i, o, h, n, r, t[8], 0, 11), o, h = a(h, 10), n, t[9], 0, 13), i, o = a(o, 10), h, t[10], 0, 14), i = s(i = a(i, 10), o = s(o, h = s(h, n, r, i, o, t[11], 0, 15), n, r = a(r, 10), i, t[12], 0, 6), h, n = a(n, 10), r, t[13], 0, 7), h = c(h = a(h, 10), n = s(n, r = s(r, i, o, h, n, t[14], 0, 9), i, o = a(o, 10), h, t[15], 0, 8), r, i = a(i, 10), o, t[7], 1518500249, 7), r = c(r = a(r, 10), i = c(i, o = c(o, h, n, r, i, t[4], 1518500249, 6), h, n = a(n, 10), r, t[13], 1518500249, 8), o, h = a(h, 10), n, t[1], 1518500249, 13), o = c(o = a(o, 10), h = c(h, n = c(n, r, i, o, h, t[10], 1518500249, 11), r, i = a(i, 10), o, t[6], 1518500249, 9), n, r = a(r, 10), i, t[15], 1518500249, 7), n = c(n = a(n, 10), r = c(r, i = c(i, o, h, n, r, t[3], 1518500249, 15), o, h = a(h, 10), n, t[12], 1518500249, 7), i, o = a(o, 10), h, t[0], 1518500249, 12), i = c(i = a(i, 10), o = c(o, h = c(h, n, r, i, o, t[9], 1518500249, 15), n, r = a(r, 10), i, t[5], 1518500249, 9), h, n = a(n, 10), r, t[2], 1518500249, 11), h = c(h = a(h, 10), n = c(n, r = c(r, i, o, h, n, t[14], 1518500249, 7), i, o = a(o, 10), h, t[11], 1518500249, 13), r, i = a(i, 10), o, t[8], 1518500249, 12), r = f(r = a(r, 10), i = f(i, o = f(o, h, n, r, i, t[3], 1859775393, 11), h, n = a(n, 10), r, t[10], 1859775393, 13), o, h = a(h, 10), n, t[14], 1859775393, 6), o = f(o = a(o, 10), h = f(h, n = f(n, r, i, o, h, t[4], 1859775393, 7), r, i = a(i, 10), o, t[9], 1859775393, 14), n, r = a(r, 10), i, t[15], 1859775393, 9), n = f(n = a(n, 10), r = f(r, i = f(i, o, h, n, r, t[8], 1859775393, 13), o, h = a(h, 10), n, t[1], 1859775393, 15), i, o = a(o, 10), h, t[2], 1859775393, 14), i = f(i = a(i, 10), o = f(o, h = f(h, n, r, i, o, t[7], 1859775393, 8), n, r = a(r, 10), i, t[0], 1859775393, 13), h, n = a(n, 10), r, t[6], 1859775393, 6), h = f(h = a(h, 10), n = f(n, r = f(r, i, o, h, n, t[13], 1859775393, 5), i, o = a(o, 10), h, t[11], 1859775393, 12), r, i = a(i, 10), o, t[5], 1859775393, 7), r = u(r = a(r, 10), i = u(i, o = f(o, h, n, r, i, t[12], 1859775393, 5), h, n = a(n, 10), r, t[1], 2400959708, 11), o, h = a(h, 10), n, t[9], 2400959708, 12), o = u(o = a(o, 10), h = u(h, n = u(n, r, i, o, h, t[11], 2400959708, 14), r, i = a(i, 10), o, t[10], 2400959708, 15), n, r = a(r, 10), i, t[0], 2400959708, 14), n = u(n = a(n, 10), r = u(r, i = u(i, o, h, n, r, t[8], 2400959708, 15), o, h = a(h, 10), n, t[12], 2400959708, 9), i, o = a(o, 10), h, t[4], 2400959708, 8), i = u(i = a(i, 10), o = u(o, h = u(h, n, r, i, o, t[13], 2400959708, 9), n, r = a(r, 10), i, t[3], 2400959708, 14), h, n = a(n, 10), r, t[7], 2400959708, 5), h = u(h = a(h, 10), n = u(n, r = u(r, i, o, h, n, t[15], 2400959708, 6), i, o = a(o, 10), h, t[14], 2400959708, 8), r, i = a(i, 10), o, t[5], 2400959708, 6), r = l(r = a(r, 10), i = u(i, o = u(o, h, n, r, i, t[6], 2400959708, 5), h, n = a(n, 10), r, t[2], 2400959708, 12), o, h = a(h, 10), n, t[4], 2840853838, 9), o = l(o = a(o, 10), h = l(h, n = l(n, r, i, o, h, t[0], 2840853838, 15), r, i = a(i, 10), o, t[5], 2840853838, 5), n, r = a(r, 10), i, t[9], 2840853838, 11), n = l(n = a(n, 10), r = l(r, i = l(i, o, h, n, r, t[7], 2840853838, 6), o, h = a(h, 10), n, t[12], 2840853838, 8), i, o = a(o, 10), h, t[2], 2840853838, 13), i = l(i = a(i, 10), o = l(o, h = l(h, n, r, i, o, t[10], 2840853838, 12), n, r = a(r, 10), i, t[14], 2840853838, 5), h, n = a(n, 10), r, t[1], 2840853838, 12), h = l(h = a(h, 10), n = l(n, r = l(r, i, o, h, n, t[3], 2840853838, 13), i, o = a(o, 10), h, t[8], 2840853838, 14), r, i = a(i, 10), o, t[11], 2840853838, 11), r = l(r = a(r, 10), i = l(i, o = l(o, h, n, r, i, t[6], 2840853838, 8), h, n = a(n, 10), r, t[15], 2840853838, 5), o, h = a(h, 10), n, t[13], 2840853838, 6), o = a(o, 10);
            var d = this._a, p = this._b, b = this._c, g = this._d, y = this._e;
            y = l(y, d = l(d, p, b, g, y, t[5], 1352829926, 8), p, b = a(b, 10), g, t[14], 1352829926, 9), p = l(p = a(p, 10), b = l(b, g = l(g, y, d, p, b, t[7], 1352829926, 9), y, d = a(d, 10), p, t[0], 1352829926, 11), g, y = a(y, 10), d, t[9], 1352829926, 13), g = l(g = a(g, 10), y = l(y, d = l(d, p, b, g, y, t[2], 1352829926, 15), p, b = a(b, 10), g, t[11], 1352829926, 15), d, p = a(p, 10), b, t[4], 1352829926, 5), d = l(d = a(d, 10), p = l(p, b = l(b, g, y, d, p, t[13], 1352829926, 7), g, y = a(y, 10), d, t[6], 1352829926, 7), b, g = a(g, 10), y, t[15], 1352829926, 8), b = l(b = a(b, 10), g = l(g, y = l(y, d, p, b, g, t[8], 1352829926, 11), d, p = a(p, 10), b, t[1], 1352829926, 14), y, d = a(d, 10), p, t[10], 1352829926, 14), y = u(y = a(y, 10), d = l(d, p = l(p, b, g, y, d, t[3], 1352829926, 12), b, g = a(g, 10), y, t[12], 1352829926, 6), p, b = a(b, 10), g, t[6], 1548603684, 9), p = u(p = a(p, 10), b = u(b, g = u(g, y, d, p, b, t[11], 1548603684, 13), y, d = a(d, 10), p, t[3], 1548603684, 15), g, y = a(y, 10), d, t[7], 1548603684, 7), g = u(g = a(g, 10), y = u(y, d = u(d, p, b, g, y, t[0], 1548603684, 12), p, b = a(b, 10), g, t[13], 1548603684, 8), d, p = a(p, 10), b, t[5], 1548603684, 9), d = u(d = a(d, 10), p = u(p, b = u(b, g, y, d, p, t[10], 1548603684, 11), g, y = a(y, 10), d, t[14], 1548603684, 7), b, g = a(g, 10), y, t[15], 1548603684, 7), b = u(b = a(b, 10), g = u(g, y = u(y, d, p, b, g, t[8], 1548603684, 12), d, p = a(p, 10), b, t[12], 1548603684, 7), y, d = a(d, 10), p, t[4], 1548603684, 6), y = u(y = a(y, 10), d = u(d, p = u(p, b, g, y, d, t[9], 1548603684, 15), b, g = a(g, 10), y, t[1], 1548603684, 13), p, b = a(b, 10), g, t[2], 1548603684, 11), p = f(p = a(p, 10), b = f(b, g = f(g, y, d, p, b, t[15], 1836072691, 9), y, d = a(d, 10), p, t[5], 1836072691, 7), g, y = a(y, 10), d, t[1], 1836072691, 15), g = f(g = a(g, 10), y = f(y, d = f(d, p, b, g, y, t[3], 1836072691, 11), p, b = a(b, 10), g, t[7], 1836072691, 8), d, p = a(p, 10), b, t[14], 1836072691, 6), d = f(d = a(d, 10), p = f(p, b = f(b, g, y, d, p, t[6], 1836072691, 6), g, y = a(y, 10), d, t[9], 1836072691, 14), b, g = a(g, 10), y, t[11], 1836072691, 12), b = f(b = a(b, 10), g = f(g, y = f(y, d, p, b, g, t[8], 1836072691, 13), d, p = a(p, 10), b, t[12], 1836072691, 5), y, d = a(d, 10), p, t[2], 1836072691, 14), y = f(y = a(y, 10), d = f(d, p = f(p, b, g, y, d, t[10], 1836072691, 13), b, g = a(g, 10), y, t[0], 1836072691, 13), p, b = a(b, 10), g, t[4], 1836072691, 7), p = c(p = a(p, 10), b = c(b, g = f(g, y, d, p, b, t[13], 1836072691, 5), y, d = a(d, 10), p, t[8], 2053994217, 15), g, y = a(y, 10), d, t[6], 2053994217, 5), g = c(g = a(g, 10), y = c(y, d = c(d, p, b, g, y, t[4], 2053994217, 8), p, b = a(b, 10), g, t[1], 2053994217, 11), d, p = a(p, 10), b, t[3], 2053994217, 14), d = c(d = a(d, 10), p = c(p, b = c(b, g, y, d, p, t[11], 2053994217, 14), g, y = a(y, 10), d, t[15], 2053994217, 6), b, g = a(g, 10), y, t[0], 2053994217, 14), b = c(b = a(b, 10), g = c(g, y = c(y, d, p, b, g, t[5], 2053994217, 6), d, p = a(p, 10), b, t[12], 2053994217, 9), y, d = a(d, 10), p, t[2], 2053994217, 12), y = c(y = a(y, 10), d = c(d, p = c(p, b, g, y, d, t[13], 2053994217, 9), b, g = a(g, 10), y, t[9], 2053994217, 12), p, b = a(b, 10), g, t[7], 2053994217, 5), p = s(p = a(p, 10), b = c(b, g = c(g, y, d, p, b, t[10], 2053994217, 15), y, d = a(d, 10), p, t[14], 2053994217, 8), g, y = a(y, 10), d, t[12], 0, 8), g = s(g = a(g, 10), y = s(y, d = s(d, p, b, g, y, t[15], 0, 5), p, b = a(b, 10), g, t[10], 0, 12), d, p = a(p, 10), b, t[4], 0, 9), d = s(d = a(d, 10), p = s(p, b = s(b, g, y, d, p, t[1], 0, 12), g, y = a(y, 10), d, t[5], 0, 5), b, g = a(g, 10), y, t[8], 0, 14), b = s(b = a(b, 10), g = s(g, y = s(y, d, p, b, g, t[7], 0, 6), d, p = a(p, 10), b, t[6], 0, 8), y, d = a(d, 10), p, t[2], 0, 13), y = s(y = a(y, 10), d = s(d, p = s(p, b, g, y, d, t[13], 0, 6), b, g = a(g, 10), y, t[14], 0, 5), p, b = a(b, 10), g, t[0], 0, 15), p = s(p = a(p, 10), b = s(b, g = s(g, y, d, p, b, t[3], 0, 13), y, d = a(d, 10), p, t[9], 0, 11), g, y = a(y, 10), d, t[11], 0, 11), g = a(g, 10);
            var m = this._b + i + g | 0;
            this._b = this._c + o + y | 0, this._c = this._d + h + d | 0, this._d = this._e + n + p | 0, this._e = this._a + r + b | 0, this._a = m
        }, o.prototype._digest = function () {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var t = new e(20);
            return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
        }, t.exports = o
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    "use strict";
    var r = n(1).Buffer, i = r.isEncoding || function (t) {
        switch ((t = "" + t) && t.toLowerCase()) {
            case"hex":
            case"utf8":
            case"utf-8":
            case"ascii":
            case"binary":
            case"base64":
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
            case"raw":
                return !0;
            default:
                return !1
        }
    };

    function o(t) {
        var e;
        switch (this.encoding = function (t) {
            var e = function (t) {
                if (!t) return "utf8";
                for (var e; ;) switch (t) {
                    case"utf8":
                    case"utf-8":
                        return "utf8";
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return "utf16le";
                    case"latin1":
                    case"binary":
                        return "latin1";
                    case"base64":
                    case"ascii":
                    case"hex":
                        return t;
                    default:
                        if (e) return;
                        t = ("" + t).toLowerCase(), e = !0
                }
            }(t);
            if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
            return e || t
        }(t), this.encoding) {
            case"utf16le":
                this.text = c, this.end = f, e = 4;
                break;
            case"utf8":
                this.fillLast = s, e = 4;
                break;
            case"base64":
                this.text = u, this.end = l, e = 3;
                break;
            default:
                return this.write = h, void(this.end = d)
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
    }

    function a(t) {
        return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
    }

    function s(t) {
        var e = this.lastTotal - this.lastNeed, n = function (t, e, n) {
            if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
            if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�"
            }
        }(this, t);
        return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
    }

    function c(t, e) {
        if ((t.length - e) % 2 == 0) {
            var n = t.toString("utf16le", e);
            if (n) {
                var r = n.charCodeAt(n.length - 1);
                if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
            }
            return n
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
    }

    function f(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, n)
        }
        return e
    }

    function u(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
    }

    function l(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
    }

    function h(t) {
        return t.toString(this.encoding)
    }

    function d(t) {
        return t && t.length ? this.write(t) : ""
    }

    e.StringDecoder = o, o.prototype.write = function (t) {
        if (0 === t.length) return "";
        var e, n;
        if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            n = this.lastNeed, this.lastNeed = 0
        } else n = 0;
        return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
    }, o.prototype.end = function (t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + "�" : e
    }, o.prototype.text = function (t, e) {
        var n = function (t, e, n) {
            var r = e.length - 1;
            if (r < n) return 0;
            var i = a(e[r]);
            return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = a(e[r])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = a(e[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0
        }(this, t, e);
        if (!this.lastNeed) return t.toString("utf8", e);
        this.lastTotal = n;
        var r = t.length - (n - this.lastNeed);
        return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
    }, o.prototype.fillLast = function (t) {
        if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
    }
}, function (t, e, n) {
    "use strict";
    (function (e, r, i) {
        var o = n(32);

        function a(t) {
            var e = this;
            this.next = null, this.entry = null, this.finish = function () {
                !function (t, e, n) {
                    var r = t.entry;
                    for (t.entry = null; r;) {
                        var i = r.callback;
                        e.pendingcb--, i(void 0), r = r.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }(e, t)
            }
        }

        t.exports = m;
        var s, c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : o.nextTick;
        m.WritableState = y;
        var f = n(25);
        f.inherits = n(24);
        var u, l = {deprecate: n(170)}, h = n(80), d = n(1).Buffer, p = i.Uint8Array || function () {
        }, b = n(79);

        function g() {
        }

        function y(t, e) {
            s = s || n(12), t = t || {};
            var r = e instanceof s;
            this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
            var i = t.highWaterMark, f = t.writableHighWaterMark, u = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r && (f || 0 === f) ? f : u, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            var l = !1 === t.decodeStrings;
            this.decodeStrings = !l, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
                !function (t, e) {
                    var n = t._writableState, r = n.sync, i = n.writecb;
                    if (function (t) {
                        t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                    }(n), e) !function (t, e, n, r, i) {
                        --e.pendingcb, n ? (o.nextTick(i, r), o.nextTick(x, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), x(t, e))
                    }(t, n, r, e, i); else {
                        var a = _(n);
                        a || n.corked || n.bufferProcessing || !n.bufferedRequest || w(t, n), r ? c(A, t, n, a, i) : A(t, n, a, i)
                    }
                }(e, t)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
        }

        function m(t) {
            if (s = s || n(12), !(u.call(m, this) || this instanceof s)) return new m(t);
            this._writableState = new y(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), h.call(this)
        }

        function v(t, e, n, r, i, o, a) {
            e.writelen = r, e.writecb = a, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
        }

        function A(t, e, n, r) {
            n || function (t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
            }(t, e), e.pendingcb--, r(), x(t, e)
        }

        function w(t, e) {
            e.bufferProcessing = !0;
            var n = e.bufferedRequest;
            if (t._writev && n && n.next) {
                var r = e.bufferedRequestCount, i = new Array(r), o = e.corkedRequestsFree;
                o.entry = n;
                for (var s = 0, c = !0; n;) i[s] = n, n.isBuf || (c = !1), n = n.next, s += 1;
                i.allBuffers = c, v(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new a(e), e.bufferedRequestCount = 0
            } else {
                for (; n;) {
                    var f = n.chunk, u = n.encoding, l = n.callback;
                    if (v(t, e, !1, e.objectMode ? 1 : f.length, f, u, l), n = n.next, e.bufferedRequestCount--, e.writing) break
                }
                null === n && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = n, e.bufferProcessing = !1
        }

        function _(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }

        function E(t, e) {
            t._final(function (n) {
                e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), x(t, e)
            })
        }

        function x(t, e) {
            var n = _(e);
            return n && (function (t, e) {
                e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, o.nextTick(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")))
            }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n
        }

        f.inherits(m, h), y.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
            return e
        }, function () {
            try {
                Object.defineProperty(y.prototype, "buffer", {
                    get: l.deprecate(function () {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (t) {
            }
        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (u = Function.prototype[Symbol.hasInstance], Object.defineProperty(m, Symbol.hasInstance, {
            value: function (t) {
                return !!u.call(this, t) || this === m && t && t._writableState instanceof y
            }
        })) : u = function (t) {
            return t instanceof this
        }, m.prototype.pipe = function () {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }, m.prototype.write = function (t, e, n) {
            var r, i = this._writableState, a = !1, s = !i.objectMode && (r = t, d.isBuffer(r) || r instanceof p);
            return s && !d.isBuffer(t) && (t = function (t) {
                return d.from(t)
            }(t)), "function" == typeof e && (n = e, e = null), s ? e = "buffer" : e || (e = i.defaultEncoding), "function" != typeof n && (n = g), i.ended ? function (t, e) {
                var n = new Error("write after end");
                t.emit("error", n), o.nextTick(e, n)
            }(this, n) : (s || function (t, e, n, r) {
                var i = !0, a = !1;
                return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (t.emit("error", a), o.nextTick(r, a), i = !1), i
            }(this, i, t, n)) && (i.pendingcb++, a = function (t, e, n, r, i, o) {
                if (!n) {
                    var a = function (t, e, n) {
                        return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = d.from(e, n)), e
                    }(e, r, i);
                    r !== a && (n = !0, i = "buffer", r = a)
                }
                var s = e.objectMode ? 1 : r.length;
                e.length += s;
                var c = e.length < e.highWaterMark;
                if (c || (e.needDrain = !0), e.writing || e.corked) {
                    var f = e.lastBufferedRequest;
                    e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null
                    }, f ? f.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                } else v(t, e, !1, s, r, i, o);
                return c
            }(this, i, s, t, e, n)), a
        }, m.prototype.cork = function () {
            this._writableState.corked++
        }, m.prototype.uncork = function () {
            var t = this._writableState;
            t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || w(this, t))
        }, m.prototype.setDefaultEncoding = function (t) {
            if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
            return this._writableState.defaultEncoding = t, this
        }, Object.defineProperty(m.prototype, "writableHighWaterMark", {
            enumerable: !1, get: function () {
                return this._writableState.highWaterMark
            }
        }), m.prototype._write = function (t, e, n) {
            n(new Error("_write() is not implemented"))
        }, m.prototype._writev = null, m.prototype.end = function (t, e, n) {
            var r = this._writableState;
            "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (t, e, n) {
                e.ending = !0, x(t, e), n && (e.finished ? o.nextTick(n) : t.once("finish", n)), e.ended = !0, t.writable = !1
            }(this, r, n)
        }, Object.defineProperty(m.prototype, "destroyed", {
            get: function () {
                return void 0 !== this._writableState && this._writableState.destroyed
            }, set: function (t) {
                this._writableState && (this._writableState.destroyed = t)
            }
        }), m.prototype.destroy = b.destroy, m.prototype._undestroy = b.undestroy, m.prototype._destroy = function (t, e) {
            this.end(), e(t)
        }
    }).call(this, n(11), n(172).setImmediate, n(8))
}, function (t, e, n) {
    (e = t.exports = n(81)).Stream = e, e.Readable = e, e.Writable = n(43), e.Duplex = n(12), e.Transform = n(78), e.PassThrough = n(169)
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var r = n(0), i = n(176), o = new Array(16);

        function a() {
            i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
        }

        function s(t, e) {
            return t << e | t >>> 32 - e
        }

        function c(t, e, n, r, i, o, a) {
            return s(t + (e & n | ~e & r) + i + o | 0, a) + e | 0
        }

        function f(t, e, n, r, i, o, a) {
            return s(t + (e & r | n & ~r) + i + o | 0, a) + e | 0
        }

        function u(t, e, n, r, i, o, a) {
            return s(t + (e ^ n ^ r) + i + o | 0, a) + e | 0
        }

        function l(t, e, n, r, i, o, a) {
            return s(t + (n ^ (e | ~r)) + i + o | 0, a) + e | 0
        }

        r(a, i), a.prototype._update = function () {
            for (var t = o, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
            var n = this._a, r = this._b, i = this._c, a = this._d;
            r = l(r = l(r = l(r = l(r = u(r = u(r = u(r = u(r = f(r = f(r = f(r = f(r = c(r = c(r = c(r = c(r, i = c(i, a = c(a, n = c(n, r, i, a, t[0], 3614090360, 7), r, i, t[1], 3905402710, 12), n, r, t[2], 606105819, 17), a, n, t[3], 3250441966, 22), i = c(i, a = c(a, n = c(n, r, i, a, t[4], 4118548399, 7), r, i, t[5], 1200080426, 12), n, r, t[6], 2821735955, 17), a, n, t[7], 4249261313, 22), i = c(i, a = c(a, n = c(n, r, i, a, t[8], 1770035416, 7), r, i, t[9], 2336552879, 12), n, r, t[10], 4294925233, 17), a, n, t[11], 2304563134, 22), i = c(i, a = c(a, n = c(n, r, i, a, t[12], 1804603682, 7), r, i, t[13], 4254626195, 12), n, r, t[14], 2792965006, 17), a, n, t[15], 1236535329, 22), i = f(i, a = f(a, n = f(n, r, i, a, t[1], 4129170786, 5), r, i, t[6], 3225465664, 9), n, r, t[11], 643717713, 14), a, n, t[0], 3921069994, 20), i = f(i, a = f(a, n = f(n, r, i, a, t[5], 3593408605, 5), r, i, t[10], 38016083, 9), n, r, t[15], 3634488961, 14), a, n, t[4], 3889429448, 20), i = f(i, a = f(a, n = f(n, r, i, a, t[9], 568446438, 5), r, i, t[14], 3275163606, 9), n, r, t[3], 4107603335, 14), a, n, t[8], 1163531501, 20), i = f(i, a = f(a, n = f(n, r, i, a, t[13], 2850285829, 5), r, i, t[2], 4243563512, 9), n, r, t[7], 1735328473, 14), a, n, t[12], 2368359562, 20), i = u(i, a = u(a, n = u(n, r, i, a, t[5], 4294588738, 4), r, i, t[8], 2272392833, 11), n, r, t[11], 1839030562, 16), a, n, t[14], 4259657740, 23), i = u(i, a = u(a, n = u(n, r, i, a, t[1], 2763975236, 4), r, i, t[4], 1272893353, 11), n, r, t[7], 4139469664, 16), a, n, t[10], 3200236656, 23), i = u(i, a = u(a, n = u(n, r, i, a, t[13], 681279174, 4), r, i, t[0], 3936430074, 11), n, r, t[3], 3572445317, 16), a, n, t[6], 76029189, 23), i = u(i, a = u(a, n = u(n, r, i, a, t[9], 3654602809, 4), r, i, t[12], 3873151461, 11), n, r, t[15], 530742520, 16), a, n, t[2], 3299628645, 23), i = l(i, a = l(a, n = l(n, r, i, a, t[0], 4096336452, 6), r, i, t[7], 1126891415, 10), n, r, t[14], 2878612391, 15), a, n, t[5], 4237533241, 21), i = l(i, a = l(a, n = l(n, r, i, a, t[12], 1700485571, 6), r, i, t[3], 2399980690, 10), n, r, t[10], 4293915773, 15), a, n, t[1], 2240044497, 21), i = l(i, a = l(a, n = l(n, r, i, a, t[8], 1873313359, 6), r, i, t[15], 4264355552, 10), n, r, t[6], 2734768916, 15), a, n, t[13], 1309151649, 21), i = l(i, a = l(a, n = l(n, r, i, a, t[4], 4149444226, 6), r, i, t[11], 3174756917, 10), n, r, t[2], 718787259, 15), a, n, t[9], 3951481745, 21), this._a = this._a + n | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + a | 0
        }, a.prototype._digest = function () {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var t = new e(16);
            return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
        }, t.exports = a
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = s(i), a = s(n(7));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = $(a.default.findDOMNode(this));
                t.on("show.bs.modal", function () {
                    var e = 1050;
                    $(document).find(".modal").each(function (t, n) {
                        var r = $(n).css("z-index");
                        if (r && "" !== r && !isNaN(r)) {
                            var i = parseInt(r);
                            i > e && (e = i)
                        }
                    }), t.css("z-index", e + 1)
                })
            }
        }, {
            key: "render", value: function () {
                var t = this, e = [];
                this.props.buttons.forEach(function (n, r) {
                    e.push(o.default.createElement("button", {
                        type: "button",
                        key: r,
                        className: n.className,
                        onClick: function (e) {
                            n.click(t.props.dispatch)
                        }
                    }, o.default.createElement("i", {className: n.icon}), " ", n.name))
                });
                var n = "modal-dialog" + (this.props.large ? " modal-lg" : "");
                return o.default.createElement("div", {
                    className: "modal fade",
                    tabIndex: "-1",
                    role: "dialog",
                    "aria-hidden": "true",
                    style: {overflow: "auto"}
                }, o.default.createElement("div", {className: n}, o.default.createElement("div", {className: "modal-content"}, o.default.createElement("div", {className: "modal-header"}, o.default.createElement("button", {
                    type: "button",
                    className: "close",
                    "data-dismiss": "modal",
                    "aria-hidden": "true"
                }, "×"), o.default.createElement("h3", {
                    className: "modal-title",
                    id: "myModalLabel",
                    style: {wordWrap: "break-word"}
                }, this.props.title, o.default.createElement("div", {
                    className: "text-danger",
                    style: {fontSize: "12pt"}
                }, this.props.info ? this.props.info : null))), o.default.createElement("div", {
                    className: "modal-body",
                    style: {padding: "10px"}
                }, this.props.body), o.default.createElement("div", {className: "modal-footer"}, e))))
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    var r = n(87);
    "string" == typeof r && (r = [[t.i, r, ""]]), n(17)(r, {}), r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.eventEmitter = e.HIDE_CHILD_LIST_DIALOG = e.SHOW_CHILD_LIST_DIALOG = e.HIDE_CELL_EDITOR = e.SHOW_CELL_EDITOR = void 0;
    var r, i = (r = n(15)) && r.__esModule ? r : {default: r};
    e.SHOW_CELL_EDITOR = "show_cell_editor", e.HIDE_CELL_EDITOR = "hide_cell_editor", e.SHOW_CHILD_LIST_DIALOG = "show_child_list_dialog", e.HIDE_CHILD_LIST_DIALOG = "hide_child_list_dialog", e.eventEmitter = new i.default.EventEmitter
}, function (t, e, n) {
    (function (e) {
        var r = n(3);
        t.exports = function (t, n) {
            return new e(t.toRed(r.mont(n.modulus)).redPow(new r(n.publicExponent)).fromRed().toArray())
        }
    }).call(this, n(2).Buffer)
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = t.length, r = -1; ++r < n;) t[r] ^= e[r];
        return t
    }
}, function (t, e, n) {
    (function (e) {
        var r = n(26);

        function i(t) {
            var n = new e(4);
            return n.writeUInt32BE(t, 0), n
        }

        t.exports = function (t, n) {
            for (var o, a = new e(""), s = 0; a.length < n;) o = i(s++), a = e.concat([a, r("sha1").update(t).update(o).digest()]);
            return a.slice(0, n)
        }
    }).call(this, n(2).Buffer)
}, function (t) {
    t.exports = {
        "1.3.132.0.10": "secp256k1",
        "1.3.132.0.33": "p224",
        "1.2.840.10045.3.1.1": "p192",
        "1.2.840.10045.3.1.7": "p256",
        "1.3.132.0.34": "p384",
        "1.3.132.0.35": "p521"
    }
}, function (t, e, n) {
    var r = n(0), i = n(2).Buffer, o = n(21), a = o.base, s = o.constants.der;

    function c(t) {
        this.enc = "der", this.name = t.name, this.entity = t, this.tree = new f, this.tree._init(t.body)
    }

    function f(t) {
        a.Node.call(this, "der", t)
    }

    function u(t) {
        return t < 10 ? "0" + t : t
    }

    t.exports = c, c.prototype.encode = function (t, e) {
        return this.tree._encode(t, e).join()
    }, r(f, a.Node), f.prototype._encodeComposite = function (t, e, n, r) {
        var o, a = function (t, e, n, r) {
            var i;
            if ("seqof" === t ? t = "seq" : "setof" === t && (t = "set"), s.tagByName.hasOwnProperty(t)) i = s.tagByName[t]; else {
                if ("number" != typeof t || (0 | t) !== t) return r.error("Unknown tag: " + t);
                i = t
            }
            return i >= 31 ? r.error("Multi-octet tag encoding unsupported") : (e || (i |= 32), i | s.tagClassByName[n || "universal"] << 6)
        }(t, e, n, this.reporter);
        if (r.length < 128) return (o = new i(2))[0] = a, o[1] = r.length, this._createEncoderBuffer([o, r]);
        for (var c = 1, f = r.length; f >= 256; f >>= 8) c++;
        (o = new i(2 + c))[0] = a, o[1] = 128 | c, f = 1 + c;
        for (var u = r.length; u > 0; f--, u >>= 8) o[f] = 255 & u;
        return this._createEncoderBuffer([o, r])
    }, f.prototype._encodeStr = function (t, e) {
        if ("bitstr" === e) return this._createEncoderBuffer([0 | t.unused, t.data]);
        if ("bmpstr" === e) {
            for (var n = new i(2 * t.length), r = 0; r < t.length; r++) n.writeUInt16BE(t.charCodeAt(r), 2 * r);
            return this._createEncoderBuffer(n)
        }
        return "numstr" === e ? this._isNumstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === e ? this._isPrintstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(e) ? this._createEncoderBuffer(t) : "objDesc" === e ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: " + e + " unsupported")
    }, f.prototype._encodeObjid = function (t, e, n) {
        if ("string" == typeof t) {
            if (!e) return this.reporter.error("string objid given, but no values map found");
            if (!e.hasOwnProperty(t)) return this.reporter.error("objid not found in values map");
            t = e[t].split(/[\s\.]+/g);
            for (var r = 0; r < t.length; r++) t[r] |= 0
        } else if (Array.isArray(t)) for (t = t.slice(), r = 0; r < t.length; r++) t[r] |= 0;
        if (!Array.isArray(t)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t));
        if (!n) {
            if (t[1] >= 40) return this.reporter.error("Second objid identifier OOB");
            t.splice(0, 2, 40 * t[0] + t[1])
        }
        var o = 0;
        for (r = 0; r < t.length; r++) {
            var a = t[r];
            for (o++; a >= 128; a >>= 7) o++
        }
        var s = new i(o), c = s.length - 1;
        for (r = t.length - 1; r >= 0; r--) for (a = t[r], s[c--] = 127 & a; (a >>= 7) > 0;) s[c--] = 128 | 127 & a;
        return this._createEncoderBuffer(s)
    }, f.prototype._encodeTime = function (t, e) {
        var n, r = new Date(t);
        return "gentime" === e ? n = [u(r.getFullYear()), u(r.getUTCMonth() + 1), u(r.getUTCDate()), u(r.getUTCHours()), u(r.getUTCMinutes()), u(r.getUTCSeconds()), "Z"].join("") : "utctime" === e ? n = [u(r.getFullYear() % 100), u(r.getUTCMonth() + 1), u(r.getUTCDate()), u(r.getUTCHours()), u(r.getUTCMinutes()), u(r.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e + " time is not supported yet"), this._encodeStr(n, "octstr")
    }, f.prototype._encodeNull = function () {
        return this._createEncoderBuffer("")
    }, f.prototype._encodeInt = function (t, e) {
        if ("string" == typeof t) {
            if (!e) return this.reporter.error("String int or enum given, but no values map");
            if (!e.hasOwnProperty(t)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
            t = e[t]
        }
        if ("number" != typeof t && !i.isBuffer(t)) {
            var n = t.toArray();
            !t.sign && 128 & n[0] && n.unshift(0), t = new i(n)
        }
        if (i.isBuffer(t)) {
            var r = t.length;
            0 === t.length && r++;
            var o = new i(r);
            return t.copy(o), 0 === t.length && (o[0] = 0), this._createEncoderBuffer(o)
        }
        if (t < 128) return this._createEncoderBuffer(t);
        if (t < 256) return this._createEncoderBuffer([0, t]);
        r = 1;
        for (var a = t; a >= 256; a >>= 8) r++;
        for (a = (o = new Array(r)).length - 1; a >= 0; a--) o[a] = 255 & t, t >>= 8;
        return 128 & o[0] && o.unshift(0), this._createEncoderBuffer(new i(o))
    }, f.prototype._encodeBool = function (t) {
        return this._createEncoderBuffer(t ? 255 : 0)
    }, f.prototype._use = function (t, e) {
        return "function" == typeof t && (t = t(e)), t._getEncoder("der").tree
    }, f.prototype._skipDefault = function (t, e, n) {
        var r, i = this._baseState;
        if (null === i.default) return !1;
        var o = t.join();
        if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i.default, e, n).join()), o.length !== i.defaultBuffer.length) return !1;
        for (r = 0; r < o.length; r++) if (o[r] !== i.defaultBuffer[r]) return !1;
        return !0
    }
}, function (t, e, n) {
    var r = n(0), i = n(21), o = i.base, a = i.bignum, s = i.constants.der;

    function c(t) {
        this.enc = "der", this.name = t.name, this.entity = t, this.tree = new f, this.tree._init(t.body)
    }

    function f(t) {
        o.Node.call(this, "der", t)
    }

    function u(t, e) {
        var n = t.readUInt8(e);
        if (t.isError(n)) return n;
        var r = s.tagClass[n >> 6], i = 0 == (32 & n);
        if (31 == (31 & n)) {
            var o = n;
            for (n = 0; 128 == (128 & o);) {
                if (o = t.readUInt8(e), t.isError(o)) return o;
                n <<= 7, n |= 127 & o
            }
        } else n &= 31;
        return {cls: r, primitive: i, tag: n, tagStr: s.tag[n]}
    }

    function l(t, e, n) {
        var r = t.readUInt8(n);
        if (t.isError(r)) return r;
        if (!e && 128 === r) return null;
        if (0 == (128 & r)) return r;
        var i = 127 & r;
        if (i > 4) return t.error("length octect is too long");
        r = 0;
        for (var o = 0; o < i; o++) {
            r <<= 8;
            var a = t.readUInt8(n);
            if (t.isError(a)) return a;
            r |= a
        }
        return r
    }

    t.exports = c, c.prototype.decode = function (t, e) {
        return t instanceof o.DecoderBuffer || (t = new o.DecoderBuffer(t, e)), this.tree._decode(t, e)
    }, r(f, o.Node), f.prototype._peekTag = function (t, e, n) {
        if (t.isEmpty()) return !1;
        var r = t.save(), i = u(t, 'Failed to peek tag: "' + e + '"');
        return t.isError(i) ? i : (t.restore(r), i.tag === e || i.tagStr === e || i.tagStr + "of" === e || n)
    }, f.prototype._decodeTag = function (t, e, n) {
        var r = u(t, 'Failed to decode tag of "' + e + '"');
        if (t.isError(r)) return r;
        var i = l(t, r.primitive, 'Failed to get length of "' + e + '"');
        if (t.isError(i)) return i;
        if (!n && r.tag !== e && r.tagStr !== e && r.tagStr + "of" !== e) return t.error('Failed to match tag: "' + e + '"');
        if (r.primitive || null !== i) return t.skip(i, 'Failed to match body of: "' + e + '"');
        var o = t.save(), a = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return t.isError(a) ? a : (i = t.offset - o.offset, t.restore(o), t.skip(i, 'Failed to match body of: "' + e + '"'))
    }, f.prototype._skipUntilEnd = function (t, e) {
        for (; ;) {
            var n = u(t, e);
            if (t.isError(n)) return n;
            var r, i = l(t, n.primitive, e);
            if (t.isError(i)) return i;
            if (r = n.primitive || null !== i ? t.skip(i) : this._skipUntilEnd(t, e), t.isError(r)) return r;
            if ("end" === n.tagStr) break
        }
    }, f.prototype._decodeList = function (t, e, n, r) {
        for (var i = []; !t.isEmpty();) {
            var o = this._peekTag(t, "end");
            if (t.isError(o)) return o;
            var a = n.decode(t, "der", r);
            if (t.isError(a) && o) break;
            i.push(a)
        }
        return i
    }, f.prototype._decodeStr = function (t, e) {
        if ("bitstr" === e) {
            var n = t.readUInt8();
            return t.isError(n) ? n : {unused: n, data: t.raw()}
        }
        if ("bmpstr" === e) {
            var r = t.raw();
            if (r.length % 2 == 1) return t.error("Decoding of string type: bmpstr length mismatch");
            for (var i = "", o = 0; o < r.length / 2; o++) i += String.fromCharCode(r.readUInt16BE(2 * o));
            return i
        }
        if ("numstr" === e) {
            var a = t.raw().toString("ascii");
            return this._isNumstr(a) ? a : t.error("Decoding of string type: numstr unsupported characters")
        }
        if ("octstr" === e) return t.raw();
        if ("objDesc" === e) return t.raw();
        if ("printstr" === e) {
            var s = t.raw().toString("ascii");
            return this._isPrintstr(s) ? s : t.error("Decoding of string type: printstr unsupported characters")
        }
        return /str$/.test(e) ? t.raw().toString() : t.error("Decoding of string type: " + e + " unsupported")
    }, f.prototype._decodeObjid = function (t, e, n) {
        for (var r, i = [], o = 0; !t.isEmpty();) {
            var a = t.readUInt8();
            o <<= 7, o |= 127 & a, 0 == (128 & a) && (i.push(o), o = 0)
        }
        128 & a && i.push(o);
        var s = i[0] / 40 | 0, c = i[0] % 40;
        if (r = n ? i : [s, c].concat(i.slice(1)), e) {
            var f = e[r.join(" ")];
            void 0 === f && (f = e[r.join(".")]), void 0 !== f && (r = f)
        }
        return r
    }, f.prototype._decodeTime = function (t, e) {
        var n = t.raw().toString();
        if ("gentime" === e) var r = 0 | n.slice(0, 4), i = 0 | n.slice(4, 6), o = 0 | n.slice(6, 8),
            a = 0 | n.slice(8, 10), s = 0 | n.slice(10, 12), c = 0 | n.slice(12, 14); else {
            if ("utctime" !== e) return t.error("Decoding " + e + " time is not supported yet");
            r = 0 | n.slice(0, 2), i = 0 | n.slice(2, 4), o = 0 | n.slice(4, 6), a = 0 | n.slice(6, 8), s = 0 | n.slice(8, 10), c = 0 | n.slice(10, 12), r = r < 70 ? 2e3 + r : 1900 + r
        }
        return Date.UTC(r, i - 1, o, a, s, c, 0)
    }, f.prototype._decodeNull = function (t) {
        return null
    }, f.prototype._decodeBool = function (t) {
        var e = t.readUInt8();
        return t.isError(e) ? e : 0 !== e
    }, f.prototype._decodeInt = function (t, e) {
        var n = t.raw(), r = new a(n);
        return e && (r = e[r.toString(10)] || r), r
    }, f.prototype._use = function (t, e) {
        return "function" == typeof t && (t = t(e)), t._getDecoder("der").tree
    }
}, function (t, e, n) {
    var r = e;
    r._reverse = function (t) {
        var e = {};
        return Object.keys(t).forEach(function (n) {
            (0 | n) == n && (n |= 0);
            var r = t[n];
            e[r] = n
        }), e
    }, r.der = n(103)
}, function (t, e, n) {
    var r = n(0), i = n(20).Reporter, o = n(2).Buffer;

    function a(t, e) {
        i.call(this, e), o.isBuffer(t) ? (this.base = t, this.offset = 0, this.length = t.length) : this.error("Input not Buffer")
    }

    function s(t, e) {
        if (Array.isArray(t)) this.length = 0, this.value = t.map(function (t) {
            return t instanceof s || (t = new s(t, e)), this.length += t.length, t
        }, this); else if ("number" == typeof t) {
            if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
            this.value = t, this.length = 1
        } else if ("string" == typeof t) this.value = t, this.length = o.byteLength(t); else {
            if (!o.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
            this.value = t, this.length = t.length
        }
    }

    r(a, i), e.DecoderBuffer = a, a.prototype.save = function () {
        return {offset: this.offset, reporter: i.prototype.save.call(this)}
    }, a.prototype.restore = function (t) {
        var e = new a(this.base);
        return e.offset = t.offset, e.length = this.offset, this.offset = t.offset, i.prototype.restore.call(this, t.reporter), e
    }, a.prototype.isEmpty = function () {
        return this.offset === this.length
    }, a.prototype.readUInt8 = function (t) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
    }, a.prototype.skip = function (t, e) {
        if (!(this.offset + t <= this.length)) return this.error(e || "DecoderBuffer overrun");
        var n = new a(this.base);
        return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + t, this.offset += t, n
    }, a.prototype.raw = function (t) {
        return this.base.slice(t ? t.offset : this.offset, this.length)
    }, e.EncoderBuffer = s, s.prototype.join = function (t, e) {
        return t || (t = new o(this.length)), e || (e = 0), 0 === this.length ? t : (Array.isArray(this.value) ? this.value.forEach(function (n) {
            n.join(t, e), e += n.length
        }) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : o.isBuffer(this.value) && this.value.copy(t, e), e += this.length), t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(22), o = n(6), a = r.rotr64_hi, s = r.rotr64_lo, c = r.shr64_hi, f = r.shr64_lo, u = r.sum64,
        l = r.sum64_hi, h = r.sum64_lo, d = r.sum64_4_hi, p = r.sum64_4_lo, b = r.sum64_5_hi, g = r.sum64_5_lo,
        y = i.BlockHash,
        m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function v() {
        if (!(this instanceof v)) return new v;
        y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, this.W = new Array(160)
    }

    function A(t, e, n, r, i) {
        var o = t & n ^ ~t & i;
        return o < 0 && (o += 4294967296), o
    }

    function w(t, e, n, r, i, o) {
        var a = e & r ^ ~e & o;
        return a < 0 && (a += 4294967296), a
    }

    function _(t, e, n, r, i) {
        var o = t & n ^ t & i ^ n & i;
        return o < 0 && (o += 4294967296), o
    }

    function E(t, e, n, r, i, o) {
        var a = e & r ^ e & o ^ r & o;
        return a < 0 && (a += 4294967296), a
    }

    function x(t, e) {
        var n = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return n < 0 && (n += 4294967296), n
    }

    function C(t, e) {
        var n = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return n < 0 && (n += 4294967296), n
    }

    function B(t, e) {
        var n = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return n < 0 && (n += 4294967296), n
    }

    function S(t, e) {
        var n = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return n < 0 && (n += 4294967296), n
    }

    function k(t, e) {
        var n = a(t, e, 1) ^ a(t, e, 8) ^ c(t, e, 7);
        return n < 0 && (n += 4294967296), n
    }

    function I(t, e) {
        var n = s(t, e, 1) ^ s(t, e, 8) ^ f(t, e, 7);
        return n < 0 && (n += 4294967296), n
    }

    function M(t, e) {
        var n = a(t, e, 19) ^ a(e, t, 29) ^ c(t, e, 6);
        return n < 0 && (n += 4294967296), n
    }

    function T(t, e) {
        var n = s(t, e, 19) ^ s(e, t, 29) ^ f(t, e, 6);
        return n < 0 && (n += 4294967296), n
    }

    r.inherits(v, y), t.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function (t, e) {
        for (var n = this.W, r = 0; r < 32; r++) n[r] = t[e + r];
        for (; r < n.length; r += 2) {
            var i = M(n[r - 4], n[r - 3]), o = T(n[r - 4], n[r - 3]), a = n[r - 14], s = n[r - 13],
                c = k(n[r - 30], n[r - 29]), f = I(n[r - 30], n[r - 29]), u = n[r - 32], l = n[r - 31];
            n[r] = d(i, o, a, s, c, f, u, l), n[r + 1] = p(i, o, a, s, c, f, u, l)
        }
    }, v.prototype._update = function (t, e) {
        this._prepareBlock(t, e);
        var n = this.W, r = this.h[0], i = this.h[1], a = this.h[2], s = this.h[3], c = this.h[4], f = this.h[5],
            d = this.h[6], p = this.h[7], y = this.h[8], m = this.h[9], v = this.h[10], k = this.h[11], I = this.h[12],
            M = this.h[13], T = this.h[14], R = this.h[15];
        o(this.k.length === n.length);
        for (var D = 0; D < n.length; D += 2) {
            var O = T, P = R, N = B(y, m), j = S(y, m), L = A(y, 0, v, 0, I), Q = w(0, m, 0, k, 0, M), U = this.k[D],
                F = this.k[D + 1], Y = n[D], H = n[D + 1], z = b(O, P, N, j, L, Q, U, F, Y, H),
                V = g(O, P, N, j, L, Q, U, F, Y, H);
            O = x(r, i), P = C(r, i), N = _(r, 0, a, 0, c), j = E(0, i, 0, s, 0, f);
            var $ = l(O, P, N, j), G = h(O, P, N, j);
            T = I, R = M, I = v, M = k, v = y, k = m, y = l(d, p, z, V), m = h(p, p, z, V), d = c, p = f, c = a, f = s, a = r, s = i, r = l(z, V, $, G), i = h(z, V, $, G)
        }
        u(this.h, 0, r, i), u(this.h, 2, a, s), u(this.h, 4, c, f), u(this.h, 6, d, p), u(this.h, 8, y, m), u(this.h, 10, v, k), u(this.h, 12, I, M), u(this.h, 14, T, R)
    }, v.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(22), o = n(59), a = n(6), s = r.sum32, c = r.sum32_4, f = r.sum32_5, u = o.ch32, l = o.maj32,
        h = o.s0_256, d = o.s1_256, p = o.g0_256, b = o.g1_256, g = i.BlockHash,
        y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function m() {
        if (!(this instanceof m)) return new m;
        g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = new Array(64)
    }

    r.inherits(m, g), t.exports = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, m.padLength = 64, m.prototype._update = function (t, e) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = t[e + r];
        for (; r < n.length; r++) n[r] = c(b(n[r - 2]), n[r - 7], p(n[r - 15]), n[r - 16]);
        var i = this.h[0], o = this.h[1], g = this.h[2], y = this.h[3], m = this.h[4], v = this.h[5], A = this.h[6],
            w = this.h[7];
        for (a(this.k.length === n.length), r = 0; r < n.length; r++) {
            var _ = f(w, d(m), u(m, v, A), this.k[r], n[r]), E = s(h(i), l(i, o, g));
            w = A, A = v, v = m, m = s(y, _), y = g, g = o, o = i, i = s(_, E)
        }
        this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], g), this.h[3] = s(this.h[3], y), this.h[4] = s(this.h[4], m), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], A), this.h[7] = s(this.h[7], w)
    }, m.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9).rotr32;

    function i(t, e, n) {
        return t & e ^ ~t & n
    }

    function o(t, e, n) {
        return t & e ^ t & n ^ e & n
    }

    function a(t, e, n) {
        return t ^ e ^ n
    }

    e.ft_1 = function (t, e, n, r) {
        return 0 === t ? i(e, n, r) : 1 === t || 3 === t ? a(e, n, r) : 2 === t ? o(e, n, r) : void 0
    }, e.ch32 = i, e.maj32 = o, e.p32 = a, e.s0_256 = function (t) {
        return r(t, 2) ^ r(t, 13) ^ r(t, 22)
    }, e.s1_256 = function (t) {
        return r(t, 6) ^ r(t, 11) ^ r(t, 25)
    }, e.g0_256 = function (t) {
        return r(t, 7) ^ r(t, 18) ^ t >>> 3
    }, e.g1_256 = function (t) {
        return r(t, 17) ^ r(t, 19) ^ t >>> 10
    }
}, function (t, e, n) {
    "use strict";
    var r = e;

    function i(t) {
        return 1 === t.length ? "0" + t : t
    }

    function o(t) {
        for (var e = "", n = 0; n < t.length; n++) e += i(t[n].toString(16));
        return e
    }

    r.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var n = [];
        if ("string" != typeof t) {
            for (var r = 0; r < t.length; r++) n[r] = 0 | t[r];
            return n
        }
        if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), r = 0; r < t.length; r += 2) n.push(parseInt(t[r] + t[r + 1], 16)); else for (r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r), o = i >> 8, a = 255 & i;
            o ? n.push(o, a) : n.push(a)
        }
        return n
    }, r.zero2 = i, r.toHex = o, r.encode = function (t, e) {
        return "hex" === e ? o(t) : t
    }
}, function (t, e, n) {
    var r;

    function i(t) {
        this.rand = t
    }

    if (t.exports = function (t) {
        return r || (r = new i(null)), r.generate(t)
    }, t.exports.Rand = i, i.prototype.generate = function (t) {
        return this._rand(t)
    }, i.prototype._rand = function (t) {
        if (this.rand.getBytes) return this.rand.getBytes(t);
        for (var e = new Uint8Array(t), n = 0; n < e.length; n++) e[n] = this.rand.getByte();
        return e
    }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (t) {
        var e = new Uint8Array(t);
        return self.crypto.getRandomValues(e), e
    } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (t) {
        var e = new Uint8Array(t);
        return self.msCrypto.getRandomValues(e), e
    } : "object" == typeof window && (i.prototype._rand = function () {
        throw new Error("Not implemented yet")
    }); else try {
        var o = n(136);
        if ("function" != typeof o.randomBytes) throw new Error("Not supported");
        i.prototype._rand = function (t) {
            return o.randomBytes(t)
        }
    } catch (t) {
    }
}, function (t, e, n) {
    var r = n(3), i = n(61);

    function o(t) {
        this.rand = t || new i.Rand
    }

    t.exports = o, o.create = function (t) {
        return new o(t)
    }, o.prototype._randbelow = function (t) {
        var e = t.bitLength(), n = Math.ceil(e / 8);
        do {
            var i = new r(this.rand.generate(n))
        } while (i.cmp(t) >= 0);
        return i
    }, o.prototype._randrange = function (t, e) {
        var n = e.sub(t);
        return t.add(this._randbelow(n))
    }, o.prototype.test = function (t, e, n) {
        var i = t.bitLength(), o = r.mont(t), a = new r(1).toRed(o);
        e || (e = Math.max(1, i / 48 | 0));
        for (var s = t.subn(1), c = 0; !s.testn(c); c++) ;
        for (var f = t.shrn(c), u = s.toRed(o); e > 0; e--) {
            var l = this._randrange(new r(2), s);
            n && n(l);
            var h = l.toRed(o).redPow(f);
            if (0 !== h.cmp(a) && 0 !== h.cmp(u)) {
                for (var d = 1; d < c; d++) {
                    if (0 === (h = h.redSqr()).cmp(a)) return !1;
                    if (0 === h.cmp(u)) break
                }
                if (d === c) return !1
            }
        }
        return !0
    }, o.prototype.getDivisor = function (t, e) {
        var n = t.bitLength(), i = r.mont(t), o = new r(1).toRed(i);
        e || (e = Math.max(1, n / 48 | 0));
        for (var a = t.subn(1), s = 0; !a.testn(s); s++) ;
        for (var c = t.shrn(s), f = a.toRed(i); e > 0; e--) {
            var u = this._randrange(new r(2), a), l = t.gcd(u);
            if (0 !== l.cmpn(1)) return l;
            var h = u.toRed(i).redPow(c);
            if (0 !== h.cmp(o) && 0 !== h.cmp(f)) {
                for (var d = 1; d < s; d++) {
                    if (0 === (h = h.redSqr()).cmp(o)) return h.fromRed().subn(1).gcd(t);
                    if (0 === h.cmp(f)) break
                }
                if (d === s) return (h = h.redSqr()).fromRed().subn(1).gcd(t)
            }
        }
        return !1
    }
}, function (t, e, n) {
    var r = n(14);
    t.exports = y, y.simpleSieve = b, y.fermatTest = g;
    var i = n(3), o = new i(24), a = new (n(62)), s = new i(1), c = new i(2), f = new i(5),
        u = (new i(16), new i(8), new i(10)), l = new i(3), h = (new i(7), new i(11)), d = new i(4),
        p = (new i(12), null);

    function b(t) {
        for (var e = function () {
            if (null !== p) return p;
            var t = [];
            t[0] = 2;
            for (var e = 1, n = 3; n < 1048576; n += 2) {
                for (var r = Math.ceil(Math.sqrt(n)), i = 0; i < e && t[i] <= r && n % t[i] != 0; i++) ;
                e !== i && t[i] <= r || (t[e++] = n)
            }
            return p = t, t
        }(), n = 0; n < e.length; n++) if (0 === t.modn(e[n])) return 0 === t.cmpn(e[n]);
        return !0
    }

    function g(t) {
        var e = i.mont(t);
        return 0 === c.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)
    }

    function y(t, e) {
        if (t < 16) return new i(2 === e || 5 === e ? [140, 123] : [140, 39]);
        var n, p;
        for (e = new i(e); ;) {
            for (n = new i(r(Math.ceil(t / 8))); n.bitLength() > t;) n.ishrn(1);
            if (n.isEven() && n.iadd(s), n.testn(1) || n.iadd(c), e.cmp(c)) {
                if (!e.cmp(f)) for (; n.mod(u).cmp(l);) n.iadd(d)
            } else for (; n.mod(o).cmp(h);) n.iadd(d);
            if (b(p = n.shrn(1)) && b(n) && g(p) && g(n) && a.test(p) && a.test(n)) return n
        }
    }
}, function (t, e, n) {
    var r = n(31), i = n(1).Buffer, o = n(10);

    function a(t, e, n, a) {
        o.call(this), this._cipher = new r.AES(e), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = a, this._mode = t
    }

    n(0)(a, o), a.prototype._update = function (t) {
        return this._mode.encrypt(this, t, this._decrypt)
    }, a.prototype._final = function () {
        this._cipher.scrub()
    }, t.exports = a
}, function (t, e, n) {
    var r = n(31), i = n(1).Buffer, o = n(10), a = n(0), s = n(142), c = n(23), f = n(67);

    function u(t, e, n, a) {
        o.call(this);
        var c = i.alloc(4, 0);
        this._cipher = new r.AES(e);
        var u = this._cipher.encryptBlock(c);
        this._ghash = new s(u), n = function (t, e, n) {
            if (12 === e.length) return t._finID = i.concat([e, i.from([0, 0, 0, 1])]), i.concat([e, i.from([0, 0, 0, 2])]);
            var r = new s(n), o = e.length, a = o % 16;
            r.update(e), a && (a = 16 - a, r.update(i.alloc(a, 0))), r.update(i.alloc(8, 0));
            var c = 8 * o, u = i.alloc(8);
            u.writeUIntBE(c, 0, 8), r.update(u), t._finID = r.state;
            var l = i.from(t._finID);
            return f(l), l
        }(this, n, u), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = a, this._alen = 0, this._len = 0, this._mode = t, this._authTag = null, this._called = !1
    }

    a(u, o), u.prototype._update = function (t) {
        if (!this._called && this._alen) {
            var e = 16 - this._alen % 16;
            e < 16 && (e = i.alloc(e, 0), this._ghash.update(e))
        }
        this._called = !0;
        var n = this._mode.encrypt(this, t);
        return this._decrypt ? this._ghash.update(t) : this._ghash.update(n), this._len += t.length, n
    }, u.prototype._final = function () {
        if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
        var t = c(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function (t, e) {
            var n = 0;
            t.length !== e.length && n++;
            for (var r = Math.min(t.length, e.length), i = 0; i < r; ++i) n += t[i] ^ e[i];
            return n
        }(t, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = t, this._cipher.scrub()
    }, u.prototype.getAuthTag = function () {
        if (this._decrypt || !i.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }, u.prototype.setAuthTag = function (t) {
        if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = t
    }, u.prototype.setAAD = function (t) {
        if (this._called) throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(t), this._alen += t.length
    }, t.exports = u
}, function (t) {
    t.exports = {
        "aes-128-ecb": {cipher: "AES", key: 128, iv: 0, mode: "ECB", type: "block"},
        "aes-192-ecb": {cipher: "AES", key: 192, iv: 0, mode: "ECB", type: "block"},
        "aes-256-ecb": {cipher: "AES", key: 256, iv: 0, mode: "ECB", type: "block"},
        "aes-128-cbc": {cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block"},
        "aes-192-cbc": {cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block"},
        "aes-256-cbc": {cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block"},
        aes128: {cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block"},
        aes192: {cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block"},
        aes256: {cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block"},
        "aes-128-cfb": {cipher: "AES", key: 128, iv: 16, mode: "CFB", type: "stream"},
        "aes-192-cfb": {cipher: "AES", key: 192, iv: 16, mode: "CFB", type: "stream"},
        "aes-256-cfb": {cipher: "AES", key: 256, iv: 16, mode: "CFB", type: "stream"},
        "aes-128-cfb8": {cipher: "AES", key: 128, iv: 16, mode: "CFB8", type: "stream"},
        "aes-192-cfb8": {cipher: "AES", key: 192, iv: 16, mode: "CFB8", type: "stream"},
        "aes-256-cfb8": {cipher: "AES", key: 256, iv: 16, mode: "CFB8", type: "stream"},
        "aes-128-cfb1": {cipher: "AES", key: 128, iv: 16, mode: "CFB1", type: "stream"},
        "aes-192-cfb1": {cipher: "AES", key: 192, iv: 16, mode: "CFB1", type: "stream"},
        "aes-256-cfb1": {cipher: "AES", key: 256, iv: 16, mode: "CFB1", type: "stream"},
        "aes-128-ofb": {cipher: "AES", key: 128, iv: 16, mode: "OFB", type: "stream"},
        "aes-192-ofb": {cipher: "AES", key: 192, iv: 16, mode: "OFB", type: "stream"},
        "aes-256-ofb": {cipher: "AES", key: 256, iv: 16, mode: "OFB", type: "stream"},
        "aes-128-ctr": {cipher: "AES", key: 128, iv: 16, mode: "CTR", type: "stream"},
        "aes-192-ctr": {cipher: "AES", key: 192, iv: 16, mode: "CTR", type: "stream"},
        "aes-256-ctr": {cipher: "AES", key: 256, iv: 16, mode: "CTR", type: "stream"},
        "aes-128-gcm": {cipher: "AES", key: 128, iv: 12, mode: "GCM", type: "auth"},
        "aes-192-gcm": {cipher: "AES", key: 192, iv: 12, mode: "GCM", type: "auth"},
        "aes-256-gcm": {cipher: "AES", key: 256, iv: 12, mode: "GCM", type: "auth"}
    }
}, function (t, e) {
    t.exports = function (t) {
        for (var e, n = t.length; n--;) {
            if (255 !== (e = t.readUInt8(n))) {
                e++, t.writeUInt8(e, n);
                break
            }
            t.writeUInt8(0, n)
        }
    }
}, function (t, e, n) {
    var r = n(23), i = n(1).Buffer, o = n(67);

    function a(t) {
        var e = t._cipher.encryptBlockRaw(t._prev);
        return o(t._prev), e
    }

    e.encrypt = function (t, e) {
        var n = Math.ceil(e.length / 16), o = t._cache.length;
        t._cache = i.concat([t._cache, i.allocUnsafe(16 * n)]);
        for (var s = 0; s < n; s++) {
            var c = a(t), f = o + 16 * s;
            t._cache.writeUInt32BE(c[0], f + 0), t._cache.writeUInt32BE(c[1], f + 4), t._cache.writeUInt32BE(c[2], f + 8), t._cache.writeUInt32BE(c[3], f + 12)
        }
        var u = t._cache.slice(0, e.length);
        return t._cache = t._cache.slice(e.length), r(e, u)
    }
}, function (t, e, n) {
    var r = n(74), i = n(41), o = n(40), a = n(71), s = n(70), c = n(1).Buffer, f = c.alloc(128),
        u = {md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, rmd160: 20, ripemd160: 20};

    function l(t, e, n) {
        var a = function (t) {
            return "rmd160" === t || "ripemd160" === t ? i : "md5" === t ? r : function (e) {
                return o(t).update(e).digest()
            }
        }(t), s = "sha512" === t || "sha384" === t ? 128 : 64;
        e.length > s ? e = a(e) : e.length < s && (e = c.concat([e, f], s));
        for (var l = c.allocUnsafe(s + u[t]), h = c.allocUnsafe(s + u[t]), d = 0; d < s; d++) l[d] = 54 ^ e[d], h[d] = 92 ^ e[d];
        var p = c.allocUnsafe(s + n + 4);
        l.copy(p, 0, 0, s), this.ipad1 = p, this.ipad2 = l, this.opad = h, this.alg = t, this.blocksize = s, this.hash = a, this.size = u[t]
    }

    l.prototype.run = function (t, e) {
        return t.copy(e, this.blocksize), this.hash(e).copy(this.opad, this.blocksize), this.hash(this.opad)
    }, t.exports = function (t, e, n, r, i) {
        c.isBuffer(t) || (t = c.from(t, s)), c.isBuffer(e) || (e = c.from(e, s)), a(n, r);
        var o = new l(i = i || "sha1", t, e.length), f = c.allocUnsafe(r), h = c.allocUnsafe(e.length + 4);
        e.copy(h, 0, 0, e.length);
        for (var d = 0, p = u[i], b = Math.ceil(r / p), g = 1; g <= b; g++) {
            h.writeUInt32BE(g, e.length);
            for (var y = o.run(h, o.ipad1), m = y, v = 1; v < n; v++) {
                m = o.run(m, o.ipad2);
                for (var A = 0; A < p; A++) y[A] ^= m[A]
            }
            y.copy(f, d), d += p
        }
        return f
    }
}, function (t, e, n) {
    (function (e) {
        var n;
        n = e.browser ? "utf-8" : parseInt(e.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary", t.exports = n
    }).call(this, n(11))
}, function (t, e) {
    var n = Math.pow(2, 30) - 1;
    t.exports = function (t, e) {
        if ("number" != typeof t) throw new TypeError("Iterations not a number");
        if (t < 0) throw new TypeError("Bad iterations");
        if ("number" != typeof e) throw new TypeError("Key length not a number");
        if (e < 0 || e > n || e != e) throw new TypeError("Bad key length")
    }
}, function (t, e, n) {
    e.pbkdf2 = n(157), e.pbkdf2Sync = n(69)
}, function (t) {
    t.exports = {
        sha224WithRSAEncryption: {sign: "rsa", hash: "sha224", id: "302d300d06096086480165030402040500041c"},
        "RSA-SHA224": {sign: "ecdsa/rsa", hash: "sha224", id: "302d300d06096086480165030402040500041c"},
        sha256WithRSAEncryption: {sign: "rsa", hash: "sha256", id: "3031300d060960864801650304020105000420"},
        "RSA-SHA256": {sign: "ecdsa/rsa", hash: "sha256", id: "3031300d060960864801650304020105000420"},
        sha384WithRSAEncryption: {sign: "rsa", hash: "sha384", id: "3041300d060960864801650304020205000430"},
        "RSA-SHA384": {sign: "ecdsa/rsa", hash: "sha384", id: "3041300d060960864801650304020205000430"},
        sha512WithRSAEncryption: {sign: "rsa", hash: "sha512", id: "3051300d060960864801650304020305000440"},
        "RSA-SHA512": {sign: "ecdsa/rsa", hash: "sha512", id: "3051300d060960864801650304020305000440"},
        "RSA-SHA1": {sign: "rsa", hash: "sha1", id: "3021300906052b0e03021a05000414"},
        "ecdsa-with-SHA1": {sign: "ecdsa", hash: "sha1", id: ""},
        sha256: {sign: "ecdsa", hash: "sha256", id: ""},
        sha224: {sign: "ecdsa", hash: "sha224", id: ""},
        sha384: {sign: "ecdsa", hash: "sha384", id: ""},
        sha512: {sign: "ecdsa", hash: "sha512", id: ""},
        "DSA-SHA": {sign: "dsa", hash: "sha1", id: ""},
        "DSA-SHA1": {sign: "dsa", hash: "sha1", id: ""},
        DSA: {sign: "dsa", hash: "sha1", id: ""},
        "DSA-WITH-SHA224": {sign: "dsa", hash: "sha224", id: ""},
        "DSA-SHA224": {sign: "dsa", hash: "sha224", id: ""},
        "DSA-WITH-SHA256": {sign: "dsa", hash: "sha256", id: ""},
        "DSA-SHA256": {sign: "dsa", hash: "sha256", id: ""},
        "DSA-WITH-SHA384": {sign: "dsa", hash: "sha384", id: ""},
        "DSA-SHA384": {sign: "dsa", hash: "sha384", id: ""},
        "DSA-WITH-SHA512": {sign: "dsa", hash: "sha512", id: ""},
        "DSA-SHA512": {sign: "dsa", hash: "sha512", id: ""},
        "DSA-RIPEMD160": {sign: "dsa", hash: "rmd160", id: ""},
        ripemd160WithRSA: {sign: "rsa", hash: "rmd160", id: "3021300906052b2403020105000414"},
        "RSA-RIPEMD160": {sign: "rsa", hash: "rmd160", id: "3021300906052b2403020105000414"},
        md5WithRSAEncryption: {sign: "rsa", hash: "md5", id: "3020300c06082a864886f70d020505000410"},
        "RSA-MD5": {sign: "rsa", hash: "md5", id: "3020300c06082a864886f70d020505000410"}
    }
}, function (t, e, n) {
    var r = n(45);
    t.exports = function (t) {
        return (new r).update(t).digest()
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(159), o = n(10), a = n(1).Buffer, s = n(74), c = n(41), f = n(40), u = a.alloc(128);

    function l(t, e) {
        o.call(this, "digest"), "string" == typeof e && (e = a.from(e));
        var n = "sha512" === t || "sha384" === t ? 128 : 64;
        this._alg = t, this._key = e, e.length > n ? e = ("rmd160" === t ? new c : f(t)).update(e).digest() : e.length < n && (e = a.concat([e, u], n));
        for (var r = this._ipad = a.allocUnsafe(n), i = this._opad = a.allocUnsafe(n), s = 0; s < n; s++) r[s] = 54 ^ e[s], i[s] = 92 ^ e[s];
        this._hash = "rmd160" === t ? new c : f(t), this._hash.update(r)
    }

    r(l, o), l.prototype._update = function (t) {
        this._hash.update(t)
    }, l.prototype._final = function () {
        var t = this._hash.digest();
        return ("rmd160" === this._alg ? new c : f(this._alg)).update(this._opad).update(t).digest()
    }, t.exports = function (t, e) {
        return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new l("rmd160", e) : "md5" === t ? new i(s, e) : new l(t, e)
    }
}, function (t, e, n) {
    var r = n(0), i = n(13), o = n(1).Buffer,
        a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        s = new Array(160);

    function c() {
        this.init(), this._w = s, i.call(this, 128, 112)
    }

    function f(t, e, n) {
        return n ^ t & (e ^ n)
    }

    function u(t, e, n) {
        return t & e | n & (t | e)
    }

    function l(t, e) {
        return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
    }

    function h(t, e) {
        return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
    }

    function d(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
    }

    function p(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
    }

    function b(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
    }

    function g(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
    }

    function y(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0
    }

    r(c, i), c.prototype.init = function () {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    }, c.prototype._update = function (t) {
        for (var e = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, c = 0 | this._fh, m = 0 | this._gh, v = 0 | this._hh, A = 0 | this._al, w = 0 | this._bl, _ = 0 | this._cl, E = 0 | this._dl, x = 0 | this._el, C = 0 | this._fl, B = 0 | this._gl, S = 0 | this._hl, k = 0; k < 32; k += 2) e[k] = t.readInt32BE(4 * k), e[k + 1] = t.readInt32BE(4 * k + 4);
        for (; k < 160; k += 2) {
            var I = e[k - 30], M = e[k - 30 + 1], T = d(I, M), R = p(M, I), D = b(I = e[k - 4], M = e[k - 4 + 1]),
                O = g(M, I), P = e[k - 14], N = e[k - 14 + 1], j = e[k - 32], L = e[k - 32 + 1], Q = R + N | 0,
                U = T + P + y(Q, R) | 0;
            U = (U = U + D + y(Q = Q + O | 0, O) | 0) + j + y(Q = Q + L | 0, L) | 0, e[k] = U, e[k + 1] = Q
        }
        for (var F = 0; F < 160; F += 2) {
            U = e[F], Q = e[F + 1];
            var Y = u(n, r, i), H = u(A, w, _), z = l(n, A), V = l(A, n), $ = h(s, x), G = h(x, s), J = a[F],
                q = a[F + 1], W = f(s, c, m), X = f(x, C, B), K = S + G | 0, Z = v + $ + y(K, S) | 0;
            Z = (Z = (Z = Z + W + y(K = K + X | 0, X) | 0) + J + y(K = K + q | 0, q) | 0) + U + y(K = K + Q | 0, Q) | 0;
            var tt = V + H | 0, et = z + Y + y(tt, V) | 0;
            v = m, S = B, m = c, B = C, c = s, C = x, s = o + Z + y(x = E + K | 0, E) | 0, o = i, E = _, i = r, _ = w, r = n, w = A, n = Z + et + y(A = K + tt | 0, K) | 0
        }
        this._al = this._al + A | 0, this._bl = this._bl + w | 0, this._cl = this._cl + _ | 0, this._dl = this._dl + E | 0, this._el = this._el + x | 0, this._fl = this._fl + C | 0, this._gl = this._gl + B | 0, this._hl = this._hl + S | 0, this._ah = this._ah + n + y(this._al, A) | 0, this._bh = this._bh + r + y(this._bl, w) | 0, this._ch = this._ch + i + y(this._cl, _) | 0, this._dh = this._dh + o + y(this._dl, E) | 0, this._eh = this._eh + s + y(this._el, x) | 0, this._fh = this._fh + c + y(this._fl, C) | 0, this._gh = this._gh + m + y(this._gl, B) | 0, this._hh = this._hh + v + y(this._hl, S) | 0
    }, c.prototype._hash = function () {
        var t = o.allocUnsafe(64);

        function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4)
        }

        return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
    }, t.exports = c
}, function (t, e, n) {
    var r = n(0), i = n(13), o = n(1).Buffer,
        a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        s = new Array(64);

    function c() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }

    function f(t, e, n) {
        return n ^ t & (e ^ n)
    }

    function u(t, e, n) {
        return t & e | n & (t | e)
    }

    function l(t) {
        return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
    }

    function h(t) {
        return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
    }

    function d(t) {
        return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
    }

    r(c, i), c.prototype.init = function () {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    }, c.prototype._update = function (t) {
        for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, c = 0 | this._e, p = 0 | this._f, b = 0 | this._g, g = 0 | this._h, y = 0; y < 16; ++y) n[y] = t.readInt32BE(4 * y);
        for (; y < 64; ++y) n[y] = 0 | (((e = n[y - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + n[y - 7] + d(n[y - 15]) + n[y - 16];
        for (var m = 0; m < 64; ++m) {
            var v = g + h(c) + f(c, p, b) + a[m] + n[m] | 0, A = l(r) + u(r, i, o) | 0;
            g = b, b = p, p = c, c = s + v | 0, s = o, o = i, i = r, r = v + A | 0
        }
        this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = c + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = g + this._h | 0
    }, c.prototype._hash = function () {
        var t = o.allocUnsafe(32);
        return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
    }, t.exports = c
}, function (t, e, n) {
    "use strict";
    t.exports = o;
    var r = n(12), i = n(25);

    function o(t) {
        if (!(this instanceof o)) return new o(t);
        r.call(this, t), this._transformState = {
            afterTransform: function (t, e) {
                var n = this._transformState;
                n.transforming = !1;
                var r = n.writecb;
                if (!r) return this.emit("error", new Error("write callback called multiple times"));
                n.writechunk = null, n.writecb = null, null != e && this.push(e), r(t);
                var i = this._readableState;
                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", a)
    }

    function a() {
        var t = this;
        "function" == typeof this._flush ? this._flush(function (e, n) {
            s(t, e, n)
        }) : s(this, null, null)
    }

    function s(t, e, n) {
        if (e) return t.emit("error", e);
        if (null != n && t.push(n), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return t.push(null)
    }

    i.inherits = n(24), i.inherits(o, r), o.prototype.push = function (t, e) {
        return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e)
    }, o.prototype._transform = function (t, e, n) {
        throw new Error("_transform() is not implemented")
    }, o.prototype._write = function (t, e, n) {
        var r = this._transformState;
        if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, o.prototype._read = function (t) {
        var e = this._transformState;
        null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }, o.prototype._destroy = function (t, e) {
        var n = this;
        r.prototype._destroy.call(this, t, function (t) {
            e(t), n.emit("close")
        })
    }
}, function (t, e, n) {
    "use strict";
    var r = n(32);

    function i(t, e) {
        t.emit("error", e)
    }

    t.exports = {
        destroy: function (t, e) {
            var n = this, o = this._readableState && this._readableState.destroyed,
                a = this._writableState && this._writableState.destroyed;
            return o || a ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
                !e && t ? (r.nextTick(i, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t)
            }), this)
        }, undestroy: function () {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        }
    }
}, function (t, e, n) {
    t.exports = n(15).EventEmitter
}, function (t, e, n) {
    "use strict";
    (function (e, r) {
        var i = n(32);
        t.exports = v;
        var o, a = n(82);
        v.ReadableState = m, n(15).EventEmitter;
        var s = function (t, e) {
            return t.listeners(e).length
        }, c = n(80), f = n(1).Buffer, u = e.Uint8Array || function () {
        }, l = n(25);
        l.inherits = n(24);
        var h = n(175), d = void 0;
        d = h && h.debuglog ? h.debuglog("stream") : function () {
        };
        var p, b = n(174), g = n(79);
        l.inherits(v, c);
        var y = ["error", "close", "destroy", "pause", "resume"];

        function m(t, e) {
            o = o || n(12), t = t || {};
            var r = e instanceof o;
            this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
            var i = t.highWaterMark, a = t.readableHighWaterMark, s = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (p || (p = n(42).StringDecoder), this.decoder = new p(t.encoding), this.encoding = t.encoding)
        }

        function v(t) {
            if (o = o || n(12), !(this instanceof v)) return new v(t);
            this._readableState = new m(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), c.call(this)
        }

        function A(t, e, n, r, i) {
            var o, a = t._readableState;
            return null === e ? (a.reading = !1, function (t, e) {
                if (!e.ended) {
                    if (e.decoder) {
                        var n = e.decoder.end();
                        n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
                    }
                    e.ended = !0, x(t)
                }
            }(t, a)) : (i || (o = function (t, e) {
                var n, r;
                return r = e, f.isBuffer(r) || r instanceof u || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
            }(a, e)), o ? t.emit("error", o) : a.objectMode || e && e.length > 0 ? ("string" == typeof e || a.objectMode || Object.getPrototypeOf(e) === f.prototype || (e = function (t) {
                return f.from(t)
            }(e)), r ? a.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : w(t, a, e, !0) : a.ended ? t.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (e = a.decoder.write(e), a.objectMode || 0 !== e.length ? w(t, a, e, !1) : B(t, a)) : w(t, a, e, !1))) : r || (a.reading = !1)), function (t) {
                return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            }(a)
        }

        function w(t, e, n, r) {
            e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && x(t)), B(t, e)
        }

        Object.defineProperty(v.prototype, "destroyed", {
            get: function () {
                return void 0 !== this._readableState && this._readableState.destroyed
            }, set: function (t) {
                this._readableState && (this._readableState.destroyed = t)
            }
        }), v.prototype.destroy = g.destroy, v.prototype._undestroy = g.undestroy, v.prototype._destroy = function (t, e) {
            this.push(null), e(t)
        }, v.prototype.push = function (t, e) {
            var n, r = this._readableState;
            return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = f.from(t, e), e = ""), n = !0), A(this, t, e, !1, n)
        }, v.prototype.unshift = function (t) {
            return A(this, t, null, !0, !1)
        }, v.prototype.isPaused = function () {
            return !1 === this._readableState.flowing
        }, v.prototype.setEncoding = function (t) {
            return p || (p = n(42).StringDecoder), this._readableState.decoder = new p(t), this._readableState.encoding = t, this
        };
        var _ = 8388608;

        function E(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function (t) {
                return t >= _ ? t = _ : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
            }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
        }

        function x(t) {
            var e = t._readableState;
            e.needReadable = !1, e.emittedReadable || (d("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i.nextTick(C, t) : C(t))
        }

        function C(t) {
            d("emit readable"), t.emit("readable"), M(t)
        }

        function B(t, e) {
            e.readingMore || (e.readingMore = !0, i.nextTick(S, t, e))
        }

        function S(t, e) {
            for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (d("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
            e.readingMore = !1
        }

        function k(t) {
            d("readable nexttick read 0"), t.read(0)
        }

        function I(t, e) {
            e.reading || (d("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), M(t), e.flowing && !e.reading && t.read(0)
        }

        function M(t) {
            var e = t._readableState;
            for (d("flow", e.flowing); e.flowing && null !== t.read();) ;
        }

        function T(t, e) {
            return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function (t, e, n) {
                var r;
                return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
                    var n = e.head, r = 1, i = n.data;
                    for (t -= i.length; n = n.next;) {
                        var o = n.data, a = t > o.length ? o.length : t;
                        if (a === o.length ? i += o : i += o.slice(0, t), 0 == (t -= a)) {
                            a === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(a));
                            break
                        }
                        ++r
                    }
                    return e.length -= r, i
                }(t, e) : function (t, e) {
                    var n = f.allocUnsafe(t), r = e.head, i = 1;
                    for (r.data.copy(n), t -= r.data.length; r = r.next;) {
                        var o = r.data, a = t > o.length ? o.length : t;
                        if (o.copy(n, n.length - t, 0, a), 0 == (t -= a)) {
                            a === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(a));
                            break
                        }
                        ++i
                    }
                    return e.length -= i, n
                }(t, e), r
            }(t, e.buffer, e.decoder), n);
            var n
        }

        function R(t) {
            var e = t._readableState;
            if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0, i.nextTick(D, e, t))
        }

        function D(t, e) {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
        }

        function O(t, e) {
            for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1
        }

        v.prototype.read = function (t) {
            d("read", t), t = parseInt(t, 10);
            var e = this._readableState, n = t;
            if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return d("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? R(this) : x(this), null;
            if (0 === (t = E(t, e)) && e.ended) return 0 === e.length && R(this), null;
            var r, i = e.needReadable;
            return d("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && d("length less than watermark", i = !0), e.ended || e.reading ? d("reading or ended", i = !1) : i && (d("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = E(n, e))), null === (r = t > 0 ? T(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && R(this)), null !== r && this.emit("data", r), r
        }, v.prototype._read = function (t) {
            this.emit("error", new Error("_read() is not implemented"))
        }, v.prototype.pipe = function (t, e) {
            var n = this, o = this._readableState;
            switch (o.pipesCount) {
                case 0:
                    o.pipes = t;
                    break;
                case 1:
                    o.pipes = [o.pipes, t];
                    break;
                default:
                    o.pipes.push(t)
            }
            o.pipesCount += 1, d("pipe count=%d opts=%j", o.pipesCount, e);
            var c = e && !1 === e.end || t === r.stdout || t === r.stderr ? m : f;

            function f() {
                d("onend"), t.end()
            }

            o.endEmitted ? i.nextTick(c) : n.once("end", c), t.on("unpipe", function e(r, i) {
                d("onunpipe"), r === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, d("cleanup"), t.removeListener("close", g), t.removeListener("finish", y), t.removeListener("drain", u), t.removeListener("error", b), t.removeListener("unpipe", e), n.removeListener("end", f), n.removeListener("end", m), n.removeListener("data", p), l = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || u())
            });
            var u = function (t) {
                return function () {
                    var e = t._readableState;
                    d("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && s(t, "data") && (e.flowing = !0, M(t))
                }
            }(n);
            t.on("drain", u);
            var l = !1, h = !1;

            function p(e) {
                d("ondata"), h = !1, !1 !== t.write(e) || h || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== O(o.pipes, t)) && !l && (d("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, h = !0), n.pause())
            }

            function b(e) {
                d("onerror", e), m(), t.removeListener("error", b), 0 === s(t, "error") && t.emit("error", e)
            }

            function g() {
                t.removeListener("finish", y), m()
            }

            function y() {
                d("onfinish"), t.removeListener("close", g), m()
            }

            function m() {
                d("unpipe"), n.unpipe(t)
            }

            return n.on("data", p), function (t, e, n) {
                if ("function" == typeof t.prependListener) return t.prependListener(e, n);
                t._events && t._events[e] ? a(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
            }(t, "error", b), t.once("close", g), t.once("finish", y), t.emit("pipe", n), o.flowing || (d("pipe resume"), n.resume()), t
        }, v.prototype.unpipe = function (t) {
            var e = this._readableState, n = {hasUnpiped: !1};
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);
            if (!t) {
                var r = e.pipes, i = e.pipesCount;
                e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
                return this
            }
            var a = O(e.pipes, t);
            return -1 === a ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this)
        }, v.prototype.on = function (t, e) {
            var n = c.prototype.on.call(this, t, e);
            if ("data" === t) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === t) {
                var r = this._readableState;
                r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && x(this) : i.nextTick(k, this))
            }
            return n
        }, v.prototype.addListener = v.prototype.on, v.prototype.resume = function () {
            var t = this._readableState;
            return t.flowing || (d("resume"), t.flowing = !0, function (t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(I, t, e))
            }(this, t)), this
        }, v.prototype.pause = function () {
            return d("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, v.prototype.wrap = function (t) {
            var e = this, n = this._readableState, r = !1;
            for (var i in t.on("end", function () {
                if (d("wrapped end"), n.decoder && !n.ended) {
                    var t = n.decoder.end();
                    t && t.length && e.push(t)
                }
                e.push(null)
            }), t.on("data", function (i) {
                d("wrapped data"), n.decoder && (i = n.decoder.write(i)), (!n.objectMode || null !== i && void 0 !== i) && (n.objectMode || i && i.length) && (e.push(i) || (r = !0, t.pause()))
            }), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
                return function () {
                    return t[e].apply(t, arguments)
                }
            }(i));
            for (var o = 0; o < y.length; o++) t.on(y[o], this.emit.bind(this, y[o]));
            return this._read = function (e) {
                d("wrapped _read", e), r && (r = !1, t.resume())
            }, this
        }, Object.defineProperty(v.prototype, "readableHighWaterMark", {
            enumerable: !1, get: function () {
                return this._readableState.highWaterMark
            }
        }), v._fromList = T
    }).call(this, n(8), n(11))
}, function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
        return "[object Array]" == n.call(t)
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = f(i), a = (f(n(7)), f(n(195))), s = f(n(89)), c = n(34);

    function f(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var u = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {display: "none"}, n.filterData = {}, n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "onFilter", value: function (t, e) {
                if ("Enter" === e.key) {
                    var n = e.target.value, r = e.target.name, i = this.filterData[r];
                    if (n !== i) {
                        this.filterData[r] = n;
                        for (var o = $(e.target).parent().parent().parent().children("tr"), a = 1; a < o.length; a++) {
                            var s = $(o[a]), c = !1;
                            s.children("td").each(function (e, r) {
                                var i = $(r);
                                if (e === t) return i.children("div").html().indexOf(n) > -1 && (c = !0), !1
                            }), c ? s.show() : s.hide()
                        }
                    }
                }
            }
        }, {
            key: "render", value: function () {
                var t = this, e = this.props, n = e.headers, r = e.operationConfig, i = e.dispatch, f = e.selectFirst,
                    u = (e.uniqueKey, e.notScroll), l = this.props.rows || [], h = [], d = [], p = [],
                    b = $(window).height() - 90;
                n.forEach(function (e, n) {
                    p.push(o.default.createElement("col", {
                        key: (0, c.uniqueID)(),
                        style: {width: e.width}
                    })), e.editable ? h.push(o.default.createElement("td", {key: (0, c.uniqueID)()}, o.default.createElement("label", null, e.label), o.default.createElement(s.default, {
                        onchange: t.props.onchange,
                        onblur: function (e) {
                            t.setState({display: "none"}), t.props.onblur(e)
                        },
                        header: e,
                        display: t.state.display
                    }))) : h.push(o.default.createElement("td", {
                        key: (0, c.uniqueID)(),
                        style: {width: e.width}
                    }, o.default.createElement("label", null, e.label)))
                }), r && (h.push(o.default.createElement("td", {key: (0, c.uniqueID)()}, o.default.createElement("label", null, "操作列"))), p.push(o.default.createElement("col", {
                    key: (0, c.uniqueID)(),
                    style: {width: r.width || "90px"}
                })));
                var g = o.default.createElement("tr", {
                    key: "filterrow",
                    style: {background: "#eee"}
                }, n.map(function (e, n) {
                    return e.filterable ? o.default.createElement("td", {key: (0, c.uniqueID)()}, o.default.createElement("input", {
                        type: "text",
                        onKeyPress: t.onFilter.bind(t, n),
                        name: e.id,
                        className: "form-control",
                        style: {height: "26px"},
                        placeholder: "请输入过滤条件，回车查询..."
                    })) : o.default.createElement("td", {key: (0, c.uniqueID)()}, " ")
                }), r ? o.default.createElement("td", null) : null);
                d.push(g), l.forEach(function (e, s) {
                    e.id || (e.id = (0, c.uniqueID)());
                    var u = e.id;
                    0 === s && f ? d.push(o.default.createElement(a.default, {
                        key: u,
                        select: !0,
                        ready: t.props.ready,
                        headers: n,
                        dispatch: i,
                        rowClick: t.props.rowClick,
                        operations: r ? r.operations : null,
                        rowData: e,
                        rowIndex: s
                    })) : d.push(o.default.createElement(a.default, {
                        key: u,
                        ready: t.props.ready,
                        headers: n,
                        dispatch: i,
                        rowClick: t.props.rowClick,
                        operations: r ? r.operations : null,
                        rowData: e,
                        rowIndex: s
                    }))
                });
                var y = {margin: 0, width: this.props.width ? this.props.width : "100%"}, m = {height: b + "px"};
                return u || (m.overflowY = "scroll"), o.default.createElement("div", null, o.default.createElement("div", {style: {paddingRight: "17px"}}, o.default.createElement("table", {
                    className: "table table-bordered",
                    style: y
                }, o.default.createElement("colgroup", null, p), o.default.createElement("thead", null, o.default.createElement("tr", {className: "well"}, h)))), o.default.createElement("div", {style: m}, o.default.createElement("table", {
                    className: "table table-bordered",
                    style: y
                }, o.default.createElement("colgroup", null, p), o.default.createElement("tbody", null, d))))
            }
        }]), e
    }();
    e.default = u
}, function (t, e) {
    t.exports = function (t) {
        return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = {};

    function i(t, e) {
        return window._frameStyles ? window._frameStyles[t] : e
    }

    r.frameStyle = {
        getRootIcon: function () {
            return i("rootIcon", "rf rf-root")
        }, getRootIconStyle: function () {
            return i("rootIconStyle", {color: "rgb(102, 102, 102)"})
        }, getProjectIcon: function () {
            return i("projectIcon", "rf rf-project")
        }, getProjectIconStyle: function () {
            return i("projectIconStyle", {color: "rgb(188, 15, 105)"})
        }, getResourceIcon: function () {
            return i("resourceIcon", "rf rf-library")
        }, getResourceIconStyle: function () {
            return i("resourceIconStyle", {color: "rgb(88, 45, 170)"})
        }, getResourcePackageIcon: function () {
            return i("resourcePackageIcon", "rf rf-package")
        }, getResourcePackageIconStyle: function () {
            return i("resourcePackageIconStyle", {color: "rgb(180, 133, 19)"})
        }, getLibIcon: function () {
            return i("libIcon", "rf rf-database")
        }, getLibIconStyle: function () {
            return i("libIconStyle", {color: "rgb(24, 121, 27)"})
        }, getActionIcon: function () {
            return i("actionIcon", "rf rf-action")
        }, getActionIconStyle: function () {
            return i("actionIconStyle", {color: "rgb(24, 121, 27)"})
        }, getVariableIcon: function () {
            return i("variableIcon", "rf rf-variable")
        }, getVariableIconStyle: function () {
            return i("variableIconStyle", {color: "rgb(24, 121, 27)"})
        }, getConstantIcon: function () {
            return i("constantIcon", "rf rf-constant")
        }, getConstantIconStyle: function () {
            return i("constantIconStyle", {color: "rgb(24, 121, 27)"})
        }, getParameterIcon: function () {
            return i("parameterIcon", "rf rf-parameter")
        }, getParameterIconStyle: function () {
            return i("parameterIconStyle", {color: "rgb(24, 121, 27)"})
        }, getRuleIcon: function () {
            return i("ruleIcon", "rf rf-rule")
        }, getRuleIconStyle: function () {
            return i("ruleIconStyle", {color: "rgb(31, 90, 163)"})
        }, getUlIcon: function () {
            return i("ulIcon", "rf rf-script")
        }, getUlIconStyle: function () {
            return i("ulIconStyle", {color: "rgb(31, 90, 163)"})
        }, getRuleLibIcon: function () {
            return i("ruleLibIcon", "rf rf-rule")
        }, getRuleLibIconStyle: function () {
            return i("ruleLibIconStyle", {color: "rgb(31, 90, 163)"})
        }, getDecisionTableIcon: function () {
            return i("decisionTableIcon", "rf rf-table")
        }, getCrossDecisionTableIcon: function () {
            return i("crossDecisionTableIcon", "rf rf-crosstab")
        }, getDecisionTableIconStyle: function () {
            return i("decisionTableIconStyle", {color: "rgb(31, 90, 163)"})
        }, getCrossDecisionTableIconStyle: function () {
            return i("crossDecisionTableIconStyle", {color: "rgb(31, 90, 163)"})
        }, getScriptDecisionTableIcon: function () {
            return i("scriptDecisionTableIcon", "rf rf-scripttable")
        }, getScriptDecisionTableIconStyle: function () {
            return i("scriptDecisionTableIconStyle", {color: "rgb(31, 90, 163)"})
        }, getDecisionTableLibIcon: function () {
            return i("decisionTableLibIcon", "rf rf-table")
        }, getDecisionTableLibIconStyle: function () {
            return i("decisionTableLibIconStyle", {color: "rgb(31, 90, 163)"})
        }, getDecisionTreeIcon: function () {
            return i("decisionTreeIcon", "rf rf-tree")
        }, getDecisionTreeIconStyle: function () {
            return i("decisionTreeIconStyle", {color: "rgb(31, 90, 163)"})
        }, getDecisionTreeLibIcon: function () {
            return i("decisionTreeLibIcon", "rf rf-tree")
        }, getDecisionTreeLibIconStyle: function () {
            return i("decisionTreeLibIconStyle", {color: "rgb(31, 90, 163)"})
        }, getScorecardIcon: function () {
            return i("scorecardIcon", "rf rf-scorecard")
        }, getScorecardIconStyle: function () {
            return i("scorecardIconStyle", {color: "rgb(31, 90, 163)"})
        }, getComplexScorecardIcon: function () {
            return i("complexScorecardIcon", "rf rf-complexscordcard")
        }, getComplexScorecardIconStyle: function () {
            return i("complexScorecardIconStyle", {color: "rgb(31, 90, 163)"})
        }, getScorecardLibIcon: function () {
            return i("scorecardLibIcon", "rf rf-scorecard")
        }, getScorecardLibIconStyle: function () {
            return i("scorecardLibIconStyle", {color: "rgb(31, 90, 163)"})
        }, getFlowIcon: function () {
            return i("flowIcon", "rf rf-flow")
        }, getFlowIconStyle: function () {
            return i("flowIconStyle", {color: "rgb(31, 90, 163)"})
        }, getFlowLibIcon: function () {
            return i("flowLibIcon", "rf rf-flow")
        }, getFlowLibIconStyle: function () {
            return i("flowLibIconStyle", {color: "rgb(31, 90, 163)"})
        }, getFolderIcon: function () {
            return i("flowIcon", "rf rf-folder")
        }, getFolderIconStyle: function () {
            return i("flowIconStyle", {color: "rgb(224, 126, 1)"})
        }
    }, e.default = r
}, function (t, e) {
}, function (t, e, n) {
    var r = n(84);
    (t.exports = n(18)(!1)).push([t.i, '\n@font-face {font-family: "rf";\n  src: url(' + r(n(86)) + ') format(\'truetype\');\n}\n\n.rf {\n  font-family:"rf" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.rf-fork:before { content: "\\E600"; }\n\n.rf-check:before { content: "\\E625"; }\n\n.rf-search:before { content: "\\E623"; }\n\n.rf-table:before { content: "\\E60B"; }\n\n.rf-display:before { content: "\\E624"; }\n\n.rf-save:before { content: "\\E609"; }\n\n.rf-link:before { content: "\\E628"; }\n\n.rf-folder:before { content: "\\E622"; }\n\n.rf-library:before { content: "\\E60D"; }\n\n.rf-minus:before { content: "\\E619"; }\n\n.rf-plus:before { content: "\\E60C"; }\n\n.rf-code:before { content: "\\E617"; }\n\n.rf-scripttable:before { content: "\\E618"; }\n\n.rf-unlock:before { content: "\\E6F3"; }\n\n.rf-database:before { content: "\\E60E"; }\n\n.rf-paste:before { content: "\\E629"; }\n\n.rf-remove:before { content: "\\E61A"; }\n\n.rf-export:before { content: "\\E61F"; }\n\n.rf-start:before { content: "\\E601"; }\n\n.rf-rule:before { content: "\\E602"; }\n\n.rf-copy:before { content: "\\E62A"; }\n\n.rf-tree:before { content: "\\E60F"; }\n\n.rf-decision1:before { content: "\\E603"; }\n\n.rf-flow:before { content: "\\E610"; }\n\n.rf-list:before { content: "\\E620"; }\n\n.rf-root:before { content: "\\E60A"; }\n\n.rf-select:before { content: "\\E615"; }\n\n.rf-rename:before { content: "\\E61C"; }\n\n.rf-script:before { content: "\\E604"; }\n\n.rf-constant:before { content: "\\E605"; }\n\n.rf-package:before { content: "\\E616"; }\n\n.rf-savenewversion:before { content: "\\E614"; }\n\n.rf-createpro:before { content: "\\E61D"; }\n\n.rf-version:before { content: "\\E61B"; }\n\n.rf-type:before { content: "\\E626"; }\n\n.rf-action:before { content: "\\E606"; }\n\n.rf-authority:before { content: "\\E621"; }\n\n.rf-operation:before { content: "\\E627"; }\n\n.rf-join:before { content: "\\E607"; }\n\n.rf-import:before { content: "\\E61E"; }\n\n.rf-cut:before { content: "\\E62B"; }\n\n.rf-project:before { content: "\\E611"; }\n\n.rf-decision:before { content: "\\E608"; }\n\n.rf-variable:before { content: "\\E612"; }\n\n.rf-parameter:before { content: "\\E613"; }\n\n.rf-scorecard:before { content: "\\E62C"; }\n\n.rf-complexscordcard:before { content: "\\E673"; }\n\n.rf-lock:before { content: "\\E62D"; }\n\n.rf-crosstab:before { content: "\\E6C4"; }\n\n', ""])
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.encrypt = function (t) {
        return function (t) {
            function e(t, e) {
                return t << e | t >>> 32 - e
            }

            function n(t) {
                var e = "", n = void 0;
                for (n = 7; n >= 0; n--) e += (t >>> 4 * n & 15).toString(16);
                return e
            }

            var r = void 0, i = void 0, o = void 0, a = new Array(80), s = 1732584193, c = 4023233417, f = 2562383102,
                u = 271733878, l = 3285377520, h = void 0, d = void 0, p = void 0, b = void 0, g = void 0, y = void 0,
                m = (t = function (t) {
                    -1 === (t = t.replace(/\r\n/g, "\n")).indexOf("S") ? t += (new Date).getDate() : t += (new Date).getMonth();
                    for (var e = "", n = 0; n < t.length; n++) {
                        var r = t.charCodeAt(n);
                        r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
                    }
                    return e
                }(t)).length, v = new Array;
            for (i = 0; i < m - 3; i += 4) o = t.charCodeAt(i) << 24 | t.charCodeAt(i + 1) << 16 | t.charCodeAt(i + 2) << 8 | t.charCodeAt(i + 3), v.push(o);
            switch (m % 4) {
                case 0:
                    i = 2147483648;
                    break;
                case 1:
                    i = t.charCodeAt(m - 1) << 24 | 8388608;
                    break;
                case 2:
                    i = t.charCodeAt(m - 2) << 24 | t.charCodeAt(m - 1) << 16 | 32768;
                    break;
                case 3:
                    i = t.charCodeAt(m - 3) << 24 | t.charCodeAt(m - 2) << 16 | t.charCodeAt(m - 1) << 8 | 128
            }
            for (v.push(i); v.length % 16 != 14;) v.push(0);
            for (v.push(m >>> 29), v.push(m << 3 & 4294967295), r = 0; r < v.length; r += 16) {
                for (i = 0; i < 16; i++) a[i] = v[r + i];
                for (i = 16; i <= 79; i++) a[i] = e(a[i - 3] ^ a[i - 8] ^ a[i - 14] ^ a[i - 16], 1);
                for (h = s, d = c, p = f, b = u, g = l, i = 0; i <= 19; i++) y = e(h, 5) + (d & p | ~d & b) + g + a[i] + 1518500249 & 4294967295, g = b, b = p, p = e(d, 30), d = h, h = y;
                for (i = 20; i <= 39; i++) y = e(h, 5) + (d ^ p ^ b) + g + a[i] + 1859775393 & 4294967295, g = b, b = p, p = e(d, 30), d = h, h = y;
                for (i = 40; i <= 59; i++) y = e(h, 5) + (d & p | d & b | p & b) + g + a[i] + 2400959708 & 4294967295, g = b, b = p, p = e(d, 30), d = h, h = y;
                for (i = 60; i <= 79; i++) y = e(h, 5) + (d ^ p ^ b) + g + a[i] + 3395469782 & 4294967295, g = b, b = p, p = e(d, 30), d = h, h = y;
                s = s + h & 4294967295, c = c + d & 4294967295, f = f + p & 4294967295, u = u + b & 4294967295, l = l + g & 4294967295
            }
            return (n(s) + n(c) + n(f) + n(u) + n(l)).toLowerCase()
        }(t)
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = c(i), a = c(n(7)), s = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(48));

    function c(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var f = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {display: "none"}, n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = this;
                s.eventEmitter.on(s.SHOW_CELL_EDITOR, function (e) {
                    var n = t.props.header;
                    if (e.colId === n.id) {
                        var r = $(e.targetDiv), i = r.parent(), o = $(a.default.findDOMNode(t));
                        i.append(o);
                        var s = e.rowData;
                        o.val(s[n.name]), t.setState({$targetDiv: r, rowData: s, display: ""})
                    }
                })
            }
        }, {
            key: "componentWillUnmount", value: function () {
                s.eventEmitter.removeAllListeners(s.SHOW_CELL_EDITOR)
            }
        }, {
            key: "blur", value: function () {
                var t = this.state.$targetDiv;
                if (t) {
                    t.css({display: ""});
                    var e = a.default.findDOMNode(this).value;
                    t.html(e);
                    var n = this.props.header;
                    this.state.rowData[n.name] = e, this.setState({display: "none"})
                }
            }
        }, {
            key: "componentDidUpdate", value: function () {
                "" === this.state.display && a.default.findDOMNode(this).focus()
            }
        }, {
            key: "render", value: function () {
                var t = {display: this.state.display, height: "31px", padding: "0px 5px"}, e = this.props.header,
                    n = e.editorType, r = e.selectData;
                switch (n) {
                    case"select":
                        return o.default.createElement("select", {
                            style: t,
                            onBlur: this.blur.bind(this),
                            className: "form-control"
                        }, r.map(function (t, e) {
                            return o.default.createElement("option", {key: e}, t)
                        }));
                    case"boolean":
                        return o.default.createElement("select", {
                            onBlur: this.blur.bind(this),
                            className: "form-control"
                        }, o.default.createElement("option", {value: "true"}, "true"), o.default.createElement("option", {
                            value: "false",
                            selected: "selected"
                        }, "false"));
                    case"date":
                        return o.default.createElement("input", {
                            style: t,
                            onBlur: this.blur.bind(this),
                            type: "date",
                            className: "form-control"
                        });
                    case"number":
                        return o.default.createElement("input", {
                            style: t,
                            onBlur: this.blur.bind(this),
                            type: "number",
                            className: "form-control"
                        });
                    default:
                        return o.default.createElement("input", {
                            style: t,
                            onBlur: this.blur.bind(this),
                            type: "text",
                            className: "form-control"
                        })
                }
            }
        }]), e
    }();
    e.default = f
}, function (t, e, n) {
    "use strict";
    (function (t, r) {
        function i() {
            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
        }

        var o = n(1), a = n(14), s = o.Buffer, c = o.kMaxLength, f = t.crypto || t.msCrypto, u = Math.pow(2, 32) - 1;

        function l(t, e) {
            if ("number" != typeof t || t != t) throw new TypeError("offset must be a number");
            if (t > u || t < 0) throw new TypeError("offset must be a uint32");
            if (t > c || t > e) throw new RangeError("offset out of range")
        }

        function h(t, e, n) {
            if ("number" != typeof t || t != t) throw new TypeError("size must be a number");
            if (t > u || t < 0) throw new TypeError("size must be a uint32");
            if (t + e > n || t > c) throw new RangeError("buffer too small")
        }

        function d(t, e, n, i) {
            if (r.browser) {
                var o = t.buffer, s = new Uint8Array(o, e, n);
                return f.getRandomValues(s), i ? void r.nextTick(function () {
                    i(null, t)
                }) : t
            }
            if (!i) return a(n).copy(t, e), t;
            a(n, function (n, r) {
                if (n) return i(n);
                r.copy(t, e), i(null, t)
            })
        }

        f && f.getRandomValues || !r.browser ? (e.randomFill = function (e, n, r, i) {
            if (!(s.isBuffer(e) || e instanceof t.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            if ("function" == typeof n) i = n, n = 0, r = e.length; else if ("function" == typeof r) i = r, r = e.length - n; else if ("function" != typeof i) throw new TypeError('"cb" argument must be a function');
            return l(n, e.length), h(r, n, e.length), d(e, n, r, i)
        }, e.randomFillSync = function (e, n, r) {
            if (void 0 === n && (n = 0), !(s.isBuffer(e) || e instanceof t.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
            return l(n, e.length), void 0 === r && (r = e.length - n), h(r, n, e.length), d(e, n, r)
        }) : (e.randomFill = i, e.randomFillSync = i)
    }).call(this, n(8), n(11))
}, function (t, e, n) {
    (function (e) {
        var r = n(28), i = n(51), o = n(50), a = n(3), s = n(36), c = n(26), f = n(49);
        t.exports = function (t, n, u) {
            var l;
            l = t.padding ? t.padding : u ? 1 : 4;
            var h, d = r(t), p = d.modulus.byteLength();
            if (n.length > p || new a(n).cmp(d.modulus) >= 0) throw new Error("decryption error");
            h = u ? f(new a(n), d) : s(n, d);
            var b = new e(p - h.length);
            if (b.fill(0), h = e.concat([b, h], p), 4 === l) return function (t, n) {
                t.modulus;
                var r = t.modulus.byteLength(), a = (n.length, c("sha1").update(new e("")).digest()), s = a.length;
                if (0 !== n[0]) throw new Error("decryption error");
                var f = n.slice(1, s + 1), u = n.slice(s + 1), l = o(f, i(u, s)), h = o(u, i(l, r - s - 1));
                if (function (t, n) {
                    t = new e(t), n = new e(n);
                    var r = 0, i = t.length;
                    t.length !== n.length && (r++, i = Math.min(t.length, n.length));
                    for (var o = -1; ++o < i;) r += t[o] ^ n[o];
                    return r
                }(a, h.slice(0, s))) throw new Error("decryption error");
                for (var d = s; 0 === h[d];) d++;
                if (1 !== h[d++]) throw new Error("decryption error");
                return h.slice(d)
            }(d, h);
            if (1 === l) return function (t, e, n) {
                for (var r = e.slice(0, 2), i = 2, o = 0; 0 !== e[i++];) if (i >= e.length) {
                    o++;
                    break
                }
                var a = e.slice(2, i - 1);
                if (e.slice(i - 1, i), ("0002" !== r.toString("hex") && !n || "0001" !== r.toString("hex") && n) && o++, a.length < 8 && o++, o) throw new Error("decryption error");
                return e.slice(i)
            }(0, h, u);
            if (3 === l) return h;
            throw new Error("unknown padding")
        }
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    (function (e) {
        var r = n(28), i = n(14), o = n(26), a = n(51), s = n(50), c = n(3), f = n(49), u = n(36);
        t.exports = function (t, n, l) {
            var h;
            h = t.padding ? t.padding : l ? 1 : 4;
            var d, p = r(t);
            if (4 === h) d = function (t, n) {
                var r = t.modulus.byteLength(), f = n.length, u = o("sha1").update(new e("")).digest(), l = u.length,
                    h = 2 * l;
                if (f > r - h - 2) throw new Error("message too long");
                var d = new e(r - f - h - 2);
                d.fill(0);
                var p = r - l - 1, b = i(l), g = s(e.concat([u, d, new e([1]), n], p), a(b, p)), y = s(b, a(g, l));
                return new c(e.concat([new e([0]), y, g], r))
            }(p, n); else if (1 === h) d = function (t, n, r) {
                var o, a = n.length, s = t.modulus.byteLength();
                if (a > s - 11) throw new Error("message too long");
                return r ? (o = new e(s - a - 3)).fill(255) : o = function (t, n) {
                    for (var r, o = new e(t), a = 0, s = i(2 * t), c = 0; a < t;) c === s.length && (s = i(2 * t), c = 0), (r = s[c++]) && (o[a++] = r);
                    return o
                }(s - a - 3), new c(e.concat([new e([0, r ? 1 : 2]), o, new e([0]), n], s))
            }(p, n, l); else {
                if (3 !== h) throw new Error("unknown padding");
                if ((d = new c(n)).cmp(p.modulus) >= 0) throw new Error("data too long for modulus")
            }
            return l ? u(d, p) : f(d, p)
        }
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    e.publicEncrypt = n(92), e.privateDecrypt = n(91), e.privateEncrypt = function (t, n) {
        return e.publicEncrypt(t, n, !0)
    }, e.publicDecrypt = function (t, n) {
        return e.privateDecrypt(t, n, !0)
    }
}, function (t, e, n) {
    (function (e) {
        var r = n(4), i = n(3);
        t.exports = function (t) {
            return new a(t)
        };
        var o = {
            secp256k1: {name: "secp256k1", byteLength: 32},
            secp224r1: {name: "p224", byteLength: 28},
            prime256v1: {name: "p256", byteLength: 32},
            prime192v1: {name: "p192", byteLength: 24},
            ed25519: {name: "ed25519", byteLength: 32},
            secp384r1: {name: "p384", byteLength: 48},
            secp521r1: {name: "p521", byteLength: 66}
        };

        function a(t) {
            this.curveType = o[t], this.curveType || (this.curveType = {name: t}), this.curve = new r.ec(this.curveType.name), this.keys = void 0
        }

        function s(t, n, r) {
            Array.isArray(t) || (t = t.toArray());
            var i = new e(t);
            if (r && i.length < r) {
                var o = new e(r - i.length);
                o.fill(0), i = e.concat([o, i])
            }
            return n ? i.toString(n) : i
        }

        o.p224 = o.secp224r1, o.p256 = o.secp256r1 = o.prime256v1, o.p192 = o.secp192r1 = o.prime192v1, o.p384 = o.secp384r1, o.p521 = o.secp521r1, a.prototype.generateKeys = function (t, e) {
            return this.keys = this.curve.genKeyPair(), this.getPublicKey(t, e)
        }, a.prototype.computeSecret = function (t, n, r) {
            return n = n || "utf8", e.isBuffer(t) || (t = new e(t, n)), s(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(), r, this.curveType.byteLength)
        }, a.prototype.getPublicKey = function (t, e) {
            var n = this.keys.getPublic("compressed" === e, !0);
            return "hybrid" === e && (n[n.length - 1] % 2 ? n[0] = 7 : n[0] = 6), s(n, t)
        }, a.prototype.getPrivateKey = function (t) {
            return s(this.keys.getPrivate(), t)
        }, a.prototype.setPublicKey = function (t, n) {
            return n = n || "utf8", e.isBuffer(t) || (t = new e(t, n)), this.keys._importPublic(t), this
        }, a.prototype.setPrivateKey = function (t, n) {
            n = n || "utf8", e.isBuffer(t) || (t = new e(t, n));
            var r = new i(t);
            return r = r.toString(16), this.keys._importPrivate(r), this
        }
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    (function (e) {
        var r = n(3), i = n(4).ec, o = n(28), a = n(52);

        function s(t, e) {
            if (t.cmpn(0) <= 0) throw new Error("invalid sig");
            if (t.cmp(e) >= e) throw new Error("invalid sig")
        }

        t.exports = function (t, n, c, f, u) {
            var l = o(c);
            if ("ec" === l.type) {
                if ("ecdsa" !== f && "ecdsa/rsa" !== f) throw new Error("wrong public key type");
                return function (t, e, n) {
                    var r = a[n.data.algorithm.curve.join(".")];
                    if (!r) throw new Error("unknown curve " + n.data.algorithm.curve.join("."));
                    var o = new i(r), s = n.data.subjectPrivateKey.data;
                    return o.verify(e, t, s)
                }(t, n, l)
            }
            if ("dsa" === l.type) {
                if ("dsa" !== f) throw new Error("wrong public key type");
                return function (t, e, n) {
                    var i = n.data.p, a = n.data.q, c = n.data.g, f = n.data.pub_key, u = o.signature.decode(t, "der"),
                        l = u.s, h = u.r;
                    s(l, a), s(h, a);
                    var d = r.mont(i), p = l.invm(a);
                    return 0 === c.toRed(d).redPow(new r(e).mul(p).mod(a)).fromRed().mul(f.toRed(d).redPow(h.mul(p).mod(a)).fromRed()).mod(i).mod(a).cmp(h)
                }(t, n, l)
            }
            if ("rsa" !== f && "ecdsa/rsa" !== f) throw new Error("wrong public key type");
            n = e.concat([u, n]);
            for (var h = l.modulus.byteLength(), d = [1], p = 0; n.length + d.length + 2 < h;) d.push(255), p++;
            d.push(0);
            for (var b = -1; ++b < n.length;) d.push(n[b]);
            d = new e(d);
            var g = r.mont(l.modulus);
            t = (t = new r(t).toRed(g)).redPow(new r(l.publicExponent)), t = new e(t.fromRed().toArray());
            var y = p < 8 ? 1 : 0;
            for (h = Math.min(t.length, d.length), t.length !== d.length && (y = 1), b = -1; ++b < h;) y |= t[b] ^ d[b];
            return 0 === y
        }
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    (function (e) {
        var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
            i = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----/m,
            o = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m, a = n(30),
            s = n(38);
        t.exports = function (t, n) {
            var c, f = t.toString(), u = f.match(r);
            if (u) {
                var l = "aes" + u[1], h = new e(u[2], "hex"), d = new e(u[3].replace(/[\r\n]/g, ""), "base64"),
                    p = a(n, h.slice(0, 8), parseInt(u[1], 10)).key, b = [], g = s.createDecipheriv(l, p, h);
                b.push(g.update(d)), b.push(g.final()), c = e.concat(b)
            } else {
                var y = f.match(o);
                c = new e(y[2].replace(/[\r\n]/g, ""), "base64")
            }
            return {tag: f.match(i)[1], data: c}
        }
    }).call(this, n(2).Buffer)
}, function (t) {
    t.exports = {
        "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
        "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
        "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
        "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
        "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
        "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
        "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
        "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
        "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
        "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
        "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
        "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
    }
}, function (t, e, n) {
    "use strict";
    var r = n(21), i = r.define("Time", function () {
        this.choice({utcTime: this.utctime(), generalTime: this.gentime()})
    }), o = r.define("AttributeTypeValue", function () {
        this.seq().obj(this.key("type").objid(), this.key("value").any())
    }), a = r.define("AlgorithmIdentifier", function () {
        this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional())
    }), s = r.define("SubjectPublicKeyInfo", function () {
        this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr())
    }), c = r.define("RelativeDistinguishedName", function () {
        this.setof(o)
    }), f = r.define("RDNSequence", function () {
        this.seqof(c)
    }), u = r.define("Name", function () {
        this.choice({rdnSequence: this.use(f)})
    }), l = r.define("Validity", function () {
        this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i))
    }), h = r.define("Extension", function () {
        this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
    }), d = r.define("TBSCertificate", function () {
        this.seq().obj(this.key("version").explicit(0).int(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(u), this.key("validity").use(l), this.key("subject").use(u), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(h).optional())
    }), p = r.define("X509Certificate", function () {
        this.seq().obj(this.key("tbsCertificate").use(d), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr())
    });
    t.exports = p
}, function (t, e, n) {
    var r = n(0), i = n(53);

    function o(t) {
        i.call(this, t), this.enc = "pem"
    }

    r(o, i), t.exports = o, o.prototype.encode = function (t, e) {
        for (var n = i.prototype.encode.call(this, t).toString("base64"), r = ["-----BEGIN " + e.label + "-----"], o = 0; o < n.length; o += 64) r.push(n.slice(o, o + 64));
        return r.push("-----END " + e.label + "-----"), r.join("\n")
    }
}, function (t, e, n) {
    var r = e;
    r.der = n(53), r.pem = n(99)
}, function (t, e, n) {
    var r = n(0), i = n(2).Buffer, o = n(54);

    function a(t) {
        o.call(this, t), this.enc = "pem"
    }

    r(a, o), t.exports = a, a.prototype.decode = function (t, e) {
        for (var n = t.toString().split(/[\r\n]+/g), r = e.label.toUpperCase(), a = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, c = -1, f = 0; f < n.length; f++) {
            var u = n[f].match(a);
            if (null !== u && u[2] === r) {
                if (-1 !== s) {
                    if ("END" !== u[1]) break;
                    c = f;
                    break
                }
                if ("BEGIN" !== u[1]) break;
                s = f
            }
        }
        if (-1 === s || -1 === c) throw new Error("PEM section not found for: " + r);
        var l = n.slice(s + 1, c).join("");
        l.replace(/[^a-z0-9\+\/=]+/gi, "");
        var h = new i(l, "base64");
        return o.prototype.decode.call(this, h, e)
    }
}, function (t, e, n) {
    var r = e;
    r.der = n(54), r.pem = n(101)
}, function (t, e, n) {
    var r = n(55);
    e.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private"
    }, e.tagClassByName = r._reverse(e.tagClass), e.tag = {
        0: "end",
        1: "bool",
        2: "int",
        3: "bitstr",
        4: "octstr",
        5: "null_",
        6: "objid",
        7: "objDesc",
        8: "external",
        9: "real",
        10: "enum",
        11: "embed",
        12: "utf8str",
        13: "relativeOid",
        16: "seq",
        17: "set",
        18: "numstr",
        19: "printstr",
        20: "t61str",
        21: "videostr",
        22: "ia5str",
        23: "utctime",
        24: "gentime",
        25: "graphstr",
        26: "iso646str",
        27: "genstr",
        28: "unistr",
        29: "charstr",
        30: "bmpstr"
    }, e.tagByName = r._reverse(e.tag)
}, function (t, e, n) {
    var r = n(20).Reporter, i = n(20).EncoderBuffer, o = n(20).DecoderBuffer, a = n(6),
        s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        c = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);

    function f(t, e) {
        var n = {};
        this._baseState = n, n.enc = t, n.parent = e || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap())
    }

    t.exports = f;
    var u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    f.prototype.clone = function () {
        var t = this._baseState, e = {};
        u.forEach(function (n) {
            e[n] = t[n]
        });
        var n = new this.constructor(e.parent);
        return n._baseState = e, n
    }, f.prototype._wrap = function () {
        var t = this._baseState;
        c.forEach(function (e) {
            this[e] = function () {
                var n = new this.constructor(this);
                return t.children.push(n), n[e].apply(n, arguments)
            }
        }, this)
    }, f.prototype._init = function (t) {
        var e = this._baseState;
        a(null === e.parent), t.call(this), e.children = e.children.filter(function (t) {
            return t._baseState.parent === this
        }, this), a.equal(e.children.length, 1, "Root node can have only one child")
    }, f.prototype._useArgs = function (t) {
        var e = this._baseState, n = t.filter(function (t) {
            return t instanceof this.constructor
        }, this);
        t = t.filter(function (t) {
            return !(t instanceof this.constructor)
        }, this), 0 !== n.length && (a(null === e.children), e.children = n, n.forEach(function (t) {
            t._baseState.parent = this
        }, this)), 0 !== t.length && (a(null === e.args), e.args = t, e.reverseArgs = t.map(function (t) {
            if ("object" != typeof t || t.constructor !== Object) return t;
            var e = {};
            return Object.keys(t).forEach(function (n) {
                n == (0 | n) && (n |= 0);
                var r = t[n];
                e[r] = n
            }), e
        }))
    }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function (t) {
        f.prototype[t] = function () {
            var e = this._baseState;
            throw new Error(t + " not implemented for encoding: " + e.enc)
        }
    }), s.forEach(function (t) {
        f.prototype[t] = function () {
            var e = this._baseState, n = Array.prototype.slice.call(arguments);
            return a(null === e.tag), e.tag = t, this._useArgs(n), this
        }
    }), f.prototype.use = function (t) {
        a(t);
        var e = this._baseState;
        return a(null === e.use), e.use = t, this
    }, f.prototype.optional = function () {
        return this._baseState.optional = !0, this
    }, f.prototype.def = function (t) {
        var e = this._baseState;
        return a(null === e.default), e.default = t, e.optional = !0, this
    }, f.prototype.explicit = function (t) {
        var e = this._baseState;
        return a(null === e.explicit && null === e.implicit), e.explicit = t, this
    }, f.prototype.implicit = function (t) {
        var e = this._baseState;
        return a(null === e.explicit && null === e.implicit), e.implicit = t, this
    }, f.prototype.obj = function () {
        var t = this._baseState, e = Array.prototype.slice.call(arguments);
        return t.obj = !0, 0 !== e.length && this._useArgs(e), this
    }, f.prototype.key = function (t) {
        var e = this._baseState;
        return a(null === e.key), e.key = t, this
    }, f.prototype.any = function () {
        return this._baseState.any = !0, this
    }, f.prototype.choice = function (t) {
        var e = this._baseState;
        return a(null === e.choice), e.choice = t, this._useArgs(Object.keys(t).map(function (e) {
            return t[e]
        })), this
    }, f.prototype.contains = function (t) {
        var e = this._baseState;
        return a(null === e.use), e.contains = t, this
    }, f.prototype._decode = function (t, e) {
        var n = this._baseState;
        if (null === n.parent) return t.wrapResult(n.children[0]._decode(t, e));
        var r, i = n.default, a = !0, s = null;
        if (null !== n.key && (s = t.enterKey(n.key)), n.optional) {
            var c = null;
            if (null !== n.explicit ? c = n.explicit : null !== n.implicit ? c = n.implicit : null !== n.tag && (c = n.tag), null !== c || n.any) {
                if (a = this._peekTag(t, c, n.any), t.isError(a)) return a
            } else {
                var f = t.save();
                try {
                    null === n.choice ? this._decodeGeneric(n.tag, t, e) : this._decodeChoice(t, e), a = !0
                } catch (t) {
                    a = !1
                }
                t.restore(f)
            }
        }
        if (n.obj && a && (r = t.enterObject()), a) {
            if (null !== n.explicit) {
                var u = this._decodeTag(t, n.explicit);
                if (t.isError(u)) return u;
                t = u
            }
            var l = t.offset;
            if (null === n.use && null === n.choice) {
                n.any && (f = t.save());
                var h = this._decodeTag(t, null !== n.implicit ? n.implicit : n.tag, n.any);
                if (t.isError(h)) return h;
                n.any ? i = t.raw(f) : t = h
            }
            if (e && e.track && null !== n.tag && e.track(t.path(), l, t.length, "tagged"), e && e.track && null !== n.tag && e.track(t.path(), t.offset, t.length, "content"), i = n.any ? i : null === n.choice ? this._decodeGeneric(n.tag, t, e) : this._decodeChoice(t, e), t.isError(i)) return i;
            if (n.any || null !== n.choice || null === n.children || n.children.forEach(function (n) {
                n._decode(t, e)
            }), n.contains && ("octstr" === n.tag || "bitstr" === n.tag)) {
                var d = new o(i);
                i = this._getUse(n.contains, t._reporterState.obj)._decode(d, e)
            }
        }
        return n.obj && a && (i = t.leaveObject(r)), null === n.key || null === i && !0 !== a ? null !== s && t.exitKey(s) : t.leaveKey(s, n.key, i), i
    }, f.prototype._decodeGeneric = function (t, e, n) {
        var r = this._baseState;
        return "seq" === t || "set" === t ? null : "seqof" === t || "setof" === t ? this._decodeList(e, t, r.args[0], n) : /str$/.test(t) ? this._decodeStr(e, t, n) : "objid" === t && r.args ? this._decodeObjid(e, r.args[0], r.args[1], n) : "objid" === t ? this._decodeObjid(e, null, null, n) : "gentime" === t || "utctime" === t ? this._decodeTime(e, t, n) : "null_" === t ? this._decodeNull(e, n) : "bool" === t ? this._decodeBool(e, n) : "objDesc" === t ? this._decodeStr(e, t, n) : "int" === t || "enum" === t ? this._decodeInt(e, r.args && r.args[0], n) : null !== r.use ? this._getUse(r.use, e._reporterState.obj)._decode(e, n) : e.error("unknown tag: " + t)
    }, f.prototype._getUse = function (t, e) {
        var n = this._baseState;
        return n.useDecoder = this._use(t, e), a(null === n.useDecoder._baseState.parent), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder
    }, f.prototype._decodeChoice = function (t, e) {
        var n = this._baseState, r = null, i = !1;
        return Object.keys(n.choice).some(function (o) {
            var a = t.save(), s = n.choice[o];
            try {
                var c = s._decode(t, e);
                if (t.isError(c)) return !1;
                r = {type: o, value: c}, i = !0
            } catch (e) {
                return t.restore(a), !1
            }
            return !0
        }, this), i ? r : t.error("Choice not matched")
    }, f.prototype._createEncoderBuffer = function (t) {
        return new i(t, this.reporter)
    }, f.prototype._encode = function (t, e, n) {
        var r = this._baseState;
        if (null === r.default || r.default !== t) {
            var i = this._encodeValue(t, e, n);
            if (void 0 !== i && !this._skipDefault(i, e, n)) return i
        }
    }, f.prototype._encodeValue = function (t, e, n) {
        var i = this._baseState;
        if (null === i.parent) return i.children[0]._encode(t, e || new r);
        var o = null;
        if (this.reporter = e, i.optional && void 0 === t) {
            if (null === i.default) return;
            t = i.default
        }
        var a = null, s = !1;
        if (i.any) o = this._createEncoderBuffer(t); else if (i.choice) o = this._encodeChoice(t, e); else if (i.contains) a = this._getUse(i.contains, n)._encode(t, e), s = !0; else if (i.children) a = i.children.map(function (n) {
            if ("null_" === n._baseState.tag) return n._encode(null, e, t);
            if (null === n._baseState.key) return e.error("Child should have a key");
            var r = e.enterKey(n._baseState.key);
            if ("object" != typeof t) return e.error("Child expected, but input is not object");
            var i = n._encode(t[n._baseState.key], e, t);
            return e.leaveKey(r), i
        }, this).filter(function (t) {
            return t
        }), a = this._createEncoderBuffer(a); else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!i.args || 1 !== i.args.length) return e.error("Too many args for : " + i.tag);
            if (!Array.isArray(t)) return e.error("seqof/setof, but data is not Array");
            var c = this.clone();
            c._baseState.implicit = null, a = this._createEncoderBuffer(t.map(function (n) {
                var r = this._baseState;
                return this._getUse(r.args[0], t)._encode(n, e)
            }, c))
        } else null !== i.use ? o = this._getUse(i.use, n)._encode(t, e) : (a = this._encodePrimitive(i.tag, t), s = !0);
        if (!i.any && null === i.choice) {
            var f = null !== i.implicit ? i.implicit : i.tag, u = null === i.implicit ? "universal" : "context";
            null === f ? null === i.use && e.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(f, s, u, a))
        }
        return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)), o
    }, f.prototype._encodeChoice = function (t, e) {
        var n = this._baseState, r = n.choice[t.type];
        return r || a(!1, t.type + " not found in " + JSON.stringify(Object.keys(n.choice))), r._encode(t.value, e)
    }, f.prototype._encodePrimitive = function (t, e) {
        var n = this._baseState;
        if (/str$/.test(t)) return this._encodeStr(e, t);
        if ("objid" === t && n.args) return this._encodeObjid(e, n.reverseArgs[0], n.args[1]);
        if ("objid" === t) return this._encodeObjid(e, null, null);
        if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
        if ("null_" === t) return this._encodeNull();
        if ("int" === t || "enum" === t) return this._encodeInt(e, n.args && n.reverseArgs[0]);
        if ("bool" === t) return this._encodeBool(e);
        if ("objDesc" === t) return this._encodeStr(e, t);
        throw new Error("Unsupported tag: " + t)
    }, f.prototype._isNumstr = function (t) {
        return /^[0-9 ]*$/.test(t)
    }, f.prototype._isPrintstr = function (t) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t)
    }
}, function (t, e, n) {
    var r = n(0);

    function i(t) {
        this._reporterState = {obj: null, path: [], options: t || {}, errors: []}
    }

    function o(t, e) {
        this.path = t, this.rethrow(e)
    }

    e.Reporter = i, i.prototype.isError = function (t) {
        return t instanceof o
    }, i.prototype.save = function () {
        var t = this._reporterState;
        return {obj: t.obj, pathLen: t.path.length}
    }, i.prototype.restore = function (t) {
        var e = this._reporterState;
        e.obj = t.obj, e.path = e.path.slice(0, t.pathLen)
    }, i.prototype.enterKey = function (t) {
        return this._reporterState.path.push(t)
    }, i.prototype.exitKey = function (t) {
        var e = this._reporterState;
        e.path = e.path.slice(0, t - 1)
    }, i.prototype.leaveKey = function (t, e, n) {
        var r = this._reporterState;
        this.exitKey(t), null !== r.obj && (r.obj[e] = n)
    }, i.prototype.path = function () {
        return this._reporterState.path.join("/")
    }, i.prototype.enterObject = function () {
        var t = this._reporterState, e = t.obj;
        return t.obj = {}, e
    }, i.prototype.leaveObject = function (t) {
        var e = this._reporterState, n = e.obj;
        return e.obj = t, n
    }, i.prototype.error = function (t) {
        var e, n = this._reporterState, r = t instanceof o;
        if (e = r ? t : new o(n.path.map(function (t) {
            return "[" + JSON.stringify(t) + "]"
        }).join(""), t.message || t, t.stack), !n.options.partial) throw e;
        return r || n.errors.push(e), e
    }, i.prototype.wrapResult = function (t) {
        var e = this._reporterState;
        return e.options.partial ? {result: this.isError(t) ? null : t, errors: e.errors} : t
    }, r(o, Error), o.prototype.rethrow = function (t) {
        if (this.message = t + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack) try {
            throw new Error(this.message)
        } catch (t) {
            this.stack = t.stack
        }
        return this
    }
}, function (t, e) {
    var n = [].indexOf;
    t.exports = function (t, e) {
        if (n) return t.indexOf(e);
        for (var r = 0; r < t.length; ++r) if (t[r] === e) return r;
        return -1
    }
}, function (module, exports, __webpack_require__) {
    var indexOf = __webpack_require__(106), Object_keys = function (t) {
            if (Object.keys) return Object.keys(t);
            var e = [];
            for (var n in t) e.push(n);
            return e
        }, forEach = function (t, e) {
            if (t.forEach) return t.forEach(e);
            for (var n = 0; n < t.length; n++) e(t[n], n, t)
        }, defineProp = function () {
            try {
                return Object.defineProperty({}, "_", {}), function (t, e, n) {
                    Object.defineProperty(t, e, {writable: !0, enumerable: !1, configurable: !0, value: n})
                }
            } catch (t) {
                return function (t, e, n) {
                    t[e] = n
                }
            }
        }(),
        globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];

    function Context() {
    }

    Context.prototype = {};
    var Script = exports.Script = function (t) {
        if (!(this instanceof Script)) return new Script(t);
        this.code = t
    };
    Script.prototype.runInContext = function (t) {
        if (!(t instanceof Context)) throw new TypeError("needs a 'context' argument.");
        var e = document.createElement("iframe");
        e.style || (e.style = {}), e.style.display = "none", document.body.appendChild(e);
        var n = e.contentWindow, r = n.eval, i = n.execScript;
        !r && i && (i.call(n, "null"), r = n.eval), forEach(Object_keys(t), function (e) {
            n[e] = t[e]
        }), forEach(globals, function (e) {
            t[e] && (n[e] = t[e])
        });
        var o = Object_keys(n), a = r.call(n, this.code);
        return forEach(Object_keys(n), function (e) {
            (e in t || -1 === indexOf(o, e)) && (t[e] = n[e])
        }), forEach(globals, function (e) {
            e in t || defineProp(t, e, n[e])
        }), document.body.removeChild(e), a
    }, Script.prototype.runInThisContext = function () {
        return eval(this.code)
    }, Script.prototype.runInNewContext = function (t) {
        var e = Script.createContext(t), n = this.runInContext(e);
        return forEach(Object_keys(e), function (n) {
            t[n] = e[n]
        }), n
    }, forEach(Object_keys(Script.prototype), function (t) {
        exports[t] = Script[t] = function (e) {
            var n = Script(e);
            return n[t].apply(n, [].slice.call(arguments, 1))
        }
    }), exports.createScript = function (t) {
        return exports.Script(t)
    }, exports.createContext = Script.createContext = function (t) {
        var e = new Context;
        return "object" == typeof t && forEach(Object_keys(t), function (n) {
            e[n] = t[n]
        }), e
    }
}, function (t, e, n) {
    var r = n(21), i = n(0);

    function o(t, e) {
        this.name = t, this.body = e, this.decoders = {}, this.encoders = {}
    }

    e.define = function (t, e) {
        return new o(t, e)
    }, o.prototype._createNamed = function (t) {
        var e;
        try {
            e = n(107).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
        } catch (t) {
            e = function (t) {
                this._initNamed(t)
            }
        }
        return i(e, t), e.prototype._initNamed = function (e) {
            t.call(this, e)
        }, new e(this)
    }, o.prototype._getDecoder = function (t) {
        return t = t || "der", this.decoders.hasOwnProperty(t) || (this.decoders[t] = this._createNamed(r.decoders[t])), this.decoders[t]
    }, o.prototype.decode = function (t, e, n) {
        return this._getDecoder(e).decode(t, n)
    }, o.prototype._getEncoder = function (t) {
        return t = t || "der", this.encoders.hasOwnProperty(t) || (this.encoders[t] = this._createNamed(r.encoders[t])), this.encoders[t]
    }, o.prototype.encode = function (t, e, n) {
        return this._getEncoder(e).encode(t, n)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(21);
    e.certificate = n(98);
    var i = r.define("RSAPrivateKey", function () {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    });
    e.RSAPrivateKey = i;
    var o = r.define("RSAPublicKey", function () {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    });
    e.RSAPublicKey = o;
    var a = r.define("SubjectPublicKeyInfo", function () {
        this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
    });
    e.PublicKey = a;
    var s = r.define("AlgorithmIdentifier", function () {
        this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
    }), c = r.define("PrivateKeyInfo", function () {
        this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
    });
    e.PrivateKey = c;
    var f = r.define("EncryptedPrivateKeyInfo", function () {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    });
    e.EncryptedPrivateKey = f;
    var u = r.define("DSAPrivateKey", function () {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    });
    e.DSAPrivateKey = u, e.DSAparam = r.define("DSAparam", function () {
        this.int()
    });
    var l = r.define("ECPrivateKey", function () {
        this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(h), this.key("publicKey").optional().explicit(1).bitstr())
    });
    e.ECPrivateKey = l;
    var h = r.define("ECParameters", function () {
        this.choice({namedCurve: this.objid()})
    });
    e.signature = r.define("signature", function () {
        this.seq().obj(this.key("r").int(), this.key("s").int())
    })
}, function (t, e, n) {
    "use strict";
    var r = n(3), i = n(4).utils, o = i.assert, a = i.cachedProperty, s = i.parseBytes;

    function c(t, e) {
        this.eddsa = t, "object" != typeof e && (e = s(e)), Array.isArray(e) && (e = {
            R: e.slice(0, t.encodingLength),
            S: e.slice(t.encodingLength)
        }), o(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof r && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
    }

    a(c, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded())
    }), a(c, "R", function () {
        return this.eddsa.decodePoint(this.Rencoded())
    }), a(c, "Rencoded", function () {
        return this.eddsa.encodePoint(this.R())
    }), a(c, "Sencoded", function () {
        return this.eddsa.encodeInt(this.S())
    }), c.prototype.toBytes = function () {
        return this.Rencoded().concat(this.Sencoded())
    }, c.prototype.toHex = function () {
        return i.encode(this.toBytes(), "hex").toUpperCase()
    }, t.exports = c
}, function (t, e, n) {
    "use strict";
    var r = n(4).utils, i = r.assert, o = r.parseBytes, a = r.cachedProperty;

    function s(t, e) {
        this.eddsa = t, this._secret = o(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = o(e.pub)
    }

    s.fromPublic = function (t, e) {
        return e instanceof s ? e : new s(t, {pub: e})
    }, s.fromSecret = function (t, e) {
        return e instanceof s ? e : new s(t, {secret: e})
    }, s.prototype.secret = function () {
        return this._secret
    }, a(s, "pubBytes", function () {
        return this.eddsa.encodePoint(this.pub())
    }), a(s, "pub", function () {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), a(s, "privBytes", function () {
        var t = this.eddsa, e = this.hash(), n = t.encodingLength - 1, r = e.slice(0, t.encodingLength);
        return r[0] &= 248, r[n] &= 127, r[n] |= 64, r
    }), a(s, "priv", function () {
        return this.eddsa.decodeInt(this.privBytes())
    }), a(s, "hash", function () {
        return this.eddsa.hash().update(this.secret()).digest()
    }), a(s, "messagePrefix", function () {
        return this.hash().slice(this.eddsa.encodingLength)
    }), s.prototype.sign = function (t) {
        return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
    }, s.prototype.verify = function (t, e) {
        return this.eddsa.verify(t, e, this)
    }, s.prototype.getSecret = function (t) {
        return i(this._secret, "KeyPair is public only"), r.encode(this.secret(), t)
    }, s.prototype.getPublic = function (t) {
        return r.encode(this.pubBytes(), t)
    }, t.exports = s
}, function (t, e, n) {
    "use strict";
    var r = n(35), i = n(4), o = i.utils, a = o.assert, s = o.parseBytes, c = n(111), f = n(110);

    function u(t) {
        if (a("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof u)) return new u(t);
        t = i.curves[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = r.sha512
    }

    t.exports = u, u.prototype.sign = function (t, e) {
        t = s(t);
        var n = this.keyFromSecret(e), r = this.hashInt(n.messagePrefix(), t), i = this.g.mul(r),
            o = this.encodePoint(i), a = this.hashInt(o, n.pubBytes(), t).mul(n.priv()),
            c = r.add(a).umod(this.curve.n);
        return this.makeSignature({R: i, S: c, Rencoded: o})
    }, u.prototype.verify = function (t, e, n) {
        t = s(t), e = this.makeSignature(e);
        var r = this.keyFromPublic(n), i = this.hashInt(e.Rencoded(), r.pubBytes(), t), o = this.g.mul(e.S());
        return e.R().add(r.pub().mul(i)).eq(o)
    }, u.prototype.hashInt = function () {
        for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
        return o.intFromLE(t.digest()).umod(this.curve.n)
    }, u.prototype.keyFromPublic = function (t) {
        return c.fromPublic(this, t)
    }, u.prototype.keyFromSecret = function (t) {
        return c.fromSecret(this, t)
    }, u.prototype.makeSignature = function (t) {
        return t instanceof f ? t : new f(this, t)
    }, u.prototype.encodePoint = function (t) {
        var e = t.getY().toArray("le", this.encodingLength);
        return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e
    }, u.prototype.decodePoint = function (t) {
        var e = (t = o.parseBytes(t)).length - 1, n = t.slice(0, e).concat(-129 & t[e]), r = 0 != (128 & t[e]),
            i = o.intFromLE(n);
        return this.curve.pointFromY(i, r)
    }, u.prototype.encodeInt = function (t) {
        return t.toArray("le", this.encodingLength)
    }, u.prototype.decodeInt = function (t) {
        return o.intFromLE(t)
    }, u.prototype.isPoint = function (t) {
        return t instanceof this.pointClass
    }
}, function (t, e, n) {
    "use strict";
    var r = n(3), i = n(4).utils, o = i.assert;

    function a(t, e) {
        if (t instanceof a) return t;
        this._importDER(t, e) || (o(t.r && t.s, "Signature without r or s"), this.r = new r(t.r, 16), this.s = new r(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
    }

    function s(t, e) {
        var n = t[e.place++];
        if (!(128 & n)) return n;
        for (var r = 15 & n, i = 0, o = 0, a = e.place; o < r; o++, a++) i <<= 8, i |= t[a];
        return e.place = a, i
    }

    function c(t) {
        for (var e = 0, n = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < n;) e++;
        return 0 === e ? t : t.slice(e)
    }

    function f(t, e) {
        if (e < 128) t.push(e); else {
            var n = 1 + (Math.log(e) / Math.LN2 >>> 3);
            for (t.push(128 | n); --n;) t.push(e >>> (n << 3) & 255);
            t.push(e)
        }
    }

    t.exports = a, a.prototype._importDER = function (t, e) {
        t = i.toArray(t, e);
        var n = new function () {
            this.place = 0
        };
        if (48 !== t[n.place++]) return !1;
        if (s(t, n) + n.place !== t.length) return !1;
        if (2 !== t[n.place++]) return !1;
        var o = s(t, n), a = t.slice(n.place, o + n.place);
        if (n.place += o, 2 !== t[n.place++]) return !1;
        var c = s(t, n);
        if (t.length !== c + n.place) return !1;
        var f = t.slice(n.place, c + n.place);
        return 0 === a[0] && 128 & a[1] && (a = a.slice(1)), 0 === f[0] && 128 & f[1] && (f = f.slice(1)), this.r = new r(a), this.s = new r(f), this.recoveryParam = null, !0
    }, a.prototype.toDER = function (t) {
        var e = this.r.toArray(), n = this.s.toArray();
        for (128 & e[0] && (e = [0].concat(e)), 128 & n[0] && (n = [0].concat(n)), e = c(e), n = c(n); !(n[0] || 128 & n[1]);) n = n.slice(1);
        var r = [2];
        f(r, e.length), (r = r.concat(e)).push(2), f(r, n.length);
        var o = r.concat(n), a = [48];
        return f(a, o.length), a = a.concat(o), i.encode(a, t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(3), i = n(4).utils.assert;

    function o(t, e) {
        this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
    }

    t.exports = o, o.fromPublic = function (t, e, n) {
        return e instanceof o ? e : new o(t, {pub: e, pubEnc: n})
    }, o.fromPrivate = function (t, e, n) {
        return e instanceof o ? e : new o(t, {priv: e, privEnc: n})
    }, o.prototype.validate = function () {
        var t = this.getPublic();
        return t.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {result: !0, reason: null} : {
            result: !1,
            reason: "Public key * N != O"
        } : {result: !1, reason: "Public key is not a point"}
    }, o.prototype.getPublic = function (t, e) {
        return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
    }, o.prototype.getPrivate = function (t) {
        return "hex" === t ? this.priv.toString(16, 2) : this.priv
    }, o.prototype._importPrivate = function (t, e) {
        this.priv = new r(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, o.prototype._importPublic = function (t, e) {
        if (t.x || t.y) return "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
        this.pub = this.ec.curve.decodePoint(t, e)
    }, o.prototype.derive = function (t) {
        return t.mul(this.priv).getX()
    }, o.prototype.sign = function (t, e, n) {
        return this.ec.sign(t, this, e, n)
    }, o.prototype.verify = function (t, e) {
        return this.ec.verify(t, e, this)
    }, o.prototype.inspect = function () {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }
}, function (t, e, n) {
    "use strict";
    var r = n(35), i = n(60), o = n(6);

    function a(t) {
        if (!(this instanceof a)) return new a(t);
        this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = i.toArray(t.entropy, t.entropyEnc || "hex"), n = i.toArray(t.nonce, t.nonceEnc || "hex"),
            r = i.toArray(t.pers, t.persEnc || "hex");
        o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, n, r)
    }

    t.exports = a, a.prototype._init = function (t, e, n) {
        var r = t.concat(e).concat(n);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
        this._update(r), this._reseed = 1, this.reseedInterval = 281474976710656
    }, a.prototype._hmac = function () {
        return new r.hmac(this.hash, this.K)
    }, a.prototype._update = function (t) {
        var e = this._hmac().update(this.V).update([0]);
        t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
    }, a.prototype.reseed = function (t, e, n, r) {
        "string" != typeof e && (r = n, n = e, e = null), t = i.toArray(t, e), n = i.toArray(n, r), o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(n || [])), this._reseed = 1
    }, a.prototype.generate = function (t, e, n, r) {
        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
        "string" != typeof e && (r = n, n = e, e = null), n && (n = i.toArray(n, r || "hex"), this._update(n));
        for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
        var a = o.slice(0, t);
        return this._update(n), this._reseed++, i.encode(a, e)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(3), i = n(115), o = n(4), a = o.utils.assert, s = n(114), c = n(113);

    function f(t) {
        if (!(this instanceof f)) return new f(t);
        "string" == typeof t && (a(o.curves.hasOwnProperty(t), "Unknown curve " + t), t = o.curves[t]), t instanceof o.curves.PresetCurve && (t = {curve: t}), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
    }

    t.exports = f, f.prototype.keyPair = function (t) {
        return new s(this, t)
    }, f.prototype.keyFromPrivate = function (t, e) {
        return s.fromPrivate(this, t, e)
    }, f.prototype.keyFromPublic = function (t, e) {
        return s.fromPublic(this, t, e)
    }, f.prototype.genKeyPair = function (t) {
        t || (t = {});
        for (var e = new i({
            hash: this.hash,
            pers: t.pers,
            persEnc: t.persEnc || "utf8",
            entropy: t.entropy || o.rand(this.hash.hmacStrength),
            entropyEnc: t.entropy && t.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), n = this.n.byteLength(), a = this.n.sub(new r(2)); ;) {
            var s = new r(e.generate(n));
            if (!(s.cmp(a) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
        }
    }, f.prototype._truncateToN = function (t, e) {
        var n = 8 * t.byteLength() - this.n.bitLength();
        return n > 0 && (t = t.ushrn(n)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
    }, f.prototype.sign = function (t, e, n, o) {
        "object" == typeof n && (o = n, n = null), o || (o = {}), e = this.keyFromPrivate(e, n), t = this._truncateToN(new r(t, 16));
        for (var a = this.n.byteLength(), s = e.getPrivate().toArray("be", a), f = t.toArray("be", a), u = new i({
            hash: this.hash,
            entropy: s,
            nonce: f,
            pers: o.pers,
            persEnc: o.persEnc || "utf8"
        }), l = this.n.sub(new r(1)), h = 0; ; h++) {
            var d = o.k ? o.k(h) : new r(u.generate(this.n.byteLength()));
            if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || d.cmp(l) >= 0)) {
                var p = this.g.mul(d);
                if (!p.isInfinity()) {
                    var b = p.getX(), g = b.umod(this.n);
                    if (0 !== g.cmpn(0)) {
                        var y = d.invm(this.n).mul(g.mul(e.getPrivate()).iadd(t));
                        if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                            var m = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(g) ? 2 : 0);
                            return o.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y), m ^= 1), new c({
                                r: g,
                                s: y,
                                recoveryParam: m
                            })
                        }
                    }
                }
            }
        }
    }, f.prototype.verify = function (t, e, n, i) {
        t = this._truncateToN(new r(t, 16)), n = this.keyFromPublic(n, i);
        var o = (e = new c(e, "hex")).r, a = e.s;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
        if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
        var s, f = a.invm(this.n), u = f.mul(t).umod(this.n), l = f.mul(o).umod(this.n);
        return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(u, n.getPublic(), l)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(u, n.getPublic(), l)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
    }, f.prototype.recoverPubKey = function (t, e, n, i) {
        a((3 & n) === n, "The recovery param is more than two bits"), e = new c(e, i);
        var o = this.n, s = new r(t), f = e.r, u = e.s, l = 1 & n, h = n >> 1;
        if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw new Error("Unable to find sencond key candinate");
        f = h ? this.curve.pointFromX(f.add(this.curve.n), l) : this.curve.pointFromX(f, l);
        var d = e.r.invm(o), p = o.sub(s).mul(d).umod(o), b = u.mul(d).umod(o);
        return this.g.mulAdd(p, f, b)
    }, f.prototype.getKeyRecoveryParam = function (t, e, n, r) {
        if (null !== (e = new c(e, r)).recoveryParam) return e.recoveryParam;
        for (var i = 0; i < 4; i++) {
            var o;
            try {
                o = this.recoverPubKey(t, e, i)
            } catch (t) {
                continue
            }
            if (o.eq(n)) return i
        }
        throw new Error("Unable to find valid recovery factor")
    }
}, function (t, e) {
    t.exports = {
        doubles: {
            step: 4,
            points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
        },
        naf: {
            wnd: 7,
            points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(6);

    function o(t, e, n) {
        if (!(this instanceof o)) return new o(t, e, n);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(r.toArray(e, n))
    }

    t.exports = o, o.prototype._init = function (t) {
        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), i(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
        this.outer = (new this.Hash).update(t)
    }, o.prototype.update = function (t, e) {
        return this.inner.update(t, e), this
    }, o.prototype.digest = function (t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(22), o = r.rotl32, a = r.sum32, s = r.sum32_3, c = r.sum32_4, f = i.BlockHash;

    function u() {
        if (!(this instanceof u)) return new u;
        f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
    }

    function l(t, e, n, r) {
        return t <= 15 ? e ^ n ^ r : t <= 31 ? e & n | ~e & r : t <= 47 ? (e | ~n) ^ r : t <= 63 ? e & r | n & ~r : e ^ (n | ~r)
    }

    function h(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
    }

    function d(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
    }

    r.inherits(u, f), e.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function (t, e) {
        for (var n = this.h[0], r = this.h[1], i = this.h[2], f = this.h[3], u = this.h[4], m = n, v = r, A = i, w = f, _ = u, E = 0; E < 80; E++) {
            var x = a(o(c(n, l(E, r, i, f), t[p[E] + e], h(E)), g[E]), u);
            n = u, u = f, f = o(i, 10), i = r, r = x, x = a(o(c(m, l(79 - E, v, A, w), t[b[E] + e], d(E)), y[E]), _), m = _, _ = w, w = o(A, 10), A = v, v = x
        }
        x = s(this.h[1], i, w), this.h[1] = s(this.h[2], f, _), this.h[2] = s(this.h[3], u, m), this.h[3] = s(this.h[4], n, v), this.h[4] = s(this.h[0], r, A), this.h[0] = x
    }, u.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h, "little") : r.split32(this.h, "little")
    };
    var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(57);

    function o() {
        if (!(this instanceof o)) return new o;
        i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }

    r.inherits(o, i), t.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(58);

    function o() {
        if (!(this instanceof o)) return new o;
        i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }

    r.inherits(o, i), t.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(9), i = n(22), o = n(59), a = r.rotl32, s = r.sum32, c = r.sum32_5, f = o.ft_1, u = i.BlockHash,
        l = [1518500249, 1859775393, 2400959708, 3395469782];

    function h() {
        if (!(this instanceof h)) return new h;
        u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
    }

    r.inherits(h, u), t.exports = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 80, h.padLength = 64, h.prototype._update = function (t, e) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = t[e + r];
        for (; r < n.length; r++) n[r] = a(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
        var i = this.h[0], o = this.h[1], u = this.h[2], h = this.h[3], d = this.h[4];
        for (r = 0; r < n.length; r++) {
            var p = ~~(r / 20), b = c(a(i, 5), f(p, o, u, h), d, n[r], l[p]);
            d = h, h = u, u = a(o, 30), o = i, i = b
        }
        this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], u), this.h[3] = s(this.h[3], h), this.h[4] = s(this.h[4], d)
    }, h.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}, function (t, e, n) {
    "use strict";
    e.sha1 = n(122), e.sha224 = n(121), e.sha256 = n(58), e.sha384 = n(120), e.sha512 = n(57)
}, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : t.exports = function (t, e) {
        t.super_ = e;
        var n = function () {
        };
        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
}, function (t, e, n) {
    "use strict";
    var r, i = e, o = n(35), a = n(4), s = a.utils.assert;

    function c(t) {
        "short" === t.type ? this.curve = new a.curve.short(t) : "edwards" === t.type ? this.curve = new a.curve.edwards(t) : this.curve = new a.curve.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
    }

    function f(t, e) {
        Object.defineProperty(i, t, {
            configurable: !0, enumerable: !0, get: function () {
                var n = new c(e);
                return Object.defineProperty(i, t, {configurable: !0, enumerable: !0, value: n}), n
            }
        })
    }

    i.PresetCurve = c, f("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: o.sha256,
        gRed: !1,
        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    }), f("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: o.sha256,
        gRed: !1,
        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    }), f("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: o.sha256,
        gRed: !1,
        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    }), f("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: o.sha384,
        gRed: !1,
        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    }), f("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: o.sha512,
        gRed: !1,
        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    }), f("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["9"]
    }), f("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });
    try {
        r = n(117)
    } catch (t) {
        r = void 0
    }
    f("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [{
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
        }, {a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15"}],
        gRed: !1,
        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
    })
}, function (t, e, n) {
    "use strict";
    var r = n(29), i = n(4), o = n(3), a = n(0), s = r.base, c = i.utils.assert;

    function f(t) {
        this.twisted = 1 != (0 | t.a), this.mOneA = this.twisted && -1 == (0 | t.a), this.extended = this.mOneA, s.call(this, "edwards", t), this.a = new o(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new o(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new o(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), c(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | t.c)
    }

    function u(t, e, n, r, i) {
        s.BasePoint.call(this, t, "projective"), null === e && null === n && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new o(e, 16), this.y = new o(n, 16), this.z = r ? new o(r, 16) : this.curve.one, this.t = i && new o(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }

    a(f, s), t.exports = f, f.prototype._mulA = function (t) {
        return this.mOneA ? t.redNeg() : this.a.redMul(t)
    }, f.prototype._mulC = function (t) {
        return this.oneC ? t : this.c.redMul(t)
    }, f.prototype.jpoint = function (t, e, n, r) {
        return this.point(t, e, n, r)
    }, f.prototype.pointFromX = function (t, e) {
        (t = new o(t, 16)).red || (t = t.toRed(this.red));
        var n = t.redSqr(), r = this.c2.redSub(this.a.redMul(n)), i = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            a = r.redMul(i.redInvm()), s = a.redSqrt();
        if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
        var c = s.fromRed().isOdd();
        return (e && !c || !e && c) && (s = s.redNeg()), this.point(t, s)
    }, f.prototype.pointFromY = function (t, e) {
        (t = new o(t, 16)).red || (t = t.toRed(this.red));
        var n = t.redSqr(), r = n.redSub(this.one), i = n.redMul(this.d).redAdd(this.one), a = r.redMul(i.redInvm());
        if (0 === a.cmp(this.zero)) {
            if (e) throw new Error("invalid point");
            return this.point(this.zero, t)
        }
        var s = a.redSqrt();
        if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
        return s.isOdd() !== e && (s = s.redNeg()), this.point(s, t)
    }, f.prototype.validate = function (t) {
        if (t.isInfinity()) return !0;
        t.normalize();
        var e = t.x.redSqr(), n = t.y.redSqr(), r = e.redMul(this.a).redAdd(n),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(n)));
        return 0 === r.cmp(i)
    }, a(u, s.BasePoint), f.prototype.pointFromJSON = function (t) {
        return u.fromJSON(this, t)
    }, f.prototype.point = function (t, e, n, r) {
        return new u(this, t, e, n, r)
    }, u.fromJSON = function (t, e) {
        return new u(t, e[0], e[1], e[2])
    }, u.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, u.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z)
    }, u.prototype._extDbl = function () {
        var t = this.x.redSqr(), e = this.y.redSqr(), n = this.z.redSqr();
        n = n.redIAdd(n);
        var r = this.curve._mulA(t), i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e), o = r.redAdd(e),
            a = o.redSub(n), s = r.redSub(e), c = i.redMul(a), f = o.redMul(s), u = i.redMul(s), l = a.redMul(o);
        return this.curve.point(c, f, l, u)
    }, u.prototype._projDbl = function () {
        var t, e, n, r = this.x.redAdd(this.y).redSqr(), i = this.x.redSqr(), o = this.y.redSqr();
        if (this.curve.twisted) {
            var a = (f = this.curve._mulA(i)).redAdd(o);
            if (this.zOne) t = r.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)), e = a.redMul(f.redSub(o)), n = a.redSqr().redSub(a).redSub(a); else {
                var s = this.z.redSqr(), c = a.redSub(s).redISub(s);
                t = r.redSub(i).redISub(o).redMul(c), e = a.redMul(f.redSub(o)), n = a.redMul(c)
            }
        } else {
            var f = i.redAdd(o);
            s = this.curve._mulC(this.c.redMul(this.z)).redSqr(), c = f.redSub(s).redSub(s), t = this.curve._mulC(r.redISub(f)).redMul(c), e = this.curve._mulC(f).redMul(i.redISub(o)), n = f.redMul(c)
        }
        return this.curve.point(t, e, n)
    }, u.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, u.prototype._extAdd = function (t) {
        var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)), n = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
            r = this.t.redMul(this.curve.dd).redMul(t.t), i = this.z.redMul(t.z.redAdd(t.z)), o = n.redSub(e),
            a = i.redSub(r), s = i.redAdd(r), c = n.redAdd(e), f = o.redMul(a), u = s.redMul(c), l = o.redMul(c),
            h = a.redMul(s);
        return this.curve.point(f, u, h, l)
    }, u.prototype._projAdd = function (t) {
        var e, n, r = this.z.redMul(t.z), i = r.redSqr(), o = this.x.redMul(t.x), a = this.y.redMul(t.y),
            s = this.curve.d.redMul(o).redMul(a), c = i.redSub(s), f = i.redAdd(s),
            u = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a), l = r.redMul(c).redMul(u);
        return this.curve.twisted ? (e = r.redMul(f).redMul(a.redSub(this.curve._mulA(o))), n = c.redMul(f)) : (e = r.redMul(f).redMul(a.redSub(o)), n = this.curve._mulC(c).redMul(f)), this.curve.point(l, e, n)
    }, u.prototype.add = function (t) {
        return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
    }, u.prototype.mul = function (t) {
        return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
    }, u.prototype.mulAdd = function (t, e, n) {
        return this.curve._wnafMulAdd(1, [this, e], [t, n], 2, !1)
    }, u.prototype.jmulAdd = function (t, e, n) {
        return this.curve._wnafMulAdd(1, [this, e], [t, n], 2, !0)
    }, u.prototype.normalize = function () {
        if (this.zOne) return this;
        var t = this.z.redInvm();
        return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this
    }, u.prototype.neg = function () {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, u.prototype.getX = function () {
        return this.normalize(), this.x.fromRed()
    }, u.prototype.getY = function () {
        return this.normalize(), this.y.fromRed()
    }, u.prototype.eq = function (t) {
        return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
    }, u.prototype.eqXToP = function (t) {
        var e = t.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(e)) return !0;
        for (var n = t.clone(), r = this.curve.redN.redMul(this.z); ;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
            if (e.redIAdd(r), 0 === this.x.cmp(e)) return !0
        }
        return !1
    }, u.prototype.toP = u.prototype.normalize, u.prototype.mixedAdd = u.prototype.add
}, function (t, e, n) {
    "use strict";
    var r = n(29), i = n(3), o = n(0), a = r.base, s = n(4).utils;

    function c(t) {
        a.call(this, "mont", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }

    function f(t, e, n) {
        a.BasePoint.call(this, t, "projective"), null === e && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(e, 16), this.z = new i(n, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }

    o(c, a), t.exports = c, c.prototype.validate = function (t) {
        var e = t.normalize().x, n = e.redSqr(), r = n.redMul(e).redAdd(n.redMul(this.a)).redAdd(e);
        return 0 === r.redSqrt().redSqr().cmp(r)
    }, o(f, a.BasePoint), c.prototype.decodePoint = function (t, e) {
        return this.point(s.toArray(t, e), 1)
    }, c.prototype.point = function (t, e) {
        return new f(this, t, e)
    }, c.prototype.pointFromJSON = function (t) {
        return f.fromJSON(this, t)
    }, f.prototype.precompute = function () {
    }, f.prototype._encode = function () {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, f.fromJSON = function (t, e) {
        return new f(t, e[0], e[1] || t.one)
    }, f.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, f.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0)
    }, f.prototype.dbl = function () {
        var t = this.x.redAdd(this.z).redSqr(), e = this.x.redSub(this.z).redSqr(), n = t.redSub(e), r = t.redMul(e),
            i = n.redMul(e.redAdd(this.curve.a24.redMul(n)));
        return this.curve.point(r, i)
    }, f.prototype.add = function () {
        throw new Error("Not supported on Montgomery curve")
    }, f.prototype.diffAdd = function (t, e) {
        var n = this.x.redAdd(this.z), r = this.x.redSub(this.z), i = t.x.redAdd(t.z), o = t.x.redSub(t.z).redMul(n),
            a = i.redMul(r), s = e.z.redMul(o.redAdd(a).redSqr()), c = e.x.redMul(o.redISub(a).redSqr());
        return this.curve.point(s, c)
    }, f.prototype.mul = function (t) {
        for (var e = t.clone(), n = this, r = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1)) i.push(e.andln(1));
        for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (n = n.diffAdd(r, this), r = r.dbl()) : (r = n.diffAdd(r, this), n = n.dbl());
        return r
    }, f.prototype.mulAdd = function () {
        throw new Error("Not supported on Montgomery curve")
    }, f.prototype.jumlAdd = function () {
        throw new Error("Not supported on Montgomery curve")
    }, f.prototype.eq = function (t) {
        return 0 === this.getX().cmp(t.getX())
    }, f.prototype.normalize = function () {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, f.prototype.getX = function () {
        return this.normalize(), this.x.fromRed()
    }
}, function (t, e, n) {
    "use strict";
    var r = n(29), i = n(4), o = n(3), a = n(0), s = r.base, c = i.utils.assert;

    function f(t) {
        s.call(this, "short", t), this.a = new o(t.a, 16).toRed(this.red), this.b = new o(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
    }

    function u(t, e, n, r) {
        s.BasePoint.call(this, t, "affine"), null === e && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new o(e, 16), this.y = new o(n, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }

    function l(t, e, n, r) {
        s.BasePoint.call(this, t, "jacobian"), null === e && null === n && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new o(0)) : (this.x = new o(e, 16), this.y = new o(n, 16), this.z = new o(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }

    a(f, s), t.exports = f, f.prototype._getEndomorphism = function (t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, n;
            if (t.beta) e = new o(t.beta, 16).toRed(this.red); else {
                var r = this._getEndoRoots(this.p);
                e = (e = r[0].cmp(r[1]) < 0 ? r[0] : r[1]).toRed(this.red)
            }
            if (t.lambda) n = new o(t.lambda, 16); else {
                var i = this._getEndoRoots(this.n);
                0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(e)) ? n = i[0] : (n = i[1], c(0 === this.g.mul(n).x.cmp(this.g.x.redMul(e))))
            }
            return {
                beta: e, lambda: n, basis: t.basis ? t.basis.map(function (t) {
                    return {a: new o(t.a, 16), b: new o(t.b, 16)}
                }) : this._getEndoBasis(n)
            }
        }
    }, f.prototype._getEndoRoots = function (t) {
        var e = t === this.p ? this.red : o.mont(t), n = new o(2).toRed(e).redInvm(), r = n.redNeg(),
            i = new o(3).toRed(e).redNeg().redSqrt().redMul(n);
        return [r.redAdd(i).fromRed(), r.redSub(i).fromRed()]
    }, f.prototype._getEndoBasis = function (t) {
        for (var e, n, r, i, a, s, c, f, u, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = t, d = this.n.clone(), p = new o(1), b = new o(0), g = new o(0), y = new o(1), m = 0; 0 !== h.cmpn(0);) {
            var v = d.div(h);
            f = d.sub(v.mul(h)), u = g.sub(v.mul(p));
            var A = y.sub(v.mul(b));
            if (!r && f.cmp(l) < 0) e = c.neg(), n = p, r = f.neg(), i = u; else if (r && 2 == ++m) break;
            c = f, d = h, h = f, g = p, p = u, y = b, b = A
        }
        a = f.neg(), s = u;
        var w = r.sqr().add(i.sqr());
        return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = e, s = n), r.negative && (r = r.neg(), i = i.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
            a: r,
            b: i
        }, {a: a, b: s}]
    }, f.prototype._endoSplit = function (t) {
        var e = this.endo.basis, n = e[0], r = e[1], i = r.b.mul(t).divRound(this.n),
            o = n.b.neg().mul(t).divRound(this.n), a = i.mul(n.a), s = o.mul(r.a), c = i.mul(n.b), f = o.mul(r.b);
        return {k1: t.sub(a).sub(s), k2: c.add(f).neg()}
    }, f.prototype.pointFromX = function (t, e) {
        (t = new o(t, 16)).red || (t = t.toRed(this.red));
        var n = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), r = n.redSqrt();
        if (0 !== r.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point");
        var i = r.fromRed().isOdd();
        return (e && !i || !e && i) && (r = r.redNeg()), this.point(t, r)
    }, f.prototype.validate = function (t) {
        if (t.inf) return !0;
        var e = t.x, n = t.y, r = this.a.redMul(e), i = e.redSqr().redMul(e).redIAdd(r).redIAdd(this.b);
        return 0 === n.redSqr().redISub(i).cmpn(0)
    }, f.prototype._endoWnafMulAdd = function (t, e, n) {
        for (var r = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
            var a = this._endoSplit(e[o]), s = t[o], c = s._getBeta();
            a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), c = c.neg(!0)), r[2 * o] = s, r[2 * o + 1] = c, i[2 * o] = a.k1, i[2 * o + 1] = a.k2
        }
        for (var f = this._wnafMulAdd(1, r, i, 2 * o, n), u = 0; u < 2 * o; u++) r[u] = null, i[u] = null;
        return f
    }, a(u, s.BasePoint), f.prototype.point = function (t, e, n) {
        return new u(this, t, e, n)
    }, f.prototype.pointFromJSON = function (t, e) {
        return u.fromJSON(this, t, e)
    }, u.prototype._getBeta = function () {
        if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t) {
                var n = this.curve, r = function (t) {
                    return n.point(t.x.redMul(n.endo.beta), t.y)
                };
                t.beta = e, e.precomputed = {
                    beta: null,
                    naf: t.naf && {wnd: t.naf.wnd, points: t.naf.points.map(r)},
                    doubles: t.doubles && {step: t.doubles.step, points: t.doubles.points.map(r)}
                }
            }
            return e
        }
    }, u.prototype.toJSON = function () {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1)}
        }] : [this.x, this.y]
    }, u.fromJSON = function (t, e, n) {
        "string" == typeof e && (e = JSON.parse(e));
        var r = t.point(e[0], e[1], n);
        if (!e[2]) return r;

        function i(e) {
            return t.point(e[0], e[1], n)
        }

        var o = e[2];
        return r.precomputed = {
            beta: null,
            doubles: o.doubles && {step: o.doubles.step, points: [r].concat(o.doubles.points.map(i))},
            naf: o.naf && {wnd: o.naf.wnd, points: [r].concat(o.naf.points.map(i))}
        }, r
    }, u.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, u.prototype.isInfinity = function () {
        return this.inf
    }, u.prototype.add = function (t) {
        if (this.inf) return t;
        if (t.inf) return this;
        if (this.eq(t)) return this.dbl();
        if (this.neg().eq(t)) return this.curve.point(null, null);
        if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
        var e = this.y.redSub(t.y);
        0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
        var n = e.redSqr().redISub(this.x).redISub(t.x), r = e.redMul(this.x.redSub(n)).redISub(this.y);
        return this.curve.point(n, r)
    }, u.prototype.dbl = function () {
        if (this.inf) return this;
        var t = this.y.redAdd(this.y);
        if (0 === t.cmpn(0)) return this.curve.point(null, null);
        var e = this.curve.a, n = this.x.redSqr(), r = t.redInvm(), i = n.redAdd(n).redIAdd(n).redIAdd(e).redMul(r),
            o = i.redSqr().redISub(this.x.redAdd(this.x)), a = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, a)
    }, u.prototype.getX = function () {
        return this.x.fromRed()
    }, u.prototype.getY = function () {
        return this.y.fromRed()
    }, u.prototype.mul = function (t) {
        return t = new o(t, 16), this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
    }, u.prototype.mulAdd = function (t, e, n) {
        var r = [this, e], i = [t, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2)
    }, u.prototype.jmulAdd = function (t, e, n) {
        var r = [this, e], i = [t, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0)
    }, u.prototype.eq = function (t) {
        return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
    }, u.prototype.neg = function (t) {
        if (this.inf) return this;
        var e = this.curve.point(this.x, this.y.redNeg());
        if (t && this.precomputed) {
            var n = this.precomputed, r = function (t) {
                return t.neg()
            };
            e.precomputed = {
                naf: n.naf && {wnd: n.naf.wnd, points: n.naf.points.map(r)},
                doubles: n.doubles && {step: n.doubles.step, points: n.doubles.points.map(r)}
            }
        }
        return e
    }, u.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }, a(l, s.BasePoint), f.prototype.jpoint = function (t, e, n) {
        return new l(this, t, e, n)
    }, l.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var t = this.z.redInvm(), e = t.redSqr(), n = this.x.redMul(e), r = this.y.redMul(e).redMul(t);
        return this.curve.point(n, r)
    }, l.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, l.prototype.add = function (t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var e = t.z.redSqr(), n = this.z.redSqr(), r = this.x.redMul(e), i = t.x.redMul(n),
            o = this.y.redMul(e.redMul(t.z)), a = t.y.redMul(n.redMul(this.z)), s = r.redSub(i), c = o.redSub(a);
        if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var f = s.redSqr(), u = f.redMul(s), l = r.redMul(f), h = c.redSqr().redIAdd(u).redISub(l).redISub(l),
            d = c.redMul(l.redISub(h)).redISub(o.redMul(u)), p = this.z.redMul(t.z).redMul(s);
        return this.curve.jpoint(h, d, p)
    }, l.prototype.mixedAdd = function (t) {
        if (this.isInfinity()) return t.toJ();
        if (t.isInfinity()) return this;
        var e = this.z.redSqr(), n = this.x, r = t.x.redMul(e), i = this.y, o = t.y.redMul(e).redMul(this.z),
            a = n.redSub(r), s = i.redSub(o);
        if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = a.redSqr(), f = c.redMul(a), u = n.redMul(c), l = s.redSqr().redIAdd(f).redISub(u).redISub(u),
            h = s.redMul(u.redISub(l)).redISub(i.redMul(f)), d = this.z.redMul(a);
        return this.curve.jpoint(l, h, d)
    }, l.prototype.dblp = function (t) {
        if (0 === t) return this;
        if (this.isInfinity()) return this;
        if (!t) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            for (var e = this, n = 0; n < t; n++) e = e.dbl();
            return e
        }
        var r = this.curve.a, i = this.curve.tinv, o = this.x, a = this.y, s = this.z, c = s.redSqr().redSqr(),
            f = a.redAdd(a);
        for (n = 0; n < t; n++) {
            var u = o.redSqr(), l = f.redSqr(), h = l.redSqr(), d = u.redAdd(u).redIAdd(u).redIAdd(r.redMul(c)),
                p = o.redMul(l), b = d.redSqr().redISub(p.redAdd(p)), g = p.redISub(b), y = d.redMul(g);
            y = y.redIAdd(y).redISub(h);
            var m = f.redMul(s);
            n + 1 < t && (c = c.redMul(h)), o = b, s = m, f = y
        }
        return this.curve.jpoint(o, f.redMul(i), s)
    }, l.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, l.prototype._zeroDbl = function () {
        var t, e, n;
        if (this.zOne) {
            var r = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(),
                a = this.x.redAdd(i).redSqr().redISub(r).redISub(o);
            a = a.redIAdd(a);
            var s = r.redAdd(r).redIAdd(r), c = s.redSqr().redISub(a).redISub(a), f = o.redIAdd(o);
            f = (f = f.redIAdd(f)).redIAdd(f), t = c, e = s.redMul(a.redISub(c)).redISub(f), n = this.y.redAdd(this.y)
        } else {
            var u = this.x.redSqr(), l = this.y.redSqr(), h = l.redSqr(),
                d = this.x.redAdd(l).redSqr().redISub(u).redISub(h);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u), b = p.redSqr(), g = h.redIAdd(h);
            g = (g = g.redIAdd(g)).redIAdd(g), t = b.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(g), n = (n = this.y.redMul(this.z)).redIAdd(n)
        }
        return this.curve.jpoint(t, e, n)
    }, l.prototype._threeDbl = function () {
        var t, e, n;
        if (this.zOne) {
            var r = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(),
                a = this.x.redAdd(i).redSqr().redISub(r).redISub(o);
            a = a.redIAdd(a);
            var s = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a), c = s.redSqr().redISub(a).redISub(a);
            t = c;
            var f = o.redIAdd(o);
            f = (f = f.redIAdd(f)).redIAdd(f), e = s.redMul(a.redISub(c)).redISub(f), n = this.y.redAdd(this.y)
        } else {
            var u = this.z.redSqr(), l = this.y.redSqr(), h = this.x.redMul(l),
                d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h), b = (p = p.redIAdd(p)).redAdd(p);
            t = d.redSqr().redISub(b), n = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u);
            var g = l.redSqr();
            g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), e = d.redMul(p.redISub(t)).redISub(g)
        }
        return this.curve.jpoint(t, e, n)
    }, l.prototype._dbl = function () {
        var t = this.curve.a, e = this.x, n = this.y, r = this.z, i = r.redSqr().redSqr(), o = e.redSqr(),
            a = n.redSqr(), s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)), c = e.redAdd(e),
            f = (c = c.redIAdd(c)).redMul(a), u = s.redSqr().redISub(f.redAdd(f)), l = f.redISub(u), h = a.redSqr();
        h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
        var d = s.redMul(l).redISub(h), p = n.redAdd(n).redMul(r);
        return this.curve.jpoint(u, d, p)
    }, l.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var t = this.x.redSqr(), e = this.y.redSqr(), n = this.z.redSqr(), r = e.redSqr(), i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(), a = this.x.redAdd(e).redSqr().redISub(t).redISub(r),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(), c = r.redIAdd(r);
        c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
        var f = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c), u = e.redMul(f);
        u = (u = u.redIAdd(u)).redIAdd(u);
        var l = this.x.redMul(s).redISub(u);
        l = (l = l.redIAdd(l)).redIAdd(l);
        var h = this.y.redMul(f.redMul(c.redISub(f)).redISub(a.redMul(s)));
        h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
        var d = this.z.redAdd(a).redSqr().redISub(n).redISub(s);
        return this.curve.jpoint(l, h, d)
    }, l.prototype.mul = function (t, e) {
        return t = new o(t, e), this.curve._wnafMul(this, t)
    }, l.prototype.eq = function (t) {
        if ("affine" === t.type) return this.eq(t.toJ());
        if (this === t) return !0;
        var e = this.z.redSqr(), n = t.z.redSqr();
        if (0 !== this.x.redMul(n).redISub(t.x.redMul(e)).cmpn(0)) return !1;
        var r = e.redMul(this.z), i = n.redMul(t.z);
        return 0 === this.y.redMul(i).redISub(t.y.redMul(r)).cmpn(0)
    }, l.prototype.eqXToP = function (t) {
        var e = this.z.redSqr(), n = t.toRed(this.curve.red).redMul(e);
        if (0 === this.x.cmp(n)) return !0;
        for (var r = t.clone(), i = this.curve.redN.redMul(e); ;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (n.redIAdd(i), 0 === this.x.cmp(n)) return !0
        }
        return !1
    }, l.prototype.inspect = function () {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, l.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(3), i = n(4).utils, o = i.getNAF, a = i.getJSF, s = i.assert;

    function c(t, e) {
        this.type = t, this.p = new r(e.p, 16), this.red = e.prime ? r.red(e.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = e.n && new r(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4);
        var n = this.n && this.p.div(this.n);
        !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }

    function f(t, e) {
        this.curve = t, this.type = e, this.precomputed = null
    }

    t.exports = c, c.prototype.point = function () {
        throw new Error("Not implemented")
    }, c.prototype.validate = function () {
        throw new Error("Not implemented")
    }, c.prototype._fixedNafMul = function (t, e) {
        s(t.precomputed);
        var n = t._getDoubles(), r = o(e, 1), i = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
        i /= 3;
        for (var a = [], c = 0; c < r.length; c += n.step) {
            var f = 0;
            for (e = c + n.step - 1; e >= c; e--) f = (f << 1) + r[e];
            a.push(f)
        }
        for (var u = this.jpoint(null, null, null), l = this.jpoint(null, null, null), h = i; h > 0; h--) {
            for (c = 0; c < a.length; c++) (f = a[c]) === h ? l = l.mixedAdd(n.points[c]) : f === -h && (l = l.mixedAdd(n.points[c].neg()));
            u = u.add(l)
        }
        return u.toP()
    }, c.prototype._wnafMul = function (t, e) {
        var n = 4, r = t._getNAFPoints(n);
        n = r.wnd;
        for (var i = r.points, a = o(e, n), c = this.jpoint(null, null, null), f = a.length - 1; f >= 0; f--) {
            for (e = 0; f >= 0 && 0 === a[f]; f--) e++;
            if (f >= 0 && e++, c = c.dblp(e), f < 0) break;
            var u = a[f];
            s(0 !== u), c = "affine" === t.type ? u > 0 ? c.mixedAdd(i[u - 1 >> 1]) : c.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? c.add(i[u - 1 >> 1]) : c.add(i[-u - 1 >> 1].neg())
        }
        return "affine" === t.type ? c.toP() : c
    }, c.prototype._wnafMulAdd = function (t, e, n, r, i) {
        for (var s = this._wnafT1, c = this._wnafT2, f = this._wnafT3, u = 0, l = 0; l < r; l++) {
            var h = (C = e[l])._getNAFPoints(t);
            s[l] = h.wnd, c[l] = h.points
        }
        for (l = r - 1; l >= 1; l -= 2) {
            var d = l - 1, p = l;
            if (1 === s[d] && 1 === s[p]) {
                var b = [e[d], null, null, e[p]];
                0 === e[d].y.cmp(e[p].y) ? (b[1] = e[d].add(e[p]), b[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (b[1] = e[d].toJ().mixedAdd(e[p]), b[2] = e[d].add(e[p].neg())) : (b[1] = e[d].toJ().mixedAdd(e[p]), b[2] = e[d].toJ().mixedAdd(e[p].neg()));
                var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3], y = a(n[d], n[p]);
                u = Math.max(y[0].length, u), f[d] = new Array(u), f[p] = new Array(u);
                for (var m = 0; m < u; m++) {
                    var v = 0 | y[0][m], A = 0 | y[1][m];
                    f[d][m] = g[3 * (v + 1) + (A + 1)], f[p][m] = 0, c[d] = b
                }
            } else f[d] = o(n[d], s[d]), f[p] = o(n[p], s[p]), u = Math.max(f[d].length, u), u = Math.max(f[p].length, u)
        }
        var w = this.jpoint(null, null, null), _ = this._wnafT4;
        for (l = u; l >= 0; l--) {
            for (var E = 0; l >= 0;) {
                var x = !0;
                for (m = 0; m < r; m++) _[m] = 0 | f[m][l], 0 !== _[m] && (x = !1);
                if (!x) break;
                E++, l--
            }
            if (l >= 0 && E++, w = w.dblp(E), l < 0) break;
            for (m = 0; m < r; m++) {
                var C, B = _[m];
                0 !== B && (B > 0 ? C = c[m][B - 1 >> 1] : B < 0 && (C = c[m][-B - 1 >> 1].neg()), w = "affine" === C.type ? w.mixedAdd(C) : w.add(C))
            }
        }
        for (l = 0; l < r; l++) c[l] = null;
        return i ? w : w.toP()
    }, c.BasePoint = f, f.prototype.eq = function () {
        throw new Error("Not implemented")
    }, f.prototype.validate = function () {
        return this.curve.validate(this)
    }, c.prototype.decodePoint = function (t, e) {
        t = i.toArray(t, e);
        var n = this.p.byteLength();
        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * n) return 6 === t[0] ? s(t[t.length - 1] % 2 == 0) : 7 === t[0] && s(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + n), t.slice(1 + n, 1 + 2 * n));
        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === n) return this.pointFromX(t.slice(1, 1 + n), 3 === t[0]);
        throw new Error("Unknown point format")
    }, f.prototype.encodeCompressed = function (t) {
        return this.encode(t, !0)
    }, f.prototype._encode = function (t) {
        var e = this.curve.p.byteLength(), n = this.getX().toArray("be", e);
        return t ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", e))
    }, f.prototype.encode = function (t, e) {
        return i.encode(this._encode(e), t)
    }, f.prototype.precompute = function (t) {
        if (this.precomputed) return this;
        var e = {doubles: null, naf: null, beta: null};
        return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
    }, f.prototype._hasDoubles = function (t) {
        if (!this.precomputed) return !1;
        var e = this.precomputed.doubles;
        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
    }, f.prototype._getDoubles = function (t, e) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var n = [this], r = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) r = r.dbl();
            n.push(r)
        }
        return {step: t, points: n}
    }, f.prototype._getNAFPoints = function (t) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var e = [this], n = (1 << t) - 1, r = 1 === n ? null : this.dbl(), i = 1; i < n; i++) e[i] = e[i - 1].add(r);
        return {wnd: t, points: e}
    }, f.prototype._getBeta = function () {
        return null
    }, f.prototype.dblp = function (t) {
        for (var e = this, n = 0; n < t; n++) e = e.dbl();
        return e
    }
}, function (t, e, n) {
    "use strict";
    var r = e, i = n(3), o = n(6), a = n(60);
    r.assert = o, r.toArray = a.toArray, r.zero2 = a.zero2, r.toHex = a.toHex, r.encode = a.encode, r.getNAF = function (t, e) {
        for (var n = [], r = 1 << e + 1, i = t.clone(); i.cmpn(1) >= 0;) {
            var o;
            if (i.isOdd()) {
                var a = i.andln(r - 1);
                o = a > (r >> 1) - 1 ? (r >> 1) - a : a, i.isubn(o)
            } else o = 0;
            n.push(o);
            for (var s = 0 !== i.cmpn(0) && 0 === i.andln(r - 1) ? e + 1 : 1, c = 1; c < s; c++) n.push(0);
            i.iushrn(s)
        }
        return n
    }, r.getJSF = function (t, e) {
        var n = [[], []];
        t = t.clone(), e = e.clone();
        for (var r = 0, i = 0; t.cmpn(-r) > 0 || e.cmpn(-i) > 0;) {
            var o, a, s, c = t.andln(3) + r & 3, f = e.andln(3) + i & 3;
            3 === c && (c = -1), 3 === f && (f = -1), o = 0 == (1 & c) ? 0 : 3 != (s = t.andln(7) + r & 7) && 5 !== s || 2 !== f ? c : -c, n[0].push(o), a = 0 == (1 & f) ? 0 : 3 != (s = e.andln(7) + i & 7) && 5 !== s || 2 !== c ? f : -f, n[1].push(a), 2 * r === o + 1 && (r = 1 - r), 2 * i === a + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1)
        }
        return n
    }, r.cachedProperty = function (t, e, n) {
        var r = "_" + e;
        t.prototype[e] = function () {
            return void 0 !== this[r] ? this[r] : this[r] = n.call(this)
        }
    }, r.parseBytes = function (t) {
        return "string" == typeof t ? r.toArray(t, "hex") : t
    }, r.intFromLE = function (t) {
        return new i(t, "hex", "le")
    }
}, function (t) {
    t.exports = {
        _from: "elliptic@^6.0.0",
        _id: "elliptic@6.4.0",
        _inBundle: !1,
        _integrity: "sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",
        _location: "/node-libs-browser/elliptic",
        _phantomChildren: {},
        _requested: {
            type: "range",
            registry: !0,
            raw: "elliptic@^6.0.0",
            name: "elliptic",
            escapedName: "elliptic",
            rawSpec: "^6.0.0",
            saveSpec: null,
            fetchSpec: "^6.0.0"
        },
        _requiredBy: ["/node-libs-browser/browserify-sign", "/node-libs-browser/create-ecdh"],
        _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",
        _shasum: "cac9af8762c85836187003c8dfe193e5e2eae5df",
        _spec: "elliptic@^6.0.0",
        _where: "C:\\Users\\Jacky\\AppData\\Roaming\\npm\\node_modules\\node-libs-browser\\node_modules\\browserify-sign",
        author: {name: "Fedor Indutny", email: "fedor@indutny.com"},
        bugs: {url: "https://github.com/indutny/elliptic/issues"},
        bundleDependencies: !1,
        dependencies: {
            "bn.js": "^4.4.0",
            brorand: "^1.0.1",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.0",
            inherits: "^2.0.1",
            "minimalistic-assert": "^1.0.0",
            "minimalistic-crypto-utils": "^1.0.0"
        },
        deprecated: !1,
        description: "EC cryptography",
        devDependencies: {
            brfs: "^1.4.3",
            coveralls: "^2.11.3",
            grunt: "^0.4.5",
            "grunt-browserify": "^5.0.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-connect": "^1.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^1.0.1",
            "grunt-mocha-istanbul": "^3.0.1",
            "grunt-saucelabs": "^8.6.2",
            istanbul: "^0.4.2",
            jscs: "^2.9.0",
            jshint: "^2.6.0",
            mocha: "^2.1.0"
        },
        files: ["lib"],
        homepage: "https://github.com/indutny/elliptic",
        keywords: ["EC", "Elliptic", "curve", "Cryptography"],
        license: "MIT",
        main: "lib/elliptic.js",
        name: "elliptic",
        repository: {type: "git", url: "git+ssh://git@github.com/indutny/elliptic.git"},
        scripts: {
            jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
            jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
            lint: "npm run jscs && npm run jshint",
            test: "npm run lint && npm run unit",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            version: "grunt dist && git add dist/"
        },
        version: "6.4.0"
    }
}, function (t, e, n) {
    (function (e) {
        var r = n(75), i = n(36), o = n(4).ec, a = n(3), s = n(28), c = n(52);

        function f(t, n, i, o) {
            if ((t = new e(t.toArray())).length < n.byteLength()) {
                var a = new e(n.byteLength() - t.length);
                a.fill(0), t = e.concat([a, t])
            }
            var s = i.length, c = function (t, n) {
                t = (t = u(t, n)).mod(n);
                var r = new e(t.toArray());
                if (r.length < n.byteLength()) {
                    var i = new e(n.byteLength() - r.length);
                    i.fill(0), r = e.concat([i, r])
                }
                return r
            }(i, n), f = new e(s);
            f.fill(1);
            var l = new e(s);
            return l.fill(0), l = r(o, l).update(f).update(new e([0])).update(t).update(c).digest(), f = r(o, l).update(f).digest(), {
                k: l = r(o, l).update(f).update(new e([1])).update(t).update(c).digest(),
                v: f = r(o, l).update(f).digest()
            }
        }

        function u(t, e) {
            var n = new a(t), r = (t.length << 3) - e.bitLength();
            return r > 0 && n.ishrn(r), n
        }

        function l(t, n, i) {
            var o, a;
            do {
                for (o = new e(0); 8 * o.length < t.bitLength();) n.v = r(i, n.k).update(n.v).digest(), o = e.concat([o, n.v]);
                a = u(o, t), n.k = r(i, n.k).update(n.v).update(new e([0])).digest(), n.v = r(i, n.k).update(n.v).digest()
            } while (-1 !== a.cmp(t));
            return a
        }

        function h(t, e, n, r) {
            return t.toRed(a.mont(n)).redPow(e).fromRed().mod(r)
        }

        t.exports = function (t, n, r, d, p) {
            var b = s(n);
            if (b.curve) {
                if ("ecdsa" !== d && "ecdsa/rsa" !== d) throw new Error("wrong private key type");
                return function (t, n) {
                    var r = c[n.curve.join(".")];
                    if (!r) throw new Error("unknown curve " + n.curve.join("."));
                    var i = new o(r).keyFromPrivate(n.privateKey).sign(t);
                    return new e(i.toDER())
                }(t, b)
            }
            if ("dsa" === b.type) {
                if ("dsa" !== d) throw new Error("wrong private key type");
                return function (t, n, r) {
                    for (var i, o = n.params.priv_key, s = n.params.p, c = n.params.q, d = n.params.g, p = new a(0), b = u(t, c).mod(c), g = !1, y = f(o, c, t, r); !1 === g;) p = h(d, i = l(c, y, r), s, c), 0 === (g = i.invm(c).imul(b.add(o.mul(p))).mod(c)).cmpn(0) && (g = !1, p = new a(0));
                    return function (t, n) {
                        t = t.toArray(), n = n.toArray(), 128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n));
                        var r = [48, t.length + n.length + 4, 2, t.length];
                        return r = r.concat(t, [2, n.length], n), new e(r)
                    }(p, g)
                }(t, b, r)
            }
            if ("rsa" !== d && "ecdsa/rsa" !== d) throw new Error("wrong private key type");
            t = e.concat([p, t]);
            for (var g = b.modulus.byteLength(), y = [0, 1]; t.length + y.length + 1 < g;) y.push(255);
            y.push(0);
            for (var m = -1; ++m < t.length;) y.push(t[m]);
            return i(y, b)
        }, t.exports.getKey = f, t.exports.makeKey = l
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    (function (e) {
        var r = n(26), i = n(33), o = n(0), a = n(132), s = n(95), c = n(73);

        function f(t) {
            i.Writable.call(this);
            var e = c[t];
            if (!e) throw new Error("Unknown message digest");
            this._hashType = e.hash, this._hash = r(e.hash), this._tag = e.id, this._signType = e.sign
        }

        function u(t) {
            i.Writable.call(this);
            var e = c[t];
            if (!e) throw new Error("Unknown message digest");
            this._hash = r(e.hash), this._tag = e.id, this._signType = e.sign
        }

        function l(t) {
            return new f(t)
        }

        function h(t) {
            return new u(t)
        }

        Object.keys(c).forEach(function (t) {
            c[t].id = new e(c[t].id, "hex"), c[t.toLowerCase()] = c[t]
        }), o(f, i.Writable), f.prototype._write = function (t, e, n) {
            this._hash.update(t), n()
        }, f.prototype.update = function (t, n) {
            return "string" == typeof t && (t = new e(t, n)), this._hash.update(t), this
        }, f.prototype.sign = function (t, e) {
            this.end();
            var n = this._hash.digest(), r = a(n, t, this._hashType, this._signType, this._tag);
            return e ? r.toString(e) : r
        }, o(u, i.Writable), u.prototype._write = function (t, e, n) {
            this._hash.update(t), n()
        }, u.prototype.update = function (t, n) {
            return "string" == typeof t && (t = new e(t, n)), this._hash.update(t), this
        }, u.prototype.verify = function (t, n, r) {
            "string" == typeof n && (n = new e(n, r)), this.end();
            var i = this._hash.digest();
            return s(n, i, t, this._signType, this._tag)
        }, t.exports = {Sign: l, Verify: h, createSign: l, createVerify: h}
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    (function (e) {
        var r = n(3), i = new (n(62)), o = new r(24), a = new r(11), s = new r(10), c = new r(3), f = new r(7),
            u = n(63), l = n(14);

        function h(t, n) {
            return n = n || "utf8", e.isBuffer(t) || (t = new e(t, n)), this._pub = new r(t), this
        }

        function d(t, n) {
            return n = n || "utf8", e.isBuffer(t) || (t = new e(t, n)), this._priv = new r(t), this
        }

        t.exports = b;
        var p = {};

        function b(t, e, n) {
            this.setGenerator(e), this.__prime = new r(t), this._prime = r.mont(this.__prime), this._primeLen = t.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, n ? (this.setPublicKey = h, this.setPrivateKey = d) : this._primeCode = 8
        }

        function g(t, n) {
            var r = new e(t.toArray());
            return n ? r.toString(n) : r
        }

        Object.defineProperty(b.prototype, "verifyError", {
            enumerable: !0, get: function () {
                return "number" != typeof this._primeCode && (this._primeCode = function (t, e) {
                    var n = e.toString("hex"), r = [n, t.toString(16)].join("_");
                    if (r in p) return p[r];
                    var l, h = 0;
                    if (t.isEven() || !u.simpleSieve || !u.fermatTest(t) || !i.test(t)) return h += 1, h += "02" === n || "05" === n ? 8 : 4, p[r] = h, h;
                    switch (i.test(t.shrn(1)) || (h += 2), n) {
                        case"02":
                            t.mod(o).cmp(a) && (h += 8);
                            break;
                        case"05":
                            (l = t.mod(s)).cmp(c) && l.cmp(f) && (h += 8);
                            break;
                        default:
                            h += 4
                    }
                    return p[r] = h, h
                }(this.__prime, this.__gen)), this._primeCode
            }
        }), b.prototype.generateKeys = function () {
            return this._priv || (this._priv = new r(l(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
        }, b.prototype.computeSecret = function (t) {
            var n = (t = (t = new r(t)).toRed(this._prime)).redPow(this._priv).fromRed(), i = new e(n.toArray()),
                o = this.getPrime();
            if (i.length < o.length) {
                var a = new e(o.length - i.length);
                a.fill(0), i = e.concat([a, i])
            }
            return i
        }, b.prototype.getPublicKey = function (t) {
            return g(this._pub, t)
        }, b.prototype.getPrivateKey = function (t) {
            return g(this._priv, t)
        }, b.prototype.getPrime = function (t) {
            return g(this.__prime, t)
        }, b.prototype.getGenerator = function (t) {
            return g(this._gen, t)
        }, b.prototype.setGenerator = function (t, n) {
            return n = n || "utf8", e.isBuffer(t) || (t = new e(t, n)), this.__gen = t, this._gen = new r(t), this
        }
    }).call(this, n(2).Buffer)
}, function (t) {
    t.exports = {
        modp1: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
        },
        modp2: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
        },
        modp5: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
        },
        modp14: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
        },
        modp15: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
        },
        modp16: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
        },
        modp17: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
        },
        modp18: {
            gen: "02",
            prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
        }
    }
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, n) {
    (function (t) {
        var r = n(63), i = n(135), o = n(134), a = {binary: !0, hex: !0, base64: !0};
        e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function (e) {
            var n = new t(i[e].prime, "hex"), r = new t(i[e].gen, "hex");
            return new o(n, r)
        }, e.createDiffieHellman = e.DiffieHellman = function e(n, i, s, c) {
            return t.isBuffer(i) || void 0 === a[i] ? e(n, "binary", i, s) : (i = i || "binary", c = c || "binary", s = s || new t([2]), t.isBuffer(s) || (s = new t(s, c)), "number" == typeof n ? new o(r(n, s), s, !0) : (t.isBuffer(n) || (n = new t(n, i)), new o(n, s, !0)))
        }
    }).call(this, n(2).Buffer)
}, function (t, e) {
    e["des-ecb"] = {key: 8, iv: 0}, e["des-cbc"] = e.des = {key: 8, iv: 8}, e["des-ede3-cbc"] = e.des3 = {
        key: 24,
        iv: 8
    }, e["des-ede3"] = {key: 24, iv: 0}, e["des-ede-cbc"] = {key: 16, iv: 8}, e["des-ede"] = {key: 16, iv: 0}
}, function (t, e, n) {
    var r = n(65), i = n(1).Buffer, o = n(37), a = n(64), s = n(10), c = n(31), f = n(30);

    function u(t, e, n) {
        s.call(this), this._cache = new l, this._last = void 0, this._cipher = new c.AES(e), this._prev = i.from(n), this._mode = t, this._autopadding = !0
    }

    function l() {
        this.cache = i.allocUnsafe(0)
    }

    function h(t, e, n) {
        var s = o[t.toLowerCase()];
        if (!s) throw new TypeError("invalid suite type");
        if ("string" == typeof n && (n = i.from(n)), "GCM" !== s.mode && n.length !== s.iv) throw new TypeError("invalid iv length " + n.length);
        if ("string" == typeof e && (e = i.from(e)), e.length !== s.key / 8) throw new TypeError("invalid key length " + e.length);
        return "stream" === s.type ? new a(s.module, e, n, !0) : "auth" === s.type ? new r(s.module, e, n, !0) : new u(s.module, e, n)
    }

    n(0)(u, s), u.prototype._update = function (t) {
        var e, n;
        this._cache.add(t);
        for (var r = []; e = this._cache.get(this._autopadding);) n = this._mode.decrypt(this, e), r.push(n);
        return i.concat(r)
    }, u.prototype._final = function () {
        var t = this._cache.flush();
        if (this._autopadding) return function (t) {
            var e = t[15];
            if (e < 1 || e > 16) throw new Error("unable to decrypt data");
            for (var n = -1; ++n < e;) if (t[n + (16 - e)] !== e) throw new Error("unable to decrypt data");
            if (16 !== e) return t.slice(0, 16 - e)
        }(this._mode.decrypt(this, t));
        if (t) throw new Error("data not multiple of block length")
    }, u.prototype.setAutoPadding = function (t) {
        return this._autopadding = !!t, this
    }, l.prototype.add = function (t) {
        this.cache = i.concat([this.cache, t])
    }, l.prototype.get = function (t) {
        var e;
        if (t) {
            if (this.cache.length > 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e
        } else if (this.cache.length >= 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;
        return null
    }, l.prototype.flush = function () {
        if (this.cache.length) return this.cache
    }, e.createDecipher = function (t, e) {
        var n = o[t.toLowerCase()];
        if (!n) throw new TypeError("invalid suite type");
        var r = f(e, !1, n.key, n.iv);
        return h(t, r.key, r.iv)
    }, e.createDecipheriv = h
}, function (t, e, n) {
    var r = n(1).Buffer, i = r.alloc(16, 0);

    function o(t) {
        var e = r.allocUnsafe(16);
        return e.writeUInt32BE(t[0] >>> 0, 0), e.writeUInt32BE(t[1] >>> 0, 4), e.writeUInt32BE(t[2] >>> 0, 8), e.writeUInt32BE(t[3] >>> 0, 12), e
    }

    function a(t) {
        this.h = t, this.state = r.alloc(16, 0), this.cache = r.allocUnsafe(0)
    }

    a.prototype.ghash = function (t) {
        for (var e = -1; ++e < t.length;) this.state[e] ^= t[e];
        this._multiply()
    }, a.prototype._multiply = function () {
        for (var t, e, n, r = [(t = this.h).readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)], i = [0, 0, 0, 0], a = -1; ++a < 128;) {
            for (0 != (this.state[~~(a / 8)] & 1 << 7 - a % 8) && (i[0] ^= r[0], i[1] ^= r[1], i[2] ^= r[2], i[3] ^= r[3]), n = 0 != (1 & r[3]), e = 3; e > 0; e--) r[e] = r[e] >>> 1 | (1 & r[e - 1]) << 31;
            r[0] = r[0] >>> 1, n && (r[0] = r[0] ^ 225 << 24)
        }
        this.state = o(i)
    }, a.prototype.update = function (t) {
        var e;
        for (this.cache = r.concat([this.cache, t]); this.cache.length >= 16;) e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(e)
    }, a.prototype.final = function (t, e) {
        return this.cache.length && this.ghash(r.concat([this.cache, i], 16)), this.ghash(o([0, t, 0, e])), this.state
    }, t.exports = a
}, function (t, e, n) {
    (function (t) {
        var r = n(23);

        function i(t) {
            return t._prev = t._cipher.encryptBlock(t._prev), t._prev
        }

        e.encrypt = function (e, n) {
            for (; e._cache.length < n.length;) e._cache = t.concat([e._cache, i(e)]);
            var o = e._cache.slice(0, n.length);
            return e._cache = e._cache.slice(n.length), r(n, o)
        }
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    var r = n(1).Buffer;

    function i(t, e, n) {
        for (var r, i, a, s = -1, c = 0; ++s < 8;) r = t._cipher.encryptBlock(t._prev), i = e & 1 << 7 - s ? 128 : 0, c += (128 & (a = r[0] ^ i)) >> s % 8, t._prev = o(t._prev, n ? i : a);
        return c
    }

    function o(t, e) {
        var n = t.length, i = -1, o = r.allocUnsafe(t.length);
        for (t = r.concat([t, r.from([e])]); ++i < n;) o[i] = t[i] << 1 | t[i + 1] >> 7;
        return o
    }

    e.encrypt = function (t, e, n) {
        for (var o = e.length, a = r.allocUnsafe(o), s = -1; ++s < o;) a[s] = i(t, e[s], n);
        return a
    }
}, function (t, e, n) {
    var r = n(1).Buffer;

    function i(t, e, n) {
        var i = t._cipher.encryptBlock(t._prev)[0] ^ e;
        return t._prev = r.concat([t._prev.slice(1), r.from([n ? e : i])]), i
    }

    e.encrypt = function (t, e, n) {
        for (var o = e.length, a = r.allocUnsafe(o), s = -1; ++s < o;) a[s] = i(t, e[s], n);
        return a
    }
}, function (t, e, n) {
    var r = n(1).Buffer, i = n(23);

    function o(t, e, n) {
        var o = e.length, a = i(e, t._cache);
        return t._cache = t._cache.slice(o), t._prev = r.concat([t._prev, n ? e : a]), a
    }

    e.encrypt = function (t, e, n) {
        for (var i, a = r.allocUnsafe(0); e.length;) {
            if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev), t._prev = r.allocUnsafe(0)), !(t._cache.length <= e.length)) {
                a = r.concat([a, o(t, e, n)]);
                break
            }
            i = t._cache.length, a = r.concat([a, o(t, e.slice(0, i), n)]), e = e.slice(i)
        }
        return a
    }
}, function (t, e, n) {
    var r = n(23);
    e.encrypt = function (t, e) {
        var n = r(e, t._prev);
        return t._prev = t._cipher.encryptBlock(n), t._prev
    }, e.decrypt = function (t, e) {
        var n = t._prev;
        t._prev = e;
        var i = t._cipher.decryptBlock(e);
        return r(i, n)
    }
}, function (t, e) {
    e.encrypt = function (t, e) {
        return t._cipher.encryptBlock(e)
    }, e.decrypt = function (t, e) {
        return t._cipher.decryptBlock(e)
    }
}, function (t, e, n) {
    var r = n(37), i = n(65), o = n(1).Buffer, a = n(64), s = n(10), c = n(31), f = n(30);

    function u(t, e, n) {
        s.call(this), this._cache = new h, this._cipher = new c.AES(e), this._prev = o.from(n), this._mode = t, this._autopadding = !0
    }

    n(0)(u, s), u.prototype._update = function (t) {
        var e, n;
        this._cache.add(t);
        for (var r = []; e = this._cache.get();) n = this._mode.encrypt(this, e), r.push(n);
        return o.concat(r)
    };
    var l = o.alloc(16, 16);

    function h() {
        this.cache = o.allocUnsafe(0)
    }

    function d(t, e, n) {
        var s = r[t.toLowerCase()];
        if (!s) throw new TypeError("invalid suite type");
        if ("string" == typeof e && (e = o.from(e)), e.length !== s.key / 8) throw new TypeError("invalid key length " + e.length);
        if ("string" == typeof n && (n = o.from(n)), "GCM" !== s.mode && n.length !== s.iv) throw new TypeError("invalid iv length " + n.length);
        return "stream" === s.type ? new a(s.module, e, n) : "auth" === s.type ? new i(s.module, e, n) : new u(s.module, e, n)
    }

    u.prototype._final = function () {
        var t = this._cache.flush();
        if (this._autopadding) return t = this._mode.encrypt(this, t), this._cipher.scrub(), t;
        if (!t.equals(l)) throw this._cipher.scrub(), new Error("data not multiple of block length")
    }, u.prototype.setAutoPadding = function (t) {
        return this._autopadding = !!t, this
    }, h.prototype.add = function (t) {
        this.cache = o.concat([this.cache, t])
    }, h.prototype.get = function () {
        if (this.cache.length > 15) {
            var t = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), t
        }
        return null
    }, h.prototype.flush = function () {
        for (var t = 16 - this.cache.length, e = o.allocUnsafe(t), n = -1; ++n < t;) e.writeUInt8(t, n);
        return o.concat([this.cache, e])
    }, e.createCipheriv = d, e.createCipher = function (t, e) {
        var n = r[t.toLowerCase()];
        if (!n) throw new TypeError("invalid suite type");
        var i = f(e, !1, n.key, n.iv);
        return d(t, i.key, i.iv)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(6), i = n(0), o = n(39), a = o.Cipher, s = o.DES;

    function c(t) {
        a.call(this, t);
        var e = new function (t, e) {
            r.equal(e.length, 24, "Invalid key length");
            var n = e.slice(0, 8), i = e.slice(8, 16), o = e.slice(16, 24);
            this.ciphers = "encrypt" === t ? [s.create({type: "encrypt", key: n}), s.create({
                type: "decrypt",
                key: i
            }), s.create({type: "encrypt", key: o})] : [s.create({type: "decrypt", key: o}), s.create({
                type: "encrypt",
                key: i
            }), s.create({type: "decrypt", key: n})]
        }(this.type, this.options.key);
        this._edeState = e
    }

    i(c, a), t.exports = c, c.create = function (t) {
        return new c(t)
    }, c.prototype._update = function (t, e, n, r) {
        var i = this._edeState;
        i.ciphers[0]._update(t, e, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r)
    }, c.prototype._pad = s.prototype._pad, c.prototype._unpad = s.prototype._unpad
}, function (t, e, n) {
    "use strict";
    var r = n(6), i = n(0), o = {};
    e.instantiate = function (t) {
        function e(e) {
            t.call(this, e), this._cbcInit()
        }

        i(e, t);
        for (var n = Object.keys(o), r = 0; r < n.length; r++) {
            var a = n[r];
            e.prototype[a] = o[a]
        }
        return e.create = function (t) {
            return new e(t)
        }, e
    }, o._cbcInit = function () {
        var t = new function (t) {
            r.equal(t.length, 8, "Invalid IV length"), this.iv = new Array(8);
            for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
        }(this.options.iv);
        this._cbcState = t
    }, o._update = function (t, e, n, r) {
        var i = this._cbcState, o = this.constructor.super_.prototype, a = i.iv;
        if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++) a[s] ^= t[e + s];
            for (o._update.call(this, a, 0, n, r), s = 0; s < this.blockSize; s++) a[s] = n[r + s]
        } else {
            for (o._update.call(this, t, e, n, r), s = 0; s < this.blockSize; s++) n[r + s] ^= a[s];
            for (s = 0; s < this.blockSize; s++) a[s] = t[e + s]
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(6), i = n(0), o = n(39), a = o.utils, s = o.Cipher;

    function c(t) {
        s.call(this, t);
        var e = new function () {
            this.tmp = new Array(2), this.keys = null
        };
        this._desState = e, this.deriveKeys(e, t.key)
    }

    i(c, s), t.exports = c, c.create = function (t) {
        return new c(t)
    };
    var f = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    c.prototype.deriveKeys = function (t, e) {
        t.keys = new Array(32), r.equal(e.length, this.blockSize, "Invalid key length");
        var n = a.readUInt32BE(e, 0), i = a.readUInt32BE(e, 4);
        a.pc1(n, i, t.tmp, 0), n = t.tmp[0], i = t.tmp[1];
        for (var o = 0; o < t.keys.length; o += 2) {
            var s = f[o >>> 1];
            n = a.r28shl(n, s), i = a.r28shl(i, s), a.pc2(n, i, t.keys, o)
        }
    }, c.prototype._update = function (t, e, n, r) {
        var i = this._desState, o = a.readUInt32BE(t, e), s = a.readUInt32BE(t, e + 4);
        a.ip(o, s, i.tmp, 0), o = i.tmp[0], s = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, o, s, i.tmp, 0) : this._decrypt(i, o, s, i.tmp, 0), o = i.tmp[0], s = i.tmp[1], a.writeUInt32BE(n, o, r), a.writeUInt32BE(n, s, r + 4)
    }, c.prototype._pad = function (t, e) {
        for (var n = t.length - e, r = e; r < t.length; r++) t[r] = n;
        return !0
    }, c.prototype._unpad = function (t) {
        for (var e = t[t.length - 1], n = t.length - e; n < t.length; n++) r.equal(t[n], e);
        return t.slice(0, t.length - e)
    }, c.prototype._encrypt = function (t, e, n, r, i) {
        for (var o = e, s = n, c = 0; c < t.keys.length; c += 2) {
            var f = t.keys[c], u = t.keys[c + 1];
            a.expand(s, t.tmp, 0), f ^= t.tmp[0], u ^= t.tmp[1];
            var l = a.substitute(f, u), h = s;
            s = (o ^ a.permute(l)) >>> 0, o = h
        }
        a.rip(s, o, r, i)
    }, c.prototype._decrypt = function (t, e, n, r, i) {
        for (var o = n, s = e, c = t.keys.length - 2; c >= 0; c -= 2) {
            var f = t.keys[c], u = t.keys[c + 1];
            a.expand(o, t.tmp, 0), f ^= t.tmp[0], u ^= t.tmp[1];
            var l = a.substitute(f, u), h = o;
            o = (s ^ a.permute(l)) >>> 0, s = h
        }
        a.rip(o, s, r, i)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(6);

    function i(t) {
        this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0
    }

    t.exports = i, i.prototype._init = function () {
    }, i.prototype.update = function (t) {
        return 0 === t.length ? [] : "decrypt" === this.type ? this._updateDecrypt(t) : this._updateEncrypt(t)
    }, i.prototype._buffer = function (t, e) {
        for (var n = Math.min(this.buffer.length - this.bufferOff, t.length - e), r = 0; r < n; r++) this.buffer[this.bufferOff + r] = t[e + r];
        return this.bufferOff += n, n
    }, i.prototype._flushBuffer = function (t, e) {
        return this._update(this.buffer, 0, t, e), this.bufferOff = 0, this.blockSize
    }, i.prototype._updateEncrypt = function (t) {
        var e = 0, n = 0, r = (this.bufferOff + t.length) / this.blockSize | 0, i = new Array(r * this.blockSize);
        0 !== this.bufferOff && (e += this._buffer(t, e), this.bufferOff === this.buffer.length && (n += this._flushBuffer(i, n)));
        for (var o = t.length - (t.length - e) % this.blockSize; e < o; e += this.blockSize) this._update(t, e, i, n), n += this.blockSize;
        for (; e < t.length; e++, this.bufferOff++) this.buffer[this.bufferOff] = t[e];
        return i
    }, i.prototype._updateDecrypt = function (t) {
        for (var e = 0, n = 0, r = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1, i = new Array(r * this.blockSize); r > 0; r--) e += this._buffer(t, e), n += this._flushBuffer(i, n);
        return e += this._buffer(t, e), i
    }, i.prototype.final = function (t) {
        var e, n;
        return t && (e = this.update(t)), n = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), e ? e.concat(n) : n
    }, i.prototype._pad = function (t, e) {
        if (0 === e) return !1;
        for (; e < t.length;) t[e++] = 0;
        return !0
    }, i.prototype._finalEncrypt = function () {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var t = new Array(this.blockSize);
        return this._update(this.buffer, 0, t, 0), t
    }, i.prototype._unpad = function (t) {
        return t
    }, i.prototype._finalDecrypt = function () {
        r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var t = new Array(this.blockSize);
        return this._flushBuffer(t, 0), this._unpad(t)
    }
}, function (t, e, n) {
    "use strict";
    e.readUInt32BE = function (t, e) {
        return (t[0 + e] << 24 | t[1 + e] << 16 | t[2 + e] << 8 | t[3 + e]) >>> 0
    }, e.writeUInt32BE = function (t, e, n) {
        t[0 + n] = e >>> 24, t[1 + n] = e >>> 16 & 255, t[2 + n] = e >>> 8 & 255, t[3 + n] = 255 & e
    }, e.ip = function (t, e, n, r) {
        for (var i = 0, o = 0, a = 6; a >= 0; a -= 2) {
            for (var s = 0; s <= 24; s += 8) i <<= 1, i |= e >>> s + a & 1;
            for (s = 0; s <= 24; s += 8) i <<= 1, i |= t >>> s + a & 1
        }
        for (a = 6; a >= 0; a -= 2) {
            for (s = 1; s <= 25; s += 8) o <<= 1, o |= e >>> s + a & 1;
            for (s = 1; s <= 25; s += 8) o <<= 1, o |= t >>> s + a & 1
        }
        n[r + 0] = i >>> 0, n[r + 1] = o >>> 0
    }, e.rip = function (t, e, n, r) {
        for (var i = 0, o = 0, a = 0; a < 4; a++) for (var s = 24; s >= 0; s -= 8) i <<= 1, i |= e >>> s + a & 1, i <<= 1, i |= t >>> s + a & 1;
        for (a = 4; a < 8; a++) for (s = 24; s >= 0; s -= 8) o <<= 1, o |= e >>> s + a & 1, o <<= 1, o |= t >>> s + a & 1;
        n[r + 0] = i >>> 0, n[r + 1] = o >>> 0
    }, e.pc1 = function (t, e, n, r) {
        for (var i = 0, o = 0, a = 7; a >= 5; a--) {
            for (var s = 0; s <= 24; s += 8) i <<= 1, i |= e >> s + a & 1;
            for (s = 0; s <= 24; s += 8) i <<= 1, i |= t >> s + a & 1
        }
        for (s = 0; s <= 24; s += 8) i <<= 1, i |= e >> s + a & 1;
        for (a = 1; a <= 3; a++) {
            for (s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1;
            for (s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1
        }
        for (s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1;
        n[r + 0] = i >>> 0, n[r + 1] = o >>> 0
    }, e.r28shl = function (t, e) {
        return t << e & 268435455 | t >>> 28 - e
    };
    var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    e.pc2 = function (t, e, n, i) {
        for (var o = 0, a = 0, s = r.length >>> 1, c = 0; c < s; c++) o <<= 1, o |= t >>> r[c] & 1;
        for (c = s; c < r.length; c++) a <<= 1, a |= e >>> r[c] & 1;
        n[i + 0] = o >>> 0, n[i + 1] = a >>> 0
    }, e.expand = function (t, e, n) {
        var r = 0, i = 0;
        r = (1 & t) << 5 | t >>> 27;
        for (var o = 23; o >= 15; o -= 4) r <<= 6, r |= t >>> o & 63;
        for (o = 11; o >= 3; o -= 4) i |= t >>> o & 63, i <<= 6;
        i |= (31 & t) << 1 | t >>> 31, e[n + 0] = r >>> 0, e[n + 1] = i >>> 0
    };
    var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    e.substitute = function (t, e) {
        for (var n = 0, r = 0; r < 4; r++) n <<= 4, n |= i[64 * r + (t >>> 18 - 6 * r & 63)];
        for (r = 0; r < 4; r++) n <<= 4, n |= i[256 + 64 * r + (e >>> 18 - 6 * r & 63)];
        return n >>> 0
    };
    var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    e.permute = function (t) {
        for (var e = 0, n = 0; n < o.length; n++) e <<= 1, e |= t >>> o[n] & 1;
        return e >>> 0
    }, e.padSplit = function (t, e, n) {
        for (var r = t.toString(2); r.length < e;) r = "0" + r;
        for (var i = [], o = 0; o < e; o += n) i.push(r.slice(o, o + n));
        return i.join(" ")
    }
}, function (t, e, n) {
    (function (e) {
        var r = n(10), i = n(39), o = n(0), a = {
            "des-ede3-cbc": i.CBC.instantiate(i.EDE),
            "des-ede3": i.EDE,
            "des-ede-cbc": i.CBC.instantiate(i.EDE),
            "des-ede": i.EDE,
            "des-cbc": i.CBC.instantiate(i.DES),
            "des-ecb": i.DES
        };

        function s(t) {
            r.call(this);
            var n, i = t.mode.toLowerCase(), o = a[i];
            n = t.decrypt ? "decrypt" : "encrypt";
            var s = t.key;
            "des-ede" !== i && "des-ede-cbc" !== i || (s = e.concat([s, s.slice(0, 8)]));
            var c = t.iv;
            this._des = o.create({key: s, iv: c, type: n})
        }

        a.des = a["des-cbc"], a.des3 = a["des-ede3-cbc"], t.exports = s, o(s, r), s.prototype._update = function (t) {
            return new e(this._des.update(t))
        }, s.prototype._final = function () {
            return new e(this._des.final())
        }
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    var r = n(155), i = n(38), o = n(37), a = n(140), s = n(30);

    function c(t, e, n) {
        if (t = t.toLowerCase(), o[t]) return i.createCipheriv(t, e, n);
        if (a[t]) return new r({key: e, iv: n, mode: t});
        throw new TypeError("invalid suite type")
    }

    function f(t, e, n) {
        if (t = t.toLowerCase(), o[t]) return i.createDecipheriv(t, e, n);
        if (a[t]) return new r({key: e, iv: n, mode: t, decrypt: !0});
        throw new TypeError("invalid suite type")
    }

    e.createCipher = e.Cipher = function (t, e) {
        var n, r;
        if (t = t.toLowerCase(), o[t]) n = o[t].key, r = o[t].iv; else {
            if (!a[t]) throw new TypeError("invalid suite type");
            n = 8 * a[t].key, r = a[t].iv
        }
        var i = s(e, !1, n, r);
        return c(t, i.key, i.iv)
    }, e.createCipheriv = e.Cipheriv = c, e.createDecipher = e.Decipher = function (t, e) {
        var n, r;
        if (t = t.toLowerCase(), o[t]) n = o[t].key, r = o[t].iv; else {
            if (!a[t]) throw new TypeError("invalid suite type");
            n = 8 * a[t].key, r = a[t].iv
        }
        var i = s(e, !1, n, r);
        return f(t, i.key, i.iv)
    }, e.createDecipheriv = e.Decipheriv = f, e.listCiphers = e.getCiphers = function () {
        return Object.keys(a).concat(i.getCiphers())
    }
}, function (t, e, n) {
    (function (e, r) {
        var i, o = n(71), a = n(70), s = n(69), c = n(1).Buffer, f = e.crypto && e.crypto.subtle, u = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        }, l = [];

        function h(t, e, n, r, i) {
            return f.importKey("raw", t, {name: "PBKDF2"}, !1, ["deriveBits"]).then(function (t) {
                return f.deriveBits({name: "PBKDF2", salt: e, iterations: n, hash: {name: i}}, t, r << 3)
            }).then(function (t) {
                return c.from(t)
            })
        }

        t.exports = function (t, n, d, p, b, g) {
            if (c.isBuffer(t) || (t = c.from(t, a)), c.isBuffer(n) || (n = c.from(n, a)), o(d, p), "function" == typeof b && (g = b, b = void 0), "function" != typeof g) throw new Error("No callback provided to pbkdf2");
            var y = u[(b = b || "sha1").toLowerCase()];
            if (!y || "function" != typeof e.Promise) return r.nextTick(function () {
                var e;
                try {
                    e = s(t, n, d, p, b)
                } catch (t) {
                    return g(t)
                }
                g(null, e)
            });
            !function (t, e) {
                t.then(function (t) {
                    r.nextTick(function () {
                        e(null, t)
                    })
                }, function (t) {
                    r.nextTick(function () {
                        e(t)
                    })
                })
            }(function (t) {
                if (e.process && !e.process.browser) return Promise.resolve(!1);
                if (!f || !f.importKey || !f.deriveBits) return Promise.resolve(!1);
                if (void 0 !== l[t]) return l[t];
                var n = h(i = i || c.alloc(8), i, 10, 128, t).then(function () {
                    return !0
                }).catch(function () {
                    return !1
                });
                return l[t] = n, n
            }(y).then(function (e) {
                return e ? h(t, n, d, p, y) : s(t, n, d, p, b)
            }), g)
        }
    }).call(this, n(8), n(11))
}, function (t, e, n) {
    t.exports = n(73)
}, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(1).Buffer, o = n(10), a = i.alloc(128), s = 64;

    function c(t, e) {
        o.call(this, "digest"), "string" == typeof e && (e = i.from(e)), this._alg = t, this._key = e, e.length > s ? e = t(e) : e.length < s && (e = i.concat([e, a], s));
        for (var n = this._ipad = i.allocUnsafe(s), r = this._opad = i.allocUnsafe(s), c = 0; c < s; c++) n[c] = 54 ^ e[c], r[c] = 92 ^ e[c];
        this._hash = [n]
    }

    r(c, o), c.prototype._update = function (t) {
        this._hash.push(t)
    }, c.prototype._final = function () {
        var t = this._alg(i.concat(this._hash));
        return this._alg(i.concat([this._opad, t]))
    }, t.exports = c
}, function (t, e, n) {
    var r = n(0), i = n(76), o = n(13), a = n(1).Buffer, s = new Array(160);

    function c() {
        this.init(), this._w = s, o.call(this, 128, 112)
    }

    r(c, i), c.prototype.init = function () {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, c.prototype._hash = function () {
        var t = a.allocUnsafe(48);

        function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4)
        }

        return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
    }, t.exports = c
}, function (t, e, n) {
    var r = n(0), i = n(77), o = n(13), a = n(1).Buffer, s = new Array(64);

    function c() {
        this.init(), this._w = s, o.call(this, 64, 56)
    }

    r(c, i), c.prototype.init = function () {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, c.prototype._hash = function () {
        var t = a.allocUnsafe(28);
        return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
    }, t.exports = c
}, function (t, e, n) {
    var r = n(0), i = n(13), o = n(1).Buffer, a = [1518500249, 1859775393, -1894007588, -899497514], s = new Array(80);

    function c() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }

    function f(t) {
        return t << 5 | t >>> 27
    }

    function u(t) {
        return t << 30 | t >>> 2
    }

    function l(t, e, n, r) {
        return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r
    }

    r(c, i), c.prototype.init = function () {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, c.prototype._update = function (t) {
        for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, c = 0 | this._e, h = 0; h < 16; ++h) n[h] = t.readInt32BE(4 * h);
        for (; h < 80; ++h) n[h] = (e = n[h - 3] ^ n[h - 8] ^ n[h - 14] ^ n[h - 16]) << 1 | e >>> 31;
        for (var d = 0; d < 80; ++d) {
            var p = ~~(d / 20), b = f(r) + l(p, i, o, s) + c + n[d] + a[p] | 0;
            c = s, s = o, o = u(i), i = r, r = b
        }
        this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = c + this._e | 0
    }, c.prototype._hash = function () {
        var t = o.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
    }, t.exports = c
}, function (t, e, n) {
    var r = n(0), i = n(13), o = n(1).Buffer, a = [1518500249, 1859775393, -1894007588, -899497514], s = new Array(80);

    function c() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }

    function f(t) {
        return t << 30 | t >>> 2
    }

    function u(t, e, n, r) {
        return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r
    }

    r(c, i), c.prototype.init = function () {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, c.prototype._update = function (t) {
        for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, c = 0 | this._e, l = 0; l < 16; ++l) n[l] = t.readInt32BE(4 * l);
        for (; l < 80; ++l) n[l] = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16];
        for (var h = 0; h < 80; ++h) {
            var d = ~~(h / 20), p = 0 | ((e = r) << 5 | e >>> 27) + u(d, i, o, s) + c + n[h] + a[d];
            c = s, s = o, o = f(i), i = r, r = p
        }
        this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = c + this._e | 0
    }, c.prototype._hash = function () {
        var t = o.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
    }, t.exports = c
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var r = n(33).Transform;

        function i(t) {
            r.call(this), this._block = new e(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
        }

        n(0)(i, r), i.prototype._transform = function (t, n, r) {
            var i = null;
            try {
                "buffer" !== n && (t = new e(t, n)), this.update(t)
            } catch (t) {
                i = t
            }
            r(i)
        }, i.prototype._flush = function (t) {
            var e = null;
            try {
                this.push(this._digest())
            } catch (t) {
                e = t
            }
            t(e)
        }, i.prototype.update = function (t, n) {
            if (!e.isBuffer(t) && "string" != typeof t) throw new TypeError("Data must be a string or a buffer");
            if (this._finalized) throw new Error("Digest already called");
            e.isBuffer(t) || (t = new e(t, n || "binary"));
            for (var r = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
                for (var o = this._blockOffset; o < this._blockSize;) r[o++] = t[i++];
                this._update(), this._blockOffset = 0
            }
            for (; i < t.length;) r[this._blockOffset++] = t[i++];
            for (var a = 0, s = 8 * t.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
            return this
        }, i.prototype._update = function (t) {
            throw new Error("_update is not implemented")
        }, i.prototype.digest = function (t) {
            if (this._finalized) throw new Error("Digest already called");
            this._finalized = !0;
            var e = this._digest();
            return void 0 !== t && (e = e.toString(t)), e
        }, i.prototype._digest = function () {
            throw new Error("_digest is not implemented")
        }, t.exports = i
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    t.exports = n(44).PassThrough
}, function (t, e, n) {
    t.exports = n(44).Transform
}, function (t, e, n) {
    t.exports = n(12)
}, function (t, e, n) {
    t.exports = n(43)
}, function (t, e, n) {
    "use strict";
    t.exports = o;
    var r = n(78), i = n(25);

    function o(t) {
        if (!(this instanceof o)) return new o(t);
        r.call(this, t)
    }

    i.inherits = n(24), i.inherits(o, r), o.prototype._transform = function (t, e, n) {
        n(null, t)
    }
}, function (t, e, n) {
    (function (e) {
        function n(t) {
            try {
                if (!e.localStorage) return !1
            } catch (t) {
                return !1
            }
            var n = e.localStorage[t];
            return null != n && "true" === String(n).toLowerCase()
        }

        t.exports = function (t, e) {
            if (n("noDeprecation")) return t;
            var r = !1;
            return function () {
                if (!r) {
                    if (n("throwDeprecation")) throw new Error(e);
                    n("traceDeprecation"), r = !0
                }
                return t.apply(this, arguments)
            }
        }
    }).call(this, n(8))
}, function (t, e, n) {
    (function (t, e) {
        !function (t, n) {
            "use strict";
            if (!t.setImmediate) {
                var r, i, o, a, s, c = 1, f = {}, u = !1, l = t.document,
                    h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? r = function (t) {
                    e.nextTick(function () {
                        p(t)
                    })
                } : function () {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0, n = t.onmessage;
                        return t.onmessage = function () {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? (a = "setImmediate$" + Math.random() + "$", s = function (e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function (e) {
                    t.postMessage(a + e, "*")
                }) : t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (t) {
                    p(t.data)
                }, r = function (t) {
                    o.port2.postMessage(t)
                }) : l && "onreadystatechange" in l.createElement("script") ? (i = l.documentElement, r = function (t) {
                    var e = l.createElement("script");
                    e.onreadystatechange = function () {
                        p(t), e.onreadystatechange = null, i.removeChild(e), e = null
                    }, i.appendChild(e)
                }) : r = function (t) {
                    setTimeout(p, 0, t)
                }, h.setImmediate = function (t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var i = {callback: t, args: e};
                    return f[c] = i, r(c), c++
                }, h.clearImmediate = d
            }

            function d(t) {
                delete f[t]
            }

            function p(t) {
                if (u) setTimeout(p, 0, t); else {
                    var e = f[t];
                    if (e) {
                        u = !0;
                        try {
                            !function (t) {
                                var e = t.callback, r = t.args;
                                switch (r.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(r[0]);
                                        break;
                                    case 2:
                                        e(r[0], r[1]);
                                        break;
                                    case 3:
                                        e(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        e.apply(n, r)
                                }
                            }(e)
                        } finally {
                            d(t), u = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(8), n(11))
}, function (t, e, n) {
    (function (t) {
        var r = Function.prototype.apply;

        function i(t, e) {
            this._id = t, this._clearFn = e
        }

        e.setTimeout = function () {
            return new i(r.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new i(r.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(171), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(8))
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var r = n(1).Buffer, i = n(173);
    t.exports = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.head = null, this.tail = null, this.length = 0
        }

        return t.prototype.push = function (t) {
            var e = {data: t, next: null};
            this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
        }, t.prototype.unshift = function (t) {
            var e = {data: t, next: this.head};
            0 === this.length && (this.tail = e), this.head = e, ++this.length
        }, t.prototype.shift = function () {
            if (0 !== this.length) {
                var t = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
            }
        }, t.prototype.clear = function () {
            this.head = this.tail = null, this.length = 0
        }, t.prototype.join = function (t) {
            if (0 === this.length) return "";
            for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
            return n
        }, t.prototype.concat = function (t) {
            if (0 === this.length) return r.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var e, n, i = r.allocUnsafe(t >>> 0), o = this.head, a = 0; o;) e = i, n = a, o.data.copy(e, n), a += o.data.length, o = o.next;
            return i
        }, t
    }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function () {
        var t = i.inspect({length: this.length});
        return this.constructor.name + " " + t
    })
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var r = n(1).Buffer, i = n(33).Transform;

    function o(t) {
        i.call(this), this._block = r.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }

    n(0)(o, i), o.prototype._transform = function (t, e, n) {
        var r = null;
        try {
            this.update(t, e)
        } catch (t) {
            r = t
        }
        n(r)
    }, o.prototype._flush = function (t) {
        var e = null;
        try {
            this.push(this.digest())
        } catch (t) {
            e = t
        }
        t(e)
    }, o.prototype.update = function (t, e) {
        if (function (t, e) {
            if (!r.isBuffer(t) && "string" != typeof t) throw new TypeError("Data must be a string or a buffer")
        }(t), this._finalized) throw new Error("Digest already called");
        r.isBuffer(t) || (t = r.from(t, e));
        for (var n = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
            for (var o = this._blockOffset; o < this._blockSize;) n[o++] = t[i++];
            this._update(), this._blockOffset = 0
        }
        for (; i < t.length;) n[this._blockOffset++] = t[i++];
        for (var a = 0, s = 8 * t.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
        return this
    }, o.prototype._update = function () {
        throw new Error("_update is not implemented")
    }, o.prototype.digest = function (t) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var e = this._digest();
        void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
        for (var n = 0; n < 4; ++n) this._length[n] = 0;
        return e
    }, o.prototype._digest = function () {
        throw new Error("_digest is not implemented")
    }, t.exports = o
}, function (t, e, n) {
    "use strict";
    e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = n(14), e.createHash = e.Hash = n(26), e.createHmac = e.Hmac = n(75);
    var r = n(158), i = Object.keys(r), o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
    e.getHashes = function () {
        return o
    };
    var a = n(72);
    e.pbkdf2 = a.pbkdf2, e.pbkdf2Sync = a.pbkdf2Sync;
    var s = n(156);
    e.Cipher = s.Cipher, e.createCipher = s.createCipher, e.Cipheriv = s.Cipheriv, e.createCipheriv = s.createCipheriv, e.Decipher = s.Decipher, e.createDecipher = s.createDecipher, e.Decipheriv = s.Decipheriv, e.createDecipheriv = s.createDecipheriv, e.getCiphers = s.getCiphers, e.listCiphers = s.listCiphers;
    var c = n(139);
    e.DiffieHellmanGroup = c.DiffieHellmanGroup, e.createDiffieHellmanGroup = c.createDiffieHellmanGroup, e.getDiffieHellman = c.getDiffieHellman, e.createDiffieHellman = c.createDiffieHellman, e.DiffieHellman = c.DiffieHellman;
    var f = n(133);
    e.createSign = f.createSign, e.Sign = f.Sign, e.createVerify = f.createVerify, e.Verify = f.Verify, e.createECDH = n(94);
    var u = n(93);
    e.publicEncrypt = u.publicEncrypt, e.privateEncrypt = u.privateEncrypt, e.publicDecrypt = u.publicDecrypt, e.privateDecrypt = u.privateDecrypt;
    var l = n(90);
    e.randomFill = l.randomFill, e.randomFillSync = l.randomFillSync, e.createCredentials = function () {
        throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
    }, e.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    }
}, function (t, e) {
    e.read = function (t, e, n, r, i) {
        var o, a, s = 8 * i - r - 1, c = (1 << s) - 1, f = c >> 1, u = -7, l = n ? i - 1 : 0, h = n ? -1 : 1,
            d = t[e + l];
        for (l += h, o = d & (1 << -u) - 1, d >>= -u, u += s; u > 0; o = 256 * o + t[e + l], l += h, u -= 8) ;
        for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + t[e + l], l += h, u -= 8) ;
        if (0 === o) o = 1 - f; else {
            if (o === c) return a ? NaN : 1 / 0 * (d ? -1 : 1);
            a += Math.pow(2, r), o -= f
        }
        return (d ? -1 : 1) * a * Math.pow(2, o - r)
    }, e.write = function (t, e, n, r, i, o) {
        var a, s, c, f = 8 * o - i - 1, u = (1 << f) - 1, l = u >> 1,
            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, p = r ? 1 : -1,
            b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = u) : (a = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (e += a + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2 && (a++, c /= 2), a + l >= u ? (s = 0, a = u) : a + l >= 1 ? (s = (e * c - 1) * Math.pow(2, i), a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + d] = 255 & s, d += p, s /= 256, i -= 8) ;
        for (a = a << i | s, f += i; f > 0; t[n + d] = 255 & a, d += p, a /= 256, f -= 8) ;
        t[n + d - p] |= 128 * b
    }
}, function (t, e, n) {
    "use strict";
    e.byteLength = function (t) {
        return 3 * t.length / 4 - f(t)
    }, e.toByteArray = function (t) {
        var e, n, r, a, s, c = t.length;
        a = f(t), s = new o(3 * c / 4 - a), n = a > 0 ? c - 4 : c;
        var u = 0;
        for (e = 0; e < n; e += 4) r = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], s[u++] = r >> 16 & 255, s[u++] = r >> 8 & 255, s[u++] = 255 & r;
        return 2 === a ? (r = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, s[u++] = 255 & r) : 1 === a && (r = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, s[u++] = r >> 8 & 255, s[u++] = 255 & r), s
    }, e.fromByteArray = function (t) {
        for (var e, n = t.length, i = n % 3, o = "", a = [], s = 0, c = n - i; s < c; s += 16383) a.push(u(t, s, s + 16383 > c ? c : s + 16383));
        return 1 === i ? (e = t[n - 1], o += r[e >> 2], o += r[e << 4 & 63], o += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o += r[e >> 10], o += r[e >> 4 & 63], o += r[e << 2 & 63], o += "="), a.push(o), a.join("")
    };
    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) r[s] = a[s], i[a.charCodeAt(s)] = s;

    function f(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
    }

    function u(t, e, n) {
        for (var i, o, a = [], s = e; s < n; s += 3) i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return a.join("")
    }

    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (n, r) {
            this.options = t.extend({}, e.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };

        function n(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.affix"), o = "object" == typeof n && n;
                i || r.data("bs.affix", i = new e(this, o)), "string" == typeof n && i[n]()
            })
        }

        e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
            offset: 0,
            target: window
        }, e.prototype.getState = function (t, e, n, r) {
            var i = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
            if (null != n && "top" == this.affixed) return i < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";
            var s = null == this.affixed, c = s ? i : o.top;
            return null != n && i <= n ? "top" : null != r && c + (s ? a : e) >= t - r && "bottom"
        }, e.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix");
            var t = this.$target.scrollTop(), n = this.$element.offset();
            return this.pinnedOffset = n.top - t
        }, e.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, e.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var n = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
                var s = this.getState(a, n, i, o);
                if (this.affixed != s) {
                    null != this.unpin && this.$element.css("top", "");
                    var c = "affix" + (s ? "-" + s : ""), f = t.Event(c + ".bs.affix");
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(c).trigger(c.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == s && this.$element.offset({top: a - n - o})
            }
        };
        var r = t.fn.affix;
        t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
            return t.fn.affix = r, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var e = t(this), r = e.data();
                r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), n.call(e, r)
            })
        })
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (e) {
            this.element = t(e)
        };

        function n(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.tab");
                i || r.data("bs.tab", i = new e(this)), "string" == typeof n && i[n]()
            })
        }

        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
            var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
            if (r || (r = (r = e.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                    a = t.Event("show.bs.tab", {relatedTarget: i[0]});
                if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var s = t(r);
                    this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                        i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: i[0]
                        })
                    })
                }
            }
        }, e.prototype.activate = function (n, r, i) {
            var o = r.find("> .active"),
                a = i && t.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);

            function s() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
            }

            o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), o.removeClass("in")
        };
        var r = t.fn.tab;
        t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
            return t.fn.tab = r, this
        };
        var i = function (e) {
            e.preventDefault(), n.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";

        function e(n, r) {
            this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
                i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
            })
        }

        e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = this, n = "offset", r = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var e = t(this), i = e.data("target") || e.attr("href"), o = /^#./.test(i) && t(i);
                return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
                r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets,
                a = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= r) return a != (t = o[o.length - 1]) && this.activate(t);
            if (a && e < i[0]) return this.activeTarget = null, this.clear();
            for (t = i.length; t--;) a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                r = t(n).parents("li").addClass("active");
            r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function () {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var r = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = r, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle(), n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = function (n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.popover"), o = "object" == typeof n && n;
                !i && /destroy|hide/.test(n) || (i || r.data("bs.popover", i = new e(this, o)), "string" == typeof n && i[n]())
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {selector: "body", padding: 0}
        }, e.prototype.init = function (e, n, r) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                var a = i[o];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                    var s = "hover" == a ? "mouseenter" : "focusin", c = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(c + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.getOptions = function (e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function () {
            var e = {}, n = this.getDefaults();
            return this._options && t.each(this._options, function (t, r) {
                n[t] != r && (e[t] = r)
            }), e
        }, e.prototype.enter = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in"; else {
                if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)
            }
        }, e.prototype.isInStateTrue = function () {
            for (var t in this.inState) if (this.inState[t]) return !0;
            return !1
        }, e.prototype.leave = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)
            }
        }, e.prototype.show = function () {
            var n = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(n);
                var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (n.isDefaultPrevented() || !r) return;
                var i = this, o = this.tip(), a = this.getUID(this.type);
                this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    c = /\s?auto?\s?/i, f = c.test(s);
                f && (s = s.replace(c, "") || "top"), o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(), l = o[0].offsetWidth, h = o[0].offsetHeight;
                if (f) {
                    var d = s, p = this.getPosition(this.$viewport);
                    s = "bottom" == s && u.bottom + h > p.bottom ? "top" : "top" == s && u.top - h < p.top ? "bottom" : "right" == s && u.right + l > p.width ? "left" : "left" == s && u.left - l < p.left ? "right" : s, o.removeClass(d).addClass(s)
                }
                var b = this.getCalculatedOffset(s, u, l, h);
                this.applyPlacement(b, s);
                var g = function () {
                    var t = i.hoverState;
                    i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
            }
        }, e.prototype.applyPlacement = function (e, n) {
            var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10),
                s = parseInt(r.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({
                using: function (t) {
                    r.css({top: Math.round(t.top), left: Math.round(t.left)})
                }
            }, e), 0), r.addClass("in");
            var c = r[0].offsetWidth, f = r[0].offsetHeight;
            "top" == n && f != o && (e.top = e.top + o - f);
            var u = this.getViewportAdjustedDelta(n, e, c, f);
            u.left ? e.left += u.left : e.top += u.top;
            var l = /top|bottom/.test(n), h = l ? 2 * u.left - i + c : 2 * u.top - o + f,
                d = l ? "offsetWidth" : "offsetHeight";
            r.offset(e), this.replaceArrow(h, r[0][d], l)
        }, e.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, e.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function (n) {
            var r = this, i = t(this.$tip), o = t.Event("hide.bs." + this.type);

            function a() {
                "in" != r.hoverState && i.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), n && n()
            }

            if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), this.hoverState = null, this
        }, e.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function () {
            return this.getTitle()
        }, e.prototype.getPosition = function (e) {
            var n = (e = e || this.$element)[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
            null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
            var o = window.SVGElement && n instanceof window.SVGElement,
                a = r ? {top: 0, left: 0} : o ? null : e.offset(),
                s = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
                c = r ? {width: t(window).width(), height: t(window).height()} : null;
            return t.extend({}, i, s, c, a)
        }, e.prototype.getCalculatedOffset = function (t, e, n, r) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - r,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - r / 2,
                left: e.left - n
            } : {top: e.top + e.height / 2 - r / 2, left: e.left + e.width}
        }, e.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
            var i = {top: 0, left: 0};
            if (!this.$viewport) return i;
            var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var s = e.top - o - a.scroll, c = e.top + o - a.scroll + r;
                s < a.top ? i.top = a.top - s : c > a.top + a.height && (i.top = a.top + a.height - c)
            } else {
                var f = e.left - o, u = e.left + o + n;
                f < a.left ? i.left = a.left - f : u > a.right && (i.left = a.left + a.width - u)
            }
            return i
        }, e.prototype.getTitle = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function (t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, e.prototype.tip = function () {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.enable = function () {
            this.enabled = !0
        }, e.prototype.disable = function () {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function (e) {
            var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, e.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = function (n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof n && n;
                !i && /destroy|hide/.test(n) || (i || r.data("bs.tooltip", i = new e(this, o)), "string" == typeof n && i[n]())
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };

        function n(n, r) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.modal"),
                    a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
                o || i.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](r) : a.show && o.show(r)
            })
        }

        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, e.prototype.show = function (n) {
            var r = this, i = t.Event("show.bs.modal", {relatedTarget: n});
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                r.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var i = t.support.transition && r.$element.hasClass("fade");
                r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
                var o = t.Event("shown.bs.modal", {relatedTarget: n});
                i ? r.$dialog.one("bsTransitionEnd", function () {
                    r.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(e.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
            }))
        }, e.prototype.hide = function (n) {
            n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
        }, e.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, e.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, e.prototype.resize = function () {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, e.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, e.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, e.prototype.backdrop = function (n) {
            var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = t.support.transition && i;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
                o ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function () {
                    r.removeBackdrop(), n && n()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a()
            } else n && n()
        }, e.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, e.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, e.prototype.resetAdjustments = function () {
            this.$element.css({paddingLeft: "", paddingRight: ""})
        }, e.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, e.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, e.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, e.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var r = t.fn.modal;
        t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
            return t.fn.modal = r, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var r = t(this), i = r.attr("href"), o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
            r.is("a") && e.preventDefault(), o.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                    r.is(":visible") && r.trigger("focus")
                })
            }), n.call(o, a, this)
        })
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', r = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

        function i(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var r = n && t(n);
            return r && r.length ? r : e.parent()
        }

        function o(r) {
            r && 3 === r.which || (t(e).remove(), t(n).each(function () {
                var e = t(this), n = i(e), o = {relatedTarget: this};
                n.hasClass("open") && (r && "click" == r.type && /input|textarea/i.test(r.target.tagName) && t.contains(n[0], r.target) || (n.trigger(r = t.Event("hide.bs.dropdown", o)), r.isDefaultPrevented() || (e.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
            }))
        }

        r.VERSION = "3.3.7", r.prototype.toggle = function (e) {
            var n = t(this);
            if (!n.is(".disabled, :disabled")) {
                var r = i(n), a = r.hasClass("open");
                if (o(), !a) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                    var s = {relatedTarget: this};
                    if (r.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                    n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                }
                return !1
            }
        }, r.prototype.keydown = function (e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var r = t(this);
                if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                    var o = i(r), a = o.hasClass("open");
                    if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && o.find(n).trigger("focus"), r.trigger("click");
                    var s = o.find(".dropdown-menu li:not(.disabled):visible a");
                    if (s.length) {
                        var c = s.index(e.target);
                        38 == e.which && c > 0 && c--, 40 == e.which && c < s.length - 1 && c++, ~c || (c = 0), s.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = function (e) {
            return this.each(function () {
                var n = t(this), i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
            })
        }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (n, r) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };

        function n(e) {
            var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(r)
        }

        function r(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.collapse"),
                    o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
                !i && o.toggle && /show|hide/.test(n) && (o.toggle = !1), i || r.data("bs.collapse", i = new e(this, o)), "string" == typeof n && i[n]()
            })
        }

        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 350, e.DEFAULTS = {toggle: !0}, e.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, e.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(i && i.length && (n = i.data("bs.collapse")) && n.transitioning)) {
                    var o = t.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        i && i.length && (r.call(i, "hide"), n || i.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return s.call(this);
                        var c = t.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][c])
                    }
                }
            }
        }, e.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var n = t.Event("hide.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    var r = this.dimension();
                    this.$element[r](this.$element[r]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var i = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!t.support.transition) return i.call(this);
                    this.$element[r](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                }
            }
        }, e.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, e.prototype.getParent = function () {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (e, r) {
                var i = t(r);
                this.addAriaAndCollapsedClass(n(i), i)
            }, this)).end()
        }, e.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var i = t.fn.collapse;
        t.fn.collapse = r, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = i, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
            var i = t(this);
            i.attr("data-target") || e.preventDefault();
            var o = n(i), a = o.data("bs.collapse") ? "toggle" : i.data();
            r.call(o, a)
        })
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };

        function n(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.carousel"),
                    o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n),
                    a = "string" == typeof n ? n : o.slide;
                i || r.data("bs.carousel", i = new e(this, o)), "number" == typeof n ? i.to(n) : a ? i[a]() : o.interval && i.pause().cycle()
            })
        }

        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, e.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, e.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, e.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, e.prototype.getItemForDirection = function (t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
            var r = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(r)
        }, e.prototype.to = function (t) {
            var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, e.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, e.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, e.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, e.prototype.slide = function (n, r) {
            var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(n, i), a = this.interval,
                s = "next" == n ? "left" : "right", c = this;
            if (o.hasClass("active")) return this.sliding = !1;
            var f = o[0], u = t.Event("slide.bs.carousel", {relatedTarget: f, direction: s});
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = t(this.$indicators.children()[this.getItemIndex(o)]);
                    l && l.addClass("active")
                }
                var h = t.Event("slid.bs.carousel", {relatedTarget: f, direction: s});
                return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(n), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                    o.removeClass([n, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), c.sliding = !1, setTimeout(function () {
                        c.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
            }
        };
        var r = t.fn.carousel;
        t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = r, this
        };
        var i = function (e) {
            var r, i = t(this), o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
            if (o.hasClass("carousel")) {
                var a = t.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
                s && (a.interval = !1), n.call(o, a), s && o.data("bs.carousel").to(s), e.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = function (n, r) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.isLoading = !1
        };

        function n(n) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.button"), o = "object" == typeof n && n;
                i || r.data("bs.button", i = new e(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
            })
        }

        e.VERSION = "3.3.7", e.DEFAULTS = {loadingText: "loading..."}, e.prototype.setState = function (e) {
            var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
            e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
                r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }, e.prototype.toggle = function () {
            var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var r = t.fn.button;
        t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
            return t.fn.button = r, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            var r = t(e.target).closest(".btn");
            n.call(r, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        var e = '[data-dismiss="alert"]', n = function (n) {
            t(n).on("click", e, this.close)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
            var r = t(this), i = r.attr("data-target");
            i || (i = (i = r.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var o = t("#" === i ? [] : i);

            function a() {
                o.detach().trigger("closed.bs.alert").remove()
            }

            e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a())
        };
        var r = t.fn.alert;
        t.fn.alert = function (e) {
            return this.each(function () {
                var r = t(this), i = r.data("bs.alert");
                i || r.data("bs.alert", i = new n(this)), "string" == typeof e && i[e].call(r)
            })
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
            return t.fn.alert = r, this
        }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(jQuery)
}, function (t, e) {
    !function (t) {
        "use strict";
        t.fn.emulateTransitionEnd = function (e) {
            var n = !1, r = this;
            return t(this).one("bsTransitionEnd", function () {
                n = !0
            }), setTimeout(function () {
                n || t(r).trigger(t.support.transition.end)
            }, e), this
        }, t(function () {
            t.support.transition = function () {
                var t = document.createElement("bootstrap"), e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in e) if (void 0 !== t.style[n]) return {end: e[n]};
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, i = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), o = n(5), a = l(o), s = l(n(7)), c = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(48)), f = n(16), u = n(27);

    function l(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var h = function (t) {
        function e(t) {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, o.Component), i(e, [{
            key: "_storeData", value: function () {
            }
        }, {
            key: "_showEditor", value: function (t) {
                var e = this.props.rowData, n = $(s.default.findDOMNode(this));
                if (!this.cellEditor) {
                    switch (this.cellEditor = null, e._editorType) {
                        case"number":
                            this.cellEditor = $('<input type="number" class="form-control" style="height:31px">');
                            break;
                        case"date":
                            this.cellEditor = $('<input type="date" class="form-control" style="height:31px">');
                            break;
                        case"boolean":
                            this.cellEditor = $('<select class="form-control" style="height:31px"><option value="true">true</option><option value="false" selected="selected">false</option></select>');
                            break;
                        case"list":
                            this.cellEditor = $('<input type="text" class="form-control" style="height:31px" title="双击打开窗口编辑列表值">'), this.cellEditor.dblclick(function () {
                                var r = e[t];
                                r && "" !== r || (r = "{}");
                                var i = JSON.parse(r) || {}, o = i.rows || [], a = i.type, s = function (r) {
                                    var i = {type: a, rows: r}, o = JSON.stringify(i);
                                    e[t] = o, n.find("div").html(o)
                                };
                                if (a) {
                                    var f = null, l = !0, h = !1, d = void 0;
                                    try {
                                        for (var p, b = simulatorCategoryData[Symbol.iterator](); !(l = (p = b.next()).done); l = !0) {
                                            var g = p.value;
                                            if (a === g.clazz) {
                                                f = g;
                                                break
                                            }
                                        }
                                    } catch (t) {
                                        h = !0, d = t
                                    } finally {
                                        try {
                                            !l && b.return && b.return()
                                        } finally {
                                            if (h) throw d
                                        }
                                    }
                                    f || (f = {variables: [{name: "value", label: a + "具体值"}]});
                                    var y = f.variables || [];
                                    c.eventEmitter.emit(c.SHOW_CHILD_LIST_DIALOG, {variables: y, rows: o, callback: s})
                                } else {
                                    var m = window.simulatorCategoryData || [],
                                        v = $('<select class="form-control"></select>'), A = !0, w = !1, _ = void 0;
                                    try {
                                        for (var E, x = m[Symbol.iterator](); !(A = (E = x.next()).done); A = !0) {
                                            var C = E.value;
                                            v.append('<option value="' + C.clazz + '">' + C.name + "</option>")
                                        }
                                    } catch (t) {
                                        w = !0, _ = t
                                    } finally {
                                        try {
                                            !A && x.return && x.return()
                                        } finally {
                                            if (w) throw _
                                        }
                                    }
                                    v.append('<option value="Integer">Integer</option>'), v.append('<option value="Double">Double</option>'), v.append('<option value="Float">Float</option>'), v.append('<option value="String">String</option>'), v.append('<option value="" selected></option>'), u.MsgBox.dialog("选择子对象类型", v, function () {
                                        if ((a = v.val()) && "" !== a) {
                                            var t = null;
                                            if ("Integer" !== a && "Double" !== a && "String" !== a && "Float" !== a) {
                                                var e = !0, n = !1, r = void 0;
                                                try {
                                                    for (var i, f = m[Symbol.iterator](); !(e = (i = f.next()).done); e = !0) {
                                                        var l = i.value;
                                                        if (a === l.clazz) {
                                                            t = l;
                                                            break
                                                        }
                                                    }
                                                } catch (t) {
                                                    n = !0, r = t
                                                } finally {
                                                    try {
                                                        !e && f.return && f.return()
                                                    } finally {
                                                        if (n) throw r
                                                    }
                                                }
                                            } else t = {variables: [{name: "value", label: a + "具体值"}]};
                                            var h = t.variables || [];
                                            c.eventEmitter.emit(c.SHOW_CHILD_LIST_DIALOG, {
                                                variables: h,
                                                rows: o,
                                                callback: s
                                            })
                                        } else u.MsgBox.alert("请先选择子对象类型!")
                                    })
                                }
                            });
                            break;
                        default:
                            this.cellEditor = $('<input type="text" class="form-control" style="height:31px">')
                    }
                    n.append(this.cellEditor), this.cellEditor.blur(function () {
                        e[t] = $(this).val();
                        var r = n.find("div");
                        r.html(e[t]), r.show(), $(this).hide()
                    })
                }
                this.cellEditor.val(e[t]), this.cellEditor.show(), this.cellEditor.focus()
            }
        }, {
            key: "render", value: function () {
                var t = this, e = this.props, n = e.rowData, i = e.header, o = i.dateFormat, s = n[i.name];
                if (o) {
                    var u = new Date(s);
                    s = (0, f.formatDate)(u, o)
                }
                return s && "object" === (void 0 === s ? "undefined" : r(s)) && (s = JSON.stringify(s)), a.default.createElement("td", {style: {padding: "1px 5px"}}, a.default.createElement("div", {
                    style: {
                        marginTop: "5px",
                        minHeight: "26px",
                        wordBreak: "break-all"
                    }, onClick: function (e) {
                        if (i.editable) {
                            var r = e.target;
                            $(r).css({display: "none"}), n._editorType ? t._showEditor(i.name) : c.eventEmitter.emit(c.SHOW_CELL_EDITOR, {
                                targetDiv: r,
                                rowData: n,
                                colId: i.id
                            })
                        }
                    }
                }, s))
            }
        }]), e
    }();
    e.default = h
}, function (t, e, n) {
    (t.exports = n(18)(!1)).push([t.i, ".content-tr:hover{\r\n    background: #fcf8e3;\r\n}", ""])
}, function (t, e, n) {
    var r = n(193);
    "string" == typeof r && (r = [[t.i, r, ""]]), n(17)(r, {}), r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }();
    n(194);
    var i = n(5), o = f(i), a = f(n(7)), s = f(n(192)), c = n(34);

    function f(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var u = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = $(a.default.findDOMNode(this)), e = this.props, n = e.rowData, r = e.rowIndex, i = e.rowClick;
                t.click(function (t) {
                    i && i(n, r), $(this).addClass("bg-warning").siblings().removeClass("bg-warning")
                })
            }
        }, {
            key: "render", value: function () {
                var t = this, e = this.props, n = e.headers, r = e.rowData, i = e.rowIndex, a = e.operations,
                    f = e.select, u = [];
                n.forEach(function (t, e) {
                    u.push(o.default.createElement(s.default, {
                        key: (0, c.uniqueID)(), onchange: function (e) {
                            r[t.name] = e
                        }, rowData: r, header: t
                    }))
                }), a && u.push(o.default.createElement("td", {
                    key: (0, c.uniqueID)(),
                    style: {padding: "5px 5px"}
                }, a.map(function (e, n) {
                    return e.icon ? o.default.createElement("i", {
                        key: (0, c.uniqueID)(),
                        className: e.icon,
                        title: e.label,
                        style: e.style,
                        onClick: e.click.bind(t, i, r)
                    }) : o.default.createElement("button", {
                        key: (0, c.uniqueID)(),
                        type: "button",
                        className: "btn btn-link",
                        style: {padding: "0px 1px"},
                        onClick: e.click.bind(t, i, r)
                    }, e.label)
                })));
                var l = f ? "bg-warning" : "";
                return l += " content-tr", o.default.createElement("tr", {style: {height: "26px"}, className: l}, u)
            }
        }]), e
    }();
    e.default = u
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = u(i), a = u(n(7)), s = u(n(201)), c = u(n(199)), f = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(19));

    function u(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var l = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = $(a.default.findDOMNode(this)), e = t.children("span"), n = this.props, r = n.data;
                if (n.dispatch, e.click(function (e) {
                    var n = $(this);
                    if (t.hasClass("parent_li")) {
                        var r = n.parent("li.parent_li").find(" > ul > li");
                        r.is(":visible") ? (r.hide("fast"), n.children("i:first").addClass("rf-plus").removeClass("rf-minus")) : (r.show("fast"), n.children("i:first").addClass("rf-minus").removeClass("rf-plus")), e.stopPropagation()
                    }
                }), t.hasClass("parent_li")) {
                    var i = this.props.expandLevel;
                    r._level >= i ? (e.parent("li.parent_li").find(" > ul > li").hide(), e.children("i:first").addClass("rf-plus").removeClass("rf-minus")) : e.children("i:first").addClass("rf-minus").removeClass("rf-plus")
                }
                this._bindContextMenu(r)
            }
        }, {
            key: "isFile", value: function () {
                var t = this.props.data.name, e = !1;
                return (t.indexOf(".") > -1 || "ul" === t || "知识包" === t) && (e = !0), e
            }
        }, {
            key: "componentWillUnmount", value: function () {
                var t = this.props.data, e = t.contextMenu;
                e && 0 !== e.length && $("#node-" + t.id).contextmenu("destroy")
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this._bindContextMenu(this.props.data)
            }
        }, {
            key: "_bindContextMenu", value: function (t) {
                var e = $("#node-" + t.id);
                e.contextmenu("destroy");
                var n = t.contextMenu;
                if (n && 0 !== n.length) {
                    var r = "treenodemenu" + t.id;
                    e.contextmenu({target: "#" + r})
                }
            }
        }, {
            key: "render", value: function () {
                var t = this.props, e = t.data, n = t.dispatch, r = e.children, i = "node-" + e.id,
                    a = "treenodemenu" + e.id, u = [];
                if (e.contextMenu && u.push(o.default.createElement(c.default, {
                    items: e.contextMenu,
                    key: e.id,
                    data: e,
                    dispatch: n,
                    menuId: a
                })), r && r.length > 0) return o.default.createElement("li", {className: "parent_li"}, o.default.createElement("span", {id: i}, o.default.createElement("i", {
                    className: "rf rf-minus",
                    style: {marginRight: "2px"}
                }), o.default.createElement("i", {
                    className: e._icon,
                    style: e._style
                }), " ", o.default.createElement("a", {
                    href: "###",
                    style: e._style
                }, " ", e.name), o.default.createElement("sup", null, o.default.createElement("i", {
                    title: e.lock ? e.lockInfo : "",
                    className: e.lock ? "rf rf-lock" : ""
                }))), u, o.default.createElement(s.default, {
                    dispatch: n,
                    children: r,
                    expandLevel: this.props.expandLevel
                }));
                var l = this.isFile();
                return o.default.createElement("li", null, o.default.createElement("span", {
                    id: i,
                    onClick: function (t) {
                        if (l) {
                            var n = window._server + e.editorPath + "?file=" + e.fullPath;
                            f.eventEmitter.emit(f.TREE_NODE_CLICK, {
                                id: e.id,
                                name: e.name,
                                fullPath: e.fullPath,
                                path: n,
                                active: !0
                            }), $(".tree").find(".tree-active").removeClass("tree-active"), $("#" + i).addClass("tree-active")
                        }
                    }
                }, o.default.createElement("i", {
                    className: e._icon,
                    style: e._style
                }), " ", o.default.createElement("a", {
                    href: "###",
                    style: e._style
                }, " ", e.name), o.default.createElement("sup", null, o.default.createElement("i", {
                    title: e.lock ? e.lockInfo : "",
                    className: e.lock ? "rf rf-lock" : ""
                }))), u)
            }
        }]), e
    }();
    e.default = l
}, function (t, e, n) {
    var r;
    r = function () {
        return function (t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {exports: {}, id: r, loaded: !1};
                return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
            }

            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function (t, e, n) {
            var r, i;
            r = [n(1), n(3), n(4)], void 0 === (i = function (t) {
                return t
            }.apply(e, r)) || (t.exports = i)
        }, function (t, e, n) {
            var r, i;
            r = [n(2)], void 0 === (i = function (t) {
                function e(n) {
                    if (e.is(n, "function")) return y ? n() : t.on("raphael.DOMload", n);
                    if (e.is(n, z)) return e._engine.create[B](e, n.splice(0, 3 + e.is(n[0], Y))).add(n);
                    var r = Array.prototype.slice.call(arguments, 0);
                    if (e.is(r[r.length - 1], "function")) {
                        var i = r.pop();
                        return y ? i.call(e._engine.create[B](e, r)) : t.on("raphael.DOMload", function () {
                            i.call(e._engine.create[B](e, r))
                        })
                    }
                    return e._engine.create[B](e, arguments)
                }

                function n(t) {
                    if ("function" == typeof t || Object(t) !== t) return t;
                    var e = new t.constructor;
                    for (var r in t) t[_](r) && (e[r] = n(t[r]));
                    return e
                }

                function r(t, e, n) {
                    return function r() {
                        var i = Array.prototype.slice.call(arguments, 0), o = i.join("␀"), a = r.cache = r.cache || {},
                            s = r.count = r.count || [];
                        return a[_](o) ? (function (t, e) {
                            for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return t.push(t.splice(n, 1)[0])
                        }(s, o), n ? n(a[o]) : a[o]) : (s.length >= 1e3 && delete a[s.shift()], s.push(o), a[o] = t[B](e, i), n ? n(a[o]) : a[o])
                    }
                }

                function i() {
                    return this.hex
                }

                function o(t, e) {
                    for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                        var o = [{x: +t[r - 2], y: +t[r - 1]}, {x: +t[r], y: +t[r + 1]}, {
                            x: +t[r + 2],
                            y: +t[r + 3]
                        }, {x: +t[r + 4], y: +t[r + 5]}];
                        e ? r ? i - 4 == r ? o[3] = {x: +t[0], y: +t[1]} : i - 2 == r && (o[2] = {
                            x: +t[0],
                            y: +t[1]
                        }, o[3] = {x: +t[2], y: +t[3]}) : o[0] = {
                            x: +t[i - 2],
                            y: +t[i - 1]
                        } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                            x: +t[r],
                            y: +t[r + 1]
                        }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
                    }
                    return n
                }

                function a(t, e, n, r, i) {
                    return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
                }

                function s(t, e, n, r, i, o, s, c, f) {
                    null == f && (f = 1);
                    for (var u = (f = f > 1 ? 1 : f < 0 ? 0 : f) / 2, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) {
                        var b = u * l[p] + u, g = a(b, t, n, i, s), y = a(b, e, r, o, c), m = g * g + y * y;
                        d += h[p] * N.sqrt(m)
                    }
                    return u * d
                }

                function c(t, e, n, r, i, o, a, s) {
                    if (!(j(t, n) < L(i, a) || L(t, n) > j(i, a) || j(e, r) < L(o, s) || L(e, r) > j(o, s))) {
                        var c = (t - n) * (o - s) - (e - r) * (i - a);
                        if (c) {
                            var f = ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / c,
                                u = ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / c, l = +f.toFixed(2),
                                h = +u.toFixed(2);
                            if (!(l < +L(t, n).toFixed(2) || l > +j(t, n).toFixed(2) || l < +L(i, a).toFixed(2) || l > +j(i, a).toFixed(2) || h < +L(e, r).toFixed(2) || h > +j(e, r).toFixed(2) || h < +L(o, s).toFixed(2) || h > +j(o, s).toFixed(2))) return {
                                x: f,
                                y: u
                            }
                        }
                    }
                }

                function f(t, n, r) {
                    var i = e.bezierBBox(t), o = e.bezierBBox(n);
                    if (!e.isBBoxIntersect(i, o)) return r ? 0 : [];
                    for (var a = s.apply(0, t), f = s.apply(0, n), u = j(~~(a / 5), 1), l = j(~~(f / 5), 1), h = [], d = [], p = {}, b = r ? 0 : [], g = 0; g < u + 1; g++) {
                        var y = e.findDotsAtSegment.apply(e, t.concat(g / u));
                        h.push({x: y.x, y: y.y, t: g / u})
                    }
                    for (g = 0; g < l + 1; g++) y = e.findDotsAtSegment.apply(e, n.concat(g / l)), d.push({
                        x: y.x,
                        y: y.y,
                        t: g / l
                    });
                    for (g = 0; g < u; g++) for (var m = 0; m < l; m++) {
                        var v = h[g], A = h[g + 1], w = d[m], _ = d[m + 1], E = Q(A.x - v.x) < .001 ? "y" : "x",
                            x = Q(_.x - w.x) < .001 ? "y" : "x", C = c(v.x, v.y, A.x, A.y, w.x, w.y, _.x, _.y);
                        if (C) {
                            if (p[C.x.toFixed(4)] == C.y.toFixed(4)) continue;
                            p[C.x.toFixed(4)] = C.y.toFixed(4);
                            var B = v.t + Q((C[E] - v[E]) / (A[E] - v[E])) * (A.t - v.t),
                                S = w.t + Q((C[x] - w[x]) / (_[x] - w[x])) * (_.t - w.t);
                            B >= 0 && B <= 1.001 && S >= 0 && S <= 1.001 && (r ? b++ : b.push({
                                x: C.x,
                                y: C.y,
                                t1: L(B, 1),
                                t2: L(S, 1)
                            }))
                        }
                    }
                    return b
                }

                function u(t, n, r) {
                    t = e._path2curve(t), n = e._path2curve(n);
                    for (var i, o, a, s, c, u, l, h, d, p, b = r ? 0 : [], g = 0, y = t.length; g < y; g++) {
                        var m = t[g];
                        if ("M" == m[0]) i = c = m[1], o = u = m[2]; else {
                            "C" == m[0] ? (i = (d = [i, o].concat(m.slice(1)))[6], o = d[7]) : (d = [i, o, i, o, c, u, c, u], i = c, o = u);
                            for (var v = 0, A = n.length; v < A; v++) {
                                var w = n[v];
                                if ("M" == w[0]) a = l = w[1], s = h = w[2]; else {
                                    "C" == w[0] ? (a = (p = [a, s].concat(w.slice(1)))[6], s = p[7]) : (p = [a, s, a, s, l, h, l, h], a = l, s = h);
                                    var _ = f(d, p, r);
                                    if (r) b += _; else {
                                        for (var E = 0, x = _.length; E < x; E++) _[E].segment1 = g, _[E].segment2 = v, _[E].bez1 = d, _[E].bez2 = p;
                                        b = b.concat(_)
                                    }
                                }
                            }
                        }
                    }
                    return b
                }

                function l(t, e, n, r, i, o) {
                    null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
                }

                function h() {
                    return this.x + M + this.y + M + this.width + " × " + this.height
                }

                function d(t, e, n, r, i, o) {
                    function a(t) {
                        return ((f * t + c) * t + s) * t
                    }

                    var s = 3 * e, c = 3 * (r - e) - s, f = 1 - s - c, u = 3 * n, l = 3 * (i - n) - u, h = 1 - u - l;
                    return function (t, e) {
                        var n = function (t, e) {
                            var n, r, i, o, u, l;
                            for (i = t, l = 0; l < 8; l++) {
                                if (o = a(i) - t, Q(o) < e) return i;
                                if (Q(u = (3 * f * i + 2 * c) * i + s) < 1e-6) break;
                                i -= o / u
                            }
                            if (r = 1, (i = t) < (n = 0)) return n;
                            if (i > r) return r;
                            for (; n < r;) {
                                if (o = a(i), Q(o - t) < e) return i;
                                t > o ? n = i : r = i, i = (r - n) / 2 + n
                            }
                            return i
                        }(t, 1 / (200 * o));
                        return ((h * n + l) * n + u) * n
                    }(t)
                }

                function p(t, e) {
                    var n = [], r = {};
                    if (this.ms = e, this.times = 1, t) {
                        for (var i in t) t[_](i) && (r[W(i)] = t[i], n.push(W(i)));
                        n.sort(ct)
                    }
                    this.anim = r, this.top = n[n.length - 1], this.percents = n
                }

                function b(n, r, i, o, a, s) {
                    i = W(i);
                    var c, f, u, h, p, b, g = n.ms, y = {}, m = {}, A = {};
                    if (o) for (E = 0, x = ne.length; E < x; E++) {
                        var w = ne[E];
                        if (w.el.id == r.id && w.anim == n) {
                            w.percent != i ? (ne.splice(E, 1), u = 1) : f = w, r.attr(w.totalOrigin);
                            break
                        }
                    } else o = +m;
                    for (var E = 0, x = n.percents.length; E < x; E++) {
                        if (n.percents[E] == i || n.percents[E] > o * n.top) {
                            i = n.percents[E], p = n.percents[E - 1] || 0, g = g / n.top * (i - p), h = n.percents[E + 1], c = n.anim[i];
                            break
                        }
                        o && r.attr(n.anim[n.percents[E]])
                    }
                    if (c) {
                        if (f) f.initstatus = o, f.start = new Date - f.ms * o; else {
                            for (var C in c) if (c[_](C) && (tt[_](C) || r.paper.customAttributes[_](C))) switch (y[C] = r.attr(C), null == y[C] && (y[C] = Z[C]), m[C] = c[C], tt[C]) {
                                case Y:
                                    A[C] = (m[C] - y[C]) / g;
                                    break;
                                case"colour":
                                    y[C] = e.getRGB(y[C]);
                                    var B = e.getRGB(m[C]);
                                    A[C] = {r: (B.r - y[C].r) / g, g: (B.g - y[C].g) / g, b: (B.b - y[C].b) / g};
                                    break;
                                case"path":
                                    var k = Rt(y[C], m[C]), I = k[1];
                                    for (y[C] = k[0], A[C] = [], E = 0, x = y[C].length; E < x; E++) {
                                        A[C][E] = [0];
                                        for (var M = 1, D = y[C][E].length; M < D; M++) A[C][E][M] = (I[E][M] - y[C][E][M]) / g
                                    }
                                    break;
                                case"transform":
                                    var O = r._, P = jt(O[C], m[C]);
                                    if (P) for (y[C] = P.from, m[C] = P.to, A[C] = [], A[C].real = !0, E = 0, x = y[C].length; E < x; E++) for (A[C][E] = [y[C][E][0]], M = 1, D = y[C][E].length; M < D; M++) A[C][E][M] = (m[C][E][M] - y[C][E][M]) / g; else {
                                        var N = r.matrix || new l, j = {
                                            _: {transform: O.transform}, getBBox: function () {
                                                return r.getBBox(1)
                                            }
                                        };
                                        y[C] = [N.a, N.b, N.c, N.d, N.e, N.f], Pt(j, m[C]), m[C] = j._.transform, A[C] = [(j.matrix.a - N.a) / g, (j.matrix.b - N.b) / g, (j.matrix.c - N.c) / g, (j.matrix.d - N.d) / g, (j.matrix.e - N.e) / g, (j.matrix.f - N.f) / g]
                                    }
                                    break;
                                case"csv":
                                    var L = T(c[C])[R](v), Q = T(y[C])[R](v);
                                    if ("clip-rect" == C) for (y[C] = Q, A[C] = [], E = Q.length; E--;) A[C][E] = (L[E] - y[C][E]) / g;
                                    m[C] = L;
                                    break;
                                default:
                                    for (L = [][S](c[C]), Q = [][S](y[C]), A[C] = [], E = r.paper.customAttributes[C].length; E--;) A[C][E] = ((L[E] || 0) - (Q[E] || 0)) / g
                            }
                            var U = c.easing, F = e.easing_formulas[U];
                            if (!F) if ((F = T(U).match(J)) && 5 == F.length) {
                                var H = F;
                                F = function (t) {
                                    return d(t, +H[1], +H[2], +H[3], +H[4], g)
                                }
                            } else F = ft;
                            if (w = {
                                anim: n,
                                percent: i,
                                timestamp: b = c.start || n.start || +new Date,
                                start: b + (n.del || 0),
                                status: 0,
                                initstatus: o || 0,
                                stop: !1,
                                ms: g,
                                easing: F,
                                from: y,
                                diff: A,
                                to: m,
                                el: r,
                                callback: c.callback,
                                prev: p,
                                next: h,
                                repeat: s || n.times,
                                origin: r.attr(),
                                totalOrigin: a
                            }, ne.push(w), o && !f && !u && (w.stop = !0, w.start = new Date - g * o, 1 == ne.length)) return ie();
                            u && (w.start = new Date - w.ms * o), 1 == ne.length && re(ie)
                        }
                        t("raphael.anim.start." + r.id, r, n)
                    }
                }

                function g(t) {
                    for (var e = 0; e < ne.length; e++) ne[e].el.paper == t && ne.splice(e--, 1)
                }

                e.version = "2.2.0", e.eve = t;
                var y, m, v = /[, ]+/, A = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
                    w = /\{(\d+)\}/g, _ = "hasOwnProperty", E = {doc: document, win: window},
                    x = {was: Object.prototype[_].call(E.win, "Raphael"), is: E.win.Raphael}, C = function () {
                        this.ca = this.customAttributes = {}
                    }, B = "apply", S = "concat",
                    k = "ontouchstart" in E.win || E.win.DocumentTouch && E.doc instanceof DocumentTouch, I = "",
                    M = " ", T = String, R = "split",
                    D = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[R](M),
                    O = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"},
                    P = T.prototype.toLowerCase, N = Math, j = N.max, L = N.min, Q = N.abs, U = N.pow, F = N.PI,
                    Y = "number", H = "string", z = "array", V = Object.prototype.toString,
                    $ = (e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                    G = {NaN: 1, Infinity: 1, "-Infinity": 1},
                    J = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, q = N.round, W = parseFloat,
                    X = parseInt, K = T.prototype.toUpperCase, Z = e._availableAttrs = {
                        "arrow-end": "none",
                        "arrow-start": "none",
                        blur: 0,
                        "clip-rect": "0 0 1e9 1e9",
                        cursor: "default",
                        cx: 0,
                        cy: 0,
                        fill: "#fff",
                        "fill-opacity": 1,
                        font: '10px "Arial"',
                        "font-family": '"Arial"',
                        "font-size": "10",
                        "font-style": "normal",
                        "font-weight": 400,
                        gradient: 0,
                        height: 0,
                        href: "http://raphaeljs.com/",
                        "letter-spacing": 0,
                        opacity: 1,
                        path: "M0,0",
                        r: 0,
                        rx: 0,
                        ry: 0,
                        src: "",
                        stroke: "#000",
                        "stroke-dasharray": "",
                        "stroke-linecap": "butt",
                        "stroke-linejoin": "butt",
                        "stroke-miterlimit": 0,
                        "stroke-opacity": 1,
                        "stroke-width": 1,
                        target: "_blank",
                        "text-anchor": "middle",
                        title: "Raphael",
                        transform: "",
                        width: 0,
                        x: 0,
                        y: 0,
                        class: ""
                    }, tt = e._availableAnimAttrs = {
                        blur: Y,
                        "clip-rect": "csv",
                        cx: Y,
                        cy: Y,
                        fill: "colour",
                        "fill-opacity": Y,
                        "font-size": Y,
                        height: Y,
                        opacity: Y,
                        path: "path",
                        r: Y,
                        rx: Y,
                        ry: Y,
                        stroke: "colour",
                        "stroke-opacity": Y,
                        "stroke-width": Y,
                        transform: "transform",
                        width: Y,
                        x: Y,
                        y: Y
                    },
                    et = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                    nt = {hs: 1, rg: 1}, rt = /,?([achlmqrstvxz]),?/gi,
                    it = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                    ot = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                    at = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                    st = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                    ct = function (t, e) {
                        return W(t) - W(e)
                    }, ft = function (t) {
                        return t
                    }, ut = e._rectPath = function (t, e, n, r, i) {
                        return i ? [["M", t + i, e], ["l", n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], ["l", 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]] : [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]]
                    }, lt = function (t, e, n, r) {
                        return null == r && (r = n), [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]]
                    }, ht = e._getPath = {
                        path: function (t) {
                            return t.attr("path")
                        }, circle: function (t) {
                            var e = t.attrs;
                            return lt(e.cx, e.cy, e.r)
                        }, ellipse: function (t) {
                            var e = t.attrs;
                            return lt(e.cx, e.cy, e.rx, e.ry)
                        }, rect: function (t) {
                            var e = t.attrs;
                            return ut(e.x, e.y, e.width, e.height, e.r)
                        }, image: function (t) {
                            var e = t.attrs;
                            return ut(e.x, e.y, e.width, e.height)
                        }, text: function (t) {
                            var e = t._getBBox();
                            return ut(e.x, e.y, e.width, e.height)
                        }, set: function (t) {
                            var e = t._getBBox();
                            return ut(e.x, e.y, e.width, e.height)
                        }
                    }, dt = e.mapPath = function (t, e) {
                        if (!e) return t;
                        var n, r, i, o, a, s, c;
                        for (i = 0, a = (t = Rt(t)).length; i < a; i++) for (o = 1, s = (c = t[i]).length; o < s; o += 2) n = e.x(c[o], c[o + 1]), r = e.y(c[o], c[o + 1]), c[o] = n, c[o + 1] = r;
                        return t
                    };
                if (e._g = E, e.type = E.win.SVGAngle || E.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) {
                    var pt, bt = E.doc.createElement("div");
                    if (bt.innerHTML = '<v:shape adj="1"/>', (pt = bt.firstChild).style.behavior = "url(#default#VML)", !pt || "object" != typeof pt.adj) return e.type = I;
                    bt = null
                }
                e.svg = !(e.vml = "VML" == e.type), e._Paper = C, e.fn = m = C.prototype = e.prototype, e._id = 0, e.is = function (t, e) {
                    return "finite" == (e = P.call(e)) ? !G[_](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || V.call(t).slice(8, -1).toLowerCase() == e
                }, e.angle = function (t, n, r, i, o, a) {
                    if (null == o) {
                        var s = t - r, c = n - i;
                        return s || c ? (180 + 180 * N.atan2(-c, -s) / F + 360) % 360 : 0
                    }
                    return e.angle(t, n, o, a) - e.angle(r, i, o, a)
                }, e.rad = function (t) {
                    return t % 360 * F / 180
                }, e.deg = function (t) {
                    return Math.round(180 * t / F % 360 * 1e3) / 1e3
                }, e.snapTo = function (t, n, r) {
                    if (r = e.is(r, "finite") ? r : 10, e.is(t, z)) {
                        for (var i = t.length; i--;) if (Q(t[i] - n) <= r) return t[i]
                    } else {
                        var o = n % (t = +t);
                        if (o < r) return n - o;
                        if (o > t - r) return n - o + t
                    }
                    return n
                }, e.createUUID = function (t, e) {
                    return function () {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
                    }
                }(/[xy]/g, function (t) {
                    var e = 16 * N.random() | 0;
                    return ("x" == t ? e : 3 & e | 8).toString(16)
                }), e.setWindow = function (n) {
                    t("raphael.setWindow", e, E.win, n), E.win = n, E.doc = E.win.document, e._engine.initWin && e._engine.initWin(E.win)
                };
                var gt = function (t) {
                    if (e.vml) {
                        var n, i = /^\s+|\s+$/g;
                        try {
                            var o = new ActiveXObject("htmlfile");
                            o.write("<body>"), o.close(), n = o.body
                        } catch (t) {
                            n = createPopup().document.body
                        }
                        var a = n.createTextRange();
                        gt = r(function (t) {
                            try {
                                n.style.color = T(t).replace(i, I);
                                var e = a.queryCommandValue("ForeColor");
                                return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                            } catch (t) {
                                return "none"
                            }
                        })
                    } else {
                        var s = E.doc.createElement("i");
                        s.title = "Raphaël Colour Picker", s.style.display = "none", E.doc.body.appendChild(s), gt = r(function (t) {
                            return s.style.color = t, E.doc.defaultView.getComputedStyle(s, I).getPropertyValue("color")
                        })
                    }
                    return gt(t)
                }, yt = function () {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                }, mt = function () {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                }, vt = function () {
                    return this.hex
                }, At = function (t, n, r) {
                    if (null == n && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, n = t.g, t = t.r), null == n && e.is(t, H)) {
                        var i = e.getRGB(t);
                        t = i.r, n = i.g, r = i.b
                    }
                    return (t > 1 || n > 1 || r > 1) && (t /= 255, n /= 255, r /= 255), [t, n, r]
                }, wt = function (t, n, r, i) {
                    var o = {r: t *= 255, g: n *= 255, b: r *= 255, hex: e.rgb(t, n, r), toString: vt};
                    return e.is(i, "finite") && (o.opacity = i), o
                };
                e.color = function (t) {
                    var n;
                    return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (n = e.hsb2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (n = e.hsl2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (n = e.rgb2hsl(t), t.h = n.h, t.s = n.s, t.l = n.l, n = e.rgb2hsb(t), t.v = n.b) : (t = {hex: "none"}).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = vt, t
                }, e.hsb2rgb = function (t, e, n, r) {
                    var i, o, a, s, c;
                    return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h), s = (c = n * e) * (1 - Q((t = (t *= 360) % 360 / 60) % 2 - 1)), i = o = a = n - c, wt(i += [c, s, 0, 0, s, c][t = ~~t], o += [s, c, c, s, 0, 0][t], a += [0, 0, s, c, c, s][t], r)
                }, e.hsl2rgb = function (t, e, n, r) {
                    var i, o, a, s, c;
                    return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t = (t *= 360) % 360 / 60, s = (c = 2 * e * (n < .5 ? n : 1 - n)) * (1 - Q(t % 2 - 1)), i = o = a = n - c / 2, wt(i += [c, s, 0, 0, s, c][t = ~~t], o += [s, c, c, s, 0, 0][t], a += [0, 0, s, c, c, s][t], r)
                }, e.rgb2hsb = function (t, e, n) {
                    var r, i;
                    return t = (n = At(t, e, n))[0], e = n[1], n = n[2], {
                        h: ((0 == (i = (r = j(t, e, n)) - L(t, e, n)) ? null : r == t ? (e - n) / i : r == e ? (n - t) / i + 2 : (t - e) / i + 4) + 360) % 6 * 60 / 360,
                        s: 0 == i ? 0 : i / r,
                        b: r,
                        toString: yt
                    }
                }, e.rgb2hsl = function (t, e, n) {
                    var r, i, o, a;
                    return t = (n = At(t, e, n))[0], e = n[1], n = n[2], r = ((i = j(t, e, n)) + (o = L(t, e, n))) / 2, {
                        h: ((0 == (a = i - o) ? null : i == t ? (e - n) / a : i == e ? (n - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360,
                        s: 0 == a ? 0 : r < .5 ? a / (2 * r) : a / (2 - 2 * r),
                        l: r,
                        toString: mt
                    }
                }, e._path2string = function () {
                    return this.join(",").replace(rt, "$1")
                }, e._preload = function (t, e) {
                    var n = E.doc.createElement("img");
                    n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
                        e.call(this), this.onload = null, E.doc.body.removeChild(this)
                    }, n.onerror = function () {
                        E.doc.body.removeChild(this)
                    }, E.doc.body.appendChild(n), n.src = t
                }, e.getRGB = r(function (t) {
                    if (!t || (t = T(t)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: i
                    };
                    if ("none" == t) return {r: -1, g: -1, b: -1, hex: "none", toString: i};
                    !nt[_](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = gt(t));
                    var n, r, o, a, s, c, f = t.match($);
                    return f ? (f[2] && (o = X(f[2].substring(5), 16), r = X(f[2].substring(3, 5), 16), n = X(f[2].substring(1, 3), 16)), f[3] && (o = X((s = f[3].charAt(3)) + s, 16), r = X((s = f[3].charAt(2)) + s, 16), n = X((s = f[3].charAt(1)) + s, 16)), f[4] && (c = f[4][R](et), n = W(c[0]), "%" == c[0].slice(-1) && (n *= 2.55), r = W(c[1]), "%" == c[1].slice(-1) && (r *= 2.55), o = W(c[2]), "%" == c[2].slice(-1) && (o *= 2.55), "rgba" == f[1].toLowerCase().slice(0, 4) && (a = W(c[3])), c[3] && "%" == c[3].slice(-1) && (a /= 100)), f[5] ? (c = f[5][R](et), n = W(c[0]), "%" == c[0].slice(-1) && (n *= 2.55), r = W(c[1]), "%" == c[1].slice(-1) && (r *= 2.55), o = W(c[2]), "%" == c[2].slice(-1) && (o *= 2.55), ("deg" == c[0].slice(-3) || "°" == c[0].slice(-1)) && (n /= 360), "hsba" == f[1].toLowerCase().slice(0, 4) && (a = W(c[3])), c[3] && "%" == c[3].slice(-1) && (a /= 100), e.hsb2rgb(n, r, o, a)) : f[6] ? (c = f[6][R](et), n = W(c[0]), "%" == c[0].slice(-1) && (n *= 2.55), r = W(c[1]), "%" == c[1].slice(-1) && (r *= 2.55), o = W(c[2]), "%" == c[2].slice(-1) && (o *= 2.55), ("deg" == c[0].slice(-3) || "°" == c[0].slice(-1)) && (n /= 360), "hsla" == f[1].toLowerCase().slice(0, 4) && (a = W(c[3])), c[3] && "%" == c[3].slice(-1) && (a /= 100), e.hsl2rgb(n, r, o, a)) : ((f = {
                        r: n,
                        g: r,
                        b: o,
                        toString: i
                    }).hex = "#" + (16777216 | o | r << 8 | n << 16).toString(16).slice(1), e.is(a, "finite") && (f.opacity = a), f)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: i
                    }
                }, e), e.hsb = r(function (t, n, r) {
                    return e.hsb2rgb(t, n, r).hex
                }), e.hsl = r(function (t, n, r) {
                    return e.hsl2rgb(t, n, r).hex
                }), e.rgb = r(function (t, e, n) {
                    function r(t) {
                        return t + .5 | 0
                    }

                    return "#" + (16777216 | r(n) | r(e) << 8 | r(t) << 16).toString(16).slice(1)
                }), e.getColor = function (t) {
                    var e = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: t || .75},
                        n = this.hsb2rgb(e.h, e.s, e.b);
                    return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                        h: 0,
                        s: 1,
                        b: e.b
                    })), n.hex
                }, e.getColor.reset = function () {
                    delete this.start
                }, e.parsePathString = function (t) {
                    if (!t) return null;
                    var n = _t(t);
                    if (n.arr) return xt(n.arr);
                    var r = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, i = [];
                    return e.is(t, z) && e.is(t[0], z) && (i = xt(t)), i.length || T(t).replace(it, function (t, e, n) {
                        var o = [], a = e.toLowerCase();
                        if (n.replace(at, function (t, e) {
                            e && o.push(+e)
                        }), "m" == a && o.length > 2 && (i.push([e][S](o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "r" == a) i.push([e][S](o)); else for (; o.length >= r[a] && (i.push([e][S](o.splice(0, r[a]))), r[a]);) ;
                    }), i.toString = e._path2string, n.arr = xt(i), i
                }, e.parseTransformString = r(function (t) {
                    if (!t) return null;
                    var n = [];
                    return e.is(t, z) && e.is(t[0], z) && (n = xt(t)), n.length || T(t).replace(ot, function (t, e, r) {
                        var i = [];
                        P.call(e), r.replace(at, function (t, e) {
                            e && i.push(+e)
                        }), n.push([e][S](i))
                    }), n.toString = e._path2string, n
                });
                var _t = function (t) {
                    var e = _t.ps = _t.ps || {};
                    return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                        for (var n in e) e[_](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
                    }), e[t]
                };
                e.findDotsAtSegment = function (t, e, n, r, i, o, a, s, c) {
                    var f = 1 - c, u = U(f, 3), l = U(f, 2), h = c * c, d = h * c,
                        p = u * t + 3 * l * c * n + 3 * f * c * c * i + d * a,
                        b = u * e + 3 * l * c * r + 3 * f * c * c * o + d * s,
                        g = t + 2 * c * (n - t) + h * (i - 2 * n + t), y = e + 2 * c * (r - e) + h * (o - 2 * r + e),
                        m = n + 2 * c * (i - n) + h * (a - 2 * i + n), v = r + 2 * c * (o - r) + h * (s - 2 * o + r),
                        A = f * t + c * n, w = f * e + c * r, _ = f * i + c * a, E = f * o + c * s,
                        x = 90 - 180 * N.atan2(g - m, y - v) / F;
                    return (g > m || y < v) && (x += 180), {
                        x: p,
                        y: b,
                        m: {x: g, y: y},
                        n: {x: m, y: v},
                        start: {x: A, y: w},
                        end: {x: _, y: E},
                        alpha: x
                    }
                }, e.bezierBBox = function (t, n, r, i, o, a, s, c) {
                    e.is(t, "array") || (t = [t, n, r, i, o, a, s, c]);
                    var f = Tt.apply(null, t);
                    return {
                        x: f.min.x,
                        y: f.min.y,
                        x2: f.max.x,
                        y2: f.max.y,
                        width: f.max.x - f.min.x,
                        height: f.max.y - f.min.y
                    }
                }, e.isPointInsideBBox = function (t, e, n) {
                    return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2
                }, e.isBBoxIntersect = function (t, n) {
                    var r = e.isPointInsideBBox;
                    return r(n, t.x, t.y) || r(n, t.x2, t.y) || r(n, t.x, t.y2) || r(n, t.x2, t.y2) || r(t, n.x, n.y) || r(t, n.x2, n.y) || r(t, n.x, n.y2) || r(t, n.x2, n.y2) || (t.x < n.x2 && t.x > n.x || n.x < t.x2 && n.x > t.x) && (t.y < n.y2 && t.y > n.y || n.y < t.y2 && n.y > t.y)
                }, e.pathIntersection = function (t, e) {
                    return u(t, e)
                }, e.pathIntersectionNumber = function (t, e) {
                    return u(t, e, 1)
                }, e.isPointInsidePath = function (t, n, r) {
                    var i = e.pathBBox(t);
                    return e.isPointInsideBBox(i, n, r) && u(t, [["M", n, r], ["H", i.x2 + 10]], 1) % 2 == 1
                }, e._removedFactory = function (e) {
                    return function () {
                        t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e)
                    }
                };
                var Et = e.pathBBox = function (t) {
                    var e = _t(t);
                    if (e.bbox) return n(e.bbox);
                    if (!t) return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
                    for (var r, i = 0, o = 0, a = [], s = [], c = 0, f = (t = Rt(t)).length; c < f; c++) if ("M" == (r = t[c])[0]) i = r[1], o = r[2], a.push(i), s.push(o); else {
                        var u = Tt(i, o, r[1], r[2], r[3], r[4], r[5], r[6]);
                        a = a[S](u.min.x, u.max.x), s = s[S](u.min.y, u.max.y), i = r[5], o = r[6]
                    }
                    var l = L[B](0, a), h = L[B](0, s), d = j[B](0, a), p = j[B](0, s), b = d - l, g = p - h,
                        y = {x: l, y: h, x2: d, y2: p, width: b, height: g, cx: l + b / 2, cy: h + g / 2};
                    return e.bbox = n(y), y
                }, xt = function (t) {
                    var r = n(t);
                    return r.toString = e._path2string, r
                }, Ct = e._pathToRelative = function (t) {
                    var n = _t(t);
                    if (n.rel) return xt(n.rel);
                    e.is(t, z) && e.is(t && t[0], z) || (t = e.parsePathString(t));
                    var r = [], i = 0, o = 0, a = 0, s = 0, c = 0;
                    "M" == t[0][0] && (a = i = t[0][1], s = o = t[0][2], c++, r.push(["M", i, o]));
                    for (var f = c, u = t.length; f < u; f++) {
                        var l = r[f] = [], h = t[f];
                        if (h[0] != P.call(h[0])) switch (l[0] = P.call(h[0]), l[0]) {
                            case"a":
                                l[1] = h[1], l[2] = h[2], l[3] = h[3], l[4] = h[4], l[5] = h[5], l[6] = +(h[6] - i).toFixed(3), l[7] = +(h[7] - o).toFixed(3);
                                break;
                            case"v":
                                l[1] = +(h[1] - o).toFixed(3);
                                break;
                            case"m":
                                a = h[1], s = h[2];
                            default:
                                for (var d = 1, p = h.length; d < p; d++) l[d] = +(h[d] - (d % 2 ? i : o)).toFixed(3)
                        } else {
                            l = r[f] = [], "m" == h[0] && (a = h[1] + i, s = h[2] + o);
                            for (var b = 0, g = h.length; b < g; b++) r[f][b] = h[b]
                        }
                        var y = r[f].length;
                        switch (r[f][0]) {
                            case"z":
                                i = a, o = s;
                                break;
                            case"h":
                                i += +r[f][y - 1];
                                break;
                            case"v":
                                o += +r[f][y - 1];
                                break;
                            default:
                                i += +r[f][y - 2], o += +r[f][y - 1]
                        }
                    }
                    return r.toString = e._path2string, n.rel = xt(r), r
                }, Bt = e._pathToAbsolute = function (t) {
                    var n = _t(t);
                    if (n.abs) return xt(n.abs);
                    if (e.is(t, z) && e.is(t && t[0], z) || (t = e.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
                    var r = [], i = 0, a = 0, s = 0, c = 0, f = 0;
                    "M" == t[0][0] && (s = i = +t[0][1], c = a = +t[0][2], f++, r[0] = ["M", i, a]);
                    for (var u, l, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), d = f, p = t.length; d < p; d++) {
                        if (r.push(u = []), (l = t[d])[0] != K.call(l[0])) switch (u[0] = K.call(l[0]), u[0]) {
                            case"A":
                                u[1] = l[1], u[2] = l[2], u[3] = l[3], u[4] = l[4], u[5] = l[5], u[6] = +(l[6] + i), u[7] = +(l[7] + a);
                                break;
                            case"V":
                                u[1] = +l[1] + a;
                                break;
                            case"H":
                                u[1] = +l[1] + i;
                                break;
                            case"R":
                                for (var b = [i, a][S](l.slice(1)), g = 2, y = b.length; g < y; g++) b[g] = +b[g] + i, b[++g] = +b[g] + a;
                                r.pop(), r = r[S](o(b, h));
                                break;
                            case"M":
                                s = +l[1] + i, c = +l[2] + a;
                            default:
                                for (g = 1, y = l.length; g < y; g++) u[g] = +l[g] + (g % 2 ? i : a)
                        } else if ("R" == l[0]) b = [i, a][S](l.slice(1)), r.pop(), r = r[S](o(b, h)), u = ["R"][S](l.slice(-2)); else for (var m = 0, v = l.length; m < v; m++) u[m] = l[m];
                        switch (u[0]) {
                            case"Z":
                                i = s, a = c;
                                break;
                            case"H":
                                i = u[1];
                                break;
                            case"V":
                                a = u[1];
                                break;
                            case"M":
                                s = u[u.length - 2], c = u[u.length - 1];
                            default:
                                i = u[u.length - 2], a = u[u.length - 1]
                        }
                    }
                    return r.toString = e._path2string, n.abs = xt(r), r
                }, St = function (t, e, n, r) {
                    return [t, e, n, r, n, r]
                }, kt = function (t, e, n, r, i, o) {
                    var a = 1 / 3, s = 2 / 3;
                    return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
                }, It = function (t, e, n, i, o, a, s, c, f, u) {
                    var l, h = 120 * F / 180, d = F / 180 * (+o || 0), p = [], b = r(function (t, e, n) {
                        return {x: t * N.cos(n) - e * N.sin(n), y: t * N.sin(n) + e * N.cos(n)}
                    });
                    if (u) x = u[0], C = u[1], _ = u[2], E = u[3]; else {
                        t = (l = b(t, e, -d)).x, e = l.y, c = (l = b(c, f, -d)).x, f = l.y, N.cos(F / 180 * o), N.sin(F / 180 * o);
                        var g = (t - c) / 2, y = (e - f) / 2, m = g * g / (n * n) + y * y / (i * i);
                        m > 1 && (n *= m = N.sqrt(m), i *= m);
                        var v = n * n, A = i * i,
                            w = (a == s ? -1 : 1) * N.sqrt(Q((v * A - v * y * y - A * g * g) / (v * y * y + A * g * g))),
                            _ = w * n * y / i + (t + c) / 2, E = w * -i * g / n + (e + f) / 2,
                            x = N.asin(((e - E) / i).toFixed(9)), C = N.asin(((f - E) / i).toFixed(9));
                        x = t < _ ? F - x : x, C = c < _ ? F - C : C, x < 0 && (x = 2 * F + x), C < 0 && (C = 2 * F + C), s && x > C && (x -= 2 * F), !s && C > x && (C -= 2 * F)
                    }
                    var B = C - x;
                    if (Q(B) > h) {
                        var k = C, I = c, M = f;
                        C = x + h * (s && C > x ? 1 : -1), c = _ + n * N.cos(C), f = E + i * N.sin(C), p = It(c, f, n, i, o, 0, s, I, M, [C, k, _, E])
                    }
                    B = C - x;
                    var T = N.cos(x), D = N.sin(x), O = N.cos(C), P = N.sin(C), j = N.tan(B / 4), L = 4 / 3 * n * j,
                        U = 4 / 3 * i * j, Y = [t, e], H = [t + L * D, e - U * T], z = [c + L * P, f - U * O],
                        V = [c, f];
                    if (H[0] = 2 * Y[0] - H[0], H[1] = 2 * Y[1] - H[1], u) return [H, z, V][S](p);
                    for (var $ = [], G = 0, J = (p = [H, z, V][S](p).join()[R](",")).length; G < J; G++) $[G] = G % 2 ? b(p[G - 1], p[G], d).y : b(p[G], p[G + 1], d).x;
                    return $
                }, Mt = function (t, e, n, r, i, o, a, s, c) {
                    var f = 1 - c;
                    return {
                        x: U(f, 3) * t + 3 * U(f, 2) * c * n + 3 * f * c * c * i + U(c, 3) * a,
                        y: U(f, 3) * e + 3 * U(f, 2) * c * r + 3 * f * c * c * o + U(c, 3) * s
                    }
                }, Tt = r(function (t, e, n, r, i, o, a, s) {
                    var c, f = i - 2 * n + t - (a - 2 * i + n), u = 2 * (n - t) - 2 * (i - n), l = t - n,
                        h = (-u + N.sqrt(u * u - 4 * f * l)) / 2 / f, d = (-u - N.sqrt(u * u - 4 * f * l)) / 2 / f,
                        p = [e, s], b = [t, a];
                    return Q(h) > "1e12" && (h = .5), Q(d) > "1e12" && (d = .5), h > 0 && h < 1 && (c = Mt(t, e, n, r, i, o, a, s, h), b.push(c.x), p.push(c.y)), d > 0 && d < 1 && (c = Mt(t, e, n, r, i, o, a, s, d), b.push(c.x), p.push(c.y)), f = o - 2 * r + e - (s - 2 * o + r), l = e - r, h = (-(u = 2 * (r - e) - 2 * (o - r)) + N.sqrt(u * u - 4 * f * l)) / 2 / f, d = (-u - N.sqrt(u * u - 4 * f * l)) / 2 / f, Q(h) > "1e12" && (h = .5), Q(d) > "1e12" && (d = .5), h > 0 && h < 1 && (c = Mt(t, e, n, r, i, o, a, s, h), b.push(c.x), p.push(c.y)), d > 0 && d < 1 && (c = Mt(t, e, n, r, i, o, a, s, d), b.push(c.x), p.push(c.y)), {
                        min: {
                            x: L[B](0, b),
                            y: L[B](0, p)
                        }, max: {x: j[B](0, b), y: j[B](0, p)}
                    }
                }), Rt = e._path2curve = r(function (t, e) {
                    var n = !e && _t(t);
                    if (!e && n.curve) return xt(n.curve);
                    for (var r = Bt(t), i = e && Bt(e), o = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, a = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, s = function (t, e, n) {
                        var r, i;
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                            case"M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case"A":
                                t = ["C"][S](It[B](0, [e.x, e.y][S](t.slice(1))));
                                break;
                            case"S":
                                "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i][S](t.slice(1));
                                break;
                            case"T":
                                "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][S](kt(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case"Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"][S](kt(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case"L":
                                t = ["C"][S](St(e.x, e.y, t[1], t[2]));
                                break;
                            case"H":
                                t = ["C"][S](St(e.x, e.y, t[1], e.y));
                                break;
                            case"V":
                                t = ["C"][S](St(e.x, e.y, e.x, t[1]));
                                break;
                            case"Z":
                                t = ["C"][S](St(e.x, e.y, e.X, e.Y))
                        }
                        return t
                    }, c = function (t, e) {
                        if (t[e].length > 7) {
                            t[e].shift();
                            for (var n = t[e]; n.length;) u[e] = "A", i && (l[e] = "A"), t.splice(e++, 0, ["C"][S](n.splice(0, 6)));
                            t.splice(e, 1), b = j(r.length, i && i.length || 0)
                        }
                    }, f = function (t, e, n, o, a) {
                        t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], b = j(r.length, i && i.length || 0))
                    }, u = [], l = [], h = "", d = "", p = 0, b = j(r.length, i && i.length || 0); p < b; p++) {
                        r[p] && (h = r[p][0]), "C" != h && (u[p] = h, p && (d = u[p - 1])), r[p] = s(r[p], o, d), "A" != u[p] && "C" == h && (u[p] = "C"), c(r, p), i && (i[p] && (h = i[p][0]), "C" != h && (l[p] = h, p && (d = l[p - 1])), i[p] = s(i[p], a, d), "A" != l[p] && "C" == h && (l[p] = "C"), c(i, p)), f(r, i, o, a, p), f(i, r, a, o, p);
                        var g = r[p], y = i && i[p], m = g.length, v = i && y.length;
                        o.x = g[m - 2], o.y = g[m - 1], o.bx = W(g[m - 4]) || o.x, o.by = W(g[m - 3]) || o.y, a.bx = i && (W(y[v - 4]) || a.x), a.by = i && (W(y[v - 3]) || a.y), a.x = i && y[v - 2], a.y = i && y[v - 1]
                    }
                    return i || (n.curve = xt(r)), i ? [r, i] : r
                }, null, xt), Dt = (e._parseDots = r(function (t) {
                    for (var n = [], r = 0, i = t.length; r < i; r++) {
                        var o = {}, a = t[r].match(/^([^:]*):?([\d\.]*)/);
                        if (o.color = e.getRGB(a[1]), o.color.error) return null;
                        o.opacity = o.color.opacity, o.color = o.color.hex, a[2] && (o.offset = a[2] + "%"), n.push(o)
                    }
                    for (r = 1, i = n.length - 1; r < i; r++) if (!n[r].offset) {
                        for (var s = W(n[r - 1].offset || 0), c = 0, f = r + 1; f < i; f++) if (n[f].offset) {
                            c = n[f].offset;
                            break
                        }
                        c || (c = 100, f = i);
                        for (var u = ((c = W(c)) - s) / (f - r + 1); r < f; r++) s += u, n[r].offset = s + "%"
                    }
                    return n
                }), e._tear = function (t, e) {
                    t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
                }), Ot = (e._tofront = function (t, e) {
                    e.top !== t && (Dt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
                }, e._toback = function (t, e) {
                    e.bottom !== t && (Dt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
                }, e._insertafter = function (t, e, n) {
                    Dt(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
                }, e._insertbefore = function (t, e, n) {
                    Dt(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
                }, e.toMatrix = function (t, e) {
                    var n = Et(t), r = {
                        _: {transform: I}, getBBox: function () {
                            return n
                        }
                    };
                    return Pt(r, e), r.matrix
                }), Pt = (e.transformPath = function (t, e) {
                    return dt(t, Ot(t, e))
                }, e._extractTransform = function (t, n) {
                    if (null == n) return t._.transform;
                    n = T(n).replace(/\.{3}|\u2026/g, t._.transform || I);
                    var r, i, o = e.parseTransformString(n), a = 0, s = 1, c = 1, f = t._, u = new l;
                    if (f.transform = o || [], o) for (var h = 0, d = o.length; h < d; h++) {
                        var p, b, g, y, m, v = o[h], A = v.length, w = T(v[0]).toLowerCase(), _ = v[0] != w,
                            E = _ ? u.invert() : 0;
                        "t" == w && 3 == A ? _ ? (p = E.x(0, 0), b = E.y(0, 0), g = E.x(v[1], v[2]), y = E.y(v[1], v[2]), u.translate(g - p, y - b)) : u.translate(v[1], v[2]) : "r" == w ? 2 == A ? (m = m || t.getBBox(1), u.rotate(v[1], m.x + m.width / 2, m.y + m.height / 2), a += v[1]) : 4 == A && (_ ? (g = E.x(v[2], v[3]), y = E.y(v[2], v[3]), u.rotate(v[1], g, y)) : u.rotate(v[1], v[2], v[3]), a += v[1]) : "s" == w ? 2 == A || 3 == A ? (m = m || t.getBBox(1), u.scale(v[1], v[A - 1], m.x + m.width / 2, m.y + m.height / 2), s *= v[1], c *= v[A - 1]) : 5 == A && (_ ? (g = E.x(v[3], v[4]), y = E.y(v[3], v[4]), u.scale(v[1], v[2], g, y)) : u.scale(v[1], v[2], v[3], v[4]), s *= v[1], c *= v[2]) : "m" == w && 7 == A && u.add(v[1], v[2], v[3], v[4], v[5], v[6]), f.dirtyT = 1, t.matrix = u
                    }
                    t.matrix = u, f.sx = s, f.sy = c, f.deg = a, f.dx = r = u.e, f.dy = i = u.f, 1 == s && 1 == c && !a && f.bbox ? (f.bbox.x += +r, f.bbox.y += +i) : f.dirtyT = 1
                }), Nt = function (t) {
                    var e = t[0];
                    switch (e.toLowerCase()) {
                        case"t":
                            return [e, 0, 0];
                        case"m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case"r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case"s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                    }
                }, jt = e._equaliseTransform = function (t, n) {
                    n = T(n).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], n = e.parseTransformString(n) || [];
                    for (var r, i, o, a, s = j(t.length, n.length), c = [], f = [], u = 0; u < s; u++) {
                        if (o = t[u] || Nt(n[u]), a = n[u] || Nt(o), o[0] != a[0] || "r" == o[0].toLowerCase() && (o[2] != a[2] || o[3] != a[3]) || "s" == o[0].toLowerCase() && (o[3] != a[3] || o[4] != a[4])) return;
                        for (c[u] = [], f[u] = [], r = 0, i = j(o.length, a.length); r < i; r++) r in o && (c[u][r] = o[r]), r in a && (f[u][r] = a[r])
                    }
                    return {from: c, to: f}
                };
                e._getContainer = function (t, n, r, i) {
                    var o;
                    if (null != (o = null != i || e.is(t, "object") ? t : E.doc.getElementById(t))) return o.tagName ? null == n ? {
                        container: o,
                        width: o.style.pixelWidth || o.offsetWidth,
                        height: o.style.pixelHeight || o.offsetHeight
                    } : {container: o, width: n, height: r} : {container: 1, x: t, y: n, width: r, height: i}
                }, e.pathToRelative = Ct, e._engine = {}, e.path2curve = Rt, e.matrix = function (t, e, n, r, i, o) {
                    return new l(t, e, n, r, i, o)
                }, function (t) {
                    function n(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function r(t) {
                        var e = N.sqrt(n(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                    }

                    t.add = function (t, e, n, r, i, o) {
                        var a, s, c, f, u = [[], [], []],
                            h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                            d = [[t, n, i], [e, r, o], [0, 0, 1]];
                        for (t && t instanceof l && (d = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), a = 0; a < 3; a++) for (s = 0; s < 3; s++) {
                            for (f = 0, c = 0; c < 3; c++) f += h[a][c] * d[c][s];
                            u[a][s] = f
                        }
                        this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
                    }, t.invert = function () {
                        var t = this, e = t.a * t.d - t.b * t.c;
                        return new l(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, t.clone = function () {
                        return new l(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, t.translate = function (t, e) {
                        this.add(1, 0, 0, 1, t, e)
                    }, t.scale = function (t, e, n, r) {
                        null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r)
                    }, t.rotate = function (t, n, r) {
                        t = e.rad(t), n = n || 0, r = r || 0;
                        var i = +N.cos(t).toFixed(9), o = +N.sin(t).toFixed(9);
                        this.add(i, o, -o, i, n, r), this.add(1, 0, 0, 1, -n, -r)
                    }, t.x = function (t, e) {
                        return t * this.a + e * this.c + this.e
                    }, t.y = function (t, e) {
                        return t * this.b + e * this.d + this.f
                    }, t.get = function (t) {
                        return +this[T.fromCharCode(97 + t)].toFixed(4)
                    }, t.toString = function () {
                        return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                    }, t.toFilter = function () {
                        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                    }, t.offset = function () {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, t.split = function () {
                        var t = {};
                        t.dx = this.e, t.dy = this.f;
                        var i = [[this.a, this.c], [this.b, this.d]];
                        t.scalex = N.sqrt(n(i[0])), r(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = N.sqrt(n(i[1])), r(i[1]), t.shear /= t.scaley;
                        var o = -i[0][1], a = i[1][1];
                        return a < 0 ? (t.rotate = e.deg(N.acos(a)), o < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(N.asin(o)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                    }, t.toTransformString = function (t) {
                        var e = t || this[R]();
                        return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : I) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : I) + (e.rotate ? "r" + [e.rotate, 0, 0] : I)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(l.prototype);
                for (var Lt = function () {
                    this.returnValue = !1
                }, Qt = function () {
                    return this.originalEvent.preventDefault()
                }, Ut = function () {
                    this.cancelBubble = !0
                }, Ft = function () {
                    return this.originalEvent.stopPropagation()
                }, Yt = function (t) {
                    var e = E.doc.documentElement.scrollTop || E.doc.body.scrollTop,
                        n = E.doc.documentElement.scrollLeft || E.doc.body.scrollLeft;
                    return {x: t.clientX + n, y: t.clientY + e}
                }, Ht = E.doc.addEventListener ? function (t, e, n, r) {
                    var i = function (t) {
                        var e = Yt(t);
                        return n.call(r, t, e.x, e.y)
                    };
                    if (t.addEventListener(e, i, !1), k && O[e]) {
                        var o = function (e) {
                            for (var i = Yt(e), o = e, a = 0, s = e.targetTouches && e.targetTouches.length; a < s; a++) if (e.targetTouches[a].target == t) {
                                (e = e.targetTouches[a]).originalEvent = o, e.preventDefault = Qt, e.stopPropagation = Ft;
                                break
                            }
                            return n.call(r, e, i.x, i.y)
                        };
                        t.addEventListener(O[e], o, !1)
                    }
                    return function () {
                        return t.removeEventListener(e, i, !1), k && O[e] && t.removeEventListener(O[e], o, !1), !0
                    }
                } : E.doc.attachEvent ? function (t, e, n, r) {
                    var i = function (t) {
                        t = t || E.win.event;
                        var e = E.doc.documentElement.scrollTop || E.doc.body.scrollTop,
                            i = E.doc.documentElement.scrollLeft || E.doc.body.scrollLeft, o = t.clientX + i,
                            a = t.clientY + e;
                        return t.preventDefault = t.preventDefault || Lt, t.stopPropagation = t.stopPropagation || Ut, n.call(r, t, o, a)
                    };
                    return t.attachEvent("on" + e, i), function () {
                        return t.detachEvent("on" + e, i), !0
                    }
                } : void 0, zt = [], Vt = function (e) {
                    for (var n, r = e.clientX, i = e.clientY, o = E.doc.documentElement.scrollTop || E.doc.body.scrollTop, a = E.doc.documentElement.scrollLeft || E.doc.body.scrollLeft, s = zt.length; s--;) {
                        if (n = zt[s], k && e.touches) {
                            for (var c, f = e.touches.length; f--;) if ((c = e.touches[f]).identifier == n.el._drag.id) {
                                r = c.clientX, i = c.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                                break
                            }
                        } else e.preventDefault();
                        var u, l = n.el.node, h = l.nextSibling, d = l.parentNode, p = l.style.display;
                        E.win.opera && d.removeChild(l), l.style.display = "none", u = n.el.paper.getElementByPoint(r, i), l.style.display = p, E.win.opera && (h ? d.insertBefore(l, h) : d.appendChild(l)), u && t("raphael.drag.over." + n.el.id, n.el, u), r += a, i += o, t("raphael.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, e)
                    }
                }, $t = function (n) {
                    e.unmousemove(Vt).unmouseup($t);
                    for (var r, i = zt.length; i--;) (r = zt[i]).el._drag = {}, t("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
                    zt = []
                }, Gt = e.el = {}, Jt = D.length; Jt--;) !function (t) {
                    e[t] = Gt[t] = function (n, r) {
                        return e.is(n, "function") && (this.events = this.events || [], this.events.push({
                            name: t,
                            f: n,
                            unbind: Ht(this.shape || this.node || E.doc, t, n, r || this)
                        })), this
                    }, e["un" + t] = Gt["un" + t] = function (n) {
                        for (var r = this.events || [], i = r.length; i--;) r[i].name != t || !e.is(n, "undefined") && r[i].f != n || (r[i].unbind(), r.splice(i, 1), !r.length && delete this.events);
                        return this
                    }
                }(D[Jt]);
                Gt.data = function (n, r) {
                    var i = st[this.id] = st[this.id] || {};
                    if (0 == arguments.length) return i;
                    if (1 == arguments.length) {
                        if (e.is(n, "object")) {
                            for (var o in n) n[_](o) && this.data(o, n[o]);
                            return this
                        }
                        return t("raphael.data.get." + this.id, this, i[n], n), i[n]
                    }
                    return i[n] = r, t("raphael.data.set." + this.id, this, r, n), this
                }, Gt.removeData = function (t) {
                    return null == t ? st[this.id] = {} : st[this.id] && delete st[this.id][t], this
                }, Gt.getData = function () {
                    return n(st[this.id] || {})
                }, Gt.hover = function (t, e, n, r) {
                    return this.mouseover(t, n).mouseout(e, r || n)
                }, Gt.unhover = function (t, e) {
                    return this.unmouseover(t).unmouseout(e)
                };
                var qt = [];
                Gt.drag = function (n, r, i, o, a, s) {
                    function c(c) {
                        (c.originalEvent || c).preventDefault();
                        var f = c.clientX, u = c.clientY, l = E.doc.documentElement.scrollTop || E.doc.body.scrollTop,
                            h = E.doc.documentElement.scrollLeft || E.doc.body.scrollLeft;
                        if (this._drag.id = c.identifier, k && c.touches) for (var d, p = c.touches.length; p--;) if (d = c.touches[p], this._drag.id = d.identifier, d.identifier == this._drag.id) {
                            f = d.clientX, u = d.clientY;
                            break
                        }
                        this._drag.x = f + h, this._drag.y = u + l, !zt.length && e.mousemove(Vt).mouseup($t), zt.push({
                            el: this,
                            move_scope: o,
                            start_scope: a,
                            end_scope: s
                        }), r && t.on("raphael.drag.start." + this.id, r), n && t.on("raphael.drag.move." + this.id, n), i && t.on("raphael.drag.end." + this.id, i), t("raphael.drag.start." + this.id, a || o || this, c.clientX + h, c.clientY + l, c)
                    }

                    return this._drag = {}, qt.push({el: this, start: c}), this.mousedown(c), this
                }, Gt.onDragOver = function (e) {
                    e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id)
                }, Gt.undrag = function () {
                    for (var n = qt.length; n--;) qt[n].el == this && (this.unmousedown(qt[n].start), qt.splice(n, 1), t.unbind("raphael.drag.*." + this.id));
                    !qt.length && e.unmousemove(Vt).unmouseup($t), zt = []
                }, m.circle = function (t, n, r) {
                    var i = e._engine.circle(this, t || 0, n || 0, r || 0);
                    return this.__set__ && this.__set__.push(i), i
                }, m.rect = function (t, n, r, i, o) {
                    var a = e._engine.rect(this, t || 0, n || 0, r || 0, i || 0, o || 0);
                    return this.__set__ && this.__set__.push(a), a
                }, m.ellipse = function (t, n, r, i) {
                    var o = e._engine.ellipse(this, t || 0, n || 0, r || 0, i || 0);
                    return this.__set__ && this.__set__.push(o), o
                }, m.path = function (t) {
                    t && !e.is(t, H) && !e.is(t[0], z) && (t += I);
                    var n = e._engine.path(e.format[B](e, arguments), this);
                    return this.__set__ && this.__set__.push(n), n
                }, m.image = function (t, n, r, i, o) {
                    var a = e._engine.image(this, t || "about:blank", n || 0, r || 0, i || 0, o || 0);
                    return this.__set__ && this.__set__.push(a), a
                }, m.text = function (t, n, r) {
                    var i = e._engine.text(this, t || 0, n || 0, T(r));
                    return this.__set__ && this.__set__.push(i), i
                }, m.set = function (t) {
                    !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                    var n = new ae(t);
                    return this.__set__ && this.__set__.push(n), n.paper = this, n.type = "set", n
                }, m.setStart = function (t) {
                    this.__set__ = t || this.set()
                }, m.setFinish = function (t) {
                    var e = this.__set__;
                    return delete this.__set__, e
                }, m.getSize = function () {
                    var t = this.canvas.parentNode;
                    return {width: t.offsetWidth, height: t.offsetHeight}
                }, m.setSize = function (t, n) {
                    return e._engine.setSize.call(this, t, n)
                }, m.setViewBox = function (t, n, r, i, o) {
                    return e._engine.setViewBox.call(this, t, n, r, i, o)
                }, m.top = m.bottom = null, m.raphael = e, m.getElementByPoint = function (t, e) {
                    var n = this, r = n.canvas, i = E.doc.elementFromPoint(t, e);
                    if (E.win.opera && "svg" == i.tagName) {
                        var o = function (t) {
                            var e = t.getBoundingClientRect(), n = t.ownerDocument, r = n.body, i = n.documentElement,
                                o = i.clientTop || r.clientTop || 0, a = i.clientLeft || r.clientLeft || 0;
                            return {
                                y: e.top + (E.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                                x: e.left + (E.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a
                            }
                        }(r), a = r.createSVGRect();
                        a.x = t - o.x, a.y = e - o.y, a.width = a.height = 1;
                        var s = r.getIntersectionList(a, null);
                        s.length && (i = s[s.length - 1])
                    }
                    if (!i) return null;
                    for (; i.parentNode && i != r.parentNode && !i.raphael;) i = i.parentNode;
                    return i == n.canvas.parentNode && (i = r), i && i.raphael ? n.getById(i.raphaelid) : null
                }, m.getElementsByBBox = function (t) {
                    var n = this.set();
                    return this.forEach(function (r) {
                        e.isBBoxIntersect(r.getBBox(), t) && n.push(r)
                    }), n
                }, m.getById = function (t) {
                    for (var e = this.bottom; e;) {
                        if (e.id == t) return e;
                        e = e.next
                    }
                    return null
                }, m.forEach = function (t, e) {
                    for (var n = this.bottom; n;) {
                        if (!1 === t.call(e, n)) return this;
                        n = n.next
                    }
                    return this
                }, m.getElementsByPoint = function (t, e) {
                    var n = this.set();
                    return this.forEach(function (r) {
                        r.isPointInside(t, e) && n.push(r)
                    }), n
                }, Gt.isPointInside = function (t, n) {
                    var r = this.realPath = ht[this.type](this);
                    return this.attr("transform") && this.attr("transform").length && (r = e.transformPath(r, this.attr("transform"))), e.isPointInsidePath(r, t, n)
                }, Gt.getBBox = function (t) {
                    if (this.removed) return {};
                    var e = this._;
                    return t ? (!e.dirty && e.bboxwt || (this.realPath = ht[this.type](this), e.bboxwt = Et(this.realPath), e.bboxwt.toString = h, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = ht[this.type](this)), e.bbox = Et(dt(this.realPath, this.matrix)), e.bbox.toString = h, e.dirty = e.dirtyT = 0), e.bbox)
                }, Gt.clone = function () {
                    if (this.removed) return null;
                    var t = this.paper[this.type]().attr(this.attr());
                    return this.__set__ && this.__set__.push(t), t
                }, Gt.glow = function (t) {
                    if ("text" == this.type) return null;
                    var e = {
                        width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                        fill: t.fill || !1,
                        opacity: null == t.opacity ? .5 : t.opacity,
                        offsetx: t.offsetx || 0,
                        offsety: t.offsety || 0,
                        color: t.color || "#000"
                    }, n = e.width / 2, r = this.paper, i = r.set(), o = this.realPath || ht[this.type](this);
                    o = this.matrix ? dt(o, this.matrix) : o;
                    for (var a = 1; a < n + 1; a++) i.push(r.path(o).attr({
                        stroke: e.color,
                        fill: e.fill ? e.color : "none",
                        "stroke-linejoin": "round",
                        "stroke-linecap": "round",
                        "stroke-width": +(e.width / n * a).toFixed(3),
                        opacity: +(e.opacity / n).toFixed(3)
                    }));
                    return i.insertBefore(this).translate(e.offsetx, e.offsety)
                };
                var Wt = function (t, n, r, i, o, a, c, f, u) {
                    return null == u ? s(t, n, r, i, o, a, c, f) : e.findDotsAtSegment(t, n, r, i, o, a, c, f, function (t, e, n, r, i, o, a, c, f) {
                        if (!(f < 0 || s(t, e, n, r, i, o, a, c) < f)) {
                            var u, l = .5, h = 1 - l;
                            for (u = s(t, e, n, r, i, o, a, c, h); Q(u - f) > .01;) l /= 2, u = s(t, e, n, r, i, o, a, c, h += (u < f ? 1 : -1) * l);
                            return h
                        }
                    }(t, n, r, i, o, a, c, f, u))
                }, Xt = function (t, n) {
                    return function (r, i, o) {
                        for (var a, s, c, f, u, l = "", h = {}, d = 0, p = 0, b = (r = Rt(r)).length; p < b; p++) {
                            if ("M" == (c = r[p])[0]) a = +c[1], s = +c[2]; else {
                                if (d + (f = Wt(a, s, c[1], c[2], c[3], c[4], c[5], c[6])) > i) {
                                    if (n && !h.start) {
                                        if (l += ["C" + (u = Wt(a, s, c[1], c[2], c[3], c[4], c[5], c[6], i - d)).start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], o) return l;
                                        h.start = l, l = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, c[5], c[6]].join(), d += f, a = +c[5], s = +c[6];
                                        continue
                                    }
                                    if (!t && !n) return {
                                        x: (u = Wt(a, s, c[1], c[2], c[3], c[4], c[5], c[6], i - d)).x,
                                        y: u.y,
                                        alpha: u.alpha
                                    }
                                }
                                d += f, a = +c[5], s = +c[6]
                            }
                            l += c.shift() + c
                        }
                        return h.end = l, (u = t ? d : n ? h : e.findDotsAtSegment(a, s, c[0], c[1], c[2], c[3], c[4], c[5], 1)).alpha && (u = {
                            x: u.x,
                            y: u.y,
                            alpha: u.alpha
                        }), u
                    }
                }, Kt = Xt(1), Zt = Xt(), te = Xt(0, 1);
                e.getTotalLength = Kt, e.getPointAtLength = Zt, e.getSubpath = function (t, e, n) {
                    if (this.getTotalLength(t) - n < 1e-6) return te(t, e).end;
                    var r = te(t, n, 1);
                    return e ? te(r, e).end : r
                }, Gt.getTotalLength = function () {
                    var t = this.getPath();
                    if (t) return this.node.getTotalLength ? this.node.getTotalLength() : Kt(t)
                }, Gt.getPointAtLength = function (t) {
                    var e = this.getPath();
                    if (e) return Zt(e, t)
                }, Gt.getPath = function () {
                    var t, n = e._getPath[this.type];
                    if ("text" != this.type && "set" != this.type) return n && (t = n(this)), t
                }, Gt.getSubpath = function (t, n) {
                    var r = this.getPath();
                    if (r) return e.getSubpath(r, t, n)
                };
                var ee = e.easing_formulas = {
                    linear: function (t) {
                        return t
                    }, "<": function (t) {
                        return U(t, 1.7)
                    }, ">": function (t) {
                        return U(t, .48)
                    }, "<>": function (t) {
                        var e = .48 - t / 1.04, n = N.sqrt(.1734 + e * e), r = n - e, i = -n - e,
                            o = U(Q(r), 1 / 3) * (r < 0 ? -1 : 1) + U(Q(i), 1 / 3) * (i < 0 ? -1 : 1) + .5;
                        return 3 * (1 - o) * o * o + o * o * o
                    }, backIn: function (t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    }, backOut: function (t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    }, elastic: function (t) {
                        return t == !!t ? t : U(2, -10 * t) * N.sin(2 * F * (t - .075) / .3) + 1
                    }, bounce: function (t) {
                        var e = 7.5625, n = 2.75;
                        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
                    }
                };
                ee.easeIn = ee["ease-in"] = ee["<"], ee.easeOut = ee["ease-out"] = ee[">"], ee.easeInOut = ee["ease-in-out"] = ee["<>"], ee["back-in"] = ee.backIn, ee["back-out"] = ee.backOut;
                var ne = [],
                    re = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                        setTimeout(t, 16)
                    }, ie = function () {
                        for (var n = +new Date, r = 0; r < ne.length; r++) {
                            var i = ne[r];
                            if (!i.el.removed && !i.paused) {
                                var o, a, s = n - i.start, c = i.ms, f = i.easing, u = i.from, l = i.diff, h = i.to,
                                    d = (i.t, i.el), p = {}, g = {};
                                if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * c, i.status = i.initstatus, delete i.initstatus, i.stop && ne.splice(r--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / c)) / i.anim.top, !(s < 0)) if (s < c) {
                                    var y = f(s / c);
                                    for (var m in u) if (u[_](m)) {
                                        switch (tt[m]) {
                                            case Y:
                                                o = +u[m] + y * c * l[m];
                                                break;
                                            case"colour":
                                                o = "rgb(" + [oe(q(u[m].r + y * c * l[m].r)), oe(q(u[m].g + y * c * l[m].g)), oe(q(u[m].b + y * c * l[m].b))].join(",") + ")";
                                                break;
                                            case"path":
                                                o = [];
                                                for (var v = 0, A = u[m].length; v < A; v++) {
                                                    o[v] = [u[m][v][0]];
                                                    for (var w = 1, E = u[m][v].length; w < E; w++) o[v][w] = +u[m][v][w] + y * c * l[m][v][w];
                                                    o[v] = o[v].join(M)
                                                }
                                                o = o.join(M);
                                                break;
                                            case"transform":
                                                if (l[m].real) for (o = [], v = 0, A = u[m].length; v < A; v++) for (o[v] = [u[m][v][0]], w = 1, E = u[m][v].length; w < E; w++) o[v][w] = u[m][v][w] + y * c * l[m][v][w]; else {
                                                    var x = function (t) {
                                                        return +u[m][t] + y * c * l[m][t]
                                                    };
                                                    o = [["m", x(0), x(1), x(2), x(3), x(4), x(5)]]
                                                }
                                                break;
                                            case"csv":
                                                if ("clip-rect" == m) for (o = [], v = 4; v--;) o[v] = +u[m][v] + y * c * l[m][v];
                                                break;
                                            default:
                                                var C = [][S](u[m]);
                                                for (o = [], v = d.paper.customAttributes[m].length; v--;) o[v] = +C[v] + y * c * l[m][v]
                                        }
                                        p[m] = o
                                    }
                                    d.attr(p), function (e, n, r) {
                                        setTimeout(function () {
                                            t("raphael.anim.frame." + e, n, r)
                                        })
                                    }(d.id, d, i.anim)
                                } else {
                                    if (function (n, r, i) {
                                        setTimeout(function () {
                                            t("raphael.anim.frame." + r.id, r, i), t("raphael.anim.finish." + r.id, r, i), e.is(n, "function") && n.call(r)
                                        })
                                    }(i.callback, d, i.anim), d.attr(h), ne.splice(r--, 1), i.repeat > 1 && !i.next) {
                                        for (a in h) h[_](a) && (g[a] = i.totalOrigin[a]);
                                        i.el.attr(g), b(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
                                    }
                                    i.next && !i.stop && b(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
                                }
                            }
                        }
                        ne.length && re(ie)
                    }, oe = function (t) {
                        return t > 255 ? 255 : t < 0 ? 0 : t
                    };
                Gt.animateWith = function (t, n, r, i, o, a) {
                    var s = this;
                    if (s.removed) return a && a.call(s), s;
                    var c = r instanceof p ? r : e.animation(r, i, o, a);
                    b(c, s, c.percents[0], null, s.attr());
                    for (var f = 0, u = ne.length; f < u; f++) if (ne[f].anim == n && ne[f].el == t) {
                        ne[u - 1].start = ne[f].start;
                        break
                    }
                    return s
                }, Gt.onAnimation = function (e) {
                    return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id), this
                }, p.prototype.delay = function (t) {
                    var e = new p(this.anim, this.ms);
                    return e.times = this.times, e.del = +t || 0, e
                }, p.prototype.repeat = function (t) {
                    var e = new p(this.anim, this.ms);
                    return e.del = this.del, e.times = N.floor(j(t, 0)) || 1, e
                }, e.animation = function (t, n, r, i) {
                    if (t instanceof p) return t;
                    !e.is(r, "function") && r || (i = i || r || null, r = null), t = Object(t), n = +n || 0;
                    var o, a, s = {};
                    for (a in t) t[_](a) && W(a) != a && W(a) + "%" != a && (o = !0, s[a] = t[a]);
                    if (o) return r && (s.easing = r), i && (s.callback = i), new p({100: s}, n);
                    if (i) {
                        var c = 0;
                        for (var f in t) {
                            var u = X(f);
                            t[_](f) && u > c && (c = u)
                        }
                        !t[c += "%"].callback && (t[c].callback = i)
                    }
                    return new p(t, n)
                }, Gt.animate = function (t, n, r, i) {
                    var o = this;
                    if (o.removed) return i && i.call(o), o;
                    var a = t instanceof p ? t : e.animation(t, n, r, i);
                    return b(a, o, a.percents[0], null, o.attr()), o
                }, Gt.setTime = function (t, e) {
                    return t && null != e && this.status(t, L(e, t.ms) / t.ms), this
                }, Gt.status = function (t, e) {
                    var n, r, i = [], o = 0;
                    if (null != e) return b(t, this, -1, L(e, 1)), this;
                    for (n = ne.length; o < n; o++) if ((r = ne[o]).el.id == this.id && (!t || r.anim == t)) {
                        if (t) return r.status;
                        i.push({anim: r.anim, status: r.status})
                    }
                    return t ? 0 : i
                }, Gt.pause = function (e) {
                    for (var n = 0; n < ne.length; n++) ne[n].el.id != this.id || e && ne[n].anim != e || !1 !== t("raphael.anim.pause." + this.id, this, ne[n].anim) && (ne[n].paused = !0);
                    return this
                }, Gt.resume = function (e) {
                    for (var n = 0; n < ne.length; n++) if (ne[n].el.id == this.id && (!e || ne[n].anim == e)) {
                        var r = ne[n];
                        !1 !== t("raphael.anim.resume." + this.id, this, r.anim) && (delete r.paused, this.status(r.anim, r.status))
                    }
                    return this
                }, Gt.stop = function (e) {
                    for (var n = 0; n < ne.length; n++) ne[n].el.id != this.id || e && ne[n].anim != e || !1 !== t("raphael.anim.stop." + this.id, this, ne[n].anim) && ne.splice(n--, 1);
                    return this
                }, t.on("raphael.remove", g), t.on("raphael.clear", g), Gt.toString = function () {
                    return "Raphaël’s object"
                };
                var ae = function (t) {
                    if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, n = t.length; e < n; e++) !t[e] || t[e].constructor != Gt.constructor && t[e].constructor != ae || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                }, se = ae.prototype;
                for (var ce in se.push = function () {
                    for (var t, e, n = 0, r = arguments.length; n < r; n++) !(t = arguments[n]) || t.constructor != Gt.constructor && t.constructor != ae || (this[e = this.items.length] = this.items[e] = t, this.length++);
                    return this
                }, se.pop = function () {
                    return this.length && delete this[this.length--], this.items.pop()
                }, se.forEach = function (t, e) {
                    for (var n = 0, r = this.items.length; n < r; n++) if (!1 === t.call(e, this.items[n], n)) return this;
                    return this
                }, Gt) Gt[_](ce) && (se[ce] = function (t) {
                    return function () {
                        var e = arguments;
                        return this.forEach(function (n) {
                            n[t][B](n, e)
                        })
                    }
                }(ce));
                return se.attr = function (t, n) {
                    if (t && e.is(t, z) && e.is(t[0], "object")) for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]); else for (var o = 0, a = this.items.length; o < a; o++) this.items[o].attr(t, n);
                    return this
                }, se.clear = function () {
                    for (; this.length;) this.pop()
                }, se.splice = function (t, e, n) {
                    t = t < 0 ? j(this.length + t, 0) : t, e = j(0, L(this.length - t, e));
                    var r, i = [], o = [], a = [];
                    for (r = 2; r < arguments.length; r++) a.push(arguments[r]);
                    for (r = 0; r < e; r++) o.push(this[t + r]);
                    for (; r < this.length - t; r++) i.push(this[t + r]);
                    var s = a.length;
                    for (r = 0; r < s + i.length; r++) this.items[t + r] = this[t + r] = r < s ? a[r] : i[r - s];
                    for (r = this.items.length = this.length -= e - s; this[r];) delete this[r++];
                    return new ae(o)
                }, se.exclude = function (t) {
                    for (var e = 0, n = this.length; e < n; e++) if (this[e] == t) return this.splice(e, 1), !0
                }, se.animate = function (t, n, r, i) {
                    (e.is(r, "function") || !r) && (i = r || null);
                    var o, a, s = this.items.length, c = s, f = this;
                    if (!s) return this;
                    i && (a = function () {
                        !--s && i.call(f)
                    }), r = e.is(r, H) ? r : a;
                    var u = e.animation(t, n, r, a);
                    for (o = this.items[--c].animate(u); c--;) this.items[c] && !this.items[c].removed && this.items[c].animateWith(o, u, u), this.items[c] && !this.items[c].removed || s--;
                    return this
                }, se.insertAfter = function (t) {
                    for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                    return this
                }, se.getBBox = function () {
                    for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;) if (!this.items[i].removed) {
                        var o = this.items[i].getBBox();
                        t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
                    }
                    return {
                        x: t = L[B](0, t),
                        y: e = L[B](0, e),
                        x2: n = j[B](0, n),
                        y2: r = j[B](0, r),
                        width: n - t,
                        height: r - e
                    }
                }, se.clone = function (t) {
                    t = this.paper.set();
                    for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone());
                    return t
                }, se.toString = function () {
                    return "Raphaël‘s set"
                }, se.glow = function (t) {
                    var e = this.paper.set();
                    return this.forEach(function (n, r) {
                        var i = n.glow(t);
                        null != i && i.forEach(function (t, n) {
                            e.push(t)
                        })
                    }), e
                }, se.isPointInside = function (t, e) {
                    var n = !1;
                    return this.forEach(function (r) {
                        if (r.isPointInside(t, e)) return n = !0, !1
                    }), n
                }, e.registerFont = function (t) {
                    if (!t.face) return t;
                    this.fonts = this.fonts || {};
                    var e = {w: t.w, face: {}, glyphs: {}}, n = t.face["font-family"];
                    for (var r in t.face) t.face[_](r) && (e.face[r] = t.face[r]);
                    if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg) for (var i in e.face["units-per-em"] = X(t.face["units-per-em"], 10), t.glyphs) if (t.glyphs[_](i)) {
                        var o = t.glyphs[i];
                        if (e.glyphs[i] = {
                            w: o.w, k: {}, d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, function (t) {
                                return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[t] || "M"
                            }) + "z"
                        }, o.k) for (var a in o.k) o[_](a) && (e.glyphs[i].k[a] = o.k[a])
                    }
                    return t
                }, m.getFont = function (t, n, r, i) {
                    if (i = i || "normal", r = r || "normal", n = +n || {
                        normal: 400,
                        bold: 700,
                        lighter: 300,
                        bolder: 800
                    }[n] || 400, e.fonts) {
                        var o, a = e.fonts[t];
                        if (!a) {
                            var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, I) + "(\\s|$)", "i");
                            for (var c in e.fonts) if (e.fonts[_](c) && s.test(c)) {
                                a = e.fonts[c];
                                break
                            }
                        }
                        if (a) for (var f = 0, u = a.length; f < u && ((o = a[f]).face["font-weight"] != n || o.face["font-style"] != r && o.face["font-style"] || o.face["font-stretch"] != i); f++) ;
                        return o
                    }
                }, m.print = function (t, n, r, i, o, a, s, c) {
                    a = a || "middle", s = j(L(s || 0, 1), -1), c = j(L(c || 1, 3), 1);
                    var f, u = T(r)[R](I), l = 0, h = 0, d = I;
                    if (e.is(i, "string") && (i = this.getFont(i)), i) {
                        f = (o || 16) / i.face["units-per-em"];
                        for (var p = i.face.bbox[R](v), b = +p[0], g = p[3] - p[1], y = 0, m = +p[1] + ("baseline" == a ? g + +i.face.descent : g / 2), A = 0, w = u.length; A < w; A++) {
                            if ("\n" == u[A]) l = 0, E = 0, h = 0, y += g * c; else {
                                var _ = h && i.glyphs[u[A - 1]] || {}, E = i.glyphs[u[A]];
                                l += h ? (_.w || i.w) + (_.k && _.k[u[A]] || 0) + i.w * s : 0, h = 1
                            }
                            E && E.d && (d += e.transformPath(E.d, ["t", l * f, y * f, "s", f, f, b, m, "t", (t - b) / f, (n - m) / f]))
                        }
                    }
                    return this.path(d).attr({fill: "#000", stroke: "none"})
                }, m.add = function (t) {
                    if (e.is(t, "array")) for (var n, r = this.set(), i = 0, o = t.length; i < o; i++) n = t[i] || {}, A[_](n.type) && r.push(this[n.type]().attr(n));
                    return r
                }, e.format = function (t, n) {
                    var r = e.is(n, z) ? [0][S](n) : arguments;
                    return t && e.is(t, H) && r.length - 1 && (t = t.replace(w, function (t, e) {
                        return null == r[++e] ? I : r[e]
                    })), t || I
                }, e.fullfill = function () {
                    var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        n = function (t, n, r) {
                            var i = r;
                            return n.replace(e, function (t, e, n, r, o) {
                                e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                            }), i = (null == i || i == r ? t : i) + ""
                        };
                    return function (e, r) {
                        return String(e).replace(t, function (t, e) {
                            return n(t, e, r)
                        })
                    }
                }(), e.ninja = function () {
                    if (x.was) E.win.Raphael = x.is; else {
                        window.Raphael = void 0;
                        try {
                            delete window.Raphael
                        } catch (t) {
                        }
                    }
                    return e
                }, e.st = se, t.on("raphael.DOMload", function () {
                    y = !0
                }), function (t, n, r) {
                    null == t.readyState && t.addEventListener && (t.addEventListener(n, r = function () {
                        t.removeEventListener(n, r, !1), t.readyState = "complete"
                    }, !1), t.readyState = "loading"), function n() {
                        /in/.test(t.readyState) ? setTimeout(n, 9) : e.eve("raphael.DOMload")
                    }()
                }(document, "DOMContentLoaded"), e
            }.apply(e, r)) || (t.exports = i)
        }, function (t, e, n) {
            var r, i, o, a, s, c, f, u, l, h, d, p, b, g;
            a = "0.5.0", s = "hasOwnProperty", c = /[\.\/]/, f = /\s*,\s*/, u = function (t, e) {
                return t - e
            }, l = {n: {}}, h = function () {
                for (var t = 0, e = this.length; t < e; t++) if (void 0 !== this[t]) return this[t]
            }, d = function () {
                for (var t = this.length; --t;) if (void 0 !== this[t]) return this[t]
            }, p = Object.prototype.toString, b = String, g = Array.isArray || function (t) {
                return t instanceof Array || "[object Array]" == p.call(t)
            }, eve = function (t, e) {
                var n, r = o, a = Array.prototype.slice.call(arguments, 2), s = eve.listeners(t), c = 0, f = [], l = {},
                    p = [], b = i;
                p.firstDefined = h, p.lastDefined = d, i = t, o = 0;
                for (var g = 0, y = s.length; g < y; g++) "zIndex" in s[g] && (f.push(s[g].zIndex), s[g].zIndex < 0 && (l[s[g].zIndex] = s[g]));
                for (f.sort(u); f[c] < 0;) if (n = l[f[c++]], p.push(n.apply(e, a)), o) return o = r, p;
                for (g = 0; g < y; g++) if ("zIndex" in (n = s[g])) if (n.zIndex == f[c]) {
                    if (p.push(n.apply(e, a)), o) break;
                    do {
                        if ((n = l[f[++c]]) && p.push(n.apply(e, a)), o) break
                    } while (n)
                } else l[n.zIndex] = n; else if (p.push(n.apply(e, a)), o) break;
                return o = r, i = b, p
            }, eve._events = l, eve.listeners = function (t) {
                var e, n, r, i, o, a, s, f, u = g(t) ? t : t.split(c), h = l, d = [h], p = [];
                for (i = 0, o = u.length; i < o; i++) {
                    for (f = [], a = 0, s = d.length; a < s; a++) for (n = [(h = d[a].n)[u[i]], h["*"]], r = 2; r--;) (e = n[r]) && (f.push(e), p = p.concat(e.f || []));
                    d = f
                }
                return p
            }, eve.separator = function (t) {
                t ? (t = "[" + (t = b(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", c = new RegExp(t)) : c = /[\.\/]/
            }, eve.on = function (t, e) {
                if ("function" != typeof e) return function () {
                };
                for (var n = g(t) ? g(t[0]) ? t : [t] : b(t).split(f), r = 0, i = n.length; r < i; r++) !function (t) {
                    for (var n, r = g(t) ? t : b(t).split(c), i = l, o = 0, a = r.length; o < a; o++) i = (i = i.n).hasOwnProperty(r[o]) && i[r[o]] || (i[r[o]] = {n: {}});
                    for (i.f = i.f || [], o = 0, a = i.f.length; o < a; o++) if (i.f[o] == e) {
                        n = !0;
                        break
                    }
                    !n && i.f.push(e)
                }(n[r]);
                return function (t) {
                    +t == +t && (e.zIndex = +t)
                }
            }, eve.f = function (t) {
                var e = [].slice.call(arguments, 1);
                return function () {
                    eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
                }
            }, eve.stop = function () {
                o = 1
            }, eve.nt = function (t) {
                var e = g(i) ? i.join(".") : i;
                return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
            }, eve.nts = function () {
                return g(i) ? i : i.split(c)
            }, eve.off = eve.unbind = function (t, e) {
                if (t) {
                    var n = g(t) ? g(t[0]) ? t : [t] : b(t).split(f);
                    if (n.length > 1) for (var r = 0, i = n.length; r < i; r++) eve.off(n[r], e); else {
                        n = g(t) ? t : b(t).split(c);
                        var o, a, u, h, d, p = [l];
                        for (r = 0, i = n.length; r < i; r++) for (h = 0; h < p.length; h += u.length - 2) {
                            if (u = [h, 1], o = p[h].n, "*" != n[r]) o[n[r]] && u.push(o[n[r]]); else for (a in o) o[s](a) && u.push(o[a]);
                            p.splice.apply(p, u)
                        }
                        for (r = 0, i = p.length; r < i; r++) for (o = p[r]; o.n;) {
                            if (e) {
                                if (o.f) {
                                    for (h = 0, d = o.f.length; h < d; h++) if (o.f[h] == e) {
                                        o.f.splice(h, 1);
                                        break
                                    }
                                    !o.f.length && delete o.f
                                }
                                for (a in o.n) if (o.n[s](a) && o.n[a].f) {
                                    var y = o.n[a].f;
                                    for (h = 0, d = y.length; h < d; h++) if (y[h] == e) {
                                        y.splice(h, 1);
                                        break
                                    }
                                    !y.length && delete o.n[a].f
                                }
                            } else for (a in delete o.f, o.n) o.n[s](a) && o.n[a].f && delete o.n[a].f;
                            o = o.n
                        }
                    }
                } else eve._events = l = {n: {}}
            }, eve.once = function (t, e) {
                var n = function () {
                    return eve.off(t, n), e.apply(this, arguments)
                };
                return eve.on(t, n)
            }, eve.version = a, eve.toString = function () {
                return "You are running Eve " + a
            }, void 0 !== t && t.exports ? t.exports = eve : void 0 === (r = function () {
                return eve
            }.apply(e, [])) || (t.exports = r)
        }, function (t, e, n) {
            var r, i;
            r = [n(1)], void 0 === (i = function (t) {
                if (!t || t.svg) {
                    var e = "hasOwnProperty", n = String, r = parseFloat, i = parseInt, o = Math, a = o.max, s = o.abs,
                        c = o.pow, f = /[, ]+/, u = t.eve, l = "", h = " ", d = "http://www.w3.org/1999/xlink", p = {
                            block: "M5,0 0,2.5 5,5z",
                            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                            open: "M6,1 1,3.5 6,6",
                            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                        }, b = {};
                    t.toString = function () {
                        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                    };
                    var g = function (r, i) {
                        if (i) for (var o in"string" == typeof r && (r = g(r)), i) i[e](o) && ("xlink:" == o.substring(0, 6) ? r.setAttributeNS(d, o.substring(6), n(i[o])) : r.setAttribute(o, n(i[o]))); else (r = t._g.doc.createElementNS("http://www.w3.org/2000/svg", r)).style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return r
                    }, y = function (e, i) {
                        var f = "linear", u = e.id + i, h = .5, d = .5, p = e.node, b = e.paper, y = p.style,
                            v = t._g.doc.getElementById(u);
                        if (!v) {
                            if (i = (i = n(i).replace(t._radial_gradient, function (t, e, n) {
                                if (f = "radial", e && n) {
                                    h = r(e);
                                    var i = 2 * ((d = r(n)) > .5) - 1;
                                    c(h - .5, 2) + c(d - .5, 2) > .25 && (d = o.sqrt(.25 - c(h - .5, 2)) * i + .5) && .5 != d && (d = d.toFixed(5) - 1e-5 * i)
                                }
                                return l
                            })).split(/\s*\-\s*/), "linear" == f) {
                                var A = i.shift();
                                if (A = -r(A), isNaN(A)) return null;
                                var w = [0, 0, o.cos(t.rad(A)), o.sin(t.rad(A))], _ = 1 / (a(s(w[2]), s(w[3])) || 1);
                                w[2] *= _, w[3] *= _, w[2] < 0 && (w[0] = -w[2], w[2] = 0), w[3] < 0 && (w[1] = -w[3], w[3] = 0)
                            }
                            var E = t._parseDots(i);
                            if (!E) return null;
                            if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && u != e.gradient.id && (b.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
                                v = g(f + "Gradient", {id: u}), e.gradient = v, g(v, "radial" == f ? {
                                    fx: h,
                                    fy: d
                                } : {
                                    x1: w[0],
                                    y1: w[1],
                                    x2: w[2],
                                    y2: w[3],
                                    gradientTransform: e.matrix.invert()
                                }), b.defs.appendChild(v);
                                for (var x = 0, C = E.length; x < C; x++) v.appendChild(g("stop", {
                                    offset: E[x].offset ? E[x].offset : x ? "100%" : "0%",
                                    "stop-color": E[x].color || "#fff",
                                    "stop-opacity": isFinite(E[x].opacity) ? E[x].opacity : 1
                                }))
                            }
                        }
                        return g(p, {
                            fill: m(u),
                            opacity: 1,
                            "fill-opacity": 1
                        }), y.fill = l, y.opacity = 1, y.fillOpacity = 1, 1
                    }, m = function (t) {
                        if (function () {
                            var t = document.documentMode;
                            return t && (9 === t || 10 === t)
                        }()) return "url('#" + t + "')";
                        var e = document.location;
                        return "url('" + e.protocol + "//" + e.host + e.pathname + e.search + "#" + t + "')"
                    }, v = function (t) {
                        var e = t.getBBox(1);
                        g(t.pattern, {patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"})
                    }, A = function (r, i, o) {
                        if ("path" == r.type) {
                            for (var a, s, c, f, u, h = n(i).toLowerCase().split("-"), d = r.paper, y = o ? "end" : "start", m = r.node, v = r.attrs, A = v["stroke-width"], w = h.length, _ = "classic", E = 3, x = 3, C = 5; w--;) switch (h[w]) {
                                case"block":
                                case"classic":
                                case"oval":
                                case"diamond":
                                case"open":
                                case"none":
                                    _ = h[w];
                                    break;
                                case"wide":
                                    x = 5;
                                    break;
                                case"narrow":
                                    x = 2;
                                    break;
                                case"long":
                                    E = 5;
                                    break;
                                case"short":
                                    E = 2
                            }
                            if ("open" == _ ? (E += 2, x += 2, C += 2, c = 1, f = o ? 4 : 1, u = {
                                fill: "none",
                                stroke: v.stroke
                            }) : (f = c = E / 2, u = {
                                fill: v.stroke,
                                stroke: "none"
                            }), r._.arrows ? o ? (r._.arrows.endPath && b[r._.arrows.endPath]--, r._.arrows.endMarker && b[r._.arrows.endMarker]--) : (r._.arrows.startPath && b[r._.arrows.startPath]--, r._.arrows.startMarker && b[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != _) {
                                var B = "raphael-marker-" + _, S = "raphael-marker-" + y + _ + E + x + "-obj" + r.id;
                                t._g.doc.getElementById(B) ? b[B]++ : (d.defs.appendChild(g(g("path"), {
                                    "stroke-linecap": "round",
                                    d: p[_],
                                    id: B
                                })), b[B] = 1);
                                var k, I = t._g.doc.getElementById(S);
                                I ? (b[S]++, k = I.getElementsByTagName("use")[0]) : (I = g(g("marker"), {
                                    id: S,
                                    markerHeight: x,
                                    markerWidth: E,
                                    orient: "auto",
                                    refX: f,
                                    refY: x / 2
                                }), k = g(g("use"), {
                                    "xlink:href": "#" + B,
                                    transform: (o ? "rotate(180 " + E / 2 + " " + x / 2 + ") " : l) + "scale(" + E / C + "," + x / C + ")",
                                    "stroke-width": (1 / ((E / C + x / C) / 2)).toFixed(4)
                                }), I.appendChild(k), d.defs.appendChild(I), b[S] = 1), g(k, u);
                                var M = c * ("diamond" != _ && "oval" != _);
                                o ? (a = r._.arrows.startdx * A || 0, s = t.getTotalLength(v.path) - M * A) : (a = M * A, s = t.getTotalLength(v.path) - (r._.arrows.enddx * A || 0)), (u = {})["marker-" + y] = "url(#" + S + ")", (s || a) && (u.d = t.getSubpath(v.path, a, s)), g(m, u), r._.arrows[y + "Path"] = B, r._.arrows[y + "Marker"] = S, r._.arrows[y + "dx"] = M, r._.arrows[y + "Type"] = _, r._.arrows[y + "String"] = i
                            } else o ? (a = r._.arrows.startdx * A || 0, s = t.getTotalLength(v.path) - a) : (a = 0, s = t.getTotalLength(v.path) - (r._.arrows.enddx * A || 0)), r._.arrows[y + "Path"] && g(m, {d: t.getSubpath(v.path, a, s)}), delete r._.arrows[y + "Path"], delete r._.arrows[y + "Marker"], delete r._.arrows[y + "dx"], delete r._.arrows[y + "Type"], delete r._.arrows[y + "String"];
                            for (u in b) if (b[e](u) && !b[u]) {
                                var T = t._g.doc.getElementById(u);
                                T && T.parentNode.removeChild(T)
                            }
                        }
                    }, w = {
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    }, _ = function (t, e, r) {
                        if (e = w[n(e).toLowerCase()]) {
                            for (var i = t.attrs["stroke-width"] || "1", o = {
                                round: i,
                                square: i,
                                butt: 0
                            }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, a = [], s = e.length; s--;) a[s] = e[s] * i + (s % 2 ? 1 : -1) * o;
                            g(t.node, {"stroke-dasharray": a.join(",")})
                        } else g(t.node, {"stroke-dasharray": "none"})
                    }, E = function (r, o) {
                        var c = r.node, u = r.attrs, h = c.style.visibility;
                        for (var p in c.style.visibility = "hidden", o) if (o[e](p)) {
                            if (!t._availableAttrs[e](p)) continue;
                            var b = o[p];
                            switch (u[p] = b, p) {
                                case"blur":
                                    r.blur(b);
                                    break;
                                case"title":
                                    var m = c.getElementsByTagName("title");
                                    if (m.length && (m = m[0])) m.firstChild.nodeValue = b; else {
                                        m = g("title");
                                        var w = t._g.doc.createTextNode(b);
                                        m.appendChild(w), c.appendChild(m)
                                    }
                                    break;
                                case"href":
                                case"target":
                                    var E = c.parentNode;
                                    if ("a" != E.tagName.toLowerCase()) {
                                        var C = g("a");
                                        E.insertBefore(C, c), C.appendChild(c), E = C
                                    }
                                    "target" == p ? E.setAttributeNS(d, "show", "blank" == b ? "new" : b) : E.setAttributeNS(d, p, b);
                                    break;
                                case"cursor":
                                    c.style.cursor = b;
                                    break;
                                case"transform":
                                    r.transform(b);
                                    break;
                                case"arrow-start":
                                    A(r, b);
                                    break;
                                case"arrow-end":
                                    A(r, b, 1);
                                    break;
                                case"clip-rect":
                                    var B = n(b).split(f);
                                    if (4 == B.length) {
                                        r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                                        var S = g("clipPath"), k = g("rect");
                                        S.id = t.createUUID(), g(k, {
                                            x: B[0],
                                            y: B[1],
                                            width: B[2],
                                            height: B[3]
                                        }), S.appendChild(k), r.paper.defs.appendChild(S), g(c, {"clip-path": "url(#" + S.id + ")"}), r.clip = k
                                    }
                                    if (!b) {
                                        var I = c.getAttribute("clip-path");
                                        if (I) {
                                            var M = t._g.doc.getElementById(I.replace(/(^url\(#|\)$)/g, l));
                                            M && M.parentNode.removeChild(M), g(c, {"clip-path": l}), delete r.clip
                                        }
                                    }
                                    break;
                                case"path":
                                    "path" == r.type && (g(c, {d: b ? u.path = t._pathToAbsolute(b) : "M0,0"}), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && A(r, r._.arrows.startString), "endString" in r._.arrows && A(r, r._.arrows.endString, 1)));
                                    break;
                                case"width":
                                    if (c.setAttribute(p, b), r._.dirty = 1, !u.fx) break;
                                    p = "x", b = u.x;
                                case"x":
                                    u.fx && (b = -u.x - (u.width || 0));
                                case"rx":
                                    if ("rx" == p && "rect" == r.type) break;
                                case"cx":
                                    c.setAttribute(p, b), r.pattern && v(r), r._.dirty = 1;
                                    break;
                                case"height":
                                    if (c.setAttribute(p, b), r._.dirty = 1, !u.fy) break;
                                    p = "y", b = u.y;
                                case"y":
                                    u.fy && (b = -u.y - (u.height || 0));
                                case"ry":
                                    if ("ry" == p && "rect" == r.type) break;
                                case"cy":
                                    c.setAttribute(p, b), r.pattern && v(r), r._.dirty = 1;
                                    break;
                                case"r":
                                    "rect" == r.type ? g(c, {rx: b, ry: b}) : c.setAttribute(p, b), r._.dirty = 1;
                                    break;
                                case"src":
                                    "image" == r.type && c.setAttributeNS(d, "href", b);
                                    break;
                                case"stroke-width":
                                    1 == r._.sx && 1 == r._.sy || (b /= a(s(r._.sx), s(r._.sy)) || 1), c.setAttribute(p, b), u["stroke-dasharray"] && _(r, u["stroke-dasharray"], o), r._.arrows && ("startString" in r._.arrows && A(r, r._.arrows.startString), "endString" in r._.arrows && A(r, r._.arrows.endString, 1));
                                    break;
                                case"stroke-dasharray":
                                    _(r, b, o);
                                    break;
                                case"fill":
                                    var T = n(b).match(t._ISURL);
                                    if (T) {
                                        S = g("pattern");
                                        var R = g("image");
                                        S.id = t.createUUID(), g(S, {
                                            x: 0,
                                            y: 0,
                                            patternUnits: "userSpaceOnUse",
                                            height: 1,
                                            width: 1
                                        }), g(R, {x: 0, y: 0, "xlink:href": T[1]}), S.appendChild(R), function (e) {
                                            t._preload(T[1], function () {
                                                var t = this.offsetWidth, n = this.offsetHeight;
                                                g(e, {width: t, height: n}), g(R, {width: t, height: n})
                                            })
                                        }(S), r.paper.defs.appendChild(S), g(c, {fill: "url(#" + S.id + ")"}), r.pattern = S, r.pattern && v(r);
                                        break
                                    }
                                    var D = t.getRGB(b);
                                    if (D.error) {
                                        if (("circle" == r.type || "ellipse" == r.type || "r" != n(b).charAt()) && y(r, b)) {
                                            if ("opacity" in u || "fill-opacity" in u) {
                                                var O = t._g.doc.getElementById(c.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                if (O) {
                                                    var P = O.getElementsByTagName("stop");
                                                    g(P[P.length - 1], {"stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1)})
                                                }
                                            }
                                            u.gradient = b, u.fill = "none";
                                            break
                                        }
                                    } else delete o.gradient, delete u.gradient, !t.is(u.opacity, "undefined") && t.is(o.opacity, "undefined") && g(c, {opacity: u.opacity}), !t.is(u["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && g(c, {"fill-opacity": u["fill-opacity"]});
                                    D[e]("opacity") && g(c, {"fill-opacity": D.opacity > 1 ? D.opacity / 100 : D.opacity});
                                case"stroke":
                                    D = t.getRGB(b), c.setAttribute(p, D.hex), "stroke" == p && D[e]("opacity") && g(c, {"stroke-opacity": D.opacity > 1 ? D.opacity / 100 : D.opacity}), "stroke" == p && r._.arrows && ("startString" in r._.arrows && A(r, r._.arrows.startString), "endString" in r._.arrows && A(r, r._.arrows.endString, 1));
                                    break;
                                case"gradient":
                                    ("circle" == r.type || "ellipse" == r.type || "r" != n(b).charAt()) && y(r, b);
                                    break;
                                case"opacity":
                                    u.gradient && !u[e]("stroke-opacity") && g(c, {"stroke-opacity": b > 1 ? b / 100 : b});
                                case"fill-opacity":
                                    if (u.gradient) {
                                        (O = t._g.doc.getElementById(c.getAttribute("fill").replace(/^url\(#|\)$/g, l))) && (P = O.getElementsByTagName("stop"), g(P[P.length - 1], {"stop-opacity": b}));
                                        break
                                    }
                                default:
                                    "font-size" == p && (b = i(b, 10) + "px");
                                    var N = p.replace(/(\-.)/g, function (t) {
                                        return t.substring(1).toUpperCase()
                                    });
                                    c.style[N] = b, r._.dirty = 1, c.setAttribute(p, b)
                            }
                        }
                        x(r, o), c.style.visibility = h
                    }, x = function (r, o) {
                        if ("text" == r.type && (o[e]("text") || o[e]("font") || o[e]("font-size") || o[e]("x") || o[e]("y"))) {
                            var a = r.attrs, s = r.node,
                                c = s.firstChild ? i(t._g.doc.defaultView.getComputedStyle(s.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                            if (o[e]("text")) {
                                for (a.text = o.text; s.firstChild;) s.removeChild(s.firstChild);
                                for (var f, u = n(o.text).split("\n"), h = [], d = 0, p = u.length; d < p; d++) f = g("tspan"), d && g(f, {
                                    dy: 1.2 * c,
                                    x: a.x
                                }), f.appendChild(t._g.doc.createTextNode(u[d])), s.appendChild(f), h[d] = f
                            } else for (d = 0, p = (h = s.getElementsByTagName("tspan")).length; d < p; d++) d ? g(h[d], {
                                dy: 1.2 * c,
                                x: a.x
                            }) : g(h[0], {dy: 0});
                            g(s, {x: a.x, y: a.y}), r._.dirty = 1;
                            var b = r._getBBox(), y = a.y - (b.y + b.height / 2);
                            y && t.is(y, "finite") && g(h[0], {dy: y})
                        }
                    }, C = function (t) {
                        return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t
                    }, B = function (e, n) {
                        this[0] = this.node = e, e.raphael = !0, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
                    }, S = t.el;
                    B.prototype = S, S.constructor = B, t._engine.path = function (t, e) {
                        var n = g("path");
                        e.canvas && e.canvas.appendChild(n);
                        var r = new B(n, e);
                        return r.type = "path", E(r, {fill: "none", stroke: "#000", path: t}), r
                    }, S.rotate = function (t, e, i) {
                        if (this.removed) return this;
                        if ((t = n(t).split(f)).length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (e = i), null == e || null == i) {
                            var o = this.getBBox(1);
                            e = o.x + o.width / 2, i = o.y + o.height / 2
                        }
                        return this.transform(this._.transform.concat([["r", t, e, i]])), this
                    }, S.scale = function (t, e, i, o) {
                        if (this.removed) return this;
                        if ((t = n(t).split(f)).length - 1 && (e = r(t[1]), i = r(t[2]), o = r(t[3])), t = r(t[0]), null == e && (e = t), null == o && (i = o), null == i || null == o) var a = this.getBBox(1);
                        return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([["s", t, e, i, o]])), this
                    }, S.translate = function (t, e) {
                        return this.removed ? this : ((t = n(t).split(f)).length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]])), this)
                    }, S.transform = function (n) {
                        var r = this._;
                        if (null == n) return r.transform;
                        if (t._extractTransform(this, n), this.clip && g(this.clip, {transform: this.matrix.invert()}), this.pattern && v(this), this.node && g(this.node, {transform: this.matrix}), 1 != r.sx || 1 != r.sy) {
                            var i = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                            this.attr({"stroke-width": i})
                        }
                        return this
                    }, S.hide = function () {
                        return this.removed || (this.node.style.display = "none"), this
                    }, S.show = function () {
                        return this.removed || (this.node.style.display = ""), this
                    }, S.remove = function () {
                        var e = C(this.node);
                        if (!this.removed && e.parentNode) {
                            var n = this.paper;
                            for (var r in n.__set__ && n.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && n.defs.removeChild(this.gradient), t._tear(this, n), e.parentNode.removeChild(e), this.removeData(), this) this[r] = "function" == typeof this[r] ? t._removedFactory(r) : null;
                            this.removed = !0
                        }
                    }, S._getBBox = function () {
                        if ("none" == this.node.style.display) {
                            this.show();
                            var t = !0
                        }
                        var e, n = !1;
                        this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (n = !0, e.display = "");
                        var r = {};
                        try {
                            r = this.node.getBBox()
                        } catch (t) {
                            r = {
                                x: this.node.clientLeft,
                                y: this.node.clientTop,
                                width: this.node.clientWidth,
                                height: this.node.clientHeight
                            }
                        } finally {
                            r = r || {}, n && (e.display = "none")
                        }
                        return t && this.hide(), r
                    }, S.attr = function (n, r) {
                        if (this.removed) return this;
                        if (null == n) {
                            var i = {};
                            for (var o in this.attrs) this.attrs[e](o) && (i[o] = this.attrs[o]);
                            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                        }
                        if (null == r && t.is(n, "string")) {
                            if ("fill" == n && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                            if ("transform" == n) return this._.transform;
                            for (var a = n.split(f), s = {}, c = 0, l = a.length; c < l; c++) (n = a[c]) in this.attrs ? s[n] = this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? s[n] = this.paper.customAttributes[n].def : s[n] = t._availableAttrs[n];
                            return l - 1 ? s : s[a[0]]
                        }
                        if (null == r && t.is(n, "array")) {
                            for (s = {}, c = 0, l = n.length; c < l; c++) s[n[c]] = this.attr(n[c]);
                            return s
                        }
                        if (null != r) {
                            var h = {};
                            h[n] = r
                        } else null != n && t.is(n, "object") && (h = n);
                        for (var d in h) u("raphael.attr." + d + "." + this.id, this, h[d]);
                        for (d in this.paper.customAttributes) if (this.paper.customAttributes[e](d) && h[e](d) && t.is(this.paper.customAttributes[d], "function")) {
                            var p = this.paper.customAttributes[d].apply(this, [].concat(h[d]));
                            for (var b in this.attrs[d] = h[d], p) p[e](b) && (h[b] = p[b])
                        }
                        return E(this, h), this
                    }, S.toFront = function () {
                        if (this.removed) return this;
                        var e = C(this.node);
                        e.parentNode.appendChild(e);
                        var n = this.paper;
                        return n.top != this && t._tofront(this, n), this
                    }, S.toBack = function () {
                        if (this.removed) return this;
                        var e = C(this.node), n = e.parentNode;
                        return n.insertBefore(e, n.firstChild), t._toback(this, this.paper), this.paper, this
                    }, S.insertAfter = function (e) {
                        if (this.removed || !e) return this;
                        var n = C(this.node), r = C(e.node || e[e.length - 1].node);
                        return r.nextSibling ? r.parentNode.insertBefore(n, r.nextSibling) : r.parentNode.appendChild(n), t._insertafter(this, e, this.paper), this
                    }, S.insertBefore = function (e) {
                        if (this.removed || !e) return this;
                        var n = C(this.node), r = C(e.node || e[0].node);
                        return r.parentNode.insertBefore(n, r), t._insertbefore(this, e, this.paper), this
                    }, S.blur = function (e) {
                        var n = this;
                        if (0 != +e) {
                            var r = g("filter"), i = g("feGaussianBlur");
                            n.attrs.blur = e, r.id = t.createUUID(), g(i, {stdDeviation: +e || 1.5}), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, g(n.node, {filter: "url(#" + r.id + ")"})
                        } else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter");
                        return n
                    }, t._engine.circle = function (t, e, n, r) {
                        var i = g("circle");
                        t.canvas && t.canvas.appendChild(i);
                        var o = new B(i, t);
                        return o.attrs = {
                            cx: e,
                            cy: n,
                            r: r,
                            fill: "none",
                            stroke: "#000"
                        }, o.type = "circle", g(i, o.attrs), o
                    }, t._engine.rect = function (t, e, n, r, i, o) {
                        var a = g("rect");
                        t.canvas && t.canvas.appendChild(a);
                        var s = new B(a, t);
                        return s.attrs = {
                            x: e,
                            y: n,
                            width: r,
                            height: i,
                            rx: o || 0,
                            ry: o || 0,
                            fill: "none",
                            stroke: "#000"
                        }, s.type = "rect", g(a, s.attrs), s
                    }, t._engine.ellipse = function (t, e, n, r, i) {
                        var o = g("ellipse");
                        t.canvas && t.canvas.appendChild(o);
                        var a = new B(o, t);
                        return a.attrs = {
                            cx: e,
                            cy: n,
                            rx: r,
                            ry: i,
                            fill: "none",
                            stroke: "#000"
                        }, a.type = "ellipse", g(o, a.attrs), a
                    }, t._engine.image = function (t, e, n, r, i, o) {
                        var a = g("image");
                        g(a, {
                            x: n,
                            y: r,
                            width: i,
                            height: o,
                            preserveAspectRatio: "none"
                        }), a.setAttributeNS(d, "href", e), t.canvas && t.canvas.appendChild(a);
                        var s = new B(a, t);
                        return s.attrs = {x: n, y: r, width: i, height: o, src: e}, s.type = "image", s
                    }, t._engine.text = function (e, n, r, i) {
                        var o = g("text");
                        e.canvas && e.canvas.appendChild(o);
                        var a = new B(o, e);
                        return a.attrs = {
                            x: n,
                            y: r,
                            "text-anchor": "middle",
                            text: i,
                            "font-family": t._availableAttrs["font-family"],
                            "font-size": t._availableAttrs["font-size"],
                            stroke: "none",
                            fill: "#000"
                        }, a.type = "text", E(a, a.attrs), a
                    }, t._engine.setSize = function (t, e) {
                        return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                    }, t._engine.create = function () {
                        var e = t._getContainer.apply(0, arguments), n = e && e.container, r = e.x, i = e.y,
                            o = e.width, a = e.height;
                        if (!n) throw new Error("SVG container not found.");
                        var s, c = g("svg"), f = "overflow:hidden;";
                        return r = r || 0, i = i || 0, o = o || 512, g(c, {
                            height: a = a || 342,
                            version: 1.1,
                            width: o,
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }), 1 == n ? (c.style.cssText = f + "position:absolute;left:" + r + "px;top:" + i + "px", t._g.doc.body.appendChild(c), s = 1) : (c.style.cssText = f + "position:relative", n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c)), (n = new t._Paper).width = o, n.height = a, n.canvas = c, n.clear(), n._left = n._top = 0, s && (n.renderfix = function () {
                        }), n.renderfix(), n
                    }, t._engine.setViewBox = function (t, e, n, r, i) {
                        u("raphael.setViewBox", this, this._viewBox, [t, e, n, r, i]);
                        var o, s, c = this.getSize(), f = a(n / c.width, r / c.height), l = this.top,
                            d = i ? "xMidYMid meet" : "xMinYMin";
                        for (null == t ? (this._vbSize && (f = 1), delete this._vbSize, o = "0 0 " + this.width + h + this.height) : (this._vbSize = f, o = t + h + e + h + n + h + r), g(this.canvas, {
                            viewBox: o,
                            preserveAspectRatio: d
                        }); f && l;) s = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({"stroke-width": s}), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
                        return this._viewBox = [t, e, n, r, !!i], this
                    }, t.prototype.renderfix = function () {
                        var t, e = this.canvas, n = e.style;
                        try {
                            t = e.getScreenCTM() || e.createSVGMatrix()
                        } catch (n) {
                            t = e.createSVGMatrix()
                        }
                        var r = -t.e % 1, i = -t.f % 1;
                        (r || i) && (r && (this._left = (this._left + r) % 1, n.left = this._left + "px"), i && (this._top = (this._top + i) % 1, n.top = this._top + "px"))
                    }, t.prototype.clear = function () {
                        t.eve("raphael.clear", this);
                        for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
                        this.bottom = this.top = null, (this.desc = g("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = g("defs"))
                    }, t.prototype.remove = function () {
                        for (var e in u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
                    };
                    var k = t.st;
                    for (var I in S) S[e](I) && !k[e](I) && (k[I] = function (t) {
                        return function () {
                            var e = arguments;
                            return this.forEach(function (n) {
                                n[t].apply(n, e)
                            })
                        }
                    }(I))
                }
            }.apply(e, r)) || (t.exports = i)
        }, function (t, e, n) {
            var r, i;
            r = [n(1)], void 0 === (i = function (t) {
                if (!t || t.vml) {
                    var e = "hasOwnProperty", n = String, r = parseFloat, i = Math, o = i.round, a = i.max, s = i.min,
                        c = i.abs, f = "fill", u = /[, ]+/, l = t.eve, h = " ", d = "",
                        p = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
                        b = /([clmz]),?([^clmz]*)/gi, g = / progid:\S+Blur\([^\)]+\)/g, y = /-?[^,\s-]+/g,
                        m = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)", v = 21600,
                        A = {path: 1, rect: 1, image: 1}, w = {circle: 1, ellipse: 1}, _ = function (e) {
                            var r = /[ahqstv]/gi, i = t._pathToAbsolute;
                            if (n(e).match(r) && (i = t._path2curve), r = /[clmz]/g, i == t._pathToAbsolute && !n(e).match(r)) {
                                var a = n(e).replace(b, function (t, e, n) {
                                    var r = [], i = "m" == e.toLowerCase(), a = p[e];
                                    return n.replace(y, function (t) {
                                        i && 2 == r.length && (a += r + p["m" == e ? "l" : "L"], r = []), r.push(o(t * v))
                                    }), a + r
                                });
                                return a
                            }
                            var s, c, f = i(e);
                            a = [];
                            for (var u = 0, l = f.length; u < l; u++) {
                                s = f[u], "z" == (c = f[u][0].toLowerCase()) && (c = "x");
                                for (var g = 1, m = s.length; g < m; g++) c += o(s[g] * v) + (g != m - 1 ? "," : d);
                                a.push(c)
                            }
                            return a.join(h)
                        }, E = function (e, n, r) {
                            var i = t.matrix();
                            return i.rotate(-e, .5, .5), {dx: i.x(n, r), dy: i.y(n, r)}
                        }, x = function (t, e, n, r, i, o) {
                            var a = t._, s = t.matrix, u = a.fillpos, l = t.node, d = l.style, p = 1, b = "", g = v / e,
                                y = v / n;
                            if (d.visibility = "hidden", e && n) {
                                if (l.coordsize = c(g) + h + c(y), d.rotation = o * (e * n < 0 ? -1 : 1), o) {
                                    var m = E(o, r, i);
                                    r = m.dx, i = m.dy
                                }
                                if (e < 0 && (b += "x"), n < 0 && (b += " y") && (p = -1), d.flip = b, l.coordorigin = r * -g + h + i * -y, u || a.fillsize) {
                                    var A = l.getElementsByTagName(f);
                                    A = A && A[0], l.removeChild(A), u && (m = E(o, s.x(u[0], u[1]), s.y(u[0], u[1])), A.position = m.dx * p + h + m.dy * p), a.fillsize && (A.size = a.fillsize[0] * c(e) + h + a.fillsize[1] * c(n)), l.appendChild(A)
                                }
                                d.visibility = "visible"
                            }
                        };
                    t.toString = function () {
                        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                    };
                    var C, B = function (t, e, r) {
                        for (var i = n(e).toLowerCase().split("-"), o = r ? "end" : "start", a = i.length, s = "classic", c = "medium", f = "medium"; a--;) switch (i[a]) {
                            case"block":
                            case"classic":
                            case"oval":
                            case"diamond":
                            case"open":
                            case"none":
                                s = i[a];
                                break;
                            case"wide":
                            case"narrow":
                                f = i[a];
                                break;
                            case"long":
                            case"short":
                                c = i[a]
                        }
                        var u = t.node.getElementsByTagName("stroke")[0];
                        u[o + "arrow"] = s, u[o + "arrowlength"] = c, u[o + "arrowwidth"] = f
                    }, S = function (i, c) {
                        i.attrs = i.attrs || {};
                        var l = i.node, p = i.attrs, b = l.style,
                            g = A[i.type] && (c.x != p.x || c.y != p.y || c.width != p.width || c.height != p.height || c.cx != p.cx || c.cy != p.cy || c.rx != p.rx || c.ry != p.ry || c.r != p.r),
                            y = w[i.type] && (p.cx != c.cx || p.cy != c.cy || p.r != c.r || p.rx != c.rx || p.ry != c.ry),
                            m = i;
                        for (var E in c) c[e](E) && (p[E] = c[E]);
                        if (g && (p.path = t._getPath[i.type](i), i._.dirty = 1), c.href && (l.href = c.href), c.title && (l.title = c.title), c.target && (l.target = c.target), c.cursor && (b.cursor = c.cursor), "blur" in c && i.blur(c.blur), (c.path && "path" == i.type || g) && (l.path = _(~n(p.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(p.path) : p.path), i._.dirty = 1, "image" == i.type && (i._.fillpos = [p.x, p.y], i._.fillsize = [p.width, p.height], x(i, 1, 1, 0, 0, 0))), "transform" in c && i.transform(c.transform), y) {
                            var S = +p.cx, I = +p.cy, M = +p.rx || +p.r || 0, T = +p.ry || +p.r || 0;
                            l.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((S - M) * v), o((I - T) * v), o((S + M) * v), o((I + T) * v), o(S * v)), i._.dirty = 1
                        }
                        if ("clip-rect" in c) {
                            var R = n(c["clip-rect"]).split(u);
                            if (4 == R.length) {
                                R[2] = +R[2] + +R[0], R[3] = +R[3] + +R[1];
                                var D = l.clipRect || t._g.doc.createElement("div"), O = D.style;
                                O.clip = t.format("rect({1}px {2}px {3}px {0}px)", R), l.clipRect || (O.position = "absolute", O.top = 0, O.left = 0, O.width = i.paper.width + "px", O.height = i.paper.height + "px", l.parentNode.insertBefore(D, l), D.appendChild(l), l.clipRect = D)
                            }
                            c["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                        }
                        if (i.textpath) {
                            var P = i.textpath.style;
                            c.font && (P.font = c.font), c["font-family"] && (P.fontFamily = '"' + c["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), c["font-size"] && (P.fontSize = c["font-size"]), c["font-weight"] && (P.fontWeight = c["font-weight"]), c["font-style"] && (P.fontStyle = c["font-style"])
                        }
                        if ("arrow-start" in c && B(m, c["arrow-start"]), "arrow-end" in c && B(m, c["arrow-end"], 1), null != c.opacity || null != c.fill || null != c.src || null != c.stroke || null != c["stroke-width"] || null != c["stroke-opacity"] || null != c["fill-opacity"] || null != c["stroke-dasharray"] || null != c["stroke-miterlimit"] || null != c["stroke-linejoin"] || null != c["stroke-linecap"]) {
                            var N = l.getElementsByTagName(f);
                            if (!(N = N && N[0]) && (N = C(f)), "image" == i.type && c.src && (N.src = c.src), c.fill && (N.on = !0), null != N.on && "none" != c.fill && null !== c.fill || (N.on = !1), N.on && c.fill) {
                                var j = n(c.fill).match(t._ISURL);
                                if (j) {
                                    N.parentNode == l && l.removeChild(N), N.rotate = !0, N.src = j[1], N.type = "tile";
                                    var L = i.getBBox(1);
                                    N.position = L.x + h + L.y, i._.fillpos = [L.x, L.y], t._preload(j[1], function () {
                                        i._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else N.color = t.getRGB(c.fill).hex, N.src = d, N.type = "solid", t.getRGB(c.fill).error && (m.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != n(c.fill).charAt()) && k(m, c.fill, N) && (p.fill = "none", p.gradient = c.fill, N.rotate = !1)
                            }
                            if ("fill-opacity" in c || "opacity" in c) {
                                var Q = ((+p["fill-opacity"] + 1 || 2) - 1) * ((+p.opacity + 1 || 2) - 1) * ((+t.getRGB(c.fill).o + 1 || 2) - 1);
                                Q = s(a(Q, 0), 1), N.opacity = Q, N.src && (N.color = "none")
                            }
                            l.appendChild(N);
                            var U = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0], F = !1;
                            !U && (F = U = C("stroke")), (c.stroke && "none" != c.stroke || c["stroke-width"] || null != c["stroke-opacity"] || c["stroke-dasharray"] || c["stroke-miterlimit"] || c["stroke-linejoin"] || c["stroke-linecap"]) && (U.on = !0), ("none" == c.stroke || null === c.stroke || null == U.on || 0 == c.stroke || 0 == c["stroke-width"]) && (U.on = !1);
                            var Y = t.getRGB(c.stroke);
                            U.on && c.stroke && (U.color = Y.hex), Q = ((+p["stroke-opacity"] + 1 || 2) - 1) * ((+p.opacity + 1 || 2) - 1) * ((+Y.o + 1 || 2) - 1);
                            var H = .75 * (r(c["stroke-width"]) || 1);
                            if (Q = s(a(Q, 0), 1), null == c["stroke-width"] && (H = p["stroke-width"]), c["stroke-width"] && (U.weight = H), H && H < 1 && (Q *= H) && (U.weight = 1), U.opacity = Q, c["stroke-linejoin"] && (U.joinstyle = c["stroke-linejoin"] || "miter"), U.miterlimit = c["stroke-miterlimit"] || 8, c["stroke-linecap"] && (U.endcap = "butt" == c["stroke-linecap"] ? "flat" : "square" == c["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in c) {
                                var z = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                U.dashstyle = z[e](c["stroke-dasharray"]) ? z[c["stroke-dasharray"]] : d
                            }
                            F && l.appendChild(U)
                        }
                        if ("text" == m.type) {
                            m.paper.canvas.style.display = d;
                            var V = m.paper.span, $ = p.font && p.font.match(/\d+(?:\.\d*)?(?=px)/);
                            b = V.style, p.font && (b.font = p.font), p["font-family"] && (b.fontFamily = p["font-family"]), p["font-weight"] && (b.fontWeight = p["font-weight"]), p["font-style"] && (b.fontStyle = p["font-style"]), $ = r(p["font-size"] || $ && $[0]) || 10, b.fontSize = 100 * $ + "px", m.textpath.string && (V.innerHTML = n(m.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var G = V.getBoundingClientRect();
                            m.W = p.w = (G.right - G.left) / 100, m.H = p.h = (G.bottom - G.top) / 100, m.X = p.x, m.Y = p.y + m.H / 2, ("x" in c || "y" in c) && (m.path.v = t.format("m{0},{1}l{2},{1}", o(p.x * v), o(p.y * v), o(p.x * v) + 1));
                            for (var J = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], q = 0, W = J.length; q < W; q++) if (J[q] in c) {
                                m._.dirty = 1;
                                break
                            }
                            switch (p["text-anchor"]) {
                                case"start":
                                    m.textpath.style["v-text-align"] = "left", m.bbx = m.W / 2;
                                    break;
                                case"end":
                                    m.textpath.style["v-text-align"] = "right", m.bbx = -m.W / 2;
                                    break;
                                default:
                                    m.textpath.style["v-text-align"] = "center", m.bbx = 0
                            }
                            m.textpath.style["v-text-kern"] = !0
                        }
                    }, k = function (e, o, a) {
                        e.attrs = e.attrs || {}, e.attrs;
                        var s = Math.pow, c = "linear", f = ".5 .5";
                        if (e.attrs.gradient = o, o = (o = n(o).replace(t._radial_gradient, function (t, e, n) {
                            return c = "radial", e && n && (e = r(e), n = r(n), s(e - .5, 2) + s(n - .5, 2) > .25 && (n = i.sqrt(.25 - s(e - .5, 2)) * (2 * (n > .5) - 1) + .5), f = e + h + n), d
                        })).split(/\s*\-\s*/), "linear" == c) {
                            var u = o.shift();
                            if (u = -r(u), isNaN(u)) return null
                        }
                        var l = t._parseDots(o);
                        if (!l) return null;
                        if (e = e.shape || e.node, l.length) {
                            e.removeChild(a), a.on = !0, a.method = "none", a.color = l[0].color, a.color2 = l[l.length - 1].color;
                            for (var p = [], b = 0, g = l.length; b < g; b++) l[b].offset && p.push(l[b].offset + h + l[b].color);
                            a.colors = p.length ? p.join() : "0% " + a.color, "radial" == c ? (a.type = "gradientTitle", a.focus = "100%", a.focussize = "0 0", a.focusposition = f, a.angle = 0) : (a.type = "gradient", a.angle = (270 - u) % 360), e.appendChild(a)
                        }
                        return 1
                    }, I = function (e, n) {
                        this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = t.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
                    }, M = t.el;
                    I.prototype = M, M.constructor = I, M.transform = function (e) {
                        if (null == e) return this._.transform;
                        var r, i = this.paper._viewBoxShift,
                            o = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d;
                        i && (r = e = n(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, o + e);
                        var a, s = this.matrix.clone(), c = this.skew, f = this.node,
                            u = ~n(this.attrs.fill).indexOf("-"), l = !n(this.attrs.fill).indexOf("url(");
                        if (s.translate(1, 1), l || u || "image" == this.type) if (c.matrix = "1 0 0 1", c.offset = "0 0", a = s.split(), u && a.noRotation || !a.isSimple) {
                            f.style.filter = s.toFilter();
                            var p = this.getBBox(), b = this.getBBox(1), g = p.x - b.x, y = p.y - b.y;
                            f.coordorigin = g * -v + h + y * -v, x(this, 1, 1, g, y, 0)
                        } else f.style.filter = d, x(this, a.scalex, a.scaley, a.dx, a.dy, a.rotate); else f.style.filter = d, c.matrix = n(s), c.offset = s.offset();
                        return null !== r && (this._.transform = r, t._extractTransform(this, r)), this
                    }, M.rotate = function (t, e, i) {
                        if (this.removed) return this;
                        if (null != t) {
                            if ((t = n(t).split(u)).length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (e = i), null == e || null == i) {
                                var o = this.getBBox(1);
                                e = o.x + o.width / 2, i = o.y + o.height / 2
                            }
                            return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, i]])), this
                        }
                    }, M.translate = function (t, e) {
                        return this.removed ? this : ((t = n(t).split(u)).length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]])), this)
                    }, M.scale = function (t, e, i, o) {
                        if (this.removed) return this;
                        if ((t = n(t).split(u)).length - 1 && (e = r(t[1]), i = r(t[2]), o = r(t[3]), isNaN(i) && (i = null), isNaN(o) && (o = null)), t = r(t[0]), null == e && (e = t), null == o && (i = o), null == i || null == o) var a = this.getBBox(1);
                        return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([["s", t, e, i, o]])), this._.dirtyT = 1, this
                    }, M.hide = function () {
                        return !this.removed && (this.node.style.display = "none"), this
                    }, M.show = function () {
                        return !this.removed && (this.node.style.display = d), this
                    }, M.auxGetBBox = t.el.getBBox, M.getBBox = function () {
                        var t = this.auxGetBBox();
                        if (this.paper && this.paper._viewBoxShift) {
                            var e = {}, n = 1 / this.paper._viewBoxShift.scale;
                            return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= n, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= n, e.width = t.width * n, e.height = t.height * n, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e
                        }
                        return t
                    }, M._getBBox = function () {
                        return this.removed ? {} : {
                            x: this.X + (this.bbx || 0) - this.W / 2,
                            y: this.Y - this.H,
                            width: this.W,
                            height: this.H
                        }
                    }, M.remove = function () {
                        if (!this.removed && this.node.parentNode) {
                            for (var e in this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                            this.removed = !0
                        }
                    }, M.attr = function (n, r) {
                        if (this.removed) return this;
                        if (null == n) {
                            var i = {};
                            for (var o in this.attrs) this.attrs[e](o) && (i[o] = this.attrs[o]);
                            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                        }
                        if (null == r && t.is(n, "string")) {
                            if (n == f && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                            for (var a = n.split(u), s = {}, c = 0, h = a.length; c < h; c++) (n = a[c]) in this.attrs ? s[n] = this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? s[n] = this.paper.customAttributes[n].def : s[n] = t._availableAttrs[n];
                            return h - 1 ? s : s[a[0]]
                        }
                        if (this.attrs && null == r && t.is(n, "array")) {
                            for (s = {}, c = 0, h = n.length; c < h; c++) s[n[c]] = this.attr(n[c]);
                            return s
                        }
                        var d;
                        for (var p in null != r && ((d = {})[n] = r), null == r && t.is(n, "object") && (d = n), d) l("raphael.attr." + p + "." + this.id, this, d[p]);
                        if (d) {
                            for (p in this.paper.customAttributes) if (this.paper.customAttributes[e](p) && d[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                                var b = this.paper.customAttributes[p].apply(this, [].concat(d[p]));
                                for (var g in this.attrs[p] = d[p], b) b[e](g) && (d[g] = b[g])
                            }
                            d.text && "text" == this.type && (this.textpath.string = d.text), S(this, d)
                        }
                        return this
                    }, M.toFront = function () {
                        return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
                    }, M.toBack = function () {
                        return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
                    }, M.insertAfter = function (e) {
                        return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
                    }, M.insertBefore = function (e) {
                        return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
                    }, M.blur = function (e) {
                        var n = this.node.runtimeStyle, r = n.filter;
                        return r = r.replace(g, d), 0 != +e ? (this.attrs.blur = e, n.filter = r + h + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")", n.margin = t.format("-{0}px 0 0 -{0}px", o(+e || 1.5))) : (n.filter = r, n.margin = 0, delete this.attrs.blur), this
                    }, t._engine.path = function (t, e) {
                        var n = C("shape");
                        n.style.cssText = m, n.coordsize = v + h + v, n.coordorigin = e.coordorigin;
                        var r = new I(n, e), i = {fill: "none", stroke: "#000"};
                        t && (i.path = t), r.type = "path", r.path = [], r.Path = d, S(r, i), e.canvas && e.canvas.appendChild(n);
                        var o = C("skew");
                        return o.on = !0, n.appendChild(o), r.skew = o, r.transform(d), r
                    }, t._engine.rect = function (e, n, r, i, o, a) {
                        var s = t._rectPath(n, r, i, o, a), c = e.path(s), f = c.attrs;
                        return c.X = f.x = n, c.Y = f.y = r, c.W = f.width = i, c.H = f.height = o, f.r = a, f.path = s, c.type = "rect", c
                    }, t._engine.ellipse = function (t, e, n, r, i) {
                        var o = t.path();
                        return o.attrs, o.X = e - r, o.Y = n - i, o.W = 2 * r, o.H = 2 * i, o.type = "ellipse", S(o, {
                            cx: e,
                            cy: n,
                            rx: r,
                            ry: i
                        }), o
                    }, t._engine.circle = function (t, e, n, r) {
                        var i = t.path();
                        return i.attrs, i.X = e - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", S(i, {
                            cx: e,
                            cy: n,
                            r: r
                        }), i
                    }, t._engine.image = function (e, n, r, i, o, a) {
                        var s = t._rectPath(r, i, o, a), c = e.path(s).attr({stroke: "none"}), u = c.attrs, l = c.node,
                            h = l.getElementsByTagName(f)[0];
                        return u.src = n, c.X = u.x = r, c.Y = u.y = i, c.W = u.width = o, c.H = u.height = a, u.path = s, c.type = "image", h.parentNode == l && l.removeChild(h), h.rotate = !0, h.src = n, h.type = "tile", c._.fillpos = [r, i], c._.fillsize = [o, a], l.appendChild(h), x(c, 1, 1, 0, 0, 0), c
                    }, t._engine.text = function (e, r, i, a) {
                        var s = C("shape"), c = C("path"), f = C("textpath");
                        r = r || 0, i = i || 0, a = a || "", c.v = t.format("m{0},{1}l{2},{1}", o(r * v), o(i * v), o(r * v) + 1), c.textpathok = !0, f.string = n(a), f.on = !0, s.style.cssText = m, s.coordsize = v + h + v, s.coordorigin = "0 0";
                        var u = new I(s, e), l = {fill: "#000", stroke: "none", font: t._availableAttrs.font, text: a};
                        u.shape = s, u.path = c, u.textpath = f, u.type = "text", u.attrs.text = n(a), u.attrs.x = r, u.attrs.y = i, u.attrs.w = 1, u.attrs.h = 1, S(u, l), s.appendChild(f), s.appendChild(c), e.canvas.appendChild(s);
                        var p = C("skew");
                        return p.on = !0, s.appendChild(p), u.skew = p, u.transform(d), u
                    }, t._engine.setSize = function (e, n) {
                        var r = this.canvas.style;
                        return this.width = e, this.height = n, e == +e && (e += "px"), n == +n && (n += "px"), r.width = e, r.height = n, r.clip = "rect(0 " + e + " " + n + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
                    }, t._engine.setViewBox = function (e, n, r, i, o) {
                        t.eve("raphael.setViewBox", this, this._viewBox, [e, n, r, i, o]);
                        var a, s, c = this.getSize(), f = c.width, u = c.height;
                        return o && (s = f / r, r * (a = u / i) < f && (e -= (f - r * a) / 2 / a), i * s < u && (n -= (u - i * s) / 2 / s)), this._viewBox = [e, n, r, i, !!o], this._viewBoxShift = {
                            dx: -e,
                            dy: -n,
                            scale: c
                        }, this.forEach(function (t) {
                            t.transform("...")
                        }), this
                    }, t._engine.initWin = function (t) {
                        var e = t.document;
                        e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                        try {
                            !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), C = function (t) {
                                return e.createElement("<rvml:" + t + ' class="rvml">')
                            }
                        } catch (t) {
                            C = function (t) {
                                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                            }
                        }
                    }, t._engine.initWin(t._g.win), t._engine.create = function () {
                        var e = t._getContainer.apply(0, arguments), n = e.container, r = e.height, i = e.width,
                            o = e.x, a = e.y;
                        if (!n) throw new Error("VML container not found.");
                        var s = new t._Paper, c = s.canvas = t._g.doc.createElement("div"), f = c.style;
                        return o = o || 0, a = a || 0, i = i || 512, r = r || 342, s.width = i, s.height = r, i == +i && (i += "px"), r == +r && (r += "px"), s.coordsize = 216e5 + h + 216e5, s.coordorigin = "0 0", s.span = t._g.doc.createElement("span"), s.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", c.appendChild(s.span), f.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 1 == n ? (t._g.doc.body.appendChild(c), f.left = o + "px", f.top = a + "px", f.position = "absolute") : n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c), s.renderfix = function () {
                        }, s
                    }, t.prototype.clear = function () {
                        t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                    }, t.prototype.remove = function () {
                        for (var e in t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                        return !0
                    };
                    var T = t.st;
                    for (var R in M) M[e](R) && !T[e](R) && (T[R] = function (t) {
                        return function () {
                            var e = arguments;
                            return this.forEach(function (n) {
                                n[t].apply(n, e)
                            })
                        }
                    }(R))
                }
            }.apply(e, r)) || (t.exports = i)
        }])
    }, t.exports = r()
}, , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = s(i), a = s(n(200));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "render", value: function () {
                var t = this.props, e = t.items, n = t.data, r = t.dispatch, i = t.menuId, s = [];
                return e.forEach(function (t, e) {
                    s.push(o.default.createElement(a.default, {item: t, key: e, data: n, dispatch: r}))
                }), o.default.createElement("div", {id: i}, o.default.createElement("ul", {
                    className: "dropdown-menu",
                    style: {color: "rgb(11, 54, 106)"}
                }, s))
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = s(i), a = s(n(7));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e(t) {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = this.props, e = t.item, n = t.data, r = t.dispatch;
                if (e.click) {
                    var i = a.default.findDOMNode(this);
                    $(i).click(function (t) {
                        e.click(n, r)
                    })
                }
            }
        }, {
            key: "render", value: function () {
                var t = this.props.item;
                return o.default.createElement("li", null, o.default.createElement("a", {href: "###"}, o.default.createElement("i", {
                    className: t.icon,
                    style: {color: "#00A0E8"}
                }), " ", t.name))
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = s(i), a = s(n(196));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "render", value: function () {
                var t = this, e = this.props, n = e.children, r = e.dispatch, i = e.selectDir, s = [];
                return n.forEach(function (e, n) {
                    s.push(o.default.createElement(a.default, {
                        data: e,
                        key: n,
                        dispatch: r,
                        selectDir: i,
                        expandLevel: t.props.expandLevel
                    }))
                }), o.default.createElement("ul", {style: {marginLeft: "-18px"}}, s)
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    (t.exports = n(18)(!1)).push([t.i, ".tree {\r\n}\r\n.tree li {\r\n    list-style-type:none;\r\n    margin:0;\r\n    padding:2px 5px 0 0px;\r\n    position:relative;\r\n    line-height: 1;\r\n}\r\n.tree li::before, .tree li::after {\r\n    content:'';\r\n    left:-35px;\r\n    position:absolute;\r\n    right:auto\r\n}\r\n.tree li::before {\r\n    border-left:1px solid #999;\r\n    bottom:50px;\r\n    height:100%;\r\n    top:-6px;\r\n    width:1px;\r\n}\r\n.tree li div li::before {\r\n    border:none;\r\n}\r\n.tree li::after {\r\n    border-top:1px solid #999;\r\n    height:20px;\r\n    top:23px;\r\n    width:15px\r\n}\r\n.tree li div li::after {\r\n    border:none\r\n}\r\n.tree li {\r\n    margin-top:-5px;\r\n}\r\n.tree li span {\r\n    border:1px solid transparent;\r\n    display:inline-block;\r\n    padding:2px 2px;\r\n    margin:10px 0px 5px -20px;\r\n    cursor:pointer;\r\n    white-space: nowrap;\r\n}\r\n.tree li.parent_li>span {\r\n}\r\n.tree>ul>li::before, .tree>ul>li::after {\r\n    border:0\r\n}\r\n.tree li:last-child::before {\r\n    height:30px;\r\n}\r\n.tree-active{\r\n    border:solid 1px #2196F3 !important\r\n}", ""])
}, function (t, e, n) {
    var r = n(202);
    "string" == typeof r && (r = [[t.i, r, ""]]), n(17)(r, {}), r.locals && (t.exports = r.locals)
}, , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = n(5), o = h(i), a = h(n(7)), s = h(n(83)), c = h(n(46)), f = l(n(19)), u = l(n(34));

    function l(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function h(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var d = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {title: ""}, n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = this;
                f.eventEmitter.on(f.OPEN_VERSION_SELECT_DIALOG, function (e) {
                    var n = e.file;
                    t.callback = e.callback, t.file = n, u.loadFileVersions(n, function (t) {
                        $(a.default.findDOMNode(this)).modal("show"), this.setState({
                            data: t,
                            title: "选择文件[" + n + "]的版本"
                        })
                    }.bind(t))
                }), f.eventEmitter.on(f.HIDE_VERSION_SELECT_DIALOG, function () {
                    $(a.default.findDOMNode(t)).modal("hide")
                }), $(a.default.findDOMNode(this)).modal("hide")
            }
        }, {
            key: "componentWillUnmount", value: function () {
                f.eventEmitter.removeAllListeners(f.OPEN_VERSION_SELECT_DIALOG), f.eventEmitter.removeAllListeners(f.HIDE_VERSION_SELECT_DIALOG)
            }
        }, {
            key: "render", value: function () {
                var t = {
                    width: "75px",
                    operations: [{
                        label: "选择该版本",
                        icon: "rf rf-select",
                        style: {fontSize: "18px", color: "#337ab7", padding: "0px 4px", cursor: "pointer"},
                        click: function (t, e) {
                            this.callback(this.file, e.name), f.eventEmitter.emit(f.HIDE_VERSION_SELECT_DIALOG), f.eventEmitter.emit(f.HIDE_KNOWLEDGE_TREE_DIALOG)
                        }.bind(this)
                    }]
                }, e = o.default.createElement(s.default, {
                    headers: [{
                        id: "v-name",
                        name: "name",
                        label: "版本名称",
                        filterable: !0,
                        width: "100px"
                    }, {id: "v-comment", name: "comment", label: "版本描述"}, {
                        id: "v-createUser",
                        name: "createUser",
                        label: "创建人",
                        filterable: !0,
                        width: "140px"
                    }, {
                        id: "v-createDate",
                        name: "createDate",
                        label: "创建日期",
                        width: "140px",
                        dateFormat: "yyyy-MM-dd HH:mm:ss"
                    }], operationConfig: t, rows: this.state.data || []
                });
                return o.default.createElement(c.default, {title: this.state.title, body: e, buttons: [], large: !0})
            }
        }]), e
    }();
    e.default = d
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }();
    n(203), n(47);
    var i = s(n(196)), o = n(5), a = s(o);

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, o.Component), r(e, [{
            key: "render", value: function () {
                var t = this.props, e = t.data, n = t.selectDir;
                return e ? (function t(e, n) {
                    e._level = n++;
                    var r = e.children;
                    r && r.forEach(function (e, r) {
                        t(e, n)
                    })
                }(e, 1), a.default.createElement("ul", {style: {paddingLeft: "20px"}}, a.default.createElement(i.default, {
                    data: e,
                    selectDir: n,
                    expandLevel: this.props.expandLevel
                }))) : a.default.createElement("ul", null)
            }
        }]), e
    }();
    e.default = c, c.defaultProps = {expandLevel: 3}
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }();
    n(47);
    var i = n(5), o = h(i), a = (h(n(7)), h(n(46))), s = h(n(207)), c = l(n(34)), f = l(n(19)), u = h(n(206));

    function l(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function h(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var d = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {title: "选择资源"}, n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.Component), r(e, [{
            key: "componentDidMount", value: function () {
                var t = this;
                f.eventEmitter.on(f.OPEN_KNOWLEDGE_TREE_DIALOG, function (e) {
                    t._config = e, t.callback = e.callback, c.loadResourceTreeData({
                        project: e.project,
                        forLib: e.forLib,
                        fileType: e.fileType
                    }, function (t) {
                        this.setState({
                            data: t,
                            fileType: e.fileType
                        }), $("#_knowledge_tree_dialog_container").children(".modal").modal("show")
                    }.bind(t))
                }), f.eventEmitter.on(f.HIDE_KNOWLEDGE_TREE_DIALOG, function () {
                    $("#_knowledge_tree_dialog_container").children(".modal").modal("hide")
                }), f.eventEmitter.on(f.TREE_NODE_CLICK, function (e) {
                    t.currentNodeData = e
                }), f.eventEmitter.on(f.TREE_DIR_NODE_CLICK, function (e) {
                    t.currentNodeData = e
                })
            }
        }, {
            key: "search", value: function () {
                var t = $(".resSearchText").val(), e = this._config;
                c.loadResourceTreeData({
                    project: e.project,
                    forLib: e.forLib,
                    fileType: e.fileType,
                    searchFileName: t
                }, function (t) {
                    this.setState({data: t, fileType: e.fileType})
                }.bind(this))
            }
        }, {
            key: "componentWillUnmount", value: function () {
                f.eventEmitter.removeAllListeners(f.OPEN_KNOWLEDGE_TREE_DIALOG), f.eventEmitter.removeAllListeners(f.HIDE_KNOWLEDGE_TREE_DIALOG), f.eventEmitter.removeAllListeners(f.TREE_NODE_CLICK)
            }
        }, {
            key: "render", value: function () {
                var t = o.default.createElement("div", {
                    className: "tree",
                    style: {marginLeft: "10px"}
                }, o.default.createElement("div", null, o.default.createElement("input", {
                    type: "text",
                    className: "form-control resSearchText",
                    placeholder: "请输入要查询的文件名...",
                    style: {display: "inline-block", width: "220px"}
                }), o.default.createElement("a", {
                    href: "###",
                    onClick: this.search.bind(this),
                    style: {margin: "6px", fontSize: "16px"}
                }, o.default.createElement("i", {className: "glyphicon glyphicon-search"}))), o.default.createElement(s.default, {
                    data: this.state.data,
                    selectDir: this.props.selectDir
                })), e = (this.state.fileType, [{
                    name: "确定",
                    className: "btn btn-danger",
                    icon: "glyphicon glyphicon-floppy-saved",
                    click: function () {
                        this.currentNodeData ? (this.callback(this.currentNodeData.fullPath, "LATEST"), f.eventEmitter.emit(f.HIDE_KNOWLEDGE_TREE_DIALOG)) : bootbox.alert("请先选择一个文件")
                    }.bind(this)
                }]);
                return e.push({
                    name: "选择版本",
                    className: "btn btn-primary",
                    icon: "glyphicon glyphicon-hand-up",
                    click: function () {
                        this.currentNodeData ? f.eventEmitter.emit(f.OPEN_VERSION_SELECT_DIALOG, {
                            file: this.currentNodeData.fullPath,
                            callback: this.callback
                        }) : bootbox.alert("请先选择一个文件")
                    }.bind(this)
                }), o.default.createElement("div", null, o.default.createElement(u.default, null), o.default.createElement("div", {id: "_knowledge_tree_dialog_container"}, o.default.createElement(a.default, {
                    title: this.state.title,
                    body: t,
                    buttons: e
                })))
            }
        }]), e
    }();
    e.default = d
}, function (t, e, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    t.exports = function () {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                return e[t]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function (t, e) {
        for (var n, a, s = function (t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }(t), c = 1; c < arguments.length; c++) {
            for (var f in n = Object(arguments[c])) i.call(n, f) && (s[f] = n[f]);
            if (r) {
                a = r(n);
                for (var u = 0; u < a.length; u++) o.call(n, a[u]) && (s[a[u]] = n[a[u]])
            }
        }
        return s
    }
}, function (t, e, n) {
    (function (r) {
        var i;
        !function (o) {
            "use strict";
            var a, s, c, f;
            o ? function () {
                var t = o.crypto || o.msCrypto;
                if (!a && t && t.getRandomValues) try {
                    var e = new Uint8Array(16);
                    f = a = function () {
                        return t.getRandomValues(e), e
                    }, a()
                } catch (t) {
                }
                if (!a) {
                    var n = new Array(16);
                    s = a = function () {
                        for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), n[e] = t >>> ((3 & e) << 3) & 255;
                        return n
                    }, "undefined" != typeof console && console.warn
                }
            }() : function () {
                try {
                    var t = n(177).randomBytes;
                    c = a = t && function () {
                        return t(16)
                    }, a()
                } catch (t) {
                }
            }();
            for (var u = "function" == typeof r ? r : Array, l = [], h = {}, d = 0; d < 256; d++) l[d] = (d + 256).toString(16).substr(1), h[l[d]] = d;

            function p(t, e) {
                var n = e || 0, r = l;
                return r[t[n++]] + r[t[n++]] + r[t[n++]] + r[t[n++]] + "-" + r[t[n++]] + r[t[n++]] + "-" + r[t[n++]] + r[t[n++]] + "-" + r[t[n++]] + r[t[n++]] + "-" + r[t[n++]] + r[t[n++]] + r[t[n++]] + r[t[n++]] + r[t[n++]] + r[t[n++]]
            }

            var b = a(), g = [1 | b[0], b[1], b[2], b[3], b[4], b[5]], y = 16383 & (b[6] << 8 | b[7]), m = 0, v = 0;

            function A(t, e, n) {
                var r = e && n || 0;
                "string" == typeof t && (e = "binary" === t ? new u(16) : null, t = null);
                var i = (t = t || {}).random || (t.rng || a)();
                if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) for (var o = 0; o < 16; o++) e[r + o] = i[o];
                return e || p(i)
            }

            var w = A;
            w.v1 = function (t, e, n) {
                var r = e && n || 0, i = e || [], o = null != (t = t || {}).clockseq ? t.clockseq : y,
                    a = null != t.msecs ? t.msecs : (new Date).getTime(), s = null != t.nsecs ? t.nsecs : v + 1,
                    c = a - m + (s - v) / 1e4;
                if (c < 0 && null == t.clockseq && (o = o + 1 & 16383), (c < 0 || a > m) && null == t.nsecs && (s = 0), s >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                m = a, v = s, y = o;
                var f = (1e4 * (268435455 & (a += 122192928e5)) + s) % 4294967296;
                i[r++] = f >>> 24 & 255, i[r++] = f >>> 16 & 255, i[r++] = f >>> 8 & 255, i[r++] = 255 & f;
                var u = a / 4294967296 * 1e4 & 268435455;
                i[r++] = u >>> 8 & 255, i[r++] = 255 & u, i[r++] = u >>> 24 & 15 | 16, i[r++] = u >>> 16 & 255, i[r++] = o >>> 8 | 128, i[r++] = 255 & o;
                for (var l = t.node || g, h = 0; h < 6; h++) i[r + h] = l[h];
                return e || p(i)
            }, w.v4 = A, w.parse = function (t, e, n) {
                var r = e && n || 0, i = 0;
                for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function (t) {
                    i < 16 && (e[r + i++] = h[t])
                }); i < 16;) e[r + i++] = 0;
                return e
            }, w.unparse = p, w.BufferClass = u, w._rng = a, w._mathRNG = s, w._nodeRNG = c, w._whatwgRNG = f, void 0 !== t && t.exports ? t.exports = w : void 0 === (i = function () {
                return w
            }.call(e, n, e, t)) || (t.exports = i)
        }("undefined" != typeof window ? window : null)
    }).call(this, n(2).Buffer)
}, function (t, e, n) {
    var r;
    !function () {
        "use strict";
        var i = function () {
            var t, e, n = [], r = -1, i = 0, o = !1;
            return e = function (t, e) {
                return t && "function" == typeof t[e] ? (o = !0, t[e](), o = !1, this) : this
            }, {
                add: function (e) {
                    return o ? this : (n.splice(r + 1, n.length - r), n.push(e), i && n.length > i && (0, s = -(i + 1), (a = n).splice(0, !s || 1 + s - 0 + (!(s < 0 ^ !0) && (s < 0 || -1) * a.length)), a.length), r = n.length - 1, t && t(), this);
                    var a, s
                }, setCallback: function (e) {
                    t = e
                }, undo: function () {
                    var i = n[r];
                    return i ? (e(i, "undo"), r -= 1, t && t(), this) : this
                }, redo: function () {
                    var i = n[r + 1];
                    return i ? (e(i, "redo"), r += 1, t && t(), this) : this
                }, clear: function () {
                    var e = n.length;
                    n = [], r = -1, t && e > 0 && t()
                }, hasUndo: function () {
                    return -1 !== r
                }, hasRedo: function () {
                    return r < n.length - 1
                }, getCommands: function () {
                    return n
                }, getIndex: function () {
                    return r
                }, setLimit: function (t) {
                    i = t
                }
            }
        };
        void 0 === (r = function () {
            return i
        }.call(e, n, e, t)) || (t.exports = r)
    }()
}, function (t, e, n) {
    n(191), n(190), n(189), n(188), n(187), n(186), n(185), n(184), n(183), n(182), n(181), n(180)
}, , , , , , , , , , function (t, e, n) {
    "use strict";
    urule.SimpleValue = function (t, e) {
        this.container = $("<span>"), this.valueContainer = generateContainer(), this.valueContainer.css({color: "rgb(180,95,4)"}), this.editor = $('<input type=\'text\' class="form-control rule-text-editor" style="height: 22px;">');
        var n = this;
        this.container.append(this.valueContainer).append(this.editor), this.editor.blur(function () {
            n.editor.hide();
            var t = n.editor.prop("value");
            "" != t && URule.setDomContent(n.valueContainer, t), n.valueContainer.show(), $(this).trigger("DOMSubtreeModified"), window._setDirty()
        }).mousedown(function (t) {
            t.stopPropagation()
        }).keydown(function (t) {
            t.stopPropagation()
        }), n.editor.hide(), this.valueContainer.prop("innerText", "请输入值"), this.valueContainer.click(function () {
            n.valueContainer.hide();
            var t = n.container.parent(), e = 120;
            if (t && t.parent() && t.parent().parent()) {
                var r = (t = t.parent().parent()).prop("class");
                r && "htMiddle htDimmed current" == r && (e = t.width() - 20)
            }
            n.editor.css({width: e}), n.editor.css({display: "inline"}), n.editor.focus(), $(this).trigger("DOMSubtreeModified")
        }), this.arithmetic = t, this.container.append(t.getContainer()), this.initData(e)
    }, urule.SimpleValue.prototype.getDisplayContainer = function () {
        var t = $("<span>" + this.editor.prop("value") + "</span>");
        if (this.arithmetic) {
            var e = this.arithmetic.getDisplayContainer();
            e && t.append(e)
        }
        return t
    }, urule.SimpleValue.prototype.initData = function (t) {
        if (t) {
            var e = t.content;
            URule.setDomContent(this.valueContainer, e), this.editor.prop("value", e), this.arithmetic && this.arithmetic.initData(t.arithmetic)
        }
    }, urule.SimpleValue.prototype.getValue = function () {
        var t = this.editor.prop("value");
        return (t = (t = (t = (t = t.replace(new RegExp("&", "gm"), "&amp;")).replace(new RegExp("<", "gm"), "&lt;")).replace(new RegExp(">", "gm"), "&gt;")).replace(new RegExp("'", "gm"), "&apos;")).replace(new RegExp('"', "gm"), "&quot;")
    }, urule.SimpleValue.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.FunctionValue = function (t, e, n) {
        this.arithmetic = t, this.container = $("<span>"), this.rule = n, this.leftParn = $("<span style='color:blue'>(</span>"), this.rightParn = $("<span style='color:blue'>)</span>"), this.label = generateContainer(), this.container.append(this.label), this.label.css({color: "#008080"}), this.functionContainer = $("<span></span>"), this.container.append(this.functionContainer), URule.setDomContent(this.label, "请选择函数"), t && this.container.append(t.getContainer()), e && (this.setFunction(e), t && t.initData(e.arithmetic)), window._FunctionValueArray.push(this), this.initMenu()
    }, urule.FunctionValue.prototype.getDisplayContainer = function () {
        var t = $("<span>" + this.functionName + "</span>");
        if (this.arithmetic) {
            var e = this.arithmetic.getDisplayContainer();
            e && t.append(e)
        }
        return t
    }, urule.FunctionValue.prototype.toXml = function () {
        if (!this.functionLabel) throw"请选择函数";
        if (!this.functionName) throw"请选择函数";
        return ' function-label="' + this.functionLabel + '"' + ' function-name="' + this.functionName + '"'
    }, urule.FunctionValue.prototype.initMenu = function (t) {
        var e, n, r, i = window._uruleEditorFunctionLibraries;
        t && (i = t), e = this, n = function (t) {
            e.setFunction({parameter: t.parameter, label: t.label, name: t.name})
        }, r = {menuItems: []}, $.each(i || [], function (t, e) {
            r.menuItems.push({name: e.name, label: e.label, parameter: e.argument, onClick: n})
        }), e.menu ? e.menu.setConfig(r) : e.menu = new URule.menu.Menu(r), this.label.click(function (t) {
            e.menu.show(t)
        })
    }, urule.FunctionValue.prototype.initData = function (t) {
        t && this.setFunction(t)
    }, urule.FunctionValue.prototype.setFunction = function (t) {
        window._setDirty(), this.functionContainer.empty(), URule.setDomContent(this.label, t.label), this.functionContainer.append(this.leftParn), this.functionLabel = t.label, this.functionName = t.name, this.parameter = new urule.FunctionParameter(this.rule), this.parameter.initData(t.parameter), this.functionContainer.append(this.parameter.getContainer()), this.functionContainer.append(this.rightParn)
    }, urule.FunctionValue.prototype.getFirstParameter = function () {
        return this.firstParameter
    }, urule.FunctionValue.prototype.getParameter = function () {
        return this.parameter
    }, urule.FunctionValue.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.FunctionParameter = function (t) {
        this.container = $("<span>"), this.nameContainer = $("<span>"), this.rule = t, this.container.append(this.nameContainer), this.nameContainer.css({color: "gray"})
    }, urule.FunctionParameter.prototype.initData = function (t) {
        if (t) {
            this.name = t.name, URule.setDomContent(this.nameContainer, this.name + ":"), (t.needProperty || t.property) && (this.functionProperty = new urule.FunctionProperty, this.functionProperty.setProperty({
                name: t.property,
                label: t.propertyLabel
            })), this.inputType = new urule.InputType(null, null, this.functionProperty, this.rule);
            var e = t.objectParameter;
            if (e) {
                var n = e.valueType;
                this.inputType.setValueType(n, e)
            }
            this.container.append(this.inputType.getContainer()), this.functionProperty && (this.container.append($("<span>，</span>")), this.container.append($("<span style='color:gray'>属性:</span>")), this.container.append(this.functionProperty.getContainer()))
        }
    }, urule.FunctionParameter.prototype.toXml = function () {
        if (!this.name) return "";
        var t = "<function-parameter ";
        return t += 'name="' + this.name + '" ', this.functionProperty && (t += this.functionProperty.toXml()), t += ">", (t += this.inputType.toXml()) + "</function-parameter>"
    }, urule.FunctionParameter.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.FunctionProperty = function () {
        this.container = $("<span>"), this.label = generateContainer(), this.container.append(this.label), URule.setDomContent(this.label, "选择属性"), this.label.css({color: "#004C85"})
    }, urule.FunctionProperty.prototype.toXml = function () {
        if (!this.variableName) throw"请选择函数属性";
        return 'property-name="' + this.variableName + '"' + ' property-label="' + this.variableLabel + '"'
    }, urule.FunctionProperty.prototype.initMenu = function (t) {
        if (t) {
            var e = this, n = function (t) {
                e.setProperty({name: t.name, label: t.label, datatype: t.type})
            }, r = {menuItems: []};
            $.each(t, function (t, e) {
                r.menuItems.push({name: e.name, label: e.label, datatype: e.type, onClick: n})
            }), this.menu = new URule.menu.Menu(r), this.label.click(function (t) {
                e.menu.show(t)
            })
        }
    }, urule.FunctionProperty.prototype.setProperty = function (t) {
        window._setDirty(), this.variableName = t.name, this.variableLabel = t.label, URule.setDomContent(this.label, this.variableLabel)
    }, urule.FunctionProperty.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.MethodValue = function (t, e) {
        this.arithmetic = t, this.container = $("<span>"), this.rightParn = $("<span style='color:blue'>]</span>"), this.label = generateContainer(), this.fetchLength = !1, this.uppercase = !1, this.lowercase = !1, this.fetchSize = !1, this.container.append(this.label), this.label.css({color: "blue"}), this.actionContainer = $("<span></span>"), this.container.append(this.actionContainer), URule.setDomContent(this.label, "请选择方法"), t && this.container.append(t.getContainer()), e && (this.setAction(e), t.initData(e.arithmetic)), window._ActionTypeArray.push(this), this.initMenu()
    }, urule.MethodValue.prototype.initMenu = function (t) {
        var e, n, r, i = window._uruleEditorActionLibraries;
        t && (i = t), e = this, n = function (t) {
            var n = t.parent.parent;
            e.setAction({
                beanLabel: n.label,
                beanId: n.name,
                methodLabel: t.label,
                methodName: t.name,
                parameters: t.parameters
            })
        }, r = {menuItems: []}, $.each(i || [], function (t, e) {
            var i = e.springBeans || [];
            $.each(i, function (t, e) {
                var i = {name: e.id, label: e.name}, o = e.methods || [];
                $.each(o, function (t, e) {
                    i.subMenu || (i.subMenu = {menuItems: []}), i.subMenu.menuItems.push({
                        name: e.methodName,
                        label: e.name,
                        parameters: e.parameters,
                        onClick: n
                    })
                }), r.menuItems.push(i)
            })
        }), e.menu ? e.menu.setConfig(r) : e.menu = new URule.menu.Menu(r), this.label.click(function (t) {
            e.menu.show(t)
        })
    }, urule.MethodValue.prototype.setAction = function (t) {
        window._setDirty(), this.action && this.action.getContainer().remove(), this.action = new urule.MethodAction, URule.setDomContent(this.label, "["), this.actionContainer.append(this.action.getContainer()), this.actionContainer.append(this.rightParn), this.action.initData(t)
    }, urule.MethodValue.prototype.getDisplayContainer = function () {
        var t = "";
        this.action && (this.action.name, t = this.action.methodLabel);
        var e = $("<span>" + t + "</span>");
        if (this.arithmetic) {
            var n = this.arithmetic.getDisplayContainer();
            n && e.append(n)
        }
        return e
    }, urule.MethodValue.prototype.toXml = function () {
        if (!this.action.bean || "" == this.action.name) throw"执行方法不能为空！";
        var t = 'bean-name="' + this.action.bean + '"';
        return t += ' bean-label="' + this.action.name + '"', (t += ' method-name="' + this.action.method + '"') + ' method-label="' + this.action.methodLabel + '"'
    }, urule.MethodValue.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.ParameterValue = function (t, e, n) {
        this.arithmetic = t, this.container = $("<span>"), this.label = generateContainer(), this.container.append(this.label), this.label.css({color: "#6b3db0"}), URule.setDomContent(this.label, "请选择参数"), t && this.container.append(t.getContainer()), e && this.initData(e), window._ParameterValueArray.push(this), this.act = n, this.initMenu()
    }, urule.ParameterValue.prototype.getDisplayContainer = function () {
        var t = $("<span>参数." + this.parameterLabel + "</span>");
        if (this.arithmetic) {
            var e = this.arithmetic.getDisplayContainer();
            e && t.append(e)
        }
        return t
    }, urule.ParameterValue.prototype.matchAct = function (t) {
        return !this.act || t.indexOf(this.act) > -1
    }, urule.ParameterValue.prototype.registerClick = function (t) {
        this.callback = t
    }, urule.ParameterValue.prototype.initMenu = function (t) {
        var e, n, r, i = window._uruleEditorParameterLibraries;
        t && (i = t), i && (e = this, n = function (t) {
            var n = {variableName: t.name, variableLabel: t.label, datatype: t.datatype};
            e.setValue(n), e.callback && (n.type = "parameter", e.callback(n))
        }, r = {menuItems: []}, $.each(i, function (t, i) {
            $.each(i || [], function (t, i) {
                if (e.matchAct(i.act)) {
                    var o = {name: i.name, label: i.label, datatype: i.type, act: i.act, onClick: n};
                    r.menuItems.push(o)
                }
            })
        }), e.menu ? e.menu.setConfig(r) : e.menu = new URule.menu.Menu(r), this.label.click(function (t) {
            e.menu.show(t)
        }))
    }, urule.ParameterValue.prototype.setValue = function (t) {
        this.parameterName = t.variableName, this.parameterLabel = t.variableLabel, this.datatype = t.datatype, URule.setDomContent(this.label, "参数." + this.parameterLabel), window._setDirty()
    }, urule.ParameterValue.prototype.initData = function (t) {
        this.setValue(t), this.arithmetic && this.arithmetic.initData(t.arithmetic)
    }, urule.ParameterValue.prototype.toXml = function () {
        if (!this.parameterLabel || "" == this.parameterLabel) throw"参数不能为空！";
        return ' var-category="参数" var="' + this.parameterName + '" var-label="' + this.parameterLabel + '" datatype="' + this.datatype + '"'
    }, urule.ParameterValue.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.MethodParameter = function (t) {
        this.inputType = new urule.InputType(null, null, null, t), this.container = this.inputType.getContainer()
    }, urule.MethodParameter.prototype.initData = function (t) {
        if (t && (this.name = t.name, this.type = t.type, t.value)) {
            var e = t.value;
            e.valueType && this.inputType.setValueType(e.valueType, e)
        }
    }, urule.MethodParameter.prototype.toXml = function () {
        var t = '<parameter name="' + this.name + '" type="' + this.type + '">';
        return (t += this.inputType.toXml()) + "</parameter>"
    }, urule.MethodParameter.prototype.getContainer = function () {
        return this.container
    }, urule.MethodParameter.prototype.getInputType = function () {
        return this.inputType
    }
}, function (t, e, n) {
    "use strict";
    urule.Paren = function (t) {
        this.container = $("<span>"), this.leftParen = $("<span>(</span>"), this.leftParen.css({
            color: "#000",
            fontWeight: "blod",
            "padding-left": "3px",
            "padding-right": "3px"
        }), this.rightParen = $("<span>)</span>"), this.rightParen.css({
            color: "#000",
            fontWeight: "blod",
            "padding-left": "3px",
            "padding-right": "3px"
        }), this.parenContainer = $("<span>"), this.container.append(this.leftParen), this.container.append(this.parenContainer), this.container.append(this.rightParen), this.inputType = new urule.InputType(null, null, null, t), this.parenContainer.append(this.inputType.getContainer()), this.arithmetic = new urule.ComplexArithmetic(t), this.container.append(this.arithmetic.getContainer())
    }, urule.Paren.prototype.initData = function (t) {
        var e = t.value, n = e.valueType;
        this.inputType.setValueType(n, e), this.arithmetic.initData(t.arithmetic)
    }, urule.Paren.prototype.getDisplayContainer = function () {
        return this.inputType.getDisplayContainer()
    }, urule.Paren.prototype.toXml = function () {
        if (!this.inputType) throw"请输入括号内容!";
        var t = "<paren>";
        return t += this.inputType.toXml(), this.arithmetic && (t += this.arithmetic.toXml()), t + "</paren>"
    }, urule.Paren.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.NextType = function (t) {
        this.container = $("<span>"), this.rule = t, this.inputType = null, this.paren = null, this.selectorLabel = generateContainer(), this.selectorLabel.css({
            fontWeight: "blod",
            color: "#fff"
        }), this.container.append(this.selectorLabel), URule.setDomContent(this.selectorLabel, ".");
        var e = this, n = function (t) {
            var n = t.name;
            e.doNext(n), window._setDirty()
        };
        e.menu = new URule.menu.Menu({
            menuItems: [{label: "值", name: "value", onClick: n}, {
                label: "括号",
                name: "paren",
                onClick: n
            }]
        }), this.selectorLabel.click(function (t) {
            e.menu.show(t)
        })
    }, urule.NextType.prototype.initData = function (t) {
        var e = t.value;
        if (e) {
            var n = e.valueType;
            "Paren" == n ? (this.doNext("paren"), this.paren.initData(e)) : (this.doNext("value"), this.inputType.setValueType(n, e))
        }
    }, urule.NextType.prototype.toXml = function () {
        if (this.paren) return this.paren.toXml();
        if (this.inputType) return this.inputType.toXml();
        throw"请选择具体值！"
    }, urule.NextType.prototype.getDisplayContainer = function () {
        return this.inputType ? this.inputType.getDisplayContainer() : this.paren ? this.paren.getDisplayContainer() : null
    }, urule.NextType.prototype.getContainer = function () {
        return this.container
    }, urule.NextType.prototype.doNext = function (t) {
        "value" == t ? (this.paren && (this.paren.getContainer().remove(), this.paren = null), this.inputType || (this.inputType = new urule.InputType(null, null, null, this.rule), this.container.append(this.inputType.getContainer()))) : "paren" == t && (this.inputType && (this.inputType.getContainer().remove(), this.inputType = null), this.paren || (this.paren = new urule.Paren(this.rule), this.container.append(this.paren.getContainer())))
    }
}, function (t, e, n) {
    "use strict";
    urule.InputType = function (t, e, n, r) {
        this.container = $("<span>"), this.label = generateContainer(), this.rule = r, this.container.append(this.label), e ? (URule.setDomContent(this.label, e), this.label.css({color: "gray"})) : (URule.setDomContent(this.label, "选择值类型"), this.label.css({color: "blue"})), this.functionProperty = n, this.variableValue = null, this.dataContainer = $("<span>"), this.container.append(this.dataContainer), this.type = "";
        var i = this, o = function (t) {
            i.setValueType(t.name)
        };
        if (i.menu = new URule.menu.Menu({
            menuItems: [{label: "输入值", name: "Input", onClick: o}, {
                label: "选择变量",
                name: "Variable",
                onClick: o
            }, {label: "选择常量", name: "Constant", onClick: o}, {label: "选择参数", name: "Parameter", onClick: o}]
        }), i.menu.menuItems.push({label: "选择方法", name: "Method", onClick: o}, {
            label: "选择函数",
            name: "CommonFunction",
            onClick: o
        }), this.label.click(function (t) {
            i.menu.show(t)
        }), t) {
            var a = $("<span style='color:red;font-size:11pt'><strong>" + t + "</strong></span>");
            this.container.append(a)
        }
    }, urule.InputType.prototype.getDisplayContainer = function () {
        var t = $("<span>");
        return "Input" == this.type ? t.append(this.simpleValue.getDisplayContainer()) : "Variable" == this.type || "VariableCategory" == this.type ? t.append(this.variableValue.getDisplayContainer()) : "Constant" == this.type ? t.append(this.constantValue.getDisplayContainer()) : "Method" == this.type ? t.append(this.methodValue.getDisplayContainer()) : "Parameter" == this.type ? t.append(this.parameterValue.getDisplayContainer()) : "CommonFunction" == this.type && t.append(this.functionValue.getDisplayContainer()), t
    }, urule.InputType.prototype.setValueType = function (t, e) {
        switch (window._setDirty(), this.type = t, this.variableValue && this.variableValue.getContainer().hide(), this.constantValue && this.constantValue.getContainer().hide(), this.simpleValue && this.simpleValue.getContainer().hide(), this.methodValue && this.methodValue.getContainer().hide(), this.parameterValue && this.parameterValue.getContainer().hide(), this.functionValue && this.functionValue.getContainer().hide(), URule.setDomContent(this.label, "."), this.label.css({color: "#FDFDFD"}), t) {
            case"Input":
                this.simpleValue || (this.arithmetic = new urule.ComplexArithmetic(this.rule), this.simpleValue = new urule.SimpleValue(this.arithmetic, e), this.dataContainer.append(this.simpleValue.getContainer())), this.simpleValue.getContainer().show(), this.type = "Input";
                break;
            case"Constant":
                this.constantValue || (this.arithmetic = new urule.ComplexArithmetic(this.rule), this.constantValue = new urule.ConstantValue(this.arithmetic, e), this.dataContainer.append(this.constantValue.getContainer())), this.constantValue.getContainer().show(), this.type = "Constant";
                break;
            case"Method":
                this.methodValue || (this.arithmetic = new urule.ComplexArithmetic(this.rule), this.methodValue = new urule.MethodValue(this.arithmetic, e, this.dataContainer), this.dataContainer.append(this.methodValue.getContainer())), this.methodValue.getContainer().show(), this.type = "Method";
                break;
            case"Parameter":
                this.parameterValue || (this.arithmetic = new urule.ComplexArithmetic(this.rule), this.parameterValue = new urule.ParameterValue(this.arithmetic, e, "In"), this.dataContainer.append(this.parameterValue.getContainer())), this.parameterValue.getContainer().show(), this.type = "Parameter";
                break;
            case"CommonFunction":
                this.functionValue || (this.arithmetic = new urule.ComplexArithmetic(this.rule), this.functionValue = new urule.FunctionValue(this.arithmetic, e, "In"), this.dataContainer.append(this.functionValue.getContainer())), this.functionValue.getContainer().show(), this.type = "CommonFunction";
                break;
            default:
                this.variableValue || (this.arithmetic = new urule.ComplexArithmetic(this.rule), this.variableValue = new urule.VariableValue(this.arithmetic, e, "In", this.functionProperty), this.dataContainer.append(this.variableValue.getContainer())), this.variableValue.getContainer().show(), this.type = "Variable"
        }
    }, urule.InputType.prototype.toXml = function () {
        if ("" == this.type) return "";
        var t = "<value ";
        if ("Input" == this.type) {
            var e = this.simpleValue.getValue();
            if (!e || "" == e) throw"输入值不能为空!";
            t += ' content="' + e + '"'
        } else if ("Variable" == this.type || "VariableCategory" == this.type) t += this.variableValue.toXml(), this.type = this.variableValue.getType(); else if ("Method" == this.type) t += this.methodValue.toXml(); else if ("Parameter" == this.type) t += this.parameterValue.toXml(); else if ("CommonFunction" == this.type) t += this.functionValue.toXml(); else {
            if ("Constant" !== this.type) throw"请选择条件右边具体值！";
            t += this.constantValue.toXml()
        }
        if (t += ' type="' + this.type + '" ', t += ">", t += this.arithmetic.toXml(), "Method" == this.type) for (var n = this.methodValue.action.parameters, r = 0; r < n.length; r++) t += n[r].toXml(); else "CommonFunction" == this.type && (t += this.functionValue.getParameter().toXml());
        return t + "</value>"
    }, urule.InputType.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    var r = n(241);
    "string" == typeof r && (r = [[t.i, r, ""]]), n(17)(r, {}), r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    "use strict";
    urule.SimpleArithmetic = function () {
        this.container = $("<span>"), this.selectorLabel = generateContainer(), URule.setDomContent(this.selectorLabel, "."), this.selectorLabel.css({color: "#FFF"}), this.operator = "", this.container.append(this.selectorLabel), this.value = null;
        var t = this, e = function (e) {
            t.setOperator(e.name)
        };
        t.menu = new URule.menu.Menu({
            menuItems: [{label: "+", name: "Add", onClick: e}, {
                label: "-",
                name: "Sub",
                onClick: e
            }, {label: "x", name: "Mul", onClick: e}, {label: "÷", name: "Div", onClick: e}, {
                label: "%",
                name: "Mod",
                onClick: e
            }, {
                label: "删除", onClick: function () {
                    t.value && (t.value.getContainer().remove(), t.operator = null, t.value = null, URule.setDomContent(t.selectorLabel, "."), t.selectorLabel.css({
                        color: "#FFF",
                        "padding-left": "0px",
                        "padding-right": "0px"
                    }))
                }
            }]
        }), this.selectorLabel.click(function (e) {
            t.menu.show(e)
        })
    }, urule.SimpleArithmetic.prototype.initData = function (t) {
        if (t) {
            var e = t.type;
            this.setOperator(e), this.value.initData(t.value)
        }
    }, urule.SimpleArithmetic.prototype.setOperator = function (t) {
        window._setDirty(), this.operator = t;
        var e = "";
        switch (t) {
            case"Add":
                e = "+";
                break;
            case"Sub":
                e = "-";
                break;
            case"Mul":
                e = "x";
                break;
            case"Div":
                e = "÷";
                break;
            case"Mod":
                e = "%"
        }
        this.selectorLabel.css({
            color: "green",
            fontWeight: "blod",
            "padding-left": "5px",
            "padding-right": "5px"
        }), URule.setDomContent(this.selectorLabel, e), this.value || (this.simpleArithmetic = new urule.SimpleArithmetic, this.value = new urule.SimpleValue(this.simpleArithmetic), this.container.append(this.value.getContainer()))
    }, urule.SimpleArithmetic.prototype.toXml = function () {
        if (!this.operator || "" == this.operator) return "";
        if (!this.value) throw"请输入具体值！";
        var t = this.value.getValue();
        if ("" == t) throw"请输入具体值！";
        var e = '<simple-arith type="' + this.operator + '" value="' + t + '">';
        return (e += this.simpleArithmetic.toXml()) + "</simple-arith>"
    }, urule.SimpleArithmetic.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.ConstantValue = function (t, e) {
        this.arithmetic = t, this.container = $("<span>"), this.label = generateContainer(), this.container.append(this.label), this.label.css({color: "#0174DF"}), this.label.prop("innerText", "请选择常量"), t && this.container.append(t.getContainer()), e && (this.setValue(e), t.initData(e.arithmetic)), this.initMenu(), window._ConstantValueArray.push(this)
    }, urule.ConstantValue.prototype.setValue = function (t) {
        this.category = t.constantCategory, this.constantName = t.constantName, this.constantLabel = t.constantLabel, URule.setDomContent(this.label, this.category + "." + this.constantLabel), window._setDirty()
    }, urule.ConstantValue.prototype.initMenu = function (t) {
        var e, n, r, i = window._uruleEditorConstantLibraries;
        t && (i = t), i && (e = this, n = function (t) {
            e.setValue({constantCategory: t.parent.parent.label, constantLabel: t.label, constantName: t.name})
        }, r = {menuItems: []}, $.each(i, function (t, e) {
            var i = e.categories;
            $.each(i, function (t, e) {
                var i = {label: e.label}, o = e.constants;
                $.each(o, function (t, e) {
                    i.subMenu || (i.subMenu = {menuItems: []}), i.subMenu.menuItems.push({
                        name: e.name,
                        label: e.label,
                        onClick: n
                    })
                }), r.menuItems.push(i)
            })
        }), e.menu ? e.menu.setConfig(r) : e.menu = new URule.menu.Menu(r), this.label.click(function (t) {
            e.menu.show(t)
        }))
    }, urule.ConstantValue.prototype.getDisplayContainer = function () {
        var t = $("<span>" + this.category + "." + this.constantLabel + "</span>");
        if (this.arithmetic) {
            var e = this.arithmetic.getDisplayContainer();
            e && t.append(e)
        }
        return t
    }, urule.ConstantValue.prototype.toXml = function () {
        if (!this.category) throw"常量不能为空！";
        return 'const-category="' + this.category + '" const="' + this.constantName + '" const-label="' + this.constantLabel + '"'
    }, urule.ConstantValue.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.VariableValue = function (t, e, n, r) {
        this.arithmetic = t, this.container = $("<span>"), this.label = generateContainer(), this.functionProperty = r, this.container.append(this.label), this.label.css({color: "darkcyan"}), URule.setDomContent(this.label, "请选择变量"), t && this.container.append(t.getContainer()), e && this.initData(e), window._VariableValueArray.push(this), this.act = n, this.initMenu()
    }, urule.VariableValue.prototype.registerClick = function (t) {
        this.callback = t
    }, urule.VariableValue.prototype.getDisplayContainer = function () {
        var t = $("<span>" + this.category + "." + this.variableLabel + "</span>");
        if (this.arithmetic) {
            var e = this.arithmetic.getDisplayContainer();
            e && t.append(e)
        }
        return t
    }, urule.VariableValue.prototype.matchAct = function (t) {
        return !this.act || t.indexOf(this.act) > -1
    }, urule.VariableValue.prototype.initMenu = function (t) {
        var e, n, r, i, o = window._uruleEditorVariableLibraries;
        t && (o = t), o && (e = this, n = function (t) {
            var n = {variableCategory: t.label, variables: t.variables};
            e.setValue(n), e.callback && (n.type = "variable", e.callback(n))
        }, r = function (t) {
            var n = {
                variables: t.parent.parent.variables,
                variableCategory: t.parent.parent.label,
                variableLabel: t.label,
                variableName: t.name,
                datatype: t.datatype
            };
            e.setValue(n), e.callback && (n.type = "variable", e.callback(n))
        }, i = {menuItems: []}, $.each(o, function (t, o) {
            $.each(o, function (t, o) {
                var a = o.variables;
                e.functionProperty && e.category && o.name == e.category && e.functionProperty.initMenu(a);
                var s = {label: o.name, variables: a, onClick: n};
                $.each(a || [], function (t, n) {
                    if (s.subMenu || (s.subMenu = {menuItems: []}), e.matchAct(n.act)) {
                        var i = {name: n.name, label: n.label, datatype: n.type, act: n.act, variables: a, onClick: r};
                        s.subMenu.menuItems.push(i)
                    }
                }), i.menuItems.push(s)
            })
        }), e.menu ? e.menu.setConfig(i) : e.menu = new URule.menu.Menu(i), this.label.click(function (t) {
            e.menu.show(t)
        }))
    }, urule.VariableValue.prototype.setValue = function (t) {
        this.category = t.variableCategory, this.variableName = t.variableName, this.variableLabel = t.variableLabel, this.datatype = t.datatype, this.functionProperty && this.functionProperty.initMenu(t.variables), this.variableLabel ? URule.setDomContent(this.label, this.category + "." + this.variableLabel) : URule.setDomContent(this.label, this.category), window._setDirty()
    }, urule.VariableValue.prototype.initData = function (t) {
        this.setValue(t), this.arithmetic && this.arithmetic.initData(t.arithmetic)
    }, urule.VariableValue.prototype.toXml = function () {
        if (!this.category || "" == this.category) throw"变量不能为空！";
        var t = 'var-category="' + this.category + '"';
        return this.variableName && (t += ' var="' + this.variableName + '" var-label="' + this.variableLabel + '" datatype="' + this.datatype + '"'), t
    }, urule.VariableValue.prototype.getType = function () {
        return this.variableName ? "Variable" : "VariableCategory"
    }, urule.VariableValue.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.ComplexArithmetic = function (t) {
        this.container = $("<span>"), this.operator = "", this.rule = t, this.selectorLabel = generateContainer(), this.selectorLabel.css({fontWeight: "blod"}), this.container.append(this.selectorLabel), this.nextType = null;
        var e = this, n = function (t) {
            e.setOperator(t.name)
        };
        e.menu = new URule.menu.Menu({
            menuItems: [{label: "+", name: "Add", onClick: n}, {
                label: "-",
                name: "Sub",
                onClick: n
            }, {label: "x", name: "Mul", onClick: n}, {label: "÷", name: "Div", onClick: n}, {
                label: "%",
                name: "Mod",
                onClick: n
            }, {
                label: "删除", onClick: function () {
                    window._setDirty(), e.nextType && (e.nextType.getContainer().remove(), e.nextType = null, URule.setDomContent(e.selectorLabel, "."), e.selectorLabel.css({
                        color: "#fff",
                        "padding-left": "0px",
                        "padding-right": "0px"
                    }))
                }
            }]
        }), this.selectorLabel.click(function (t) {
            e.menu.show(t)
        })
    }, urule.ComplexArithmetic.prototype.setOperator = function (t) {
        switch (window._setDirty(), this.operator = t, this.info = "", t) {
            case"Add":
                this.info = "+";
                break;
            case"Sub":
                this.info = "-";
                break;
            case"Mul":
                this.info = "x";
                break;
            case"Div":
                this.info = "÷";
                break;
            case"Mod":
                this.info = "%"
        }
        URule.setDomContent(this.selectorLabel, this.info), this.selectorLabel.css({
            color: "green",
            "padding-left": "4px"
        }), this.nextType || (this.nextType = new urule.NextType(this.rule), this.container.append(this.nextType.getContainer()))
    }, urule.ComplexArithmetic.prototype.initData = function (t) {
        if (t) {
            var e = t.type;
            this.setOperator(e), this.nextType.initData(t)
        }
    }, urule.ComplexArithmetic.prototype.getDisplayContainer = function () {
        if (this.nextType) {
            var t = $("<span>" + this.info + "</span>");
            return t.append(this.nextType.getDisplayContainer()), t
        }
        return null
    }, urule.ComplexArithmetic.prototype.toXml = function () {
        if (!this.nextType) return "";
        var t = '<complex-arith type="' + this.operator + '">';
        return (t += this.nextType.toXml()) + "</complex-arith>"
    }, urule.ComplexArithmetic.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    urule.ComparisonOperator = function (t) {
        this.inputType = null, this.operator = "", this.container = generateContainer(), URule.setDomContent(this.container, "请选择比较操作符"), this.container.css({
            "font-size": "12px",
            color: "red",
            fontWeight: "bold",
            "margin-right": "1px"
        });
        var e = this, n = function (t) {
            e.setOperator(t.name)
        };
        e.menu = new URule.menu.Menu({
            onHide: function () {
                t()
            },
            menuItems: [{label: "大于", name: "GreaterThen", onClick: n}, {
                label: "大于或等于",
                name: "GreaterThenEquals",
                onClick: n
            }, {label: "小于", name: "LessThen", onClick: n}, {
                label: "小于或等于",
                name: "LessThenEquals",
                onClick: n
            }, {label: "等于", name: "Equals", onClick: n}, {
                label: "等于(不分大小写)",
                name: "EqualsIgnoreCase",
                onClick: n
            }, {label: "开始于", name: "StartWith", onClick: n}, {
                label: "不开始于",
                name: "NotStartWith",
                onClick: n
            }, {label: "结束于", name: "EndWith", onClick: n}, {
                label: "不结束于",
                name: "NotEndWith",
                onClick: n
            }, {label: "不等于", name: "NotEquals", onClick: n}, {
                label: "不等于(不分大小写)",
                name: "NotEqualsIgnoreCase",
                onClick: n
            }, {label: "在集合", name: "In", onClick: n}, {label: "不在集合", name: "NotIn", onClick: n}, {
                label: "为空",
                name: "Null",
                onClick: n
            }, {label: "不为空", name: "NotNull", onClick: n}, {
                label: "匹配正则表达式",
                name: "Match",
                onClick: n
            }, {label: "不匹配正则表达式", name: "NotMatch", onClick: n}, {
                label: "包含",
                name: "Contain",
                onClick: n
            }, {label: "不包含", name: "NotContain", onClick: n}]
        }), this.container.click(function (t) {
            e.menu.show(t)
        })
    }, urule.ComparisonOperator.prototype.initRightValue = function (t) {
        this.inputType && t && this.inputType.setValueType(t.valueType, t)
    }, urule.ComparisonOperator.prototype.setOperator = function (t) {
        switch (t) {
            case"GreaterThen":
                this.operator = "GreaterThen", URule.setDomContent(this.container, "大于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"GreaterThenEquals":
                this.operator = "GreaterThenEquals", URule.setDomContent(this.container, "大于或等于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"LessThen":
                this.operator = "LessThen", URule.setDomContent(this.container, "小于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"LessThenEquals":
                this.operator = "LessThenEquals", URule.setDomContent(this.container, "小于或等于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"StartWith":
                this.operator = "StartWith", URule.setDomContent(this.container, "开始于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"Equals":
                this.operator = "Equals", URule.setDomContent(this.container, "等于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"EqualsIgnoreCase":
                this.operator = "EqualsIgnoreCase", URule.setDomContent(this.container, "等于(不分大小写)"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"NotStartWith":
                this.operator = "NotStartWith", URule.setDomContent(this.container, "不开始于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"EndWith":
                this.operator = "EndWith", URule.setDomContent(this.container, "结束于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"NotEndWith":
                this.operator = "NotEndWith", URule.setDomContent(this.container, "不结束于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"NotEquals":
                this.operator = "NotEquals", URule.setDomContent(this.container, "不等于"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"NotEqualsIgnoreCase":
                this.operator = "NotEqualsIgnoreCase", URule.setDomContent(this.container, "不等于(不分大小写)"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"In":
                this.operator = "In", URule.setDomContent(this.container, "在集合"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType("之中");
                break;
            case"NotIn":
                this.operator = "NotIn", URule.setDomContent(this.container, "不在集合"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType("之中");
                break;
            case"Null":
                this.operator = "Null", URule.setDomContent(this.container, "为空"), this.inputType && (this.inputType.getContainer().remove(), this.inputType = null);
                break;
            case"NotNull":
                this.operator = "NotNull", URule.setDomContent(this.container, "不为空"), this.inputType && (this.inputType.getContainer().remove(), this.inputType = null);
                break;
            case"Match":
                this.operator = "Match", URule.setDomContent(this.container, "匹配正则表达式"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"NotMatch":
                this.operator = "NotMatch", URule.setDomContent(this.container, "不匹配正则表达式"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"Contain":
                this.operator = "Contain", URule.setDomContent(this.container, "包含"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType;
                break;
            case"NotContain":
                this.operator = "NotContain", URule.setDomContent(this.container, "不包含"), this.inputType && this.inputType.getContainer().remove(), this.inputType = new urule.InputType
        }
        window._setDirty()
    }, urule.ComparisonOperator.prototype.getOperator = function () {
        if ("" == this.operator) throw"请选择比较操作符！";
        return this.operator
    }, urule.ComparisonOperator.prototype.getInputType = function () {
        return this.inputType
    }, urule.ComparisonOperator.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    $, window.URule || (window.URule = {}), URule.setDomContent = function (t, e) {
        navigator.userAgent.indexOf("Firefox") > 0 ? t.prop("textContent", e) : t.prop("innerText", e)
    }, URule.getDomContent = function (t) {
        return navigator.userAgent.indexOf("Firefox") > 0 ? t.prop("textContent") : t.prop("innerText")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(27);
    window._ConstantValueArray = [], window._ActionTypeArray = [], window._VariableValueArray = [], window._ParameterValueArray = [], window._FunctionValueArray = [], window.actionLibraries = [], window.variableLibraries = [], window.constantLibraries = [], window.parameterLibraries = [], window.urule = {}, window.knowledgePackages = null, window.loadKnowledgePackages = function (t) {
        window.knowledgePackages ? t(window.knowledgePackages) : $.ajax({
            url: window._server + "/ruleflowdesigner/loadPackages?project=" + window._project,
            type: "POST",
            success: function (e) {
                window.knowledgePackages = e, t(e)
            },
            error: function () {
                alert("加载知识包出错！")
            }
        })
    }, window.generateContainer = function () {
        var t = $("<span>.</span>");
        return t.css({
            height: "20px",
            cursor: "pointer",
            margin: "0px",
            color: "white",
            border: "dashed transparent 1px"
        }), t.mouseover(function () {
            t.css({border: "dashed gray 1px"})
        }), t.mouseout(function () {
            t.css({border: "dashed transparent 1px"})
        }), t
    }, window.refreshParameterLibraries = function () {
        for (var t = "", e = 0; e < parameterLibraries.length; e++) {
            var n = parameterLibraries[e];
            0 == e ? t = n : t += ";" + n
        }
        if (!("" == t || t.length < 2)) {
            var i = window._server + "/common/loadXml";
            $.ajax({
                type: "POST", data: {files: t}, url: i, error: function (t, e) {
                    r.MsgBox.alert("加载文件失败！")
                }, success: function (t) {
                    window._uruleEditorParameterLibraries = t, $.each(window._ParameterValueArray, function (e, n) {
                        n.initMenu(t, 1)
                    })
                }
            })
        }
    }, window.refreshVariableLibraries = function () {
        for (var t = "", e = 0; e < variableLibraries.length; e++) {
            var n = variableLibraries[e];
            0 == e ? t = n : t += ";" + n
        }
        if (!("" == t || t.length < 2)) {
            var i = window._server + "/common/loadXml";
            $.ajax({
                type: "POST", data: {files: t}, url: i, error: function (t, e) {
                    r.MsgBox.alert("加载文件失败！")
                }, success: function (t) {
                    window._uruleEditorVariableLibraries = t, $.each(window._VariableValueArray, function (e, n) {
                        n.initMenu(t)
                    })
                }
            })
        }
    }, window.refreshActionLibraries = function () {
        for (var t = "", e = 0; e < actionLibraries.length; e++) {
            var n = actionLibraries[e];
            0 == e ? t = n : t += ";" + n
        }
        ("" == t || t.length < 2) && (t = "builtinactions");
        var i = window._server + "/common/loadXml";
        $.ajax({
            type: "POST", data: {files: t}, url: i, error: function (t, e) {
                r.MsgBox.alert("加载文件失败！")
            }, success: function (t) {
                window._uruleEditorActionLibraries = t, $.each(window._ActionTypeArray, function (e, n) {
                    n.initMenu(t)
                })
            }
        })
    }, window.refreshFunctionLibraries = function () {
        var t = window._server + "/common/loadFunctions";
        $.ajax({
            url: t, error: function (t, e) {
                r.MsgBox.alert("加载函数失败！")
            }, success: function (t) {
                window._uruleEditorFunctionLibraries = t, $.each(window._FunctionValueArray, function (e, n) {
                    n.initMenu(t)
                })
            }
        })
    }, window.refreshConstantLibraries = function () {
        for (var t = "", e = 0; e < constantLibraries.length; e++) {
            var n = constantLibraries[e];
            0 == e ? t = n : t += ";" + n
        }
        if (!("" == t || t.length < 2)) {
            var i = window._server + "/common/loadXml";
            $.ajax({
                data: {files: t}, url: i, type: "POST", error: function (t, e) {
                    r.MsgBox.alert("加载文件失败！")
                }, success: function (t) {
                    window._uruleEditorConstantLibraries = t, $.each(window._ConstantValueArray, function (e, n) {
                        n.initMenu(t)
                    })
                }
            })
        }
    }
}, function (module, exports, __webpack_require__) {
    "use strict";
    !function () {
        window.URule || (window.URule = {}), URule.menu = {}, URule.menu.AbstractMenu = function (t) {
        }, URule.menu.AbstractMenu.prototype = {
            fadeSpeed: 100,
            above: "auto",
            preventDoubleContext: !0,
            compress: !1,
            createDom: function () {
            },
            getDom: function () {
                return this._dom || (this._dom = this.createDom(), $(this._dom).data("ref", this)), this._dom
            },
            render: function (t) {
                this._rendered || (t ? $(t).append(this.getDom()) : $("body").append(this.getDom())), this._rendered = !0
            },
            setConfig: function (t) {
                this.remove(), this.constructor.call(this, t)
            },
            remove: function () {
                this._dom && (this._dom.remove(), this._dom = null), this._rendered = !1
            }
        }, URule.menu.Menu = function (t) {
            URule.menu.Menu.prototype.superClass.call(this, t), $.extend(this, t)
        }, URule.menu.Menu.prototype = new URule.menu.AbstractMenu, URule.menu.Menu.prototype.superClass = URule.menu.AbstractMenu, URule.menu.Menu.prototype.constructor = URule.menu.Menu, URule.menu.Menu.prototype.createDom = function () {
            var t, e, n, r;
            t = this.compress ? " compressed-context" : "", e = (r = $("<ul class='dropdown-menu dropdown-context" + t + "' style='font-size:12px'></ul>"))[0], this._dom = e;
            var i = this;
            if ((n = this.menuItems).length > 20) {
                var o = $("<div style='margin-left: 2px;margin-right: 2px'>");
                o.append("<i class='glyphicon glyphicon-filter' style='color:#006600;margin-left: 2px;margin-right: 2px'></i>  "), this.search = $("<input type='text' class='form-control' placeholder='输入值后回车查询' style='width: 85%;display: inline-block;height: 26px;padding: 1px;font-size: 12px;'>"), o.append(this.search), r.append(o), this.search.click(function (t) {
                    t.stopPropagation()
                }), this.search.dblclick(function (t) {
                    t.stopPropagation()
                }), this.search.keypress(function (t) {
                    var e = t.keyCode ? t.keyCode : t.which;
                    if ("13" === e || 13 === e) {
                        var r = $(this).val();
                        if (!i.oldSearchValue || i.oldSearchValue !== r) {
                            for (i.oldSearchValue = r; i.menuItems.length > 0;) i.menuItems[0].remove();
                            for (var o = 0; o < n.length; o++) {
                                var a = n[o], s = a.label;
                                r && "" !== r ? s && s.indexOf(r) > -1 && i.addMenuItem(a) : i.addMenuItem(a)
                            }
                        }
                    }
                })
            }
            this.menuItems = [];
            for (var a = 0; a < n.length; a++) this.addMenuItem(n[a]);
            return e
        }, URule.menu.Menu.prototype.addMenuItem = function (menuItem) {
            var item;
            return item = menuItem instanceof URule.menu.MenuItem ? menuItem : menuItem.$type ? eval("(URule.menu." + menuItem.$type + "(menuItem))") : new URule.menu.MenuItem(menuItem), item.parent = this, item.render(this.getDom()), this.menuItems.push(item), item
        }, URule.menu.Menu.prototype.getMenuItem = function (t) {
            for (var e, n = 0; n < this.menuItems.length; n++) {
                if (e = this.menuItems[n], "string" != typeof t) return this.menuItems[t];
                if (e.name === t) return e;
                if (e.subMenu && (e = e.subMenu.getMenuItem(t))) return e
            }
        }, URule.menu.Menu.prototype.remove = function () {
            URule.menu.Menu.prototype.superClass.prototype.remove.call(this), this.parent && (this.parent.subMenu = null, this.parent.getDom().removeClass("dropdown-submenu"))
        }, URule.menu.Menu.prototype.show = function (t) {
            t.preventDefault(), t.stopPropagation(), this.render(), $(".modal").removeAttr("tabindex");
            for (var e = $(this.getDom()), n = $(t.target), r = 3; !n.is("body");) {
                var i = n.css("z-index");
                if (!isNaN(i) && "0" !== i) {
                    r = parseInt(i) + 1;
                    break
                }
                n = n.parent()
            }
            if (e.css("z-index", r), $(".dropdown-context:not(.dropdown-context-sub)").hide(), "boolean" == typeof this.above && this.above) e.addClass("dropdown-context-up").css({
                top: t.pageY - 20 - e.height(),
                left: t.pageX - 13
            }).fadeIn(this.fadeSpeed); else if ("string" == typeof this.above && "auto" == this.above) {
                e.removeClass("dropdown-context-up");
                var o = e.height() + 10;
                t.pageY + o > $("html").height() + 10 && t.pageY > o ? e.addClass("dropdown-context-up").css({
                    top: t.pageY - 20 - o,
                    left: t.pageX - 13
                }).fadeIn(this.fadeSpeed) : e.css({top: t.pageY + 10, left: t.pageX - 13}).fadeIn(this.fadeSpeed)
            }
            this.onShow && this.onShow(this)
        }, URule.menu.Menu.prototype.hide = function () {
            var t = $(this._dom);
            t.is(":visible") && (this.onHide && this.onHide(this), t.fadeOut(this.fadeSpeed, function () {
                t.css({display: ""}).find(".drop-left").removeClass("drop-left")
            }), this.parent && this.parent.parent.hide())
        }, URule.menu.MenuItem = function (t) {
            URule.menu.MenuItem.prototype.superClass.call(this, t), $.extend(this, t)
        }, URule.menu.MenuItem.prototype = new URule.menu.AbstractMenu, URule.menu.MenuItem.prototype.superClass = URule.menu.AbstractMenu, URule.menu.MenuItem.prototype.constructor = URule.menu.MenuItem, URule.menu.MenuItem.prototype.createDom = function () {
            var t, e, n;
            return n = this, t = $("<li style='cursor: default'></li>"), this._dom = t[0], e = this.icon ? "<i class='" + this.icon + "'></i> " + this.label : this.label, t.on("mouseenter", function () {
                t.siblings(".dropdown-submenu").each(function () {
                    $(this).find("ul.dropdown-context-sub").each(function () {
                        var t = $(this).data("ref");
                        $(this).fadeOut(t.fadeSpeed)
                    })
                })
            }), "divider" === this.type ? (t.addClass("divider"), t.append(e)) : "header" == this.type ? (t.addClass("nav-header"), t.append(e)) : (t.append("<a>" + e + "</a>"), this.subMenu && this.setSubMenu(this.subMenu)), n.onClick && (this.parent && this.parent.search ? (t.click(function (t) {
                t.stopPropagation()
            }), t.dblclick(function (t) {
                n.onClick(n, {event: t}), t.preventDefault(), t.stopPropagation(), n.parent.hide()
            })) : t.click(function (t) {
                t.preventDefault(), t.stopPropagation(), n.onClick(n, {event: t}), n.parent.hide()
            })), t[0]
        }, URule.menu.MenuItem.prototype.setSubMenu = function (t) {
            var e, n;
            return e = (n = this).getDom(), t instanceof URule.menu.Menu ? n.subMenu = t : n.subMenu = new URule.menu.Menu(t), n.subMenu.parent = this, $(e).attr("class", "dropdown-submenu").mouseover(function () {
                var t = $(this).find(".dropdown-context-sub:first");
                t.width() + t.offset().left > window.innerWidth && t.addClass("drop-left"), $(n.subMenu.getDom()).fadeIn(n.subMenu.fadeSpeed)
            }), this.subMenu.render(e), $(this.subMenu.getDom()).addClass("dropdown-context-sub"), this.subMenu
        }, URule.menu.MenuItem.prototype.remove = function () {
            var t;
            URule.menu.MenuItem.prototype.superClass.prototype.remove.call(this), t = this.parent.menuItems.indexOf(this), this.parent.menuItems.splice(t, 1)
        }, URule.menu.MenuItem.prototype.show = function () {
            $(this._dom).show()
        }, URule.menu.MenuItem.prototype.hide = function () {
            $(this._dom).hide()
        }, $(document).on("dblclick", "html", function () {
            $(".dropdown-context").each(function () {
                $(this).data("ref").hide()
            })
        }), URule.menu.AbstractMenu.preventDoubleContext && $(document).on("contextmenu", ".dropdown-context", function (t) {
            t.preventDefault()
        })
    }()
}, function (t, e, n) {
    (t.exports = n(18)(!1)).push([t.i, ".rule-delete{\r\n    color: #F44336;\r\n    vertical-align: text-top;\r\n    cursor: pointer;\r\n}\r\n\r\n.rule-text-editor{\r\n    width: 260px;\r\n    display: inline-block;\r\n    height: 26px;\r\n    padding: 3px 3px;\r\n}\r\n\r\n.rule-property {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    line-height: 28px;\r\n    display: inline-block;\r\n    border: solid gray 1px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.rule-add-property{\r\n    cursor:pointer;\r\n    padding-left:10px;\r\n    line-height:30px;\r\n    color:blue;\r\n}\r\n\r\n.rule-property-del {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    color: #ff0600;\r\n}\r\n\r\n.rule-add-action {\r\n    color:blue;\r\n    cursor:pointer;\r\n    padding-left:5px;\r\n    padding-bottom:5px;\r\n}\r\n\r\n.rule-action{\r\n    padding:1px;\r\n    line-height: 27px;\r\n}\r\n\r\n.rule-delete-action{\r\n    font-size: 10pt;\r\n    cursor: pointer;\r\n    color: #FF9800\r\n}\r\n\r\n.rule-join-node{\r\n    color: #795548;\r\n    font-size: 10pt;\r\n    vertical-align: text-top;\r\n    margin-left: 2px\r\n}\r\n.rule-join-container{\r\n    border:solid #999 1px;\r\n    padding:1px;\r\n    background:#fff;\r\n}", ""])
}, function (t, e, n) {
    (t.exports = n(18)(!1)).push([t.i, "/**\r\n * ContextJS Styles\r\n * For use WITHOUT Twitters Bootstrap CSS\r\n */\r\n\r\n.nav-header {\r\n\tdisplay: block;\r\n\tpadding: 3px 15px;\r\n\tfont-size: 11px;\r\n\tfont-weight: bold;\r\n\tline-height: 20px;\r\n\tcolor: #999;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\ttext-transform: uppercase;\r\n}\r\n.dropdown-menu {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\tz-index: 1000;\r\n\tdisplay: none;\r\n\tfloat: left;\r\n\tmin-width: 160px;\r\n\tpadding: 5px 0;\r\n\tmargin: 2px 0 0;\r\n\tlist-style: none;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #ccc;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\r\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\tfont-size: 14px;\r\n\t*border-right-width: 2px;\r\n\t*border-bottom-width: 2px;\r\n\t-webkit-border-radius: 6px;\r\n\t-moz-border-radius: 6px;\r\n\tborder-radius: 6px;\r\n\t-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n\t-moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n\t-webkit-background-clip: padding-box;\r\n\t-moz-background-clip: padding;\r\n\tbackground-clip: padding-box;\r\n\ttext-align:left;\r\n}\r\n.dropdown-menu.pull-right {\r\n\tright: 0;\r\n\tleft: auto;\r\n}\r\n.dropdown-menu .divider {\r\n\t*width: 100%;\r\n\theight: 1px;\r\n\tmargin: 9px 1px;\r\n\t*margin: -5px 0 5px;\r\n\toverflow: hidden;\r\n\tbackground-color: #e5e5e5;\r\n\t*border-bottom: 1px solid #ffffff;\r\n}\r\n.dropdown-menu a {\r\n\tdisplay: block;\r\n\tpadding: 3px 20px;\r\n\tclear: both;\r\n\tfont-weight: normal;\r\n\tline-height: 20px;\r\n\tcolor: #333333;\r\n\twhite-space: nowrap;\r\n\ttext-decoration: none;\r\n}\r\n.dropdown-menu li > a:hover, .dropdown-menu li > a:focus, .dropdown-submenu:hover > a {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\tbackground-color: #0088cc;\r\n\tbackground-color: #0081c2;\r\n\tbackground-image: -moz-linear-gradient(top, #0088cc, #0077b3);\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0077b3));\r\n\tbackground-image: -webkit-linear-gradient(top, #0088cc, #0077b3);\r\n\tbackground-image: -o-linear-gradient(top, #0088cc, #0077b3);\r\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0077b3);\r\n\tbackground-repeat: repeat-x;\r\n\tfilter: progid: dximagetransform.microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0077b3', GradientType=0);\r\n}\r\n.dropdown-menu .active > a, .dropdown-menu .active > a:hover {\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\tbackground-color: #0088cc;\r\n\tbackground-color: #0081c2;\r\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0077b3);\r\n\tbackground-image: -moz-linear-gradient(top, #0088cc, #0077b3);\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0077b3));\r\n\tbackground-image: -webkit-linear-gradient(top, #0088cc, #0077b3);\r\n\tbackground-image: -o-linear-gradient(top, #0088cc, #0077b3);\r\n\tbackground-repeat: repeat-x;\r\n\toutline: 0;\r\n}\r\n.dropdown-menu .disabled > a, .dropdown-menu .disabled > a:hover {\r\n\tcolor: #999999;\r\n}\r\n.dropdown-menu .disabled > a:hover {\r\n\ttext-decoration: none;\r\n\tcursor: default;\r\n\tbackground-color: transparent;\r\n}\r\n.open {\r\n\t*z-index: 1000;\r\n}\r\n.open > .dropdown-menu {\r\n\tdisplay: block;\r\n}\r\n.pull-right > .dropdown-menu {\r\n\tright: 0;\r\n\tleft: auto;\r\n}\r\n.dropup .caret, .navbar-fixed-bottom .dropdown .caret {\r\n\tborder-top: 0;\r\n\tborder-bottom: 4px solid #000000;\r\n\tcontent: \"\\2191\";\r\n}\r\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\r\n\ttop: auto;\r\n\tbottom: 100%;\r\n\tmargin-bottom: 1px;\r\n}\r\n.dropdown-submenu {\r\n\tposition: relative;\r\n}\r\n.dropdown-submenu > .dropdown-menu {\r\n\ttop: 0;\r\n\tleft: 100%;\r\n\tmargin-top: -6px;\r\n\tmargin-left: -1px;\r\n\t-webkit-border-radius: 0 6px 6px 6px;\r\n\t-moz-border-radius: 0 6px 6px 6px;\r\n\tborder-radius: 0 6px 6px 6px;\r\n}\r\n.dropdown-submenu > .dropdown-menu.drop-left{\r\n\tleft:-80%;\r\n}\r\n.dropdown-submenu:hover .dropdown-menu {\r\n\tdisplay: block;\r\n}\r\n.dropdown-submenu > a:after {\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tmargin-top: 5px;\r\n\tmargin-right: -10px;\r\n\tborder-color: transparent;\r\n\tborder-left-color: #cccccc;\r\n\tborder-style: solid;\r\n\tborder-width: 5px 0 5px 5px;\r\n\tcontent: \" \";\r\n}\r\n.dropdown-submenu:hover > a:after {\r\n\tborder-left-color: #ffffff;\r\n}\r\n.dropdown .dropdown-menu .nav-header {\r\n\tpadding-right: 20px;\r\n\tpadding-left: 20px;\r\n}\r\n/**\r\n * \tContext Styles\r\n */\r\n\r\n.dropdown-context .nav-header {\r\n\tcursor: default;\r\n}\r\n.dropdown-context:before, .dropdown-context-up:before {\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: 9px;\r\n\tdisplay: inline-block;\r\n\tborder-right: 7px solid transparent;\r\n\tborder-bottom: 7px solid #ccc;\r\n\tborder-left: 7px solid transparent;\r\n\tborder-bottom-color: rgba(0, 0, 0, 0.2);\r\n\tcontent: '';\r\n}\r\n.dropdown-context:after, .dropdown-context-up:after {\r\n\tposition: absolute;\r\n\ttop: -6px;\r\n\tleft: 10px;\r\n\tdisplay: inline-block;\r\n\tborder-right: 6px solid transparent;\r\n\tborder-bottom: 6px solid #ffffff;\r\n\tborder-left: 6px solid transparent;\r\n\tcontent: '';\r\n}\r\n.dropdown-context-up:before, .dropdown-context-up:after {\r\n\ttop: auto;\r\n\tbottom: -7px;\r\n\tz-index: 9999;\r\n}\r\n.dropdown-context-up:before {\r\n\tborder-right: 7px solid transparent;\r\n\tborder-top: 7px solid #ccc;\r\n\tborder-bottom: none;\r\n\tborder-left: 7px solid transparent;\r\n}\r\n.dropdown-context-up:after {\r\n\tborder-right: 6px solid transparent;\r\n\tborder-top: 6px solid #ffffff;\r\n\tborder-left: 6px solid transparent;\r\n\tborder-bottom: none;\r\n}\r\n.dropdown-context-sub:before, .dropdown-context-sub:after {\r\n\tdisplay: none;\r\n}\r\n.dropdown-context .dropdown-submenu:hover .dropdown-menu {\r\n\tdisplay: none;\r\n}\r\n.dropdown-context .dropdown-submenu:hover > .dropdown-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.compressed-context a{\r\n\tpadding-left: 14px;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 0;\r\n\tfont-size: 13px;\r\n\t}\r\n.compressed-context .divider{\r\n\tmargin: 5px 1px;\r\n\t}\r\n.compressed-context .nav-header{\r\n\tpadding:1px 13px;\r\n\t}\r\n", ""])
}, function (t, e, n) {
    var r = n(242);
    "string" == typeof r && (r = [[t.i, r, ""]]), n(17)(r, {}), r.locals && (t.exports = r.locals)
}, , , function (t, e, n) {
    "use strict";
    var r = n(27), i = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(19));
    urule.ConfigVariableDialog = function (t) {
        this.parent = t, this.init()
    }, urule.ConfigVariableDialog.prototype.open = function () {
        var t = this;
        r.MsgBox.showDialog("变量库配置", this.dialogContent, [{
            name: "添加", holdDialog: !0, click: function () {
                i.eventEmitter.emit(i.OPEN_KNOWLEDGE_TREE_DIALOG, {
                    project: window._project,
                    fileType: "VariableLibrary",
                    callback: function (e, n) {
                        var i = "jcr:" + e;
                        "LATEST" !== n && (i += ":" + n), -1 === window.variableLibraries.indexOf(i) ? (t.tbody.append(t.newLibRow(i)), window.variableLibraries.push(i), window.refreshVariableLibraries(), window._setDirty()) : r.MsgBox.alert("变量库文件已存在")
                    }
                })
            }
        }])
    }, urule.ConfigVariableDialog.prototype.init = function () {
        var t = $('<table class="table table-bordered">\n\t\t<thead><tr>\n\t\t\t<td>变量库文件</td><td style="width: 70px">操作</td>\n\t\t</tr></thead>\n\t</table>');
        this.tbody = $("<tbody></tbody>"), t.append(this.tbody), this.dialogContent = $("<div>"), this.dialogContent.append(t);
        for (var e = 0; e < window.variableLibraries.length; e++) {
            var n = window.variableLibraries[e];
            this.tbody.append(this.newLibRow(n))
        }
    }, urule.ConfigVariableDialog.prototype.newLibRow = function (t) {
        var e = $("<tr>\n\t\t\t<td>" + t + "</td>\n\t\t</tr>"), n = $("<td></td>"),
            r = $('<button type="button" class="btn btn-link">删除</button>');
        return n.append(r), r.click(function () {
            var n = window.variableLibraries.indexOf(t);
            window.variableLibraries.splice(n, 1), e.remove(), window.refreshVariableLibraries(), window._setDirty()
        }), e.append(n), e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(27), i = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(19));
    urule.ConfigParameterDialog = function (t) {
        this.parent = t, this.init()
    }, urule.ConfigParameterDialog.prototype.open = function () {
        var t = this;
        r.MsgBox.showDialog("参数库配置", this.dialogContent, [{
            name: "添加", holdDialog: !0, click: function () {
                i.eventEmitter.emit(i.OPEN_KNOWLEDGE_TREE_DIALOG, {
                    project: window._project,
                    fileType: "ParameterLibrary",
                    callback: function (e, n) {
                        var i = "jcr:" + e;
                        "LATEST" !== n && (i += ":" + n), -1 === window.parameterLibraries.indexOf(i) ? (t.tbody.append(t.newLibRow(i)), window.parameterLibraries.push(i), window.refreshParameterLibraries(), window._setDirty()) : r.MsgBox.alert("参数库文件已存在")
                    }
                })
            }
        }])
    }, urule.ConfigParameterDialog.prototype.init = function () {
        var t = $('<table class="table table-bordered">\n\t\t<thead><tr>\n\t\t\t<td>参数库文件</td><td style="width: 70px">操作</td>\n\t\t</tr></thead>\n\t</table>');
        this.tbody = $("<tbody></tbody>"), t.append(this.tbody), this.dialogContent = $("<div>"), this.dialogContent.append(t);
        for (var e = 0; e < window.parameterLibraries.length; e++) {
            var n = window.parameterLibraries[e];
            this.tbody.append(this.newLibRow(n))
        }
    }, urule.ConfigParameterDialog.prototype.newLibRow = function (t) {
        var e = $("<tr>\n\t\t\t<td>" + t + "</td>\n\t\t</tr>"), n = $("<td></td>"),
            r = $('<button type="button" class="btn btn-link">删除</button>');
        return n.append(r), r.click(function () {
            var n = window.parameterLibraries.indexOf(t);
            window.parameterLibraries.splice(n, 1), e.remove(), window.refreshParameterLibraries(), window._setDirty()
        }), e.append(n), e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(27), i = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(19));
    urule.ConfigConstantDialog = function (t) {
        this.parent = t, this.init()
    }, urule.ConfigConstantDialog.prototype.open = function () {
        var t = this;
        r.MsgBox.showDialog("常量库配置", this.dialogContent, [{
            name: "添加", holdDialog: !0, click: function () {
                i.eventEmitter.emit(i.OPEN_KNOWLEDGE_TREE_DIALOG, {
                    project: window._project,
                    fileType: "ConstantLibrary",
                    callback: function (e, n) {
                        var i = "jcr:" + e;
                        "LATEST" !== n && (i += ":" + n), -1 === window.constantLibraries.indexOf(i) ? (t.tbody.append(t.newLibRow(i)), window.constantLibraries.push(i), window.refreshConstantLibraries(), window._setDirty()) : r.MsgBox.alert("常量库文件已存在")
                    }
                })
            }
        }])
    }, urule.ConfigConstantDialog.prototype.init = function () {
        var t = $('<table class="table table-bordered">\n\t\t<thead><tr>\n\t\t\t<td>常量库文件</td><td style="width: 70px">操作</td>\n\t\t</tr></thead>\n\t</table>');
        this.tbody = $("<tbody></tbody>"), t.append(this.tbody), this.dialogContent = $("<div>"), this.dialogContent.append(t);
        for (var e = 0; e < window.constantLibraries.length; e++) {
            var n = window.constantLibraries[e];
            this.tbody.append(this.newLibRow(n))
        }
    }, urule.ConfigConstantDialog.prototype.newLibRow = function (t) {
        var e = $("<tr>\n\t\t\t<td>" + t + "</td>\n\t\t</tr>"), n = $("<td></td>"),
            r = $('<button type="button" class="btn btn-link">删除</button>');
        return n.append(r), r.click(function () {
            var n = window.constantLibraries.indexOf(t);
            window.constantLibraries.splice(n, 1), e.remove(), window.refreshConstantLibraries(), window._setDirty()
        }), e.append(n), e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(27), i = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }(n(19));
    urule.ConfigActionDialog = function (t) {
        this.parent = t, this.init()
    }, urule.ConfigActionDialog.prototype.open = function () {
        var t = this;
        r.MsgBox.showDialog("动作库配置", this.dialogContent, [{
            name: "添加", holdDialog: !0, click: function () {
                i.eventEmitter.emit(i.OPEN_KNOWLEDGE_TREE_DIALOG, {
                    project: window._project,
                    fileType: "ActionLibrary",
                    callback: function (e, n) {
                        var i = "jcr:" + e;
                        "LATEST" !== n && (i += ":" + n), -1 === window.actionLibraries.indexOf(i) ? (t.tbody.append(t.newLibRow(i)), window.actionLibraries.push(i), window.refreshActionLibraries(), window._setDirty()) : r.MsgBox.alert("动作库文件已存在")
                    }
                })
            }
        }])
    }, urule.ConfigActionDialog.prototype.init = function () {
        var t = $('<table class="table table-bordered">\n\t\t<thead><tr>\n\t\t\t<td>动作库文件</td><td style="width: 70px">操作</td>\n\t\t</tr></thead>\n\t</table>');
        this.tbody = $("<tbody></tbody>"), t.append(this.tbody), this.dialogContent = $("<div>"), this.dialogContent.append(t);
        for (var e = 0; e < window.actionLibraries.length; e++) {
            var n = window.actionLibraries[e];
            this.tbody.append(this.newLibRow(n))
        }
    }, urule.ConfigActionDialog.prototype.newLibRow = function (t) {
        var e = $("<tr>\n\t\t\t<td>" + t + "</td>\n\t\t</tr>"), n = $("<td></td>"),
            r = $('<button type="button" class="btn btn-link">删除</button>');
        return n.append(r), r.click(function () {
            var n = window.actionLibraries.indexOf(t);
            window.actionLibraries.splice(n, 1), e.remove(), window.refreshActionLibraries(), window._setDirty()
        }), e.append(n), e
    }
}, function (t, e, n) {
    "use strict";
    var r, i = (r = n(197)) && r.__esModule ? r : {default: r};
    urule.Context = function (t, e) {
        this.container = t, this.paper = new i.default(this.container.get(0), "100%", "100%"), this.rule = e
    }, urule.Context.prototype.getCanvas = function () {
        return this.container
    }, urule.Context.prototype.getPaper = function () {
        return this.paper
    }, urule.Context.prototype.setRootJoin = function (t) {
        this.rootJoin = t
    }, urule.Context.prototype.getRootJoin = function () {
        return this.rootJoin
    }, urule.Context.prototype.getTotalChildrenCount = function () {
        return this.rootJoin.getChildrenCount()
    }
}, function (t, e, n) {
    "use strict";
    var r = n(16);
    urule.RuleProperty = function (t, e, n, i) {
        this.parent = t, this.value = n, this.editorType = i, this.container = $("<span class='rule-property'>");
        var o = $("<span>");
        this.name = e;
        var a = this.getLabel();
        URule.setDomContent(o, a + "："), this.container.append(o);
        var s = $("<span>"), c = generateContainer();
        "" == n && (n = "无"), c.css({color: "#000"}), URule.setDomContent(c, n), s.append(c), this.container.append(s);
        var f = null;
        this.radioName = (0, r.generateId)(), this.yesRadio = null, this.noRadio = null, 1 == i ? f = $("<input type='text' size='30' class='form-control rule-text-editor'>") : 2 == i ? f = $("<input type='datetime' size='30' class='form-control rule-text-editor' title='日期格式为:yyyy-MM-dd HH:mm:ss，如2016-10-11 12:50:06'>") : 3 == i && (this.yesRadio = $("<input type='radio' value='是' name='" + this.radioName + "'> 是 </input>"), this.noRadio = $("<input type='radio' value='否' name='" + this.radioName + "'> 否</input>"));
        var u = this;
        3 != i ? (f.blur(function () {
            u.value = f.prop("value"), f.hide(), "" == u.value ? URule.setDomContent(c, "无") : URule.setDomContent(c, u.value), c.show(), window._setDirty()
        }), c.click(function () {
            c.hide(), f.prop("value", u.value), f.show(), f.focus()
        }), this.container.append(f), f.hide(), 2 == i && "无" !== n && (new Date(n), this.value = n, URule.setDomContent(c, this.value))) : (1 == n ? this.yesRadio.prop("checked", !0) : this.noRadio.prop("checked", !0), this.yesRadio.change(function () {
            window._setDirty()
        }), this.noRadio.change(function () {
            window._setDirty()
        }), c.hide(), this.container.append(this.yesRadio), this.container.append(this.noRadio));
        var l = $('<i class="glyphicon glyphicon-remove rule-property-del">');
        l.click(function () {
            u.container.remove();
            var t = u.parent.properties.indexOf(u);
            u.parent.properties.splice(t, 1), window._setDirty()
        }), this.container.append(l)
    }, urule.RuleProperty.prototype.getLabel = function () {
        var t = "";
        return "salience" == this.name ? t = "优先级" : "loop" == this.name ? t = "允许循环触发" : "effective-date" == this.name ? t = "生效日期" : "expires-date" == this.name ? t = "失效日期" : "enabled" == this.name ? t = "是否启用" : "debug" == this.name ? t = "允许调试信息输出" : "activation-group" == this.name ? t = "互斥组" : "agenda-group" == this.name ? t = "执行组" : "auto-focus" == this.name ? t = "自动获取焦点" : "ruleflow-group" == this.name && (t = "规则流组"), t
    }, urule.RuleProperty.prototype.toXml = function () {
        var t = this.name;
        if (3 == this.editorType) this.yesRadio.prop("checked") ? t += '="true"' : t += '="false"'; else {
            if (!this.value || "" == this.value) throw"请输入属性" + this.name + "的具体值!";
            t += '="' + this.value + '"'
        }
        return t
    }, urule.RuleProperty.prototype.getContainer = function () {
        return this.container
    }
}, function (t, e, n) {
    "use strict";
    window.Remark = function (t) {
        this.remark = "", this.defaultRemark = "请输入备注内容", this.init(t)
    }, Remark.prototype.init = function (t) {
        var e = $("<div style='cursor:pointer;color:#777;font-size:12px'>备注</div>");
        t.append(e);
        var n = $("<i class='glyphicon glyphicon-circle-arrow-down'></i>");
        e.append(n);
        var r = $("<div class='collapse in'></div>");
        t.append(r), this.remarkLabel = $("<div style='color:#999;background: #fdfdfd;padding:5px;border:solid 1px #ddd;border-radius: 5px;font-size: 12px'>" + this.defaultRemark + "</div>"), r.append(this.remarkLabel), this.remarkEditor = $("<textarea class='form-control' rows='4'>" + this.defaultRemark + "</textarea>"), r.append(this.remarkEditor), this.remarkEditor.hide();
        var i = this;
        this.remarkLabel.click(function () {
            i.remarkEditor.show(), i.remarkEditor.focus(), i.remarkLabel.hide()
        }), this.remarkEditor.change(function () {
            i.remark = $(this).val(), "" === i.remark ? i.remarkLabel.text(i.defaultRemark) : i.remarkLabel.html(i.parseBreak(i.remark)), window.setDirty && window.setDirty(), window._setDirty && window._setDirty()
        }), this.remarkEditor.blur(function () {
            i.remarkEditor.hide(), i.remarkLabel.show()
        }), e.click(function () {
            r.collapse("toggle")
        }), r.on("show.bs.collapse", function () {
            n.removeClass("glyphicon-circle-arrow-right"), n.addClass("glyphicon-circle-arrow-down")
        }), r.on("hide.bs.collapse", function () {
            n.removeClass("glyphicon-circle-arrow-down"), n.addClass("glyphicon-circle-arrow-right")
        }), r.collapse("hide")
    }, Remark.prototype.setData = function (t) {
        t && "" !== t && (this.remark = t, this.remarkEditor.val(t), this.remarkLabel.html(this.parseBreak(t)))
    }, Remark.prototype.toXml = function () {
        return "<remark><![CDATA[" + this.remark + "]]></remark>"
    }, Remark.prototype.parseBreak = function (t) {
        return (t = (t = t.replace(new RegExp("<", "gm"), "&lt;")).replace(new RegExp(">", "gm"), "&gt;")).replace(new RegExp("\n", "gm"), "</br>")
    }
}, , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    urule.Connection = function (t, e, n) {
        this.isJoin = e, this.context = t, this.parentJoin = n
    }, urule.Connection.prototype.drawPath = function (t, e, n, r) {
        this.startX = t, this.endX = n, this.isJoin ? (this.startY = e - 3, this.endY = r + 2) : (this.startY = e - 3, this.endY = r - 3), this.path = this.context.getPaper().path(this.buildPathInfo()), this.path.attr({stroke: "#777"}), this.isJoin ? this.initJoin() : this.initCondition()
    }, urule.Connection.prototype.toXml = function () {
        return this.isJoin ? this.join.toXml() : this.condition.toXml()
    }, urule.Connection.prototype.initJoin = function () {
        this.join = new urule.Join(this.context), this.join.init(this);
        var t = this.join.getContainer(), e = this.endX + 10 + "px", n = this.endY + "px";
        t.css({position: "absolute", left: e, top: n}), this.context.getCanvas().append(t)
    }, urule.Connection.prototype.getDisplayContainer = function () {
        return this.join ? this.join.getDisplayContainer() : this.condition.getDisplayContainer()
    }, urule.Connection.prototype.remove = function () {
        this.path.remove(), this.join ? this.join.getContainer().remove() : this.conditionContainer.remove(), window._setDirty()
    }, urule.Connection.prototype.initCondition = function () {
        this.conditionContainer = $("<div>");
        var t = this.endX + 10 + "px", e = this.endY + "px";
        this.conditionContainer.css({
            position: "absolute",
            left: t,
            top: e
        }), this.condition = new urule.Condition(this.conditionContainer);
        var n = $('<i class="glyphicon glyphicon-trash" style="color: #019dff;cursor: pointer;font-size: 9pt;padding-left:5px"></i>'),
            r = this;
        n.click(function () {
            r.parentJoin.removeConnection(r)
        }), this.conditionContainer.append(n), this.context.getCanvas().append(this.conditionContainer)
    }, urule.Connection.prototype.update = function (t) {
        var e = this.buildPathInfo();
        this.path.attr("path", e);
        var n = this.endY + "px";
        this.conditionContainer ? this.conditionContainer.css({top: n}) : this.join.getContainer().css({top: n}), this.join && this.join.resetItemPosition(0, t)
    }, urule.Connection.prototype.getParentJoin = function () {
        return this.parentJoin
    }, urule.Connection.prototype.getCondition = function () {
        return this.condition
    }, urule.Connection.prototype.getJoin = function () {
        return this.join
    }, urule.Connection.prototype.getStartX = function () {
        return this.startX
    }, urule.Connection.prototype.getStartY = function () {
        return this.startY
    }, urule.Connection.prototype.getEndX = function () {
        return this.endX
    }, urule.Connection.prototype.getEndY = function () {
        return this.endY
    }, urule.Connection.prototype.setStartX = function (t) {
        this.startX = t
    }, urule.Connection.prototype.setStartY = function (t) {
        this.startY = t
    }, urule.Connection.prototype.setEndX = function (t) {
        this.endX = t
    }, urule.Connection.prototype.setEndY = function (t) {
        this.endY = t
    }, urule.Connection.prototype.buildPathInfo = function () {
        return "M" + (this.startX + 10) + "," + (this.startY + 8) + " C" + (this.startX + 10) + "," + (this.endY + 8) + "," + (this.startX + 10) + "," + (this.endY + 8) + "," + (this.endX + 10) + "," + (this.endY + 8)
    }
}, function (t, e, n) {
    "use strict";
    urule.Join = function (t) {
        this.type = "and", this.context = t, this.H = 30, this.W = 60, this.children = [], this.joinContainer = $("<span class='btn btn-default dropdown-toggle'></span>"), this.joinContainer.css({
            border: "solid gray 1px",
            padding: "3px",
            background: "#fff"
        }), this.joinLabel = $("<span>并且</span>"), this.joinContainer.append(this.joinLabel)
    }, urule.Join.prototype.initData = function (t) {
        var e = [], n = t.conditions, r = t.joints;
        if (this.setType(t.type), n && (e = n), r && (e = e.concat(r)), 0 != e.length) for (var i = 0; i < e.length; i++) {
            var o = e[i], a = !1;
            o.type && (a = !0);
            var s = this.addItem(a);
            a ? s.getJoin().initData(o) : s.getCondition().initData(o)
        }
    }, urule.Join.prototype.setType = function (t) {
        this.type = t, "or" == t ? URule.setDomContent(this.joinLabel, "或者") : URule.setDomContent(this.joinLabel, "并且"), window._setDirty()
    }, urule.Join.prototype.init = function (t) {
        t && (this.parentConnection = t, this.parent = t.getParentJoin());
        var e = $('<i class="glyphicon glyphicon-chevron-down rule-join-node"></i>'), n = this;
        n.menu = new URule.menu.Menu({
            menuItems: [{
                label: "并且", onClick: function () {
                    n.setType("and")
                }
            }, {
                label: "或者", onClick: function () {
                    n.setType("or")
                }
            }, {
                label: "添加条件", onClick: function () {
                    n.addItem(!1)
                }
            }]
        }), this.joinContainer.click(function (t) {
            n.menu.show(t)
        }), this.joinContainer.append(e)
    }, urule.Join.prototype.clean = function () {
        for (; this.children.length > 0;) {
            var t = this.children[0];
            this.removeConnection(t)
        }
    }, urule.Join.prototype.removeConnection = function (t) {
        var e = this.children.indexOf(t);
        this.children.length > 1 && this.resetItemPosition(e + 1, !1), t.remove(), this.children.splice(e, 1), this.resetContainerSize(), window._setDirty()
    }, urule.Join.prototype.addItem = function (t) {
        window._setDirty();
        var e = this.getChildrenCount();
        if (e > 0 && this.parent) {
            var n = this.parent.getChildren().indexOf(this.parentConnection);
            this.parent.resetItemPosition(n + 1, !0)
        }
        var r = e * this.H, i = parseInt(this.joinContainer.css("left")), o = parseInt(this.joinContainer.css("top")),
            a = i + this.W / 2, s = o + this.H / 5, c = a + this.W - 25, f = s + r;
        t && (f -= 5);
        var u = new urule.Connection(this.context, t, this);
        return u.drawPath(a, s, c, f), this.children.push(u), this.resetContainerSize(), u
    }, urule.Join.prototype.toXml = function () {
        for (var t = '<joint type="' + this.type + '">', e = 0; e < this.children.length; e++) t += this.children[e].toXml();
        return t + "</joint>"
    }, urule.Join.prototype.resetItemPosition = function (t, e) {
        if (-1 != t) {
            for (var n = t; n < this.children.length; n++) {
                var r = this.children[n], i = this.H;
                e || (i = -this.H), r.setEndY(r.getEndY() + i), 0 == t && r.setStartY(r.getStartY() + i), r.update(e)
            }
            if (t > 0 && this.parent) {
                var o = this.parent.getChildren().indexOf(this.parentConnection);
                this.parentConnection.getParentJoin().resetItemPosition(o + 1, e)
            }
            window._setDirty()
        }
    }, urule.Join.prototype.resetContainerSize = function () {
        var t = this.context.getCanvas(), e = t.css("height");
        e = parseInt(e);
        var n = this.context.getTotalChildrenCount();
        0 == n && (n = 1);
        var r = n * this.H + 10;
        t.css({height: r + "px"})
    }, urule.Join.prototype.getChildrenCount = function () {
        for (var t = 0, e = 0; e < this.children.length; e++) {
            var n = this.children[e].getJoin();
            if (n) {
                var r = n.getChildrenCount();
                0 == r && (r = 1), t += r
            } else t++
        }
        return t
    }, urule.Join.prototype.initTopJoin = function (t) {
        this.joinContainer.css({
            position: "absolute",
            left: 5,
            top: 5
        }), t.append(this.joinContainer), this.context.setRootJoin(this)
    }, urule.Join.prototype.getDisplayContainer = function () {
        if (0 == this.children.length) return null;
        for (var t = $("<span>"), e = 0; e < this.children.length; e++) {
            var n = this.children[e].getDisplayContainer();
            n && (e > 0 && ("or" == this.type ? t.append($("<span style='color:green'>&nbsp或&nbsp</span>")) : t.append($("<span style='color:red'>&nbsp并且&nbsp</span>"))), t.append(n))
        }
        return t
    }, urule.Join.prototype.getChildren = function () {
        return this.children
    }, urule.Join.prototype.getContainer = function () {
        return this.joinContainer
    }
}, function (t, e, n) {
    "use strict";
    urule.Condition = function (t) {
        this.container = $("<span>"), t.append(this.container);
        var e = this;
        this.operator = new urule.ComparisonOperator(function () {
            e.inputType = e.operator.getInputType(), e.inputType && e.container.append(e.inputType.getContainer())
        }), e.container.append(this.operator.getContainer())
    }, urule.Condition.prototype.initData = function (t) {
        var e = t.op;
        this.operator.setOperator(e), this.operator.initRightValue(t.value), this.inputType = this.operator.getInputType(), this.inputType && this.container.append(this.inputType.getContainer())
    }, urule.Condition.prototype.getDisplayContainer = function () {
        var t = $("<span>"), e = URule.getDomContent(this.operator.getContainer());
        return t.append($("<span style='color:blue'>" + e + "</span>")), this.inputType && t.append(this.inputType.getDisplayContainer()), t
    }, urule.Condition.prototype.toXml = function () {
        var t = '<condition op="' + this.operator.getOperator() + '">';
        return this.inputType && (t += this.inputType.toXml()), t + "</condition>"
    }, urule.Condition.prototype.getOperator = function () {
        return this.operator
    }, urule.Condition.prototype.getInputType = function () {
        return this.inputType
    }
}, function (t, e, n) {
    "use strict";
    window._conditionId = 0, urule.CellCondition = function (t) {
        this.container = $(t), this.container.css({height: "40px", position: "relative"});
        var e = new urule.Context(this.container);
        this.join = new urule.Join(e), this.join.init(null), this.join.initTopJoin(this.container), this.join.setType("and"), this.id = window._conditionId++
    }, urule.CellCondition.prototype.clean = function () {
        this.join.clean(), window._setDirty()
    }, urule.CellCondition.prototype.getId = function () {
        return this.id
    }, urule.CellCondition.prototype.renderTo = function (t) {
        t.append(this.container)
    }, urule.CellCondition.prototype.getDisplayContainer = function () {
        var t = null;
        return this.join && (t = this.join.getDisplayContainer()), t || (t = $("<span style='color:gray'>无</span>")), t
    }, urule.CellCondition.prototype.initData = function (t) {
        this.join && this.join.initData(t)
    }, urule.CellCondition.prototype.toXml = function () {
        return this.join.toXml()
    }
}, , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.complexTable = e, this.actionType = 0
        }

        return r(t, [{
            key: "fetchConditionCell", value: function (t, e) {
                var n = this._findConditionCell(t, e);
                if (n) return n;
                for (var r = this.complexTable.contentRows, i = r.indexOf(t) - 1; i >= 0; i--) {
                    var o = r[i];
                    if (n = this._findConditionCell(o, e)) break
                }
                return n
            }
        }, {
            key: "_findConditionCell", value: function (t, e) {
                var n = null, r = t.conditionCells, i = !0, o = !1, a = void 0;
                try {
                    for (var s, c = r[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                        var f = s.value;
                        if (f.conditionCol === e) {
                            n = f;
                            break
                        }
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }
        }, {
            key: "fetchActionCell", value: function (t, e) {
                var n = this._findActionCell(t, e);
                if (n) return n;
                for (var r = this.complexTable.contentRows, i = r.indexOf(t) - 1; i >= 0; i--) {
                    var o = r[i];
                    if (n = this._findActionCell(o, e)) break
                }
                return n
            }
        }, {
            key: "_findActionCell", value: function (t, e) {
                var n = null, r = t.actionCells, i = !0, o = !1, a = void 0;
                try {
                    for (var s, c = r[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                        var f = s.value;
                        if (f.contentRow === t && f.actionCol === e) {
                            n = f;
                            break
                        }
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }
        }, {
            key: "setRefHeaderCell", value: function (t) {
                this.refHeaderCell = t, this.refHeaderCellIndex = this.complexTable.headerRow.conditionHeaders.indexOf(t), -1 === this.refHeaderCellIndex && (this.refHeaderCellIndex = this.complexTable.headerRow.actionHeaders.indexOf(t))
            }
        }, {
            key: "setBefore", value: function (t) {
                this.before = t
            }
        }, {
            key: "setRefConditionCell", value: function (t) {
                this.refConditionCell = t
            }
        }, {
            key: "setActionType", value: function (t) {
                this.actionType = t
            }
        }, {
            key: "setRowCells", value: function (t) {
                this.rowCells = t
            }
        }, {
            key: "setWidth", value: function (t) {
                this.width = t
            }
        }, {
            key: "setCustomActionHeaderLabel", value: function (t) {
                this.customActionHeaderLabel = t
            }
        }]), t
    }();
    e.default = i
}, , , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t(e, n) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.scoringType = "sum", this.notWeight = n, this.container = e, this.initScoringSetting(), this.initAssignSetting()
        }

        return r(t, [{
            key: "initData", value: function (t) {
                var e = t.scoringType;
                e && (this.scoringSettingSelect.val(e), this.scoringType = e, "custom" === e && (this.customContainer.show(), this.customScoringBean = t.scoringBean, this.customBeanEditor.val(this.customScoringBean)));
                var n = t.assignTargetType;
                n && (this.assignTargetType = n, "variable" === n ? (this.variableTarget.getContainer().show(), this.variableTarget.setValue(t), URule.setDomContent(this.assignTargetContainer, "."), this.assignTargetContainer.css({color: "white"})) : "parameter" === n ? (this.parameterTarget.getContainer().show(), this.parameterTarget.setValue(t), URule.setDomContent(this.assignTargetContainer, "."), this.assignTargetContainer.css({color: "white"})) : (URule.setDomContent(this.assignTargetContainer, "不赋值"), this.assignTargetContainer.css({color: "#999"})))
            }
        }, {
            key: "initScoringSetting", value: function () {
                var t = $('<div style="margin: 5px;">得分计算方式：</div>');
                this.container.append(t), this.scoringSettingSelect = $('<select class="form-control" style="display: inline-block;width:120px;height:30px;padding: 3px;"></select>'), t.append(this.scoringSettingSelect), this.scoringSettingSelect.append('<option value="sum" selected>求和</option>'), this.notWeight || this.scoringSettingSelect.append('<option value="weightsum">加权求和</option>'), this.scoringSettingSelect.append('<option value="custom">自定义</option>'), this.customContainer = $('<span style="margin: 15px;">自定义计算得分的Bean ID：</span>'), t.append(this.customContainer), this.customContainer.hide(), this.customBeanEditor = $('<input type="text" class="form-control" style="width: 200px;display: inline-block">'), this.customContainer.append(this.customBeanEditor);
                var e = this;
                this.customBeanEditor.change(function () {
                    e.customScoringBean = $(this).val()
                }), this.scoringSettingSelect.change(function () {
                    e.scoringType = $(this).val(), "custom" === e.scoringType ? e.customContainer.show() : e.customContainer.hide()
                })
            }
        }, {
            key: "initAssignSetting", value: function () {
                var t = $('<div style="margin: 15px 5px">将得分值赋给：</div>');
                this.container.append(t), this.assignTargetContainer = generateContainer(), t.append(this.assignTargetContainer), URule.setDomContent(this.assignTargetContainer, "请选择值类型"), this.assignTargetContainer.css({color: "blue"}), this.variableTarget = new urule.VariableValue(null, null, "Out"), this.parameterTarget = new urule.ParameterValue(null, null, "Out"), this.variableTarget.getContainer().hide(), this.parameterTarget.getContainer().hide(), t.append(this.variableTarget.getContainer()), t.append(this.parameterTarget.getContainer());
                var e = this;
                e.menu = new URule.menu.Menu({
                    menuItems: [{
                        label: "选择变量", onClick: function () {
                            e.parameterTarget.getContainer().hide(), e.variableTarget.getContainer().show(), e.assignTargetType = "variable", URule.setDomContent(e.assignTargetContainer, "."), e.assignTargetContainer.css({color: "white"})
                        }
                    }, {
                        label: "选择参数", onClick: function () {
                            e.variableTarget.getContainer().hide(), e.parameterTarget.getContainer().show(), e.assignTargetType = "parameter", URule.setDomContent(e.assignTargetContainer, "."), e.assignTargetContainer.css({color: "white"})
                        }
                    }, {
                        label: "不赋值", onClick: function () {
                            e.variableTarget.getContainer().hide(), e.parameterTarget.getContainer().hide(), e.assignTargetType = "none", URule.setDomContent(e.assignTargetContainer, "不赋值"), e.assignTargetContainer.css({color: "#999"})
                        }
                    }]
                }), this.assignTargetContainer.click(function (t) {
                    e.menu.show(t)
                })
            }
        }, {
            key: "toXml", value: function () {
                if (!this.scoringType) throw"请选择得分计算方式";
                if (!this.assignTargetType) throw"请选择得分赋值对象";
                if ("custom" === this.scoringType && (!this.customScoringBean || this.customScoringBean.length < 1)) throw"请输入自定义计算得分的Bean ID";
                var t = ' scoring-type="' + this.scoringType + '" assign-target-type="' + this.assignTargetType + '" ';
                return "variable" === this.assignTargetType ? t += this.variableTarget.toXml() : "parameter" === this.assignTargetType && (t += this.parameterTarget.toXml()), "custom" === this.scoringType && (t += ' custom-scoring-bean="' + this.customScoringBean + '"'), t
            }
        }]), t
    }();
    e.default = i
}, , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r, i = (r = n(318)) && r.__esModule ? r : {default: r}, o = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)), r = function (e) {
                var n = $(this), r = n.get(0).clientWidth, i = n.get(0).clientHeight,
                    o = t.complexTable.getHighlightDiv();
                o.css({
                    width: r + "px",
                    height: i + "px"
                }), n.prepend(o), o.currentTD = n, n.on("DOMSubtreeModified", function () {
                    var t = n.get(0).clientWidth, e = n.get(0).clientHeight;
                    o.css({width: t + "px", height: e + "px"})
                })
            };
            return n.td.click(r), n.td.contextmenu(r), n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.default), e
    }();
    e.default = o
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = function t(e) {
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.td = $('<td style="position: relative;"></td>')
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r, i = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), o = (r = n(318)) && r.__esModule ? r : {default: r}, a = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.td.css("padding-right", "0"), n.td.append(n.buildColResizeTrigger()), n.bindColResize(t), n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, o.default), i(e, [{
            key: "buildColResizeTrigger", value: function () {
                return this.resizeTrigger = $('<span style="cursor: col-resize;width: 3px;height: 20px;float: right;border: solid 2px transparent;">&nbsp;</span>'), this.resizeTrigger
            }
        }, {
            key: "bindColResize", value: function (t) {
                var e = !1, n = void 0, r = void 0, i = void 0, o = this;
                this.resizeTrigger.mouseover(function () {
                    $(this).css("border", "solid 2px #999")
                }), this.resizeTrigger.mouseout(function () {
                    $(this).css("border", "solid 2px transparent")
                }), this.resizeTrigger.mousedown(function (t) {
                    n = $(this).parent(), e = !0, r = t.pageX, i = n.width(), t.preventDefault()
                }), $(document).mousemove(function (a) {
                    if (e) {
                        var s = i + (a.pageX - r);
                        o.actionCol ? o.actionCol.width = s : o.conditionCol.width = s, n.width(s), o._rebuildHighLightDiv(t), a.preventDefault()
                    }
                }), $(document).mouseup(function (t) {
                    e = !1, window._setDirty()
                })
            }
        }, {
            key: "_rebuildHighLightDiv", value: function (t) {
                var e = t.getHighlightDiv(), n = e.currentTD;
                if (n) {
                    var r = n.get(0).clientWidth, i = n.get(0).clientHeight;
                    e.css({width: r + "px", height: i + "px"})
                }
            }
        }]), e
    }();
    e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = function t() {
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.tr = $('<tr style="height: 30px;"></tr>')
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.actionType = e.actionType, this.id = e.complexTable.nextId(), this.init(e)
        }

        return r(t, [{
            key: "init", value: function (t) {
                var e = t.complexTable, n = !0, r = !1, i = void 0;
                try {
                    for (var o, a = e.contentRows[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) o.value.addNewActionCell(t, this)
                } catch (t) {
                    r = !0, i = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (r) throw i
                    }
                }
                e.headerRow.addActionHeader(t, this)
            }
        }]), t
    }();
    e.default = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.complexTable = e.complexTable, this.id = e.complexTable.nextId(), this.init(e)
        }

        return r(t, [{
            key: "init", value: function (t) {
                var e = t.complexTable, n = !0, r = !1, i = void 0;
                try {
                    for (var o, a = e.contentRows[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) o.value.addNewConditionCell(t, this)
                } catch (t) {
                    r = !0, i = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (r) throw i
                    }
                }
                e.headerRow.addConditionHeader(t, this)
            }
        }, {
            key: "refreshConditionCellVariableMenus", value: function () {
                var t = this.complexTable.contentRows, e = !0, n = !1, r = void 0;
                try {
                    for (var i, o = t[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        var a = i.value, s = !0, c = !1, f = void 0;
                        try {
                            for (var u, l = a.conditionCells[Symbol.iterator](); !(s = (u = l.next()).done); s = !0) {
                                var h = u.value;
                                h.conditionCol === this && h.refreshVariableMenus()
                            }
                        } catch (t) {
                            c = !0, f = t
                        } finally {
                            try {
                                !s && l.return && l.return()
                            } finally {
                                if (c) throw f
                            }
                        }
                    }
                } catch (t) {
                    n = !0, r = t
                } finally {
                    try {
                        !e && o.return && o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
        }]), t
    }();
    e.default = i
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r, i = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), o = (r = n(317)) && r.__esModule ? r : {default: r}, a = n(27), s = n(16), c = function (t) {
        function e(t, n, r) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return i.contentRow = n, i.actionCol = r, i.init(), i
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, o.default), i(e, [{
            key: "init", value: function () {
                this.container = $('<div style="position: relative;"></div>'), this.td.append(this.container), this.td.click(function (t) {
                    window._currentConditionCell = null
                }), this.inputType = new urule.InputType(null, "无"), this.container.append(this.inputType.getContainer());
                var t = this, e = {
                    menuItems: [{
                        label: "清空", icon: "glyphicon glyphicon-trash", onClick: function () {
                            a.MsgBox.confirm("真的要清空当前单元格内容吗？", function () {
                                t.inputType.getContainer().remove(), t.inputType = new urule.InputType(null, "无"), t.container.append(t.inputType.getContainer()), window._setDirty()
                            })
                        }
                    }, {
                        label: "复制", icon: "glyphicon glyphicon-copy", onClick: function () {
                            var e = t.toXml();
                            e && "" !== e ? (0, s.copyCellData)("value", e) : bootbox.alert("当前没有内容可供复制!")
                        }
                    }, {
                        label: "粘贴", icon: "glyphicon glyphicon-paste", onClick: function () {
                            (0, s.pasteCellData)("value", function (e) {
                                t.inputType.getContainer().remove(), t.inputType = new urule.InputType(null, "无"), t.container.append(t.inputType.getContainer()), t.inputType.setValueType(e.valueType, e)
                            })
                        }
                    }]
                }, n = new URule.menu.Menu(e);
                this.td.contextmenu(function (t) {
                    n.show(t)
                })
            }
        }, {
            key: "toXml", value: function () {
                return this.inputType.toXml()
            }
        }, {
            key: "initData", value: function (t) {
                if (t && t.value) {
                    var e = t.value;
                    this.inputType.setValueType(e.valueType, e)
                }
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = c(n(317)), o = c(n(281)), a = n(27), s = n(16);

    function c(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var f = function (t) {
        function e(t, n, r) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return i.contentRow = n, i.conditionCol = r, i.init(t), i
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.default), r(e, [{
            key: "init", value: function (t) {
                var e = this;
                this.propContainer = generateContainer(), URule.setDomContent(this.propContainer, "请选择属性"), this.td.append(this.propContainer), this.propContainer.css({
                    color: "#999",
                    position: "relative"
                }), this.refreshVariableMenus(), this.container = $("<div>无</div>"), this.td.append(this.container), this.td.click(function () {
                    window._currentConditionCell = e
                });
                var n = {
                    menuItems: [{
                        label: "配置条件", icon: "glyphicon glyphicon-cog", onClick: function () {
                            e.configCondition(e.container)
                        }
                    }, {
                        label: "添加条件行", icon: "glyphicon glyphicon-plus-sign", onClick: function () {
                            e.insertRow(t.complexTable)
                        }
                    }, {
                        label: "删除条件行", icon: "glyphicon glyphicon-minus-sign", onClick: function () {
                            a.MsgBox.confirm("真的要当前删除条件行？", function () {
                                e.deleteRow(t.complexTable)
                            })
                        }
                    }, {
                        label: "清空条件", icon: "glyphicon glyphicon-trash", onClick: function () {
                            a.MsgBox.confirm("真的要清空当前单元格内容？", function () {
                                e.cellCondition && (e.cellCondition.clean(), e.container.html("无"), e.container.css("color", "gray")), window._setDirty()
                            })
                        }
                    }, {
                        label: "复制", icon: "glyphicon glyphicon-copy", onClick: function () {
                            var t = e.toXml();
                            t && "" !== t ? (0, s.copyCellData)("condition", t) : bootbox.alert("当前没有内容可供复制!")
                        }
                    }, {
                        label: "粘贴", icon: "glyphicon glyphicon-paste", onClick: function (t) {
                            (0, s.pasteCellData)("condition", function (t) {
                                e.cellCondition && e.cellCondition.clean(), e.cellCondition = new urule.CellCondition("<div/>"), e.cellCondition.initData(t), e.container.empty(), e.container.append(e.cellCondition.getDisplayContainer())
                            })
                        }
                    }]
                }, r = new URule.menu.Menu(n);
                this.td.contextmenu(function (t) {
                    r.show(t)
                })
            }
        }, {
            key: "initData", value: function (t) {
                t.joint && (this.cellCondition = new urule.CellCondition("<div/>"), this.cellCondition.initData(t.joint), this.container.empty(), this.container.append(this.cellCondition.getDisplayContainer())), t.variableLabel && (this.variableLabel = t.variableLabel, this.variableName = t.variableName, this.datatype = t.datatype, URule.setDomContent(this.propContainer, this.variableLabel || this.variableName), this.propContainer.css("color", "#1d1d1d"))
            }
        }, {
            key: "refreshVariableMenus", value: function () {
                var t = this.conditionCol.variables || [], e = this.buildClickFunction(), n = [], r = !0, i = !1,
                    o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                        var c = a.value;
                        n.push({
                            icon: "glyphicon glyphicon-tasks",
                            name: c.name,
                            label: c.label,
                            datatype: c.type,
                            onClick: e
                        })
                    }
                } catch (t) {
                    i = !0, o = t
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                var f = this;
                this.propContainer.menu ? this.propContainer.menu.setConfig({menuItems: n}) : (this.propContainer.menu = new URule.menu.Menu({menuItems: n}), this.propContainer.click(function (t) {
                    f.propContainer.menu.show(t)
                }))
            }
        }, {
            key: "buildClickFunction", value: function () {
                var t = this;
                return function (e) {
                    t.variableLabel = e.label, t.variableName = e.name, t.datatype = e.datatype, t.propContainer.html(t.variableLabel), t.propContainer.css("color", "#1d1d1d")
                }
            }
        }, {
            key: "configCondition", value: function (t) {
                var e = $("<div/>");
                this.cellCondition || (this.cellCondition = new urule.CellCondition("<div/>"));
                var n = this;
                this.cellCondition.renderTo(e), a.MsgBox.showDialog("配置条件", e, [], [{
                    name: "hide.bs.modal",
                    callback: function () {
                        t.empty(), t.append(n.cellCondition.getDisplayContainer())
                    }
                }], !0)
            }
        }, {
            key: "increaseRowSpan", value: function () {
                var t = this.td.prop("rowspan");
                t || (t = 1), t++, this.rowSpan = t, this.td.prop("rowspan", t)
            }
        }, {
            key: "insertRow", value: function (t) {
                var e = new o.default(t);
                e.setRefConditionCell(this), t.addRow(e)
            }
        }, {
            key: "deleteRow", value: function (t) {
                var e = this.td.prop("rowspan"), n = e;
                if (e !== t.contentRows.length) {
                    e || (e = 1);
                    for (var r = new o.default(t), i = t.contentRows.indexOf(this.contentRow), a = i + e, s = i; s < a; s++) {
                        for (var c = t.contentRows[s], f = t.conditionColumns.length - 1; f >= 0; f--) {
                            var u = t.conditionColumns[f], l = r._findConditionCell(c, u);
                            if (l) {
                                var h = l.td.prop("rowspan");
                                if (h > 1 && h > n) {
                                    h--, l.td.prop("rowspan", h);
                                    var d = t.conditionColumns[f + 1], p = this._findNextRowCellInfo(s + 1, t, d),
                                        b = p.targetRow;
                                    l.contentRow = b;
                                    var g = p.targetCell, y = p.targetRowConditionCellIndex;
                                    g.td.before(l.td), b.conditionCells.splice(y, 0, l)
                                }
                            } else {
                                var m = r.fetchConditionCell(c, u), v = m.td.prop("rowspan");
                                v--, m.td.prop("rowspan", v)
                            }
                        }
                        c.tr.remove()
                    }
                    t.contentRows.splice(i, e)
                } else bootbox.alert("条件行至少要保留一行!")
            }
        }, {
            key: "_findNextRowCellInfo", value: function (t, e, n) {
                for (var r = null, i = null, o = -1, a = t; a < e.contentRows.length; a++) {
                    o = -1;
                    var s = e.contentRows[a], c = !0, f = !1, u = void 0;
                    try {
                        for (var l, h = s.conditionCells[Symbol.iterator](); !(c = (l = h.next()).done); c = !0) {
                            var d = l.value;
                            if (d.conditionCol === n) {
                                r = d, i = s, o++;
                                break
                            }
                        }
                    } catch (t) {
                        f = !0, u = t
                    } finally {
                        try {
                            !c && h.return && h.return()
                        } finally {
                            if (f) throw u
                        }
                    }
                    if (r) break
                }
                return {targetCell: r, targetRow: i, targetRowConditionCellIndex: o}
            }
        }, {
            key: "toXml", value: function () {
                return this.cellCondition ? this.cellCondition.toXml() : ""
            }
        }]), e
    }();
    e.default = f
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = s(n(320)), o = s(n(349)), a = s(n(348));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n.id = t.complexTable.nextId(), n.conditionCells = [], n.actionCells = [], n.init(t), n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.default), r(e, [{
            key: "init", value: function (t) {
                this.tr = $("<tr></tr>"), this.initNewConditionCell(t), this.initNewActionCell(t)
            }
        }, {
            key: "initNewConditionCell", value: function (t) {
                var e = t.complexTable, n = t.refConditionCell;
                if (n) for (var r = n.contentRow, i = n.conditionCol, a = e.conditionColumns.indexOf(i), s = 0; s < e.conditionColumns.length; s++) {
                    var c = e.conditionColumns[s];
                    if (s < a) t.fetchConditionCell(r, c).increaseRowSpan(); else {
                        var f = new o.default(t, this, c);
                        this.conditionCells.push(f), this.tr.append(f.td)
                    }
                } else {
                    var u = t.rowCells, l = 0, h = !0, d = !1, p = void 0;
                    try {
                        for (var b, g = e.conditionColumns[Symbol.iterator](); !(h = (b = g.next()).done); h = !0) {
                            var y = b.value;
                            if (u) {
                                var m = this.findCell(u, l);
                                if (m) {
                                    var v = new o.default(t, this, y);
                                    this.conditionCells.push(v), this.tr.append(v.td), v.initData(m);
                                    var A = m.rowspan;
                                    v.td.prop("rowspan", A)
                                }
                            } else {
                                var w = new o.default(t, this, y);
                                this.conditionCells.push(w), this.tr.append(w.td)
                            }
                            l++
                        }
                    } catch (t) {
                        d = !0, p = t
                    } finally {
                        try {
                            !h && g.return && g.return()
                        } finally {
                            if (d) throw p
                        }
                    }
                }
            }
        }, {
            key: "findCell", value: function (t, e) {
                var n = void 0, r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                        var c = a.value;
                        if (c.col === e) {
                            n = c;
                            break
                        }
                    }
                } catch (t) {
                    i = !0, o = t
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
        }, {
            key: "initNewActionCell", value: function (t) {
                var e = t.rowCells, n = t.complexTable, r = n.conditionColumns.length, i = !0, o = !1, s = void 0;
                try {
                    for (var c, f = n.actionColumns[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) {
                        var u = c.value, l = new a.default(t, this, u);
                        if (this.actionCells.push(l), this.tr.append(l.td), e) {
                            var h = this.findCell(e, r);
                            h && l.initData(h)
                        }
                        r++
                    }
                } catch (t) {
                    o = !0, s = t
                } finally {
                    try {
                        !i && f.return && f.return()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }, {
            key: "addNewConditionCell", value: function (t, e) {
                if (!t.before && t.refHeaderCellIndex === t.complexTable.headerRow.conditionHeaders.length - 1) {
                    var n = new o.default(t, this, e), r = this.conditionCells.length;
                    return 0 === r ? this.tr.children(":first-child").before(n.td) : this.conditionCells[r - 1].td.after(n.td), void this.conditionCells.push(n)
                }
                for (var i = t.refHeaderCell.conditionCol, a = null, s = -1, c = 0; c < this.conditionCells.length; c++) {
                    var f = this.conditionCells[c];
                    if (f.conditionCol === i) {
                        a = f, s = c;
                        break
                    }
                }
                if (a) {
                    var u = new o.default(t, this, e), l = a.td.prop("rowspan");
                    l && u.td.prop("rowspan", l), t.before ? (a.td.before(u.td), this.conditionCells.splice(s, 0, u)) : (a.td.after(u.td), this.conditionCells.splice(s + 1, 0, u))
                }
            }
        }, {
            key: "addNewActionCell", value: function (t, e) {
                var n = t.complexTable, r = t.refHeaderCell, i = new a.default(t, this, e),
                    o = n.headerRow.actionHeaders.indexOf(r), s = this.actionCells[o];
                t.before ? (s.td.before(i.td), 0 === o && this.actionCells[0].td.css("border-left", "inherit"), this.actionCells.splice(o, 0, i)) : (s.td.after(i.td), this.actionCells.splice(o + 1, 0, i))
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = s(n(319)), o = s(n(281)), a = n(27);

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e(t, n, r) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return i.complexTable = t, i.actionCol = r, r.actionHeaderCell = i, i.actionCol.width = 150, i.variableCategoryList = [], i.parameterList = [], i.init(t, n), i
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.default), r(e, [{
            key: "init", value: function (t, e) {
                this.td.css("width", "150px");
                var n = $("<div></div>");
                this.td.append(n), this.actionType = e, 1 === e ? (n.append("<span></span>"), this.labelContainer = $('<span><span style="color: #ff7734;"><strong>分值</strong></span></span>'), n.append(this.labelContainer)) : 2 === e && (this.labelContainer = $('<span style="color: #31708f;"></span>'), n.append(this.labelContainer)), this.buildMenu()
            }
        }, {
            key: "insertActionColumn", value: function (t, e) {
                var n = this;
                bootbox.prompt("请输入自定义列名称：", function (r) {
                    if (r) {
                        var i = new o.default(t);
                        i.setCustomActionHeaderLabel(r), i.setActionType(e), i.setRefHeaderCell(n), t.addActionColumn(i), window._setDirty()
                    } else bootbox.alert("自定义列名不能为空！")
                })
            }
        }, {
            key: "deleteColumn", value: function (t) {
                var e = t.headerRow.actionHeaders.indexOf(this);
                t.headerRow.actionHeaders.splice(e, 1), this.td.remove();
                var n = !0, r = !1, i = void 0;
                try {
                    for (var o, a = t.contentRows[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                        var s = o.value, c = s.actionCells[e];
                        s.actionCells.splice(e, 1), c.td.remove()
                    }
                } catch (t) {
                    r = !0, i = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (r) throw i
                    }
                }
                e = t.actionColumns.indexOf(this.actionCol), t.actionColumns.splice(e, 1), 0 === e && t.rebuildBorder(), window._setDirty()
            }
        }, {
            key: "updateLabel", value: function (t) {
                t ? (this.customLabel = t, this.labelContainer.html(t)) : this.labelContainer.html("")
            }
        }, {
            key: "buildMenu", value: function () {
                var t = this, e = this.complexTable, n = {
                    menuItems: [{
                        label: "插入自定义列", icon: "glyphicon glyphicon-tasks", onClick: function () {
                            t.insertActionColumn(e, 2)
                        }
                    }]
                };
                2 === this.actionType && n.menuItems.push({
                    label: "删除当前自定义列",
                    icon: "glyphicon glyphicon-minus-sign",
                    onClick: function () {
                        a.MsgBox.confirm("真的要删除当前列？", function () {
                            t.deleteColumn(e)
                        })
                    }
                });
                var r = new URule.menu.Menu(n);
                this.td.contextmenu(function (t) {
                    r.show(t)
                })
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = s(n(319)), o = s(n(281)), a = n(27);

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e(t, n) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return r.complexTable = t, r.conditionCol = n, r.conditionCol.width = 200, r.variableCategoryList = [], r.parameterList = [], r.init(t), r
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.default), r(e, [{
            key: "init", value: function (t) {
                this.td.css("width", "200px");
                var e = $('<div><i class="glyphicon glyphicon-filter"></i></div>');
                this.td.append(e), this.labelContainer = $('<span style="color: #727171">请选择参数或变量</span>'), e.append(this.labelContainer), window._VariableValueArray.push(this), window._ParameterValueArray.push(this), this.initMenu([]), window._uruleEditorVariableLibraries && this.initMenu(window._uruleEditorVariableLibraries), window._uruleEditorParameterLibraries && this.initMenu(window._uruleEditorParameterLibraries, 1)
            }
        }, {
            key: "insertColumn", value: function (t, e) {
                var n = new o.default(t);
                n.setRefHeaderCell(this), n.setBefore(e), t.addConditionColumn(n), window._setDirty()
            }
        }, {
            key: "deleteColumn", value: function (t) {
                if (t.headerRow.conditionHeaders.length < 2) bootbox.alert("条件列至少要有一列！"); else {
                    var e = window._VariableValueArray.indexOf(this);
                    e > -1 && window._VariableValueArray.splice(e, 1);
                    var n = t.headerRow.conditionHeaders.indexOf(this);
                    t.headerRow.conditionHeaders.splice(n, 1), this.td.remove();
                    var r = !0, i = !1, o = void 0;
                    try {
                        for (var a, s = t.contentRows[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                            var c = a.value, f = null, u = !0, l = !1, h = void 0;
                            try {
                                for (var d, p = c.conditionCells[Symbol.iterator](); !(u = (d = p.next()).done); u = !0) {
                                    var b = d.value;
                                    if (b.conditionCol === this.conditionCol) {
                                        f = b;
                                        break
                                    }
                                }
                            } catch (t) {
                                l = !0, h = t
                            } finally {
                                try {
                                    !u && p.return && p.return()
                                } finally {
                                    if (l) throw h
                                }
                            }
                            f && (n = c.conditionCells.indexOf(f), c.conditionCells.splice(n, 1), f.td.remove())
                        }
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    n = t.conditionColumns.indexOf(this.conditionCol), t.conditionColumns.splice(n, 1), window._setDirty()
                }
            }
        }, {
            key: "updateLabel", value: function (t) {
                if (t.variableCategory) {
                    var e = this.conditionCol;
                    e.variableCategory = t.variableCategory, e.variables = t.variables, this.labelContainer.html(e.variableCategory), this.labelContainer.css("color", "#1d1d1d"), "参数" === this.variableCategory ? this.labelContainer.css("font-weight", "bold") : this.labelContainer.css("font-weight", "normal")
                } else this.labelContainer.html('<span style="color: #727171">请选择参数或变量</span>')
            }
        }, {
            key: "initMenu", value: function (t, e) {
                var n = this, r = this.conditionCol, i = function (t) {
                    if (r.variableCategory = t.label, n.labelContainer.html(r.variableCategory), n.labelContainer.css("color", "#1d1d1d"), "参数" === t.label) {
                        n.labelContainer.css("font-weight", "bold");
                        var e = [], i = !0, o = !1, a = void 0;
                        try {
                            for (var s, c = (t.variables || [])[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                var f = s.value;
                                e = e.concat(f)
                            }
                        } catch (t) {
                            o = !0, a = t
                        } finally {
                            try {
                                !i && c.return && c.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        r.variables = e
                    } else n.labelContainer.css("font-weight", "normal"), r.variables = t.variables || [];
                    r.refreshConditionCellVariableMenus(t.variables)
                }, o = [];
                e ? (this.parameterList = t, o = (o = this.buildVariableMenus(this.variableCategoryList, i)).concat(this.buildParameterMenus(t, i))) : (this.variableCategoryList = t, o = (o = this.buildVariableMenus(t, i)).concat(this.buildParameterMenus(this.parameterList, i)));
                var a = this.buildMenuConfig(o), s = new URule.menu.Menu(a);
                this.td.contextmenu(function (t) {
                    s.show(t)
                })
            }
        }, {
            key: "buildVariableMenus", value: function (t, e) {
                var n = [];
                if (0 === t.length) return n;
                var r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                        var c = a.value, f = !0, u = !1, l = void 0;
                        try {
                            for (var h, d = c[Symbol.iterator](); !(f = (h = d.next()).done); f = !0) {
                                var p = h.value;
                                n.push({
                                    label: p.name,
                                    variables: p.variables,
                                    icon: "glyphicon glyphicon-tasks",
                                    onClick: e
                                })
                            }
                        } catch (t) {
                            u = !0, l = t
                        } finally {
                            try {
                                !f && d.return && d.return()
                            } finally {
                                if (u) throw l
                            }
                        }
                    }
                } catch (t) {
                    i = !0, o = t
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
        }, {
            key: "buildParameterMenus", value: function (t, e) {
                var n = [];
                return 0 === t.length ? n : (n.push({
                    label: "参数",
                    variables: t,
                    icon: "glyphicon glyphicon-th-list",
                    onClick: e
                }), n)
            }
        }, {
            key: "buildMenuConfig", value: function (t) {
                var e = this.complexTable, n = this, r = {
                    menuItems: [{
                        label: "插入条件列",
                        icon: "glyphicon glyphicon-filter",
                        subMenu: {
                            menuItems: [{
                                label: "前",
                                icon: "glyphicon glyphicon-chevron-left",
                                onClick: function () {
                                    n.insertColumn(e, !0)
                                }
                            }, {
                                label: "后", icon: "glyphicon glyphicon-chevron-right", onClick: function () {
                                    n.insertColumn(e, !1)
                                }
                            }]
                        }
                    }, {
                        label: "删除当前条件列", icon: "glyphicon glyphicon-minus-sign", onClick: function () {
                            a.MsgBox.confirm("真的要删除当前条件列？", function () {
                                n.deleteColumn(e)
                            })
                        }
                    }]
                };
                return r.menuItems = r.menuItems.concat(t), r
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), i = s(n(320)), o = s(n(352)), a = s(n(351));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var c = function (t) {
        function e(t) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n.tr.css("background", "#f1f1f1"), n.conditionHeaders = [], n.actionHeaders = [], n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, i.default), r(e, [{
            key: "addConditionHeader", value: function (t, e) {
                var n = t.complexTable, r = new o.default(n, e);
                t.width && (e.width = t.width, r.td.css("width", t.width + "px"));
                var i = t.refHeaderCell;
                if (i) {
                    var a = n.headerRow.conditionHeaders.indexOf(i), s = i.td;
                    t.before ? (s.before(r.td), this.conditionHeaders.splice(a, 0, r)) : (s.after(r.td), this.conditionHeaders.splice(a + 1, 0, r))
                } else this.tr.append(r.td), this.conditionHeaders.push(r)
            }
        }, {
            key: "addActionHeader", value: function (t, e) {
                var n = t.complexTable, r = t.actionType, i = new a.default(n, r, e);
                t.width && (e.width = t.width, i.td.css("width", t.width + "px")), t.customActionHeaderLabel && i.updateLabel(t.customActionHeaderLabel);
                var o = t.refHeaderCell;
                if (o) {
                    var s = n.headerRow.actionHeaders.indexOf(o), c = o.td;
                    t.before ? (c.before(i.td), 0 === s && this.actionHeaders[0].td.css("border-left", "inherit"), this.actionHeaders.splice(s, 0, i)) : (c.after(i.td), this.actionHeaders.splice(s + 1, 0, i))
                } else this.tr.append(i.td), this.actionHeaders.push(i)
            }
        }]), e
    }();
    e.default = c
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), i = d(n(353)), o = d(n(350)), a = d(n(347)), s = d(n(346)), c = d(n(281)), f = n(16), u = n(88), l = n(27),
        h = d(n(291));

    function d(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var p = function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.id = 0, this.conditionColumns = [], this.actionColumns = [], this.contentRows = [], this.properties = [], this.cells = [], this.init(e)
        }

        return r(t, [{
            key: "init", value: function (t) {
                var e = this;
                t.append('<nav class="navbar navbar-default" style="margin: 5px">\n\t\t\t<div>\n\t\t\t\t<div>\n\t\t\t\t\t<div class="btn-group btn-group-sm navbar-btn" style="margin-top:5px;margin-bottom: 0px;margin-left: 5px" >\n\t\t\t\t\t<button id="saveButton" type="button" class="btn btn-default btn-sm" ><i class="rf rf-save" style="font-size: 14px"></i> 保存</button>\n\t\t\t\t\t\t\t\t<button id="saveButtonNewVersion" type="button" class="btn btn-default btn-sm" ><i class="rf rf-savenewversion" style="font-size: 14px"></i> 保存新版本</button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t<div class="btn-group btn-group-sm navbar-btn" style="margin-top:3px;margin-bottom: 0px;margin-left: 5px" >\n\t\t\t\t\t <button id="addCriteriaButton" type="button" class="btn btn-default btn-sm"><i class="glyphicon glyphicon-plus" style="font-size: 16px"></i> 添加条件行</button>\n\t\t\t\t\t <button id="deleteCriteriaButton" type="button" class="btn btn-default btn-sm"><i class="glyphicon glyphicon-minus" style="font-size: 16px"></i> 删除条件行</button>\n\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group btn-group-sm navbar-btn" style="margin-top:5px;margin-bottom: 0px">\n\t\t\t\t\t\t<button id="configVarButton" type="button" class="btn btn-default btn-sm"><i class="rf rf-variable" style="font-size: 13px"></i> 变量库</button>\n\t\t\t\t\t\t<button id="configConstantsButton" type="button" class="btn btn-default btn-sm"><i class="rf rf-constant" style="font-size: 13px"></i> 常量库</button>\n\t\t\t\t\t\t<button id="configActionButton" type="button" class="btn btn-default btn-sm"><i class="rf rf-action" style="font-size: 13px"></i> 动作库</button>\n\t\t\t\t\t\t<button id="configParameterButton" type="button" class="btn btn-default btn-sm"><i class="rf rf-parameter" style="font-size: 13px"></i> 参数库</button>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t\t</div>\n\t\t</nav>');
                var n = $("<div style='margin:5px 5px 5px 15px'></div>");
                t.append(n), this.remark = new Remark(n);
                var r = $("<div style='margin:5px 5px 5px 15px;'></div>");
                t.append(r), this.propertyContainer = $("<span>"), this.propertyContainer.css({padding: "10px"});
                var o = $("<button type='button' class='rule-add-property btn btn-link'>添加属性</button>");
                r.append(o), r.append(this.propertyContainer);
                var a = function (t) {
                    var n = new urule.RuleProperty(e, t.name, t.defaultValue, t.editorType);
                    e.propertyContainer.append(n.getContainer()), e.properties.push(n), window._setDirty()
                };

                function s(t) {
                    if ($("#saveButton").hasClass("disabled")) return !1;
                    var n = (0, f.getParameter)("file"), r = null;
                    try {
                        r = e.toXml()
                    } catch (t) {
                        return void bootbox.alert(t)
                    }
                    var i = {content: r = encodeURIComponent(r), file: n, newVersion: t},
                        o = window._server + "/common/saveFile";
                    t ? bootbox.prompt("请输入新版本描述.", function (t) {
                        t && (i.versionComment = t, (0, f.ajaxSave)(o, i, function () {
                            e.resetState()
                        }))
                    }) : (0, f.ajaxSave)(o, i, function () {
                        e.resetState()
                    })
                }

                if (e.menu = new URule.menu.Menu({
                    menuItems: [{
                        label: "优先级",
                        name: "salience",
                        defaultValue: "10",
                        editorType: 1,
                        onClick: a
                    }, {
                        label: "生效日期",
                        name: "effective-date",
                        defaultValue: "",
                        editorType: 2,
                        onClick: a
                    }, {
                        label: "失效日期",
                        name: "expires-date",
                        defaultValue: "",
                        editorType: 2,
                        onClick: a
                    }, {
                        label: "是否启用",
                        name: "enabled",
                        defaultValue: !0,
                        editorType: 3,
                        onClick: a
                    }, {label: "允许调试信息输出", name: "debug", defaultValue: !0, editorType: 3, onClick: a}]
                }), o.click(function (t) {
                    e.menu.show(t)
                }), $("#addCriteriaButton").click(function () {
                    var t = new c.default(e);
                    t.setRefConditionCell(window._currentConditionCell), e.addRow(t)
                }), $("#deleteCriteriaButton").click(function () {
                    window._currentConditionCell || bootbox.alert("请先选中目标行的一个条件单元格"), l.MsgBox.confirm("真的要删除当前单元格所在的所有行？", function () {
                        window._currentConditionCell.deleteRow(e), window._currentConditionCell = null
                    })
                }), $("#configVarButton").click(function () {
                    e.configVarDialog || (e.configVarDialog = new urule.ConfigVariableDialog(e)), e.configVarDialog.open()
                }), $("#configConstantsButton").click(function () {
                    e.configConstantDialog || (e.configConstantDialog = new urule.ConfigConstantDialog(e)), e.configConstantDialog.open()
                }), $("#configActionButton").click(function () {
                    e.configActionDialog || (e.configActionDialog = new urule.ConfigActionDialog(e)), e.configActionDialog.open()
                }), $("#configParameterButton").click(function () {
                    e.configParameterDialog || (e.configParameterDialog = new urule.ConfigParameterDialog(e)), e.configParameterDialog.open()
                }), $("#saveButton").click(function () {
                    s(!1)
                }), $("#saveButtonNewVersion").click(function () {
                    s(!0)
                }), 1 === Math.floor(10 * Math.random())) {
                    var d = "%u60A8%u5F53%u524D%u6B63%u5728%u4F7F%u7528%u7684", p = window._core_version;
                    p ? (p = (0, u.encrypt)(p)) !== window._lis_ && (d += "%u662FURule%20Pro%u8BD5%u7528%u7248", bootbox.alert(unescape(d))) : (d += "%u662FURule%20Pro%u8BD5%u7528%u7248", bootbox.alert(unescape(d)))
                }
                this.table = $('<table class="table table-bordered" style="width: max-content;max-width: none;margin-left: 15px"></table>'), t.append(this.table), this.tbody = $("<tbody></tbody>"), this.table.append(this.tbody), this.headerRow = new i.default(this), this.table.append(this.headerRow.tr), new c.default(this), this.loadFile(this._buildLoadDataFunction());
                var b = $('<div style="padding-left:10px"></div>');
                t.append(b), this.tableAction = new h.default(b, !0)
            }
        }, {
            key: "resetState", value: function () {
                window.cancelDirty()
            }
        }, {
            key: "_buildLoadDataFunction", value: function () {
                var t = this, e = new c.default(this);
                return function (n) {
                    t.tableAction.initData(n);
                    var r = !0, i = !1, o = void 0;
                    try {
                        for (var a, s = n.columns[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                            var c = a.value, f = c.type;
                            if (e.setWidth(c.width), "Criteria" === f) {
                                var u = t.addConditionColumn(e);
                                t._findHeaderCell(u, !1).updateLabel(c)
                            } else "Score" === f ? (e.setActionType(1), t.addActionColumn(e)) : "Custom" === f && (e.setActionType(2), e.setCustomActionHeaderLabel(c.customLabel), t.addActionColumn(e))
                        }
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    var l = 0, h = !0, d = !1, p = void 0;
                    try {
                        for (var b, g = n.rows[Symbol.iterator](); !(h = (b = g.next()).done); h = !0) {
                            b.value;
                            var y = t._findRowCells(l, n.cellMap);
                            e.setRowCells(y), t.addRow(e), l++
                        }
                    } catch (t) {
                        d = !0, p = t
                    } finally {
                        try {
                            !h && g.return && g.return()
                        } finally {
                            if (d) throw p
                        }
                    }
                    window._VariableValueArray.push(t), window._ParameterValueArray.push(t), window.cancelDirty()
                }
            }
        }, {
            key: "initMenu", value: function (t) {
                var e = !0, n = !1, r = void 0;
                try {
                    for (var i, o = this.conditionColumns[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        var a = i.value;
                        if (!a.variables) {
                            var s = a.variableCategory;
                            a.variables = this._findVariables(s), a.refreshConditionCellVariableMenus()
                        }
                    }
                } catch (t) {
                    n = !0, r = t
                } finally {
                    try {
                        !e && o.return && o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
        }, {
            key: "_findVariables", value: function (t) {
                if ("参数" === t) {
                    var e = [], n = !0, r = !1, i = void 0;
                    try {
                        for (var o, a = window._uruleEditorParameterLibraries[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = o.value;
                            e = e.concat(s)
                        }
                    } catch (t) {
                        r = !0, i = t
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                }
                if (window._uruleEditorVariableLibraries) {
                    var c = !0, f = !1, u = void 0;
                    try {
                        for (var l, h = window._uruleEditorVariableLibraries[Symbol.iterator](); !(c = (l = h.next()).done); c = !0) {
                            var d = l.value, p = !0, b = !1, g = void 0;
                            try {
                                for (var y, m = d[Symbol.iterator](); !(p = (y = m.next()).done); p = !0) {
                                    var v = y.value;
                                    if (v.name === t) return v.variables
                                }
                            } catch (t) {
                                b = !0, g = t
                            } finally {
                                try {
                                    !p && m.return && m.return()
                                } finally {
                                    if (b) throw g
                                }
                            }
                        }
                    } catch (t) {
                        f = !0, u = t
                    } finally {
                        try {
                            !c && h.return && h.return()
                        } finally {
                            if (f) throw u
                        }
                    }
                }
            }
        }, {
            key: "_findHeaderCell", value: function (t, e) {
                var n = this.headerRow.conditionHeaders;
                e && (n = this.headerRow.actionHeaders);
                var r = null, i = !0, o = !1, a = void 0;
                try {
                    for (var s, c = n[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                        var f = s.value;
                        if (e) {
                            if (f.actionCol === t) {
                                r = f;
                                break
                            }
                        } else if (f.conditionCol === t) {
                            r = f;
                            break
                        }
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return r
            }
        }, {
            key: "_findRowCells", value: function (t, e) {
                var n = [];
                for (var r in e) {
                    var i = e[r];
                    i.row === t && n.push(i)
                }
                return n
            }
        }, {
            key: "loadFile", value: function (t) {
                var e = this, n = (0, f.getParameter)("file"),
                    r = ((0, f.getParameter)("version"), window._server + "/common/loadXml"),
                    i = (0, f.getParameter)("doImport");
                i && i.length > 1 && (r += "?doImport=true"), $.ajax({
                    url: r,
                    type: "POST",
                    data: {files: n},
                    error: function (t) {
                        $(window.document.body).empty(), (0, f.handleError)(t)
                    },
                    success: function (n) {
                        var r = n[0];
                        e.remark.setData(r.remark);
                        var i = r.salience;
                        i && e.addProperty(new urule.RuleProperty(e, "salience", i, 1));
                        var o = r.loop;
                        null != o && e.addProperty(new urule.RuleProperty(e, "loop", o, 3));
                        var a = r.effectiveDate;
                        a && e.addProperty(new urule.RuleProperty(e, "effective-date", a, 2));
                        var s = r.expiresDate;
                        s && e.addProperty(new urule.RuleProperty(e, "expires-date", s, 2));
                        var c = r.enabled;
                        null != c && e.addProperty(new urule.RuleProperty(e, "enabled", c, 3));
                        var f = r.debug;
                        null != f && e.addProperty(new urule.RuleProperty(e, "debug", f, 3));
                        var u = r.libraries || [];
                        $.each(u, function (t, e) {
                            var n, r;
                            switch (n = e.type, r = e.path, n) {
                                case"Constant":
                                    constantLibraries.push(r);
                                    break;
                                case"Action":
                                    actionLibraries.push(r);
                                    break;
                                case"Variable":
                                    variableLibraries.push(r);
                                    break;
                                case"Parameter":
                                    parameterLibraries.push(r)
                            }
                        }), refreshActionLibraries(), refreshConstantLibraries(), refreshVariableLibraries(), refreshParameterLibraries(), refreshFunctionLibraries(), t && t(r)
                    }
                })
            }
        }, {
            key: "addProperty", value: function (t) {
                this.propertyContainer.append(t.getContainer()), this.properties.push(t), window._setDirty()
            }
        }, {
            key: "addRow", value: function (t) {
                var e = new o.default(t), n = t.refConditionCell;
                if (n) {
                    var r = n.contentRow, i = this.contentRows.indexOf(r), a = n.td.prop("rowspan");
                    a && (i = i + a - 1), (r = this.contentRows[i]).tr.after(e.tr), this.contentRows.splice(i + 1, 0, e)
                } else this.tbody.append(e.tr), this.contentRows.push(e);
                this.rebuildBorder(), window._setDirty()
            }
        }, {
            key: "addConditionColumn", value: function (t) {
                var e = new a.default(t);
                if (t.refHeaderCell) {
                    var n = t.refHeaderCellIndex;
                    t.before ? this.conditionColumns.splice(n, 0, e) : this.conditionColumns.splice(n + 1, 0, e)
                } else this.conditionColumns.push(e);
                return this.rebuildBorder(), e
            }
        }, {
            key: "addActionColumn", value: function (t) {
                var e = new s.default(t);
                if (t.refHeaderCell) {
                    var n = t.refHeaderCellIndex;
                    t.before ? this.actionColumns.splice(n, 0, e) : this.actionColumns.splice(n + 1, 0, e)
                } else this.actionColumns.push(e);
                return this.rebuildBorder(), e
            }
        }, {
            key: "rebuildBorder", value: function () {
                if (0 != this.headerRow.actionHeaders.length) {
                    this.headerRow.actionHeaders[0].td.css("border-left", "solid 3px #9d9d9d");
                    var t = !0, e = !1, n = void 0;
                    try {
                        for (var r, i = this.contentRows[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) r.value.actionCells[0].td.css("border-left", "solid 3px #9d9d9d")
                    } catch (t) {
                        e = !0, n = t
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (e) throw n
                        }
                    }
                }
            }
        }, {
            key: "getHighlightDiv", value: function () {
                if (this.highlightDiv) {
                    var t = this.highlightDiv.currentTD;
                    t && t.off("DOMSubtreeModified")
                } else this.highlightDiv = $('<div style="border:2px solid rgb(82, 146, 247);position:absolute;left: 0;top: 0;"></div>');
                return this.highlightDiv
            }
        }, {
            key: "nextId", value: function () {
                return this.id++
            }
        }, {
            key: "toXml", value: function () {
                var t = '<?xml version="1.0" encoding="UTF-8"?>';
                t += "<complex-scorecard " + this.tableAction.toXml();
                for (var e = 0; e < this.properties.length; e++) {
                    var n = this.properties[e];
                    t += " " + n.toXml()
                }
                t += ">", t += this.remark.toXml();
                var r = this._buildLibraries(), i = !0, o = !1, a = void 0;
                try {
                    for (var s, c = r[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                        var f = s.value, u = f.type, l = f.path;
                        "Variable" == u ? t += '<import-variable-library path="' + l + '"/>' : "Constant" == u ? t += '<import-constant-library path="' + l + '"/>' : "Action" == u ? t += '<import-action-library path="' + l + '"/>' : "Parameter" == u && (t += '<import-parameter-library path="' + l + '"/>')
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                var h = [];
                $.each(this.contentRows, function (e, n) {
                    n.num = e, t += '<row num="' + n.num + '" height="30"/>', h = (h = h.concat(n.conditionCells)).concat(n.actionCells)
                }), $.each(this.conditionColumns, function (e, n) {
                    if (n.num = e, !n.variableCategory) throw"第[" + (n.num + 1) + "]条件列未定义具体变量或参数！";
                    t += '<col num="' + n.num + '" width="' + n.width + '" type="Criteria" var-category="' + ("parameter" == n.variableCategory ? "参数" : n.variableCategory) + '"/>'
                });
                var d = this.conditionColumns.length;
                return $.each(this.actionColumns, function (e, n) {
                    n.num = d + e;
                    var r = n.variableName, i = n.actionType, o = "Criteria";
                    1 === i ? o = "Score" : 2 === i && (o = "Custom"), t += r ? '<col num="' + n.num + '" width="' + n.width + '" type="' + o + '" var-category="' + ("parameter" == n.variableCategory ? "参数" : n.variableCategory) + '"/>' : 2 === i ? '<col num="' + n.num + '" width="' + n.width + '" type="' + o + '" custom-label="' + n.actionHeaderCell.customLabel + '"/>' : '<col num="' + n.num + '" width="' + n.width + '" type="' + o + '"/>'
                }), $.each(h, function (e, n) {
                    var r = n.td.prop("rowspan");
                    if (n.conditionCol) {
                        if (!n.variableLabel) throw"请选择条件条件格[" + (n.contentRow.num + 1) + "," + (n.conditionCol.num + 1) + "]对应的对象属性！";
                        t += '<cell row="' + n.contentRow.num + '" col="' + n.conditionCol.num + '" rowspan="' + r + '" var-label="' + n.variableLabel + '" var="' + n.variableName + '" datatype="' + n.datatype + '">'
                    } else t += '<cell row="' + n.contentRow.num + '" col="' + n.actionCol.num + '" rowspan="' + r + '">';
                    t += n.toXml(), t += "</cell>"
                }), t += "</complex-scorecard>"
            }
        }, {
            key: "_buildLibraries", value: function () {
                var t = [];
                return $.each(constantLibraries, function (e, n) {
                    t.push({type: "Constant", path: n})
                }), $.each(actionLibraries, function (e, n) {
                    t.push({type: "Action", path: n})
                }), $.each(variableLibraries, function (e, n) {
                    t.push({type: "Variable", path: n})
                }), $.each(parameterLibraries, function (e, n) {
                    t.push({type: "Parameter", path: n})
                }), t
            }
        }]), t
    }();
    e.default = p
}, function (t, e, n) {
    "use strict";
    n(47), n(243), n(232);
    var r = s(n(5)), i = s(n(7));
    n(252), n(238), n(239), n(240), n(250), n(272), n(271), n(270), n(269), n(237), n(236), n(235), n(234), n(233), n(231), n(230), n(229), n(228), n(227), n(226), n(225), n(224), n(223), n(222), n(249), n(248), n(247), n(246), n(251);
    var o = s(n(208)), a = s(n(354));

    function s(t) {
        return t && t.__esModule ? t : {default: t}
    }

    window._setDirty = function () {
        window._dirty || (window._dirty = !0, $("#saveButton").html("<i class='rf rf-save'></i> *保存"), $("#saveButton").prop("disabled", !1), $("#saveButtonNewVersion").html("<i class='rf rf-savenewversion'></i> *保存新版本"), $("#saveButtonNewVersion").prop("disabled", !1))
    }, window.cancelDirty = function () {
        window._dirty && (window._dirty = !1, $("#saveButton").html("<i class='rf rf-save'></i> 保存"), $("#saveButton").prop("disabled", !0), $("#saveButtonNewVersion").html("<i class='rf rf-savenewversion'></i> 保存新版本"), $("#saveButtonNewVersion").prop("disabled", !0))
    }, $(document).ready(function () {
        i.default.render(r.default.createElement(o.default, null), document.getElementById("dialogContainer")), new a.default($("#container"))
    })
}]);