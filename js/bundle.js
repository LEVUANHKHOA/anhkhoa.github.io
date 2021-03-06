! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).toggle = t()
}(this, (function() {
    "use strict";

    function e(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
        }
        return n
    }

    function n(n) {
        for (var o = 1; o < arguments.length; o++) {
            var r = null != arguments[o] ? arguments[o] : {};
            o % 2 ? t(Object(r), !0).forEach((function(t) {
                e(n, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return n
    }

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (t.matches(e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    });
    var r = function(e) {
            return document.querySelector(e)
        },
        i = function(e) {
            return document.querySelectorAll(e)
        },
        a = !1,
        l = !1,
        s = [],
        c = null,
        u = null,
        d = null,
        v = [],
        g = null,
        p = function(e) {
            var t = e.code;
            return "ArrowDown" === t || "ArrowUp" === t || "Tab" === t || "Escape" === t || 16 === t
        },
        f = function(e) {
            var t = e.matches;
            !t || !1 !== d && null !== d || (d = !0, m()), t || !0 !== d && null !== d || (d = !1, m())
        },
        m = function() {
            document.addEventListener("pointerover", c, !1)
        };

    function h(e, t, n, o) {
        var r, a, l;
        s = [].slice.call(i(e)), r = function(e) {
                return function(t) {
                    null !== u && u === t.pointerType && d && "touch" === u || !d && "mouse" === u || (u = d ? "touch" : t.pointerType, e(u), document.removeEventListener("pointerover", c, !1))
                }
            }(o), a = 100, c = function() {
                var e = this,
                    t = arguments,
                    n = function() {
                        l = !1
                    };
                l || (r.apply(e, t), l = !0, setTimeout(n, a))
            }, m(),
            function(e, t) {
                t && "function" == typeof t || console.error("Must be a function");
                var n = window.matchMedia(e).matches,
                    o = window.matchMedia(e);
                return o.addListener(t), t(o), n
            }(t, n) && (d = !0)
    }
    var b = function(e) {
            var t = window.getComputedStyle(e.value, null),
                n = t.getPropertyValue("transition-duration"),
                o = t.getPropertyValue("transition-property");
            return {
                exist: "drop" === e.type && "0s" !== n,
                animation: o
            }
        },
        y = function(e, t) {
            var n = e.nextElementSibling;
            if (!t) return n;
            for (; n;) {
                if (n.matches(t)) return n;
                n = n.nextElementSibling
            }
        },
        L = function(e, t, n) {
            return e === t || e === r(t.getAttribute(n))
        },
        E = function(e, t, n, o, r, i, a, l) {
            var s = t.classList.contains(o),
                c = !!t.hasAttribute(l) && t.hasAttribute(l);
            return {
                type: e,
                value: t,
                role: n || "default",
                active: s,
                isAnimate: "drop" === e && c,
                eventType: r,
                tabActive: "tab" === n && s && L(t, i, a)
            }
        },
        w = function(e, t, n, a, l, s, c, u, d) {
            return [].slice.call(i("[".concat(s, '="').concat(n, '"]'))).filter((function(n) {
                return n !== e && n.classList.contains(t)
            })).reduce((function(n, i) {
                var s = u ? y(i, i.getAttribute(l)) : r(i.getAttribute(l)),
                    v = E("toggle", i, a, t, c, e, l, null),
                    g = E("drop", s, a, t, c, e, l, d);
                return [].concat(o(n), [v, g])
            }), [])
        },
        A = function(e, t, n, o, r, a, l, s) {
            return r ? [E("toggle", e, o, t, l, e, a, null)] : [].slice.call(i("[".concat(a, '="').concat(n, '"]'))).map((function(n) {
                return E("toggle", n, o, t, l, e, a, null)
            }))
        },
        k = function(e, t, n, o, r, a, l, s) {
            return r ? [E("drop", y(e, n), o, t, l, e, a, s)] : [].slice.call(i(n)).map((function(n) {
                return E("drop", n, o, t, l, e, a, s)
            }))
        },
        O = function(e, t, n, o, r, i) {
            function s(t) {
                e.value.removeEventListener("transitionend", s), e.value.classList.remove(n), a = !1
            }

            function c(t) {
                e.value.removeEventListener("transitionend", c), l = !1, e.value.enterLocked = !1, v.length > 0 && D(e) && V(r)
            }
            o === S || o !== S && !e.active ? function(e) {
                l = !0, e.value.removeAttribute("data-toggle-hidden", !0), "overlay" === e.role && N(i), window.requestAnimationFrame((function() {
                    e.value.classList.add(n), window.requestAnimationFrame((function() {
                        e.value.classList.add(t), e.value.addEventListener("transitionend", c)
                    }))
                }))
            }(e) : (o === T || o !== S && e.active) && function(e) {
                "tab" === e.role ? (e.value.classList.remove(t), e.value.classList.remove(n)) : (e.value.setAttribute("data-toggle-hidden", !0), "overlay" === e.role && B(i), e.value.addEventListener("transitionend", s), e.value.classList.remove(t), a = !0)
            }(e)
        },
        C = function(e, t, n, o) {
            function r(t) {
                t.target.removeEventListener("transitionend", r), c(t.target), v.length > 0 && D(e) && V(o)
            }

            function i(e) {
                e.target.removeEventListener("transitionend", i), s(e.target)
            }
            var s = function(e) {
                    e.classList.remove(t), e.classList.remove(n), e.style.height = null, a = !1
                },
                c = function(e) {
                    e.classList.remove(t), e.style.height = null, l = !1
                };
            return e.active ? function(e) {
                a = !0;
                var n = e.value.scrollHeight;
                e.value.setAttribute("data-toggle-hidden", !0), window.requestAnimationFrame((function() {
                    e.value.style.height = n + "px", e.value.classList.add(t), window.requestAnimationFrame((function() {
                        e.value.addEventListener("transitionend", i), e.value.style.height = "0px"
                    }))
                }))
            }(e) : function(e) {
                l = !0, e.value.classList.add(n), e.value.classList.add(t);
                var o = e.value.scrollHeight;
                e.value.style.height = o + "px", e.value.removeAttribute("data-toggle-hidden", !0), e.value.addEventListener("transitionend", r)
            }(e)
        },
        x = function(e) {
            if ("toggle" !== e.type) {
                e.value.setAttribute("style", "position: absolute; visibility: hidden; display: block; pointer-events: none"), e.value.classList.remove("is--position-bottom", "is--position-top", "is--position-left", "is--position-right");
                var t, n, o, r = (t = e.value, n = t.getBoundingClientRect(), (o = {}).top = n.top < 0, o.left = n.left < 0, o.bottom = n.bottom > (window.innerHeight || document.documentElement.clientHeight), o.right = n.right > (window.innerWidth || document.documentElement.clientWidth), o.any = o.top || o.left || o.bottom || o.right, o.all = o.top && o.left && o.bottom && o.right, o);
                e.value.removeAttribute("style"), r.top && (e.value.classList.add("is--position-bottom"), e.value.classList.remove("is--position-top")), r.bottom && (e.value.classList.add("is--position-top"), e.value.classList.remove("is--position-bottom")), r.left && (e.value.classList.add("is--position-left"), e.value.classList.remove("is--position-right")), r.right && (e.value.classList.add("is--position-right"), e.value.classList.remove("is--position-left"))
            }
        },
        P = window.PointerEvent ? {
            end: "pointerup",
            enter: "pointerenter",
            leave: "pointerleave"
        } : {
            end: "touchend",
            enter: "mouseenter",
            leave: "mouseleave"
        },
        S = P.enter,
        T = P.leave,
        j = [S, T],
        q = function(e, t, n) {
            return {
                item: e.querySelector(n),
                type: t
            }
        },
        M = function(e, t, n) {
            var o = !("drop" !== e.type || !e.value.hasAttribute(t)) && e.value.querySelectorAll("[required]");
            if (!o) return !1;
            if (o) {
                var r = 0 !== [].slice.call(o).filter((function(e) {
                    return !e.checkValidity()
                })).length && r;
                return r ? (r[0].focus(), r[0].classList.add(n), setTimeout((function() {
                    var e = r[0].getBoundingClientRect().top;
                    window.scrollBy({
                        top: e,
                        left: 0,
                        behavior: "smooth"
                    })
                }), 250), !0) : (o.forEach((function(e) {
                    return e.classList.contains(n) && e.classList.remove(n)
                })), !1)
            }
        },
        H = function(e, t, n, o) {
            if (v.forEach((function(e) {
                    return e.element.classList.contains(o) && e.element.classList.remove(o)
                })), v.length > 0 && !v[0].element.contains(t))
                for (var r = 0; r < v.length; r++) v.pop();
            if (e.active) {
                if (e.active)
                    for (r = 0; r < v.length; r++)
                        if (v[r].element === e.value) {
                            1 === v.length && v[0].element.removeEventListener("keydown", n), v.splice(r, 1);
                            break
                        }
            } else {
                var i = {
                    active: t,
                    element: e.value
                };
                v.push(i)
            }
        },
        V = function(e) {
            var t = v.length;
            v[t - 1].element.classList.add(e), (g = [].slice.call(v[0].element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary')).filter((function(e) {
                return function e(t) {
                    var n = window.getComputedStyle(t);
                    return "none" !== n.display && "hidden" !== n.visibility && (!t.parentElement || e(t.parentElement))
                }(e)
            }))).unshift(v[0].active), 1 === t && g[1].focus()
        },
        D = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.eventType;
            return ("click" === t || "keydown" === t) && "drop" === e.type && "tab" !== e.role && "accordion" !== e.role
        },
        N = function(e) {
            return e.classList.add("is--overlay")
        },
        B = function(e) {
            return e.classList.remove("is--overlay")
        },
        G = {
            selectorToggle: "[data-toggle]",
            selectorTogglePrevent: "[data-toggle-prevent]",
            selectorGlobal: "[data-toggle-global]",
            selectorGroup: "[data-toggle-group]",
            selectorValidate: "[data-toggle-validate]",
            selectorRole: "[data-toggle-role]",
            selectorBack: "[data-toggle-back]",
            selectorNext: "[data-toggle-next]",
            selectorAnimate: "[data-toggle-animate]",
            selectorHover: "[data-toggle-hover]",
            toggleActiveClass: "is--active",
            toggleErrorClass: "is--error",
            toggleCollapseClass: "is--collapsing",
            toggleShowClass: "is--show",
            toggleCurrentClass: "is--current",
            onHover: !1,
            onMediaQuery: "(max-width: 992px)",
            disableIfMedia: "[data-toggle-media]",
            disableIfNotMedia: "[data-toggle-not-media]",
            stopVideo: !0,
            callbackOpen: !1,
            callbackClose: !1,
            callbackToggle: !1
        };
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = n({}, G, {}, e),
            c = t.selectorToggle,
            m = t.selectorTogglePrevent,
            y = t.selectorGlobal,
            L = t.selectorGroup,
            E = t.selectorValidate,
            P = t.selectorRole,
            I = t.selectorBack,
            R = t.selectorNext,
            F = t.selectorAnimate,
            Q = t.selectorHover,
            W = t.toggleActiveClass,
            K = t.toggleErrorClass,
            U = t.toggleCollapseClass,
            z = t.toggleShowClass,
            J = t.toggleCurrentClass,
            X = t.onHover,
            Y = t.onMediaQuery,
            Z = t.disableIfMedia,
            $ = t.disableIfNotMedia,
            _ = (t.stopVideo, t.callbackOpen),
            ee = t.callbackClose,
            te = t.callbackToggle,
            ne = t.splitselectorToggle,
            oe = void 0 === ne ? c.replace(/\[|\]/g, "") : ne,
            re = t.splitselectorTogglePrevent,
            ie = (void 0 === re && m.replace(/\[|\]/g, ""), t.splitselectorValidate),
            ae = void 0 === ie ? E.replace(/\[|\]/g, "") : ie,
            le = t.splitselectorGroup,
            se = void 0 === le ? L.replace(/\[|\]/g, "") : le,
            ce = t.splitselectorAnimate,
            ue = void 0 === ce ? F.replace(/\[|\]/g, "") : ce,
            de = t.splitselectorHover,
            ve = void 0 === de ? Q.replace(/\[|\]/g, "") : de,
            ge = t.splitselectorRole,
            pe = void 0 === ge ? P.replace(/\[|\]/g, "") : ge,
            fe = t.splitselectorBack,
            me = (void 0 === fe && I.replace(/\[|\]/g, ""), r("body")),
            he = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),
            be = function() {
                ye(), he && me.classList.add("is--ios"), X && h(Q, Y, f, Oe), Le()
            },
            ye = function() {
                he && me.classList.remove("is--ios"), document.removeEventListener("click", we, !1), document.removeEventListener("keydown", xe, !1), X && d && s.map((function(e) {
                    j.map((function(t) {
                        e.removeEventListener(t, ke)
                    }))
                }))
            },
            Le = function() {
                document.addEventListener("click", we, !1), document.addEventListener("keydown", xe, !1)
            },
            Ee = function(e) {
                return "mouse" === u && e.target.closest(c) && e.target.closest(c).parentElement.hasAttribute(ve) || e.target.closest(Z) && d || e.target.closest($) && !d
            },
            we = function(e) {
                Ee(e) || (e.target.closest(c) || e.target.closest(I) ? (e.preventDefault(), l || a || Pe(e)) : Me(e))
            },
            Ae = function(e) {
                return !e.target.matches(Q) || e.target.closest(Z) && d || e.target.closest($) && !d
            };

        function ke(e) {
            if (!Ae(e) && (e.type === S && (this.enterLocked = !0), this.enterLocked || e.type !== S)) {
                var t = q(e.target, e.type, c);
                t.active || Pe(t)
            }
        }
        var Oe = function(e) {
                "touch" === e && s.map((function(e) {
                    e.removeEventListener(S, ke, !1), e.removeEventListener(T, ke, !1)
                })), "mouse" === e && s.map((function(e) {
                    e.addEventListener(S, ke, !1), e.addEventListener(T, ke, !1)
                }))
            },
            Ce = function(e) {
                return !e.target.closest(c) || !e.target.closest(Q) || "Enter" !== e.code || e.target.closest(Z) && d || e.target.closest($) && !d
            },
            xe = function(e) {
                l || a || Ce(e) && !p(e) || (Ce(e) ? p(e) && v.length > 0 && qe(e) : (e.preventDefault(), Pe(e)))
            },
            Pe = function(e) {
                var t = e.target ? e.target.closest(c) || e.target.closest(I).parentNode.parentNode.querySelector(c) : e.item,
                    n = !!e.type && e.type;
                te && te(t);
                var r = t.getAttribute(oe),
                    i = t.getAttribute(se),
                    a = t.getAttribute(pe),
                    l = t.closest(R),
                    s = i ? w(t, W, i, a, oe, se, n, l, ue) : [],
                    u = A(t, W, r, a, l, oe, n),
                    d = k(t, W, r, a, l, oe, n, ue),
                    v = [].concat(o(s), o(u), o(d));
                if (!u[0].tabActive) {
                    var g = v.filter((function(e) {
                        return e.active && "drop" === e.type && e.value.hasAttribute(ae)
                    }));
                    if (g)
                        if (M(g, ae, K)) return;
                    for (var p = 0; p < v.length; p++) Se(v[p], U, W, n, t)
                }
            },
            Se = function(e, t, n, o, r) {
                var i = e.isAnimate,
                    a = b(e),
                    l = a.exist,
                    s = a.animation.match(/height/gi);
                D(e, o) && H(e, r, qe, J), i && s ? C(e, t, n, J) : i && l ? O(e, z, n, o, J, me) : e.active ? je(e) : Te(e)
            },
            Te = function(e) {
                _ && _(e), "tooltip" === e.role && x(e), "overlay" === e.role && N(me), e.value.classList.add(W), "toggle" === e.type && e.value.setAttribute("aria-expanded", !0), "drop" === e.type && e.value.removeAttribute("data-toggle-hidden", !0), v.length > 0 && D(e) && V(J)
            },
            je = function(e) {
                ee && ee(e), "overlay" === e.role && B(me), e.value.classList.remove(W), "toggle" === e.type && e.value.setAttribute("aria-expanded", !1), "drop" === e.type && e.value.setAttribute("data-toggle-hidden", !0)
            },
            qe = function(e) {
                var t = {
                        item: v[0].active,
                        type: e.type
                    },
                    n = g[1],
                    o = g[g.length - 1];
                "Tab" === e.code ? e.shiftKey ? document.activeElement === n && Pe(t) : document.activeElement === o && Pe(t) : "Escape" === e.code && (g[0].focus(), Pe(t))
            },
            Me = function(e) {
                var t = [].slice.call(i("".concat(y, ".").concat(W)));
                if (0 !== t.length && null === e.target.closest(t[0].getAttribute(oe))) {
                    var n = t.map((function(e) {
                        return r("".concat(e.getAttribute(oe), ".").concat(W))
                    }));
                    t.forEach((function(e) {
                        return e.classList.remove(W)
                    })), n.forEach((function(e) {
                        null !== e && (e.classList.remove(W), e.classList.contains(z) && e.classList.remove(z))
                    }))
                }
            };
        be()
    }
}));
