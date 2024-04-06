/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+o[a] < +n[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.1";
        var t = Object.create(null);
        s.migrateDisablePatches = function() {
            for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
        }, s.migrateEnablePatches = function() {
            for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
        }, s.migrateIsPatchEnabled = function(e) {
            return !t[e]
        }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var o = {};

        function u(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n, o), r
                },
                set: function(e) {
                    u(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function c(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            return a(e, t, r, n, o), 0
        }

        function i(e, t, r, n) {
            return a(e, t, r, n), 0
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
        var d, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        for (d in i(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
        c(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "$1")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), c(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function x(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        i(s.fn, "removeAttr", function(e) {
            var r = this,
                n = !1;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && r.each(function() {
                    if (!1 !== s(this).prop(t)) return !(n = !0)
                }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), i(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var Q, A, R = !1,
            C = /^[a-z]/,
            N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return R = !0, e = r.apply(this, arguments), R = !1, e
            })
        }), i(s, "swap", function(e, t, r, n) {
            var o, a, i = {};
            for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
            for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
            return o
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") ? (A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
            get: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        }, "css-number");
        var S, P, k, H, E = s.data;
        i(s, "data", function(e, t, r) {
            var n, o, a;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                return E.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments)
        }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function(e) {
            return e
        }, i(s.Tween.prototype, "run", function() {
            1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments)
        }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
            },
            set: function(e) {
                u("fx-interval", P), S = e
            }
        }));
        var M = s.fn.load,
            q = s.event.add,
            O = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, "event-old-patch"), i(s.event, "add", function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments)
        }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
            i(s.fn, t, function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }, "shorthand-removed-v3")
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            c(s.fn, r, function(e, t) {
                return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("ready-event", "'ready' event is deprecated")
            }
        }, c(s.fn, "bind", function(e, t, r) {
            return this.on(e, null, t, r)
        }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function(e, t) {
            return this.off(e, null, t)
        }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function(e, t, r, n) {
            return this.on(t, e, r, n)
        }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function(e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }, "pre-on-methods", "jQuery.fn.hover() is deprecated");

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.migrateEnablePatches("self-closed-tags")
        }, i(s, "htmlPrefilter", function(e) {
            var t, r;
            return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>")
        }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
        var D, W, _, I = s.fn.offset;
        return i(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], i(s, "Deferred", function(e) {
            var a = W(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(_, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s
    });
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    let e = t.prototype;
    return e.on = function(t, e) {
        if (!t || !e) return this;
        let i = this._events = this._events || {},
            s = i[t] = i[t] || [];
        return s.includes(e) || s.push(e), this
    }, e.once = function(t, e) {
        if (!t || !e) return this;
        this.on(t, e);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0, this
    }, e.off = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        let s = i.indexOf(e);
        return -1 != s && i.splice(s, 1), this
    }, e.emitEvent = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length) return this;
        i = i.slice(0), e = e || [];
        let s = this._onceEvents && this._onceEvents[t];
        for (let n of i) {
            s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e)
        }
        return this
    }, e.allOff = function() {
        return delete this._events, delete this._onceEvents, this
    }, t
})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
    let i = t.jQuery,
        s = t.console;

    function n(t, e, o) {
        if (!(this instanceof n)) return new n(t, e, o);
        let r = t;
        var h;
        ("string" == typeof t && (r = document.querySelectorAll(t)), r) ? (this.elements = (h = r, Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? [...h] : [h]), this.options = {}, "function" == typeof e ? o = e : Object.assign(this.options, e), o && this.on("always", o), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : s.error(`Bad element for imagesLoaded ${r||t}`)
    }
    n.prototype = Object.create(e.prototype), n.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    };
    const o = [1, 9, 11];
    n.prototype.addElementImages = function(t) {
        "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        let {
            nodeType: e
        } = t;
        if (!e || !o.includes(e)) return;
        let i = t.querySelectorAll("img");
        for (let t of i) this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e) this.addElementBackgroundImages(t)
        }
    };
    const r = /url\((['"])?(.*?)\1\)/gi;

    function h(t) {
        this.img = t
    }

    function d(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    return n.prototype.addElementBackgroundImages = function(t) {
        let e = getComputedStyle(t);
        if (!e) return;
        let i = r.exec(e.backgroundImage);
        for (; null !== i;) {
            let s = i && i[2];
            s && this.addBackground(s, t), i = r.exec(e.backgroundImage)
        }
    }, n.prototype.addImage = function(t) {
        let e = new h(t);
        this.images.push(e)
    }, n.prototype.addBackground = function(t, e) {
        let i = new d(t, e);
        this.images.push(i)
    }, n.prototype.check = function() {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        let t = (t, e, i) => {
            setTimeout((() => {
                this.progress(t, e, i)
            }))
        };
        this.images.forEach((function(e) {
            e.once("progress", t), e.check()
        }))
    }, n.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && s && s.log(`progress: ${i}`, t, e)
    }, n.prototype.complete = function() {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, h.prototype = Object.create(e.prototype), h.prototype.check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
    }, h.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, h.prototype.confirm = function(t, e) {
        this.isLoaded = t;
        let {
            parentNode: i
        } = this.img, s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e])
    }, h.prototype.handleEvent = function(t) {
        let e = "on" + t.type;
        this[e] && this[e](t)
    }, h.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, d.prototype = Object.create(h.prototype), d.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, d.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, d.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (i = e, i.fn.imagesLoaded = function(t, e) {
            return new n(this, t, e).jqDeferred.promise(i(this))
        })
    }, n.makeJQueryPlugin(), n
}));
! function(e) {
    function t() {
        var e = location.href;
        return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function p() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + e + "=([^&#]*)",
            p = new RegExp(i),
            o = p.exec(t);
        return null == o ? "" : o[1]
    }
    e.prettyPhoto = {
        version: "3.1.6"
    }, e.fn.prettyPhoto = function(a) {
        function s() {
            e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: f.contentHeight,
                width: f.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
                width: f.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
            }), m(), a.ajaxcallback()
        }

        function n(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show(), t()
            })
        }

        function r(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function l(e, t) {
            if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(b),
                containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(y),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function d(t, i) {
            t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
        }

        function h(e) {
            return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function g() {
            I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function u() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                settings.modal || e.prettyPhoto.close()
            }), e("a.pp_close").bind("click", function() {
                return e.prettyPhoto.close(), !1
            }), settings.allow_expand && e("a.pp_expand").bind("click", function() {
                return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() {
                    e.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        a = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder">       <div class="ppt">&nbsp;</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, a);
        var f, v, y, w, b, k, P, x = this,
            $ = !1,
            I = e(window).height(),
            j = e(window).width();
        return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), g()
        }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault()
            }
        }), e.prettyPhoto.initialize = function() {
            return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
            }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
            }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
            }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function() {
                c()
            }), e.prettyPhoto.open(), !1
        }, e.prettyPhoto.open = function(t) {
            return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            f = l(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "https://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        f = l(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(t);
                        movie = "https://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case "custom":
                        f = l(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() {
                e.prettyPhoto.open()
            })
        }, e.prettyPhoto.changeGalleryPage = function(e) {
            "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, e.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return e.prettyPhoto.stopSlideshow(), !1
            }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
        }, e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            }), clearInterval(P), P = void 0
        }, e.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
            }))
        }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;

! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function(a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function(d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.4
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(n) {
    var o = {};

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = n, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 10)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function(n, e, t) {
    (function(e) {
        var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        n.exports = t
    }).call(this, t(4))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
    }
    e.exports = o
}, , , , , , function(e, t, n) {
    e.exports = n(11)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        a = n(3),
        r = n(12);

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var s, c, u = a.window.jarallax;
    a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
        return a.window.jarallax = u, this
    }, void 0 !== a.jQuery && ((s = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        Array.prototype.unshift.call(t, this);
        var o = r.default.apply(a.window, t);
        return "object" !== l(o) ? o : this
    }).constructor = r.default.constructor, c = a.jQuery.fn.jarallax, a.jQuery.fn.jarallax = s, a.jQuery.fn.jarallax.noConflict = function() {
        return a.jQuery.fn.jarallax = c, this
    }), i()(function() {
        Object(r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        b = n(3);

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var l, h, p = b.window.navigator,
        d = -1 < p.userAgent.indexOf("MSIE ") || -1 < p.userAgent.indexOf("Trident/") || -1 < p.userAgent.indexOf("Edge/"),
        s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),
        m = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1)
                if (t && void 0 !== t.style[e[n]]) return e[n];
            return !1
        }();

    function f() {
        h = s ? (!l && document.body && ((l = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(l)), (l ? l.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight
    }
    f(), b.window.addEventListener("resize", f), b.window.addEventListener("orientationchange", f), b.window.addEventListener("load", f), i()(function() {
        f()
    });
    var g = [];

    function y() {
        g.length && (g.forEach(function(e, t) {
            var n = e.instance,
                o = e.oldData,
                i = n.$item.getBoundingClientRect(),
                a = {
                    width: i.width,
                    height: i.height,
                    top: i.top,
                    bottom: i.bottom,
                    wndW: b.window.innerWidth,
                    wndH: h
                },
                r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height,
                l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
            g[t].oldData = a, r && n.onResize(), l && n.onScroll()
        }), b.window.requestAnimationFrame(y))
    }

    function v(e, t) {
        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        for (var n, o = e.length, i = 0, a = arguments.length, r = new Array(2 < a ? a - 2 : 0), l = 2; l < a; l++) r[l - 2] = arguments[l];
        for (; i < o; i += 1)
            if ("object" === u(t) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (n = e[i].jarallax[t].apply(e[i].jarallax, r)), void 0 !== n) return n;
        return e
    }
    var x = 0,
        w = function() {
            function s(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, s);
                var n = this;
                n.instanceID = x, x += 1, n.$item = e, n.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    videoLazyLoading: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var o, i, a = n.$item.dataset || {},
                    r = {};
                Object.keys(a).forEach(function(e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== n.defaults[t] && (r[t] = a[e])
                }), n.options = n.extend({}, n.defaults, r, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                    "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp && (o = n.options.disableParallax, n.options.disableParallax = function() {
                    return o.test(p.userAgent)
                }), "function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                    return !1
                }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp && (i = n.options.disableVideo, n.options.disableVideo = function() {
                    return i.test(p.userAgent)
                }), "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                    return !1
                });
                var l = n.options.elementInViewport;
                l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]), l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
                    src: n.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(p.userAgent) ? "absolute" : "fixed"
                }, n.initImg() && n.canInitParallax() && n.init()
            }
            var e, t, n;
            return e = s, (t = [{
                key: "css",
                value: function(t, n) {
                    return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && m && (n[m] = n.transform), Object.keys(n).forEach(function(e) {
                        t.style[e] = n[e]
                    }), t)
                }
            }, {
                key: "extend",
                value: function(n) {
                    for (var e = arguments.length, o = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) o[t - 1] = arguments[t];
                    return n = n || {}, Object.keys(o).forEach(function(t) {
                        o[t] && Object.keys(o[t]).forEach(function(e) {
                            n[e] = o[t][e]
                        })
                    }), n
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: b.window.innerWidth || document.documentElement.clientWidth,
                        height: h,
                        y: document.documentElement.scrollTop
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return m && !this.options.disableParallax()
                }
            }, {
                key: "init",
                value: function() {
                    var e, t, n, o = this,
                        i = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        a = {
                            pointerEvents: "none",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            willChange: "transform,opacity"
                        };
                    o.options.keepImg || ((e = o.$item.getAttribute("style")) && o.$item.setAttribute("data-jarallax-original-styles", e), !o.image.useImgTag || (t = o.image.$item.getAttribute("style")) && o.image.$item.setAttribute("data-jarallax-original-styles", t)), "static" === o.css(o.$item, "position") && o.css(o.$item, {
                        position: "relative"
                    }), "auto" === o.css(o.$item, "z-index") && o.css(o.$item, {
                        zIndex: 0
                    }), o.image.$container = document.createElement("div"), o.css(o.image.$container, i), o.css(o.image.$container, {
                        "z-index": o.options.zIndex
                    }), d && o.css(o.image.$container, {
                        opacity: .9999
                    }), o.image.$container.setAttribute("id", "jarallax-container-".concat(o.instanceID)), o.$item.appendChild(o.image.$container), o.image.useImgTag ? a = o.extend({
                        "object-fit": o.options.imgSize,
                        "object-position": o.options.imgPosition,
                        "font-family": "object-fit: ".concat(o.options.imgSize, "; object-position: ").concat(o.options.imgPosition, ";"),
                        "max-width": "none"
                    }, i, a) : (o.image.$item = document.createElement("div"), o.image.src && (a = o.extend({
                        "background-position": o.options.imgPosition,
                        "background-size": o.options.imgSize,
                        "background-repeat": o.options.imgRepeat,
                        "background-image": o.image.bgImage || 'url("'.concat(o.image.src, '")')
                    }, i, a))), "opacity" !== o.options.type && "scale" !== o.options.type && "scale-opacity" !== o.options.type && 1 !== o.options.speed || (o.image.position = "absolute"), "fixed" === o.image.position && (n = function(e) {
                        for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                        return t
                    }(o.$item).filter(function(e) {
                        var t = b.window.getComputedStyle(e),
                            n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                        return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                    }), o.image.position = n.length ? "absolute" : "fixed"), a.position = o.image.position, o.css(o.image.$item, a), o.image.$container.appendChild(o.image.$item), o.onResize(), o.onScroll(!0), o.options.onInit && o.options.onInit.call(o), "none" !== o.css(o.$item, "background-image") && o.css(o.$item, {
                        "background-image": "none"
                    }), o.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    g.push({
                        instance: this
                    }), 1 === g.length && b.window.requestAnimationFrame(y)
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var n = this;
                    g.forEach(function(e, t) {
                        e.instance.instanceID === n.instanceID && g.splice(t, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t, n = e.$item.getAttribute("data-jarallax-original-styles");
                    e.$item.removeAttribute("data-jarallax-original-styles"), n ? e.$item.setAttribute("style", n) : e.$item.removeAttribute("style"), e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"), e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", n) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    var e, t, n, o, i;
                    "fixed" === this.image.position && (n = (t = (e = this).image.$container.getBoundingClientRect()).width, o = t.height, e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)), i = "#jarallax-container-".concat(e.instanceID, " {\n            clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n            clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"), e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i)
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        n = t.height,
                        o = e.options.speed,
                        i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = n,
                        l = 0;
                    return i && (o < 0 ? (a = o * Math.max(n, h), h < n && (a -= o * (n - h))) : a = o * (n + h), 1 < o ? r = Math.abs(a - h) : o < 0 ? r = a / o + Math.abs(a) : r += (h - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, l = i ? (h - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
                        height: "".concat(r, "px"),
                        marginTop: "".concat(l, "px"),
                        left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                        width: "".concat(t.width, "px")
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t, n, o, i, a, r, l, s, c, u, p = this,
                        d = p.$item.getBoundingClientRect(),
                        m = d.top,
                        f = d.height,
                        g = {},
                        y = d;
                    p.options.elementInViewport && (y = p.options.elementInViewport.getBoundingClientRect()), p.isElementInViewport = 0 <= y.bottom && 0 <= y.right && y.top <= h && y.left <= b.window.innerWidth, (e || p.isElementInViewport) && (t = Math.max(0, m), n = Math.max(0, f + m), o = Math.max(0, -m), i = Math.max(0, m + f - h), a = Math.max(0, f - (m + f - h)), r = Math.max(0, -m + h - f), l = 1 - (h - m) / (h + f) * 2, s = 1, f < h ? s = 1 - (o || i) / f : n <= h ? s = n / h : a <= h && (s = a / h), "opacity" !== p.options.type && "scale-opacity" !== p.options.type && "scroll-opacity" !== p.options.type || (g.transform = "translate3d(0,0,0)", g.opacity = s), "scale" !== p.options.type && "scale-opacity" !== p.options.type || (c = 1, p.options.speed < 0 ? c -= p.options.speed * s : c += p.options.speed * (1 - s), g.transform = "scale(".concat(c, ") translate3d(0,0,0)")), "scroll" !== p.options.type && "scroll-opacity" !== p.options.type || (u = p.parallaxScrollDistance * l, "absolute" === p.image.position && (u -= m), g.transform = "translate3d(0,".concat(u, "px,0)")), p.css(p.image.$item, g), p.options.onScroll && p.options.onScroll.call(p, {
                        section: d,
                        beforeTop: t,
                        beforeTopEnd: n,
                        afterTop: o,
                        beforeBottom: i,
                        beforeBottomEnd: a,
                        afterBottom: r,
                        visiblePercent: s,
                        fromViewportCenter: l
                    }))
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]) && r(e.prototype, t), n && r(e, n), s
        }();
    v.constructor = w, t.default = v
}]);;
/*!
 * Name    : DEPRECATED Elements Extension for Jarallax. Use laxxx instead https://github.com/alexfoxy/laxxx
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(n) {
    var o = {};

    function r(t) {
        if (o[t]) return o[t].exports;
        var e = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    r.m = n, r.c = o, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 0)
}([function(t, e, n) {
    t.exports = n(1)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(2),
        r = n.n(o),
        i = n(3),
        a = n.n(i),
        l = n(5);
    Object(l.default)(), r()(function() {
        void 0 !== a.a.jarallax && a.a.jarallax(document.querySelectorAll("[data-jarallax-element]"))
    })
}, function(t, e) {
    t.exports = function(t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, function(n, t, e) {
    (function(t) {
        var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        n.exports = e
    }).call(this, e(4))
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
    }
    t.exports = o
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return i
    });
    var o = n(3),
        r = n.n(o);

    function i() {
        var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.a.jarallax;
        void 0 !== e && (t = e.constructor, ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function(y) {
            var h = t.prototype[y];
            t.prototype[y] = function() {
                var t = this;
                "initImg" === y && null !== t.$item.getAttribute("data-jarallax-element") && (t.options.type = "element", t.pureOptions.speed = t.$item.getAttribute("data-jarallax-element") || t.pureOptions.speed);
                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                if ("element" !== t.options.type) return h.apply(t, n);
                switch (t.pureOptions.threshold = t.$item.getAttribute("data-threshold") || "", y) {
                    case "init":
                        var r = t.pureOptions.speed.split(" ");
                        t.options.speed = t.pureOptions.speed || 0, t.options.speedY = r[0] ? parseFloat(r[0]) : 0, t.options.speedX = r[1] ? parseFloat(r[1]) : 0;
                        var i = t.pureOptions.threshold.split(" ");
                        t.options.thresholdY = i[0] ? parseFloat(i[0]) : null, t.options.thresholdX = i[1] ? parseFloat(i[1]) : null, h.apply(t, n);
                        var a = t.$item.getAttribute("data-jarallax-original-styles");
                        return a && t.$item.setAttribute("style", a), !0;
                    case "onResize":
                        var l = t.css(t.$item, "transform");
                        t.css(t.$item, {
                            transform: ""
                        });
                        var s = t.$item.getBoundingClientRect();
                        t.itemData = {
                            width: s.width,
                            height: s.height,
                            y: s.top + t.getWindowData().y,
                            x: s.left
                        }, t.css(t.$item, {
                            transform: l
                        });
                        break;
                    case "onScroll":
                        var u = t.getWindowData(),
                            c = (u.y + u.height / 2 - t.itemData.y - t.itemData.height / 2) / (u.height / 2),
                            p = c * t.options.speedY,
                            d = c * t.options.speedX,
                            f = p,
                            m = d;
                        null !== t.options.thresholdY && p > t.options.thresholdY && (f = 0), null !== t.options.thresholdX && d > t.options.thresholdX && (m = 0), t.css(t.$item, {
                            transform: "translate(".concat(m.toFixed(0), "px,").concat(f.toFixed(0), "px)")
                        });
                        break;
                    case "initImg":
                    case "isVisible":
                    case "clipContainer":
                    case "coverImage":
                        return !0
                }
                return h.apply(t, n)
            }
        }))
    }
}]);;

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e) r.push(s);
        else if (s.length > 0 && s[0].nodeType)
            for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                            listener: n,
                            proxyListener: l
                        }), u.addEventListener(v, l, o)
                    } else
                        for (h = 0; h < p.length; h += 1) {
                            var f = p[h];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                                listener: n,
                                proxyListener: d
                            }), u.addEventListener(f, d, o)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        h = void 0;
                    try {
                        h = new t.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                    }
                    d.dom7EventData = i.filter((function(e, t) {
                        return t > 0
                    })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                else this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a, r = this;
            for (i = 0; i < e.length; i += 1) {
                var n = s(e[i]);
                for (a = 0; a < n.length; a += 1) r[r.length] = n[a], r.length += 1
            }
            return r
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach((function(e) {
        s.fn[e] = s.fn[e] || r[e]
    }));
    var n = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach((function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, i) {
                var s, a, r;
                void 0 === i && (i = "x");
                var n = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function(e) {
                    return e.replace(",", ".")
                })).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
            },
            parseUrlQuery: function(e) {
                var i, s, a, r, n = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                            return "" !== e
                        }))).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return n
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (null != a)
                        for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                            var d = r[o],
                                h = Object.getOwnPropertyDescriptor(a, d);
                            void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
                        }
                }
                return i
            }
        },
        o = {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        },
        l = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                t.on(e, t.params.on[e])
            }))
        },
        d = {
            components: {
                configurable: !0
            }
        };
    l.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        })), s
    }, l.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
        }
        return a.f7proxy = t, s.on(e, a, i)
    }, l.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }))
        })), i) : i
    }, l.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                })), t.forEach((function(e) {
                    e.apply(a, s)
                }))
            }
        })), r
    }, l.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params)
        }))
    }, l.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            })), s.create && s.create.bind(t)(a)
        }))
    }, d.components.set = function(e) {
        this.use && this.use(e)
    }, l.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        })), e.install && e.install.apply(s, t), s
    }, l.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        })), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(l, d);
    var h = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                r = this.wrongRTL,
                o = this.virtual && e.virtual.enabled,
                l = o ? this.virtual.slides.length : this.slides.length,
                d = i.children("." + this.params.slideClass),
                h = o ? this.virtual.slides.length : d.length,
                p = [],
                c = [],
                u = [];

            function v(t) {
                return !e.cssMode || t !== d.length - 1
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length,
                b = this.snapGrid.length,
                w = e.spaceBetween,
                y = -f,
                x = 0,
                T = 0;
            if (void 0 !== s) {
                var E, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0,
                            I = void 0,
                            D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = t.getComputedStyle($[0], null),
                                B = $[0].style.transform,
                                N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width")),
                                    V = parseFloat(H.getPropertyValue("padding-left")),
                                    Y = parseFloat(H.getPropertyValue("padding-right")),
                                    F = parseFloat(H.getPropertyValue("margin-left")),
                                    W = parseFloat(H.getPropertyValue("margin-right")),
                                    R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height")),
                                    j = parseFloat(H.getPropertyValue("padding-top")),
                                    K = parseFloat(H.getPropertyValue("padding-bottom")),
                                    U = parseFloat(H.getPropertyValue("margin-top")),
                                    _ = parseFloat(H.getPropertyValue("margin-bottom")),
                                    Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                        d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    }), e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
                    }
                    p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                }
                if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                        marginLeft: w + "px"
                    }) : d.filter(v).css({
                        marginRight: w + "px"
                    }) : d.filter(v).css({
                        marginBottom: w + "px"
                    })), e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }));
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map((function(e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function(t) {
                            ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                        })), (ae -= e.spaceBetween) < s) {
                        var re = (s - ae) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - re
                        })), c.forEach((function(e, t) {
                            c[t] = e + re
                        }))
                    }
                }
                n.extend(this, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [],
                s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                if (this.params.centeredSlides) this.visibleSlides.each((function(e, t) {
                    i.push(t)
                }));
                else
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length) break;
                        i.push(this.slides.eq(a)[0])
                    } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params,
                i = this.slides,
                a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(r - o.swiperSlideOffset),
                            h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
                    }
                    o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                a = this.progress,
                r = this.isBeginning,
                o = this.isEnd,
                l = r,
                d = o;
            0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                o = this.activeIndex,
                l = this.realIndex,
                d = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1), h !== o) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                n.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params,
                i = s(e.target).closest("." + t.slideClass)[0],
                a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.wrapperEl,
                n = this.progress,
                o = 0,
                l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this,
                o = n.params,
                l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(),
                p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex,
                a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var u = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this,
                n = e;
            n < 0 && (n = 0);
            var o = r.params,
                l = r.snapGrid,
                d = r.slidesGrid,
                h = r.previousIndex,
                p = r.activeIndex,
                c = r.rtlTranslate,
                u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n),
                f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g), o.normalizeSlideIndex)
                for (var b = 0; b < d.length; b += 1) - Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
            if (o.cssMode) {
                var w = r.isHorizontal(),
                    y = -g;
                return c && (y = u.scrollWidth - u.offsetWidth - y), 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = y, !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate),
                p = r.map((function(e) {
                    return l(e)
                })),
                c = (n.map((function(e) {
                    return l(e)
                })), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function(e) {
                !c && h >= e && (c = e)
            })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex,
                r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                i = t.params,
                a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                o = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function() {
                    t.slideTo(o)
                }))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function() {
                    t.slideTo(o)
                }))) : t.slideTo(o)
            } else t.slideTo(o)
        }
    };
    var v = {
        loopCreate: function() {
            var t = this,
                i = t.params,
                a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
                h = [];
            r.each((function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            }));
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex,
                i = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                r = this.allowSlideNext,
                n = this.snapGrid,
                o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var f = {
        setGrabCursor: function(e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && o.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl,
                    s = this.params,
                    a = this.activeIndex;
                s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                var r = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (e >= r) this.appendSlide(t);
                else {
                    for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                        var h = this.slides.eq(d);
                        h.remove(), l.unshift(h)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                        n = a > e ? a + t.length : a
                    } else i.append(t);
                    for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                    s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!t.cordova && !t.phonegap),
            phonegap: !(!t.cordova && !t.phonegap),
            electron: !1
        }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);

    function D(i) {
        var a = this.touchEventsData,
            r = this.params,
            o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved)))
                if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var h = o.currentX,
                    p = o.currentY,
                    c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!c || !(h <= u || h >= t.screen.width - u)) {
                    if (n.extend(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var v = !0;
                        d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                        var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || f) && l.preventDefault()
                    }
                    this.emit("touchStart", l)
                }
            }
        }
    }

    function O(t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            o = this.rtlTranslate,
            l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    h = "touchmove" === l.type ? d.pageX : l.pageX,
                    p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return r.startX = h, void(r.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (n.extend(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (this.isVertical()) {
                        if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h, r.currentY = p;
                    var c = r.currentX - r.startX,
                        u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var m = !0,
                                g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function A(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            d = t.snapGrid,
            h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(),
            u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick((function() {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop(),
                            f = i.velocities.pop(),
                            m = v.position - f.position,
                            g = v.time - f.time;
                        t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio,
                        w = t.velocity * b,
                        y = t.translate + w;
                    r && (y = -y);
                    var x, T, E = !1,
                        S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < d.length; M += 1)
                            if (d[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                    }
                    if (T && t.once("transitionEnd", (function() {
                            t.loopFix()
                        })), 0 !== t.velocity) {
                        if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate),
                                z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout((function() {
                            t.setTranslate(x), o.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        }), 0))
                    }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2])
                }
                var D = (p - l[k]) / $,
                    O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
                }
            }
    }

    function G() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function H(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function B() {
        var e = this.wrapperEl,
            t = this.rtlTranslate;
        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
    }
    var N = !1;

    function X() {}
    var V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        Y = {
            update: h,
            translate: p,
            transition: c,
            slide: u,
            loop: v,
            grabCursor: f,
            manipulation: L,
            events: {
                attachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl;
                    this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this);
                    var r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
                        }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
                },
                detachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                        }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params,
                        a = this.$el,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in r ? r[o] : void 0;
                            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                var t = l[e];
                                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var d = l || this.originalParams,
                                h = s.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                            var c = d.direction && d.direction !== s.direction,
                                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var i = !1,
                            s = Object.keys(e).map((function(e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var i = parseFloat(e.substr(1));
                                    return {
                                        value: t.innerHeight * i,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort((function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a],
                                n = r.point;
                            r.value <= t.innerWidth && (i = n)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function(i) {
                        e.push(t.containerModifierClass + i)
                    })), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, i, s, a, r, n) {
                    var o;

                    function l() {
                        n && n()
                    }
                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        F = {},
        W = function(e) {
            function t() {
                for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
                1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach((function(e) {
                    Object.keys(Y[e]).forEach((function(i) {
                        t.prototype[i] || (t.prototype[i] = Y[e][i])
                    }))
                }));
                var h = this;
                void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach((function(e) {
                    var t = h.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s || null === s) return;
                        if (!(i in r) || !("enabled" in s)) return;
                        !0 === r[i] && (r[i] = {
                            enabled: !0
                        }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                            enabled: !1
                        })
                    }
                }));
                var p = n.extend({}, V);
                h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
                var c = s(h.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each((function(e, i) {
                            var s = n.extend({}, r, {
                                el: i
                            });
                            u.push(new t(s))
                        })), u
                    }
                    var v, f, m;
                    return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function(e) {
                        return c.children(e)
                    } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                        $el: c,
                        el: a,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === h.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === h.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: h.params.allowSlideNext,
                        allowSlidePrev: h.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2],
                            cancel: f[3]
                        }, h.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: n.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: h.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), h.useModules(), h.params.init && h.init(), h
                }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function() {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function(e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function(t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                })), this.emit("changeDirection"), t && this.update()), this
            }, t.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    a = i.$el,
                    r = i.$wrapperEl,
                    o = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0), null
            }, t.extendDefaults = function(e) {
                n.extend(F, e)
            }, i.extendedDefaults.get = function() {
                return F
            }, i.defaults.get = function() {
                return V
            }, i.Class.get = function() {
                return e
            }, i.$.get = function() {
                return s
            }, Object.defineProperties(t, i), t
        }(l),
        R = {
            name: "device",
            proto: {
                device: I
            },
            static: {
                device: I
            }
        },
        q = {
            name: "support",
            proto: {
                support: o
            },
            static: {
                support: o
            }
        },
        j = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                var e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        },
        K = {
            name: "browser",
            proto: {
                browser: j
            },
            static: {
                browser: j
            }
        },
        U = {
            name: "resize",
            create: function() {
                var e = this;
                n.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        _ = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, i) {
                void 0 === i && (i = {});
                var s = this,
                    a = new(0, _.func)((function(e) {
                        if (1 !== e.length) {
                            var i = function() {
                                s.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else s.emit("observerUpdate", e[0])
                    }));
                a.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), s.observer.observers.push(a)
            },
            init: function() {
                if (o.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach((function(e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        },
        Z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                n.extend(this, {
                    observer: {
                        init: _.init.bind(this),
                        attach: _.attach.bind(this),
                        destroy: _.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        Q = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    o = t.params.virtual,
                    l = o.addSlidesBefore,
                    d = o.addSlidesAfter,
                    h = t.virtual,
                    p = h.from,
                    c = h.to,
                    u = h.slides,
                    v = h.slidesGrid,
                    f = h.renderSlide,
                    m = h.offset;
                t.updateActiveIndex();
                var g, b, w, y = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
                var x = Math.max((y || 0) - w, 0),
                    T = Math.min((y || 0) + b, u.length - 1),
                    E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                function S() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (n.extend(t.virtual, {
                        from: x,
                        to: T,
                        offset: E,
                        slidesGrid: t.slidesGrid
                    }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: x,
                    to: T,
                    slides: function() {
                        for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void S();
                var C = [],
                    M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var P = p; P <= c; P += 1)(P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
                M.forEach((function(e) {
                    t.$wrapperEl.append(f(u[e], e))
                })), C.sort((function(e, t) {
                    return t - e
                })).forEach((function(e) {
                    t.$wrapperEl.prepend(f(u[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache,
                        n = {};
                    Object.keys(r).forEach((function(e) {
                        var t = r[e],
                            i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                    })), this.virtual.cache = n
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        J = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                n.extend(this, {
                    virtual: {
                        update: Q.update.bind(this),
                        appendSlide: Q.appendSlide.bind(this),
                        prependSlide: Q.prependSlide.bind(this),
                        removeSlide: Q.removeSlide.bind(this),
                        removeAllSlides: Q.removeAllSlides.bind(this),
                        renderSlide: Q.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        ee = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [
                                [d.left, d.top],
                                [d.left + this.width, d.top],
                                [d.left, d.top + this.height],
                                [d.left + this.width, d.top + this.height]
                            ], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                }
            },
            enable: function() {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        te = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                n.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: ee.enable.bind(this),
                        disable: ee.disable.bind(this),
                        handle: ee.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var ie = {
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var t = "onwheel" in e;
                    if (!t) {
                        var i = e.createElement("div");
                        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                    }
                    return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: a
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    a = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var r = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var o = 0,
                    l = i.rtlTranslate ? -1 : 1,
                    d = ie.normalize(t);
                if (a.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                        o = d.pixelX * l
                    } else {
                        if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                        o = d.pixelY
                    }
                else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
                if (0 === o) return !0;
                if (a.invert && (o = -o), i.params.freeMode) {
                    var h = {
                            time: n.now(),
                            delta: Math.abs(o),
                            direction: Math.sign(o)
                        },
                        p = i.mousewheel.lastEventBeforeSnap,
                        c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                    if (!c) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var u = i.getTranslate() + o * a.sensitivity,
                            v = i.isBeginning,
                            f = i.isEnd;
                        if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var m = i.mousewheel.recentWheelEvents;
                            m.length >= 15 && m.shift();
                            var g = m.length ? m[m.length - 1] : void 0,
                                b = m[0];
                            if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);
                            else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                                var w = o > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick((function() {
                                    i.slideToClosest(i.params.speed, !0, void 0, w)
                                }), 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function() {
                                i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                    }
                } else {
                    var y = {
                            time: n.now(),
                            delta: Math.abs(o),
                            direction: Math.sign(o),
                            raw: e
                        },
                        x = i.mousewheel.recentWheelEvents;
                    x.length >= 2 && x.shift();
                    var T = x.length ? x[x.length - 1] : void 0;
                    if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function(e) {
                return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = ie.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var e = ie.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        se = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        ae = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, d, h = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each((function(e, a) {
                            var r = s(a),
                                n = r.index();
                            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }));
                        else {
                            var p = h.eq(i),
                                c = p.index();
                            if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (c >= h.length - t.dynamicMainBullets) {
                                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                        h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                    } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(h.length, t.dynamicMainBullets + 4),
                                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                w = e ? "right" : "left";
                            h.css(this.isHorizontal() ? w : "top", b + "px")
                        }
                    }
                    if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                        var y;
                        y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var x = (i + 1) / n,
                            T = 1,
                            E = 1;
                        "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                        t.preventDefault();
                        var i = s(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    })), n.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        re = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
                        n[0].style.opacity = 0, n.transition(400)
                    }), 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        o = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: o,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    o = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((function() {
                    a.css("opacity", 0), a.transition(400)
                }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                    var r = a.find("." + this.params.scrollbar.dragClass);
                    0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                        $el: a,
                        el: a[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        ne = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p
                }
                if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, a)
                })), i.each((function(t, i) {
                    var n = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        e.parallax.setTransform(i, n)
                    }))
                }))
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    var a = s(i),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r)
                }))
            }
        },
        oe = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = o.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        o = s.height * t.scale;
                    if (!(r < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = o, i.currentY = d;
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom,
                    b = this.params.zoom,
                    w = g.gesture,
                    y = g.image;
                (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        s = "." + this.params.slideClass;
                    o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        s = "." + this.params.slideClass;
                    o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            }
        },
        le = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((function(e, n) {
                        var o = s(n);
                        o.addClass(a.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            h = o.attr("data-srcset"),
                            p = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, h, p, !1, (function() {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(s.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                            }
                        })), i.emit("lazyImageLoad", r[0], o[0])
                    }))
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function d(e) {
                    if (n) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function h(e) {
                    return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                }));
                else if (l > 1)
                    for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w))
                    }
            }
        },
        de = {
            LinearSpline: function(e, t) {
                var i, s, a, r, n, o = function(e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, s, a = this,
                    r = a.controller.control;

                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);
                else r instanceof W && t !== r && n(r)
            },
            setTransition: function(e, t) {
                var i, s = this,
                    a = s.controller.control;

                function r(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick((function() {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function() {
                        a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);
                else a instanceof W && t !== a && r(a)
            }
        },
        he = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, a) {
                    var r = s(a);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1))
                }))
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        pe = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                        return "" !== e
                    })),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = pe.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = t.history.state;
                    r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                        value: a
                    }, null, a) : t.history.pushState({
                        value: a
                    }, null, a))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        ce = {
            onHashCange: function() {
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    this.slideTo(i)
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = this.slides.length; a < r; a += 1) {
                            var n = this.slides.eq(a);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ue = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }), i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function() {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        ve = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd((function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    }))
                }
            }
        },
        fe = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                    var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            P = d.shadowScale,
                            z = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                    }
                var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        me = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                        var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd((function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    }))
                }
            }
        },
        ge = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                    var f = i.eq(u),
                        m = r[u],
                        g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                        b = l ? p * g : 0,
                        w = l ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = n.stretch;
                    "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
                    var T = l ? 0 : x * g,
                        E = l ? x * g : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                    var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                        var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        be = {
            init: function() {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), n.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var a;
                        if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                            var r = this.activeIndex;
                            this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                            var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                            a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                        }
                        this.slideTo(a)
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                        s = this.params.thumbs.autoScrollOffset,
                        a = s && !t.params.loop;
                    if (this.realIndex !== t.realIndex || a) {
                        var r, n, o = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
                            var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev"
                        } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                        a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
                    }
                    var h = 1,
                        p = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var c = 0; c < h; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);
                    else
                        for (var u = 0; u < h; u += 1) t.slides.eq(this.realIndex + u).addClass(p)
                }
            }
        },
        we = [R, q, K, U, Z, J, te, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                n.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: ie.enable.bind(this),
                        disable: ie.disable.bind(this),
                        handle: ie.handle.bind(this),
                        handleMouseEnter: ie.handleMouseEnter.bind(this),
                        handleMouseLeave: ie.handleMouseLeave.bind(this),
                        animateSlider: ie.animateSlider.bind(this),
                        releaseScroll: ie.releaseScroll.bind(this),
                        lastScrollTime: n.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function() {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                n.extend(this, {
                    navigation: {
                        init: se.init.bind(this),
                        update: se.update.bind(this),
                        destroy: se.destroy.bind(this),
                        onNextClick: se.onNextClick.bind(this),
                        onPrevClick: se.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, i = this.navigation,
                        a = i.$nextEl,
                        r = i.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                n.extend(this, {
                    pagination: {
                        init: ae.init.bind(this),
                        render: ae.render.bind(this),
                        update: ae.update.bind(this),
                        destroy: ae.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                n.extend(this, {
                    scrollbar: {
                        init: re.init.bind(this),
                        destroy: re.destroy.bind(this),
                        updateSize: re.updateSize.bind(this),
                        setTranslate: re.setTranslate.bind(this),
                        setTransition: re.setTransition.bind(this),
                        enableDraggable: re.enableDraggable.bind(this),
                        disableDraggable: re.disableDraggable.bind(this),
                        setDragPosition: re.setDragPosition.bind(this),
                        getPointerPosition: re.getPointerPosition.bind(this),
                        onDragStart: re.onDragStart.bind(this),
                        onDragMove: re.onDragMove.bind(this),
                        onDragEnd: re.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                n.extend(this, {
                    parallax: {
                        setTransform: ne.setTransform.bind(this),
                        setTranslate: ne.setTranslate.bind(this),
                        setTransition: ne.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                    t[i] = oe[i].bind(e)
                })), n.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (i !== t) {
                            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, a)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                n.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: le.load.bind(this),
                        loadInSlide: le.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function() {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                n.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: de.getInterpolateFunction.bind(this),
                        setTranslate: de.setTranslate.bind(this),
                        setTransition: de.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                n.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(he).forEach((function(t) {
                    e.a11y[t] = he[t].bind(e)
                }))
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                n.extend(this, {
                    history: {
                        init: pe.init.bind(this),
                        setHistory: pe.setHistory.bind(this),
                        setHistoryPopState: pe.setHistoryPopState.bind(this),
                        scrollToSlide: pe.scrollToSlide.bind(this),
                        destroy: pe.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function() {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                n.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: ce.init.bind(this),
                        destroy: ce.destroy.bind(this),
                        setHash: ce.setHash.bind(this),
                        onHashCange: ce.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function() {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                n.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ue.run.bind(e),
                        start: ue.start.bind(e),
                        stop: ue.stop.bind(e),
                        pause: ue.pause.bind(e),
                        onVisibilityChange: function() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                        },
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function() {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                n.extend(this, {
                    fadeEffect: {
                        setTranslate: ve.setTranslate.bind(this),
                        setTransition: ve.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                n.extend(this, {
                    cubeEffect: {
                        setTranslate: fe.setTranslate.bind(this),
                        setTransition: fe.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                n.extend(this, {
                    flipEffect: {
                        setTranslate: me.setTranslate.bind(this),
                        setTransition: me.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                n.extend(this, {
                    coverflowEffect: {
                        setTranslate: ge.setTranslate.bind(this),
                        setTransition: ge.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                n.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: be.init.bind(this),
                        update: be.update.bind(this),
                        onThumbClick: be.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
}));;
(function($) {
    "use stict";
    var count = 1;
    var portfolioPostsPerPage = $(".grid-item").length;
    var totalNumberOfPortfolioPages = Math.ceil(parseInt(ajax_var_portfolio.total) / portfolioPostsPerPage);
    setPrettyPhoto();
    imageSliderSetUp();
    setHorizontalSkills();
    showHidePortfolioLoadMoreButton();
    loadMorePortfolioOnClick();
    portfolioItemContentLoadOnClick();
    setActiveFirstPortfolioItem();
    setActivePortfolioItem();
    setParallax();
    carouselTestimonialSetUp();
    $(window).on('resize', function() {
        setHorizontalSkills();
    });
    $(window).on('scroll', function() {
        setHorizontalSkills();
    });

    function setHorizontalSkills() {
        $(".skill-fill:not(.animation-done").each(function(i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window - 70) > top_of_object) {
                $(this).width($(this).data("fill") + "%");
                $(this).next('.skill-fill-mask').width($(this).data("fill") + 2 + "%");
                $(this).addClass('animation-done');
            }
        });
    }

    function imageSliderSetUp() {
        $(".owl-carousel.image-slider").each(function() {
            var speed_value = $(this).data('speed');
            var auto_value = $(this).data('auto');
            var hover_pause = $(this).data('hover');
            if (auto_value === true) {
                $(this).owlCarousel({
                    loop: true,
                    autoHeight: true,
                    smartSpeed: 1000,
                    autoplay: auto_value,
                    autoplayHoverPause: hover_pause,
                    autoplayTimeout: speed_value,
                    responsiveClass: true,
                    items: 1
                });
                $(this).on('mouseleave', function() {
                    $(this).trigger('stop.owl.autoplay');
                    $(this).trigger('play.owl.autoplay', [auto_value]);
                });
            } else {
                $(this).owlCarousel({
                    loop: true,
                    autoHeight: true,
                    smartSpeed: 1000,
                    autoplay: false,
                    responsiveClass: true,
                    items: 1
                });
            }
        });
    }

    function setPrettyPhoto() {
        $('a[data-rel]').each(function() {
            $(this).attr('rel', $(this).data('rel'));
        });
        $(".grid-item:visible a[rel^='prettyPhoto']").prettyPhoto({
            slideshow: false,
            overlay_gallery: false,
            default_width: 1280,
            default_height: 720,
            deeplinking: false,
            social_tools: false,
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        });
    }

    function showHidePortfolioLoadMoreButton() {
        if (portfolioPostsPerPage < parseInt(ajax_var_portfolio.total)) {
            $('.more-posts-portfolio').css('visibility', 'visible');
            $('.more-posts-portfolio').animate({
                opacity: 1
            }, 1500);
        } else {
            $('.more-posts-portfolio').css('display', 'none');
        }
    }

    function loadMorePortfolioOnClick() {
        $('.more-posts-portfolio:visible').on('click', function() {
            count++;
            loadPortfolioMoreItems(count, portfolioPostsPerPage);
            $('.more-posts-portfolio').css('display', 'none');
            $('.more-posts-portfolio-loading').css('display', 'inline-block');
        });
    }

    function loadPortfolioMoreItems(pageNumber, portfolioPostsPerPage) {
        $.ajax({
            url: ajax_var_portfolio.url,
            type: 'POST',
            data: "action=portfolio_ajax_load_more&portfolio_page_number=" + pageNumber + "&portfolio_posts_per_page=" + portfolioPostsPerPage + "&security=" + ajax_var_portfolio.nonce,
            success: function(html) {
                var $newItems = $(html);
                $('.grid').append($newItems);
                $('.grid').imagesLoaded(function() {
                    if (count === totalNumberOfPortfolioPages) {
                        $('.more-posts-portfolio').css('display', 'none');
                        $('.more-posts-portfolio-loading').css('display', 'none');
                        $('.no-more-posts-portfolio').css('display', 'inline-block');
                    } else {
                        $('.more-posts-portfolio').css('display', 'inline-block');
                        $('.more-posts-portfolio-loading').css('display', 'none');
                        $(".more-posts-portfolio-holder").removeClass('stop-loading');
                    }
                });
                animateElement();
                setActivePortfolioItem();
                portfolioItemContentLoadOnClick();
                setPrettyPhoto();
            }
        });
        return false;
    }

    function portfolioItemContentLoadOnClick() {
        $('.ajax-portfolio').on('click', function(e) {
            e.preventDefault();
            var portfolioItemID = $(this).data('id');
            $(this).closest('.grid-item').addClass('portfolio-content-loading');
            $('#portfolio-grid').addClass('portfoio-items-mask');
            if ($("#pcw-" + portfolioItemID).length) {
                $('html, body').animate({
                    scrollTop: $('#portfolio-wrapper').offset().top - 150
                }, 400);
                setTimeout(function() {
                    $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').addClass('hide');
                    setTimeout(function() {
                        $("#pcw-" + portfolioItemID).addClass('show');
                        $('.portfolio-load-content-holder').addClass('show');
                        $('.grid-item').removeClass('portfolio-content-loading');
                        $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').hide().removeClass('portfoio-items-mask');
                    }, 300);
                }, 500);
            } else {
                loadPortfolioItemContent(portfolioItemID);
            }
        });
    }

    function loadPortfolioItemContent(portfolioItemID) {
        $.ajax({
            url: ajax_var_portfolio_content.url,
            type: 'POST',
            data: "action=portfolio_ajax_content_load&portfolio_id=" + portfolioItemID + "&security=" + ajax_var_portfolio_content.nonce,
            success: function(html) {
                var getPortfolioItemHtml = $(html).html();
                $('.portfolio-load-content-holder').append('<div id="pcw-' + portfolioItemID + '" class="portfolio-content-wrapper">' + getPortfolioItemHtml + '</div>');
                if (!$("#pcw-" + portfolioItemID + " .close-icon").length) {
                    $("#pcw-" + portfolioItemID).prepend('<div class="close-icon"></div>');
                }
                $('html, body').animate({
                    scrollTop: $('#portfolio-wrapper').offset().top - 150
                }, 400);
                setTimeout(function() {
                    $("#pcw-" + portfolioItemID).imagesLoaded(function() {
                        $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').addClass('hide');
                        setTimeout(function() {
                            $("#pcw-" + portfolioItemID).addClass('show');
                            $('.portfolio-load-content-holder').addClass('show');
                            $('.grid-item').removeClass('portfolio-content-loading');
                            $('#portfolio-grid').hide().removeClass('portfoio-items-mask');
                            imageSliderSetUp();
                            setHorizontalSkills();
                            setParallax();
                        }, 300);
                        $('.close-icon').on('click', function(e) {
                            var portfolioReturnItemID = $(this).closest('.portfolio-content-wrapper').attr("id").split("-")[1];
                            $('.portfolio-load-content-holder').addClass("viceversa");
                            $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').css('display', 'block');
                            setTimeout(function() {
                                $('#pcw-' + portfolioReturnItemID).removeClass('show');
                                $('.portfolio-load-content-holder').removeClass('viceversa show');
                                $('#portfolio-grid, .more-posts-portfolio-holder, .category-filter-list').removeClass('hide');
                            }, 300);
                            setTimeout(function() {
                                $('html, body').animate({
                                    scrollTop: $('#p-item-' + portfolioReturnItemID).offset().top - 150
                                }, 400);
                            }, 500);
                        });
                    });
                }, 500);
            }
        });
        return false;
    }

    function setActiveFirstPortfolioItem() {
        $(".grid.first-active .grid-item").first().addClass('active-item');
    }

    function setActivePortfolioItem() {
        $('.grid .grid-item').on('mouseover', function() {
            $('.grid .grid-item').removeClass('active-item');
            $(this).addClass('active-item');
        });
    }

    function setParallax() {
        $('*[class*=" parallax_"]').each(function() {
            var className = this.className.match(/(parallax_[^\s]*)/);
            className = className[0].split('_');
            $(this).attr("data-jarallax-element", className[1] + " " + className[2]);
        });
        $('[data-jarallax-element]').jarallax({
            speed: 0.2
        });
    }

    function carouselTestimonialSetUp() {
        $(".carousel-testimonial-wrapper").each(function() {
            var id = $(this).attr('id');
            var speed_value = $(this).data('speed');
            var auto_value = $(this).data('auto');
            if (auto_value === true) {
                var mySwiper = new Swiper('#' + id, {
                    autoplay: {
                        delay: speed_value
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar-' + id,
                        hide: false,
                        draggable: true,
                        dragSize: '120px'
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    resistance: true,
                    resistanceRatio: 0.5,
                    breakpoints: {
                        767: {
                            slidesPerView: 'auto'
                        }
                    }
                });
                $('#' + id).hover(function() {
                    mySwiper.autoplay.stop();
                }, function() {
                    mySwiper.autoplay.start();
                });
            } else {
                var mySwiper = new Swiper('#' + id, {
                    autoplay: false,
                    scrollbar: {
                        el: '.swiper-scrollbar-' + id,
                        hide: false,
                        draggable: true,
                        dragSize: '120px'
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    resistance: true,
                    resistanceRatio: 0.5,
                    breakpoints: {
                        768: {
                            slidesPerView: 'auto'
                        }
                    }
                });
            }
        });
    }

    function animateElement() {
        $(".animate").each(function(i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window - 70) > top_of_object) {
                $(this).addClass('show-it');
                setTimeout(function() {
                    $(".animate.show-it").addClass('no-transition');
                }, 500);
            }
        });
    }
})(jQuery);
(() => {
    "use strict";
    var t = {
            d: (e, i) => {
                for (var s in i) t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: i[s]
                })
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
        },
        e = {};

    function i(t) {
        if (this.formData = {}, this.tree = {}, !(t instanceof FormData)) return this;
        this.formData = t;
        const e = () => {
            const t = new Map;
            return t.largestIndex = 0, t.set = function(e, i) {
                "" === e ? e = t.largestIndex++ : /^[0-9]+$/.test(e) && (e = parseInt(e), t.largestIndex <= e && (t.largestIndex = e + 1)), Map.prototype.set.call(t, e, i)
            }, t
        };
        this.tree = e();
        const i = /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
        for (const [t, s] of this.formData) {
            const o = t.match(i);
            if (o)
                if ("" === o.groups.array) this.tree.set(o.groups.name, s);
                else {
                    const t = [...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t, e]) => e));
                    t.unshift(o.groups.name);
                    const i = t.pop();
                    t.reduce(((t, i) => {
                        if (/^[0-9]+$/.test(i) && (i = parseInt(i)), t.get(i) instanceof Map) return t.get(i);
                        const s = e();
                        return t.set(i, s), s
                    }), this.tree).set(i, s)
                }
        }
    }
    t.r(e), t.d(e, {
        all: () => D,
        any: () => M,
        date: () => f,
        dayofweek: () => u,
        email: () => r,
        enum: () => h,
        file: () => m,
        maxdate: () => z,
        maxfilesize: () => $,
        maxitems: () => v,
        maxlength: () => x,
        maxnumber: () => b,
        mindate: () => A,
        minfilesize: () => j,
        minitems: () => w,
        minlength: () => g,
        minnumber: () => y,
        number: () => c,
        required: () => n,
        requiredfile: () => a,
        tel: () => l,
        time: () => d,
        url: () => p
    }), i.prototype.entries = function() {
        return this.tree.entries()
    }, i.prototype.get = function(t) {
        return this.tree.get(t)
    }, i.prototype.getAll = function(t) {
        if (!this.has(t)) return [];
        const e = t => {
            const i = [];
            if (t instanceof Map)
                for (const [s, o] of t) i.push(...e(o));
            else "" !== t && i.push(t);
            return i
        };
        return e(this.get(t))
    }, i.prototype.has = function(t) {
        return this.tree.has(t)
    }, i.prototype.keys = function() {
        return this.tree.keys()
    }, i.prototype.values = function() {
        return this.tree.values()
    };
    const s = i;

    function o({
        rule: t,
        field: e,
        error: i,
        ...s
    }) {
        this.rule = t, this.field = e, this.error = i, this.properties = s
    }
    const n = function(t) {
            if (0 === t.getAll(this.field).length) throw new o(this)
        },
        a = function(t) {
            if (0 === t.getAll(this.field).length) throw new o(this)
        },
        r = function(t) {
            if (!t.getAll(this.field).every((t => {
                    if ((t = t.trim()).length < 6) return !1;
                    if (-1 === t.indexOf("@", 1)) return !1;
                    if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
                    const [e, i] = t.split("@", 2);
                    if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
                    if (/\.{2,}/.test(i)) return !1;
                    if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i)) return !1;
                    const s = i.split(".");
                    if (s.length < 2) return !1;
                    for (const t of s) {
                        if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
                        if (!/^[a-z0-9-]+$/i.test(t)) return !1
                    }
                    return !0
                }))) throw new o(this)
        },
        p = function(t) {
            const e = t.getAll(this.field);
            if (!e.every((t => {
                    if ("" === (t = t.trim())) return !1;
                    try {
                        return (t => -1 !== ["http", "https", "ftp", "ftps", "mailto", "news", "irc", "irc6", "ircs", "gopher", "nntp", "feed", "telnet", "mms", "rtsp", "sms", "svn", "tel", "fax", "xmpp", "webcal", "urn"].indexOf(t))(new URL(t).protocol.replace(/:$/, ""))
                    } catch {
                        return !1
                    }
                }))) throw new o(this)
        },
        l = function(t) {
            if (!t.getAll(this.field).every((t => (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, ""), /^[+]?[0-9]+$/.test(t))))) throw new o(this)
        },
        c = function(t) {
            if (!t.getAll(this.field).every((t => (t = t.trim(), !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) || !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t))))) throw new o(this)
        },
        f = function(t) {
            if (!t.getAll(this.field).every((t => {
                    if (t = t.trim(), !/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)) return !1;
                    const e = new Date(t);
                    return !Number.isNaN(e.valueOf())
                }))) throw new o(this)
        },
        d = function(t) {
            if (!t.getAll(this.field).every((t => {
                    const e = t.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
                    if (!e) return !1;
                    const i = parseInt(e[1]),
                        s = parseInt(e[2]),
                        o = e[3] ? parseInt(e[3]) : 0;
                    return 0 <= i && i <= 23 && 0 <= s && s <= 59 && 0 <= o && o <= 59
                }))) throw new o(this)
        },
        m = function(t) {
            if (!t.getAll(this.field).every((t => t instanceof File && this.accept ? .some((e => /^\.[a-z0-9]+$/i.test(e) ? t.name.toLowerCase().endsWith(e.toLowerCase()) : (t => {
                    const e = [],
                        i = t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);
                    if (i) {
                        const t = i.groups.toplevel.toLowerCase(),
                            s = i.groups.sub.toLowerCase();
                        for (const [o, n] of (() => {
                                const t = new Map;
                                return t.set("jpg|jpeg|jpe", "image/jpeg"), t.set("gif", "image/gif"), t.set("png", "image/png"), t.set("bmp", "image/bmp"), t.set("tiff|tif", "image/tiff"), t.set("webp", "image/webp"), t.set("ico", "image/x-icon"), t.set("heic", "image/heic"), t.set("asf|asx", "video/x-ms-asf"), t.set("wmv", "video/x-ms-wmv"), t.set("wmx", "video/x-ms-wmx"), t.set("wm", "video/x-ms-wm"), t.set("avi", "video/avi"), t.set("divx", "video/divx"), t.set("flv", "video/x-flv"), t.set("mov|qt", "video/quicktime"), t.set("mpeg|mpg|mpe", "video/mpeg"), t.set("mp4|m4v", "video/mp4"), t.set("ogv", "video/ogg"), t.set("webm", "video/webm"), t.set("mkv", "video/x-matroska"), t.set("3gp|3gpp", "video/3gpp"), t.set("3g2|3gp2", "video/3gpp2"), t.set("txt|asc|c|cc|h|srt", "text/plain"), t.set("csv", "text/csv"), t.set("tsv", "text/tab-separated-values"), t.set("ics", "text/calendar"), t.set("rtx", "text/richtext"), t.set("css", "text/css"), t.set("htm|html", "text/html"), t.set("vtt", "text/vtt"), t.set("dfxp", "application/ttaf+xml"), t.set("mp3|m4a|m4b", "audio/mpeg"), t.set("aac", "audio/aac"), t.set("ra|ram", "audio/x-realaudio"), t.set("wav", "audio/wav"), t.set("ogg|oga", "audio/ogg"), t.set("flac", "audio/flac"), t.set("mid|midi", "audio/midi"), t.set("wma", "audio/x-ms-wma"), t.set("wax", "audio/x-ms-wax"), t.set("mka", "audio/x-matroska"), t.set("rtf", "application/rtf"), t.set("js", "application/javascript"), t.set("pdf", "application/pdf"), t.set("swf", "application/x-shockwave-flash"), t.set("class", "application/java"), t.set("tar", "application/x-tar"), t.set("zip", "application/zip"), t.set("gz|gzip", "application/x-gzip"), t.set("rar", "application/rar"), t.set("7z", "application/x-7z-compressed"), t.set("exe", "application/x-msdownload"), t.set("psd", "application/octet-stream"), t.set("xcf", "application/octet-stream"), t.set("doc", "application/msword"), t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"), t.set("wri", "application/vnd.ms-write"), t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"), t.set("mdb", "application/vnd.ms-access"), t.set("mpp", "application/vnd.ms-project"), t.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"), t.set("docm", "application/vnd.ms-word.document.macroEnabled.12"), t.set("dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"), t.set("dotm", "application/vnd.ms-word.template.macroEnabled.12"), t.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), t.set("xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"), t.set("xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"), t.set("xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"), t.set("xltm", "application/vnd.ms-excel.template.macroEnabled.12"), t.set("xlam", "application/vnd.ms-excel.addin.macroEnabled.12"), t.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"), t.set("pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"), t.set("ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"), t.set("ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"), t.set("potx", "application/vnd.openxmlformats-officedocument.presentationml.template"), t.set("potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"), t.set("ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"), t.set("sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"), t.set("sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"), t.set("onetoc|onetoc2|onetmp|onepkg", "application/onenote"), t.set("oxps", "application/oxps"), t.set("xps", "application/vnd.ms-xpsdocument"), t.set("odt", "application/vnd.oasis.opendocument.text"), t.set("odp", "application/vnd.oasis.opendocument.presentation"), t.set("ods", "application/vnd.oasis.opendocument.spreadsheet"), t.set("odg", "application/vnd.oasis.opendocument.graphics"), t.set("odc", "application/vnd.oasis.opendocument.chart"), t.set("odb", "application/vnd.oasis.opendocument.database"), t.set("odf", "application/vnd.oasis.opendocument.formula"), t.set("wp|wpd", "application/wordperfect"), t.set("key", "application/vnd.apple.keynote"), t.set("numbers", "application/vnd.apple.numbers"), t.set("pages", "application/vnd.apple.pages"), t
                            })())("*" === s && n.startsWith(t + "/") || n === i[0]) && e.push(...o.split("|"))
                    }
                    return e
                })(e).some((e => (e = "." + e.trim(), t.name.toLowerCase().endsWith(e.toLowerCase()))))))))) throw new o(this)
        },
        h = function(t) {
            if (!t.getAll(this.field).every((t => this.accept ? .some((e => t === String(e)))))) throw new o(this)
        },
        u = function(t) {
            if (!t.getAll(this.field).every((t => {
                    const e = 0 === (i = new Date(t).getDay()) ? 7 : i;
                    var i;
                    return this.accept ? .some((t => e === parseInt(t)))
                }))) throw new o(this)
        },
        w = function(t) {
            if (t.getAll(this.field).length < parseInt(this.threshold)) throw new o(this)
        },
        v = function(t) {
            const e = t.getAll(this.field);
            if (parseInt(this.threshold) < e.length) throw new o(this)
        },
        g = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    "string" == typeof t && (i += t.length)
                })), 0 !== i && i < parseInt(this.threshold)) throw new o(this)
        },
        x = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    "string" == typeof t && (i += t.length)
                })), parseInt(this.threshold) < i) throw new o(this)
        },
        y = function(t) {
            if (!t.getAll(this.field).every((t => !(parseFloat(t) < parseFloat(this.threshold))))) throw new o(this)
        },
        b = function(t) {
            if (!t.getAll(this.field).every((t => !(parseFloat(this.threshold) < parseFloat(t))))) throw new o(this)
        },
        A = function(t) {
            if (!t.getAll(this.field).every((t => (t = t.trim(), !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && t < this.threshold))))) throw new o(this)
        },
        z = function(t) {
            if (!t.getAll(this.field).every((t => (t = t.trim(), !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && this.threshold < t))))) throw new o(this)
        },
        j = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    t instanceof File && (i += t.size)
                })), i < parseInt(this.threshold)) throw new o(this)
        },
        $ = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    t instanceof File && (i += t.size)
                })), parseInt(this.threshold) < i) throw new o(this)
        },
        I = ({
            ruleObj: t,
            options: i
        }) => {
            const {
                rule: s,
                ...o
            } = t;
            return "function" == typeof e[s] && ("function" != typeof e[s].matches || e[s].matches(o, i))
        },
        O = ({
            ruleObj: t,
            formDataTree: i,
            options: s
        }) => {
            const {
                rule: o
            } = t;
            e[o].call(t, i, s)
        },
        E = [],
        k = t => [...E].reduce(((t, e) => i => e(i, t)), t),
        D = function(t, e = {}) {
            const i = (this.rules ? ? []).filter((t => I({
                    ruleObj: t,
                    options: e
                }))),
                s = k(O);
            if (!i.every((i => {
                    try {
                        s({
                            ruleObj: i,
                            formDataTree: t,
                            options: e
                        })
                    } catch (t) {
                        if (!(t instanceof o)) throw t;
                        if (void 0 !== t.error) throw t;
                        return !1
                    }
                    return !0
                }))) throw new o(this)
        },
        M = function(t, e = {}) {
            const i = (this.rules ? ? []).filter((t => I({
                    ruleObj: t,
                    options: e
                }))),
                s = k(O);
            if (!i.some((i => {
                    try {
                        s({
                            ruleObj: i,
                            formDataTree: t,
                            options: e
                        })
                    } catch (t) {
                        if (!(t instanceof o)) throw t;
                        return !1
                    }
                    return !0
                }))) throw new o(this)
        };
    var F;
    window.swv = {
        validators: e,
        validate: (t, e, i = {}) => {
            const n = (t.rules ? ? []).filter((t => I({
                ruleObj: t,
                options: i
            })));
            if (!n.length) return new Map;
            const a = k(O),
                r = new s(e),
                p = n.reduce(((t, e) => {
                    try {
                        a({
                            ruleObj: e,
                            formDataTree: r,
                            options: i
                        })
                    } catch (e) {
                        if (!(e instanceof o)) throw e;
                        if (void 0 !== e.field && !t.has(e.field) && void 0 !== e.error) return t.set(e.field, e)
                    }
                    return t
                }), new Map);
            for (const t of r.keys()) p.has(t) || p.set(t, {
                validInputs: r.getAll(t)
            });
            return p
        },
        use: t => {
            E.push(t)
        },
        ...null !== (F = window.swv) && void 0 !== F ? F : {}
    }
})();
(() => {
    "use strict";
    const e = e => Math.abs(parseInt(e, 10)),
        t = (e, t, a) => {
            const n = new CustomEvent(`wpcf7${t}`, {
                bubbles: !0,
                detail: a
            });
            "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(n)
        },
        a = (e, a) => {
            const n = new Map([
                ["init", "init"],
                ["validation_failed", "invalid"],
                ["acceptance_missing", "unaccepted"],
                ["spam", "spam"],
                ["aborted", "aborted"],
                ["mail_sent", "sent"],
                ["mail_failed", "failed"],
                ["submitting", "submitting"],
                ["resetting", "resetting"],
                ["validating", "validating"],
                ["payment_required", "payment-required"]
            ]);
            n.has(a) && (a = n.get(a)), Array.from(n.values()).includes(a) || (a = `custom-${a=(a=a.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);
            const r = e.getAttribute("data-status");
            if (e.wpcf7.status = a, e.setAttribute("data-status", a), e.classList.add(a), r && r !== a) {
                e.classList.remove(r);
                const a = {
                    contactFormId: e.wpcf7.id,
                    pluginVersion: e.wpcf7.pluginVersion,
                    contactFormLocale: e.wpcf7.locale,
                    unitTag: e.wpcf7.unitTag,
                    containerPostId: e.wpcf7.containerPost,
                    status: e.wpcf7.status,
                    prevStatus: r
                };
                t(e, "statuschanged", a)
            }
            return a
        },
        n = e => {
            const {
                root: t,
                namespace: a = "contact-form-7/v1"
            } = wpcf7.api;
            return r.reduceRight(((e, t) => a => t(a, e)), (e => {
                let n, r, {
                    url: o,
                    path: c,
                    endpoint: s,
                    headers: i,
                    body: l,
                    data: p,
                    ...d
                } = e;
                "string" == typeof s && (n = a.replace(/^\/|\/$/g, ""), r = s.replace(/^\//, ""), c = r ? n + "/" + r : n), "string" == typeof c && (-1 !== t.indexOf("?") && (c = c.replace("?", "&")), c = c.replace(/^\//, ""), o = t + c), i = {
                    Accept: "application/json, */*;q=0.1",
                    ...i
                }, delete i["X-WP-Nonce"], p && (l = JSON.stringify(p), i["Content-Type"] = "application/json");
                const u = {
                        code: "fetch_error",
                        message: "You are probably offline."
                    },
                    f = {
                        code: "invalid_json",
                        message: "The response is not a valid JSON response."
                    };
                return window.fetch(o || c || window.location.href, { ...d,
                    headers: i,
                    body: l
                }).then((e => Promise.resolve(e).then((e => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e
                })).then((e => {
                    if (204 === e.status) return null;
                    if (e && e.json) return e.json().catch((() => {
                        throw f
                    }));
                    throw f
                }))), (() => {
                    throw u
                }))
            }))(e)
        },
        r = [];

    function o(e, t = {}) {
        const {
            target: n,
            scope: r = e,
            ...o
        } = t;
        if (void 0 === e.wpcf7 ? .schema) return;
        const l = { ...e.wpcf7.schema
        };
        if (void 0 !== n) {
            if (!e.contains(n)) return;
            if (!n.closest(".wpcf7-form-control-wrap[data-name]")) return;
            if (n.closest(".novalidate")) return
        }
        const p = r.querySelectorAll(".wpcf7-form-control-wrap"),
            d = Array.from(p).reduce(((e, t) => (t.closest(".novalidate") || t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t => {
                if (t.name) switch (t.type) {
                    case "button":
                    case "image":
                    case "reset":
                    case "submit":
                        break;
                    case "checkbox":
                    case "radio":
                        t.checked && e.append(t.name, t.value);
                        break;
                    case "select-multiple":
                        for (const a of t.selectedOptions) e.append(t.name, a.value);
                        break;
                    case "file":
                        for (const a of t.files) e.append(t.name, a);
                        break;
                    default:
                        e.append(t.name, t.value)
                }
            })), e)), new FormData),
            u = e.getAttribute("data-status");
        Promise.resolve(a(e, "validating")).then((a => {
            if (void 0 !== swv) {
                const a = swv.validate(l, d, t);
                for (const t of p) {
                    if (void 0 === t.dataset.name) continue;
                    const o = t.dataset.name;
                    if (a.has(o)) {
                        const {
                            error: t,
                            validInputs: n
                        } = a.get(o);
                        s(e, o), void 0 !== t && c(e, o, t, {
                            scope: r
                        }), i(e, o, null != n ? n : [])
                    }
                    if (t.contains(n)) break
                }
            }
        })).finally((() => {
            a(e, u)
        }))
    }
    n.use = e => {
        r.unshift(e)
    };
    const c = (e, t, a, n) => {
            const {
                scope: r = e,
                ...o
            } = null != n ? n : {}, c = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""), s = e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);
            (() => {
                const t = document.createElement("li");
                t.setAttribute("id", c), s && s.id ? t.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`) : t.insertAdjacentText("beforeend", a), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
            })(), r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
                const t = document.createElement("span");
                t.classList.add("wpcf7-not-valid-tip"), t.setAttribute("aria-hidden", "true"), t.insertAdjacentText("beforeend", a), e.appendChild(t), e.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "true")
                })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                    e.classList.add("wpcf7-not-valid"), e.setAttribute("aria-describedby", c), "function" == typeof e.setCustomValidity && e.setCustomValidity(a), e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
                        t.setAttribute("style", "display: none")
                    })), t.addEventListener("click", (e => {
                        t.setAttribute("style", "display: none")
                    })))
                }))
            }))
        },
        s = (e, t) => {
            const a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
            e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`) ? .remove(), e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
                e.querySelector(".wpcf7-not-valid-tip") ? .remove(), e.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "false")
                })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                    e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid"), "function" == typeof e.setCustomValidity && e.setCustomValidity("")
                }))
            }))
        },
        i = (e, t, a) => {
            e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e => {
                if ("output" === e.tagName.toLowerCase()) {
                    const t = e;
                    0 === a.length && a.push(t.dataset.default), a.slice(0, 1).forEach((e => {
                        e instanceof File && (e = e.name), t.textContent = e
                    }))
                } else e.querySelectorAll("output").forEach((e => {
                    e.hasAttribute("data-default") ? 0 === a.length ? e.removeAttribute("hidden") : e.setAttribute("hidden", "hidden") : e.remove()
                })), a.forEach((a => {
                    a instanceof File && (a = a.name);
                    const n = document.createElement("output");
                    n.setAttribute("name", t), n.textContent = a, e.appendChild(n)
                }))
            }))
        };

    function l(e, r = {}) {
        if (wpcf7.blocked) return p(e), void a(e, "submitting");
        const o = new FormData(e);
        r.submitter && r.submitter.name && o.append(r.submitter.name, r.submitter.value);
        const s = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(o, (e => {
                const t = e[0],
                    a = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: a
                }
            })).filter((e => !1 !== e)),
            formData: o
        };
        n({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: o,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: s
            }
        }).then((n => {
            const r = a(e, n.status);
            return s.status = n.status, s.apiResponse = n, ["invalid", "unaccepted", "spam", "aborted"].includes(r) ? t(e, r, s) : ["sent", "failed"].includes(r) && t(e, `mail${r}`, s), t(e, "submit", s), n
        })).then((t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && t.invalid_fields.forEach((t => {
                c(e, t.field, t.message)
            })), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach((e => {
                e.innerText = t.message
            }))
        })).catch((e => console.error(e)))
    }
    n.use(((e, n) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {
                form: n,
                detail: r
            } = e.wpcf7;
            p(n), t(n, "beforesubmit", r), a(n, "submitting")
        }
        return n(e)
    }));
    const p = e => {
        e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t => {
            t.dataset.name && s(e, t.dataset.name)
        })), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.querySelectorAll(".wpcf7-response-output").forEach((e => {
            e.innerText = ""
        }))
    };

    function d(e) {
        const r = new FormData(e),
            o = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                inputs: Array.from(r, (e => {
                    const t = e[0],
                        a = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: a
                    }
                })).filter((e => !1 !== e)),
                formData: r
            };
        n({
            endpoint: `contact-forms/${e.wpcf7.id}/refill`,
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: o
            }
        }).then((n => {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, a(e, "mail_sent")) : a(e, "init"), o.apiResponse = n, t(e, "reset", o)
        })).catch((e => console.error(e)))
    }
    n.use(((e, t) => {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            const {
                form: t,
                detail: n
            } = e.wpcf7;
            p(t), a(t, "resetting")
        }
        return t(e)
    }));
    const u = (e, t) => {
            for (const a in t) {
                const n = t[a];
                e.querySelectorAll(`input[name="${a}"]`).forEach((e => {
                    e.value = ""
                })), e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e => {
                    e.setAttribute("src", n)
                }));
                const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                r && e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e => {
                    e.value = r[1]
                }))
            }
        },
        f = (e, t) => {
            for (const a in t) {
                const n = t[a][0],
                    r = t[a][1];
                e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e => {
                    e.querySelector(`input[name="${a}"]`).value = "", e.querySelector(".wpcf7-quiz-label").textContent = n, e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value = r
                }))
            }
        };

    function m(t) {
        const a = new FormData(t);
        t.wpcf7 = {
            id: e(a.get("_wpcf7")),
            status: t.getAttribute("data-status"),
            pluginVersion: a.get("_wpcf7_version"),
            locale: a.get("_wpcf7_locale"),
            unitTag: a.get("_wpcf7_unit_tag"),
            containerPost: e(a.get("_wpcf7_container_post")),
            parent: t.closest(".wpcf7"),
            get schema() {
                return wpcf7.schemas.get(this.id)
            }
        }, wpcf7.schemas.set(t.wpcf7.id, void 0), t.querySelectorAll(".has-spinner").forEach((e => {
            e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
        })), (e => {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t => {
                t.addEventListener("change", (t => {
                    const a = t.target.getAttribute("name");
                    e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e => {
                        e !== t.target && (e.checked = !1)
                    }))
                }))
            }))
        })(t), (e => {
            e.querySelectorAll(".has-free-text").forEach((t => {
                const a = t.querySelector("input.wpcf7-free-text"),
                    n = t.querySelector('input[type="checkbox"], input[type="radio"]');
                a.disabled = !n.checked, e.addEventListener("change", (e => {
                    a.disabled = !n.checked, e.target === n && n.checked && a.focus()
                }))
            }))
        })(t), (e => {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((e => {
                e.addEventListener("change", (t => {
                    let a = e.value.trim();
                    a && !a.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== a.indexOf(".") && (a = a.replace(/^\/+/, ""), a = "http://" + a), e.value = a
                }))
            }))
        })(t), (e => {
            if (!e.querySelector(".wpcf7-acceptance") || e.classList.contains("wpcf7-acceptance-as-validation")) return;
            const t = () => {
                let t = !0;
                e.querySelectorAll(".wpcf7-acceptance").forEach((e => {
                    if (!t || e.classList.contains("optional")) return;
                    const a = e.querySelector('input[type="checkbox"]');
                    (e.classList.contains("invert") && a.checked || !e.classList.contains("invert") && !a.checked) && (t = !1)
                })), e.querySelectorAll(".wpcf7-submit").forEach((e => {
                    e.disabled = !t
                }))
            };
            t(), e.addEventListener("change", (e => {
                t()
            })), e.addEventListener("wpcf7reset", (e => {
                t()
            }))
        })(t), (t => {
            const a = (t, a) => {
                    const n = e(t.getAttribute("data-starting-value")),
                        r = e(t.getAttribute("data-maximum-value")),
                        o = e(t.getAttribute("data-minimum-value")),
                        c = t.classList.contains("down") ? n - a.value.length : a.value.length;
                    t.setAttribute("data-current-value", c), t.innerText = c, r && r < a.value.length ? t.classList.add("too-long") : t.classList.remove("too-long"), o && a.value.length < o ? t.classList.add("too-short") : t.classList.remove("too-short")
                },
                n = e => {
                    e = {
                        init: !1,
                        ...e
                    }, t.querySelectorAll(".wpcf7-character-count").forEach((n => {
                        const r = n.getAttribute("data-target-name"),
                            o = t.querySelector(`[name="${r}"]`);
                        o && (o.value = o.defaultValue, a(n, o), e.init && o.addEventListener("keyup", (e => {
                            a(n, o)
                        })))
                    }))
                };
            n({
                init: !0
            }), t.addEventListener("wpcf7reset", (e => {
                n()
            }))
        })(t), window.addEventListener("load", (e => {
            wpcf7.cached && t.reset()
        })), t.addEventListener("reset", (e => {
            wpcf7.reset(t)
        })), t.addEventListener("submit", (e => {
            wpcf7.submit(t, {
                submitter: e.submitter
            }), e.preventDefault()
        })), t.addEventListener("wpcf7submit", (e => {
            e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha), e.detail.apiResponse.quiz && f(t, e.detail.apiResponse.quiz)
        })), t.addEventListener("wpcf7reset", (e => {
            e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha), e.detail.apiResponse.quiz && f(t, e.detail.apiResponse.quiz)
        })), t.addEventListener("change", (e => {
            e.target.closest(".wpcf7-form-control") && wpcf7.validate(t, {
                target: e.target
            })
        })), t.addEventListener("wpcf7statuschanged", (e => {
            const a = e.detail.status;
            t.querySelectorAll(".active-on-any").forEach((e => {
                e.removeAttribute("inert"), e.classList.remove("active-on-any")
            })), t.querySelectorAll(`.inert-on-${a}`).forEach((e => {
                e.setAttribute("inert", "inert"), e.classList.add("active-on-any")
            }))
        }))
    }
    document.addEventListener("DOMContentLoaded", (e => {
        var t;
        if ("undefined" != typeof wpcf7)
            if (void 0 !== wpcf7.api)
                if ("function" == typeof window.fetch)
                    if ("function" == typeof window.FormData)
                        if ("function" == typeof NodeList.prototype.forEach)
                            if ("function" == typeof String.prototype.replaceAll) {
                                wpcf7 = {
                                    init: m,
                                    submit: l,
                                    reset: d,
                                    validate: o,
                                    schemas: new Map,
                                    ...null !== (t = wpcf7) && void 0 !== t ? t : {}
                                }, document.querySelectorAll(".wpcf7 > form").forEach((e => {
                                    wpcf7.init(e), e.closest(".wpcf7").classList.replace("no-js", "js")
                                }));
                                for (const e of wpcf7.schemas.keys()) n({
                                    endpoint: `contact-forms/${e}/feedback/schema`,
                                    method: "GET"
                                }).then((t => {
                                    wpcf7.schemas.set(e, t)
                                }))
                            } else console.error("Your browser does not support String.replaceAll().");
        else console.error("Your browser does not support NodeList.forEach().");
        else console.error("Your browser does not support window.FormData().");
        else console.error("Your browser does not support window.fetch().");
        else console.error("wpcf7.api is not defined.");
        else console.error("wpcf7 is not defined.")
    }))
})();
/*! SmartMenus jQuery Plugin - v1.1.1 - July 23, 2020
 * http://www.smartmenus.org/
 * Copyright Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */
(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(jQuery)
})(function($) {
    function initMouseDetection(t) {
        var e = ".smartmenus_mouse";
        if (mouseDetectionEnabled || t) mouseDetectionEnabled && t && ($(document).off(e), mouseDetectionEnabled = !1);
        else {
            var i = !0,
                s = null,
                o = {
                    mousemove: function(t) {
                        var e = {
                            x: t.pageX,
                            y: t.pageY,
                            timeStamp: (new Date).getTime()
                        };
                        if (s) {
                            var o = Math.abs(s.x - e.x),
                                a = Math.abs(s.y - e.y);
                            if ((o > 0 || a > 0) && 4 >= o && 4 >= a && 300 >= e.timeStamp - s.timeStamp && (mouse = !0, i)) {
                                var n = $(t.target).closest("a");
                                n.is("a") && $.each(menuTrees, function() {
                                    return $.contains(this.$root[0], n[0]) ? (this.itemEnter({
                                        currentTarget: n[0]
                                    }), !1) : void 0
                                }), i = !1
                            }
                        }
                        s = e
                    }
                };
            o[touchEvents ? "touchstart" : "pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut"] = function(t) {
                isTouchEvent(t.originalEvent) && (mouse = !1)
            }, $(document).on(getEventsNS(o, e)), mouseDetectionEnabled = !0
        }
    }

    function isTouchEvent(t) {
        return !/^(4|mouse)$/.test(t.pointerType)
    }

    function getEventsNS(t, e) {
        e || (e = "");
        var i = {};
        for (var s in t) i[s.split(" ").join(e + " ") + e] = t[s];
        return i
    }
    var menuTrees = [],
        mouse = !1,
        touchEvents = "ontouchstart" in window,
        mouseDetectionEnabled = !1,
        requestAnimationFrame = window.requestAnimationFrame || function(t) {
            return setTimeout(t, 1e3 / 60)
        },
        cancelAnimationFrame = window.cancelAnimationFrame || function(t) {
            clearTimeout(t)
        },
        canAnimate = !!$.fn.animate;
    return $.SmartMenus = function(t, e) {
        this.$root = $(t), this.opts = e, this.rootId = "", this.accessIdPrefix = "", this.$subArrow = null, this.activatedItems = [], this.visibleSubMenus = [], this.showTimeout = 0, this.hideTimeout = 0, this.scrollTimeout = 0, this.clickActivated = !1, this.focusActivated = !1, this.zIndexInc = 0, this.idInc = 0, this.$firstLink = null, this.$firstSub = null, this.disabled = !1, this.$disableOverlay = null, this.$touchScrollingSub = null, this.cssTransforms3d = "perspective" in t.style || "webkitPerspective" in t.style, this.wasCollapsible = !1, this.init()
    }, $.extend($.SmartMenus, {
        hideAll: function() {
            $.each(menuTrees, function() {
                this.menuHideAll()
            })
        },
        destroy: function() {
            for (; menuTrees.length;) menuTrees[0].destroy();
            initMouseDetection(!0)
        },
        prototype: {
            init: function(t) {
                var e = this;
                if (!t) {
                    menuTrees.push(this), this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, ""), this.accessIdPrefix = "sm-" + this.rootId + "-", this.$root.hasClass("sm-rtl") && (this.opts.rightToLeftSubMenus = !0);
                    var i = ".smartmenus";
                    this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).on(getEventsNS({
                        "mouseover focusin": $.proxy(this.rootOver, this),
                        "mouseout focusout": $.proxy(this.rootOut, this),
                        keydown: $.proxy(this.rootKeyDown, this)
                    }, i)).on(getEventsNS({
                        mouseenter: $.proxy(this.itemEnter, this),
                        mouseleave: $.proxy(this.itemLeave, this),
                        mousedown: $.proxy(this.itemDown, this),
                        focus: $.proxy(this.itemFocus, this),
                        blur: $.proxy(this.itemBlur, this),
                        click: $.proxy(this.itemClick, this)
                    }, i), "a"), i += this.rootId, this.opts.hideOnClick && $(document).on(getEventsNS({
                        touchstart: $.proxy(this.docTouchStart, this),
                        touchmove: $.proxy(this.docTouchMove, this),
                        touchend: $.proxy(this.docTouchEnd, this),
                        click: $.proxy(this.docClick, this)
                    }, i)), $(window).on(getEventsNS({
                        "resize orientationchange": $.proxy(this.winResize, this)
                    }, i)), this.opts.subIndicators && (this.$subArrow = $("<span/>").addClass("sub-arrow"), this.opts.subIndicatorsText && this.$subArrow.html(this.opts.subIndicatorsText)), initMouseDetection()
                }
                if (this.$firstSub = this.$root.find("ul").each(function() {
                        e.menuInit($(this))
                    }).eq(0), this.$firstLink = this.$root.find("a").eq(0), this.opts.markCurrentItem) {
                    var s = /(index|default)\.[^#\?\/]*/i,
                        o = /#.*/,
                        a = window.location.href.replace(s, ""),
                        n = a.replace(o, "");
                    this.$root.find("a:not(.mega-menu a)").each(function() {
                        var t = this.href.replace(s, ""),
                            i = $(this);
                        (t == a || t == n) && (i.addClass("current"), e.opts.markCurrentTree && i.parentsUntil("[data-smartmenus-id]", "ul").each(function() {
                            $(this).dataSM("parent-a").addClass("current")
                        }))
                    })
                }
                this.wasCollapsible = this.isCollapsible()
            },
            destroy: function(t) {
                if (!t) {
                    var e = ".smartmenus";
                    this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").off(e), e += this.rootId, $(document).off(e), $(window).off(e), this.opts.subIndicators && (this.$subArrow = null)
                }
                this.menuHideAll();
                var i = this;
                this.$root.find("ul").each(function() {
                    var t = $(this);
                    t.dataSM("scroll-arrows") && t.dataSM("scroll-arrows").remove(), t.dataSM("shown-before") && ((i.opts.subMenusMinWidth || i.opts.subMenusMaxWidth) && t.css({
                        width: "",
                        minWidth: "",
                        maxWidth: ""
                    }).removeClass("sm-nowrap"), t.dataSM("scroll-arrows") && t.dataSM("scroll-arrows").remove(), t.css({
                        zIndex: "",
                        top: "",
                        left: "",
                        marginLeft: "",
                        marginTop: "",
                        display: ""
                    })), 0 == (t.attr("id") || "").indexOf(i.accessIdPrefix) && t.removeAttr("id")
                }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"), this.$root.find("a.has-submenu").each(function() {
                    var t = $(this);
                    0 == t.attr("id").indexOf(i.accessIdPrefix) && t.removeAttr("id")
                }).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"), this.opts.subIndicators && this.$root.find("span.sub-arrow").remove(), this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"), t || (this.$root = null, this.$firstLink = null, this.$firstSub = null, this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), menuTrees.splice($.inArray(this, menuTrees), 1))
            },
            disable: function(t) {
                if (!this.disabled) {
                    if (this.menuHideAll(), !t && !this.opts.isPopup && this.$root.is(":visible")) {
                        var e = this.$root.offset();
                        this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
                            position: "absolute",
                            top: e.top,
                            left: e.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight(),
                            zIndex: this.getStartZIndex(!0),
                            opacity: 0
                        }).appendTo(document.body)
                    }
                    this.disabled = !0
                }
            },
            docClick: function(t) {
                return this.$touchScrollingSub ? (this.$touchScrollingSub = null, void 0) : ((this.visibleSubMenus.length && !$.contains(this.$root[0], t.target) || $(t.target).closest("a").length) && this.menuHideAll(), void 0)
            },
            docTouchEnd: function() {
                if (this.lastTouch) {
                    if (!(!this.visibleSubMenus.length || void 0 !== this.lastTouch.x2 && this.lastTouch.x1 != this.lastTouch.x2 || void 0 !== this.lastTouch.y2 && this.lastTouch.y1 != this.lastTouch.y2 || this.lastTouch.target && $.contains(this.$root[0], this.lastTouch.target))) {
                        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                        var t = this;
                        this.hideTimeout = setTimeout(function() {
                            t.menuHideAll()
                        }, 350)
                    }
                    this.lastTouch = null
                }
            },
            docTouchMove: function(t) {
                if (this.lastTouch) {
                    var e = t.originalEvent.touches[0];
                    this.lastTouch.x2 = e.pageX, this.lastTouch.y2 = e.pageY
                }
            },
            docTouchStart: function(t) {
                var e = t.originalEvent.touches[0];
                this.lastTouch = {
                    x1: e.pageX,
                    y1: e.pageY,
                    target: e.target
                }
            },
            enable: function() {
                this.disabled && (this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), this.disabled = !1)
            },
            getClosestMenu: function(t) {
                for (var e = $(t).closest("ul"); e.dataSM("in-mega");) e = e.parent().closest("ul");
                return e[0] || null
            },
            getHeight: function(t) {
                return this.getOffset(t, !0)
            },
            getOffset: function(t, e) {
                var i;
                "none" == t.css("display") && (i = {
                    position: t[0].style.position,
                    visibility: t[0].style.visibility
                }, t.css({
                    position: "absolute",
                    visibility: "hidden"
                }).show());
                var s = t[0].getBoundingClientRect && t[0].getBoundingClientRect(),
                    o = s && (e ? s.height || s.bottom - s.top : s.width || s.right - s.left);
                return o || 0 === o || (o = e ? t[0].offsetHeight : t[0].offsetWidth), i && t.hide().css(i), o
            },
            getStartZIndex: function(t) {
                var e = parseInt(this[t ? "$root" : "$firstSub"].css("z-index"));
                return !t && isNaN(e) && (e = parseInt(this.$root.css("z-index"))), isNaN(e) ? 1 : e
            },
            getTouchPoint: function(t) {
                return t.touches && t.touches[0] || t.changedTouches && t.changedTouches[0] || t
            },
            getViewport: function(t) {
                var e = t ? "Height" : "Width",
                    i = document.documentElement["client" + e],
                    s = window["inner" + e];
                return s && (i = Math.min(i, s)), i
            },
            getViewportHeight: function() {
                return this.getViewport(!0)
            },
            getViewportWidth: function() {
                return this.getViewport()
            },
            getWidth: function(t) {
                return this.getOffset(t)
            },
            handleEvents: function() {
                return !this.disabled && this.isCSSOn()
            },
            handleItemEvents: function(t) {
                return this.handleEvents() && !this.isLinkInMegaMenu(t)
            },
            isCollapsible: function() {
                return "static" == this.$firstSub.css("position")
            },
            isCSSOn: function() {
                return "inline" != this.$firstLink.css("display")
            },
            isFixed: function() {
                var t = "fixed" == this.$root.css("position");
                return t || this.$root.parentsUntil("body").each(function() {
                    return "fixed" == $(this).css("position") ? (t = !0, !1) : void 0
                }), t
            },
            isLinkInMegaMenu: function(t) {
                return $(this.getClosestMenu(t[0])).hasClass("mega-menu")
            },
            isTouchMode: function() {
                return !mouse || this.opts.noMouseOver || this.isCollapsible()
            },
            itemActivate: function(t, e) {
                var i = t.closest("ul"),
                    s = i.dataSM("level");
                if (s > 1 && (!this.activatedItems[s - 2] || this.activatedItems[s - 2][0] != i.dataSM("parent-a")[0])) {
                    var o = this;
                    $(i.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(i).each(function() {
                        o.itemActivate($(this).dataSM("parent-a"))
                    })
                }
                if ((!this.isCollapsible() || e) && this.menuHideSubMenus(this.activatedItems[s - 1] && this.activatedItems[s - 1][0] == t[0] ? s : s - 1), this.activatedItems[s - 1] = t, this.$root.triggerHandler("activate.smapi", t[0]) !== !1) {
                    var a = t.dataSM("sub");
                    a && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated) && this.menuShow(a)
                }
            },
            itemBlur: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && this.$root.triggerHandler("blur.smapi", e[0])
            },
            itemClick: function(t) {
                var e = $(t.currentTarget);
                if (this.handleItemEvents(e)) {
                    if (this.$touchScrollingSub && this.$touchScrollingSub[0] == e.closest("ul")[0]) return this.$touchScrollingSub = null, t.stopPropagation(), !1;
                    if (this.$root.triggerHandler("click.smapi", e[0]) === !1) return !1;
                    var i = e.dataSM("sub"),
                        s = i ? 2 == i.dataSM("level") : !1;
                    if (i) {
                        var o = $(t.target).is(".sub-arrow"),
                            a = this.isCollapsible(),
                            n = /toggle$/.test(this.opts.collapsibleBehavior),
                            r = /link$/.test(this.opts.collapsibleBehavior),
                            h = /^accordion/.test(this.opts.collapsibleBehavior);
                        if (i.is(":visible")) {
                            if (!a && this.opts.showOnClick && s) return this.menuHide(i), this.clickActivated = !1, this.focusActivated = !1, !1;
                            if (a && (n || o)) return this.itemActivate(e, h), this.menuHide(i), !1
                        } else if ((!r || !a || o) && (!a && this.opts.showOnClick && s && (this.clickActivated = !0), this.itemActivate(e, h), i.is(":visible"))) return this.focusActivated = !0, !1
                    }
                    return !a && this.opts.showOnClick && s || e.hasClass("disabled") || this.$root.triggerHandler("select.smapi", e[0]) === !1 ? !1 : void 0
                }
            },
            itemDown: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && e.dataSM("mousedown", !0)
            },
            itemEnter: function(t) {
                var e = $(t.currentTarget);
                if (this.handleItemEvents(e)) {
                    if (!this.isTouchMode()) {
                        this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                        var i = this;
                        this.showTimeout = setTimeout(function() {
                            i.itemActivate(e)
                        }, this.opts.showOnClick && 1 == e.closest("ul").dataSM("level") ? 1 : this.opts.showTimeout)
                    }
                    this.$root.triggerHandler("mouseenter.smapi", e[0])
                }
            },
            itemFocus: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && (!this.focusActivated || this.isTouchMode() && e.dataSM("mousedown") || this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0] == e[0] || this.itemActivate(e, !0), this.$root.triggerHandler("focus.smapi", e[0]))
            },
            itemLeave: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && (this.isTouchMode() || (e[0].blur(), this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0)), e.removeDataSM("mousedown"), this.$root.triggerHandler("mouseleave.smapi", e[0]))
            },
            menuHide: function(t) {
                if (this.$root.triggerHandler("beforehide.smapi", t[0]) !== !1 && (canAnimate && t.stop(!0, !0), "none" != t.css("display"))) {
                    var e = function() {
                        t.css("z-index", "")
                    };
                    this.isCollapsible() ? canAnimate && this.opts.collapsibleHideFunction ? this.opts.collapsibleHideFunction.call(this, t, e) : t.hide(this.opts.collapsibleHideDuration, e) : canAnimate && this.opts.hideFunction ? this.opts.hideFunction.call(this, t, e) : t.hide(this.opts.hideDuration, e), t.dataSM("scroll") && (this.menuScrollStop(t), t.css({
                        "touch-action": "",
                        "-ms-touch-action": "",
                        "-webkit-transform": "",
                        transform: ""
                    }).off(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()), t.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded", "false"), t.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    });
                    var i = t.dataSM("level");
                    this.activatedItems.splice(i - 1, 1), this.visibleSubMenus.splice($.inArray(t, this.visibleSubMenus), 1), this.$root.triggerHandler("hide.smapi", t[0])
                }
            },
            menuHideAll: function() {
                this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                for (var t = this.opts.isPopup ? 1 : 0, e = this.visibleSubMenus.length - 1; e >= t; e--) this.menuHide(this.visibleSubMenus[e]);
                this.opts.isPopup && (canAnimate && this.$root.stop(!0, !0), this.$root.is(":visible") && (canAnimate && this.opts.hideFunction ? this.opts.hideFunction.call(this, this.$root) : this.$root.hide(this.opts.hideDuration))), this.activatedItems = [], this.visibleSubMenus = [], this.clickActivated = !1, this.focusActivated = !1, this.zIndexInc = 0, this.$root.triggerHandler("hideAll.smapi")
            },
            menuHideSubMenus: function(t) {
                for (var e = this.activatedItems.length - 1; e >= t; e--) {
                    var i = this.activatedItems[e].dataSM("sub");
                    i && this.menuHide(i)
                }
            },
            menuInit: function(t) {
                if (!t.dataSM("in-mega")) {
                    t.hasClass("mega-menu") && t.find("ul").dataSM("in-mega", !0);
                    for (var e = 2, i = t[0];
                        (i = i.parentNode.parentNode) != this.$root[0];) e++;
                    var s = t.prevAll("a").eq(-1);
                    s.length || (s = t.prevAll().find("a").eq(-1)), s.addClass("has-submenu").dataSM("sub", t), t.dataSM("parent-a", s).dataSM("level", e).parent().dataSM("sub", t);
                    var o = s.attr("id") || this.accessIdPrefix + ++this.idInc,
                        a = t.attr("id") || this.accessIdPrefix + ++this.idInc;
                    s.attr({
                        id: o,
                        "aria-haspopup": "true",
                        "aria-controls": a,
                        "aria-expanded": "false"
                    }), t.attr({
                        id: a,
                        role: "group",
                        "aria-hidden": "true",
                        "aria-labelledby": o,
                        "aria-expanded": "false"
                    }), this.opts.subIndicators && s[this.opts.subIndicatorsPos](this.$subArrow.clone())
                }
            },
            menuPosition: function(t) {
                var e, i, s = t.dataSM("parent-a"),
                    o = s.closest("li"),
                    a = o.parent(),
                    n = t.dataSM("level"),
                    r = this.getWidth(t),
                    h = this.getHeight(t),
                    u = s.offset(),
                    l = u.left,
                    c = u.top,
                    d = this.getWidth(s),
                    m = this.getHeight(s),
                    p = $(window),
                    f = p.scrollLeft(),
                    v = p.scrollTop(),
                    b = this.getViewportWidth(),
                    S = this.getViewportHeight(),
                    g = a.parent().is("[data-sm-horizontal-sub]") || 2 == n && !a.hasClass("sm-vertical"),
                    w = this.opts.rightToLeftSubMenus && !o.is("[data-sm-reverse]") || !this.opts.rightToLeftSubMenus && o.is("[data-sm-reverse]"),
                    M = 2 == n ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
                    T = 2 == n ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY;
                if (g ? (e = w ? d - r - M : M, i = this.opts.bottomToTopSubMenus ? -h - T : m + T) : (e = w ? M - r : d - M, i = this.opts.bottomToTopSubMenus ? m - T - h : T), this.opts.keepInViewport) {
                    var y = l + e,
                        I = c + i;
                    if (w && f > y ? e = g ? f - y + e : d - M : !w && y + r > f + b && (e = g ? f + b - r - y + e : M - r), g || (S > h && I + h > v + S ? i += v + S - h - I : (h >= S || v > I) && (i += v - I)), g && (I + h > v + S + .49 || v > I) || !g && h > S + .49) {
                        var x = this;
                        t.dataSM("scroll-arrows") || t.dataSM("scroll-arrows", $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).on({
                            mouseenter: function() {
                                t.dataSM("scroll").up = $(this).hasClass("scroll-up"), x.menuScroll(t)
                            },
                            mouseleave: function(e) {
                                x.menuScrollStop(t), x.menuScrollOut(t, e)
                            },
                            "mousewheel DOMMouseScroll": function(t) {
                                t.preventDefault()
                            }
                        }).insertAfter(t));
                        var A = ".smartmenus_scroll";
                        if (t.dataSM("scroll", {
                                y: this.cssTransforms3d ? 0 : i - m,
                                step: 1,
                                itemH: m,
                                subH: h,
                                arrowDownH: this.getHeight(t.dataSM("scroll-arrows").eq(1))
                            }).on(getEventsNS({
                                mouseover: function(e) {
                                    x.menuScrollOver(t, e)
                                },
                                mouseout: function(e) {
                                    x.menuScrollOut(t, e)
                                },
                                "mousewheel DOMMouseScroll": function(e) {
                                    x.menuScrollMousewheel(t, e)
                                }
                            }, A)).dataSM("scroll-arrows").css({
                                top: "auto",
                                left: "0",
                                marginLeft: e + (parseInt(t.css("border-left-width")) || 0),
                                width: r - (parseInt(t.css("border-left-width")) || 0) - (parseInt(t.css("border-right-width")) || 0),
                                zIndex: t.css("z-index")
                            }).eq(g && this.opts.bottomToTopSubMenus ? 0 : 1).show(), this.isFixed()) {
                            var C = {};
                            C[touchEvents ? "touchstart touchmove touchend" : "pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp"] = function(e) {
                                x.menuScrollTouch(t, e)
                            }, t.css({
                                "touch-action": "none",
                                "-ms-touch-action": "none"
                            }).on(getEventsNS(C, A))
                        }
                    }
                }
                t.css({
                    top: "auto",
                    left: "0",
                    marginLeft: e,
                    marginTop: i - m
                })
            },
            menuScroll: function(t, e, i) {
                var s, o = t.dataSM("scroll"),
                    a = t.dataSM("scroll-arrows"),
                    n = o.up ? o.upEnd : o.downEnd;
                if (!e && o.momentum) {
                    if (o.momentum *= .92, s = o.momentum, .5 > s) return this.menuScrollStop(t), void 0
                } else s = i || (e || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(o.step));
                var r = t.dataSM("level");
                if (this.activatedItems[r - 1] && this.activatedItems[r - 1].dataSM("sub") && this.activatedItems[r - 1].dataSM("sub").is(":visible") && this.menuHideSubMenus(r - 1), o.y = o.up && o.y >= n || !o.up && n >= o.y ? o.y : Math.abs(n - o.y) > s ? o.y + (o.up ? s : -s) : n, t.css(this.cssTransforms3d ? {
                        "-webkit-transform": "translate3d(0, " + o.y + "px, 0)",
                        transform: "translate3d(0, " + o.y + "px, 0)"
                    } : {
                        marginTop: o.y
                    }), mouse && (o.up && o.y > o.downEnd || !o.up && o.y < o.upEnd) && a.eq(o.up ? 1 : 0).show(), o.y == n) mouse && a.eq(o.up ? 0 : 1).hide(), this.menuScrollStop(t);
                else if (!e) {
                    this.opts.scrollAccelerate && o.step < this.opts.scrollStep && (o.step += .2);
                    var h = this;
                    this.scrollTimeout = requestAnimationFrame(function() {
                        h.menuScroll(t)
                    })
                }
            },
            menuScrollMousewheel: function(t, e) {
                if (this.getClosestMenu(e.target) == t[0]) {
                    e = e.originalEvent;
                    var i = (e.wheelDelta || -e.detail) > 0;
                    t.dataSM("scroll-arrows").eq(i ? 0 : 1).is(":visible") && (t.dataSM("scroll").up = i, this.menuScroll(t, !0))
                }
                e.preventDefault()
            },
            menuScrollOut: function(t, e) {
                mouse && (/^scroll-(up|down)/.test((e.relatedTarget || "").className) || (t[0] == e.relatedTarget || $.contains(t[0], e.relatedTarget)) && this.getClosestMenu(e.relatedTarget) == t[0] || t.dataSM("scroll-arrows").css("visibility", "hidden"))
            },
            menuScrollOver: function(t, e) {
                if (mouse && !/^scroll-(up|down)/.test(e.target.className) && this.getClosestMenu(e.target) == t[0]) {
                    this.menuScrollRefreshData(t);
                    var i = t.dataSM("scroll"),
                        s = $(window).scrollTop() - t.dataSM("parent-a").offset().top - i.itemH;
                    t.dataSM("scroll-arrows").eq(0).css("margin-top", s).end().eq(1).css("margin-top", s + this.getViewportHeight() - i.arrowDownH).end().css("visibility", "visible")
                }
            },
            menuScrollRefreshData: function(t) {
                var e = t.dataSM("scroll"),
                    i = $(window).scrollTop() - t.dataSM("parent-a").offset().top - e.itemH;
                this.cssTransforms3d && (i = -(parseFloat(t.css("margin-top")) - i)), $.extend(e, {
                    upEnd: i,
                    downEnd: i + this.getViewportHeight() - e.subH
                })
            },
            menuScrollStop: function(t) {
                return this.scrollTimeout ? (cancelAnimationFrame(this.scrollTimeout), this.scrollTimeout = 0, t.dataSM("scroll").step = 1, !0) : void 0
            },
            menuScrollTouch: function(t, e) {
                if (e = e.originalEvent, isTouchEvent(e)) {
                    var i = this.getTouchPoint(e);
                    if (this.getClosestMenu(i.target) == t[0]) {
                        var s = t.dataSM("scroll");
                        if (/(start|down)$/i.test(e.type)) this.menuScrollStop(t) ? (e.preventDefault(), this.$touchScrollingSub = t) : this.$touchScrollingSub = null, this.menuScrollRefreshData(t), $.extend(s, {
                            touchStartY: i.pageY,
                            touchStartTime: e.timeStamp
                        });
                        else if (/move$/i.test(e.type)) {
                            var o = void 0 !== s.touchY ? s.touchY : s.touchStartY;
                            if (void 0 !== o && o != i.pageY) {
                                this.$touchScrollingSub = t;
                                var a = i.pageY > o;
                                void 0 !== s.up && s.up != a && $.extend(s, {
                                    touchStartY: i.pageY,
                                    touchStartTime: e.timeStamp
                                }), $.extend(s, {
                                    up: a,
                                    touchY: i.pageY
                                }), this.menuScroll(t, !0, Math.abs(i.pageY - o))
                            }
                            e.preventDefault()
                        } else void 0 !== s.touchY && ((s.momentum = 15 * Math.pow(Math.abs(i.pageY - s.touchStartY) / (e.timeStamp - s.touchStartTime), 2)) && (this.menuScrollStop(t), this.menuScroll(t), e.preventDefault()), delete s.touchY)
                    }
                }
            },
            menuShow: function(t) {
                if ((t.dataSM("beforefirstshowfired") || (t.dataSM("beforefirstshowfired", !0), this.$root.triggerHandler("beforefirstshow.smapi", t[0]) !== !1)) && this.$root.triggerHandler("beforeshow.smapi", t[0]) !== !1 && (t.dataSM("shown-before", !0), canAnimate && t.stop(!0, !0), !t.is(":visible"))) {
                    var e = t.dataSM("parent-a"),
                        i = this.isCollapsible();
                    if ((this.opts.keepHighlighted || i) && e.addClass("highlighted"), i) t.removeClass("sm-nowrap").css({
                        zIndex: "",
                        width: "auto",
                        minWidth: "",
                        maxWidth: "",
                        top: "",
                        left: "",
                        marginLeft: "",
                        marginTop: ""
                    });
                    else {
                        if (t.css("z-index", this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1), (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) && (t.css({
                                width: "auto",
                                minWidth: "",
                                maxWidth: ""
                            }).addClass("sm-nowrap"), this.opts.subMenusMinWidth && t.css("min-width", this.opts.subMenusMinWidth), this.opts.subMenusMaxWidth)) {
                            var s = this.getWidth(t);
                            t.css("max-width", this.opts.subMenusMaxWidth), s > this.getWidth(t) && t.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                        }
                        this.menuPosition(t)
                    }
                    var o = function() {
                        t.css("overflow", "")
                    };
                    i ? canAnimate && this.opts.collapsibleShowFunction ? this.opts.collapsibleShowFunction.call(this, t, o) : t.show(this.opts.collapsibleShowDuration, o) : canAnimate && this.opts.showFunction ? this.opts.showFunction.call(this, t, o) : t.show(this.opts.showDuration, o), e.attr("aria-expanded", "true"), t.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }), this.visibleSubMenus.push(t), this.$root.triggerHandler("show.smapi", t[0])
                }
            },
            popupHide: function(t) {
                this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                var e = this;
                this.hideTimeout = setTimeout(function() {
                    e.menuHideAll()
                }, t ? 1 : this.opts.hideTimeout)
            },
            popupShow: function(t, e) {
                if (!this.opts.isPopup) return alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.'), void 0;
                if (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), this.$root.dataSM("shown-before", !0), canAnimate && this.$root.stop(!0, !0), !this.$root.is(":visible")) {
                    this.$root.css({
                        left: t,
                        top: e
                    });
                    var i = this,
                        s = function() {
                            i.$root.css("overflow", "")
                        };
                    canAnimate && this.opts.showFunction ? this.opts.showFunction.call(this, this.$root, s) : this.$root.show(this.opts.showDuration, s), this.visibleSubMenus[0] = this.$root
                }
            },
            refresh: function() {
                this.destroy(!0), this.init(!0)
            },
            rootKeyDown: function(t) {
                if (this.handleEvents()) switch (t.keyCode) {
                    case 27:
                        var e = this.activatedItems[0];
                        if (e) {
                            this.menuHideAll(), e[0].focus();
                            var i = e.dataSM("sub");
                            i && this.menuHide(i)
                        }
                        break;
                    case 32:
                        var s = $(t.target);
                        if (s.is("a") && this.handleItemEvents(s)) {
                            var i = s.dataSM("sub");
                            i && !i.is(":visible") && (this.itemClick({
                                currentTarget: t.target
                            }), t.preventDefault())
                        }
                }
            },
            rootOut: function(t) {
                if (this.handleEvents() && !this.isTouchMode() && t.target != this.$root[0] && (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), !this.opts.showOnClick || !this.opts.hideOnClick)) {
                    var e = this;
                    this.hideTimeout = setTimeout(function() {
                        e.menuHideAll()
                    }, this.opts.hideTimeout)
                }
            },
            rootOver: function(t) {
                this.handleEvents() && !this.isTouchMode() && t.target != this.$root[0] && this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
            },
            winResize: function(t) {
                if (this.handleEvents()) {
                    if (!("onorientationchange" in window) || "orientationchange" == t.type) {
                        var e = this.isCollapsible();
                        this.wasCollapsible && e || (this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0].blur(), this.menuHideAll()), this.wasCollapsible = e
                    }
                } else if (this.$disableOverlay) {
                    var i = this.$root.offset();
                    this.$disableOverlay.css({
                        top: i.top,
                        left: i.left,
                        width: this.$root.outerWidth(),
                        height: this.$root.outerHeight()
                    })
                }
            }
        }
    }), $.fn.dataSM = function(t, e) {
        return e ? this.data(t + "_smartmenus", e) : this.data(t + "_smartmenus")
    }, $.fn.removeDataSM = function(t) {
        return this.removeData(t + "_smartmenus")
    }, $.fn.smartmenus = function(options) {
        if ("string" == typeof options) {
            var args = arguments,
                method = options;
            return Array.prototype.shift.call(args), this.each(function() {
                var t = $(this).data("smartmenus");
                t && t[method] && t[method].apply(t, args)
            })
        }
        return this.each(function() {
            var dataOpts = $(this).data("sm-options") || null;
            if (dataOpts && "object" != typeof dataOpts) try {
                dataOpts = eval("(" + dataOpts + ")")
            } catch (e) {
                dataOpts = null, alert('ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.')
            }
            new $.SmartMenus(this, $.extend({}, $.fn.smartmenus.defaults, options, dataOpts))
        })
    }, $.fn.smartmenus.defaults = {
        isPopup: !1,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10em",
        subMenusMaxWidth: "20em",
        subIndicators: !0,
        subIndicatorsPos: "append",
        subIndicatorsText: "",
        scrollStep: 30,
        scrollAccelerate: !0,
        showTimeout: 250,
        hideTimeout: 500,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function(t, e) {
            t.fadeOut(200, e)
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function(t, e) {
            t.slideDown(200, e)
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function(t, e) {
            t.slideUp(200, e)
        },
        showOnClick: !1,
        hideOnClick: !0,
        noMouseOver: !1,
        keepInViewport: !0,
        keepHighlighted: !0,
        markCurrentItem: !1,
        markCurrentTree: !0,
        rightToLeftSubMenus: !1,
        bottomToTopSubMenus: !1,
        collapsibleBehavior: "default"
    }, $
});;
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
(function($) {
    'use strict';
    $.fn.fitVids = function(options) {
        var settings = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById('fit-vids-style')) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
            var div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
            head.appendChild(div.childNodes[1]);
        }
        if (options) {
            $.extend(settings, options);
        }
        return this.each(function() {
            var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];
            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }
            var ignoreList = '.fitvidsignore';
            if (settings.ignore) {
                ignoreList = ignoreList + ', ' + settings.ignore;
            }
            var $allVideos = $(this).find(selectors.join(','));
            $allVideos = $allVideos.not('object object');
            $allVideos = $allVideos.not(ignoreList);
            $allVideos.each(function() {
                var $this = $(this);
                if ($this.parents(ignoreList).length > 0) {
                    return;
                }
                if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
                    return;
                }
                if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
                    $this.attr('height', 9);
                    $this.attr('width', 16);
                }
                var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
                    width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                    aspectRatio = height / width;
                if (!$this.attr('name')) {
                    var videoName = 'fitvid' + $.fn.fitVids._count;
                    $this.attr('name', videoName);
                    $.fn.fitVids._count++;
                }
                $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
                $this.removeAttr('height').removeAttr('width');
            });
        });
    };
    $.fn.fitVids._count = 0;
})(window.jQuery || window.Zepto);
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var slice = Array.prototype.slice;
    var splice = Array.prototype.splice;
    var defaults = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper',
            center: false,
            getWidthFrom: '',
            widthFromWrapper: true,
            responsiveWidth: false,
            zIndex: 'inherit'
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            for (var i = 0, l = sticked.length; i < l; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;
                s.stickyWrapper.css('height', s.stickyElement.outerHeight());
                if (scrollTop <= etse) {
                    if (s.currentTop !== null) {
                        s.stickyElement.css({
                            'width': '',
                            'position': '',
                            'top': '',
                            'z-index': ''
                        });
                        s.stickyElement.parent().removeClass(s.className);
                        s.stickyElement.trigger('sticky-end', [s]);
                        s.currentTop = null;
                    }
                } else {
                    var newTop = documentHeight - s.stickyElement.outerHeight() -
                        s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSpacing;
                    } else {
                        newTop = s.topSpacing;
                    }
                    if (s.currentTop !== newTop) {
                        var newWidth;
                        if (s.getWidthFrom) {
                            padding = s.stickyElement.innerWidth() - s.stickyElement.width();
                            newWidth = $(s.getWidthFrom).width() - padding || null;
                        } else if (s.widthFromWrapper) {
                            newWidth = s.stickyWrapper.width();
                        }
                        if (newWidth == null) {
                            newWidth = s.stickyElement.width();
                        }
                        s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);
                        s.stickyElement.parent().addClass(s.className);
                        if (s.currentTop === null) {
                            s.stickyElement.trigger('sticky-start', [s]);
                        } else {
                            s.stickyElement.trigger('sticky-update', [s]);
                        }
                        if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                            s.stickyElement.trigger('sticky-bottom-reached', [s]);
                        } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
                        }
                        s.currentTop = newTop;
                    }
                    var stickyWrapperContainer = s.stickyWrapper.parent();
                    var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);
                    if (unstick) {
                        s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '');
                    } else {
                        s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex);
                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();
            for (var i = 0, l = sticked.length; i < l; i++) {
                var s = sticked[i];
                var newWidth = null;
                if (s.getWidthFrom) {
                    if (s.responsiveWidth) {
                        newWidth = $(s.getWidthFrom).width();
                    }
                } else if (s.widthFromWrapper) {
                    newWidth = s.stickyWrapper.width();
                }
                if (newWidth != null) {
                    s.stickyElement.css('width', newWidth);
                }
            }
        },
        methods = {
            init: function(options) {
                return this.each(function() {
                    var o = $.extend({}, defaults, options);
                    var stickyElement = $(this);
                    var stickyId = stickyElement.attr('id');
                    var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                    var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);
                    stickyElement.wrapAll(function() {
                        if ($(this).parent("#" + wrapperId).length == 0) {
                            return wrapper;
                        }
                    });
                    var stickyWrapper = stickyElement.parent();
                    if (o.center) {
                        stickyWrapper.css({
                            width: stickyElement.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        });
                    }
                    if (stickyElement.css("float") === "right") {
                        stickyElement.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        });
                    }
                    o.stickyElement = stickyElement;
                    o.stickyWrapper = stickyWrapper;
                    o.currentTop = null;
                    sticked.push(o);
                    methods.setWrapperHeight(this);
                    methods.setupChangeListeners(this);
                });
            },
            setWrapperHeight: function(stickyElement) {
                var element = $(stickyElement);
                var stickyWrapper = element.parent();
                if (stickyWrapper) {
                    stickyWrapper.css('height', element.outerHeight());
                }
            },
            setupChangeListeners: function(stickyElement) {
                if (window.MutationObserver) {
                    var mutationObserver = new window.MutationObserver(function(mutations) {
                        if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                            methods.setWrapperHeight(stickyElement);
                        }
                    });
                    mutationObserver.observe(stickyElement, {
                        subtree: true,
                        childList: true
                    });
                } else {
                    if (window.addEventListener) {
                        stickyElement.addEventListener('DOMNodeInserted', function() {
                            methods.setWrapperHeight(stickyElement);
                        }, false);
                        stickyElement.addEventListener('DOMNodeRemoved', function() {
                            methods.setWrapperHeight(stickyElement);
                        }, false);
                    } else if (window.attachEvent) {
                        stickyElement.attachEvent('onDOMNodeInserted', function() {
                            methods.setWrapperHeight(stickyElement);
                        });
                        stickyElement.attachEvent('onDOMNodeRemoved', function() {
                            methods.setWrapperHeight(stickyElement);
                        });
                    }
                }
            },
            update: scroller,
            unstick: function(options) {
                return this.each(function() {
                    var that = this;
                    var unstickyElement = $(that);
                    var removeIdx = -1;
                    var i = sticked.length;
                    while (i-- > 0) {
                        if (sticked[i].stickyElement.get(0) === that) {
                            splice.call(sticked, i, 1);
                            removeIdx = i;
                        }
                    }
                    if (removeIdx !== -1) {
                        unstickyElement.unwrap();
                        unstickyElement.css({
                            'width': '',
                            'position': '',
                            'top': '',
                            'float': '',
                            'z-index': ''
                        });
                    }
                });
            }
        };
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }
    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $.fn.unstick = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.unstick.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function() {
        setTimeout(scroller, 0);
    });
}));
(function($) {
    "use strict";
    var count = 1;
    animateElement();
    stopAnimateOnScroll();
    placeholderToggle();
    setMenu();
    setSlowScroll();
    setMenuSlowScroll();
    setActiveMenuItem();
    logoLinkFix();
    horizontalMenuTextFix();
    $(".site-content").fitVids();
    loadMoreArticleIndex();
    inputFieldsTextAnimation();
    if (is_touch_device()) {
        $('body').addClass('is-touch');
    }
    $(window).on('load', function() {
        $('#toggle').on("click", multiClickFunctionStop);
        togglePositionFix();
        setHash();
        $('.doc-loader').fadeOut();
    });
    $(window).on('resize', function() {
        setActiveMenuItem();
        togglePositionFix();
        $(".header-right-part-holder").sticky('update');
    });
    $(window).on('scroll', function() {
        animateElement();
        setActiveMenuItem();
        if ($('.alignfull').length) {
            detectOverlapping();
        }
    });

    function stopAnimateOnScroll() {
        $("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
            $("html, body").stop();
        });
    }

    function placeholderToggle() {
        $('input, textarea').on('focus', function() {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        $('input, textarea').on('blur', function() {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }

    function horizontalMenuTextFix() {
        $(".site-title").css('top', $(".site-title").innerWidth());
        $(".menu-social").css('top', $(".menu-social").innerWidth() + $(".site-title").innerWidth());
    }

    function setMenuSlowScroll() {
        $('#header-main-menu ul li a.one-page-link').on("click", function(e) {
            if ($(this).attr('href') === '#') {
                e.preventDefault();
            } else {
                if ($('body').hasClass('page-template-onepage')) {
                    var $goLink = $(this).attr('href').split('#')[1];
                    if ($goLink !== undefined) {
                        if (!$(e.target).is('.sub-arrow')) {
                            $('body').toggleClass("cocobasic-open-menu").delay(600).queue(function(next) {
                                $('body').toggleClass("cocobasic-open-menu-done");
                                next();
                                setTimeout(function() {
                                    if ($('body').hasClass('small-menu')) {
                                        $('html, body').animate({
                                            scrollTop: $('#' + $goLink).offset().top - 77
                                        }, 1500);
                                    } else {
                                        $('html, body').animate({
                                            scrollTop: $('#' + $goLink).offset().top
                                        }, 1500);
                                    }
                                }, 300);
                            });
                            return false;
                        }
                    }
                }
            }
        });
    }

    function setSlowScroll() {
        $('a.button, .slow-scroll, .num-comments a, .elementor-button').on("click", function(e) {
            if ($(this).attr('href') === '#') {
                e.preventDefault();
            } else {
                if ($('body').hasClass('small-menu')) {
                    $('html, body').animate({
                        scrollTop: $('#' + $goLink).offset().top - 77
                    }, 1500);
                } else {
                    $('html, body').animate({
                        scrollTop: $('#' + $goLink).offset().top
                    }, 1500);
                }
                return false;
            }
        });
    }

    function multiClickFunctionStop(e) {
        $('#toggle').off("click");
        $('body').toggleClass("cocobasic-open-menu").delay(600).queue(function(next) {
            $(this).toggleClass("cocobasic-open-menu-done");
            next();
        });
        $('#toggle').on("click", multiClickFunctionStop);
    }

    function setMenu() {
        $(".default-menu ul:first").addClass('sm sm-clean main-menu');
        $(".header-right-part-holder").sticky({
            topSpacing: 0
        });
        $('.one-page-section').each(function() {
            $(this).find('a:first').attr('href', ajax_var.webUrl + $(this).find('a:first').attr('href')).addClass('one-page-link');
        });
        $('.main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8,
            markCurrentItem: true,
            hideOnClick: false
        });
        var $mainMenu = $('.main-menu').on('click', 'span.sub-arrow', function(e) {
            var obj = $mainMenu.data('smartmenus');
            if (obj.isCollapsible()) {
                var $item = $(this).parent(),
                    $sub = $item.parent().dataSM('sub');
                $sub.dataSM('arrowClicked', true);
            }
        }).bind({
            'beforeshow.smapi': function(e, menu) {
                var obj = $mainMenu.data('smartmenus');
                if (obj.isCollapsible()) {
                    var $menu = $(menu);
                    if (!$menu.dataSM('arrowClicked')) {
                        return false;
                    }
                    $menu.removeDataSM('arrowClicked');
                }
            }
        });
    }

    function setActiveMenuItem() {
        var currentSection = null;
        $('.op-section').each(function() {
            var element = $(this).attr('id');
            if ($('#' + element).is('*')) {
                if ($(window).scrollTop() >= $('#' + element).offset().top - 115) {
                    currentSection = element;
                }
            }
        });
        $('#header-main-menu ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
        if (window.innerWidth < 1366) {
            $("body").addClass("small-menu");
        } else {
            $("body").removeClass("small-menu");
        }
    }

    function setHash() {
        var hash = location.hash;
        if ((hash !== '') && ($(hash).length)) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1);
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1);
        } else {
            $(window).scrollTop(1);
            $(window).scrollTop(0);
        }
    }

    function logoLinkFix() {
        $('.header-logo').on("click", function(e) {
            if ($('body').hasClass('page-template-onepage')) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 1500);
            }
        });
    }

    function animateElement() {
        $(".animate").each(function(i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window - 70) > top_of_object) {
                $(this).addClass('show-it');
            }
        });
    }

    function loadMoreArticleIndex() {
        if (parseInt(ajax_var.posts_per_page_index) < parseInt(ajax_var.total_index)) {
            $('.more-posts').css('visibility', 'visible');
            $('.more-posts').animate({
                opacity: 1
            }, 1500);
        } else {
            $('.more-posts, .more-posts-index-holder').css('display', 'none');
        }
        $('.more-posts:visible').on('click', function() {
            $('.more-posts').css('display', 'none');
            $('.more-posts-loading').css('display', 'inline-block');
            count++;
            loadArticleIndex(count);
        });
    }

    function loadArticleIndex(pageNumber) {
        $.ajax({
            url: ajax_var.url,
            type: 'POST',
            data: "action=infinite_scroll_index&page_no_index=" + pageNumber + '&loop_file_index=loop-index&security=' + ajax_var.nonce,
            success: function(html) {
                $('.blog-holder').imagesLoaded(function() {
                    $(".blog-holder").append(html);
                    setTimeout(function() {
                        animateElement();
                        if (count == ajax_var.num_pages_index) {
                            $('.more-posts').css('display', 'none');
                            $('.more-posts-loading').css('display', 'none');
                            $('.no-more-posts').css('display', 'inline-block');
                        } else {
                            $('.more-posts').css('display', 'inline-block');
                            $('.more-posts-loading').css('display', 'none');
                            $(".more-posts-index-holder").removeClass('stop-loading');
                        }
                    }, 100);
                });
            }
        });
        return false;
    }

    function inputFieldsTextAnimation() {
        $(".wpcf7 textarea, .wpcf7 input").on("focus", function() {
            $(this).parent().next(".input-default-text").addClass('has-content');
        });
        $(".wpcf7 textarea, .wpcf7 input").on("focusout", function() {
            if (!$(this).val()) {
                $(this).parent().next(".input-default-text").removeClass('has-content');
            }
        });
        $("#commentform textarea, #commentform input").on("focus", function() {
            $(this).siblings(".input-default-text").addClass('has-content');
        });
        $("#commentform textarea, #commentform input").on("focusout", function() {
            if (!$(this).val()) {
                $(this).siblings(".input-default-text").removeClass('has-content');
            }
        });
    }

    function togglePositionFix() {
        $(".toggle-holder").css({
            top: $(".header-logo img").height() + 56,
            right: (0 - $(".header-logo img").width() / 2) - 15
        });
    }

    function is_touch_device() {
        return !!('ontouchstart' in window);
    }

    function detectOverlapping() {
        if ($(".toggle-holder").offset().top > ($(".alignfull").offset().top - 30)) {
            $('.header-logo').addClass('add-background');
        } else {
            $('.header-logo').removeClass('add-background');
        }
    }
})(jQuery);
/*! This file is auto-generated */
window.addComment = function(v) {
    var I, C, h, E = v.document,
        b = {
            commentReplyClass: "comment-reply-link",
            commentReplyTitleId: "reply-title",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        },
        e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
        r = "querySelector" in E && "addEventListener" in v,
        n = !!E.documentElement.dataset;

    function t() {
        d(), e && new e(o).observe(E.body, {
            childList: !0,
            subtree: !0
        })
    }

    function d(e) {
        if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
            I.addEventListener("touchstart", l), I.addEventListener("click", l);

            function t(e) {
                if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return C.removeEventListener("keydown", t), e.preventDefault(), C.submit.click(), !1
            }
            C && C.addEventListener("keydown", t);
            for (var n, d = function(e) {
                    var t = b.commentReplyClass;
                    e && e.childNodes || (e = E);
                    e = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                    return e
                }(e), o = 0, i = d.length; o < i; o++)(n = d[o]).addEventListener("touchstart", a), n.addEventListener("click", a)
        }
    }

    function l(e) {
        var t, n, d = g(b.temporaryFormId);
        d && h && (g(b.parentIdFieldId).value = "0", t = d.textContent, d.parentNode.replaceChild(h, d), this.style.display = "none", n = (d = (d = g(b.commentReplyTitleId)) && d.firstChild) && d.nextSibling, d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""), d.textContent = t), e.preventDefault())
    }

    function a(e) {
        var t = g(b.commentReplyTitleId),
            t = t && t.firstChild.textContent,
            n = this,
            d = m(n, "belowelement"),
            o = m(n, "commentid"),
            i = m(n, "respondelement"),
            r = m(n, "postid"),
            n = m(n, "replyto") || t;
        d && o && i && r && !1 === v.addComment.moveForm(d, o, i, r, n) && e.preventDefault()
    }

    function o(e) {
        for (var t = e.length; t--;)
            if (e[t].addedNodes.length) return void d()
    }

    function m(e, t) {
        return n ? e.dataset[t] : e.getAttribute("data-" + t)
    }

    function g(e) {
        return E.getElementById(e)
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1), {
        init: d,
        moveForm: function(e, t, n, d, o) {
            var i, r, l, a, m, c, s, e = g(e),
                n = (h = g(n), g(b.parentIdFieldId)),
                y = g(b.postIdFieldId),
                p = g(b.commentReplyTitleId),
                u = (p = p && p.firstChild) && p.nextSibling;
            if (e && h && n) {
                void 0 === o && (o = p && p.textContent), a = h, m = b.temporaryFormId, c = g(m), s = (s = g(b.commentReplyTitleId)) ? s.firstChild.textContent : "", c || ((c = E.createElement("div")).id = m, c.style.display = "none", c.textContent = s, a.parentNode.insertBefore(c, a)), d && y && (y.value = d), n.value = t, I.style.display = "", e.parentNode.insertBefore(h, e.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o), I.onclick = function() {
                    return !1
                };
                try {
                    for (var f = 0; f < C.elements.length; f++)
                        if (i = C.elements[f], r = !1, "getComputedStyle" in v ? l = v.getComputedStyle(i) : E.documentElement.currentStyle && (l = i.currentStyle), (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === l.visibility) && (r = !0), "hidden" !== i.type && !i.disabled && !r) {
                            i.focus();
                            break
                        }
                } catch (e) {}
                return !1
            }
        }
    }
}(window);
! function(t) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else if ("object" == typeof exports) t(require("jquery"));
    else {
        if ("undefined" == typeof jQuery) throw "jquery-numerator requires jQuery to be loaded first";
        t(jQuery)
    }
}(function(t) {
    function e(e, s) {
        this.element = e, this.settings = t.extend({}, i, s), this._defaults = i, this._name = n, this.init()
    }
    var n = "numerator",
        i = {
            easing: "swing",
            duration: 500,
            delimiter: void 0,
            rounding: 0,
            toValue: void 0,
            fromValue: void 0,
            queue: !1,
            onStart: function() {},
            onStep: function() {},
            onProgress: function() {},
            onComplete: function() {}
        };
    e.prototype = {
        init: function() {
            this.parseElement(), this.setValue()
        },
        parseElement: function() {
            var e = t.trim(t(this.element).text());
            this.settings.fromValue = this.settings.fromValue || this.format(e)
        },
        setValue: function() {
            var e = this;
            t({
                value: e.settings.fromValue
            }).animate({
                value: e.settings.toValue
            }, {
                duration: parseInt(e.settings.duration, 10),
                easing: e.settings.easing,
                start: e.settings.onStart,
                step: function(n, i) {
                    t(e.element).text(e.format(n)), e.settings.onStep(n, i)
                },
                progress: e.settings.onProgress,
                complete: e.settings.onComplete
            })
        },
        format: function(t) {
            var e = this;
            return t = parseInt(this.settings.rounding) < 1 ? parseInt(t, 10) : parseFloat(t).toFixed(parseInt(this.settings.rounding)), e.settings.delimiter ? this.delimit(t) : t
        },
        delimit: function(t) {
            var e = this;
            if (t = t.toString(), e.settings.rounding && parseInt(e.settings.rounding, 10) > 0) {
                var n = t.substring(t.length - (e.settings.rounding + 1), t.length),
                    i = t.substring(0, t.length - (e.settings.rounding + 1));
                return e.addDelimiter(i) + n
            }
            return e.addDelimiter(t)
        },
        addDelimiter: function(t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter)
        }
    }, t.fn[n] = function(i) {
        return this.each(function() {
            t.data(this, "plugin_" + n) && t.data(this, "plugin_" + n, null), t.data(this, "plugin_" + n, new e(this, i))
        })
    }
});
/*! elementor - v3.20.0 - 26-03-2024 */
(() => {
    "use strict";
    var e, r, _, t, a, i = {},
        n = {};

    function __webpack_require__(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var _ = n[e] = {
            exports: {}
        };
        return i[e].call(_.exports, _, _.exports, __webpack_require__), _.exports
    }
    __webpack_require__.m = i, e = [], __webpack_require__.O = (r, _, t, a) => {
        if (!_) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [_, t, a] = e[u], n = !0, c = 0; c < _.length; c++)(!1 & a || i >= a) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[c]))) ? _.splice(c--, 1) : (n = !1, a < i && (i = a));
                if (n) {
                    e.splice(u--, 1);
                    var o = t();
                    void 0 !== o && (r = o)
                }
            }
            return r
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [_, t, a]
    }, _ = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = this(e)), 8 & t) return e;
        if ("object" == typeof e && e) {
            if (4 & t && e.__esModule) return e;
            if (16 & t && "function" == typeof e.then) return e
        }
        var a = Object.create(null);
        __webpack_require__.r(a);
        var i = {};
        r = r || [null, _({}), _([]), _(_)];
        for (var n = 2 & t && e;
            "object" == typeof n && !~r.indexOf(n); n = _(n)) Object.getOwnPropertyNames(n).forEach((r => i[r] = () => e[r]));
        return i.default = () => e, __webpack_require__.d(a, i), a
    }, __webpack_require__.d = (e, r) => {
        for (var _ in r) __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
            enumerable: !0,
            get: r[_]
        })
    }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r), r)), [])), __webpack_require__.u = e => 723 === e ? "lightbox.94b920846d1e37cafb78.bundle.min.js" : 48 === e ? "text-path.2bc8a9cd0e50cf1a5a9c.bundle.min.js" : 209 === e ? "accordion.8799675460c73eb48972.bundle.min.js" : 745 === e ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js" : 120 === e ? "counter.02cef29c589e742d4c8c.bundle.min.js" : 192 === e ? "progress.ca55d33bb06cee4e6f02.bundle.min.js" : 520 === e ? "tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js" : 181 === e ? "toggle.31881477c45ff5cf9d4d.bundle.min.js" : 791 === e ? "video.fea4f8dfdf17262f23e8.bundle.min.js" : 268 === e ? "image-carousel.4455c6362492d9067512.bundle.min.js" : 357 === e ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js" : 52 === e ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js" : 413 === e ? "container.c65a2a923085e1120e75.bundle.min.js" : void 0, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, a = "elementor:", __webpack_require__.l = (e, r, _, i) => {
        if (t[e]) t[e].push(r);
        else {
            var n, c;
            if (void 0 !== _)
                for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                    var b = o[u];
                    if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == a + _) {
                        n = b;
                        break
                    }
                }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc), n.setAttribute("data-webpack", a + _), n.src = e), t[e] = [r];
            var onScriptComplete = (r, _) => {
                    n.onerror = n.onload = null, clearTimeout(p);
                    var a = t[e];
                    if (delete t[e], n.parentNode && n.parentNode.removeChild(n), a && a.forEach((e => e(_))), r) return r(_)
                },
                p = setTimeout(onScriptComplete.bind(null, void 0, {
                    type: "timeout",
                    target: n
                }), 12e4);
            n.onerror = onScriptComplete.bind(null, n.onerror), n.onload = onScriptComplete.bind(null, n.onload), c && document.head.appendChild(n)
        }
    }, __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var _ = r.getElementsByTagName("script");
            if (_.length)
                for (var t = _.length - 1; t > -1 && !e;) e = _[t--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e
    })(), (() => {
        var e = {
            162: 0
        };
        __webpack_require__.f.j = (r, _) => {
            var t = __webpack_require__.o(e, r) ? e[r] : void 0;
            if (0 !== t)
                if (t) _.push(t[2]);
                else if (162 != r) {
                var a = new Promise(((_, a) => t = e[r] = [_, a]));
                _.push(t[2] = a);
                var i = __webpack_require__.p + __webpack_require__.u(r),
                    n = new Error;
                __webpack_require__.l(i, (_ => {
                    if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                        var a = _ && ("load" === _.type ? "missing" : _.type),
                            i = _ && _.target && _.target.src;
                        n.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")", n.name = "ChunkLoadError", n.type = a, n.request = i, t[1](n)
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, __webpack_require__.O.j = r => 0 === e[r];
        var webpackJsonpCallback = (r, _) => {
                var t, a, [i, n, c] = _,
                    o = 0;
                if (i.some((r => 0 !== e[r]))) {
                    for (t in n) __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
                    if (c) var u = c(__webpack_require__)
                }
                for (r && r(_); o < i.length; o++) a = i[o], __webpack_require__.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return __webpack_require__.O(u)
            },
            r = self.webpackChunkelementor = self.webpackChunkelementor || [];
        r.forEach(webpackJsonpCallback.bind(null, 0)), r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
    })()
})();
/*! elementor - v3.20.0 - 26-03-2024 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
    [354], {
        381: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = (e, t) => {
                t = Array.isArray(t) ? t : [t];
                for (const n of t)
                    if (e.constructor.name === n.prototype[Symbol.toStringTag]) return !0;
                return !1
            }
        },
        8135: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class _default extends elementorModules.ViewModule {
                getDefaultSettings() {
                    return {
                        selectors: {
                            elements: ".elementor-element",
                            nestedDocumentElements: ".elementor .elementor-element"
                        },
                        classes: {
                            editMode: "elementor-edit-mode"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                    }
                }
                getDocumentSettings(e) {
                    let t;
                    if (this.isEdit) {
                        t = {};
                        const e = elementor.settings.page.model;
                        jQuery.each(e.getActiveControls(), (n => {
                            t[n] = e.attributes[n]
                        }))
                    } else t = this.$element.data("elementor-settings") || {};
                    return this.getItems(t, e)
                }
                runElementsHandlers() {
                    this.elements.$elements.each(((e, t) => setTimeout((() => elementorFrontend.elementsHandler.runReadyTrigger(t)))))
                }
                onInit() {
                    this.$element = this.getSettings("$element"), super.onInit(), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.on("document:loaded", (() => {
                        elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                    })) : this.runElementsHandlers()
                }
                onSettingsChange() {}
            }
            t.default = _default
        },
        6752: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(3090));
            class NestedTitleKeyboardHandler extends r.default {
                __construct(e) {
                    super.__construct(e), this.directionNext = "next", this.directionPrevious = "previous", this.focusableElementSelector = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])'
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            itemTitle: ".e-n-tab-title",
                            itemContainer: ".e-n-tabs-content > .e-con"
                        },
                        ariaAttributes: {
                            titleStateAttribute: "aria-selected",
                            activeTitleSelector: '[aria-selected="true"]'
                        },
                        datasets: {
                            titleIndex: "data-tab-index"
                        },
                        keyDirection: {
                            ArrowLeft: elementorFrontendConfig.is_rtl ? this.directionNext : this.directionPrevious,
                            ArrowUp: this.directionPrevious,
                            ArrowRight: elementorFrontendConfig.is_rtl ? this.directionPrevious : this.directionNext,
                            ArrowDown: this.directionNext
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $itemTitles: this.findElement(e.itemTitle),
                        $itemContainers: this.findElement(e.itemContainer),
                        $focusableContainerElements: this.getFocusableElements(this.findElement(e.itemContainer))
                    }
                }
                getFocusableElements(e) {
                    return e.find(this.focusableElementSelector).not("[disabled], [inert]")
                }
                getKeyDirectionValue(e) {
                    const t = this.getSettings("keyDirection")[e.key];
                    return this.directionNext === t ? 1 : -1
                }
                getTitleIndex(e) {
                    const {
                        titleIndex: t
                    } = this.getSettings("datasets");
                    return e.getAttribute(t)
                }
                getTitleFilterSelector(e) {
                    const {
                        titleIndex: t
                    } = this.getSettings("datasets");
                    return `[${t}="${e}"]`
                }
                getActiveTitleElement() {
                    const e = this.getSettings("ariaAttributes").activeTitleSelector;
                    return this.elements.$itemTitles.filter(e)
                }
                onInit() {
                    super.onInit(...arguments)
                }
                bindEvents() {
                    this.elements.$itemTitles.on(this.getTitleEvents()), this.elements.$focusableContainerElements.on(this.getContentElementEvents())
                }
                unbindEvents() {
                    this.elements.$itemTitles.off(), this.elements.$itemContainers.children().off()
                }
                getTitleEvents() {
                    return {
                        keydown: this.handleTitleKeyboardNavigation.bind(this)
                    }
                }
                getContentElementEvents() {
                    return {
                        keydown: this.handleContentElementKeyboardNavigation.bind(this)
                    }
                }
                isDirectionKey(e) {
                    return ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)
                }
                isActivationKey(e) {
                    return ["Enter", " "].includes(e.key)
                }
                handleTitleKeyboardNavigation(e) {
                    if (this.isDirectionKey(e)) {
                        e.preventDefault();
                        const t = parseInt(this.getTitleIndex(e.currentTarget)) || 1,
                            n = this.elements.$itemTitles.length,
                            i = this.getTitleIndexFocusUpdated(e, t, n);
                        this.changeTitleFocus(i), e.stopPropagation()
                    } else if (this.isActivationKey(e)) {
                        if (e.preventDefault(), this.handeTitleLinkEnterOrSpaceEvent(e)) return;
                        const t = this.getTitleIndex(e.currentTarget);
                        elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard", {
                            widgetId: this.getID(),
                            titleIndex: t
                        })
                    } else "Escape" === e.key && this.handleTitleEscapeKeyEvents(e)
                }
                handeTitleLinkEnterOrSpaceEvent(e) {
                    const t = "a" === e ? .currentTarget ? .tagName ? .toLowerCase();
                    return !elementorFrontend.isEditMode() && t && (e ? .currentTarget ? .click(), e.stopPropagation()), t
                }
                getTitleIndexFocusUpdated(e, t, n) {
                    let i = 0;
                    switch (e.key) {
                        case "Home":
                            i = 1;
                            break;
                        case "End":
                            i = n;
                            break;
                        default:
                            const r = this.getKeyDirectionValue(e);
                            i = n < t + r ? 1 : 0 === t + r ? n : t + r
                    }
                    return i
                }
                changeTitleFocus(e) {
                    const t = this.elements.$itemTitles.filter(this.getTitleFilterSelector(e));
                    this.setTitleTabindex(e), t.trigger("focus")
                }
                setTitleTabindex(e) {
                    this.elements.$itemTitles.attr("tabindex", "-1");
                    this.elements.$itemTitles.filter(this.getTitleFilterSelector(e)).attr("tabindex", "0")
                }
                handleTitleEscapeKeyEvents() {}
                handleContentElementKeyboardNavigation(e) {
                    "Tab" !== e.key || e.shiftKey ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), this.handleContentElementEscapeEvents(e)) : this.handleContentElementTabEvents(e)
                }
                handleContentElementEscapeEvents() {
                    this.getActiveTitleElement().trigger("focus")
                }
                handleContentElementTabEvents() {}
            }
            t.default = NestedTitleKeyboardHandler
        },
        1292: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(2821));
            class CarouselHandlerBase extends r.default {
                getDefaultSettings() {
                    return {
                        selectors: {
                            carousel: `.${elementorFrontend.config.swiperClass}`,
                            swiperWrapper: ".swiper-wrapper",
                            slideContent: ".swiper-slide",
                            swiperArrow: ".elementor-swiper-button",
                            paginationWrapper: ".swiper-pagination",
                            paginationBullet: ".swiper-pagination-bullet",
                            paginationBulletWrapper: ".swiper-pagination-bullets"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors"),
                        t = {
                            $swiperContainer: this.$element.find(e.carousel),
                            $swiperWrapper: this.$element.find(e.swiperWrapper),
                            $swiperArrows: this.$element.find(e.swiperArrow),
                            $paginationWrapper: this.$element.find(e.paginationWrapper),
                            $paginationBullets: this.$element.find(e.paginationBullet),
                            $paginationBulletWrapper: this.$element.find(e.paginationBulletWrapper)
                        };
                    return t.$slides = t.$swiperContainer.find(e.slideContent), t
                }
                getSwiperSettings() {
                    const e = this.getElementSettings(),
                        t = +e.slides_to_show || 3,
                        n = 1 === t,
                        i = elementorFrontend.config.responsive.activeBreakpoints,
                        r = {
                            mobile: 1,
                            tablet: n ? 1 : 2
                        },
                        s = {
                            slidesPerView: t,
                            loop: "yes" === e.infinite,
                            speed: e.speed,
                            handleElementorBreakpoints: !0,
                            breakpoints: {}
                        };
                    let o = t;
                    Object.keys(i).reverse().forEach((t => {
                        const n = r[t] ? r[t] : o;
                        s.breakpoints[i[t].value] = {
                            slidesPerView: +e["slides_to_show_" + t] || n,
                            slidesPerGroup: +e["slides_to_scroll_" + t] || 1
                        }, e.image_spacing_custom && (s.breakpoints[i[t].value].spaceBetween = this.getSpaceBetween(t)), o = +e["slides_to_show_" + t] || n
                    })), "yes" === e.autoplay && (s.autoplay = {
                        delay: e.autoplay_speed,
                        disableOnInteraction: "yes" === e.pause_on_interaction
                    }), n ? (s.effect = e.effect, "fade" === e.effect && (s.fadeEffect = {
                        crossFade: !0
                    })) : s.slidesPerGroup = +e.slides_to_scroll || 1, e.image_spacing_custom && (s.spaceBetween = this.getSpaceBetween());
                    const a = "arrows" === e.navigation || "both" === e.navigation,
                        l = "dots" === e.navigation || "both" === e.navigation || e.pagination;
                    return a && (s.navigation = {
                        prevEl: ".elementor-swiper-button-prev",
                        nextEl: ".elementor-swiper-button-next"
                    }), l && (s.pagination = {
                        el: `.elementor-element-${this.getID()} .swiper-pagination`,
                        type: e.pagination ? e.pagination : "bullets",
                        clickable: !0,
                        renderBullet: (e, t) => `<span class="${t}" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e+1}"></span>`
                    }), "yes" === e.lazyload && (s.lazy = {
                        loadPrevNext: !0,
                        loadPrevNextAmount: 1
                    }), s.a11y = {
                        enabled: !0,
                        prevSlideMessage: elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
                        nextSlideMessage: elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
                        firstSlideMessage: elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
                        lastSlideMessage: elementorFrontend.config.i18n.a11yCarouselLastSlideMessage
                    }, s.on = {
                        slideChangeTransitionEnd: () => {
                            this.a11ySetSlideAriaHidden()
                        },
                        slideChange: () => {
                            this.a11ySetPaginationTabindex(), this.handleElementHandlers()
                        },
                        init: () => {
                            this.a11ySetWidgetAriaDetails(), this.a11ySetPaginationTabindex(), this.a11ySetSlideAriaHidden("initialisation")
                        }
                    }, this.applyOffsetSettings(e, s, t), s
                }
                getOffsetWidth() {
                    const e = elementorFrontend.getCurrentDeviceMode();
                    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "offset_width", "size", e) || 0
                }
                applyOffsetSettings(e, t, n) {
                    const i = e.offset_sides;
                    if (!(elementorFrontend.isEditMode() && "NestedCarousel" === this.constructor.name) && i && "none" !== i) switch (i) {
                        case "right":
                            this.forceSliderToShowNextSlideWhenOnLast(t, n), this.addClassToSwiperContainer("offset-right");
                            break;
                        case "left":
                            this.addClassToSwiperContainer("offset-left");
                            break;
                        case "both":
                            this.forceSliderToShowNextSlideWhenOnLast(t, n), this.addClassToSwiperContainer("offset-both")
                    }
                }
                forceSliderToShowNextSlideWhenOnLast(e, t) {
                    e.slidesPerView = t + .001
                }
                addClassToSwiperContainer(e) {
                    this.getDefaultElements().$swiperContainer[0].classList.add(e)
                }
                async onInit() {
                    if (super.onInit(...arguments), !this.elements.$swiperContainer.length || 2 > this.elements.$slides.length) return;
                    const e = elementorFrontend.utils.swiper;
                    this.swiper = await new e(this.elements.$swiperContainer, this.getSwiperSettings()), this.elements.$swiperContainer.data("swiper", this.swiper);
                    "yes" === this.getElementSettings().pause_on_hover && this.togglePauseOnHover(!0)
                }
                bindEvents() {
                    this.elements.$swiperArrows.on("keydown", this.onDirectionArrowKeydown.bind(this)), this.elements.$paginationWrapper.on("keydown", ".swiper-pagination-bullet", this.onDirectionArrowKeydown.bind(this)), this.elements.$swiperContainer.on("keydown", ".swiper-slide", this.onDirectionArrowKeydown.bind(this)), this.$element.find(":focusable").on("focus", this.onFocusDisableAutoplay.bind(this)), elementorFrontend.elements.$window.on("resize", this.getSwiperSettings.bind(this))
                }
                unbindEvents() {
                    this.elements.$swiperArrows.off(), this.elements.$paginationWrapper.off(), this.elements.$swiperContainer.off(), this.$element.find(":focusable").off(), elementorFrontend.elements.$window.off("resize")
                }
                onDirectionArrowKeydown(e) {
                    const t = elementorFrontend.config.is_rtl,
                        n = e.originalEvent.code,
                        i = t ? "ArrowLeft" : "ArrowRight";
                    if (!(-1 !== ["ArrowLeft", "ArrowRight"].indexOf(n))) return !0;
                    (t ? "ArrowRight" : "ArrowLeft") === n ? this.swiper.slidePrev() : i === n && this.swiper.slideNext()
                }
                onFocusDisableAutoplay() {
                    this.swiper.autoplay.stop()
                }
                updateSwiperOption(e) {
                    const t = this.getElementSettings()[e],
                        n = this.swiper.params;
                    switch (e) {
                        case "autoplay_speed":
                            n.autoplay.delay = t;
                            break;
                        case "speed":
                            n.speed = t
                    }
                    this.swiper.update()
                }
                getChangeableProperties() {
                    return {
                        pause_on_hover: "pauseOnHover",
                        autoplay_speed: "delay",
                        speed: "speed",
                        arrows_position: "arrows_position"
                    }
                }
                onElementChange(e) {
                    if (0 === e.indexOf("image_spacing_custom")) return void this.updateSpaceBetween(e);
                    if (this.getChangeableProperties()[e])
                        if ("pause_on_hover" === e) {
                            const e = this.getElementSettings("pause_on_hover");
                            this.togglePauseOnHover("yes" === e)
                        } else this.updateSwiperOption(e)
                }
                onEditSettingsChange(e) {
                    "activeItemIndex" === e && this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1)
                }
                getSpaceBetween() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "image_spacing_custom", "size", e) || 0
                }
                updateSpaceBetween(e) {
                    const t = e.match("image_spacing_custom_(.*)"),
                        n = t ? t[1] : "desktop",
                        i = this.getSpaceBetween(n);
                    "desktop" !== n && (this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween = i), this.swiper.params.spaceBetween = i, this.swiper.update()
                }
                getPaginationBullets() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "array";
                    const t = this.$element.find(this.getSettings("selectors").paginationBullet);
                    return "array" === e ? Array.from(t) : t
                }
                a11ySetWidgetAriaDetails() {
                    const e = this.$element;
                    e.attr("aria-roledescription", "carousel"), e.attr("aria-label", elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel)
                }
                a11ySetPaginationTabindex() {
                    const e = this.swiper ? .params.pagination.bulletClass,
                        t = this.swiper ? .params.pagination.bulletActiveClass;
                    this.getPaginationBullets().forEach((e => {
                        e.classList ? .contains(t) || e.removeAttribute("tabindex")
                    }));
                    const n = "ArrowLeft" === event ? .code || "ArrowRight" === event ? .code;
                    event ? .target ? .classList ? .contains(e) && n && this.$element.find(`.${t}`).trigger("focus")
                }
                getSwiperWrapperTranformXValue() {
                    let e = this.elements.$swiperWrapper[0] ? .style.transform;
                    return e = e.replace("translate3d(", ""), e = e.split(","), e = parseInt(e[0].replace("px", "")), e || 0
                }
                a11ySetSlideAriaHidden() {
                    if ("number" != typeof("initialisation" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") ? 0 : this.swiper ? .activeIndex)) return;
                    const e = this.getSwiperWrapperTranformXValue(),
                        t = this.elements.$swiperWrapper[0].clientWidth;
                    this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((n, i) => {
                        0 <= i.offsetLeft + e && t > i.offsetLeft + e ? (i.removeAttribute("aria-hidden"), i.removeAttribute("inert")) : (i.setAttribute("aria-hidden", !0), i.setAttribute("inert", ""))
                    }))
                }
                handleElementHandlers() {}
            }
            t.default = CarouselHandlerBase
        },
        2821: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(3090));
            class SwiperHandlerBase extends r.default {
                getInitialSlide() {
                    const e = this.getEditSettings();
                    return e.activeItemIndex ? e.activeItemIndex - 1 : 0
                }
                getSlidesCount() {
                    return this.elements.$slides.length
                }
                togglePauseOnHover(e) {
                    e ? this.elements.$swiperContainer.on({
                        mouseenter: () => {
                            this.swiper.autoplay.stop()
                        },
                        mouseleave: () => {
                            this.swiper.autoplay.start()
                        }
                    }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
                }
                handleKenBurns() {
                    const e = this.getSettings();
                    this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive), this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(), this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground), this.$activeImageBg.addClass(e.classes.kenBurnsActive)
                }
            }
            t.default = SwiperHandlerBase
        },
        3090: e => {
            "use strict";
            e.exports = elementorModules.ViewModule.extend({
                $element: null,
                editorListeners: null,
                onElementChange: null,
                onEditSettingsChange: null,
                onPageSettingsChange: null,
                isEdit: null,
                __construct(e) {
                    this.isActive(e) && (this.$element = e.$element, this.isEdit = this.$element.hasClass("elementor-element-edit-mode"), this.isEdit && this.addEditorListeners())
                },
                isActive: () => !0,
                isElementInTheCurrentDocument() {
                    return !!elementorFrontend.isEditMode() && elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId
                },
                findElement(e) {
                    var t = this.$element;
                    return t.find(e).filter((function() {
                        return jQuery(this).parent().closest(".elementor-element").is(t)
                    }))
                },
                getUniqueHandlerID(e, t) {
                    return e || (e = this.getModelCID()), t || (t = this.$element), e + t.attr("data-element_type") + this.getConstructorID()
                },
                initEditorListeners() {
                    var e = this;
                    if (e.editorListeners = [{
                            event: "element:destroy",
                            to: elementor.channels.data,
                            callback(t) {
                                t.cid === e.getModelCID() && e.onDestroy()
                            }
                        }], e.onElementChange) {
                        const t = e.getWidgetType() || e.getElementType();
                        let n = "change";
                        "global" !== t && (n += ":" + t), e.editorListeners.push({
                            event: n,
                            to: elementor.channels.editor,
                            callback(t, n) {
                                e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n)
                            }
                        })
                    }
                    e.onEditSettingsChange && e.editorListeners.push({
                        event: "change:editSettings",
                        to: elementor.channels.editor,
                        callback(t, n) {
                            if (n.model.cid !== e.getModelCID()) return;
                            const i = Object.keys(t.changed)[0];
                            e.onEditSettingsChange(i, t.changed[i])
                        }
                    }), ["page"].forEach((function(t) {
                        var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                        e[n] && e.editorListeners.push({
                            event: "change",
                            to: elementor.settings[t].model,
                            callback(t) {
                                e[n](t.changed)
                            }
                        })
                    }))
                },
                getEditorListeners() {
                    return this.editorListeners || this.initEditorListeners(), this.editorListeners
                },
                addEditorListeners() {
                    var e = this.getUniqueHandlerID();
                    this.getEditorListeners().forEach((function(t) {
                        elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                    }))
                },
                removeEditorListeners() {
                    var e = this.getUniqueHandlerID();
                    this.getEditorListeners().forEach((function(t) {
                        elementorFrontend.removeListeners(e, t.event, null, t.to)
                    }))
                },
                getElementType() {
                    return this.$element.data("element_type")
                },
                getWidgetType() {
                    const e = this.$element.data("widget_type");
                    if (e) return e.split(".")[0]
                },
                getID() {
                    return this.$element.data("id")
                },
                getModelCID() {
                    return this.$element.data("model-cid")
                },
                getElementSettings(e) {
                    let t = {};
                    const n = this.getModelCID();
                    if (this.isEdit && n) {
                        const e = elementorFrontend.config.elements.data[n],
                            i = e.attributes;
                        let r = i.widgetType || i.elType;
                        i.isInner && (r = "inner-" + r);
                        let s = elementorFrontend.config.elements.keys[r];
                        s || (s = elementorFrontend.config.elements.keys[r] = [], jQuery.each(e.controls, ((e, t) => {
                            (t.frontend_available || t.editor_available) && s.push(e)
                        }))), jQuery.each(e.getActiveControls(), (function(e) {
                            if (-1 !== s.indexOf(e)) {
                                let n = i[e];
                                n.toJSON && (n = n.toJSON()), t[e] = n
                            }
                        }))
                    } else t = this.$element.data("settings") || {};
                    return this.getItems(t, e)
                },
                getEditSettings(e) {
                    var t = {};
                    return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(t, e)
                },
                getCurrentDeviceSetting(e) {
                    return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
                },
                onInit() {
                    this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
                },
                onDestroy() {
                    this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents()
                }
            })
        },
        2263: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(3090));
            class StretchedElement extends r.default {
                getStretchedClass() {
                    return "e-stretched"
                }
                getStretchSettingName() {
                    return "stretch_element"
                }
                getStretchActiveValue() {
                    return "yes"
                }
                bindEvents() {
                    const e = this.getUniqueHandlerID();
                    elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element), elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this), elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
                }
                unbindEvents() {
                    elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch), elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
                }
                isActive(e) {
                    return elementorFrontend.isEditMode() || e.$element.hasClass(this.getStretchedClass())
                }
                getStretchElementForConfig() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return e ? this.$element.find(e) : this.$element
                }
                getStretchElementConfig() {
                    return {
                        element: this.getStretchElementForConfig(),
                        selectors: {
                            container: this.getStretchContainer()
                        },
                        considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
                    }
                }
                initStretch() {
                    this.stretch = this.stretch.bind(this), this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())
                }
                getStretchContainer() {
                    return elementorFrontend.getKitSettings("stretched_section_container") || window
                }
                isStretchSettingEnabled() {
                    return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue()
                }
                stretch() {
                    this.isStretchSettingEnabled() && this.stretchElement.stretch()
                }
                onInit() {
                    this.isActive(this.getSettings()) && (this.initStretch(), super.onInit(...arguments), this.stretch())
                }
                onElementChange(e) {
                    this.getStretchSettingName() === e && (this.isStretchSettingEnabled() ? this.stretch() : this.stretchElement.reset())
                }
                onKitChangeStretchContainerChange() {
                    this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch()
                }
            }
            t.default = StretchedElement
        },
        6412: (e, t, n) => {
            "use strict";
            var i = n(3203),
                r = i(n(5955)),
                s = i(n(8135)),
                o = i(n(5658)),
                a = i(n(2263)),
                l = i(n(3090)),
                c = i(n(2821)),
                u = i(n(1292)),
                d = i(n(7323)),
                h = i(n(32)),
                g = i(n(6752));
            r.default.frontend = {
                Document: s.default,
                tools: {
                    StretchElement: o.default
                },
                handlers: {
                    Base: l.default,
                    StretchedElement: a.default,
                    SwiperBase: c.default,
                    CarouselBase: u.default,
                    NestedTabs: d.default,
                    NestedAccordion: h.default,
                    NestedTitleKeyboardHandler: g.default
                }
            }
        },
        5658: e => {
            "use strict";
            e.exports = elementorModules.ViewModule.extend({
                getDefaultSettings: () => ({
                    element: null,
                    direction: elementorFrontend.config.is_rtl ? "right" : "left",
                    selectors: {
                        container: window
                    },
                    considerScrollbar: !1,
                    cssOutput: "inline"
                }),
                getDefaultElements() {
                    return {
                        $element: jQuery(this.getSettings("element"))
                    }
                },
                stretch() {
                    const e = this.getSettings();
                    let t;
                    try {
                        t = jQuery(e.selectors.container)
                    } catch (e) {}
                    t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
                    var n = this.elements.$element,
                        i = t.innerWidth(),
                        r = n.offset().left,
                        s = "fixed" === n.css("position"),
                        o = s ? 0 : r,
                        a = window === t[0];
                    if (!a) {
                        var l = t.offset().left;
                        s && (o = l), r > l && (o = r - l)
                    }
                    if (e.considerScrollbar && a) {
                        o -= window.innerWidth - i
                    }
                    s || (elementorFrontend.config.is_rtl && (o = i - (n.outerWidth() + o)), o = -o), e.margin && (o += e.margin);
                    var c = {};
                    let u = i;
                    e.margin && (u -= 2 * e.margin), c.width = u + "px", c[e.direction] = o + "px", "variables" !== e.cssOutput ? n.css(c) : this.applyCssVariables(n, c)
                },
                reset() {
                    const e = {},
                        t = this.getSettings(),
                        n = this.elements.$element;
                    "variables" !== t.cssOutput ? (e.width = "", e[t.direction] = "", n.css(e)) : this.resetCssVariables(n)
                },
                applyCssVariables(e, t) {
                    e.css("--stretch-width", t.width), t.left ? e.css("--stretch-left", t.left) : e.css("--stretch-right", t.right)
                },
                resetCssVariables(e) {
                    e.css({
                        "--stretch-width": "",
                        "--stretch-left": "",
                        "--stretch-right": ""
                    })
                }
            })
        },
        6630: (e, t) => {
            "use strict";

            function getChildrenWidth(e) {
                let t = 0;
                const n = e[0].parentNode,
                    i = getComputedStyle(n),
                    r = parseFloat(i.gap) || 0;
                for (let n = 0; n < e.length; n++) t += e[n].offsetWidth + r;
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.changeScrollStatus = function changeScrollStatus(e, t) {
                "mousedown" === t.type ? (e.classList.add("e-scroll"), e.dataset.pageX = t.pageX) : (e.classList.remove("e-scroll", "e-scroll-active"), e.dataset.pageX = "")
            }, t.setHorizontalScrollAlignment = function setHorizontalScrollAlignment(e) {
                let {
                    element: t,
                    direction: n,
                    justifyCSSVariable: i,
                    horizontalScrollStatus: r
                } = e;
                if (!t) return;
                ! function isHorizontalScroll(e, t) {
                    return e.clientWidth < getChildrenWidth(e.children) && "enable" === t
                }(t, r) ? t.style.setProperty(i, ""): function initialScrollPosition(e, t, n) {
                    const i = elementorFrontend.config.is_rtl;
                    if ("end" === t) e.style.setProperty(n, "start"), e.scrollLeft = i ? -1 * getChildrenWidth(e.children) : getChildrenWidth(e.children);
                    else e.style.setProperty(n, "start"), e.scrollLeft = 0
                }(t, n, i)
            }, t.setHorizontalTitleScrollValues = function setHorizontalTitleScrollValues(e, t, n) {
                const i = e.classList.contains("e-scroll"),
                    r = "enable" === t,
                    s = e.scrollWidth > e.clientWidth;
                if (!i || !r || !s) return;
                n.preventDefault();
                const o = parseFloat(e.dataset.pageX),
                    a = n.pageX - o;
                let l = 0;
                l = 20 < a ? 5 : -20 > a ? -5 : a;
                e.scrollLeft = e.scrollLeft - l, e.classList.add("e-scroll-active")
            }
        },
        2618: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n(740);
            var r = i(n(7597)),
                s = i(n(381));
            class ArgsObject extends r.default {
                static getInstanceType() {
                    return "ArgsObject"
                }
                constructor(e) {
                    super(), this.args = e
                }
                requireArgument(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                    if (!Object.prototype.hasOwnProperty.call(t, e)) throw Error(`${e} is required.`)
                }
                requireArgumentType(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                    if (this.requireArgument(e, n), typeof n[e] !== t) throw Error(`${e} invalid type: ${t}.`)
                }
                requireArgumentInstance(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                    if (this.requireArgument(e, n), !(n[e] instanceof t || (0, s.default)(n[e], t))) throw Error(`${e} invalid instance.`)
                }
                requireArgumentConstructor(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                    if (this.requireArgument(e, n), n[e].constructor.toString() !== t.prototype.constructor.toString()) throw Error(`${e} invalid constructor type.`)
                }
            }
            t.default = ArgsObject
        },
        869: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.ForceMethodImplementation = void 0, n(740);
            class ForceMethodImplementation extends Error {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`, t), Object.keys(t).length && console.error(t), Error.captureStackTrace(this, ForceMethodImplementation)
                }
            }
            t.ForceMethodImplementation = ForceMethodImplementation;
            t.default = e => {
                const t = Error().stack.split("\n")[2].trim(),
                    n = t.startsWith("at new") ? "constructor" : t.split(" ")[1],
                    i = {};
                if (i.functionName = n, i.fullName = n, i.functionName.includes(".")) {
                    const e = i.functionName.split(".");
                    i.className = e[0], i.functionName = e[1]
                } else i.isStatic = !0;
                throw new ForceMethodImplementation(i, e)
            }
        },
        7597: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class InstanceType {
                static[Symbol.hasInstance](e) {
                    let t = super[Symbol.hasInstance](e);
                    if (e && !e.constructor.getInstanceType) return t;
                    if (e && (e.instanceTypes || (e.instanceTypes = []), t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0), t)) {
                        const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType(); - 1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                    }
                    return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())), t
                }
                static getInstanceType() {
                    elementorModules.ForceMethodImplementation()
                }
                constructor() {
                    let e = new.target;
                    const t = [];
                    for (; e.__proto__ && e.__proto__.name;) t.push(e.__proto__), e = e.__proto__;
                    t.reverse().forEach((e => this instanceof e))
                }
            }
            t.default = InstanceType
        },
        1192: (e, t, n) => {
            "use strict";
            n(740);
            const Module = function() {
                const e = jQuery,
                    t = arguments,
                    n = this,
                    i = {};
                let r;
                this.getItems = function(e, t) {
                        if (t) {
                            const n = t.split("."),
                                i = n.splice(0, 1);
                            if (!n.length) return e[i];
                            if (!e[i]) return;
                            return this.getItems(e[i], n.join("."))
                        }
                        return e
                    }, this.getSettings = function(e) {
                        return this.getItems(r, e)
                    }, this.setSettings = function(t, i, s) {
                        if (s || (s = r), "object" == typeof t) return e.extend(s, t), n;
                        const o = t.split("."),
                            a = o.splice(0, 1);
                        return o.length ? (s[a] || (s[a] = {}), n.setSettings(o.join("."), i, s[a])) : (s[a] = i, n)
                    }, this.getErrorMessage = function(e, t) {
                        let n;
                        if ("forceMethodImplementation" === e) n = `The method '${t}' must to be implemented in the inheritor child.`;
                        else n = "An error occurs";
                        return n
                    }, this.forceMethodImplementation = function(e) {
                        throw new Error(this.getErrorMessage("forceMethodImplementation", e))
                    }, this.on = function(t, r) {
                        if ("object" == typeof t) return e.each(t, (function(e) {
                            n.on(e, this)
                        })), n;
                        return t.split(" ").forEach((function(e) {
                            i[e] || (i[e] = []), i[e].push(r)
                        })), n
                    }, this.off = function(e, t) {
                        if (!i[e]) return n;
                        if (!t) return delete i[e], n;
                        const r = i[e].indexOf(t);
                        return -1 !== r && (delete i[e][r], i[e] = i[e].filter((e => e))), n
                    }, this.trigger = function(t) {
                        const r = "on" + t[0].toUpperCase() + t.slice(1),
                            s = Array.prototype.slice.call(arguments, 1);
                        n[r] && n[r].apply(n, s);
                        const o = i[t];
                        return o ? (e.each(o, (function(e, t) {
                            t.apply(n, s)
                        })), n) : n
                    }, n.__construct.apply(n, t), e.each(n, (function(e) {
                        const t = n[e];
                        "function" == typeof t && (n[e] = function() {
                            return t.apply(n, arguments)
                        })
                    })),
                    function() {
                        r = n.getDefaultSettings();
                        const i = t[0];
                        i && e.extend(!0, r, i)
                    }(), n.trigger("init")
            };
            Module.prototype.__construct = function() {}, Module.prototype.getDefaultSettings = function() {
                return {}
            }, Module.prototype.getConstructorID = function() {
                return this.constructor.name
            }, Module.extend = function(e) {
                const t = jQuery,
                    n = this,
                    child = function() {
                        return n.apply(this, arguments)
                    };
                return t.extend(child, n), (child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child, child.__super__ = n.prototype, child
            }, e.exports = Module
        },
        6516: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(2640)).default.extend({
                getDefaultSettings: () => ({
                    container: null,
                    items: null,
                    columnsCount: 3,
                    verticalSpaceBetween: 30
                }),
                getDefaultElements() {
                    return {
                        $container: jQuery(this.getSettings("container")),
                        $items: jQuery(this.getSettings("items"))
                    }
                },
                run() {
                    var e = [],
                        t = this.elements.$container.position().top,
                        n = this.getSettings(),
                        i = n.columnsCount;
                    t += parseInt(this.elements.$container.css("margin-top"), 10), this.elements.$items.each((function(r) {
                        var s = Math.floor(r / i),
                            o = jQuery(this),
                            a = o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                        if (s) {
                            var l = o.position(),
                                c = r % i,
                                u = l.top - t - e[c];
                            u -= parseInt(o.css("margin-top"), 10), u *= -1, o.css("margin-top", u + "px"), e[c] += a
                        } else e.push(a)
                    }))
                }
            });
            t.default = r
        },
        400: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class Scroll {
                static scrollObserver(e) {
                    let t = 0;
                    const n = {
                        root: e.root || null,
                        rootMargin: e.offset || "0px",
                        threshold: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            const t = [];
                            if (e > 0 && e <= 100) {
                                const n = 100 / e;
                                for (let e = 0; e <= 100; e += n) t.push(e / 100)
                            } else t.push(0);
                            return t
                        }(e.sensitivity)
                    };
                    return new IntersectionObserver((function handleIntersect(n) {
                        const i = n[0].boundingClientRect.y,
                            r = n[0].isIntersecting,
                            s = i < t ? "down" : "up",
                            o = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
                        e.callback({
                            sensitivity: e.sensitivity,
                            isInViewport: r,
                            scrollPercentage: o,
                            intersectionScrollDirection: s
                        }), t = i
                    }), n)
                }
                static getElementViewportPercentage(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = e[0].getBoundingClientRect(),
                        i = t.start || 0,
                        r = t.end || 0,
                        s = window.innerHeight * i / 100,
                        o = window.innerHeight * r / 100,
                        a = n.top - window.innerHeight,
                        l = 0 - a + s,
                        c = n.top + s + e.height() - a + o,
                        u = Math.max(0, Math.min(l / c, 1));
                    return parseFloat((100 * u).toFixed(2))
                }
                static getPageScrollPercentage() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    const n = e.start || 0,
                        i = e.end || 0,
                        r = t || document.documentElement.scrollHeight - document.documentElement.clientHeight,
                        s = r * n / 100,
                        o = r + s + r * i / 100;
                    return (document.documentElement.scrollTop + document.body.scrollTop + s) / o * 100
                }
            }
        },
        2640: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(1192)).default.extend({
                elements: null,
                getDefaultElements: () => ({}),
                bindEvents() {},
                onInit() {
                    this.initElements(), this.bindEvents()
                },
                initElements() {
                    this.elements = this.getDefaultElements()
                }
            });
            t.default = r
        },
        5955: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(1192)),
                s = i(n(2640)),
                o = i(n(2618)),
                a = i(n(6516)),
                l = i(n(400)),
                c = i(n(869)),
                u = window.elementorModules = {
                    Module: r.default,
                    ViewModule: s.default,
                    ArgsObject: o.default,
                    ForceMethodImplementation: c.default,
                    utils: {
                        Masonry: a.default,
                        Scroll: l.default
                    }
                };
            t.default = u
        },
        7148: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(6752));
            class NestedAccordionTitleKeyboardHandler extends r.default {
                __construct() {
                    super.__construct(...arguments);
                    const e = arguments.length <= 0 ? void 0 : arguments[0];
                    this.toggleTitle = e.toggleTitle
                }
                getDefaultSettings() {
                    return { ...super.getDefaultSettings(),
                        selectors: {
                            itemTitle: ".e-n-accordion-item-title",
                            itemContainer: ".e-n-accordion-item > .e-con"
                        },
                        ariaAttributes: {
                            titleStateAttribute: "aria-expanded",
                            activeTitleSelector: '[aria-expanded="true"]'
                        },
                        datasets: {
                            titleIndex: "data-accordion-index"
                        }
                    }
                }
                handeTitleLinkEnterOrSpaceEvent(e) {
                    this.toggleTitle(e)
                }
                handleContentElementEscapeEvents(e) {
                    this.getActiveTitleElement().trigger("focus"), this.toggleTitle(e)
                }
                handleTitleEscapeKeyEvents(e) {
                    const t = e ? .currentTarget ? .parentElement,
                        n = t ? .open;
                    n && this.toggleTitle(e)
                }
            }
            t.default = NestedAccordionTitleKeyboardHandler
        },
        32: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(3090)),
                s = i(n(7148));
            class NestedAccordion extends r.default {
                constructor() {
                    super(...arguments), this.animations = new Map
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            accordion: ".e-n-accordion",
                            accordionContentContainers: ".e-n-accordion > .e-con",
                            accordionItems: ".e-n-accordion-item",
                            accordionItemTitles: ".e-n-accordion-item-title",
                            accordionContent: ".e-n-accordion-item > .e-con",
                            accordionWrapper: ".e-n-accordion-item"
                        },
                        default_state: "expanded"
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $accordion: this.findElement(e.accordion),
                        $contentContainers: this.findElement(e.accordionContentContainers),
                        $accordionItems: this.findElement(e.accordionItems),
                        $accordionTitles: this.findElement(e.accordionItemTitles),
                        $accordionContent: this.findElement(e.accordionContent)
                    }
                }
                onInit() {
                    super.onInit(...arguments), elementorFrontend.isEditMode() && this.interlaceContainers(), this.injectKeyboardHandler()
                }
                injectKeyboardHandler() {
                    "nested-accordion.default" === this.getSettings("elementName") && new s.default({
                        $element: this.$element,
                        toggleTitle: this.clickListener.bind(this)
                    })
                }
                interlaceContainers() {
                    const {
                        $contentContainers: e,
                        $accordionItems: t
                    } = this.getDefaultElements();
                    e.each(((e, n) => {
                        t[e].appendChild(n)
                    }))
                }
                bindEvents() {
                    this.elements.$accordionTitles.on("click", this.clickListener.bind(this))
                }
                unbindEvents() {
                    this.elements.$accordionTitles.off()
                }
                clickListener(e) {
                    e.preventDefault();
                    const t = this.getSettings(),
                        n = e ? .currentTarget ? .closest(t.selectors.accordionWrapper),
                        i = n.querySelector(t.selectors.accordionItemTitles),
                        r = n.querySelector(t.selectors.accordionContent),
                        {
                            max_items_expended: s
                        } = this.getElementSettings(),
                        {
                            $accordionTitles: o,
                            $accordionItems: a
                        } = this.elements;
                    "one" === s && this.closeAllItems(a, o), n.open ? this.closeAccordionItem(n, i) : this.prepareOpenAnimation(n, i, r)
                }
                animateItem(e, t, n, i) {
                    e.style.overflow = "hidden";
                    let r = this.animations.get(e);
                    r && r.cancel(), r = e.animate({
                        height: [t, n]
                    }, {
                        duration: this.getAnimationDuration()
                    }), r.onfinish = () => this.onAnimationFinish(e, i), this.animations.set(e, r), e.querySelector("summary") ? .setAttribute("aria-expanded", i)
                }
                closeAccordionItem(e, t) {
                    const n = `${e.offsetHeight}px`,
                        i = `${t.offsetHeight}px`;
                    this.animateItem(e, n, i, !1)
                }
                prepareOpenAnimation(e, t, n) {
                    e.style.overflow = "hidden", e.style.height = `${e.offsetHeight}px`, e.open = !0, window.requestAnimationFrame((() => this.openAccordionItem(e, t, n)))
                }
                openAccordionItem(e, t, n) {
                    const i = `${e.offsetHeight}px`,
                        r = `${t.offsetHeight+n.offsetHeight}px`;
                    this.animateItem(e, i, r, !0)
                }
                onAnimationFinish(e, t) {
                    e.open = t, this.animations.set(e, null), e.style.height = e.style.overflow = ""
                }
                closeAllItems(e, t) {
                    t.each(((t, n) => {
                        this.closeAccordionItem(e[t], n)
                    }))
                }
                getAnimationDuration() {
                    const {
                        size: e,
                        unit: t
                    } = this.getElementSettings("n_accordion_animation_duration");
                    return e * ("ms" === t ? 1 : 1e3)
                }
            }
            t.default = NestedAccordion
        },
        7323: (e, t, n) => {
            "use strict";
            var i = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(3090)),
                s = n(6630);
            class NestedTabs extends r.default {
                constructor() {
                    super(...arguments), this.resizeListenerNestedTabs = null
                }
                getTabTitleFilterSelector(e) {
                    return `[data-tab-index="${e}"]`
                }
                getTabContentFilterSelector(e) {
                    return `*:nth-child(${e})`
                }
                getTabIndex(e) {
                    return e.getAttribute("data-tab-index")
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            widgetContainer: ".e-n-tabs",
                            tabTitle: ".e-n-tab-title",
                            tabContent: ".e-n-tabs-content > .e-con",
                            headingContainer: ".e-n-tabs-heading",
                            activeTabContentContainers: ".e-con.e-active"
                        },
                        classes: {
                            active: "e-active"
                        },
                        ariaAttributes: {
                            titleStateAttribute: "aria-selected",
                            activeTitleSelector: '[aria-selected="true"]'
                        },
                        showTabFn: "show",
                        hideTabFn: "hide",
                        toggleSelf: !1,
                        hidePrevious: !0,
                        autoExpand: !0
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $tabTitles: this.findElement(e.tabTitle),
                        $tabContents: this.findElement(e.tabContent),
                        $headingContainer: this.findElement(e.headingContainer)
                    }
                }
                getKeyboardNavigationSettings() {
                    return this.getSettings()
                }
                activateDefaultTab() {
                    const e = this.getSettings(),
                        t = this.getEditSettings("activeItemIndex") || 1,
                        n = {
                            showTabFn: e.showTabFn,
                            hideTabFn: e.hideTabFn
                        };
                    this.setSettings({
                        showTabFn: "show",
                        hideTabFn: "hide"
                    }), this.changeActiveTab(t), this.setSettings(n)
                }
                deactivateActiveTab(e) {
                    const t = this.getSettings(),
                        n = t.classes.active,
                        i = t.ariaAttributes.activeTitleSelector,
                        r = "." + n,
                        s = this.elements.$tabTitles.filter(i),
                        o = this.elements.$tabContents.filter(r);
                    return this.setTabDeactivationAttributes(s, e), o.removeClass(n), o[t.hideTabFn](0, (() => this.onHideTabContent(o))), o
                }
                getTitleActivationAttributes() {
                    return {
                        tabindex: "0",
                        [this.getSettings("ariaAttributes").titleStateAttribute]: "true"
                    }
                }
                setTabDeactivationAttributes(e) {
                    const t = this.getSettings("ariaAttributes").titleStateAttribute;
                    e.attr({
                        tabindex: "-1",
                        [t]: "false"
                    })
                }
                onHideTabContent() {}
                activateTab(e) {
                    const t = this.getSettings(),
                        n = t.classes.active,
                        i = "show" === t.showTabFn ? 0 : 400;
                    let r = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),
                        s = this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));
                    if (!r.length) {
                        const t = Math.max(e - 1, 1);
                        r = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)), s = this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))
                    }
                    r.attr(this.getTitleActivationAttributes()), s.addClass(n), s[t.showTabFn](i, (() => this.onShowTabContent(s)))
                }
                onShowTabContent(e) {
                    elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"), elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate", e), elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")
                }
                isActiveTab(e) {
                    return "true" === this.elements.$tabTitles.filter('[data-tab-index="' + e + '"]').attr(this.getSettings("ariaAttributes").titleStateAttribute)
                }
                onTabClick(e) {
                    e.preventDefault(), this.changeActiveTab(e.currentTarget ? .getAttribute("data-tab-index"), !0)
                }
                getTabEvents() {
                    return {
                        click: this.onTabClick.bind(this)
                    }
                }
                getHeadingEvents() {
                    const e = this.elements.$headingContainer[0];
                    return {
                        mousedown: s.changeScrollStatus.bind(this, e),
                        mouseup: s.changeScrollStatus.bind(this, e),
                        mouseleave: s.changeScrollStatus.bind(this, e),
                        mousemove: s.setHorizontalTitleScrollValues.bind(this, e, this.getHorizontalScrollSetting())
                    }
                }
                bindEvents() {
                    this.elements.$tabTitles.on(this.getTabEvents()), this.elements.$headingContainer.on(this.getHeadingEvents());
                    const e = {
                        element: this.elements.$headingContainer[0],
                        direction: this.getTabsDirection(),
                        justifyCSSVariable: "--n-tabs-heading-justify-content",
                        horizontalScrollStatus: this.getHorizontalScrollSetting()
                    };
                    this.resizeListenerNestedTabs = s.setHorizontalScrollAlignment.bind(this, e), elementorFrontend.elements.$window.on("resize", this.resizeListenerNestedTabs), elementorFrontend.elements.$window.on("resize", this.setTouchMode.bind(this)), elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.reInitSwipers), elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard", this.changeActiveTabByKeyboard.bind(this))
                }
                unbindEvents() {
                    this.elements.$tabTitles.off(), this.elements.$headingContainer.off(), this.elements.$tabContents.children().off(), elementorFrontend.elements.$window.off("resize"), elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")
                }
                reInitSwipers(e, t) {
                    const n = t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
                    for (const e of n) {
                        if (!e.swiper) return;
                        e.swiper.initialized = !1, e.swiper.init()
                    }
                }
                onInit() {
                    super.onInit(...arguments), this.getSettings("autoExpand") && this.activateDefaultTab();
                    const e = {
                        element: this.elements.$headingContainer[0],
                        direction: this.getTabsDirection(),
                        justifyCSSVariable: "--n-tabs-heading-justify-content",
                        horizontalScrollStatus: this.getHorizontalScrollSetting()
                    };
                    (0, s.setHorizontalScrollAlignment)(e), this.setTouchMode(), "nested-tabs.default" === this.getSettings("elementName") && new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings())
                }
                onEditSettingsChange(e, t) {
                    "activeItemIndex" === e && this.changeActiveTab(t, !1)
                }
                onElementChange(e) {
                    if (this.checkSliderPropsToWatch(e)) {
                        const e = {
                            element: this.elements.$headingContainer[0],
                            direction: this.getTabsDirection(),
                            justifyCSSVariable: "--n-tabs-heading-justify-content",
                            horizontalScrollStatus: this.getHorizontalScrollSetting()
                        };
                        (0, s.setHorizontalScrollAlignment)(e)
                    }
                }
                checkSliderPropsToWatch(e) {
                    return 0 === e.indexOf("horizontal_scroll") || "breakpoint_selector" === e || 0 === e.indexOf("tabs_justify_horizontal") || 0 === e.indexOf("tabs_title_space_between")
                }
                changeActiveTab(e) {
                    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.isEdit && this.isElementInTheCurrentDocument()) return window.top.$e.run("document/repeater/select", {
                        container: elementor.getContainer(this.$element.attr("data-id")),
                        index: parseInt(e)
                    });
                    const t = this.isActiveTab(e),
                        n = this.getSettings();
                    if (!n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(e), !n.hidePrevious && t && this.deactivateActiveTab(e), !t) {
                        if (this.isAccordionVersion()) return void this.activateMobileTab(e);
                        this.activateTab(e)
                    }
                }
                changeActiveTabByKeyboard(e, t) {
                    t.widgetId.toString() === this.getID().toString() && this.changeActiveTab(t.titleIndex, !0)
                }
                activateMobileTab(e) {
                    setTimeout((() => {
                        this.activateTab(e), this.forceActiveTabToBeInViewport(e)
                    }), 10)
                }
                forceActiveTabToBeInViewport(e) {
                    if (!elementorFrontend.isEditMode()) return;
                    const t = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e));
                    elementor.helpers.isInViewport(t[0]) || t[0].scrollIntoView({
                        block: "center"
                    })
                }
                getActiveClass() {
                    return this.getSettings().classes.active
                }
                getTabsDirection() {
                    const e = elementorFrontend.getCurrentDeviceMode();
                    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "tabs_justify_horizontal", "", e)
                }
                getHorizontalScrollSetting() {
                    const e = elementorFrontend.getCurrentDeviceMode();
                    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "horizontal_scroll", "", e)
                }
                isAccordionVersion() {
                    return "contents" === this.elements.$headingContainer.css("display")
                }
                setTouchMode() {
                    const e = this.getSettings("selectors").widgetContainer;
                    if (elementorFrontend.isEditMode() || "resize" === event ? .type) {
                        const t = ["mobile", "mobile_extra", "tablet", "tablet_extra"],
                            n = elementorFrontend.getCurrentDeviceMode();
                        if (-1 !== t.indexOf(n)) return void this.$element.find(e).attr("data-touch-mode", "true")
                    } else if ("ontouchstart" in window) return void this.$element.find(e).attr("data-touch-mode", "true");
                    this.$element.find(e).attr("data-touch-mode", "false")
                }
            }
            t.default = NestedTabs
        },
        5089: (e, t, n) => {
            "use strict";
            var i = n(930),
                r = n(9268),
                s = TypeError;
            e.exports = function(e) {
                if (i(e)) return e;
                throw s(r(e) + " is not a function")
            }
        },
        1378: (e, t, n) => {
            "use strict";
            var i = n(930),
                r = String,
                s = TypeError;
            e.exports = function(e) {
                if ("object" == typeof e || i(e)) return e;
                throw s("Can't set " + r(e) + " as a prototype")
            }
        },
        6112: (e, t, n) => {
            "use strict";
            var i = n(8759),
                r = String,
                s = TypeError;
            e.exports = function(e) {
                if (i(e)) return e;
                throw s(r(e) + " is not an object")
            }
        },
        6198: (e, t, n) => {
            "use strict";
            var i = n(4088),
                r = n(7740),
                s = n(2871),
                createMethod = function(e) {
                    return function(t, n, o) {
                        var a, l = i(t),
                            c = s(l),
                            u = r(o, c);
                        if (e && n != n) {
                            for (; c > u;)
                                if ((a = l[u++]) != a) return !0
                        } else
                            for (; c > u; u++)
                                if ((e || u in l) && l[u] === n) return e || u || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: createMethod(!0),
                indexOf: createMethod(!1)
            }
        },
        2306: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = i({}.toString),
                s = i("".slice);
            e.exports = function(e) {
                return s(r(e), 8, -1)
            }
        },
        375: (e, t, n) => {
            "use strict";
            var i = n(2371),
                r = n(930),
                s = n(2306),
                o = n(211)("toStringTag"),
                a = Object,
                l = "Arguments" == s(function() {
                    return arguments
                }());
            e.exports = i ? s : function(e) {
                var t, n, i;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = a(e), o)) ? n : l ? s(t) : "Object" == (i = s(t)) && r(t.callee) ? "Arguments" : i
            }
        },
        8474: (e, t, n) => {
            "use strict";
            var i = n(9606),
                r = n(6095),
                s = n(4399),
                o = n(7826);
            e.exports = function(e, t, n) {
                for (var a = r(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
                    var d = a[u];
                    i(e, d) || n && i(n, d) || l(e, d, c(t, d))
                }
            }
        },
        2585: (e, t, n) => {
            "use strict";
            var i = n(5283),
                r = n(7826),
                s = n(5736);
            e.exports = i ? function(e, t, n) {
                return r.f(e, t, s(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        5736: e => {
            "use strict";
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        1343: (e, t, n) => {
            "use strict";
            var i = n(930),
                r = n(7826),
                s = n(3712),
                o = n(9444);
            e.exports = function(e, t, n, a) {
                a || (a = {});
                var l = a.enumerable,
                    c = void 0 !== a.name ? a.name : t;
                if (i(n) && s(n, c, a), a.global) l ? e[t] = n : o(t, n);
                else {
                    try {
                        a.unsafe ? e[t] && (l = !0) : delete e[t]
                    } catch (e) {}
                    l ? e[t] = n : r.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !a.nonConfigurable,
                        writable: !a.nonWritable
                    })
                }
                return e
            }
        },
        9444: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    r(i, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    i[e] = t
                }
                return t
            }
        },
        5283: (e, t, n) => {
            "use strict";
            var i = n(3677);
            e.exports = !i((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        7886: e => {
            "use strict";
            var t = "object" == typeof document && document.all,
                n = void 0 === t && void 0 !== t;
            e.exports = {
                all: t,
                IS_HTMLDDA: n
            }
        },
        821: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = n(8759),
                s = i.document,
                o = r(s) && r(s.createElement);
            e.exports = function(e) {
                return o ? s.createElement(e) : {}
            }
        },
        4999: e => {
            "use strict";
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        1448: (e, t, n) => {
            "use strict";
            var i, r, s = n(2086),
                o = n(4999),
                a = s.process,
                l = s.Deno,
                c = a && a.versions || l && l.version,
                u = c && c.v8;
            u && (r = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !r && o && (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = o.match(/Chrome\/(\d+)/)) && (r = +i[1]), e.exports = r
        },
        8684: e => {
            "use strict";
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        79: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = Error,
                s = i("".replace),
                o = String(r("zxcasd").stack),
                a = /\n\s*at [^:]*:[^\n]*/,
                l = a.test(o);
            e.exports = function(e, t) {
                if (l && "string" == typeof e && !r.prepareStackTrace)
                    for (; t--;) e = s(e, a, "");
                return e
            }
        },
        8395: (e, t, n) => {
            "use strict";
            var i = n(2585),
                r = n(79),
                s = n(2114),
                o = Error.captureStackTrace;
            e.exports = function(e, t, n, a) {
                s && (o ? o(e, t) : i(e, "stack", r(n, a)))
            }
        },
        2114: (e, t, n) => {
            "use strict";
            var i = n(3677),
                r = n(5736);
            e.exports = !i((function() {
                var e = Error("a");
                return !("stack" in e) || (Object.defineProperty(e, "stack", r(1, 7)), 7 !== e.stack)
            }))
        },
        1695: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = n(4399).f,
                s = n(2585),
                o = n(1343),
                a = n(9444),
                l = n(8474),
                c = n(7189);
            e.exports = function(e, t) {
                var n, u, d, h, g, p = e.target,
                    f = e.global,
                    m = e.stat;
                if (n = f ? i : m ? i[p] || a(p, {}) : (i[p] || {}).prototype)
                    for (u in t) {
                        if (h = t[u], d = e.dontCallGetSet ? (g = r(n, u)) && g.value : n[u], !c(f ? u : p + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                            if (typeof h == typeof d) continue;
                            l(h, d)
                        }(e.sham || d && d.sham) && s(h, "sham", !0), o(n, u, h, e)
                    }
            }
        },
        3677: e => {
            "use strict";
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        7258: (e, t, n) => {
            "use strict";
            var i = n(6059),
                r = Function.prototype,
                s = r.apply,
                o = r.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (i ? o.bind(s) : function() {
                return o.apply(s, arguments)
            })
        },
        6059: (e, t, n) => {
            "use strict";
            var i = n(3677);
            e.exports = !i((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        9413: (e, t, n) => {
            "use strict";
            var i = n(6059),
                r = Function.prototype.call;
            e.exports = i ? r.bind(r) : function() {
                return r.apply(r, arguments)
            }
        },
        4398: (e, t, n) => {
            "use strict";
            var i = n(5283),
                r = n(9606),
                s = Function.prototype,
                o = i && Object.getOwnPropertyDescriptor,
                a = r(s, "name"),
                l = a && "something" === function something() {}.name,
                c = a && (!i || i && o(s, "name").configurable);
            e.exports = {
                EXISTS: a,
                PROPER: l,
                CONFIGURABLE: c
            }
        },
        1518: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = n(5089);
            e.exports = function(e, t, n) {
                try {
                    return i(r(Object.getOwnPropertyDescriptor(e, t)[n]))
                } catch (e) {}
            }
        },
        8240: (e, t, n) => {
            "use strict";
            var i = n(6059),
                r = Function.prototype,
                s = r.call,
                o = i && r.bind.bind(s, s);
            e.exports = i ? o : function(e) {
                return function() {
                    return s.apply(e, arguments)
                }
            }
        },
        563: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = n(930);
            e.exports = function(e, t) {
                return arguments.length < 2 ? (n = i[e], r(n) ? n : void 0) : i[e] && i[e][t];
                var n
            }
        },
        2964: (e, t, n) => {
            "use strict";
            var i = n(5089),
                r = n(1858);
            e.exports = function(e, t) {
                var n = e[t];
                return r(n) ? void 0 : i(n)
            }
        },
        2086: function(e, t, n) {
            "use strict";
            var check = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof n.g && n.g) || function() {
                return this
            }() || this || Function("return this")()
        },
        9606: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = n(3060),
                s = i({}.hasOwnProperty);
            e.exports = Object.hasOwn || function hasOwn(e, t) {
                return s(r(e), t)
            }
        },
        7153: e => {
            "use strict";
            e.exports = {}
        },
        6761: (e, t, n) => {
            "use strict";
            var i = n(5283),
                r = n(3677),
                s = n(821);
            e.exports = !i && !r((function() {
                return 7 != Object.defineProperty(s("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        5974: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = n(3677),
                s = n(2306),
                o = Object,
                a = i("".split);
            e.exports = r((function() {
                return !o("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == s(e) ? a(e, "") : o(e)
            } : o
        },
        5070: (e, t, n) => {
            "use strict";
            var i = n(930),
                r = n(8759),
                s = n(7530);
            e.exports = function(e, t, n) {
                var o, a;
                return s && i(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && s(e, a), e
            }
        },
        9277: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = n(930),
                s = n(4489),
                o = i(Function.toString);
            r(s.inspectSource) || (s.inspectSource = function(e) {
                return o(e)
            }), e.exports = s.inspectSource
        },
        8945: (e, t, n) => {
            "use strict";
            var i = n(8759),
                r = n(2585);
            e.exports = function(e, t) {
                i(t) && "cause" in t && r(e, "cause", t.cause)
            }
        },
        3278: (e, t, n) => {
            "use strict";
            var i, r, s, o = n(640),
                a = n(2086),
                l = n(8759),
                c = n(2585),
                u = n(9606),
                d = n(4489),
                h = n(8944),
                g = n(7153),
                p = "Object already initialized",
                f = a.TypeError,
                m = a.WeakMap;
            if (o || d.state) {
                var v = d.state || (d.state = new m);
                v.get = v.get, v.has = v.has, v.set = v.set, i = function(e, t) {
                    if (v.has(e)) throw f(p);
                    return t.facade = e, v.set(e, t), t
                }, r = function(e) {
                    return v.get(e) || {}
                }, s = function(e) {
                    return v.has(e)
                }
            } else {
                var b = h("state");
                g[b] = !0, i = function(e, t) {
                    if (u(e, b)) throw f(p);
                    return t.facade = e, c(e, b, t), t
                }, r = function(e) {
                    return u(e, b) ? e[b] : {}
                }, s = function(e) {
                    return u(e, b)
                }
            }
            e.exports = {
                set: i,
                get: r,
                has: s,
                enforce: function(e) {
                    return s(e) ? r(e) : i(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!l(t) || (n = r(t)).type !== e) throw f("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        930: (e, t, n) => {
            "use strict";
            var i = n(7886),
                r = i.all;
            e.exports = i.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === r
            } : function(e) {
                return "function" == typeof e
            }
        },
        7189: (e, t, n) => {
            "use strict";
            var i = n(3677),
                r = n(930),
                s = /#|\.prototype\./,
                isForced = function(e, t) {
                    var n = a[o(e)];
                    return n == c || n != l && (r(t) ? i(t) : !!t)
                },
                o = isForced.normalize = function(e) {
                    return String(e).replace(s, ".").toLowerCase()
                },
                a = isForced.data = {},
                l = isForced.NATIVE = "N",
                c = isForced.POLYFILL = "P";
            e.exports = isForced
        },
        1858: e => {
            "use strict";
            e.exports = function(e) {
                return null == e
            }
        },
        8759: (e, t, n) => {
            "use strict";
            var i = n(930),
                r = n(7886),
                s = r.all;
            e.exports = r.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : i(e) || e === s
            } : function(e) {
                return "object" == typeof e ? null !== e : i(e)
            }
        },
        3296: e => {
            "use strict";
            e.exports = !1
        },
        2071: (e, t, n) => {
            "use strict";
            var i = n(563),
                r = n(930),
                s = n(5516),
                o = n(1876),
                a = Object;
            e.exports = o ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = i("Symbol");
                return r(t) && s(t.prototype, a(e))
            }
        },
        2871: (e, t, n) => {
            "use strict";
            var i = n(4005);
            e.exports = function(e) {
                return i(e.length)
            }
        },
        3712: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = n(3677),
                s = n(930),
                o = n(9606),
                a = n(5283),
                l = n(4398).CONFIGURABLE,
                c = n(9277),
                u = n(3278),
                d = u.enforce,
                h = u.get,
                g = String,
                p = Object.defineProperty,
                f = i("".slice),
                m = i("".replace),
                v = i([].join),
                b = a && !r((function() {
                    return 8 !== p((function() {}), "length", {
                        value: 8
                    }).length
                })),
                y = String(String).split("String"),
                S = e.exports = function(e, t, n) {
                    "Symbol(" === f(g(t), 0, 7) && (t = "[" + m(g(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!o(e, "name") || l && e.name !== t) && (a ? p(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), b && n && o(n, "arity") && e.length !== n.arity && p(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && o(n, "constructor") && n.constructor ? a && p(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (e) {}
                    var i = d(e);
                    return o(i, "source") || (i.source = v(y, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = S((function toString() {
                return s(this) && h(this).source || c(this)
            }), "toString")
        },
        5681: e => {
            "use strict";
            var t = Math.ceil,
                n = Math.floor;
            e.exports = Math.trunc || function trunc(e) {
                var i = +e;
                return (i > 0 ? n : t)(i)
            }
        },
        1879: (e, t, n) => {
            "use strict";
            var i = n(4059);
            e.exports = function(e, t) {
                return void 0 === e ? arguments.length < 2 ? "" : t : i(e)
            }
        },
        7826: (e, t, n) => {
            "use strict";
            var i = n(5283),
                r = n(6761),
                s = n(8202),
                o = n(6112),
                a = n(2258),
                l = TypeError,
                c = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                d = "enumerable",
                h = "configurable",
                g = "writable";
            t.f = i ? s ? function defineProperty(e, t, n) {
                if (o(e), t = a(t), o(n), "function" == typeof e && "prototype" === t && "value" in n && g in n && !n[g]) {
                    var i = u(e, t);
                    i && i[g] && (e[t] = n.value, n = {
                        configurable: h in n ? n[h] : i[h],
                        enumerable: d in n ? n[d] : i[d],
                        writable: !1
                    })
                }
                return c(e, t, n)
            } : c : function defineProperty(e, t, n) {
                if (o(e), t = a(t), o(n), r) try {
                    return c(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw l("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        4399: (e, t, n) => {
            "use strict";
            var i = n(5283),
                r = n(9413),
                s = n(7446),
                o = n(5736),
                a = n(4088),
                l = n(2258),
                c = n(9606),
                u = n(6761),
                d = Object.getOwnPropertyDescriptor;
            t.f = i ? d : function getOwnPropertyDescriptor(e, t) {
                if (e = a(e), t = l(t), u) try {
                    return d(e, t)
                } catch (e) {}
                if (c(e, t)) return o(!r(s.f, e, t), e[t])
            }
        },
        62: (e, t, n) => {
            "use strict";
            var i = n(1352),
                r = n(8684).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
                return i(e, r)
            }
        },
        6952: (e, t) => {
            "use strict";
            t.f = Object.getOwnPropertySymbols
        },
        5516: (e, t, n) => {
            "use strict";
            var i = n(8240);
            e.exports = i({}.isPrototypeOf)
        },
        1352: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = n(9606),
                s = n(4088),
                o = n(6198).indexOf,
                a = n(7153),
                l = i([].push);
            e.exports = function(e, t) {
                var n, i = s(e),
                    c = 0,
                    u = [];
                for (n in i) !r(a, n) && r(i, n) && l(u, n);
                for (; t.length > c;) r(i, n = t[c++]) && (~o(u, n) || l(u, n));
                return u
            }
        },
        7446: (e, t) => {
            "use strict";
            var n = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                r = i && !n.call({
                    1: 2
                }, 1);
            t.f = r ? function propertyIsEnumerable(e) {
                var t = i(this, e);
                return !!t && t.enumerable
            } : n
        },
        7530: (e, t, n) => {
            "use strict";
            var i = n(1518),
                r = n(6112),
                s = n(1378);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    (e = i(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
                } catch (e) {}
                return function setPrototypeOf(n, i) {
                    return r(n), s(i), t ? e(n, i) : n.__proto__ = i, n
                }
            }() : void 0)
        },
        7999: (e, t, n) => {
            "use strict";
            var i = n(9413),
                r = n(930),
                s = n(8759),
                o = TypeError;
            e.exports = function(e, t) {
                var n, a;
                if ("string" === t && r(n = e.toString) && !s(a = i(n, e))) return a;
                if (r(n = e.valueOf) && !s(a = i(n, e))) return a;
                if ("string" !== t && r(n = e.toString) && !s(a = i(n, e))) return a;
                throw o("Can't convert object to primitive value")
            }
        },
        6095: (e, t, n) => {
            "use strict";
            var i = n(563),
                r = n(8240),
                s = n(62),
                o = n(6952),
                a = n(6112),
                l = r([].concat);
            e.exports = i("Reflect", "ownKeys") || function ownKeys(e) {
                var t = s.f(a(e)),
                    n = o.f;
                return n ? l(t, n(e)) : t
            }
        },
        1632: (e, t, n) => {
            "use strict";
            var i = n(7826).f;
            e.exports = function(e, t, n) {
                n in e || i(e, n, {
                    configurable: !0,
                    get: function() {
                        return t[n]
                    },
                    set: function(e) {
                        t[n] = e
                    }
                })
            }
        },
        9586: (e, t, n) => {
            "use strict";
            var i = n(1858),
                r = TypeError;
            e.exports = function(e) {
                if (i(e)) throw r("Can't call method on " + e);
                return e
            }
        },
        8944: (e, t, n) => {
            "use strict";
            var i = n(9197),
                r = n(5422),
                s = i("keys");
            e.exports = function(e) {
                return s[e] || (s[e] = r(e))
            }
        },
        4489: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = n(9444),
                s = "__core-js_shared__",
                o = i[s] || r(s, {});
            e.exports = o
        },
        9197: (e, t, n) => {
            "use strict";
            var i = n(3296),
                r = n(4489);
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.32.0",
                mode: i ? "pure" : "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        5558: (e, t, n) => {
            "use strict";
            var i = n(1448),
                r = n(3677),
                s = n(2086).String;
            e.exports = !!Object.getOwnPropertySymbols && !r((function() {
                var e = Symbol();
                return !s(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && i && i < 41
            }))
        },
        7740: (e, t, n) => {
            "use strict";
            var i = n(9502),
                r = Math.max,
                s = Math.min;
            e.exports = function(e, t) {
                var n = i(e);
                return n < 0 ? r(n + t, 0) : s(n, t)
            }
        },
        4088: (e, t, n) => {
            "use strict";
            var i = n(5974),
                r = n(9586);
            e.exports = function(e) {
                return i(r(e))
            }
        },
        9502: (e, t, n) => {
            "use strict";
            var i = n(5681);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : i(t)
            }
        },
        4005: (e, t, n) => {
            "use strict";
            var i = n(9502),
                r = Math.min;
            e.exports = function(e) {
                return e > 0 ? r(i(e), 9007199254740991) : 0
            }
        },
        3060: (e, t, n) => {
            "use strict";
            var i = n(9586),
                r = Object;
            e.exports = function(e) {
                return r(i(e))
            }
        },
        1288: (e, t, n) => {
            "use strict";
            var i = n(9413),
                r = n(8759),
                s = n(2071),
                o = n(2964),
                a = n(7999),
                l = n(211),
                c = TypeError,
                u = l("toPrimitive");
            e.exports = function(e, t) {
                if (!r(e) || s(e)) return e;
                var n, l = o(e, u);
                if (l) {
                    if (void 0 === t && (t = "default"), n = i(l, e, t), !r(n) || s(n)) return n;
                    throw c("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), a(e, t)
            }
        },
        2258: (e, t, n) => {
            "use strict";
            var i = n(1288),
                r = n(2071);
            e.exports = function(e) {
                var t = i(e, "string");
                return r(t) ? t : t + ""
            }
        },
        2371: (e, t, n) => {
            "use strict";
            var i = {};
            i[n(211)("toStringTag")] = "z", e.exports = "[object z]" === String(i)
        },
        4059: (e, t, n) => {
            "use strict";
            var i = n(375),
                r = String;
            e.exports = function(e) {
                if ("Symbol" === i(e)) throw TypeError("Cannot convert a Symbol value to a string");
                return r(e)
            }
        },
        9268: e => {
            "use strict";
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        },
        5422: (e, t, n) => {
            "use strict";
            var i = n(8240),
                r = 0,
                s = Math.random(),
                o = i(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++r + s, 36)
            }
        },
        1876: (e, t, n) => {
            "use strict";
            var i = n(5558);
            e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        8202: (e, t, n) => {
            "use strict";
            var i = n(5283),
                r = n(3677);
            e.exports = i && r((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        640: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = n(930),
                s = i.WeakMap;
            e.exports = r(s) && /native code/.test(String(s))
        },
        211: (e, t, n) => {
            "use strict";
            var i = n(2086),
                r = n(9197),
                s = n(9606),
                o = n(5422),
                a = n(5558),
                l = n(1876),
                c = i.Symbol,
                u = r("wks"),
                d = l ? c.for || c : c && c.withoutSetter || o;
            e.exports = function(e) {
                return s(u, e) || (u[e] = a && s(c, e) ? c[e] : d("Symbol." + e)), u[e]
            }
        },
        1557: (e, t, n) => {
            "use strict";
            var i = n(563),
                r = n(9606),
                s = n(2585),
                o = n(5516),
                a = n(7530),
                l = n(8474),
                c = n(1632),
                u = n(5070),
                d = n(1879),
                h = n(8945),
                g = n(8395),
                p = n(5283),
                f = n(3296);
            e.exports = function(e, t, n, m) {
                var v = "stackTraceLimit",
                    b = m ? 2 : 1,
                    y = e.split("."),
                    S = y[y.length - 1],
                    w = i.apply(null, y);
                if (w) {
                    var E = w.prototype;
                    if (!f && r(E, "cause") && delete E.cause, !n) return w;
                    var T = i("Error"),
                        C = t((function(e, t) {
                            var n = d(m ? t : e, void 0),
                                i = m ? new w(e) : new w;
                            return void 0 !== n && s(i, "message", n), g(i, C, i.stack, 2), this && o(E, this) && u(i, this, C), arguments.length > b && h(i, arguments[b]), i
                        }));
                    if (C.prototype = E, "Error" !== S ? a ? a(C, T) : l(C, T, {
                            name: !0
                        }) : p && v in w && (c(C, w, v), c(C, w, "prepareStackTrace")), l(C, w), !f) try {
                        E.name !== S && s(E, "name", S), E.constructor = C
                    } catch (e) {}
                    return C
                }
            }
        },
        740: (e, t, n) => {
            "use strict";
            var i = n(1695),
                r = n(2086),
                s = n(7258),
                o = n(1557),
                a = "WebAssembly",
                l = r[a],
                c = 7 !== Error("e", {
                    cause: 7
                }).cause,
                exportGlobalErrorCauseWrapper = function(e, t) {
                    var n = {};
                    n[e] = o(e, t, c), i({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: c
                    }, n)
                },
                exportWebAssemblyErrorCauseWrapper = function(e, t) {
                    if (l && l[e]) {
                        var n = {};
                        n[e] = o(a + "." + e, t, c), i({
                            target: a,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, n)
                    }
                };
            exportGlobalErrorCauseWrapper("Error", (function(e) {
                return function Error(t) {
                    return s(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("EvalError", (function(e) {
                return function EvalError(t) {
                    return s(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("RangeError", (function(e) {
                return function RangeError(t) {
                    return s(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("ReferenceError", (function(e) {
                return function ReferenceError(t) {
                    return s(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("SyntaxError", (function(e) {
                return function SyntaxError(t) {
                    return s(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("TypeError", (function(e) {
                return function TypeError(t) {
                    return s(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("URIError", (function(e) {
                return function URIError(t) {
                    return s(e, this, arguments)
                }
            })), exportWebAssemblyErrorCauseWrapper("CompileError", (function(e) {
                return function CompileError(t) {
                    return s(e, this, arguments)
                }
            })), exportWebAssemblyErrorCauseWrapper("LinkError", (function(e) {
                return function LinkError(t) {
                    return s(e, this, arguments)
                }
            })), exportWebAssemblyErrorCauseWrapper("RuntimeError", (function(e) {
                return function RuntimeError(t) {
                    return s(e, this, arguments)
                }
            }))
        },
        3203: e => {
            e.exports = function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    },
    e => {
        var t;
        t = 6412, e(e.s = t)
    }
]);
! function() {
    "use strict";

    function Waypoint(options) {
        if (!options) throw new Error("No options passed to Waypoint constructor");
        if (!options.element) throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
    }
    var keyCounter = 0,
        allWaypoints = {};
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }, Waypoint.prototype.trigger = function(args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }, Waypoint.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
    }, Waypoint.prototype.disable = function() {
        return this.enabled = !1, this
    }, Waypoint.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, Waypoint.prototype.next = function() {
        return this.group.next(this)
    }, Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }, Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
    }, Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }, Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }, Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
        return this
    }, Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }, Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, Waypoint.adapters = [], Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = Waypoint
}(),
function() {
    "use strict";

    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }

    function Context(element) {
        this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var keyCounter = 0,
        contexts = {},
        Waypoint = window.Waypoint,
        oldWindowLoad = window.onload;
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
    }, Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
            isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
    }, Context.prototype.createThrottledResizeHandler = function() {
        function resizeHandler() {
            self.handleResize(), self.didResize = !1
        }
        var self = this;
        this.adapter.on("resize.waypoints", function() {
            self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
        })
    }, Context.prototype.createThrottledScrollHandler = function() {
        function scrollHandler() {
            self.handleScroll(), self.didScroll = !1
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function() {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
        })
    }, Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }, Context.prototype.handleScroll = function() {
        var triggeredGroups = {},
            axes = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var axisKey in axes) {
            var axis = axes[axisKey],
                isForward = axis.newScroll > axis.oldScroll,
                direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
                        nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                        crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                        crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }, Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }, Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
    }, Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }, Context.prototype.destroy = function() {
        var allWaypoints = [];
        for (var axis in this.waypoints)
            for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
    }, Context.prototype.refresh = function() {
        var axes, isWindow = this.element == this.element.window,
            contextOffset = isWindow ? void 0 : this.adapter.offset(),
            triggeredGroups = {};
        this.handleScroll(), axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey],
                    adjustment = waypoint.options.offset,
                    oldTriggerPoint = waypoint.triggerPoint,
                    elementOffset = 0,
                    freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
        }), this
    }, Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }, Context.refreshAll = function() {
        for (var contextId in contexts) contexts[contextId].refresh()
    }, Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }, window.onload = function() {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll()
    }, Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }, Waypoint.Context = Context
}(),
function() {
    "use strict";

    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function Group(options) {
        this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
    }
    var groups = {
            vertical: {},
            horizontal: {}
        },
        Waypoint = window.Waypoint;
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }, Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction],
                reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }, Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
            isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }, Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }, Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }, Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }, Group.prototype.first = function() {
        return this.waypoints[0]
    }, Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }, Waypoint.Group = Group
}(),
function() {
    "use strict";

    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    var $ = window.jQuery,
        Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }), $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
        JQueryAdapter[method] = $[method]
    }), Waypoint.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }), Waypoint.Adapter = JQueryAdapter
}(),
function() {
    "use strict";

    function createExtension(framework) {
        return function() {
            var waypoints = [],
                overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                });
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
            }), waypoints
        }
    }
    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
/*! jQuery UI - v1.13.2 - 2022-07-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;

    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }

    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }

    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {}, x.ui.version = "1.13.2",
        /*!
         * jQuery UI :data 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr.pseudos, {
            data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
                return function(t) {
                    return !!x.data(t, e)
                }
            }) : function(t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
         * jQuery UI Disable Selection 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        }),
        /*!
         * jQuery UI Focusable 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.focusable = function(t, e) {
            var i, n, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (o = (i = t.parentNode).name, !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e, n && x(t).is(":visible") && function(t) {
                var e = t.css("visibility");
                for (;
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "visible" === e
            }(x(t)))
        }, x.extend(x.expr.pseudos, {
            focusable: function(t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"))
            }
        }), x.fn._form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
        },
        /*!
         * jQuery UI Form Reset Mixin 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = x(this);
                setTimeout(function() {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                var t;
                this.form = this.element._form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
            },
            _unbindFormResetHandler: function() {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        }, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
         * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         */
        x.expr.pseudos || (x.expr.pseudos = x.expr[":"]), x.uniqueSort || (x.uniqueSort = x.unique), x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, i = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, x.escapeSelector = function(t) {
            return (t + "").replace(e, i)
        }), x.fn.even && x.fn.odd || x.fn.extend({
            even: function() {
                return this.filter(function(t) {
                    return t % 2 == 0
                })
            },
            odd: function() {
                return this.filter(function(t) {
                    return t % 2 == 1
                })
            }
        }),
        /*!
         * jQuery UI Keycode 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
         * jQuery UI Labels 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.labels = function() {
            var t, e, i;
            return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + x.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e)) : this.pushStack([])
        }, x.ui.plugin = {
            add: function(t, e, i) {
                var n, o = x.ui[t].prototype;
                for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        },
        /*!
         * jQuery UI Position 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/position/
         */
        W = Math.max, C = Math.abs, o = /left|center|right/, s = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, h = x.fn.position, x.position = {
            scrollbarWidth: function() {
                var t, e, i;
                return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0], x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i)
            },
            getScrollInfo: function(t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                    height: e ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var e = x(t || window),
                    i = N(e[0]),
                    n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? x(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        }, x.fn.position = function(f) {
            var c, d, p, g, m, v, y, w, b, _, t, e;
            return f && f.of ? (v = "string" == typeof(f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of), y = x.position.getWithinInfo(f.within), w = x.position.getScrollInfo(y), b = (f.collision || "flip").split(" "), _ = {}, e = 9 === (e = (t = v)[0]).nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : N(e) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : e.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: e.pageY,
                    left: e.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }, v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, m = x.extend({}, g = e.offset), x.each(["my", "at"], function() {
                var t, e, i = (f[this] || "").split(" ");
                (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center", i[1] = s.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
            }), 1 === b.length && (b[1] = b[0]), "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2), "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2), c = E(_.at, d, p), m.left += c[0], m.top += c[1], this.each(function() {
                var i, t, r = x(this),
                    l = r.outerWidth(),
                    a = r.outerHeight(),
                    e = L(this, "marginLeft"),
                    n = L(this, "marginTop"),
                    o = l + e + L(this, "marginRight") + w.width,
                    s = a + n + L(this, "marginBottom") + w.height,
                    h = x.extend({}, m),
                    u = E(_.my, r.outerWidth(), r.outerHeight());
                "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2), "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2), h.left += u[0], h.top += u[1], i = {
                    marginLeft: e,
                    marginTop: n
                }, x.each(["left", "top"], function(t, e) {
                    x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: l,
                        elemHeight: a,
                        collisionPosition: i,
                        collisionWidth: o,
                        collisionHeight: s,
                        offset: [c[0] + u[0], c[1] + u[1]],
                        my: f.my,
                        at: f.at,
                        within: y,
                        elem: r
                    })
                }), f.using && (t = function(t) {
                    var e = g.left - h.left,
                        i = e + d - l,
                        n = g.top - h.top,
                        o = n + p - a,
                        s = {
                            target: {
                                element: v,
                                left: g.left,
                                top: g.top,
                                width: d,
                                height: p
                            },
                            element: {
                                element: r,
                                left: h.left,
                                top: h.top,
                                width: l,
                                height: a
                            },
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                        };
                    d < l && C(e + i) < d && (s.horizontal = "center"), p < a && C(n + o) < p && (s.vertical = "middle"), W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical", f.using.call(this, t, s)
                }), r.offset(x.extend(h, {
                    using: t
                }))
            })) : h.apply(this, arguments)
        }, x.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, n = e.within,
                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                        n = n.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = o - s,
                        l = s + e.collisionWidth - n - o;
                    e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
                },
                top: function(t, e) {
                    var i, n = e.within,
                        n = n.isWindow ? n.scrollTop : n.offset.top,
                        o = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        r = n - s,
                        l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.offset.left + i.scrollLeft,
                        o = i.width,
                        i = i.isWindow ? i.scrollLeft : i.offset.left,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = s - i,
                        s = s + e.collisionWidth - o - i,
                        l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        h = -2 * e.offset[0];
                    r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.offset.top + i.scrollTop,
                        o = i.height,
                        i = i.isWindow ? i.scrollTop : i.offset.top,
                        s = t.top - e.collisionPosition.marginTop,
                        r = s - i,
                        s = s + e.collisionHeight - o - i,
                        l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        h = -2 * e.offset[1];
                    r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
                }
            },
            flipfit: {
                left: function() {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, x.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i = (i = i || e.body).nodeName ? i : e.body
        }, x.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
        },
        /*!
         * jQuery UI Scroll Parent 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        },
        /*!
         * jQuery UI Tabbable 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr.pseudos, {
            tabbable: function(t) {
                var e = x.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
         * jQuery UI Unique ID 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            uniqueId: (u = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++u)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
     * jQuery UI Widget 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var f, c = 0,
        d = Array.prototype.hasOwnProperty,
        p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)(e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }), x.widget = function(t, i, e) {
        var n, o, s, r = {},
            l = t.split(".")[0],
            a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr.pseudos[a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }, x[l] = x[l] || {}, n = x[l][t], o = x[l][t] = function(t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (s = new i).options = x.widget.extend({}, s.options), x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }

            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            r[e] = "function" != typeof n ? n : function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            }
        }), o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), x.widget.bridge(t, o), o
    }, x.widget.extend = function(t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o]) i = n[o][e], d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }, x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i,
                n = p.call(arguments, 1),
                o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e, !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this))
            })), o
        }
    }, x.Widget = function() {}, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                }
            return this._setOptions(s), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = [],
                r = this;

            function t(t, e) {
                for (var i, n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || x(), i = o.add ? (function() {
                    var i = [];
                    o.element.each(function(t, e) {
                        x.map(r.classesElementLookup, function(t) {
                            return t
                        }).some(function(t) {
                            return t.is(e)
                        }) || i.push(e)
                    }), r._on(x(i), {
                        remove: "_untrackClassesElement"
                    })
                }(), x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()), r.classesElementLookup[t[n]] = i, s.push(t[n]), e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }), this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t,
                e = {
                    extra: o ? e : i,
                    keys: o ? t : e,
                    element: o ? this.element : t,
                    add: n = "boolean" == typeof n ? n : i
                };
            return e.element.toggleClass(this._classes(e), n), this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s, s = o, o = !1), t ? (s = r = x(s), this.bindings = this.bindings.add(s)) : (t = s, s = this.element, r = this.widget()), x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/),
                    n = t[1] + l.eventNamespace,
                    t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent)
                for (n in o) n in e || (e[n] = o[n]);
            return this.element.trigger(e, i), !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof(t = t || {}) ? t = {
                duration: t
            }: !0 === t && (t = {}), n = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](), i && i.call(e[0]), t()
            })
        }
    })
});
/*! elementor - v3.20.0 - 26-03-2024 */
"use strict";
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
    [819], {
        9220: (e, t, n) => {
            var o = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n(8135));
            class _default extends elementorModules.ViewModule {
                constructor() {
                    super(...arguments), this.documents = {}, this.initDocumentClasses(), this.attachDocumentsClasses()
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            document: ".elementor"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $documents: jQuery(e.document)
                    }
                }
                initDocumentClasses() {
                    this.documentClasses = {
                        base: i.default
                    }, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
                }
                addDocumentClass(e, t) {
                    this.documentClasses[e] = t
                }
                attachDocumentsClasses() {
                    this.elements.$documents.each(((e, t) => this.attachDocumentClass(jQuery(t))))
                }
                attachDocumentClass(e) {
                    const t = e.data(),
                        n = t.elementorId,
                        o = t.elementorType,
                        i = this.documentClasses[o] || this.documentClasses.base;
                    this.documents[n] = new i({
                        $element: e,
                        id: n
                    })
                }
            }
            t.default = _default
        },
        9804: (e, t, n) => {
            var o = n(3203),
                i = o(n(6397)),
                s = o(n(8704)),
                r = o(n(4985)),
                a = o(n(7537)),
                l = o(n(355)),
                d = o(n(2804)),
                c = o(n(3384));
            e.exports = function(e) {
                var t = this;
                const o = {};
                this.elementsHandlers = {
                    "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
                    "alert.default": () => n.e(745).then(n.bind(n, 9269)),
                    "counter.default": () => n.e(120).then(n.bind(n, 7884)),
                    "progress.default": () => n.e(192).then(n.bind(n, 1351)),
                    "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
                    "toggle.default": () => n.e(181).then(n.bind(n, 2)),
                    "video.default": () => n.e(791).then(n.bind(n, 5363)),
                    "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
                    "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
                    "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602))
                }, elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-tabs.default"] = () => Promise.resolve().then(n.bind(n, 7323))), elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-accordion.default"] = () => Promise.resolve().then(n.bind(n, 32)));
                const addElementsHandlers = () => {
                        this.elementsHandlers.section = [d.default, ...s.default, l.default, c.default], this.elementsHandlers.container = [...s.default], elementorFrontend.isEditMode() && this.elementsHandlers.container.push(...r.default), this.elementsHandlers.column = a.default, e.each(this.elementsHandlers, ((e, t) => {
                            const n = e.split(".");
                            e = n[0];
                            const o = n[1] || null;
                            this.attachHandler(e, t, o)
                        }))
                    },
                    isClassHandler = e => e.prototype ? .getUniqueHandlerID;
                this.addHandler = function(t, n) {
                    const i = n.$element.data("model-cid");
                    let s;
                    if (i) {
                        s = t.prototype.getConstructorID(), o[i] || (o[i] = {});
                        const e = o[i][s];
                        e && e.onDestroy()
                    }
                    const r = new t(n);
                    elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`, n.$element, e), i && (o[i][s] = r)
                }, this.attachHandler = (e, n, o) => {
                    Array.isArray(n) || (n = [n]), n.forEach((n => function(e, n) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                        o = o ? "." + o : "";
                        const i = e + o;
                        elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`, (e => {
                            if (isClassHandler(n)) t.addHandler(n, {
                                $element: e,
                                elementName: i
                            }, !0);
                            else {
                                const o = n();
                                if (!o) return;
                                o instanceof Promise ? o.then((n => {
                                    let {
                                        default: o
                                    } = n;
                                    t.addHandler(o, {
                                        $element: e,
                                        elementName: i
                                    }, !0)
                                })) : t.addHandler(o, {
                                    $element: e,
                                    elementName: i
                                }, !0)
                            }
                        }))
                    }(e, n, o)))
                }, this.getHandler = function(e) {
                    const t = this.elementsHandlers[e];
                    return isClassHandler(t) ? t : new Promise((e => {
                        t().then((t => {
                            let {
                                default: n
                            } = t;
                            e(n)
                        }))
                    }))
                }, this.getHandlers = function(e) {
                    return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"), e ? this.getHandler(e) : this.elementsHandlers
                }, this.runReadyTrigger = function(t) {
                    if (elementorFrontend.config.is_static) return;
                    const n = jQuery(t),
                        o = n.attr("data-element_type");
                    if (o && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e), elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`, n, e), "widget" === o)) {
                        const t = n.attr("data-widget_type");
                        elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                    }
                }, this.init = () => {
                    elementorFrontend.hooks.addAction("frontend/element_ready/global", i.default), addElementsHandlers()
                }
            }
        },
        5654: (e, t, n) => {
            var o = n(3203);
            n(59);
            var i = o(n(9220)),
                s = o(n(5107)),
                r = o(n(3308)),
                a = o(n(1604)),
                l = o(n(1911)),
                d = o(n(4773)),
                c = o(n(2064)),
                u = o(n(8628)),
                h = o(n(8646)),
                m = o(n(6866)),
                g = o(n(4375)),
                p = o(n(6404)),
                f = o(n(6046)),
                v = o(n(1322)),
                b = n(6028);
            const _ = n(9469),
                y = n(9804),
                w = n(3346);
            class Frontend extends elementorModules.ViewModule {
                constructor() {
                    super(...arguments), this.config = elementorFrontendConfig, this.config.legacyMode = {
                        get elementWrappers() {
                            return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0"), !1
                        }
                    }, this.populateActiveBreakpointsConfig()
                }
                get Module() {
                    return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"), elementorModules.frontend.handlers.Base
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            elementor: ".elementor",
                            adminBar: "#wpadminbar"
                        }
                    }
                }
                getDefaultElements() {
                    const e = {
                        window,
                        $window: jQuery(window),
                        $document: jQuery(document),
                        $head: jQuery(document.head),
                        $body: jQuery(document.body),
                        $deviceMode: jQuery("<span>", {
                            id: "elementor-device-mode",
                            class: "elementor-screen-only"
                        })
                    };
                    return e.$body.append(e.$deviceMode), e
                }
                bindEvents() {
                    this.elements.$window.on("resize", (() => this.setDeviceModeData()))
                }
                getElements(e) {
                    return this.getItems(this.elements, e)
                }
                getPageSettings(e) {
                    const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                    return this.getItems(t, e)
                }
                getGeneralSettings(e) {
                    return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()", "3.0.0", "getKitSettings() and remove the `elementor_` prefix"), this.getKitSettings(`elementor_${e}`)
                }
                getKitSettings(e) {
                    return this.getItems(this.config.kit, e)
                }
                getCurrentDeviceMode() {
                    return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
                }
                getDeviceSetting(e, t, n) {
                    if ("widescreen" === e) return this.getWidescreenSetting(t, n);
                    const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
                        largeToSmall: !0,
                        withDesktop: !0
                    });
                    let i = o.indexOf(e);
                    for (; i > 0;) {
                        const e = t[n + "_" + o[i]];
                        if (e || 0 === e) return e;
                        i--
                    }
                    return t[n]
                }
                getWidescreenSetting(e, t) {
                    const n = t + "_widescreen";
                    let o;
                    return o = e[n] ? e[n] : e[t], o
                }
                getCurrentDeviceSetting(e, t) {
                    return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
                }
                isEditMode() {
                    return this.config.environmentMode.edit
                }
                isWPPreviewMode() {
                    return this.config.environmentMode.wpPreview
                }
                initDialogsManager() {
                    let e;
                    this.getDialogsManager = () => (e || (e = new DialogsManager.Instance), e)
                }
                initOnReadyComponents() {
                    this.utils = {
                        youtube: new a.default,
                        vimeo: new l.default,
                        baseVideoLoader: new d.default,
                        anchors: new w,
                        get lightbox() {
                            return h.default.getLightbox()
                        },
                        urlActions: new c.default,
                        swiper: u.default,
                        environment: r.default,
                        assetsLoader: new m.default,
                        escapeHTML: b.escapeHTML,
                        events: p.default,
                        controls: new v.default
                    }, this.modules = {
                        StretchElement: elementorModules.frontend.tools.StretchElement,
                        Masonry: elementorModules.utils.Masonry
                    }, this.elementsHandler.init(), this.isEditMode() ? elementor.once("document:loaded", (() => this.onDocumentLoaded())) : this.onDocumentLoaded()
                }
                initOnReadyElements() {
                    this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
                }
                addUserAgentClasses() {
                    for (const [e, t] of Object.entries(r.default)) t && this.elements.$body.addClass("e--ua-" + e)
                }
                setDeviceModeData() {
                    this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
                }
                addListenerOnce(e, t, n, o) {
                    if (o || (o = this.elements.$window), this.isEditMode())
                        if (this.removeListeners(e, t, o), o instanceof jQuery) {
                            const i = t + "." + e;
                            o.on(i, n)
                        } else o.on(t, n, e);
                    else o.on(t, n)
                }
                removeListeners(e, t, n, o) {
                    if (o || (o = this.elements.$window), o instanceof jQuery) {
                        const i = t + "." + e;
                        o.off(i, n)
                    } else o.off(t, n, e)
                }
                debounce(e, t) {
                    let n;
                    return function() {
                        const o = this,
                            i = arguments,
                            s = !n;
                        clearTimeout(n), n = setTimeout((() => {
                            n = null, e.apply(o, i)
                        }), t), s && e.apply(o, i)
                    }
                }
                waypoint(e, t, n) {
                    n = jQuery.extend({
                        offset: "100%",
                        triggerOnce: !0
                    }, n);
                    return e.elementorWaypoint((function() {
                        const e = this.element || this,
                            o = t.apply(e, arguments);
                        return n.triggerOnce && this.destroy && this.destroy(), o
                    }), n)
                }
                muteMigrationTraces() {
                    jQuery.migrateMute = !0, jQuery.migrateTrace = !1
                }
                initModules() {
                    const e = {
                        shapes: f.default
                    };
                    elementorFrontend.trigger("elementor/modules/init:before"), elementorFrontend.trigger("elementor/modules/init/before"), Object.entries(e).forEach((e => {
                        let [t, n] = e;
                        this.modulesHandlers[t] = new n
                    }))
                }
                populateActiveBreakpointsConfig() {
                    this.config.responsive.activeBreakpoints = {}, Object.entries(this.config.responsive.breakpoints).forEach((e => {
                        let [t, n] = e;
                        n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                    }))
                }
                init() {
                    this.hooks = new _, this.breakpoints = new g.default(this.config.responsive), this.storage = new s.default, this.elementsHandler = new y(jQuery), this.modulesHandlers = {}, this.addUserAgentClasses(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), p.default.dispatch(this.elements.$window, "elementor/frontend/init"), this.initModules(), this.initOnReadyElements(), this.initOnReadyComponents()
                }
                onDocumentLoaded() {
                    this.documentsManager = new i.default, this.trigger("components:init"), new h.default
                }
            }
            window.elementorFrontend = new Frontend, elementorFrontend.isEditMode() || jQuery((() => elementorFrontend.init()))
        },
        4058: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
                getDefaultSettings() {
                    return {
                        classes: {
                            swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
                            swiperWrapper: "swiper-wrapper",
                            swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                            swiperPreloader: "swiper-lazy-preloader",
                            slideBackground: "elementor-background-slideshow__slide__image",
                            kenBurns: "elementor-ken-burns",
                            kenBurnsActive: "elementor-ken-burns--active",
                            kenBurnsIn: "elementor-ken-burns--in",
                            kenBurnsOut: "elementor-ken-burns--out"
                        }
                    }
                }
                getSwiperOptions() {
                    const e = this.getElementSettings(),
                        t = {
                            grabCursor: !1,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            loop: "yes" === e.background_slideshow_loop,
                            speed: e.background_slideshow_transition_duration,
                            autoplay: {
                                delay: e.background_slideshow_slide_duration,
                                stopOnLastSlide: !e.background_slideshow_loop
                            },
                            handleElementorBreakpoints: !0,
                            on: {
                                slideChange: () => {
                                    e.background_slideshow_ken_burns && this.handleKenBurns()
                                }
                            }
                        };
                    switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()), e.background_slideshow_slide_transition) {
                        case "fade":
                            t.effect = "fade", t.fadeEffect = {
                                crossFade: !0
                            };
                            break;
                        case "slide_down":
                            t.autoplay.reverseDirection = !0, t.direction = "vertical";
                            break;
                        case "slide_up":
                            t.direction = "vertical"
                    }
                    return "yes" === e.background_slideshow_lazyload && (t.lazy = {
                        loadPrevNext: !0,
                        loadPrevNextAmount: 1
                    }), t
                }
                buildSwiperElements() {
                    const e = this.getSettings("classes"),
                        t = this.getElementSettings(),
                        n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl",
                        o = jQuery("<div>", {
                            class: e.swiperContainer,
                            dir: n
                        }),
                        i = jQuery("<div>", {
                            class: e.swiperWrapper
                        }),
                        s = t.background_slideshow_ken_burns,
                        r = "yes" === t.background_slideshow_lazyload;
                    let a = e.slideBackground;
                    if (s) {
                        a += " " + e.kenBurns;
                        const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                        a += " " + e[n]
                    }
                    r && (a += " swiper-lazy"), this.elements.$slides = jQuery(), t.background_slideshow_gallery.forEach((t => {
                        const n = jQuery("<div>", {
                            class: e.swiperSlide
                        });
                        let o;
                        if (r) {
                            const n = jQuery("<div>", {
                                class: e.swiperPreloader
                            });
                            o = jQuery("<div>", {
                                class: a,
                                "data-background": t.url
                            }), o.append(n)
                        } else o = jQuery("<div>", {
                            class: a,
                            style: 'background-image: url("' + t.url + '");'
                        });
                        n.append(o), i.append(n), this.elements.$slides = this.elements.$slides.add(n)
                    })), o.append(i), this.$element.prepend(o), this.elements.$backgroundSlideShowContainer = o
                }
                async initSlider() {
                    if (1 >= this.getSlidesCount()) return;
                    const e = this.getElementSettings(),
                        t = elementorFrontend.utils.swiper;
                    this.swiper = await new t(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()), this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper), e.background_slideshow_ken_burns && this.handleKenBurns()
                }
                activate() {
                    this.buildSwiperElements(), this.initSlider()
                }
                deactivate() {
                    this.swiper && (this.swiper.destroy(), this.elements.$backgroundSlideShowContainer.remove())
                }
                run() {
                    "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
                }
                onInit() {
                    super.onInit(), this.getElementSettings("background_slideshow_gallery") && this.run()
                }
                onDestroy() {
                    super.onDestroy(), this.deactivate()
                }
                onElementChange(e) {
                    "background_background" === e && this.run()
                }
            }
            t.default = BackgroundSlideshow
        },
        9501: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class BackgroundVideo extends elementorModules.frontend.handlers.Base {
                getDefaultSettings() {
                    return {
                        selectors: {
                            backgroundVideoContainer: ".elementor-background-video-container",
                            backgroundVideoEmbed: ".elementor-background-video-embed",
                            backgroundVideoHosted: ".elementor-background-video-hosted"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors"),
                        t = {
                            $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                        };
                    return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed), t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted), t
                }
                calcVideosSize(e) {
                    let t = "16:9";
                    "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                    const n = this.elements.$backgroundVideoContainer.outerWidth(),
                        o = this.elements.$backgroundVideoContainer.outerHeight(),
                        i = t.split(":"),
                        s = i[0] / i[1],
                        r = n / o > s;
                    return {
                        width: r ? n : o * s,
                        height: r ? n / s : o
                    }
                }
                changeVideoSize() {
                    if ("hosted" !== this.videoType && !this.player) return;
                    let e;
                    if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted), !e) return;
                    const t = this.calcVideosSize(e);
                    e.width(t.width).height(t.height)
                }
                startVideoLoop(e) {
                    if (!this.player.getIframe().contentWindow) return;
                    const t = this.getElementSettings(),
                        n = t.background_video_start || 0,
                        o = t.background_video_end;
                    if (!t.background_play_once || e) {
                        if (this.player.seekTo(n), o) {
                            setTimeout((() => {
                                this.startVideoLoop(!1)
                            }), 1e3 * (o - n + 1))
                        }
                    } else this.player.stopVideo()
                }
                prepareVimeoVideo(e, t) {
                    const n = this.getElementSettings(),
                        o = {
                            url: t,
                            width: this.elements.$backgroundVideoContainer.outerWidth().width,
                            autoplay: !0,
                            loop: !n.background_play_once,
                            transparent: !0,
                            background: !0,
                            muted: !0
                        };
                    n.background_privacy_mode && (o.dnt = !0), this.player = new e.Player(this.elements.$backgroundVideoContainer, o), this.handleVimeoStartEndTimes(n), this.player.ready().then((() => {
                        jQuery(this.player.element).addClass("elementor-background-video-embed"), this.changeVideoSize()
                    }))
                }
                handleVimeoStartEndTimes(e) {
                    e.background_video_start && this.player.on("play", (t => {
                        0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                    })), this.player.on("timeupdate", (t => {
                        e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)), this.player.getDuration().then((n => {
                            e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                        }))
                    }))
                }
                prepareYTVideo(e, t) {
                    const n = this.elements.$backgroundVideoContainer,
                        o = this.getElementSettings();
                    let i = e.PlayerState.PLAYING;
                    window.chrome && (i = e.PlayerState.UNSTARTED);
                    const s = {
                        videoId: t,
                        events: {
                            onReady: () => {
                                this.player.mute(), this.changeVideoSize(), this.startVideoLoop(!0), this.player.playVideo()
                            },
                            onStateChange: t => {
                                switch (t.data) {
                                    case i:
                                        n.removeClass("elementor-invisible elementor-loading");
                                        break;
                                    case e.PlayerState.ENDED:
                                        "function" == typeof this.player.seekTo && this.player.seekTo(o.background_video_start || 0), o.background_play_once && this.player.destroy()
                                }
                            }
                        },
                        playerVars: {
                            controls: 0,
                            rel: 0,
                            playsinline: 1
                        }
                    };
                    o.background_privacy_mode && (s.host = "https://www.youtube-nocookie.com", s.origin = window.location.hostname), n.addClass("elementor-loading elementor-invisible"), this.player = new e.Player(this.elements.$backgroundVideoEmbed[0], s)
                }
                activate() {
                    let e, t = this.getElementSettings("background_video_link");
                    const n = this.getElementSettings("background_play_once");
                    if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo", this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube", this.apiProvider = elementorFrontend.utils.youtube), this.apiProvider) e = this.apiProvider.getVideoIDFromURL(t), this.apiProvider.onApiReady((n => {
                        "youtube" === this.videoType && this.prepareYTVideo(n, e), "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                    }));
                    else {
                        this.videoType = "hosted";
                        const e = this.getElementSettings("background_video_start"),
                            o = this.getElementSettings("background_video_end");
                        (e || o) && (t += "#t=" + (e || 0) + (o ? "," + o : "")), this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)), n && this.elements.$backgroundVideoHosted.on("ended", (() => {
                            this.elements.$backgroundVideoHosted.hide()
                        }))
                    }
                    elementorFrontend.elements.$window.on("resize elementor/bg-video/recalc", this.changeVideoSize)
                }
                deactivate() {
                    "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"), elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
                }
                run() {
                    const e = this.getElementSettings();
                    (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
                }
                onInit() {
                    super.onInit(...arguments), this.changeVideoSize = this.changeVideoSize.bind(this), this.run()
                }
                onElementChange(e) {
                    "background_background" === e && this.run()
                }
            }
            t.default = BackgroundVideo
        },
        8704: (e, t, n) => {
            var o = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n(4058)),
                s = o(n(9501)),
                r = [i.default, s.default];
            t.default = r
        },
        7537: (e, t, n) => {
            var o = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = [o(n(4058)).default];
            t.default = i
        },
        4985: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = [() => n.e(413).then(n.bind(n, 2929)), () => n.e(413).then(n.bind(n, 343)), () => n.e(413).then(n.bind(n, 8073))];
            t.default = o
        },
        6397: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class GlobalHandler extends elementorModules.frontend.handlers.Base {
                getWidgetType() {
                    return "global"
                }
                animate() {
                    const e = this.$element,
                        t = this.getAnimation();
                    if ("none" === t) return void e.removeClass("elementor-invisible");
                    const n = this.getElementSettings(),
                        o = n._animation_delay || n.animation_delay || 0;
                    e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout((() => {
                        e.removeClass("elementor-invisible").addClass("animated " + t)
                    }), o)
                }
                getAnimation() {
                    return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
                }
                onInit() {
                    if (super.onInit(...arguments), this.getAnimation()) {
                        const e = elementorModules.utils.Scroll.scrollObserver({
                            callback: t => {
                                t.isInViewport && (this.animate(), e.unobserve(this.$element[0]))
                            }
                        });
                        e.observe(this.$element[0])
                    }
                }
                onElementChange(e) {
                    /^_?animation/.test(e) && this.animate()
                }
            }
            t.default = e => {
                elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                    $element: e
                })
            }
        },
        355: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class HandlesPosition extends elementorModules.frontend.handlers.Base {
                isActive() {
                    return elementorFrontend.isEditMode()
                }
                isFirstSection() {
                    return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
                }
                isOverflowHidden() {
                    return "hidden" === this.$element.css("overflow")
                }
                getOffset() {
                    if ("body" === elementor.config.document.container) return this.$element.offset().top;
                    const e = jQuery(elementor.config.document.container);
                    return this.$element.offset().top - e.offset().top
                }
                setHandlesPosition() {
                    const e = elementor.documents.getCurrent();
                    if (!e || !e.container.isEditable()) return;
                    const t = "elementor-section--handles-inside";
                    if (elementor.settings.page.model.attributes.scroll_snap) return void this.$element.addClass(t);
                    const n = this.isOverflowHidden();
                    if (!n && !this.isFirstSection()) return;
                    const o = n ? 0 : this.getOffset();
                    if (o < 25) {
                        this.$element.addClass(t);
                        const e = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                        o < -5 ? e.css("top", -o) : e.css("top", "")
                    } else this.$element.removeClass(t)
                }
                onInit() {
                    this.isActive() && (this.setHandlesPosition(), this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
                }
            }
            t.default = HandlesPosition
        },
        3384: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class Shapes extends elementorModules.frontend.handlers.Base {
                getDefaultSettings() {
                    return {
                        selectors: {
                            container: "> .elementor-shape-%s"
                        },
                        svgURL: elementorFrontend.config.urls.assets + "shapes/"
                    }
                }
                getDefaultElements() {
                    const e = {},
                        t = this.getSettings("selectors");
                    return e.$topContainer = this.$element.find(t.container.replace("%s", "top")), e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")), e
                }
                isActive() {
                    return elementorFrontend.isEditMode()
                }
                getSvgURL(e, t) {
                    let n = this.getSettings("svgURL") + t + ".svg";
                    return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e], -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))), n
                }
                buildSVG(e) {
                    const t = "shape_divider_" + e,
                        n = this.getElementSettings(t),
                        o = this.elements["$" + e + "Container"];
                    if (o.attr("data-shape", n), !n) return void o.empty();
                    let i = n;
                    this.getElementSettings(t + "_negative") && (i += "-negative");
                    const s = this.getSvgURL(n, i);
                    jQuery.get(s, (e => {
                        o.empty().append(e.childNodes[0])
                    })), this.setNegative(e)
                }
                setNegative(e) {
                    this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
                }
                onInit() {
                    this.isActive(this.getSettings()) && (super.onInit(...arguments), ["top", "bottom"].forEach((e => {
                        this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                    })))
                }
                onElementChange(e) {
                    const t = e.match(/^shape_divider_(top|bottom)$/);
                    if (t) return void this.buildSVG(t[1]);
                    const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                    n && (this.buildSVG(n[1]), this.setNegative(n[1]))
                }
            }
            t.default = Shapes
        },
        2804: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class StretchedSection extends elementorModules.frontend.handlers.StretchedElement {
                getStretchedClass() {
                    return "elementor-section-stretched"
                }
                getStretchSettingName() {
                    return "stretch_section"
                }
                getStretchActiveValue() {
                    return "section-stretched"
                }
            }
            t.default = StretchedSection
        },
        3346: (e, t, n) => {
            var o = n(6028);
            e.exports = elementorModules.ViewModule.extend({
                getDefaultSettings: () => ({
                    scrollDuration: 500,
                    selectors: {
                        links: 'a[href*="#"]',
                        targets: ".elementor-element, .elementor-menu-anchor",
                        scrollable: (0, o.isScrollSnapActive)() ? "body" : "html, body"
                    }
                }),
                getDefaultElements() {
                    return {
                        $scrollable: jQuery(this.getSettings("selectors").scrollable)
                    }
                },
                bindEvents() {
                    elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
                },
                handleAnchorLinks(e) {
                    var t, n = e.currentTarget,
                        i = location.pathname === n.pathname;
                    if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
                        try {
                            t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                        } catch (e) {
                            return
                        }
                        if (t.length) {
                            var s = t.offset().top,
                                r = elementorFrontend.elements.$wpAdminBar,
                                a = jQuery(".elementor-section.elementor-sticky--active:visible");
                            r.length > 0 && (s -= r.height()), a.length > 0 && (s -= Math.max.apply(null, a.map((function() {
                                return jQuery(this).outerHeight()
                            })).get())), e.preventDefault(), s = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", s), (0, o.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"), this.elements.$scrollable.animate({
                                scrollTop: s
                            }, this.getSettings("scrollDuration"), "linear", (() => {
                                (0, o.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                            }))
                        }
                    }
                },
                onInit() {
                    elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
                }
            })
        },
        6866: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class AssetsLoader {
                getScriptElement(e) {
                    const t = document.createElement("script");
                    return t.src = e, t
                }
                getStyleElement(e) {
                    const t = document.createElement("link");
                    return t.rel = "stylesheet", t.href = e, t
                }
                load(e, t) {
                    const n = AssetsLoader.assets[e][t];
                    return n.loader || (n.loader = new Promise((t => {
                        const o = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                        o.onload = () => t(!0);
                        const i = "head" === n.parent ? n.parent : "body";
                        document[i].appendChild(o)
                    }))), n.loader
                }
            }
            t.default = AssetsLoader;
            const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min",
                o = elementorFrontendConfig.experimentalFeatures.e_swiper_latest ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5` : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;
            AssetsLoader.assets = {
                script: {
                    dialog: {
                        src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`
                    },
                    "share-link": {
                        src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`
                    },
                    swiper: {
                        src: o
                    }
                },
                style: {}
            }
        },
        1322: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class Controls {
                getControlValue(e, t, n) {
                    let o;
                    return o = "object" == typeof e[t] && n ? e[t][n] : e[t], o
                }
                getResponsiveControlValue(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    const o = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode(),
                        i = this.getControlValue(e, t, n);
                    if ("widescreen" === o) {
                        const o = this.getControlValue(e, `${t}_widescreen`, n);
                        return o || 0 === o ? o : i
                    }
                    const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
                        withDesktop: !0
                    });
                    let r = o,
                        a = s.indexOf(o),
                        l = "";
                    for (; a <= s.length;) {
                        if ("desktop" === r) {
                            l = i;
                            break
                        }
                        const o = `${t}_${r}`,
                            d = this.getControlValue(e, o, n);
                        if (d || 0 === d) {
                            l = d;
                            break
                        }
                        a++, r = s[a]
                    }
                    return l
                }
            }
        },
        8646: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class LightboxManager extends elementorModules.ViewModule {
                static getLightbox() {
                    const e = new Promise((e => {
                            n.e(723).then(n.t.bind(n, 3896, 23)).then((t => {
                                let {
                                    default: n
                                } = t;
                                return e(new n)
                            }))
                        })),
                        t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
                        o = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                    return Promise.all([e, t, o]).then((() => e))
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            links: "a, [data-elementor-lightbox]"
                        }
                    }
                }
                getDefaultElements() {
                    return {
                        $links: jQuery(this.getSettings("selectors.links"))
                    }
                }
                isLightboxLink(e) {
                    if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo) return !1;
                    const t = elementorFrontend.getKitSettings("global_image_lightbox"),
                        n = e.dataset.elementorOpenLightbox;
                    return "yes" === n || t && "no" !== n
                }
                async onLinkClick(e) {
                    const t = e.currentTarget,
                        n = jQuery(e.target),
                        o = elementorFrontend.isEditMode(),
                        i = o && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),
                        s = !!n.closest(".elementor-edit-area").length;
                    if (!this.isLightboxLink(t)) return void(o && s && e.preventDefault());
                    if (e.preventDefault(), o && !elementor.getPreferences("lightbox_in_editor")) return;
                    if (i) return;
                    (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
                }
                isOptimizedAssetsLoading() {
                    return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
                }
                bindEvents() {
                    elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e => this.onLinkClick(e)))
                }
                onInit() {
                    super.onInit(...arguments), this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e, t) => {
                        if (this.isLightboxLink(t)) return LightboxManager.getLightbox(), !1
                    }))
                }
            }
            t.default = LightboxManager
        },
        8628: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class Swiper {
                constructor(e, t) {
                    return this.config = t, this.config.breakpoints && (this.config = this.adjustConfig(t)), e instanceof jQuery && (e = e[0]), e.closest(".elementor-widget-wrap") ? .classList.add("e-swiper-container"), e.closest(".elementor-widget") ? .classList.add("e-widget-swiper"), new Promise((t => {
                        if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading) return t(this.createSwiperInstance(e, this.config));
                        elementorFrontend.utils.assetsLoader.load("script", "swiper").then((() => t(this.createSwiperInstance(e, this.config))))
                    }))
                }
                createSwiperInstance(e, t) {
                    const n = window.Swiper;
                    return n.prototype.adjustConfig = this.adjustConfig, new n(e, t)
                }
                adjustConfig(e) {
                    if (!e.handleElementorBreakpoints) return e;
                    const t = elementorFrontend.config.responsive.activeBreakpoints,
                        n = elementorFrontend.breakpoints.getBreakpointValues();
                    return Object.keys(e.breakpoints).forEach((o => {
                        const i = parseInt(o);
                        let s;
                        if (i === t.mobile.value || i + 1 === t.mobile.value) s = 0;
                        else if (!t.widescreen || i !== t.widescreen.value && i + 1 !== t.widescreen.value) {
                            const e = n.findIndex((e => i === e || i + 1 === e));
                            s = n[e - 1]
                        } else s = i;
                        e.breakpoints[s] = e.breakpoints[o], e.breakpoints[o] = {
                            slidesPerView: e.slidesPerView,
                            slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                        }
                    })), e
                }
            }
        },
        2064: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n(5719);
            class _default extends elementorModules.ViewModule {
                getDefaultSettings() {
                    return {
                        selectors: {
                            links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                        }
                    }
                }
                bindEvents() {
                    elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
                }
                initActions() {
                    this.actions = {
                        lightbox: async e => {
                            const t = await elementorFrontend.utils.lightbox;
                            e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"), t.showModal(e))
                        }
                    }
                }
                addAction(e, t) {
                    this.actions[e] = t
                }
                runAction(e) {
                    const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                    if (!t) return;
                    const n = this.actions[t[1]];
                    if (!n) return;
                    let o = {};
                    const i = e.match(/settings=(.+)/);
                    i && (o = JSON.parse(atob(i[1])));
                    for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) r[a - 1] = arguments[a];
                    n(o, ...r)
                }
                runLinkAction(e) {
                    e.preventDefault(), this.runAction(jQuery(e.currentTarget).attr("href"), e)
                }
                runHashAction() {
                    if (!location.hash) return;
                    const e = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                    e && this.runAction(e.getAttribute("data-e-action-hash"))
                }
                createActionHash(e, t) {
                    return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
                }
                onInit() {
                    super.onInit(), this.initActions(), elementorFrontend.on("components:init", this.runHashAction.bind(this))
                }
            }
            t.default = _default
        },
        6028: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isScrollSnapActive = t.escapeHTML = void 0;
            t.escapeHTML = e => {
                const t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    '"': "&quot;"
                };
                return e.replace(/[&<>'"]/g, (e => t[e] || e))
            };
            t.isScrollSnapActive = () => "yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes ? .scroll_snap : elementorFrontend.config.settings.page ? .scroll_snap)
        },
        4773: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class BaseLoader extends elementorModules.ViewModule {
                getDefaultSettings() {
                    return {
                        isInserted: !1,
                        selectors: {
                            firstScript: "script:first"
                        }
                    }
                }
                getDefaultElements() {
                    return {
                        $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                    }
                }
                insertAPI() {
                    this.elements.$firstScript.before(jQuery("<script>", {
                        src: this.getApiURL()
                    })), this.setSettings("isInserted", !0)
                }
                getVideoIDFromURL(e) {
                    const t = e.match(this.getURLRegex());
                    return t && t[1]
                }
                onApiReady(e) {
                    this.getSettings("isInserted") || this.insertAPI(), this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((() => {
                        this.onApiReady(e)
                    }), 350)
                }
                getAutoplayURL(e) {
                    return e.replace("&autoplay=0", "") + "&autoplay=1"
                }
            }
            t.default = BaseLoader
        },
        1911: (e, t, n) => {
            var o = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n(4773));
            class VimeoLoader extends i.default {
                getApiURL() {
                    return "https://player.vimeo.com/api/player.js"
                }
                getURLRegex() {
                    return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
                }
                isApiLoaded() {
                    return window.Vimeo
                }
                getApiObject() {
                    return Vimeo
                }
                getAutoplayURL(e) {
                    const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                    return e.replace(t[0], "") + t
                }
            }
            t.default = VimeoLoader
        },
        1604: (e, t, n) => {
            var o = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n(4773));
            class YoutubeLoader extends i.default {
                getApiURL() {
                    return "https://www.youtube.com/iframe_api"
                }
                getURLRegex() {
                    return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
                }
                isApiLoaded() {
                    return window.YT && YT.loaded
                }
                getApiObject() {
                    return YT
                }
            }
            t.default = YoutubeLoader
        },
        59: (e, t, n) => {
            n.p = elementorFrontendConfig.urls.assets + "js/"
        },
        4375: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class Breakpoints extends elementorModules.Module {
                constructor(e) {
                    super(), this.responsiveConfig = e
                }
                getActiveBreakpointsList() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e = {
                        largeToSmall: !1,
                        withDesktop: !1,
                        ...e
                    };
                    const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                    if (e.withDesktop) {
                        const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                        t.splice(e, 0, "desktop")
                    }
                    return e.largeToSmall && t.reverse(), t
                }
                getBreakpointValues() {
                    const {
                        activeBreakpoints: e
                    } = this.responsiveConfig, t = [];
                    return Object.values(e).forEach((e => {
                        t.push(e.value)
                    })), t
                }
                getDesktopPreviousDeviceKey() {
                    let e = "";
                    const {
                        activeBreakpoints: t
                    } = this.responsiveConfig, n = Object.keys(t), o = n.length;
                    return e = "min" === t[n[o - 1]].direction ? n[o - 2] : n[o - 1], e
                }
                getDesktopMinPoint() {
                    const {
                        activeBreakpoints: e
                    } = this.responsiveConfig;
                    return e[this.getDesktopPreviousDeviceKey()].value + 1
                }
                getDeviceMinBreakpoint(e) {
                    if ("desktop" === e) return this.getDesktopMinPoint();
                    const {
                        activeBreakpoints: t
                    } = this.responsiveConfig, n = Object.keys(t);
                    let o;
                    if (n[0] === e) o = 320;
                    else if ("widescreen" === e) o = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                    else {
                        const i = n.indexOf(e);
                        o = t[n[i - 1]].value + 1
                    }
                    return o
                }
                getActiveMatchRegex() {
                    return new RegExp(this.getActiveBreakpointsList().map((e => "_" + e)).join("|") + "$")
                }
            }
            t.default = Breakpoints
        },
        6404: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.Events = void 0;
            class Events {
                static dispatch(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    e = e instanceof jQuery ? e[0] : e, o && e.dispatchEvent(new CustomEvent(o, {
                        detail: n
                    })), e.dispatchEvent(new CustomEvent(t, {
                        detail: n
                    }))
                }
            }
            t.Events = Events;
            var n = Events;
            t.default = n
        },
        9469: e => {
            e.exports = function() {
                var e, t = Array.prototype.slice,
                    n = {
                        actions: {},
                        filters: {}
                    };

                function _removeHook(e, t, o, i) {
                    var s, r, a;
                    if (n[e][t])
                        if (o)
                            if (s = n[e][t], i)
                                for (a = s.length; a--;)(r = s[a]).callback === o && r.context === i && s.splice(a, 1);
                            else
                                for (a = s.length; a--;) s[a].callback === o && s.splice(a, 1);
                    else n[e][t] = []
                }

                function _addHook(e, t, o, i, s) {
                    var r = {
                            callback: o,
                            priority: i,
                            context: s
                        },
                        a = n[e][t];
                    if (a) {
                        var l = !1;
                        if (jQuery.each(a, (function() {
                                if (this.callback === o) return l = !0, !1
                            })), l) return;
                        a.push(r), a = function _hookInsertSort(e) {
                            for (var t, n, o, i = 1, s = e.length; i < s; i++) {
                                for (t = e[i], n = i;
                                    (o = e[n - 1]) && o.priority > t.priority;) e[n] = e[n - 1], --n;
                                e[n] = t
                            }
                            return e
                        }(a)
                    } else a = [r];
                    n[e][t] = a
                }

                function _runHook(e, t, o) {
                    var i, s, r = n[e][t];
                    if (!r) return "filters" === e && o[0];
                    if (s = r.length, "filters" === e)
                        for (i = 0; i < s; i++) o[0] = r[i].callback.apply(r[i].context, o);
                    else
                        for (i = 0; i < s; i++) r[i].callback.apply(r[i].context, o);
                    return "filters" !== e || o[0]
                }
                return e = {
                    removeFilter: function removeFilter(t, n) {
                        return "string" == typeof t && _removeHook("filters", t, n), e
                    },
                    applyFilters: function applyFilters() {
                        var n = t.call(arguments),
                            o = n.shift();
                        return "string" == typeof o ? _runHook("filters", o, n) : e
                    },
                    addFilter: function addFilter(t, n, o, i) {
                        return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, o = parseInt(o || 10, 10), i), e
                    },
                    removeAction: function removeAction(t, n) {
                        return "string" == typeof t && _removeHook("actions", t, n), e
                    },
                    doAction: function doAction() {
                        var n = t.call(arguments),
                            o = n.shift();
                        return "string" == typeof o && _runHook("actions", o, n), e
                    },
                    addAction: function addAction(t, n, o, i) {
                        return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, o = parseInt(o || 10, 10), i), e
                    }
                }, e
            }
        },
        3308: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const matchUserAgent = e => n.indexOf(e) >= 0,
                n = navigator.userAgent,
                o = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/"),
                i = matchUserAgent("Firefox"),
                s = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
                r = /Trident|MSIE/.test(n) && !!document.documentMode,
                a = !r && !!window.StyleMedia || matchUserAgent("Edg"),
                l = !!window.chrome && matchUserAgent("Chrome") && !(a || o),
                d = matchUserAgent("Chrome") && !!window.CSS,
                c = matchUserAgent("AppleWebKit") && !d;
            var u = {
                isTouchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                appleWebkit: c,
                blink: d,
                chrome: l,
                edge: a,
                firefox: i,
                ie: r,
                mac: matchUserAgent("Macintosh"),
                opera: o,
                safari: s,
                webkit: matchUserAgent("AppleWebKit")
            };
            t.default = u
        },
        5107: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class _default extends elementorModules.Module {
                get(e, t) {
                    let n;
                    t = t || {};
                    try {
                        n = t.session ? sessionStorage : localStorage
                    } catch (t) {
                        return e ? void 0 : {}
                    }
                    let o = n.getItem("elementor");
                    o = o ? JSON.parse(o) : {}, o.__expiration || (o.__expiration = {});
                    const i = o.__expiration;
                    let s = [];
                    e ? i[e] && (s = [e]) : s = Object.keys(i);
                    let r = !1;
                    return s.forEach((e => {
                        new Date(i[e]) < new Date && (delete o[e], delete i[e], r = !0)
                    })), r && this.save(o, t.session), e ? o[e] : o
                }
                set(e, t, n) {
                    n = n || {};
                    const o = this.get(null, n);
                    if (o[e] = t, n.lifetimeInSeconds) {
                        const t = new Date;
                        t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds), o.__expiration[e] = t.getTime()
                    }
                    this.save(o, n.session)
                }
                save(e, t) {
                    let n;
                    try {
                        n = t ? sessionStorage : localStorage
                    } catch (e) {
                        return
                    }
                    n.setItem("elementor", JSON.stringify(e))
                }
            }
            t.default = _default
        },
        6046: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class _default extends elementorModules.Module {
                constructor() {
                    super(), elementorFrontend.elementsHandler.attachHandler("text-path", (() => n.e(48).then(n.bind(n, 6468))))
                }
            }
            t.default = _default
        },
        1855: (e, t, n) => {
            var o = n(5516),
                i = TypeError;
            e.exports = function(e, t) {
                if (o(t, e)) return e;
                throw i("Incorrect invocation")
            }
        },
        3621: e => {
            e.exports = {
                IndexSizeError: {
                    s: "INDEX_SIZE_ERR",
                    c: 1,
                    m: 1
                },
                DOMStringSizeError: {
                    s: "DOMSTRING_SIZE_ERR",
                    c: 2,
                    m: 0
                },
                HierarchyRequestError: {
                    s: "HIERARCHY_REQUEST_ERR",
                    c: 3,
                    m: 1
                },
                WrongDocumentError: {
                    s: "WRONG_DOCUMENT_ERR",
                    c: 4,
                    m: 1
                },
                InvalidCharacterError: {
                    s: "INVALID_CHARACTER_ERR",
                    c: 5,
                    m: 1
                },
                NoDataAllowedError: {
                    s: "NO_DATA_ALLOWED_ERR",
                    c: 6,
                    m: 0
                },
                NoModificationAllowedError: {
                    s: "NO_MODIFICATION_ALLOWED_ERR",
                    c: 7,
                    m: 1
                },
                NotFoundError: {
                    s: "NOT_FOUND_ERR",
                    c: 8,
                    m: 1
                },
                NotSupportedError: {
                    s: "NOT_SUPPORTED_ERR",
                    c: 9,
                    m: 1
                },
                InUseAttributeError: {
                    s: "INUSE_ATTRIBUTE_ERR",
                    c: 10,
                    m: 1
                },
                InvalidStateError: {
                    s: "INVALID_STATE_ERR",
                    c: 11,
                    m: 1
                },
                SyntaxError: {
                    s: "SYNTAX_ERR",
                    c: 12,
                    m: 1
                },
                InvalidModificationError: {
                    s: "INVALID_MODIFICATION_ERR",
                    c: 13,
                    m: 1
                },
                NamespaceError: {
                    s: "NAMESPACE_ERR",
                    c: 14,
                    m: 1
                },
                InvalidAccessError: {
                    s: "INVALID_ACCESS_ERR",
                    c: 15,
                    m: 1
                },
                ValidationError: {
                    s: "VALIDATION_ERR",
                    c: 16,
                    m: 0
                },
                TypeMismatchError: {
                    s: "TYPE_MISMATCH_ERR",
                    c: 17,
                    m: 1
                },
                SecurityError: {
                    s: "SECURITY_ERR",
                    c: 18,
                    m: 1
                },
                NetworkError: {
                    s: "NETWORK_ERR",
                    c: 19,
                    m: 1
                },
                AbortError: {
                    s: "ABORT_ERR",
                    c: 20,
                    m: 1
                },
                URLMismatchError: {
                    s: "URL_MISMATCH_ERR",
                    c: 21,
                    m: 1
                },
                QuotaExceededError: {
                    s: "QUOTA_EXCEEDED_ERR",
                    c: 22,
                    m: 1
                },
                TimeoutError: {
                    s: "TIMEOUT_ERR",
                    c: 23,
                    m: 1
                },
                InvalidNodeTypeError: {
                    s: "INVALID_NODE_TYPE_ERR",
                    c: 24,
                    m: 1
                },
                DataCloneError: {
                    s: "DATA_CLONE_ERR",
                    c: 25,
                    m: 1
                }
            }
        },
        5719: (e, t, n) => {
            var o = n(1695),
                i = n(2086),
                s = n(563),
                r = n(5736),
                a = n(7826).f,
                l = n(9606),
                d = n(1855),
                c = n(5070),
                u = n(1879),
                h = n(3621),
                m = n(79),
                g = n(5283),
                p = n(3296),
                f = "DOMException",
                v = s("Error"),
                b = s(f),
                _ = function DOMException() {
                    d(this, y);
                    var e = arguments.length,
                        t = u(e < 1 ? void 0 : arguments[0]),
                        n = u(e < 2 ? void 0 : arguments[1], "Error"),
                        o = new b(t, n),
                        i = v(t);
                    return i.name = f, a(o, "stack", r(1, m(i.stack, 1))), c(o, this, _), o
                },
                y = _.prototype = b.prototype,
                w = "stack" in v(f),
                k = "stack" in new b(1, 2),
                S = b && g && Object.getOwnPropertyDescriptor(i, f),
                E = !(!S || S.writable && S.configurable),
                M = w && !E && !k;
            o({
                global: !0,
                constructor: !0,
                forced: p || M
            }, {
                DOMException: M ? _ : b
            });
            var C = s(f),
                A = C.prototype;
            if (A.constructor !== C)
                for (var D in p || a(A, "constructor", r(1, C)), h)
                    if (l(h, D)) {
                        var $ = h[D],
                            R = $.s;
                        l(C, R) || a(C, R, r(6, $.c))
                    }
        }
    },
    e => {
        e.O(0, [354], (() => {
            return t = 5654, e(e.s = t);
            var t
        }));
        e.O()
    }
]);