/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var z_ = Object.create;
    var on = Object.defineProperty;
    var K_ = Object.getOwnPropertyDescriptor;
    var Y_ = Object.getOwnPropertyNames;
    var $_ = Object.getPrototypeOf,
        Q_ = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Fe = (e, t) => {
            for (var r in t) on(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Cs = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Y_(t)) !Q_.call(e, i) && i !== r && on(e, i, {
                    get: () => t[i],
                    enumerable: !(n = K_(t, i)) || n.enumerable
                });
            return e
        };
    var fe = (e, t, r) => (r = e != null ? z_($_(e)) : {}, Cs(t || !e || !e.__esModule ? on(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        rt = e => Cs(on({}, "__esModule", {
            value: !0
        }), e);
    var Ns = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = u.getPropertyValue("position"),
                        d = u.getPropertyValue("overflow"),
                        p = u.getPropertyValue("display");
                    (!f || f === "static") && (a.style.position = "relative"), d !== "hidden" && (a.style.overflow = "hidden"), (!p || p === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        f = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let d in f) u.getPropertyValue(d) !== f[d] && (a.style[d] = f[d])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let f = a[u].nodeName.toLowerCase();
                        if (f === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else f === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Ls = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Li = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(l, E) {
                var T = new U.Bare;
                return T.init(l, E)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }

            function n(l) {
                var E = parseInt(l.slice(1), 16),
                    T = E >> 16 & 255,
                    A = E >> 8 & 255,
                    b = 255 & E;
                return [T, A, b]
            }

            function i(l, E, T) {
                return "#" + (1 << 24 | l << 16 | E << 8 | T).toString(16).slice(1)
            }

            function o() {}

            function s(l, E) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E)
            }

            function a(l, E, T) {
                f("Units do not match [" + l + "]: " + E + ", " + T)
            }

            function u(l, E, T) {
                if (E !== void 0 && (T = E), l === void 0) return T;
                var A = T;
                return St.test(l) || !ft.test(l) ? A = parseInt(l, 10) : ft.test(l) && (A = 1e3 * parseFloat(l)), 0 > A && (A = 0), A === A ? A : T
            }

            function f(l) {
                ue.debug && window && window.console.warn(l)
            }

            function d(l) {
                for (var E = -1, T = l ? l.length : 0, A = []; ++E < T;) {
                    var b = l[E];
                    b && A.push(b)
                }
                return A
            }
            var p = function(l, E, T) {
                    function A(oe) {
                        return typeof oe == "object"
                    }

                    function b(oe) {
                        return typeof oe == "function"
                    }

                    function x() {}

                    function J(oe, ge) {
                        function V() {
                            var Ne = new se;
                            return b(Ne.init) && Ne.init.apply(Ne, arguments), Ne
                        }

                        function se() {}
                        ge === T && (ge = oe, oe = Object), V.Bare = se;
                        var ce, Te = x[l] = oe[l],
                            tt = se[l] = V[l] = new x;
                        return tt.constructor = V, V.mixin = function(Ne) {
                            return se[l] = V[l] = J(V, Ne)[l], V
                        }, V.open = function(Ne) {
                            if (ce = {}, b(Ne) ? ce = Ne.call(V, tt, Te, V, oe) : A(Ne) && (ce = Ne), A(ce))
                                for (var mr in ce) E.call(ce, mr) && (tt[mr] = ce[mr]);
                            return b(tt.init) || (tt.init = oe), V
                        }, V.open(ge)
                    }
                    return J
                }("prototype", {}.hasOwnProperty),
                y = {
                    ease: ["ease", function(l, E, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return E + T * (-2.75 * x * b + 11 * b * b + -15.5 * x + 8 * b + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, E, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return E + T * (-1 * x * b + 3 * b * b + -3 * x + 2 * b)
                    }],
                    "ease-out": ["ease-out", function(l, E, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return E + T * (.3 * x * b + -1.6 * b * b + 2.2 * x + -1.8 * b + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, E, T, A) {
                        var b = (l /= A) * l,
                            x = b * l;
                        return E + T * (2 * x * b + -5 * b * b + 2 * x + 2 * b)
                    }],
                    linear: ["linear", function(l, E, T, A) {
                        return T * l / A + E
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, E, T, A) {
                        return T * (l /= A) * l + E
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, E, T, A) {
                        return -T * (l /= A) * (l - 2) + E
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, E, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l + E : -T / 2 * (--l * (l - 2) - 1) + E
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, E, T, A) {
                        return T * (l /= A) * l * l + E
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, E, T, A) {
                        return T * ((l = l / A - 1) * l * l + 1) + E
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, E, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l * l + E : T / 2 * ((l -= 2) * l * l + 2) + E
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, E, T, A) {
                        return T * (l /= A) * l * l * l + E
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, E, T, A) {
                        return -T * ((l = l / A - 1) * l * l * l - 1) + E
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, E, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l * l * l + E : -T / 2 * ((l -= 2) * l * l * l - 2) + E
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, E, T, A) {
                        return T * (l /= A) * l * l * l * l + E
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, E, T, A) {
                        return T * ((l = l / A - 1) * l * l * l * l + 1) + E
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, E, T, A) {
                        return (l /= A / 2) < 1 ? T / 2 * l * l * l * l * l + E : T / 2 * ((l -= 2) * l * l * l * l + 2) + E
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, E, T, A) {
                        return -T * Math.cos(l / A * (Math.PI / 2)) + T + E
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, E, T, A) {
                        return T * Math.sin(l / A * (Math.PI / 2)) + E
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, E, T, A) {
                        return -T / 2 * (Math.cos(Math.PI * l / A) - 1) + E
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, E, T, A) {
                        return l === 0 ? E : T * Math.pow(2, 10 * (l / A - 1)) + E
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, E, T, A) {
                        return l === A ? E + T : T * (-Math.pow(2, -10 * l / A) + 1) + E
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, E, T, A) {
                        return l === 0 ? E : l === A ? E + T : (l /= A / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + E : T / 2 * (-Math.pow(2, -10 * --l) + 2) + E
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, E, T, A) {
                        return -T * (Math.sqrt(1 - (l /= A) * l) - 1) + E
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, E, T, A) {
                        return T * Math.sqrt(1 - (l = l / A - 1) * l) + E
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, E, T, A) {
                        return (l /= A / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + E : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + E
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, E, T, A, b) {
                        return b === void 0 && (b = 1.70158), T * (l /= A) * l * ((b + 1) * l - b) + E
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, E, T, A, b) {
                        return b === void 0 && (b = 1.70158), T * ((l = l / A - 1) * l * ((b + 1) * l + b) + 1) + E
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, E, T, A, b) {
                        return b === void 0 && (b = 1.70158), (l /= A / 2) < 1 ? T / 2 * l * l * (((b *= 1.525) + 1) * l - b) + E : T / 2 * ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) + E
                    }]
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                m = document,
                _ = window,
                P = "bkwld-tram",
                O = /[\-\.0-9]/g,
                S = /[A-Z]/,
                w = "number",
                R = /^(rgb|#)/,
                L = /(em|cm|mm|in|pt|pc|px)$/,
                N = /(em|cm|mm|in|pt|pc|px|%)$/,
                k = /(deg|rad|turn)$/,
                j = "unitless",
                Q = /(all|none) 0s ease 0s/,
                ee = /^(width|height)$/,
                re = " ",
                q = m.createElement("a"),
                I = ["Webkit", "Moz", "O", "ms"],
                M = ["-webkit-", "-moz-", "-o-", "-ms-"],
                K = function(l) {
                    if (l in q.style) return {
                        dom: l,
                        css: l
                    };
                    var E, T, A = "",
                        b = l.split("-");
                    for (E = 0; E < b.length; E++) A += b[E].charAt(0).toUpperCase() + b[E].slice(1);
                    for (E = 0; E < I.length; E++)
                        if (T = I[E] + A, T in q.style) return {
                            dom: T,
                            css: M[E] + l
                        }
                },
                W = t.support = {
                    bind: Function.prototype.bind,
                    transform: K("transform"),
                    transition: K("transition"),
                    backface: K("backface-visibility"),
                    timing: K("transition-timing-function")
                };
            if (W.transition) {
                var ne = W.timing.dom;
                if (q.style[ne] = y["ease-in-back"][0], !q.style[ne])
                    for (var ie in h) y[ie][0] = h[ie]
            }
            var D = t.frame = function() {
                    var l = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return l && W.bind ? l.bind(_) : function(E) {
                        _.setTimeout(E, 16)
                    }
                }(),
                X = t.now = function() {
                    var l = _.performance,
                        E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return E && W.bind ? E.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                Y = p(function(l) {
                    function E(te, le) {
                        var me = d(("" + te).split(re)),
                            de = me[0];
                        le = le || {};
                        var Le = B[de];
                        if (!Le) return f("Unsupported property: " + de);
                        if (!le.weak || !this.props[de]) {
                            var Be = Le[0],
                                De = this.props[de];
                            return De || (De = this.props[de] = new Be.Bare), De.init(this.$el, me, Le, le), De
                        }
                    }

                    function T(te, le, me) {
                        if (te) {
                            var de = typeof te;
                            if (le || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), de == "number" && le) return this.timer = new ae({
                                duration: te,
                                context: this,
                                complete: x
                            }), void(this.active = !0);
                            if (de == "string" && le) {
                                switch (te) {
                                    case "hide":
                                        V.call(this);
                                        break;
                                    case "stop":
                                        J.call(this);
                                        break;
                                    case "redraw":
                                        se.call(this);
                                        break;
                                    default:
                                        E.call(this, te, me && me[1])
                                }
                                return x.call(this)
                            }
                            if (de == "function") return void te.call(this, this);
                            if (de == "object") {
                                var Le = 0;
                                tt.call(this, te, function(Ie, j_) {
                                    Ie.span > Le && (Le = Ie.span), Ie.stop(), Ie.animate(j_)
                                }, function(Ie) {
                                    "wait" in Ie && (Le = u(Ie.wait, 0))
                                }), Te.call(this), Le > 0 && (this.timer = new ae({
                                    duration: Le,
                                    context: this
                                }), this.active = !0, le && (this.timer.complete = x));
                                var Be = this,
                                    De = !1,
                                    nn = {};
                                D(function() {
                                    tt.call(Be, te, function(Ie) {
                                        Ie.active && (De = !0, nn[Ie.name] = Ie.nextStyle)
                                    }), De && Be.$el.css(nn)
                                })
                            }
                        }
                    }

                    function A(te) {
                        te = u(te, 0), this.active ? this.queue.push({
                            options: te
                        }) : (this.timer = new ae({
                            duration: te,
                            context: this,
                            complete: x
                        }), this.active = !0)
                    }

                    function b(te) {
                        return this.active ? (this.queue.push({
                            options: te,
                            args: arguments
                        }), void(this.timer.complete = x)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function x() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var te = this.queue.shift();
                            T.call(this, te.options, !0, te.args)
                        }
                    }

                    function J(te) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var le;
                        typeof te == "string" ? (le = {}, le[te] = 1) : le = typeof te == "object" && te != null ? te : this.props, tt.call(this, le, Ne), Te.call(this)
                    }

                    function oe(te) {
                        J.call(this, te), tt.call(this, te, mr, X_)
                    }

                    function ge(te) {
                        typeof te != "string" && (te = "block"), this.el.style.display = te
                    }

                    function V() {
                        J.call(this), this.el.style.display = "none"
                    }

                    function se() {
                        this.el.offsetHeight
                    }

                    function ce() {
                        J.call(this), e.removeData(this.el, P), this.$el = this.el = null
                    }

                    function Te() {
                        var te, le, me = [];
                        this.upstream && me.push(this.upstream);
                        for (te in this.props) le = this.props[te], le.active && me.push(le.string);
                        me = me.join(","), this.style !== me && (this.style = me, this.el.style[W.transition.dom] = me)
                    }

                    function tt(te, le, me) {
                        var de, Le, Be, De, nn = le !== Ne,
                            Ie = {};
                        for (de in te) Be = te[de], de in ve ? (Ie.transform || (Ie.transform = {}), Ie.transform[de] = Be) : (S.test(de) && (de = r(de)), de in B ? Ie[de] = Be : (De || (De = {}), De[de] = Be));
                        for (de in Ie) {
                            if (Be = Ie[de], Le = this.props[de], !Le) {
                                if (!nn) continue;
                                Le = E.call(this, de)
                            }
                            le.call(this, Le, Be)
                        }
                        me && De && me.call(this, De)
                    }

                    function Ne(te) {
                        te.stop()
                    }

                    function mr(te, le) {
                        te.set(le)
                    }

                    function X_(te) {
                        this.$el.css(te)
                    }

                    function Xe(te, le) {
                        l[te] = function() {
                            return this.children ? B_.call(this, le, arguments) : (this.el && le.apply(this, arguments), this)
                        }
                    }

                    function B_(te, le) {
                        var me, de = this.children.length;
                        for (me = 0; de > me; me++) te.apply(this.children[me], le);
                        return this
                    }
                    l.init = function(te) {
                        if (this.$el = e(te), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ue.keepInherited && !ue.fallback) {
                            var le = G(this.el, "transition");
                            le && !Q.test(le) && (this.upstream = le)
                        }
                        W.backface && ue.hideBackface && g(this.el, W.backface.css, "hidden")
                    }, Xe("add", E), Xe("start", T), Xe("wait", A), Xe("then", b), Xe("next", x), Xe("stop", J), Xe("set", oe), Xe("show", ge), Xe("hide", V), Xe("redraw", se), Xe("destroy", ce)
                }),
                U = p(Y, function(l) {
                    function E(T, A) {
                        var b = e.data(T, P) || e.data(T, P, new Y.Bare);
                        return b.el || b.init(T), A ? b.start(A) : b
                    }
                    l.init = function(T, A) {
                        var b = e(T);
                        if (!b.length) return this;
                        if (b.length === 1) return E(b[0], A);
                        var x = [];
                        return b.each(function(J, oe) {
                            x.push(E(oe, A))
                        }), this.children = x, this
                    }
                }),
                F = p(function(l) {
                    function E() {
                        var x = this.get();
                        this.update("auto");
                        var J = this.get();
                        return this.update(x), J
                    }

                    function T(x, J, oe) {
                        return J !== void 0 && (oe = J), x in y ? x : oe
                    }

                    function A(x) {
                        var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
                        return (J ? i(J[1], J[2], J[3]) : x).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var b = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(x, J, oe, ge) {
                        this.$el = x, this.el = x[0];
                        var V = J[0];
                        oe[2] && (V = oe[2]), Z[V] && (V = Z[V]), this.name = V, this.type = oe[1], this.duration = u(J[1], this.duration, b.duration), this.ease = T(J[2], this.ease, b.ease), this.delay = u(J[3], this.delay, b.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ee.test(this.name), this.unit = ge.unit || this.unit || ue.defaultUnit, this.angle = ge.angle || this.angle || ue.defaultAngle, ue.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + y[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
                    }, l.set = function(x) {
                        x = this.convert(x, this.type), this.update(x), this.redraw()
                    }, l.transition = function(x) {
                        this.active = !0, x = this.convert(x, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), x == "auto" && (x = E.call(this))), this.nextStyle = x
                    }, l.fallback = function(x) {
                        var J = this.el.style[this.name] || this.convert(this.get(), this.type);
                        x = this.convert(x, this.type), this.auto && (J == "auto" && (J = this.convert(this.get(), this.type)), x == "auto" && (x = E.call(this))), this.tween = new C({
                            from: J,
                            to: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return G(this.el, this.name)
                    }, l.update = function(x) {
                        g(this.el, this.name, x)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, g(this.el, this.name, this.get()));
                        var x = this.tween;
                        x && x.context && x.destroy()
                    }, l.convert = function(x, J) {
                        if (x == "auto" && this.auto) return x;
                        var oe, ge = typeof x == "number",
                            V = typeof x == "string";
                        switch (J) {
                            case w:
                                if (ge) return x;
                                if (V && x.replace(O, "") === "") return +x;
                                oe = "number(unitless)";
                                break;
                            case R:
                                if (V) {
                                    if (x === "" && this.original) return this.original;
                                    if (J.test(x)) return x.charAt(0) == "#" && x.length == 7 ? x : A(x)
                                }
                                oe = "hex or rgb string";
                                break;
                            case L:
                                if (ge) return x + this.unit;
                                if (V && J.test(x)) return x;
                                oe = "number(px) or string(unit)";
                                break;
                            case N:
                                if (ge) return x + this.unit;
                                if (V && J.test(x)) return x;
                                oe = "number(px) or string(unit or %)";
                                break;
                            case k:
                                if (ge) return x + this.angle;
                                if (V && J.test(x)) return x;
                                oe = "number(deg) or string(angle)";
                                break;
                            case j:
                                if (ge || V && N.test(x)) return x;
                                oe = "number(unitless) or string(unit or %)"
                        }
                        return s(oe, x), x
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                v = p(F, function(l, E) {
                    l.init = function() {
                        E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), R))
                    }
                }),
                H = p(F, function(l, E) {
                    l.init = function() {
                        E.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(T) {
                        this.$el[this.name](T)
                    }
                }),
                z = p(F, function(l, E) {
                    function T(A, b) {
                        var x, J, oe, ge, V;
                        for (x in A) ge = ve[x], oe = ge[0], J = ge[1] || x, V = this.convert(A[x], oe), b.call(this, J, V, oe)
                    }
                    l.init = function() {
                        E.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && ue.perspective && (this.current.perspective = ue.perspective, g(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(A) {
                        T.call(this, A, function(b, x) {
                            this.current[b] = x
                        }), g(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(A) {
                        var b = this.values(A);
                        this.tween = new be({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var x, J = {};
                        for (x in this.current) J[x] = x in b ? b[x] : this.current[x];
                        this.active = !0, this.nextStyle = this.style(J)
                    }, l.fallback = function(A) {
                        var b = this.values(A);
                        this.tween = new be({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        g(this.el, this.name, this.style(this.current))
                    }, l.style = function(A) {
                        var b, x = "";
                        for (b in A) x += b + "(" + A[b] + ") ";
                        return x
                    }, l.values = function(A) {
                        var b, x = {};
                        return T.call(this, A, function(J, oe, ge) {
                            x[J] = oe, this.current[J] === void 0 && (b = 0, ~J.indexOf("scale") && (b = 1), this.current[J] = this.convert(b, ge))
                        }), x
                    }
                }),
                C = p(function(l) {
                    function E(V) {
                        oe.push(V) === 1 && D(T)
                    }

                    function T() {
                        var V, se, ce, Te = oe.length;
                        if (Te)
                            for (D(T), se = X(), V = Te; V--;) ce = oe[V], ce && ce.render(se)
                    }

                    function A(V) {
                        var se, ce = e.inArray(V, oe);
                        ce >= 0 && (se = oe.slice(ce + 1), oe.length = ce, se.length && (oe = oe.concat(se)))
                    }

                    function b(V) {
                        return Math.round(V * ge) / ge
                    }

                    function x(V, se, ce) {
                        return i(V[0] + ce * (se[0] - V[0]), V[1] + ce * (se[1] - V[1]), V[2] + ce * (se[2] - V[2]))
                    }
                    var J = {
                        ease: y.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(V) {
                        this.duration = V.duration || 0, this.delay = V.delay || 0;
                        var se = V.ease || J.ease;
                        y[se] && (se = y[se][1]), typeof se != "function" && (se = J.ease), this.ease = se, this.update = V.update || o, this.complete = V.complete || o, this.context = V.context || this, this.name = V.name;
                        var ce = V.from,
                            Te = V.to;
                        ce === void 0 && (ce = J.from), Te === void 0 && (Te = J.to), this.unit = V.unit || "", typeof ce == "number" && typeof Te == "number" ? (this.begin = ce, this.change = Te - ce) : this.format(Te, ce), this.value = this.begin + this.unit, this.start = X(), V.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = X()), this.active = !0, E(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, A(this))
                    }, l.render = function(V) {
                        var se, ce = V - this.start;
                        if (this.delay) {
                            if (ce <= this.delay) return;
                            ce -= this.delay
                        }
                        if (ce < this.duration) {
                            var Te = this.ease(ce, 0, 1, this.duration);
                            return se = this.startRGB ? x(this.startRGB, this.endRGB, Te) : b(this.begin + Te * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value)
                        }
                        se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(V, se) {
                        if (se += "", V += "", V.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(V), this.endHex = V, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ce = se.replace(O, ""),
                                Te = V.replace(O, "");
                            ce !== Te && a("tween", se, V), this.unit = ce
                        }
                        se = parseFloat(se), V = parseFloat(V), this.begin = this.value = se, this.change = V - se
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var oe = [],
                        ge = 1e3
                }),
                ae = p(C, function(l) {
                    l.init = function(E) {
                        this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
                    }, l.render = function(E) {
                        var T = E - this.start;
                        T < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                be = p(C, function(l, E) {
                    l.init = function(T) {
                        this.context = T.context, this.update = T.update, this.tweens = [], this.current = T.current;
                        var A, b;
                        for (A in T.values) b = T.values[A], this.current[A] !== b && this.tweens.push(new C({
                            name: A,
                            from: this.current[A],
                            to: b,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(T) {
                        var A, b, x = this.tweens.length,
                            J = !1;
                        for (A = x; A--;) b = this.tweens[A], b.context && (b.render(T), this.current[b.name] = b.value, J = !0);
                        return J ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (E.destroy.call(this), this.tweens) {
                            var T, A = this.tweens.length;
                            for (T = A; T--;) this.tweens[T].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ue = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !W.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!W.transition) return ue.fallback = !0;
                ue.agentTests.push("(" + l + ")");
                var E = new RegExp(ue.agentTests.join("|"), "i");
                ue.fallback = E.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new C(l)
            }, t.delay = function(l, E, T) {
                return new ae({
                    complete: E,
                    duration: l,
                    context: T
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var g = e.style,
                G = e.css,
                Z = {
                    transform: W.transform && W.transform.css
                },
                B = {
                    color: [v, R],
                    background: [v, R, "background-color"],
                    "outline-color": [v, R],
                    "border-color": [v, R],
                    "border-top-color": [v, R],
                    "border-right-color": [v, R],
                    "border-bottom-color": [v, R],
                    "border-left-color": [v, R],
                    "border-width": [F, L],
                    "border-top-width": [F, L],
                    "border-right-width": [F, L],
                    "border-bottom-width": [F, L],
                    "border-left-width": [F, L],
                    "border-spacing": [F, L],
                    "letter-spacing": [F, L],
                    margin: [F, L],
                    "margin-top": [F, L],
                    "margin-right": [F, L],
                    "margin-bottom": [F, L],
                    "margin-left": [F, L],
                    padding: [F, L],
                    "padding-top": [F, L],
                    "padding-right": [F, L],
                    "padding-bottom": [F, L],
                    "padding-left": [F, L],
                    "outline-width": [F, L],
                    opacity: [F, w],
                    top: [F, N],
                    right: [F, N],
                    bottom: [F, N],
                    left: [F, N],
                    "font-size": [F, N],
                    "text-indent": [F, N],
                    "word-spacing": [F, N],
                    width: [F, N],
                    "min-width": [F, N],
                    "max-width": [F, N],
                    height: [F, N],
                    "min-height": [F, N],
                    "max-height": [F, N],
                    "line-height": [F, j],
                    "scroll-top": [H, w, "scrollTop"],
                    "scroll-left": [H, w, "scrollLeft"]
                },
                ve = {};
            W.transform && (B.transform = [z], ve = {
                x: [N, "translateX"],
                y: [N, "translateY"],
                rotate: [k],
                rotateX: [k],
                rotateY: [k],
                scale: [w],
                scaleX: [w],
                scaleY: [w],
                skew: [k],
                skewX: [k],
                skewY: [k]
            }), W.transform && W.backface && (ve.z = [N, "translateZ"], ve.rotateZ = [k], ve.scaleZ = [w], ve.perspective = [L]);
            var St = /ms/,
                ft = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ms = c((WH, Ps) => {
        "use strict";
        var Z_ = window.$,
            J_ = Li() && Z_.tram;
        Ps.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                d = r.forEach,
                p = r.map,
                y = r.reduce,
                h = r.reduceRight,
                m = r.filter,
                _ = r.every,
                P = r.some,
                O = r.indexOf,
                S = r.lastIndexOf,
                w = Array.isArray,
                R = Object.keys,
                L = i.bind,
                N = e.each = e.forEach = function(I, M, K) {
                    if (I == null) return I;
                    if (d && I.forEach === d) I.forEach(M, K);
                    else if (I.length === +I.length) {
                        for (var W = 0, ne = I.length; W < ne; W++)
                            if (M.call(K, I[W], W, I) === t) return
                    } else
                        for (var ie = e.keys(I), W = 0, ne = ie.length; W < ne; W++)
                            if (M.call(K, I[ie[W]], ie[W], I) === t) return;
                    return I
                };
            e.map = e.collect = function(I, M, K) {
                var W = [];
                return I == null ? W : p && I.map === p ? I.map(M, K) : (N(I, function(ne, ie, D) {
                    W.push(M.call(K, ne, ie, D))
                }), W)
            }, e.find = e.detect = function(I, M, K) {
                var W;
                return k(I, function(ne, ie, D) {
                    if (M.call(K, ne, ie, D)) return W = ne, !0
                }), W
            }, e.filter = e.select = function(I, M, K) {
                var W = [];
                return I == null ? W : m && I.filter === m ? I.filter(M, K) : (N(I, function(ne, ie, D) {
                    M.call(K, ne, ie, D) && W.push(ne)
                }), W)
            };
            var k = e.some = e.any = function(I, M, K) {
                M || (M = e.identity);
                var W = !1;
                return I == null ? W : P && I.some === P ? I.some(M, K) : (N(I, function(ne, ie, D) {
                    if (W || (W = M.call(K, ne, ie, D))) return t
                }), !!W)
            };
            e.contains = e.include = function(I, M) {
                return I == null ? !1 : O && I.indexOf === O ? I.indexOf(M) != -1 : k(I, function(K) {
                    return K === M
                })
            }, e.delay = function(I, M) {
                var K = s.call(arguments, 2);
                return setTimeout(function() {
                    return I.apply(null, K)
                }, M)
            }, e.defer = function(I) {
                return e.delay.apply(e, [I, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(I) {
                var M, K, W;
                return function() {
                    M || (M = !0, K = arguments, W = this, J_.frame(function() {
                        M = !1, I.apply(W, K)
                    }))
                }
            }, e.debounce = function(I, M, K) {
                var W, ne, ie, D, X, Y = function() {
                    var U = e.now() - D;
                    U < M ? W = setTimeout(Y, M - U) : (W = null, K || (X = I.apply(ie, ne), ie = ne = null))
                };
                return function() {
                    ie = this, ne = arguments, D = e.now();
                    var U = K && !W;
                    return W || (W = setTimeout(Y, M)), U && (X = I.apply(ie, ne), ie = ne = null), X
                }
            }, e.defaults = function(I) {
                if (!e.isObject(I)) return I;
                for (var M = 1, K = arguments.length; M < K; M++) {
                    var W = arguments[M];
                    for (var ne in W) I[ne] === void 0 && (I[ne] = W[ne])
                }
                return I
            }, e.keys = function(I) {
                if (!e.isObject(I)) return [];
                if (R) return R(I);
                var M = [];
                for (var K in I) e.has(I, K) && M.push(K);
                return M
            }, e.has = function(I, M) {
                return f.call(I, M)
            }, e.isObject = function(I) {
                return I === Object(I)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                Q = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ee = /\\|'|\r|\n|\u2028|\u2029/g,
                re = function(I) {
                    return "\\" + Q[I]
                },
                q = /^\s*(\w|\$)+\s*$/;
            return e.template = function(I, M, K) {
                !M && K && (M = K), M = e.defaults({}, M, e.templateSettings);
                var W = RegExp([(M.escape || j).source, (M.interpolate || j).source, (M.evaluate || j).source].join("|") + "|$", "g"),
                    ne = 0,
                    ie = "__p+='";
                I.replace(W, function(U, F, v, H, z) {
                    return ie += I.slice(ne, z).replace(ee, re), ne = z + U.length, F ? ie += `'+
((__t=(` + F + `))==null?'':_.escape(__t))+
'` : v ? ie += `'+
((__t=(` + v + `))==null?'':__t)+
'` : H && (ie += `';
` + H + `
__p+='`), U
                }), ie += `';
`;
                var D = M.variable;
                if (D) {
                    if (!q.test(D)) throw new Error("variable is not a bare identifier: " + D)
                } else ie = `with(obj||{}){
` + ie + `}
`, D = "obj";
                ie = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ie + `return __p;
`;
                var X;
                try {
                    X = new Function(M.variable || "obj", "_", ie)
                } catch (U) {
                    throw U.source = ie, U
                }
                var Y = function(U) {
                    return X.call(this, U, e)
                };
                return Y.source = "function(" + D + `){
` + ie + "}", Y
            }, e
        }()
    });
    var We = c((kH, Ws) => {
        "use strict";
        var pe = {},
            Ht = {},
            Wt = [],
            Mi = window.Webflow || [],
            mt = window.jQuery,
            ze = mt(window),
            eb = mt(document),
            nt = mt.isFunction,
            je = pe._ = Ms(),
            Ds = pe.tram = Li() && mt.tram,
            sn = !1,
            qi = !1;
        Ds.config.hideBackface = !1;
        Ds.config.keepInherited = !0;
        pe.define = function(e, t, r) {
            Ht[e] && Gs(Ht[e]);
            var n = Ht[e] = t(mt, je, r) || {};
            return Fs(n), n
        };
        pe.require = function(e) {
            return Ht[e]
        };

        function Fs(e) {
            pe.env() && (nt(e.design) && ze.on("__wf_design", e.design), nt(e.preview) && ze.on("__wf_preview", e.preview)), nt(e.destroy) && ze.on("__wf_destroy", e.destroy), e.ready && nt(e.ready) && tb(e)
        }

        function tb(e) {
            if (sn) {
                e.ready();
                return
            }
            je.contains(Wt, e.ready) || Wt.push(e.ready)
        }

        function Gs(e) {
            nt(e.design) && ze.off("__wf_design", e.design), nt(e.preview) && ze.off("__wf_preview", e.preview), nt(e.destroy) && ze.off("__wf_destroy", e.destroy), e.ready && nt(e.ready) && rb(e)
        }

        function rb(e) {
            Wt = je.filter(Wt, function(t) {
                return t !== e.ready
            })
        }
        pe.push = function(e) {
            if (sn) {
                nt(e) && e();
                return
            }
            Mi.push(e)
        };
        pe.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var an = navigator.userAgent.toLowerCase(),
            Us = pe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            nb = pe.env.chrome = /chrome/.test(an) && /Google/.test(navigator.vendor) && parseInt(an.match(/chrome\/(\d+)\./)[1], 10),
            ib = pe.env.ios = /(ipod|iphone|ipad)/.test(an);
        pe.env.safari = /safari/.test(an) && !nb && !ib;
        var Pi;
        Us && eb.on("touchstart mousedown", function(e) {
            Pi = e.target
        });
        pe.validClick = Us ? function(e) {
            return e === Pi || mt.contains(e, Pi)
        } : function() {
            return !0
        };
        var Vs = "resize.webflow orientationchange.webflow load.webflow",
            ob = "scroll.webflow " + Vs;
        pe.resize = Di(ze, Vs);
        pe.scroll = Di(ze, ob);
        pe.redraw = Di();

        function Di(e, t) {
            var r = [],
                n = {};
            return n.up = je.throttle(function(i) {
                je.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (je.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = je.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        pe.location = function(e) {
            window.location = e
        };
        pe.env() && (pe.location = function() {});
        pe.ready = function() {
            sn = !0, qi ? ab() : je.each(Wt, qs), je.each(Mi, qs), pe.resize.up()
        };

        function qs(e) {
            nt(e) && e()
        }

        function ab() {
            qi = !1, je.each(Ht, Fs)
        }
        var Rt;
        pe.load = function(e) {
            Rt.then(e)
        };

        function Hs() {
            Rt && (Rt.reject(), ze.off("load", Rt.resolve)), Rt = new mt.Deferred, ze.on("load", Rt.resolve)
        }
        pe.destroy = function(e) {
            e = e || {}, qi = !0, ze.triggerHandler("__wf_destroy"), e.domready != null && (sn = e.domready), je.each(Ht, Gs), pe.resize.off(), pe.scroll.off(), pe.redraw.off(), Wt = [], Mi = [], Rt.state() === "pending" && Hs()
        };
        mt(pe.ready);
        Hs();
        Ws.exports = window.Webflow = pe
    });
    var Bs = c((XH, Xs) => {
        "use strict";
        var ks = We();
        ks.define("brand", Xs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var h = n.attr("data-wf-status"),
                    m = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(m) && s.hostname !== m && (h = !0), h && !a && (f = f || p(), y(), setTimeout(y, 500), e(r).off(u, d).on(u, d))
            };

            function d() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", h ? "display: none !important;" : "")
            }

            function p() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(m, _), h[0]
            }

            function y() {
                var h = i.children(o),
                    m = h.length && h.get(0) === f,
                    _ = ks.env("editor");
                if (m) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(), _ || i.append(f)
            }
            return t
        })
    });
    var zs = c((BH, js) => {
        "use strict";
        var Fi = We();
        Fi.define("edit", js.exports = function(e, t, r) {
            if (r = r || {}, (Fi.env("test") || Fi.env("frame")) && !r.fixture && !sb()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, f = r.load || y,
                d = !1;
            try {
                d = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            d ? f() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && f() : i.on(a, p).triggerHandler(a);

            function p() {
                u || /\?edit/.test(s.hash) && f()
            }

            function y() {
                u = !0, window.WebflowEditor = !0, i.off(a, p), S(function(R) {
                    e.ajax({
                        url: O("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(R)
                    })
                })
            }

            function h(R) {
                return function(L) {
                    if (!L) {
                        console.error("Could not load editor data");
                        return
                    }
                    L.thirdPartyCookiesSupported = R, m(P(L.bugReporterScriptPath), function() {
                        m(P(L.scriptPath), function() {
                            window.WebflowEditor(L)
                        })
                    })
                }
            }

            function m(R, L) {
                e.ajax({
                    type: "GET",
                    url: R,
                    dataType: "script",
                    cache: !0
                }).then(L, _)
            }

            function _(R, L, N) {
                throw console.error("Could not load editor script: " + L), N
            }

            function P(R) {
                return R.indexOf("//") >= 0 ? R : O("https://editor-api.webflow.com" + R)
            }

            function O(R) {
                return R.replace(/([^:])\/\//g, "$1/")
            }

            function S(R) {
                var L = window.document.createElement("iframe");
                L.src = "https://webflow.com/site/third-party-cookie-check.html", L.style.display = "none", L.sandbox = "allow-scripts allow-same-origin";
                var N = function(k) {
                    k.data === "WF_third_party_cookies_unsupported" ? (w(L, N), R(!1)) : k.data === "WF_third_party_cookies_supported" && (w(L, N), R(!0))
                };
                L.onerror = function() {
                    w(L, N), R(!1)
                }, window.addEventListener("message", N, !1), window.document.body.appendChild(L)
            }

            function w(R, L) {
                window.removeEventListener("message", L, !1), R.remove()
            }
            return n
        });

        function sb() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ys = c((jH, Ks) => {
        "use strict";
        var ub = We();
        ub.define("focus-visible", Ks.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(w) {
                    return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList" in w && "contains" in w.classList)
                }

                function u(w) {
                    var R = w.type,
                        L = w.tagName;
                    return !!(L === "INPUT" && s[R] && !w.readOnly || L === "TEXTAREA" && !w.readOnly || w.isContentEditable)
                }

                function f(w) {
                    w.getAttribute("data-wf-focus-visible") || w.setAttribute("data-wf-focus-visible", "true")
                }

                function d(w) {
                    w.getAttribute("data-wf-focus-visible") && w.removeAttribute("data-wf-focus-visible")
                }

                function p(w) {
                    w.metaKey || w.altKey || w.ctrlKey || (a(r.activeElement) && f(r.activeElement), n = !0)
                }

                function y() {
                    n = !1
                }

                function h(w) {
                    a(w.target) && (n || u(w.target)) && f(w.target)
                }

                function m(w) {
                    a(w.target) && w.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), d(w.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), P())
                }

                function P() {
                    document.addEventListener("mousemove", S), document.addEventListener("mousedown", S), document.addEventListener("mouseup", S), document.addEventListener("pointermove", S), document.addEventListener("pointerdown", S), document.addEventListener("pointerup", S), document.addEventListener("touchmove", S), document.addEventListener("touchstart", S), document.addEventListener("touchend", S)
                }

                function O() {
                    document.removeEventListener("mousemove", S), document.removeEventListener("mousedown", S), document.removeEventListener("mouseup", S), document.removeEventListener("pointermove", S), document.removeEventListener("pointerdown", S), document.removeEventListener("pointerup", S), document.removeEventListener("touchmove", S), document.removeEventListener("touchstart", S), document.removeEventListener("touchend", S)
                }

                function S(w) {
                    w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (n = !1, O())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("visibilitychange", _, !0), P(), r.addEventListener("focus", h, !0), r.addEventListener("blur", m, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Zs = c((zH, Qs) => {
        "use strict";
        var $s = We();
        $s.define("focus", Qs.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && $s.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var tu = c((KH, eu) => {
        "use strict";
        var Gi = window.jQuery,
            it = {},
            un = [],
            Js = ".w-ix",
            cn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Gi(t).triggerHandler(it.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Gi(t).triggerHandler(it.types.OUTRO))
                }
            };
        it.triggers = {};
        it.types = {
            INTRO: "w-ix-intro" + Js,
            OUTRO: "w-ix-outro" + Js
        };
        it.init = function() {
            for (var e = un.length, t = 0; t < e; t++) {
                var r = un[t];
                r[0](0, r[1])
            }
            un = [], Gi.extend(it.triggers, cn)
        };
        it.async = function() {
            for (var e in cn) {
                var t = cn[e];
                cn.hasOwnProperty(e) && (it.triggers[e] = function(r, n) {
                    un.push([t, n])
                })
            }
        };
        it.async();
        eu.exports = it
    });
    var fn = c((YH, iu) => {
        "use strict";
        var Ui = tu();

        function ru(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var cb = window.jQuery,
            ln = {},
            nu = ".w-ix",
            lb = {
                reset: function(e, t) {
                    Ui.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Ui.triggers.intro(e, t), ru(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Ui.triggers.outro(e, t), ru(t, "COMPONENT_INACTIVE")
                }
            };
        ln.triggers = {};
        ln.types = {
            INTRO: "w-ix-intro" + nu,
            OUTRO: "w-ix-outro" + nu
        };
        cb.extend(ln.triggers, lb);
        iu.exports = ln
    });
    var ou = c(($H, dt) => {
        function Vi(e) {
            return dt.exports = Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, dt.exports.__esModule = !0, dt.exports.default = dt.exports, Vi(e)
        }
        dt.exports = Vi, dt.exports.__esModule = !0, dt.exports.default = dt.exports
    });
    var dn = c((QH, _r) => {
        var fb = ou().default;

        function au(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (au = function(i) {
                return i ? r : t
            })(e)
        }

        function db(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || fb(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = au(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        _r.exports = db, _r.exports.__esModule = !0, _r.exports.default = _r.exports
    });
    var su = c((ZH, br) => {
        function pb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        br.exports = pb, br.exports.__esModule = !0, br.exports.default = br.exports
    });
    var Ee = c((JH, uu) => {
        var pn = function(e) {
            return e && e.Math == Math && e
        };
        uu.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var kt = c((eW, cu) => {
        cu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ct = c((tW, lu) => {
        var gb = kt();
        lu.exports = !gb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var gn = c((rW, fu) => {
        var Tr = Function.prototype.call;
        fu.exports = Tr.bind ? Tr.bind(Tr) : function() {
            return Tr.apply(Tr, arguments)
        }
    });
    var vu = c(gu => {
        "use strict";
        var du = {}.propertyIsEnumerable,
            pu = Object.getOwnPropertyDescriptor,
            vb = pu && !du.call({
                1: 2
            }, 1);
        gu.f = vb ? function(t) {
            var r = pu(this, t);
            return !!r && r.enumerable
        } : du
    });
    var Hi = c((iW, hu) => {
        hu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Ke = c((oW, Eu) => {
        var yu = Function.prototype,
            Wi = yu.bind,
            ki = yu.call,
            hb = Wi && Wi.bind(ki);
        Eu.exports = Wi ? function(e) {
            return e && hb(ki, e)
        } : function(e) {
            return e && function() {
                return ki.apply(e, arguments)
            }
        }
    });
    var bu = c((aW, _u) => {
        var mu = Ke(),
            yb = mu({}.toString),
            Eb = mu("".slice);
        _u.exports = function(e) {
            return Eb(yb(e), 8, -1)
        }
    });
    var Iu = c((sW, Tu) => {
        var mb = Ee(),
            _b = Ke(),
            bb = kt(),
            Tb = bu(),
            Xi = mb.Object,
            Ib = _b("".split);
        Tu.exports = bb(function() {
            return !Xi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Tb(e) == "String" ? Ib(e, "") : Xi(e)
        } : Xi
    });
    var Bi = c((uW, Ou) => {
        var Ob = Ee(),
            wb = Ob.TypeError;
        Ou.exports = function(e) {
            if (e == null) throw wb("Can't call method on " + e);
            return e
        }
    });
    var Ir = c((cW, wu) => {
        var Ab = Iu(),
            xb = Bi();
        wu.exports = function(e) {
            return Ab(xb(e))
        }
    });
    var ot = c((lW, Au) => {
        Au.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Xt = c((fW, xu) => {
        var Sb = ot();
        xu.exports = function(e) {
            return typeof e == "object" ? e !== null : Sb(e)
        }
    });
    var Or = c((dW, Su) => {
        var ji = Ee(),
            Rb = ot(),
            Cb = function(e) {
                return Rb(e) ? e : void 0
            };
        Su.exports = function(e, t) {
            return arguments.length < 2 ? Cb(ji[e]) : ji[e] && ji[e][t]
        }
    });
    var Cu = c((pW, Ru) => {
        var Nb = Ke();
        Ru.exports = Nb({}.isPrototypeOf)
    });
    var Lu = c((gW, Nu) => {
        var Lb = Or();
        Nu.exports = Lb("navigator", "userAgent") || ""
    });
    var Uu = c((vW, Gu) => {
        var Fu = Ee(),
            zi = Lu(),
            Pu = Fu.process,
            Mu = Fu.Deno,
            qu = Pu && Pu.versions || Mu && Mu.version,
            Du = qu && qu.v8,
            Ye, vn;
        Du && (Ye = Du.split("."), vn = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1]));
        !vn && zi && (Ye = zi.match(/Edge\/(\d+)/), (!Ye || Ye[1] >= 74) && (Ye = zi.match(/Chrome\/(\d+)/), Ye && (vn = +Ye[1])));
        Gu.exports = vn
    });
    var Ki = c((hW, Hu) => {
        var Vu = Uu(),
            Pb = kt();
        Hu.exports = !!Object.getOwnPropertySymbols && !Pb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Vu && Vu < 41
        })
    });
    var Yi = c((yW, Wu) => {
        var Mb = Ki();
        Wu.exports = Mb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var $i = c((EW, ku) => {
        var qb = Ee(),
            Db = Or(),
            Fb = ot(),
            Gb = Cu(),
            Ub = Yi(),
            Vb = qb.Object;
        ku.exports = Ub ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Db("Symbol");
            return Fb(t) && Gb(t.prototype, Vb(e))
        }
    });
    var Bu = c((mW, Xu) => {
        var Hb = Ee(),
            Wb = Hb.String;
        Xu.exports = function(e) {
            try {
                return Wb(e)
            } catch {
                return "Object"
            }
        }
    });
    var zu = c((_W, ju) => {
        var kb = Ee(),
            Xb = ot(),
            Bb = Bu(),
            jb = kb.TypeError;
        ju.exports = function(e) {
            if (Xb(e)) return e;
            throw jb(Bb(e) + " is not a function")
        }
    });
    var Yu = c((bW, Ku) => {
        var zb = zu();
        Ku.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : zb(r)
        }
    });
    var Qu = c((TW, $u) => {
        var Kb = Ee(),
            Qi = gn(),
            Zi = ot(),
            Ji = Xt(),
            Yb = Kb.TypeError;
        $u.exports = function(e, t) {
            var r, n;
            if (t === "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e)) || Zi(r = e.valueOf) && !Ji(n = Qi(r, e)) || t !== "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e))) return n;
            throw Yb("Can't convert object to primitive value")
        }
    });
    var Ju = c((IW, Zu) => {
        Zu.exports = !1
    });
    var hn = c((OW, tc) => {
        var ec = Ee(),
            $b = Object.defineProperty;
        tc.exports = function(e, t) {
            try {
                $b(ec, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                ec[e] = t
            }
            return t
        }
    });
    var yn = c((wW, nc) => {
        var Qb = Ee(),
            Zb = hn(),
            rc = "__core-js_shared__",
            Jb = Qb[rc] || Zb(rc, {});
        nc.exports = Jb
    });
    var eo = c((AW, oc) => {
        var eT = Ju(),
            ic = yn();
        (oc.exports = function(e, t) {
            return ic[e] || (ic[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: eT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var sc = c((xW, ac) => {
        var tT = Ee(),
            rT = Bi(),
            nT = tT.Object;
        ac.exports = function(e) {
            return nT(rT(e))
        }
    });
    var _t = c((SW, uc) => {
        var iT = Ke(),
            oT = sc(),
            aT = iT({}.hasOwnProperty);
        uc.exports = Object.hasOwn || function(t, r) {
            return aT(oT(t), r)
        }
    });
    var to = c((RW, cc) => {
        var sT = Ke(),
            uT = 0,
            cT = Math.random(),
            lT = sT(1.toString);
        cc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + lT(++uT + cT, 36)
        }
    });
    var ro = c((CW, gc) => {
        var fT = Ee(),
            dT = eo(),
            lc = _t(),
            pT = to(),
            fc = Ki(),
            pc = Yi(),
            Bt = dT("wks"),
            Nt = fT.Symbol,
            dc = Nt && Nt.for,
            gT = pc ? Nt : Nt && Nt.withoutSetter || pT;
        gc.exports = function(e) {
            if (!lc(Bt, e) || !(fc || typeof Bt[e] == "string")) {
                var t = "Symbol." + e;
                fc && lc(Nt, e) ? Bt[e] = Nt[e] : pc && dc ? Bt[e] = dc(t) : Bt[e] = gT(t)
            }
            return Bt[e]
        }
    });
    var Ec = c((NW, yc) => {
        var vT = Ee(),
            hT = gn(),
            vc = Xt(),
            hc = $i(),
            yT = Yu(),
            ET = Qu(),
            mT = ro(),
            _T = vT.TypeError,
            bT = mT("toPrimitive");
        yc.exports = function(e, t) {
            if (!vc(e) || hc(e)) return e;
            var r = yT(e, bT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = hT(r, e, t), !vc(n) || hc(n)) return n;
                throw _T("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), ET(e, t)
        }
    });
    var no = c((LW, mc) => {
        var TT = Ec(),
            IT = $i();
        mc.exports = function(e) {
            var t = TT(e, "string");
            return IT(t) ? t : t + ""
        }
    });
    var oo = c((PW, bc) => {
        var OT = Ee(),
            _c = Xt(),
            io = OT.document,
            wT = _c(io) && _c(io.createElement);
        bc.exports = function(e) {
            return wT ? io.createElement(e) : {}
        }
    });
    var ao = c((MW, Tc) => {
        var AT = Ct(),
            xT = kt(),
            ST = oo();
        Tc.exports = !AT && !xT(function() {
            return Object.defineProperty(ST("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var so = c(Oc => {
        var RT = Ct(),
            CT = gn(),
            NT = vu(),
            LT = Hi(),
            PT = Ir(),
            MT = no(),
            qT = _t(),
            DT = ao(),
            Ic = Object.getOwnPropertyDescriptor;
        Oc.f = RT ? Ic : function(t, r) {
            if (t = PT(t), r = MT(r), DT) try {
                return Ic(t, r)
            } catch {}
            if (qT(t, r)) return LT(!CT(NT.f, t, r), t[r])
        }
    });
    var wr = c((DW, Ac) => {
        var wc = Ee(),
            FT = Xt(),
            GT = wc.String,
            UT = wc.TypeError;
        Ac.exports = function(e) {
            if (FT(e)) return e;
            throw UT(GT(e) + " is not an object")
        }
    });
    var Ar = c(Rc => {
        var VT = Ee(),
            HT = Ct(),
            WT = ao(),
            xc = wr(),
            kT = no(),
            XT = VT.TypeError,
            Sc = Object.defineProperty;
        Rc.f = HT ? Sc : function(t, r, n) {
            if (xc(t), r = kT(r), xc(n), WT) try {
                return Sc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw XT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var En = c((GW, Cc) => {
        var BT = Ct(),
            jT = Ar(),
            zT = Hi();
        Cc.exports = BT ? function(e, t, r) {
            return jT.f(e, t, zT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var co = c((UW, Nc) => {
        var KT = Ke(),
            YT = ot(),
            uo = yn(),
            $T = KT(Function.toString);
        YT(uo.inspectSource) || (uo.inspectSource = function(e) {
            return $T(e)
        });
        Nc.exports = uo.inspectSource
    });
    var Mc = c((VW, Pc) => {
        var QT = Ee(),
            ZT = ot(),
            JT = co(),
            Lc = QT.WeakMap;
        Pc.exports = ZT(Lc) && /native code/.test(JT(Lc))
    });
    var lo = c((HW, Dc) => {
        var eI = eo(),
            tI = to(),
            qc = eI("keys");
        Dc.exports = function(e) {
            return qc[e] || (qc[e] = tI(e))
        }
    });
    var mn = c((WW, Fc) => {
        Fc.exports = {}
    });
    var kc = c((kW, Wc) => {
        var rI = Mc(),
            Hc = Ee(),
            fo = Ke(),
            nI = Xt(),
            iI = En(),
            po = _t(),
            go = yn(),
            oI = lo(),
            aI = mn(),
            Gc = "Object already initialized",
            ho = Hc.TypeError,
            sI = Hc.WeakMap,
            _n, xr, bn, uI = function(e) {
                return bn(e) ? xr(e) : _n(e, {})
            },
            cI = function(e) {
                return function(t) {
                    var r;
                    if (!nI(t) || (r = xr(t)).type !== e) throw ho("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        rI || go.state ? (bt = go.state || (go.state = new sI), Uc = fo(bt.get), vo = fo(bt.has), Vc = fo(bt.set), _n = function(e, t) {
            if (vo(bt, e)) throw new ho(Gc);
            return t.facade = e, Vc(bt, e, t), t
        }, xr = function(e) {
            return Uc(bt, e) || {}
        }, bn = function(e) {
            return vo(bt, e)
        }) : (Lt = oI("state"), aI[Lt] = !0, _n = function(e, t) {
            if (po(e, Lt)) throw new ho(Gc);
            return t.facade = e, iI(e, Lt, t), t
        }, xr = function(e) {
            return po(e, Lt) ? e[Lt] : {}
        }, bn = function(e) {
            return po(e, Lt)
        });
        var bt, Uc, vo, Vc, Lt;
        Wc.exports = {
            set: _n,
            get: xr,
            has: bn,
            enforce: uI,
            getterFor: cI
        }
    });
    var jc = c((XW, Bc) => {
        var yo = Ct(),
            lI = _t(),
            Xc = Function.prototype,
            fI = yo && Object.getOwnPropertyDescriptor,
            Eo = lI(Xc, "name"),
            dI = Eo && function() {}.name === "something",
            pI = Eo && (!yo || yo && fI(Xc, "name").configurable);
        Bc.exports = {
            EXISTS: Eo,
            PROPER: dI,
            CONFIGURABLE: pI
        }
    });
    var Qc = c((BW, $c) => {
        var gI = Ee(),
            zc = ot(),
            vI = _t(),
            Kc = En(),
            hI = hn(),
            yI = co(),
            Yc = kc(),
            EI = jc().CONFIGURABLE,
            mI = Yc.get,
            _I = Yc.enforce,
            bI = String(String).split("String");
        ($c.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (zc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!vI(r, "name") || EI && r.name !== a) && Kc(r, "name", a), u = _I(r), u.source || (u.source = bI.join(typeof a == "string" ? a : ""))), e === gI) {
                o ? e[t] = r : hI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Kc(e, t, r)
        })(Function.prototype, "toString", function() {
            return zc(this) && mI(this).source || yI(this)
        })
    });
    var mo = c((jW, Zc) => {
        var TI = Math.ceil,
            II = Math.floor;
        Zc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? II : TI)(t)
        }
    });
    var el = c((zW, Jc) => {
        var OI = mo(),
            wI = Math.max,
            AI = Math.min;
        Jc.exports = function(e, t) {
            var r = OI(e);
            return r < 0 ? wI(r + t, 0) : AI(r, t)
        }
    });
    var rl = c((KW, tl) => {
        var xI = mo(),
            SI = Math.min;
        tl.exports = function(e) {
            return e > 0 ? SI(xI(e), 9007199254740991) : 0
        }
    });
    var il = c((YW, nl) => {
        var RI = rl();
        nl.exports = function(e) {
            return RI(e.length)
        }
    });
    var _o = c(($W, al) => {
        var CI = Ir(),
            NI = el(),
            LI = il(),
            ol = function(e) {
                return function(t, r, n) {
                    var i = CI(t),
                        o = LI(i),
                        s = NI(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        al.exports = {
            includes: ol(!0),
            indexOf: ol(!1)
        }
    });
    var To = c((QW, ul) => {
        var PI = Ke(),
            bo = _t(),
            MI = Ir(),
            qI = _o().indexOf,
            DI = mn(),
            sl = PI([].push);
        ul.exports = function(e, t) {
            var r = MI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !bo(DI, o) && bo(r, o) && sl(i, o);
            for (; t.length > n;) bo(r, o = t[n++]) && (~qI(i, o) || sl(i, o));
            return i
        }
    });
    var Tn = c((ZW, cl) => {
        cl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var fl = c(ll => {
        var FI = To(),
            GI = Tn(),
            UI = GI.concat("length", "prototype");
        ll.f = Object.getOwnPropertyNames || function(t) {
            return FI(t, UI)
        }
    });
    var pl = c(dl => {
        dl.f = Object.getOwnPropertySymbols
    });
    var vl = c((tk, gl) => {
        var VI = Or(),
            HI = Ke(),
            WI = fl(),
            kI = pl(),
            XI = wr(),
            BI = HI([].concat);
        gl.exports = VI("Reflect", "ownKeys") || function(t) {
            var r = WI.f(XI(t)),
                n = kI.f;
            return n ? BI(r, n(t)) : r
        }
    });
    var yl = c((rk, hl) => {
        var jI = _t(),
            zI = vl(),
            KI = so(),
            YI = Ar();
        hl.exports = function(e, t) {
            for (var r = zI(t), n = YI.f, i = KI.f, o = 0; o < r.length; o++) {
                var s = r[o];
                jI(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var ml = c((nk, El) => {
        var $I = kt(),
            QI = ot(),
            ZI = /#|\.prototype\./,
            Sr = function(e, t) {
                var r = eO[JI(e)];
                return r == rO ? !0 : r == tO ? !1 : QI(t) ? $I(t) : !!t
            },
            JI = Sr.normalize = function(e) {
                return String(e).replace(ZI, ".").toLowerCase()
            },
            eO = Sr.data = {},
            tO = Sr.NATIVE = "N",
            rO = Sr.POLYFILL = "P";
        El.exports = Sr
    });
    var bl = c((ik, _l) => {
        var Io = Ee(),
            nO = so().f,
            iO = En(),
            oO = Qc(),
            aO = hn(),
            sO = yl(),
            uO = ml();
        _l.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, f, d;
            if (n ? s = Io : i ? s = Io[r] || aO(r, {}) : s = (Io[r] || {}).prototype, s)
                for (a in t) {
                    if (f = t[a], e.noTargetGet ? (d = nO(s, a), u = d && d.value) : u = s[a], o = uO(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof f == typeof u) continue;
                        sO(f, u)
                    }(e.sham || u && u.sham) && iO(f, "sham", !0), oO(s, a, f, e)
                }
        }
    });
    var Il = c((ok, Tl) => {
        var cO = To(),
            lO = Tn();
        Tl.exports = Object.keys || function(t) {
            return cO(t, lO)
        }
    });
    var wl = c((ak, Ol) => {
        var fO = Ct(),
            dO = Ar(),
            pO = wr(),
            gO = Ir(),
            vO = Il();
        Ol.exports = fO ? Object.defineProperties : function(t, r) {
            pO(t);
            for (var n = gO(r), i = vO(r), o = i.length, s = 0, a; o > s;) dO.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var xl = c((sk, Al) => {
        var hO = Or();
        Al.exports = hO("document", "documentElement")
    });
    var ql = c((uk, Ml) => {
        var yO = wr(),
            EO = wl(),
            Sl = Tn(),
            mO = mn(),
            _O = xl(),
            bO = oo(),
            TO = lo(),
            Rl = ">",
            Cl = "<",
            wo = "prototype",
            Ao = "script",
            Ll = TO("IE_PROTO"),
            Oo = function() {},
            Pl = function(e) {
                return Cl + Ao + Rl + e + Cl + "/" + Ao + Rl
            },
            Nl = function(e) {
                e.write(Pl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            IO = function() {
                var e = bO("iframe"),
                    t = "java" + Ao + ":",
                    r;
                return e.style.display = "none", _O.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Pl("document.F=Object")), r.close(), r.F
            },
            In, On = function() {
                try {
                    In = new ActiveXObject("htmlfile")
                } catch {}
                On = typeof document < "u" ? document.domain && In ? Nl(In) : IO() : Nl(In);
                for (var e = Sl.length; e--;) delete On[wo][Sl[e]];
                return On()
            };
        mO[Ll] = !0;
        Ml.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[wo] = yO(t), n = new Oo, Oo[wo] = null, n[Ll] = t) : n = On(), r === void 0 ? n : EO(n, r)
        }
    });
    var Fl = c((ck, Dl) => {
        var OO = ro(),
            wO = ql(),
            AO = Ar(),
            xo = OO("unscopables"),
            So = Array.prototype;
        So[xo] == null && AO.f(So, xo, {
            configurable: !0,
            value: wO(null)
        });
        Dl.exports = function(e) {
            So[xo][e] = !0
        }
    });
    var Gl = c(() => {
        "use strict";
        var xO = bl(),
            SO = _o().includes,
            RO = Fl();
        xO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return SO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        RO("includes")
    });
    var Vl = c((dk, Ul) => {
        var CO = Ee(),
            NO = Ke();
        Ul.exports = function(e, t) {
            return NO(CO[e].prototype[t])
        }
    });
    var Wl = c((pk, Hl) => {
        Gl();
        var LO = Vl();
        Hl.exports = LO("Array", "includes")
    });
    var Xl = c((gk, kl) => {
        var PO = Wl();
        kl.exports = PO
    });
    var jl = c((vk, Bl) => {
        var MO = Xl();
        Bl.exports = MO
    });
    var Ro = c((hk, zl) => {
        var qO = typeof global == "object" && global && global.Object === Object && global;
        zl.exports = qO
    });
    var $e = c((yk, Kl) => {
        var DO = Ro(),
            FO = typeof self == "object" && self && self.Object === Object && self,
            GO = DO || FO || Function("return this")();
        Kl.exports = GO
    });
    var jt = c((Ek, Yl) => {
        var UO = $e(),
            VO = UO.Symbol;
        Yl.exports = VO
    });
    var Jl = c((mk, Zl) => {
        var $l = jt(),
            Ql = Object.prototype,
            HO = Ql.hasOwnProperty,
            WO = Ql.toString,
            Rr = $l ? $l.toStringTag : void 0;

        function kO(e) {
            var t = HO.call(e, Rr),
                r = e[Rr];
            try {
                e[Rr] = void 0;
                var n = !0
            } catch {}
            var i = WO.call(e);
            return n && (t ? e[Rr] = r : delete e[Rr]), i
        }
        Zl.exports = kO
    });
    var tf = c((_k, ef) => {
        var XO = Object.prototype,
            BO = XO.toString;

        function jO(e) {
            return BO.call(e)
        }
        ef.exports = jO
    });
    var Tt = c((bk, of ) => {
        var rf = jt(),
            zO = Jl(),
            KO = tf(),
            YO = "[object Null]",
            $O = "[object Undefined]",
            nf = rf ? rf.toStringTag : void 0;

        function QO(e) {
            return e == null ? e === void 0 ? $O : YO : nf && nf in Object(e) ? zO(e) : KO(e)
        } of .exports = QO
    });
    var Co = c((Tk, af) => {
        function ZO(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        af.exports = ZO
    });
    var No = c((Ik, sf) => {
        var JO = Co(),
            ew = JO(Object.getPrototypeOf, Object);
        sf.exports = ew
    });
    var pt = c((Ok, uf) => {
        function tw(e) {
            return e != null && typeof e == "object"
        }
        uf.exports = tw
    });
    var Lo = c((wk, lf) => {
        var rw = Tt(),
            nw = No(),
            iw = pt(),
            ow = "[object Object]",
            aw = Function.prototype,
            sw = Object.prototype,
            cf = aw.toString,
            uw = sw.hasOwnProperty,
            cw = cf.call(Object);

        function lw(e) {
            if (!iw(e) || rw(e) != ow) return !1;
            var t = nw(e);
            if (t === null) return !0;
            var r = uw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && cf.call(r) == cw
        }
        lf.exports = lw
    });
    var ff = c(Po => {
        "use strict";
        Object.defineProperty(Po, "__esModule", {
            value: !0
        });
        Po.default = fw;

        function fw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var df = c((qo, Mo) => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        var dw = ff(),
            pw = gw(dw);

        function gw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var zt;
        typeof self < "u" ? zt = self : typeof window < "u" ? zt = window : typeof global < "u" ? zt = global : typeof Mo < "u" ? zt = Mo : zt = Function("return this")();
        var vw = (0, pw.default)(zt);
        qo.default = vw
    });
    var Do = c(Cr => {
        "use strict";
        Cr.__esModule = !0;
        Cr.ActionTypes = void 0;
        Cr.default = hf;
        var hw = Lo(),
            yw = vf(hw),
            Ew = df(),
            pf = vf(Ew);

        function vf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var gf = Cr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function hf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(hf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function f() {
                a === s && (a = s.slice())
            }

            function d() {
                return o
            }

            function p(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var P = !0;
                return f(), a.push(_),
                    function() {
                        if (P) {
                            P = !1, f();
                            var S = a.indexOf(_);
                            a.splice(S, 1)
                        }
                    }
            }

            function y(_) {
                if (!(0, yw.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var P = s = a, O = 0; O < P.length; O++) P[O]();
                return _
            }

            function h(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, y({
                    type: gf.INIT
                })
            }

            function m() {
                var _, P = p;
                return _ = {
                    subscribe: function(S) {
                        if (typeof S != "object") throw new TypeError("Expected the observer to be an object.");

                        function w() {
                            S.next && S.next(d())
                        }
                        w();
                        var R = P(w);
                        return {
                            unsubscribe: R
                        }
                    }
                }, _[pf.default] = function() {
                    return this
                }, _
            }
            return y({
                type: gf.INIT
            }), n = {
                dispatch: y,
                subscribe: p,
                getState: d,
                replaceReducer: h
            }, n[pf.default] = m, n
        }
    });
    var Go = c(Fo => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = mw;

        function mw(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var mf = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = Ow;
        var yf = Do(),
            _w = Lo(),
            Rk = Ef(_w),
            bw = Go(),
            Ck = Ef(bw);

        function Ef(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Tw(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Iw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: yf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + yf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Ow(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                Iw(r)
            } catch (u) {
                a = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    d = arguments[1];
                if (a) throw a;
                if (!1) var p;
                for (var y = !1, h = {}, m = 0; m < o.length; m++) {
                    var _ = o[m],
                        P = r[_],
                        O = f[_],
                        S = P(O, d);
                    if (typeof S > "u") {
                        var w = Tw(_, d);
                        throw new Error(w)
                    }
                    h[_] = S, y = y || S !== O
                }
                return y ? h : f
            }
        }
    });
    var bf = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = ww;

        function _f(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function ww(e, t) {
            if (typeof e == "function") return _f(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = _f(s, t))
            }
            return n
        }
    });
    var Wo = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = Aw;

        function Aw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var Tf = c(ko => {
        "use strict";
        ko.__esModule = !0;
        var xw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        ko.default = Nw;
        var Sw = Wo(),
            Rw = Cw(Sw);

        function Cw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Nw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        f = [],
                        d = {
                            getState: a.getState,
                            dispatch: function(y) {
                                return u(y)
                            }
                        };
                    return f = t.map(function(p) {
                        return p(d)
                    }), u = Rw.default.apply(void 0, f)(a.dispatch), xw({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Xo = c(ke => {
        "use strict";
        ke.__esModule = !0;
        ke.compose = ke.applyMiddleware = ke.bindActionCreators = ke.combineReducers = ke.createStore = void 0;
        var Lw = Do(),
            Pw = Kt(Lw),
            Mw = mf(),
            qw = Kt(Mw),
            Dw = bf(),
            Fw = Kt(Dw),
            Gw = Tf(),
            Uw = Kt(Gw),
            Vw = Wo(),
            Hw = Kt(Vw),
            Ww = Go(),
            qk = Kt(Ww);

        function Kt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ke.createStore = Pw.default;
        ke.combineReducers = qw.default;
        ke.bindActionCreators = Fw.default;
        ke.applyMiddleware = Uw.default;
        ke.compose = Hw.default
    });
    var Qe, Bo, at, kw, Xw, wn, Bw, jo = ye(() => {
        "use strict";
        Qe = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Bo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, at = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, kw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, Xw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, wn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, Bw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ge, jw, An = ye(() => {
        "use strict";
        Ge = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, jw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var zw, If = ye(() => {
        "use strict";
        zw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var Kw, Yw, $w, Qw, Zw, Jw, eA, zo, Of = ye(() => {
        "use strict";
        An();
        ({
            TRANSFORM_MOVE: Kw,
            TRANSFORM_SCALE: Yw,
            TRANSFORM_ROTATE: $w,
            TRANSFORM_SKEW: Qw,
            STYLE_SIZE: Zw,
            STYLE_FILTER: Jw,
            STYLE_FONT_VARIATION: eA
        } = Ge), zo = {
            [Kw]: !0,
            [Yw]: !0,
            [$w]: !0,
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0,
            [eA]: !0
        }
    });
    var Oe = {};
    Fe(Oe, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => yA,
        IX2_ANIMATION_FRAME_CHANGED: () => fA,
        IX2_CLEAR_REQUESTED: () => uA,
        IX2_ELEMENT_STATE_CHANGED: () => hA,
        IX2_EVENT_LISTENER_ADDED: () => cA,
        IX2_EVENT_STATE_CHANGED: () => lA,
        IX2_INSTANCE_ADDED: () => pA,
        IX2_INSTANCE_REMOVED: () => vA,
        IX2_INSTANCE_STARTED: () => gA,
        IX2_MEDIA_QUERIES_DEFINED: () => mA,
        IX2_PARAMETER_CHANGED: () => dA,
        IX2_PLAYBACK_REQUESTED: () => aA,
        IX2_PREVIEW_REQUESTED: () => oA,
        IX2_RAW_DATA_IMPORTED: () => tA,
        IX2_SESSION_INITIALIZED: () => rA,
        IX2_SESSION_STARTED: () => nA,
        IX2_SESSION_STOPPED: () => iA,
        IX2_STOP_REQUESTED: () => sA,
        IX2_TEST_FRAME_RENDERED: () => _A,
        IX2_VIEWPORT_WIDTH_CHANGED: () => EA
    });
    var tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, yA, EA, mA, _A, wf = ye(() => {
        "use strict";
        tA = "IX2_RAW_DATA_IMPORTED", rA = "IX2_SESSION_INITIALIZED", nA = "IX2_SESSION_STARTED", iA = "IX2_SESSION_STOPPED", oA = "IX2_PREVIEW_REQUESTED", aA = "IX2_PLAYBACK_REQUESTED", sA = "IX2_STOP_REQUESTED", uA = "IX2_CLEAR_REQUESTED", cA = "IX2_EVENT_LISTENER_ADDED", lA = "IX2_EVENT_STATE_CHANGED", fA = "IX2_ANIMATION_FRAME_CHANGED", dA = "IX2_PARAMETER_CHANGED", pA = "IX2_INSTANCE_ADDED", gA = "IX2_INSTANCE_STARTED", vA = "IX2_INSTANCE_REMOVED", hA = "IX2_ELEMENT_STATE_CHANGED", yA = "IX2_ACTION_LIST_PLAYBACK_CHANGED", EA = "IX2_VIEWPORT_WIDTH_CHANGED", mA = "IX2_MEDIA_QUERIES_DEFINED", _A = "IX2_TEST_FRAME_RENDERED"
    });
    var Ce = {};
    Fe(Ce, {
        ABSTRACT_NODE: () => Ex,
        AUTO: () => sx,
        BACKGROUND: () => tx,
        BACKGROUND_COLOR: () => ex,
        BAR_DELIMITER: () => lx,
        BORDER_COLOR: () => rx,
        BOUNDARY_SELECTOR: () => wA,
        CHILDREN: () => fx,
        COLON_DELIMITER: () => cx,
        COLOR: () => nx,
        COMMA_DELIMITER: () => ux,
        CONFIG_UNIT: () => PA,
        CONFIG_VALUE: () => RA,
        CONFIG_X_UNIT: () => CA,
        CONFIG_X_VALUE: () => AA,
        CONFIG_Y_UNIT: () => NA,
        CONFIG_Y_VALUE: () => xA,
        CONFIG_Z_UNIT: () => LA,
        CONFIG_Z_VALUE: () => SA,
        DISPLAY: () => ix,
        FILTER: () => $A,
        FLEX: () => ox,
        FONT_VARIATION_SETTINGS: () => QA,
        HEIGHT: () => JA,
        HTML_ELEMENT: () => hx,
        IMMEDIATE_CHILDREN: () => dx,
        IX2_ID_DELIMITER: () => bA,
        OPACITY: () => YA,
        PARENT: () => gx,
        PLAIN_OBJECT: () => yx,
        PRESERVE_3D: () => vx,
        RENDER_GENERAL: () => _x,
        RENDER_PLUGIN: () => Tx,
        RENDER_STYLE: () => bx,
        RENDER_TRANSFORM: () => mx,
        ROTATE_X: () => kA,
        ROTATE_Y: () => XA,
        ROTATE_Z: () => BA,
        SCALE_3D: () => WA,
        SCALE_X: () => UA,
        SCALE_Y: () => VA,
        SCALE_Z: () => HA,
        SIBLINGS: () => px,
        SKEW: () => jA,
        SKEW_X: () => zA,
        SKEW_Y: () => KA,
        TRANSFORM: () => MA,
        TRANSLATE_3D: () => GA,
        TRANSLATE_X: () => qA,
        TRANSLATE_Y: () => DA,
        TRANSLATE_Z: () => FA,
        WF_PAGE: () => TA,
        WIDTH: () => ZA,
        WILL_CHANGE: () => ax,
        W_MOD_IX: () => OA,
        W_MOD_JS: () => IA
    });
    var bA, TA, IA, OA, wA, AA, xA, SA, RA, CA, NA, LA, PA, MA, qA, DA, FA, GA, UA, VA, HA, WA, kA, XA, BA, jA, zA, KA, YA, $A, QA, ZA, JA, ex, tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, px, gx, vx, hx, yx, Ex, mx, _x, bx, Tx, Af = ye(() => {
        "use strict";
        bA = "|", TA = "data-wf-page", IA = "w-mod-js", OA = "w-mod-ix", wA = ".w-dyn-item", AA = "xValue", xA = "yValue", SA = "zValue", RA = "value", CA = "xUnit", NA = "yUnit", LA = "zUnit", PA = "unit", MA = "transform", qA = "translateX", DA = "translateY", FA = "translateZ", GA = "translate3d", UA = "scaleX", VA = "scaleY", HA = "scaleZ", WA = "scale3d", kA = "rotateX", XA = "rotateY", BA = "rotateZ", jA = "skew", zA = "skewX", KA = "skewY", YA = "opacity", $A = "filter", QA = "font-variation-settings", ZA = "width", JA = "height", ex = "backgroundColor", tx = "background", rx = "borderColor", nx = "color", ix = "display", ox = "flex", ax = "willChange", sx = "AUTO", ux = ",", cx = ":", lx = "|", fx = "CHILDREN", dx = "IMMEDIATE_CHILDREN", px = "SIBLINGS", gx = "PARENT", vx = "preserve-3d", hx = "HTML_ELEMENT", yx = "PLAIN_OBJECT", Ex = "ABSTRACT_NODE", mx = "RENDER_TRANSFORM", _x = "RENDER_GENERAL", bx = "RENDER_STYLE", Tx = "RENDER_PLUGIN"
    });
    var xf = {};
    Fe(xf, {
        ActionAppliesTo: () => jw,
        ActionTypeConsts: () => Ge,
        EventAppliesTo: () => Bo,
        EventBasedOn: () => at,
        EventContinuousMouseAxes: () => kw,
        EventLimitAffectedElements: () => Xw,
        EventTypeConsts: () => Qe,
        IX2EngineActionTypes: () => Oe,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => zw,
        QuickEffectDirectionConsts: () => Bw,
        QuickEffectIds: () => wn,
        ReducedMotionTypes: () => zo
    });
    var Ue = ye(() => {
        "use strict";
        jo();
        An();
        If();
        Of();
        wf();
        Af();
        An();
        jo()
    });
    var Ix, Sf, Rf = ye(() => {
        "use strict";
        Ue();
        ({
            IX2_RAW_DATA_IMPORTED: Ix
        } = Oe), Sf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Ix:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Yt = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        var Ox = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        _e.clone = Sn;
        _e.addLast = Lf;
        _e.addFirst = Pf;
        _e.removeLast = Mf;
        _e.removeFirst = qf;
        _e.insert = Df;
        _e.removeAt = Ff;
        _e.replaceAt = Gf;
        _e.getIn = Rn;
        _e.set = Cn;
        _e.setIn = Nn;
        _e.update = Vf;
        _e.updateIn = Hf;
        _e.merge = Wf;
        _e.mergeDeep = kf;
        _e.mergeIn = Xf;
        _e.omit = Bf;
        _e.addDefaults = jf;
        var Cf = "INVALID_ARGS";

        function Nf(e) {
            throw new Error(e)
        }

        function Ko(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var wx = {}.hasOwnProperty;

        function Sn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Ko(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ve(e, t, r) {
            var n = r;
            n == null && Nf(Cf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var f = s[u];
                if (f != null) {
                    var d = Ko(f);
                    if (d.length)
                        for (var p = 0; p <= d.length; p++) {
                            var y = d[p];
                            if (!(e && n[y] !== void 0)) {
                                var h = f[y];
                                t && xn(n[y]) && xn(h) && (h = Ve(e, t, n[y], h)), !(h === void 0 || h === n[y]) && (i || (i = !0, n = Sn(n)), n[y] = h)
                            }
                        }
                }
            }
            return n
        }

        function xn(e) {
            var t = typeof e > "u" ? "undefined" : Ox(e);
            return e != null && (t === "object" || t === "function")
        }

        function Lf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Pf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Mf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function qf(e) {
            return e.length ? e.slice(1) : e
        }

        function Df(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Ff(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Gf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Rn(e, t) {
            if (!Array.isArray(t) && Nf(Cf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Cn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Sn(i);
            return o[t] = r, o
        }

        function Uf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Uf(s, t, r, n + 1)
            }
            return Cn(e, o, i)
        }

        function Nn(e, t, r) {
            return t.length ? Uf(e, t, r, 0) : r
        }

        function Vf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Cn(e, t, i)
        }

        function Hf(e, t, r) {
            var n = Rn(e, t),
                i = r(n);
            return Nn(e, t, i)
        }

        function Wf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Ve(!1, !1, e, t, r, n, i, o)
        }

        function kf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Ve(!1, !0, e, t, r, n, i, o)
        }

        function Xf(e, t, r, n, i, o, s) {
            var a = Rn(e, t);
            a == null && (a = {});
            for (var u = void 0, f = arguments.length, d = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) d[p - 7] = arguments[p];
            return d.length ? u = Ve.call.apply(Ve, [null, !1, !1, a, r, n, i, o, s].concat(d)) : u = Ve(!1, !1, a, r, n, i, o, s), Nn(e, t, u)
        }

        function Bf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (wx.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = Ko(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function jf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Ve(!0, !1, e, t, r, n, i, o)
        }
        var Ax = {
            clone: Sn,
            addLast: Lf,
            addFirst: Pf,
            removeLast: Mf,
            removeFirst: qf,
            insert: Df,
            removeAt: Ff,
            replaceAt: Gf,
            getIn: Rn,
            set: Cn,
            setIn: Nn,
            update: Vf,
            updateIn: Hf,
            merge: Wf,
            mergeDeep: kf,
            mergeIn: Xf,
            omit: Bf,
            addDefaults: jf
        };
        _e.default = Ax
    });
    var Kf, xx, Sx, Rx, Cx, Nx, zf, Yf, $f = ye(() => {
        "use strict";
        Ue();
        Kf = fe(Yt()), {
            IX2_PREVIEW_REQUESTED: xx,
            IX2_PLAYBACK_REQUESTED: Sx,
            IX2_STOP_REQUESTED: Rx,
            IX2_CLEAR_REQUESTED: Cx
        } = Oe, Nx = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, zf = Object.create(null, {
            [xx]: {
                value: "preview"
            },
            [Sx]: {
                value: "playback"
            },
            [Rx]: {
                value: "stop"
            },
            [Cx]: {
                value: "clear"
            }
        }), Yf = (e = Nx, t) => {
            if (t.type in zf) {
                let r = [zf[t.type]];
                return (0, Kf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Pe, Lx, Px, Mx, qx, Dx, Fx, Gx, Ux, Vx, Hx, Qf, Wx, Zf, Jf = ye(() => {
        "use strict";
        Ue();
        Pe = fe(Yt()), {
            IX2_SESSION_INITIALIZED: Lx,
            IX2_SESSION_STARTED: Px,
            IX2_TEST_FRAME_RENDERED: Mx,
            IX2_SESSION_STOPPED: qx,
            IX2_EVENT_LISTENER_ADDED: Dx,
            IX2_EVENT_STATE_CHANGED: Fx,
            IX2_ANIMATION_FRAME_CHANGED: Gx,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Ux,
            IX2_VIEWPORT_WIDTH_CHANGED: Vx,
            IX2_MEDIA_QUERIES_DEFINED: Hx
        } = Oe, Qf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, Wx = 20, Zf = (e = Qf, t) => {
            switch (t.type) {
                case Lx:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Pe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case Px:
                    return (0, Pe.set)(e, "active", !0);
                case Mx:
                    {
                        let {
                            payload: {
                                step: r = Wx
                            }
                        } = t;
                        return (0, Pe.set)(e, "tick", e.tick + r)
                    }
                case qx:
                    return Qf;
                case Gx:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Pe.set)(e, "tick", r)
                    }
                case Dx:
                    {
                        let r = (0, Pe.addLast)(e.eventListeners, t.payload);
                        return (0, Pe.set)(e, "eventListeners", r)
                    }
                case Fx:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Pe.setIn)(e, ["eventState", r], n)
                    }
                case Ux:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Pe.setIn)(e, ["playbackState", r], n)
                    }
                case Vx:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: f
                            } = n[s];
                            if (r >= u && r <= f) {
                                o = a;
                                break
                            }
                        }
                        return (0, Pe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case Hx:
                    return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var td = c((tX, ed) => {
        function kx() {
            this.__data__ = [], this.size = 0
        }
        ed.exports = kx
    });
    var Ln = c((rX, rd) => {
        function Xx(e, t) {
            return e === t || e !== e && t !== t
        }
        rd.exports = Xx
    });
    var Nr = c((nX, nd) => {
        var Bx = Ln();

        function jx(e, t) {
            for (var r = e.length; r--;)
                if (Bx(e[r][0], t)) return r;
            return -1
        }
        nd.exports = jx
    });
    var od = c((iX, id) => {
        var zx = Nr(),
            Kx = Array.prototype,
            Yx = Kx.splice;

        function $x(e) {
            var t = this.__data__,
                r = zx(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : Yx.call(t, r, 1), --this.size, !0
        }
        id.exports = $x
    });
    var sd = c((oX, ad) => {
        var Qx = Nr();

        function Zx(e) {
            var t = this.__data__,
                r = Qx(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        ad.exports = Zx
    });
    var cd = c((aX, ud) => {
        var Jx = Nr();

        function eS(e) {
            return Jx(this.__data__, e) > -1
        }
        ud.exports = eS
    });
    var fd = c((sX, ld) => {
        var tS = Nr();

        function rS(e, t) {
            var r = this.__data__,
                n = tS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        ld.exports = rS
    });
    var Lr = c((uX, dd) => {
        var nS = td(),
            iS = od(),
            oS = sd(),
            aS = cd(),
            sS = fd();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = nS;
        $t.prototype.delete = iS;
        $t.prototype.get = oS;
        $t.prototype.has = aS;
        $t.prototype.set = sS;
        dd.exports = $t
    });
    var gd = c((cX, pd) => {
        var uS = Lr();

        function cS() {
            this.__data__ = new uS, this.size = 0
        }
        pd.exports = cS
    });
    var hd = c((lX, vd) => {
        function lS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        vd.exports = lS
    });
    var Ed = c((fX, yd) => {
        function fS(e) {
            return this.__data__.get(e)
        }
        yd.exports = fS
    });
    var _d = c((dX, md) => {
        function dS(e) {
            return this.__data__.has(e)
        }
        md.exports = dS
    });
    var st = c((pX, bd) => {
        function pS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        bd.exports = pS
    });
    var Yo = c((gX, Td) => {
        var gS = Tt(),
            vS = st(),
            hS = "[object AsyncFunction]",
            yS = "[object Function]",
            ES = "[object GeneratorFunction]",
            mS = "[object Proxy]";

        function _S(e) {
            if (!vS(e)) return !1;
            var t = gS(e);
            return t == yS || t == ES || t == hS || t == mS
        }
        Td.exports = _S
    });
    var Od = c((vX, Id) => {
        var bS = $e(),
            TS = bS["__core-js_shared__"];
        Id.exports = TS
    });
    var xd = c((hX, Ad) => {
        var $o = Od(),
            wd = function() {
                var e = /[^.]+$/.exec($o && $o.keys && $o.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function IS(e) {
            return !!wd && wd in e
        }
        Ad.exports = IS
    });
    var Qo = c((yX, Sd) => {
        var OS = Function.prototype,
            wS = OS.toString;

        function AS(e) {
            if (e != null) {
                try {
                    return wS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Sd.exports = AS
    });
    var Cd = c((EX, Rd) => {
        var xS = Yo(),
            SS = xd(),
            RS = st(),
            CS = Qo(),
            NS = /[\\^$.*+?()[\]{}|]/g,
            LS = /^\[object .+?Constructor\]$/,
            PS = Function.prototype,
            MS = Object.prototype,
            qS = PS.toString,
            DS = MS.hasOwnProperty,
            FS = RegExp("^" + qS.call(DS).replace(NS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function GS(e) {
            if (!RS(e) || SS(e)) return !1;
            var t = xS(e) ? FS : LS;
            return t.test(CS(e))
        }
        Rd.exports = GS
    });
    var Ld = c((mX, Nd) => {
        function US(e, t) {
            return e ? .[t]
        }
        Nd.exports = US
    });
    var It = c((_X, Pd) => {
        var VS = Cd(),
            HS = Ld();

        function WS(e, t) {
            var r = HS(e, t);
            return VS(r) ? r : void 0
        }
        Pd.exports = WS
    });
    var Pn = c((bX, Md) => {
        var kS = It(),
            XS = $e(),
            BS = kS(XS, "Map");
        Md.exports = BS
    });
    var Pr = c((TX, qd) => {
        var jS = It(),
            zS = jS(Object, "create");
        qd.exports = zS
    });
    var Gd = c((IX, Fd) => {
        var Dd = Pr();

        function KS() {
            this.__data__ = Dd ? Dd(null) : {}, this.size = 0
        }
        Fd.exports = KS
    });
    var Vd = c((OX, Ud) => {
        function YS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Ud.exports = YS
    });
    var Wd = c((wX, Hd) => {
        var $S = Pr(),
            QS = "__lodash_hash_undefined__",
            ZS = Object.prototype,
            JS = ZS.hasOwnProperty;

        function e0(e) {
            var t = this.__data__;
            if ($S) {
                var r = t[e];
                return r === QS ? void 0 : r
            }
            return JS.call(t, e) ? t[e] : void 0
        }
        Hd.exports = e0
    });
    var Xd = c((AX, kd) => {
        var t0 = Pr(),
            r0 = Object.prototype,
            n0 = r0.hasOwnProperty;

        function i0(e) {
            var t = this.__data__;
            return t0 ? t[e] !== void 0 : n0.call(t, e)
        }
        kd.exports = i0
    });
    var jd = c((xX, Bd) => {
        var o0 = Pr(),
            a0 = "__lodash_hash_undefined__";

        function s0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = o0 && t === void 0 ? a0 : t, this
        }
        Bd.exports = s0
    });
    var Kd = c((SX, zd) => {
        var u0 = Gd(),
            c0 = Vd(),
            l0 = Wd(),
            f0 = Xd(),
            d0 = jd();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = u0;
        Qt.prototype.delete = c0;
        Qt.prototype.get = l0;
        Qt.prototype.has = f0;
        Qt.prototype.set = d0;
        zd.exports = Qt
    });
    var Qd = c((RX, $d) => {
        var Yd = Kd(),
            p0 = Lr(),
            g0 = Pn();

        function v0() {
            this.size = 0, this.__data__ = {
                hash: new Yd,
                map: new(g0 || p0),
                string: new Yd
            }
        }
        $d.exports = v0
    });
    var Jd = c((CX, Zd) => {
        function h0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Zd.exports = h0
    });
    var Mr = c((NX, ep) => {
        var y0 = Jd();

        function E0(e, t) {
            var r = e.__data__;
            return y0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        ep.exports = E0
    });
    var rp = c((LX, tp) => {
        var m0 = Mr();

        function _0(e) {
            var t = m0(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        tp.exports = _0
    });
    var ip = c((PX, np) => {
        var b0 = Mr();

        function T0(e) {
            return b0(this, e).get(e)
        }
        np.exports = T0
    });
    var ap = c((MX, op) => {
        var I0 = Mr();

        function O0(e) {
            return I0(this, e).has(e)
        }
        op.exports = O0
    });
    var up = c((qX, sp) => {
        var w0 = Mr();

        function A0(e, t) {
            var r = w0(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        sp.exports = A0
    });
    var Mn = c((DX, cp) => {
        var x0 = Qd(),
            S0 = rp(),
            R0 = ip(),
            C0 = ap(),
            N0 = up();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = x0;
        Zt.prototype.delete = S0;
        Zt.prototype.get = R0;
        Zt.prototype.has = C0;
        Zt.prototype.set = N0;
        cp.exports = Zt
    });
    var fp = c((FX, lp) => {
        var L0 = Lr(),
            P0 = Pn(),
            M0 = Mn(),
            q0 = 200;

        function D0(e, t) {
            var r = this.__data__;
            if (r instanceof L0) {
                var n = r.__data__;
                if (!P0 || n.length < q0 - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new M0(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        lp.exports = D0
    });
    var Zo = c((GX, dp) => {
        var F0 = Lr(),
            G0 = gd(),
            U0 = hd(),
            V0 = Ed(),
            H0 = _d(),
            W0 = fp();

        function Jt(e) {
            var t = this.__data__ = new F0(e);
            this.size = t.size
        }
        Jt.prototype.clear = G0;
        Jt.prototype.delete = U0;
        Jt.prototype.get = V0;
        Jt.prototype.has = H0;
        Jt.prototype.set = W0;
        dp.exports = Jt
    });
    var gp = c((UX, pp) => {
        var k0 = "__lodash_hash_undefined__";

        function X0(e) {
            return this.__data__.set(e, k0), this
        }
        pp.exports = X0
    });
    var hp = c((VX, vp) => {
        function B0(e) {
            return this.__data__.has(e)
        }
        vp.exports = B0
    });
    var Ep = c((HX, yp) => {
        var j0 = Mn(),
            z0 = gp(),
            K0 = hp();

        function qn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new j0; ++t < r;) this.add(e[t])
        }
        qn.prototype.add = qn.prototype.push = z0;
        qn.prototype.has = K0;
        yp.exports = qn
    });
    var _p = c((WX, mp) => {
        function Y0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        mp.exports = Y0
    });
    var Tp = c((kX, bp) => {
        function $0(e, t) {
            return e.has(t)
        }
        bp.exports = $0
    });
    var Jo = c((XX, Ip) => {
        var Q0 = Ep(),
            Z0 = _p(),
            J0 = Tp(),
            eR = 1,
            tR = 2;

        function rR(e, t, r, n, i, o) {
            var s = r & eR,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var f = o.get(e),
                d = o.get(t);
            if (f && d) return f == t && d == e;
            var p = -1,
                y = !0,
                h = r & tR ? new Q0 : void 0;
            for (o.set(e, t), o.set(t, e); ++p < a;) {
                var m = e[p],
                    _ = t[p];
                if (n) var P = s ? n(_, m, p, t, e, o) : n(m, _, p, e, t, o);
                if (P !== void 0) {
                    if (P) continue;
                    y = !1;
                    break
                }
                if (h) {
                    if (!Z0(t, function(O, S) {
                            if (!J0(h, S) && (m === O || i(m, O, r, n, o))) return h.push(S)
                        })) {
                        y = !1;
                        break
                    }
                } else if (!(m === _ || i(m, _, r, n, o))) {
                    y = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), y
        }
        Ip.exports = rR
    });
    var wp = c((BX, Op) => {
        var nR = $e(),
            iR = nR.Uint8Array;
        Op.exports = iR
    });
    var xp = c((jX, Ap) => {
        function oR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Ap.exports = oR
    });
    var Rp = c((zX, Sp) => {
        function aR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Sp.exports = aR
    });
    var Mp = c((KX, Pp) => {
        var Cp = jt(),
            Np = wp(),
            sR = Ln(),
            uR = Jo(),
            cR = xp(),
            lR = Rp(),
            fR = 1,
            dR = 2,
            pR = "[object Boolean]",
            gR = "[object Date]",
            vR = "[object Error]",
            hR = "[object Map]",
            yR = "[object Number]",
            ER = "[object RegExp]",
            mR = "[object Set]",
            _R = "[object String]",
            bR = "[object Symbol]",
            TR = "[object ArrayBuffer]",
            IR = "[object DataView]",
            Lp = Cp ? Cp.prototype : void 0,
            ea = Lp ? Lp.valueOf : void 0;

        function OR(e, t, r, n, i, o, s) {
            switch (r) {
                case IR:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case TR:
                    return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
                case pR:
                case gR:
                case yR:
                    return sR(+e, +t);
                case vR:
                    return e.name == t.name && e.message == t.message;
                case ER:
                case _R:
                    return e == t + "";
                case hR:
                    var a = cR;
                case mR:
                    var u = n & fR;
                    if (a || (a = lR), e.size != t.size && !u) return !1;
                    var f = s.get(e);
                    if (f) return f == t;
                    n |= dR, s.set(e, t);
                    var d = uR(a(e), a(t), n, i, o, s);
                    return s.delete(e), d;
                case bR:
                    if (ea) return ea.call(e) == ea.call(t)
            }
            return !1
        }
        Pp.exports = OR
    });
    var Dn = c((YX, qp) => {
        function wR(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        qp.exports = wR
    });
    var Ae = c(($X, Dp) => {
        var AR = Array.isArray;
        Dp.exports = AR
    });
    var ta = c((QX, Fp) => {
        var xR = Dn(),
            SR = Ae();

        function RR(e, t, r) {
            var n = t(e);
            return SR(e) ? n : xR(n, r(e))
        }
        Fp.exports = RR
    });
    var Up = c((ZX, Gp) => {
        function CR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        Gp.exports = CR
    });
    var ra = c((JX, Vp) => {
        function NR() {
            return []
        }
        Vp.exports = NR
    });
    var na = c((e5, Wp) => {
        var LR = Up(),
            PR = ra(),
            MR = Object.prototype,
            qR = MR.propertyIsEnumerable,
            Hp = Object.getOwnPropertySymbols,
            DR = Hp ? function(e) {
                return e == null ? [] : (e = Object(e), LR(Hp(e), function(t) {
                    return qR.call(e, t)
                }))
            } : PR;
        Wp.exports = DR
    });
    var Xp = c((t5, kp) => {
        function FR(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        kp.exports = FR
    });
    var jp = c((r5, Bp) => {
        var GR = Tt(),
            UR = pt(),
            VR = "[object Arguments]";

        function HR(e) {
            return UR(e) && GR(e) == VR
        }
        Bp.exports = HR
    });
    var qr = c((n5, Yp) => {
        var zp = jp(),
            WR = pt(),
            Kp = Object.prototype,
            kR = Kp.hasOwnProperty,
            XR = Kp.propertyIsEnumerable,
            BR = zp(function() {
                return arguments
            }()) ? zp : function(e) {
                return WR(e) && kR.call(e, "callee") && !XR.call(e, "callee")
            };
        Yp.exports = BR
    });
    var Qp = c((i5, $p) => {
        function jR() {
            return !1
        }
        $p.exports = jR
    });
    var Fn = c((Dr, er) => {
        var zR = $e(),
            KR = Qp(),
            eg = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
            Zp = eg && typeof er == "object" && er && !er.nodeType && er,
            YR = Zp && Zp.exports === eg,
            Jp = YR ? zR.Buffer : void 0,
            $R = Jp ? Jp.isBuffer : void 0,
            QR = $R || KR;
        er.exports = QR
    });
    var Gn = c((o5, tg) => {
        var ZR = 9007199254740991,
            JR = /^(?:0|[1-9]\d*)$/;

        function eC(e, t) {
            var r = typeof e;
            return t = t ? ? ZR, !!t && (r == "number" || r != "symbol" && JR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        tg.exports = eC
    });
    var Un = c((a5, rg) => {
        var tC = 9007199254740991;

        function rC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tC
        }
        rg.exports = rC
    });
    var ig = c((s5, ng) => {
        var nC = Tt(),
            iC = Un(),
            oC = pt(),
            aC = "[object Arguments]",
            sC = "[object Array]",
            uC = "[object Boolean]",
            cC = "[object Date]",
            lC = "[object Error]",
            fC = "[object Function]",
            dC = "[object Map]",
            pC = "[object Number]",
            gC = "[object Object]",
            vC = "[object RegExp]",
            hC = "[object Set]",
            yC = "[object String]",
            EC = "[object WeakMap]",
            mC = "[object ArrayBuffer]",
            _C = "[object DataView]",
            bC = "[object Float32Array]",
            TC = "[object Float64Array]",
            IC = "[object Int8Array]",
            OC = "[object Int16Array]",
            wC = "[object Int32Array]",
            AC = "[object Uint8Array]",
            xC = "[object Uint8ClampedArray]",
            SC = "[object Uint16Array]",
            RC = "[object Uint32Array]",
            he = {};
        he[bC] = he[TC] = he[IC] = he[OC] = he[wC] = he[AC] = he[xC] = he[SC] = he[RC] = !0;
        he[aC] = he[sC] = he[mC] = he[uC] = he[_C] = he[cC] = he[lC] = he[fC] = he[dC] = he[pC] = he[gC] = he[vC] = he[hC] = he[yC] = he[EC] = !1;

        function CC(e) {
            return oC(e) && iC(e.length) && !!he[nC(e)]
        }
        ng.exports = CC
    });
    var ag = c((u5, og) => {
        function NC(e) {
            return function(t) {
                return e(t)
            }
        }
        og.exports = NC
    });
    var ug = c((Fr, tr) => {
        var LC = Ro(),
            sg = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            Gr = sg && typeof tr == "object" && tr && !tr.nodeType && tr,
            PC = Gr && Gr.exports === sg,
            ia = PC && LC.process,
            MC = function() {
                try {
                    var e = Gr && Gr.require && Gr.require("util").types;
                    return e || ia && ia.binding && ia.binding("util")
                } catch {}
            }();
        tr.exports = MC
    });
    var Vn = c((c5, fg) => {
        var qC = ig(),
            DC = ag(),
            cg = ug(),
            lg = cg && cg.isTypedArray,
            FC = lg ? DC(lg) : qC;
        fg.exports = FC
    });
    var oa = c((l5, dg) => {
        var GC = Xp(),
            UC = qr(),
            VC = Ae(),
            HC = Fn(),
            WC = Gn(),
            kC = Vn(),
            XC = Object.prototype,
            BC = XC.hasOwnProperty;

        function jC(e, t) {
            var r = VC(e),
                n = !r && UC(e),
                i = !r && !n && HC(e),
                o = !r && !n && !i && kC(e),
                s = r || n || i || o,
                a = s ? GC(e.length, String) : [],
                u = a.length;
            for (var f in e)(t || BC.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || WC(f, u))) && a.push(f);
            return a
        }
        dg.exports = jC
    });
    var Hn = c((f5, pg) => {
        var zC = Object.prototype;

        function KC(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || zC;
            return e === r
        }
        pg.exports = KC
    });
    var vg = c((d5, gg) => {
        var YC = Co(),
            $C = YC(Object.keys, Object);
        gg.exports = $C
    });
    var Wn = c((p5, hg) => {
        var QC = Hn(),
            ZC = vg(),
            JC = Object.prototype,
            eN = JC.hasOwnProperty;

        function tN(e) {
            if (!QC(e)) return ZC(e);
            var t = [];
            for (var r in Object(e)) eN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        hg.exports = tN
    });
    var Pt = c((g5, yg) => {
        var rN = Yo(),
            nN = Un();

        function iN(e) {
            return e != null && nN(e.length) && !rN(e)
        }
        yg.exports = iN
    });
    var Ur = c((v5, Eg) => {
        var oN = oa(),
            aN = Wn(),
            sN = Pt();

        function uN(e) {
            return sN(e) ? oN(e) : aN(e)
        }
        Eg.exports = uN
    });
    var _g = c((h5, mg) => {
        var cN = ta(),
            lN = na(),
            fN = Ur();

        function dN(e) {
            return cN(e, fN, lN)
        }
        mg.exports = dN
    });
    var Ig = c((y5, Tg) => {
        var bg = _g(),
            pN = 1,
            gN = Object.prototype,
            vN = gN.hasOwnProperty;

        function hN(e, t, r, n, i, o) {
            var s = r & pN,
                a = bg(e),
                u = a.length,
                f = bg(t),
                d = f.length;
            if (u != d && !s) return !1;
            for (var p = u; p--;) {
                var y = a[p];
                if (!(s ? y in t : vN.call(t, y))) return !1
            }
            var h = o.get(e),
                m = o.get(t);
            if (h && m) return h == t && m == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var P = s; ++p < u;) {
                y = a[p];
                var O = e[y],
                    S = t[y];
                if (n) var w = s ? n(S, O, y, t, e, o) : n(O, S, y, e, t, o);
                if (!(w === void 0 ? O === S || i(O, S, r, n, o) : w)) {
                    _ = !1;
                    break
                }
                P || (P = y == "constructor")
            }
            if (_ && !P) {
                var R = e.constructor,
                    L = t.constructor;
                R != L && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof L == "function" && L instanceof L) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        Tg.exports = hN
    });
    var wg = c((E5, Og) => {
        var yN = It(),
            EN = $e(),
            mN = yN(EN, "DataView");
        Og.exports = mN
    });
    var xg = c((m5, Ag) => {
        var _N = It(),
            bN = $e(),
            TN = _N(bN, "Promise");
        Ag.exports = TN
    });
    var Rg = c((_5, Sg) => {
        var IN = It(),
            ON = $e(),
            wN = IN(ON, "Set");
        Sg.exports = wN
    });
    var aa = c((b5, Cg) => {
        var AN = It(),
            xN = $e(),
            SN = AN(xN, "WeakMap");
        Cg.exports = SN
    });
    var kn = c((T5, Fg) => {
        var sa = wg(),
            ua = Pn(),
            ca = xg(),
            la = Rg(),
            fa = aa(),
            Dg = Tt(),
            rr = Qo(),
            Ng = "[object Map]",
            RN = "[object Object]",
            Lg = "[object Promise]",
            Pg = "[object Set]",
            Mg = "[object WeakMap]",
            qg = "[object DataView]",
            CN = rr(sa),
            NN = rr(ua),
            LN = rr(ca),
            PN = rr(la),
            MN = rr(fa),
            Mt = Dg;
        (sa && Mt(new sa(new ArrayBuffer(1))) != qg || ua && Mt(new ua) != Ng || ca && Mt(ca.resolve()) != Lg || la && Mt(new la) != Pg || fa && Mt(new fa) != Mg) && (Mt = function(e) {
            var t = Dg(e),
                r = t == RN ? e.constructor : void 0,
                n = r ? rr(r) : "";
            if (n) switch (n) {
                case CN:
                    return qg;
                case NN:
                    return Ng;
                case LN:
                    return Lg;
                case PN:
                    return Pg;
                case MN:
                    return Mg
            }
            return t
        });
        Fg.exports = Mt
    });
    var Bg = c((I5, Xg) => {
        var da = Zo(),
            qN = Jo(),
            DN = Mp(),
            FN = Ig(),
            Gg = kn(),
            Ug = Ae(),
            Vg = Fn(),
            GN = Vn(),
            UN = 1,
            Hg = "[object Arguments]",
            Wg = "[object Array]",
            Xn = "[object Object]",
            VN = Object.prototype,
            kg = VN.hasOwnProperty;

        function HN(e, t, r, n, i, o) {
            var s = Ug(e),
                a = Ug(t),
                u = s ? Wg : Gg(e),
                f = a ? Wg : Gg(t);
            u = u == Hg ? Xn : u, f = f == Hg ? Xn : f;
            var d = u == Xn,
                p = f == Xn,
                y = u == f;
            if (y && Vg(e)) {
                if (!Vg(t)) return !1;
                s = !0, d = !1
            }
            if (y && !d) return o || (o = new da), s || GN(e) ? qN(e, t, r, n, i, o) : DN(e, t, u, r, n, i, o);
            if (!(r & UN)) {
                var h = d && kg.call(e, "__wrapped__"),
                    m = p && kg.call(t, "__wrapped__");
                if (h || m) {
                    var _ = h ? e.value() : e,
                        P = m ? t.value() : t;
                    return o || (o = new da), i(_, P, r, n, o)
                }
            }
            return y ? (o || (o = new da), FN(e, t, r, n, i, o)) : !1
        }
        Xg.exports = HN
    });
    var pa = c((O5, Kg) => {
        var WN = Bg(),
            jg = pt();

        function zg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !jg(e) && !jg(t) ? e !== e && t !== t : WN(e, t, r, n, zg, i)
        }
        Kg.exports = zg
    });
    var $g = c((w5, Yg) => {
        var kN = Zo(),
            XN = pa(),
            BN = 1,
            jN = 2;

        function zN(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    f = e[u],
                    d = a[1];
                if (s && a[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var p = new kN;
                    if (n) var y = n(f, d, u, e, t, p);
                    if (!(y === void 0 ? XN(d, f, BN | jN, n, p) : y)) return !1
                }
            }
            return !0
        }
        Yg.exports = zN
    });
    var ga = c((A5, Qg) => {
        var KN = st();

        function YN(e) {
            return e === e && !KN(e)
        }
        Qg.exports = YN
    });
    var Jg = c((x5, Zg) => {
        var $N = ga(),
            QN = Ur();

        function ZN(e) {
            for (var t = QN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, $N(i)]
            }
            return t
        }
        Zg.exports = ZN
    });
    var va = c((S5, ev) => {
        function JN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        ev.exports = JN
    });
    var rv = c((R5, tv) => {
        var eL = $g(),
            tL = Jg(),
            rL = va();

        function nL(e) {
            var t = tL(e);
            return t.length == 1 && t[0][2] ? rL(t[0][0], t[0][1]) : function(r) {
                return r === e || eL(r, e, t)
            }
        }
        tv.exports = nL
    });
    var Vr = c((C5, nv) => {
        var iL = Tt(),
            oL = pt(),
            aL = "[object Symbol]";

        function sL(e) {
            return typeof e == "symbol" || oL(e) && iL(e) == aL
        }
        nv.exports = sL
    });
    var Bn = c((N5, iv) => {
        var uL = Ae(),
            cL = Vr(),
            lL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            fL = /^\w*$/;

        function dL(e, t) {
            if (uL(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || cL(e) ? !0 : fL.test(e) || !lL.test(e) || t != null && e in Object(t)
        }
        iv.exports = dL
    });
    var sv = c((L5, av) => {
        var ov = Mn(),
            pL = "Expected a function";

        function ha(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(pL);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(ha.Cache || ov), r
        }
        ha.Cache = ov;
        av.exports = ha
    });
    var cv = c((P5, uv) => {
        var gL = sv(),
            vL = 500;

        function hL(e) {
            var t = gL(e, function(n) {
                    return r.size === vL && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        uv.exports = hL
    });
    var fv = c((M5, lv) => {
        var yL = cv(),
            EL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            mL = /\\(\\)?/g,
            _L = yL(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(EL, function(r, n, i, o) {
                    t.push(i ? o.replace(mL, "$1") : n || r)
                }), t
            });
        lv.exports = _L
    });
    var ya = c((q5, dv) => {
        function bL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        dv.exports = bL
    });
    var Ev = c((D5, yv) => {
        var pv = jt(),
            TL = ya(),
            IL = Ae(),
            OL = Vr(),
            wL = 1 / 0,
            gv = pv ? pv.prototype : void 0,
            vv = gv ? gv.toString : void 0;

        function hv(e) {
            if (typeof e == "string") return e;
            if (IL(e)) return TL(e, hv) + "";
            if (OL(e)) return vv ? vv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -wL ? "-0" : t
        }
        yv.exports = hv
    });
    var _v = c((F5, mv) => {
        var AL = Ev();

        function xL(e) {
            return e == null ? "" : AL(e)
        }
        mv.exports = xL
    });
    var Hr = c((G5, bv) => {
        var SL = Ae(),
            RL = Bn(),
            CL = fv(),
            NL = _v();

        function LL(e, t) {
            return SL(e) ? e : RL(e, t) ? [e] : CL(NL(e))
        }
        bv.exports = LL
    });
    var nr = c((U5, Tv) => {
        var PL = Vr(),
            ML = 1 / 0;

        function qL(e) {
            if (typeof e == "string" || PL(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -ML ? "-0" : t
        }
        Tv.exports = qL
    });
    var jn = c((V5, Iv) => {
        var DL = Hr(),
            FL = nr();

        function GL(e, t) {
            t = DL(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[FL(t[r++])];
            return r && r == n ? e : void 0
        }
        Iv.exports = GL
    });
    var zn = c((H5, Ov) => {
        var UL = jn();

        function VL(e, t, r) {
            var n = e == null ? void 0 : UL(e, t);
            return n === void 0 ? r : n
        }
        Ov.exports = VL
    });
    var Av = c((W5, wv) => {
        function HL(e, t) {
            return e != null && t in Object(e)
        }
        wv.exports = HL
    });
    var Sv = c((k5, xv) => {
        var WL = Hr(),
            kL = qr(),
            XL = Ae(),
            BL = Gn(),
            jL = Un(),
            zL = nr();

        function KL(e, t, r) {
            t = WL(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = zL(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && jL(i) && BL(s, i) && (XL(e) || kL(e)))
        }
        xv.exports = KL
    });
    var Cv = c((X5, Rv) => {
        var YL = Av(),
            $L = Sv();

        function QL(e, t) {
            return e != null && $L(e, t, YL)
        }
        Rv.exports = QL
    });
    var Lv = c((B5, Nv) => {
        var ZL = pa(),
            JL = zn(),
            eP = Cv(),
            tP = Bn(),
            rP = ga(),
            nP = va(),
            iP = nr(),
            oP = 1,
            aP = 2;

        function sP(e, t) {
            return tP(e) && rP(t) ? nP(iP(e), t) : function(r) {
                var n = JL(r, e);
                return n === void 0 && n === t ? eP(r, e) : ZL(t, n, oP | aP)
            }
        }
        Nv.exports = sP
    });
    var Kn = c((j5, Pv) => {
        function uP(e) {
            return e
        }
        Pv.exports = uP
    });
    var Ea = c((z5, Mv) => {
        function cP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Mv.exports = cP
    });
    var Dv = c((K5, qv) => {
        var lP = jn();

        function fP(e) {
            return function(t) {
                return lP(t, e)
            }
        }
        qv.exports = fP
    });
    var Gv = c((Y5, Fv) => {
        var dP = Ea(),
            pP = Dv(),
            gP = Bn(),
            vP = nr();

        function hP(e) {
            return gP(e) ? dP(vP(e)) : pP(e)
        }
        Fv.exports = hP
    });
    var Ot = c(($5, Uv) => {
        var yP = rv(),
            EP = Lv(),
            mP = Kn(),
            _P = Ae(),
            bP = Gv();

        function TP(e) {
            return typeof e == "function" ? e : e == null ? mP : typeof e == "object" ? _P(e) ? EP(e[0], e[1]) : yP(e) : bP(e)
        }
        Uv.exports = TP
    });
    var ma = c((Q5, Vv) => {
        var IP = Ot(),
            OP = Pt(),
            wP = Ur();

        function AP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!OP(t)) {
                    var o = IP(r, 3);
                    t = wP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Vv.exports = AP
    });
    var _a = c((Z5, Hv) => {
        function xP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Hv.exports = xP
    });
    var kv = c((J5, Wv) => {
        var SP = /\s/;

        function RP(e) {
            for (var t = e.length; t-- && SP.test(e.charAt(t)););
            return t
        }
        Wv.exports = RP
    });
    var Bv = c((eB, Xv) => {
        var CP = kv(),
            NP = /^\s+/;

        function LP(e) {
            return e && e.slice(0, CP(e) + 1).replace(NP, "")
        }
        Xv.exports = LP
    });
    var Yn = c((tB, Kv) => {
        var PP = Bv(),
            jv = st(),
            MP = Vr(),
            zv = 0 / 0,
            qP = /^[-+]0x[0-9a-f]+$/i,
            DP = /^0b[01]+$/i,
            FP = /^0o[0-7]+$/i,
            GP = parseInt;

        function UP(e) {
            if (typeof e == "number") return e;
            if (MP(e)) return zv;
            if (jv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = jv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = PP(e);
            var r = DP.test(e);
            return r || FP.test(e) ? GP(e.slice(2), r ? 2 : 8) : qP.test(e) ? zv : +e
        }
        Kv.exports = UP
    });
    var Qv = c((rB, $v) => {
        var VP = Yn(),
            Yv = 1 / 0,
            HP = 17976931348623157e292;

        function WP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = VP(e), e === Yv || e === -Yv) {
                var t = e < 0 ? -1 : 1;
                return t * HP
            }
            return e === e ? e : 0
        }
        $v.exports = WP
    });
    var ba = c((nB, Zv) => {
        var kP = Qv();

        function XP(e) {
            var t = kP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Zv.exports = XP
    });
    var eh = c((iB, Jv) => {
        var BP = _a(),
            jP = Ot(),
            zP = ba(),
            KP = Math.max;

        function YP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : zP(r);
            return i < 0 && (i = KP(n + i, 0)), BP(e, jP(t, 3), i)
        }
        Jv.exports = YP
    });
    var Ta = c((oB, th) => {
        var $P = ma(),
            QP = eh(),
            ZP = $P(QP);
        th.exports = ZP
    });
    var ih = {};
    Fe(ih, {
        ELEMENT_MATCHES: () => JP,
        FLEX_PREFIXED: () => Ia,
        IS_BROWSER_ENV: () => Ze,
        TRANSFORM_PREFIXED: () => wt,
        TRANSFORM_STYLE_PREFIXED: () => Qn,
        withBrowser: () => $n
    });
    var nh, Ze, $n, JP, Ia, wt, rh, Qn, Zn = ye(() => {
        "use strict";
        nh = fe(Ta()), Ze = typeof window < "u", $n = (e, t) => Ze ? e() : t, JP = $n(() => (0, nh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ia = $n(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), wt = $n(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), rh = wt.split("transform")[0], Qn = rh ? rh + "TransformStyle" : "transformStyle"
    });
    var Oa = c((aB, ch) => {
        var eM = 4,
            tM = .001,
            rM = 1e-7,
            nM = 10,
            Wr = 11,
            Jn = 1 / (Wr - 1),
            iM = typeof Float32Array == "function";

        function oh(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function ah(e, t) {
            return 3 * t - 6 * e
        }

        function sh(e) {
            return 3 * e
        }

        function ei(e, t, r) {
            return ((oh(t, r) * e + ah(t, r)) * e + sh(t)) * e
        }

        function uh(e, t, r) {
            return 3 * oh(t, r) * e * e + 2 * ah(t, r) * e + sh(t)
        }

        function oM(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = ei(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > rM && ++a < nM);
            return s
        }

        function aM(e, t, r, n) {
            for (var i = 0; i < eM; ++i) {
                var o = uh(t, r, n);
                if (o === 0) return t;
                var s = ei(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        ch.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = iM ? new Float32Array(Wr) : new Array(Wr);
            if (t !== r || n !== i)
                for (var s = 0; s < Wr; ++s) o[s] = ei(s * Jn, t, n);

            function a(u) {
                for (var f = 0, d = 1, p = Wr - 1; d !== p && o[d] <= u; ++d) f += Jn;
                --d;
                var y = (u - o[d]) / (o[d + 1] - o[d]),
                    h = f + y * Jn,
                    m = uh(h, t, n);
                return m >= tM ? aM(u, h, t, n) : m === 0 ? h : oM(u, f, f + Jn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ei(a(f), r, i)
            }
        }
    });
    var Xr = {};
    Fe(Xr, {
        bounce: () => WM,
        bouncePast: () => kM,
        ease: () => sM,
        easeIn: () => uM,
        easeInOut: () => lM,
        easeOut: () => cM,
        inBack: () => PM,
        inCirc: () => RM,
        inCubic: () => gM,
        inElastic: () => DM,
        inExpo: () => AM,
        inOutBack: () => qM,
        inOutCirc: () => NM,
        inOutCubic: () => hM,
        inOutElastic: () => GM,
        inOutExpo: () => SM,
        inOutQuad: () => pM,
        inOutQuart: () => mM,
        inOutQuint: () => TM,
        inOutSine: () => wM,
        inQuad: () => fM,
        inQuart: () => yM,
        inQuint: () => _M,
        inSine: () => IM,
        outBack: () => MM,
        outBounce: () => LM,
        outCirc: () => CM,
        outCubic: () => vM,
        outElastic: () => FM,
        outExpo: () => xM,
        outQuad: () => dM,
        outQuart: () => EM,
        outQuint: () => bM,
        outSine: () => OM,
        swingFrom: () => VM,
        swingFromTo: () => UM,
        swingTo: () => HM
    });

    function fM(e) {
        return Math.pow(e, 2)
    }

    function dM(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function pM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function gM(e) {
        return Math.pow(e, 3)
    }

    function vM(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function hM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function yM(e) {
        return Math.pow(e, 4)
    }

    function EM(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function mM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function _M(e) {
        return Math.pow(e, 5)
    }

    function bM(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function TM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function IM(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function OM(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function wM(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function AM(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function xM(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function SM(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function RM(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function CM(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function NM(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function LM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function PM(e) {
        let t = gt;
        return e * e * ((t + 1) * e - t)
    }

    function MM(e) {
        let t = gt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function qM(e) {
        let t = gt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function DM(e) {
        let t = gt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function FM(e) {
        let t = gt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function GM(e) {
        let t = gt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function UM(e) {
        let t = gt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function VM(e) {
        let t = gt;
        return e * e * ((t + 1) * e - t)
    }

    function HM(e) {
        let t = gt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function WM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function kM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var kr, gt, sM, uM, cM, lM, wa = ye(() => {
        "use strict";
        kr = fe(Oa()), gt = 1.70158, sM = (0, kr.default)(.25, .1, .25, 1), uM = (0, kr.default)(.42, 0, 1, 1), cM = (0, kr.default)(0, 0, .58, 1), lM = (0, kr.default)(.42, 0, .58, 1)
    });
    var fh = {};
    Fe(fh, {
        applyEasing: () => BM,
        createBezierEasing: () => XM,
        optimizeFloat: () => Br
    });

    function Br(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function XM(e) {
        return (0, lh.default)(...e)
    }

    function BM(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Br(r ? t > 0 ? r(t) : t : t > 0 && e && Xr[e] ? Xr[e](t) : t)
    }
    var lh, Aa = ye(() => {
        "use strict";
        wa();
        lh = fe(Oa())
    });
    var gh = {};
    Fe(gh, {
        createElementState: () => ph,
        ixElements: () => oq,
        mergeActionState: () => xa
    });

    function ph(e, t, r, n, i) {
        let o = r === jM ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, ir.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function xa(e, t, r, n, i) {
        let o = sq(i);
        return (0, ir.mergeIn)(e, [t, iq, r], n, o)
    }

    function sq(e) {
        let {
            config: t
        } = e;
        return aq.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var ir, uB, jM, cB, zM, KM, YM, $M, QM, ZM, JM, eq, tq, rq, nq, dh, iq, oq, aq, vh = ye(() => {
        "use strict";
        ir = fe(Yt());
        Ue();
        ({
            HTML_ELEMENT: uB,
            PLAIN_OBJECT: jM,
            ABSTRACT_NODE: cB,
            CONFIG_X_VALUE: zM,
            CONFIG_Y_VALUE: KM,
            CONFIG_Z_VALUE: YM,
            CONFIG_VALUE: $M,
            CONFIG_X_UNIT: QM,
            CONFIG_Y_UNIT: ZM,
            CONFIG_Z_UNIT: JM,
            CONFIG_UNIT: eq
        } = Ce), {
            IX2_SESSION_STOPPED: tq,
            IX2_INSTANCE_ADDED: rq,
            IX2_ELEMENT_STATE_CHANGED: nq
        } = Oe, dh = {}, iq = "refState", oq = (e = dh, t = {}) => {
            switch (t.type) {
                case tq:
                    return dh;
                case rq:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, ir.getIn)(u, [r, n]) !== n && (u = ph(u, n, s, r, o)),
                        xa(u, r, a, i, o)
                    }
                case nq:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return xa(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        aq = [
            [zM, QM],
            [KM, ZM],
            [YM, JM],
            [$M, eq]
        ]
    });
    var hh = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var uq = e => e.value;
        xe.getPluginConfig = uq;
        var cq = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        xe.getPluginDuration = cq;
        var lq = e => e || {
            value: 0
        };
        xe.getPluginOrigin = lq;
        var fq = e => ({
            value: e.value
        });
        xe.getPluginDestination = fq;
        var dq = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        xe.createPluginInstance = dq;
        var pq = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        xe.renderPlugin = pq;
        var gq = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        xe.clearPlugin = gq
    });
    var Eh = c(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var vq = e => document.querySelector(`[data-w-id="${e}"]`),
            hq = () => window.Webflow.require("spline"),
            yq = (e, t) => e.filter(r => !t.includes(r)),
            Eq = (e, t) => e.value[t];
        Se.getPluginConfig = Eq;
        var mq = () => null;
        Se.getPluginDuration = mq;
        var yh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            _q = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = yq(n, o);
                    return s.length ? s.reduce((u, f) => (u[f] = yh[f], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = yh[s], o), {})
            };
        Se.getPluginOrigin = _q;
        var bq = e => e.value;
        Se.getPluginDestination = bq;
        var Tq = (e, t) => {
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? vq(i) : null
        };
        Se.createPluginInstance = Tq;
        var Iq = (e, t, r) => {
            let n = hq(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: f
                    } = t;
                    f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        Se.renderPlugin = Iq;
        var Oq = () => null;
        Se.clearPlugin = Oq
    });
    var _h = c(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        we.normalizeColor = mh;
        we.renderPlugin = void 0;

        function mh(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let s = o.substring(1);
                s.length === 3 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16)) : s.length === 6 && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let s = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (o.startsWith("rgb")) {
                let s = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (o.startsWith("hsla")) {
                let s = o.match(/hsla\(([^)]+)\)/)[1].split(","),
                    a = parseFloat(s[0]),
                    u = parseFloat(s[1].replace("%", "")) / 100,
                    f = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let d = (1 - Math.abs(2 * f - 1)) * u,
                    p = d * (1 - Math.abs(a / 60 % 2 - 1)),
                    y = f - d / 2,
                    h, m, _;
                a >= 0 && a < 60 ? (h = d, m = p, _ = 0) : a >= 60 && a < 120 ? (h = p, m = d, _ = 0) : a >= 120 && a < 180 ? (h = 0, m = d, _ = p) : a >= 180 && a < 240 ? (h = 0, m = p, _ = d) : a >= 240 && a < 300 ? (h = p, m = 0, _ = d) : (h = d, m = 0, _ = p), t = Math.round((h + y) * 255), r = Math.round((m + y) * 255), n = Math.round((_ + y) * 255)
            } else if (o.startsWith("hsl")) {
                let s = o.match(/hsl\(([^)]+)\)/)[1].split(","),
                    a = parseFloat(s[0]),
                    u = parseFloat(s[1].replace("%", "")) / 100,
                    f = parseFloat(s[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * f - 1)) * u,
                    p = d * (1 - Math.abs(a / 60 % 2 - 1)),
                    y = f - d / 2,
                    h, m, _;
                a >= 0 && a < 60 ? (h = d, m = p, _ = 0) : a >= 60 && a < 120 ? (h = p, m = d, _ = 0) : a >= 120 && a < 180 ? (h = 0, m = d, _ = p) : a >= 180 && a < 240 ? (h = 0, m = p, _ = d) : a >= 240 && a < 300 ? (h = p, m = 0, _ = d) : (h = d, m = 0, _ = p), t = Math.round((h + y) * 255), r = Math.round((m + y) * 255), n = Math.round((_ + y) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var wq = (e, t) => e.value[t];
        we.getPluginConfig = wq;
        var Aq = () => null;
        we.getPluginDuration = Aq;
        var xq = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return mh(i)
        };
        we.getPluginOrigin = xq;
        var Sq = e => e.value;
        we.getPluginDestination = Sq;
        var Rq = () => null;
        we.createPluginInstance = Rq;
        var Cq = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: f,
                    alpha: d
                } = o,
                p;
            s != null && (p = s + i), a != null && f != null && u != null && d != null && (p = `rgba(${a}, ${u}, ${f}, ${d})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        we.renderPlugin = Cq;
        var Nq = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        we.clearPlugin = Nq
    });
    var bh = c(ti => {
        "use strict";
        var Ra = dn().default;
        Object.defineProperty(ti, "__esModule", {
            value: !0
        });
        ti.pluginMethodMap = void 0;
        var Sa = (Ue(), rt(xf)),
            Lq = Ra(hh()),
            Pq = Ra(Eh()),
            Mq = Ra(_h()),
            pB = ti.pluginMethodMap = new Map([
                [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...Lq
                }],
                [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...Pq
                }],
                [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...Mq
                }]
            ])
    });
    var Th = {};
    Fe(Th, {
        clearPlugin: () => qa,
        createPluginInstance: () => Dq,
        getPluginConfig: () => Na,
        getPluginDestination: () => Pa,
        getPluginDuration: () => qq,
        getPluginOrigin: () => La,
        isPluginType: () => qt,
        renderPlugin: () => Ma
    });

    function qt(e) {
        return Ca.pluginMethodMap.has(e)
    }
    var Ca, Dt, Na, La, qq, Pa, Dq, Ma, qa, Da = ye(() => {
        "use strict";
        Zn();
        Ca = fe(bh());
        Dt = e => t => {
            if (!Ze) return () => null;
            let r = Ca.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Na = Dt("getPluginConfig"), La = Dt("getPluginOrigin"), qq = Dt("getPluginDuration"), Pa = Dt("getPluginDestination"), Dq = Dt("createPluginInstance"), Ma = Dt("renderPlugin"), qa = Dt("clearPlugin")
    });
    var Oh = c((hB, Ih) => {
        function Fq(e, t) {
            return e == null || e !== e ? t : e
        }
        Ih.exports = Fq
    });
    var Ah = c((yB, wh) => {
        function Gq(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        wh.exports = Gq
    });
    var Sh = c((EB, xh) => {
        function Uq(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        xh.exports = Uq
    });
    var Ch = c((mB, Rh) => {
        var Vq = Sh(),
            Hq = Vq();
        Rh.exports = Hq
    });
    var Fa = c((_B, Nh) => {
        var Wq = Ch(),
            kq = Ur();

        function Xq(e, t) {
            return e && Wq(e, t, kq)
        }
        Nh.exports = Xq
    });
    var Ph = c((bB, Lh) => {
        var Bq = Pt();

        function jq(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!Bq(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Lh.exports = jq
    });
    var Ga = c((TB, Mh) => {
        var zq = Fa(),
            Kq = Ph(),
            Yq = Kq(zq);
        Mh.exports = Yq
    });
    var Dh = c((IB, qh) => {
        function $q(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        qh.exports = $q
    });
    var Gh = c((OB, Fh) => {
        var Qq = Ah(),
            Zq = Ga(),
            Jq = Ot(),
            e1 = Dh(),
            t1 = Ae();

        function r1(e, t, r) {
            var n = t1(e) ? Qq : e1,
                i = arguments.length < 3;
            return n(e, Jq(t, 4), r, i, Zq)
        }
        Fh.exports = r1
    });
    var Vh = c((wB, Uh) => {
        var n1 = _a(),
            i1 = Ot(),
            o1 = ba(),
            a1 = Math.max,
            s1 = Math.min;

        function u1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = o1(r), i = r < 0 ? a1(n + i, 0) : s1(i, n - 1)), n1(e, i1(t, 3), i, !0)
        }
        Uh.exports = u1
    });
    var Wh = c((AB, Hh) => {
        var c1 = ma(),
            l1 = Vh(),
            f1 = c1(l1);
        Hh.exports = f1
    });

    function kh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function p1(e, t) {
        if (kh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!d1.call(t, r[i]) || !kh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var d1, Ua, Xh = ye(() => {
        "use strict";
        d1 = Object.prototype.hasOwnProperty;
        Ua = p1
    });
    var sy = {};
    Fe(sy, {
        cleanupHTMLElement: () => lD,
        clearAllStyles: () => cD,
        clearObjectCache: () => C1,
        getActionListProgress: () => dD,
        getAffectedElements: () => Xa,
        getComputedStyle: () => G1,
        getDestinationValues: () => B1,
        getElementId: () => M1,
        getInstanceId: () => L1,
        getInstanceOrigin: () => H1,
        getItemConfigByKey: () => X1,
        getMaxDurationItemIndex: () => ay,
        getNamespacedParameterId: () => vD,
        getRenderType: () => ny,
        getStyleProp: () => j1,
        mediaQueriesEqual: () => yD,
        observeStore: () => F1,
        reduceListToGroup: () => pD,
        reifyState: () => q1,
        renderHTMLElement: () => z1,
        shallowEqual: () => Ua,
        shouldAllowMediaQuery: () => hD,
        shouldNamespaceEventParameter: () => gD,
        stringifyTarget: () => ED
    });

    function C1() {
        ri.clear()
    }

    function L1() {
        return "i" + N1++
    }

    function M1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + P1++
    }

    function q1({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, ai.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function F1({
        store: e,
        select: t,
        onChange: r,
        comparator: n = D1
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                s();
                return
            }
            n(f, a) || (a = f, r(a, e))
        }
        return s
    }

    function zh(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function Xa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((q, I) => q.concat(Xa({
            config: {
                target: I
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: d,
            matchSelector: p,
            elementContains: y,
            isSiblingNode: h
        } = i, {
            target: m
        } = e;
        if (!m) return [];
        let {
            id: _,
            objectId: P,
            selector: O,
            selectorGuids: S,
            appliesTo: w,
            useEventTarget: R
        } = zh(m);
        if (P) return [ri.has(P) ? ri.get(P) : ri.set(P, {}).get(P)];
        if (w === Bo.PAGE) {
            let q = s(_);
            return q ? [q] : []
        }
        let N = (t ? .action ? .config ? .affectedElements ? ? {})[_ || O] || {},
            k = !!(N.id || N.selector),
            j, Q, ee, re = t && a(zh(t.target));
        if (k ? (j = N.limitAffectedElements, Q = re, ee = a(N)) : Q = ee = a({
                id: _,
                selector: O,
                selectorGuids: S
            }), t && R) {
            let q = r && (ee || R === !0) ? [r] : u(re);
            if (ee) {
                if (R === x1) return u(ee).filter(I => q.some(M => y(I, M)));
                if (R === Bh) return u(ee).filter(I => q.some(M => y(M, I)));
                if (R === jh) return u(ee).filter(I => q.some(M => h(M, I)))
            }
            return q
        }
        return Q == null || ee == null ? [] : Ze && n ? u(ee).filter(q => n.contains(q)) : j === Bh ? u(Q, ee) : j === A1 ? f(u(Q)).filter(p(ee)) : j === jh ? d(u(Q)).filter(p(ee)) : u(ee)
    }

    function G1({
        element: e,
        actionItem: t
    }) {
        if (!Ze) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case cr:
            case lr:
            case fr:
            case dr:
            case ui:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function H1(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (qt(s)) return La(s)(t[s], n);
        switch (n.actionTypeId) {
            case ar:
            case sr:
            case ur:
            case Yr:
                return t[n.actionTypeId] || Ba[n.actionTypeId];
            case $r:
                return U1(t[n.actionTypeId], n.config.filters);
            case Qr:
                return V1(t[n.actionTypeId], n.config.fontVariations);
            case ey:
                return {
                    value: (0, vt.default)(parseFloat(o(e, ii)), 1)
                };
            case cr:
                {
                    let a = o(e, ut),
                        u = o(e, ct),
                        f, d;
                    return n.config.widthUnit === At ? f = Kh.test(a) ? parseFloat(a) : parseFloat(r.width) : f = (0, vt.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === At ? d = Kh.test(u) ? parseFloat(u) : parseFloat(r.height) : d = (0, vt.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: d
                    }
                }
            case lr:
            case fr:
            case dr:
                return aD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case ui:
                return {
                    value: (0, vt.default)(o(e, oi), r.display)
                };
            case R1:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function B1({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (qt(t.actionTypeId)) return Pa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case ar:
            case sr:
            case ur:
            case Yr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case cr:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: f
                    } = t.config;
                    if (!Ze) return {
                        widthValue: u,
                        heightValue: f
                    };
                    if (s === At) {
                        let d = n(e, ut);
                        i(e, ut, ""), u = o(e, "offsetWidth"), i(e, ut, d)
                    }
                    if (a === At) {
                        let d = n(e, ct);
                        i(e, ct, ""), f = o(e, "offsetHeight"), i(e, ct, d)
                    }
                    return {
                        widthValue: u,
                        heightValue: f
                    }
                }
            case lr:
            case fr:
            case dr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    } = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case $r:
                return t.config.filters.reduce(W1, {});
            case Qr:
                return t.config.fontVariations.reduce(k1, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function ny(e) {
        if (/^TRANSFORM_/.test(e)) return Zh;
        if (/^STYLE_/.test(e)) return Wa;
        if (/^GENERAL_/.test(e)) return Ha;
        if (/^PLUGIN_/.test(e)) return Jh
    }

    function j1(e, t) {
        return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function z1(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case Zh:
                return Z1(e, t, r, i, s);
            case Wa:
                return sD(e, t, r, i, o, s);
            case Ha:
                return uD(e, i, s);
            case Jh:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (qt(f)) return Ma(f)(u, t, i)
                }
        }
    }

    function Z1(e, t, r, n, i) {
        let o = Q1.map(a => {
                let u = Ba[a],
                    {
                        xValue: f = u.xValue,
                        yValue: d = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: y = "",
                        yUnit: h = "",
                        zUnit: m = ""
                    } = t[a] || {};
                switch (a) {
                    case ar:
                        return `${h1}(${f}${y}, ${d}${h}, ${p}${m})`;
                    case sr:
                        return `${y1}(${f}${y}, ${d}${h}, ${p}${m})`;
                    case ur:
                        return `${E1}(${f}${y}) ${m1}(${d}${h}) ${_1}(${p}${m})`;
                    case Yr:
                        return `${b1}(${f}${y}, ${d}${h})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Ft(e, wt, i), s(e, wt, o), tD(n, r) && s(e, Qn, T1)
    }

    function J1(e, t, r, n) {
        let i = (0, ai.default)(t, (s, a, u) => `${s} ${u}(${a}${$1(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Ft(e, jr, n), o(e, jr, i)
    }

    function eD(e, t, r, n) {
        let i = (0, ai.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        Ft(e, zr, n), o(e, zr, i)
    }

    function tD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === ar && n !== void 0 || e === sr && n !== void 0 || e === ur && (t !== void 0 || r !== void 0)
    }

    function oD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function aD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = ka[t],
            o = n(e, i),
            s = nD.test(o) ? o : r[i],
            a = oD(iD, s).split(Kr);
        return {
            rValue: (0, vt.default)(parseInt(a[0], 10), 255),
            gValue: (0, vt.default)(parseInt(a[1], 10), 255),
            bValue: (0, vt.default)(parseInt(a[2], 10), 255),
            aValue: (0, vt.default)(parseFloat(a[3]), 1)
        }
    }

    function sD(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case cr:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: d
                    } = r;f !== void 0 && (a === At && (a = "px"), Ft(e, ut, o), s(e, ut, f + a)),
                    d !== void 0 && (u === At && (u = "px"), Ft(e, ct, o), s(e, ct, d + u));
                    break
                }
            case $r:
                {
                    J1(e, r, n.config, o);
                    break
                }
            case Qr:
                {
                    eD(e, r, n.config, o);
                    break
                }
            case lr:
            case fr:
            case dr:
                {
                    let a = ka[n.actionTypeId],
                        u = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        d = Math.round(r.bValue),
                        p = r.aValue;Ft(e, a, o),
                    s(e, a, p >= 1 ? `rgb(${u},${f},${d})` : `rgba(${u},${f},${d},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;Ft(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function uD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ui:
                {
                    let {
                        value: i
                    } = t.config;i === I1 && Ze ? n(e, oi, Ia) : n(e, oi, i);
                    return
                }
        }
    }

    function Ft(e, t, r) {
        if (!Ze) return;
        let n = ry[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, or);
        if (!s) {
            o(e, or, n);
            return
        }
        let a = s.split(Kr).map(ty);
        a.indexOf(n) === -1 && o(e, or, a.concat(n).join(Kr))
    }

    function iy(e, t, r) {
        if (!Ze) return;
        let n = ry[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, or);
        !s || s.indexOf(n) === -1 || o(e, or, s.split(Kr).map(ty).filter(a => a !== n).join(Kr))
    }

    function cD({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                f = i[u];
            f && Yh({
                actionList: f,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Yh({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Yh({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            $h({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                $h({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function $h({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            qt(o) ? a = u => qa(o)(u, i) : a = oy({
                effect: fD,
                actionTypeId: o,
                elementApi: r
            }), Xa({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function lD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === cr) {
            let {
                config: s
            } = t;
            s.widthUnit === At && n(e, ut, ""), s.heightUnit === At && n(e, ct, "")
        }
        i(e, or) && oy({
            effect: iy,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function fD(e, t, r) {
        let {
            setStyle: n
        } = r;
        iy(e, t, r), n(e, t, ""), t === wt && n(e, Qn, "")
    }

    function ay(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function dD(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {
                actionItems: d
            } = u, p = d[ay(d)], {
                config: y,
                actionTypeId: h
            } = p;
            i.id === p.id && (a = s + o);
            let m = ny(h) === Ha ? 0 : y.duration;
            s += y.delay + m
        }), s > 0 ? Br(a / s) : 0
    }

    function pD({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, si.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: f
            }) => f.some(s))
        }), (0, si.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function gD(e, {
        basedOn: t
    }) {
        return e === Qe.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null) || e === Qe.MOUSE_MOVE && t === at.ELEMENT
    }

    function vD(e, t) {
        return e + S1 + t
    }

    function hD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function yD(e, t) {
        return Ua(e && e.sort(), t && t.sort())
    }

    function ED(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Va + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Va + r + Va + n
    }
    var vt, ai, ni, si, g1, v1, h1, y1, E1, m1, _1, b1, T1, I1, ii, jr, zr, ut, ct, Qh, O1, w1, Bh, A1, jh, x1, oi, or, At, Kr, S1, Va, Zh, Ha, Wa, Jh, ar, sr, ur, Yr, ey, $r, Qr, cr, lr, fr, dr, ui, R1, ty, ka, ry, ri, N1, P1, D1, Kh, U1, V1, W1, k1, X1, Ba, K1, Y1, $1, Q1, rD, nD, iD, oy, uy = ye(() => {
        "use strict";
        vt = fe(Oh()), ai = fe(Gh()), ni = fe(Wh()), si = fe(Yt());
        Ue();
        Xh();
        Aa();
        Da();
        Zn();
        ({
            BACKGROUND: g1,
            TRANSFORM: v1,
            TRANSLATE_3D: h1,
            SCALE_3D: y1,
            ROTATE_X: E1,
            ROTATE_Y: m1,
            ROTATE_Z: _1,
            SKEW: b1,
            PRESERVE_3D: T1,
            FLEX: I1,
            OPACITY: ii,
            FILTER: jr,
            FONT_VARIATION_SETTINGS: zr,
            WIDTH: ut,
            HEIGHT: ct,
            BACKGROUND_COLOR: Qh,
            BORDER_COLOR: O1,
            COLOR: w1,
            CHILDREN: Bh,
            IMMEDIATE_CHILDREN: A1,
            SIBLINGS: jh,
            PARENT: x1,
            DISPLAY: oi,
            WILL_CHANGE: or,
            AUTO: At,
            COMMA_DELIMITER: Kr,
            COLON_DELIMITER: S1,
            BAR_DELIMITER: Va,
            RENDER_TRANSFORM: Zh,
            RENDER_GENERAL: Ha,
            RENDER_STYLE: Wa,
            RENDER_PLUGIN: Jh
        } = Ce), {
            TRANSFORM_MOVE: ar,
            TRANSFORM_SCALE: sr,
            TRANSFORM_ROTATE: ur,
            TRANSFORM_SKEW: Yr,
            STYLE_OPACITY: ey,
            STYLE_FILTER: $r,
            STYLE_FONT_VARIATION: Qr,
            STYLE_SIZE: cr,
            STYLE_BACKGROUND_COLOR: lr,
            STYLE_BORDER: fr,
            STYLE_TEXT_COLOR: dr,
            GENERAL_DISPLAY: ui,
            OBJECT_VALUE: R1
        } = Ge, ty = e => e.trim(), ka = Object.freeze({
            [lr]: Qh,
            [fr]: O1,
            [dr]: w1
        }), ry = Object.freeze({
            [wt]: v1,
            [Qh]: g1,
            [ii]: ii,
            [jr]: jr,
            [ut]: ut,
            [ct]: ct,
            [zr]: zr
        }), ri = new Map;
        N1 = 1;
        P1 = 1;
        D1 = (e, t) => e === t;
        Kh = /px/, U1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = K1[n.type]), r), e || {}), V1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = Y1[n.type] || n.defaultValue || 0), r), e || {});
        W1 = (e, t) => (t && (e[t.type] = t.value || 0), e), k1 = (e, t) => (t && (e[t.type] = t.value || 0), e), X1 = (e, t, r) => {
            if (qt(e)) return Na(e)(r, t);
            switch (e) {
                case $r:
                    {
                        let n = (0, ni.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Qr:
                    {
                        let n = (0, ni.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ba = {
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [sr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ur]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Yr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, K1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), Y1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), $1 = (e, t) => {
            let r = (0, ni.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, Q1 = Object.keys(Ba);
        rD = "\\(([^)]+)\\)", nD = /^rgb/, iD = RegExp(`rgba?${rD}`);
        oy = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case ar:
                case sr:
                case ur:
                case Yr:
                    e(n, wt, r);
                    break;
                case $r:
                    e(n, jr, r);
                    break;
                case Qr:
                    e(n, zr, r);
                    break;
                case ey:
                    e(n, ii, r);
                    break;
                case cr:
                    e(n, ut, r), e(n, ct, r);
                    break;
                case lr:
                case fr:
                case dr:
                    e(n, ka[t], r);
                    break;
                case ui:
                    e(n, oi, r);
                    break
            }
        }
    });
    var Gt = c(Me => {
        "use strict";
        var pr = dn().default;
        Object.defineProperty(Me, "__esModule", {
            value: !0
        });
        Me.IX2VanillaUtils = Me.IX2VanillaPlugins = Me.IX2ElementsReducer = Me.IX2Easings = Me.IX2EasingUtils = Me.IX2BrowserSupport = void 0;
        var mD = pr((Zn(), rt(ih)));
        Me.IX2BrowserSupport = mD;
        var _D = pr((wa(), rt(Xr)));
        Me.IX2Easings = _D;
        var bD = pr((Aa(), rt(fh)));
        Me.IX2EasingUtils = bD;
        var TD = pr((vh(), rt(gh)));
        Me.IX2ElementsReducer = TD;
        var ID = pr((Da(), rt(Th)));
        Me.IX2VanillaPlugins = ID;
        var OD = pr((uy(), rt(sy)));
        Me.IX2VanillaUtils = OD
    });
    var li, ht, wD, AD, xD, SD, RD, CD, ci, cy, ND, LD, ja, PD, MD, qD, DD, ly, fy = ye(() => {
        "use strict";
        Ue();
        li = fe(Gt()), ht = fe(Yt()), {
            IX2_RAW_DATA_IMPORTED: wD,
            IX2_SESSION_STOPPED: AD,
            IX2_INSTANCE_ADDED: xD,
            IX2_INSTANCE_STARTED: SD,
            IX2_INSTANCE_REMOVED: RD,
            IX2_ANIMATION_FRAME_CHANGED: CD
        } = Oe, {
            optimizeFloat: ci,
            applyEasing: cy,
            createBezierEasing: ND
        } = li.IX2EasingUtils, {
            RENDER_GENERAL: LD
        } = Ce, {
            getItemConfigByKey: ja,
            getRenderType: PD,
            getStyleProp: MD
        } = li.IX2VanillaUtils, qD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: d,
                skipToValue: p
            } = e, {
                parameters: y
            } = t.payload, h = Math.max(1 - s, .01), m = y[n];
            m == null && (h = 1, m = a);
            let _ = Math.max(m, 0) || 0,
                P = ci(_ - r),
                O = d ? p : ci(r + P * h),
                S = O * 100;
            if (O === r && e.current) return e;
            let w, R, L, N;
            for (let j = 0, {
                    length: Q
                } = i; j < Q; j++) {
                let {
                    keyframe: ee,
                    actionItems: re
                } = i[j];
                if (j === 0 && (w = re[0]), S >= ee) {
                    w = re[0];
                    let q = i[j + 1],
                        I = q && S !== ee;
                    R = I ? q.actionItems[0] : null, I && (L = ee / 100, N = (q.keyframe - ee) / 100)
                }
            }
            let k = {};
            if (w && !R)
                for (let j = 0, {
                        length: Q
                    } = o; j < Q; j++) {
                    let ee = o[j];
                    k[ee] = ja(u, ee, w.config)
                } else if (w && R && L !== void 0 && N !== void 0) {
                    let j = (O - L) / N,
                        Q = w.config.easing,
                        ee = cy(Q, j, f);
                    for (let re = 0, {
                            length: q
                        } = o; re < q; re++) {
                        let I = o[re],
                            M = ja(u, I, w.config),
                            ne = (ja(u, I, R.config) - M) * ee + M;
                        k[I] = ne
                    }
                }
            return (0, ht.merge)(e, {
                position: O,
                current: k
            })
        }, DD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: f,
                destinationKeys: d,
                pluginDuration: p,
                instanceDelay: y,
                customEasingFn: h,
                skipMotion: m
            } = e, _ = u.config.easing, {
                duration: P,
                delay: O
            } = u.config;
            p != null && (P = p), O = y ? ? O, s === LD ? P = 0 : (o || m) && (P = O = 0);
            let {
                now: S
            } = t.payload;
            if (r && n) {
                let w = S - (i + O);
                if (a) {
                    let j = S - i,
                        Q = P + O,
                        ee = ci(Math.min(Math.max(0, j / Q), 1));
                    e = (0, ht.set)(e, "verboseTimeElapsed", Q * ee)
                }
                if (w < 0) return e;
                let R = ci(Math.min(Math.max(0, w / P), 1)),
                    L = cy(_, R, h),
                    N = {},
                    k = null;
                return d.length && (k = d.reduce((j, Q) => {
                    let ee = f[Q],
                        re = parseFloat(n[Q]) || 0,
                        I = (parseFloat(ee) - re) * L + re;
                    return j[Q] = I, j
                }, {})), N.current = k, N.position = R, R === 1 && (N.active = !1, N.complete = !0), (0, ht.merge)(e, N)
            }
            return e
        }, ly = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case wD:
                    return t.payload.ixInstances || Object.freeze({});
                case AD:
                    return Object.freeze({});
                case xD:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: d,
                            origin: p,
                            destination: y,
                            immediate: h,
                            verbose: m,
                            continuous: _,
                            parameterId: P,
                            actionGroups: O,
                            smoothing: S,
                            restingValue: w,
                            pluginInstance: R,
                            pluginDuration: L,
                            instanceDelay: N,
                            skipMotion: k,
                            skipToValue: j
                        } = t.payload,
                        {
                            actionTypeId: Q
                        } = i,
                        ee = PD(Q),
                        re = MD(ee, Q),
                        q = Object.keys(y).filter(M => y[M] != null && typeof y[M] != "string"),
                        {
                            easing: I
                        } = i.config;
                        return (0, ht.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: y,
                            destinationKeys: q,
                            immediate: h,
                            verbose: m,
                            current: null,
                            actionItem: i,
                            actionTypeId: Q,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: f,
                            renderType: ee,
                            isCarrier: d,
                            styleProp: re,
                            continuous: _,
                            parameterId: P,
                            actionGroups: O,
                            smoothing: S,
                            restingValue: w,
                            pluginInstance: R,
                            pluginDuration: L,
                            instanceDelay: N,
                            skipMotion: k,
                            skipToValue: j,
                            customEasingFn: Array.isArray(I) && I.length === 4 ? ND(I) : void 0
                        })
                    }
                case SD:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, ht.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case RD:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case CD:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? qD : DD;
                            r = (0, ht.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var FD, GD, UD, dy, py = ye(() => {
        "use strict";
        Ue();
        ({
            IX2_RAW_DATA_IMPORTED: FD,
            IX2_SESSION_STOPPED: GD,
            IX2_PARAMETER_CHANGED: UD
        } = Oe), dy = (e = {}, t) => {
            switch (t.type) {
                case FD:
                    return t.payload.ixParameters || {};
                case GD:
                    return {};
                case UD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var hy = {};
    Fe(hy, {
        default: () => HD
    });
    var gy, vy, VD, HD, yy = ye(() => {
        "use strict";
        gy = fe(Xo());
        Rf();
        $f();
        Jf();
        vy = fe(Gt());
        fy();
        py();
        ({
            ixElements: VD
        } = vy.IX2ElementsReducer), HD = (0, gy.combineReducers)({
            ixData: Sf,
            ixRequest: Yf,
            ixSession: Zf,
            ixElements: VD,
            ixInstances: ly,
            ixParameters: dy
        })
    });
    var my = c((kB, Ey) => {
        var WD = Tt(),
            kD = Ae(),
            XD = pt(),
            BD = "[object String]";

        function jD(e) {
            return typeof e == "string" || !kD(e) && XD(e) && WD(e) == BD
        }
        Ey.exports = jD
    });
    var by = c((XB, _y) => {
        var zD = Ea(),
            KD = zD("length");
        _y.exports = KD
    });
    var Iy = c((BB, Ty) => {
        var YD = "\\ud800-\\udfff",
            $D = "\\u0300-\\u036f",
            QD = "\\ufe20-\\ufe2f",
            ZD = "\\u20d0-\\u20ff",
            JD = $D + QD + ZD,
            eF = "\\ufe0e\\ufe0f",
            tF = "\\u200d",
            rF = RegExp("[" + tF + YD + JD + eF + "]");

        function nF(e) {
            return rF.test(e)
        }
        Ty.exports = nF
    });
    var Ly = c((jB, Ny) => {
        var wy = "\\ud800-\\udfff",
            iF = "\\u0300-\\u036f",
            oF = "\\ufe20-\\ufe2f",
            aF = "\\u20d0-\\u20ff",
            sF = iF + oF + aF,
            uF = "\\ufe0e\\ufe0f",
            cF = "[" + wy + "]",
            za = "[" + sF + "]",
            Ka = "\\ud83c[\\udffb-\\udfff]",
            lF = "(?:" + za + "|" + Ka + ")",
            Ay = "[^" + wy + "]",
            xy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Sy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            fF = "\\u200d",
            Ry = lF + "?",
            Cy = "[" + uF + "]?",
            dF = "(?:" + fF + "(?:" + [Ay, xy, Sy].join("|") + ")" + Cy + Ry + ")*",
            pF = Cy + Ry + dF,
            gF = "(?:" + [Ay + za + "?", za, xy, Sy, cF].join("|") + ")",
            Oy = RegExp(Ka + "(?=" + Ka + ")|" + gF + pF, "g");

        function vF(e) {
            for (var t = Oy.lastIndex = 0; Oy.test(e);) ++t;
            return t
        }
        Ny.exports = vF
    });
    var My = c((zB, Py) => {
        var hF = by(),
            yF = Iy(),
            EF = Ly();

        function mF(e) {
            return yF(e) ? EF(e) : hF(e)
        }
        Py.exports = mF
    });
    var Dy = c((KB, qy) => {
        var _F = Wn(),
            bF = kn(),
            TF = Pt(),
            IF = my(),
            OF = My(),
            wF = "[object Map]",
            AF = "[object Set]";

        function xF(e) {
            if (e == null) return 0;
            if (TF(e)) return IF(e) ? OF(e) : e.length;
            var t = bF(e);
            return t == wF || t == AF ? e.size : _F(e).length
        }
        qy.exports = xF
    });
    var Gy = c((YB, Fy) => {
        var SF = "Expected a function";

        function RF(e) {
            if (typeof e != "function") throw new TypeError(SF);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Fy.exports = RF
    });
    var Ya = c(($B, Uy) => {
        var CF = It(),
            NF = function() {
                try {
                    var e = CF(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Uy.exports = NF
    });
    var $a = c((QB, Hy) => {
        var Vy = Ya();

        function LF(e, t, r) {
            t == "__proto__" && Vy ? Vy(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Hy.exports = LF
    });
    var ky = c((ZB, Wy) => {
        var PF = $a(),
            MF = Ln(),
            qF = Object.prototype,
            DF = qF.hasOwnProperty;

        function FF(e, t, r) {
            var n = e[t];
            (!(DF.call(e, t) && MF(n, r)) || r === void 0 && !(t in e)) && PF(e, t, r)
        }
        Wy.exports = FF
    });
    var jy = c((JB, By) => {
        var GF = ky(),
            UF = Hr(),
            VF = Gn(),
            Xy = st(),
            HF = nr();

        function WF(e, t, r, n) {
            if (!Xy(e)) return e;
            t = UF(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = HF(t[i]),
                    f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var d = a[u];
                    f = n ? n(d, u, a) : void 0, f === void 0 && (f = Xy(d) ? d : VF(t[i + 1]) ? [] : {})
                }
                GF(a, u, f), a = a[u]
            }
            return e
        }
        By.exports = WF
    });
    var Ky = c((ej, zy) => {
        var kF = jn(),
            XF = jy(),
            BF = Hr();

        function jF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = kF(e, s);
                r(a, s) && XF(o, BF(s, e), a)
            }
            return o
        }
        zy.exports = jF
    });
    var $y = c((tj, Yy) => {
        var zF = Dn(),
            KF = No(),
            YF = na(),
            $F = ra(),
            QF = Object.getOwnPropertySymbols,
            ZF = QF ? function(e) {
                for (var t = []; e;) zF(t, YF(e)), e = KF(e);
                return t
            } : $F;
        Yy.exports = ZF
    });
    var Zy = c((rj, Qy) => {
        function JF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Qy.exports = JF
    });
    var eE = c((nj, Jy) => {
        var e2 = st(),
            t2 = Hn(),
            r2 = Zy(),
            n2 = Object.prototype,
            i2 = n2.hasOwnProperty;

        function o2(e) {
            if (!e2(e)) return r2(e);
            var t = t2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !i2.call(e, n)) || r.push(n);
            return r
        }
        Jy.exports = o2
    });
    var rE = c((ij, tE) => {
        var a2 = oa(),
            s2 = eE(),
            u2 = Pt();

        function c2(e) {
            return u2(e) ? a2(e, !0) : s2(e)
        }
        tE.exports = c2
    });
    var iE = c((oj, nE) => {
        var l2 = ta(),
            f2 = $y(),
            d2 = rE();

        function p2(e) {
            return l2(e, d2, f2)
        }
        nE.exports = p2
    });
    var aE = c((aj, oE) => {
        var g2 = ya(),
            v2 = Ot(),
            h2 = Ky(),
            y2 = iE();

        function E2(e, t) {
            if (e == null) return {};
            var r = g2(y2(e), function(n) {
                return [n]
            });
            return t = v2(t), h2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        oE.exports = E2
    });
    var uE = c((sj, sE) => {
        var m2 = Ot(),
            _2 = Gy(),
            b2 = aE();

        function T2(e, t) {
            return b2(e, _2(m2(t)))
        }
        sE.exports = T2
    });
    var lE = c((uj, cE) => {
        var I2 = Wn(),
            O2 = kn(),
            w2 = qr(),
            A2 = Ae(),
            x2 = Pt(),
            S2 = Fn(),
            R2 = Hn(),
            C2 = Vn(),
            N2 = "[object Map]",
            L2 = "[object Set]",
            P2 = Object.prototype,
            M2 = P2.hasOwnProperty;

        function q2(e) {
            if (e == null) return !0;
            if (x2(e) && (A2(e) || typeof e == "string" || typeof e.splice == "function" || S2(e) || C2(e) || w2(e))) return !e.length;
            var t = O2(e);
            if (t == N2 || t == L2) return !e.size;
            if (R2(e)) return !I2(e).length;
            for (var r in e)
                if (M2.call(e, r)) return !1;
            return !0
        }
        cE.exports = q2
    });
    var dE = c((cj, fE) => {
        var D2 = $a(),
            F2 = Fa(),
            G2 = Ot();

        function U2(e, t) {
            var r = {};
            return t = G2(t, 3), F2(e, function(n, i, o) {
                D2(r, i, t(n, i, o))
            }), r
        }
        fE.exports = U2
    });
    var gE = c((lj, pE) => {
        function V2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        pE.exports = V2
    });
    var hE = c((fj, vE) => {
        var H2 = Kn();

        function W2(e) {
            return typeof e == "function" ? e : H2
        }
        vE.exports = W2
    });
    var EE = c((dj, yE) => {
        var k2 = gE(),
            X2 = Ga(),
            B2 = hE(),
            j2 = Ae();

        function z2(e, t) {
            var r = j2(e) ? k2 : X2;
            return r(e, B2(t))
        }
        yE.exports = z2
    });
    var _E = c((pj, mE) => {
        var K2 = $e(),
            Y2 = function() {
                return K2.Date.now()
            };
        mE.exports = Y2
    });
    var IE = c((gj, TE) => {
        var $2 = st(),
            Qa = _E(),
            bE = Yn(),
            Q2 = "Expected a function",
            Z2 = Math.max,
            J2 = Math.min;

        function eG(e, t, r) {
            var n, i, o, s, a, u, f = 0,
                d = !1,
                p = !1,
                y = !0;
            if (typeof e != "function") throw new TypeError(Q2);
            t = bE(t) || 0, $2(r) && (d = !!r.leading, p = "maxWait" in r, o = p ? Z2(bE(r.maxWait) || 0, t) : o, y = "trailing" in r ? !!r.trailing : y);

            function h(N) {
                var k = n,
                    j = i;
                return n = i = void 0, f = N, s = e.apply(j, k), s
            }

            function m(N) {
                return f = N, a = setTimeout(O, t), d ? h(N) : s
            }

            function _(N) {
                var k = N - u,
                    j = N - f,
                    Q = t - k;
                return p ? J2(Q, o - j) : Q
            }

            function P(N) {
                var k = N - u,
                    j = N - f;
                return u === void 0 || k >= t || k < 0 || p && j >= o
            }

            function O() {
                var N = Qa();
                if (P(N)) return S(N);
                a = setTimeout(O, _(N))
            }

            function S(N) {
                return a = void 0, y && n ? h(N) : (n = i = void 0, s)
            }

            function w() {
                a !== void 0 && clearTimeout(a), f = 0, n = u = i = a = void 0
            }

            function R() {
                return a === void 0 ? s : S(Qa())
            }

            function L() {
                var N = Qa(),
                    k = P(N);
                if (n = arguments, i = this, u = N, k) {
                    if (a === void 0) return m(u);
                    if (p) return clearTimeout(a), a = setTimeout(O, t), h(u)
                }
                return a === void 0 && (a = setTimeout(O, t)), s
            }
            return L.cancel = w, L.flush = R, L
        }
        TE.exports = eG
    });
    var wE = c((vj, OE) => {
        var tG = IE(),
            rG = st(),
            nG = "Expected a function";

        function iG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(nG);
            return rG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), tG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        OE.exports = iG
    });
    var xE = {};
    Fe(xE, {
        actionListPlaybackChanged: () => vr,
        animationFrameChanged: () => di,
        clearRequested: () => RG,
        elementStateChanged: () => os,
        eventListenerAdded: () => fi,
        eventStateChanged: () => rs,
        instanceAdded: () => ns,
        instanceRemoved: () => is,
        instanceStarted: () => pi,
        mediaQueriesDefined: () => ss,
        parameterChanged: () => gr,
        playbackRequested: () => xG,
        previewRequested: () => AG,
        rawDataImported: () => Za,
        sessionInitialized: () => Ja,
        sessionStarted: () => es,
        sessionStopped: () => ts,
        stopRequested: () => SG,
        testFrameRendered: () => CG,
        viewportWidthChanged: () => as
    });
    var AE, oG, aG, sG, uG, cG, lG, fG, dG, pG, gG, vG, hG, yG, EG, mG, _G, bG, TG, IG, OG, wG, Za, Ja, es, ts, AG, xG, SG, RG, fi, CG, rs, di, gr, ns, pi, is, os, vr, as, ss, gi = ye(() => {
        "use strict";
        Ue();
        AE = fe(Gt()), {
            IX2_RAW_DATA_IMPORTED: oG,
            IX2_SESSION_INITIALIZED: aG,
            IX2_SESSION_STARTED: sG,
            IX2_SESSION_STOPPED: uG,
            IX2_PREVIEW_REQUESTED: cG,
            IX2_PLAYBACK_REQUESTED: lG,
            IX2_STOP_REQUESTED: fG,
            IX2_CLEAR_REQUESTED: dG,
            IX2_EVENT_LISTENER_ADDED: pG,
            IX2_TEST_FRAME_RENDERED: gG,
            IX2_EVENT_STATE_CHANGED: vG,
            IX2_ANIMATION_FRAME_CHANGED: hG,
            IX2_PARAMETER_CHANGED: yG,
            IX2_INSTANCE_ADDED: EG,
            IX2_INSTANCE_STARTED: mG,
            IX2_INSTANCE_REMOVED: _G,
            IX2_ELEMENT_STATE_CHANGED: bG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: TG,
            IX2_VIEWPORT_WIDTH_CHANGED: IG,
            IX2_MEDIA_QUERIES_DEFINED: OG
        } = Oe, {
            reifyState: wG
        } = AE.IX2VanillaUtils, Za = e => ({
            type: oG,
            payload: { ...wG(e)
            }
        }), Ja = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: aG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), es = () => ({
            type: sG
        }), ts = () => ({
            type: uG
        }), AG = ({
            rawData: e,
            defer: t
        }) => ({
            type: cG,
            payload: {
                defer: t,
                rawData: e
            }
        }), xG = ({
            actionTypeId: e = Ge.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: lG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), SG = e => ({
            type: fG,
            payload: {
                actionListId: e
            }
        }), RG = () => ({
            type: dG
        }), fi = (e, t) => ({
            type: pG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), CG = (e = 1) => ({
            type: gG,
            payload: {
                step: e
            }
        }), rs = (e, t) => ({
            type: vG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), di = (e, t) => ({
            type: hG,
            payload: {
                now: e,
                parameters: t
            }
        }), gr = (e, t) => ({
            type: yG,
            payload: {
                key: e,
                value: t
            }
        }), ns = e => ({
            type: EG,
            payload: { ...e
            }
        }), pi = (e, t) => ({
            type: mG,
            payload: {
                instanceId: e,
                time: t
            }
        }), is = e => ({
            type: _G,
            payload: {
                instanceId: e
            }
        }), os = (e, t, r, n) => ({
            type: bG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), vr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: TG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), as = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: IG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ss = () => ({
            type: OG
        })
    });
    var qe = {};
    Fe(qe, {
        elementContains: () => ls,
        getChildElements: () => VG,
        getClosestElement: () => Zr,
        getProperty: () => qG,
        getQuerySelector: () => cs,
        getRefType: () => fs,
        getSiblingElements: () => HG,
        getStyle: () => MG,
        getValidDocument: () => FG,
        isSiblingNode: () => UG,
        matchSelector: () => DG,
        queryDocument: () => GG,
        setStyle: () => PG
    });

    function PG(e, t, r) {
        e.style[t] = r
    }

    function MG(e, t) {
        return e.style[t]
    }

    function qG(e, t) {
        return e[t]
    }

    function DG(e) {
        return t => t[us](e)
    }

    function cs({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(SE) !== -1) {
                let n = e.split(SE),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(CE)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function FG(e) {
        return e == null || e === document.documentElement.getAttribute(CE) ? document : null
    }

    function GG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ls(e, t) {
        return e.contains(t)
    }

    function UG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function VG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function HG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function fs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? NG : LG : null
    }
    var RE, us, SE, NG, LG, CE, Zr, NE = ye(() => {
        "use strict";
        RE = fe(Gt());
        Ue();
        ({
            ELEMENT_MATCHES: us
        } = RE.IX2BrowserSupport), {
            IX2_ID_DELIMITER: SE,
            HTML_ELEMENT: NG,
            PLAIN_OBJECT: LG,
            WF_PAGE: CE
        } = Ce;
        Zr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[us] && r[us](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ds = c((Ej, PE) => {
        var WG = st(),
            LE = Object.create,
            kG = function() {
                function e() {}
                return function(t) {
                    if (!WG(t)) return {};
                    if (LE) return LE(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        PE.exports = kG
    });
    var vi = c((mj, ME) => {
        function XG() {}
        ME.exports = XG
    });
    var yi = c((_j, qE) => {
        var BG = ds(),
            jG = vi();

        function hi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        hi.prototype = BG(jG.prototype);
        hi.prototype.constructor = hi;
        qE.exports = hi
    });
    var UE = c((bj, GE) => {
        var DE = jt(),
            zG = qr(),
            KG = Ae(),
            FE = DE ? DE.isConcatSpreadable : void 0;

        function YG(e) {
            return KG(e) || zG(e) || !!(FE && e && e[FE])
        }
        GE.exports = YG
    });
    var WE = c((Tj, HE) => {
        var $G = Dn(),
            QG = UE();

        function VE(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = QG), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? VE(a, t - 1, r, n, i) : $G(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        HE.exports = VE
    });
    var XE = c((Ij, kE) => {
        var ZG = WE();

        function JG(e) {
            var t = e == null ? 0 : e.length;
            return t ? ZG(e, 1) : []
        }
        kE.exports = JG
    });
    var jE = c((Oj, BE) => {
        function eU(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        BE.exports = eU
    });
    var YE = c((wj, KE) => {
        var tU = jE(),
            zE = Math.max;

        function rU(e, t, r) {
            return t = zE(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = zE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), tU(e, this, a)
                }
        }
        KE.exports = rU
    });
    var QE = c((Aj, $E) => {
        function nU(e) {
            return function() {
                return e
            }
        }
        $E.exports = nU
    });
    var em = c((xj, JE) => {
        var iU = QE(),
            ZE = Ya(),
            oU = Kn(),
            aU = ZE ? function(e, t) {
                return ZE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: iU(t),
                    writable: !0
                })
            } : oU;
        JE.exports = aU
    });
    var rm = c((Sj, tm) => {
        var sU = 800,
            uU = 16,
            cU = Date.now;

        function lU(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = cU(),
                    i = uU - (n - r);
                if (r = n, i > 0) {
                    if (++t >= sU) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        tm.exports = lU
    });
    var im = c((Rj, nm) => {
        var fU = em(),
            dU = rm(),
            pU = dU(fU);
        nm.exports = pU
    });
    var am = c((Cj, om) => {
        var gU = XE(),
            vU = YE(),
            hU = im();

        function yU(e) {
            return hU(vU(e, void 0, gU), e + "")
        }
        om.exports = yU
    });
    var cm = c((Nj, um) => {
        var sm = aa(),
            EU = sm && new sm;
        um.exports = EU
    });
    var fm = c((Lj, lm) => {
        function mU() {}
        lm.exports = mU
    });
    var ps = c((Pj, pm) => {
        var dm = cm(),
            _U = fm(),
            bU = dm ? function(e) {
                return dm.get(e)
            } : _U;
        pm.exports = bU
    });
    var vm = c((Mj, gm) => {
        var TU = {};
        gm.exports = TU
    });
    var gs = c((qj, ym) => {
        var hm = vm(),
            IU = Object.prototype,
            OU = IU.hasOwnProperty;

        function wU(e) {
            for (var t = e.name + "", r = hm[t], n = OU.call(hm, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        ym.exports = wU
    });
    var mi = c((Dj, Em) => {
        var AU = ds(),
            xU = vi(),
            SU = 4294967295;

        function Ei(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = SU, this.__views__ = []
        }
        Ei.prototype = AU(xU.prototype);
        Ei.prototype.constructor = Ei;
        Em.exports = Ei
    });
    var _m = c((Fj, mm) => {
        function RU(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        mm.exports = RU
    });
    var Tm = c((Gj, bm) => {
        var CU = mi(),
            NU = yi(),
            LU = _m();

        function PU(e) {
            if (e instanceof CU) return e.clone();
            var t = new NU(e.__wrapped__, e.__chain__);
            return t.__actions__ = LU(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        bm.exports = PU
    });
    var wm = c((Uj, Om) => {
        var MU = mi(),
            Im = yi(),
            qU = vi(),
            DU = Ae(),
            FU = pt(),
            GU = Tm(),
            UU = Object.prototype,
            VU = UU.hasOwnProperty;

        function _i(e) {
            if (FU(e) && !DU(e) && !(e instanceof MU)) {
                if (e instanceof Im) return e;
                if (VU.call(e, "__wrapped__")) return GU(e)
            }
            return new Im(e)
        }
        _i.prototype = qU.prototype;
        _i.prototype.constructor = _i;
        Om.exports = _i
    });
    var xm = c((Vj, Am) => {
        var HU = mi(),
            WU = ps(),
            kU = gs(),
            XU = wm();

        function BU(e) {
            var t = kU(e),
                r = XU[t];
            if (typeof r != "function" || !(t in HU.prototype)) return !1;
            if (e === r) return !0;
            var n = WU(r);
            return !!n && e === n[0]
        }
        Am.exports = BU
    });
    var Nm = c((Hj, Cm) => {
        var Sm = yi(),
            jU = am(),
            zU = ps(),
            vs = gs(),
            KU = Ae(),
            Rm = xm(),
            YU = "Expected a function",
            $U = 8,
            QU = 32,
            ZU = 128,
            JU = 256;

        function eV(e) {
            return jU(function(t) {
                var r = t.length,
                    n = r,
                    i = Sm.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(YU);
                    if (i && !s && vs(o) == "wrapper") var s = new Sm([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = vs(o),
                        u = a == "wrapper" ? zU(o) : void 0;
                    u && Rm(u[0]) && u[1] == (ZU | $U | QU | JU) && !u[4].length && u[9] == 1 ? s = s[vs(u[0])].apply(s, u[3]) : s = o.length == 1 && Rm(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var f = arguments,
                        d = f[0];
                    if (s && f.length == 1 && KU(d)) return s.plant(d).value();
                    for (var p = 0, y = r ? t[p].apply(this, f) : d; ++p < r;) y = t[p].call(this, y);
                    return y
                }
            })
        }
        Cm.exports = eV
    });
    var Pm = c((Wj, Lm) => {
        var tV = Nm(),
            rV = tV();
        Lm.exports = rV
    });
    var qm = c((kj, Mm) => {
        function nV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Mm.exports = nV
    });
    var Fm = c((Xj, Dm) => {
        var iV = qm(),
            hs = Yn();

        function oV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = hs(r), r = r === r ? r : 0), t !== void 0 && (t = hs(t), t = t === t ? t : 0), iV(hs(e), t, r)
        }
        Dm.exports = oV
    });
    var jm, zm, Km, Ym, aV, sV, uV, cV, lV, fV, dV, pV, gV, vV, hV, yV, EV, mV, _V, $m, Qm, bV, TV, IV, Zm, OV, wV, Jm, AV, ys, e_, Gm, Um, t_, en, xV, lt, r_, SV, He, Je, tn, n_, Es, Vm, ms, RV, Jr, CV, NV, LV, i_, Hm, PV, Wm, MV, qV, DV, km, bi, Ti, Xm, Bm, o_, a_ = ye(() => {
        "use strict";
        jm = fe(Pm()), zm = fe(zn()), Km = fe(Fm());
        Ue();
        _s();
        gi();
        Ym = fe(Gt()), {
            MOUSE_CLICK: aV,
            MOUSE_SECOND_CLICK: sV,
            MOUSE_DOWN: uV,
            MOUSE_UP: cV,
            MOUSE_OVER: lV,
            MOUSE_OUT: fV,
            DROPDOWN_CLOSE: dV,
            DROPDOWN_OPEN: pV,
            SLIDER_ACTIVE: gV,
            SLIDER_INACTIVE: vV,
            TAB_ACTIVE: hV,
            TAB_INACTIVE: yV,
            NAVBAR_CLOSE: EV,
            NAVBAR_OPEN: mV,
            MOUSE_MOVE: _V,
            PAGE_SCROLL_DOWN: $m,
            SCROLL_INTO_VIEW: Qm,
            SCROLL_OUT_OF_VIEW: bV,
            PAGE_SCROLL_UP: TV,
            SCROLLING_IN_VIEW: IV,
            PAGE_FINISH: Zm,
            ECOMMERCE_CART_CLOSE: OV,
            ECOMMERCE_CART_OPEN: wV,
            PAGE_START: Jm,
            PAGE_SCROLL: AV
        } = Qe, ys = "COMPONENT_ACTIVE", e_ = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Gm
        } = Ce, {
            getNamespacedParameterId: Um
        } = Ym.IX2VanillaUtils, t_ = e => t => typeof t == "object" && e(t) ? !0 : t, en = t_(({
            element: e,
            nativeEvent: t
        }) => e === t.target), xV = t_(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), lt = (0, jm.default)([en, xV]), r_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !RV[i.eventTypeId]) return i
            }
            return null
        }, SV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!r_(e, n)
        }, He = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, f = r_(e, u);
            return f && hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Gm + n.split(Gm)[1],
                actionListId: (0, zm.default)(f, "action.config.actionListId")
            }), hr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), rn({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, Je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, tn = {
            handler: Je(lt, He)
        }, n_ = { ...tn,
            types: [ys, e_].join(" ")
        }, Es = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Vm = "mouseover mouseout", ms = {
            types: Es
        }, RV = {
            PAGE_START: Jm,
            PAGE_FINISH: Zm
        }, Jr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, Km.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), CV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), NV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, LV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Jr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return CV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, i_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [ys, e_].indexOf(n) !== -1 ? n === ys : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Hm = e => (t, r) => {
            let n = {
                elementHovered: NV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, PV = e => (t, r) => {
            let n = { ...r,
                elementVisible: LV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Wm = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Jr(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: f
            } = s, d = f === "PX", p = i - o, y = Number((n / p).toFixed(2));
            if (r && r.percentTop === y) return r;
            let h = (d ? u : o * (u || 0) / 100) / p,
                m, _, P = 0;
            r && (m = y > r.percentTop, _ = r.scrollingDown !== m, P = _ ? y : r.anchorTop);
            let O = a === $m ? y >= P + h : y <= P - h,
                S = { ...r,
                    percentTop: y,
                    inBounds: O,
                    anchorTop: P,
                    scrollingDown: m
                };
            return r && O && (_ || S.inBounds !== r.inBounds) && e(t, S) || S
        }, MV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, qV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, DV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, km = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, bi = (e = !0) => ({ ...n_,
            handler: Je(e ? lt : en, i_((t, r) => r.isActive ? tn.handler(t, r) : r))
        }), Ti = (e = !0) => ({ ...n_,
            handler: Je(e ? lt : en, i_((t, r) => r.isActive ? r : tn.handler(t, r)))
        }), Xm = { ...ms,
            handler: PV((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Qm === r ? (He(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Bm = .05, o_ = {
            [gV]: bi(),
            [vV]: Ti(),
            [pV]: bi(),
            [dV]: Ti(),
            [mV]: bi(!1),
            [EV]: Ti(!1),
            [hV]: bi(),
            [yV]: Ti(),
            [wV]: {
                types: "ecommerce-cart-open",
                handler: Je(lt, He)
            },
            [OV]: {
                types: "ecommerce-cart-close",
                handler: Je(lt, He)
            },
            [aV]: {
                types: "click",
                handler: Je(lt, km((e, {
                    clickCount: t
                }) => {
                    SV(e) ? t === 1 && He(e) : He(e)
                }))
            },
            [sV]: {
                types: "click",
                handler: Je(lt, km((e, {
                    clickCount: t
                }) => {
                    t === 2 && He(e)
                }))
            },
            [uV]: { ...tn,
                types: "mousedown"
            },
            [cV]: { ...tn,
                types: "mouseup"
            },
            [lV]: {
                types: Vm,
                handler: Je(lt, Hm((e, t) => {
                    t.elementHovered && He(e)
                }))
            },
            [fV]: {
                types: Vm,
                handler: Je(lt, Hm((e, t) => {
                    t.elementHovered || He(e)
                }))
            },
            [_V]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: f,
                        restingState: d = 0
                    } = r, {
                        clientX: p = o.clientX,
                        clientY: y = o.clientY,
                        pageX: h = o.pageX,
                        pageY: m = o.pageY
                    } = n, _ = a === "X_AXIS", P = n.type === "mouseout", O = d / 100, S = u, w = !1;
                    switch (s) {
                        case at.VIEWPORT:
                            {
                                O = _ ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(y, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case at.PAGE:
                            {
                                let {
                                    scrollLeft: R,
                                    scrollTop: L,
                                    scrollWidth: N,
                                    scrollHeight: k
                                } = Jr();O = _ ? Math.min(R + h, N) / N : Math.min(L + m, k) / k;
                                break
                            }
                        case at.ELEMENT:
                        default:
                            {
                                S = Um(i, u);
                                let R = n.type.indexOf("mouse") === 0;
                                if (R && lt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let L = t.getBoundingClientRect(),
                                    {
                                        left: N,
                                        top: k,
                                        width: j,
                                        height: Q
                                    } = L;
                                if (!R && !MV({
                                        left: p,
                                        top: y
                                    }, L)) break;w = !0,
                                O = _ ? (p - N) / j : (y - k) / Q;
                                break
                            }
                    }
                    return P && (O > 1 - Bm || O < Bm) && (O = Math.round(O)), (s !== at.ELEMENT || w || w !== o.elementHovered) && (O = f ? 1 - O : O, e.dispatch(gr(S, O))), {
                        elementHovered: w,
                        clientX: p,
                        clientY: y,
                        pageX: h,
                        pageY: m
                    }
                }
            },
            [AV]: {
                types: Es,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = Jr(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(gr(r, a))
                }
            },
            [IV]: {
                types: Es,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: f
                    } = Jr(), {
                        basedOn: d,
                        selectedAxis: p,
                        continuousParameterGroupId: y,
                        startsEntering: h,
                        startsExiting: m,
                        addEndOffset: _,
                        addStartOffset: P,
                        addOffsetValue: O = 0,
                        endOffsetValue: S = 0
                    } = r, w = p === "X_AXIS";
                    if (d === at.VIEWPORT) {
                        let R = w ? o / a : s / u;
                        return R !== i.scrollPercent && t.dispatch(gr(y, R)), {
                            scrollPercent: R
                        }
                    } else {
                        let R = Um(n, y),
                            L = e.getBoundingClientRect(),
                            N = (P ? O : 0) / 100,
                            k = (_ ? S : 0) / 100;
                        N = h ? N : 1 - N, k = m ? k : 1 - k;
                        let j = L.top + Math.min(L.height * N, f),
                            ee = L.top + L.height * k - j,
                            re = Math.min(f + ee, u),
                            I = Math.min(Math.max(0, f - j), re) / re;
                        return I !== i.scrollPercent && t.dispatch(gr(R, I)), {
                            scrollPercent: I
                        }
                    }
                }
            },
            [Qm]: Xm,
            [bV]: Xm,
            [$m]: { ...ms,
                handler: Wm((e, t) => {
                    t.scrollingDown && He(e)
                })
            },
            [TV]: { ...ms,
                handler: Wm((e, t) => {
                    t.scrollingDown || He(e)
                })
            },
            [Zm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Je(en, qV(He))
            },
            [Jm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Je(en, DV(He))
            }
        }
    });
    var I_ = {};
    Fe(I_, {
        observeRequests: () => rH,
        startActionGroup: () => rn,
        startEngine: () => Si,
        stopActionGroup: () => hr,
        stopAllActionGroups: () => __,
        stopEngine: () => Ri
    });

    function rH(e) {
        Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: oH
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: aH
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: sH
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: uH
        })
    }

    function nH(e) {
        Ut({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ri(e), h_({
                    store: e,
                    elementApi: qe
                }), Si({
                    store: e,
                    allowEvents: !0
                }), y_()
            }
        })
    }

    function iH(e, t) {
        let r = Ut({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function oH({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Si({
                store: r,
                rawData: e,
                allowEvents: !0
            }), y_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function y_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function aH(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: f = !0
        } = e, {
            rawData: d
        } = e;
        if (n && i && d && a) {
            let p = d.actionLists[n];
            p && (d = BV({
                actionList: p,
                actionItemId: i,
                rawData: d
            }))
        }
        if (Si({
                store: t,
                rawData: d,
                allowEvents: s,
                testManual: u
            }), n && r === Ge.GENERAL_START_ACTION || bs(r)) {
            hr({
                store: t,
                actionListId: n
            }), m_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = rn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: f
            });
            f && p && t.dispatch(vr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function sH({
        actionListId: e
    }, t) {
        e ? hr({
            store: t,
            actionListId: e
        }) : __({
            store: t
        }), Ri(t)
    }

    function uH(e, t) {
        Ri(t), h_({
            store: t,
            elementApi: qe
        })
    }

    function Si({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Za(t)), i.active || (e.dispatch(Ja({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (gH(e), cH(), e.getState().ixSession.hasDefinedMediaQueries && nH(e)), e.dispatch(es()), lH(e, n))
    }

    function cH() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(s_) === -1 && (e.className += ` ${s_}`)
    }

    function lH(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(di(n, o)), t ? iH(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ri(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(fH), YV(), e.dispatch(ts())
        }
    }

    function fH({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function dH({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: f,
            ixSession: d
        } = e.getState(), {
            events: p
        } = f, y = p[n], {
            eventTypeId: h
        } = y, m = {}, _ = {}, P = [], {
            continuousActionGroups: O
        } = s, {
            id: S
        } = s;
        jV(h, i) && (S = zV(t, S));
        let w = d.hasBoundaryNodes && r ? Zr(r, Oi) : null;
        O.forEach(R => {
            let {
                keyframe: L,
                actionItems: N
            } = R;
            N.forEach(k => {
                let {
                    actionTypeId: j
                } = k, {
                    target: Q
                } = k.config;
                if (!Q) return;
                let ee = Q.boundaryMode ? w : null,
                    re = $V(Q) + Ts + j;
                if (_[re] = pH(_[re], L, k), !m[re]) {
                    m[re] = !0;
                    let {
                        config: q
                    } = k;
                    wi({
                        config: q,
                        event: y,
                        eventTarget: r,
                        elementRoot: ee,
                        elementApi: qe
                    }).forEach(I => {
                        P.push({
                            element: I,
                            key: re
                        })
                    })
                }
            })
        }), P.forEach(({
            element: R,
            key: L
        }) => {
            let N = _[L],
                k = (0, yt.default)(N, "[0].actionItems[0]", {}),
                {
                    actionTypeId: j
                } = k,
                Q = xi(j) ? Os(j)(R, k) : null,
                ee = Is({
                    element: R,
                    actionItem: k,
                    elementApi: qe
                }, Q);
            ws({
                store: e,
                element: R,
                eventId: n,
                actionListId: o,
                actionItem: k,
                destination: ee,
                continuous: !0,
                parameterId: S,
                actionGroups: N,
                smoothing: a,
                restingValue: u,
                pluginInstance: Q
            })
        })
    }

    function pH(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function gH(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        E_(e), (0, yr.default)(r, (i, o) => {
            let s = o_[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            _H({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && hH(e)
    }

    function hH(e) {
        let t = () => {
            E_(e)
        };
        vH.forEach(r => {
            window.addEventListener(r, t), e.dispatch(fi(window, [r, t]))
        }), t()
    }

    function E_(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(as({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function _H({
        logic: e,
        store: t,
        events: r
    }) {
        bH(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = yH(r, mH);
        if (!(0, l_.default)(a)) return;
        (0, yr.default)(a, (p, y) => {
            let h = r[y],
                {
                    action: m,
                    id: _,
                    mediaQueries: P = o.mediaQueryKeys
                } = h,
                {
                    actionListId: O
                } = m.config;
            QV(P, o.mediaQueryKeys) || t.dispatch(ss()), m.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(w => {
                let {
                    continuousParameterGroupId: R
                } = w, L = (0, yt.default)(s, `${O}.continuousParameterGroups`, []), N = (0, c_.default)(L, ({
                    id: Q
                }) => Q === R), k = (w.smoothing || 0) / 100, j = (w.restingState || 0) / 100;
                N && p.forEach((Q, ee) => {
                    let re = _ + Ts + ee;
                    dH({
                        store: t,
                        eventStateKey: re,
                        eventTarget: Q,
                        eventId: _,
                        eventConfig: w,
                        actionListId: O,
                        parameterGroup: N,
                        smoothing: k,
                        restingValue: j
                    })
                })
            }), (m.actionTypeId === Ge.GENERAL_START_ACTION || bs(m.actionTypeId)) && m_({
                store: t,
                actionListId: O,
                eventId: _
            })
        });
        let u = p => {
                let {
                    ixSession: y
                } = t.getState();
                EH(a, (h, m, _) => {
                    let P = r[m],
                        O = y.eventState[_],
                        {
                            action: S,
                            mediaQueries: w = o.mediaQueryKeys
                        } = P;
                    if (!Ai(w, y.mediaQueryKey)) return;
                    let R = (L = {}) => {
                        let N = i({
                            store: t,
                            element: h,
                            event: P,
                            eventConfig: L,
                            nativeEvent: p,
                            eventStateKey: _
                        }, O);
                        ZV(N, O) || t.dispatch(rs(_, N))
                    };
                    S.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(P.config) ? P.config : [P.config]).forEach(R) : R()
                })
            },
            f = (0, g_.default)(u, tH),
            d = ({
                target: p = document,
                types: y,
                throttle: h
            }) => {
                y.split(" ").filter(Boolean).forEach(m => {
                    let _ = h ? f : u;
                    p.addEventListener(m, _), t.dispatch(fi(p, [m, _]))
                })
            };
        Array.isArray(n) ? n.forEach(d) : typeof n == "string" && d(e)
    }

    function bH(e) {
        if (!eH) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = cs(o);
            t[s] || (i === Qe.MOUSE_CLICK || i === Qe.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function m_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
                d = (0, yt.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Ai(d, i.mediaQueryKey)) return;
            f.forEach(p => {
                let {
                    config: y,
                    actionTypeId: h
                } = p, m = y ? .target ? .useEventTarget === !0 && y ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : y, _ = wi({
                    config: m,
                    event: a,
                    elementApi: qe
                }), P = xi(h);
                _.forEach(O => {
                    let S = P ? Os(h)(O, p) : null;
                    ws({
                        destination: Is({
                            element: O,
                            actionItem: p,
                            elementApi: qe
                        }, S),
                        immediate: !0,
                        store: e,
                        element: O,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: S
                    })
                })
            })
        }
    }

    function __({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, yr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                As(r, e), i && e.dispatch(vr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function hr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? Zr(r, Oi) : null;
        (0, yr.default)(o, u => {
            let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
                d = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && d) {
                if (a && f && !ls(a, u.element)) return;
                As(u, e), u.verbose && e.dispatch(vr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function rn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: f
        } = e.getState(), {
            events: d
        } = u, p = d[t] || {}, {
            mediaQueries: y = u.mediaQueryKeys
        } = p, h = (0, yt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: m,
            useFirstGroupAsInitialState: _
        } = h;
        if (!m || !m.length) return !1;
        o >= m.length && (0, yt.default)(p, "config.loop") && (o = 0), o === 0 && _ && o++;
        let O = (o === 0 || o === 1 && _) && bs(p.action ? .actionTypeId) ? p.config.delay : void 0,
            S = (0, yt.default)(m, [o, "actionItems"], []);
        if (!S.length || !Ai(y, f.mediaQueryKey)) return !1;
        let w = f.hasBoundaryNodes && r ? Zr(r, Oi) : null,
            R = WV(S),
            L = !1;
        return S.forEach((N, k) => {
            let {
                config: j,
                actionTypeId: Q
            } = N, ee = xi(Q), {
                target: re
            } = j;
            if (!re) return;
            let q = re.boundaryMode ? w : null;
            wi({
                config: j,
                event: p,
                eventTarget: r,
                elementRoot: q,
                elementApi: qe
            }).forEach((M, K) => {
                let W = ee ? Os(Q)(M, N) : null,
                    ne = ee ? JV(Q)(M, N) : null;
                L = !0;
                let ie = R === k && K === 0,
                    D = kV({
                        element: M,
                        actionItem: N
                    }),
                    X = Is({
                        element: M,
                        actionItem: N,
                        elementApi: qe
                    }, W);
                ws({
                    store: e,
                    element: M,
                    actionItem: N,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ie,
                    computedStyle: D,
                    destination: X,
                    immediate: s,
                    verbose: a,
                    pluginInstance: W,
                    pluginDuration: ne,
                    instanceDelay: O
                })
            })
        }), L
    }

    function ws(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: f,
            eventId: d
        } = n, p = !u, y = VV(), {
            ixElements: h,
            ixSession: m,
            ixData: _
        } = t.getState(), P = UV(h, i), {
            refState: O
        } = h[P] || {}, S = fs(i), w = m.reducedMotion && zo[o.actionTypeId], R;
        if (w && u) switch (_.events[d] ? .eventTypeId) {
            case Qe.MOUSE_MOVE:
            case Qe.MOUSE_MOVE_IN_VIEWPORT:
                R = f;
                break;
            default:
                R = .5;
                break
        }
        let L = XV(i, O, r, o, qe, a);
        if (t.dispatch(ns({
                instanceId: y,
                elementId: P,
                origin: L,
                refType: S,
                skipMotion: w,
                skipToValue: R,
                ...n
            })), b_(document.body, "ix2-animation-started", y), s) {
            TH(t, y);
            return
        }
        Ut({
            store: t,
            select: ({
                ixInstances: N
            }) => N[y],
            onChange: T_
        }), p && t.dispatch(pi(y, m.tick))
    }

    function As(e, t) {
        b_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === v_ && KV(o, n, qe), t.dispatch(is(e.id))
    }

    function b_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function TH(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        T_(n[t], e)
    }

    function T_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: f,
            groupIndex: d,
            eventId: p,
            eventTarget: y,
            eventStateKey: h,
            actionListId: m,
            isCarrier: _,
            styleProp: P,
            verbose: O,
            pluginInstance: S
        } = e, {
            ixData: w,
            ixSession: R
        } = t.getState(), {
            events: L
        } = w, N = L[p] || {}, {
            mediaQueries: k = w.mediaQueryKeys
        } = N;
        if (Ai(k, R.mediaQueryKey) && (n || r || i)) {
            if (f || u === GV && i) {
                t.dispatch(os(o, a, f, s));
                let {
                    ixElements: j
                } = t.getState(), {
                    ref: Q,
                    refType: ee,
                    refState: re
                } = j[o] || {}, q = re && re[a];
                (ee === v_ || xi(a)) && HV(Q, re, q, p, s, P, qe, u, S)
            }
            if (i) {
                if (_) {
                    let j = rn({
                        store: t,
                        eventId: p,
                        eventTarget: y,
                        eventStateKey: h,
                        actionListId: m,
                        groupIndex: d + 1,
                        verbose: O
                    });
                    O && !j && t.dispatch(vr({
                        actionListId: m,
                        isPlaying: !1
                    }))
                }
                As(e, t)
            }
        }
    }
    var c_, yt, l_, f_, d_, p_, yr, g_, Ii, FV, bs, Ts, Oi, v_, GV, s_, wi, UV, Is, Ut, VV, HV, h_, WV, kV, XV, BV, jV, zV, Ai, KV, YV, $V, QV, ZV, xi, Os, JV, u_, eH, tH, vH, yH, EH, mH, _s = ye(() => {
        "use strict";
        c_ = fe(Ta()), yt = fe(zn()), l_ = fe(Dy()), f_ = fe(uE()), d_ = fe(lE()), p_ = fe(dE()), yr = fe(EE()), g_ = fe(wE());
        Ue();
        Ii = fe(Gt());
        gi();
        NE();
        a_();
        FV = Object.keys(wn), bs = e => FV.includes(e), {
            COLON_DELIMITER: Ts,
            BOUNDARY_SELECTOR: Oi,
            HTML_ELEMENT: v_,
            RENDER_GENERAL: GV,
            W_MOD_IX: s_
        } = Ce, {
            getAffectedElements: wi,
            getElementId: UV,
            getDestinationValues: Is,
            observeStore: Ut,
            getInstanceId: VV,
            renderHTMLElement: HV,
            clearAllStyles: h_,
            getMaxDurationItemIndex: WV,
            getComputedStyle: kV,
            getInstanceOrigin: XV,
            reduceListToGroup: BV,
            shouldNamespaceEventParameter: jV,
            getNamespacedParameterId: zV,
            shouldAllowMediaQuery: Ai,
            cleanupHTMLElement: KV,
            clearObjectCache: YV,
            stringifyTarget: $V,
            mediaQueriesEqual: QV,
            shallowEqual: ZV
        } = Ii.IX2VanillaUtils, {
            isPluginType: xi,
            createPluginInstance: Os,
            getPluginDuration: JV
        } = Ii.IX2VanillaPlugins, u_ = navigator.userAgent, eH = u_.match(/iPad/i) || u_.match(/iPhone/), tH = 12;
        vH = ["resize", "orientationchange"];
        yH = (e, t) => (0, f_.default)((0, p_.default)(e, t), d_.default), EH = (e, t) => {
            (0, yr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + Ts + o;
                    t(i, n, s)
                })
            })
        }, mH = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return wi({
                config: t,
                elementApi: qe
            })
        }
    });
    var w_ = c(Et => {
        "use strict";
        var IH = dn().default,
            OH = su().default;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Et.actions = void 0;
        Et.destroy = O_;
        Et.init = RH;
        Et.setEnv = SH;
        Et.store = void 0;
        jl();
        var wH = Xo(),
            AH = OH((yy(), rt(hy))),
            xs = (_s(), rt(I_)),
            xH = IH((gi(), rt(xE)));
        Et.actions = xH;
        var Ss = Et.store = (0, wH.createStore)(AH.default);

        function SH(e) {
            e() && (0, xs.observeRequests)(Ss)
        }

        function RH(e) {
            O_(), (0, xs.startEngine)({
                store: Ss,
                rawData: e,
                allowEvents: !0
            })
        }

        function O_() {
            (0, xs.stopEngine)(Ss)
        }
    });
    var R_ = c((Jj, S_) => {
        "use strict";
        var A_ = We(),
            x_ = w_();
        x_.setEnv(A_.env);
        A_.define("ix2", S_.exports = function() {
            return x_
        })
    });
    var N_ = c((ez, C_) => {
        "use strict";
        var Er = We();
        Er.define("links", C_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Er.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                f = /index\.(html|php)$/,
                d = /\/$/,
                p, y;
            r.ready = r.design = r.preview = h;

            function h() {
                i = o && Er.env("design"), y = Er.env("slug") || s.pathname || "", Er.scroll.off(_), p = [];
                for (var O = document.links, S = 0; S < O.length; ++S) m(O[S]);
                p.length && (Er.scroll.on(_), _())
            }

            function m(O) {
                if (!O.getAttribute("hreflang")) {
                    var S = i && O.getAttribute("href-disabled") || O.getAttribute("href");
                    if (a.href = S, !(S.indexOf(":") >= 0)) {
                        var w = e(O);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var R = e(a.hash);
                            R.length && p.push({
                                link: w,
                                sec: R,
                                active: !1
                            });
                            return
                        }
                        if (!(S === "#" || S === "")) {
                            var L = a.href === s.href || S === y || f.test(S) && d.test(y);
                            P(w, u, L)
                        }
                    }
                }
            }

            function _() {
                var O = n.scrollTop(),
                    S = n.height();
                t.each(p, function(w) {
                    if (!w.link.attr("hreflang")) {
                        var R = w.link,
                            L = w.sec,
                            N = L.offset().top,
                            k = L.outerHeight(),
                            j = S * .5,
                            Q = L.is(":visible") && N + k - j >= O && N + j <= O + S;
                        w.active !== Q && (w.active = Q, P(R, u, Q))
                    }
                })
            }

            function P(O, S, w) {
                var R = O.hasClass(S);
                w && R || !w && !R || (w ? O.addClass(S) : O.removeClass(S))
            }
            return r
        })
    });
    var P_ = c((tz, L_) => {
        "use strict";
        var Ci = We();
        Ci.define("scroll", L_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = m() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(q) {
                    window.setTimeout(q, 15)
                },
                u = Ci.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                d = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
                y = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                h = document.createElement("style");
            h.appendChild(document.createTextNode(y));

            function m() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function P(q) {
                return _.test(q.hash) && q.host + q.pathname === r.host + r.pathname
            }
            let O = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function S() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || O.matches
            }

            function w(q, I) {
                var M;
                switch (I) {
                    case "add":
                        M = q.attr("tabindex"), M ? q.attr("data-wf-tabindex-swap", M) : q.attr("tabindex", "-1");
                        break;
                    case "remove":
                        M = q.attr("data-wf-tabindex-swap"), M ? (q.attr("tabindex", M), q.removeAttr("data-wf-tabindex-swap")) : q.removeAttr("tabindex");
                        break
                }
                q.toggleClass("wf-force-outline-none", I === "add")
            }

            function R(q) {
                var I = q.currentTarget;
                if (!(Ci.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))) {
                    var M = P(I) ? I.hash : "";
                    if (M !== "") {
                        var K = e(M);
                        K.length && (q && (q.preventDefault(), q.stopPropagation()), L(M, q), window.setTimeout(function() {
                            N(K, function() {
                                w(K, "add"), K.get(0).focus({
                                    preventScroll: !0
                                }), w(K, "remove")
                            })
                        }, q ? 0 : 300))
                    }
                }
            }

            function L(q) {
                if (r.hash !== q && n && n.pushState && !(Ci.env.chrome && r.protocol === "file:")) {
                    var I = n.state && n.state.hash;
                    I !== q && n.pushState({
                        hash: q
                    }, "", q)
                }
            }

            function N(q, I) {
                var M = i.scrollTop(),
                    K = k(q);
                if (M !== K) {
                    var W = j(q, M, K),
                        ne = Date.now(),
                        ie = function() {
                            var D = Date.now() - ne;
                            window.scroll(0, Q(M, K, D, W)), D <= W ? a(ie) : typeof I == "function" && I()
                        };
                    a(ie)
                }
            }

            function k(q) {
                var I = e(f),
                    M = I.css("position") === "fixed" ? I.outerHeight() : 0,
                    K = q.offset().top - M;
                if (q.data("scroll") === "mid") {
                    var W = i.height() - M,
                        ne = q.outerHeight();
                    ne < W && (K -= Math.round((W - ne) / 2))
                }
                return K
            }

            function j(q, I, M) {
                if (S()) return 0;
                var K = 1;
                return s.add(q).each(function(W, ne) {
                    var ie = parseFloat(ne.getAttribute("data-scroll-time"));
                    !isNaN(ie) && ie >= 0 && (K = ie)
                }), (472.143 * Math.log(Math.abs(I - M) + 125) - 2e3) * K
            }

            function Q(q, I, M, K) {
                return M > K ? I : q + (I - q) * ee(M / K)
            }

            function ee(q) {
                return q < .5 ? 4 * q * q * q : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1
            }

            function re() {
                var {
                    WF_CLICK_EMPTY: q,
                    WF_CLICK_SCROLL: I
                } = t;
                o.on(I, p, R), o.on(q, d, function(M) {
                    M.preventDefault()
                }), document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: re
            }
        })
    });
    var q_ = c((rz, M_) => {
        "use strict";
        var CH = We();
        CH.define("touch", M_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, d;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", y, !1), o.addEventListener("touchend", h, !1), o.addEventListener("touchcancel", m, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", y, !1), o.addEventListener("mouseup", h, !1), o.addEventListener("mouseout", m, !1);

                function p(P) {
                    var O = P.touches;
                    O && O.length > 1 || (s = !0, O ? (a = !0, f = O[0].clientX) : f = P.clientX, d = f)
                }

                function y(P) {
                    if (s) {
                        if (a && P.type === "mousemove") {
                            P.preventDefault(), P.stopPropagation();
                            return
                        }
                        var O = P.touches,
                            S = O ? O[0].clientX : P.clientX,
                            w = S - d;
                        d = S, Math.abs(w) > u && r && String(r()) === "" && (i("swipe", P, {
                            direction: w > 0 ? "right" : "left"
                        }), m())
                    }
                }

                function h(P) {
                    if (s && (s = !1, a && P.type === "mouseup")) {
                        P.preventDefault(), P.stopPropagation(), a = !1;
                        return
                    }
                }

                function m() {
                    s = !1
                }

                function _() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", y, !1), o.removeEventListener("touchend", h, !1), o.removeEventListener("touchcancel", m, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", y, !1), o.removeEventListener("mouseup", h, !1), o.removeEventListener("mouseout", m, !1), o = null
                }
                this.destroy = _
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var G_ = c((nz, F_) => {
        "use strict";
        var Vt = We(),
            NH = fn(),
            et = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            D_ = !0,
            LH = /^#[a-zA-Z0-9\-_]+$/;
        Vt.define("dropdown", F_.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Vt.env(),
                o = !1,
                s, a = Vt.env.touch,
                u = ".w-dropdown",
                f = "w--open",
                d = NH.triggers,
                p = 900,
                y = "focusout" + u,
                h = "keydown" + u,
                m = "mouseenter" + u,
                _ = "mousemove" + u,
                P = "mouseleave" + u,
                O = (a ? "click" : "mouseup") + u,
                S = "w-close" + u,
                w = "setting" + u,
                R = e(document),
                L;
            n.ready = N, n.design = function() {
                o && I(), o = !1, N()
            }, n.preview = function() {
                o = !0, N()
            };

            function N() {
                s = i && Vt.env("design"), L = R.find(u), L.each(k)
            }

            function k(v, H) {
                var z = e(H),
                    C = e.data(H, u);
                C || (C = e.data(H, u, {
                    open: !1,
                    el: z,
                    config: {},
                    selectedIdx: -1
                })), C.toggle = C.el.children(".w-dropdown-toggle"), C.list = C.el.children(".w-dropdown-list"), C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)"), C.complete = W(C), C.mouseLeave = ie(C), C.mouseUpOutside = K(C), C.mouseMoveOutside = D(C), j(C);
                var ae = C.toggle.attr("id"),
                    be = C.list.attr("id");
                ae || (ae = "w-dropdown-toggle-" + v), be || (be = "w-dropdown-list-" + v), C.toggle.attr("id", ae), C.toggle.attr("aria-controls", be), C.toggle.attr("aria-haspopup", "menu"), C.toggle.attr("aria-expanded", "false"), C.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), C.toggle.prop("tagName") !== "BUTTON" && (C.toggle.attr("role", "button"), C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")), C.list.attr("id", be), C.list.attr("aria-labelledby", ae), C.links.each(function(g, G) {
                    G.hasAttribute("tabindex") || G.setAttribute("tabindex", "0"), LH.test(G.hash) && G.addEventListener("click", q.bind(null, C))
                }), C.el.off(u), C.toggle.off(u), C.nav && C.nav.off(u);
                var ue = ee(C, D_);
                s && C.el.on(w, Q(C)), s || (i && (C.hovering = !1, q(C)), C.config.hover && C.toggle.on(m, ne(C)), C.el.on(S, ue), C.el.on(h, X(C)), C.el.on(y, F(C)), C.toggle.on(O, ue), C.toggle.on(h, U(C)), C.nav = C.el.closest(".w-nav"), C.nav.on(S, ue))
            }

            function j(v) {
                var H = Number(v.el.css("z-index"));
                v.manageZ = H === p || H === p + 1, v.config = {
                    hover: v.el.attr("data-hover") === "true" && !a,
                    delay: v.el.attr("data-delay")
                }
            }

            function Q(v) {
                return function(H, z) {
                    z = z || {}, j(v), z.open === !0 && re(v, !0), z.open === !1 && q(v, {
                        immediate: !0
                    })
                }
            }

            function ee(v, H) {
                return r(function(z) {
                    if (v.open || z && z.type === "w-close") return q(v, {
                        forceClose: H
                    });
                    re(v)
                })
            }

            function re(v) {
                if (!v.open) {
                    M(v), v.open = !0, v.list.addClass(f), v.toggle.addClass(f), v.toggle.attr("aria-expanded", "true"), d.intro(0, v.el[0]), Vt.redraw.up(), v.manageZ && v.el.css("z-index", p + 1);
                    var H = Vt.env("editor");
                    s || R.on(O, v.mouseUpOutside), v.hovering && !H && v.el.on(P, v.mouseLeave), v.hovering && H && R.on(_, v.mouseMoveOutside), window.clearTimeout(v.delayId)
                }
            }

            function q(v, {
                immediate: H,
                forceClose: z
            } = {}) {
                if (v.open && !(v.config.hover && v.hovering && !z)) {
                    v.toggle.attr("aria-expanded", "false"), v.open = !1;
                    var C = v.config;
                    if (d.outro(0, v.el[0]), R.off(O, v.mouseUpOutside), R.off(_, v.mouseMoveOutside), v.el.off(P, v.mouseLeave), window.clearTimeout(v.delayId), !C.delay || H) return v.complete();
                    v.delayId = window.setTimeout(v.complete, C.delay)
                }
            }

            function I() {
                R.find(u).each(function(v, H) {
                    e(H).triggerHandler(S)
                })
            }

            function M(v) {
                var H = v.el[0];
                L.each(function(z, C) {
                    var ae = e(C);
                    ae.is(H) || ae.has(H).length || ae.triggerHandler(S)
                })
            }

            function K(v) {
                return v.mouseUpOutside && R.off(O, v.mouseUpOutside), r(function(H) {
                    if (v.open) {
                        var z = e(H.target);
                        if (!z.closest(".w-dropdown-toggle").length) {
                            var C = e.inArray(v.el[0], z.parents(u)) === -1,
                                ae = Vt.env("editor");
                            if (C) {
                                if (ae) {
                                    var be = z.parents().length === 1 && z.parents("svg").length === 1,
                                        ue = z.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (be || ue) return
                                }
                                q(v)
                            }
                        }
                    }
                })
            }

            function W(v) {
                return function() {
                    v.list.removeClass(f), v.toggle.removeClass(f), v.manageZ && v.el.css("z-index", "")
                }
            }

            function ne(v) {
                return function() {
                    v.hovering = !0, re(v)
                }
            }

            function ie(v) {
                return function() {
                    v.hovering = !1, v.links.is(":focus") || q(v)
                }
            }

            function D(v) {
                return r(function(H) {
                    if (v.open) {
                        var z = e(H.target),
                            C = e.inArray(v.el[0], z.parents(u)) === -1;
                        if (C) {
                            var ae = z.parents(".w-editor-bem-EditorHoverControls").length,
                                be = z.parents(".w-editor-bem-RTToolbar").length,
                                ue = e(".w-editor-bem-EditorOverlay"),
                                g = ue.find(".w-editor-edit-outline").length || ue.find(".w-editor-bem-RTToolbar").length;
                            if (ae || be || g) return;
                            v.hovering = !1, q(v)
                        }
                    }
                })
            }

            function X(v) {
                return function(H) {
                    if (!(s || !v.open)) switch (v.selectedIdx = v.links.index(document.activeElement), H.keyCode) {
                        case et.HOME:
                            return v.open ? (v.selectedIdx = 0, Y(v), H.preventDefault()) : void 0;
                        case et.END:
                            return v.open ? (v.selectedIdx = v.links.length - 1, Y(v), H.preventDefault()) : void 0;
                        case et.ESCAPE:
                            return q(v), v.toggle.focus(), H.stopPropagation();
                        case et.ARROW_RIGHT:
                        case et.ARROW_DOWN:
                            return v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1), Y(v), H.preventDefault();
                        case et.ARROW_LEFT:
                        case et.ARROW_UP:
                            return v.selectedIdx = Math.max(-1, v.selectedIdx - 1), Y(v), H.preventDefault()
                    }
                }
            }

            function Y(v) {
                v.links[v.selectedIdx] && v.links[v.selectedIdx].focus()
            }

            function U(v) {
                var H = ee(v, D_);
                return function(z) {
                    if (!s) {
                        if (!v.open) switch (z.keyCode) {
                            case et.ARROW_UP:
                            case et.ARROW_DOWN:
                                return z.stopPropagation()
                        }
                        switch (z.keyCode) {
                            case et.SPACE:
                            case et.ENTER:
                                return H(), z.stopPropagation(), z.preventDefault()
                        }
                    }
                }
            }

            function F(v) {
                return r(function(H) {
                    var {
                        relatedTarget: z,
                        target: C
                    } = H, ae = v.el[0], be = ae.contains(z) || ae.contains(C);
                    return be || q(v), H.stopPropagation()
                })
            }
            return n
        })
    });
    var U_ = c(Rs => {
        "use strict";
        Object.defineProperty(Rs, "__esModule", {
            value: !0
        });
        Rs.default = PH;

        function PH(e, t, r, n, i, o, s, a, u, f, d, p, y) {
            return function(h) {
                e(h);
                var m = h.form,
                    _ = {
                        name: m.attr("data-name") || m.attr("name") || "Untitled Form",
                        pageId: m.attr("data-wf-page-id") || "",
                        elementId: m.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(m.html()),
                        trackingCookies: n()
                    };
                let P = m.attr("data-wf-flow");
                P && (_.wfFlow = P), i(h);
                var O = o(m, _.fields);
                if (O) return s(O);
                if (_.fileUploads = a(m), u(h), !f) {
                    d(h);
                    return
                }
                p.ajax({
                    url: y,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(S) {
                    S && S.code === 200 && (h.success = !0), d(h)
                }).fail(function() {
                    d(h)
                })
            }
        }
    });
    var H_ = c((oz, V_) => {
        "use strict";
        var Ni = We();
        Ni.define("forms", V_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                s = window.XDomainRequest && !window.atob,
                a = ".w-form",
                u, f = /e(-)?mail/i,
                d = /^\S+@\S+$/,
                p = window.alert,
                y = Ni.env(),
                h, m, _, P = /list-manage[1-9]?.com/i,
                O = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                S(), !y && !h && R()
            };

            function S() {
                u = e("html").attr("data-wf-site"), m = "https://webflow.com/api/v1/form/" + u, s && m.indexOf("https://webflow.com") >= 0 && (m = m.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${m}/signFile`, i = e(a + " form"), i.length && i.each(w)
            }

            function w(D, X) {
                var Y = e(X),
                    U = e.data(X, a);
                U || (U = e.data(X, a, {
                    form: Y
                })), L(U);
                var F = Y.closest("div.w-form");
                U.done = F.find("> .w-form-done"), U.fail = F.find("> .w-form-fail"), U.fileUploads = F.find(".w-file-upload"), U.fileUploads.each(function(z) {
                    W(z, U)
                });
                var v = U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
                U.done.attr("aria-label") || U.form.attr("aria-label", v), U.done.attr("tabindex", "-1"), U.done.attr("role", "region"), U.done.attr("aria-label") || U.done.attr("aria-label", v + " success"), U.fail.attr("tabindex", "-1"), U.fail.attr("role", "region"), U.fail.attr("aria-label") || U.fail.attr("aria-label", v + " failure");
                var H = U.action = Y.attr("action");
                if (U.handler = null, U.redirect = Y.attr("data-redirect"), P.test(H)) {
                    U.handler = I;
                    return
                }
                if (!H) {
                    if (u) {
                        U.handler = (() => {
                            let z = U_().default;
                            return z(L, o, Ni, ee, K, k, p, j, N, u, M, e, m)
                        })();
                        return
                    }
                    O()
                }
            }

            function R() {
                h = !0, n.on("submit", a + " form", function(z) {
                    var C = e.data(this, a);
                    C.handler && (C.evt = z, C.handler(C))
                });
                let D = ".w-checkbox-input",
                    X = ".w-radio-input",
                    Y = "w--redirected-checked",
                    U = "w--redirected-focus",
                    F = "w--redirected-focus-visible",
                    v = ":focus-visible, [data-wf-focus-visible]",
                    H = [
                        ["checkbox", D],
                        ["radio", X]
                    ];
                n.on("change", a + ' form input[type="checkbox"]:not(' + D + ")", z => {
                    e(z.target).siblings(D).toggleClass(Y)
                }), n.on("change", a + ' form input[type="radio"]', z => {
                    e(`input[name="${z.target.name}"]:not(${D})`).map((ae, be) => e(be).siblings(X).removeClass(Y));
                    let C = e(z.target);
                    C.hasClass("w-radio-input") || C.siblings(X).addClass(Y)
                }), H.forEach(([z, C]) => {
                    n.on("focus", a + ` form input[type="${z}"]:not(` + C + ")", ae => {
                        e(ae.target).siblings(C).addClass(U), e(ae.target).filter(v).siblings(C).addClass(F)
                    }), n.on("blur", a + ` form input[type="${z}"]:not(` + C + ")", ae => {
                        e(ae.target).siblings(C).removeClass(`${U} ${F}`)
                    })
                })
            }

            function L(D) {
                var X = D.btn = D.form.find(':input[type="submit"]');
                D.wait = D.btn.attr("data-wait") || null, D.success = !1, X.prop("disabled", !1), D.label && X.val(D.label)
            }

            function N(D) {
                var X = D.btn,
                    Y = D.wait;
                X.prop("disabled", !0), Y && (D.label = X.val(), X.val(Y))
            }

            function k(D, X) {
                var Y = null;
                return X = X || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function(U, F) {
                    var v = e(F),
                        H = v.attr("type"),
                        z = v.attr("data-name") || v.attr("name") || "Field " + (U + 1),
                        C = v.val();
                    if (H === "checkbox") C = v.is(":checked");
                    else if (H === "radio") {
                        if (X[z] === null || typeof X[z] == "string") return;
                        C = D.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof C == "string" && (C = e.trim(C)), X[z] = C, Y = Y || re(v, H, z, C)
                }), Y
            }

            function j(D) {
                var X = {};
                return D.find(':input[type="file"]').each(function(Y, U) {
                    var F = e(U),
                        v = F.attr("data-name") || F.attr("name") || "File " + (Y + 1),
                        H = F.attr("data-value");
                    typeof H == "string" && (H = e.trim(H)), X[v] = H
                }), X
            }
            let Q = {
                _mkto_trk: "marketo"
            };

            function ee() {
                return document.cookie.split("; ").reduce(function(X, Y) {
                    let U = Y.split("="),
                        F = U[0];
                    if (F in Q) {
                        let v = Q[F],
                            H = U.slice(1).join("=");
                        X[v] = H
                    }
                    return X
                }, {})
            }

            function re(D, X, Y, U) {
                var F = null;
                return X === "password" ? F = "Passwords cannot be submitted." : D.attr("required") ? U ? f.test(D.attr("type")) && (d.test(U) || (F = "Please enter a valid email address for: " + Y)) : F = "Please fill out the required field: " + Y : Y === "g-recaptcha-response" && !U && (F = "Please confirm you\u2019re not a robot."), F
            }

            function q(D) {
                K(D), M(D)
            }

            function I(D) {
                L(D);
                var X = D.form,
                    Y = {};
                if (/^https/.test(o.href) && !/^https/.test(D.action)) {
                    X.attr("method", "post");
                    return
                }
                K(D);
                var U = k(X, Y);
                if (U) return p(U);
                N(D);
                var F;
                t.each(Y, function(C, ae) {
                    f.test(ae) && (Y.EMAIL = C), /^((full[ _-]?)?name)$/i.test(ae) && (F = C), /^(first[ _-]?name)$/i.test(ae) && (Y.FNAME = C), /^(last[ _-]?name)$/i.test(ae) && (Y.LNAME = C)
                }), F && !Y.FNAME && (F = F.split(" "), Y.FNAME = F[0], Y.LNAME = Y.LNAME || F[1]);
                var v = D.action.replace("/post?", "/post-json?") + "&c=?",
                    H = v.indexOf("u=") + 2;
                H = v.substring(H, v.indexOf("&", H));
                var z = v.indexOf("id=") + 3;
                z = v.substring(z, v.indexOf("&", z)), Y["b_" + H + "_" + z] = "", e.ajax({
                    url: v,
                    data: Y,
                    dataType: "jsonp"
                }).done(function(C) {
                    D.success = C.result === "success" || /already/.test(C.msg), D.success || console.info("MailChimp error: " + C.msg), M(D)
                }).fail(function() {
                    M(D)
                })
            }

            function M(D) {
                var X = D.form,
                    Y = D.redirect,
                    U = D.success;
                if (U && Y) {
                    Ni.location(Y);
                    return
                }
                D.done.toggle(U), D.fail.toggle(!U), U ? D.done.focus() : D.fail.focus(), X.toggle(!U), L(D)
            }

            function K(D) {
                D.evt && D.evt.preventDefault(), D.evt = null
            }

            function W(D, X) {
                if (!X.fileUploads || !X.fileUploads[D]) return;
                var Y, U = e(X.fileUploads[D]),
                    F = U.find("> .w-file-upload-default"),
                    v = U.find("> .w-file-upload-uploading"),
                    H = U.find("> .w-file-upload-success"),
                    z = U.find("> .w-file-upload-error"),
                    C = F.find(".w-file-upload-input"),
                    ae = F.find(".w-file-upload-label"),
                    be = ae.children(),
                    ue = z.find(".w-file-upload-error-msg"),
                    g = H.find(".w-file-upload-file"),
                    G = H.find(".w-file-remove-link"),
                    Z = g.find(".w-file-upload-file-name"),
                    B = ue.attr("data-w-size-error"),
                    ve = ue.attr("data-w-type-error"),
                    St = ue.attr("data-w-generic-error");
                if (y || ae.on("click keydown", function(b) {
                        b.type === "keydown" && b.which !== 13 && b.which !== 32 || (b.preventDefault(), C.click())
                    }), ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), G.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), y) C.on("click", function(b) {
                    b.preventDefault()
                }), ae.on("click", function(b) {
                    b.preventDefault()
                }), be.on("click", function(b) {
                    b.preventDefault()
                });
                else {
                    G.on("click keydown", function(b) {
                        if (b.type === "keydown") {
                            if (b.which !== 13 && b.which !== 32) return;
                            b.preventDefault()
                        }
                        C.removeAttr("data-value"), C.val(""), Z.html(""), F.toggle(!0), H.toggle(!1), ae.focus()
                    }), C.on("change", function(b) {
                        Y = b.target && b.target.files && b.target.files[0], Y && (F.toggle(!1), z.toggle(!1), v.toggle(!0), v.focus(), Z.text(Y.name), A() || N(X), X.fileUploads[D].uploading = !0, ne(Y, E))
                    });
                    var ft = ae.outerHeight();
                    C.height(ft), C.width(1)
                }

                function l(b) {
                    var x = b.responseJSON && b.responseJSON.msg,
                        J = St;
                    typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0 ? J = ve : typeof x == "string" && x.indexOf("MaxFileSizeError") === 0 && (J = B), ue.text(J), C.removeAttr("data-value"), C.val(""), v.toggle(!1), F.toggle(!0), z.toggle(!0), z.focus(), X.fileUploads[D].uploading = !1, A() || L(X)
                }

                function E(b, x) {
                    if (b) return l(b);
                    var J = x.fileName,
                        oe = x.postData,
                        ge = x.fileId,
                        V = x.s3Url;
                    C.attr("data-value", ge), ie(V, oe, Y, J, T)
                }

                function T(b) {
                    if (b) return l(b);
                    v.toggle(!1), H.css("display", "inline-block"), H.focus(), X.fileUploads[D].uploading = !1, A() || L(X)
                }

                function A() {
                    var b = X.fileUploads && X.fileUploads.toArray() || [];
                    return b.some(function(x) {
                        return x.uploading
                    })
                }
            }

            function ne(D, X) {
                var Y = new URLSearchParams({
                    name: D.name,
                    size: D.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${Y}`,
                    crossDomain: !0
                }).done(function(U) {
                    X(null, U)
                }).fail(function(U) {
                    X(U)
                })
            }

            function ie(D, X, Y, U, F) {
                var v = new FormData;
                for (var H in X) v.append(H, X[H]);
                v.append("file", Y, U), e.ajax({
                    type: "POST",
                    url: D,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    F(null)
                }).fail(function(z) {
                    F(z)
                })
            }
            return r
        })
    });
    var k_ = c((az, W_) => {
        "use strict";
        var xt = We(),
            MH = fn(),
            Re = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        xt.define("navbar", W_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                s = t.debounce,
                a, u, f, d, p = xt.env(),
                y = '<div class="w-nav-overlay" data-wf-ignore />',
                h = ".w-nav",
                m = "w--open",
                _ = "w--nav-dropdown-open",
                P = "w--nav-dropdown-toggle-open",
                O = "w--nav-dropdown-list-open",
                S = "w--nav-link-open",
                w = MH.triggers,
                R = e();
            r.ready = r.design = r.preview = L, r.destroy = function() {
                R = e(), N(), u && u.length && u.each(ee)
            };

            function L() {
                f = p && xt.env("design"), d = xt.env("editor"), a = e(document.body), u = o.find(h), u.length && (u.each(Q), N(), k())
            }

            function N() {
                xt.resize.off(j)
            }

            function k() {
                xt.resize.on(j)
            }

            function j() {
                u.each(F)
            }

            function Q(g, G) {
                var Z = e(G),
                    B = e.data(G, h);
                B || (B = e.data(G, h, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })), B.menu = Z.find(".w-nav-menu"), B.links = B.menu.find(".w-nav-link"), B.dropdowns = B.menu.find(".w-dropdown"), B.dropdownToggle = B.menu.find(".w-dropdown-toggle"), B.dropdownList = B.menu.find(".w-dropdown-list"), B.button = Z.find(".w-nav-button"), B.container = Z.find(".w-container"), B.overlayContainerId = "w-nav-overlay-" + g, B.outside = Y(B);
                var ve = Z.find(".w-nav-brand");
                ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), B.button.attr("style", "-webkit-user-select: text;"), B.button.attr("aria-label") == null && B.button.attr("aria-label", "menu"), B.button.attr("role", "button"), B.button.attr("tabindex", "0"), B.button.attr("aria-controls", B.overlayContainerId), B.button.attr("aria-haspopup", "menu"), B.button.attr("aria-expanded", "false"), B.el.off(h), B.button.off(h), B.menu.off(h), I(B), f ? (re(B), B.el.on("setting" + h, M(B))) : (q(B), B.button.on("click" + h, D(B)), B.menu.on("click" + h, "a", X(B)), B.button.on("keydown" + h, K(B)), B.el.on("keydown" + h, W(B))), F(g, G)
            }

            function ee(g, G) {
                var Z = e.data(G, h);
                Z && (re(Z), e.removeData(G, h))
            }

            function re(g) {
                g.overlay && (ue(g, !0), g.overlay.remove(), g.overlay = null)
            }

            function q(g) {
                g.overlay || (g.overlay = e(y).appendTo(g.el), g.overlay.attr("id", g.overlayContainerId), g.parent = g.menu.parent(), ue(g, !0))
            }

            function I(g) {
                var G = {},
                    Z = g.config || {},
                    B = G.animation = g.el.attr("data-animation") || "default";
                G.animOver = /^over/.test(B), G.animDirect = /left$/.test(B) ? -1 : 1, Z.animation !== B && g.open && t.defer(ie, g), G.easing = g.el.attr("data-easing") || "ease", G.easing2 = g.el.attr("data-easing2") || "ease";
                var ve = g.el.attr("data-duration");
                G.duration = ve != null ? Number(ve) : 400, G.docHeight = g.el.attr("data-doc-height"), g.config = G
            }

            function M(g) {
                return function(G, Z) {
                    Z = Z || {};
                    var B = i.width();
                    I(g), Z.open === !0 && ae(g, !0), Z.open === !1 && ue(g, !0), g.open && t.defer(function() {
                        B !== i.width() && ie(g)
                    })
                }
            }

            function K(g) {
                return function(G) {
                    switch (G.keyCode) {
                        case Re.SPACE:
                        case Re.ENTER:
                            return D(g)(), G.preventDefault(), G.stopPropagation();
                        case Re.ESCAPE:
                            return ue(g), G.preventDefault(), G.stopPropagation();
                        case Re.ARROW_RIGHT:
                        case Re.ARROW_DOWN:
                        case Re.HOME:
                        case Re.END:
                            return g.open ? (G.keyCode === Re.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, ne(g), G.preventDefault(), G.stopPropagation()) : (G.preventDefault(), G.stopPropagation())
                    }
                }
            }

            function W(g) {
                return function(G) {
                    if (g.open) switch (g.selectedIdx = g.links.index(document.activeElement), G.keyCode) {
                        case Re.HOME:
                        case Re.END:
                            return G.keyCode === Re.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, ne(g), G.preventDefault(), G.stopPropagation();
                        case Re.ESCAPE:
                            return ue(g), g.button.focus(), G.preventDefault(), G.stopPropagation();
                        case Re.ARROW_LEFT:
                        case Re.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), ne(g), G.preventDefault(), G.stopPropagation();
                        case Re.ARROW_RIGHT:
                        case Re.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), ne(g), G.preventDefault(), G.stopPropagation()
                    }
                }
            }

            function ne(g) {
                if (g.links[g.selectedIdx]) {
                    var G = g.links[g.selectedIdx];
                    G.focus(), X(G)
                }
            }

            function ie(g) {
                g.open && (ue(g, !0), ae(g, !0))
            }

            function D(g) {
                return s(function() {
                    g.open ? ue(g) : ae(g)
                })
            }

            function X(g) {
                return function(G) {
                    var Z = e(this),
                        B = Z.attr("href");
                    if (!xt.validClick(G.currentTarget)) {
                        G.preventDefault();
                        return
                    }
                    B && B.indexOf("#") === 0 && g.open && ue(g)
                }
            }

            function Y(g) {
                return g.outside && o.off("click" + h, g.outside),
                    function(G) {
                        var Z = e(G.target);
                        d && Z.closest(".w-editor-bem-EditorOverlay").length || U(g, Z)
                    }
            }
            var U = s(function(g, G) {
                if (g.open) {
                    var Z = G.closest(".w-nav-menu");
                    g.menu.is(Z) || ue(g)
                }
            });

            function F(g, G) {
                var Z = e.data(G, h),
                    B = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !B && !f && ue(Z, !0), Z.container.length) {
                    var ve = H(Z);
                    Z.links.each(ve), Z.dropdowns.each(ve)
                }
                Z.open && be(Z)
            }
            var v = "max-width";

            function H(g) {
                var G = g.container.css(v);
                return G === "none" && (G = ""),
                    function(Z, B) {
                        B = e(B), B.css(v, ""), B.css(v) === "none" && B.css(v, G)
                    }
            }

            function z(g, G) {
                G.setAttribute("data-nav-menu-open", "")
            }

            function C(g, G) {
                G.removeAttribute("data-nav-menu-open")
            }

            function ae(g, G) {
                if (g.open) return;
                g.open = !0, g.menu.each(z), g.links.addClass(S), g.dropdowns.addClass(_), g.dropdownToggle.addClass(P), g.dropdownList.addClass(O), g.button.addClass(m);
                var Z = g.config,
                    B = Z.animation;
                (B === "none" || !n.support.transform || Z.duration <= 0) && (G = !0);
                var ve = be(g),
                    St = g.menu.outerHeight(!0),
                    ft = g.menu.outerWidth(!0),
                    l = g.el.height(),
                    E = g.el[0];
                if (F(0, E), w.intro(0, E), xt.redraw.up(), f || o.on("click" + h, g.outside), G) {
                    b();
                    return
                }
                var T = "transform " + Z.duration + "ms " + Z.easing;
                if (g.overlay && (R = g.menu.prev(), g.overlay.show().append(g.menu)), Z.animOver) {
                    n(g.menu).add(T).set({
                        x: Z.animDirect * ft,
                        height: ve
                    }).start({
                        x: 0
                    }).then(b), g.overlay && g.overlay.width(ft);
                    return
                }
                var A = l + St;
                n(g.menu).add(T).set({
                    y: -A
                }).start({
                    y: 0
                }).then(b);

                function b() {
                    g.button.attr("aria-expanded", "true")
                }
            }

            function be(g) {
                var G = g.config,
                    Z = G.docHeight ? o.height() : a.height();
                return G.animOver ? g.menu.height(Z) : g.el.css("position") !== "fixed" && (Z -= g.el.outerHeight(!0)), g.overlay && g.overlay.height(Z), Z
            }

            function ue(g, G) {
                if (!g.open) return;
                g.open = !1, g.button.removeClass(m);
                var Z = g.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (G = !0), w.outro(0, g.el[0]), o.off("click" + h, g.outside), G) {
                    n(g.menu).stop(), E();
                    return
                }
                var B = "transform " + Z.duration + "ms " + Z.easing2,
                    ve = g.menu.outerHeight(!0),
                    St = g.menu.outerWidth(!0),
                    ft = g.el.height();
                if (Z.animOver) {
                    n(g.menu).add(B).start({
                        x: St * Z.animDirect
                    }).then(E);
                    return
                }
                var l = ft + ve;
                n(g.menu).add(B).start({
                    y: -l
                }).then(E);

                function E() {
                    g.menu.height(""), n(g.menu).set({
                        x: 0,
                        y: 0
                    }), g.menu.each(C), g.links.removeClass(S), g.dropdowns.removeClass(_), g.dropdownToggle.removeClass(P), g.dropdownList.removeClass(O), g.overlay && g.overlay.children().length && (R.length ? g.menu.insertAfter(R) : g.menu.prependTo(g.parent), g.overlay.attr("style", "").hide()), g.el.triggerHandler("w-close"), g.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    Ns();
    Ls();
    Bs();
    zs();
    Ys();
    Zs();
    fn();
    R_();
    N_();
    P_();
    q_();
    G_();
    H_();
    k_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694103725932
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694103725932
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1694346137840
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1694348696816
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-18-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1694349003179
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-19-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1694349086680
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-21-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694349179996
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694353039487
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694353351519
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-23-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694353444717
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694355409234
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-25-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694355449137
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-26-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694355489154
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|1ebedf7a-4a02-336f-4db5-3e776fc40950",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-27-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694355513602
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".number-text",
                "originalId": "64f9056484bd62090ad3aa1e|2a592cc3-0622-42fa-bb5c-1c7a92f5704e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".number-text",
                "originalId": "64f9056484bd62090ad3aa1e|2a592cc3-0622-42fa-bb5c-1c7a92f5704e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694361683268
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-secondary",
                "originalId": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-secondary",
                "originalId": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694369405426
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-secondary",
                "originalId": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-secondary",
                "originalId": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694369405426
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694369805993
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694369805993
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".move_top_into_view",
                "originalId": "64db6a5a6d4fcb8ea543cb4d|e6c330be-8db5-085a-7d01-1fa3103ed562",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".move_top_into_view",
                "originalId": "64db6a5a6d4fcb8ea543cb4d|e6c330be-8db5-085a-7d01-1fa3103ed562",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692315729644
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|ed655020-2d15-ef06-7377-88e002a3832f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|ed655020-2d15-ef06-7377-88e002a3832f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694434013552
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|8d3260dc-710b-7a97-2cf4-28b9dab550e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|8d3260dc-710b-7a97-2cf4-28b9dab550e9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694444388616
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fade-in-industry",
                "originalId": "be11c198-b5fb-6c77-5c09-b2b8119ee8c2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fade-in-industry",
                "originalId": "be11c198-b5fb-6c77-5c09-b2b8119ee8c2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694448799581
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".card-industry",
                "originalId": "be11c198-b5fb-6c77-5c09-b2b8119ee8be",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card-industry",
                "originalId": "be11c198-b5fb-6c77-5c09-b2b8119ee8be",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694450516920
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".dropdown---wrap",
                "originalId": "0070727e-d1c9-9c97-5153-1def1e00a433",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown---wrap",
                "originalId": "0070727e-d1c9-9c97-5153-1def1e00a433",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1692272934342
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694454326850
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694454326850
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694454326850
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c8570c53-4aaf-0755-11a7-6ba9270c3dfa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694454326850
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694465124773
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694465124774
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694469770139
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694469770140
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-wrapper",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae09",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-wrapper",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae09",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-49-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694516378428
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-50-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-50-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1694524911469
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".card-service-wrapper",
                "originalId": "64f9056484bd62090ad3aa1e|78d3a522-8a5a-c16c-4deb-5a6f5f2e1f72",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card-service-wrapper",
                "originalId": "64f9056484bd62090ad3aa1e|78d3a522-8a5a-c16c-4deb-5a6f5f2e1f72",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525093752
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".card-service-wrapper",
                "originalId": "64f9056484bd62090ad3aa1e|78d3a522-8a5a-c16c-4deb-5a6f5f2e1f72",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card-service-wrapper",
                "originalId": "64f9056484bd62090ad3aa1e|78d3a522-8a5a-c16c-4deb-5a6f5f2e1f72",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525093752
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".process-item",
                "originalId": "64f9056484bd62090ad3aa1e|342835ac-484d-58e2-80e6-53e3b2a83f54",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-item",
                "originalId": "64f9056484bd62090ad3aa1e|342835ac-484d-58e2-80e6-53e3b2a83f54",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525301339
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".process-item",
                "originalId": "64f9056484bd62090ad3aa1e|342835ac-484d-58e2-80e6-53e3b2a83f54",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-item",
                "originalId": "64f9056484bd62090ad3aa1e|342835ac-484d-58e2-80e6-53e3b2a83f54",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525301339
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "0cc7d8f7-9b12-6faf-045c-a10e2a438c38",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0cc7d8f7-9b12-6faf-045c-a10e2a438c38",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525613894
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "0cc7d8f7-9b12-6faf-045c-a10e2a438c38",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0cc7d8f7-9b12-6faf-045c-a10e2a438c38",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525613895
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525747577
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "73dcea26-8718-c384-8258-a87fa255cc85",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525747577
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525767584
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "697f1e71-745b-b28d-730c-08461913dbc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525767585
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525923645
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link",
                "originalId": "fc902714-6e05-ad2d-79b8-51e221dc094b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525923646
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525950002
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525950003
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525970646
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-span",
                "originalId": "64f9056484bd62090ad3aa1e|ef159f2c-4ff5-1d10-4f50-1bda8e0200b1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694525970647
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526220799
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526220800
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "72f5bb14-347e-62e4-c286-bf275b391589",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "72f5bb14-347e-62e4-c286-bf275b391589",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526253671
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "72f5bb14-347e-62e4-c286-bf275b391589",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "72f5bb14-347e-62e4-c286-bf275b391589",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526253672
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".team-picture-wrap",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae0a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-picture-wrap",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae0a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526305115
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".team-picture-wrap",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae0a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-picture-wrap",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae0a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526305116
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".team-picture-wrap",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae0a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-picture-wrap",
                "originalId": "64f9056484bd62090ad3aa1e|fc54b2fa-20df-ff10-2d36-5d26c1c9ae0a",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-59-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-59-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1694526387567
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".number-item",
                "originalId": "64f9056484bd62090ad3aa1e|bd95391a-e362-eb68-3967-2c669d7557b0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".number-item",
                "originalId": "64f9056484bd62090ad3aa1e|bd95391a-e362-eb68-3967-2c669d7557b0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526568100
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".number-item",
                "originalId": "64f9056484bd62090ad3aa1e|bd95391a-e362-eb68-3967-2c669d7557b0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".number-item",
                "originalId": "64f9056484bd62090ad3aa1e|bd95391a-e362-eb68-3967-2c669d7557b0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694526568101
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65006348133d806e7f09f75c|79909c63-356f-38e4-d2a9-26c2c8f4b339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65006348133d806e7f09f75c|79909c63-356f-38e4-d2a9-26c2c8f4b339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694529515988
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65006348133d806e7f09f75c|79909c63-356f-38e4-d2a9-26c2c8f4b339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65006348133d806e7f09f75c|79909c63-356f-38e4-d2a9-26c2c8f4b339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694529515988
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0032d911-5457-c8c4-89ad-ee8a913a5cb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0032d911-5457-c8c4-89ad-ee8a913a5cb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-62-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1694559708048
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|4184e286-6c2a-eb10-6ecb-2ff4d4b7bfea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|4184e286-6c2a-eb10-6ecb-2ff4d4b7bfea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 30,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694601746201
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3771b5a7-2232-61d2-dfa2-643cf10d07ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3771b5a7-2232-61d2-dfa2-643cf10d07ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694612016549
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3771b5a7-2232-61d2-dfa2-643cf10d07ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3771b5a7-2232-61d2-dfa2-643cf10d07ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694612016550
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-65-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694613075253
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".wrap-rest-team",
                "originalId": "64f9056484bd62090ad3aa1e|5a2fb3b7-faaf-7ebd-d735-618a57edc03b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".wrap-rest-team",
                "originalId": "64f9056484bd62090ad3aa1e|5a2fb3b7-faaf-7ebd-d735-618a57edc03b",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-66-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-66-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1694618122558
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".wrap-rest-team",
                "originalId": "64f9056484bd62090ad3aa1e|5a2fb3b7-faaf-7ebd-d735-618a57edc03b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".wrap-rest-team",
                "originalId": "64f9056484bd62090ad3aa1e|5a2fb3b7-faaf-7ebd-d735-618a57edc03b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694618180329
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".wrap-rest-team",
                "originalId": "64f9056484bd62090ad3aa1e|5a2fb3b7-faaf-7ebd-d735-618a57edc03b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".wrap-rest-team",
                "originalId": "64f9056484bd62090ad3aa1e|5a2fb3b7-faaf-7ebd-d735-618a57edc03b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694618180330
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".pointer-blur",
                "originalId": "64f9056484bd62090ad3aa1e|0c170b8c-d7fe-e05d-ce83-ac0a376ddea1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".pointer-blur",
                "originalId": "64f9056484bd62090ad3aa1e|0c170b8c-d7fe-e05d-ce83-ac0a376ddea1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694618255426
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".pointer-blur",
                "originalId": "64f9056484bd62090ad3aa1e|0c170b8c-d7fe-e05d-ce83-ac0a376ddea1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".pointer-blur",
                "originalId": "64f9056484bd62090ad3aa1e|0c170b8c-d7fe-e05d-ce83-ac0a376ddea1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694618255427
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".hero-cube-item",
                "originalId": "64f9056484bd62090ad3aa1e|9819c922-a05a-e8ef-b43d-fcae9092163a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".hero-cube-item",
                "originalId": "64f9056484bd62090ad3aa1e|9819c922-a05a-e8ef-b43d-fcae9092163a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694618986139
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".hero-cube-item",
                "originalId": "64f9056484bd62090ad3aa1e|9819c922-a05a-e8ef-b43d-fcae9092163a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".hero-cube-item",
                "originalId": "64f9056484bd62090ad3aa1e|9819c922-a05a-e8ef-b43d-fcae9092163a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694618986141
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f9056484bd62090ad3aa1e|24eb0543-887e-96e7-e706-2fee8ebd6aba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f9056484bd62090ad3aa1e|24eb0543-887e-96e7-e706-2fee8ebd6aba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-69-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1694700598144
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65006348133d806e7f09f75c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65006348133d806e7f09f75c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695428778915
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65006348133d806e7f09f75c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65006348133d806e7f09f75c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695428778916
        }
    },
    "actionLists": {
        "a-5": {
            "id": "a-5",
            "title": "Navbar [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x2",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "3e4ec662-00bf-9459-9b2e-7c7293980ea7"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-5-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x1",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "8b248d02-9902-4068-b774-be5c8708f4e4"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-5-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x1",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "8b248d02-9902-4068-b774-be5c8708f4e4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x2",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "3e4ec662-00bf-9459-9b2e-7c7293980ea7"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x1",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "8b248d02-9902-4068-b774-be5c8708f4e4"]
                        },
                        "yValue": 3.5,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x2",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "3e4ec662-00bf-9459-9b2e-7c7293980ea7"]
                        },
                        "yValue": -3.5,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-28",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-17",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 250,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x1",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "8b248d02-9902-4068-b774-be5c8708f4e4"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-5-n-18",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 250,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x2",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "3e4ec662-00bf-9459-9b2e-7c7293980ea7"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-5-n-25",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694103729249
        },
        "a-6": {
            "id": "a-6",
            "title": "Navbar [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-15",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x2",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "3e4ec662-00bf-9459-9b2e-7c7293980ea7"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x1",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "8b248d02-9902-4068-b774-be5c8708f4e4"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-6-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {},
                        "xValue": null,
                        "yValue": 100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 250,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x1",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "8b248d02-9902-4068-b774-be5c8708f4e4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 250,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-menu.x2",
                            "selectorGuids": ["f2594381-55c3-1cff-7deb-0f0d59da69af", "3e4ec662-00bf-9459-9b2e-7c7293980ea7"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694103729249
        },
        "a-15": {
            "id": "a-15",
            "title": "Cube Item [Top Left]",
            "continuousParameterGroups": [{
                "id": "a-15-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-15-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": -2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-15-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "yValue": 30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-15-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-15-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-15-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-15-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-15-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-15-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-15-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-15-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "yValue": -30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-15-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-15-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-15-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }]
            }, {
                "id": "a-15-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-15-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-15-n-7",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": -30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-15-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-15-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694346146753
        },
        "a-17": {
            "id": "a-17",
            "title": "Cube Item [Top Right]",
            "continuousParameterGroups": [{
                "id": "a-17-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": -2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "yValue": 30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-17-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-17-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-17-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-17-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-17-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "yValue": -30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-17-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-17-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-17-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }]
            }, {
                "id": "a-17-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-15",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": -30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-17-n-17",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694346146753
        },
        "a-18": {
            "id": "a-18",
            "title": "Cube Item [Bottom Left]",
            "continuousParameterGroups": [{
                "id": "a-18-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-18-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": -2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-18-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "yValue": 30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-18-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-18-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-18-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-18-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-18-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-18-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-18-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "yValue": -30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-18-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-18-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-18-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }]
            }, {
                "id": "a-18-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-18-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-18-n-15",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": -30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-18-n-17",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694346146753
        },
        "a-19": {
            "id": "a-19",
            "title": "Cube Item [Bottom Rght]",
            "continuousParameterGroups": [{
                "id": "a-19-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": -2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "yValue": 30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-19-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-19-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-19-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-19-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-19-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-19-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -3,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-19-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "yValue": -30,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-19-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-front",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "f46e6077-1725-b18a-f4ce-d4c8cc3c4d25"]
                            },
                            "zValue": 6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-19-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero_cubes_embed-icon",
                                "selectorGuids": ["a4ece739-a305-6e4d-bbcb-c37069105ff5"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }, {
                        "id": "a-19-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cubes-side.is-back",
                                "selectorGuids": ["2011c5b1-2566-071c-4dd2-f21ae5896772", "b39b0a0f-e6ba-0b53-0594-c3446f70dcfa"]
                            },
                            "zValue": -6,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "rem"
                        }
                    }]
                }]
            }, {
                "id": "a-19-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-19-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-15",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": -30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-19-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-17",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 30,
                            "xUnit": "deg",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694346146753
        },
        "a-21": {
            "id": "a-21",
            "title": "Cube Item Top Right PHONE [While Scroll]",
            "continuousParameterGroups": [{
                "id": "a-21-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-21-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-21-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-21-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-21-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": -1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-21-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": -15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-21-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-20": {
            "id": "a-20",
            "title": "Cube Item Top left PHONE [While Scroll]",
            "continuousParameterGroups": [{
                "id": "a-20-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-20-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": -1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": -15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-20-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-20-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-20-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-22": {
            "id": "a-22",
            "title": "Cube Item Bottom Left PHONE [While Scroll] 2",
            "continuousParameterGroups": [{
                "id": "a-22-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": -1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-22-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-22-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": -15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-22-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-23": {
            "id": "a-23",
            "title": "Cube Item Bottom Right PHONE [While Scroll] 3",
            "continuousParameterGroups": [{
                "id": "a-23-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-23-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-23-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-23-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": -1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": -15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-23-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 0.7,
                            "yValue": 0.7,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-24": {
            "id": "a-24",
            "title": "Cube Item Top left TABLET [While Scroll] 2",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": -1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": -15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-24-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-1",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "5ad7be81-3f04-c227-5a73-02e71d2d040e"]
                            },
                            "xValue": 15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-25": {
            "id": "a-25",
            "title": "Cube Item Top Right TABLET [While Scroll]",
            "continuousParameterGroups": [{
                "id": "a-25-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-25-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-25-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": 15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-25-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": -1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-25-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-2",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "b0f56b7d-806c-8674-6a3e-5dbe2d725557"]
                            },
                            "xValue": -15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-26": {
            "id": "a-26",
            "title": "Cube Item Bottom Left TABLET [While Scroll] 3",
            "continuousParameterGroups": [{
                "id": "a-26-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-26-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": -1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-26-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-3",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "a9d93980-6843-4e89-fa9e-b5e75e19cbe1"]
                            },
                            "xValue": -15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-27": {
            "id": "a-27",
            "title": "Cube Item Bottom Right TABLET [While Scroll] 4",
            "continuousParameterGroups": [{
                "id": "a-27-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-27-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 1,
                            "yValue": -1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-27-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": 15,
                            "yValue": 15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-27-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": -1,
                            "yValue": 1,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-27-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-cube-item.is-4",
                                "selectorGuids": ["12ca310b-43a2-23ca-47a8-6d253f861f54", "9f31e0c6-2f6d-655c-ec96-4a9ecf327b9b"]
                            },
                            "xValue": -15,
                            "yValue": -15,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1694349187664
        },
        "a-28": {
            "id": "a-28",
            "title": "Number-text-apparition",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".number-text",
                            "selectorGuids": ["874e10a1-0dff-06ce-9589-6fc3f181ba7c"]
                        },
                        "yValue": 2,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".number-text",
                            "selectorGuids": ["874e10a1-0dff-06ce-9589-6fc3f181ba7c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".number-text",
                            "selectorGuids": ["874e10a1-0dff-06ce-9589-6fc3f181ba7c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".number-text",
                            "selectorGuids": ["874e10a1-0dff-06ce-9589-6fc3f181ba7c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694361688419
        },
        "a-29": {
            "id": "a-29",
            "title": "Button Secondary [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-button",
                            "selectorGuids": ["370b4fe0-b461-3391-df6a-9dd2f4d7b4ee"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-button",
                            "selectorGuids": ["370b4fe0-b461-3391-df6a-9dd2f4d7b4ee"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694369413043
        },
        "a-30": {
            "id": "a-30",
            "title": "Button Secondary [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-button",
                            "selectorGuids": ["370b4fe0-b461-3391-df6a-9dd2f4d7b4ee"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-button",
                            "selectorGuids": ["370b4fe0-b461-3391-df6a-9dd2f4d7b4ee"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694369413043
        },
        "a-31": {
            "id": "a-31",
            "title": "Navlink [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694369817347
        },
        "a-32": {
            "id": "a-32",
            "title": "Navlink [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694369817347
        },
        "a-35": {
            "id": "a-35",
            "title": "Move Top Into View",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-35-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1690900715207
        },
        "a-37": {
            "id": "a-37",
            "title": "Process Mobile [Whille scroll]",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-37-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x1",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "58b31a37-93d2-7d1d-65a9-d1a876f35673"]
                            },
                            "xValue": null,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-37-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x1",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "58b31a37-93d2-7d1d-65a9-d1a876f35673"]
                            },
                            "xValue": null,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x2",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "a0452911-a1ef-04d4-7505-590a11df3197"]
                            },
                            "xValue": null,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-37-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x2",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "a0452911-a1ef-04d4-7505-590a11df3197"]
                            },
                            "xValue": null,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x3",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "47106dd8-08f9-1d79-2c7c-6b59d253faf6"]
                            },
                            "xValue": null,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-21",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-37-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x3",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "47106dd8-08f9-1d79-2c7c-6b59d253faf6"]
                            },
                            "xValue": null,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1694433545805
        },
        "a-38": {
            "id": "a-38",
            "title": "Move [review",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".review-row.x1",
                            "selectorGuids": ["5c9424fb-ef64-1131-cf21-5abf62e67714", "d3fc162a-0bbe-fc58-25c0-b63e086fdc5d"]
                        },
                        "xValue": -156.25,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".review-row.x2",
                            "selectorGuids": ["5c9424fb-ef64-1131-cf21-5abf62e67714", "d00341ef-4a0b-e749-74cf-bd922c32a47c"]
                        },
                        "xValue": 156.25,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 60000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".review-row.x1",
                            "selectorGuids": ["5c9424fb-ef64-1131-cf21-5abf62e67714", "d3fc162a-0bbe-fc58-25c0-b63e086fdc5d"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 60000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".review-row.x2",
                            "selectorGuids": ["5c9424fb-ef64-1131-cf21-5abf62e67714", "d00341ef-4a0b-e749-74cf-bd922c32a47c"]
                        },
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".review-row.x2",
                            "selectorGuids": ["5c9424fb-ef64-1131-cf21-5abf62e67714", "d00341ef-4a0b-e749-74cf-bd922c32a47c"]
                        },
                        "xValue": 156.25,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".review-row.x1",
                            "selectorGuids": ["5c9424fb-ef64-1131-cf21-5abf62e67714", "d3fc162a-0bbe-fc58-25c0-b63e086fdc5d"]
                        },
                        "xValue": -156.25,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694444391447
        },
        "a-39": {
            "id": "a-39",
            "title": "Fade-in-industry",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8c2"
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8c2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8c2"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "be11c198-b5fb-6c77-5c09-b2b8119ee8c2"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694448805597
        },
        "a-40": {
            "id": "a-40",
            "title": "Move Top Into View 2",
            "continuousParameterGroups": [{
                "id": "a-40-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-40-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-40-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "19980616-b9eb-b4e0-7682-061bf28aa1a6"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1690900715207
        },
        "a-41": {
            "id": "a-41",
            "title": "Dropdown [Open] 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef0108f"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list-inner",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01092"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-41-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list-inner",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01092"]
                        },
                        "yValue": 2,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef0108f"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef0108f"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list-inner",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01092"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-41-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list-inner",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01092"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1690900784885
        },
        "a-42": {
            "id": "a-42",
            "title": "Dropdown [Close] 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef0108f"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef0108f"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-42-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list-inner",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01092"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list-inner",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01092"]
                        },
                        "yValue": 2,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown---list",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef0108f"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1690901073441
        },
        "a-43": {
            "id": "a-43",
            "title": "Dropdown Sign [Open] 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".plus---horizontal",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01097"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".pls",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01091"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1690901268094
        },
        "a-44": {
            "id": "a-44",
            "title": "Dropdown Sign [Close] 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "selector": ".plus---horizontal",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01097"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 750,
                        "target": {
                            "selector": ".pls",
                            "selectorGuids": ["bbad710e-ce82-e07b-84ae-cc54aef01091"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1690901361376
        },
        "a-45": {
            "id": "a-45",
            "title": "Footer-link [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694369817347
        },
        "a-46": {
            "id": "a-46",
            "title": "Footer link [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-46-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".border-navlink",
                            "selectorGuids": ["b7d9ee51-b3dd-cfc6-21f5-8aff1ff01ddb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694369817347
        },
        "a-48": {
            "id": "a-48",
            "title": "Navbar Apparition",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694469830505
        },
        "a-47": {
            "id": "a-47",
            "title": "Navbar Dispariton",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480"
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694469781944
        },
        "a-49": {
            "id": "a-49",
            "title": "Team Parralax",
            "continuousParameterGroups": [{
                "id": "a-49-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-49-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-49-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1694516385401
        },
        "a-50": {
            "id": "a-50",
            "title": "Pointer",
            "continuousParameterGroups": [{
                "id": "a-50-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-50-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer",
                                "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-50-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer",
                                "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-50-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-50-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer",
                                "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-50-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer",
                                "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1694524917951
        },
        "a-51": {
            "id": "a-51",
            "title": "Blur - Pointer [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "0e41",
                            "value": 30,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525103054
        },
        "a-52": {
            "id": "a-52",
            "title": "Blur - Pointer [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "0e41",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525103054
        },
        "a-53": {
            "id": "a-53",
            "title": "Process - Pointer [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-gradient-process",
                            "selectorGuids": ["5deacf89-fc79-34a4-f14c-cb4cf252e74e"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-53-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-53-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-gradient-process",
                            "selectorGuids": ["5deacf89-fc79-34a4-f14c-cb4cf252e74e"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-53-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-53-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e"]
                        },
                        "globalSwatchId": "17cf70a5",
                        "rValue": 22,
                        "bValue": 21,
                        "gValue": 22,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694525304371
        },
        "a-54": {
            "id": "a-54",
            "title": "Process - Pointer [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-gradient-process",
                            "selectorGuids": ["5deacf89-fc79-34a4-f14c-cb4cf252e74e"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525304371
        },
        "a-55": {
            "id": "a-55",
            "title": "Pointer - Scale Down [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525619627
        },
        "a-56": {
            "id": "a-56",
            "title": "Pointer - Scale Down [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525619627
        },
        "a-57": {
            "id": "a-57",
            "title": "Heading Span - BG [Mouse IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-span",
                            "selectorGuids": ["4f581ac1-b7e3-3af0-0cee-9ede532de9d7"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.15
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-span",
                            "selectorGuids": ["4f581ac1-b7e3-3af0-0cee-9ede532de9d7"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 149,
                        "gValue": 221,
                        "aValue": 0.15
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694525978031
        },
        "a-58": {
            "id": "a-58",
            "title": "Heading Span - BG [Mouse OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-span",
                            "selectorGuids": ["4f581ac1-b7e3-3af0-0cee-9ede532de9d7"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.15
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525978031
        },
        "a-59": {
            "id": "a-59",
            "title": "Team [Mouse in view]",
            "continuousParameterGroups": [{
                "id": "a-59-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-59-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "xValue": -2,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-59-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "xValue": 2,
                            "yValue": null,
                            "xUnit": "rem",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-59-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-59-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "yValue": -2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-59-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1694526392082
        },
        "a-60": {
            "id": "a-60",
            "title": "Pointer - Scale Down [Mouse IN] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525619627
        },
        "a-61": {
            "id": "a-61",
            "title": "Pointer - Scale Down [Mouse OUT] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["de14f0a6-ee1d-1567-8cd4-d3ec41fdb8a0"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694525619627
        },
        "a-62": {
            "id": "a-62",
            "title": "Schema 4",
            "continuousParameterGroups": [{
                "id": "a-62-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-62-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.gmail",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740e"]
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.google_ads",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740a"]
                            },
                            "xValue": -175,
                            "yValue": 100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.slack",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157405"]
                            },
                            "xValue": -175,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.instagram",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740f"]
                            },
                            "xValue": 0,
                            "yValue": -200,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.notion",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157413"]
                            },
                            "xValue": 175,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.excel",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157412"]
                            },
                            "xValue": 175,
                            "yValue": 100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.airtable",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157407"]
                            },
                            "xValue": 0,
                            "yValue": 400,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.twitter",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740b"]
                            },
                            "xValue": -350,
                            "yValue": 200,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.facebook",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157402"]
                            },
                            "xValue": -350,
                            "yValue": -200,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.youtube",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157414"]
                            },
                            "yValue": -400,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.linkedin",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d211573fe"]
                            },
                            "xValue": 350,
                            "yValue": -200,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.google_analytics",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157403"]
                            },
                            "xValue": 350,
                            "yValue": 200,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-13",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_circle_stroke",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f9"]
                            },
                            "xValue": 0.2,
                            "yValue": 0.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-62-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_circle_stroke",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f9"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-62-n-15",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_line_schema",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573fc"]
                            },
                            "xValue": 0.2,
                            "yValue": 0.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-62-n-16",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_line_schema",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573fc"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-62-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_line_schema",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573fc"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-62-n-18",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_line_schema",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573fc"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-62-n-19",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_circle_stroke",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-62-n-20",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".holder_circle_stroke",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f9"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-62-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.gmail",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740e"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.google_ads",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740a"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.slack",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157405"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.instagram",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740f"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.notion",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157413"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.excel",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157412"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-62-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.airtable",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157407"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-28",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.twitter",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d2115740b"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.facebook",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157402"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-30",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.youtube",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157414"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-31",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.linkedin",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d211573fe"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-62-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".schema_logo_wrap.google_analytics",
                                "selectorGuids": ["f65d625e-ea78-2cfc-928a-d49d211573f3", "f65d625e-ea78-2cfc-928a-d49d21157403"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1692216369476
        },
        "a-36": {
            "id": "a-36",
            "title": "Process [Whille scroll]",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-36-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x1",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e40aa739-15f6-b686-053d-42f7468dfc46"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x1",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "58b31a37-93d2-7d1d-65a9-d1a876f35673"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-36-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x2",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "635cc9b6-5d8b-f643-6112-8185fe51cdbd"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x1",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "58b31a37-93d2-7d1d-65a9-d1a876f35673"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x2",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "a0452911-a1ef-04d4-7505-590a11df3197"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-36-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x3",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "e03c55c0-9eb2-d0d0-dc83-742c6303d33f"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "yValue": 2,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x2",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "a0452911-a1ef-04d4-7505-590a11df3197"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x3",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "47106dd8-08f9-1d79-2c7c-6b59d253faf6"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".process-item.x4",
                                "selectorGuids": ["942d7b20-1ac0-1703-4116-f0b74b79a93e", "85b301ca-38dd-f349-987a-1d46ae1498d6"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".line-process.x3",
                                "selectorGuids": ["6bd2553c-69df-bcf1-e867-59a1c909b9e2", "47106dd8-08f9-1d79-2c7c-6b59d253faf6"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1694433545805
        },
        "a-63": {
            "id": "a-63",
            "title": "Nav Dropdown [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-navlink",
                            "selectorGuids": ["9945d60a-e6a4-78fe-6eb3-489ecaeb2922"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-63-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-link-dropdown",
                            "selectorGuids": ["2a3769b4-f1aa-80eb-1d56-b5d8b0dbfb39"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-63-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-link-dropdown",
                            "selectorGuids": ["2a3769b4-f1aa-80eb-1d56-b5d8b0dbfb39"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-navlink",
                            "selectorGuids": ["9945d60a-e6a4-78fe-6eb3-489ecaeb2922"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-63-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-link-dropdown",
                            "selectorGuids": ["2a3769b4-f1aa-80eb-1d56-b5d8b0dbfb39"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-63-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-link-dropdown",
                            "selectorGuids": ["2a3769b4-f1aa-80eb-1d56-b5d8b0dbfb39"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1694612020914
        },
        "a-64": {
            "id": "a-64",
            "title": "Nav Dropdown [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon-navlink",
                            "selectorGuids": ["9945d60a-e6a4-78fe-6eb3-489ecaeb2922"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-64-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-link-dropdown",
                            "selectorGuids": ["2a3769b4-f1aa-80eb-1d56-b5d8b0dbfb39"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-link-dropdown",
                            "selectorGuids": ["2a3769b4-f1aa-80eb-1d56-b5d8b0dbfb39"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1694612020914
        },
        "a-65": {
            "id": "a-65",
            "title": "Nav change bg",
            "continuousParameterGroups": [{
                "id": "a-65-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 9,
                    "actionItems": [{
                        "id": "a-65-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480"
                            },
                            "globalSwatchId": "",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-65-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "7cc1d65e-bc2c-2296-f414-c8abfc77f480"
                            },
                            "globalSwatchId": "b8664ee0",
                            "rValue": 8,
                            "bValue": 8,
                            "gValue": 8,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1694613081529
        },
        "a-66": {
            "id": "a-66",
            "title": "Picture rest Of team [Mouse Move]",
            "continuousParameterGroups": [{
                "id": "a-66-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-66-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "xValue": -1,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-66-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "xValue": 1,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-66-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-66-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "yValue": -1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-66-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".img-team",
                                "selectorGuids": ["37798711-66b6-e078-3903-9c7fab14b0c1"]
                            },
                            "yValue": 1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1694618132359
        },
        "a-69": {
            "id": "a-69",
            "title": "Section Explain [While Scroll]",
            "continuousParameterGroups": [{
                "id": "a-69-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-69-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-explain",
                                "selectorGuids": ["f26a94ae-5afa-f2e1-c308-8d7521478bf8"]
                            },
                            "yValue": -25,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-69-n-3",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-explain",
                                "selectorGuids": ["f26a94ae-5afa-f2e1-c308-8d7521478bf8"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "774e",
                                "value": 0,
                                "unit": "px"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-69-n-4",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-explain",
                                "selectorGuids": ["f26a94ae-5afa-f2e1-c308-8d7521478bf8"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "6e2c",
                                "value": 0,
                                "unit": "px"
                            }]
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-69-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-explain",
                                "selectorGuids": ["f26a94ae-5afa-f2e1-c308-8d7521478bf8"]
                            },
                            "yValue": 25,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-69-n-5",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-explain",
                                "selectorGuids": ["f26a94ae-5afa-f2e1-c308-8d7521478bf8"]
                            },
                            "filters": [{
                                "type": "blur",
                                "filterId": "fd56",
                                "value": 20,
                                "unit": "px"
                            }]
                        }
                    }]
                }]
            }],
            "createdOn": 1694700606451
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});