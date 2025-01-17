"use strict";
(() => {
    var m = "fs-attributes";
    var B = "cmsattribute";
    var T = "numbercount";
    var I = "support";
    var C = async (...t) => {
        var o;
        let e = [];
        for (let s of t) {
            let r = await ((o = window.fsAttributes[s]) == null ? void 0 : o.loading);
            e.push(r)
        }
        return e
    };
    var R = () => {};
    var y = t => t != null;
    var A = t => typeof t == "string",
        K = t => typeof t == "number";

    function h(t, e, o) {
        var r;
        let s = window.fsAttributes[t];
        return s.destroy = o || R, (r = s.resolve) == null || r.call(s, e), e
    }
    var O = (t, e = "1", o = "iife") => {
        let r = `${t}${o==="esm"?".esm":""}.js`;
        return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${r}`
    };
    var Q = `${m}-${I}`,
        D = async () => {
            var r;
            let {
                fsAttributes: t,
                location: e
            } = window, {
                host: o,
                searchParams: s
            } = new URL(e.href);
            return !o.includes("webflow.io") || !s.has(Q) ? !1 : (r = t.import) == null ? void 0 : r.call(t, I, "1")
        };
    var _ = t => {
        let e = (r, i, n) => {
            let c = t[r],
                {
                    key: a,
                    values: l
                } = c,
                u;
            if (!i) return `[${a}]`;
            let d = l == null ? void 0 : l[i];
            A(d) ? u = d : u = d(n && "instanceIndex" in n ? n.instanceIndex : void 0);
            let p = n && "caseInsensitive" in n && n.caseInsensitive ? "i" : "";
            if (!(n != null && n.operator)) return `[${a}="${u}"${p}]`;
            switch (n.operator) {
                case "prefixed":
                    return `[${a}^="${u}"${p}]`;
                case "suffixed":
                    return `[${a}$="${u}"${p}]`;
                case "contains":
                    return `[${a}*="${u}"${p}]`
            }
        };

        function o(r, i) {
            let n = e("element", r, i),
                c = (i == null ? void 0 : i.scope) || document;
            return i != null && i.all ? [...c.querySelectorAll(n)] : c.querySelector(n)
        }
        return [e, o, (r, i) => {
            let n = t[i];
            return n ? r.getAttribute(n.key) : null
        }]
    };
    var f = {
            preventLoad: {
                key: `${m}-preventload`
            },
            debugMode: {
                key: `${m}-debug`
            },
            src: {
                key: "src",
                values: {
                    finsweet: "@finsweet/attributes"
                }
            },
            dev: {
                key: `${m}-dev`
            }
        },
        [S, Bt] = _(f);
    var P = t => {
        let {
            currentScript: e
        } = document, o = {};
        if (!e) return {
            attributes: o,
            preventsLoad: !1
        };
        let r = {
            preventsLoad: A(e.getAttribute(f.preventLoad.key)),
            attributes: o
        };
        for (let i in t) {
            let n = e.getAttribute(t[i]);
            r.attributes[i] = n
        }
        return r
    };
    var L = ({
            scriptAttributes: t,
            attributeKey: e,
            version: o,
            init: s
        }) => {
            var c;
            Z(), (c = window.fsAttributes)[e] || (c[e] = {});
            let {
                preventsLoad: r,
                attributes: i
            } = P(t), n = window.fsAttributes[e];
            n.version = o, n.init = s, r || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => s(i)))
        },
        Z = () => {
            let t = tt();
            if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
                N(window.fsAttributes, t);
                return
            }
            let e = J(t);
            N(e, t), et(e), window.fsAttributes = e, window.FsAttributes = window.fsAttributes, D()
        },
        J = t => {
            let e = {
                cms: {},
                push(...o) {
                    var s, r;
                    for (let [i, n] of o)(r = (s = this[i]) == null ? void 0 : s.loading) == null || r.then(n)
                },
                async
                import (o, s) {
                    let r = e[o];
                    return r || new Promise(i => {
                        let n = document.createElement("script");
                        n.src = O(o, s), n.async = !0, n.onload = () => {
                            let [c] = N(e, [o]);
                            i(c)
                        }, document.head.append(n)
                    })
                },
                destroy() {
                    var o, s;
                    for (let r of t)(s = (o = window.fsAttributes[r]) == null ? void 0 : o.destroy) == null || s.call(o)
                }
            };
            return e
        },
        tt = () => {
            let t = S("src", "finsweet", {
                    operator: "contains"
                }),
                e = S("dev");
            return [...document.querySelectorAll(`script${t}, script${e}`)].reduce((r, i) => {
                var c;
                let n = i.getAttribute(f.dev.key) || ((c = i.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
                return n && !r.includes(n) && r.push(n), r
            }, [])
        },
        N = (t, e) => e.map(s => {
            let r = t[s];
            return r || (t[s] = {}, r = t[s], r.loading = new Promise(i => {
                r.resolve = n => {
                    i(n), delete r.resolve
                }
            }), r)
        }),
        et = t => {
            let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
            t.push(...e)
        };
    var M = "1.2.1";

    function x(t, e) {
        if (!t) return e != null ? e : null;
        let o = Number(t);
        return isNaN(o) ? e || null : o
    }
    var $ = "role";
    var g = "aria-roledescription",
        U = "aria-description";
    var Y = (t, e, o) => {
        t.setAttribute($, "marquee");
        let s = `Number count animation from ${e} to ${o}`;
        t.hasAttribute(g) || t.setAttribute(g, s), t.hasAttribute(U) || t.setAttribute(U, s)
    };
    var F = t => {
            let {
                textContent: e
            } = t;
            if (!e) return null;
            let o = Number(e);
            return isNaN(o) ? null : o
        },
        w = (t, e) => e ? t.toLocaleString(A(e) ? e : void 0) : t.toString();
    var V = (t, e, o, s, r) => {
        let i = null,
            n = c => {
                i === null && (i = c);
                let a = c - i,
                    l = Math.min(a / s, 1),
                    u = e + (o - e) * l;
                if (t.textContent = w(Math.floor(u), r), l < 1) {
                    requestAnimationFrame(n);
                    return
                }
                t.textContent = w(o, r)
            };
        requestAnimationFrame(n)
    };
    var k = ot;

    function ot(t, e, o) {
        var s = null,
            r = null,
            i = o && o.leading,
            n = o && o.trailing;
        i == null && (i = !0), n == null && (n = !i), i == !0 && (n = !1);
        var c = function() {
                s && (clearTimeout(s), s = null)
            },
            a = function() {
                var u = r;
                c(), u && u()
            },
            l = function() {
                var u = i && !s,
                    d = this,
                    p = arguments;
                if (r = function() {
                        return t.apply(d, p)
                    }, s || (s = setTimeout(function() {
                        if (s = null, n) return r()
                    }, e)), u) return u = !1, r()
            };
        return l.cancel = c, l.flush = a, l
    }
    var H = (t, e, o) => {
        let s = c => {
                window.innerHeight * (1 - e / 100) - c >= 0 && (n(), o())
            },
            r = k(async () => {
                let {
                    top: c
                } = t.getBoundingClientRect();
                s(c)
            }, 100),
            i = new IntersectionObserver(c => {
                for (let {
                        isIntersecting: a,
                        intersectionRect: l
                    } of c) window[a ? "addEventListener" : "removeEventListener"]("scroll", r), a && s(l.top)
            }),
            n = () => {
                i.disconnect(), window.removeEventListener("scroll", r)
            };
        return i.observe(t), n
    };
    var E = `fs-${T}`,
        nt = "number",
        st = "start",
        it = "end",
        ct = "duration",
        ut = "threshold",
        at = "locale",
        v = {
            element: {
                key: `${E}-element`,
                values: {
                    number: nt
                }
            },
            start: {
                key: `${E}-${st}`
            },
            end: {
                key: `${E}-${it}`
            },
            duration: {
                key: `${E}-${ct}`
            },
            threshold: {
                key: `${E}-${ut}`
            },
            locale: {
                key: `${E}-${at}`,
                values: {
                    auto: "auto"
                }
            }
        },
        [te, j, b] = _(v),
        q = 0,
        G = 1e3,
        X = 25;
    var z = t => {
        let e = b(t, "start"),
            o = b(t, "end"),
            s = b(t, "duration"),
            r = b(t, "threshold"),
            i = b(t, "locale"),
            n = x(o, F(t));
        if (!K(n)) return;
        let c = x(e, q),
            a = x(s, G),
            l = x(r, X),
            u = i ? i === v.locale.values.auto ? !0 : i : void 0;
        return Y(t, c, n), H(t, l, () => {
            V(t, c, n, a, u)
        })
    };
    var W = async () => {
        await C(B);
        let t = j("number", {
                operator: "prefixed",
                all: !0
            }),
            e = t.map(z).filter(y);
        return h(T, t, () => {
            for (let o of e) o()
        })
    };
    L({
        init: W,
        version: M,
        attributeKey: T
    });
})();