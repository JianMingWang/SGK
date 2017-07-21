/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!
function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    }: b(a)
} ("undefined" != typeof window ? window: this,
function(a, b) {
    var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function(a, b) {
        return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
        h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d],
        c = e[d],
        g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a: []) : f = a && n.isPlainObject(a) ? a: {},
        g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    },
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray ||
        function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return ! n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(c) {
                return ! 1
            }
            if (!l.ownFirst) for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object": typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript ||
            function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "": (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return - 1
        },
        merge: function(a, b) {
            var c = +b.length,
            d = 0,
            e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f),
            d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
            h = [];
            if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c),
            null != e && h.push(e);
            else for (g in a) e = b(a[g], g, c),
            null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f),
            n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            },
            d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return + new Date
        },
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length" in a && a.length,
        c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function(a, b) {
            return a === b && (l = !0),
            0
        },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function(a, b) {
            for (var c = 0,
            d = a.length; d > c; c++) if (a[c] === b) return c;
            return - 1
        },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch(ea) {
            H = {
                apply: E.length ?
                function(a, b) {
                    G.apply(a, I.call(b))
                }: function(a, b) {
                    var c = a.length,
                    d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
            x = b ? b.nodeType: 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b: v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (! (j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j),
                        d
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j),
                    d
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)),
                    d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)),
                    d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b,
                    s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k: "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)),
                        d
                    } catch(y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|"),
            e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b),
                    g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName: !1
        },
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a: v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            },
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ?
            function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            d.find.CLASS = c.getElementsByClassName &&
            function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            },
            r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return ! 0;
                return ! 1
            },
            B = b ?
            function(a, b) {
                if (a === b) return l = !0,
                0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d: (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }: function(a, b) {
                if (a === b) return l = !0,
                0;
                var c, d = 0,
                e = a.parentNode,
                f = b.parentNode,
                g = [a],
                h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            },
            n) : n
        },
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        },
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(e) {}
            return fa(b, n, null, [a]).length > 0
        },
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        },
        fa.attr = function(a, b) { (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
            f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f: c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value: null
        },
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        },
        fa.uniqueSort = function(a) {
            var b, d = [],
            e = 0,
            f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null,
            a
        },
        e = fa.getText = function(a) {
            var b, c = "",
            d = 0,
            f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        },
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[4] || a[5] || "": c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b: b ? (e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice( - c.length) === c: "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r: 1 === m.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r: 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                        g = f.length;
                        while (g--) d = J(a, f[g]),
                        a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                    c = [],
                    d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                        h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = p ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) ! (e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length: h ? fa.error(a) : z(a, i).slice(0)
        };
        function qa(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = x++;
            return b.first ?
            function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            }: function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return ! 0
                }
            }
        }
        function sa(a) {
            return a.length > 1 ?
            function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function ta(a, b, c) {
            for (var d = 0,
            e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                q = !a || !f && b ? p: ua(p, m, a, h, i),
                r = c ? e || (f ? a: o || d) ? [] : g: q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r),
                e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length,
            g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            },
            h, !0), l = ra(function(a) {
                return J(b, a) > -1
            },
            h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
            else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*": ""
                    })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                }
                m.push(c)
            }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0,
            e = a.length > 0,
            f = function(f, g, h, i, k) {
                var l, o, q, r = 0,
                s = "0",
                t = f && [],
                u = [],
                v = j,
                x = f || e && d.find.TAG("*", k),
                y = w += null == v ? 1 : Math.random() || .1,
                z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y, j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--) f = wa(b[c]),
                f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        },
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
            o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f),
                        e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        },
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width",
        function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value",
        function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K,
        function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }),
        fa
    } (a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = [],
        e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a)
        }
        return d
    },
    v = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a,
        function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b,
        function(a) {
            return 1 === a.nodeType
        }))
    },
    n.fn.extend({
        find: function(a) {
            var b, c = [],
            d = this,
            e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++) if (n.contains(d[b], this)) return ! 0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a: a,
            c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !! z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return ! b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b: d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]), f && f.parentNode) {
                if (f.id !== e[2]) return A.find(a);
                this.length = 1,
                this[0] = f
            }
            return this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
    E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
            d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (n.contains(this, c[b])) return ! 0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: n.merge([], a.childNodes)
        }
    },
    function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({},
        a);
        var b, c, d, e, f = [],
        g = [],
        h = -1,
        i = function() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        },
        j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)),
                function d(b) {
                    n.each(b,
                    function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                } (arguments), c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments,
                function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1),
                    h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return ! f
            },
            lock: function() {
                return e = !0,
                c || j.disable(),
                this
            },
            locked: function() {
                return !! e
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! d
            }
        };
        return j
    },
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b,
                        function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            n.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0,
            c = e.call(arguments),
            d = c.length,
            f = 1 !== d || a && n.isFunction(a.promise) ? d: 0,
            g = 1 === f ? a: n.Deferred(),
            h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            },
            i,
            j,
            k;
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    },
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++:n.ready(!0)
        },
        ready: function(a) { (a === !0 ? --n.readyWait: n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }
    function K() { (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
        else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K),
        a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K),
            a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch(e) {}
            c && c.doScroll && !
            function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch(b) {
                        return a.setTimeout(f, 50)
                    }
                    J(),
                    n.ready()
                }
            } ()
        }
        return I.promise(b)
    },
    n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L,
    l.inlineBlockNeedsLayout = !1,
    n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0],
        c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }),
    function() {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch(b) {
            l.deleteExpando = !1
        }
        a = null
    } ();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null: +c + "" === c ? +c: N.test(c) ? n.parseJSON(c) : c
                } catch(e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
            i = a.nodeType,
            j = i ? n.cache: a,
            k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++:h),
            j[k] || (j[k] = i ? {}: {
                toJSON: n.noop
            }),
            "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
            g = j[k],
            e || (g.data || (g.data = {}), g = g.data),
            void 0 !== d && (g[n.camelCase(b)] = d),
            "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g,
            f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
            g = f ? n.cache: a,
            h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                } (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
            !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
            g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"),
                    n._removeData(a, c)
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this: this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function() {--d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0),
            a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"),
            c && c.empty && (d++, c.empty.add(h));
            return h(),
            e.promise(b)
        }
    }),
    function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0],
            c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
        }
    } ();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function X(a, b, c, d) {
        var e, f = 1,
        g = 20,
        h = d ?
        function() {
            return d.cur()
        }: function() {
            return n.css(a, b, "")
        },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "": "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do f = f || ".5",
            k /= f,
            n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)),
        e
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0,
        i = a.length,
        j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
        return e ? a: j ? b.call(a) : i ? b(a[0], c) : f
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    } !
    function() {
        var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        l.leadingWhitespace = 3 === a.firstChild.nodeType,
        l.tbody = !a.getElementsByTagName("tbody").length,
        l.htmlSerialize = !!a.getElementsByTagName("link").length,
        l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
        c.type = "checkbox",
        c.checked = !0,
        b.appendChild(c),
        l.appendChecked = c.checked,
        a.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
        b.appendChild(a),
        c = d.createElement("input"),
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        a.appendChild(c),
        l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.noCloneEvent = !!a.addEventListener,
        a[n.expando] = 1,
        l.attributes = !a.getAttribute(n.expando)
    } ();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option,
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
    da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0,
        f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) ! b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length,
        p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")),
            j = ($.exec(g) || ["", ""])[1].toLowerCase(),
            m = da[j] || da._default,
            i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
            f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i: i.firstChild,
                f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes),
            i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i),
        l.appendChecked || n.grep(ea(q, "input"), ia),
        r = 0;
        while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g);
        else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null,
        p
    } !
    function() {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b,
        (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    } ();
    var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return ! 0
    }
    function qa() {
        return ! 1
    }
    function ra() {
        try {
            return d.activeElement
        } catch(a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        },
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector),
                c.guid || (c.guid = n.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                },
                k.elem = a),
                b = (b || "").match(G) || [""],
                h = b.length;
                while (h--) f = oa.exec(b[h]) || [],
                o = q = f[1],
                p = (f[2] || "").split(".").sort(),
                o && (j = n.event.special[o] || {},
                o = (e ? j.delegateType: j.bindType) || o, j = n.event.special[o] || {},
                l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                },
                i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {},
                    o = (d ? l.delegateType: l.bindType) || o,
                    m = k[o] || [],
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    i = f = m.length;
                    while (f--) g = m[f],
                    !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
            q = k.call(b, "type") ? b.type: b,
            r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b: new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {},
            f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i),
                    m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j: l.bindType || q,
                g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
                g && g.apply(i, c),
                g = h && i[h],
                g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h],
                    m && (e[h] = null),
                    n.event.triggered = q;
                    try {
                        e[q]()
                    } catch(s) {}
                    n.event.triggered = void 0,
                    m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
            i = e.call(arguments),
            j = (n._data(this, "events") || {})[a.type] || [],
            k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
            h = b.delegateCount,
            i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c],
                e = f.selector + " ",
                void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                })
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
            g = a,
            h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks: la.test(f) ? this.keyHooks: {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--) c = e[b],
            a[c] = g[c];
            return a.target || (a.target = g.srcElement || d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement: h),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
            d.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = d.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }: function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    },
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa: qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    },
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa,
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit",
            function(a) {
                var b = a.target,
                c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit",
                function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }),
    l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change",
            function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change",
                function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"),
            !ka.test(this.nodeName)
        }
    }),
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                e = n._data(d, b);
                e || d.addEventListener(a, c, !0),
                n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
            n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0),
            c === !1 && (c = qa),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
            g = n._data(b, f),
            h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({},
            g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected: "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())),
            Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k,
            m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))),
            c.call(a[m], g, m);
            if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m],
            _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)),
        d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
            else Fa(a, f);
            return d = ea(f, "script"),
            d.length > 0 && fa(d, !i && ea(a, "script")),
            d = h = e = null,
            f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0,
            i = n.expando,
            j = n.cache,
            k = l.attributes,
            m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
            }
        }
    }),
    n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this,
            function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this,
            function(a) {
                var b = this[0] || {},
                c = 0,
                d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {},
                        1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch(e) {}
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments,
            function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            },
            a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0,
            e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this: this.clone(!0),
            n(f[d])[b](c),
            g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function Ma(a) {
        var b = d,
        c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c),
        c
    }
    var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f],
        a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    },
    Qa = d.documentElement; !
    function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
        j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5",
            l.opacity = "0.5" === j.style.opacity,
            l.cssFloat = !!j.style.cssFloat,
            j.style.backgroundClip = "content-box",
            j.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === j.style.backgroundClip,
            i = d.createElement("div"),
            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            j.innerHTML = "",
            i.appendChild(j),
            l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
            n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(),
                    f
                },
                boxSizingReliable: function() {
                    return null == b && k(),
                    e
                },
                pixelMarginRight: function() {
                    return null == b && k(),
                    c
                },
                pixelPosition: function() {
                    return null == b && k(),
                    b
                },
                reliableMarginRight: function() {
                    return null == b && k(),
                    g
                },
                reliableMarginLeft: function() {
                    return null == b && k(),
                    h
                }
            });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i),
                j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                b = e = h = !1,
                c = g = !0,
                a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)),
                j.style.display = "none",
                f = 0 === j.getClientRects().length,
                f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)),
                m.removeChild(i)
            }
        }
    } ();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    },
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f),
        void 0 === g ? g: g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    },
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em": g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)),
        void 0 === g ? g: g + "" || "auto"
    });
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get: (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    $a = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;
        while (c--) if (a = _a[c] + b, a in ab) return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c: n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + V[f], !0, e)),
        d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = Ra(a),
        g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border": "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e: i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "": "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch(j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get" in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Sa(a, b, d)),
            "normal" === f && b in $a && (f = $a[b]),
            "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }),
    n.each(["height", "width"],
    function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za,
                function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }),
    n.cssHooks.marginRight = Ua(l.reliableMarginRight,
    function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        },
        Sa, [a, "marginRight"]) : void 0
    }),
    n.cssHooks.marginLeft = Ua(l.reliableMarginLeft,
    function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        },
        function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px": void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Na.test(a) || (n.cssHooks[a + b].set = db)
    }),
    n.fn.extend({
        css: function(a, b) {
            return Y(this,
            function(a, b, c) {
                var d, e, f = {},
                g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            },
            a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb,
    gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : gb.propHooks._default.set(this),
            this
        }
    },
    gb.prototype.init.prototype = gb.prototype,
    gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now: n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = gb.prototype.init,
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }),
        hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        },
        e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e],
        d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], jb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide": "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0
            }
            o[d] = r && r[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(o))"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? n(a).show() : m.done(function() {
                n(a).hide()
            }),
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m),
            d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: n.extend({},
            b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
        d;
        return n.map(k, nb, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c),
                c
            }]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            qb.tweeners[c] = qb.tweeners[c] || [],
            qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({},
        a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        },
        d
    },
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function() {
                var b = qb(this, n.extend({},
                a), f); (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                e = null != a && a + "queueHooks",
                f = n.timers,
                g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); ! b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = n._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = n.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = n.timers,
        c = 0;
        for (hb = n.now(); c < b.length; c++) a = b[c],
        a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(),
        hb = void 0
    },
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    },
    n.fx.interval = 13,
    n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    },
    n.fx.stop = function() {
        a.clearInterval(ib),
        ib = null
    },
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b: b,
        c = c || "fx",
        this.queue(c,
        function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
    function() {
        var a, b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"),
        c.setAttribute("className", "t"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== c.className,
        l.style = /top/.test(a.getAttribute("style")),
        l.hrefNormalized = "/a" === a.getAttribute("href"),
        l.checkOn = !!b.value,
        l.optSelected = f.selected,
        l.enctype = !!d.createElement("form").enctype,
        e.disabled = !0,
        l.optDisabled = !f.disabled,
        b = d.createElement("input"),
        b.setAttribute("value", ""),
        l.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        l.radioValue = "t" === b.value
    } ();
    var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a),
                this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": n.isArray(e) && (e = n.map(e,
                    function(a) {
                        return null == a ? "": a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "": c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b: n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled: null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                    f = n.makeArray(b),
                    g = e.length;
                    while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                        d.selected = c = !0
                    } catch(h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    n.each(["radio", "checkbox"],
    function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub: tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d: (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(G);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c,
            n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
            a.removeAttribute(xb ? c: d)
        }
    }),
    ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f),
            e
        }: vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }),
    xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b: void 0
        }
    },
    vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value: null
    },
    n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value: void 0
        },
        set: tb.set
    },
    n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    },
    n.each(["width", "height"],
    function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })),
    l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch(b) {}
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.hrefNormalized || n.each(["href", "src"],
    function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        n.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = n.trim(d),
                    e !== h && n.attr(c, "class", h)
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = n.trim(d),
                    e !== h && n.attr(c, "class", h)
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "": n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
        e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb,
        function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a: (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    },
    n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch(e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    };
    var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {},
        f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [],
            function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a: c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
        a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
        i = a.dataTypes;
        while ("*" === i[0]) i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({},
            c),
            m = l.context || l,
            o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
            p = n.Deferred(),
            q = n.Callbacks("once memory"),
            r = l.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                    else w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b),
                    y(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80": "443")) === (Sb[3] || ("http:" === Sb[1] ? "80": "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global,
            i && 0 === n.active++&&n.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Lb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&": "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&": "?") + "_=" + Eb++)),
            l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01": "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                },
                l.timeout));
                try {
                    u = 1,
                    j.send(s, y)
                } catch(x) {
                    if (! (2 > u)) throw x;
                    y( - 1, x)
                }
            } else y( - 1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent": 304 === b ? y = "notmodified": (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess": "ajaxError", [w, l, k ? s: t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"],
    function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            },
            n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return ! 0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return ! 0;
            a = a.parentNode
        }
        return ! 1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length: Zb(a)
    },
    n.expr.filters.visible = function(a) {
        return ! n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b,
        function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
        e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "": b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a,
        function() {
            e(this.name, this.value)
        });
        else for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    },
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null: n.isArray(c) ? n.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
    function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    }: hc;
    var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload",
    function() {
        for (var a in fc) fc[a](void 0, !0)
    }),
    l.cors = !!gc && "withCredentials" in gc,
    gc = l.ajax = !!gc,
    gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                    h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                    b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null),
                    c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                        else {
                            j = {},
                            f = g.status,
                            "string" == typeof g.responseText && (j.text = g.responseText);
                            try {
                                i = g.statusText
                            } catch(k) {
                                i = ""
                            }
                            f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                        }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    },
                    b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c: c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script",
    function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    n.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    },
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url": "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&": "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        },
        b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        },
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }), "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1),
        b = b || d;
        var e = x.exec(a),
        f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
        h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)),
        n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c &&
        function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }),
        this
    },
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers,
        function(b) {
            return a === b.elem
        }).length
    };
    function mc(a) {
        return n.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
            l = n(a),
            m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({},
            h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                top: 0,
                left: 0
            },
            e = this[0],
            f = e && e.ownerDocument;
            if (f) return b = f.documentElement,
            n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this,
            function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e: n(f).scrollTop()) : a[d] = e)
            },
            a, d, arguments.length, null)
        }
    }),
    n.each(["top", "left"],
    function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition,
        function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px": c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin": "border");
                return Y(this,
                function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                },
                b, f ? d: void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    n.fn.size = function() {
        return this.length
    },
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return n
    });
    var nc = a.jQuery,
    oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc),
        b && a.jQuery === n && (a.jQuery = nc),
        n
    },
    b || (a.jQuery = a.$ = n),
    n
});
/*! jQuery UI - v1.11.4
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
    function e(e, s) {
        var n, a, o, r = e.nodeName.toLowerCase();
        return "area" === r ? (n = e.parentNode, a = n.name, e.href && a && "map" === n.nodeName.toLowerCase() ? (o = t("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled: "a" === r ? e.href || s: s) && i(e)
    }
    function i(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {},
    t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
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
        }
    }),
    t.fn.extend({
        scrollParent: function(e) {
            var i = this.css("position"),
            s = "absolute" === i,
            n = e ? /(auto|scroll|hidden)/: /(auto|scroll)/,
            a = this.parents().filter(function() {
                var e = t(this);
                return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
            return "fixed" !== i && a.length ? a: t(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        } (),
        removeUniqueId: function() {
            return this.each(function() { / ^ui - id - \d + $ / .test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !! t.data(i, e)
            }
        }) : function(e, i, s) {
            return !! t.data(e, s[3])
        },
        focusable: function(i) {
            return e(i, !isNaN(t.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = t.attr(i, "tabindex"),
            n = isNaN(s);
            return (n || s >= 0) && e(i, !n)
        }
    }),
    t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"],
    function(e, i) {
        function s(e, i, s, a) {
            return t.each(n,
            function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0,
                s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }),
            i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        a = i.toLowerCase(),
        o = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                t(this).css(a, s(this, e) + "px")
            })
        },
        t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                t(this).css(a, s(this, e, !0, n) + "px")
            })
        }
    }),
    t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
    }),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    } (t.fn.removeData)),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    t.fn.extend({
        focus: function(e) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(),
                        s && s.call(e)
                    },
                    i)
                }) : e.apply(this, arguments)
            }
        } (t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart": "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection",
                function(t) {
                    t.preventDefault()
                })
            }
        } (),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length) for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
                if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                n = n.parent()
            }
            return 0
        }
    }),
    t.ui.plugin = {
        add: function(e, i, s) {
            var n, a = t.ui[e].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [],
            a.plugins[n].push([i, s[n]])
        },
        call: function(t, e, i, s) {
            var n, a = t.plugins[e];
            if (a && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) t.options[a[n][0]] && a[n][1].apply(t.element, i)
        }
    };
    var s = 0,
    n = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = t._data(n, "events"),
                s && s.remove && t(n).triggerHandler("remove")
            } catch(o) {}
            e(i)
        }
    } (t.cleanData),
    t.widget = function(e, i, s) {
        var n, a, o, r, h = {},
        l = e.split(".")[0];
        return e = e.split(".")[1],
        n = l + "-" + e,
        s || (s = i, i = t.Widget),
        t.expr[":"][n.toLowerCase()] = function(e) {
            return !! t.data(e, n)
        },
        t[l] = t[l] || {},
        a = t[l][e],
        o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
        },
        t.extend(o, a, {
            version: s.version,
            _proto: t.extend({},
            s),
            _childConstructors: []
        }),
        r = new i,
        r.options = t.widget.extend({},
        r.options),
        t.each(s,
        function(e, s) {
            return t.isFunction(s) ? (h[e] = function() {
                var t = function() {
                    return i.prototype[e].apply(this, arguments)
                },
                n = function(t) {
                    return i.prototype[e].apply(this, t)
                };
                return function() {
                    var e, i = this._super,
                    a = this._superApply;
                    return this._super = t,
                    this._superApply = n,
                    e = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = a,
                    e
                }
            } (), void 0) : (h[e] = s, void 0)
        }),
        o.prototype = t.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || e: e
        },
        h, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: n
        }),
        a ? (t.each(a._childConstructors,
        function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    },
    t.widget.extend = function(e) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) for (i in a[o]) s = a[o][i],
        a[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({},
        e[i], s) : t.widget.extend({},
        s) : s);
        return e
    },
    t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(a) {
            var o = "string" == typeof a,
            r = n.call(arguments, 1),
            h = this;
            return o ? this.each(function() {
                var i, n = t.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + a + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : (r.length && (a = t.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(a || {}), e._init && e._init()) : t.data(this, s, new i(a, this))
            })),
            h
        }
    },
    t.Widget = function() {},
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0],
            this.element = t(i),
            this.uuid = s++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument: i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({},
            this.options, this._getCreateOptions(), e),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, a, o = e;
            if (0 === arguments.length) return t.widget.extend({},
            this.options);
            if ("string" == typeof e) if (o = {},
            s = e.split("."), e = s.shift(), s.length) {
                for (n = o[e] = t.widget.extend({},
                this.options[e]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {},
                n = n[s[a]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null: n[e];
                n[e] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null: this.options[e];
                o[e] = i
            }
            return this._setOptions(o),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
            this
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
        _on: function(e, i, s) {
            var n, a = this;
            "boolean" != typeof e && (s = i, i = e, e = !1),
            s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()),
            t.each(s,
            function(s, o) {
                function r() {
                    return e || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                l = h[1] + a.eventNamespace,
                u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(i).undelegate(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, a, o = this.options[e];
            if (s = s || {},
            i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e: this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i: n.effect || i: e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            o = !t.isEmptyObject(n),
            n.complete = a,
            n.delay && s.delay(n.delay),
            o && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                t(this)[e](),
                a && a.call(s[0]),
                i()
            })
        }
    }),
    t.widget;
    var a = !1;
    t(document).mouseup(function() {
        a = !1
    }),
    t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName,
            function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName,
            function(i) {
                return ! 0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!a) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this,
                s = 1 === e.which,
                n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length: !1;
                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                },
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                },
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), a = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
            a = !1,
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    }),
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this._blurActiveElement(e),
            this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe": i.iframeFix), !0) : !1)
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(e) {
            var i = this.document[0];
            if (this.handleElement.is(e.target)) try {
                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
            } catch(s) {}
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position")
            }).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(e),
            this.originalPosition = this.position = this._generatePosition(e, !1),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp({}),
                !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function(e) {
            var i = this,
            s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
            this.dropped && (s = this.dropped, this.dropped = !1),
            "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(),
            !1
        },
        _mouseUp: function(e) {
            return this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.focus(),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length: !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(e) {
            var i = this.options,
            s = t.isFunction(i.helper),
            n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode: i.appendTo),
            s && n[0] === this.element[0] && this._setPositionRelative(),
            n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
            n
        },
        _setPositionRelative: function() { / ^( ? :r | a | f) / .test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
            i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
            e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options,
            a = this.document[0];
            return this.relativeContainer = null,
            n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(a).width() - this.helperProportions.width - this.margins.left, (t(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
            s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top: s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left: s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s, n, a, o = this.options,
            r = this._isRootNode(this.scrollParent[0]),
            h = t.pageX,
            l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n: n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a: a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)),
            {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top: r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left: r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")),
            "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(),
            t.ui.plugin.call(this, e, [i, s, this], !0),
            /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs),
            t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({},
            i, {
                item: s.element
            });
            s.sortables = [],
            t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
            })
        },
        stop: function(e, i, s) {
            var n = t.extend({},
            i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1,
            t.each(s.sortables,
            function() {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                },
                t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i, s) {
            t.each(s.sortables,
            function() {
                var n = !1,
                a = this;
                a.positionAbs = s.positionAbs,
                a.helperProportions = s.helperProportions,
                a.offset.click = s.offset.click,
                a._intersectsWith(a.containerCache) && (n = !0, t.each(s.sortables,
                function() {
                    return this.positionAbs = s.positionAbs,
                    this.helperProportions = s.helperProportions,
                    this.offset.click = s.offset.click,
                    this !== a && this._intersectsWith(this.containerCache) && t.contains(a.element[0], this.element[0]) && (n = !1),
                    n
                })),
                n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() {
                    return i.helper[0]
                },
                e.target = a.currentItem[0], a._mouseCapture(e, !0), a._mouseStart(e, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", e), s.dropped = a.element, t.each(s.sortables,
                function() {
                    this.refreshPositions()
                }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(e), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", e, a._uiHash(a)), a._mouseStop(e, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables,
                function() {
                    this.refreshPositions()
                }))
            })
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body"),
            a = s.options;
            n.css("cursor") && (a._cursor = n.css("cursor")),
            n.css("cursor", a.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper),
            a = s.options;
            n.css("opacity") && (a._opacity = n.css("opacity")),
            n.css("opacity", a.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(e, i, s) {
            var n = s.options,
            a = !1,
            o = s.scrollParentNotHidden[0],
            r = s.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - e.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed: e.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - e.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed: e.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? a = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (a = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? a = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (a = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
            a !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [],
            t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)": n.snap).each(function() {
                var e = t(this),
                i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i, s) {
            var n, a, o, r, h, l, u, c, d, p, f = s.options,
            m = f.snapTolerance,
            g = i.offset.left,
            v = g + s.helperProportions.width,
            _ = i.offset.top,
            b = _ + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left,
            l = h + s.snapElements[d].width,
            u = s.snapElements[d].top - s.margins.top,
            c = u + s.snapElements[d].height,
            h - m > v || g > l + m || u - m > b || _ > c + m || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(c - _), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.top = s._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - _), a = m >= Math.abs(c - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.top = s._convertPositionTo("relative", {
                top: c - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left)), !s.snapElements[d].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = n || a || o || r || p)
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, a = s.options,
            o = t.makeArray(t(a.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            o.length && (n = parseInt(t(o[0]).css("zIndex"), 10) || 0, t(o).each(function(e) {
                t(this).css("zIndex", n + e)
            }), this.css("zIndex", n + o.length))
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper),
            a = s.options;
            n.css("zIndex") && (a._zIndex = n.css("zIndex")),
            n.css("zIndex", a.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }),
    t.ui.draggable,
    t.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options,
            s = i.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = t.isFunction(s) ? s: function(t) {
                return t.is(s)
            },
            this.proportions = function() {
                return arguments.length ? (e = arguments[0], void 0) : e ? e: e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            },
            this._addToManager(i.scope),
            i.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
            t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e),
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i: function(t) {
                return t.is(i)
            };
            else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s),
                this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current,
            n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }),
    t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && e + i > t
        }
        return function(e, i, s, n) {
            if (!i.offset) return ! 1;
            var a = (e.positionAbs || e.position.absolute).left + e.margins.left,
            o = (e.positionAbs || e.position.absolute).top + e.margins.top,
            r = a + e.helperProportions.width,
            h = o + e.helperProportions.height,
            l = i.offset.left,
            u = i.offset.top,
            c = l + i.proportions().width,
            d = u + i.proportions().height;
            switch (s) {
            case "fit":
                return a >= l && c >= r && o >= u && d >= h;
            case "intersect":
                return a + e.helperProportions.width / 2 > l && c > r - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > u && d > h - e.helperProportions.height / 2;
            case "pointer":
                return t(n.pageY, u, i.proportions().height) && t(n.pageX, l, i.proportions().width);
            case "touch":
                return (o >= u && d >= o || h >= u && d >= h || u > o && h > d) && (a >= l && c >= a || r >= l && c >= r || l > a && r > c);
            default:
                return ! 1
            }
        }
    } (),
    t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [],
            o = i ? i.type: null,
            r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; a.length > s; s++) if (! (a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
                for (n = 0; r.length > n; n++) if (r[n] === a[s].element[0]) {
                    a[s].proportions().height = 0;
                    continue t
                }
                a[s].visible = "none" !== a[s].element.css("display"),
                a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
                    width: a[s].element[0].offsetWidth,
                    height: a[s].element[0].offsetHeight
                }))
            }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
            function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }),
            s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(t.ui.ddmanager.droppables[e.options.scope] || [],
            function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance, i),
                    r = !o && this.isover ? "isout": o && !this.isover ? "isover": null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === n
                    }), a.length && (s = t(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover": "isout"] = !1, this["isover" === r ? "_over": "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    },
    t.ui.droppable,
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseInt(t, 10) || 0
        },
        _isNumber: function(t) {
            return ! isNaN(parseInt(t, 10))
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return ! 1;
            var s = i && "left" === i ? "scrollLeft": "scrollTop",
            n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        _create: function() {
            var e, i, s, n, a, o = this,
            r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!r.aspectRatio,
                aspectRatio: r.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {},
            i = 0; e.length > i; i++) s = t.trim(e[i]),
            a = "ui-resizable-" + s,
            n = t("<div class='ui-resizable-handle " + a + "'></div>"),
            n.css({
                zIndex: r.zIndex
            }),
            "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            this.handles[s] = ".ui-resizable-" + s,
            this.element.append(n);
            this._renderAxis = function(e) {
                var i, s, n, a;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                    mousedown: o._mouseDown
                })),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top": /se|sw|s/.test(i) ? "Bottom": /^e$/.test(i) ? "Right": "Left"].join(""), e.css(n, a), this._proportionallyResize()),
                this._handles = this._handles.add(this.handles[i])
            },
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }),
            r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles) s = t(this.handles[i])[0],
            (s === e.target || t.contains(s, e.target)) && (n = !0);
            return ! this.options.disabled && n
        },
        _mouseStart: function(e) {
            var i, s, n, a = this.options,
            o = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            i = this._num(this.helper.css("left")),
            s = this._num(this.helper.css("top")),
            a.containment && (i += t(a.containment).scrollLeft() || 0, s += t(a.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: i,
                top: s
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            }: {
                width: o.width(),
                height: o.height()
            },
            this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            }: {
                width: o.width(),
                height: o.height()
            },
            this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            },
            this.originalPosition = {
                left: i,
                top: s
            },
            this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            },
            this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            n = t(".ui-resizable-" + this.axis).css("cursor"),
            t("body").css("cursor", "auto" === n ? this.axis + "-resize": n),
            o.addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition,
            a = this.axis,
            o = e.pageX - n.left || 0,
            r = e.pageY - n.top || 0,
            h = this._change[a];
            return this._updatePrevProperties(),
            h ? (i = h.apply(this, [e, o, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
            u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                width: u.helper.width() - a,
                height: u.helper.height() - n
            },
            r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
                top: h,
                left: r
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, a, o = this.options;
            a = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth: 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth: 1 / 0,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight: 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight: 1 / 0
            },
            (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)),
            this._vBoundaries = a
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
            i = this.size,
            s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio: this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null),
            "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
            i = this.axis,
            s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
            n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
            a = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
            o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
            r = this.originalPosition.left + this.originalSize.width,
            h = this.position.top + this.size.height,
            l = /sw|nw|w/.test(i),
            u = /nw|ne|n/.test(i);
            return a && (t.width = e.minWidth),
            o && (t.height = e.minHeight),
            s && (t.width = e.maxWidth),
            n && (t.height = e.maxHeight),
            a && l && (t.left = r - e.minWidth),
            s && l && (t.left = r - e.maxWidth),
            o && u && (t.top = h - e.minHeight),
            n && u && (t.top = h - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0,
            i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(s[e], 10) || 0,
            i[e] += parseInt(n[e], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var t, e = 0,
            i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e],
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
            t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function() {
            var e = this.element,
            i = this.options;
            this.elementOffset = e.offset(),
            this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
            s = i.options,
            n = i._proportionallyResizeElements,
            a = n.length && /textarea/i.test(n[0].nodeName),
            o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
            r = a ? 0 : i.sizeDiff.width,
            h = {
                width: i.size.width - r,
                height: i.size.height - o
            },
            l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
            u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, u && l ? {
                top: u,
                left: l
            }: {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, a, o, r, h = t(this).resizable("instance"),
            l = h.options,
            u = h.element,
            c = l.containment,
            d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
            d && (h.containerElement = t(d), /document/.test(c) || c === document ? (h.containerOffset = {
                left: 0,
                top: 0
            },
            h.containerPosition = {
                left: 0,
                top: 0
            },
            h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                i[t] = h._num(e.css("padding" + s))
            }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            },
            s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(d, "left") ? d.scrollWidth: a, r = h._hasScroll(d) ? d.scrollHeight: n, h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: o,
                height: r
            }))
        },
        resize: function(e) {
            var i, s, n, a, o = t(this).resizable("instance"),
            r = o.options,
            h = o.containerOffset,
            l = o.position,
            u = o._aspectRatio || e.shiftKey,
            c = {
                top: 0,
                left: 0
            },
            d = o.containerElement,
            p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (c = h),
            l.left < (o._helper ? h.left: 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left: o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left: 0),
            l.top < (o._helper ? h.top: 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top: o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top: 0),
            n = o.containerElement.get(0) === o.element.parent().get(0),
            a = /relative|absolute/.test(o.containerElement.css("position")),
            n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top),
            i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left: o.offset.left - h.left)),
            s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top: o.offset.top - h.top)),
            i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)),
            s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)),
            p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
            i = e.options,
            s = e.containerOffset,
            n = e.containerPosition,
            a = e.containerElement,
            o = t(e.helper),
            r = o.offset(),
            h = o.outerWidth() - e.sizeDiff.width,
            l = o.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }),
            e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance"),
            i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseInt(e.width(), 10),
                    height: parseInt(e.height(), 10),
                    left: parseInt(e.css("left"), 10),
                    top: parseInt(e.css("top"), 10)
                })
            })
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance"),
            n = s.options,
            a = s.originalSize,
            o = s.originalPosition,
            r = {
                height: s.size.height - a.height || 0,
                width: s.size.width - a.width || 0,
                top: s.position.top - o.top || 0,
                left: s.position.left - o.left || 0
            };
            t(n.alsoResize).each(function() {
                var e = t(this),
                s = t(this).data("ui-resizable-alsoresize"),
                n = {},
                a = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(a,
                function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }),
                e.css(n)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
            i = e.options,
            s = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost: ""),
            e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
            s = i.options,
            n = i.size,
            a = i.originalSize,
            o = i.originalPosition,
            r = i.axis,
            h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
            l = h[0] || 1,
            u = h[1] || 1,
            c = Math.round((n.width - a.width) / l) * l,
            d = Math.round((n.height - a.height) / u) * u,
            p = a.width + c,
            f = a.height + d,
            m = s.maxWidth && p > s.maxWidth,
            g = s.maxHeight && f > s.maxHeight,
            v = s.minWidth && s.minWidth > p,
            _ = s.minHeight && s.minHeight > f;
            s.grid = h,
            v && (p += l),
            _ && (f += u),
            m && (p -= l),
            g && (f -= u),
            /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - c) : ((0 >= f - u || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - d) : (f = u - e.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - c) : (p = l - e.width, i.size.width = p, i.position.left = o.left + a.width - p))
        }
    }),
    t.ui.resizable,
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                e = t(i.options.filter, i.element[0]),
                e.addClass("ui-selectee"),
                e.each(function() {
                    var e = t(this),
                    i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            },
            this.refresh(),
            this.selectees = e.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
            s = this.options;
            this.opos = [e.pageX, e.pageY],
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0,
                e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting": "ui-selected").addClass(s ? "ui-selecting": "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                n = this.options,
                a = this.opos[0],
                o = this.opos[1],
                r = e.pageX,
                h = e.pageY;
                return a > r && (i = r, r = a, a = i),
                o > h && (i = h, h = o, o = i),
                this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: h - o
                }),
                this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                    l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"),
                s.unselecting = !1,
                s.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: s.element
                })
            }),
            t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"),
                s.selecting = !1,
                s.selected = !0,
                s.startselected = !0,
                i._trigger("selected", e, {
                    selected: s.element
                })
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    }),
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
            t.each(this.items,
            function() { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, i) {
            var s = null,
            n = !1,
            a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : void 0
            }), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n, a, o = this.options,
            r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed: e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed: e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next": "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === a ? "down": "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s),
                this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                    n = this.placeholder.offset(),
                    a = this.options.axis,
                    o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                    a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500,
                    function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
            s = [];
            return e = e || {},
            t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }),
            !s.length && e.key && s.push(e.key + "="),
            s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
            s = [];
            return e = e || {},
            i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            s = this.positionAbs.top,
            n = s + this.helperProportions.height,
            a = t.left,
            o = a + t.width,
            r = t.top,
            h = r + t.height,
            l = this.offset.click.top,
            u = this.offset.click.left,
            c = "x" === this.options.axis || s + l > r && h > s + l,
            d = "y" === this.options.axis || e + u > a && o > e + u,
            p = c && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > t[this.floating ? "width": "height"] ? p: e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
            i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
            s = e && i,
            n = this._getDragVerticalDirection(),
            a = this._getDragHorizontalDirection();
            return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
            i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
            s = this._getDragVerticalDirection(),
            n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i: s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right": "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, a, o, r = [],
            h = [],
            l = this._connectWith();
            if (l && e) for (s = l.length - 1; s >= 0; s--) for (a = t(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = t.data(a[n], this.widgetFullName),
            o && o !== this && !o.options.disabled && h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items,
            function(t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return ! 1;
                return ! 0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, s, n, a, o, r, h, l, u = this.items,
            c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]],
            d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName),
            a && a !== this && !a.options.disabled && (c.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
                item: this.currentItem
            }) : t(a.options.items, a.element), a]), this.containers.push(a));
            for (i = c.length - 1; i >= 0; i--) for (o = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]),
            h.data(this.widgetName + "-item", o),
            u.push({
                item: h,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function(e) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1,
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i],
            s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(),
            this.containers[i].containerCache.left = a.left,
            this.containers[i].containerCache.top = a.top,
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                    n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(t, n) { (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(e) {
            var i, s, n, a, o, r, h, l, u, c, d = null,
            p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                d = this.containers[i],
                p = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
            else {
                for (n = 1e4, a = null, u = d.floating || this._isFloating(this.currentItem), o = u ? "left": "top", r = u ? "width": "height", c = u ? "clientX": "clientY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, e[c] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[c] - h) && (n = Math.abs(e[c] - h), a = this.items[s], this.direction = l ? "up": "down"));
                if (!a && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1),
                void 0;
                a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[p]._trigger("change", e, this._uiHash(this)),
                this.currentContainer = this.containers[p],
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[p]._trigger("over", e, this._uiHash(this)),
                this.containers[p].containerCache.over = 1
            }
        },
        _createHelper: function(e) {
            var i = this.options,
            s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo: this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left" in e && (this.offset.click.left = e.left + this.margins.left),
            "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
            n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
            a = e.pageX,
            o = e.pageY,
            r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i: i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s: s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter: 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])),
            this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element: null
            }
        }
    })
});

/*! FineUI v3.6.0.2 | http://fineui.com/ */
(function() {
    var n = !1,
    t = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/: /.*/;
    this.Class = function() {};
    Class.extend = function(i) {
        function u() { ! n && this.init && this.init.apply(this, arguments)
        }
        var e = this.prototype,
        f, r;
        n = !0;
        f = new this;
        n = !1;
        for (r in i) f[r] = typeof i[r] == "function" && typeof e[r] == "function" && t.test(i[r]) ?
        function(n, t) {
            return function() {
                var r = this._super,
                i;
                return this._super = e[n],
                i = t.apply(this, arguments),
                this._super = r,
                i
            }
        } (r, i[r]) : i[r];
        return u.prototype = f,
        u.prototype.constructor = u,
        u.extend = arguments.callee,
        u
    }
})(),
function() {
    var n = {};
    this.tmpl = function t(i, r) {
        var u = /\W/.test(i) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + i.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[i] = n[i] || t(document.getElementById(i).innerHTML);
        return r ? u(r) : u
    }
} (),
function() {
    this.Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(n) {
            var f = "",
            e, t, i, s, h, o, r, u = 0;
            for (n = Base64._utf8_encode(n); u < n.length;) e = n.charCodeAt(u++),
            t = n.charCodeAt(u++),
            i = n.charCodeAt(u++),
            s = e >> 2,
            h = (e & 3) << 4 | t >> 4,
            o = (t & 15) << 2 | i >> 6,
            r = i & 63,
            isNaN(t) ? o = r = 64 : isNaN(i) && (r = 64),
            f = f + this._keyStr.charAt(s) + this._keyStr.charAt(h) + this._keyStr.charAt(o) + this._keyStr.charAt(r);
            return f
        },
        decode: function(n) {
            var t = "",
            e, o, s, h, u, r, f, i = 0;
            for (n = n.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < n.length;) h = this._keyStr.indexOf(n.charAt(i++)),
            u = this._keyStr.indexOf(n.charAt(i++)),
            r = this._keyStr.indexOf(n.charAt(i++)),
            f = this._keyStr.indexOf(n.charAt(i++)),
            e = h << 2 | u >> 4,
            o = (u & 15) << 4 | r >> 2,
            s = (r & 3) << 6 | f,
            t = t + String.fromCharCode(e),
            r != 64 && (t = t + String.fromCharCode(o)),
            f != 64 && (t = t + String.fromCharCode(s));
            return Base64._utf8_decode(t)
        },
        _utf8_encode: function(n) {
            var i, r, t;
            for (n = n.replace(/\r\n/g, "\n"), i = "", r = 0; r < n.length; r++) t = n.charCodeAt(r),
            t < 128 ? i += String.fromCharCode(t) : t > 127 && t < 2048 ? (i += String.fromCharCode(t >> 6 | 192), i += String.fromCharCode(t & 63 | 128)) : (i += String.fromCharCode(t >> 12 | 224), i += String.fromCharCode(t >> 6 & 63 | 128), i += String.fromCharCode(t & 63 | 128));
            return i
        },
        _utf8_decode: function(n) {
            for (var r = "",
            t = 0,
            i = c1 = c2 = 0; t < n.length;) i = n.charCodeAt(t),
            i < 128 ? (r += String.fromCharCode(i), t++) : i > 191 && i < 224 ? (c2 = n.charCodeAt(t + 1), r += String.fromCharCode((i & 31) << 6 | c2 & 63), t += 2) : (c2 = n.charCodeAt(t + 1), c3 = n.charCodeAt(t + 2), r += String.fromCharCode((i & 15) << 12 | (c2 & 63) << 6 | c3 & 63), t += 3);
            return r
        }
    }
} ();
typeof JSON != "object" && (JSON = {}),
function() {
    "use strict";
    function i(n) {
        return n < 10 ? "0" + n: n
    }
    function e(n) {
        return r.lastIndex = 0,
        r.test(n) ? '"' + n.replace(r,
        function(n) {
            var t = o[n];
            return typeof t == "string" ? t: "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + n + '"'
    }
    function f(i, r) {
        var s, l, h, a, v = n,
        c, o = r[i];
        o && typeof o == "object" && typeof o.toJSON == "function" && (o = o.toJSON(i));
        typeof t == "function" && (o = t.call(r, i, o));
        switch (typeof o) {
        case "string":
            return e(o);
        case "number":
            return isFinite(o) ? String(o) : "null";
        case "boolean":
        case "null":
            return String(o);
        case "object":
            if (!o) return "null";
            if (n += u, c = [], Object.prototype.toString.apply(o) === "[object Array]") {
                for (a = o.length, s = 0; s < a; s += 1) c[s] = f(s, o) || "null";
                return h = c.length === 0 ? "[]": n ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]": "[" + c.join(",") + "]",
                n = v,
                h
            }
            if (t && typeof t == "object") for (a = t.length, s = 0; s < a; s += 1) typeof t[s] == "string" && (l = t[s], h = f(l, o), h && c.push(e(l) + (n ? ": ": ":") + h));
            else for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (h = f(l, o), h && c.push(e(l) + (n ? ": ": ":") + h));
            return h = c.length === 0 ? "{}": n ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}": "{" + c.join(",") + "}",
            n = v,
            h
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx, r, n, u, o, t;
    typeof JSON.stringify != "function" && (r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    JSON.stringify = function(i, r, e) {
        var o;
        if (n = "", u = "", typeof e == "number") for (o = 0; o < e; o += 1) u += " ";
        else typeof e == "string" && (u = e);
        if (t = r, r && typeof r != "function" && (typeof r != "object" || typeof r.length != "number")) throw new Error("JSON.stringify");
        return f("", {
            "": i
        })
    });
    typeof JSON.parse != "function" && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
        function walk(n, t) {
            var r, u, i = n[t];
            if (i && typeof i == "object") for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (u = walk(i, r), u !== undefined ? i[r] = u: delete i[r]);
            return reviver.call(n, t, i)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
        function(n) {
            return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice( - 4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
        typeof reviver == "function" ? walk({
            "": j
        },
        "") : j;
        throw new SyntaxError("JSON.parse");
    })
} (),
function(n) {
    "use strict";
    function v(n) {
        return function(t, r) {
            var u = i.i18n[n].indexOf(r.charAt(0).toUpperCase() + r.substr(1).toLowerCase());~u && (t.month = u)
        }
    }
    function r(n, t) {
        for (n = String(n), t = t || 2; n.length < t;) n = "0" + n;
        return n
    }
    function y(n, t) {
        for (var r = [], i = 0, u = n.length; i < u; i++) r.push(n[i].substr(0, t));
        return r
    }
    function p(n) {
        return n + ["th", "st", "nd", "rd"][n % 10 > 3 ? 0 : (n - n % 10 != 10) * n % 10]
    }
    var i = {},
    o = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
    s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    e = ["am", "pm"],
    u = /\d\d?/,
    f = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    c = function() {},
    l,
    a,
    t = {
        D: [u,
        function(n, t) {
            n.day = t
        }],
        M: [u,
        function(n, t) {
            n.month = t - 1
        }],
        YY: [u,
        function(n, t) {
            var r = new Date,
            i = +("" + r.getFullYear()).substr(0, 2);
            n.year = "" + (t > 68 ? i - 1 : i) + t
        }],
        h: [u,
        function(n, t) {
            n.hour = t
        }],
        m: [u,
        function(n, t) {
            n.minute = t
        }],
        s: [u,
        function(n, t) {
            n.second = t
        }],
        YYYY: [/\d{4}/,
        function(n, t) {
            n.year = t
        }],
        S: [/\d/,
        function(n, t) {
            n.millisecond = t * 100
        }],
        SS: [/\d{2}/,
        function(n, t) {
            n.millisecond = t * 10
        }],
        SSS: [/\d{3}/,
        function(n, t) {
            n.millisecond = t
        }],
        d: [u, c],
        ddd: [f, c],
        MMM: [f, v("monthNamesShort")],
        MMMM: [f, v("monthNames")],
        a: [f,
        function(n, t) {
            var i = t.toLowerCase();
            i === e[0] ? n.isPm = !1 : i === e[1] && (n.isPm = !0)
        }],
        ZZ: [/[\+\-]\d\d:?\d\d/,
        function(n, t) {
            var i = (t + "").match(/([\+\-]|\d\d)/gi),
            r;
            i && (r = +(i[1] * 60) + parseInt(i[2], 10), n.timezoneOffset = i[0] === "+" ? r: -r)
        }]
    };
    t.dd = t.d;
    t.dddd = t.ddd;
    t.Do = t.DD = t.D;
    t.mm = t.m;
    t.hh = t.H = t.HH = t.h;
    t.MM = t.M;
    t.ss = t.s;
    t.A = t.a;
    a = y(h, 3);
    l = y(s, 3);
    i.i18n = {
        dayNamesShort: l,
        dayNames: s,
        monthNamesShort: a,
        monthNames: h,
        amPm: e,
        DoFn: p
    };
    i.masks = {
        "default": "ddd MMM DD YYYY HH:mm:ss",
        shortDate: "M/D/YY",
        mediumDate: "MMM D, YYYY",
        longDate: "MMMM D, YYYY",
        fullDate: "dddd, MMMM D, YYYY",
        shortTime: "HH:mm",
        mediumTime: "HH:mm:ss",
        longTime: "HH:mm:ss.SSS"
    };
    i.format = function(n, t) {
        if (typeof n == "number" && (n = new Date(n)), Object.prototype.toString.call(n) !== "[object Date]" || isNaN(n.getTime())) throw new Error("Invalid Date in fecha.format");
        t = i.masks[t] || t || i.masks["default"];
        var s = n.getDate(),
        f = n.getDay(),
        e = n.getMonth(),
        l = n.getFullYear(),
        u = n.getHours(),
        a = n.getMinutes(),
        v = n.getSeconds(),
        h = n.getMilliseconds(),
        c = n.getTimezoneOffset(),
        y = {
            D: s,
            DD: r(s),
            Do: i.i18n.DoFn(s),
            d: f,
            dd: r(f),
            ddd: i.i18n.dayNamesShort[f],
            dddd: i.i18n.dayNames[f],
            M: e + 1,
            MM: r(e + 1),
            MMM: i.i18n.monthNamesShort[e],
            MMMM: i.i18n.monthNames[e],
            YY: String(l).slice(2),
            YYYY: l,
            h: u % 12 || 12,
            hh: r(u % 12 || 12),
            H: u,
            HH: r(u),
            m: a,
            mm: r(a),
            s: v,
            ss: r(v),
            S: Math.round(h / 100),
            SS: r(Math.round(h / 10), 2),
            SSS: r(h, 3),
            a: u < 12 ? i.i18n.amPm[0] : i.i18n.amPm[1],
            A: u < 12 ? i.i18n.amPm[0].toUpperCase() : i.i18n.amPm[1].toUpperCase(),
            ZZ: (c > 0 ? "-": "+") + r(Math.floor(Math.abs(c) / 60) * 100 + Math.abs(c) % 60, 4)
        };
        return t.replace(o,
        function(n) {
            return n in y ? y[n] : n.slice(1, n.length - 1)
        })
    };
    i.parse = function(n, r) {
        var e, u, s, h, f, c;
        if (typeof r != "string") throw new Error("Invalid format in fecha.parse");
        return (r = i.masks[r] || r, n.length > 1e3) ? !1 : (e = !0, u = {},
        r.replace(o,
        function(i) {
            return t[i] && (f = t[i], c = n.search(f[0]), ~c ? n.replace(f[0],
            function(t) {
                return f[1](u, t),
                n = n.substr(c + t.length),
                t
            }) : e = !1),
            t[i] ? "": i.slice(1, i.length - 1)
        }), !e) ? !1 : (s = new Date, u.isPm === !0 && u.hour != null && +u.hour != 12 ? u.hour = +u.hour + 12 : u.isPm === !1 && +u.hour == 12 && (u.hour = 0), u.timezoneOffset != null ? (u.minute = +(u.minute || 0) - +u.timezoneOffset, h = new Date(Date.UTC(u.year || s.getFullYear(), u.month || 0, u.day || 1, u.hour || 0, u.minute || 0, u.second || 0, u.millisecond || 0))) : h = new Date(u.year || s.getFullYear(), u.month || 0, u.day || 1, u.hour || 0, u.minute || 0, u.second || 0, u.millisecond || 0), h)
    };
    typeof module != "undefined" && module.exports ? module.exports = i: typeof define == "function" && define.amd ? define(function() {
        return i
    }) : n.fecha = i
} (this);
window.F = function(n) {
    return F.isSTR(n) || (n = $(n).attr("id")),
    F.$eG[n]
};
F.fineui = "3.6.0.2";
F.customId = "";
F.util = {};
F.ui = function(n) {
    var t = F.$ep(n.type || "component");
    return new t(n)
};
F.$eG = F.create = F.all = F.ui;
F.pageLoaded = !1;
F.$7h = [];
F.$2 = function(n) {
    F.pageLoaded ? window.setTimeout(function() {
        F.$sx(n)
    },
    300) : F.util.$h(n, F.$7h) || F.$7h.push(n)
};
F.$sx = function(n) {
    var t;
    n = $.makeArray(n);
    t = [];
    $.each(n,
    function(n, i) {
        t.push("<li>" + (n + 1) + ". " + i + "<\/li>")
    });
    var f = 'FineUIMvc（基础版）不支持：<ul class="f-ul">' + t.join("") + "<\/ul>",
    i = location.pathname.split("/"),
    r = i.length;
    if (r >= 2) {
        var u = encodeURIComponent(i[r - 2]),
        e = encodeURIComponent(i[r - 1]),
        o = "";
        o = F.startsWith("Mobile", u) ? "http://fineui.com/demo_mvc/#/demo_mvc/Mobile/?file=" + u + "/" + e: "http://fineui.com/demo_mvc/#/demo_mvc/" + u + "/" + e;
        f += '<div style="font-size:11px;margin-top:15px;padding-top:5px;border-top-style:dashed;border-top-width:1px;"><a href="' + o + '" target="_blank" style="text-decoration:none;">官网示例中打开<\/a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://fineui.com/mvc" target="_blank" style="text-decoration:none;">企业版试用<\/a><\/div>'
    }
    F.alert({
        message: f,
        header: !1,
        model: !0,
        messageIcon: "error"
    })
},
function(n, t) {
    function w(n) {
        var i = /(\d{2,4})-(\d\d?)-(\d\d?)/.exec(n),
        t = NaN,
        r;
        return i && (t = new Date(NaN), r = +i[2], t.setFullYear(i[1], r - 1, i[3]), r != t.getMonth() + 1 && t.setTime(NaN)),
        t
    }
    function r(i, r, u, f) {
        function s() {
            e && e.hide();
            o && o.show();
            f && f.apply(t)
        }
        var e = i,
        o = r; (n.isSTR(i) && i && (e = n(i)), n.isSTR(r) && r && (o = n(r)), e && e.fineui && (i = e.$e), o && o.fineui && (r = o.$e), e || o) && (s(), n.$2("F - mobile - animation"))
    }
    function k(t) {
        if (!i.$e8(t, ".f-menu") && !i.$e8(t, ".f-field-dropdownlist-pop") && !i.$e8(t, ".f-field-datepicker-pop")) {
            var r = $(".f-menu:visible");
            r.length && $.each(r,
            function(r, u) {
                var e = n(u),
                o,
                f;
                if (!e.$L()) return ! 0;
                o = !1;
                f = e.targetel;
                f && f.length && i.$e8(t, f) && (o = !0);
                o || e.hideTopMenu()
            })
        }
    }
    var i = n.util,
    b = Date.parse,
    u, f, e, o, s, h, c, l, a, v, y, p;
    Date.parse = function(t) {
        var i = b(t);
        return n.isNAN(i) && (i = w(t)),
        i
    };
    u = $.fn.removeClass;
    $.fn.$W = function() {
        var t = this;
        return u.apply(t, arguments),
        n.$ej && n.$H4(t),
        t
    };
    f = $.fn.addClass;
    $.fn.$3 = function() {
        var t = this;
        return f.apply(t, arguments),
        n.$ej && n.$H4(t),
        t
    };
    e = $.fn.toggleClass;
    $.fn.$ev = function() {
        var t = this;
        return e.apply(t, arguments),
        n.$ej && n.$H4(t),
        t
    };
    o = $.fn.hasClass;
    $.fn.$5 = function() {
        return o.apply(this, arguments)
    };
    s = $.fn.width;
    $.fn.$V = function() {
        return s.apply(this, arguments)
    };
    h = $.fn.height;
    $.fn.$q = function() {
        return h.apply(this, arguments)
    };
    c = $.fn.outerWidth;
    $.fn.$1 = function() {
        return c.apply(this, arguments)
    };
    l = $.fn.outerHeight;
    $.fn.$4 = function() {
        return l.apply(this, arguments)
    };
    a = $.fn.appendTo;
    $.fn.$7 = function() {
        return a.apply(this, arguments)
    };
    v = $.fn.parents;
    $.fn.$78 = function() {
        return v.apply(this, arguments)
    };
    y = $.fn.closest;
    $.fn.$e1 = function() {
        return y.apply(this, arguments)
    };
    p = $.fn.find;
    $.fn.$c = function() {
        return p.apply(this, arguments)
    };
    n.$7n = '<i class="f-tool-icon ui-icon"><\/i>';
    n.$sQ = ".f-cmp.f-field:not(.f-field-innercmp)";
    n.$cH = -3;
    n.$4w = -3;
    n.$4a = 6;
    n.$4O = 9;
    n.$sm = 18;
    n.$sq = 12;
    n.$sh = 0;
    n.$3Q = function() {
        var t = "fineui_" + n.$sh;
        return n.$sh++,
        t
    };
    n.$C = {
        left: 0,
        top: 0
    };
    n.KEY = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        ENTER: 13,
        ESC: 27,
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        DOWN: 40,
        SPACE: 32,
        TAB: 9
    };
    n.flip = function(n, t, i) {
        r(n, t, "flip", i, !0)
    };
    n.flipIn = function(t, i) {
        n.flip("", t, i)
    };
    n.flipOut = function(t, i) {
        n.flip(t, "", i)
    };
    n.pop = function(n, t, i) {
        r(n, t, "pop", i)
    };
    n.popIn = function(t, i) {
        n.pop("", t, i)
    };
    n.popOut = function(t, i) {
        n.pop(t, "", i)
    };
    n.fade = function(n, t, i) {
        r(n, t, "fade", i)
    };
    n.fadeIn = function(t, i) {
        n.fade("", t, i)
    };
    n.fadeOut = function(t, i) {
        n.fade(t, "", i)
    };
    n.slide = function(n, t, i, u) {
        r(n, t, "slide-" + i, u)
    };
    n.slideIn = function(t, i, r) {
        n.slide("", t, i, r)
    };
    n.slideOut = function(t, i, r) {
        n.slide(t, "", i, r)
    };
    n.slideLeft = function(n, t, i) {
        r(n, t, "slide-left", i)
    };
    n.slideLeftIn = function(t, i) {
        n.slideLeft("", t, i)
    };
    n.slideLeftOut = function(t, i) {
        n.slideLeft(t, "", i)
    };
    n.slideRight = function(n, t, i) {
        r(n, t, "slide-right", i)
    };
    n.slideRightIn = function(t, i) {
        n.slideRight("", t, i)
    };
    n.slideRightOut = function(t, i) {
        n.slideRight(t, "", i)
    };
    n.slideUp = function(n, t, i) {
        r(n, t, "slide-up", i)
    };
    n.slideUpIn = function(t, i) {
        n.slideUp("", t, i)
    };
    n.slideUpOut = function(t, i) {
        n.slideUp(t, "", i)
    };
    n.slideDown = function(n, t, i) {
        r(n, t, "slide-down", i)
    };
    n.slideDownIn = function(t, i) {
        n.slideDown("", t, i)
    };
    n.slideDownOut = function(t, i) {
        n.slideDown(t, "", i)
    };
    n.windowResize = function() {
        i.$He.apply(t, arguments)
    };
    n.noLayout = n.$eZ = function(i) {
        n.$1s = !0;
        i.apply(t);
        n.$1s = !1
    };
    n.noEvent = function(i) {
        n.$3t = !0;
        i.apply(t);
        n.$3t = !1
    };
    n.noValidate = function(i) {
        n.$H0 = !0;
        i.apply(t);
        n.$H0 = !1
    };
    n.noAnimation = function(i) {
        n.$sN = !0;
        i.apply(t);
        n.$sN = !1
    };
    n.target = function() {
        return i.$3D.apply(t, arguments)
    };
    n.alert = function() {
        return i.alert.apply(t, arguments)
    };
    n.confirm = function() {
        return i.confirm.apply(t, arguments)
    };
    n.prompt = function() {
        return i.prompt.apply(t, arguments)
    };
    n.notify = function() {
        return i.notify.apply(t, arguments)
    };
    n.cookie = function() {
        return i.$1C.apply(t, arguments)
    };
    n.removeCookie = function() {
        i.$1T.apply(t, arguments)
    };
    n.addCSS = function() {
        i.$c3.apply(t, arguments)
    };
    n.addJS = function() {
        i.$cW.apply(t, arguments)
    };
    n.htmlEncode = function() {
        return i.$3B.apply(t, arguments)
    };
    n.htmlDecode = function() {
        return i.$cM.apply(t, arguments)
    };
    n.urlEncode = function(n) {
        return encodeURIComponent(n)
    };
    n.urlDecode = function(n) {
        return decodeURIComponent(n)
    };
    n.getActiveWindow = function() {
        return n.wnd.getActiveWindow.apply(t, arguments)
    };
    n.getGhostWindow = function() {
        return n.wnd.$4P.apply(t, arguments)
    };
    n.getHidden = function() {
        return i.$1U.apply(t, arguments)
    };
    n.setHidden = function() {
        return i.$1S.apply(t, arguments)
    };
    n.removeHidden = function() {
        return i.$1y.apply(t, arguments)
    };
    n.load = function() {
        i.load.apply(t, arguments)
    };
    n.ready = function() {
        i.ready.apply(t, arguments)
    };
    n.ajaxReady = n.ajaxready = function() {
        i.ajaxReady.apply(t, arguments)
    };
    n.beforeAjax = n.beforeajax = function() {
        i.beforeAjax.apply(t, arguments)
    };
    n.beforeAjaxSuccess = n.beforeajaxsuccess = function() {
        i.beforeAjaxSuccess.apply(t, arguments)
    };
    n.beforeAjaxError = n.beforeajaxerror = function() {
        i.beforeAjaxError.apply(t, arguments)
    };
    n.beforeUnload = n.beforeunload = function() {
        i.beforeUnload.apply(t, arguments)
    };
    n.stopPropagation = function() {
        var n = arguments.callee.caller.arguments[0] || t.event;
        n.stopPropagation()
    };
    n.toggle = function(n, t) {
        $(n).$ev(t)
    };
    n.fieldValue = function(n) {
        return i.$1o(n)
    };
    n.isFUN = function(n) {
        return i.isFUN(n)
    };
    n.isARR = function(n) {
        return i.isARR(n)
    };
    n.isBOO = function(n) {
        return i.isBOO(n)
    };
    n.isNUM = function(n) {
        return i.isNUM(n)
    };
    n.isNAN = function(n) {
        return i.isNAN(n)
    };
    n.isSTR = function(n) {
        return i.isSTR(n)
    };
    n.isUND = function(n) {
        return i.isUND(n)
    };
    n.isDAT = function(n) {
        return i.isDAT(n)
    };
    n.isPOBJ = function(n) {
        return i.isPOBJ(n)
    };
    n.isEOBJ = function(n) {
        return i.isEOBJ(n)
    };
    n.isEMP = function(n) {
        return i.isEMP(n)
    };
    n.isELE = function(n) {
        return i.isELE(n)
    };
    n.isIE8 = function() {
        return n.$ej
    };
    n.isIE89 = function() {
        return n.$ej9
    };
    n.isIE9 = function() {
        return n.$4S9
    };
    n.isIE = function() {
        return n.$4S
    };
    n.isChrome = function() {
        return n.$4y
    };
    n.isWebKit = function() {
        return n.$40
    };
    n.isMobile = function() {
        return n.$P
    };
    n.validateForms = function() {
        return i.$4G.apply(t, arguments)
    };
    n.validateForm = function() {
        return arguments[0] = [arguments[0]],
        i.$4G.apply(t, arguments)
    };
    n.formatString = function() {
        return i.$e2.apply(t, arguments)
    };
    n.reset = function() {
        i.$W2.apply(t, arguments)
    };
    n.parseDate = function() {
        return i.$eO.apply(t, arguments)
    };
    n.formatDate = function() {
        return i.$eR.apply(t, arguments)
    };
    n.parseJSON = function(n) {
        return JSON.parse(n)
    };
    n.toJSON = function(n) {
        return JSON.stringify(n)
    };
    n.addMainTab = function() {
        i.addMainTab.apply(t, arguments)
    };
    n.initTreeTabStrip = function() {
        i.initTreeTabStrip.apply(t, arguments)
    };
    n.startsWith = function() {
        return i.$4$.apply(t, arguments)
    };
    n.endsWith = function() {
        return i.$eg.apply(t, arguments)
    };
    n.queryString = function() {
        return i.$Wk.apply(t, arguments)
    };
    n.hasHScrollbar = function(n) {
        return i.$46(n)
    };
    n.hasVScrollbar = function(n) {
        return i.$4f(n)
    };
    n.leftPadding = function() {
        return i.$e9.apply(t, arguments)
    };
    n.addCommas = function(n) {
        n += "";
        for (var i = n.split("."), t = i[0], u = i.length > 1 ? "." + i[1] : "", r = /(\d+)(\d{3})/; r.test(t);) t = t.replace(r, "$1,$2");
        return t + u
    };
    n.removeCommas = function(n) {
        return n += "",
        n.replace(/,/g, "")
    };
    n.canAccess = function() {
        return i.$eJ.apply(t, arguments)
    };
    n.appendFormNode = function() {
        i.$WM.apply(t, arguments)
    };
    n.hideScrollbar = function() {
        i.$1K.apply(t, arguments)
    };
    n.applyStyles = function() {
        i.$1G.apply(t, arguments)
    };
    n.replaceNode = function() {
        i.$16.apply(t, arguments)
    };
    n.br = function(n) {
        n = n || 1;
        for (var t = 0; t < n; t++) $("<br>").$7("body")
    };
    n.p = function(n) {
        $("<p>").html(n).$7("body")
    };
    n.div = function(n) {
        $("<div>").html(n).$7("body")
    };
    n.getType = function(t) {
        return n.$ep(t)
    };
    n.$ep = function(t) {
        var r, i;
        for (r in n) if (n.hasOwnProperty(r) && (i = n[r], i && typeof i == "function" && i.prototype && i.prototype.type && i.prototype.type === t)) return i;
        return null
    };
    n.$sW = function(n) {
        $.extend(fecha.i18n, {
            dayNamesShort: n.dayNamesShort,
            dayNames: n.dayNames,
            monthNamesShort: n.monthNamesShort,
            monthNames: n.monthNames,
            amPm: n.amPm
        })
    };
    n.lang = function(t, i) {
        $.extend(n.$ep(t).prototype, i);
        t === "calendar" && n.$sW(i)
    };
    n.log = function(i, r) {
        if (t.console && t.console.log) { (!n.logBaseTime || (new Date).getTime() - n.logBaseTime > 1e4) && (n.logBaseTime = (new Date).getTime());
            r instanceof n.Base && (i = i + ", " + r.type + ", " + r.id);
            var u = (((new Date).getTime() - n.logBaseTime) / 1e3).toFixed(2);
            console.log(u + " " + i)
        }
    };
    n.$H4 = function(t) {
        function i(n) {
            var t = (new Date).getTime(),
            i = n.data("iepseudeo-time");
            i && t - i < 600 || (n.data("iepseudeo-time", t), n.toggleClass("f-ie-pseudeo"))
        }
        n.$ej && (t.is(".ui-icon") ? i(t) : t.$c(".ui-icon").each(function() {
            i($(this))
        }))
    };
    n.defer = function(n, i, r) {
        return r ? t.setTimeout(function() {
            n.apply(r)
        },
        i) : t.setTimeout(n, i)
    };
    n.mouseInside = function(t) {
        var i = !1;
        return t.each(function() {
            var r = $(this).offset();
            if (n.$C.left > r.left && n.$C.left < r.left + t.$1() && n.$C.top > r.top && n.$C.top < r.top + t.$4()) return i = !0,
            !1
        }),
        i
    };
    n.showQtip = function(i) {
        function e(i) {
            if (n.mouseInside(i) && i.attr("data-qtip")) {
                var f = $(t).$V(),
                e = $(t).$q(),
                o = n.qtipEl.$1(!0),
                s = n.qtipEl.$4(!0),
                r = n.$C.left + 10,
                u = n.$C.top + 20;
                r + o > f && (r = f - o);
                u + s > e && (u = e - s);
                n.qtipEl.css({
                    top: u,
                    left: r
                });
                n.qtipEl.show();
                n.$H4(n.qtipEl)
            }
        }
        var o = i.attr("data-qtip"),
        u = i.attr("data-qtitle") || "",
        s = i.attr("data-qhide") || "auto",
        f = i.attr("data-qclass") || "",
        r;
        n.qtipEl || (n.qtipEl = $("<div>", {
            "class": "f-qtip"
        }).$7("body"));
        n.qtipEl.html("");
        n.qtipEl.data("targetel", i);
        n.qtipEl.css("left", 0);
        r = $("<div>", {
            "class": "f-qtip-inner ui-corner-all ui-widget ui-widget-content"
        }).$7(n.qtipEl);
        f && r.$3(f);
        u && $("<div>", {
            "class": "f-qtip-title",
            html: u
        }).$7(r);
        $("<div>", {
            "class": "f-qtip-content",
            html: o
        }).$7(r);
        t.clearTimeout(n.$7D);
        n.$7D = t.setTimeout(function() {
            e(i);
            s !== "auto" && (n.$4C = !0)
        },
        500)
    };
    n.hideQtip = function(i) {
        n.qtipEl && (i && i.length && !n.qtipEl.data("targetel").is(i) || (n.$7D && (t.clearTimeout(n.$7D), n.$7D = null), n.qtipEl.hide()))
    };
    n.$7Z = 1e4;
    n.wndManager = new(Class.extend({
        $3M: n.$7Z,
        $35: undefined,
        all: [],
        getZIndex: function() {
            return this.$3M
        },
        getNextZIndex: function() {
            var n = this;
            return n.$3M += 30,
            n.$3M
        },
        addActive: function(t) {
            var r = this,
            u;
            if (r.$35 === t) return ! 1;
            t.messageType !== "notify" && (u = r.getNextZIndex(), t.$e.css("z-index", u), r.$35 = t);
            i.$h(t, r.all) || r.all.push(t);
            t.modal && n.showMask(t)
        },
        removeActive: function(t) {
            var r = this,
            u = r.getSorted(),
            i;
            u.length && u[0] === t && (t.$e.css("z-index", n.$7Z), r.$35 = undefined, r.$3M = n.$7Z, u.length >= 2 && (i = u[1], i.$L() && (i.modal && n.showMask(i), r.$35 = i, r.$3M = i.$HO())))
        },
        getActive: function() {
            return this.$35
        },
        remove: function(n) {
            var t = this,
            r = i.$H3(n, t.all);
            r >= 0 && i.$ex(r, t.all)
        },
        getSorted: function(n) {
            var t = this,
            i = t.all.sort(function(n, t) {
                return t.$HO() - n.$HO()
            });
            return $.grep(i,
            function(t) {
                var i = !0;
                return n && (i = t.$L()),
                t.messageType !== "notify" && i
            })
        }
    }));
    n.showMask = function(t) {
        var r = n.maskEl,
        f, e, u;
        if (!r) {
            r = $("<div>", {
                "class": "f-mask ui-widget ui-widget-content"
            }).$7("body");
            i.$He(function() {
                r.is(":visible") && n.showMask()
            },
            "resize.F.maskEl");
            r.on("click",
            function() {
                var n = r.data("targetwnd");
                n && n.hideOnMaskClick && !n.el.$5("f-animation") && n.hide()
            })
        }
        $(document).$V();
        f = $("body").$1();
        e = $(document).$q();
        r.css({
            width: f,
            height: e
        });
        t && (u = i.$i(t.$e, "z-index"), u && r.css("z-index", u - 1));
        r.data("targetwnd", t);
        r.show();
        n.maskEl = r
    };
    n.$7d = null;
    n.$4U = function(t) {
        if (t = t || $("body"), !n.$P && (n.$4C && (n.mouseInside(n.qtipEl) || (n.qtipEl.hide(), n.$4C = !1)), n.qtipEl && n.qtipEl.is(":visible"))) {
            var i = n.qtipEl.data("targetel");
            i.length && !i.attr("data-qtip") && n.qtipEl.hide()
        }
        k(t)
    };
    $(t).load(function() {
        n.$ej && (n.$cH = -1, n.$4w = -1, n.$4a = 2, n.$4O = 2);
        i.$Hu();
        n.$ej && t.setInterval(function() {
            $("iframe").each(function() {
                var t = $(this),
                n,
                r;
                if (t.is(":visible") && t.$5("f-iframe")) {
                    if (n = t[0].contentWindow, !i.$eJ(n)) return ! 0;
                    n && n.$ && (r = n.$("body"), r.$V() < 5 && r.$q() < 5 && t.hide().show())
                }
            })
        },
        1200)
    });
    $(function() {
        var r, f, u;
        if (n.$WH = !!t.addEventListener, n.$Hc = !!("placeholder" in document.createElement("input")), n.$ej = !n.$WH, n.$ej9 = !n.$Hc, n.$4S9 = n.$ej9 && !n.$ej, r = t.navigator.userAgent, n.$4y = /chrome/i.test(r), n.$HC = /ip(hone|od|ad)/i.test(r), n.$1t = /iphone/i.test(r), n.$1r = /ipad/i.test(r), n.$40 = /applewebkit/i.test(r), n.$P = /Mobi/.test(r), n.$4S = !/opera/i.test(r) && (/msie/i.test(r) || /trident/i.test(r)), f = $("#f_ui_icon"), f.length || (f = $(n.$7n).attr("id", "f_ui_icon").$7("body")), n.$7d = t.setInterval(function() {
            if (f && f.length) {
                var n = f.$V();
                n === 6 && i.$Hu()
            }
        },
        100), u = $("body"), u.$3("f-body ui-widget ui-widget-content"), n.$40 && u.$3("f-webkit"), n.$HC && (u.css("cursor", "pointer"), u.$3("f-ios"), n.$1t ? u.$3("f-iphone") : n.$1r && u.$3("f-ipad")), n.$ej && u.$3("f-ie8"), n.$4S && u.$3("f-ie"), !n.$P) {
            $(document).mousemove(function(t) {
                n.$C.left = t.pageX;
                n.$C.top = t.pageY
            });
            $(document).on("mouseenter mouseleave click", "[data-qtip]",
            function(t) {
                var i = $(this),
                r = i.attr("data-qtip");
                r && (n.$4C || (t.type === "mouseenter" ? n.showQtip(i) : (t.type === "mouseleave" || t.type === "click") && n.hideQtip(i)))
            })
        }
        $(document).mousedown(function(r) {
            for (var f = $(r.target), u = t; u != u.parent;) {
                if (u = u.parent, !i.$eJ(u)) break;
                u.F && typeof u.F.$4U == "function" && u.F.$4U()
            }
            n.$4U(f)
        });
        $(document).keydown(function(t) {
            var r = $(t.target),
            i;
            if (t.keyCode == n.KEY.ESC) i = n.wndManager.getActive(),
            i && i.closable && (i.$d("messagebox") ? i.triggerNO() : i.$s("esc", [t]) !== !1 && (i.onEsc && i.onEsc.apply(i), i.$7eButtonESC()));
            else if ((t.keyCode == n.KEY.ENTER || t.keyCode == n.KEY.SPACE) && r.is("a")) {
                r.click();
                return
            }
        })
    });
    n.loadingColors = {
        "default": ["fff", "444"],
        metro_blue: ["fff", "444"],
        metro_dark_blue: ["fff", "444"],
        metro_gray: ["fff", "444"],
        metro_green: ["fff", "444"],
        metro_orange: ["fff", "444"],
        flick: ["fff", "444"],
        blitzer: ["fff", "444"],
        smoothness: ["fff", "444"],
        hot_sneaks: ["fff", "2c4359"],
        black_tie: ["f9f9f9", "222"],
        cupertino: ["f2f5f7", "362b36"],
        dot_luv: ["111111", "d9d9d9"],
        eggplant: ["3d3644", "fff"],
        dark_hive: ["000", "fff"],
        trontastic: ["000", "fff"],
        ui_darkness: ["000", "fff"],
        excite_bike: ["eee", "222"],
        ui_lightness: ["eee", "222"],
        humanity: ["f4f0ec", "1e1b1d"],
        le_frog: ["285c00", "fff"],
        mint_choc: ["201913", "fff"],
        overcast: ["c9c9c9", "000"],
        pepper_grinder: ["eceadf", "1f1f1f"],
        redmond: ["fcfdfd", "222"],
        start: ["fcfdfd", "222"],
        south_street: ["f5f3e5", "312e25"],
        sunny: ["f7f1e0", "383838"],
        swanky_purse: ["443113", "efec9f"],
        vader: ["121212", "eee"]
    };
    n.$HJ = '<i class="f-smtree-icon"><\/i>';
    n.$cw = '<i class="f-smtree-icon ui-icon collapse"><\/i>'
} (F, window),
function(n, t) {
    function h(n, t) {
        s[n] ? s[n].push(t) : s[n] = [t]
    }
    function f(n, r) {
        var u = s[n],
        f = !0;
        return i(r) && (r = []),
        u && $.each(u,
        function(n, i) {
            i.apply(t, r) === !1 && (f = !1)
        }),
        f
    }
    function yt(n) {
        return s[n]
    }
    function pt(n) {
        h("load", n)
    }
    function wt() {
        if (!d) {
            d = !0;
            n.$7d && (t.clearInterval(n.$7d), n.$7d = null);
            var i = $("#f_ui_icon");
            i.length && i.remove();
            f("load");
            g();
            bt();
            n.pageLoaded = !0;
            n.$7h.length && n.$sx(n.$7h)
        }
    }
    function bt() {
        var n = $("#f_loading_mask"),
        t = $("#f_loading");
        t.hide();
        n.hide()
    }
    function kt(n) {
        h("ready", n)
    }
    function g() {
        f("ready")
    }
    function dt(n) {
        h("ajaxready", n)
    }
    function gt() {
        f("ajaxready")
    }
    function ni(n) {
        h("beforeajax", n)
    }
    function ti() {
        return f("beforeajax", arguments)
    }
    function ii(n) {
        h("beforeajaxsuccess", n)
    }
    function ri() {
        return f("beforeajaxsuccess", arguments)
    }
    function ui() {
        n.$2("F.beforeAjaxError")
    }
    function fi() {
        return f("beforeajaxerror", arguments)
    }
    function ei() {
        n.$2("F.beforeUnload")
    }
    function nt(t, i, r) {
        var u, f;
        if (n.enableShim && t) {
            u = {
                top: n.$cH,
                left: n.$4w,
                width: n.$4a,
                height: n.$4O
            };
            r && $.extend(u, r);
            var e = i.position(),
            o = i.$1(!0),
            s = i.$4(!0);
            t.css({
                top: e.top + u.top,
                left: e.left + u.left,
                width: o + u.width,
                height: s + u.height
            });
            f = i.css("z-index");
            f && t.css("z-index", f)
        }
    }
    function oi(n) {
        var t = $("#f_ajax_loading");
        t.length || (t = $("<div>", {
            id: "f_ajax_loading",
            "class": "f-ajax-loading"
        }).$7("body"));
        n || (n = u.loading);
        t.html(n);
        t.css({
            left: ($(document).$V() - t.$1(!0)) / 2
        }).show()
    }
    function si() {
        $("#f_ajax_loading").hide()
    }
    function hi(t, i) {
        var f = $("#f_ajax_loading_mask_mask"),
        e = $("#f_ajax_loading_mask"),
        r,
        o;
        e.length || (f = $("<div>", {
            id: "f_ajax_loading_mask_mask",
            "class": "f-loading-mask ui-widget ui-widget-content"
        }).$7("body"), e = $("<div>", {
            id: "f_ajax_loading_mask",
            "class": "f-loading",
            html: '<div class="f-loading-img"><img src="' + n.loadingImage + '"/><\/div><div class="f-loading-text"><\/div>'
        }).$7("body"), f.css("opacity", .65));
        n.enableShim && (r = $("#f_ajax_loading_shim"), r.length || (r = $("<iframe>", {
            "class": "f-shim",
            id: "f_ajax_loading_shim"
        }), r.insertBefore(f)));
        o = e.$c(".f-loading-text");
        t ? (i || (i = u.loading), o.html(i)) : o.html("");
        f.show();
        e.show();
        n.enableShim && (r.css("display", "block"), nt(r, f, {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        }))
    }
    function ci() {
        $("#f_ajax_loading_mask_mask").hide();
        $("#f_ajax_loading_mask").hide();
        n.enableShim && $("#f_ajax_loading_shim").hide()
    }
    function e(n) {
        try {
            n.window;
            n.F
        } catch(t) {
            return ! 1
        }
        return n.window && n.F && n.F.fineui ? !0 : !1
    }
    function li(n) {
        return n ? n.replace(/<[^>]*>/g, "") : ""
    }
    function ai() {
        var t = $.makeArray(arguments),
        s = t[0],
        h,
        n,
        f,
        l;
        if (r(s) && (/^_self|_parent|_top$/.test(t[0]) || c(0, "_self", t), s = {
            target: t[0],
            message: t[1],
            title: t[2],
            messageIcon: t[3]
        }), h = o(s.target), e(h)) {
            if (n = $.extend({
                positionX: "right",
                positionY: "bottom",
                positionSideSpace: 5
            },
            s, {
                messageType: "notify",
                fixedPosition: !0
            }), i(n.title) && (n.title = u.notifyTitle), i(n.bodyPadding) && (n.bodyPadding = 10), i(n.modal) && (n.modal = !1), i(n.displayMilliseconds) && (n.displayMilliseconds = 5e3), f = n.hide, f && delete n.hide, l = new h.F.MessageBox(n), f) l.on("hide",
            function() {
                r(f) ? new Function(f)() : f.apply(h)
            });
            return l
        }
    }
    function vi() {
        function h(t) {
            var r = n[t];
            i(r) || (n.promptConfig[t] = r, delete n[t])
        }
        var t = $.makeArray(arguments),
        l = t[0],
        a,
        n,
        f,
        s;
        if (r(l) && (/^_self|_parent|_top$/.test(t[0]) || c(0, "_self", t), l = {
            target: t[0],
            message: t[1],
            title: t[2],
            messageIcon: t[3],
            ok: t[4],
            cancel: t[5],
            multiLine: t[6],
            multiLineHeight: t[7]
        }), a = o(l.target), e(a)) return n = $.extend({},
        l, {
            messageType: "prompt"
        }),
        i(n.title) && (n.title = u.promptTitle),
        n.promptConfig = {},
        h("multiLine"),
        h("multiLineHeight"),
        h("defaultValue"),
        h("required"),
        h("inputType"),
        f = n.ok,
        s = n.cancel,
        (f || s) && (n.handler = function(n, t) {
            var u = this,
            i = u.getPromptValue();
            t === "cancel" ? s && (r(s) ? new Function(s)(i) : s.apply(u, [i])) : f && (r(f) ? new Function(f)(i) : f.apply(u, [i]))
        },
        delete n.ok, delete n.cancel),
        new a.F.MessageBox(n)
    }
    function yi() {
        var n = $.makeArray(arguments),
        s = n[0],
        h,
        t,
        f;
        if (r(s) && (/^_self|_parent|_top$/.test(n[0]) || c(0, "_self", n), s = {
            target: n[0],
            message: n[1],
            title: n[2],
            messageIcon: n[3],
            ok: n[4]
        }), h = o(s.target), e(h)) return t = $.extend({},
        s, {
            messageType: "alert"
        }),
        i(t.title) && (t.title = u.alertTitle),
        f = t.ok,
        f && (t.handler = function(n, t) {
            var i = this;
            t === "ok" && (r(f) ? new Function(f)() : f.apply(i))
        },
        delete t.ok),
        new h.F.MessageBox(t)
    }
    function pi() {
        var t = $.makeArray(arguments),
        h = t[0],
        l,
        n,
        f,
        s;
        if (r(h) && (/^_self|_parent|_top$/.test(t[0]) || c(0, "_self", t), h = {
            target: t[0],
            message: t[1],
            title: t[2],
            messageIcon: t[3],
            ok: t[4],
            cancel: t[5]
        }), l = o(h.target), e(l)) return n = $.extend({},
        h, {
            messageType: "confirm"
        }),
        i(n.title) && (n.title = u.confirmTitle),
        i(n.messageIcon) && (n.messageIcon = "question"),
        f = n.ok,
        s = n.cancel,
        (f || s) && (n.handler = function(n, t) {
            var i = this;
            t === "cancel" ? s && (r(s) ? new Function(s)() : s.apply(i)) : f && (r(f) ? new Function(f)() : f.apply(i))
        },
        delete n.ok, delete n.cancel),
        new l.F.MessageBox(n)
    }
    function wi(n, t) {
        $("#" + n).replaceWith($(t))
    }
    function bi(n) {
        $(n).$7(document.forms[0] || document.body)
    }
    function ki(n, t, r) {
        var u = $("#" + n);
        u.length ? u.val(t) : (i(r) && (r = document.forms[0] || document.body), $("<input>", {
            type: "hidden",
            id: n,
            name: n,
            value: t
        }).$7(r))
    }
    function di(n) {
        var t = $("#" + n);
        return t.length ? t.val() : ""
    }
    function gi(n) {
        $("#" + n).remove()
    }
    function nr(i) {
        var f = this,
        r = !1,
        u;
        return u = i && i.length ? i.$c("iframe") : $("iframe"),
        $.each(u,
        function(i, u) {
            var h = u.contentWindow,
            f, o, s, l, a, c, v;
            if (!e(h)) return ! 0;
            if (f = h.F, f.formChangeConfirm && f.util.$cF()) if (t.confirm(n.wnd.formChangeConfirmMsg)) f.beforeunloadCheck = !1;
            else return r = !0,
            !1;
            if (o = f.util.$1l("beforeunload"), o) for (s = 0, l = o.length; s < l; s++) if (a = o[s], c = a.apply(h), c) if (t.confirm(c)) f.beforeunloadCheck = !1;
            else return r = !0,
            !1;
            return v = f.util.$cg(),
            v ? (f.beforeunloadCheck = !0, r = !0, !1) : void 0
        }),
        r
    }
    function tr() {
        var n = !1;
        return ct(function(t) {
            if (t.$d("container") && t.isDirty()) return n = !0,
            !1
        }),
        n
    }
    function ir(t, r, f, e) {
        var a = o(r),
        c = !0,
        h = null,
        l,
        s;
        return (i(f) && (f = !0), i(e) && (e = !1), $.each(t,
        function(t, i) {
            var u = n(i),
            r;
            u && (r = u.isValid(), r[0] || (c = !1, h == null && (h = r[1])))
        }), !c) ? (f ? (l = '<div class="f-messagebox-errorfield">' + h.fieldLabel + '<\/div><div class="f-messagebox-errormsg">' + h.$H.attr("data-errormsg") + "<\/div>", s = {
            message: l,
            messageIcon: "information",
            ok: function() {
                h.focus(!0, 200)
            }
        },
        e ? (s.messageIcon = "", s.messageAlign = "center", s.buttonPlain = !0, s.header = !1) : s.title = u.formAlertTitle, a.F.alert(s)) : h.focus(!0, 200), !1) : !0
    }
    function rr(n, t) {
        var i = l(n, t);
        i === -1 && t.push(n)
    }
    function ur(n, t) {
        var i = l(n, t);
        i >= 0 && t.splice(i, 1)
    }
    function c(n, t, i) {
        it(t) ? Array.prototype.splice.apply(i, $.merge([n, 0], t)) : i.splice(n, 0, t)
    }
    function fr(n, t) {
        t.splice(n, 1)
    }
    function l(n, t) {
        return $.inArray(n, t)
    }
    function er(n, t) {
        return $.inArray(n, t) >= 0
    }
    function or(t) {
        typeof t == "string" && (t = n(t));
        var i = t.getValue();
        return t.$d("label") && (i = i.replace(/<\/?span[^>]*>/ig, "")),
        i
    }
    function o(n) {
        var i = t;
        return n === "_self" ? i = t: n === "_parent" ? i = parent: n === "_top" && (i = top),
        i
    }
    function sr(n) {
        for (var i = [], t = 0; t < n.length; t++) i[t] = new Image,
        i[t].src = n[t]
    }
    function hr(n, t, i) {
        var f = $("#" + n),
        r,
        u,
        e;
        f.length && f.remove();
        u = document.getElementsByTagName("head")[0];
        i ? (r = document.createElement("link"), r.setAttribute("rel", "stylesheet"), r.setAttribute("id", n), r.setAttribute("href", t), u.appendChild(r)) : (r = document.createElement("style"), r.setAttribute("id", n), u.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t: (e = document.createTextNode(t), r.appendChild(e)))
    }
    function cr(n, t, i) {
        var u = $("#" + n),
        r,
        f,
        e;
        u.length && u.remove();
        i ? (r = document.createElement("script"), r.setAttribute("id", n), r.setAttribute("src", t)) : (r = document.createElement("script"), r.setAttribute("id", n), f = document.createTextNode(t), r.appendChild(f));
        e = document.getElementsByTagName("head")[0];
        e.appendChild(r)
    }
    function tt(n) {
        return $("<div>").text(n).html()
    }
    function lr(n) {
        return $("<div>").html(n).text()
    }
    function ar(n) {
        var i = {},
        t, r;
        if (n && n.length) for (t = 0, r = n.length; t < r; t++) i[n[t]] = !0;
        return i
    }
    function vr(n, t, i) {
        var s = u.$7V(n),
        h = u.$7V(t),
        e,
        r,
        f,
        o;
        if (n.length) for (r = 0, f = n.length; r < f; r++) e = n[r],
        h[e] || i.apply(this, [e, !1]);
        if (t.length) for (r = 0, f = t.length; r < f; r++) o = t[r],
        s[o] || i.apply(this, [o, !0])
    }
    function yr() {
        var n = t.document.body;
        n.scroll ? n.scroll = "no": n.style.overflow = "hidden"
    }
    function pr(n, t) {
        $.each(t,
        function(t, r) {
            i(n[t]) && (n[t] = r)
        })
    }
    function wr(n, t, r) {
        return r ? $.each(t,
        function(t, r) {
            i(r) || l(r, n) !== -1 || n.push(r)
        }) : $.merge(n, t),
        n
    }
    function br(n) {
        return $.isFunction(n)
    }
    function it(n) {
        return $.isArray(n)
    }
    function rt(n) {
        return $.type(n) === "boolean"
    }
    function a(n) {
        return $.type(n) === "number" && !isNaN(n)
    }
    function v(n) {
        return $.type(n) === "number" && isNaN(n)
    }
    function r(n) {
        return $.type(n) === "string"
    }
    function i(n) {
        return $.type(n) === "undefined" || n === null
    }
    function ut(n) {
        return $.type(n) === "date"
    }
    function ft(n) {
        return $.isPlainObject(n)
    }
    function kr(n) {
        return $.isEmptyObject(n)
    }
    function dr(n) {
        return i(n) || n === ""
    }
    function gr(n) {
        return $.type(n) === "object" && (n instanceof jQuery || n instanceof Element)
    }
    function nu() {
        for (var i, t = arguments[0], n = 0; n < arguments.length - 1; n++) i = new RegExp("\\{" + n + "\\}", "gm"),
        t = t.replace(i, arguments[n + 1]);
        return t
    }
    function tu(n) {
        return ot("%", n) ? parseFloat(n) * .01 : n
    }
    function et(n, t) {
        return t.indexOf(n) === 0
    }
    function ot(n, t) {
        var i = !1,
        r = t.lastIndexOf(n);
        return r >= 0 && (i = r + n.length === t.length),
        i
    }
    function st(n) {
        for (var u = [], i, f = $.trim(n + "").split(" "), t = 0, r = f.length; t < r; t++)(i = $.trim(f[t]), i) && u.push(i);
        return u
    }
    function iu(n, i) {
        for (var r = 0; r < n; r++) i.apply(t, [r])
    }
    function y(n, t) {
        for (var i = "",
        r = 0; r < t; r++) i += n;
        return i
    }
    function ru(n, t, r) {
        return (i(t) && (t = 2), i(r) && (r = "0"), n += "", n.length < t) ? y(r, t - n.length) + n: n
    }
    function uu(n) {
        for (var r = [], i, u, e = st(n), t = 0, f = e.length; t < f; t++) i = e[t],
        /^\-?\d+px$/.exec(i) ? r.push(i) : (u = parseInt(i, 10), v(u) || r.push(u + "px"));
        return r.join(" ")
    }
    function fu(n) {
        return n.$1(!0) - n.$V()
    }
    function eu(n) {
        return n.$4(!0) - n.$q()
    }
    function ou(n) {
        return n.$1(!0) - n.innerWidth()
    }
    function su(n) {
        return n.$4(!0) - n.innerHeight()
    }
    function hu(n) {
        return n.$1(!0) - n.$1()
    }
    function cu(n) {
        return n.$4(!0) - n.$4()
    }
    function lu() {
        if (p === -1) {
            var n = $("<p>").css({
                width: 100,
                height: 100,
                "overflow-y": "scroll"
            }).$7("body");
            p = n[0].offsetWidth - n[0].clientWidth;
            n.remove()
        }
        return p
    }
    function w(n, i) {
        if (r(i) && (i = {
            id: arguments[1],
            iframeUrl: arguments[2],
            title: arguments[3],
            icon: arguments[4],
            createToolbar: arguments[5],
            refreshWhenExist: arguments[6],
            iconFont: arguments[7]
        }), i.id = n.id + "_" + i.id, i = $.extend({
            iframe: !0,
            closable: !0
        },
        i), i.createToolbar) {
            var u = i.createToolbar.apply(t, [i]);
            u && (i.tbar = u)
        }
        n.addTab(i, !0)
    }
    function au(r, u, f, e, o, s, h, c, l) {
        function p(t) {
            t.on("nodeclick",
            function(r, s) {
                var a = t.$m(s),
                v;
                if (a.href) {
                    if (!i(c) && (v = u.id + "_" + a.id, u.getVisibleTabCount() >= c && !u.getTab(v))) {
                        n.alert(l);
                        r.preventDefault();
                        return
                    }
                    e && (h.location.hash = "#" + a.href);
                    w(u, {
                        iframeUrl: a.href,
                        icon: a.icon,
                        iconFont: a.iconFont,
                        title: a.text,
                        id: a.id,
                        createToolbar: f,
                        refreshWhenExist: o
                    });
                    r.preventDefault()
                }
            })
        }
        var v, a;
        f && ft(f) ? (c = f.maxTabCount, l = f.maxTabMessage, h = f.hashWindow, s = f.refreshWhenTabChange, o = f.refreshWhenExist, e = f.updateHash, f = f.createToolbar) : rt(f) && (l = c, c = h, h = s, s = o, o = e, e = f, f = undefined);
        h || (h = t);
        i(s) && (s = !1);
        i(o) && (o = !1);
        i(e) && (e = !0);
        r.$d("accordion") ? $.each(r.items,
        function(n, t) {
            var i = t.items[0];
            i && i.$d("tree") && p(i)
        }) : r.$d("tree") && p(r);
        u.on("tabchange",
        function(n, t) {
            var r = "#" + (t.getIFrameUrl() || ""),
            i,
            u;
            r !== h.location.hash && (e && (h.location.hash = r), s && (i = t.getIFrameWindow(), i && (u = i.location.href, /^http(s?):\/\//.test(u) && i.location.reload())))
        });
        if (v = h.location.hash.substr(1), v) {
            a = !1;
            function y(n, t) {
                var r, e, i;
                if (!a && t.children && t.children.length) for (r = 0, e = t.children.length; r < e; r++) if (i = t.children[r], i.leaf) {
                    if (i.href === v) {
                        n.expandNodePath(i);
                        n.selectNode(i);
                        w(u, {
                            iframeUrl: i.href,
                            icon: i.icon,
                            iconFont: i.iconFont,
                            title: i.text,
                            id: i.id,
                            createToolbar: f
                        });
                        a = !0;
                        return
                    }
                } else y(n, i)
            }
            r.$d("accordion") ? $.each(r.items,
            function(n, t) {
                var i = t.items[0];
                if (i && i.$d("tree") && (y(i, i.getRootNode()), a)) return t.expand(),
                !1
            }) : r.$d("tree") && y(r, r.getRootNode())
        }
    }
    function ht(n, t, r) {
        var e, u, f;
        if (i(t)) return e = document.cookie ? document.cookie.split("; ") : [],
        u = n ? "": {},
        $.each(e,
        function(t, i) {
            var r = i.split("="),
            f = decodeURIComponent($.trim(r[0])),
            e = decodeURIComponent($.trim(r[1]));
            if (n) {
                if (n === f) return u = e,
                !1
            } else u[f] = e
        }),
        u;
        r = $.extend({
            path: "/"
        },
        r || {});
        a(r.expires) && (f = new Date, f.setTime(f.getTime() + r.expires * 864e5));
        document.cookie = [encodeURIComponent(n), "=", encodeURIComponent(t), r.expires ? "; expires=" + f.toUTCString() : "", r.path ? "; path=" + r.path: "", r.domain ? "; domain=" + r.domain: "", r.secure ? "; secure": ""].join("")
    }
    function vu(n, t) {
        t = $.extend({
            path: "/",
            expires: -1
        },
        t || {});
        ht(n, "", t)
    }
    function yu(n, t, i) {
        var r = n.$c(t);
        r.length ? r.replaceWith(i) : i.$7(n)
    }
    function pu(n, t, i) {
        var r = n.$c(t);
        r.length ? r.replaceWith(i) : i.prependTo(n)
    }
    function wu(n) {
        var t = n[0];
        return t.scrollWidth > t.clientWidth
    }
    function bu(n) {
        var t = n[0];
        return t.scrollHeight > t.clientHeight
    }
    function ku(n) {
        var t = n[0].getBoundingClientRect();
        return t.width ? t.width: t.right - t.left
    }
    function du(n) {
        var t = n[0].getBoundingClientRect();
        return t.height ? t.height: t.bottom - t.top
    }
    function gu(n) {
        var i = $(n),
        t,
        r;
        return b(i),
        t = $("<div>").$7(i),
        r = ku(t),
        t.remove(),
        Math.floor(r)
    }
    function nf(t) {
        var r = $(t),
        i,
        u;
        return b(r),
        i = $("<div>").css({
            position: "absolute",
            height: "100%",
            width: 0,
            top: 0,
            left: 0
        }),
        n.$4S && i.css({
            width: "100%"
        }),
        i.$7(r),
        u = du(i),
        i.remove(),
        u -= k(r, "padding-top"),
        u -= k(r, "padding-bottom"),
        Math.floor(u)
    }
    function b(t) {
        if (n.$4y) {
            var i = t.css("overflow");
            i === "auto" && t.scrollLeft() == 0 && t.scrollTop() == 0 && (t.css("overflow", "hidden"), t[0].scrollWidth, t.css("overflow", "auto"))
        }
    }
    function tf(i, r) {
        var u = null;
        r = r || "resize";
        $(t).on(r,
        function() {
            n.$H9 || (u && (t.clearTimeout(u), u = null), u = t.setTimeout(function() {
                i.apply(t)
            },
            500))
        })
    }
    function rf(n) {
        for (var i = n.attributes,
        r = {},
        t = 0; t < i.length; t++) i[t].specified && !/^jQuery\d+/.test(i[t].name) && (r[i[t].name] = i[t].value);
        return r
    }
    function uf(t) {
        r(t) ? n(t).reset() : ct(function(n) {
            n.$d("container") && n.reset()
        })
    }
    function ff(n, t) {
        return !! n.closest(t).length
    }
    function ef(n, t) {
        return n.closest(t)
    }
    function ct(t) {
        $.each(n.$eG,
        function(n, i) {
            if (i.$d && i.renderTo) {
                var r = t.apply(i, [i]);
                if (r === !1) return ! 1
            }
        })
    }
    function of(n, t) {
        var i = {},
        r = t.split(";");
        $.each(r,
        function(n, t) {
            var r = $.trim(t).split(":");
            r.length === 2 && (i[$.trim(r[0])] = $.trim(r[1]))
        });
        $(n).css(i)
    }
    function sf(n, r) {
        var u = t.location.search,
        f, o, e;
        return i(r) || (u = r, f = r.lastIndexOf("?"), f >= 0 && (u = r.substr(f))),
        n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
        o = new RegExp("[\\?&]" + n + "=([^&#]*)"),
        e = o.exec(u),
        e == null ? "": decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    function hf(n, t, i) {
        var u = n[0],
        f = n.val().length,
        r;
        a(t) || (t = f);
        a(i) || (i = f);
        u.setSelectionRange ? u.setSelectionRange(t, i) : u.createTextRange && (r = u.createTextRange(), r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", t), r.select())
    }
    function k(n, t) {
        var i = parseInt(n.css(t), 10);
        return v(i) && (i = 0),
        i
    }
    function lt(n) {
        return n && r(n) && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(n) && (n = new Date(n)),
        n
    }
    function cf(n, t) {
        var i, r;
        if (t = lt(t), ut(t)) return t;
        if (!t) return undefined;
        if (n) {
            n.indexOf("d") === -1 && (n += "-dd", t += "-01");
            try {
                i = fecha.parse(t, at(n))
            } catch(u) {}
        }
        return i || $.each(["YYYY-MM-DD", "YYYYMMDD", "YYYY/MM/DD", "YYYY-M-D", "YYYYMD", "YYYY/M/D", "YY-MM-DD", "YYMMDD", "YY/MM/DD", "YY-M-D", "YYMD", "YY/M/D"],
        function(n, r) {
            try {
                i = fecha.parse(t, r)
            } catch(u) {}
            if (i) return ! 1
        }),
        i || (r = Date.parse(t), v(r) || (i = new Date(r))),
        i
    }
    function lf(n, t) {
        var i = "",
        r;
        try {
            r = !1;
            n.indexOf("y") === -1 && (n = "yyyy-" + n, r = !0);
            i = fecha.format(t, at(n));
            r && (i = i.substr(5))
        } catch(u) {}
        return i
    }
    function at(n) {
        return n.indexOf("yy") >= 0 && (n = n.replace(/yyyy/g, "YYYY").replace(/yy/g, "YY")),
        n.indexOf("d") >= 0 && (n = af(n)),
        n
    }
    function af(n) {
        function f() {
            t && (t == 1 ? i.push("D") : t == 2 ? i.push("DD") : i.push(y("d", t)), t = 0)
        }
        for (var u, i = [], t = 0, r = 0, e = n.length; r < e; r++) if (u = n.charAt(r), u === "d") {
            t++;
            continue
        } else f(),
        i.push(u);
        return f(),
        i.join("")
    }
    function vf(n) {
        return n += "",
        n.replace(/[^-A-Za-z0-9_]/ig, "_")
    }
    function yf(n) {
        return n += "",
        n = n.replace(/"/g, "&quot;"),
        tt(n)
    }
    function pf(n, t, r, u) {
        function f(n) {
            return n += "",
            n.replace(/"/g, '\\"')
        }
        return i(u) ? $() : n.$c(t + "[" + r + '="' + f(u) + '"]')
    }
    function vt(n, t, i) {
        var r = {};
        return n && $.each(n,
        function(n, u) {
            if (n = n.toLowerCase(), t && !et("data-", n) && (n = "data-" + n), i && n === i) return ! 0;
            r[n] = u
        }),
        r
    }
    function wf(n, t, i, r) {
        var u = vt(t, i, r);
        n.attr(u)
    }
    function bf(t, i, r, u) {
        var s = n.Component.prototype,
        h = s.$HY,
        c = s.$et,
        l = s.$1u,
        f, e, a = t.find(i),
        o = 0;
        return a.each(function() {
            var n = $(this);
            n.$W(h + " " + c + " " + l);
            n.is(":visible") && (f || (f = n), e = n, o++)
        }),
        u && o > 1 && t.$3("f-hasmany"),
        f && f.length && f.$3(h),
        e && e.length && e.$3(c),
        r && o > 2 && a.each(function() {
            var n = $(this);
            n.is(":visible") && (n.$5(h) || n.$5(c) || n.$3(l))
        }),
        o
    }
    function kf(n) {
        return JSON.stringify(n)
    }
    function df(t, i) {
        var r = [];
        return t.$c(i).each(function() {
            var t = n($(this).attr("id"));
            r.push(t)
        }),
        r
    }
    function gf(n, t, i, r, u, f, e) {
        var s, o, h = !1,
        c;
        return n ? t > i ? t < r ? o = u + f: h = !0 : o = u - t: t > r ? t < i ? o = u - t: h = !0 : o = u + f,
        h && (c = Math.max(r, i), c >= e ? i > r ? (s = i, o = u - s) : (s = r, o = u + f) : (s = Math.min(t, i + r + f), o = u - (s - r - f))),
        [s, o]
    }
    var u = n.util,
    s = {},
    d = !1,
    p = -1;
    $.extend(u, {
        alertTitle: "Alert dialog",
        confirmTitle: "Confirm dialog",
        promptTitle: "Please enter value",
        notifyTitle: "Notify",
        formAlertTitle: "Form Invalid",
        loading: "Loading...",
        $3U: vf,
        $18: oi,
        $1D: si,
        $5i: ci,
        $5Y: hi,
        load: pt,
        ready: kt,
        ajaxReady: dt,
        beforeAjax: ni,
        beforeAjaxSuccess: ii,
        beforeAjaxError: ui,
        beforeUnload: ei,
        $1l: yt,
        $Hu: wt,
        $5K: g,
        $5E: ti,
        $59: ri,
        $5J: fi,
        $5r: gt,
        notify: ai,
        prompt: vi,
        alert: yi,
        confirm: pi,
        isFUN: br,
        isARR: it,
        isBOO: rt,
        isNUM: a,
        isNAN: v,
        isSTR: r,
        isUND: i,
        isDAT: ut,
        isELE: gr,
        isEMP: dr,
        isPOBJ: ft,
        isEOBJ: kr,
        addMainTab: w,
        initTreeTabStrip: au,
        $ce: li,
        $16: wi,
        $WM: bi,
        $1S: ki,
        $1U: di,
        $1y: gi,
        $cg: nr,
        $cF: tr,
        $4G: ir,
        $5m: rr,
        $5q: ur,
        $ex: fr,
        $9: c,
        $H3: l,
        $h: er,
        $1o: or,
        $3D: o,
        $M1: sr,
        $c3: hr,
        $cW: cr,
        $3B: tt,
        $cM: lr,
        $7V: ar,
        $1K: yr,
        $Hx: pr,
        $ez: wr,
        $e2: nu,
        $5x: tu,
        $4$: et,
        $eg: ot,
        $5p: st,
        $3K: iu,
        $Hz: y,
        $e9: ru,
        $1G: of,
        $er: uu,
        $3R: fu,
        $HB: eu,
        $Mk: ou,
        $5w: su,
        $s4: hu,
        $5O: cu,
        $eh: yu,
        $7H: pu,
        $e3: gu,
        $7s: nf,
        $71: lu,
        $He: tf,
        $5u: rf,
        $46: wu,
        $4f: bu,
        $1C: ht,
        $1T: vu,
        $W2: uf,
        $e8: ff,
        $MA: ef,
        $5R: hf,
        $i: k,
        $eO: cf,
        $eR: lf,
        $5C: lt,
        $Wk: sf,
        $eJ: e,
        $5U: b,
        $4R: pf,
        $e5: yf,
        $Me: wf,
        $30: vt,
        $Hk: bf,
        $Y: kf,
        $H$: nt,
        $W9: vr,
        $cG: df,
        $WJ: gf
    })
} (F, window),
function(n) {
    var r = n.isUND,
    i = n.isSTR,
    u = n.isNUM,
    t = n.util;
    n.format = {
        capitalize: function(n) {
            return n.charAt(0).toUpperCase() + n.substr(1)
        },
        date: function(n, r) {
            return i(n) && (n = new Date(n)),
            t.$eR(r, n)
        },
        dateRenderer: function(t) {
            return function(i) {
                return n.format.date(i, t)
            }
        },
        ellipsis: function(n, t) {
            return n && n.length > t && (n = n.substr(0, t - 3) + "..."),
            n
        },
        ellipsisRenderer: function(n) {
            return function(i) {
                return t.ellipsis(i, n)
            }
        },
        fileSize: function(n) {
            var t = 1024,
            i = t * 1024,
            r = i * 1024,
            u;
            return n || (n = 0),
            u = "",
            n < t ? n === 1 ? "1 byte": n + " bytes": n < i ? (n / t).toFixed(2) + " KB": n < r ? (n / i).toFixed(2) + " MB": (n / r).toFixed(2) + " GB"
        },
        htmlEncode: function(n) {
            return t.$3B(n)
        },
        htmlDecode: function(n) {
            return t.$cM(n)
        },
        lowercase: function(n) {
            return (n + "").toLowerCase()
        },
        uppercase: function(n) {
            return (n + "").toUpperCase()
        },
        nl2br: function(n) {
            return n && (n = n.replace(/\r?\n/g, "<br/>")),
            n
        },
        stripScripts: function(n) {
            return n && (n = n.replace(/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, "")),
            n
        },
        stripTags: function(n) {
            return n && (n = n.replace(/<\/?[^>]+>/ig, "")),
            n
        },
        trim: function(n) {
            return $.trim(n)
        }
    }
} (F),
function(n) {
    n.ajax = {
        networkErrorMsg: "Network error, please refresh the page and try again!",
        timeoutErrorMsg: "Request timeout, please refresh the page and try again!",
        errorMsg: "Error! {0} ({1})",
        errorWindow: null
    }
} (F, window),
function(n) {
    function r(i) {
        var r = new n.Window(i);
        r.on("beforeclose",
        function() {
            if (t.$eJ(i.$3m)) {
                var n = i.$4K;
                if (n.$Hq("beforeclose")) return n.$s("beforeclose")
            }
        });
        r.on("close",
        function() {
            if (t.$eJ(i.$3m)) {
                var n = i.$4K;
                n.$Hq("close") && n.$s("close")
            }
        });
        n[i.id] = r
    }
    function u(n) {
        if (n.$3s()) {
            var i = t.$3D(n.target);
            n = t.$eJ(i) ? i.F[n.$3S] : null
        }
        return n
    }
    function f(n) {
        function u(n) {
            return n && n.$d("window") && !n.$d("messagebox")
        }
        function f(n) {
            if (!t.$eJ(n)) return ! 1;
            var i = n.F.wndManager.getActive();
            return i && !u(i) && (i = null, $.each(n.F.wndManager.getSorted(!0),
            function(n, t) {
                if (u(t)) return i = t,
                !1
            })),
            i
        }
        var r = parent.window,
        i = f(r);
        return i && (i.$3m && !n && (r = i.$3m, i = i.$4K), i.window = r),
        i
    }
    function i(i, r) {
        var u = n.getActiveWindow(),
        f;
        u && (t.$eJ(u.window) ? u[i].call(u, r) : (f = n.getActiveWindow(!0), f.hide()))
    }
    var e = n.isUND,
    o = n.isSTR,
    s = n.isNUM,
    t = n.util;
    n.wnd = {
        closeButtonTooltip: "Close this window",
        formChangeConfirmMsg: "Current form has been modified, abandon changes?",
        $Wn: r,
        $4P: u,
        getActiveWindow: f
    };
    n.activeWnd = n.activeWindow = {
        close: function() {
            i("close")
        },
        hidePostBack: function() {
            i("hidePostBack")
        },
        hide: function() {
            i("hide")
        },
        hideRefresh: function() {
            i("hideRefresh")
        },
        hideExecuteScript: function(n) {
            i("hideExecuteScript", n)
        },
        executeScript: function(n) {
            i("executeScript", n)
        }
    }
} (F, window),
function(n, t) {
    function a() {
        var r = arguments[0],
        u = arguments[1],
        i,
        t;
        return r.$3s() ? (i = [], arguments.length > 2 && (i = $.grep(arguments,
        function(n, t) {
            return t > 1
        })), t = n.wnd.$4P(r), t && t[u].apply(t, i), !0) : !1
    }
    var u = n.isUND,
    e = n.isSTR,
    f = n.isNUM,
    w = n.isNAN,
    v = n.isARR,
    c = n.isELE,
    h = n.isEMP,
    b = n.isDAT,
    g = n.isBOO,
    p = n.isFUN,
    s = n.isPOBJ,
    d = n.isEOBJ,
    i = n.util,
    nt = n.isIE,
    y = n.isIE8,
    l = n.isIE89,
    k = n.isChrome,
    r = r,
    o = function(n) {
        return u(n) || n instanceof $.Event
    };
    n.Base = Class.extend({
        id: "",
        fineui: n.fineui,
        type: "base",
        init: function(n) {
            var t = this;
            u(n) && (n = {});
            u(n.items) && (n.items = []);
            t.options = n;
            $.extend(t, n);
            t.$WY()
        },
        $d: function(n) {
            return this.isType(n)
        },
        isType: function(t) {
            var r = this,
            i;
            return t === r.type ? !0 : (i = n.$ep(t), i && r instanceof i ? !0 : !1)
        },
        $WY: function() {
            var t = this;
            t.id || (t.id = n.$3Q());
            n.$eG[t.id] = this
        }
    });
    n.$c6 = {
        getActiveItem: function() {
            var t = this,
            n;
            return $.each(t.items,
            function(t, i) {
                if (i.isActived()) return n = i,
                !1
            }),
            n
        },
        getActiveItemIndex: function() {
            var n = this,
            t = n.getActiveItem();
            return t ? i.$H3(t, n.items) : -1
        },
        getActiveItemId: function() {
            var t = this,
            n = t.getActiveItem();
            return n ? n.id: ""
        },
        nextValidItemIndex: function(n, t) {
            var i = this,
            r, u = i.items.length;
            for (n++; n < u;) {
                if (r = i.items[n], r.$L() && r.isEnabled()) break;
                n++
            }
            return n = n >= u ? -1 : n,
            t && n === -1 && (n = i.firstValidItemIndex()),
            n
        },
        prevValidItemIndex: function(n) {
            var t;
            for (n--; n >= 0;) {
                if (t = this.items[n], t.$L() && t.isEnabled()) break;
                n--
            }
            return n
        },
        firstValidItemIndex: function() {
            var n = -1;
            return $.each(this.items,
            function(t, i) {
                if (i.$L() && i.isEnabled()) return n = t,
                !1
            }),
            n
        },
        nearValidItemIndex: function(n) {
            var t = this.nextValidItemIndex(n);
            return t < 0 && (t = this.prevValidItemIndex(n)),
            t
        }
    };
    n.Component = n.Base.extend({
        renderTo: "",
        cls: "",
        disabled: !1,
        ccls: "",
        $M: function(n) {
            return this.ccls + "-" + n
        },
        $HR: "ui-state-default",
        $A: "ui-state-disabled",
        $8: "ui-state-hover",
        $D: "ui-state-active",
        $eA: "ui-state-focus",
        $eV: "ui-state-error",
        $e7: "ui-widget-header",
        $u: "ui-widget-content",
        $eU: "ui-widget-content ui-widget",
        $j: "f-checked",
        $Hd: "f-noselect",
        $HM: "f-expanded",
        $HY: "f-first",
        $et: "f-last",
        $1u: "f-middle",
        tooltip: "",
        tooltipType: "qtip",
        tooltipTitle: "",
        tooltipHideMode: "auto",
        hidden: !1,
        hideMode: "display",
        displayRule: "",
        width: "auto",
        height: "auto",
        autoScroll: !1,
        inited: !1,
        domed: !1,
        rendered: !1,
        style: r,
        attrs: r,
        attrSelector: "",
        defaultItemType: "component",
        type: "component",
        init: function(n) {
            var t = this,
            i;
            t._super(n);
            t.renderTo && (t.doInit(), i = $(t.renderTo), t.$3Z(i), t.$v(), t.$k())
        },
        $v: function() {
            var n = this;
            n.afterAddToPage()
        },
        afterAddToPage: function() {
            this.domed = !0
        },
        doInit: function() {
            var n = this;
            n.inited || (n.inited = !0, n.$WN && $.each(n.$WN,
            function(t, i) {
                n.on(t, i)
            }), n.listeners && $.each(n.listeners,
            function(t, i) {
                n.on(t, i)
            }), n.initEl(), n.afterInitEl())
        },
        initEl: function() {
            var n = this;
            n.$e = n.el = $()
        },
        afterInitEl: function() {
            var t = this,
            i, r;
            t.$e && (t.$e.$3("f-cmp"), t.$4T(), i = t.$HW(), t.autoScroll ? i.css("overflow", "auto") : (t.autoScrollX && i.css("overflow-x", "auto"), t.autoScrollY && i.css("overflow-y", "auto")), n.$HC && (t.autoScroll || t.autoScrollX || t.autoScrollY) && i.css("-webkit-overflow-scrolling", "touch"), t.cls && t.$e.$3(t.cls), t.bls && t.$e.$3(t.bls), t.$e.$3("ui-widget"), t.style && (e(t.style) ? (r = t.$e.attr("style"), r ? t.$e.attr("style", r + " " + t.style) : t.$e.attr("style", t.style)) : t.$e.css(t.style)), t.tooltip && (t.tooltipType === "title" ? t.$e.prop("title", t.tooltip) : (t.$e.attr("data-qtip", t.tooltip), t.tooltipTitle && t.$e.attr("data-qtitle", t.tooltipTitle), t.tooltipHideMode != "auto" && t.$e.attr("data-qhide", t.tooltipHideMode))), t.attrs && t.setAttrs(t.attrs), t.disabled && t.afterInitElDisabled(), t.afterInitElHidden())
        },
        $4T: function() {
            var n = this;
            h(n.margin) || n.$e.css("margin", i.$er(n.margin));
            h(n.marginLeft) || n.$e.css("margin-left", i.$er(n.marginLeft));
            h(n.marginTop) || n.$e.css("margin-top", i.$er(n.marginTop));
            h(n.marginRight) || n.$e.css("margin-right", i.$er(n.marginRight));
            h(n.marginBottom) || n.$e.css("margin-bottom", i.$er(n.marginBottom))
        },
        setAttrs: function(n) {
            var t = this;
            t.attrs = n;
            t.$HN().attr(n)
        },
        setAttributes: function() {
            this.setAttrs.apply(t, arguments)
        },
        setAttr: function(n, t) {
            var i = this;
            $.extend(i.attrs, {
                key: t
            });
            i.$HN().attr(n, t)
        },
        setAttribute: function() {
            this.setAttr.apply(this, arguments)
        },
        getAttr: function(n) {
            return this.$HN().attr(n)
        },
        getAttribute: function() {
            return this.getAttr.apply(this, arguments)
        },
        getAttrEl: function() {
            return this.$HN()
        },
        $HN: function() {
            var t = this,
            n;
            return t.attrSelector && (n = t.$e.$c(t.attrSelector)),
            n && n.length || (n = t.$e),
            n
        },
        afterInitElDisabled: function() {
            var n = this;
            n.disable()
        },
        afterInitElHidden: function() {
            var n = this;
            n.hidden ? n.__hideEl() : n.__showEl()
        },
        remove: function() {
            function f() {
                delete n.$eG[r.id];
                r.$e.remove()
            }
            var r = this,
            t = r.parent,
            u;
            t && t.items ? (u = i.$H3(r, t.items), u >= 0 && (f(), i.$ex(u, t.items), t.$k(!0))) : f()
        },
        $3Z: function(n, t, i) {
            var e = this,
            h, o, s;
            if (n.fineui || (i = t, t = n, n = r), u(n) && u(i)) {
                e.$e.$7(t);
                return
            }
            n && (h = n.$7l);
            o = h ? t.children("." + h) : t.children();
            o.length ? f(i) ? (s = o.eq(i), e.$e.insertBefore(s)) : (s = o.last(), e.$e.insertAfter(s)) : e.$e.$7(t)
        },
        $HW: function() {
            return this.$e
        },
        $7A: function() {
            var i = this,
            t = n.wndManager.getZIndex();
            return i.$3g(function(n) {
                var i = n.$HO();
                if (i) return i > t && (t = i),
                !1
            }),
            t
        },
        $HO: function() {
            var n = this,
            t = 0,
            r;
            return n.$x && (r = n.$e.css("position"), i.$h(r, ["absolute", "fixed", "relative"]) && (t = parseInt(n.$e.css("z-index"), 10))),
            t
        },
        $3g: function(n) {
            for (var t = this,
            i; t;) if (t.parent) {
                if (t = t.parent, n && (i = n.apply(t, [t]), i === !1)) break
            } else break;
            return t
        },
        getTopParent: function() {
            return this.$3g.apply(this, arguments)
        },
        $Hi: function() {
            var n = "";
            return u(this.layout) || (n = e(this.layout) ? this.layout: this.layout.type),
            n
        },
        $5o: function(t) {
            function u() {
                n.$Hj || (n.$Hj = {
                    id: i.id,
                    layouted: {}
                })
            }
            function f() {
                n.$Hj && n.$Hj.id === i.id && (n.$Hj = r)
            }
            var i = this;
            u();
            t.apply(i);
            f()
        },
        doLayout: function(t) {
            var r = this,
            i;
            if (!n.$1s) {
                if (i = r, t && (i = r.$3g(function(n) {
                    if (n && f(n.width) && f(n.height) && !n.$d("accordionpane")) return ! 1
                })), n.$Hj) {
                    if (n.$Hj.layouted[i.id]) return;
                    n.$Hj.layouted[i.id] = !0
                }
                i.hidden || (i.__doLayout(), i.$s("layout"), i.$WQ())
            }
        },
        $k: function(n) {
            this.doLayout(n)
        },
        $WQ: function() {
            var n = this;
            n.rendered || (n.$x = n.rendered = !0, n.$s("render"), n.afterRender())
        },
        afterRender: function() {},
        getWidth: function() {
            return this.$e.$1(!0)
        },
        getHeight: function() {
            return this.$e.$4(!0)
        },
        setHeight: function(n) {
            var t = this;
            t.height = n;
            t.$x && t.$k(!0)
        },
        setWidth: function(n) {
            var t = this;
            t.width = n;
            t.$x && t.$k(!0)
        },
        setSize: function(n, t) {
            var i = this;
            i.width = n;
            i.height = t;
            i.$x && i.$k(!0)
        },
        __doLayout: function() {
            var n = this;
            f(n.width) && n.$e.$1(n.width, !0);
            f(n.height) && n.$e.$4(n.height, !0)
        },
        on: function(n, t) {
            var i = this,
            r;
            u(i.$F) && (i.$F = {});
            r = n.split(" ");
            $.each(r,
            function(n, r) {
                if (r) {
                    var u = i.$F[r];
                    u && u.length ? u.push(t) : i.$F[r] = [t]
                }
            })
        },
        trigger: function(t, r) {
            var f, s, e, o;
            if (!n.$3t) return f = this,
            u(f.$F) && (f.$F = {}),
            e = f.$F[t],
            e && e.length && (r = $.makeArray(r), o = $.Event(), u(r[0]) ? r[0] = o: f.$Wu(r[0]) || i.$9(0, o, r), $.each(e,
            function(n, t) {
                t.apply(f, r) === !1 && (s = !1)
            })),
            s
        },
        $Wu: function(n) {
            return n instanceof $.Event
        },
        $Hq: function() {
            return this.hasEvent.apply(this, arguments)
        },
        hasEvent: function(n) {
            var t = this;
            return t.$F && t.$F[n] && t.$F[n].length ? !0 : !1
        },
        $s: function() {
            return this.trigger.apply(this, arguments)
        },
        getTooltip: function() {
            var n = this;
            return n.tooltipType === "title" ? n.$e.prop("title") : n.$e.attr("data-qtip")
        },
        setTooltip: function(n) {
            var t = this;
            t.tooltip = n;
            n && (t.tooltipType === "title" ? t.$e.prop("title", n) : t.$e.attr("data-qtip", n))
        },
        $L: function() {
            return this.isVisible()
        },
        isVisible: function() {
            var n = this,
            t;
            return n.$x ? (t = n.$e, t.css("visibility") !== "hidden" && t.css("display") !== "none") : !n.hidden
        },
        isHidden: function() {
            return ! this.$L()
        },
        isDisabled: function() {
            return this.$e.$5(this.$A)
        },
        isEnabled: function() {
            return ! this.isDisabled()
        },
        toggleEnabled: function() {
            this.isEnabled() ? this.disable() : this.enable()
        },
        disable: function() {
            var n = this;
            n.disabled = !0;
            n.$e.$3(n.$A);
            n.$e.$5(n.$eA) && n.$e.$W(n.$eA);
            n.$e.$5(n.$8) && n.$e.$W(n.$8)
        },
        enable: function() {
            var n = this;
            n.disabled = !1;
            n.$e.$W(n.$A)
        },
        setDisabled: function(n) {
            n ? this.disable() : this.enable()
        },
        setEnabled: function(n) {
            this.setDisabled(!n)
        },
        $a: function() {
            return this.hidden && this.hideMode !== "visibility"
        },
        isActived: function() {},
        __hideEl: function() {
            this.$ct()
        },
        $ct: function() {
            var n = this;
            n.hidden = !0;
            n.hideMode === "display" ? n.$e.hide() : n.hideMode === "visibility" ? n.$e.css("visibility", "hidden") : n.$e.$3("f-hidden-offsets")
        },
        __showEl: function() {
            this.$Wa()
        },
        $Wa: function() {
            var n = this;
            n.hidden = !1;
            n.hideMode === "display" ? n.displayRule ? n.$e.css("display", n.displayRule) : n.$e.show() : n.hideMode === "visibility" ? n.$e.css("visibility", "visible") : n.$e.$W("f-hidden-offsets")
        },
        hide: function() {
            var n = this;
            if (i.$cg(n.$HW()) || n.$s("beforehide") === !1) return ! 1;
            n.__hideEl();
            n.$k(!0);
            n.$s("hide")
        },
        show: function() {
            var n = this;
            if (n.$s("beforeshow") === !1) return ! 1;
            n.$4z = !n.$L();
            n.__showEl();
            n.$k(!0);
            n.$s("show");
            n.$4z = r
        },
        toggleVisible: function() {
            this.$L() ? this.hide() : this.show()
        },
        setVisible: function(n) {
            n ? this.show() : this.hide()
        },
        setHidden: function(n) {
            this.setVisible(!n)
        },
        animateElHeight: function(n, t, r) {
            r ? this.$e.animate({
                height: n - i.$5O(this.$e)
            },
            t) : (this.$e.$4(n, !0), t())
        },
        animateElWidth: function(n, t, r) {
            r ? this.$e.animate({
                width: n - i.$s4(this.$e)
            },
            t) : (this.$e.$1(n, !0), t())
        },
        $e$: function(t, i, r) {
            var u = this;
            n.$P || (r = r || t, i = i || u.$8, t = $(t), t.hover(function() {
                r.$5(u.$A) || r.$3(i)
            },
            function() {
                r.$W(i)
            }))
        },
        $cV: function(t, i) {
            var r = this;
            n.$P || (i = i || t, t.focus(function() {
                r.disabled || r.readonly || i.$5(r.$A) || i.$3(r.$eA)
            }).blur(function() {
                r.disabled || r.readonly || i.$W(r.$eA)
            }))
        },
        $7r: function() {
            var t = this;
            n.enableShim && (t.shimEl = t.$J = $("<iframe>", {
                "class": "f-shim"
            }))
        },
        $7k: function(t) {
            var i = this;
            n.enableShim && (i.$J.css("display", "block"), i.$H$(t))
        },
        $H$: function(n) {
            var t = this;
            n = n || t.$e;
            i.$H$(t.$J, n)
        }
    });
    n.Container = n.Component.extend({
        defaults: r,
        fieldDefaults: r,
        layoutAfterImagesLoad: !1,
        type: "container",
        initEl: function() {
            var n = this;
            n._super()
        },
        afterAddToPage: function() {
            var n = this;
            n._super();
            n.$Ww()
        },
        $Ww: function() {
            var n = this,
            t;
            n.layoutAfterImagesLoad && (t = n.$H.$c("img").map(function() {
                var n = $(this);
                return $.Deferred(function(t) {
                    n.load(function() {
                        t.resolve()
                    })
                }).promise()
            }), $.when.apply($, $.makeArray(t)).done(function() {
                n.$x && n.$k()
            }))
        },
        $v: function() {
            var t = this,
            n;
            t._super();
            n = t.items;
            n && n.length && $.each(n,
            function(n, t) {
                t.$v()
            })
        },
        hidePopEl: function() {
            var n = this;
            $.each(n.items,
            function(n, t) {
                t.hidePopEl && t.hidePopEl()
            })
        },
        afterInitElDisabled: function() {
            var n = this;
            n._super()
        },
        insert: function(n, t) {
            var u = this;
            $.each($.makeArray(t),
            function(t, f) {
                var e = n + t,
                o = u.__addItem(f, r, e);
                i.$9(e, o, u.items)
            });
            u.$k(!0)
        },
        add: function(n) {
            var t = this;
            $.each($.makeArray(n),
            function(n, i) {
                t.items.push(t.__addItem(i))
            });
            t.$k(!0)
        },
        __addItem: function(t, i, r) {
            function h(n, t, i) {
                $.each(i,
                function(i, r) {
                    u(t[i]) && (n[i] = r)
                })
            }
            var f = this,
            e, o;
            if (i = i || f.$e, s(t)) {
                if (e = t.type || f.defaultItemType, o = n.$ep(e), !o) throw "Fail to create fineui component: " + e;
                t = new o(t)
            }
            return f.defaults && h(t, f.options, f.defaults),
            f.fieldDefaults && (t.$d("field") ? h(t, t.options, f.fieldDefaults) : t.fieldDefaults ? $.extend(t.fieldDefaults, f.fieldDefaults) : $.extend(t, {
                fieldDefaults: f.fieldDefaults
            })),
            t.doInit(),
            t.parent = f,
            t.$3Z(f, i, r),
            t
        },
        $cd: function(t) {
            var r = this,
            i;
            return t.hidden ? !0 : (i = !1, t.$e.parents(".f-cmp").each(function() {
                var f = $(this),
                t = f.attr("id"),
                u;
                return t ? t === r.id ? !1 : (u = n(t), u && u.hidden ? (i = !0, !1) : void 0) : !0
            }), i)
        },
        getFields: function() {
            return this.$31()
        },
        $31: function() {
            return i.$cG(this.$e, n.$sQ)
        },
        isValid: function(n) {
            var i = this,
            t = !0,
            r = [];
            return $.each(i.$31(),
            function(u, f) {
                return f.$e.parent(".f-grid-cell-editor").length ? !0 : (i.$cd(f) || f.validate() || (t = !1, r.push(f)), !t && n ? !1 : void 0)
            }),
            $.merge([t], r)
        },
        isDirty: function() {
            var n = this,
            t = !1;
            return $.each(n.$31(),
            function(i, r) {
                return r.$e.parent(".f-grid-cell-editor").length ? !0 : !n.$cd(r) && r.isDirty() ? (t = !0, !1) : void 0
            }),
            t
        },
        clearDirty: function() {
            var n = this;
            $.each(n.$31(),
            function(n, t) {
                t.clearDirty()
            })
        },
        reset: function() {
            var n = this;
            $.each(n.$31(),
            function(n, t) {
                t.reset()
            })
        },
        $en: function() {
            if (!n.$Hc) {
                var t = this;
                $.each(t.items,
                function(n, t) {
                    t.$d("textbox") ? t.$en() : t.$d("container") && t.items.length && t.$en()
                })
            }
        },
        $el: function() {
            if (!n.$Hc) {
                var t = this;
                $.each(t.items,
                function(n, t) {
                    t.$d("textbox") ? t.$el() : t.$d("container") && t.items.length && t.$el()
                })
            }
        },
        removeLoading: function() {
            var n = this;
            n.$HV && (n.$HV.remove(), n.$3k.remove(), n.$HV = r, n.$3k = r)
        },
        hideLoading: function() {
            var n = this;
            n.$HV && (n.$HV.hide(), n.$3k.hide())
        },
        showLoading: function(t, i) {
            var r = this;
            t = t || .65;
            i = i || r.$HW();
            r.$HV || (r.$3k = $("<div>", {
                "class": r.$eU + " f-loading-mask"
            }).$7(i), r.$HV = $("<div>", {
                "class": "f-loading",
                html: '<div class="f-loading-img"><img src="' + n.loadingImage + '"/><\/div>'
            }).$7(i));
            r.$3k.css("opacity", t);
            r.$3k.show();
            r.$HV.show()
        },
        resolveItem: function(n, t) {
            var i = this;
            p(n) && (t = n, n = i.items);
            n && n.length && $.each(n,
            function(n, r) {
                var u = t.apply(i, [r]);
                if (u === !1) return ! 1;
                r.items && r.items.length && i.$Hn(r.items, t)
            })
        },
        $Hn: function() {
            this.resolveItem.apply(this, arguments)
        },
        getItem: function(t) {
            var r = this,
            i;
            return f(t) ? i = this.items[t] : e(t) ? i = n(t) : p(t) ? r.$Hn(function(n, u) {
                if (t.apply(r, [n, u]) === !0) return i = n,
                !1
            }) : i = t,
            i
        },
        $32: function() {
            var n = this;
            $.each(n.items,
            function(n, t) {
                t.$k()
            })
        }
    });
    n.PanelBase = n.Container.extend({
        pbcls: "f-panel",
        $N: "f-panel",
        header: !1,
        title: "",
        titleAlign: "left",
        titleTooltip: "",
        titleTooltipType: "qtip",
        bodyCls: "",
        bodyStyle: "",
        bodyPadding: "",
        margin: "",
        border: !1,
        frame: !1,
        collapsible: !1,
        collapsed: !1,
        icon: "",
        iconFont: "",
        _elTag: "div",
        headerTag: "div",
        headerInside: !0,
        iframe: !1,
        iframeUrl: "",
        iframeName: "",
        iframeDelay: !1,
        iframeLoaded: !1,
        minWidth: 0,
        minHeight: 0,
        maxWidth: 0,
        maxHeight: 0,
        split: !1,
        splitWidth: 6,
        splitDraggable: !0,
        splitIcon: !0,
        splitHeaderCls: !0,
        isViewPort: !1,
        clearIFrameAfterClose: !0,
        defaultItemType: "panel",
        customToolAhead: !1,
        type: "panelbase",
        initEl: function() {
            var t = this,
            r, f, u;
            t._super();
            r = $("<" + t._elTag + ">", {
                id: t.id,
                "class": t.pbcls
            });
            t.header && (t.$cb(r), t.$7a(), f = t.tools, f && f.length && $.each(f,
            function(n, i) {
                var r = t.__addTool(i);
                r !== i && (f[n] = r)
            }));
            t.bars = t.bars || [];
            t.pagingbar && (s(t.pagingbar) && (t.pagingbar = new n.PagingToolbar(t.pagingbar)), i.$9(0, t.pagingbar, t.bars));
            t.$79(r, "top");
            u = $("<div>", {
                "class": t.pbcls + "-body",
                style: t.bodyStyle
            }).$7(r);
            t.bodyCls && u.$3(t.bodyCls); (t.header || t.border) && (r.$3(t.$u), u.$3(t.$u));
            t.$79(r, "bottom");
            h(t.bodyPadding) ? t.layout && !h(t.layout.padding) && u.css("padding", i.$er(t.layout.padding)) : u.css("padding", i.$er(t.bodyPadding));
            t.border && r.$3(t.$N + "-border");
            t.isViewPort && ($("body").$3("f-viewport"), r.$3(t.$N + "-viewport"), i.$He($.proxy(t.$k, t), "resize." + t.id));
            t.el = r;
            t.$e = r;
            t.$H = u;
            t.bodyEl = u;
            t.header && (t.icon ? t.setIcon(t.icon) : t.iconFont && t.setIconFont(t.iconFont));
            t.$WO();
            t.$c9();
            t.collapsed && t.$HK(!0)
        },
        $v: function() {
            var i = this,
            n, t;
            i._super();
            n = i.bars;
            n && n.length && $.each(n,
            function(n, t) {
                t.$v()
            });
            t = i.tools;
            t && t.length && $.each(t,
            function(n, t) {
                t.$v()
            })
        },
        $79: function(t, i) {
            var u = this,
            r = u.bars;
            r.length && $.each(r,
            function(f, e) {
                var o = e,
                c = o.position || "top",
                h;
                c === i && (s(o) && (h = n.$ep(o.type || "toolbar"), o = new h(o)), o.doInit(), o.parent = u, o.$e.$7(t), o !== e && (r[f] = o))
            })
        },
        afterInitEl: function() {
            var n = this;
            n._super();
            n.setTitleTooltip()
        },
        $WO: function() {
            var t = this,
            e, o, s, i, h;
            t.region && ((t.region === "left" || t.region === "right") && (e = $("<div>", {
                "class": t.$e7 + " f-region-cover"
            }).$7(t.$e), o = $("<div>", {
                "class": "f-tool f-tool-toggle",
                html: n.$7n
            }).$7(e), t.$e$(o), o.click($.proxy(t.$7f, t)), s = $("<div>", {
                "class": "f-region-cover-text",
                html: t.title || "&nbsp;"
            }).$7(e), t.$37 = e, t.$eY = s), t.split && t.region !== "center" && (i = $("<div>", {
                "class": "f-region-split f-region-split-" + t.region
            }), t.splitHeaderCls && i.$3(t.$e7 + " f-mainheader"), t.splitIcon && (h = $("<div>", {
                html: n.$7n,
                "class": "f-region-split-icon " + t.$HR
            }).$7(i), h.click($.proxy(t.$7f, t))), t.$eS = i, t.splitEl = i, t.splitDraggable && t.$eS.draggable({
                helper: "clone",
                zIndex: 1,
                axis: t.$Ht() ? "x": "y",
                containment: "parent",
                iframeFix: !0,
                stop: function(n, i) {
                    var e;
                    t.$Ht() ? (f(t.width) || (t.width = t.$e.$1(!0)), e = i.position.left - i.originalPosition.left, t.region === "left" ? t.width += e: t.width -= e) : (f(t.height) || (t.height = t.$e.$4(!0)), e = i.position.top - i.originalPosition.top, t.region === "top" ? t.height += e: t.height -= e);
                    u(t.regionPercent) || (t.regionPercent = r);
                    t.$k(!0)
                }
            })))
        },
        disable: function() {
            var n = this;
            n._super();
            n.$3e || (n.$3e = $("<div>", {
                "class": "f-mask " + n.$eU
            }).$7(n.$e), y() || n.$3e.css("opacity", 0));
            n.$3e.show()
        },
        enable: function() {
            var n = this;
            n._super();
            n.$3e && n.$3e.hide()
        },
        $HW: function() {
            return this.$H
        },
        $3Z: function(n, t, i) {
            var u = this;
            u._super(n, t, i);
            n.fineui || (i = t, t = n, n = r);
            u.$eS && u.$eS.$7(t)
        },
        $cb: function(n) {
            var t = this;
            if (t.header) {
                var i = $("<" + t.headerTag + ">", {
                    "class": t.$N + "-header " + t.$e7 + " " + t.$Hd
                }).$7(n),
                u = "f-panel-title",
                r = $("<div>", {
                    "class": u
                }).$7(i),
                f = $("<div>", {
                    "class": u + "-text",
                    html: t.title || "&nbsp;"
                }).$7(r),
                e = $("<div>", {
                    "class": t.$N + "-tools"
                }).$7(i);
                t.titleAlign !== "left" && r.$3("f-align-" + t.titleAlign);
                t.$r = i;
                t.$_ = r;
                t.$HA = f;
                t.$o = e;
                t.headerEl = i;
                t.titleEl = r;
                t.titleTextEl = f;
                t.toolsEl = e
            }
        },
        $7a: function() {
            var n = this,
            t;
            n.tools = n.tools || [];
            t = {
                type: "tool",
                iconFont: "toggle",
                cls: "f-tool-toggle",
                hidden: !n.collapsible,
                handler: $.proxy(n.$7f, n)
            };
            n.customToolAhead ? n.tools.push(t) : i.$9(0, t, n.tools)
        },
        $ei: function() {
            var n = this;
            n.$r.$W(n.$N + "-header-icon");
            n.$r.$W(n.$N + "-header-icon-only");
            n.hasIcon() && (n.$r.$3(n.$N + "-header-icon"), n.getTitle() || n.$r.$3(n.$N + "-header-icon-only"))
        },
        hasIcon: function() {
            return !! (this.icon || this.iconFont)
        },
        getIconEl: function() {
            return this.$r.$c("." + this.$N + "-icon")
        },
        setIcon: function(n) {
            var t = this,
            i;
            t.icon = n;
            i = t.getIconEl();
            i.length && i.remove();
            n && $("<img>", {
                "class": t.$N + "-icon",
                src: n
            }).insertBefore(t.$HA);
            t.$ei();
            t.$x && t.$k(!0)
        },
        setIconFont: function(n) {
            var t = this,
            i;
            t.iconFont = n;
            i = t.getIconEl();
            i.length && i.remove();
            n && (n.indexOf("f-icon-") === -1 && (n = "f-icon-" + n), $("<i>", {
                "class": t.$N + "-icon ui-icon " + n
            }).insertBefore(t.$HA));
            t.$ei();
            t.$x && t.$k(!0)
        },
        $c9: function() {
            var t = this,
            r = t.$H,
            i, u;
            if (t.iframe) {
                i = $("<iframe>", {
                    frameborder: 0,
                    "class": "f-iframe"
                }).$7(r);
                t.$H.$3("f-iframeinside");
                i.on("load",
                function() {
                    n.iframeLoading && t.hideLoading();
                    var r = i.attr("src");
                    r && t.$s("iframeload")
                });
                t.iframeName && i.attr("name", t.iframeName);
                t.$K = i;
                t.bodyIFrameEl = i;
                t.iframeDelay || t.setIFrameUrl(t.iframeUrl)
            } else t.items.length ? (u = t.$Hi(), u === "table" ? t._renderItemsAsTable(r) : $.each(t.items,
            function(n, i) {
                var r = t.__addItem(i);
                r !== i && (t.items[n] = r)
            })) : t.contentEl ? $(t.contentEl).show().$7(r) : t.html && r.html(t.html)
        },
        __addItem: function(n, t, i) {
            var r = this,
            u;
            return t = t || r.$H,
            u = r._super(n, t, i),
            u.$e.$3(r.$eL()),
            u
        },
        _renderItemsAsTable: function(n) {
            function a() {
                return u(f[o]) ? !1 : u(f[o][i]) ? !1 : f[o][i] === 1 ? !0 : !1
            }
            function v(n, t) {
                u(f[n]) && (f[n] = []);
                f[n][t] = 1
            }
            function y(n) {
                for (var t = 1; t < n; t++) v(o + t, i)
            }
            for (var r = this,
            c = $("<table>", {
                "class": r.$eb() + "-container",
                cellspacing: 0,
                cellpadding: 0
            }), p = r.layout.columns, e = 0, w = r.items.length, t, o = 0, i = 0, f = [], s = $("<tr>"), h, l; e < w; e++) t = r.items[e],
            a() ? (i++, e--) : (h = $("<td>", {
                "class": r.$eb() + "-cell"
            }).$7(s), u(t.rowspan) || (h.attr("rowspan", t.rowspan), y(t.rowspan)), u(t.colspan) ? i++:(h.attr("colspan", t.colspan), i += t.colspan), i >= p && (o++, i = 0, s.$7(c), s = $("<tr>")), l = r.__addItem(t, h), l != t && (r.items[e] = l));
            s.children().length && s.$7(c);
            c.$7(n)
        },
        $Wf: function() {
            var n = this,
            t = "top";
            return n.region && (n.region === "left" ? t = "left": n.region === "right" ? t = "right": n.region === "bottom" && (t = "bottom")),
            t
        },
        $Ht: function() {
            var n = this.$Wf();
            return n === "left" || n === "right" ? !0 : !1
        },
        __doLayout: function() {
            function v(n) {
                var t = n[0].getBoundingClientRect(),
                r;
                return r = t.width ? t.width: t.right - t.left,
                r += i.$s4(n),
                nt() && (r += .2),
                r
            }
            function h(n) {
                return r.minWidth && n < r.minWidth ? r.minWidth: r.maxWidth && n > r.maxWidth ? r.maxWidth: n
            }
            function p(n) {
                return r.minHeight && n < r.minHeight ? r.minHeight: r.maxHeight && n > r.maxHeight ? r.maxHeight: n
            }
            function c() {
                var n = r.$e.$4(!0);
                r.minHeight && n < r.minHeight ? r.$e.$4(r.minHeight, !0) : r.maxHeight && n > r.maxHeight && r.$e.$4(r.maxHeight, !0)
            }
            var r = this,
            e, o, u, s, l, a;
            if (r.$e.$5("f-formrow") && i.$Hk(r.$e, ">.f-panel-body>.f-cmp"), r.isViewPort) {
                if (r.width = $(t).$V(), n.$HC && parent !== t) try {
                    e = $(t.frameElement).parent(".f-iframeinside").$q()
                } catch(w) {}
                e || (e = $(t).$q());
                r.height = e
            }
            r.width = h(r.width);
            r.height = p(r.height);
            o = !1; (r.width != r.$Wg || r.height != r.$WZ) && (o = !0);
            r.$Wg = r.width;
            r.$WZ = r.height;
            f(r.width) ? u = r.width: (r.$H.css("width", "auto"), r.$e.css("width", "auto"), u = v(r.$e));
            u = h(u);
            s = u - i.$3R(r.$e);
            y() && (s = u - i.$3R(r.$e));
            r.$H.$1(s, !0);
            r.$e.$1(u, !0);
            r.$Wd();
            r.$e6();
            r.$7g();
            r.$Ht() && r.collapsed && r.$e.$1(r.$ci(), !0);
            f(r.height) ? (r.$e.$4(r.height, !0), c(), l = r.$e.$4(!0) - i.$HB(r.$e), r.$Wb(l), r.$ck(), r.$Ha()) : (r.$H.$q("auto"), r.$Ha(), a = r.$3x(), r.$e.$4(a, !0), c(), r.$ck()); ! r.$Ht() && r.collapsed && r.$e.$4(r.$3V(), !0);
            r.$x && o && r.$s("resize")
        },
        $MM: function() {
            var n = this;
            n.$H.css({
                width: "auto",
                height: "auto"
            });
            n.$e.css({
                width: "auto",
                height: "auto"
            })
        },
        $e6: function() {
            var t = this,
            u;
            if (!t.$d("grouppanel") && t.header) {
                t.getToolCount() > 0 ? (t.$_.$3("f-panel-hastools"), u = t.$o.$1(!0), u -= i.$i(t.$r, "padding-right"), t.$_.css("margin-right", u)) : (t.$_.css("margin-right", "auto"), t.$_.$W("f-panel-hastools"));
                var e = "auto",
                r = 0,
                f = t.getIconEl();
                f.length && (r = f.$V(), r += n.largeMode ? 4 : 2, t.$d("tab") && (t.getTitle() || (e = f.$V(), r = 0)));
                t.$HA.css({
                    "margin-left": r,
                    width: e
                })
            }
        },
        $Wd: function() {
            var t = this,
            n = t.bars;
            n.length && $.each(n,
            function(n, t) {
                t.hidden || t.$k()
            })
        },
        $7g: function() {
            var t = this,
            n;
            t.header && (n = t.tools, n.length && $.each(n,
            function(n, t) {
                t.hidden || t.$k()
            }))
        },
        $Ha: function() {
            var t = this,
            i;
            if (t.items && t.items.length) {
                i = t.$Hi();
                switch (i) {
                case "fit":
                    t.$cu();
                    break;
                case "hbox":
                    t.$cE();
                    break;
                case "vbox":
                    t.$cN();
                    break;
                case "column":
                    t.$cn();
                    break;
                case "anchor":
                    t.$ch();
                    break;
                case "absolute":
                    t.$cr();
                    break;
                case "table":
                    t.$cp();
                    break;
                case "card":
                    t.$cq();
                    break;
                case "region":
                    t.$cx();
                    break;
                default:
                    t.$sS()
                }
            } else t.contentEl && t.$H.$c(".f-cmp").each(function() {
                var i = $(this),
                t = n(i);
                t && t.renderTo && t.$k()
            })
        },
        $ck: function() {
            var n = this
        },
        $3x: function() {
            var n = this,
            t = 0,
            o = n.bars,
            r, u, f, s, h, e;
            return o.length && $.each(o,
            function(n, i) {
                i.hidden || (t += i.$e.$4(!0))
            }),
            i.$5U(n.$H),
            r = n.$H.$4(!0),
            u = n.$Hi(),
            u && i.$h(u, ["hbox", "vbox", "column", "absolute", "region"]) || (f = n.$H.children(":last"), f.length && (s = i.$i(f, "margin-bottom"), h = i.$i(n.$H, "padding-bottom"), !h && s && (n.$H.css("padding-bottom", 1), e = n.$H.$4(!0), e != r + 1 && (r = e - 1), n.$H.css("padding-bottom", 0)))),
            t += r,
            n.header && n.headerInside && (t += n.$r.$4(!0)),
            t += i.$HB(n.$e)
        },
        $cl: function() {
            var n = this,
            t = 0;
            return t += n.$H.$1(!0),
            t + i.$3R(n.$e)
        },
        $3V: function() {
            var n = this,
            t = i.$HB(n.$e);
            return n.header && (t += n.$r.$4(!0)),
            t
        },
        $ci: function() {
            var n = this;
            return n.header ? n.$37.$1(!0) : i.$3R(n.$e)
        },
        $Wb: function(n) {
            var t = this,
            i;
            t.header && t.headerInside && (n -= t.$r.$4(!0));
            i = t.bars;
            i.length && $.each(i,
            function(t, i) {
                i.hidden || (n -= i.$e.$4(!0))
            });
            t.$H.$4(n, !0)
        },
        $HK: function(n) {
            function u(n) {
                n.css("visibility", "visible")
            }
            function f(n) {
                n.css("visibility", "hidden")
            }
            function e(n) {
                var i = t.bars;
                i && i.length && $.each(i,
                function(t, i) {
                    n ? u(i.$e) : f(i.$e)
                })
            }
            var t = this,
            r = t.$e,
            i;
            t.collapsed = n;
            i = t.$eS;
            n ? (r.$3(t.$N + "-collapsed"), i && (i.$3(t.$N + "-collapsed"), t.splitDraggable && i.draggable("disable")), e(!1), f(t.$H)) : (r.$W(t.$N + "-collapsed"), i && (i.$W(t.$N + "-collapsed"), t.splitDraggable && i.draggable("enable")), e(!0), u(t.$H))
        },
        $7f: function(n) {
            this.$3X(n)
        },
        $3X: function(t, i, f) {
            function h() {
                e.$HK(i);
                i ? e.$s("collapse", [t]) : (e.$s("expand", [t]), n.$H4(e.$H));
                e.$x && e.$k(!0)
            }
            function c(n) {
                var u = e.$Ht(),
                t,
                r;
                u ? (t = 0, t = i ? e.$ci() : e.$cl(), e.animateElWidth(t,
                function() {
                    h()
                },
                n)) : (r = 0, r = i ? e.$3V() : e.$3x(), e.animateElHeight(r,
                function() {
                    h()
                },
                n))
            }
            var e = this,
            s;
            if (o(t) || (f = i, i = t, t = r), !e.$e.is(":animated")) {
                if (s = e.isCollapsed(), u(i)) i = !s;
                else if (s === i) return;
                c(!1)
            }
        },
        getToolsEl: function() {
            return this.$o
        },
        getToolCount: function() {
            var n = this,
            t = 0;
            return n.tools && n.tools.length && $.each(n.tools,
            function(n, i) {
                i.hidden || t++
            }),
            t
        },
        getTool: function(n) {
            var r = this,
            t;
            return i.$4$("f-tool-", n) || (n = "f-tool-" + n),
            $.each(r.tools,
            function(i, r) {
                if (r.cls.indexOf(n) >= 0) return t = r,
                !1
            }),
            t
        },
        addTool: function(n) {
            var t = this;
            t.$o && t.$o.length && t.tools.push(t.__addTool(n))
        },
        __addTool: function(t) {
            var i = this,
            r;
            return s(t) && (r = n.$ep(t.type || "tool"), t = new r(t)),
            t.doInit(),
            t.parent = i,
            t.$e.$7(i.$o),
            t
        },
        isCollapsed: function() {
            var n = this;
            return n.$x ? n.$e.$5(this.$N + "-collapsed") : n.collapsed
        },
        collapse: function() {
            var n = this;
            this.$3X(!0)
        },
        expand: function() {
            var n = this;
            this.$3X(!1)
        },
        toggleCollapse: function() {
            this.$3X()
        },
        setTitle: function(n) {
            var t = this; (t.title = n, t.header) && (t.$HA.html(n || "&nbsp;"), t.$eY && t.$eY.length && t.$eY.html(n || "&nbsp;"), t.$ei(), t.$x && t.$k(!0))
        },
        getTitle: function() {
            var n = this.$HA.html();
            return n === "&nbsp;" && (n = ""),
            n
        },
        getTitleTooltip: function() {
            var n = this;
            return n.titleTooltipType === "title" ? n.$_.prop("title") : n.$_.attr("data-qtip")
        },
        setTitleTooltip: function(n) {
            var t = this;
            typeof n == "undefined" && (n = t.titleTooltip);
            n && (t.titleTooltipType === "title" ? t.$_.prop("title", n) : t.$_.attr("data-qtip", n), t.$eY && t.$eY.length && t.$eY.prop("title", n))
        },
        setIFrameUrl: function(t) {
            var i = this;
            i.iframeUrl = t;
            i.$K && i.$K.length && (n.iframeLoading && i.showLoading(1), i.$K.attr("src", t), i.iframeLoaded = t ? !0 : !1)
        },
        getIFrameUrl: function() {
            var n = this,
            t = "";
            return n.iframeLoaded ? n.$K && n.$K.length && (t = n.$K.attr("src")) : t = n.iframeUrl,
            t
        },
        getIFrameEl: function() {
            return this.$K
        },
        getIFrameWindow: function() {
            var n = this,
            t;
            return n.$K && n.$K.length && (t = n.$K.get(0).contentWindow),
            t
        },
        refreshIFrame: function() {
            var t = this,
            n = t.getIFrameWindow();
            n && n.location && n.location.href && n.location.href !== "about:blank" && n.location.reload()
        },
        hide: function() {
            var t = this;
            if (t._super() === !1) return ! 1;
            t.iframeLoaded = !1;
            t.iframe && t.clearIFrameAfterClose && n.defer(function() {
                t.iframeLoaded || t.$K && t.$K.length && t.$K.attr("src", "")
            },
            100)
        },
        $3G: function() {
            var n = this,
            t;
            n.$HE = n.$HE || {};
            t = n.$HW().scrollTop();
            t && (n.$HE[n.id] = t);
            n.items && n.items.length && $.each(n.items,
            function(n, t) {
                t.$3G && t.$3G()
            })
        },
        $3T: function() {
            var n = this,
            t;
            n.$HE = n.$HE || {};
            t = n.$HE[n.id];
            t && n.$HW().scrollTop(t);
            n.items && n.items.length && $.each(n.items,
            function(n, t) {
                t.$3T && t.$3T()
            });
            n.$HE = r
        }
    });
    $.extend(n.PanelBase.prototype, {
        $ea: function() {
            return Math.floor(this.$H.$V())
        },
        $eH: function() {
            return Math.floor(this.$H.$q())
        },
        $eb: function() {
            var n = "",
            t = this.$Hi();
            return t && (n = "f-layout-" + t),
            n
        },
        $eL: function() {
            var n = "",
            t = this.$Hi();
            return t && (n = "f-layout-" + t + "-item"),
            n
        },
        $cu: function() {
            function o() {
                var t = 0,
                i = n.items.length,
                u;
                if (!i) return r;
                for (;;) {
                    if (!n.items[t].hidden) {
                        u = n.items[t];
                        break
                    }
                    if (t++, t > i - 1) break
                }
                return u
            }
            var n = this,
            i = !1,
            u, e, t;
            f(n.height) && (i = !0);
            u = n.$eH();
            e = n.$ea();
            n.$e.$3(n.$eb());
            t = o();
            t && (t.$e.$3(n.$eL()), t.width = e, t.height = i ? u: r, t.$k(), i || n.$H.$q(t.$e.$4(!0)))
        },
        $cE: function() {
            function c(e) {
                var s = 0,
                v = 0,
                y = 0,
                l = 0,
                c, p, a, k, w, b;
                $.each(n.items,
                function(t, r) {
                    if (r.$a()) return ! 0;
                    r.$e.$3(n.$eL());
                    h(n.layout.childMargin) || (r.$e.css("margin", i.$er(n.layout.childMargin)), r.$4T());
                    f(r.height) && r.height > l && (l = r.height);
                    r.flex && (y += r.flex)
                });
                e && l === 0 && (l = e);
                c = o;
                p = 0;
                $.each(n.items,
                function(n, i) {
                    var r, f;
                    if (i.$a()) return ! 0;
                    u && (t === "stretch" ? i.height = e: (t === "stretchmax" || t === "stretchmaxcenter" || t === "stretchmaxend") && (i.height = l));
                    i.flex ? p++:(i.$k(), r = i.$e.$1(!0), c -= r, v += r, f = i.$e.$4(!0), f > s && (s = f))
                });
                a = i.$i(n.$H, "padding-left");
                k = i.$i(n.$H, "padding-top");
                y === 0 && (r === "start" || (r === "end" ? a += c: r === "center" && (a += c / 2)));
                w = 0;
                b = 0;
                $.each(n.items,
                function(n, i) {
                    var u, f, r;
                    if (i.$a()) return ! 0;
                    i.$e.css("left", a);
                    i.flex && (u = 0, u = w === p - 1 ? c - b: Math.floor(i.flex / y * c), w++, b += u, i.width = u, i.$k(), v += i.$e.$1(!0), r = i.$e.$4(!0), r > s && (s = r));
                    e && (f = k, r = i.$e.$4(!0), t === "start" || (t === "center" || t === "stretchmaxcenter" ? f += (e - r) / 2 : (t === "end" || t === "stretchmaxend") && (f += e - r)), i.$e.css("top", f));
                    a += i.$e.$1(!0)
                });
                s < e && (s = e);
                var nt = s,
                d = v,
                g = i.$i(n.$H, "padding-right");
                g > 0 && v > o && (d += g);
                n.$cs(d, nt);
                u || $.each(n.items,
                function(n, t) {
                    if (t.$a()) return ! 0;
                    var i = t.$e.$4(!0);
                    i < s && (t.height = s, t.$k())
                })
            }
            var n = this,
            t, r, o, u, e, s;
            n.$c7();
            h(n.layout.padding) || n.$H.css("padding", i.$er(n.layout.padding));
            n.$e.$3(n.$eb());
            t = n.layout.align || "stretch";
            r = n.layout.position || "start";
            o = n.$ea();
            u = !1;
            f(n.height) && (u = !0);
            e = n.$eH();
            c(e);
            e && (s = i.$7s(n.$H), s < e && c(s))
        },
        $cN: function() {
            function c(o) {
                var a = 0,
                v = 0,
                c = 0,
                s, y, g, l, p, w, b, d;
                $.each(n.items,
                function(r, u) {
                    if (u.$a()) return ! 0;
                    u.$e.$3(n.$eL());
                    h(n.layout.childMargin) || (u.$e.css("margin", i.$er(n.layout.childMargin)), u.$4T());
                    f(u.width) || u.flex || (t === "stretch" ? u.width = o: (u.$k(), u.width = u.$e.$1(!0)));
                    u.width > c && (c = u.width);
                    u.flex && (v += u.flex)
                });
                c === 0 && (c = o);
                s = u;
                y = 0;
                $.each(n.items,
                function(n, i) {
                    if (i.$a()) return ! 0;
                    if (t === "stretch" ? i.width = o: (t === "stretchmax" || t === "stretchmaxcenter" || t === "stretchmaxend") && (i.width = c), i.flex && !i.collapsed) y++;
                    else {
                        i.$k();
                        var r = i.$e.$4(!0);
                        s -= r;
                        a += r;
                        i.flex && (v -= i.flex)
                    }
                });
                s < 0 && (s = 0);
                g = i.$i(n.$H, "padding-left");
                l = i.$i(n.$H, "padding-top");
                v === 0 && (e === "start" || (e === "end" ? l += s: e === "center" && (l += s / 2)));
                p = 0;
                w = 0;
                $.each(n.items,
                function(n, i) {
                    var r, f;
                    if (i.$a()) return ! 0;
                    i.$e.css("top", l);
                    i.flex && !i.collapsed && (u && (r = 0, r = p === y - 1 ? s - w: Math.floor(i.flex / v * s), p++, w += r, i.height = r), i.$k(), a += i.$e.$4(!0));
                    f = g;
                    t === "start" || (t === "center" || t === "stretchmaxcenter" ? f += (o - i.width) / 2 : (t === "end" || t === "stretchmaxend") && (f += o - i.width));
                    i.$e.css("left", f);
                    l += i.$e.$4(!0)
                });
                b = a;
                u && !k() && (d = i.$i(n.$H, "padding-bottom"), d > 0 && a > u && (b += d));
                n.$cs(r, b)
            }
            var n = this,
            t, e, u, o, s;
            n.$c7();
            h(n.layout.padding) || n.$H.css("padding", i.$er(n.layout.padding));
            n.$e.$3(n.$eb());
            t = n.layout.align || "stretch";
            e = n.layout.position || "start";
            u = n.$eH();
            o = n.$ea();
            c(o);
            s = i.$e3(n.$H);
            s < o && c(s)
        },
        $sS: function() {
            var n = this,
            r = n.$ea(),
            t;
            n.$32();
            t = i.$e3(n.$H);
            t < r && n.$32()
        },
        $cn: function() {
            function c(u) {
                var c = u,
                e, s, h;
                $.each(n.items,
                function(t, i) {
                    if (i.$a()) return ! 0;
                    i.$e.$3(n.$eL());
                    f(i.columnWidth) || (i.$k(), c -= i.$e.$1(!0))
                });
                t = 0;
                e = i.$i(n.$H, "padding-left");
                $.each(n.items,
                function(n, i) {
                    if (i.$a()) return ! 0;
                    f(i.columnWidth) && (i.width = Math.floor(i.columnWidth * c), i.$k());
                    var r = i.$e.$4(!0);
                    r > t && (t = r);
                    i.$e.css("left", e);
                    e += i.$e.$1(!0)
                });
                s = t;
                o && !k() && (h = i.$i(n.$H, "padding-bottom"), h > 0 && t > o && (s += h));
                n.$cs(r, s)
            }
            var n = this,
            u, e, o, t, s, h;
            n.$c7();
            n.$e.$3(n.$eb());
            u = n.layout.columnWidths;
            u && u.length && (e = 0, $.each(n.items,
            function(n, t) {
                if (t.$a()) return ! 0;
                var i = u[e];
                if (i) i > 1 ? t.width = i: t.columnWidth = i;
                else return ! 1;
                e++
            }));
            o = n.$eH();
            s = n.$ea();
            c(s);
            h = i.$e3(n.$H);
            h < s && c(h)
        },
        $ch: function() {
            function o(n, t) {
                return i.$eg("%", t) ? Math.floor(i.$5x(t) * n) : parseFloat(t) + n
            }
            function s(r) {
                $.each(n.items,
                function(e, s) {
                    if (s.$a()) return ! 0;
                    if (s.$e.$3(n.$eL()), u(s.anchor) && (s.$d("button") || f(s.width) || (s.anchor = "0")), !u(s.anchor)) {
                        var h = i.$5p(s.anchor);
                        h.length > 0 && (s.width = o(r, h[0]), t && h.length === 2 && (s.height = o(t, h[1])))
                    }
                    s.$k()
                })
            }
            var n = this,
            t, r, e;
            n.$e.$3(n.$eb());
            t = n.$eH();
            r = n.$ea();
            s(r);
            e = i.$e3(n.$H);
            e < r && s(e)
        },
        $cr: function() {
            var n = this,
            t, i;
            n.$e.$3(n.$eb());
            t = n.$eH();
            i = n.$ea();
            $.each(n.items,
            function(t, i) {
                if (i.$a()) return ! 0;
                i.$e.$3(n.$eL());
                i.$k();
                i.$e.css("top", i.y);
                i.$e.css("left", i.x)
            })
        },
        $cp: function() {
            var n = this,
            t, i;
            n.$e.$3(n.$eb());
            t = n.$eH();
            i = n.$ea();
            $.each(n.items,
            function(t, i) {
                if (i.$a()) return ! 0;
                i.$e.$3(n.$eL());
                i.$k()
            })
        },
        $cq: function() {
            var n = this,
            t, i;
            n.$e.$3(n.$eb());
            t = n.$eH();
            i = n.$ea();
            $.each(n.items,
            function(r, u) {
                if (u.$a()) return ! 0;
                u.$e.$3(n.$eL());
                u.width = i;
                u.height = t;
                u.$k()
            })
        },
        $cx: function() {
            var t = this,
            c, o;
            t.$e.$3(t.$eb());
            var a = t.$eH(),
            s = t.$ea(),
            v = {
                left: [],
                top: [],
                right: [],
                bottom: [],
                center: []
            },
            r = a,
            l = s,
            u = 0,
            e = 0,
            p = i.$i(t.$H, "padding-top"),
            h = i.$i(t.$H, "padding-left"),
            w = i.$i(t.$H, "padding-bottom");
            u += p;
            e += h;
            c = [];
            $.each(t.items,
            function(n, t) {
                t.region === "bottom" ? i.$9(0, t, c) : c.push(t)
            });
            o = 0;
            $.each(c,
            function(n, i) {
                var e = i.$eS,
                c, l, y;
                if (i.$a()) return e && e.hide(),
                !0;
                e && e.show();
                i.$e.$3(t.$eL() + " f-region-" + i.region);
                c = i.region; (c === "top" || c === "bottom") && (f(i.regionPercent) && (i.height = Math.floor(i.regionPercent * a)), i.width = s, i.$k(), l = i.$e.$4(!0), r -= l, c === "top" ? (i.$e.css("top", u), u += l) : (i.$e.css("bottom", o), o += l), i.$e.css("left", h), e && (e.$4(i.splitWidth, !0), e.$c(".f-region-split-icon").$4(i.splitWidth, !0), e.$1(s, !0), r -= i.splitWidth, c === "top" ? (e.css({
                    left: h,
                    top: u
                }), u += i.splitWidth) : (e.css({
                    left: h,
                    bottom: o
                }), o += i.splitWidth)));
                y = v[i.region];
                c === "center" && y.length || y.push(i)
            });
            $.each(t.items,
            function(t, u) {
                var e = u.$eS,
                h, a, o, c;
                if (u.$a()) return ! 0; (u.region === "left" || u.region === "right") && (f(u.regionPercent) && (u.width = Math.floor(u.regionPercent * s)), f(u.width) || (u.width = 100), u.height = r, u.$k(), u.$37 && (u.$37.$4(r - i.$5w(u.$e), !0), h = 28, n.largeMode && (h = 34), u.$eY.$1(r - h), y() ? (o = u.$37.$1(!0), a = u.$eY.$1(!0), u.$eY.css({
                    left: (o - a) / 2
                })) : (o = u.$37.$1(!0), c = u.$eY.$4(!0), u.$eY.css({
                    left: (o - c) / 2 + c
                }))), e && (e.$1(u.splitWidth, !0), e.$c(".f-region-split-icon").$1(u.splitWidth, !0), e.$4(r, !0), l -= u.splitWidth), l -= u.$e.$1(!0))
            });
            $.each(t.items,
            function(n, t) {
                if (t.$a()) return ! 0;
                t.region === "center" && (t.height = r, t.width = l, t.$k())
            });
            $.each(["left", "center", "right"],
            function(n, t) {
                var i = v[t];
                if (!i.length) return ! 0;
                $.each(i,
                function(n, i) {
                    function r() {
                        i.$eS && (i.$eS.css({
                            left: e,
                            top: u
                        }), e += i.splitWidth)
                    }
                    if (i.$a()) return ! 0;
                    t === "right" && r();
                    i.$e.css("left", e);
                    i.$e.css("top", u);
                    e += i.$e.$1(!0);
                    t === "left" && r()
                })
            })
        },
        $cs: function(n, t) {
            var e = this,
            r = {
                "class": "f-layout-placeholder"
            },
            f;
            u(n) || (r.width = n);
            u(t) || (r.height = t);
            f = $("<div>", r);
            i.$eh(e.$H, ">.f-layout-placeholder", f)
        },
        $c7: function() {
            var n = this;
            n.$H.find(">.f-layout-placeholder").remove()
        }
    });
    n.Calendar = n.Component.extend({
        ccls: "f-calendar",
        format: "yyyy-MM-dd",
        minValue: "",
        maxValue: "",
        showTodayButton: !0,
        showTime: !1,
        showMinute: !0,
        showSecond: !0,
        okText: "OK",
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "MM/dd/yyyy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
        amPm: ["am", "pm"],
        type: "calendar",
        initEl: function() {
            var t = this,
            i;
            t._super();
            t.showTime && (t.showTime = !1, n.$2("F.Calendar - showTime"));
            i = $("<div>", {
                id: t.id,
                "class": t.ccls + " " + t.$u + " ui-corner-all"
            });
            t.el = i;
            t.$e = i;
            t.$sG();
            t.$sX();
            t.$s6();
            t.$HG();
            t.$1vEvents()
        },
        $sG: function() {
            var n = this,
            t = n.minValue;
            t && e(t) && (n.minValue = i.$eO(n.format, t))
        },
        $sX: function() {
            var n = this,
            t = n.maxValue;
            t && e(t) && (n.maxValue = i.$eO(n.format, t))
        },
        $s6: function() {
            var n = this,
            t = n.value;
            t && e(t) && (n.value = i.$eO(n.format, t))
        },
        $1vEvents: function() {
            function r(n, i) {
                var r = t.$f("float");
                r.is(":visible") && r.attr("data-type") == n ? r.hide() : t.$W8(n, i)
            }
            var t = this,
            u;
            if ("onselectstart" in document.createElement("div")) t.$e.on("selectstart",
            function(n) {
                $(n.target).is(":input") || n.preventDefault()
            });
            if (!n.$P) {
                t.$e.on("mouseenter mouseleave", "." + t.$M("nav"),
                function(n) {
                    var i = $(this),
                    r = t.$M("nav-hover");
                    if (n.type === "mouseenter") {
                        if (i.$5(t.$A)) return;
                        i.$3(r)
                    } else n.type === "mouseleave" && i.$W(r)
                });
                u = "." + t.$M("day") + ",." + t.$M("float") + " li";
                t.$e.on("mouseenter mouseleave", u,
                function(n) {
                    var i = $(this);
                    i.$5(t.$A) || (n.type === "mouseenter" ? i.$3(t.$8) : n.type === "mouseleave" && i.$W(t.$8))
                })
            }
            t.$e.on("click", "." + t.$M("nav"),
            function() {
                var r = $(this),
                i,
                n;
                r.$5(t.$A) || (i = t.$4m(), n = t.$4Z(), r.is("." + t.$M("prev")) ? (n--, n < 0 && (n = 11, i--)) : (n++, n > 11 && (n = 0, i++)), t.$4g(i, n))
            });
            t.$e.on("click", "." + t.$M("float") + " li",
            function() {
                var f = $(this),
                r = parseInt(f.attr("data-number"), 10),
                e = t.$4m(),
                o = t.$4Z(),
                u = t.$f("float"),
                n = u.attr("data-type");
                n === "month" ? t.$4g(e, r) : n === "year" ? t.$4g(r, o) : (n === "hour" || n === "minute" || n === "second") && (t.$f("time").find("." + n).text(i.$e9(r)), u.hide())
            });
            t.$e.on("click", "." + t.$M("month"),
            function() {
                var n = $(this),
                t = parseInt(n.attr("data-month"), 10);
                r("month", t)
            });
            t.$e.on("click", "." + t.$M("year"),
            function() {
                var n = $(this),
                t = parseInt(n.attr("data-year"), 10);
                r("year", t)
            });
            t.$e.on("click", "." + t.$M("time") + " .hour",
            function() {
                var n = $(this),
                t = parseInt(n.text(), 10);
                r("hour", t)
            });
            t.$e.on("click", "." + t.$M("time") + " .minute",
            function() {
                var n = $(this),
                t = parseInt(n.text(), 10);
                r("minute", t)
            });
            t.$e.on("click", "." + t.$M("time") + " .second",
            function() {
                var n = $(this),
                t = parseInt(n.text(), 10);
                r("second", t)
            });
            t.$e.on("click dblclick", "." + t.$M("day"),
            function(n) {
                var i = $(this),
                u,
                r;
                i.$5(t.$A) || (u = parseInt(i.text(), 10), t.$f("table").find("." + t.$D).$W(t.$D), i.$3(t.$D), t.$11(u), r = n.type, t.showTime || r !== "click" ? t.showTime && r === "dblclick" && t.$s("select", [n]) : t.$s("select", [n]))
            })
        },
        $11: function(n) {
            var t = this,
            r = t.$4m(),
            u = t.$4Z(),
            n = t.$Wt(n);
            if (t.showTime) {
                var i = t.$f("time"),
                o = parseInt(i.find(".hour").text(), 10),
                f = 0,
                e = 0;
                t.showMinute && (f = parseInt(i.find(".minute").text(), 10));
                t.showSecond && (e = parseInt(i.find(".second").text(), 10));
                t.value = new Date(r, u, n, o, f, e)
            } else t.value = new Date(r, u, n)
        },
        $5e: function() {
            var t = this,
            n = new Date,
            r = n.getFullYear(),
            u = n.getMonth(),
            f = n.getDate(),
            i;
            if (t.showTime) {
                var s = n.getHours(),
                e = 0,
                o = 0;
                t.showMinute && (e = n.getMinutes());
                t.showSecond && (o = n.getSeconds());
                i = new Date(r, u, f, s, e, o)
            } else i = new Date(r, u, f);
            t.setValue(i)
        },
        $Wt: function(n) {
            var i = this,
            t;
            return f(n) || (t = i.$f("table").find("." + i.$D), n = t.length ? parseInt(t.text(), 10) : 1),
            n
        },
        $4m: function() {
            return parseInt(this.$f("year").attr("data-year"), 10)
        },
        $4Z: function() {
            return parseInt(this.$f("month").attr("data-month"), 10)
        },
        $f: function(n) {
            return this.$e.find("." + this.$M(n))
        },
        $W8: function(n, t) {
            function y(n) {
                return Math.floor((l - n * 5) / n)
            }
            function s(n, i, r) {
                var f = y(i),
                u = "";
                return n == t && (u += o.$D),
                '<li class="' + u + '" data-number="' + n + '" style="width:' + f + 'px">' + r + "<\/li>"
            }
            var o = this,
            v = o.$f("body"),
            f = o.$f("float"),
            e,
            u,
            h,
            c,
            p,
            r,
            l,
            w,
            a,
            b;
            if (f.css({
                width: v.$1(!0),
                height: v.$4(!0),
                overflow: "hidden"
            }).attr("data-type", n).show(), e = ['<ul class="' + o.$M("float-list") + '">'], l = f.$V(), u = 3, n == "month") for (u = 3, r = 0; r < 12; r++) e.push(s(r, u, o.monthNamesShort[r]));
            else if (n == "year") for (u = 4, h = t - 50, c = h + "", c.charAt(c.length - 1) !== "0" && (h = parseInt(c.substr(0, c.length - 1) + "0", 10)), p = h + 99, r = h; r <= p; r++) e.push(s(r, u, r));
            else if (n == "hour") for (u = 5, r = 0; r <= 23; r++) e.push(s(r, u, i.$e9(r)));
            else if (n == "minute") for (u = 5, r = 0; r <= 59; r++) e.push(s(r, u, i.$e9(r)));
            else if (n == "second") for (u = 5, r = 0; r <= 59; r++) e.push(s(r, u, i.$e9(r)));
            e.push("<\/ul>");
            f.html(e.join(""));
            f.css("overflow", "auto");
            i.$4f(f) && (l = i.$e3(f), w = y(u), f.find("li").outerWidth(w), a = f.find("li." + o.$D), a.length && (b = Math.floor(a.position().top - f.$q() / 2), f.scrollTop(b)))
        },
        afterAddToPage: function() {
            var n = this;
            n._super();
            n.$sD()
        },
        $sD: function() {
            var t = this,
            i = t.$f("today"),
            r;
            t.showTime && (i = t.$f("actions"));
            t.showTodayButton && (r = 0, t.showTime && (r = 5), new n.Button({
                renderTo: i,
                text: t.currentText,
                scale: "small",
                marginRight: r,
                handler: function(n) {
                    t.$5e();
                    t.$s("select", [n])
                }
            }));
            t.showTime && new n.Button({
                renderTo: i,
                text: t.okText,
                scale: "small",
                handler: function(n) {
                    t.$11();
                    t.$s("select", [n])
                }
            })
        },
        $HG: function() {
            var t = this,
            r = new Date,
            e;
            t.value && (r = t.value);
            var u = r.getFullYear(),
            f = r.getMonth(),
            i = [];
            i.push('<div class="' + t.$M("header") + " " + t.$e7 + '">');
            i.push(t.$sj(u, f));
            i.push("<\/div>");
            i.push('<div class="' + t.$M("body") + '">');
            i.push(t.$s8(u, f));
            i.push("<\/div>");
            e = '<div class="' + t.$M("footer") + " " + t.$e7 + '">';
            t.showTime ? n.$2("F.Calendar - showTime") : t.showTodayButton && (i.push(e), i.push('<div class="' + t.$M("today") + '"><\/div>'), i.push("<\/div>"));
            t.$e.html(i.join(""));
            t.$x && t.$sD()
        },
        $4g: function(n, t) {
            var i = this;
            i.$f("header").html(i.$sj(n, t));
            i.$f("body").html(i.$s8(n, t));
            i.$x && i.doLayout()
        },
        $sj: function(n, t) {
            var i = this,
            u = '<span class="' + i.$M("year") + '" data-year="' + n + '">' + n + i.yearSuffix + "<\/span>",
            f = '<span class="' + i.$M("month") + '" data-month="' + t + '">' + i.monthNamesShort[t] + "<\/span>",
            e = i.$M("nav"),
            r = [];
            return r.push('<div class="' + e + " " + i.$M("prev") + '"><i class="ui-icon"><\/i><\/div>'),
            r.push('<div class="' + i.$M("title") + '">'),
            i.showMonthAfterYear ? $.merge(r, [u, "&nbsp;", f]) : $.merge(r, [f, "&nbsp;", u]),
            r.push("<\/div>"),
            r.push('<div class="' + e + " " + i.$M("next") + '"><i class="ui-icon"><\/i><\/div>'),
            r.join("")
        },
        $s8: function(n, t) {
            function o(n, t) {
                var r = "yyyyMMdd",
                u = parseInt(i.$eR(r, n), 10),
                f = parseInt(i.$eR(r, t), 10);
                return u - f
            }
            var r = this,
            f = ['<table class="' + r.$M("table") + '"><thead><tr>'],
            u = r.firstDay,
            y,
            e,
            a,
            v;
            do f.push('<th><span title="' + r.dayNames[u] + '">' + r.dayNamesMin[u] + "<\/span><\/th>"),
            u++,
            u > 6 && (u = 0);
            while (u != r.firstDay);
            f.push("<\/tr><\/thead>");
            y = new Date(n, t, 1);
            e = startDayOfWeek = y.getDay();
            r.firstDay && (e -= r.firstDay, e < 0 && (e += 7));
            var b = r.$WK(n, t),
            s = e + b,
            l = 0,
            p = s % 7;
            for (p && (l = 7 - p, s += l), a = new Date, a.setHours(0, 0, 0, 0), f.push("<tbody><tr>"), u = 0; u < s; u++) {
                if (u < e || u >= s - l) f.push("<td><\/td>");
                else {
                    var h = r.$M("day"),
                    w = u - e + 1,
                    c = new Date(n, t, w);
                    o(c, a) == 0 && (h += " ui-state-highlight");
                    v = r.getValue();
                    v && o(c, v) == 0 && (h += " " + r.$D); (r.minValue && o(c, r.minValue) < 0 || r.maxValue && o(c, r.maxValue) > 0) && (h += " " + r.$A);
                    f.push('<td><a class="' + h + '">' + w + "<\/a><\/td>")
                } (u + 1) % 7 == 0 && f.push("<\/tr><tr>")
            }
            return f.pop(),
            f.push("<\/tbody>"),
            f.push("<\/table>"),
            f.push('<div class="' + r.$M("float") + " " + r.$u + '"><\/div>'),
            f.join("")
        },
        $WK: function(n, t) {
            var i = n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
            return [31, i ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        getValue: function(n) {
            var i = this,
            t = i.value;
            if (t && n) {
                var r = t.getFullYear(),
                u = t.getMonth(),
                f = t.getDate();
                t = new Date(r, u, f)
            }
            return t
        },
        setValue: function(n) {
            var t = this;
            t.value = n;
            t.$s6();
            t.$HG();
            t.$x && t.doLayout()
        },
        getText: function() {
            var n = this;
            return i.$eR(n.format, n.value)
        },
        setText: function(n) {
            this.setValue(n)
        },
        setMaxValue: function(n) {
            var t = this;
            t.maxValue = n;
            t.$sX();
            t.$HG();
            t.$x && t.doLayout()
        },
        setMinValue: function(n) {
            var t = this;
            t.minValue = n;
            t.$sG();
            t.$HG();
            t.$x && t.doLayout()
        },
        __doLayout: function() {
            var n = this;
            n._super();
            n.$WB()
        },
        $WB: function() {
            var n = this,
            h, u, c;
            if (f(n.height)) {
                var l = n.$f("header"),
                a = n.$f("body"),
                e = n.$f("footer"),
                t = n.$f("table"),
                r = t.find("thead tr"),
                o = t.find("tbody td"),
                s = o.find("." + n.$M("day"));
                t.$q("auto");
                r.$q("auto");
                s.$q("auto");
                h = r.height();
                r.height(h);
                u = n.$e.height() - l.$4(!0);
                e.length && (u -= e.$4(!0));
                c = u - i.$HB(a);
                t.$4(c, !0);
                s.$4(o.$q(), !0)
            }
        }
    });
    n.$sW(n.Calendar.prototype);
    n.Button = n.Component.extend({
        ccls: "f-btn",
        text: "",
        scale: "normal",
        enablePress: !1,
        pressed: !1,
        textCls: "f-btn-text",
        iconCls: "f-btn-icon",
        icon: "",
        iconFont: "",
        iconAlign: "left",
        defaultState: !0,
        defaultCorner: !0,
        tabIndex: 0,
        validateForm: "",
        validateForms: r,
        validateTarget: "_self",
        validateMessageBox: !0,
        displayRule: "inline-block",
        showMenuIcon: !0,
        type: "button",
        initEl: function() {
            var n = this,
            t, i, r;
            n._super();
            t = $("<a>", {
                id: n.id,
                role: "button",
                tabindex: n.tabIndex,
                "class": n.ccls + " " + n.$Hd
            });
            n.defaultState && t.$3(n.$HR);
            n.defaultCorner && t.$3("ui-corner-all"); (n.enableToggle || n.enablePress) && (t.$3(n.$M("pressable")), n.pressed && t.$3(n.$D));
            t.$3(n.$M(n.scale));
            i = $("<span>", {
                "class": n.$M("inner")
            });
            r = $("<span>", {
                "class": n.textCls,
                html: n.text
            }).$7(i);
            n.el = t;
            n.$e = t;
            n.textEl = r;
            n.$eQ = r;
            n.$WG = i;
            i.$7(t); (n.menu || n.menuId) && (n.$3d(), n.showMenuIcon || t.$3(n.$M("nomenuicon")), $("<i>", {
                "class": n.$M("icon-arrowd") + " ui-icon"
            }).$7(i), t.$3(n.$M("arrowd")));
            n.icon ? n.setIcon(n.icon) : n.iconFont ? n.setIconFont(n.iconFont) : n.$e.$3(n.iconCls + "-no");
            n.$e.click($.proxy(n.$51, n));
            n.$cV(n.$e);
            n.$e$(n.$e)
        },
        $3d: function() {
            var i = this,
            t, r;
            i.$4o || (t = i.menuId ? n(i.menuId) : i.menu, t) && (s(t) && (r = n.$ep(t.type || "menu"), t = new r(t), t.doInit()), t.target = i, i.menu = t, i.$4o = !0)
        },
        $51: function(n) {
            var t = this,
            r;
            if (!t.isDisabled()) {
                if ((t.menu || t.menuId) && (t.$3d(), t.menu.target = t, t.menu.$L() ? t.menu.hide() : t.menu.show(t.$e, "bottom")), (t.enableToggle || t.enablePress) && t.setPressed(!t.isPressed()), r = t.validateForm ? [t.validateForm] : t.validateForms, r && r.length && !i.$4G(r, t.validateTarget, t.validateMessageBox)) return ! 1;
                t.$s("beforeclick", [n]) !== !1 && t.$s("click", [n]) !== !1 && t.handler && t.handler.apply(this, [n])
            }
        },
        setHandler: function(n) {
            this.handler = n
        },
        isPressed: function() {
            var n = this;
            return n.$x ? n.$e.$5(n.$D) : n.pressed
        },
        setPressed: function(n) {
            this.toggle(n)
        },
        togglePressed: function() {
            this.toggle()
        },
        toggle: function(n) {
            var t = this;
            u(n) && (n = !t.isPressed());
            t.$55(n)
        },
        $55: function(n) {
            var t = this;
            t.pressed = n;
            n ? t.$e.$3(t.$D) : t.$e.$W(t.$D)
        },
        $ei: function() {
            var n = this;
            n.$e.$W(n.iconCls + "-no");
            n.$e.$W(n.iconCls + "-only");
            n.$e.$W(n.iconCls + "-" + n.iconAlign);
            n.hasIcon() ? n.getText() ? n.$e.$3(n.iconCls + "-" + n.iconAlign) : n.$e.$3(n.iconCls + "-only") : n.$e.$3(n.iconCls + "-no")
        },
        hasIcon: function() {
            return !! (this.icon || this.iconFont)
        },
        setIcon: function(n) {
            var t = this,
            r;
            t.icon = n;
            t.$t || (r = $("<img>", {
                "class": t.iconCls
            }), i.$h(t.iconAlign, ["right", "bottom"]) ? r.insertAfter(t.$eQ) : r.insertBefore(t.$eQ), t.iconEl = r, t.$t = r);
            n ? t.$t.attr("src", n).css("display", "inline-block") : t.$t.hide();
            t.$ei()
        },
        setIconFont: function(n) {
            var t = this,
            r;
            t.iconFont = n;
            t.$t || (r = $("<i>"), i.$h(t.iconAlign, ["right", "bottom"]) ? r.insertAfter(t.$eQ) : r.insertBefore(t.$eQ), t.iconEl = r, t.$t = r);
            n ? (n.indexOf("f-icon-") === -1 && (n = "f-icon-" + n), t.$t.attr("class", t.iconCls + " ui-icon " + n).css("display", "inline-block")) : t.$t.hide();
            t.$ei()
        },
        getText: function() {
            return this.$eQ.html()
        },
        setText: function(n) {
            var t = this;
            t.text = n;
            t.$eQ.html(n);
            t.$ei();
            t.$x && t.$k(!0)
        },
        focus: function() {
            t.focus();
            this.$e.focus()
        },
        blur: function() {
            this.$e.blur()
        },
        click: function() {
            this.focus();
            this.$e.click()
        },
        __doLayout: function() {
            var t = this,
            n, i, r;
            t._super();
            n = t.$WG;
            f(t.width) && f(t.height) ? (i = Math.floor(n.$1() / 2), r = Math.floor(n.$4() / 2), n.css({
                position: "absolute",
                top: "50%",
                left: "50%",
                "margin-left": -i,
                "margin-top": -r
            })) : n.css("position") == "absolute" && n.css({
                position: "relative",
                top: 0,
                left: 0,
                "margin-left": 0,
                "margin-top": 0
            })
        }
    });
    n.Tool = n.Component.extend({
        ccls: "f-tool",
        textCls: "f-tool-text",
        iconCls: "f-tool-icon",
        icon: "",
        iconFont: "",
        text: "",
        displayRule: "inline-block",
        type: "tool",
        initEl: function() {
            var n = this,
            t, i;
            n._super();
            t = $("<div>", {
                id: n.id,
                "class": n.ccls
            });
            i = $("<span>", {
                "class": n.textCls,
                html: n.text
            }).$7(t);
            n.el = t;
            n.$e = t;
            n.textEl = i;
            n.$eQ = i;
            n.icon ? n.setIcon(n.icon) : n.iconFont && n.setIconFont(n.iconFont);
            n.$e.click($.proxy(n.$5s, n));
            n.$e$(n.$e); (n.menu || n.menuId) && n.$3d()
        },
        $3d: function() {
            var i = this,
            t, r;
            i.$4o || (t = i.menuId ? n(i.menuId) : i.menu, t) && (s(t) && (r = n.$ep(t.type || "menu"), t = new r(t), t.doInit()), t.target = i, i.menu = t, i.$4o = !0)
        },
        $5s: function(t) {
            var i = this;
            i.isDisabled() || (i.$e.$W(i.$8), n.hideQtip(i.$e), (i.menu || i.menuId) && (i.$3d(), i.menu.$L() ? i.menu.hide() : i.menu.show(i.$e, "bottom")), i.$s("beforeclick", [t]) !== !1) && i.$s("click", [t]) !== !1 && i.handler && i.handler.apply(this, [t])
        },
        setHandler: function(n) {
            this.handler = n
        },
        $ei: function() {
            var n = this;
            n.$e.$W(n.iconCls + "-no");
            n.$e.$W(n.iconCls + "-only");
            n.hasIcon() ? n.getText() || n.$e.$3(n.iconCls + "-only") : n.$e.$3(n.iconCls + "-no")
        },
        hasIcon: function() {
            return !! (this.icon || this.iconFont)
        },
        setIcon: function(n) {
            var t = this,
            i;
            t.icon = n;
            t.$t || (i = $("<img>", {
                "class": t.iconCls
            }).insertBefore(t.$eQ), t.iconEl = i, t.$t = i);
            n ? t.$t.attr("src", n).css("display", "inline-block") : t.$t.hide();
            t.$ei()
        },
        setIconFont: function(n) {
            var t = this,
            i;
            t.iconFont = n;
            t.$t || (i = $("<i>").insertBefore(t.$eQ), t.iconEl = i, t.$t = i);
            n ? (n.indexOf("f-icon-") === -1 && (n = "f-icon-" + n), t.$t.attr("class", t.iconCls + " ui-icon " + n).css("display", "inline-block")) : t.$t.hide();
            t.$ei()
        },
        getText: function() {
            return this.$eQ.html()
        },
        setText: function(n) {
            var t = this;
            t.text = n;
            t.$eQ.html(n);
            t.$ei();
            t.$x && t.$k(!0)
        }
    });
    n.Panel = n.PanelBase.extend({
        header: !0,
        border: !0,
        tableStyle: !1,
        type: "panel",
        initEl: function() {
            var t = this;
            t._super();
            t.frame && t.$e.$3("f-panel-frame ui-corner-all");
            t.tableStyle && n.$2("F.Form - tableStyle")
        }
    });
    n.Window = n.Panel.extend({
        ccls: "f-window",
        $H_: "f-window-maximized",
        renderTo: "body",
        modal: !0,
        hideOnMaskClick: !1,
        draggable: !0,
        closable: !0,
        closeAction: "hide",
        resizable: !1,
        maximizable: !1,
        maximized: !1,
        minimizable: !1,
        constrainInitialSize: !0,
        constrainSize: !1,
        dependsViewPortSize: !0,
        keepLastPosition: !1,
        keepLastSize: !1,
        top: r,
        left: r,
        percentWidth: r,
        percentHeight: r,
        defaultCorner: !0,
        goldenPosition: !1,
        positionX: "center",
        positionY: "center",
        positionSideSpace: 0,
        fixedPosition: !1,
        minWidth: 100,
        minHeight: 100,
        autoFocus: !0,
        target: "_self",
        enableAnimation: r,
        animationType: r,
        type: "window",
        initEl: function() {
            var t = this;
            t.hidden && t.iframe && (t.iframeDelay = !0);
            t._super();
            u(t.enableAnimation) || (t.enableAnimation = r, n.$2("F.Window - enableAnimation"));
            u(t.percentWidth) || (t.percentWidth = r, n.$2("F.Window - percentWidth"));
            u(t.percentHeight) || (t.percentHeight = r, n.$2("F.Window - percentHeight"));
            t.keepLastPosition && (t.keepLastPosition = !1, n.$2("F.Window - keepLastPosition"));
            t.keepLastSize && (t.keepLastSize = !1, n.$2("F.Window - keepLastSize"));
            t.dependsViewPortSize || (t.dependsViewPortSize = !0, n.$2("F.Window - dependsViewPortSize"));
            t.hideOnMaskClick && (t.hideOnMaskClick = !1, n.$2("F.Window - hideOnMaskClick"));
            t.$d("messagebox") || (t.fixedPosition && (t.fixedPosition = !1, n.$2("F.Window - fixedPosition")), t.positionX !== "center" && (t.positionX = "center", n.$2("F.Window - positionX")), t.positionY !== "center" && (t.positionY = "center", n.$2("F.Window - positionY")));
            t.$e.$3(t.ccls + " f-shadow");
            t.defaultCorner && t.$e.$3("ui-corner-all");
            t.header && (t.maximizable && t.$r.dblclick($.proxy(t.$sd, t)), t.$e.mousedown(function(r) {
                i.$e8($(r.target), ".f-tool") || t.$L() && n.wndManager.addActive(t)
            }));
            i.$He(function() {
                t.$L() && t.$k()
            },
            "resize." + t.id);
            t.$7r()
        },
        $7a: function() {
            var n = this,
            r, u, t, f;
            n._super();
            r = {
                type: "tool",
                iconFont: "expand",
                cls: "f-tool-maximize",
                hidden: !n.maximizable,
                handler: $.proxy(n.$sd, n)
            };
            u = {
                type: "tool",
                iconFont: "close",
                cls: "f-tool-close",
                hidden: !n.closable,
                handler: $.proxy(n.$7eButtonESC, n)
            };
            n.customToolAhead ? (n.tools.push(r), n.tools.push(u)) : (t = 0, f = n.getTool("toggle"), f && (t = i.$H3(f, n.tools), t++), i.$9(t++, r, n.tools), i.$9(t++, u, n.tools))
        },
        $sd: function() {
            var n = this;
            n.collapsed || (n.maximized = !n.maximized, n.$sb())
        },
        afterAddToPage: function() {
            function r() {
                var n = i.$H.$c(">.f-mask");
                n.length || (n = $("<div>", {
                    "class": "f-mask " + i.$eU
                }).$7(i.$H));
                n.$1(i.$H.$1(!0), !0);
                n.$4(i.$H.$4(!0), !0);
                n.show()
            }
            function u() {
                var n = i.$H.$c(">.f-mask");
                n.length && n.hide()
            }
            function f() {
                i.modal || (n.$3q || (n.$3q = $("<div>", {
                    "class": "f-mask f-mask-resizing"
                }).$7("body")), n.$3q.css({
                    width: $("body").$1(),
                    height: $(document).$q()
                }).show())
            }
            function e() {
                i.modal || n.$3q && n.$3q.length && n.$3q.hide()
            }
            var i = this;
            i._super();
            n.enableShim && i.$J.insertBefore(i.$e);
            i.draggable && i.$r && i.$r.length && i.$e.draggable({
                containment: "document",
                iframeFix: !0,
                helper: function() {
                    var n = $("<div>").attr({
                        "class": i.$e.attr("class"),
                        style: i.$e.attr("style")
                    }).css("opacity", .8);
                    return i.$r.clone().$7(n),
                    n
                },
                handle: i.$r,
                cancel: ".f-tool .ui-icon",
                start: function(t, r) {
                    i.$e.hide();
                    n.wndManager.addActive(i);
                    r.helper.css("z-index", n.wndManager.getZIndex() + 2)
                },
                drag: function(t, r) {
                    if (n.enableShim) {
                        var u = r.position.top,
                        f = r.position.left;
                        u < 0 && (u = 0);
                        i.$J.css({
                            top: Math.floor(u + n.$cH),
                            left: Math.floor(f + n.$4w)
                        })
                    }
                },
                stop: function(n, r) {
                    var u = r.position.top,
                    f = r.position.left;
                    u < 0 && (u = 0);
                    i.top = u - $(t).scrollTop();
                    i.left = f - $(t).scrollLeft();
                    i.$e.show();
                    i.$k()
                }
            });
            i.resizable && i.$e.resizable({
                containment: "document",
                helper: "ui-resizable-helper " + i.$eU,
                start: function(t, i) {
                    n.$H9 = !0;
                    f();
                    r();
                    i.helper.css("z-index", n.wndManager.getZIndex() + 2)
                },
                resize: function(t, r) {
                    if (n.enableShim) {
                        var u = r.helper.$1() + 1,
                        f = r.helper.$4() + 1,
                        e = r.originalSize.width,
                        o = r.originalSize.height;
                        u < e && (u = e);
                        f < o && (f = o);
                        i.$J.css({
                            width: u + n.$4a,
                            height: f + n.$4O
                        })
                    }
                },
                stop: function(t, r) {
                    n.$H9 = !1;
                    e();
                    i.width = r.helper.$1() + 1;
                    i.height = r.helper.$4() + 1;
                    u();
                    i.$k()
                }
            });
            i.hidden || i.show()
        },
        afterInitElHidden: function() {},
        $sb: function() {
            var n = this;
            n.maximized ? n.maximize() : n.restore()
        },
        __doLayout: function() {
            function i() {
                return n.dependsViewPortSize || n.fixedPosition || $("body").css("overflow") === "hidden" ? n.$Hv() : n.$14()
            }
            var n = this,
            t = i();
            if (!t.width || !t.height) {
                n._super();
                return
            }
            n.maximized ? (n.$e.css({
                left: 0,
                top: 0
            }), n.width = t.width, n.height = t.height, n._super(), t = i(), (t.width != n.width || t.height != n.height) && (n.width = t.width, n.height = t.height, n._super())) : (f(n.options.height) || n.percentHeight && (n.height = Math.floor(t.height * n.percentHeight)), f(n.options.width) || n.percentWidth && (n.width = Math.floor(t.width * n.percentWidth)), n._super(), n.fixedPosition ? n.$WU(t) : n.$Wv(t));
            n.$7k()
        },
        $Hy: function(n, t, i, r) {
            var u = this,
            s = !1,
            e, o;
            return (f(i) && i + t.height > n.height && (e = n.height - i, e < u.minHeight && (e = u.minHeight), e != u.height && (u.height = e, s = !0)), f(r) && r + t.width > n.width && (o = n.width - r, o < u.minWidth && (o = u.minWidth), o != u.width && (u.width = o, s = !0)), s) ? u.$sa && (new Date).getTime() - u.$sa < 300 ? !1 : (u.$sa = (new Date).getTime(), u.__doLayout(), !0) : !1
        },
        $Wv: function(n) {
            var i = this,
            e = i.$3A(),
            o = i.positionSideSpace,
            r,
            u; (f(i.top) ? r = i.top: i.positionY == "top" ? r = o: i.positionY == "center" ? (r = (n.height - e.height) / 2, i.goldenPosition && (r = n.height - n.height / 1.618 - e.height / 2)) : r = n.height - e.height, u = f(i.left) ? i.left: i.positionX == "left" ? o: i.positionX == "center" ? (n.width - e.width) / 2 : n.width - e.width, r < o && (r = o), u < o && (u = o), r = Math.floor(r), u = Math.floor(u), (i.constrainSize || i.constrainInitialSize && i.$4z) && i.$Hy(n, e, r, u)) || (i.left = u, i.top = r, i.$e.css({
                left: Math.floor(u + $(t).scrollLeft()),
                top: Math.floor(r + $(t).scrollTop()),
                right: "auto",
                bottom: "auto"
            }))
        },
        $WU: function(n) {
            var t = this,
            e = t.$3A(),
            u = t.positionSideSpace,
            i,
            r,
            o,
            s; (i = r = o = s = "auto", f(t.left) ? r = t.left: t.positionX === "left" ? r = u: t.positionX === "center" ? r = (n.width - e.width) / 2 : o = u, f(t.top) ? i = t.top: t.positionY === "top" ? i = u: t.positionY === "center" ? i = (n.height - e.height) / 2 : s = u, f(i) && i < u && (i = u), f(r) && r < u && (r = u), f(i) && (i = Math.floor(i)), f(r) && (r = Math.floor(r)), (t.constrainSize || t.constrainInitialSize && t.$4z) && t.$Hy(n, e, i, r)) || this.$e.css({
                position: "fixed",
                left: r,
                top: i,
                right: o,
                bottom: s
            })
        },
        active: function() {
            n.wndManager.addActive(this)
        },
        $7eButtonESC: function() {
            var n = this;
            n.closeAction === "hide" ? n.hide() : n.closeAction === "hiderefresh" ? n.hideRefresh() : (n.closeAction === "hidepostback" || n.closeAction === "close") && n.close()
        },
        close: function() {
            var n = this;
            n.$s("beforeclose") !== !1 && (n.hide(), n.$s("close"), n.$d("messagebox") && n.triggerNO())
        },
        $4X: function(n) {
            var t = this;
            if (t.maximized = n, n) {
                if (t.$e.$5(t.$H_)) return;
                t.$e.$3(t.$H_);
                t.$7M = t.width;
                t.$WC = t.height;
                t.draggable && t.$e.draggable("disable");
                t.resizable && t.$e.resizable("disable");
                t.$e.$W(t.$A)
            } else {
                if (!t.$e.$5(t.$H_)) return;
                t.$e.$W(t.$H_);
                u(t.$7M) || (t.width = t.$7M, t.height = t.$WC);
                t.draggable && t.$e.draggable("enable");
                t.resizable && t.$e.resizable("enable")
            }
        },
        $Hv: function() {
            var n = $(t);
            return {
                width: n.$V(),
                height: n.$q()
            }
        },
        $14: function() {
            return {
                width: $(document).$V(),
                height: $(document).$q()
            }
        },
        $3A: function() {
            return {
                width: this.$e.$1(),
                height: this.$e.$4()
            }
        },
        maximize: function() {
            var n = this;
            a(n, "maximize") || n.$L() && (n.$4X(!0), n.$k(), n.$s("maximize"))
        },
        restore: function() {
            var n = this;
            a(n, "restore") || n.$L() && (n.$4X(!1), n.$k(), n.$s("restore"))
        },
        __showEl: function() {
            var t = this;
            y() && $("body").addClass("f-window-ie8fix").removeClass("f-window-ie8fix");
            t._super();
            t.iframeLoaded || t.setIFrameUrl(t.iframeUrl);
            n.wndManager.addActive(t);
            t.$sb()
        },
        $3s: function() {
            var n = this,
            r;
            return n.iframe ? (r = i.$3D(n.target), r == t) ? !1 : !0 : !1
        },
        $Wm: function() {
            var r = this,
            f, e, o, s, n;
            return r.$3s() ? (f = i.$3D(r.target), !i.$eJ(f)) ? !1 : (e = r.$3S, u(e) && (e = r.$3S = f.F.$3Q()), f.F[e] || (o = e + "_wrapper", s = f.$("#" + o), s.length ? s.html("") : f.F.appendFormNode('<div class="f-window-wrap" id="' + o + '"><\/div>'), n = $.extend({},
            r.options, {
                renderTo: "#" + o,
                id: e,
                $3S: e,
                $3m: t,
                $4K: r
            }), r.options.iframeName && (n.iframeName = r.options.iframeName + r.options.target), n.target = "_self", delete n.f_state, delete n.items, delete n.listeners, n.tools && n.tools.length && (n.tools = $.grep(n.tools,
            function(n) {
                var t = !0;
                return $.each(["toggle", "maximize", "close"],
                function(i, r) {
                    if (n.cls.indexOf("f-tool-" + r) >= 0) return t = !1,
                    !1
                }),
                t
            })), f.F.wnd.$Wn(n)), f.F[e]) : !1
        },
        show: function(n, i, e, o) {
            var s = this,
            h, c;
            if (s.$3s() && (h = s.$Wm(), h)) {
                h.show(n, i, e, o);
                return
            }
            if (f(n) && (e = n, o = i, n = r, i = r), u(n) || s.setIFrameUrl(n), u(i) || s.setTitle(i), s.keepLastPosition || (s.top = s.options.top, s.left = s.options.left), f(e) && f(o) ? (s.width = e, s.height = o, s.maximized = !1, s.$7M = r) : s.keepLastSize || (s.width = s.options.width, s.height = s.options.height, s.maximized = s.options.maximized, s.$7M = r), s._super() === !1) return ! 1;
            s.autoFocus && s.$sp();
            y() && (c = s.$Hv(), c.width == 0 && c.height == 0 && t.setTimeout(function() {
                s.show(e, o)
            },
            200))
        },
        $WF: function() {
            var u = this,
            t = u.$4_(),
            r,
            n;
            if (i.$4$("slide", t)) {
                r = t.substr(5);
                switch (r) {
                case "Left":
                    n = "Right";
                    break;
                case "Right":
                    n = "Left";
                    break;
                case "Up":
                    n = "Down";
                    break;
                case "Down":
                    n = "Up"
                }
                t = "slide" + n
            }
            return t + "Out"
        },
        __hideEl: function() {
            var n = this;
            n._super()
        },
        hide: function() {
            var n = this;
            if (!a(n, "hide")) {
                if (n._super() === !1) return ! 1;
                n.__hideFinished()
            }
        },
        __hideFinished: function() {
            var t = this;
            n.enableShim && t.$J.hide();
            t.modal && n.maskEl.hide();
            n.wndManager.removeActive(t);
            t.$e.$5(t.$H_) && t.$e.$W(t.$H_)
        },
        $sp: function() {
            var r = this,
            i;
            if (n.$P) {
                t.focus();
                return
            }
            r.$sZ && (i = r.$sZ());
            i ? t.setTimeout(function() {
                i.focus()
            },
            0) : t.focus()
        },
        refreshIFrame: function() {
            var n = this;
            a(n, "refreshIFrame") || n._super()
        },
        setIFrameUrl: function(n) {
            var t = this;
            a(t, "setIFrameUrl", n) || t._super(n)
        },
        setWidth: function(n) {
            var t = this;
            a(t, "setWidth", n) || t._super(n)
        },
        setHeight: function(n) {
            var t = this;
            a(t, "setHeight", n) || t._super(n)
        },
        setSize: function(n, t) {
            var i = this;
            a(i, "setSize", n, t) || i._super(n, t)
        },
        setTitle: function(n) {
            var t = this;
            a(t, "setTitle", n) || t._super(n)
        },
        hidePostBack: function() {
            this.close()
        },
        hideRefresh: function() {
            this.hide();
            t.location.reload()
        },
        hideExecuteScript: function(n) {
            var i = this;
            i.hide();
            n && (e(n) ? new Function(n)() : n.apply(t))
        },
        executeScript: function(n) {
            var i = this;
            n && (e(n) ? new Function(n)() : n.apply(t))
        },
        getIFrameWindow: function() {
            var t = this,
            i;
            return t.$3s() ? (i = n.wnd.$4P(t), i) ? i.getIFrameWindow() : null: t._super()
        }
    });
    n.MessageBox = n.Window.extend({
        ccls: "f-messagebox",
        collapsible: !1,
        renderTo: "body",
        minWidth: 280,
        maxWidth: 900,
        minHeight: 0,
        maxHeight: 0,
        constrainInitialSize: !1,
        bodyPadding: 10,
        message: "",
        messageType: "",
        messageAlign: "left",
        messageIcon: "information",
        messageIconFont: "",
        messageIconList: ["information", "warning", "question", "error", "success"],
        buttonFill: !1,
        buttonPlain: !1,
        cancelButtonAhead: !1,
        buttonText: {
            ok: "OK",
            yes: "Yes",
            no: "No",
            cancel: "Cancel"
        },
        buttonIdList: ["ok", "cancel", "yes", "no"],
        showLoading: !1,
        displayMilliseconds: 0,
        autoFocus: !0,
        autoFocusButtonId: r,
        type: "messagebox",
        initEl: function() {
            var t = this,
            s, a, u, y, c, h, p, v, l, w, b, o, r, k;
            t.buttons || (t.buttons = t.messageType === "alert" ? ["ok"] : t.messageType === "confirm" || t.messageType === "prompt" ? t.cancelButtonAhead ? ["cancel", "ok"] : ["ok", "cancel"] : []);
            t.messageType === "prompt" && (t.promptConfig = t.promptConfig || {
                multiLine: !1,
                defaultValue: ""
            }); (t.messageType === "notify" || t.messageType === "prompt") && (t.autoFocus = !1);
            s = [];
            a = t.buttons;
            a && a.length && ($.each(a,
            function(n, r) {
                var f = "",
                u = {
                    type: "button"
                };
                e(r) ? (f = r, u.text = t.buttonText[f]) : (f = r.buttonId || r.id, $.extend(u, r));
                u.buttonId = f;
                u.listeners = {
                    click: function(n) {
                        t.$3r(n, f)
                    }
                };
                delete u.id; (t.buttonFill || t.buttonPlain) && i.$Hx(u, {
                    flex: 1
                });
                s.push(u)
            }), u = {
                type: "toolbar",
                align: "center",
                position: "bottom"
            },
            t.buttonPlain ? (u.items = [{
                type: "buttongroup",
                layout: "hbox",
                items: s
            }], u.layout = "fit", u.cls = "f-toolbar-buttonplain") : (u.items = s, t.buttonFill && (u.cls = "f-toolbar-buttonfill", u.layout = {
                childMargin: "0 5 0 0",
                type: "hbox"
            },
            s[s.length - 1].margin = "0")), t.bars = [u]);
            f(t.width) && (t.width < t.minWidth ? t.minWidth = t.width: t.width > t.maxWidth && (t.maxWidth = t.width));
            t._super();
            t.$e.$3("f-window f-shadow");
            t.$e.css("z-index", n.$7Z);
            t.messageType && t.$e.$3(t.$M(t.messageType));
            y = $("<table>", {
                "class": t.$M("table")
            });
            c = $("<tr>"); (t.messageIcon || t.messageIconFont) && (h = $("<td>", {
                "class": t.$M("iconct")
            }), v = t.$M("icon"), t.messageIconFont ? (t.messageIconFont.indexOf("f-icon-") === -1 && (t.messageIconFont = "f-icon-" + t.messageIconFont), p = $("<i>", {
                "class": v + " ui-icon " + t.messageIconFont
            }).$7(h)) : p = i.$h(t.messageIcon, t.messageIconList) ? $("<i>", {
                "class": v + " ui-icon f-messageicon-" + t.messageIcon
            }).$7(h) : $("<img>", {
                "class": v,
                src: t.messageIcon
            }).$7(h), h.$7(c), t.$W_ = p, t.$c5 = h);
            t.showLoading && $("<td>", {
                "class": t.$M("loadingct"),
                html: '<div class="f-loading"><div class="f-loading-img"><img src="' + n.loadingImage + '"/><\/div><\/div>'
            }).$7(c);
            l = $("<td>", {
                "class": t.$M("messagect")
            });
            w = $("<div>", {
                "class": t.$M("message"),
                html: t.message
            }).$7(l);
            t.messageAlign !== "left" && w.$3("f-align-" + t.messageAlign);
            t.$56 = w;
            t.messageType === "prompt" && (o = {
                renderTo: l,
                cls: t.$M("prompt-input")
            },
            r = t.promptConfig, r.defaultValue && (o.value = r.defaultValue), r.required && (o.required = !0), r.multiLine ? (r.multiLineHeight && (o.height = r.multiLineHeight), b = new n.TextArea(o)) : (r.inputType && (o.inputType = r.inputType), k = t.$sw(), k && (o.enterClickControl = k.id), b = new n.TextBox(o)), t.$3W = b);
            l.$7(c);
            c.$7(y);
            y.$7(t.$H);
            t.$Wy = l
        },
        $3r: function(n, t) {
            var u = this,
            f;
            if (o(n) || (t = n, n = r), u.messageType !== "prompt" || !i.$h(t, ["yes", "ok"]) || (f = u.$3W.validate(), f)) {
                u.hide();
                try {
                    u.handler && u.handler.apply(this, [n, t])
                } catch(e) {}
            }
        },
        isAlert: function() {
            var t = this,
            i = !1,
            n;
            return t.buttons.length === 1 && (n = t.buttons[0], e(n) || (n = n.buttonId || n.id), (n === "yes" || n === "ok") && (i = !0)),
            i
        },
        triggerYES: function() {
            this.$sY(["yes", "ok"])
        },
        triggerNO: function() {
            var n = this;
            n.isAlert() ? n.$3r("cancel") : n.$sY(["no", "cancel"])
        },
        $sY: function(n) {
            var t = this,
            i = t.$sA(n);
            i && t.$3r(i)
        },
        $sA: function(n) {
            var r = this,
            t = "";
            return $.each(r.buttons,
            function(r, u) {
                var f = u;
                return e(u) || (f = u.buttonId || u.id),
                i.$h(f, n) ? (t = f, !1) : void 0
            }),
            t
        },
        $sw: function() {
            return this.getButton(["yes", "ok"])
        },
        $sZ: function() {
            var t = this,
            i = t.autoFocusButtonId,
            n;
            return u(i) || (n = t.getButton(i)),
            n || (n = t.$sw()),
            n
        },
        getButton: function(n) {
            var r = this,
            u, i, t, f;
            return v(n) && (n = r.$sA(n)),
            i = r.bars,
            i.length && i[0].items.length && (t = i[0], t.items && t.items.length && (f = t.items[0].isType("buttongroup") ? t.items[0].items: t.items, $.each(f,
            function(t, i) {
                if (i.buttonId === n) return u = i,
                !1
            }))),
            u
        },
        hide: function() {
            var n = this;
            if (n._super() === !1) return ! 1
        },
        __hideFinished: function() {
            var t = this;
            t._super();
            delete n.$eG[t.id];
            t.$e.remove();
            n.wndManager.remove(t)
        },
        show: function() {
            var i = this;
            if (i._super() === !1) return ! 1;
            f(i.displayMilliseconds) && i.displayMilliseconds > 0 && t.setTimeout(function() {
                i.hide()
            },
            i.displayMilliseconds);
            n.$P || i.messageType === "prompt" && i.$3W.focus()
        },
        __doLayout: function() {
            var n = this,
            t;
            n._super();
            n.$c5 && n.$c5.length && n.$c5.width(n.$W_.$1(!0));
            n.messageType === "prompt" && (t = n.$Wy.$V(), n.$3W.width = t, n.$3W.$k())
        },
        getPromptValue: function() {
            var n = this,
            t;
            return n.messageType === "prompt" && (t = n.$3W.getValue()),
            t
        }
    });
    n.GroupPanel = n.Panel.extend({
        ccls: "f-grouppanel",
        _elTag: "fieldset",
        headerTag: "legend",
        type: "grouppanel",
        initEl: function() {
            var n = this;
            n._super();
            n.$e.$3(n.ccls);
            n.$r.$W(n.$e7).$3(n.$M("header"));
            n.header && n.collapsible && (n.getTool("toggle").$e.off("click mouseenter mouseleave"), n.$r.click($.proxy(n.$7f, n)));
            n.$H.$W(n.$u)
        },
        __doLayout: function() {
            var n = this;
            n._super();
            n.collapsible || n.$_.css({
                "margin-left": 0,
                cursor: "default"
            })
        }
    });
    n.Accordion = n.Panel.extend({
        ccls: "f-accordion",
        activePaneIndex: 0,
        fill: !0,
        showCollapseTool: !0,
        type: "accordion",
        initEl: function() {
            var n = this;
            n._super();
            n.$e.$3(n.ccls);
            n.showCollapseTool || n.$e.$3(n.$M("nocollapsetool"))
        },
        __doLayout: function() {
            var n = this;
            i.$Hk(n.$e, ".f-accordionpane");
            n._super()
        },
        $Ha: function() {
            var n = this,
            r, t, i;
            n.$e.$3(n.$eb());
            r = n.$H.$q();
            t = n.$H.$V();
            n.fill || n.$3G();
            i = n.$13();
            $.each(n.items,
            function(r, u) {
                u.$e.$3(n.$eL());
                u.width = t;
                n.activePaneIndex === r && (u.height = i);
                u.$k()
            });
            n.fill || n.$3T()
        },
        $13: function() {
            var i = this,
            e = i.$H.$q(),
            u,
            n,
            t = e,
            f;
            return $.each(i.items,
            function(r, f) {
                var e = i.activePaneIndex !== r;
                f.$HK(e);
                e ? t -= f.$3V() : n = f;
                u = f
            }),
            i.fill || (n ? (n.height = r, n.$k(), f = n.$e.$4(!0), f < t ? (t = f, u.$e.css("border-bottom-width", 1)) : u.$e.css("border-bottom-width", 0)) : t = 0),
            t
        },
        getActivePane: function() {
            return this.getActiveItem()
        },
        getActivePaneIndex: function() {
            return this.getActiveItemIndex()
        },
        getActivePaneId: function() {
            return this.getActiveItemId()
        },
        activeNextPane: function() {
            var t = this,
            n = t.getActivePaneIndex();
            return n++,
            n >= t.items.length && (n = 0),
            t.activePane(n)
        },
        setActivePane: function(n, t) {
            var u = this,
            f, s, e;
            return (o(n) || (t = n, n = r), f = u.getItem(t), !f) ? !1 : u.fill && f.isActived() ? (s = u.nearValidItemIndex(u.getActivePaneIndex()), u.setActivePane(n, s), !0) : (e = i.$H3(f, u.items), u.activePaneIndex === e && (e = -1), u.activePaneIndex = e, u.$x && (u.$k(), u.$s("panechange", [n, f, e])), !0)
        },
        activePane: function() {
            return this.setActivePane.apply(this, arguments)
        }
    });
    $.extend(n.Accordion.prototype, n.$c6);
    n.AccordionPane = n.Panel.extend({
        ccls: "f-accordionpane",
        border: !1,
        header: !0,
        collapsible: !0,
        type: "accordionpane",
        initEl: function() {
            var n = this;
            n._super();
            n.$e.$3(n.ccls);
            n.$r.$3(n.$M("header"));
            n.header && n.collapsible && (n.getTool("toggle").$e.off("click"), n.$r.click($.proxy(n.$c4, n)));
            n.$e$(n.$r, n.$M("hover"), n.$e)
        },
        $c4: function(n) {
            this.parent.activePane(n, this)
        },
        $HK: function(n) {
            var t = this,
            i;
            t._super(n);
            i = t.$M("selected");
            n ? t.$e.$W(i) : t.$e.$3(i)
        },
        __doLayout: function() {
            var n = this;
            n._super()
        },
        isActived: function() {
            return ! this.isCollapsed()
        },
        collapse: function() {
            var n = this;
            n.isActived() && n.parent.activePane(n)
        },
        expand: function() {
            var n = this;
            n.isActived() || n.parent.activePane(n)
        }
    });
    n.Toolbar = n.PanelBase.extend({
        pbcls: "f-toolbar",
        position: "top",
        align: "left",
        header: !1,
        headerStyle: !1,
        itemSpace: 8,
        defaultItemType: "toolbartext",
        title: "",
        $7l: "f-toolbar-item",
        type: "toolbar",
        initEl: function() {
            var t = this;
            t._super();
            t.headerStyle && (t.headerStyle = !1, n.$2("F.Toolbar - headerStyle"));
            t.title && (t.title = "", n.$2("F.Toolbar - title"));
            var r = t.pbcls + "-title",
            i = $("<div>", {
                "class": r
            }),
            u = $("<div>", {
                "class": r + "-text",
                html: t.title || "&nbsp;"
            }).$7(i);
            i.prependTo(t.$H);
            t.$_ = i;
            t.$HA = u;
            t.$e.$3(t.pbcls + "-align-" + t.align + " f-panel-toolbar-" + t.position);
            t.headerStyle ? t.$e.$3(t.$e7) : t.$e.$3(t.$u);
            $.each(t.items,
            function(n, i) {
                var r = t.__addItem(i);
                r !== i && (t.items[n] = r)
            })
        },
        $7a: function() {},
        setTitle: function(n) {
            var t = this;
            t.title = n;
            t.$HA.html(n || "&nbsp;")
        },
        __addItem: function(t, i, r) {
            var f = this,
            u, e;
            return t === "-" ? t = new n.ToolbarSeparator: t === "->" && (t = new n.ToolbarFill),
            i = i || f.$H,
            u = f._super(t, i, r),
            e = f.$7l,
            u.$e.$5(e) || u.$e.$3(e),
            u
        },
        $Wo: function() {
            var t = this,
            i = [];
            return t.items.length && $.each(t.items,
            function(t, r) {
                r instanceof n.ToolbarFill && i.push(t)
            }),
            i
        },
        $Wz: function() {
            for (var u = this,
            n = 0,
            t = 0,
            f = u.items.length,
            i, r; t < f; t++) i = u.items[t],
            i.$e.is(":visible") && (r = i.$e.$4(!0), r > n && (n = r));
            return n
        },
        $7q: function(n, t) {
            var u = this,
            r, e, i;
            for (f(n) || (n = 0), f(t) || (t = u.items.length - 1), r = 0, i = n; i <= t; i++) e = u.items[i],
            e.$e.is(":visible") && (r += e.$e.$1(), i !== t && (r += u.itemSpace));
            return r
        },
        $34: function(n, t, i) {
            var f = this,
            u, r, e, o;
            for (typeof i == "undefined" && (i = 0), u = n, e = i; u <= t; u++) r = f.items[u],
            o = (f.$H.$q() - r.$e.$4(!0)) / 2,
            r.$e.css("top", o),
            r.$e.css("left", e),
            r.$e.is(":visible") && (e += r.$e.$1(!0) + f.itemSpace)
        },
        $cc: function(n, t, i) {
            var f = this,
            u, r, e, o;
            for (typeof i == "undefined" && (i = 0), u = t, e = i; u >= n; u--) r = f.items[u],
            o = (f.$H.$q() - r.$e.$4(!0)) / 2,
            r.$e.css("top", o),
            r.$e.css("right", e),
            r.$e.is(":visible") && (e += r.$e.$1(!0) + f.itemSpace)
        },
        __doLayout: function() {
            var n = this,
            f, e, i, t, r, u;
            if (n.$_.$1(n.$H.$V(), !0), f = n.$Hi(), f) n._super();
            else if (n.items && n.items.length) if (n.$32(), e = n.$Wz(), n.$H.$q(e), i = n.items.length - 1, t = n.$Wo(), t.length) if (t.length === 1) n.$34(0, t[0] - 1),
            n.$cc(t[0] + 1, i);
            else {
                r = t[0];
                u = t[1];
                n.$34(0, r - 1);
                n.$cc(u + 1, i);
                var o = r + 1,
                s = u - 1,
                a = n.$7q(o, s),
                h = n.$7q(0, r - 1),
                v = n.$7q(u + 1),
                c = n.$H.innerWidth(),
                l = (c - h - v - a) / 2 + h;
                n.$34(o, s, l)
            } else if (n.align === "left") n.$34(0, i);
            else if (n.align === "right") n.$cc(0, i);
            else {
                var y = n.$7q(),
                c = n.$H.innerWidth(),
                l = (c - y) / 2;
                n.$34(0, i, l)
            }
        }
    });
    n.ToolbarItemBase = n.Component.extend({
        type: "toolbaritembase",
        initEl: function() {
            var n = this,
            t;
            n._super();
            t = $("<div>", {
                id: n.id,
                "class": n.ccls + " f-toolbar-item"
            });
            n.el = t;
            n.$e = t
        }
    });
    n.ToolbarText = n.ToolbarItemBase.extend({
        ccls: "f-toolbar-text",
        text: "",
        type: "toolbartext",
        initEl: function() {
            var n = this;
            n._super();
            this.$e.html(this.text)
        },
        setText: function(n) {
            var t = this;
            t.$e.html(n);
            t.$x && t.$k(!0)
        },
        getText: function() {
            return this.$e.html()
        }
    });
    n.ToolbarFill = n.ToolbarItemBase.extend({
        ccls: "f-toolbar-fill",
        type: "toolbarfill",
        initEl: function() {
            var n = this;
            n._super()
        }
    });
    n.ToolbarSeparator = n.ToolbarItemBase.extend({
        ccls: "f-toolbar-separator",
        type: "toolbarseparator",
        initEl: function() {
            var n = this;
            n._super()
        }
    });
    n.Menu = n.Container.extend({
        ccls: "f-menu",
        renderTo: "body",
        hidden: !0,
        defaultItemType: "menuitem",
        $7l: "f-menu-item",
        type: "menu",
        initEl: function() {
            var n = this,
            t;
            n._super();
            t = $("<ul>", {
                id: n.id,
                "class": n.ccls + " ui-corner-all f-shadow " + n.$u
            });
            n.el = t;
            n.$e = t;
            $.each(n.items,
            function(t, i) {
                var r = n.__addItem(i);
                r !== i && (n.items[t] = r)
            });
            n.$3dEvents();
            n.$7r()
        },
        afterAddToPage: function() {
            var t = this;
            t._super();
            n.enableShim && t.$J.insertBefore(t.$e)
        },
        __doLayout: function() {
            var n = this;
            n._super();
            n.$32()
        },
        $3dEvents: function() {
            function s(n) {
                n.$e.$5("f-menu-separator") || n.$e.$5(i.$A) || !n.showHover || n.$H.$3(i.$8)
            }
            function r(n) {
                n.$H.$W(i.$8)
            }
            function u(n) {
                n.menu.target = n;
                var t = i.$HO() + 10;
                n.menu.$e.css("z-index", t);
                n.menu.show(n.$e, "right")
            }
            function f(n) {
                $.each(i.items,
                function(t, i) {
                    i !== n && (r(i), i.menu && i.menu.hide())
                })
            }
            var i = this,
            e, o;
            if (n.$P) i.$e.on("click", "li.f-menu-item",
            function() {
                var i = $(this),
                t = n(i);
                t.menu && (t.menu.$L() ? t.menu.hide() : u(t));
                f(t)
            });
            else i.$e.on("mouseenter mouseleave", "li.f-menu-item",
            function(h) {
                var l = $(this),
                c = n(l);
                i.$c1 = !0;
                t.clearTimeout(e);
                t.clearTimeout(o);
                h.type === "mouseenter" ? (s(c), c.menu && (c.menu.$c1 = !1, e = t.setTimeout(function() {
                    u(c)
                },
                200)), f(c)) : c.menu ? o = t.setTimeout(function() {
                    c.menu.$L() ? c.menu.$c1 || (c.menu.hide(), r(c)) : (c.menu.hide(), r(c))
                },
                100) : r(c)
            })
        },
        __addItem: function(t, i, r) {
            var e = this,
            u, f;
            return t === "-" && (t = new n.MenuSeparator),
            u = e._super(t, i, r),
            f = e.$7l,
            u.$e.$5(f) || u.$e.$3(f),
            u
        },
        show: function(r, e, o) {
            var s = this,
            l, h, g, nt;
            s.$L() && s.hide();
            s.$e.css({
                width: "auto",
                height: "auto"
            });
            s._super();
            $.each(s.items,
            function(n, t) {
                var i = t.$H;
                i.$5(s.$8) && i.$W(s.$8)
            });
            var c = s.$e.$1(!0),
            v = s.$e.$4(!0),
            b = $(t).$V(),
            a = $(t).$q(),
            k = $(t).scrollLeft(),
            y = $(t).scrollTop(),
            tt = s.$HO(),
            d = n.wndManager.getZIndex() + 10;
            if (!w(tt) && tt > d || (s.zIndex = d, s.$e.css("z-index", d)), u(r)) l = n.$C.left + 1,
            h = n.$C.top + 1,
            l + c - k > b && (l -= c),
            h + v - y > a && (h = a - v + y, h < 0 && (h = 0));
            else if (f(r) && f(e)) l = r,
            h = e;
            else if (r = $(r), r.length) {
                g = r;
                var p = r.offset(),
                it = r.$1(),
                rt = r.$4(),
                l = p.left,
                h = p.top;
                e === "right" ? (l += it, h + v - y > a && (h = a - v + y, h < 0 && (h = 0, c = c + i.$71(), s.$e.$1(c), s.$e.$4(a, !0))), l + c - k > b && (l = p.left - c)) : (h += rt, h + v - y > a && (nt = p.top - v, nt >= 0 ? h = nt: (c = c + i.$71(), s.$e.$1(c), s.$e.$4(a - h, !0))), l + c - k > b && (l = p.left + it - c));
                o && (l += o.left, h += o.top)
            }
            f(l) && f(h) && (g && (s.targetel = g), s.$e.css({
                left: l,
                top: h
            }), s.$7k(s.$g), n.$H4(s.$e))
        },
        showBy: function(n, t, i) {
            n.$d && n.$e && (n = n.$e);
            this.show(n, t, i)
        },
        showAt: function(n, t) {
            this.show(n, t)
        },
        hide: function() {
            var t = this;
            if (t.$L()) {
                if (t._super() === !1) return ! 1;
                t.$c1 = !1;
                $.each(t.items,
                function(n, t) {
                    t.hidePopEl && t.hidePopEl();
                    t.menu && t.menu.hide()
                });
                n.enableShim && t.$J.hide()
            }
        },
        hideTopMenu: function() {
            this.getTopMenu().hide()
        },
        getTopMenu: function() {
            for (var t = this,
            n = t; n.target && n.target.$d("menuitembase");) n = n.target.parent;
            return n
        }
    });
    n.MenuItemBase = n.PanelBase.extend({
        pbcls: "f-menu-item",
        $w: function(n) {
            var t = "f-menu-item";
            return n && (t += "-" + n),
            t
        },
        _elTag: "li",
        showHover: !0,
        type: "menuitembase",
        initEl: function() {
            var n = this;
            n._super();
            n.$e.$3(n.ccls);
            n.showHover || n.$e.css("cursor", "default")
        },
        $7a: function() {},
        hideTopMenu: function() {
            var n = this;
            n.parent.hideTopMenu()
        }
    });
    n.MenuItem = n.MenuItemBase.extend({
        icon: "",
        iconFont: "",
        href: "",
        hrefTarget: "_self",
        text: "",
        hideOnClick: r,
        type: "menuitem",
        initEl: function() {
            var t = this,
            r, u, i, f;
            t._super();
            r = "span";
            t.href && (r = "a");
            u = $("<" + r + ">", {
                html: t.text,
                "class": t.$w("text")
            }).$7(t.$H);
            t.href && u.attr("href", t.href).attr("target", t.hrefTarget);
            t.menu && ($("<i>", {
                "class": t.$w("icon-arrowr") + " ui-icon"
            }).$7(t.$H), i = t.menu, s(i) && (f = n.$ep(i.type || "menu"), i = new f(i)), i.doInit(), i != t.menu && (t.menu = i));
            t.$e.click($.proxy(t.$7w, t));
            t.icon ? t.setIcon(t.icon) : t.iconFont && t.setIconFont(t.iconFont)
        },
        setIcon: function(n) {
            var t = this,
            i;
            t.icon = n;
            i = t.$H.$c("." + t.$w("icon"));
            i.length && i.remove();
            n && $("<img>", {
                "class": t.$w("icon"),
                src: n
            }).insertBefore(t.$H.$c("." + t.$w("text")))
        },
        setIconFont: function(n) {
            var t = this,
            i;
            t.iconFont = n;
            i = t.$H.$c("." + t.$w("icon"));
            i.length && i.remove();
            n && (n.indexOf("f-icon-") === -1 && (n = "f-icon-" + n), $("<i>", {
                "class": t.$w("icon") + " ui-icon " + n
            }).insertBefore(t.$H.$c("." + t.$w("text"))))
        },
        $7w: function(n) {
            var t = this;
            t.isDisabled() || t.$s("beforeclick", [n]) !== !1 && (t.$s("click", [n]) !== !1 && t.handler && t.handler.apply(t, [n]), u(t.hideOnClick) ? t.menu || t.hideTopMenu() : t.hideOnClick && t.hideTopMenu())
        },
        setHandler: function(n) {
            this.handler = n
        },
        setText: function(n) {
            var t = this;
            t.$e.$c("." + t.$w("text")).html(n);
            t.$x && t.$k(!0)
        },
        getText: function() {
            var n = this;
            return n.$e.$c("." + n.$w("text")).html()
        }
    });
    n.MenuSeparator = n.MenuItemBase.extend({
        ccls: "f-menu-separator",
        type: "menuseparator",
        initEl: function() {
            var n = this;
            n._super()
        },
        getText: function() {}
    });
    n.MenuCheckBox = n.MenuItemBase.extend({
        ccls: "f-menu-checkitem",
        checked: !1,
        group: "",
        hiddenName: "",
        text: "",
        type: "menucheckbox",
        initEl: function() {
            var n = this,
            t, r, i;
            n._super();
            t = n.group ? "f-menu-radiobutton": "f-menu-checkbox";
            n.checked && (t += " " + n.$j);
            $("<i>", {
                "class": n.$w("icon") + " ui-icon " + t
            }).$7(n.$H);
            r = $("<div>", {
                html: n.text,
                "class": n.$w("text")
            }).$7(n.$H);
            n.menu && $("<i>", {
                "class": n.$w("icon-arrowr") + " ui-icon"
            }).$7(n.$H);
            n.hiddenName && (i = $("<input>", {
                type: "hidden",
                value: n.checked,
                name: n.hiddenName
            }).$7(n.$H), n.$sy = i, n.bodyHiddenEl = i);
            n.$e.click($.proxy(n.$7w, n))
        },
        $7w: function(n) {
            var t = this,
            i, r;
            t.isDisabled() || (i = !t.isChecked(), t.setChecked(i), r = t.parent, t.group ? i && (t.$s("checkchange", [n]), r.$s("checkchange", [n, t, i]), r.$s("itemcheckchange", [n, t, i])) : (t.$s("checkchange", [n, i]), r.$s("checkchange", [n, t, i]), r.$s("itemcheckchange", [n, t, i])), t.$s("beforeclick", [n]) !== !1) && (t.$s("click", [n]) !== !1 && t.handler && t.handler.apply(t, [n]), t.group && t.hideTopMenu())
        },
        getCheckBoxEl: function() {
            return this.$e.$c("." + this.$w("icon"))
        },
        isChecked: function() {
            var n = this,
            t = n.getCheckBoxEl();
            return t.$5(n.$j)
        },
        setChecked: function(n) {
            var t = this,
            i = t.getCheckBoxEl(),
            r;
            t.group ? (i.$3("f-menu-radiobutton"), i.$W("f-menu-checkbox"), n && (r = t.parent, r.$d("menu") && $.each(r.items,
            function(n, i) {
                if (i.$d("menucheckbox") && i.group === t.group) {
                    var r = i.getCheckBoxEl();
                    i === t ? (r.$3(t.$j), i.$eK(!0)) : (r.$W(t.$j), i.$eK(!1))
                }
            }))) : (i.$3("f-menu-checkbox"), i.$W("f-menu-radiobutton"), n ? (i.$3(t.$j), t.$eK(!0)) : (i.$W(t.$j), t.$eK(!1)))
        },
        $eK: function(n) {
            var t = this;
            t.hiddenName && t.$sy.val(n)
        },
        setText: function(n) {
            var t = this;
            t.$e.$c("." + t.$w("text")).html(n);
            t.$x && t.$k(!0)
        },
        getText: function() {
            var n = this;
            return n.$e.$c("." + n.$w("text")).html()
        }
    });
    n.Tree = n.Panel.extend({
        ccls: "f-tree",
        $eI: "f-tree-node",
        $3c: "f-tree-minimode",
        $6: "f-tree-node-unselectable",
        icons: !0,
        expandOnDblClick: !0,
        singleClickExpand: !1,
        singleExpand: !1,
        rootVisible: !1,
        nodeHyperLink: !1,
        enableTextSelection: !1,
        multiSelect: !1,
        keepCurrentSelection: !1,
        autoScroll: !0,
        autoLeafIdentification: !0,
        hideHScrollbar: !1,
        hideVScrollbar: !1,
        expanderToRight: !1,
        headerStyle: !1,
        miniMode: !1,
        miniModePopWidth: 200,
        type: "tree",
        initEl: function() {
            var t = this,
            r;
            t._super();
            t.nodeHyperLink && (t.nodeHyperLink = !1, n.$2("F.Tree - nodeHyperLink"));
            t.miniMode && (t.miniMode = !1, n.$2("F.Tree - miniMode"));
            t.hideHScrollbar && (t.hideHScrollbar = !1, n.$2("F.Tree - hideHScrollbar"));
            t.hideVScrollbar && (t.hideVScrollbar = !1, n.$2("F.Tree - hideVScrollbar"));
            t.expanderToRight && (t.expanderToRight = !1, n.$2("F.Tree - expanderToRight"));
            t.headerStyle && (t.headerStyle = !1, n.$2("F.Tree - headerStyle"));
            t.selectedNodes = u(t.selectedNodes) ? [] : i.$ez([], t.selectedNodes);
            t.$7_ = t.id + "_node_";
            t.$e.$3(t.ccls);
            r = $("<div>", {
                "class": "f-tree-table-scroll"
            });
            r.appendTo(t.$H);
            t.$7E = r;
            t.$WIs();
            t.data ? t.loadData(t.data) : t.rootNode && t.setRootNode(t.rootNode)
        },
        $HW: function() {
            return this.$7E
        },
        $W6: function() {
            function t(t, i) {
                var r = n.$M(i);
                t ? n.$e.$3(r) : n.$e.$W(r)
            }
            var n = this;
            n.miniMode && (n.headerStyle = !0);
            t(!n.icons, "noicons");
            t(n.hideHScrollbar, "nohscroll");
            t(n.hideVScrollbar, "novscroll");
            t(n.expanderToRight, "expandertoright");
            t(n.miniMode, "minimode");
            t(n.headerStyle, "headerstyle")
        },
        $WIs: function() {
            var t = this;
            if (!n.$P) t.$H.on("mouseenter mouseleave", "." + t.$eI,
            function(n) {
                var i = $(this);
                i.$5(t.$6) || (n.type === "mouseenter" ? i.$3(t.$8) : n.type === "mouseleave" && i.$W(t.$8))
            });
            t.$H.on("click dblclick contextmenu", "." + t.$eI,
            function(n) {
                var i = $(this),
                u = t.getNodeData(i),
                r = u.id;
                i.$5(t.$6) || (n.type === "click" ? (t.$HX(n, i), t.$s("nodeclick", [n, r])) : n.type === "dblclick" ? (t.expandOnDblClick && t.$e0(n, i), t.$s("nodedblclick", [n, r])) : n.type === "contextmenu" && (t.$HX(n, i), t.$s("beforenodecontextmenu", [n, r]) === !1 && n.preventDefault()))
            });
            if (t.singleClickExpand) t.$H.on("click", "." + t.$eI,
            function(n) {
                var i = $(this);
                i.$5(t.$6) || t.$e0(n, i)
            });
            t.$H.on("click", ".f-tree-node .f-tree-expander",
            function(n) {
                var i = $(this),
                r = i.$e1("tr");
                return t.$e0(n, r),
                !1
            });
            t.$H.on("click", ".f-tree-node .f-tree-checkbox",
            function(n) {
                var i = $(this),
                u = i.$e1("tr");
                return t.$3H(n, u, r, !1),
                !1
            });
            if (!t.enableTextSelection && "onselectstart" in document.createElement("div")) t.$H.on("selectstart",
            function(n) {
                $(n.target).is(":input") || n.preventDefault()
            })
        },
        $HX: function(n, t) {
            var i = this,
            r = i.getNodeId(t),
            f,
            u,
            s;
            if (!t.$5(i.$6)) {
                if (i.multiSelect) {
                    if (n.shiftKey && i.$eX && (f = i.$H6(i.$eX), f.length)) {
                        var h = f.index(),
                        e = t.index(),
                        c = Math.min(h, e),
                        l = Math.max(h, e),
                        o = [];
                        for (u = c; u <= l; u++) s = i.$m(i.$H6(u)),
                        s.unselectable || o.push(s.id);
                        c === e && o.reverse();
                        i.selectNodes(n, o, !1);
                        return
                    }
                    if (i.keepCurrentSelection || n.ctrlKey) {
                        i.isNodeSelected(r) ? i.deselectNodes(n, r) : i.selectNodes(n, r, !0);
                        return
                    }
                }
                i.selectNodes(n, r, !1)
            }
        },
        loadData: function(n, t) {
            var i = this,
            r, f;
            e(n) ? (r = i.getNodeData(n), r.children = t, i.$7U(r), r.expanded && i.expandNode(r)) : (t = n, f = i.rootNode, u(t) || (f = {
                children: t
            }), i.setRootNode(f))
        },
        $7U: function(n) {
            var t = this,
            i = n.children;
            t.autoLeafIdentification && (n.leaf = i && i.length ? !1 : !0);
            t.nodeDataBound && t.nodeDataBound.apply(t, [n]);
            i && i.length && $.each(i,
            function(n, i) {
                t.$7U(i)
            })
        },
        setRootNode: function(n) {
            var r = this,
            f, o, e;
            r.$W6();
            r.$7U(n);
            u(n) ? n = r.rootNode: (n.id = "root", n.expanded = !0, n.level = n.level || 0, n.leaf = !1, r.rootNode = n);
            r.miniMode ? (f = $("<ul>", {
                "class": r.$M("minimode-list")
            }), r.$WP(f, n), i.$eh(r.$H, ">." + r.$3c + "-list", f)) : (o = r.$7v(n, n.level, r.rootVisible), e = $("<table>", {
                "class": "f-tree-table"
            }), e.html(o.join("")), i.$eh(r.$7E, ">.f-tree-table", e));
            r.$x && r.$k();
            t.setTimeout(function() {
                r.$s("dataload")
            },
            100)
        },
        $WP: function(n, t) {
            var i = this;
            $.each(t.children,
            function() {
                var t = this,
                u = $("<li>", {
                    "class": i.$M("minimode-item") + " ui-widget-header",
                    "data-nodeid": t.id
                }).$7(n),
                f = $("<div>", {
                    "class": i.$M("minimode-item-inner")
                }).$7(u),
                r = $("<i>", {
                    "class": i.$M("minimode-icon") + " ui-icon"
                }).$7(f);
                t.icon ? (r.$3("f-tree-custom-icon"), r.css({
                    "background-image": "url(" + t.icon + ")"
                })) : t.iconFont && r.$3("f-tree-custom-iconfont f-icon-" + t.iconFont);
                t.qtip && u.attr("data-qtip", t.qtip)
            })
        },
        getRootNode: function() {
            return this.rootNode
        },
        showIcons: function() {
            var n = this;
            n.icons = !0;
            n.$e.$W("f-tree-noicons")
        },
        hideIcons: function() {
            var n = this;
            n.icons = !1;
            n.$e.$3("f-tree-noicons")
        },
        toggleIcons: function() {
            var n = this;
            n.icons = !n.icons;
            n.$e.$ev("f-tree-noicons")
        },
        $3i: function(n, t) {
            var r = this,
            i = n.$c(".f-tree-folder"),
            u = !t.icon && !t.iconFont;
            t.leaf ? (n.$3(r.$eI + "-leaf"), u && i.$3("f-icon-file")) : t.expanded ? (n.$3(r.$HM), u && (i.$3("f-icon-folder-open"), i.$W("f-icon-folder"))) : (n.$W(r.$HM), u && (i.$3("f-icon-folder"), i.$W("f-icon-folder-open")))
        },
        $7v: function(t, r, f) {
            var e = this,
            c, o, y, h, l, w, b, k, a, d, v, nt, tt;
            if (e.$3_(t), c = [], f) {
                o = [e.$eI];
                e.headerStyle && (r === 1 ? o.push(e.$e7) : o.push(e.$u));
                y = ["f-tree-cell"];
                e.enableTextSelection || y.push(e.$Hd);
                var it, p = "f-tree-cell-inner",
                s = [],
                g = r;
                e.rootVisible || g--;
                i.$3K(g,
                function() {
                    s.push('<i class="f-tree-cell-icon"><\/i>')
                });
                s.push('<i class="f-tree-cell-icon ui-icon f-tree-expander"><\/i>');
                u(t.checked) || (t.checked && o.push(e.$j), s.push('<i class="f-tree-cell-icon ui-icon f-tree-checkbox"><\/i>'));
                h = [e.$M("cell-icon"), "ui-icon", "f-tree-folder"];
                l = !t.icon && !t.iconFont;
                t.leaf ? (o.push(e.$eI + "-leaf"), l && h.push("f-icon-file")) : t.expanded ? (o.push(e.$HM), l && h.push("f-icon-folder-open")) : l && h.push("f-icon-folder");
                w = "";
                t.icon ? (h.push("f-tree-custom-icon"), w = 'style="background-image:url(' + t.icon + ');"') : t.iconFont && (h.push("f-tree-custom-iconfont"), h.push("f-icon-" + t.iconFont));
                s.push('<i class="' + h.join(" ") + '" ' + w + "><\/i>");
                t.unselectable && (t.unselectable = !1, n.$2("F.Tree - node - unselectable"));
                t.id && i.$h(t.id, e.selectedNodes) && (o.push(e.$D), o.push(e.$eI + "-selected"));
                t.cls && o.push(t.cls);
                b = t.text;
                k = t.hrefTarget ? t.hrefTarget: "_blank"; ! e.nodeHyperLink && t.href ? s.push('<a class="f-tree-cell-text" href="' + t.href + '" target="' + k + '">' + b + "<\/a>") : s.push('<span class="f-tree-cell-text">' + b + "<\/span>");
                a = s.join("");
                e.nodeHyperLink && t.href ? a = '<a class="' + p + '" href="' + t.href + '" target="' + k + '">' + s.join("") + "<\/a>": (it = $("<div>", {
                    "class": p
                }), a = '<div class="' + p + '">' + s.join("") + "<\/div>");
                d = [];
                v = i.$30(t.attrs, !0, "data-nodeid");
                v["data-nodeid"] = t.id;
                t.qtip && (v["data-qtip"] = t.qtip);
                $.each(v,
                function(n, t) {
                    d.push(n + '="' + i.$e5(t) + '"')
                });
                nt = '<td class="' + y.join(" ") + '">' + a + "<\/td>";
                tt = '<tr class="' + o.join(" ") + '" ' + d.join(" ") + ">" + nt + "<\/tr>";
                c.push(tt);
                t.level = r
            }
            return t.children && t.children.length && t.expanded && (r++, $.each(t.children,
            function(n, t) {
                $.merge(c, e.$7v(t, r, !0))
            })),
            c
        },
        $3_: function(n) {
            var t = this;
            return n.id || (t.$7B || (t.$7B = 0), n.id = "f_tree_node_" + t.$7B, t.$7B++),
            n.id
        },
        getNodeId: function(n) {
            var t = this;
            return f(n) && (n = t.$H.$c("." + t.$eI + ":eq(" + n + ")")),
            c(n) ? $(n).attr("data-nodeid") : s(n) ? n.id: n
        },
        getNodeEl: function(n) {
            var t = this;
            return c(n) ? $(n) : i.$4R(t.bodyEl, "." + t.$eI, "data-nodeid", t.getNodeId(n))
        },
        $H6: function(n) {
            return this.getNodeEl(n)
        },
        getNodeData: function(n) {
            var t = this,
            i, r;
            return s(n) ? n: (r = t.getNodeId(n), t.$U(function(n) {
                if (n.id === r) return i = n,
                !1
            }), i)
        },
        $m: function(n) {
            return this.getNodeData(n)
        },
        getNodePath: function(n) {
            var t = this,
            r = t.$m(n),
            i = "";
            return t.$U(function(n, t) {
                if (n.id === r.id) return i = t.join("/"),
                !1
            }),
            i
        },
        moveNode: function(n, t, r) {
            function s(n) {
                u.$U(function(t, r, u, f) {
                    if (t.id === n) return i.$ex(u, f),
                    !1
                })
            }
            function h(n, t) {
                u.$U(function(r, u, f, e) {
                    if (r.id === n) return i.$9(f, t, e),
                    !1
                })
            }
            function c(n, t) {
                u.$U(function(r, u, f, e) {
                    if (r.id === n) return i.$9(f + 1, t, e),
                    !1
                })
            }
            function l(n, t) {
                u.$U(function(i) {
                    if (i.id === n) return i.children = i.children || [],
                    i.children.push(t),
                    !1
                })
            }
            function a(n, t) {
                u.$U(function(r) {
                    if (r.id === n) return r.children = r.children || [],
                    i.$9(0, t, r.children),
                    !1
                })
            }
            var u = this,
            f = u.$m(n),
            e = u.$m(t),
            o;
            if (f && e && (o = u.getNodePath(e), !i.$h(f.id, o.split("/")))) {
                s(f.id);
                r = r || "append";
                switch (r) {
                case "append":
                    l(e.id, f);
                    break;
                case "prepend":
                    a(e.id, f);
                    break;
                case "before":
                    h(e.id, f);
                    break;
                case "after":
                    c(e.id, f)
                }
                u.loadData()
            }
        },
        isNodeSelected: function(n) {
            return i.$h(n, this.selectedNodes)
        },
        $sg: function(n, t) {
            var u = this,
            e, f;
            o(n) || (t = n, n = r);
            e = u.$H.$c("." + u.$D);
            e.$W(u.$D).$W(u.$eI + "-selected");
            f = [];
            $.each(u.selectedNodes,
            function(n, t) {
                var i = u.$H6(t);
                i.$3(u.$D).$3(u.$eI + "-selected");
                f.push(t)
            });
            u.selectedNodes = f;
            i.$Y(t) !== i.$Y(u.selectedNodes) && u.$s("selectionchange", [n])
        },
        selectNode: function(n, t, i, u) {
            var f = this,
            e;
            o(n) || (u = i, i = t, t = n, n = r);
            e = f.$m(t);
            f.selectNodes(n, e.id, i, u)
        },
        selectNodes: function(n, t, f, e) {
            var s = this,
            l, v, a, c, h, y;
            if (o(n) || (e = f, f = t, t = n, n = r), u(e) && (e = !0), t = $.makeArray(t), l = $.merge([], s.selectedNodes), f ? i.$ez(s.selectedNodes, t, !0) : e ? (v = $.grep(l,
            function(n) {
                var t = s.$m(n);
                return t && t.unselectable
            }), s.selectedNodes = i.$ez(v, t, !0)) : s.selectedNodes = t, s.$sg(n, l), a = !1, t.length) for (c = t.length - 1; c >= 0; c--) if (h = t[c], y = s.$m(h), y) {
                h !== s.$eX && s.$s("nodeselect", [n, h]);
                s.$eX = h;
                a = !0;
                break
            }
            a || (s.$eX = r)
        },
        deselectNode: function(n, t) {
            var i = this,
            u;
            o(n) || (t = n, n = r);
            u = i.$m(t);
            i.deselectNodes(n, [u.id])
        },
        deselectNodes: function(n, t) {
            var u = this,
            f, e;
            o(n) || (t = n, n = r);
            t = $.makeArray(t);
            t.length && i.$h(u.$eX, t) && (u.$eX = r);
            f = $.merge([], u.selectedNodes);
            $.each(t,
            function(n, t) {
                var r = i.$H3(t, u.selectedNodes);
                r >= 0 && i.$ex(r, u.selectedNodes)
            });
            u.$sg(n, f);
            t.length && (e = t[t.length - 1], u.$s("nodedeselect", [n, e]))
        },
        getSelectedNodes: function(n) {
            var t = this;
            return n ? $.map(t.selectedNodes,
            function(n) {
                return t.$m(n)
            }) : $.merge([], t.selectedNodes || [])
        },
        getSelectedNode: function(n) {
            var i = this,
            t = i.getSelectedNodes(n);
            return t.length ? t[0] : r
        },
        expandPath: function(t) {
            var i = this,
            r = t.split("/");
            n.$eZ(function() {
                $.each(r,
                function(n, t) {
                    i.expandNode(t)
                })
            });
            i.$k(!0)
        },
        expandNodePath: function(n) {
            var t = this,
            i = t.getNodePath(n);
            t.expandPath(i)
        },
        expandNode: function(t, i, u) {
            var f = this;
            o(t) || (u = i, i = t, t = r);
            u ? (n.$eZ(function() {
                f.$U(function(n) {
                    f.$e0(t, n, !0)
                },
                i)
            }), f.$k(!0)) : f.$e0(t, i, !0)
        },
        expandAll: function() {
            var t = this;
            n.$eZ(function() {
                t.$U(function(n) {
                    t.expandNode(n)
                })
            });
            t.$k(!0)
        },
        collapseNode: function(t, i, u) {
            var f = this;
            o(t) || (u = i, i = t, t = r);
            u ? (n.$eZ(function() {
                f.$U(function(n) {
                    f.$e0(t, n, !1)
                },
                i)
            }), f.$k(!0)) : f.$e0(t, i, !1)
        },
        collapseAll: function() {
            var t = this;
            n.$eZ(function() {
                t.$U(function(n) {
                    t.collapseNode(n)
                })
            });
            t.$k(!0)
        },
        $e0: function(n, t, i) {
            var f = this,
            e, c, l, s, v, y, p, a, h, w;
            if ((o(n) || (i = t, t = n, n = r), e = f.$m(t), c = e.level, !e.leaf) && (l = !e.expanded, u(i) || (l = i), e.expanded = l, s = f.$H6(t), s.length !== 0)) {
                if (v = s.$5(f.$HM), l) {
                    if (v) return;
                    if (!e.leaf && !(e.children && e.children.length)) {
                        f.$s("nodelazyload", [n, e.id]);
                        return
                    }
                    f.$3i(s, e);
                    y = f.$7v(e, c, !1).join("");
                    p = s.next();
                    p.length ? p.before(y) : s.$e1("table").append(y);
                    f.$s("nodeexpand", [n, e.id]);
                    f.singleExpand && s.siblings().each(function() {
                        var t = $(this),
                        i = f.$m(t);
                        i && c === i.level && f.$e0(n, t, !1)
                    })
                } else {
                    if (!v) return;
                    for (f.$3i(s, e), a = $(), h = s.next(); h.length;) {
                        if (w = f.$m(h), w.level > c) a = a.add(h);
                        else break;
                        h = h.next()
                    }
                    a.remove();
                    f.$s("nodecollapse", [n, e.id])
                }
                f.$k(!0)
            }
        },
        checkNodes: function(n, t, i) {
            var r = this;
            $.each(n,
            function(n, u) {
                r.checkNode(u, t, i)
            })
        },
        uncheckNodes: function(n, t, i) {
            var r = this;
            $.each(n,
            function(n, u) {
                r.uncheckNode(u, t, i)
            })
        },
        checkNode: function(n, t, i) {
            var r = this;
            t ? r.$U(function(n) {
                u(n.checked) || r.$3H(n, !0, i)
            },
            n) : r.$3H(n, !0, i)
        },
        uncheckNode: function(n, t, i) {
            var r = this;
            t ? r.$U(function(n) {
                u(n.checked) || r.$3H(n, !1, i)
            },
            n) : r.$3H(n, !1, i)
        },
        $3H: function(n, t, i, f) {
            var s = this,
            c, h, l, e; (o(n) || (f = i, i = t, t = n, n = r), c = s.$H6(t), h = s.$m(t), u(h.checked)) || (l = h.checked, e = !l, u(i) || (e = i), e !== l) && (h.checked = e, e ? c.$3(s.$j) : c.$W(s.$j), f || s.$s("nodecheck", [n, h.id, e]))
        },
        getCheckedNodes: function(n) {
            var t = [];
            return this.$U(function(i) { ! u(i.checked) && i.checked && (n ? t.push(i) : t.push(i.id))
            }),
            t
        },
        $U: function(n, t) {
            function e(t) {
                for (var u, s, f = 0,
                o = t.length; f < o; f++) {
                    if (u = t[f], i.$3_(u), r.push(u.id), s = n.apply(i, [u, r, f, t]), s === !1) return;
                    u.children && u.children.length && e(u.children);
                    r.pop()
                }
            }
            var i = this,
            r = [],
            f;
            f = u(t) ? [i.getRootNode()] : [i.$m(t)];
            e(f)
        },
        resolveNode: function() {
            return this.$U.apply(this, arguments)
        },
        setNodeText: function(n, t) {
            var r = this,
            u = r.getNodeData(n),
            i;
            u && (u.text = t, i = r.getNodeEl(n), i.length && i.$c(".f-tree-cell-text").text(t))
        },
        __doLayout: function() {
            var t = this,
            s, h, c, e, l;
            t._super();
            var u = t.$H,
            r = t.$7E,
            o = u.$V();
            r.$1(o, !0);
            f(t.height) ? r.$4(u.$q(), !0) : r.css("height", "auto");
            s = i.$71();
            t.hideVScrollbar && (u.css("overflow", "hidden"), r.width(o + s), h = t.$7E.find(">.f-tree-table"), h.width(o));
            t.hideHScrollbar && (c = i.$e3(r), e = u.$c("." + t.$eI), e.length && (l = e.eq(0).find(".f-tree-cell-inner"), e.each(function() {
                var f = $(this),
                u = f.$c(".f-tree-cell-text"),
                r = c - u.position().left - i.$i(l, "padding-right");
                t.expanderToRight && (r -= n.largeMode ? 24 : 18);
                r -= 6;
                u.outerWidth(r, !0)
            })))
        }
    });
    n.TabStrip = n.Panel.extend({
        ccls: "f-tabstrip",
        scrollerCls: "f-tabstrip-scroller",
        hasscrollerCls: "f-tabstrip-hasscroller",
        tabPosition: "top",
        tabAlign: "left",
        tabFill: !1,
        tabSpace: 2,
        tabBorderColor: !1,
        tabPlain: !1,
        tabInside: !1,
        activeTabIndex: 0,
        layout: "card",
        collapsible: !1,
        header: !0,
        scrollStep: 30,
        enableCloseMenu: !1,
        closeTabText: "Close Tab",
        closeOtherTabsText: "Close Other Tabs",
        closeAllTabsText: "Close All Tabs",
        closeOnDblClick: !1,
        enableAnimation: r,
        animationType: r,
        showTabHeader: !0,
        defaultItemType: "tab",
        type: "tabstrip",
        initEl: function() {
            var t = this;
            $.extend(t, {
                header: !0,
                collapsible: !1,
                title: "",
                icon: "",
                iconFont: ""
            });
            t._super();
            t.tabAlign !== "left" && (t.tabAlign = "left", n.$2("F.TabStrip - tabAlign"));
            t.tabFill && (t.tabFill = !1, n.$2("F.TabStrip - tabFill"));
            t.tabBorderColor && (t.tabBorderColor = !1, n.$2("F.TabStrip - tabBorderColor"));
            t.tabPlain && (t.tabPlain = !1, n.$2("F.TabStrip - tabPlain"));
            t.tabSpace !== 2 && (t.tabSpace = 2, n.$2("F.TabStrip - tabSpace"));
            t.closeOnDblClick && (t.closeOnDblClick = !1, n.$2("F.TabStrip - closeOnDblClick"));
            u(t.enableAnimation) || (t.enableAnimation = r, n.$2("F.TabStrip - enableAnimation"));
            t.tabInside && (t.tabPlain = !1);
            t.$e.$3(t.ccls);
            t.showTabHeader || t.$e.$3(t.$M("noheader"));
            t.enableCloseMenu && t.$WT();
            t.$e.$3(t.$M("position-" + t.tabPosition));
            t.tabFill ? t.$e.$3(t.$M("fill")) : t.$e.$3(t.$M("align-" + t.tabAlign));
            t.tabBorderColor && t.$e.$3(t.$M("bordercolor"));
            t.tabPlain && (t.$e.$3(t.$M("plain")), t.$r.$W(t.$e7).$3(t.$u));
            t.tabInside && t.$e.$3(t.$M("inside"));
            t.$r.$3(t.$M("header"));
            y() && (t.tabPosition === "left" ? t.tabPosition = "top": t.tabPosition === "right" && (t.tabPosition = "bottom")); (t.tabPosition === "bottom" || t.tabPosition === "right") && t.$r.$7(t.$e);
            t.$e.$3(t.$M("header-" + t.tabPosition))
        },
        getCloseMenu: function() {
            var n = this;
            return n.$ey || n.$sO(),
            n.$ey
        },
        $sO: function() {
            function f(n) {
                if (t.$ey) {
                    var i = t.$ey.target;
                    n === "tab" ? t.hideTab(i) : n === "others" ? t.hideOtherTabs(i) : n === "all" && t.hideAllTabs()
                }
            }
            var t = this,
            i, r, u;
            i = new n.MenuItem({
                text: t.closeTabText,
                handler: function() {
                    f("tab")
                }
            });
            r = new n.MenuItem({
                text: t.closeOtherTabsText,
                handler: function() {
                    f("others")
                }
            });
            u = new n.MenuItem({
                text: t.closeAllTabsText,
                handler: function() {
                    f("all")
                }
            });
            t.$7eTabItem = i;
            t.$7eOtherTabsItem = r;
            t.$7eAllTabsItem = u;
            t.$ey = new n.Menu({
                items: [i, "-", r, u]
            })
        },
        $WT: function() {
            var n = this;
            n.$r.on("contextmenu", ".f-tab-header",
            function(t) {
                var r = $(this),
                i = n.items[r.index()];
                n.$ey || n.$sO();
                n.$ey.target = i;
                n.$7eTabItem.enable();
                i.isEnabled() && i.closable || n.$7eTabItem.disable();
                n.$7eOtherTabsItem.enable();
                n.getClosableTabCount(i) === 0 && n.$7eOtherTabsItem.disable();
                n.$7eAllTabsItem.enable();
                n.getClosableTabCount() === 0 && n.$7eAllTabsItem.disable();
                n.$ey.show();
                t.preventDefault()
            })
        },
        $c9: function() {
            var n = this,
            t = n.$_,
            r = $("<div>", {
                "class": n.scrollerCls + " " + n.scrollerCls + "-start",
                html: '<i class="ui-icon"><\/i>'
            }).$7(t),
            i = $("<div>", {
                "class": n.$M("header-clip")
            }).$7(t),
            u = $("<div>", {
                "class": n.$M("header-inner")
            }).$7(i),
            f = $("<div>", {
                "class": n.scrollerCls + " " + n.scrollerCls + "-end",
                html: '<i class="ui-icon"><\/i>'
            }).$7(t),
            e = $("<div>", {
                "class": n.$M("body")
            }).$7(n.$H);
            n.$eq = t;
            n.$3n = i;
            n.$e4 = u;
            n.$5c = e;
            n.$eM = r;
            n.$ek = f;
            n.$e$(n.$eM);
            n.$e$(n.$ek);
            $.each(n.items,
            function(t, i) {
                var r = n.__addItem(i);
                r !== i && (n.items[t] = r)
            });
            n.$eM.click(function() {
                $(this).$5(n.$A) || n.$HT(n.scrollStep)
            });
            n.$ek.click(function() {
                $(this).$5(n.$A) || n.$HT( - n.scrollStep)
            });
            n.$eM.mousedown(function() {
                n.$3y(n.$eM, n.scrollStep)
            });
            n.$ek.mousedown(function() {
                n.$3y(n.$ek, -n.scrollStep)
            })
        },
        afterInitEl: function() {
            var n = this,
            t;
            n._super();
            f(n.activeTabIndex) && (t = n.getItem(n.activeTabIndex), !t || t.hidden || t.disabled || n.activeTab(t))
        },
        __addItem: function(n, t, i) {
            var r = this,
            f, u;
            return t = t || r.$5c,
            f = r._super(n, t, i),
            u = f.$r,
            u.$7(r.$e4),
            r.tabInside ? u.$3("ui-corner-all") : r.tabPosition === "top" || r.tabPosition === "right" ? u.$3("ui-corner-top") : u.$3("ui-corner-bottom"),
            f.$e6(),
            f
        },
        __doLayout: function() {
            var n = this,
            t;
            i.$Hk(n.$e4, ".f-tab-header");
            $.each(n.items,
            function(n, t) {
                t.$e6()
            });
            n._super();
            n.$Ho();
            t = n.getActiveTab();
            t && n.scrollToTab(t)
        },
        $7g: function() {
            var n = this,
            h, t, i, e, o, c, s, r, l;
            if (n._super(), n.showTabHeader) {
                if (n.items.length) {
                    h = n.items[0];
                    t = h.$r.$4(!0);
                    n.$e4.$4(t, !0);
                    n.$eq.$q(t);
                    var u = n.$eq.$V(),
                    f = n.$3n,
                    a = f.$q();
                    a != t + 5 && (f.$q(t + 5), f.$V(u));
                    i = n.$e4.find(".f-tab-header:visible");
                    i.filter(":first").css("margin-left", "");
                    i.not(":first").css("margin-left", n.tabSpace);
                    e = 0;
                    n.tabFill ? (o = i.length, c = (u - (o - 1) * n.tabSpace) / o, i.each(function() {
                        var t = $(this),
                        i = c;
                        t.$5(n.$HY) || (i += n.tabSpace);
                        t.outerWidth(i, !0)
                    })) : n.$x || (s = n.$e4.$1(!0), e = n.tabAlign === "left" ? 0 : n.tabAlign === "right" ? u - s: (u - s) / 2, n.$e4.css("left", e))
                }
                r = n.$eq.$4(!0);
                n.$eM.$4(r, !0);
                n.$ek.$4(r, !0);
                n.getToolCount() > 0 ? (l = n.$o.$c(".f-tool:eq(0)"), n.$o.css({
                    top: 0,
                    "margin-top": 0,
                    height: r,
                    "padding-top": Math.floor((r - l.$4(!0)) / 2)
                }).show()) : n.$o.hide()
            }
        },
        $Ha: function() {
            var n = this,
            u, f;
            if (n.$e.$3(n.$eb()), n.items.length) {
                var r = n.$H.$1(!0),
                i = n.$H.$4(!0),
                t = n.$r.$4(!0);
                n.tabPosition === "left" ? (n.$r.$1(i + t, !0), y() || (n.$H.$1(r - t, !0), n.$H.$4(i + t, !0), n.$H.css({
                    left: t,
                    top: -t
                }), n.$r.css({
                    left: t
                }))) : n.tabPosition === "right" && (n.$r.$1(i + t, !0), y() || (n.$H.$1(r - t, !0), n.$H.$4(i + t, !0), n.$r.css({
                    left: r - (i + t)
                })));
                u = n.$H.$q();
                f = n.$H.$V();
                $.each(n.items,
                function(t, i) {
                    i.$e.$3(n.$eL());
                    i.width = f;
                    i.height = u;
                    i.$k()
                })
            }
        },
        $Ho: function() {
            function f() {
                var e = i.$V(),
                s;
                if (i.$5(n.hasscrollerCls)) {
                    var o = n.$eM.$1(!0),
                    h = n.$ek.$1(!0),
                    f = e - o - h;
                    t.$V(f);
                    t.css("left", o);
                    s = n.$7c();
                    s + u < f && r.css("left", f - u)
                } else t.$V(e),
                t.css("left", 0),
                n.tabAlign === "left" && r.css("left", 0)
            }
            var n = this;
            if (n.showTabHeader && !n.tabFill) {
                var i = n.$eq,
                t = n.$3n,
                r = n.$e4,
                u = r.$1(!0);
                u > t.$V() ? i.$3(n.hasscrollerCls) : i.$W(n.hasscrollerCls);
                f();
                n.$4j()
            }
        },
        $3y: function(n, i) {
            var r = this,
            u = $.now(),
            f = t.setInterval(function() {
                $.now() - u > 300 && r.$HT(i)
            },
            50);
            n.mouseup(function() {
                t.clearInterval(f)
            })
        },
        $7c: function() {
            var n = this,
            t = n.$e4.position();
            return n.tabPosition === "left" || n.tabPosition === "right" ? t.top: t.left
        },
        $5W: function(n) {
            var t = this,
            i = n.$r.position();
            return t.tabPosition === "left" || t.tabPosition === "right" ? i.top: i.left
        },
        $4j: function(n) {
            var t = this,
            r, u, i;
            t.showTabHeader && t.$eq.$5(t.hasscrollerCls) && (f(n) || (n = t.$7c()), r = t.$3n.$V(), u = t.$e4.$1(!0), n >= 0 ? t.$eM.$3(t.$A) : t.$eM.$W(t.$A), i = n + u - r, i <= 0 || i > 0 && i < 1 ? t.$ek.$3(t.$A) : t.$ek.$W(t.$A))
        },
        $HT: function(n) {
            var i = this,
            t = i.$7c() + n,
            r = i.$3n.$V(),
            u = i.$e4.$1(!0);
            t > 0 && (t = 0);
            t + u < r && (t = r - u);
            i.$e4.css("left", t);
            i.$4j(t)
        },
        scrollToTab: function(n) {
            var t = this,
            u = t.getItem(n);
            if (u && t.showTabHeader && t.$eq.$5(t.hasscrollerCls)) {
                var i = t.$7c(),
                o = i,
                r = t.$5W(u),
                f = u.$r.$1(!0),
                e = t.$3n.$V();
                i + r < 0 ? i = -r: i + r + f > e && (i = e - r - f);
                i !== o && (t.$e4.css("left", i), t.$4j(i))
            }
        },
        getTab: function(n) {
            return this.getItem(n)
        },
        getActiveTab: function() {
            return this.getActiveItem()
        },
        getActiveTabIndex: function() {
            return this.getActiveItemIndex()
        },
        getActiveTabId: function() {
            return this.getActiveItemId()
        },
        setActiveTab: function(t, i, u) {
            var e = this,
            f, h, s;
            return (o(t) || (u = i, i = t, t = r), f = e.getItem(i), !f) ? !1 : (h = e.getActiveTab(), h && (e.$4D = h.id), f.hidden && f.show(), u && f.$sV(), f.isActived()) ? (f.$r.show(), f.$e.show(), !0) : (f.$r.is(":visible") || f.$r.css("display", "inline-block"), $.each(e.items,
            function(n, t) {
                t !== f && t.$4h()
            }), f.$53(), f.iframe && (n.$4y && (s = f.$K[0], s.style.height = "99%", s.scrollWidth, s.style.height = "100%"), f.iframeLoaded || f.setIFrameUrl(f.iframeUrl)), e.$x && (e.$s("tabchange", [t, f]), e.$k()), !0)
        },
        $WX: function(n, t, i) {
            var f = this,
            r, u = n === "slideX";
            return $.each(f.items,
            function(n, f) {
                return f.id === i ? r = u ? "right": "down": f.id === t && (r = u ? "left": "up"),
                r ? !1 : void 0
            }),
            r
        },
        activeNextTab: function() {
            var n = this,
            t = n.getActiveTabIndex(),
            i = n.nextValidItemIndex(t, !0);
            return n.activeTab(i)
        },
        activeNearTab: function() {
            var n = this,
            t = n.getActiveTabIndex(),
            i = n.nearValidItemIndex(t);
            return n.activeTab(i)
        },
        hideAllTabs: function() {
            this.hideOtherTabs(null)
        },
        hideOtherTabs: function(n) {
            $.each(this.items,
            function(t, i) {
                i !== n && i.$L() && i.isEnabled() && i.closable && i.hide()
            })
        },
        getClosableTabCount: function(n) {
            var t = 0;
            return $.each(this.items,
            function(i, r) {
                r !== n && r.$L() && r.isEnabled() && r.closable && t++
            }),
            t
        },
        getVisibleTabCount: function() {
            var n = 0;
            return $.each(this.items,
            function(t, i) {
                i.$L() && n++
            }),
            n
        },
        hideTab: function(n) {
            var t = this.getItem(n);
            t && t.hide()
        },
        removeTab: function(n) {
            this.hideTab(n)
        },
        showTab: function(n, t) {
            var r = this,
            i = this.getItem(n);
            i && i.show(t)
        },
        activeTab: function() {
            return this.setActiveTab.apply(this, arguments)
        },
        addTab: function(t, i) {
            var s = this,
            f, r = {
                f_dynamic_added_tab: !0
            },
            o;
            return e(t) ? (o = arguments, $.extend(r, {
                id: o[0],
                title: o[2],
                closable: o[3]
            }), u(o[1]) || $.extend(r, {
                iframe: !0,
                iframeUrl: o[1]
            }), i = o[4]) : $.extend(r, t),
            f = s.getTab(r.id),
            f ? (f.setTitle(r.title), f.setClosable(r.closable), r.icon ? f.setIcon(r.icon) : r.iconFont && f.setIconFont(r.iconFont), u(r.iframeUrl) || (r.refreshWhenExist || f.iframeUrl != r.iframeUrl) && f.setIFrameUrl(r.iframeUrl), f.$L() && (i = !1)) : (f = new n.Tab(r), n.$eZ(function() {
                s.add(f)
            })),
            s.activeTab(f, i),
            f
        }
    });
    $.extend(n.TabStrip.prototype, n.$c6);
    n.Tab = n.Panel.extend({
        ccls: "f-tab",
        border: !1,
        collapsible: !1,
        closable: !1,
        closeOnDblClick: r,
        headerTag: "a",
        headerInside: !1,
        iframeDelay: !0,
        type: "tab",
        initEl: function() {
            var n = this;
            n.tools = n.tools || [];
            i.$9(0, {
                type: "tool",
                iconFont: "close",
                cls: "f-tool-close",
                hidden: !n.closable,
                handler: $.proxy(n.$7e, n)
            },
            n.tools);
            n._super();
            n.$e.$3(n.ccls);
            n.$r.$3(n.$M("header"));
            n.$r.$W(n.$e7);
            n.closable && n.$r.$3(n.$M("header-closable"));
            n.$r.click($.proxy(n.$c4, this));
            n.$e$(n.$r)
        },
        $7e: function(n) {
            var t = this;
            t.closable && t.hide();
            n.stopPropagation()
        },
        afterInitElDisabled: function() {
            var n = this;
            n.$r.$3(n.$A)
        },
        afterInitElHidden: function() {
            var n = this;
            n.hidden && (n.$r.hide(), n.__hideEl())
        },
        $c4: function(n) {
            var t = this;
            t.isDisabled() || t.parent.activeTab(n, t)
        },
        isDisabled: function() {
            var n = this;
            return n.$r.$5(n.$A)
        },
        isVisible: function() {
            return this.$r.is(":visible")
        },
        isActived: function() {
            return this.$r.$5(this.$D)
        },
        hide: function() {
            var t = this,
            n, f, i, u;
            if (t._super() === !1) return ! 1; (n = t.parent, n) && (f = t.isActived(), t.$r.hide(), f && (n.$4D && (u = n.getItem(n.$4D), u.$L() && u.isEnabled() ? i = n.activeTab(u) : n.$4D = r), i || (i = n.activeNearTab()), i || t.$4h()), n.$Ho())
        },
        show: function(n) {
            var t = this;
            if (t._super() === !1) return ! 1;
            n && t.$sV();
            t.$e6();
            t.parent.$Ho()
        },
        $sV: function() {
            var n = this.$r;
            n.appendTo(n.parent())
        },
        __showEl: function() {
            var n = this;
            n.hidden = !1;
            n.$r.css("display", "inline-block")
        },
        __hideEl: function() {
            var n = this;
            n.hidden = !0;
            n.$r.css("display", "none")
        },
        $4h: function() {
            var n = this;
            n.$r.$W(n.$D);
            n.$e.hide()
        },
        $53: function() {
            var n = this;
            n.$r.$3(n.$D);
            n.$e.show()
        },
        active: function() {
            var n = this.parent,
            t = $.merge([this], arguments);
            return n.setActiveTab.apply(n, t)
        },
        disable: function() {
            var n = this;
            n.disabled = !0;
            n.isActived() && n.parent.activeNearTab() === !1 && n.$4h();
            n.$r.$3(n.$A);
            n.$e.hide();
            n.$e6();
            n.parent.$Ho()
        },
        enable: function() {
            var n = this;
            n.disabled = !1;
            n.$L() || n.show();
            n.$r.$W(n.$A);
            n.$e6();
            n.parent.$Ho()
        },
        setClosable: function(n) {
            var t = this,
            i, r;
            n !== t.closable && (t.closable = n, i = t.getTool("close"), r = t.$M("header-closable"), n ? (t.$r.$3(r), i.show()) : (t.$r.$W(r), i.hide()), t.$e6(), t.parent.$Ho())
        },
        __doLayout: function() {
            var n = this;
            n.isActived() && n._super()
        }
    });
    n.ViewPort = n.PanelBase.extend({
        layout: "fit",
        isViewPort: !0,
        type: "viewport",
        initEl: function() {
            var n = this;
            n._super()
        },
        __doLayout: function() {
            this._super()
        }
    });
    n.Grid = n.Panel.extend({
        ccls: "f-grid",
        $eo: "f-grid-table",
        $R: "f-grid-row",
        $p: "f-grid-cell",
        $6: "f-grid-row-unselectable",
        $l: function(n) {
            var t = "f-grid-colheader";
            return n && (t += "-" + n),
            t
        },
        $ed: function(n) {
            var t = "f-grid-rowexpander";
            return n && (t += "-" + n),
            t
        },
        disableUnselectableRows: !1,
        gridHeader: !0,
        multiSelect: !0,
        keepCurrentSelection: !1,
        keepPagedSelection: !1,
        showSelectedCell: !1,
        altRowColor: !0,
        checkboxSelect: !1,
        checkboxSelectOnly: !1,
        sortASCText: "Sort Ascending",
        sortDESCText: "Sort Descending",
        columnsText: "Columns",
        unlockText: "Unlock",
        lockText: "Lock",
        idField: "",
        textField: "",
        parentIdField: "",
        attributeFields: r,
        sorting: !1,
        databaseSorting: !1,
        sortField: "",
        sortDirection: "ASC",
        clearSelectionBeforeSorting: !0,
        dataUrl: "",
        dataMethod: "GET",
        bigData: !1,
        bigDataRowTip: !0,
        minColumnWidth: 20,
        defaultColumnWidth: 100,
        $4I: function() {
            return n.largeMode ? 38 : 30
        },
        rowExpander: r,
        keepRowExpanderStatus: !0,
        forceFit: !1,
        paging: !1,
        databasePaging: !1,
        pageSize: 15,
        pageIndex: 0,
        recordCount: 0,
        showPageMsg: !0,
        clearSelectionBeforePaging: !0,
        arrowKeySelection: !0,
        mouseWheelSelection: !1,
        quickPaging: !1,
        quickPagingThenSelect: !0,
        emptyText: "",
        columnLines: !1,
        rowLines: !0,
        rowVerticalAlign: "middle",
        enableTextSelection: !1,
        summary: !1,
        summaryPosition: "flow",
        summaryData: r,
        tabVerticalNavigate: !1,
        tabEditableCell: !1,
        enterSameAsTab: !1,
        enterNavigate: !1,
        enterVerticalNavigate: !1,
        enterEditableCell: !1,
        cellEditing: !1,
        cellEditingClicks: 1,
        autoSelectEditor: !1,
        columnLocking: !1,
        columnMoving: !1,
        columnResizing: !0,
        columnMenu: !0,
        filters: !1,
        filtersText: "Filters",
        filtersCancelText: "Cancel Filters",
        filterOKText: "OK",
        filterCancelText: "Cancel",
        filterMatchAll: "Match All",
        filterMatchAny: "Match Any",
        tree: r,
        rowDomIdLockedSuffix: "_locked",
        defaultView: "grid",
        listViews: r,
        defaultColumnType: "renderfield",
        type: "grid",
        initEl: function() {
            var t = this,
            r, f, l, h, a, c, e, o;
            t.paging && (t.pagingbar || (t.pagingbar = {
                type: "pagingtoolbar"
            }), t.pagingbar.$4l = this);
            t._super();
            t.tabVerticalNavigate && (t.tabVerticalNavigate = !1, n.$2("F.Grid - tabVerticalNavigate"));
            t.tabEditableCell && (t.tabEditableCell = !1, n.$2("F.Grid - tabEditableCell"));
            t.enterSameAsTab && (t.enterSameAsTab = !1, n.$2("F.Grid - enterSameAsTab"));
            t.enterNavigate && (t.enterNavigate = !1, n.$2("F.Grid - enterNavigate"));
            t.enterVerticalNavigate && (t.enterVerticalNavigate = !1, n.$2("F.Grid - enterVerticalNavigate"));
            t.enterEditableCell && (t.enterEditableCell = !1, n.$2("F.Grid - enterEditableCell"));
            t.autoSelectEditor && (t.autoSelectEditor = !1, n.$2("F.Grid - autoSelectEditor"));
            t.filters && (t.filters = !1, n.$2("F.Grid - filters"));
            t.tree && (t.tree = !1, n.$2("F.Grid - tree"));
            t.columnMoving && (t.columnMoving = !1, n.$2("F.Grid - columnMoving"));
            t.dataUrl && (t.dataUrl = "", n.$2("F.Grid - dataUrl"));
            t.bigData && (t.bigData = !1, n.$2("F.Grid - bigData"));
            t.mouseWheelSelection && (t.mouseWheelSelection = !1, n.$2("F.Grid - mouseWheelSelection"));
            t.quickPaging && (t.quickPaging = !1, n.$2("F.Grid - quickPaging"));
            r = t.data || [];
            r.data && r.fields && (t.fields = r.fields, r = r.data);
            t.data = r;
            t.summary && (t.summaryData = t.summaryData || {});
            t.filters && (t.filteredData = t.filteredData || []);
            t.selectedRow && (t.selectedRows = [t.selectedRow]);
            t.selectedRows = u(t.selectedRows) ? [] : i.$ez([], t.selectedRows);
            t.tree && i.$Hx(t.tree, {
                icons: !0,
                expanded: !1,
                expandOnDblClick: !0
            });
            t.checkboxSelect && i.$9(0, new n.GridColumn({
                index: -1,
                sortable: !1,
                width: t.$4I(),
                menu: !1,
                hideable: !1,
                resizable: !1,
                columnType: "checkselectionfield"
            }), t.columns);
            t.rowExpander && (i.$Hx(t.rowExpander, {
                index: -1,
                width: t.$4I(),
                sortable: !1,
                menu: !1,
                hideable: !1,
                resizable: !1,
                expanded: !1,
                expandOnDblClick: !0,
                expandOnEnter: !0,
                expandToSelectRow: !1,
                columnType: "rowexpanderfield"
            }), t.$st(t.rowExpander), s(t.rowExpander) && (t.rowExpander = new n.GridColumn(t.rowExpander)), i.$9(0, t.rowExpander, t.columns));
            t.$49();
            t.$e.$3(t.ccls);
            t.sorting && t.$e.$3(t.$M("sorting"));
            t.paging && t.$e.$3(t.$M("paging"));
            t.bigData && t.$e.$3(t.$M("bigdata"));
            t.tree && !t.tree.icons && t.$e.$3("f-tree-noicons");
            t.listViews && t.listViews.length && $.each(t.listViews,
            function(n, i) {
                $("<div>", {
                    "class": t.$M("listview") + " " + t.$M("listview-" + i.columnId)
                }).$7(t.$H)
            });
            f = $("<div>", {
                "class": t.$M("inner")
            });
            f.$7(t.$H);
            t.$Q = f;
            t.gridInnerEl = f;
            l = f;
            t.columnLocking && (h = $("<div>", {
                "class": t.$M("inner-locked")
            }), h.$7(f), t.$WA = h, t.$15(h,
            function(n, i, r, u, f, e, o, s) {
                t.$HP = u;
                t.$G = f;
                t.$3o = n;
                t.$Wh = i;
                t.$WD = r;
                t.lockedHeaderTableEl = n;
                t.lockedBodyTableEl = u;
                t.lockedBodyctEl = f;
                t.summary && (t.$3h = e, t.$Wi = o, t.$Wl = s, t.lockedSummaryTableEl = e)
            }), a = $("<div>", {
                "class": t.$eU + " f-grid-locking-separator"
            }).$7(t.$H), t.$s0 = a, c = $("<div>", {
                "class": t.$M("inner-main")
            }), c.$7(f), t.$38 = c, l = c, t.showSelectedCell && (e = $("<div>", {
                "class": "f-grid-selectedcell-border"
            }), t.$sK = e.clone().$3("top").$7(t.$G), t.$1H = e.clone().$3("bottom").$7(t.$G), t.$s_ = e.clone().$3("left").$7(t.$G), t.$s$ = e.clone().$3("right").$7(t.$G)));
            t.$15(l,
            function(n, i, r, u, f, e, o, s) {
                t.$eW = u;
                t.$b = f;
                t.$H1 = n;
                t.$3I = i;
                t.$sB = r;
                t.headerTableEl = n;
                t.bodyTableEl = u;
                t.bodyctEl = f;
                t.summary && (t.$3p = e, t.$4q = o, t.$sT = s, t.summaryTableEl = e)
            });
            t.bigData && n.$2("F.Grid - bigData");
            t.showSelectedCell && (o = $("<div>", {
                "class": "f-grid-selectedcell-border"
            }), t.$sv = o.clone().$3("top").$7(t.$b), t.$sz = o.clone().$3("bottom").$7(t.$b), t.$so = o.clone().$3("left").$7(t.$b), t.$1c = o.clone().$3("right").$7(t.$b));
            t.$WL();
            t.$WV();
            t.$cRs();
            t.dataUrl ? (t.$44(), t.loadDataUrl()) : t.$y(t.data, t.summaryData)
        },
        $15: function(n, t) {
            var i = this,
            o = $("<div>", {
                "class": i.$M("headerct") + " " + i.$HR
            }),
            s,
            c,
            u,
            f,
            l,
            r,
            h,
            e;
            i.gridHeader || o.css("display", "none");
            o.$7(n);
            s = $("<div>", {
                "class": i.$M("headerinnerct")
            });
            s.$7(o);
            c = $("<table>", {
                "class": i.$eo
            });
            c.$7(s);
            u = $("<div>", {
                "class": i.$M("bodyct")
            });
            u.$7(n);
            f = $("<table>", {
                "class": i.$eo
            });
            i.rowLines && f.$3("f-grid-row-lines");
            i.columnLines && f.$3("f-grid-column-lines");
            i.rowVerticalAlign !== "middle" && f.$3("f-grid-row-align-" + i.rowVerticalAlign);
            f.$7(u);
            l = [c, o, s, f, u];
            i.summary && (r = $("<div>", {
                "class": i.$M("summaryct") + " " + i.$u
            }), r.$7(n), h = $("<div>", {
                "class": i.$M("summaryinnerct")
            }), h.$7(r), e = $("<table>", {
                "class": i.$eo + " f-grid-summary-" + i.summaryPosition
            }), i.rowLines && e.$3("f-grid-row-lines"), i.columnLines && e.$3("f-grid-column-lines"), e.$7(h), i.summaryPosition === "flow" ? r.$7(u) : i.summaryPosition === "bottom" ? r.$7(n) : i.summaryPosition === "top" && r.insertBefore(u), $.merge(l, [e, r, h]));
            t && t.apply(i, l)
        },
        $B: function(n) {
            var t = this;
            return (o(n) && (n = $(n.target)), n.$e1("." + t.ccls).attr("id") === t.id) ? !0 : !1
        },
        $WV: function() {
            var i = this,
            f, r, u;
            if (!i.enableTextSelection && "onselectstart" in document.createElement("div")) i.$Q.on("selectstart",
            function(n) {
                $(n.target).is(":input") || n.preventDefault()
            });
            if (!n.$P) {
                i.$Q.on("mouseenter mouseleave", "." + i.$l(),
                function(t) {
                    var r = $(this),
                    u = i.$I(r);
                    n.$H9 || i.$B(t) && (t.type === "mouseenter" ? i.$36(r, !0) : t.type === "mouseleave" && (i.$ef && i.$ef.$L() && i.$ef.$3b === u.columnId || i.$36(r, !1)))
                });
                i.$Q.on("mouseenter mouseleave", "." + i.$R,
                function(n) {
                    var r = $(this),
                    t;
                    r.$5(i.$6) || i.$B(n) && (t = r, i.columnLocking && (t = i.$O(r, !0)), n.type === "mouseenter" ? t.$3(i.$8) : n.type === "mouseleave" && t.$W(i.$8))
                })
            }
            i.$Q.on("click", "." + i.$l(),
            function(t) {
                var r = $(this),
                f = i.$I(r),
                u;
                if (i.$B(t) && t.type === "click") {
                    if ($(t.target).$5("ui-resizable-handle")) return;
                    if (n.$H9) return;
                    r.$5("f-grid-sortable") && (u = "ASC", r.$5("f-grid-sort-ASC") ? u = "DESC": r.$5("f-grid-sort-DESC") && (u = "ASC"), i.$cJ(t, f.sortField, u, f.columnId))
                }
            });
            i.$Q.on("click dblclick contextmenu", "." + i.$R,
            function(n) {
                var t = $(this),
                r,
                u,
                f,
                e;
                if (i.$B(n) && (r = i.$E(t), r)) if (u = r.id, f = r.index, n.type === "click") {
                    if (t.$5(i.$6)) return;
                    i.checkboxSelect && i.checkboxSelectOnly || (e = $(n.target), e.length && e.is(".f-grid-checkselectionfield .f-grid-checkbox") || i.$HX(n, t));
                    i.$s("rowclick", [n, u, f])
                } else if (n.type === "dblclick") {
                    if (t.$5(i.$6)) return;
                    i.rowExpander && i.rowExpander.expandOnDblClick && i.toggleRowExpanders(n, t);
                    i.tree && i.tree.expandOnDblClick && (r.leaf || (r.expanded ? i.collapseRow(n, r) : i.expandRow(n, r)));
                    i.$s("rowdblclick", [n, u, f])
                } else if (n.type === "contextmenu") {
                    if (t.$5(i.$6)) return;
                    i.checkboxSelect && i.checkboxSelectOnly || t.$5(i.$D) || i.$HX(n, t);
                    i.$s("beforerowcontextmenu", [n, u, f]) === !1 && n.preventDefault()
                }
            });
            i.$Q.on("click", ".f-grid-colheader.f-grid-checkselectionfield .f-grid-checkbox",
            function(n) {
                var t = $(this),
                r;
                i.$B(n) && (r = t.$5(i.$j), t.$ev(i.$j), r ? i.deselectAllRows(n) : i.selectAllRows(n))
            });
            i.$Q.on("click", ".f-grid-cell.f-grid-checkselectionfield .f-grid-checkbox",
            function(n) {
                var r = $(this);
                if (i.$B(n)) {
                    var u = r.$5(i.$j),
                    f = r.$e1("." + i.$p),
                    t = i.$X(r),
                    e = i.$E(t);
                    t.$5(i.$6) || (u || i.multiSelect ? u ? i.deselectRow(n, t) : i.selectRow(n, t, !0) : i.$HX(n, t))
                }
            });
            i.$Q.on("click", ".f-grid-rowexpanderfield .f-grid-rowexpander-icon",
            function(n) {
                var r = $(this),
                t;
                i.$B(n) && i.rowExpander && (t = i.$X(r), i.toggleRowExpanders(n, t), i.rowExpander.expandToSelectRow || n.stopPropagation())
            });
            f = 0;
            r = 0;
            i.$b.scroll(function() {
                function o() {
                    var o = i.$b.scrollLeft(),
                    t = i.$b.scrollTop(),
                    u,
                    e; (i.bigData && (i.$41 = t - r), u = o != f, e = t != r, u || e) && (f = o, r = t, i.bigData && n.$2("F.Grid - bigData"), i.cellEditing && i.$eT(), u && i.$4d(), i.columnLocking && e && i.$4r())
                }
                var e = 10;
                l() && (e = 50);
                u && (t.clearTimeout(u), u = null);
                u = t.setTimeout(function() {
                    o()
                },
                e)
            });
            i.$Q.on("click dblclick contextmenu", ".f-grid-row .f-grid-cell",
            function(n) {
                var t = $(this);
                i.$B(n) && i.selectCell(t)
            });
            i.$Wq();
            i.cellEditing && i.$cj();
            i.tree && i.$WI();
            i.$Wp();
            i.$Wx()
        },
        $7p: function(n, t, i) {
            var r = this,
            u = t.prev();
            u.length ? (r.selectCell(u.$c("." + r.$p).eq(i)), r.selectRow(n, u, !1)) : r.quickPaging && r.paging && r.pageIndex > 0 && !r.$Hl && (r.$H5(n, r.pageIndex - 1), r.$Hl = "UP", r.$HlTdIndex = i)
        },
        $7i: function(n, t, i) {
            var r = this,
            u = t.next();
            u.length ? (r.selectCell(u.$c("." + r.$p).eq(i)), r.selectRow(n, u, !1)) : r.quickPaging && r.paging && r.pageIndex < r.getPageCount() - 1 && !r.$Hl && (r.$H5(n, r.pageIndex + 1), r.$Hl = "DOWN", r.$HlTdIndex = i)
        },
        $Wq: function() {
            function t(n) {
                var i = n.originalEvent,
                t = -i.wheelDelta || -i.wheelDeltaY || i.deltaY || i.detail;
                return t < 10 && t > -10 && (t = 15 * t),
                t
            }
            function i(i) {
                var e, r, u, f;
                n.mouseWheelSelection && n.$4W() && (n.$eT(), e = t(i), r = n.getSelectedRowEl(), r.length) && (u = -1, f = n.$e_(), f.length && (u = f.index()), e < 0 ? n.$7p(i, r, u) : n.$7i(i, r, u), i.preventDefault(), i.stopPropagation())
            }
            var n = this;
            if (n.columnLocking) n.$G.on("mousewheel DOMMouseScroll wheel",
            function(r) {
                var f = n.getSelectedRowEl(),
                u;
                n.mouseWheelSelection && f.length ? i(r) : (n.$eT(), u = t(r), n.$b.scrollTop(u + n.$b.scrollTop()), r.preventDefault(), r.stopPropagation())
            });
            if (n.mouseWheelSelection) n.$b.on("mousewheel DOMMouseScroll wheel",
            function(n) {
                i(n)
            })
        },
        $Wp: function() {
            var t = this;
            $(document).keydown(function(r) {
                function s() {
                    r.preventDefault()
                }
                var u, e, f, o, h, c;
                t.$4W() && (u = r.keyCode, e = t.getSelectedRowEl(), e.length && !t.cellEditing && u == n.KEY.ENTER && t.rowExpander && t.rowExpander.expandOnEnter && t.toggleRowExpanders(r, t.getSelectedRowEls()), t.arrowKeySelection && i.$h(u, [n.KEY.UP, n.KEY.DOWN, n.KEY.LEFT, n.KEY.RIGHT]) && (!t.cellEditing || t.cellEditing && !t.$HI) && (f = t.$e_(), f.length && (o = f.index()), e.length && (u == n.KEY.UP ? (t.$7p(r, e, o), s()) : u == n.KEY.DOWN && (t.$7i(r, e, o), s())), f.length && (h = t.$X(f), c = h.$c("." + t.$p).length, u == n.KEY.LEFT ? (o === 0 ? t.$7p(r, h, c - 1) : t.selectCell(f.prev()), s()) : u == n.KEY.RIGHT && (o === c - 1 ? t.$7i(r, h, 0) : t.selectCell(f.next()), s()))))
            })
        },
        $WI: function() {
            var n = this;
            n.$Q.on("click", ".f-grid-row .f-tree-expander",
            function(t) {
                var u = $(this),
                r,
                i;
                if (n.$B(t)) return r = n.$X(u),
                i = n.$E(r),
                i.leaf || (i.expanded ? n.collapseRow(t, i) : n.expandRow(t, i)),
                !1
            })
        },
        $WR: function(n, t, i, r) {
            this.$s("bigdatarowtip", [n, t, i, r])
        },
        $Wx: function() {
            var n = this;
            n.$Q.on("click", ".f-grid-checkboxfield .f-grid-checkbox",
            function(t) {
                var i = $(this),
                r;
                n.$B(t) && ((r = i.$5(n.$j), n.cellEditing) || i.$5(n.$A) || i.$ev(n.$j))
            })
        },
        $4r: function() {
            var n = this,
            t;
            n.columnLocking && (t = n.$b.scrollTop(), t !== n.$G.scrollTop() && n.$G.scrollTop(t))
        },
        $4d: function() {
            var n = this,
            t = n.$b.scrollLeft();
            t !== n.$3I.scrollLeft() && n.$3I.scrollLeft(t);
            n.summary && n.summaryPosition !== "flow" && t !== n.$4q.scrollLeft() && n.$4q.scrollLeft(t)
        },
        $cj: function() {},
        $cI: function() {
            var t = this;
            if (u(t.$7Q)) return t.$cf = t.$b.scrollTop(),
            t.$se = t.$b.scrollLeft(),
            u(n.$4H) && (n.$4H = 0),
            t.$7Q = n.$4H,
            n.$4H++,
            t.$7Q
        },
        $s3: function(n) {
            var t = this;
            n == t.$7Q && (t.$b.scrollTop(t.$cf), t.$b.scrollLeft(t.$se), t.$4r(), t.$4d(), t.$cf = r, t.$se = r, t.$7Q = r)
        },
        __doLayout: function() {
            var t = this,
            r = t.$cI();
            t._super();
            t.columnLocking && (t.$s0.$q(t.$Q.$q()), t.$s0.css({
                top: t.$38.position().top,
                left: i.$i(t.$38, "margin-left") - 1
            }));
            t.showSelectedCell && t.$7J();
            t.bigData && n.$2("F.Grid - bigData");
            t.$s3(r)
        },
        $4M: function() {
            var n = this,
            t;
            n.checkboxSelect && (t = n.$H1.$c(".f-grid-checkselectionfield .f-grid-checkbox"), t.length && (n.isAllSelected() ? t.$3(n.$j) : t.$W(n.$j)))
        },
        $36: function(n, t) {
            var i = this,
            u, r;
            n && n.length && (u = n.$c("." + i.$l("inner")), r = n.$c("." + i.$l("trigger")), t ? (n.$3(i.$8), r.$3(i.$8)) : (n.$W(i.$8), r.$W(i.$8)))
        },
        $4k: function(n, t) {
            var i = this,
            r = i.$O(n, !0),
            u;
            r.length && (u = r.$c(".f-grid-checkselectionfield .f-grid-checkbox"), t ? (r.$3(i.$D), r.$3(i.$R + "-selected"), u.length && u.$3(i.$j)) : (r.$W(i.$D), r.$W(i.$R + "-selected"), u.length && u.$W(i.$j)))
        },
        $7x: function(n, t) {
            var u = this,
            f;
            o(n) || (t = n, n = r);
            f = u.selectedRows;
            i.$W9.apply(u, [t, f, u.$4k]);
            u.$4M();
            i.$Y(t) !== i.$Y(f) && u.$s("selectionchange", [n])
        },
        $cJ: function(n, t, i, r) {
            var u = this;
            if (!u.sorting || u.$s("beforesorting", [n, t, i, r]) === !1) return ! 1;
            u.clearSelectionBeforeSorting && u.clearSelection();
            u.setSortField(t, i);
            u.$Hq("sorting") || (u.databaseSorting ? u.dataUrl && u.loadDataUrl() : u.loadSortData(t, i));
            u.$s("sorting", [n, t, i, r])
        },
        setSortField: function(n, t) {
            var i = this;
            i.sortField = n;
            i.sortDirection = t;
            i.$IHeaderEls().each(function(r, u) {
                var f = $(u),
                e = i.$I(f);
                f.$W("f-grid-sort-ASC f-grid-sort-DESC");
                e.sortField === n && f.$3("f-grid-sort-" + t)
            })
        },
        loadSortData: function(n, t) {
            var i = this;
            i.setSortField(n, t);
            i.$cK(n, t);
            i.$cB();
            i.loadData()
        },
        loadPageData: function(n) {
            var t = this;
            u(n) && (n = t.pageIndex);
            t.setPageIndex(n);
            t.$cB(!0);
            t.loadData()
        },
        $cK: function(n, t) {
            var r = this,
            u = r.getSortColumn(n),
            i;
            u && (i = u.columnId, r.alldata.sort(function(n, r) {
                var f = n.values[i] + "",
                e = r.values[i] + "",
                u = f.localeCompare(e);
                return u > 0 ? t === "ASC" ? 1 : -1 : u < 0 ? t === "ASC" ? -1 : 1 : 0
            }))
        },
        $HX: function(n, t) {
            var i = this,
            u = i.$z(t),
            f,
            r,
            s;
            if (!t.$5(i.$6)) {
                if (i.multiSelect) {
                    if (n.shiftKey && i.$Hr && (f = i.$O(i.$Hr), f.length)) {
                        var h = f.index(),
                        e = t.index(),
                        c = Math.min(h, e),
                        l = Math.max(h, e),
                        o = [];
                        for (r = c; r <= l; r++) s = i.$E(i.$O(r)),
                        s.unselectable || o.push(s.id);
                        c === e && o.reverse();
                        i.selectRows(n, o, !1);
                        return
                    }
                    if (i.keepCurrentSelection || n.ctrlKey) {
                        i.isRowSelected(t) ? i.deselectRow(n, u) : i.selectRow(n, u, !0);
                        return
                    }
                }
                i.selectRow(n, u, !1)
            }
        },
        $ew: function(n) {
            var t = n.columnType;
            return t === "rownumberfield" || t === "checkselectionfield" || t === "rowexpanderfield" ? !0 : !1
        },
        getField: function(n) {
            var i = this,
            t;
            return f(n) ? t = i.fields[n] : ($.each(i.fields,
            function(i, r) {
                var u = r;
                return e(r) || (u = r.name),
                u === n ? (t = r, !1) : void 0
            }), t || (t = n)),
            e(t) || (t = t.name),
            t
        },
        $cX: function(n, t) {
            var i = $.trim((n + "").toLowerCase());
            return n && i !== "false" && i !== "0" ? t.editcheckbox ? '<i class="f-grid-checkbox ui-icon f-checked"><\/i>': '<i class="f-grid-static-checkbox ui-icon f-checked"><\/i>': t.editcheckbox ? '<i class="f-grid-checkbox ui-icon"><\/i>': '<i class="f-grid-static-checkbox ui-icon"><\/i>'
        },
        $3O: function(n) {
            var t = this;
            return n.id || (t.$47 || (t.$47 = 0), n.id = "f_grid_row_" + t.$47, t.$47++),
            n.id
        },
        getRowId: function(n) {
            var t = this;
            return e(n) ? n: s(n) ? n.id: (f(n) && (n = t.$Z().eq(n)), c(n) ? $(n).attr("data-rowid") : void 0)
        },
        $z: function(n) {
            return this.getRowId(n)
        },
        getRowData: function(n) {
            var t = this,
            i, r;
            return s(n) ? n: (r = t.$z(n), t.$ec(function(n) {
                if (n.id === r) return i = n,
                !1
            }), i)
        },
        $E: function(n) {
            return this.getRowData(n)
        },
        getRowValue: function(n) {
            var r = this,
            t, i;
            return t = s(n) ? n: r.$E(n),
            i = {},
            t && $.each(t.values,
            function(n, t) {
                var r = t;
                u(r) || (i[n] = r)
            }),
            i
        },
        getRowPath: function(n) {
            var t = this,
            r = t.$E(n),
            i = "";
            return t.$ec(function(n, t) {
                if (n.id === r.id) return i = t.join("/"),
                !1
            }),
            i
        },
        getCellValue: function(n, t) {
            var u = this,
            i = u.getCellData(n, t);
            return i ? i.value: r
        },
        getCellData: function(n, t) {
            var i = this,
            f, e, o;
            c(n) && (n = $(n), n.$5(i.$p) && (t = i.$I(n), n = i.$X(n)));
            var h = i.$E(n),
            l = i.$I(t),
            t = l.columnId,
            r = h.values,
            u = {
                value: r[t]
            },
            s = r[t + ".cls"];
            return s && (u.cls = s),
            f = r[t + ".attrs"],
            f && (u.attrs = f),
            e = r[t + ".status"],
            e && (u.status = e),
            o = r[t + ".ovalue"],
            o && (u.ovalue = o),
            u
        },
        getVisibleColumnCount: function() {
            var t = this,
            n = 0;
            return $.each(t.columns,
            function(t, i) {
                i.hidden || n++
            }),
            n
        },
        getColumnHeaderEls: function() {
            return this.$IHeaderEls()
        },
        $IHeaderEls: function() {
            return this.$Q.$c("." + this.$l())
        },
        getColumnHeaderEl: function(n) {
            return this.$IHeaderEl(n)
        },
        $IHeaderEl: function(n) {
            var r = this,
            i = r.$IHeaderEls(),
            t;
            return f(n) ? t = i.eq(n) : i.each(function(i, r) {
                var u = $(r);
                if (u.attr("data-columnid") === n) return t = u,
                !1
            }),
            t
        },
        getSortColumn: function(n) {
            var i = this,
            t;
            return i.$n(function(i) {
                if (i.sortField === n) return t = i,
                !1
            }),
            t
        },
        getColumn: function(n) {
            return this.$I(n)
        },
        $I: function(n) {
            var t = this;
            return (t.$4Y || (t.$4Y = {},
            t.$n(function(n) {
                t.$4Y[n.columnId] = n
            })), c(n) && (n = $(n).attr("data-columnid")), e(n)) ? t.$4Y[n] : n
        },
        $IByType: function(n) {
            var i = this,
            t;
            return i.$n(function(i) {
                if (i.columnType === n) return t = i,
                !1
            }),
            t
        },
        getColumnIds: function() {
            function n(t) {
                for (var i, r, u = [], f = 0, e = t.length; f < e; f++) i = t[f],
                i.columns && i.columns.length ? (r = [], r.push(i.columnId), r.push(n(i.columns)), u.push(r)) : u.push(i.columnId);
                return u
            }
            var t = this;
            return n(t.columns)
        },
        $n: function(n, t) {
            function r(t) {
                for (var f, o, u = 0,
                e = t.length; u < e; u++) {
                    if (f = t[u], o = n.apply(i, [f, u, t]), o === !1) break;
                    f.columns && f.columns.length && r(f.columns)
                }
            }
            var i = this;
            u(t) && (t = i.columns);
            r(t)
        },
        resolveColumn: function() {
            this.$n.apply(this, arguments)
        },
        $O: function(n, t) {
            var i = this,
            r, u;
            return c(n) && !i.columnLocking ? $(n) : (r = $(), u = i.$z(n), t && i.columnLocking && (r = r.add(i.$OInternal(u, !0))), r.add(i.$OInternal(u)))
        },
        $OInternal: function(n, t) {
            var r = this,
            u, f;
            return u = t ? r.$HP: r.$eW,
            f = r.$z(n),
            i.$4R(u, ">tbody>tr." + r.$R, "data-rowid", f)
        },
        $s7: function(n) {
            return this.$OInternal(n, !0)
        },
        getLockedRowEl: function(n) {
            return this.$s7(n)
        },
        getRowEl: function(n, t) {
            return this.$O(n, t)
        },
        getCellEl: function(n, t) {
            var i = this;
            return c(n) || (n = i.$O(n, !0)),
            e(t) || (t = t.columnId),
            $(n).$c(".f-grid-cell-" + t)
        },
        moveRowUp: function() {
            n.$2("F.Grid - rowMoving")
        },
        moveRowDown: function() {
            n.$2("F.Grid - rowMoving")
        },
        moveRowsUp: function() {
            n.$2("F.Grid - rowMoving")
        },
        moveRowsDown: function() {
            n.$2("F.Grid - rowMoving")
        },
        $ZInternal: function(n) {
            var t = this,
            i;
            return i = n ? t.$HP: t.$eW,
            i.$c(">tbody>tr." + t.$R)
        },
        $Z: function(n) {
            var t = this,
            i = $();
            return n && t.columnLocking && (i = i.add(t.$ZInternal(!0))),
            i.add(t.$ZInternal())
        },
        $s7s: function() {
            return this.$ZInternal(!0)
        },
        getLockedRowEls: function() {
            return this.$s7s()
        },
        getRowEls: function(n) {
            return this.$Z(n)
        },
        selectRow: function(n, t, i, u, f) {
            var e = this;
            o(n) || (f = u, u = i, i = t, t = n, n = r);
            e.selectRows(n, [t], i, u)
        },
        selectRows: function(t, f, e, s, h) {
            var c = this,
            a, y, b, p, v, l, w;
            if (o(t) || (h = s, s = e, e = f, f = t, t = r), u(s) && (s = !0), u(h) && (h = c.keepPagedSelection), f = c.$s5(f), f.length && (n.$3Y = c.id), a = i.$ez([], c.selectedRows), c.paging && h && (y = [], a.length && $.each(a,
            function(n, t) {
                c.$E(t) || y.push(t)
            })), e ? i.$ez(c.selectedRows, f, !0) : s ? (b = $.grep(a,
            function(n) {
                var t = c.$E(n);
                return t && t.unselectable
            }), c.selectedRows = i.$ez(b, f, !0)) : c.selectedRows = f, c.paging && h && (c.selectedRows = i.$ez(y, c.selectedRows, !0)), c.$7x(t, a), p = !1, f.length) for (v = f.length - 1; v >= 0; v--) if (l = f[v], w = c.$E(l), w) {
                f.length === 1 && c.scrollToRow(l);
                l !== c.$Hr && c.$s("rowselect", [t, l, w.index]);
                c.$Hr = l;
                p = !0;
                break
            }
            p || (c.$Hr = r)
        },
        scrollToRow: function(t) {
            var r = this,
            e, s;
            if (r.bigData && n.$2("F.Grid - bigData"), e = r.$O(t), e.length && (s = i.$7s(r.$b), r.hasVScrollbar())) {
                var o = r.$b.scrollTop(),
                u = e.position().top,
                h = e.outerHeight(),
                f;
                if (u == 0) return;
                u < 0 ? (f = o + u, r.$b.scrollTop(f)) : u + h > s && (f = o + (u + h - s), f > o + u && (f = o + u), r.$b.scrollTop(f))
            }
        },
        scrollToCell: function(n) {
            var t = this,
            r, s, h, o;
            if (!t.bigData && (r = $.makeArray(arguments), v(r[0]) && (r = r[0]), n = r.length === 2 ? t.getCellEl(r[0], r[1]) : r[0], c(n)) && (n = $(n), s = t.$X(n), t.scrollToRow(s), !t.columnLocking || (h = t.$I(n), !t.$7W(h))) && (o = i.$e3(t.$b), t.hasHScrollbar())) {
                var e = t.$b.scrollLeft(),
                u = n.position().left,
                l = n.outerWidth(),
                f;
                if (u == 0) return;
                u < 0 ? (f = e + u, t.$b.scrollLeft(f)) : u + l > o && (f = e + (u + l - o), f > e + u && (f = e + u), t.$b.scrollLeft(f))
            }
        },
        $7b: function() {
            for (var t, f, n = this,
            e = n.$eW.find(".f-grid-row:first"), o = n.$eW.find(".f-grid-row:last"), s = n.$z(e), h = n.$z(o), u = [], i = 1, r = 0, c = n.data.length; r < c; r++) t = n.data[r].id,
            f = n.data[r].unselectable,
            i == 1 ? t == s ? i = 2 : f || u.push(t) : i == 2 ? t == h && (i = 3) : f || u.push(t);
            return u
        },
        selectAllRows: function(n) {
            var t = this,
            r = t.$Z(),
            i;
            t.selectRows(n, r, !1);
            t.bigData && (i = t.$7b(), $.merge(t.selectedRows, i))
        },
        deselectRow: function(n, t) {
            var i = this;
            o(n) || (t = n, n = r);
            i.deselectRows(n, [t])
        },
        deselectRows: function(n, t) {
            var u = this,
            l, e, f, s, h;
            o(n) || (t = n, n = r);
            t = u.$s5(t);
            t.length && i.$h(u.$Hr, t) && (u.$Hr = r);
            var a = $.merge([], u.selectedRows),
            v = i.$7V(t),
            c = [];
            for (f = 0, l = u.selectedRows.length; f < l; f++) e = u.selectedRows[f],
            v[e] || c.push(e);
            for (u.selectedRows = c, u.$7x(n, a), f = t.length - 1; f >= 0; f--) if (s = t[f], h = u.$E(s), h) {
                u.$s("rowdeselect", [n, s, h.index]);
                break
            }
        },
        deselectAllRows: function(n) {
            var t = this,
            o = t.$Z(),
            r,
            e,
            u;
            if (t.deselectRows(n, o), t.bigData) {
                var f = [],
                s = t.$7b(),
                h = i.$7V(s);
                for (r = 0, e = t.selectedRows.length; r < e; r++) u = t.selectedRows[r],
                h[u] || f.push(u);
                t.selectedRows = f
            }
        },
        expandPath: function(n) {
            var t = this,
            i = n.split("/");
            $.each(i,
            function(n, i) {
                t.expandRow(i)
            })
        },
        expandRowPath: function(n) {
            var t = this,
            i = t.getRowPath(n);
            t.expandPath(i)
        },
        expandRow: function(t, i, u) {
            var f = this;
            o(t) || (u = i, i = t, t = r);
            u ? n.$eZ(function() {
                f.$ec(function(n) {
                    f.$HF(t, n, !0)
                },
                i)
            }) : f.$HF(t, i, !0);
            f.$72()
        },
        expandAll: function() {
            var t = this;
            n.$eZ(function() {
                t.$ec(function(n) {
                    t.$HF(n, !0)
                })
            });
            t.$72()
        },
        collapseRow: function(t, i, u) {
            var f = this;
            o(t) || (u = i, i = t, t = r);
            u ? n.$eZ(function() {
                f.$ec(function(n) {
                    f.$HF(t, n, !1)
                },
                i)
            }) : f.$HF(t, i, !1);
            f.$72()
        },
        collapseAll: function() {
            var t = this;
            n.$eZ(function() {
                t.$ec(function(n) {
                    t.$HF(n, !1)
                })
            });
            t.$72()
        },
        $72: function() {
            function f(e, o) {
                for (var h, s, c, y, a, l = 0,
                v = e.length; l < v; l++)(h = e[l], h.status !== "deleted") && (s = n.$O(h, !0), s.length) && (s.$5("f-hidden") ? o && s.$W("f-hidden") : o || s.$3("f-hidden"), n.altRowColor && (c = n.$R + "-alt", i % 2 != 0 ? s.$5(c) || s.$3(c) : s.$5(c) && s.$W(c)), r && (y = n.$4p(t, u, i), n.updateCellValue(s, t.columnId, y, !0)), u++, o && i++, h.children && h.children.length && (n.$3i(s, h), a = o, a && (a = h.expanded), f(h.children, a)))
            }
            var n = this,
            r, t, u, i;
            n.tree && (r = !1, t = n.$IByType("rownumberfield"), t && !t.treeNumber && (r = !0), u = 0, i = 0, f(n.data, !0), n.$x && n.$k(!0))
        },
        $HF: function(n, t, i) {
            var e = this,
            f, s;
            if (o(n) || (i = t, t = n, n = r), f = e.$E(t), !f.leaf) if (s = !f.expanded, u(i) || (s = i), f.expanded = s, s) {
                if (!f.leaf && !(f.children && f.children.length)) {
                    e.$Hq("rowlazyload") || e.dataUrl && e.loadDataUrl(r, {
                        lazyrowid: f.id
                    });
                    e.$s("rowlazyload", [n, f.id, f.index]);
                    return
                }
                e.$s("rowexpand", [n, f.id, f.index])
            } else e.$s("rowcollapse", [n, f.id, f.index])
        },
        $7J: function() {
            function l() {
                n.$sv.hide();
                n.$sz.hide();
                n.$so.hide();
                n.$1c.hide()
            }
            function a() {
                n.columnLocking && (n.$sK.hide(), n.$1H.hide(), n.$s_.hide(), n.$s$.hide())
            }
            var n = this,
            t, i, f, e, o, s;
            if (n.showSelectedCell) if (t = n.$e_(), t.length) {
                n.columnLocking && t.$e1(".f-grid-inner-locked").length ? (i = n.$G, f = n.$sK, e = n.$1H, o = n.$s_, s = n.$s$, l()) : (i = n.$b, f = n.$sv, e = n.$sz, o = n.$so, s = n.$1c, a());
                var h = t.innerHeight() - 1,
                c = t.innerWidth() - 1,
                v = t.position(),
                r = v.top + i.scrollTop(),
                u = v.left + i.scrollLeft();
                f.css({
                    width: c,
                    top: r,
                    left: u
                }).show();
                e.css({
                    width: c,
                    top: r + h,
                    left: u
                }).show();
                o.css({
                    height: h,
                    top: r,
                    left: u
                }).show();
                s.css({
                    height: h,
                    top: r,
                    left: u + c
                }).show()
            } else l(),
            a()
        },
        selectCell: function() {
            var r = this,
            u = r.$e_(),
            t,
            i; (u.length && (u.$W("f-grid-cell-selected"), r.$7J()), i = $.makeArray(arguments), v(i[0]) && (i = i[0]), t = i.length === 2 ? r.getCellEl(i[0], i[1]) : i[0], c(t)) && (t = $(t), t && t.length) && (n.$3Y = r.id, t.$3("f-grid-cell-selected"), r.$7J(), r.scrollToCell(t))
        },
        isRowSelected: function(n) {
            var t = this,
            i = t.$O(n);
            return i.$5(t.$R + "-selected")
        },
        getSelectedRows: function(n) {
            var t = this;
            return n ? $.map(t.selectedRows,
            function(n) {
                return t.$E(n)
            }) : $.merge([], t.selectedRows || [])
        },
        getSelectedRow: function(n) {
            var i = this,
            t = i.getSelectedRows(n);
            return t.length ? t[0] : r
        },
        getSelectedRowEls: function(n) {
            var t = this,
            i;
            return i = n ? t.$Z(!0) : t.$Z(),
            i.filter("." + t.$D)
        },
        getSelectedRowEl: function() {
            return this.getSelectedRowEls().eq(0)
        },
        hasSelection: function() {
            return !! this.selectedRows.length
        },
        isAllSelected: function() {
            var t = this,
            n = !0,
            r = t.$Z(),
            i;
            return r.length ? (i = !1, r.each(function() {
                var r = $(this);
                if (!r.$5(t.$6)) if (r.$5(t.$D)) i = !0;
                else return n = !1,
                !1
            }), n && !i && (n = !1)) : n = !1,
            n
        },
        toggleRowExpanders: function(n, t) {
            var i = this;
            i.rowExpander && (o(n) || (t = n, n = r), u(t) ? i.rowExpander.expanded ? i.collapseRowExpanders(n) : i.expandRowExpanders(n) : (i.$48(n, t, "toggle"), i.$x && i.$k(!0)))
        },
        expandRowExpanders: function(n, t) {
            var i = this; (o(n) || (t = n, n = r), i.rowExpander) && (u(t) && (t = i.$Z(), i.rowExpander.expanded = !0), i.$48(n, t, "expand"), i.$x && i.$k(!0))
        },
        collapseRowExpanders: function(n, t) {
            var i = this; (o(n) || (t = n, n = r), i.rowExpander) && (u(t) && (t = i.$Z(), i.rowExpander.expanded = !1), i.$48(n, t, "collapse"), i.$x && i.$k(!0))
        },
        $48: function(n, t, i) {
            var u = this;
            o(n) || (i = t, t = n, n = r);
            var f = u.$ed("collapsed"),
            s = u.$ed("details"),
            e = u.$ed("table");
            t.each(function(t, r) {
                var o = $(r),
                c = u.$O(o, !0),
                h = u.$E(o),
                l = !1,
                a,
                p,
                w;
                if (i === "expand" ? l = !0 : i === "toggle" && c.$5(f) && (l = !0), l) {
                    if (a = o.$c("." + s), !a.length) {
                        var v = u.$O(o),
                        y = v.index(),
                        b = v.$c("." + e);
                        b.append(u.$4A(h, y, !0));
                        u.columnLocking && (p = u.$s7(o), w = p.$c("." + e), w.append(u.$4A(h, y, !1)))
                    }
                    c.$W(f);
                    u.$s("rowexpanderexpand", [n, h.id])
                } else c.$3(f),
                u.$s("rowexpandercollapse", [n, h.id])
            })
        },
        $7C: function(n, t) {
            var i = this;
            n.locked = t;
            n.columns && n.columns.length && i.$n(function(n) {
                n.locked = t
            },
            n.columns)
        },
        lockColumn: function(n, t) {
            var u = this,
            i;
            o(n) || (t = n, n = r);
            e(t) ? i = u.$I(i) : (i = t, t = i.columnId);
            u.$7C(i, !0);
            u.$y();
            u.$s("columnlock", [n, t])
        },
        unlockColumn: function(n, t) {
            var f = this,
            i, u;
            for (o(n) || (t = n, n = r), e(t) ? i = f.$I(i) : (i = t, t = i.columnId), u = i.$eC;;) {
                if (!u || !u.locked) break;
                i = u;
                u = u.$eC
            }
            f.$7C(i, !1);
            f.$y();
            f.$s("columnunlock", [n, t])
        },
        getHiddenColumns: function(n) {
            var i = this,
            t = [];
            return i.$n(function(i) {
                i.hidden && (n ? t.push(i) : t.push(i.columnId))
            }),
            t
        },
        setHiddenColumns: function(n) {
            var t = this;
            t.$n(function(t) {
                t.hidden = i.$h(t.columnId, n) ? !0 : !1
            });
            t.$y()
        },
        hideColumn: function(n, t, i) {
            var f = this,
            s;
            o(n) || (i = t, t = n, n = r);
            u(i) && (i = !0);
            s = t;
            e(s) && (s = f.$I(s));
            f.$5F(s, i);
            f.$y();
            i ? f.$s("columnhide", [n, t]) : f.$s("columnshow", [n, t])
        },
        $5F: function(n, t) {
            function r(n) {
                if (n.$eC) {
                    var t = !0;
                    $.each(n.$eC.columns,
                    function(n, i) {
                        if (!i.hidden) return t = !1,
                        !1
                    });
                    n.$eC.hidden = t;
                    r(n.$eC)
                }
            }
            var i = this;
            n.hidden = t;
            r(n);
            n.columns && i.$n(function(n) {
                n.hidden = t
            },
            n.columns);
            i.$5a()
        },
        $5a: function() {
            function t(i) {
                i && i.$L() && (n.$7y(i), $.each(i.items,
                function(n, i) {
                    t(i.menu)
                }))
            }
            var n = this;
            t(n.$5Z)
        },
        showColumn: function(n) {
            this.hideColumn(n, !1)
        },
        getSelectedCellEl: function() {
            return this.$e_()
        },
        $e_: function() {
            var t = this,
            n = t.$Q.$c(".f-grid-row .f-grid-cell.f-grid-cell-selected"),
            i = n.length;
            return i && (i === 1 ? t.$B(n) || (n = $()) : n.each(function() {
                var i = $(this);
                if (t.$B(i)) return n = i,
                !1
            })),
            n
        },
        getSelectedCell: function(n) {
            var t = this,
            i = t.$e_();
            if (i.length) {
                if (n) return t.getCellData(i);
                var u = t.$I(i),
                f = t.$X(i),
                e = t.$E(f);
                return [e.id, u.columnId]
            }
            return r
        },
        getSelectedCellColumnId: function() {
            var n = this,
            r = n.$e_(),
            t = "",
            i = n.$I(r);
            return i && (t = i.columnId),
            t
        },
        deleteSelectedRows: function(n) {
            var t = this,
            i = t.getSelectedRows();
            i.length && t.deleteRows(i, n)
        },
        $5g: function(n) {
            var i = this,
            t = [];
            return n = $.makeArray(n),
            $.each(n,
            function(n, r) {
                var u = r;
                e(r) || (u = i.$z(r));
                t.push(u)
            }),
            t
        },
        $s5: function(n) {
            var t = this,
            i = [];
            return n = $.makeArray(n),
            $.each(n,
            function(n, r) {
                var u = t.$O(r);
                if (u.length && u.$5(t.$6)) return ! 0;
                i.push(t.$z(r))
            }),
            i
        },
        deleteRow: function(n, t) {
            this.deleteRows([n], t)
        },
        deleteRows: function(n, t) {
            function u(n) {
                var t;
                return r.$ec(function(i, r, u, f) {
                    if (i.id === n) return t = [u, f],
                    !1
                }),
                t
            }
            var r = this;
            n = r.$5g(n);
            t ? $.each(n,
            function(n, t) {
                var r = u(t);
                r.length && i.$ex(r[0], r[1])
            }) : r.$ec(function(t) {
                i.$h(t.id, n) && (t.status = "deleted")
            });
            r.clearSelection();
            r.$7S();
            r.$y();
            r.$s("datachange")
        },
        getDeletedRows: function() {
            var n = this,
            t = [];
            return n.$ec(function(i) {
                n.$75(i) || i.status !== "deleted" || t.push(i.id)
            }),
            t
        },
        getExpandedRows: function() {
            var t = this,
            n = [];
            return t.$ec(function(t) {
                t.status !== "deleted" && t.expanded && !t.leaf && n.push(t.id)
            }),
            n
        },
        $s1: function() {
            var t = this;
            n.noEvent(function() {
                t.selectRows([], !1, !1, !1);
                t.selectCell([])
            })
        },
        clearSelection: function() {
            this.$s1()
        },
        clearSelections: function() {
            this.$s1()
        },
        clearData: function() {
            var n = this;
            n.paging && n.setRecordCount(0);
            n.clearSelection();
            n.loadData([])
        },
        hasHScrollbar: function() {
            return i.$46(this.$b)
        },
        hasVScrollbar: function() {
            return i.$4f(this.$b)
        },
        mergeCells: function() {
            n.$2("F.Grid - mergeCells")
        },
        $7m: function(n, t) {
            function h(n, t) {
                return e(n) && e(t) && n.indexOf("f-grid-tpl") >= 0 && t.indexOf("f-grid-tpl") >= 0 ? i.$ce(n) === i.$ce(t) : b(n) && b(t) ? n.getTime() === t.getTime() : n === t
            }
            function s(t, i) {
                for (var l, c = r,
                a = r,
                e = 1,
                s = t; s <= i; s++) l = f.getCellValue(o[s], n),
                h(l, a) ? e++:(e > 1 && u.push({
                    rowIndex: c,
                    columnId: n,
                    rowspan: e
                }), c = s, a = l, e = 1);
                e > 1 && u.push({
                    rowIndex: c,
                    columnId: n,
                    rowspan: e
                })
            }
            var f = this,
            u = [],
            o = f.data;
            return v(t) ? t.length && $.each(t,
            function(n, t) {
                var i = t.rowIndex,
                r = i + t.rowspan - 1;
                s(i, r)
            }) : s(0, o.length - 1),
            u
        },
        mergeColumns: function() {
            n.$2("F.Grid - mergeColumns")
        },
        updateSummaryCellValue: function(n, t, i) {
            var f = this,
            h = "." + f.$p + "-" + n,
            e = f.$3p.$c(h),
            s;
            if (f.columnLocking && !e.length && (e = f.$3h.$c(h)), e.length) {
                var o = f.summaryData,
                c = o[n + ".ovalue"],
                l = o[n];
                f.$HU(t, l) || (o[n] = t, i || (u(c) && (o[n + ".ovalue"] = l), f.$HU(t, c) ? (e.$W(f.$p + "-dirty"), o[n + ".status"] = r) : (e.$3(f.$p + "-dirty"), o[n + ".status"] = "modified")));
                s = t; (u(t) || t === "") && (s = "&nbsp;");
                e.$c("." + f.$p + "-inner").html(s)
            }
        },
        $ec: function(n, t) {
            function e(t) {
                for (var u, s, f = 0,
                o = t.length; f < o; f++) {
                    if (u = t[f], i.$3O(u), r.push(u.id), s = n.apply(i, [u, r, f, t]), s === !1) return;
                    u.children && u.children.length && e(u.children);
                    r.pop()
                }
            }
            var i = this,
            r = [],
            f;
            f = u(t) ? i.data: [i.$E(t)];
            e(f)
        },
        resolveRow: function() {
            this.$ec.apply(this, arguments)
        },
        $7S: function() {
            function i(t, r) {
                var u = 0;
                return $.each(t,
                function(t, f) {
                    var o, e;
                    if (f.status === "deleted") return ! 0;
                    o = f.id;
                    f.treeIndex = n;
                    f.level = r;
                    n++;
                    u++;
                    e = 0;
                    f.children && f.children.length && (e = i(f.children, r + 1));
                    f.leaf = e ? !1 : !0
                }),
                u
            }
            var t = this,
            n;
            t.tree && (n = 0, i(t.data, 0))
        },
        $49: function() {
            function r(e, o) {
                var h = !1;
                $.each(e,
                function(n, t) {
                    if (f(t.order)) return h = !0,
                    !1
                });
                h && e.sort(function(n, t) {
                    var i = n.order,
                    r = t.order;
                    return f(i) || (i = -1e10),
                    f(r) || (r = -1e10),
                    i - r
                });
                $.each(e,
                function(h, c) {
                    var a, l;
                    i.$Hx(c, {
                        sortable: !1,
                        columnType: t.defaultColumnType
                    });
                    t.$ew(c) ? (i.$Hx(c, {
                        resizable: !1,
                        menu: !1,
                        hideable: !1,
                        width: t.$4I()
                    }), t.columnLocking && i.$Hx(c, {
                        locked: !0,
                        lockable: !0
                    })) : i.$Hx(c, {
                        resizable: !0,
                        menu: !0,
                        hideable: !0
                    });
                    t.$st(c);
                    t.$c$(c);
                    u(c.index) && (c.index = h);
                    f(c.width) || (c.width = t.defaultColumnWidth);
                    t.$ew(c) || (a = t.$7z(c, c.width), a && (c.width = a));
                    t.sorting && c.sortable && !c.sortField && (c.sortField = c.field);
                    c.fieldType === "date" && c.fieldFormat && !c.renderer && (c.renderer = n.format.dateRenderer(c.fieldFormat));
                    c.$eC = o;
                    c.columns && c.columns.length && r(c.columns, c);
                    c.parent = t;
                    c.parentColumn = o;
                    l = c;
                    s(l) && (l = new n.GridColumn(l));
                    l !== c && (e[h] = l)
                })
            }
            var t = this;
            r(t.columns, null)
        },
        $c$: function(n) {
            var t = this;
            t.cellEditing && (u(n.editable) || n.editable && (n.columnType === "checkboxfield" ? n.editcheckbox = !0 : n.editor || (n.editor = {
                type: "textbox"
            })))
        },
        $st: function(t) {
            var i = this;
            t.columnId || (t.columnId = t.field ? t.field: n.$3Q());
            t.columnId = t.columnId.replace(/\./g, "_")
        },
        setPageIndex: function(n) {
            this.pagingbar && this.pagingbar.setPageIndex(n)
        },
        setRecordCount: function(n) {
            this.pagingbar && this.pagingbar.setRecordCount(n)
        },
        setPageSize: function(n) {
            this.pagingbar && this.pagingbar.setPageSize(n)
        },
        getStartRowIndex: function() {
            return this.pageIndex * this.pageSize
        },
        getEndRowIndex: function() {
            var n = this,
            t = n.getStartRowIndex() + n.pageSize - 1;
            return t > n.recordCount - 1 && (t = n.recordCount - 1),
            t
        },
        getPageCount: function() {
            var n = this,
            t = Math.floor(n.recordCount / n.pageSize);
            return n.recordCount % n.pageSize > 0 && t++,
            t
        },
        getPageIndex: function() {
            return this.pageIndex
        },
        getPageSize: function() {
            return this.pageSize
        },
        $5h: function(n) {
            var i = this,
            t;
            u(n) && (n = i.pageIndex);
            f(n) || (n = 0);
            t = i.getPageCount();
            t === 0 ? n = 0 : n < 0 ? n = 0 : n > t - 1 && (n = t - 1);
            i.pageIndex = n
        },
        $H5: function(n, t) {
            var i = this,
            r = i.pageIndex;
            if (i.$s("beforepaging", [n, t, r]) === !1) return ! 1;
            i.clearSelectionBeforePaging && i.clearSelection();
            i.setPageIndex(t);
            i.$5L(n, t, r)
        },
        $5L: function(n, t, i) {
            var r = this;
            r.$Hq("paging") || (r.databasePaging ? r.dataUrl && r.loadDataUrl() : r.loadPageData(t));
            r.$s("paging", [n, t, i])
        },
        $4W: function() {
            var e = this,
            u = n.$3Y,
            i, t, f;
            if (u) if (i = n(u), i && i.$L()) {
                if (n.$3Y != e.id) return ! 1
            } else n.$3Y = r;
            return (t = $(":focus"), t.length && !t.is("body") && (f = t.$e1(".f-grid>.f-panel-body"), !f.length)) ? !1 : !0
        },
        afterRender: function() {
            var n = this;
            n._super();
            n.$cP && (n.$cP = !1, n.$s("dataload"))
        },
        $v: function() {
            var n = this;
            n._super();
            n.cellEditing && n.$n(function(n) {
                var t = n.editor;
                t && t.$v()
            })
        },
        $3w: function(t, r) {
            var s = this,
            o, e;
            return t && t.columnType === "checkboxfield" && (o = $.trim((r + "").toLowerCase()), i.$h(o, ["true", "false", "1", "0"])) ? o === "false" || o === "0" ? !1 : !0 : ((w(r) || u(r)) && (r = ""), r === "") ? r: (e = t.fieldType, e === "int" || e === "float" || e === "double" ? e === "int" ? f(r) || (r = parseInt(n.removeCommas(r), 10)) : f(r) || (r = parseFloat(n.removeCommas(r))) : e === "boolean" ? g(r) || (r = r == "true" || r == "1") : e === "date" && (r = i.$5C(r), b(r) || (r += "", r && (r = t.fieldFormat ? i.$eO(t.fieldFormat, r) : new Date(r)))), r)
        },
        $X: function(n) {
            return n.$e1("." + this.$R)
        },
        $M4: function(n) {
            return n.$e1("." + this.$p)
        },
        $7z: function(n, t) {
            var f = this,
            r, u = n.minWidth || f.minColumnWidth,
            i;
            return u && t < u && (r = u),
            i = n.maxWidth,
            i && t > i && (r = i),
            r
        }
    });
    n.GridColumn = n.Base.extend({
        type: "gridcolumn",
        hide: function() {
            this.parent.hideColumn(this.columnId)
        },
        show: function() {
            this.parent.showColumn(this.columnId)
        },
        isVisible: function() {
            return ! this.hidden
        },
        $L: function() {
            return this.isVisible()
        },
        isHidden: function() {
            return ! this.$L()
        },
        toggleVisible: function() {
            this.$L() ? this.hide() : this.show()
        },
        setVisible: function(n) {
            n ? this.show() : this.hide()
        },
        setEditable: function(n) {
            var t = this;
            t.editable = n;
            t.parent.$c$(t);
            t.parent.loadData()
        },
        toggleEditable: function() {
            this.setEditable(!this.editable)
        },
        setHideable: function(n) {
            var t = this;
            t.hideable = n;
            t.parent.createColumnHeaderMenu()
        },
        toggleHideable: function() {
            this.setHideable(!this.hideable)
        }
    });
    $.extend(n.Grid.prototype, {
        loadData: function(i, f, o) {
            var s = this,
            h, c, l, a, v;
            e(i) ? (h = s.$E(i), f && f.length && !f[0].id && (c = s.$70(f, h.level + 1), h.children = c[0])) : (o = f, f = i, i = r, u(f) || (s.data = f), u(o) || (s.summaryData = o), s.$5V());
            s.$x && (l = s.$cI());
            s.$7I = r;
            s.keepRowExpanderStatus && !s.$5k() && (s.$7I = [], a = s.$Z(), a.each(function(n, t) {
                var i = $(t);
                i.$5(s.$ed("collapsed")) || s.$7I.push(s.$z(i))
            }));
            s.filters && delete s.$5M;
            s.cellEditing && s.$x && s.$eT();
            s.$44();
            s.columnLocking && s.$ca(!1);
            s.$ca(!0);
            s.$4M();
            s.$5b();
            s.$x && s.$k(!0);
            s.$x ? (v = n.$3t, t.setTimeout(function() {
                v || s.$s("dataload");
                s.$5d()
            },
            50)) : s.$cP = !0;
            s.$x && s.$s3(l)
        },
        $5k: function() {
            var n = this,
            i, t, r, u;
            if (!n.$x || (i = n.$Z(), i.length != n.data.length)) return ! 0;
            for (t = 0, r = n.data.length; t < r; t++) if (u = n.$z(i.eq(t)), u != n.data[t].id) return ! 0;
            return ! 1
        },
        $5d: function() {
            var n = this,
            u, t, i;
            n.$Hl && n.quickPaging && (n.quickPagingThenSelect && (u = n.getSelectedRowEls(), u.length || (t = n.$Hl === "UP" ? n.$Z().last() : n.$Z().first(), i = $.Event(), i.$Mr = !0, n.selectRow(i, t, !1), n.$HlTdIndex >= 0 && n.selectCell(t.$c("." + n.$p).eq(n.$HlTdIndex)))), n.$Hl = r, n.$HlTdIndex = r)
        },
        $y: function() {
            this.loadData.apply(this, arguments)
        },
        loadDataUrl: function() {
            n.$2("F.Grid - dataUrl")
        },
        $5b: function() {
            var n = this;
            n.listViews && n.listViews.length && $.each(n.listViews,
            function(t, r) {
                for (var s = n.$H.$c("." + n.$M("listview-" + r.columnId)), e = $("<ul>", {
                    "class": n.$M("listview-ul")
                }), u = 0, h = n.data.length, o, f; u < h; u++) o = n.data[u],
                f = n.getCellData(o, r),
                f && $("<li>", {
                    "class": n.$M("listview-li") + " " + n.$u,
                    html: f.value
                }).$7(e);
                i.$eh(s, ">ul", e)
            })
        },
        $cO: function(t, r, u, f, e, o) {
            for (var s, p, c, w, b, k, a, g, h = this,
            v = [], y = r; y <= u; y++) if (s = t[y], p = s.id, s.status !== "deleted") {
                h.$3O(s);
                c = [h.$R];
                f || c.push("f-hidden");
                s.status === "newadded" && c.push(h.$R + "-newadded");
                h.altRowColor && o.vRowIndex % 2 != 0 && c.push(h.$R + "-alt");
                s.unselectable && (s.unselectable = !1, n.$2("F.Grid - row - unselectable"));
                w = h.selectedRows;
                w.length && i.$h(p, w) && (c.push(h.$D), c.push(h.$R + "-selected"));
                h.tree && n.$2("F.Grid - tree");
                var nt = s.cls || "",
                tt = s.attrs || {},
                l = {
                    trCls: nt,
                    trAttrs: tt
                },
                d;
                d = h.rowExpander ? h.$5N(s, o.rowIndex, o.vRowIndex, e, l, c) : h.$cC(s, o.rowIndex, o.vRowIndex, e, l);
                l.trCls && c.push(l.trCls);
                b = [];
                k = i.$30(l.trAttrs, !0, "data-rowid");
                k["data-rowid"] = p;
                $.each(k,
                function(n, t) {
                    b.push(n + '="' + i.$e5(t) + '"')
                });
                v.push('<tr class="' + c.join(" ") + '" ' + b.join(" ") + ">" + d.join("") + "<\/tr>");
                o.rowIndex++;
                f && o.vRowIndex++;
                h.tree && s.children && s.children.length && (a = f, a && (a = s.expanded), g = h.$cO(s.children, 0, s.children.length - 1, a, e, o), $.merge(v, g))
            }
            return v
        },
        $ca: function(n) {
            var t = this,
            o = $("<tbody>"),
            s = t.data.length,
            h,
            c,
            l,
            u,
            nt,
            tt,
            p,
            w,
            r,
            b;
            if (s === 0) h = t.emptyText || "&nbsp;",
            n || (h = "&nbsp;"),
            c = $("<tr>", {
                "class": t.$R + "-empty"
            }),
            l = $("<td>", {
                colspan: n ? t.$Hh.length: t.$HL.length
            }),
            $("<div>", {
                "class": "f-grid-empty",
                html: h
            }).$7(l),
            l.$7(c),
            c.$7(o);
            else {
                var k = 0,
                d = 0,
                a = 0,
                e = t.data.length - 1;
                if (t.bigData) if (r = t.$3C, r) {
                    var g = t.$b.scrollTop(),
                    v = 10,
                    y = 10;
                    f(t.$41) && (t.$41 > 0 ? (v = 5, y = 20) : t.$41 < 0 && (v = 20, y = 5));
                    u = Math.floor(g / r) - v;
                    u < 0 && (u = 0);
                    a = u;
                    d = k = u;
                    nt = g - u * r + t.$b.height() + r * y;
                    e = u + Math.floor(nt / r)
                } else e = 60;
                e > t.data.length - 1 && (e = t.data.length - 1);
                tt = t.$cO(t.data, a, e, !0, n, {
                    rowIndex: k,
                    vRowIndex: d
                });
                o.html(tt.join(""))
            }
            p = o.find("tr:last");
            p.$3(t.$et);
            w = n ? t.$eW: t.$HP;
            i.$eh(w, "tbody", o);
            t.bigData && s > 0 && (r = t.$3C, r || (r = t.$3C = p.height()), w.css("top", r * a), b = t.$b.find("." + t.$eo + "-bigdata-shadow"), b.length && b.css({
                height: r * s
            }));
            t.$76(n)
        },
        setSummaryData: function(n) {
            var t = this;
            t.summaryData = n;
            t.columnLocking && t.$76(!1);
            t.$76(!0)
        },
        $7$: function(n, t, r, f, e) {
            var h = this,
            o, s;
            if (r.renderer) return o = {
                rowValue: h.getRowValue(t),
                rowIndex: t.index,
                rowId: t.id,
                rowData: t,
                columnIndex: r.index,
                columnId: r.columnId,
                column: r,
                tdCls: f,
                tdAttrs: e
            },
            s = r.renderer.apply(h, [n, o]),
            u(s) || (n = s),
            f != o.tdCls && (f = o.tdCls, t.values[r.columnId + ".cls"] = f),
            i.$Y(e) != i.$Y(o.tdAttrs) && (e = o.tdAttrs, t.values[r.columnId + ".attrs"] = e),
            [n, f, e]
        },
        $cC: function(t, f, e, o, s) {
            var h = this,
            ft = o ? h.$Hh: h.$HL,
            et = "",
            ot = h.selectedRows,
            v,
            tt,
            k,
            st,
            a,
            at,
            y,
            c,
            p,
            b,
            g,
            rt,
            ut,
            vt,
            wt,
            w;
            for (ot.length && i.$h(t.id, ot) && (et = " " + h.$j), v = [], k = 0, st = ft.length; k < st; k++) {
                var l = ft[k],
                d = l.columnType,
                ht = l.columnId;
                if (!l.hidden) {
                    a = [h.$p, h.$p + "-" + ht];
                    l.cls && a.push(l.cls);
                    h.cellEditing && l.editable && a.push(h.$p + "-editable");
                    h.enableTextSelection || a.push(h.$Hd);
                    var ct = [h.$p + "-inner"],
                    it = [],
                    lt = l.align;
                    lt && ct.push("f-align-" + lt);
                    at = !1;
                    h.tree && n.$2("F.Grid - tree");
                    y = h.getCellData(t, l);
                    c = r;
                    y && (c = y.value, y.status === "modified" && a.push(h.$p + "-dirty"));
                    p = "";
                    b = {};
                    y && (p = y.cls || "", b = y.attrs || {});
                    l.renderer && (g = h.$7$(c, t, l, p, b), c = g[0], p = g[1], b = g[2]);
                    p && a.push(p);
                    rt = [];
                    ut = i.$30(b, !0, "data-columnid");
                    ut["data-columnid"] = ht;
                    $.each(ut,
                    function(n, t) {
                        rt.push(n + '="' + i.$e5(t) + '"')
                    });
                    c && l.htmlEncode && (c = i.$3B(c));
                    d === "checkboxfield" ? (c = h.$cX(c, l), a.push("f-grid-checkboxfield")) : d === "rownumberfield" ? (c = "" + h.$4p(l, f, e), a.push("f-grid-rownumberfield")) : d === "checkselectionfield" ? (c = '<i class="ui-icon f-grid-checkbox' + et + '"><\/i>', a.push("f-grid-checkselectionfield"), t.unselectable && n.$2("F.Grid - row - unselectable")) : d === "rowexpanderfield" && (c = '<i class="ui-icon f-grid-rowexpander-icon"><\/i>', a.push("f-grid-rowexpanderfield")); (u(c) || c === "") && (c = "&nbsp;");
                    h.disableUnselectableRows && t.unselectable && n.$2("F.Grid - row - unselectable");
                    at ? it.push('<span class="f-tree-cell-text">' + c + "<\/span>") : it.push(c);
                    vt = '<div class="' + ct.join(" ") + '">' + it.join("") + "<\/div>";
                    v.push('<td class="' + a.join(" ") + '" ' + rt.join(" ") + ">" + vt + "<\/td>")
                }
            }
            if (v.length) {
                var yt = v.length - 1,
                nt = v[yt],
                bt = nt.indexOf('"'),
                pt = nt.indexOf('"', bt + 1);
                v[yt] = nt.substr(0, pt) + " " + h.$et + nt.substr(pt)
            }
            return h.rowRenderer && (tt || (tt = h.getRowValue(t)), wt = i.$Y(s.trAttrs), w = {
                rowValue: tt,
                rowIndex: f,
                rowId: t.id,
                rowData: t,
                trCls: s.trCls,
                trAttrs: s.trAttrs
            },
            h.rowRenderer.apply(h, [w]), s.trCls != w.trCls && (t.cls = s.trCls = w.trCls), wt != i.$Y(w.trAttrs) && (t.attrs = s.trAttrs = w.trAttrs)),
            v
        },
        $4p: function(n, t, i) {
            var r = this,
            u = i + 1,
            f;
            return r.tree && n.treeNumber && (u = t + 1),
            r.paging && n.pagingNumber && (f = r.getStartRowIndex(), u += f),
            u
        },
        $3i: function(n, t) {
            var u = this,
            i = n.$c(".f-tree-folder"),
            r = !(t.icon || t.iconFont);
            t.leaf ? (n.$3("f-tree-node-leaf"), r && i.$3("f-icon-file")) : t.expanded ? (n.$3(u.$HM), r && (i.$3("f-icon-folder-open"), i.$W("f-icon-folder"))) : (n.$W(u.$HM), r && (i.$3("f-icon-folder"), i.$W("f-icon-folder-open")))
        },
        $5N: function(n, t, r, u, f, e) {
            var o = this,
            s, c, h;
            e.push(o.$ed());
            s = !1;
            o.$7I ? i.$h(n.id, o.$7I) || (s = !0) : o.rowExpander.expanded || (s = !0);
            s && e.push(o.$ed("collapsed"));
            c = u ? o.$Hh.length: o.$HL.length;
            h = "";
            s || (h = o.$4A(n, t, u));
            var l = o.$eo + " " + o.$ed("table"),
            a = o.$ed("items"),
            v = o.$cC(n, t, r, u, f),
            y = '<table class="' + l + '"><tr class="' + a + '">' + v.join("") + "<\/tr>" + h + "<\/table>";
            return ['<td colspan="' + c + '">' + y + "<\/td>"]
        },
        $4A: function(n, t, r) {
            var f = this,
            o = f.$I(f.rowExpander.columnId),
            a = f.getCellData(n, o),
            s = "",
            h = {},
            e,
            c,
            l,
            v,
            y;
            a && (s = a.cls || "", h = a.attrs || {});
            r && (e = f.getCellValue(n, o), o.renderer && (c = f.$7$(e, n, o, s, h), e = c[0], s = c[1], h = c[2]));
            u(e) && (e = "");
            l = [f.$p];
            f.enableTextSelection || l.push(f.$Hd);
            s && l.push(s);
            v = [];
            y = i.$30(h, !0, "data-columnid");
            y["data-columnid"] = o.columnId;
            $.each(y,
            function(n, t) {
                v.push(n + '="' + i.$e5(t) + '"')
            });
            var p = r ? f.$Hh.length: f.$HL.length,
            w = '<td class="' + l.join(" ") + '" colspan="' + p + '" ' + v.join(" ") + ">" + e + "<\/td>",
            b = f.$ed("details");
            return '<tr class="' + b + '">' + w + "<\/tr>"
        },
        $76: function(n) {
            var t = this,
            v, c, l, a, s, y, f, e, r, o, h;
            if (t.summary) {
                if (v = n ? t.$3p: t.$3h, c = $("<tbody>"), t.summaryData) {
                    for (l = $("<tr>", {
                        "class": t.$R + "-summary " + t.$u
                    }), a = n ? t.$Hh: t.$HL, s = 0, y = a.length; s < y; s++)(f = a[s], e = f.columnId, f.hidden) || (r = $("<td>", {
                        "class": t.$p + " " + t.$p + "-" + e,
                        "data-columnid": e
                    }), t.enableTextSelection || r.$3(t.$Hd), o = t.summaryData[e], t.summaryData[e + ".status"] === "modified" && r.$3(t.$p + "-dirty"), h = $("<div>", {
                        "class": t.$p + "-inner "
                    }), f.align && f.align !== "left" && h.$3("f-align-" + f.align), (u(o) || o === "") && (o = "&nbsp;"), h.html(o), h.$7(r), r.$7(l));
                    r && r.length && r.$3(t.$et);
                    l.$7(c)
                }
                i.$eh(v, "tbody", c)
            }
        },
        $7R: function() {
            var t = this;
            t.columnMoving && n.$2("F.Grid - columnMoving")
        },
        $cv: function(n, t, i) {
            this.$s("columnmove", [event, n, t, i])
        },
        $5A: function() {
            function f(n) {
                var t = $("." + i.$l("resizer") + "." + n);
                return t.length || (t = $("<div>", {
                    "class": i.$l("resizer") + " " + i.$eU + " " + n
                }).$7("body")),
                t.$q(i.$Q.$q()),
                t.css("top", i.$Q.offset().top),
                t
            }
            function e(n) {
                for (var t;;) {
                    if (!n.columns) {
                        t = n;
                        break
                    }
                    n = n.columns[n.columns.length - 1]
                }
                return t
            }
            var i = this;
            i.columnResizing && i.$Q.$c("." + i.$l()).resizable({
                handles: "e",
                start: function(t, r) {
                    var u, o, s;
                    n.$H9 = !0;
                    u = r.element;
                    i.$36(u, !1);
                    o = i.$I(u);
                    o.columns && (s = e(o), u.data("resize-colheader", $(".f-grid-colheader-" + s.columnId)));
                    u = u.data("resize-colheader") || u;
                    var h = u.offset(),
                    c = f("start"),
                    l = f("end");
                    c.css({
                        left: h.left - 1
                    }).show();
                    l.css({
                        left: h.left + u.$1(!0) - 1
                    }).show()
                },
                resize: function(n, t) {
                    var i = t.element,
                    r, u;
                    i = i.data("resize-colheader") || i;
                    r = i.offset();
                    u = f("end");
                    u.css("left", r.left + i.$1(!0) + (t.size.width - t.originalSize.width) - 1)
                },
                stop: function(e, o) {
                    var s = o.element,
                    h, c;
                    s = s.data("resize-colheader") || s;
                    s.remove("resize-colheader");
                    f("start").remove();
                    f("end").remove();
                    h = i.$I(s);
                    c = s.$1(!0) + (o.size.width - o.originalSize.width);
                    h.width = c;
                    u(h.flex) || (h.flex = r);
                    i.forceFit = !1;
                    i.$k();
                    i.$s("columnresize", [e, h.columnId, c]);
                    t.setTimeout(function() {
                        n.$H9 = !1
                    },
                    100)
                }
            })
        },
        $7W: function(n) {
            function t(n) {
                for (var u, i, r = 0,
                f = n.length; r < f; r++) if (i = n[r], i.columns && i.columns.length) {
                    if (!i.locked && (u = t(i.columns), !u)) return ! 1
                } else if (!i.locked) return ! 1;
                return ! 0
            }
            var i = this;
            return n.locked ? !0 : n.columns && t(n.columns) ? !0 : !1
        },
        $3F: function(n) {
            function t(n) {
                for (var u, i, r = 0,
                f = n.length; r < f; r++) if (i = n[r], i.columns && i.columns.length) {
                    if (!i.hidden && (u = t(i.columns), !u)) return ! 1
                } else if (!i.hidden) return ! 1;
                return ! 0
            }
            var i = this;
            return n.hidden ? !0 : n.columns && t(n.columns) ? !0 : !1
        },
        $5l: function() {
            function i(r) {
                for (var u, f = 0,
                e = r.length; f < e; f++) u = r[f],
                u.locked ? (t.push(u), n.$7C(u, !0)) : u.columns && u.columns.length && i(u.columns)
            }
            var n = this,
            t = [];
            return i(n.columns),
            t
        },
        $co: function(n) {
            function i(r) {
                var u = !1;
                return $.each(r,
                function(r, f) {
                    if (f == n || t.$3F(f) || t.columnLocking && t.$7W(f)) return ! 0;
                    if (f.columns && f.columns.length) {
                        if (i(f.columns)) return u = !0,
                        !1
                    } else return u = !0,
                    !1
                }),
                u
            }
            var t = this;
            return i(t.columns)
        },
        $cT: function(n) {
            function i(r) {
                var u = !1;
                return $.each(r,
                function(r, f) {
                    if (f == n || t.$3F(f)) return ! 0;
                    if (f.columns && f.columns.length) {
                        if (i(f.columns)) return u = !0,
                        !1
                    } else if (f.hideable) return u = !0,
                    !1
                }),
                u
            }
            var t = this;
            return i(t.columns)
        },
        $5j: function() {
            function i(r) {
                $.each(r,
                function(r, u) {
                    if (n.$3F(u) || n.columnLocking && n.$7W(u)) return ! 0;
                    u.columns && u.columns.length ? i(u.columns) : t.push(u)
                })
            }
            var n = this,
            t = [];
            return i(n.columns),
            t
        },
        $52: function(n) {
            function i(n) {
                $.each(n,
                function(n, u) {
                    if (r.$3F(u)) return ! 0;
                    u.columns && u.columns.length ? i(u.columns) : t.push(u)
                })
            }
            var r = this,
            t = [];
            return i(n),
            t
        },
        $cA: function(t, r, f) {
            function tt(n) {
                for (var e, r, i, o, u, t = 0,
                f = s.length; t < f; t++) for (e = s[t], r = e[1], i = 0, o = r.length; i < o; i++) if (u = r[i], u[0] == n) return u;
                return null
            }
            function v(n, t) {
                var i = n[2],
                r,
                f,
                u;
                i ? i += t: i = t + 1;
                n[2] = i;
                r = n[5];
                r && r.$eC && (f = r.$eC.columnId, u = tt(f), u && u.length && v(u, t))
            }
            function y(n, t) {
                var f, r, o, u, e, i;
                if (n && n.length) {
                    for (f = n[1], r = 0, o = f.length; r < o; r++) u = f[r],
                    e = u[5],
                    e.columns && e.columns.length || (i = u[3], i ? i++:i = 2, u[3] = i);
                    t--;
                    t >= 0 && y(s[t], t)
                }
            }
            function p(t, r, o) {
                function b(n) {
                    i.$h("f-haschildren", n[1]) && h.length && (a = h[h.length - 1].columnId)
                }
                var c = [],
                k = [e.$l("row")],
                w = [k, c],
                d = s.length,
                g,
                h,
                a,
                l;
                s.push(w);
                g = t.length;
                h = [];
                $.each(t,
                function(t, r) {
                    var w, s, b, l, a, y;
                    if (e.$3F(r) || e.columnLocking && f && e.$7W(r)) return ! 0;
                    u(r.flex) && u(r.width) && (r.width = e.defaultColumnWidth);
                    var p = r.columnId,
                    d = e.$l(p),
                    o = [e.$l(), d, e.$HR, e.$Hd];
                    r.cls && o.push(r.cls);
                    e.sorting && r.sortable && (o.push("f-grid-sortable"), r.sortField === e.sortField && o.push("f-grid-sort-" + e.sortDirection));
                    e.columnLocking && r.lockable && o.push("f-grid-lockable");
                    e.filters && r.filter && (o.push("f-grid-filterable"), e.$5G(p) && o.push("f-grid-filtered"));
                    e.columnMenu && r.menu || o.push("f-grid-menudisabled");
                    e.$ew(r) && o.push("f-grid-fixedwidth");
                    w = [e.$l("inner")];
                    s = r.headerAlign;
                    s || (s = r.align);
                    s && w.push("f-align-" + s);
                    b = r.text ? r.text: "&nbsp;";
                    l = r.columnType;
                    l === "checkselectionfield" ? (e.multiSelect && (b = '<i class="ui-icon f-grid-checkbox"><\/i>'), o.push("f-grid-checkselectionfield")) : l === "rownumberfield" ? o.push("f-grid-rownumberfield") : l === "rowexpanderfield" ? o.push("f-grid-rowexpanderfield") : l === "checkboxfield" && o.push("f-grid-checkboxfield");
                    a = "";
                    r.tooltip && (a += " ", a += r.tooltipType === "title" ? "title": "data-qtip", a += '="' + i.$e5(r.tooltip) + '"');
                    var g = "<span" + a + ">" + b + "<\/span>",
                    nt = '<div class="' + e.$l("text") + '">' + g + '<i class="ui-icon f-grid-sort-icon"><\/i><\/div>',
                    tt = '<div class="' + w.join(" ") + '">' + nt + '<div class="' + e.$l("trigger") + '">' + n.$7n + "<\/div><\/div>",
                    k = [p, o, 0, 0, tt, r];
                    c.push(k);
                    r.columns && r.columns.length && (y = 0, $.each(r.columns,
                    function(n, t) {
                        if (t.hidden || e.columnLocking && f && t.locked) return ! 0;
                        y++;
                        h.push(t)
                    }), y > 1 && v(k, y - 1), y > 0 && o.push("f-haschildren"))
                });
                a = "";
                c && c.length && (l = c[c.length - 1], r === 0 ? (l[1].push(e.$et), b(l)) : l[0] === o && (l[1].push(e.$et), b(l)));
                h.length && (y(w, d), r++, p(h, r, a))
            }
            var e = this,
            s = [],
            a,
            c,
            w,
            l,
            g,
            o,
            h,
            nt;
            for (p(r, 0, ""), a = [], c = 0, w = s.length; c < w; c++) {
                var b = s[c],
                k = b[1],
                d = [];
                for (l = 0, g = k.length; l < g; l++) o = k[l],
                h = [],
                h.push('data-columnid="' + i.$e5(o[0]) + '"'),
                o[2] && h.push('colspan="' + o[2] + '"'),
                o[3] && h.push('rowspan="' + o[3] + '"'),
                d.push('<th class="' + o[1].join(" ") + '" ' + h.join(" ") + ">" + o[4] + "<\/th>");
                a.push('<tr class="' + b[0].join(" ") + '">' + d.join("") + "<\/tr>")
            }
            nt = $("<thead>").html(a.join(""));
            i.$eh(t, "thead", nt)
        },
        $44: function() {
            var n = this,
            t;
            n.columnLocking && (t = n.$5l(), n.gridHeader && n.$cA(n.$3o, t, !1), n.$HL = n.$52(t), n.lockedColumns = n.$HL);
            n.gridHeader && n.$cA(n.$H1, n.columns, !0);
            n.$Hh = n.$5j();
            n.mainColumns = n.$Hh;
            n.$5A();
            n.$7R()
        },
        $5V: function() {
            var n = this,
            i = n.data,
            t;
            i && i.length ? i[0].id || (t = n.$70(i), t && t.length === 2 && (n.data = t[0], n.alldata = t[1])) : (n.alldata = [], n.data = [], n.paging && n.setRecordCount(0))
        },
        $70: function(n, t) {
            var i = this,
            r;
            if (n && n.length) return r = i.$1Q(n),
            i.$c_(r, t)
        },
        $cB: function(n) {
            var t = this,
            i = t.$c_(t.alldata, r, n);
            t.data = i[0];
            t.alldata = i[1]
        },
        $c_: function(t, i, r) {
            var u = this,
            f = t;
            return r || (u.tree && n.$2("F.Grid - tree"), u.simulateTree && (f = u.$1J(f))),
            u.paging && !u.databasePaging && (f = u.pagingbar.getPagedData(f)),
            [f, t]
        },
        $1Q: function(t) {
            function l(n, t, i) { (w(i) || u(i)) && (i = "");
                n[t] = i
            }
            var r = this,
            h, c, f, s, e, o;
            return (u(t) && (t = r.data), !t || !t.length) ? [] : (h = [], r.$n(function(n) {
                h.push(n)
            }), r.simulateTree && (r.$n(function(n) {
                if (n.simulateTreeLevelField) return c = n.simulateTreeLevelField,
                f = n.columnId,
                !1
            }), s = 0, e = 0), o = [], $.each(t,
            function(t, a) {
                var v = {},
                y = {},
                p, w, k, d, b;
                $.each(a,
                function(n, t) {
                    l(y, r.getField(n), t)
                });
                p = {};
                $.each(h,
                function(n, t) {
                    var e = t.columnId,
                    f = t.field,
                    i;
                    f && (i = r.$3w(t, y[f]));
                    u(i) || (p[e] = i)
                });
                r.simulateTree && (t === 0 && (s = parseInt(y[c], 10)), w = parseInt(y[c], 10), e != w && (t - 1 >= 0 && w > e && (k = o[o.length - 1], d = k.values[f].replace(new RegExp(n.$HJ, "g"), ""), k.values[f] = i.$Hz(n.$HJ, e - s) + n.$cw + d), e = w), p[f] = i.$Hz(n.$HJ, w + 1 - s) + p[f]);
                b = r.attrFields;
                b && b.length && (v.attrs = {},
                $.each(b,
                function(n, t) {
                    v.attrs[t] = y[t] + ""
                }));
                v.id = r.idField ? y[r.idField] + "": "f_grid_row_" + t;
                r.textField && (v.text = y[r.textField] + "");
                r.parentIdField && (v.parentId = y[r.parentIdField] + "");
                r.unselectableField && (v.unselectable = !1, n.$2("F.Grid - row - unselectable"));
                r.rowExpander && (p[r.rowExpander.columnId] = y[r.rowExpander.field]);
                r.listViews && r.listViews.length && $.each(r.listViews,
                function(n, t) {
                    p[t.columnId] = y[t.field]
                });
                v.values = p;
                v.index = t;
                r.rowDataBound && r.rowDataBound.apply(r, [v]);
                o.push(v)
            }), o)
        },
        $1J: function(n) {
            var t = this,
            i;
            return ! n || n.length === 0 ? [] : (t.$n(function(n) {
                if (n.simulateTreeLevelField) return i = n,
                !1
            }), n)
        },
        $1i: function(n, t) {
            function h(n, t) {
                $.each(n,
                function(n, i) {
                    var e = i.id,
                    f = r[e];
                    i.treeIndex = o;
                    i.level = t;
                    o++;
                    f && f.length ? (u(i.expanded) && (i.expanded = l.expanded ? !0 : !1), i.children = f, i.leaf = !1, h(f, t + 1)) : u(i.leaf) && (i.leaf = !0)
                })
            }
            var c = this,
            f, e, o;
            if (!n || n.length === 0) return [];
            t = t || 0;
            var l = c.tree,
            r = {},
            s = [];
            return ($.each(n,
            function(n, t) {
                var i = t.parentId;
                r[i] ? r[i].push(t) : r[i] = [t];
                s.push(t.id + "")
            }), $.each(r,
            function(n) {
                if (!i.$h(n, s)) return f = n,
                !1
            }), u(f)) ? [] : (e = r[f], o = 0, h(e, t), e)
        }
    });
    $.extend(n.Grid.prototype, {
        $7y: function(n) {
            var i = this,
            t = 0;
            $.each(n.items,
            function(n, i) {
                return i.column.hidden || t++,
                t >= 2 ? !1 : void 0
            });
            $.each(n.items,
            function(n, r) {
                var u = r.column,
                f;
                u.hidden ? r.setChecked(!1) : (r.setChecked(!0), t < 2 ? (f = i.$cT(u), f ? r.enable() : r.disable()) : r.enable())
            })
        },
        $Hm: function(n, t) {
            var i = this;
            if (i.$ef) {
                o(n) || (t = n, n = r);
                var u = i.$ef.$3b,
                f = i.$I(u),
                e = i.$IHeaderEl(u);
                t === "ASC" || t === "DESC" ? i.$cJ(n, f.sortField, t, u) : t === "unlock" || t === "lock" ? (t === "unlock" ? i.unlockColumn(n, f) : i.lockColumn(n, f), i.$s(t, [n, u])) : t === "filters" || t === "cancelfilters" && i.$MH(n, u, "cancel")
            }
        },
        $cS: function(t) {
            var r = this,
            u = [];
            return $.each(t,
            function(t, f) {
                var e, o, s;
                f.hideable && (e = $.trim(i.$cM(f.text)), e || (e = "&nbsp;"), o = {
                    column: f,
                    text: e,
                    checked: !f.hidden,
                    handler: function(n) {
                        r.hideColumn(n, f, !this.isChecked())
                    }
                },
                f.columns && $.extend(o, {
                    menu: new n.Menu({
                        items: r.$cS(f.columns),
                        listeners: {
                            show: function() {
                                r.$7y(this)
                            }
                        }
                    })
                }), s = new n.MenuCheckBox(o), u.push(s))
            }),
            u
        },
        createColumnHeaderMenu: function() {
            var t = this,
            u = new n.MenuItem({
                text: t.sortASCText,
                disabled: !0,
                iconFont: "long-arrow-up",
                handler: function(n) {
                    t.$Hm(n, "ASC")
                }
            }),
            f = new n.MenuItem({
                text: t.sortDESCText,
                disabled: !0,
                iconFont: "long-arrow-down",
                handler: function(n) {
                    t.$Hm(n, "DESC")
                }
            }),
            e = new n.Menu({
                items: t.$cS(t.columns),
                listeners: {
                    show: function() {
                        t.$7y(this)
                    }
                }
            }),
            c = new n.MenuItem({
                text: t.columnsText,
                iconFont: "columns",
                menu: e
            }),
            i = [u, f, "-", c],
            r;
            if (t.columnLocking) {
                var o = new n.MenuItem({
                    text: t.unlockText,
                    iconFont: "unlock",
                    handler: function(n) {
                        t.$Hm(n, "unlock")
                    }
                }),
                s = new n.MenuItem({
                    text: t.lockText,
                    iconFont: "lock",
                    handler: function(n) {
                        t.$Hm(n, "lock")
                    }
                }),
                h = new n.MenuSeparator;
                i.push(h);
                i.push(s);
                i.push(o)
            }
            t.filters && n.$2("F.Grid - filters");
            r = new n.Menu({
                items: i,
                listeners: {
                    hide: function() {
                        if (this.$3b) {
                            var n = t.$IHeaderEl(this.$3b);
                            t.$36(n, !1);
                            this.$3b = ""
                        }
                    }
                }
            });
            r.target = t;
            t.$7o = u;
            t.$7T = f;
            t.$5Z = e;
            t.$cy = h;
            t.$3a = o;
            t.$3P = s;
            t.filters && n.$2("F.Grid - filters");
            t.$ef = r;
            t.colheaderMenu = r
        },
        $WL: function() {
            var t = this;
            t.$Q.on("click", "." + t.$l("trigger"),
            function(i) {
                var f = $(this),
                u,
                r,
                e;
                if (t.$B(i)) return (u = f.$e1("." + t.$l()), r = t.$I(u), !t.columnMenu || !r.menu) ? !1 : f.is(":visible") ? (t.$ef || t.createColumnHeaderMenu(), t.filters && r.filter && n.$2("F.Grid - filters"), t.$ef.$L()) ? !1 : (t.sorting && (r.sortable ? (u.$5("f-grid-sort-ASC") ? t.$7o.disable() : t.$7o.enable(), u.$5("f-grid-sort-DESC") ? t.$7T.disable() : t.$7T.enable()) : (t.$7o.disable(), t.$7T.disable())), t.columnLocking && (r.lockable ? (t.$cy.show(), t.$3a.show(), t.$3P.show(), r.locked ? (t.$3a.enable(), t.$3P.disable()) : (t.$3a.disable(), t.$3P.enable()), r.locked || (e = t.$co(r), e || (t.$3a.disable(), t.$3P.disable()))) : (t.$cy.hide(), t.$3a.hide(), t.$3P.hide())), t.filters && n.$2("F.Grid - filters"), t.$ef.$3b = r.columnId, t.$ef.show(f, "bottom", {
                    top: 1,
                    left: 0
                }), !1) : !1
            })
        }
    });
    $.extend(n.Grid.prototype, {
        $Ha: function() {
            function i() {
                var r = n.$H.$q(),
                t = 0,
                i = 0;
                return n.gridHeader && (t = n.$3I.$4(!0), n.columnLocking && (t = Math.max(t, n.$Wh.$4(!0)))),
                n.summary && n.summaryPosition !== "flow" && (i = n.$4q.$4(!0), n.columnLocking && (i = Math.max(i, n.$Wi.$4(!0)))),
                r -= t,
                r - i
            }
            function t() {
                var r, u, e;
                f(n.height) ? (r = i(), n.$b.$4(r, !0), n.columnLocking && n.$G.$4(r, !0)) : (n.$b.css("height", "auto"), n.columnLocking && n.$G.css("height", "auto"));
                u = 0;
                n.columnLocking && (n.$7P(!1), u = n.$WA.$1(!0), n.$38.css("margin-left", u));
                n.$7P(!0);
                f(n.height) && (e = i(), r !== e && t())
            }
            var n = this;
            t();
            n.columnLocking && (n.$1j() || t());
            n.columnLocking && (n.hasHScrollbar() ? n.$G.css("overflow-x", "scroll") : n.$G.css("overflow-x", "hidden"));
            n.$1x();
            n.$4r();
            n.$4d()
        },
        $1j: function() {
            var n = this,
            o = !0,
            k = "." + n.$l("row"),
            d = n.$H1.$c(k),
            g = n.$3o.$c(k),
            r,
            u,
            l,
            a,
            f,
            e,
            v,
            y,
            p,
            w,
            b,
            t,
            s,
            i;
            d.css("height", "auto");
            g.css("height", "auto");
            var nt = "." + n.$R,
            h = n.$eW.$c(nt),
            tt = n.$HP.$c(nt);
            if (h.css("height", "auto"), tt.css("height", "auto"), n.summary) {
                var it = "." + n.$R + "-summary",
                c = n.$3p.$c(it),
                rt = n.$3h.$c(it);
                c.css("height", "auto");
                rt.css("height", "auto")
            }
            if (r = n.$H1.$4(!0), u = n.$3o.$4(!0), r !== u && (u < r ? (l = g.last(), l.$4(l.$4() + (r - u))) : (a = d.last(), a.$4(a.$4() + (u - r))), o = !1), n.$eW.$4(!0) !== n.$HP.$4(!0)) {
                for (t = 0, s = h.length; t < s; t++) if (f = h.eq(t), e = tt.eq(t), n.rowExpander) {
                    var ut = f.$c("." + n.$ed("items")),
                    st = f.$c("." + n.$ed("details")),
                    ft = e.$c("." + n.$ed("items")),
                    ht = e.$c("." + n.$ed("details")),
                    et = ut.$4(),
                    ot = ft.$4();
                    et !== ot && (v = Math.max(et, ot), ut.$4(v), ft.$4(v));
                    ht.$4(st.$4())
                } else y = f.$4(),
                p = e.$4(),
                y !== p && (i = Math.max(y, p), f.$4(i), e.$4(i));
                o = !1
            }
            if (n.summary && n.$3p.$4(!0) !== n.$3h.$4(!0)) {
                for (t = 0, s = c.length; t < s; t++) w = c.eq(t),
                b = rt.eq(t),
                i = Math.max(w.$4(), b.$4()),
                w.$4(i),
                b.$4(i);
                o = !1
            }
            return o
        },
        $7P: function(n) {
            function a() {
                var a = i.$e3(h),
                b,
                d,
                p,
                g,
                v;
                k() && (a = i.$e3(h));
                var y = [],
                l = 0,
                w = !1;
                if (t.forceFit && n ? (w = !0, b = 0, d = a, $.each(u,
                function(n, i) {
                    i.hidden || (f(i.width) || (i.width = t.defaultColumnWidth), t.$ew(i) ? d -= i.width: b += i.width)
                }), $.each(u,
                function(n, i) {
                    var r, u;
                    if (i.hidden) return ! 0;
                    r = i.width;
                    t.$ew(i) || (r = Math.floor(i.width * d / b), u = t.$7z(i, r), u && (r = u));
                    i.width = r;
                    y.push({
                        width: r,
                        item: i
                    });
                    l += r
                })) : (n && (p = 0, g = a, $.each(u,
                function(n, t) {
                    if (t.hidden) return ! 0;
                    t.flex ? p += t.flex: g -= t.width
                }), p && (w = !0)), $.each(u,
                function(i, r) {
                    var u, f;
                    if (r.hidden) return ! 0;
                    u = r.width;
                    n && r.flex && (u = Math.floor(r.flex / p * g));
                    t.$ew(r) || (f = t.$7z(r, u), f && (u = f));
                    r.width = u;
                    y.push({
                        width: u,
                        item: r
                    });
                    l += u
                })), w && l < a) {
                    var it = a - l,
                    nt = y[y.length - 1],
                    tt = nt.width + it;
                    nt.width = tt;
                    nt.item.width = tt;
                    l = a
                }
                return e.$1(l, !0),
                s.$1(l, !0),
                r.$1(l, !0),
                t.summary && (o.$1(l, !0), c.$1(l, !0)),
                v = $("<colgroup>"),
                $.each(y,
                function(n, t) {
                    var i = $("<col>");
                    i.width(t.width);
                    i.$7(v)
                }),
                i.$7H(e, ">colgroup", v),
                i.$7H(r, ">colgroup", v.clone()),
                t.summary && i.$7H(o, ">colgroup", v.clone()),
                t.rowExpander && r.$c(">tbody>tr>td>.f-grid-table").each(function() {
                    i.$7H($(this), ">colgroup", v.clone())
                }),
                l
            }
            var t = this,
            u = t.$Hh,
            s = t.$sB,
            e = t.$H1,
            h = t.$b,
            r = t.$eW,
            o = t.$3p,
            c = t.$sT,
            l, v;
            n || (u = t.$HL, s = t.$WD, e = t.$3o, h = t.$G, r = t.$HP, o = t.$3h, c = t.$Wl);
            e.$c(">colgroup").remove();
            r.$c(">colgroup").remove();
            t.summary && o.$c(">colgroup").remove();
            e.css("width", "100%");
            s.css("width", "auto");
            r.css("width", "100%");
            t.summary && (o.css("width", "100%"), c.css("width", "auto"));
            v = t.hasVScrollbar();
            l = a();
            v !== t.hasVScrollbar() && (l = a());
            n && t.$1q(l)
        },
        $1x: function() {
            var n = this;
            n.$Q.$c("." + n.$l()).each(function() {
                var i = $(this),
                u = i.$c("." + n.$l("inner")),
                f = u.$4(!0),
                t = i.$q(),
                r;
                t && t > f && (r = i.$c("." + n.$l("trigger")), r.css({
                    top: "50%",
                    height: t,
                    "margin-top": -t / 2
                }))
            })
        },
        $1q: function(n) {
            var t = this,
            u, r;
            t.hasVScrollbar() && (u = i.$e3(t.$b), r = t.$b.$V() - u, r || (r = i.$71()), t.$sB.$1(n + r, !0), t.summary && t.summaryPosition !== "flow" && t.$sT.$1(n + r, !0))
        }
    });
    $.extend(n.Grid.prototype, {
        $1L: function(n, t) {
            var i = this,
            r, f = i.$X(n),
            e = n.index(),
            s = f.$c("." + i.$p).length,
            o;
            if (u(t) && (t = i.tabVerticalNavigate), t) {
                var c = f.index(),
                h = f.siblings().addBack(),
                l = h.length;
                c === l - 1 ? e !== s - 1 && (r = h.eq(0).$c("." + i.$p).eq(e + 1)) : r = f.next().$c("." + i.$p).eq(e)
            } else e === s - 1 ? (o = f.next(), o.length && (r = o.$c("." + i.$p).eq(0))) : r = n.next();
            return r
        },
        $1I: function(n, t) {
            var i = this,
            r, f = i.$X(n),
            e = n.index(),
            h = f.$c("." + i.$p).length,
            o;
            if (u(t) && (t = i.tabVerticalNavigate), t) {
                var c = f.index(),
                s = f.siblings().addBack(),
                l = s.length;
                c === 0 ? e !== 0 && (r = s.eq(l - 1).$c("." + i.$p).eq(e - 1)) : r = f.prev().$c("." + i.$p).eq(e)
            } else e === 0 ? (o = f.prev(), o.length && (r = o.$c("." + i.$p).eq(h - 1))) : r = n.prev();
            return r
        },
        $cj: function() {
            var t = this;
            t.$Q.on("click dblclick", ".f-grid-row .f-grid-cell",
            function(n) {
                var i = $(this),
                u,
                r;
                t.$B(n) && t.cellEditing && (u = t.cellEditingClicks === 1 ? "click": "dblclick", t.$eP(n), r = t.$I(i), r.editable && (r.columnType === "checkboxfield" ? t.$4N(n, i) : n.type === u && t.$3u(n, i)))
            });
            $(document).mousedown(function(n) {
                var u, f, r, i;
                if (t.cellEditing) {
                    if (t.$B(n)) {
                        if (u = $(n.target), u.$e1(".f-grid-cell-editor").length) return;
                        if (r = u.$e1(".f-grid-row .f-grid-cell"), r.length && (i = t.$I(r), i.editor)) return
                    } else if (f = t.$H.$c(".f-grid-cell-editor:visible"), f.length) {
                        if (r = f.data("targettd"), i = t.$I(r), !i) {
                            t.$eT();
                            return
                        }
                        if (i.editor && i.editor.$3J && !i.editor.$3J(n)) return
                    }
                    t.$eP(n)
                }
            });
            $(document).keydown(function(i) {
                function e(n, e) {
                    function l(r) {
                        return i.shiftKey ? t.$1I(r, n) : t.$1L(r, n)
                    }
                    var h, s, c;
                    u(n) && (n = t.tabVerticalNavigate);
                    u(e) && (e = t.tabEditableCell);
                    s = r;
                    do {
                        if (s = l(s), !s) break;
                        h = t.$I(s)
                    } while ( e && (! h . editable || s . $5 ( t . $p + "-uneditable")));
                    t.$s("beforetabedit", [i, {
                        columnIndex: f.index,
                        columnId: f.columnId,
                        column: f,
                        td: r,
                        tr: o,
                        nextTd: s
                    }]) === !1 || s && s.length && (t.$3u(i, s), c = t.$X(s), t.selectRow(i, c, !1));
                    i.preventDefault()
                }
                function s() {
                    t.$HI ? t.$eP(i) : f.editable && (f.columnType === "checkboxfield" ? t.$4N(i, r) : t.$3u(i, r));
                    i.preventDefault()
                }
                var r;
                if (t.cellEditing && t.$4W() && (r = t.$e_(), r.length)) {
                    var f = t.$I(r),
                    h = r.index(),
                    o = t.$X(r),
                    c = o.$c("." + t.$p).length;
                    i.keyCode == n.KEY.ESC && (t.$HI && t.$eT(i), i.preventDefault());
                    i.keyCode == n.KEY.ENTER && (t.$HI && f.editor.$d("textarea") || (t.enterSameAsTab || t.enterNavigate ? t.enterSameAsTab ? e() : e(t.enterVerticalNavigate, t.enterEditableCell) : s()));
                    i.keyCode == n.KEY.TAB && e();
                    i.keyCode == n.KEY.SPACE && f.editable && f.columnType === "checkboxfield" && (t.$4N(i, r), i.preventDefault())
                }
            })
        },
        $cZ: function(n, t, i) {
            var r = this,
            u = r.$X(t),
            f = r.$E(u),
            e = u.index(),
            o = r.getCellValue(f, i),
            s = r.getRowValue(u);
            return r.$s("beforeedit", [n, o, {
                rowValue: s,
                rowIndex: e,
                rowId: f.id,
                rowData: f,
                columnIndex: i.index,
                columnId: i.columnId,
                column: i,
                td: t,
                tr: u
            }]) === !1 ? !1 : !0
        },
        $cRs: function() {
            var n = this;
            n.cellEditing && n.$n(function(t) {
                n.$cR(t)
            })
        },
        $cR: function(t) {
            var r = this,
            i = t.editor,
            u, f;
            i && (i.inited || ($.extend(i, {
                msgTarget: "qtip"
            }), s(i) && (u = n.$ep(i.type || "textbox"), i = t.editor = new u(i)), f = $("<div>", {
                "class": "f-grid-cell-editor"
            }).$7(r.$H), i.$d("triggerbox") && (i.enableEnterAction = !1), i.doInit(), i.parent = r, i.$e.$7(f)))
        },
        $3u: function(n, r) {
            var f = this,
            o = f.$I(r),
            e,
            s; (f.$eP(n), f.selectCell(r), o.columnType !== "checkboxfield") && f.cellEditing && o.editable && (e = o.editor, e) && (f.$HI || r.$5(f.$p + "-uneditable") || f.$cZ(n, r, o) !== !1 && (e.inited || f.$cR(o), s = e.$e.parent(".f-grid-cell-editor"), s.data("targettd", r), f.$4e && (t.clearTimeout(f.$4e), f.$4e = null), f.$4e = t.setTimeout(function() {
                var t;
                if (r.is(":visible")) {
                    f.$HI = !0;
                    e.width = r.$V();
                    e.$k();
                    f.$1d(o, e, f.getCellValue(r), r);
                    e.$39 && e.$39();
                    r.$c(".f-grid-cell-inner").css("visibility", "hidden");
                    s.show();
                    var c = r.position(),
                    v = r.$q(),
                    y = f.$b.position().top,
                    l = 0;
                    f.columnLocking && r.$e1(".f-grid-inner-main").length && (l = i.$i(f.$38, "margin-left"));
                    var h = e.$H.$4(!0),
                    p = i.$i(r, "border-top-width"),
                    w = i.$i(r, "border-left-width"),
                    a = f.$H.$q(),
                    n = c.top + y + (v - h) / 2 + p;
                    n < 0 ? n = 0 : n + h > a && (n = a - h);
                    s.css({
                        top: n,
                        left: c.left + l + w
                    });
                    t = o.autoSelectEditor;
                    u(t) && (t = f.autoSelectEditor);
                    t ? e.focus(!0) : e.focus()
                }
            },
            100)))
        },
        $4N: function(n, t) {
            var i = this,
            u = i.$I(t),
            r,
            f;
            i.cellEditing && u.editable && u.columnType === "checkboxfield" && (t.$5(i.$p + "-uneditable") || i.$cZ(n, t, u) !== !1 && ((i.$eP(n), i.selectCell(t), r = t.$c(".f-grid-checkbox"), f = r.$5(i.$j), r.$5(i.$A)) || (r.$ev(i.$j), i.$7O(n, t, !f))))
        },
        updateCellValue: function(n, t, i, r) {
            var f = this,
            o = f.$O(n, !0),
            u = {};
            e(t) ? u[t] = i: (u = t, g(i) && (r = i));
            $.each(u,
            function(n, t) {
                var i = o.$c(".f-grid-cell.f-grid-cell-" + n),
                u = i;
                i.length || (u = {
                    tr: o,
                    columnId: n
                });
                f.$7O(null, u, t, r)
            })
        },
        $HU: function(n, t) {
            return b(n) && b(t) ? n.getTime() === t.getTime() : w(n) && w(t) ? !0 : n === t
        },
        $7O: function(n, t, f, e) {
            var o = this,
            s, p, l, tt, h, y, k;
            if (c(t) ? (s = o.$I(t), p = o.$X(t)) : (p = t.tr, s = o.$I(t.columnId), t = r), s) {
                l = o.$E(p);
                s.field && (f = o.$3w(s, f));
                var a = s.columnId,
                v = l.values,
                g = v[a + ".ovalue"],
                nt = v[a];
                if (!o.$HU(f, nt)) {
                    if (v[a] = f, e || (u(g) && (v[a + ".ovalue"] = nt), o.$HU(f, g) ? (t && t.$W(o.$p + "-dirty"), v[a + ".status"] = r) : (t && t.$3(o.$p + "-dirty"), v[a + ".status"] = "modified")), tt = o.getRowValue(p), t) {
                        if (h = f, s.renderer) {
                            var w = "",
                            b = {},
                            d = o.getCellData(l, s);
                            d && (w = d.cls || "", b = d.attrs || {});
                            y = o.$7$(h, l, s, w, b);
                            h = y[0];
                            w != y[1] && (t.$W(w), t.$3(y[1]));
                            i.$Y(b) != i.$Y(y[2]) && ($.each(b,
                            function(n) {
                                t.removeAttr(n)
                            }), t.attr(y[2]))
                        }
                        h && s.htmlEncode && (h = i.$3B(h));
                        s.columnType === "checkboxfield" && (h = o.$cX(h, s)); (u(h) || h === "") && (h = "&nbsp;");
                        k = t.$c("." + o.$p + "-inner");
                        o.tree && o.tree.columnId === s.columnId && (k = k.$c(".f-tree-cell-text"));
                        k.html(h);
                        o.$7J()
                    }
                    o.$s("afteredit", [n, f, {
                        rowValue: tt,
                        rowIndex: l.index,
                        rowId: l.id,
                        rowData: l,
                        columnIndex: s.index,
                        columnId: s.columnId,
                        column: s,
                        td: t,
                        tr: p
                    }]);
                    o.$s("datachange", [n])
                }
            }
        },
        $IEditorValue: function(n, t, i) {
            var u = this,
            r;
            return t.blur(),
            n.editGetter ? r = n.editGetter.apply(u, [t, n.columnId, i]) : (r = t.getValue(), (t.$d("dropdownlist") || t.$d("dropdownbox")) && t.isUserInput() && (r = t.getText()), v(r) && (r = r.join(","))),
            r
        },
        $1d: function(n, t, i, r) {
            var f = this,
            e, o;
            if (n.editSetter) e = f.$X(r),
            o = f.$z(e),
            n.editSetter.apply(f, [t, i, n.columnId, o]);
            else {
                if (t.$d("dropdownlist") && !t.forceSelection && u(t.getTextByValue(i))) {
                    t.setText(i);
                    return
                }
                t.setValue(i)
            }
        },
        $eP: function(n, t) {
            var i = this,
            u, r;
            if (i.cellEditing && (u = i.$H.$c(".f-grid-cell-editor:visible"), u.length) && (r = u.data("targettd"), r && r.length)) {
                var o = i.$X(r),
                s = i.$z(o),
                f = i.$I(r),
                e = f.editor;
                f && e && (t || !e.validate() || i.$7O(n, r, i.$IEditorValue(f, e, s)));
                u.hide();
                r.$c(".f-grid-cell-inner").css("visibility", "visible");
                i.$HI = !1
            }
        },
        $eT: function(n) {
            this.$eP(n, !0)
        },
        startEdit: function(n, t) {
            var i = this,
            r = i.$O(n, !0).$c("." + i.$p + "-" + t);
            i.$3u(null, r)
        },
        saveEdit: function() {
            this.$eP()
        },
        cancelEdit: function() {
            this.$eT()
        },
        $1k: function() {
            var t = this,
            n = 0;
            return $.each(t.data,
            function(t, i) {
                f(i.index) && i.index < n && (n = i.index)
            }),
            n--,
            n
        },
        $ss: function(n, t) {
            var r = this,
            i = {},
            f = {};
            return $.each(t,
            function(n, t) {
                var i = r.$I(n);
                i && (t = r.$3w(i, t), f[n] = t)
            }),
            i.index = r.$1k(),
            i.values = f,
            i.status = "newadded",
            u(n) || (i.id = n),
            i
        },
        addNewRecords: function(t, r) {
            var e = this,
            o = [];
            $.each(t,
            function(t, i) {
                var f = i.values,
                r;
                u(f) && (f = i);
                r = i.id;
                u(r) && (r = n.$3Q());
                o.push(e.$ss(r, f))
            });
            f(r) ? i.$9(r, o, e.data) : r ? $.merge(e.data, o) : i.$9(0, o, e.data);
            e.$y();
            e.$s("datachange")
        },
        addNewRecord: function(t, r, u, o) {
            var s = this,
            h;
            return e(t) || (o = u, u = r, r = t, t = n.$3Q()),
            h = s.$ss(t, r),
            f(u) ? i.$9(u, h, s.data) : u ? s.data.push(h) : i.$9(0, h, s.data),
            s.$y(),
            s.$s("datachange"),
            o !== !1 && n.defer(function() {
                var i = "." + s.$p + "-editable:first",
                n, t;
                e(o) && (i = "." + s.$p + "-" + o);
                n = 0;
                f(u) ? n = u: u && (n = s.$Z().length - 1);
                t = s.$O(n, !0).$c(i).eq(0);
                t && t.length && (s.hasVScrollbar() && s.scrollToRow(n), s.$3u(null, t))
            },
            100),
            t
        },
        commitChanges: function() {
            function e(r, u, f) {
                for (var o, s, c, h = 0,
                l = r.length; h < l; h++) if (o = r[h], n.$3O(o), o.status === "deleted") continue;
                else s = {},
                $.extend(s, o, {
                    index: t,
                    treeIndex: t,
                    level: f
                }),
                t++,
                u.push(s),
                c = {},
                $.each(o.values,
                function(n, t) {
                    i.$eg(".ovalue", n) || i.$eg(".status", n) || (c[n] = t)
                }),
                s.values = c,
                o.children && o.children.length && (s.children = [], e(o.children, s.children, f + 1))
            }
            var n = this,
            r, t, u, f;
            n.data && (n.$eP(), r = [], t = 0, e(n.data, r, 0), n.data = r, n.$7S(), u = n.summaryData, u && (f = {},
            $.each(u,
            function(n, t) {
                i.$eg(".ovalue", n) || i.$eg(".status", n) || (f[n] = t)
            }), n.summaryData = f), n.$y(), n.$s("datachange"))
        },
        $75: function(n) {
            return f(n.index) && n.index < 0
        },
        rejectChanges: function() {
            function e(t, r, o) {
                for (var s, h, l, c = 0,
                a = t.length; c < a; c++) if (s = t[c], n.$3O(s), n.$75(s)) continue;
                else h = {},
                $.extend(h, s, {
                    treeIndex: f,
                    level: o
                }),
                delete h.status,
                f++,
                r.push(h),
                l = {},
                $.each(s.values,
                function(n, t) {
                    if (!i.$eg(".ovalue", n) && !i.$eg(".status", n)) {
                        var r = s.values[n + ".ovalue"];
                        l[n] = u(r) ? t: r
                    }
                }),
                h.values = l,
                s.children && s.children.length && (h.children = [], e(s.children, h.children, o + 1))
            }
            var n = this,
            r, f, t;
            n.$eT();
            n.clearSelection();
            r = [];
            f = 0;
            e(n.data, r, 0);
            n.data = r;
            n.$7S();
            t = n.summaryData;
            t && $.each(t,
            function(n, r) {
                if (!i.$eg(".ovalue", n) && !i.$eg(".status", n)) {
                    var f = t[n + ".ovalue"];
                    t[n] = u(f) ? r: f
                }
            });
            n.$y();
            n.$s("datachange")
        },
        $7L: function(n, t) {
            var f = this,
            r = {};
            return f.$n(function(f) {
                var o = f.columnId,
                s = f.columnType,
                h, e; (s === "renderfield" || s === "checkboxfield") && (h = n.values[o + ".status"], (!t || t && h === "modified") && (e = n.values[o], u(e) || (b(e) && f.fieldType === "date" && f.fieldFormat && (e = i.$eR(f.fieldFormat, e)), r[o] = e)))
            }),
            r
        },
        getModifiedData: function() {
            var n = this,
            t = [],
            i = 0;
            return n.$ec(function(r) {
                var u, f, e;
                r.status === "deleted" ? n.$75(r) || (f = "deleted", u = {
                    index: -1
                }) : (r.status === "newadded" ? (e = n.$7L(r), f = "newadded") : (e = n.$7L(r, !0), f = "modified"), d(e) || (u = {
                    index: i,
                    values: e
                }), i++);
                u && (n.tree && (u.parentId = r.parentId), $.extend(u, {
                    status: f,
                    originalIndex: r.index,
                    id: r.id
                }), r.text && (u.text = r.text), t.push(u))
            }),
            t
        },
        getMergedData: function() {
            var n = this,
            t = [],
            i = 0;
            return n.$ec(function(r) {
                var u, e, f;
                r.status !== "deleted" && (f = n.$7L(r), e = r.status === "newadded" ? "newadded": d(n.$7L(r, !0)) ? "unchanged": "modified", d(f) || (u = {
                    index: i,
                    values: f
                }), i++);
                u && (n.tree && (u.parentId = r.parentId), $.extend(u, {
                    status: e,
                    originalIndex: r.index,
                    id: r.id
                }), r.text && (u.text = r.text), t.push(u))
            }),
            t
        }
    });
    n.PagingToolbar = n.Toolbar.extend({
        ccls: "f-pagingtoolbar",
        position: "bottom",
        beforeText: "Page",
        afterText: "of {0}",
        firstText: "First Page",
        prevText: "Previous Page",
        nextText: "Next Page",
        lastText: "Last Page",
        displayMsg: "Displaying {0} - {1} of {2}",
        emptyMsg: "No data to display",
        type: "pagingtoolbar",
        initEl: function() {
            var t = this,
            i = t.$4l,
            f = new n.Button({
                iconFont: "angle-double-left",
                tooltip: t.firstText,
                cls: "f-grid-pager firstpage",
                defaultState: !1,
                handler: function(n) {
                    i.$H5(n, 0)
                }
            }),
            e = new n.Button({
                iconFont: "angle-left",
                tooltip: t.prevText,
                cls: "f-grid-pager prevpage",
                defaultState: !1,
                handler: function(n) {
                    i.$H5(n, i.pageIndex - 1)
                }
            }),
            o = new n.Button({
                iconFont: "angle-right",
                tooltip: t.nextText,
                cls: "f-grid-pager nextpage",
                defaultState: !1,
                handler: function(n) {
                    i.$H5(n, i.pageIndex + 1)
                }
            }),
            s = new n.Button({
                iconFont: "angle-double-right",
                tooltip: t.lastText,
                cls: "f-grid-pager lastpage",
                defaultState: !1,
                handler: function(n) {
                    i.$H5(n, i.getPageCount() - 1)
                }
            }),
            h = new n.ToolbarText({
                text: t.beforeText
            }),
            c = new n.NumberBox({
                id: i.id + "_pagingToolbar_pageNumberBox",
                msgTarget: "qtip",
                width: 36,
                trigger1Hidden: !0,
                trigger2Hidden: !0,
                noDecimal: !0,
                noNegative: !0,
                listeners: {
                    blur: function() {
                        this.getValue() != i.pageIndex + 1 && this.setValue(i.pageIndex + 1)
                    },
                    enter: function(n) {
                        var t = this;
                        t.validate() && i.$H5(n, t.getValue() - 1)
                    }
                }
            }),
            l = new n.ToolbarText({
                text: t.afterText
            }),
            r = [f, e, "-", h, c, l, "-", o, s],
            u;
            $.merge(r, t.items);
            t.$We(t.items) || r.push("->");
            i.showPageMsg && (u = new n.ToolbarText({
                text: t.displayMsg
            }), r.push(u), t.lastTextItem = u);
            t.items = r;
            t._super();
            t.$e.$3(t.ccls);
            t.firstBtn = f;
            t.prevBtn = e;
            t.nextBtn = o;
            t.lastBtn = s;
            t.beforeTextItem = h;
            t.afterTextItem = l;
            t.pageNumberBox = c;
            t.update()
        },
        $We: function(n) {
            var i = this,
            t = !1;
            return n && n.length && $.each(n,
            function(n, i) {
                if (e(i) && i === "->" || i.isType && i.isType("toolbarfill")) return t = !0,
                !1
            }),
            t
        },
        update: function(n) {
            var t = this,
            r = t.$4l,
            u;
            n && $.extend(r, n);
            r.$5h();
            u = r.getPageCount();
            u === 0 ? (t.pageNumberBox.disable(), t.pageNumberBox.maxValue = 0, t.pageNumberBox.minValue = 0, t.pageNumberBox.setValue(0)) : (t.pageNumberBox.enable(), t.pageNumberBox.maxValue = u, t.pageNumberBox.minValue = 1, t.pageNumberBox.setValue(r.pageIndex + 1));
            r.pageIndex === 0 ? (t.firstBtn.disable(), t.prevBtn.disable()) : (t.firstBtn.enable(), t.prevBtn.enable());
            r.pageIndex >= u - 1 ? (t.nextBtn.disable(), t.lastBtn.disable()) : (t.nextBtn.enable(), t.lastBtn.enable());
            t.afterTextItem.setText(i.$e2(t.afterText, u));
            r.showPageMsg && (r.recordCount <= 0 ? t.lastTextItem.setText(t.emptyMsg) : t.lastTextItem.setText(i.$e2(t.displayMsg, r.getStartRowIndex() + 1, r.getEndRowIndex() + 1, r.recordCount)))
        },
        setPageIndex: function(n) {
            n = parseInt(n, 10);
            this.update({
                pageIndex: n
            })
        },
        setRecordCount: function(n) {
            n = parseInt(n, 10);
            this.update({
                recordCount: n
            })
        },
        setPageSize: function(n) {
            n = parseInt(n, 10);
            this.update({
                pageSize: n
            })
        },
        getPagedData: function(n) {
            var r = this,
            u = [],
            t = r.$4l,
            f,
            e,
            i;
            for (t && !t.databasePaging && r.setRecordCount(n.length), f = t.getStartRowIndex(), e = t.getEndRowIndex(), i = f; i <= e; i++) u.push(n[i]);
            return u
        }
    });
    n.Form = n.Panel.extend({
        ccls: "f-form",
        type: "form",
        initEl: function() {
            var n = this;
            n._super();
            n.$e.$3(n.ccls)
        }
    });
    n.Field = n.Container.extend({
        hideEmptyLabel: !0,
        fieldLabel: "",
        hideLabel: !1,
        name: "",
        displayRule: "table",
        readonly: !1,
        msgTarget: "side",
        labelWidth: 100,
        labelSeparator: "：",
        redStar: !1,
        redStarPosition: "afterText",
        labelAlign: "left",
        initFocusStyle: !1,
        disableBlurStyle: !1,
        enablePrefix: !1,
        prefix: "",
        enableSuffix: !1,
        suffix: "",
        compareControl: "",
        compareValue: r,
        compareOperator: "==",
        compareType: "string",
        compareMessage: "",
        validateTrim: !0,
        tabIndex: 0,
        type: "field",
        initEl: function() {
            function y(n) {
                var i, f;
                u = $("<div>", {
                    "class": "f-field-fieldlabel-cell"
                });
                r = $("<label>", {
                    "class": "f-field-fieldlabel",
                    "for": t.inputId
                });
                t.labelAlign === "right" && r.$3("f-field-fieldlabel-right");
                i = "";
                t.fieldLabel && (f = '<span class="f-fieldlabel-redstar">*<\/span>', t.redStar && t.redStarPosition === "beforeText" && (i += f), i += '<span class="f-fieldlabel-text">' + t.fieldLabel + "<\/span>", t.redStar && t.redStarPosition === "afterText" && (i += f), i += '<span class="f-fieldlabel-separator">' + t.labelSeparator + "<\/span>", t.redStar && t.redStarPosition === "afterSeparator" && (i += f), r.html(i)); (t.hideLabel || t.hideEmptyLabel && !t.fieldLabel) && u.hide();
                r.$7(u);
                u.$7(n)
            }
            var t = this,
            v, i, r, u, f, e, o, l, a, s, h, c;
            t._super();
            t.redStarPosition !== "afterText" && (t.redStarPosition = "afterText", n.$2("F.Field - redStarPosition"));
            t.enablePrefix && (t.enablePrefix = !1, n.$2("F.Field - enablePrefix"));
            t.enableSuffix && !t.$d("fileupload") && (t.enableSuffix = !1, n.$2("F.Field - enableSuffix"));
            t.inputId = t.id + "-inputEl";
            t.name || (t.name = t.id);
            v = "f-field-msgtarget-" + t.msgTarget;
            i = $("<div>", {
                id: t.id,
                "class": "f-field " + t.ccls + " " + v
            });
            y(i);
            t.labelAlign === "top" && i.$3("f-field-fieldlabel-top");
            f = $("<div>", {
                "class": "f-field-body-cell"
            });
            f.$7(i);
            e = $("<div>", {
                "class": "f-field-body-cell-inner"
            });
            e.$7(f); (t.enablePrefix || t.enableSuffix) && (o = $("<div>", {
                "class": "f-field-body-cell-table"
            }), o.$7(e), t.enablePrefix && (l = $("<div>", {
                "class": "f-field-body-cell-leftpart"
            }), l.$7(o), t.prefix && $("<div>", {
                "class": "f-field-body-cell-prefix",
                html: t.prefix
            }).$7(l), t.$M7 = s), a = $("<div>", {
                "class": "f-field-body-cell-centerpart"
            }), a.$7(o), e = a, t.enableSuffix && (s = $("<div>", {
                "class": "f-field-body-cell-rightpart"
            }), s.$7(o), t.suffix && $("<div>", {
                "class": "f-field-body-cell-suffix",
                html: t.suffix
            }).$7(s), t.$4V = s));
            h = $("<div>", {
                "class": "f-field-error-cell ui-state-error-text"
            });
            c = $("<i>", {
                "class": "ui-icon f-icon-exclamation-circle"
            });
            c.$7(h);
            h.$7(i);
            t.el = i;
            t.$e = i;
            t.$Hs = r;
            t.$3f = u;
            t.$HZ = f;
            t.$es = e;
            t.$33 = h;
            t.$7j = c;
            t.fieldLabelEl = r;
            t.fieldLabelCellEl = u;
            t.bodyCellEl = f;
            t.bodyCellInnerEl = t.bodyCellInnerEl;
            t.errorCellEl = h;
            t.errorIconEl = c;
            t.on("change",
            function() {
                t.$3g(function(n) {
                    n.$d("container") && n.$s("dirtychange")
                })
            })
        },
        afterInitEl: function() {
            var n = this;
            n._super();
            n.readonly && n.setReadonly(!0)
        },
        afterInitElDisabled: function() {
            var n = this;
            n._super()
        },
        disable: function() {
            var n = this;
            n._super();
            n.clearInvalid()
        },
        getText: function() {
            return this.getValue()
        },
        getValue: function() {},
        setValue: function() {},
        clearValue: function() {
            this.setValue()
        },
        focus: function(r, u) {
            function o() {
                t.focus();
                e.$H.focus();
                r ? e.$H.select() : i.$5R(e.$H)
            }
            var e = this;
            f(u) ? n.defer(o, u) : o()
        },
        blur: function() {
            var n = this;
            n.$H.blur()
        },
        isFocus: function() {
            var n = this;
            return n.$H.is(":focus")
        },
        __doLayout: function() {
            var n = this;
            n._super();
            f(n.width) && n.$e.$1(n.width, !0);
            f(n.height) && n.$e.$4(n.height, !0); (n.labelAlign === "left" || n.labelAlign === "right") && (n.$3f.width(n.labelWidth), n.$Hs.$1(n.labelWidth, !0))
        },
        $sc: function() {
            var n = this,
            t = 0;
            return t = f(n.height) ? n.height - i.$HB(n.$e) : n.$e.$q(),
            n.labelAlign === "top" && (t -= n.$3f.$4(!0)),
            t
        },
        setFieldLabel: function(n) {
            var t = this;
            t.fieldLabel = n;
            t.$Hs.$c(".f-fieldlabel-text").html(n)
        },
        getFieldLabel: function() {
            var n = this;
            return n.$x ? n.$Hs.$c(".f-fieldlabel-text").html() : n.fieldLabel
        },
        setReadonly: function(n) {
            var t = this;
            t.readonly = n;
            t.editable && !t.readonly ? t.$H.prop("readonly", !1) : t.$H.prop("readonly", !0);
            n ? t.$e.$3("f-readonly") : t.$e.$W("f-readonly");
            t.$T && t.$T.length && (n ? t.$T.hide() : t.$T.show())
        },
        setRedStar: function(n) {
            var t = this,
            r, i;
            t.redStar = n;
            r = t.$Hs.$c(".f-fieldlabel-redstar");
            r.length ? n || r.remove() : n && (i = $('<span class="f-fieldlabel-redstar">*<\/span>'), t.redStarPosition === "beforeText" ? i.prependTo(t.$Hs) : t.redStarPosition === "afterText" ? i.insertAfter(t.$Hs.$c(".f-fieldlabel-text")) : i.$7(t.$Hs))
        },
        reset: function() {
            var n = this;
            n.setValue(n.$45, !0);
            n.clearInvalid()
        },
        isDirty: function() {
            var n = this;
            return n.$42 === n.getText() ? !1 : !0
        },
        clearDirty: function() {
            var n = this;
            n.$45 = n.getValue();
            n.$42 = n.getText()
        },
        afterAddToPage: function() {
            function i() {
                var i = !1,
                n = t.parent;
                do {
                    if (n) {
                        if (n.tableStyle) {
                            i = !0;
                            break
                        }
                    } else break;
                    n = n.parent
                } while ( 1 );
                return i
            }
            var t = this;
            t._super();
            i() && n.$2("F.Form - tableStyle");
            t.$45 = t.getValue();
            t.$42 = t.getText()
        },
        markInvalid: function(t) {
            var i = this,
            r = '<i class="ui-icon f-field-error-qtip f-icon-exclamation-circle"><\/i>' + t;
            i.msgTarget === "side" ? (i.$7j.attr("data-qclass", i.$eV), i.$7j.attr("data-qtip", r), k() && i.$33[0].scrollWidth) : i.msgTarget === "qtip" ? (i.$H.attr("data-qclass", i.$eV), i.$H.attr("data-qtip", r), n.$P || n.mouseInside(i.$H) && n.showQtip(i.$H)) : i.msgTarget === "title" && i.$H.attr("title", t);
            i.$H.$3(i.$eV);
            i.$e.$3("f-field-error");
            i.$H.attr("data-errormsg", t)
        },
        clearInvalid: function() {
            var t = this;
            t.msgTarget === "side" ? (t.$7j.removeAttr("data-qclass"), t.$7j.removeAttr("data-qtip"), k() && t.$33[0].scrollWidth) : t.msgTarget === "qtip" ? (t.$H.removeAttr("data-qclass"), t.$H.removeAttr("data-qtip"), n.$P || n.mouseInside(t.$H) && n.hideQtip(t.$H)) : t.msgTarget === "title" && t.$H.removeAttr("title");
            t.$H.$W(t.$eV);
            t.$e.$W("f-field-error");
            t.$H.removeAttr("data-errormsg")
        },
        validate: function() {
            function s(n) {
                return n && e(n) && (n = i.$ce(n)),
                t.compareType === "int" ? n = parseInt(n, 10) : t.compareType === "float" && (n = parseFloat(n)),
                n
            }
            function l(n, i) {
                var r = !1;
                switch (t.compareOperator) {
                case "==":
                    r = n == i;
                    break;
                case ">":
                    r = n > i;
                    break;
                case ">=":
                    r = n >= i;
                    break;
                case "<":
                    r = n < i;
                    break;
                case "<=":
                    r = n <= i;
                    break;
                case "!=":
                    r = n != i
                }
                return r
            }
            var t = this,
            r, f, o, h, c;
            return t.hidden || t.disabled || n.$H0 ? !0 : (r = !0, f = "", t.compareControl ? (h = n(t.compareControl), h && (o = s(h.getValue()))) : u(t.compareValue) || (o = s(t.compareValue)), u(o) || l(s(t.getValue()), o) || (f = t.compareMessage, r = !1), r && p(t.validator) && (c = t.validator.apply(t), c !== !0 && (f = c, r = !1)), r ? t.clearInvalid() : t.markInvalid(f), r)
        }
    });
    n.Hidden = n.Field.extend({
        ccls: "f-field-hidden-wrap",
        type: "hidden",
        initEl: function() {
            var n = this,
            t;
            n._super();
            t = $("<input>", {
                id: n.inputId,
                type: "hidden",
                name: n.name,
                value: n.value || ""
            });
            t.$7(n.$es);
            n.hiddenEl = t;
            n.$H = t;
            n.bodyEl = t
        },
        setValue: function(n) {
            this.hiddenEl.val(n)
        },
        getValue: function() {
            return this.hiddenEl.val()
        },
        markInvalid: function() {},
        clearInvalid: function() {},
        validate: function() {
            return ! 0
        },
        setReadonly: function() {},
        afterInitElDisabled: function() {},
        focus: function() {},
        blur: function() {},
        __showEl: function() {}
    });
    n.Label = n.Field.extend({
        ccls: "f-field-label-wrap",
        type: "label",
        initEl: function() {
            var n = this,
            t;
            n._super();
            t = $("<div>", {
                id: n.inputId,
                "class": "f-field-body f-field-label"
            });
            t.$7(n.$es);
            n.labelEl = t;
            n.$H = t;
            n.bodyEl = t;
            n.setValue(n.value)
        },
        setValue: function(n) {
            var t = this;
            t.$H.html(n);
            t.$x && t.$k(!0)
        },
        setText: function(n) {
            var t = this;
            t.$HN().html(n);
            t.$x && t.$k(!0)
        },
        $HN: function() {
            var t = this,
            n;
            return t.attrSelector && (n = t.$e.$c(t.attrSelector)),
            n && n.length || (n = t.$H),
            n
        },
        getValue: function() {
            var n = this;
            return n.$H.html()
        },
        reset: function() {},
        isDirty: function() {
            return ! 1
        },
        markInvalid: function(n) {
            var t = this;
            t._super(n);
            t.$H.$W(t.$eV)
        },
        __doLayout: function() {
            var n = this,
            t;
            n._super();
            t = n.$H.text();
            t || n.$HZ.css("width", "auto")
        }
    });
    n.TextBox = n.Field.extend({
        ccls: "f-field-textbox-wrap",
        inputType: "text",
        minLength: r,
        maxLength: r,
        required: !1,
        emptyText: "",
        editable: !0,
        minLengthText: "The minimum length for this field is {0}",
        maxLengthText: "The maximum length for this field is {0}",
        requiredText: "This field is required",
        regex: "",
        regexText: "",
        regexPattern: "",
        REGEX_PATTERNS: {
            email: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            number: /^[0-9]+$/,
            alpha: /^[a-zA-Z]+$/,
            alpha_number: /^[a-zA-Z0-9]+$/,
            alpha_underline: /^[a-zA-Z_]+$/,
            alpha_number_underline: /^[a-zA-Z0-9_]+$/,
            alpha_lowercase: /^[a-z]+$/,
            alpha_uppercase: /^[A-Z]+$/,
            url: /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i,
            postal_code: /^\d{6}$/,
            ip_address: /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/,
            identity_card: /^(\d{15}|\d{17}[x0-9])$/i
        },
        validateForValue: !1,
        enterToSubmit: !0,
        enterFocusControl: "",
        enterClickControl: "",
        type: "textbox",
        initEl: function() {
            var n = this,
            t, i;
            n._super();
            t = {
                id: n.inputId,
                "class": "f-field-body ui-corner-all " + n.$u,
                type: n.inputType,
                name: n.name
            };
            n.emptyText && (t.placeholder = n.emptyText); (!n.editable || n.readonly) && (t.readonly = "readonly");
            n.tabIndex && (t.tabindex = n.tabIndex);
            i = n.$sk(t);
            n.textEl = i;
            n.$H = i;
            n.bodyEl = i;
            n.disabled || n.readonly || !n.initFocusStyle || n.$H.$3(n.$eA);
            n.$H.$3("f-field-textbox");
            n.$4b();
            n.$1X()
        },
        afterInitEl: function() {
            var n = this;
            n._super();
            n.afterInitElSetValue()
        },
        afterInitElSetValue: function() {
            this.setValue(this.value)
        },
        afterInitElDisabled: function() {
            var n = this;
            n._super();
            n.$H.prop("disabled", !0)
        },
        disable: function() {
            var n = this;
            n._super();
            n.$H.prop("disabled", !0)
        },
        enable: function() {
            var n = this;
            n._super();
            n.$H.prop("disabled", !1)
        },
        $en: function(n) {
            var f = this,
            i, t, r, u;
            l() && (i = $(n || f.$H), i.$5("f-placeholder") && (t = i, r = i.data("data-passwordinput"), r ? (t = r, u = t.attr("id"), i.hide().removeAttr("id"), t.show().attr("id", u), t.val("").focus()) : t.val(""), t.$W("f-placeholder")))
        },
        $el: function(n) {
            var u = this,
            t = $(n || u.$H),
            r,
            f;
            if (l()) {
                if (!t.attr("placeholder")) {
                    t.$W("f-placeholder");
                    return
                }
                t.val() === "" && (t.attr("type") === "password" && (r = t.data("data-textinput"), r || (r = $("<input>").attr($.extend(i.$5u(t[0]), {
                    type: "text"
                })), r.removeAttr("name").data("data-passwordinput", t).focus(function() {
                    u.$en(r)
                }), t.data("data-textinput", r).before(r)), f = t.attr("id"), t.removeAttr("id").hide(), t = r.attr("id", f).show()), t.$3("f-placeholder"), t.val(t.attr("placeholder")))
            }
        },
        setEmptyText: function(n) {
            var t = this;
            t.emptyText = n;
            t.$H.attr("placeholder", n);
            t.$en();
            t.$el()
        },
        $1X: function() {
            var t = this;
            t.emptyText && (n.$Hc || t.$el())
        },
        $eN: function(n) {
            var t = this,
            i;
            t.disabled || t.readonly || (i = t.getText(), i != t.$3l && (t.$3l = i, t.validate(), t.$s("change", [n])))
        },
        $4b: function() {},
        $HQ: function(n) {
            var t = this;
            t.disabled || t.readonly || t.$eN(n)
        },
        $Hg: function(n, t, i) {
            var r = this,
            f = r.$3l,
            e = r.$3N;
            p(t) ? t.apply(r) : r.setValue(t);
            r.$3l = f;
            r.$3N = e; (u(i) || i) && r.$eN(n)
        },
        $4b: function() {
            var i = this;
            if (l()) i.$H.on("keyup paste change",
            function(n) {
                i.$HQ(n)
            });
            else i.$H.on("input",
            function(n) {
                i.$HQ(n)
            });
            i.$H.focus(function(n) {
                i.disabled || i.readonly || (i.$39(), i.$s("focus", [n]))
            });
            i.$H.blur(function(n) {
                i.disabled || i.readonly || i.$Hb(n)
            });
            i.$H.keydown(function(r) {
                var f, u, e;
                if (r.keyCode == n.KEY.ENTER) {
                    if (i.disabled || i.readonly) return;
                    i.$s("enter", [r]);
                    i.enterFocusControl && (f = n(i.enterFocusControl), f && t.setTimeout(function() {
                        i.blur();
                        f.focus(!0)
                    },
                    100));
                    i.enterToSubmit && (u = i.enterClickControl, u || (u = n.submitbutton), e = n(u), e && t.setTimeout(function() {
                        i.blur();
                        e.click()
                    },
                    100))
                } else r.keyCode == n.KEY.BACKSPACE && (i.disabled || i.readonly || !i.editable) && r.preventDefault()
            })
        },
        $39: function() {
            var n = this;
            n.disabled || n.readonly || (n.$H.$3(n.$eA), n.$T && n.$T.length && n.$T.$3(n.$eA), n.$en())
        },
        $W4: function() {
            var n = this;
            n.disableBlurStyle || (n.$H.$W(n.$eA), n.$T && n.$T.length && n.$T.$W(n.$eA));
            n.$el()
        },
        $Hb: function(n) {
            var t = this;
            t.$W4(n);
            t.validate();
            t.$s("blur", [n])
        },
        $sk: function(n) {
            var i = this,
            t = $("<input>", n);
            return t.$7(i.$es),
            t
        },
        getText: function() {
            var n = this;
            return l() && n.$H.$5("f-placeholder") ? "": n.$H.val()
        },
        setText: function(n, t) {
            var i = this;
            i.$7K(n);
            i.$x && !t && i.validate()
        },
        getValue: function() {
            return this.getText()
        },
        setValue: function(n, t) {
            var i = this;
            i.$7K(n);
            i.$x && !t && i.validate()
        },
        $7K: function(n) {
            var t = this;
            t.inited && (u(n) && (n = ""), t.$3l = n, l() ? n === "" ? (t.$H.val(n), t.$el()) : (t.$en(), t.$H.val(n)) : t.$H.val(n))
        },
        setMaxLength: function(n) {
            var t = this;
            t.maxLength = n
        },
        setMinLength: function(n) {
            var t = this;
            t.minLength = n
        },
        setRequired: function(n) {
            var t = this;
            t.required = n
        },
        setRegex: function(n) {
            var t = this;
            t.regex = n
        },
        setRegexPattern: function(n) {
            var t = this;
            t.regexPattern = n
        },
        markInvalid: function(n) {
            var t = this,
            i;
            t._super(n);
            l() && t.$H.attr("type") === "password" && (i = t.$H.data("data-textinput"), i && i.$3(t.$eV))
        },
        clearInvalid: function() {
            var n = this,
            t;
            n._super();
            l() && n.$H.attr("type") === "password" && (t = n.$H.data("data-textinput"), t && t.$W(n.$eV))
        },
        validate: function() {
            var t = this,
            r, s;
            if (t.hidden || t.disabled || n.$H0) return ! 0;
            if (!t._super()) return ! 1;
            var e = !0,
            o = "",
            h = t.getText();
            return t.validateTrim && (h = $.trim(h)),
            r = h,
            t.validateForValue && (r = t.getValue(), u(r) && (r = ""), r += ""),
            t.required && !r && (o = t.requiredText, e = !1),
            e && r && (f(t.minLength) && r.length < t.minLength ? (o = i.$e2(t.minLengthText, t.minLength), e = !1) : f(t.maxLength) && r.length > t.maxLength ? (o = i.$e2(t.maxLengthText, t.maxLength), e = !1) : (t.regexPattern || t.regex) && (s = t.regex, t.regexPattern && (s = t.REGEX_PATTERNS[t.regexPattern]), s && s.test && !s.test(r) && (o = t.regexText, e = !1))),
            e ? t.clearInvalid() : t.markInvalid(o),
            e
        },
        __doLayout: function() {
            var n = this;
            n._super()
        },
        setEditable: function(n) {
            var t = this;
            t.editable = n;
            t.editable && !t.readonly ? t.$H.prop("readonly", !1) : t.$H.prop("readonly", !0)
        }
    });
    n.TriggerBox = n.TextBox.extend({
        ccls: "f-field-triggerbox-wrap",
        triggerCls: "",
        trigger1Cls: "",
        trigger2Cls: "",
        triggerHidden: !1,
        trigger1Hidden: !1,
        trigger2Hidden: !1,
        editable: !0,
        enableEnterAction: !0,
        enableClickAction: !0,
        enableFocusAction: !1,
        type: "triggerbox",
        initEl: function() {
            var t = this;
            t._super();
            t.$H.$3("f-field-triggerbox");
            t.$Ws();
            t.$WW();
            t.$H.off("blur");
            $(document).mousedown(function(n) {
                t.$7t(n)
            });
            t.$H.keydown(function(i) {
                if (i.keyCode == n.KEY.TAB) {
                    if (t.disabled || t.readonly) return;
                    t.$Hb(i)
                }
            })
        },
        $7t: function(n) {
            var t = this,
            r;
            if (!t.disabled && !t.readonly && t.$H.$5(t.$eA)) {
                if (n && n.target) {
                    if (r = $(n.target), i.$e8(r, t.$e)) return;
                    if (!t.$3J(n)) return
                }
                t.$Hb(n)
            }
        },
        $3J: function() {
            return ! 0
        },
        $Hb: function() {
            var n = this;
            n._super()
        },
        blur: function() {
            var n = this;
            n.$7t()
        },
        $43: function() {
            this.$H.css("padding-right", this.$T.$1(!0))
        },
        $Ws: function() {
            var n = this,
            t = $("<div>", {
                "class": "f-field-triggerbox-icons ui-corner-all"
            }),
            u,
            i,
            f,
            r;
            t.$7(n.$es);
            n.readonly && t.hide();
            n.disabled || n.readonly || !n.initFocusStyle || t.$3(n.$eA);
            n.$T = t;
            n.triggerIconsEl = t;
            u = n.triggerCls || n.trigger1Cls;
            u && (i = $("<i>", {
                "class": "f-field-triggerbox-icon ui-icon f-triggerbox-trigger1 " + u
            }).$7(t), (n.triggerHidden || n.trigger1Hidden) && i.hide(), n.$H7 = i, n.trigger1El = i);
            f = n.trigger2Cls;
            f && (r = $("<i>", {
                "class": "f-field-triggerbox-icon ui-icon f-triggerbox-trigger2 " + f
            }).$7(t), n.trigger2Hidden && r.hide(), n.$eF = r, n.trigger2El = r);
            n.$H7 && n.$H7.click(function(t) {
                n.disabled || n.readonly || (n.$s("trigger1click", [t]) !== !1 && p(n.onTrigger1Click) && n.onTrigger1Click.apply(n, [t]), n.$s("triggerclick", [t]) !== !1 && p(n.onTriggerClick) && n.onTriggerClick.apply(n, [t]), n.focus())
            });
            n.$eF && n.$eF.click(function(t) {
                n.disabled || n.readonly || (n.$s("trigger2click", [t]) !== !1 && p(n.onTrigger2Click) && n.onTrigger2Click.apply(n, [t]), n.focus())
            })
        },
        $c2: function() {
            return this.trigger2Cls ? 2 : 1
        },
        triggerDefaultAction: function(n) {
            var t = this,
            i, r = "",
            u = t.$c2();
            u === 2 ? (i = t.onTrigger2Click, r = "trigger2click") : (i = t.onTrigger1Click, r = "trigger1click");
            t.$s(r, [n]) !== !1 && i && (i.apply(t, [n]), t.focus());
            r === "trigger1click" && t.$s("triggerclick", [n]) !== !1 && t.onTriggerClick && (t.onTriggerClick.apply(t, [n]), t.focus())
        },
        $WW: function() {
            var n = this;
            n.on("enter",
            function(t) {
                n.enableEnterAction && (n.triggerDefaultAction(t), t.preventDefault())
            });
            n.on("focus",
            function(t) { ! n.editable && n.enableFocusAction && n.triggerDefaultAction(t)
            });
            n.$H.click(function(t) {
                n.disabled || n.readonly || !n.editable && n.enableClickAction && n.triggerDefaultAction(t)
            })
        },
        setTriggerVisible: function(n, t) {
            var i = this;
            n === 1 ? i.$H7 && i.$H7.length && (t ? (i.triggerHidden = !1, i.trigger1Hidden = !1, i.$H7.css("display", "inline-block")) : (i.triggerHidden = !0, i.trigger1Hidden = !0, i.$H7.hide())) : n === 2 && i.$eF && i.$eF.length && (t ? (i.trigger2Hidden = !1, i.$eF.css("display", "inline-block")) : (i.trigger2Hidden = !0, i.$eF.hide()));
            i.$43()
        },
        isTriggerVisible: function(n) {
            var t = this;
            return n === 1 ? !t.trigger1Hidden: n === 2 ? !t.trigger2Hidden: void 0
        },
        showTrigger: function() {
            this.setTriggerVisible(1, !0)
        },
        showTrigger1: function() {
            this.setTriggerVisible(1, !0)
        },
        showTrigger2: function() {
            this.setTriggerVisible(2, !0)
        },
        hideTrigger: function() {
            this.setTriggerVisible(1, !1)
        },
        hideTrigger1: function() {
            this.setTriggerVisible(1, !1)
        },
        hideTrigger2: function() {
            this.setTriggerVisible(2, !1)
        },
        __doLayout: function() {
            var n = this;
            n._super();
            n.$43()
        },
        markInvalid: function(n) {
            var t = this;
            t._super(n);
            t.$T && t.$T.length && t.$T.$3(t.$eV)
        },
        clearInvalid: function() {
            var n = this;
            n._super();
            n.$T && n.$T.length && n.$T.$W(n.$eV)
        }
    });
    n.NumberBox = n.TriggerBox.extend({
        ccls: "f-field-numberbox-wrap",
        trigger1Cls: "f-triggericon-numberup",
        trigger2Cls: "f-triggericon-numberdown",
        noDecimal: !1,
        noNegative: !1,
        maxValue: r,
        minValue: r,
        decimalPrecision: 2,
        round: !0,
        increment: 1,
        trimEndZero: !0,
        minText: "The minimum value for this field is {0}",
        maxText: "The maximum value for this field is {0}",
        nanText: "{0} is not a valid number",
        negativeText: "The value cannot be negative",
        enableEnterAction: !1,
        commas: !1,
        type: "numberbox",
        initEl: function() {
            var t = this;
            t._super();
            t.$H.$3("f-field-numberbox");
            t.$1Z();
            t.commas && (t.commas = !1, n.$2("F.NumberBox - commas"));
            t.round || (t.round = !0, n.$2("F.NumberBox - round"))
        },
        $c2: function() {
            return 1
        },
        $HQ: function(n) {
            var t = this;
            t.disabled || t.readonly || (t.$1O(), t.$eN(n))
        },
        $1O: function() {
            var u = this,
            n = u.$H,
            t, i, r;
            l() && n.$5("f-placeholder") || (t = /[^0-9\.\-]/g, u.commas && (t = /[^0-9\.\-,]/g), i = n.val(), r = i.replace(t, ""), i !== r && n.val(r))
        },
        $1Z: function() {
            var t = this;
            t.$H.blur(function(n) {
                if (!t.disabled && !t.readonly) {
                    var i = t.getValue();
                    f(i) && t.$Hg(n, i)
                }
            });
            t.$H.keydown(function(i) {
                if (i.keyCode == n.KEY.UP) {
                    if (t.disabled || t.readonly) return;
                    t.onTrigger1Click(i);
                    i.preventDefault()
                } else if (i.keyCode == n.KEY.DOWN) {
                    if (t.disabled || t.readonly) return;
                    t.onTrigger2Click(i);
                    i.preventDefault()
                }
            })
        },
        onTrigger1Click: function(n) {
            var t = this,
            i = t.$cL(t.getValue() + t.increment);
            f(i) && t.$Hg(n, i)
        },
        onTrigger2Click: function(n) {
            var t = this,
            i = t.$cL(t.getValue() - t.increment);
            f(i) && t.$Hg(n, i)
        },
        $cQ: function(n) {
            var i = this,
            t = n + "";
            return i.round && t.lastIndexOf(".") >= 0 && (t = Math.round(t) + ""),
            t
        },
        $cD: function(n) {
            function o(n) {
                var u = n,
                r = n.lastIndexOf(".");
                if (r >= 0) {
                    for (var f = n.substr(0, r), t = n.substr(r + 1), e, o = lastIndex = t.length, i = o - 1; i >= 0; i--) if (e = t.charAt(i), e === "0") lastIndex = i;
                    else {
                        lastIndex = i + 1;
                        break
                    }
                    lastIndex != o && (t = t.substr(0, lastIndex));
                    u = t ? f + "." + t: f
                }
                return u
            }
            var r = this,
            t = n + "",
            i, u, f, e;
            return t.charAt(0) === "." && (t = "0" + t),
            i = "",
            r.round ? i = parseFloat(t).toFixed(r.decimalPrecision) : (i = t, u = t.lastIndexOf("."), u >= 0 && (f = t.substr(0, u), e = t.substr(u + 1), i = f + "." + e.substr(0, r.decimalPrecision))),
            r.trimEndZero && (i = o(i)),
            i
        },
        getValue: function() {
            var t = this,
            i = t._super();
            return t.commas && (i = n.removeCommas(i)),
            t.noDecimal ? parseInt(t.$cQ(i), 10) : parseFloat(t.$cD(i))
        },
        setValue: function(t, i) {
            var r = this;
            w(t) && (t = ""); (t || t === 0) && (t += "", t = r.noDecimal ? r.$cQ(t) : r.$cD(t), r.commas && (t = n.addCommas(t)));
            r._super(t, i)
        },
        setDecimalPrecision: function(n) {
            var t = this;
            t.decimalPrecision = n;
            t.setValue(t.getValue())
        },
        setIncrement: function(n) {
            var t = this;
            t.increment = n
        },
        $cL: function(n) {
            var t = this;
            return t.$H.val() === "" && (n = 0),
            f(n) && (f(t.maxValue) && n > t.maxValue && (n = t.maxValue), f(t.minValue) && n < t.minValue && (n = t.minValue), t.noNegative && n < 0 && (n = NaN)),
            n
        },
        setMaxValue: function(n) {
            var t = this;
            t.maxValue = n
        },
        setMinValue: function(n) {
            var t = this;
            t.minValue = n
        },
        validate: function() {
            var t = this;
            if (t.hidden || t.disabled || n.$H0) return ! 0;
            if (!t._super()) return ! 1;
            var r = !0,
            u = "",
            e = t.getValue(),
            o = t.getText();
            return t.validateTrim && (o = $.trim(o)),
            o && (f(e) ? t.noNegative && e < 0 ? (u = t.negativeText, r = !1) : f(t.maxValue) && e > t.maxValue ? (u = i.$e2(t.maxText, t.maxValue), r = !1) : f(t.minValue) && e < t.minValue && (u = i.$e2(t.minText, t.minValue), r = !1) : (u = i.$e2(t.nanText, t.getText()), r = !1)),
            r ? t.clearInvalid() : t.markInvalid(u),
            r
        },
        $43: function() {
            var n = this,
            t = 0;
            n.trigger1Hidden ? n.trigger2Hidden || (t = n.$eF.$1(!0)) : t = n.$H7.$1(!0);
            this.$H.css("padding-right", t)
        }
    });
    n.DatePicker = n.TriggerBox.extend({
        ccls: "f-field-datepicker-wrap",
        trigger1Cls: "f-triggericon-clear",
        trigger2Cls: "f-triggericon-date",
        trigger1Hidden: !0,
        clearIcon: !1,
        format: "yyyy-MM-dd",
        minValue: "",
        maxValue: "",
        showTime: !1,
        showMinute: !0,
        showSecond: !0,
        showTodayButton: !0,
        minText: "The date in this field must be after {0}",
        maxText: "The date in this field must be before {0}",
        invalidText: "{0} is not a valid date - it must be in the format {1}",
        enableEnterAction: !1,
        type: "datepicker",
        initEl: function() {
            var t = this;
            t._super();
            t.$H.$3("f-field-datepicker");
            t.$7r();
            t.$10();
            t.clearIcon && (t.clearIcon = !1, n.$2("F.DatePicker - clearIcon"))
        },
        $10: function() {
            var t = this;
            t.$H.keydown(function(i) {
                if (i.keyCode == n.KEY.DOWN) {
                    if (t.disabled || t.readonly) return;
                    if (!t.$ee()) t.onTrigger2Click(i);
                    i.preventDefault()
                }
            });
            t.on("blur",
            function() {
                var n = t.getValue();
                n && t.setValue(n, !0)
            })
        },
        $3J: function(n) {
            var r = this,
            u = $(n.target),
            t = r.$4s();
            if (!t || !t.length || !i.$e8(u, t)) return ! 0
        },
        $Hb: function() {
            var n = this;
            n._super();
            n.$H2()
        },
        $H2: function() {
            var n = this;
            n.hidePopEl()
        },
        hidePopEl: function() {
            var t = this;
            t.$ee() && t.$S.hide();
            n.enableShim && t.$J.hide()
        },
        $4s: function() {
            return this.$S ? this.$S.$e: null
        },
        $ee: function() {
            var n = this;
            return n.$S && n.$S.$L() ? !0 : !1
        },
        onTrigger1Click: function(n) {
            var t = this;
            t.clearIcon && (t.setValue(), t.$s("cleariconclick", [n]))
        },
        onTrigger2Click: function(n) {
            var t = this;
            $(n.target).is(t.$eF) && new Date - t.$c8 < 500 || (t.$ee() ? (t.$H2(), t.focus()) : t.showPopEl())
        },
        $1v: function() {
            var t = this;
            t.$S = new n.Calendar({
                renderTo: "body",
                cls: "f-calendar-absolute f-shadow f-field-datepicker-pop",
                hidden: !0,
                format: t.format,
                minValue: t.minValue,
                maxValue: t.maxValue,
                value: t.value,
                showTime: t.showTime,
                showMinute: t.showMinute,
                showSecond: t.showSecond,
                showTodayButton: t.showTodayButton,
                listeners: {
                    select: function(n) {
                        var i = this.getValue();
                        t.$Hg(n,
                        function() {
                            t.setValue(i);
                            t.$s("select")
                        });
                        t.$H2();
                        t.focus()
                    },
                    show: function() {
                        this.setValue(t.getValue())
                    }
                }
            });
            n.enableShim && t.$J.insertBefore(t.$S.$e)
        },
        showPopEl: function() {
            var n = this;
            n.$S || n.$1v();
            n.$S.show();
            n.$eu();
            n.$7k(n.$S.$e)
        },
        $3$: function() {
            var n = this;
            n.$ee() && n.$eu()
        },
        $eu: function() {
            var n = this,
            e, a, v, s;
            $(t).off("resize." + n.id);
            var y = n.$H.$1(!0),
            o = n.$H.$4(!0),
            r = n.$H.offset(),
            p = $(t).$V() - 3,
            w = $(t).$q() - 3,
            u = n.$S.$e;
            u.css({
                top: r.top + o,
                left: r.left,
                "z-index": n.$7A() + 10
            });
            var f = u.$4(!0),
            h = u.$1(!0),
            c = r.top - $(t).scrollTop(),
            l = w - c - o,
            b = c - 3;
            f > l && (e = b > f ? r.top - f: r.top - (f - o - l), e < 3 && (e = 3), u.css("top", e));
            a = r.left - $(t).scrollLeft();
            v = p - a;
            h > v && (s = r.left + y - h, s >= 0 && u.css("left", s));
            t.setTimeout(function() {
                i.$He($.proxy(n.$3$, n), "resize." + n.id)
            },
            500)
        },
        getValue: function() {
            var n = this,
            t = n._super();
            return i.$eO(n.format, t)
        },
        setValue: function(n, t) {
            var r = this,
            u;
            e(n) && (n = i.$eO(r.format, n));
            u = i.$eR(r.format, n);
            r._super(u, t);
            r.$S && r.$S.setValue(n);
            r.clearIcon && (r.getText() ? r.showTrigger1() : r.hideTrigger1())
        },
        getText: function() {
            return this._super()
        },
        setText: function(n, t) {
            this.setValue(n, t)
        },
        validate: function() {
            var t = this;
            if (t.hidden || t.disabled || n.$H0) return ! 0;
            if (!t._super()) return ! 1;
            var r = !0,
            u = "",
            e = t.getValue(),
            f = t.getText();
            return t.validateTrim && (f = $.trim(f)),
            f && (e ? t.minValue && e < i.$eO(t.format, t.minValue) ? (u = i.$e2(t.minText, t.minValue), r = !1) : t.maxValue && e > i.$eO(t.format, t.maxValue) && (u = i.$e2(t.maxText, t.maxValue), r = !1) : (u = i.$e2(t.invalidText, f, t.format), r = !1)),
            r ? t.clearInvalid() : t.markInvalid(u),
            r
        },
        setMaxValue: function(n) {
            var t = this;
            t.maxValue = n;
            t.$S && t.$S.setMaxValue(n)
        },
        setMinValue: function(n) {
            var t = this;
            t.minValue = n;
            t.$S && t.$S.setMinValue(n)
        }
    });
    n.DropDownList = n.TriggerBox.extend({
        ccls: "f-field-dropdownlist-wrap",
        $eD: "f-field-dropdownlist-pop",
        trigger1Cls: "f-triggericon-clear",
        trigger2Cls: "f-triggericon-arrowdown",
        trigger1Hidden: !0,
        clearIcon: !1,
        fields: ["value", "text", "enabled", "display", "group", "prefix"],
        simulateTree: !1,
        value: r,
        hiddenName: "",
        editable: !1,
        forceSelection: !0,
        enableEnterAction: !1,
        maxPopHeight: 300,
        multiSelect: !1,
        multiSelectSeparator: ", ",
        checkboxSelect: !1,
        matchFieldWidth: !0,
        group: !1,
        topSpaceFirst: !1,
        type: "dropdownlist",
        initEl: function() {
            var t = this;
            t._super();
            t.$H.$3("f-field-dropdownlist");
            t.$1N();
            t.$7r();
            t.$emAndEvents();
            t.clearIcon && (t.clearIcon = !1, n.$2("F.DropDownList - clearIcon"));
            t.checkboxSelect && (t.checkboxSelect = !1, n.$2("F.DropDownList - checkboxSelect"));
            t.group && (t.group = !1, n.$2("F.DropDownList - group"));
            t.$Hq("beforeselect") && (t.$F.beforeselect = r, n.$2("F.DropDownList - beforeselect"))
        },
        afterInitElSetValue: function() {
            var n = this; ! n.forceSelection && n.text ? n.setText(n.text) : n.setValue(n.value)
        },
        $HQ: function(n) {
            var t = this;
            t.disabled || t.readonly || t.editable && t.$3L(n, !0, !0)
        },
        $1N: function() {
            var t = this;
            t.on("enter",
            function() {
                if (t.$ee()) {
                    var n;
                    n = t.multiSelect ? t.$1W() : t.$4Q();
                    n && n.length && n.click()
                }
            });
            t.$H.keydown(function(i) {
                var r, u;
                if (i.keyCode == n.KEY.UP) {
                    if (t.disabled || t.readonly) return;
                    t.$ee() && (r = t.$1_(), r && r.length && (t.$$.$W(t.$8), r.$3(t.$8), t.$4u(r)), i.preventDefault())
                } else if (i.keyCode == n.KEY.DOWN) {
                    if (t.disabled || t.readonly) return;
                    t.$ee() ? (u = t.$1z(), u && u.length && (t.$$.$W(t.$8), u.$3(t.$8), t.$4u(u))) : t.$3L(i, !0, !1);
                    i.preventDefault()
                }
            })
        },
        $emAndEvents: function() {
            var t = this,
            u = [t.$eD, "f-shadow", "ui-corner-all", t.$eU],
            r;
            if (t.matchFieldWidth || u.push(t.$eD + "-autowidth"), r = $('<ul class="' + u.join(" ") + '"><\/ul>').$7("body"), t.$g = r, t.popEl = r, n.enableShim && t.$J.insertBefore(t.$g), !n.$P) t.$g.on("mouseenter mouseleave", ">li",
            function(n) {
                var i = $(this);
                i.$5(t.$A) || i.$5(t.$eD + "-group") || (n.type === "mouseenter" ? i.$3(t.$8) : n.type === "mouseleave" && i.$W(t.$8))
            });
            t.$g.on("click", ">li",
            function(n) {
                var u = $(this),
                o,
                r,
                f,
                e;
                u.$5(t.$A) || u.$5(t.$eD + "-group") || (o = !1, r = u.attr("data-value"), t.multiSelect && (f = t.getValue(), u.$5(t.$D) ? i.$5q(r, f) : i.$5m(r, f), r = f), e = t.value, t.$Hg(n,
                function() {
                    t.setValue(r)
                }), t.$s("select", [n, r, e]), t.multiSelect ? (t.$4x(), t.$$.show()) : (t.$H2(n), t.focus()), n.stopPropagation())
            })
        },
        $3$: function() {
            var n = this;
            n.$ee() && n.$eu()
        },
        $4Q: function() {
            var t = this,
            i = t.$1W(),
            n;
            return i.length ? i: (n = t.$1e(), n.length) ? n: null
        },
        $1W: function() {
            var n = this;
            return n.$$.filter("." + n.$8 + ":eq(0)")
        },
        $1e: function() {
            var n = this;
            return n.$$.filter("." + n.$D + ":eq(0)")
        },
        $1_: function() {
            var t = this,
            e = t.$$.length,
            r = e,
            u = t.$4Q(),
            n,
            f,
            o,
            i;
            for (u && u.length && (r = u.index()), n = r, f = !1;;) {
                if (n--, n < 0 && (n = e - 1, f = !0), f && n <= r) break;
                if (i = t.$$.eq(n), i.$5(t.$A) || i.$5(t.$eD + "-group") || !i.is(":visible")) continue;
                else {
                    o = i;
                    break
                }
            }
            return o
        },
        $1z: function() {
            var t = this,
            r = -1,
            o = t.$$.length,
            u = t.$4Q(),
            n,
            f,
            e,
            i;
            for (u && u.length && (r = u.index()), n = r, f = !1;;) {
                if (n++, n > o - 1 && (n = 0, f = !0), f && n >= r) break;
                if (i = t.$$.eq(n), i.$5(t.$A) || i.$5(t.$eD + "-group") || !i.is(":visible")) continue;
                else {
                    e = i;
                    break
                }
            }
            return e
        },
        $3J: function(n) {
            var t = this,
            r = $(n.target);
            if (!t.$ee() || !i.$e8(r, t.$g)) return ! 0
        },
        $Hb: function(n) {
            var t = this;
            t._super();
            t.$H2(n)
        },
        $1a: function(n) {
            for (var i, r = this,
            f = !1,
            e = n.split($.trim(r.multiSelectSeparator)), o, s = [], t = 0, h = e.length; t < h; t++) o = $.trim(e[t]),
            i = r.getValueByText(o),
            u(i) ? f = !0 : s.push(i);
            return [s, f]
        },
        $H2: function(n) {
            var t = this;
            t.$1f(n);
            t.hidePopEl();
            t.validate()
        },
        $1f: function(n) {
            var t = this,
            o, r, f, h, s, e;
            t.editable && (o = !1, f = t.getText(), t.multiSelect ? (h = t.$1a(f), r = h[0], !t.forceSelection && (!f || h[1] || r && i.$Y(r) != i.$Y(t.value)) && (o = !0)) : (r = t.getTextByValue(t.value) === f ? t.value: t.getValueByText(f), !t.forceSelection && (!f || u(r) || r && r !== t.value) && (o = !0)), s = !1, o ? f != t.text && (s = !0) : (i.$Y(r) != i.$Y(t.value) || f != t.text) && (s = !0), t.forceSelection ? s && (e = !1, t.multiSelect ? f || r.length || (e = !0) : (f && r && (e = !0), f || r || (e = !0)), t.$Hg(n,
            function() {
                t.setValue(e ? r: t.value)
            },
            e)) : s && (o && t.$1g(), t.$eN(n)))
        },
        hidePopEl: function() {
            var i = this;
            i.$ee() && i.$g.hide();
            n.enableShim && i.$J.hide();
            $(t).off("resize." + i.id)
        },
        $1F: function() {
            var r = this,
            n = $.trim(r.getText()),
            t,
            i;
            if (n) {
                for (t = $.trim(r.multiSelectSeparator); n.length && t.indexOf(n.charAt(n.length - 1)) >= 0;) n = n.substr(0, n.length - 1);
                i = n.lastIndexOf(t);
                i >= 0 && (n = $.trim(n.substr(i + t.length)))
            }
            return n
        },
        $1P: function() {
            var t = this,
            n = t.getText(),
            r;
            return t.multiSelect && (n = t.$1F(), r = t.getValueByText(n), r && i.$h(r, t.getValue()) && (n = "")),
            n = $.trim(n),
            n.toLowerCase()
        },
        getValue: function() {
            var n = this;
            return n.multiSelect ? $.merge([], n.value || []) : n.value
        },
        setText: function(n, t) {
            var i = this;
            i._super(n, t);
            i.text = n;
            i.value = r;
            i.$eK(r)
        },
        $1g: function() {
            var n = this;
            n.text = n.getText();
            n.value = r;
            n.$eK(r)
        },
        setValue: function(n, t) {
            var f = this,
            o, h, c, s;
            if (u(n)) o = "",
            n = r;
            else if (f.multiSelect) {
                for (e(n) && (n = n.split(",")), h = [], s = n.length - 1; s >= 0; s--) c = f.getTextByValue(n[s]),
                c ? h.push(c) : i.$ex(s, n);
                h.reverse();
                o = h.join(f.multiSelectSeparator)
            } else n += "",
            o = f.getTextByValue(n);
            f.$3N = n;
            f._super(o, t);
            f.text = o;
            f.value = n;
            f.$eK(n);
            f.clearIcon && (f.getText() ? f.showTrigger1() : f.hideTrigger1());
            f.$ee() && f.$4x()
        },
        $eK: function(n) {
            var t = this;
            t.hiddenName && (t.$e.$c('[name="' + t.hiddenName + '"]').remove(), n = $.makeArray(n), n.length && $.each(n,
            function(n, i) {
                $("<input>", {
                    type: "hidden",
                    name: t.hiddenName,
                    value: i
                }).insertBefore(t.$H)
            }))
        },
        $si: function(n) {
            var o = this,
            t = {},
            i, f, e;
            for (e = 0, fieldLength = o.fields.length; e < fieldLength; e++) i = o.fields[e],
            f = r,
            v(n) ? f = n[e] : (i === "text" || i === "value") && (f = n + ""),
            u(f) && i === "enabled" ? t.enabled = !0 : t[i] = f;
            return u(t.enabled) && (t.enabled = !0),
            t.display || (t.display = t.text),
            t
        },
        $74: function(n) {
            var t = this;
            t.$7F || t.$1w();
            $.each(t.$7F,
            function(i, r) {
                var u = n.apply(t, [r, i]);
                if (u === !1) return ! 1
            })
        },
        resolveData: function() {
            this.$74.apply(this, arguments)
        },
        getTextByValue: function(n) {
            var i = this,
            t = r;
            return i.$74(function(i) {
                if (i.value == n) return t = i.text,
                !1
            }),
            t
        },
        getValueByText: function(n) {
            var i = this,
            t = r;
            return i.$74(function(i) {
                if (i.text == n) return t = i.value,
                !1
            }),
            t
        },
        $1w: function() {
            var n = this,
            i = [],
            t,
            r;
            n.simulateTree && (n.data = n.$cU(n.data));
            t = {};
            r = [];
            $.each(n.data,
            function(u, f) {
                var o = n.$si(f),
                e;
                n.group ? (e = o.group, t[e] ? t[e].push(o) : (r.push(e), t[e] = [o])) : i.push(o)
            });
            n.group && $.each(r,
            function(n, r) {
                $.merge(i, t[r])
            });
            n.data = n.$7F = i
        },
        $em: function(n) {
            var t = this,
            f = [],
            h = t.getValue(),
            c = r,
            e = -1,
            o = 0,
            s = -1,
            u;
            t.$74(function(r) {
                var it = r.group,
                k = r.enabled,
                d = r.prefix,
                g = r.display,
                w = r.value,
                nt, a, u, v, l, b, p, y, tt;
                if (n && (nt = g.toLowerCase(), nt.indexOf(n) < 0)) return ! 0;
                if (s === -1 && k && (s = o), a = !1, t.multiSelect ? i.$h(w, h) && (a = !0) : w === h && (a = !0), a && (e = o), u = it, t.group && u !== c) {
                    if (u) {
                        var rt = t.$eD + "-group ui-widget-header",
                        y = 'class="' + rt + '"',
                        ut = 'data-group="' + i.$e5(u) + '"';
                        f.push("<li " + y + " " + ut + ">" + u + "<\/li>")
                    }
                    c = u
                }
                v = [];
                a && v.push(t.$D);
                k || v.push(t.$A);
                l = "";
                t.checkboxSelect && (b = "ui-icon " + t.$eD + "-checkbox", a && (b += " " + t.$j), l += '<i class="' + b + '"><\/i>');
                d && (l += d);
                l += g;
                l || (l = "&nbsp;");
                p = [];
                p.push('data-value="' + i.$e5(w) + '"');
                t.group && u && (p.push('data-group="' + i.$e5(u) + '"'), v.push(t.$eD + "-groupitem"));
                y = "";
                v.length && (y = 'class="' + v.join(" ") + '" ');
                tt = "<li " + y + p.join(" ") + ">" + l + "<\/li>";
                f.push(tt);
                o++
            });
            t.$g.html(f.join(""));
            t.$$ = t.$g.$c(">li");
            t.popItemsEl = t.$$;
            u = s;
            e !== -1 && (u = e);
            u !== -1 && t.$$.eq(u).$3(t.$8);
            t.$gInited = !0
        },
        $W1: function() {
            var t = this,
            n = t.$1e();
            n && n.length && t.$4u(n)
        },
        $4u: function(n) {
            var t = this;
            if (t.$ee()) {
                n = $(n);
                var i = n.position().top,
                r = n.$4(!0),
                u = t.$g.innerHeight();
                i < 0 ? t.$g.scrollTop(t.$g.scrollTop() + i) : i + r > u && t.$g.scrollTop(t.$g.scrollTop() + (i + r - u))
            }
        },
        $eu: function() {
            var n = this,
            a;
            $(t).off("resize." + n.id);
            var r = n.$g,
            e = n.$H.$1(!0),
            s = n.$H.$4(!0),
            v = n.$H.offset(),
            h = v.top,
            c = v.left;
            r.css({
                top: h + s,
                left: c,
                height: "auto",
                width: "auto",
                "z-index": n.$7A() + 10
            });
            var l = r.$4(!0),
            y = r.$1(!0),
            u = y,
            f = l;
            f > n.maxPopHeight && (f = n.maxPopHeight);
            f != l && r.$4(f, !0);
            n.matchFieldWidth ? r.$1(e, !0) : (f < l && (u += r.$V() - i.$e3(n.$g)), u < e && (u = e), u != y && r.$1(u, !0));
            var p = h - $(t).scrollTop(),
            k = $(t).$q() - p - s - 3,
            d = p - 3,
            o = i.$WJ(n.topSpaceFirst, f, d, k, h, s, 130);
            if (o[0] && r.$4(o[0], !0), o[1] && r.css("top", o[1]), !n.matchFieldWidth) {
                var w = $(t).$V() - 3,
                b = c - $(t).scrollLeft(),
                g = w - b;
                u > g && (a = c + e - u, a >= 0 ? r.css("left", a) : r.$1(w - b, !0))
            }
            t.setTimeout(function() {
                i.$He($.proxy(n.$3$, n), "resize." + n.id)
            },
            500)
        },
        $ee: function() {
            return this.$g.is(":visible")
        },
        onTrigger1Click: function(n) {
            var t = this;
            t.clearIcon && (t.clearValue(), t.$s("cleariconclick", [n]))
        },
        onTrigger2Click: function(n) {
            this.$3L(n, !1, !1)
        },
        $3L: function(n, t, i) {
            var r = this,
            u = r.$ee();
            u && t && (u = !1);
            u ? (r.$H2(n), r.focus()) : r.showPopEl(n, i)
        },
        showPopEl: function(n, t) {
            var i = this,
            f, e;
            if (o(n) || (t = n, n = r), f = !1, i.$gInited || (i.$em(), f = !0), i.editable) if (t) {
                if (e = i.$1P(), u(i.$3E) && (i.$3E = ""), e === i.$3E) return;
                i.$3E = e;
                i.$em(e);
                f = !0
            } else i.$3E && (i.$3E = "", i.$em(), f = !0);
            i.$$.length ? (f || i.$4x(), i.$g.show(), i.$eu(), i.$W1(), i.$7k(i.$g)) : i.hidePopEl();
            i.$39(n)
        },
        $4x: function() {
            var n = this,
            t = n.getValue();
            n.$$.each(function() {
                var r = $(this),
                e = r.attr("data-value"),
                f = !1,
                u;
                n.multiSelect ? i.$h(e, t) && (f = !0) : e === t && (f = !0);
                n.checkboxSelect && (u = r.$c("." + n.$eD + "-checkbox"));
                f ? (r.$3(n.$D), u && u.$3(n.$j)) : (r.$5(n.$D) && r.$W(n.$D), u && u.$W(n.$j))
            })
        },
        $cU: function(t) {
            var s = this,
            u, r, c, e, l;
            if (!t || !t.length) return [];
            if (!s.simulateTree || (u = i.$H3("prefix", s.fields), u === -1)) return t;
            var h = parseInt(t[0][u], 10),
            f = [],
            o = 0;
            for (r = 0, c = t.length; r < c; r++) f[r] = [],
            $.merge(f[r], t[r]),
            e = f[r][u],
            o != e && (r - 1 >= 0 && e > o && (l = f[r - 1][u].replace(new RegExp(n.$HJ, "g"), ""), f[r - 1][u] = i.$Hz(n.$HJ, o - h) + n.$cw + l), o = e),
            f[r][u] = i.$Hz(n.$HJ, e + 1 - h);
            return f
        },
        loadData: function(t, i) {
            var u = this;
            u.data = t;
            u.$7F = r;
            u.$em();
            n.noValidate(function() {
                u.setValue(i)
            })
        },
        isUserInput: function() {
            var n = this,
            t;
            return n.$x ? (t = !1, n.editable && !n.forceSelection && (n.getText() ? n.isValueExist() || (t = !0) : t = !0), t) : !1
        },
        isValueExist: function() {
            var t = this,
            n = !1,
            i = t.getValue();
            return t.multiSelect ? i.length && (n = !0) : u(i) || (n = !0),
            n
        },
        $eN: function(n) {
            var t = this,
            r;
            t.disabled || t.readonly || (t.forceSelection ? (r = t.getValue(), i.$Y(r) != i.$Y(t.$3N) && (t.$3N = r, t.validate(), t.$s("change", [n]))) : t._super(n))
        },
        clearSelection: function() {
            this.clearValue()
        }
    });
    n.TimePicker = n.DropDownList.extend({
        ccls: "f-field-timepicker-wrap",
        trigger2Cls: "f-triggericon-arrowdown",
        increment: 30,
        maxValue: "",
        minValue: "",
        editable: !0,
        type: "timepicker",
        initEl: function() {
            var n = this;
            n._super();
            n.$H.$3("f-field-timepicker");
            n.$Wc()
        },
        $Wc: function() {
            function a(n, t) {
                return i.$e9(n) + ":" + i.$e9(t)
            }
            var n = this,
            s = 0,
            h = 0,
            u = 23,
            c = 59,
            f, e, o;
            n.minValue && (f = n.minValue.split(":"), s = parseInt(f[0], 10), h = parseInt(f[1], 10));
            n.maxValue && (e = n.maxValue.split(":"), u = parseInt(e[0], 10), c = parseInt(e[1], 10));
            for (var l = [], r = s, t = h; r <= u;) {
                while (t < 60) {
                    if (r == u && t > c) {
                        r++;
                        break
                    }
                    o = a(r, t);
                    l.push([o, o, 1, "", ""]);
                    t += n.increment
                }
                t >= 60 && (r++, t -= 60)
            }
            n.data = l
        }
    });
    n.TextArea = n.TextBox.extend({
        ccls: "f-field-textarea-wrap",
        grow: !1,
        growMax: 600,
        growMin: 100,
        minHeight: r,
        enterToSubmit: !1,
        type: "textarea",
        initEl: function() {
            var n = this;
            n._super();
            n.$H.$3("f-field-textarea");
            n.grow && n.$Wr()
        },
        $Wr: function() {
            var n = this,
            t = $("<div>").css({
                position: "absolute",
                top: -1e4,
                left: -1e4,
                resize: "none"
            }).$7("body"),
            r = function() {
                var u, r;
                n.disabled || n.readonly || (t.$3("f-field-textbox").css({
                    height: "auto"
                }), t.width(n.$H.$V()), u = n.$H.val(), u = u.replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g,
                function(n) {
                    return i.$Hz("&nbsp;", n.length)
                }), t.html(u), r = t.$4(!0) + 20, r > n.growMax ? r = n.growMax: r < n.growMin && (r = n.growMin), n.labelAlign === "top" && (r += n.$3f.$4(!0)), n.height !== r && (n.height = r, n.$k(!0)))
            };
            n.$H.on("input propertychange", r)
        },
        $sk: function(n) {
            var i = this,
            t = $("<textarea>", n);
            return t.$7(i.$es),
            t
        },
        __doLayout: function() {
            var n = this,
            t;
            n.$H.css("height", "auto");
            f(n.height) || (n.height = n.grow && f(n.growMin) ? n.growMin: 100);
            f(n.minHeight) && n.height < n.minHeight && (n.height = n.minHeight);
            n._super();
            t = n.$sc();
            t -= i.$HB(n.$HZ);
            n.$H.$4(t, !0)
        },
        setValue: function(n, t) {
            var i = this;
            i._super(n, t);
            i.$x && i.grow && i.$k(!0)
        }
    });
    n.FileUpload = n.TextBox.extend({
        ccls: "f-field-fileupload-wrap",
        editable: !1,
        buttonText: "Browse...",
        buttonOnly: !1,
        buttonConfig: r,
        enableSuffix: !0,
        accept: "",
        type: "fileupload",
        initEl: function() {
            var t = this,
            i, r, u, f, e;
            t._super();
            i = "f-field-fileupload";
            t.$H.$3(i);
            t.$H.removeAttr("name");
            t.$H.attr("tabindex", -1);
            t.$H.$7(t.$es);
            r = {
                renderTo: t.$4V,
                cls: i + "-btn",
                text: t.buttonText
            };
            t.tabIndex && (r.tabIndex = t.tabIndex);
            t.buttonConfig && $.extend(r, t.buttonConfig);
            u = new n.Button(r);
            f = {
                type: "file",
                name: t.name,
                tabindex: -1,
                "class": i + "-fileinput"
            };
            t.accept && (f.accept = t.accept);
            e = $("<input>", f).$7(u.$e);
            t.buttonOnly && t.$e.$3(i + "-buttononly");
            t.$3j = u;
            t.$HH = e;
            t.$e.on("change", "input." + i + "-fileinput",
            function(n) {
                t.setValue($(this).val());
                t.validate();
                t.$s("change", [n])
            });
            u.$e.on("keydown",
            function(i) { (i.keyCode == n.KEY.ENTER || i.keyCode == n.KEY.SPACE) && t.$HH.click()
            })
        },
        __doLayout: function() {
            var n = this;
            n._super()
        },
        $7G: function() {
            var n = this;
            n.$HH.prop("disabled", !0);
            n.$3j.disable()
        },
        $sn: function() {
            var n = this;
            n.$HH.prop("disabled", !1);
            n.$3j.enable()
        },
        afterInitElDisabled: function() {
            var n = this;
            n._super();
            n.$7G()
        },
        disable: function() {
            var n = this;
            n._super();
            n.$7G()
        },
        enable: function() {
            var n = this;
            n._super();
            n.$sn()
        },
        setReadonly: function(n) {
            var t = this;
            t._super(n);
            n ? t.$7G() : t.$sn()
        },
        reset: function() {
            var n = this,
            t;
            n._super();
            nt() ? (t = n.$HH.clone(!0), n.$HH.replaceWith(t), n.$HH = t) : n.$HH.val("")
        },
        markInvalid: function(n) {
            var t = this;
            t._super(n);
            t.$3j.$e.$3(t.$eV)
        },
        clearInvalid: function() {
            var n = this;
            n._super();
            n.$3j.$e.$W(n.$eV)
        }
    });
    n.CheckBox = n.Field.extend({
        ccls: "f-field-checkbox-wrap",
        checked: !1,
        inputLabel: "",
        inputValue: "",
        value: r,
        tagType: "checkbox",
        type: "checkbox",
        initEl: function() {
            var n = this,
            i, t, r, u;
            n._super();
            i = {
                id: n.inputId,
                "class": "f-field-body f-field-checkbox",
                type: n.tagType,
                name: n.name,
                checked: n.checked
            };
            i.value = n.inputValue ? n.inputValue: "";
            n.tabIndex && (i.tabindex = n.tabIndex);
            t = $("<input>", i);
            t.$7(n.$es);
            r = $("<span>", {
                id: n.inputId + "-icon",
                "class": "f-field-checkbox-icon f-nobg",
                html: '<i class="ui-icon">'
            }).$7(n.$es);
            n.checked && r.$3(n.$j);
            u = $("<label>", {
                "class": "f-field-body-checkboxlabel",
                "for": n.inputId,
                html: n.inputLabel || "&nbsp;"
            }).$7(n.$es);
            n.checkboxEl = t;
            n.$H = t;
            n.bodyEl = t;
            n.$H8 = r;
            n.$sE = u;
            n.bodyIconEl = r;
            n.bodyLabelEl = u;
            n.$W3()
        },
        afterInitEl: function() {
            var n = this;
            n._super()
        },
        $W3: function() {
            var n = this;
            n.$cV(n.$H, n.$H8);
            n.$H.click(function() {
                if (n.disabled || n.readonly) return ! 1
            });
            n.$H.change(function(t) {
                if (n.disabled || n.readonly) return ! 1;
                var i = n.$H.prop("checked");
                n.setValue(i);
                n.$s("change", [t, i])
            });
            n.$H8.click(function(t) {
                var i, r;
                n.disabled || n.readonly || (i = n.$H8.$5(n.$j), n.$d("radiobutton") && i) || (r = !i, n.setValue(r), n.$s("change", [t, r]))
            })
        },
        $su: function() {
            var n = this,
            t = n.$H.prop("checked");
            t ? n.$H8.$5(n.$j) || n.$H8.$3(n.$j) : n.$H8.$5(n.$j) && n.$H8.$W(n.$j)
        },
        getValue: function() {
            return this.$H.prop("checked")
        },
        setValue: function(n, t) {
            var i = this;
            i.$H.prop("checked", n);
            i.$su();
            i.$x && !t && i.validate()
        },
        isChecked: function() {
            return this.getValue()
        },
        setInputLabel: function(n) {
            var t = this;
            t.inputLabel = n;
            t.$sE.html(n)
        },
        getInputLabel: function() {
            return this.$sE.html()
        },
        setInputValue: function(n) {
            var t = this;
            t.inputValue = n;
            this.$H.val(n)
        },
        getInputValue: function() {
            return this.$H.val()
        },
        setReadonly: function(n) {
            var t = this;
            t._super(n);
            n ? t.$e.$3("readonly") : t.$e.$W("readonly")
        }
    });
    n.CheckBoxList = n.Field.extend({
        ccls: "f-field-checkboxlist-wrap",
        columnNumber: "auto",
        columnVertical: !1,
        autoColumnWidth: !1,
        required: !1,
        requiredText: "You must select at least one item",
        value: r,
        defaultItemType: "checkbox",
        type: "checkboxlist",
        initEl: function() {
            var n = this,
            t;
            n._super();
            t = $("<table>", {
                "class": "f-field-body f-field-checkboxlist ui-corner-all"
            });
            t.$7(n.$es);
            n.autoColumnWidth && t.$3("f-field-checkboxlist-autocolumnwidth");
            n.$H = t;
            n.bodyEl = t;
            n.data ? n.loadData(n.data, n.value) : n.$sf()
        },
        afterInitEl: function() {
            var n = this;
            n._super();
            u(n.value) || n.setValue(n.value)
        },
        $sf: function() {
            var n = this,
            i, o = n.$W7(),
            r = o.length,
            t,
            e,
            s;
            if (f(n.columnNumber) && (r = n.columnNumber), t = 0, $.each(o,
            function(f, e) {
                var h, o, s;
                f % r == 0 && (i = $("<tr>"), t = 0);
                h = $("<td>", {
                    "class": "f-field-checkboxlist-item"
                });
                u(e.tabIndex) && n.tabIndex && (e.tabIndex = n.tabIndex);
                o = n.__addItem(e, h);
                o !== e && (s = e.$1M, u(s) && (s = f), n.items[s] = o);
                o.el.$3("f-field-innercmp");
                o.on("change",
                function(t) {
                    n.validate();
                    n.$s("change", [t, o, o.getValue()])
                });
                h.$7(i);
                i.$7(n.$H);
                t++
            }), t && t < r) for (e = 0, s = r - t; e < s; e++) i.append('<td class="f-field-checkboxlist-item"><\/td>')
        },
        $W7: function() {
            var t = this,
            o = t.items,
            u, n, i, r, c;
            if (t.columnVertical && f(t.columnNumber)) {
                o = [];
                var s = t.columnNumber,
                e = Math.floor(t.items.length / t.columnNumber),
                h = t.items.length % t.columnNumber;
                for (h !== 0 ? e++:h = s, u = [], r = 0, i = 0; i < s; i++) for (n = 0; n < e; n++) n === e - 1 && i > h - 1 || (u[n] || (u[n] = []), u[n][i] = r, r++);
                for (n = 0; n < e; n++) for (i = 0; i < s; i++) r = u[n][i],
                f(r) && (c = t.items[r], c.$1M = r, o.push(c))
            }
            return o
        },
        __addItem: function(n, t, i) {
            var r = this;
            return t = t || r.$H,
            r._super(n, t, i)
        },
        __doLayout: function() {
            var n = this,
            i, r, t;
            n._super();
            n.autoColumnWidth || (i = n.$es.$c(".f-field-checkboxlist-item"), i.css("width", "auto"), r = n.$es.$V(), t = 0, n.columnNumber === "auto" ? t = Math.floor(r / n.items.length) : f(n.columnNumber) && (t = Math.floor(r / n.columnNumber)), i.width(t))
        },
        markInvalid: function(n) {
            var t = this;
            t._super(n);
            t.$k()
        },
        clearInvalid: function() {
            var n = this;
            n._super();
            n.$k()
        },
        validate: function() {
            var t = this;
            if (t.hidden || t.disabled || n.$H0) return ! 0;
            if (!t._super()) return ! 1;
            var i = !0,
            r = "",
            u = t.getValue();
            return t.required && !u.length && (r = t.requiredText, i = !1),
            i ? t.clearInvalid() : t.markInvalid(r),
            i
        },
        getValue: function() {
            var t = this,
            n = [];
            return $.each(t.items,
            function(t, i) {
                i.isChecked() && n.push(i.inputValue)
            }),
            n
        },
        setValue: function(n, t) {
            var r = this;
            v(n) || (n = [n]);
            $.each(r.items,
            function(r, u) {
                var f = !1;
                i.$h(u.inputValue, n) && (f = !0);
                u.setValue(f, t)
            });
            r.$x && !t && r.validate()
        },
        setReadonly: function(n) {
            var t = this;
            t._super(n);
            t.$Hn(function(t) {
                t.setReadonly(n)
            })
        },
        disable: function() {
            var n = this;
            n._super();
            n.$Hn(function(n) {
                n.disable()
            })
        },
        enable: function() {
            var n = this;
            n._super();
            n.$Hn(function(n) {
                n.enable()
            })
        },
        getTextByValue: function(n) {
            var i = this,
            t;
            return n += "",
            t = r,
            $.each(i.items,
            function(i, r) {
                if (r.inputValue === n) return t = r.inputLabel,
                !1
            }),
            t
        },
        $12: function(n) {
            var t = this,
            f = t.name,
            l = t.$d("radiobuttonlist"),
            s,
            e,
            a,
            r,
            u,
            h,
            o,
            c;
            if (l && !f && (f = t.id), s = [], n && n.length) for (e = 0, a = n.length; e < a; e++) r = n[e],
            o = !1,
            v(r) ? (u = r[0], h = r[1]) : (u = r, h = r),
            l ? o = t.value === u ? !0 : !1 : t.value && (o = i.$h(u, t.value) ? !0 : !1),
            c = {
                inputValue: u,
                inputLabel: h,
                checked: o
            },
            f && $.extend(c, {
                name: f
            }),
            s.push(c);
            return s
        },
        loadData: function(n, t) {
            var i = this;
            i.data = n;
            i.value = t;
            i.$H.html("");
            i.items = i.$12(n);
            i.$sf();
            i.$x && i.$k(!0)
        }
    });
    n.RadioButton = n.CheckBox.extend({
        ccls: "f-field-radiobutton-wrap",
        tagType: "radio",
        type: "radiobutton",
        initEl: function() {
            var n = this;
            n._super();
            n.$H.$3("f-field-radiobutton")
        },
        $su: function() {
            var n = this,
            i, t, r;
            n._super();
            i = n.$H.prop("checked");
            i && (t = $('input[type=radio][name="' + n.name + '"]'), t.length > 1 && (r = n.$H.attr("id"), t.each(function() {
                var i = $(this),
                t = i.attr("id");
                t !== r && $("#" + t + "-icon").$W(n.$j)
            })))
        }
    });
    n.RadioButtonList = n.CheckBoxList.extend({
        ccls: "f-field-radiobuttonlist-wrap",
        defaultItemType: "radiobutton",
        type: "radiobuttonlist",
        initEl: function() {
            var n = this;
            n._super();
            n.$H.$3("f-field-radiobuttonlist")
        },
        getValue: function() {
            var t = this,
            n = "";
            return $.each(t.items,
            function(t, i) {
                i.isChecked() && (n = i.inputValue)
            }),
            n
        },
        setValue: function(n, t) {
            var i = this;
            n += "";
            $.each(i.items,
            function(i, r) {
                var u = !1;
                r.inputValue === n && (u = !0);
                r.setValue(u, t)
            });
            i.$x && !t && i.validate()
        }
    });
    n.HtmlEditor = n.Field.extend({
        ccls: "f-field-htmleditor-wrap",
        editor: "umeditor",
        editorBasePath: "",
        editorOptions: r,
        editorToolbarSet: "full",
        readonly: !1,
        type: "htmleditor",
        initEl: function() {
            var n = this,
            t;
            n._super();
            t = $("<div>", {
                "class": "f-field-body f-field-htmleditor-" + n.editor
            });
            t.$7(n.$es);
            n.$H = t;
            n.bodyEl = t;
            f(n.height) || (n.height = 100)
        },
        afterAddToPage: function() {
            var n = this;
            n._super();
            n.$1b()
        },
        $1b: function() {
            var i = this,
            u, f, r;
            i.instanceReady = !1;
            u = i.inputId;
            i.editor === "umeditor" || i.editor === "ueditor" ? (i.$H.html('<script type="text/plain" name="' + i.name + '" id="' + u + '"><\/script>'), r = {
                initialContent: i.value || "",
                initialFrameWidth: "100%",
                initialFrameHeight: 100,
                readonly: i.readonly,
                autoHeightEnabled: !1,
                autoFloatEnabled: !1
            },
            i.editorToolbarSet === "basic" && (i.editor === "umeditor" ? r.toolbar = ["fontfamily fontsize |", "bold italic underline strikethrough |", "forecolor backcolor |", "insertorderedlist insertunorderedlist |", "justifyleft justifycenter justifyright |", "link unlink |", "source"] : r.toolbars = [["fontfamily", "fontsize", "|", "bold", "italic", "underline", "strikethrough", "|", "forecolor", "backcolor", "|", "insertorderedlist", "insertunorderedlist", "|", "justifyleft", "justifycenter", "justifyright", "|", "link", "unlink", "|", "source"]]), i.editorOptions && $.extend(r, i.editorOptions), f = i.editor === "umeditor" ? UM.getEditor(u, r) : UE.getEditor(u, r), f.ready(function() {
                var n = $("#" + u);
                i.editor === "umeditor";
                i.instanceReady = !0;
                i.$7X()
            }), i.editor === "umeditor" && f.addListener("fullscreenchanged",
            function(n, t) {
                t || i.$HS()
            }), i.$0 = f, i.editorInstance = f) : i.editor === "ckeditor" ? ($("<textarea>", {
                id: u,
                name: i.name,
                css: {
                    width: "100%"
                }
            }).val(i.value || "").$7(i.$H), r = {
                resize_enabled: !1,
                height: 100,
                readOnly: i.readonly,
                on: {
                    instanceReady: function() {
                        i.instanceReady = !0;
                        i.$7X()
                    }
                }
            },
            i.editorToolbarSet === "basic" && (r.toolbar = [["Font", "FontSize"], ["Bold", "Italic", "Underline", "Strike"], ["TextColor", "BGColor"], ["NumberedList", "BulletedList"], ["JustifyLeft", "JustifyCenter", "JustifyRight"], ["Link", "Unlink"], ["Source"]]), i.editorOptions && $.extend(r, i.editorOptions), f = CKEDITOR.replace(u, r), i.$0 = f, i.editorInstance = f, n.beforeAjax(function() {
                i.instanceReady && $("#" + u).val(i.$0.getData())
            })) : i.editor === "tinymce" && ($("<textarea>", {
                id: u,
                name: i.name,
                css: {
                    width: "100%"
                }
            }).val(i.value || "").$7(i.$H), r = {
                selector: "#" + u,
                resize: !1,
                width: "100%",
                height: 100,
                readonly: i.readonly,
                init_instance_callback: function(n) {
                    i.$0 = n;
                    i.editorInstance = n
                },
                setup: function(n) {
                    n.on("load",
                    function() {
                        t.setTimeout(function() {
                            i.instanceReady = !0;
                            i.$7X()
                        },
                        100)
                    })
                }
            },
            i.editorToolbarSet === "basic" && (r.menubar = !1, r.plugins = ["link", "code", "textcolor colorpicker"], r.toolbar1 = "fontselect fontsizeselect | bold italic underline strikethrough | forecolor backcolor | numlist bullist | alignleft aligncenter alignright | link unlink | code"), i.editorOptions && $.extend(r, i.editorOptions), tinymce.init(r), n.beforeAjax(function() {
                i.$0.initialized && i.$0.save()
            }))
        },
        $7X: function() {
            var n = this;
            n.$45 = n.getValue();
            n.$42 = n.getText();
            n.$HS()
        },
        $HS: function() {
            var n = this,
            t, i, r;
            if (n.$0 && n.instanceReady) if (t = n.$sc(), n.editor === "umeditor" || n.editor === "ueditor") n.editor === "umeditor" ? (i = n.$H.$c(".edui-container"), r = n.$H.$c(".edui-editor-body")) : (i = n.$H.$c(".edui-editor"), r = n.$H.$c(".edui-editor-iframeholder")),
            n.$0.setHeight(t - (i.$4(!0) - r.$q()));
            else if (n.editor === "ckeditor") n.$0.resize("100%", t, !1);
            else if (n.editor === "tinymce") {
                var u = $("#" + n.inputId + "_ifr"),
                f = u.$78(".mce-container-body"),
                e = t - (f.$4(!0) - u.$4(!0));
                u.$4(e, !0)
            }
        },
        getValue: function() {
            var n = this,
            t = "",
            i = n.$0;
            if (i && n.instanceReady) return n.editor === "umeditor" || n.editor === "ueditor" ? t = i.getContent() : n.editor === "ckeditor" ? t = i.getData() : n.editor === "tinymce" && (t = i.getContent()),
            t
        },
        setValue: function(n) {
            var t = this,
            i = t.$0;
            i && t.instanceReady && (t.editor === "umeditor" || t.editor === "ueditor" ? i.setContent(n, !1) : t.editor === "ckeditor" ? i.setData(n) : t.editor === "tinymce" && i.setContent(n))
        },
        focus: function(t, i) {
            function e() {
                u.focus()
            }
            var r = this,
            u = r.$0;
            u && r.instanceReady && (f(i) ? n.defer(e, i) : e())
        },
        blur: function() {},
        __doLayout: function() {
            var n = this;
            n._super();
            n.$HS()
        },
        setReadonly: function(n) {
            var t = this,
            i; (t._super(n), i = t.$0, i && t.instanceReady) && (t.editor === "umeditor" || t.editor === "ueditor" ? n ? i.setDisabled() : i.setEnabled() : t.editor === "ckeditor" ? i.setReadOnly(n) : t.editor === "tinymce" && i.setMode(n ? "readonly": "design"))
        }
    })
} (F, window),
function(n, t) {
    function a() {
        n.$Hc || $.each(n.$eG,
        function(n, t) {
            t.$d("textbox") && t.$en()
        })
    }
    function v() {
        n.$Hc || $.each(n.$eG,
        function(n, t) {
            t.$d("textbox") && t.$el()
        })
    }
    function y(n) {
        o(n) && (n = {
            url: arguments[0]
        },
        o(arguments[1]) ? (n.fields = arguments[1], n.params = arguments[2]) : n.params = arguments[1]);
        t.setTimeout(function() {
            k(n)
        },
        100)
    }
    function p(t) {
        var i = {};
        return $.each(t,
        function(t, r) {
            var f = r.id,
            u;
            if (r.$d("field")) {
                if (r.$d("fileupload") || r.$d("label")) return ! 0;
                u = r.getValue();
                r.$d("numberbox") && n.isNAN(u) && (u = ""); (r.$d("calendar") || r.$d("datepicker")) && (u = r.getText());
                i[f] = u
            }
        }),
        i
    }
    function w(n) {
        var t = {};
        return $.each(n,
        function(n, i) {
            var r = i.id;
            i.$d("field") ? (i.$d("dropdownbox") || i.$d("dropdownlist")) && (t[r + "_text"] = i.getText(), i.editable && (t[r + "_isUserInput"] = i.isUserInput())) : i.$d("grid") && (t[r + "_fields"] = i.fields, i.paging && (t[r + "_pageIndex"] = i.pageIndex, t[r + "_pageSize"] = i.pageSize), i.sorting && (t[r + "_sortField"] = i.sortField, t[r + "_sortDirection"] = i.sortDirection), i.cellEditing && (t[r + "_modifiedData"] = i.getModifiedData()), i.filters && (t[r + "_filteredData"] = i.getFilteredData()))
        }),
        t
    }
    function r(n, t, i) {
        n.push({
            name: t,
            value: i
        })
    }
    function b(t, i) {
        var e = "input,select,textarea",
        f, u;
        if (t) return (f = t.split(","), !f.length) ? void 0 : (u = $(), $.each(f,
        function(t, f) {
            var o, s, l, a, h, v;
            if ((f = $.trim(f), !f) || (s = [], l = n(f), l ? (s.push(l), o = l.el) : o = $("#" + f), !o || !o.length)) return ! 0;
            o.$c(".f-cmp").each(function() {
                var t = $(this),
                i = n(t.attr("id"));
                if (!i) return ! 0;
                t.is(".f-field") ? t.is(n.$sQ) && s.push(i) : s.push(i)
            });
            a = p(s);
            h = o;
            h.is(e) || (h = h.find(e));
            v = h.serializeArray();
            $.each(v,
            function(n, t) {
                var u = t.name,
                f = t.value;
                a.hasOwnProperty(u) || r(i, u, f)
            });
            $.each(a,
            function(n, t) {
                c(t) ? $.each(t,
                function(t, u) {
                    r(i, n, u)
                }) : r(i, n, t)
            });
            $.each(w(s),
            function(n, t) {
                r(i, n, t)
            });
            u = u.add(h.filter("input[type=file]"))
        }), u)
    }
    function k(u) {
        function p() {
            et()
        }
        function it(t) {
            if (i.$59(t, f) === !1) {
                p();
                return
            }
            try {
                new Function(t)();
                n && n.util && i.$5r()
            } catch(r) {
                throw r;
            } finally {
                p()
            }
        }
        function rt(n, t, i) {
            p();
            nt(n, t, i)
        }
        function k(i, r, u) {
            n && (e && n.f_enable(e), t.setTimeout(function() {
                r === "success" ? it(i) : rt(i, r, u)
            },
            0))
        }
        var g = u.url,
        tt = u.params || {},
        w = u.fields || "",
        e = u.disableControl || "",
        c, o, f, s, l, y;
        i.$5E() !== !1 && (a(), c = g, e && (o = n(e), o && !o.isDisabled() && o.disable()), f = [], s = $(), w && (s = b(w, f)), $.each(tt,
        function(n, t) {
            r(f, n, t)
        }), $.each(f,
        function(t, r) {
            var u = r.value; (i.isARR(u) || i.isPOBJ(u)) && (r.value = n.toJSON(u))
        }), l = "__RequestVerificationToken", y = $("input[name=" + l + "]"), y && r(f, l, y.val()), s.length ? (h(u), d(c, f, s,
        function(n, t) {
            k(n, t)
        })) : (h(u), $.ajax({
            type: "POST",
            url: c,
            data: f,
            dataType: "text",
            headers: {
                "X-FineUIMvc-Ajax": !0
            },
            success: function() {},
            error: function() {},
            complete: function(n, t) {
                k(n.responseText, t, n)
            }
        })), v())
    }
    function d(n, i, r, u) {
        var f = $('<form style="display:none;"><\/form>'),
        e = $('<iframe name="f-iframe-transport-' + l+++'"><\/iframe>'),
        o,
        s,
        h;
        e.$7(f);
        f.$7("body");
        o = !!r.length;
        e.off("load").on("load",
        function() {
            var r = e.contents(),
            o = r.$c("body>textarea.fineuimvcresponse"),
            n,
            i;
            o.length ? (n = "success", i = o.text()) : (n = "fail", i = "<html>" + r.$c("html").html() + "<\/html>");
            u.apply(t, [i, n]);
            t.setTimeout(function() {
                f.remove()
            },
            0)
        });
        s = o ? "multipart/form-data": "application/x-www-form-urlencoded";
        f.attr("target", e.attr("name")).attr("action", n).attr("method", "POST").attr("enctype", s).attr("encoding", s);
        i.push({
            name: "X-FineUIMvc-Ajax",
            value: !0
        });
        $.each(i,
        function(n, t) {
            $("<input>", {
                type: "hidden",
                name: t.name,
                val: t.value
            }).$7(f)
        });
        o && (h = r.clone(), r.after(function(n) {
            return h[n]
        }), r.$7(f));
        f.submit();
        o && r.each(function(n, t) {
            var i = $(h[n]);
            i.replaceWith(t)
        })
    }
    function g(n, t) {
        if (n) {
            var i = n.document;
            i && (i.open(), i.write(t), i.close())
        }
    }
    function nt(t, r, u) {
        var s = n.ajax.errorMsg,
        o = s.substr(0, s.indexOf("{0}")),
        e,
        h,
        c,
        a,
        f,
        l;
        if (r === "timeout") {
            n.alert({
                messageIcon: "error",
                title: o,
                message: n.ajax.timeoutErrorMsg
            });
            return
        }
        if (e = t, !e) {
            n.alert({
                messageIcon: "error",
                title: o,
                message: n.ajax.networkErrorMsg
            });
            return
        }
        if (n.simpleError && (h = e.indexOf("<title>"), c = e.indexOf("<\/title>"), h >= 0 && c >= 0)) {
            a = e.substring(h + 7, c);
            n.alert({
                messageIcon: "error",
                title: o,
                message: a
            });
            return
        }
        f = n.ajax.errorWindow;
        f || (f = new n.Window({
            id: "FINEUI_ERROR",
            renderTo: document.forms[0],
            width: 550,
            height: 350,
            collapsible: !1,
            resizable: !0,
            maximizable: !0,
            closable: !0,
            iframe: !0
        }), n.ajax.errorWindow = f);
        f.show();
        l = o;
        u && (l = i.$e2(s, u.statusText, u.status));
        f.setTitle(l);
        g(f.getIFrameWindow(), e)
    }
    function tt(t) {
        return f(t.enableAjaxLoading) ? n.enableAjaxLoading: t.enableAjaxLoading
    }
    function it(t) {
        return f(t.ajaxLoadingType) ? n.ajaxLoadingType: t.ajaxLoadingType
    }
    function rt(t) {
        return f(t.ajaxLoadingText) ? n.ajaxLoadingText: t.ajaxLoadingText
    }
    function ut(t) {
        return f(t.ajaxLoadingMaskText) ? n.ajaxLoadingMaskText: t.ajaxLoadingMaskText
    }
    function ft(t) {
        return f(t.showAjaxLoadingMaskText) ? n.showAjaxLoadingMaskText: t.showAjaxLoadingMaskText
    }
    function et() {
        u--;
        u < 0 && (u = 0);
        u === 0 && e && (e = !1, s === "default" ? i.$1D() : i.$5i())
    }
    function h(n) {
        var r, f, o, h; (u++, tt(n)) && (e || (r = it(n), s = r, r === "default" ? f = rt(n) : (o = ft(n), h = ut(n)), t.setTimeout(function() {
            u > 0 && !e && (e = !0, r === "default" ? i.$18(f) : i.$5Y(o, h))
        },
        50)))
    }
    var f = n.isUND,
    o = n.isSTR,
    ot = n.isNUM,
    st = n.isBOO,
    c = n.isARR,
    i = n.util,
    l = 1,
    u = 0,
    e = !1,
    s = "";
    n.doPostBack = y
} (F, window),
function(n) {
    var i = n.isUND,
    r = n.isSTR,
    u = n.isNUM,
    f = n.isFUN,
    t = n.util;
    n.f_init = function(i) {
        if ($.extend(n, {
            language: "zh_CN",
            msgTarget: "side",
            labelWidth: 100,
            labelSeparator: "：",
            labelAlign: "left",
            redStarPosition: "afterText",
            enableAjax: !0,
            enableAjaxLoading: !0,
            ajaxTimeout: 120,
            ajaxLoadingType: "default",
            ajaxLoadingText: "",
            ajaxLoadingMaskText: "",
            showAjaxLoadingMaskText: !1,
            theme: "default",
            displayMode: "normal",
            enableShim: !1,
            formChangeConfirm: !1,
            iframeLoading: !0,
            beforeunloadCheck: !0,
            enableAnimation: !1,
            loadingImage: "",
            animationType: {
                tabstrip: "slideX",
                window: {
                    left: "slideRight",
                    right: "slideLeft",
                    top: "slideDown",
                    bottom: "slideUp",
                    center: "pop"
                }
            }
        },
        i), $.ajaxSetup({
            timeout: n.ajaxTimeout * 1e3
        }), $.extend(n.Field.prototype, {
            msgTarget: n.msgTarget,
            labelWidth: n.labelWidth,
            labelSeparator: n.labelSeparator,
            labelAlign: n.labelAlign,
            redStarPosition: n.redStarPosition
        }), n.theme && $("body").$3("f-theme-" + n.theme), n.displayMode == "compact" && $.extend(n.PanelBase.prototype, {
            splitWidth: 3
        }), n.displayMode != "normal" && $("body").$3("f-" + n.displayMode.toLowerCase() + "mode"), n.formChangeConfirm) $(window).on("beforeunload",
        function() {
            if (n.beforeunloadCheck && t.$cF()) return n.wnd.formChangeConfirmMsg
        })
    };
    n.f_enable = function(t) {
        var i = n(t),
        r;
        i.enable();
        n.$P || (r = i.el, i.disabled || i.readonly || r.focus())
    };
    n.f_treeData = function(t) {
        function u(t) {
            var i = {},
            r, u, f;
            return i.text = t.f0,
            i.leaf = !!t.f1,
            i.id = t.f2,
            i.expanded = !!t.f3,
            i.hrefTarget = t.f5 || "",
            i.href = t.f6 || "",
            r = t.f7,
            r && r.length && (i.children = n.f_treeData(r)),
            i.unselectable = t.f8 === 0 ? !0 : !1,
            u = !!t.f9,
            f = !!t.f10,
            i.checked = u ? f: undefined,
            i.icon = t.f13 || "",
            i.qtip = t.f14 || "",
            i.f_clientclick = t.f15 || "",
            i.iconFont = t.f23 || "",
            i.cls = t.f24 || "",
            i.attrs = t.f25,
            i
        }
        for (var r = [], i = 0, f = t.length; i < f; i++) r.push(u(t[i]));
        return r
    };
    $.extend(n.Label.prototype, {
        f_setEnabled: function(n) {
            var i = this,
            t;
            i.setEnabled(n);
            t = i.getAttrEl();
            n ? t.removeAttr("disabled") : t.attr("disabled", "disabled")
        }
    });
    n.wnd.writeBackValue = function() {
        var r = n.getActiveWindow(),
        u,
        f,
        i;
        if (t.$eJ(r.window)) for (u = r.f_property_save_state_control_ids, f = Math.min(u.length, arguments.length), i = 0; i < f; i++) r.window.F(u[i]).setValue(arguments[i], !0)
    }
} (F)