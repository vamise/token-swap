(this["webpackJsonporca-swap"] = this["webpackJsonporca-swap"] || []).push([
    [0], {
        255: function(e, t) {},
        258: function(e, t) {},
        272: function(e, t) {},
        273: function(e, t) {},
        345: function(e, t) {},
        347: function(e, t) {},
        356: function(e, t) {},
        358: function(e, t) {},
        375: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1),
                c = n.n(a),
                i = n(68),
                s = n.n(i),
                r = n(19),
                o = n(6),
                l = n(21),
                u = n(26),
                j = n(39),
                b = n(0),
                x = n.n(b),
                d = n(54),
                O = n(8),
                g = n(55),
                p = n(44),
                h = n.n(p),
                m = n(15),
                f = n(437),
                S = n(421),
                w = n(439),
                A = n(440),
                P = n(433),
                v = n(441),
                C = n(429),
                k = n(430),
                R = n(431),
                E = n(383),
                N = n(445),
                y = n(425),
                F = n(446),
                T = n(427),
                D = n(139),
                L = n(142),
                U = n.n(L),
                G = n(436),
                I = n(219),
                M = n.n(I),
                _ = n(220),
                z = n.n(_),
                B = n(5),
                Q = ["children", "onClose"];
            var W = Object(m.a)(f.a)((function(e) { var t = e.theme; return { "& .MuDialogContent-root": { padding: t.spacing(2) }, "& .MuDialogActions-root": { padding: t.spacing(1) } } })),
                K = function(e) {
                    var t = e.children,
                        n = e.onClose,
                        a = Object(j.a)(e, Q);
                    return Object(B.jsxs)(S.a, Object(u.a)(Object(u.a)({ sx: { m: 0, p: 2 } }, a), {}, { children: [t, n ? Object(B.jsx)(G.a, { "aria-label": "close", onClick: n, sx: { position: "absolute", right: 8, top: 8, color: function(e) { return e.palette.grey[500] } }, children: Object(B.jsx)(M.a, {}) }) : null] }))
                };

            function V(e) {
                var t = c.a.useState(0),
                    n = Object(l.a)(t, 2),
                    i = n[0],
                    s = n[1],
                    u = c.a.useState(e.portfolioPositions),
                    j = Object(l.a)(u, 2),
                    b = j[0],
                    p = (j[1], c.a.useState(!1)),
                    m = Object(l.a)(p, 2),
                    f = m[0],
                    S = m[1],
                    L = c.a.useState(0),
                    G = Object(l.a)(L, 2),
                    I = G[0],
                    M = G[1],
                    _ = c.a.useState(0),
                    Q = Object(l.a)(_, 2),
                    V = Q[0],
                    q = Q[1],
                    H = c.a.useState(0),
                    J = Object(l.a)(H, 2),
                    X = J[0],
                    Z = J[1],
                    Y = c.a.useState(null),
                    $ = Object(l.a)(Y, 2),
                    ee = ($[0], $[1]),
                    te = c.a.useState(null),
                    ne = Object(l.a)(te, 2),
                    ae = (ne[0], ne[1]),
                    ce = c.a.useState(null),
                    ie = Object(l.a)(ce, 2),
                    se = ie[0],
                    re = ie[1],
                    oe = c.a.useState(null),
                    le = Object(l.a)(oe, 2),
                    ue = le[0],
                    je = le[1],
                    be = c.a.useState(null),
                    xe = Object(l.a)(be, 2),
                    de = xe[0],
                    Oe = xe[1],
                    ge = c.a.useState(null),
                    pe = Object(l.a)(ge, 2),
                    he = pe[0],
                    me = pe[1],
                    fe = c.a.useState(null),
                    Se = Object(l.a)(fe, 2),
                    we = Se[0],
                    Ae = Se[1],
                    Pe = c.a.useState(e.swapfrom),
                    ve = Object(l.a)(Pe, 2),
                    Ce = ve[0],
                    ke = ve[1],
                    Re = c.a.useState(e.swapto),
                    Ee = Object(l.a)(Re, 2),
                    Ne = Ee[0],
                    ye = (Ee[1], c.a.useState(!1)),
                    Fe = Object(l.a)(ye, 2),
                    Te = Fe[0],
                    De = Fe[1],
                    Le = Object(d.c)().connection,
                    Ue = Object(g.getOrca)(Le),
                    Ge = Object(d.d)(),
                    Ie = Ge.publicKey,
                    Me = (Ge.wallet, Ge.sendTransaction),
                    _e = Object(D.b)().enqueueSnackbar,
                    ze = (Object(a.useCallback)((function(e) { _e(e.message ? "".concat(e.name, ": ").concat(e.message) : e.name, { variant: "error" }), console.error(e) }), [_e]), function() { S(!1) });

                function Be(e) {
                    var t = "";
                    "USDC" == e ? t = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" : "SOL" == e ? t = "So11111111111111111111111111111111111111112" : "ORCA" == e && (t = "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE");
                    var n = 0;
                    b.portfolio.map((function(e) { e.mint == t && e.balance > 0 && (n = e.balance) })), s(n)
                }

                function Qe(e, t, n) { return We.apply(this, arguments) }

                function We() {
                    return (We = Object(o.a)(x.a.mark((function e(t, n, a) {
                        var c, i, s, o, l, u, j, b, d, g, p, m, f, S, w, A, P, v, C, k, R;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, c = new O.Transaction, n) { e.next = 23; break }
                                    return s = t.getTokenB(), o = new h.a(a), e.next = 7, t.getQuote(s, o);
                                case 7:
                                    return l = e.sent, u = l.getMinOutputAmount(), e.next = 11, t.swap(Ie, s, o, u);
                                case 11:
                                    return j = e.sent, _e("Preparing to swap ".concat(o.toString(), " ").concat(t.getTokenB().name, " for at least ").concat(u.toNumber(), " ").concat(t.getTokenA().name), { variant: "info" }), (i = j.transaction).partialSign.apply(i, Object(r.a)(j.signers)), e.next = 16, Me(j.transaction, Le);
                                case 16:
                                    return b = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 20, Le.confirmTransaction(b, "processed");
                                case 20:
                                    _e("Swapped: ".concat(b), { variant: "success" }), e.next = 52;
                                    break;
                                case 23:
                                    return p = t.getTokenA(), m = new h.a(a), e.next = 27, t.getQuote(p, m);
                                case 27:
                                    return f = e.sent, S = f.getMinOutputAmount(), e.next = 31, t.swap(Ie, p, m, S);
                                case 31:
                                    return w = e.sent, A = n.getTokenB(), P = new h.a(S.toNumber()), e.next = 36, n.getQuote(A, P);
                                case 36:
                                    return v = e.sent, C = v.getMinOutputAmount(), e.next = 40, n.swap(Ie, A, P, C);
                                case 40:
                                    return k = e.sent, _e("Preparing to swap ".concat(m.toString(), " ").concat(t.getTokenA().name, " for at least ").concat(C.toNumber(), " ").concat(n.getTokenA().name), { variant: "info" }), c = w.transaction.add(k.transaction), (d = c).partialSign.apply(d, Object(r.a)(w.signers)), (g = c).partialSign.apply(g, Object(r.a)(k.signers)), e.next = 47, Me(c, Le);
                                case 47:
                                    return R = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 51, Le.confirmTransaction(R, "processed");
                                case 51:
                                    _e("Swapped: ".concat(R), { variant: "success" });
                                case 52:
                                    e.next = 57;
                                    break;
                                case 54:
                                    e.prev = 54, e.t0 = e.catch(0), _e("".concat(e.t0), { variant: "error" });
                                case 57:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 54]
                        ])
                    })))).apply(this, arguments)
                }

                function Ke(e, t, n) { return Ve.apply(this, arguments) }

                function Ve() {
                    return (Ve = Object(o.a)(x.a.mark((function e(t, n, a) {
                        var c, i, s, r, o, l, u, j, b, d, O, g, p, m, f, S, w, A, P, v, C, k, R, E, N;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (De(!0), e.prev = 1, n) { e.next = 24; break }
                                    return c = t.getTokenB(), i = new h.a(a), e.next = 7, t.getQuote(c, i);
                                case 7:
                                    s = e.sent, r = s.getMinOutputAmount(), o = s.getLPFees(), l = s.getNetworkFees(), u = s.getExpectedOutputAmount(), j = s.getPriceImpact(), b = s.getRate(), ee(t.getTokenA().name), ae(t.getTokenB().name), Z(u.toNumber()), re(o.toNumber()), je(l.toNumber()), Oe(r.toNumber()), me(j.toNumber()), Ae(b.toNumber()), e.next = 54;
                                    break;
                                case 24:
                                    return d = t.getTokenA(), O = new h.a(a), e.next = 28, t.getQuote(d, O);
                                case 28:
                                    return g = e.sent, p = g.getMinOutputAmount(), m = n.getTokenB(), f = new h.a(p.toNumber()), e.next = 34, n.getQuote(m, f);
                                case 34:
                                    S = e.sent, w = S.getMinOutputAmount(), ee(t.getTokenA().name), ae(n.getTokenB().name), A = g.getLPFees(), P = g.getNetworkFees(), g.getExpectedOutputAmount(), v = g.getPriceImpact(), C = g.getRate(), k = S.getLPFees(), S.getNetworkFees(), R = S.getExpectedOutputAmount(), E = S.getPriceImpact(), N = S.getRate(), Z(R.toNumber()), re(A.toNumber() + k.toNumber()), je(P.toNumber()), Oe(w.toNumber()), me(v.toNumber() + E.toNumber()), Ae(N.toNumber() * C.toNumber());
                                case 54:
                                    e.next = 59;
                                    break;
                                case 56:
                                    e.prev = 56, e.t0 = e.catch(1), _e("".concat(e.t0), { variant: "error" });
                                case 59:
                                    De(!1);
                                case 60:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 56]
                        ])
                    })))).apply(this, arguments)
                }
                return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() {
                    if (I > 0 && I < 99999999999999) {
                        if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
                        else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) }
                    } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null)
                }), [I]), Object(B.jsxs)("div", {
                    children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, {
                        onClose: ze,
                        "aria-labelledby": "customized-dialog-title",
                        open: f,
                        children: Object(B.jsxs)("form", {
                            onSubmit: function(e) {
                                if (e.preventDefault(), I > 0 && I < 99999999999999) {
                                    if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                                    else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
                                } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
                            },
                            children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
                        })
                    })]
                })
            }
            var q = n(4),
                H = n(171),
                J = n(84);

            function X(e) {
                var t = q.e.Mainnet,
                    n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
                    c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
                return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "grape-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "grape-2", website: "https://grapes.network" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
            }
            var Z = function(e) {
                e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
                    var n = t.getCLS,
                        a = t.getFID,
                        c = t.getFCP,
                        i = t.getLCP,
                        s = t.getTTFB;
                    n(e), a(e), c(e), i(e), s(e)
                }))
            };
            s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
        }
    },
    [
        [375, 1, 2]
    ]
]);
//# sourceMappingURL=main.d4942724.chunk.js.map r = s.getMinOutputAmount(), o = s.getLPFees(), l = s.getNetworkFees(), u = s.getExpectedOutputAmount(), j = s.getPriceImpact(), b = s.getRate(), ee(t.getTokenA().name), ae(t.getTokenB().name), Z(u.toNumber()), re(o.toNumber()), je(l.toNumber()), Oe(r.toNumber()), me(j.toNumber()), Ae(b.toNumber()), e.next = 54;
break;
case 24:
    return d = t.getTokenA(), O = new h.a(a), e.next = 28, t.getQuote(d, O);
case 28:
    return g = e.sent, p = g.getMinOutputAmount(), m = n.getTokenB(), f = new h.a(p.toNumber()), e.next = 34, n.getQuote(m, f);
case 34:
    S = e.sent, w = S.getMinOutputAmount(), ee(t.getTokenA().name), ae(n.getTokenB().name), A = g.getLPFees(), P = g.getNetworkFees(), g.getExpectedOutputAmount(), v = g.getPriceImpact(), C = g.getRate(), k = S.getLPFees(), S.getNetworkFees(), R = S.getExpectedOutputAmount(), E = S.getPriceImpact(), N = S.getRate(), Z(R.toNumber()), re(A.toNumber() + k.toNumber()), je(P.toNumber()), Oe(w.toNumber()), me(v.toNumber() + E.toNumber()), Ae(N.toNumber() * C.toNumber());
case 54:
    e.next = 59;
    break;
case 56:
    e.prev = 56, e.t0 = e.catch(1), _e("".concat(e.t0), { variant: "error" });
case 59:
    De(!1);
case 60:
case "end":
    return e.stop()
}
}), e, null, [
        [1, 56]
    ])
    })))).apply(this, arguments)
    }
    return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() {
        if (I > 0 && I < 99999999999999) {
            if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
            else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) }
        } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null)
    }), [I]), Object(B.jsxs)("div", {
        children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, {
            onClose: ze,
            "aria-labelledby": "customized-dialog-title",
            open: f,
            children: Object(B.jsxs)("form", {
                onSubmit: function(e) {
                    if (e.preventDefault(), I > 0 && I < 99999999999999) {
                        if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                        else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
                    } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
                },
                children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
            })
        })]
    })
    }
    var q = n(4),
        H = n(171),
        J = n(84);

    function X(e) {
        var t = q.e.Mainnet,
            n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
            c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
        return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA", symbol: "FYFY", coingeckoId: "fyfy-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "fyfy-2", website: "https://grapes.network" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
    }
    var Z = function(e) {
        e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
            var n = t.getCLS,
                a = t.getFID,
                c = t.getFCP,
                i = t.getLCP,
                s = t.getTTFB;
            n(e), a(e), c(e), i(e), s(e)
        }))
    };
    s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
    }
    }, [
        [375, 1, 2]
    ]
    ]);
    //# sourceMappingURL=main.d4942724.chunk.js.mapn(e, t) {}, 272: function(e, t) {}, 273: function(e, t) {}, 345: function(e, t) {}, 347: function(e, t) {}, 356: function(e, t) {}, 358: function(e, t) {}, 375: function(e, t, n) { "use strict";
    n.r(t);
    var a = n(1),
        c = n.n(a),
        i = n(68),
        s = n.n(i),
        r = n(19),
        o = n(6),
        l = n(21),
        u = n(26),
        j = n(39),
        b = n(0),
        x = n.n(b),
        d = n(54),
        O = n(8),
        g = n(55),
        p = n(44),
        h = n.n(p),
        m = n(15),
        f = n(437),
        S = n(421),
        w = n(439),
        A = n(440),
        P = n(433),
        v = n(441),
        C = n(429),
        k = n(430),
        R = n(431),
        E = n(383),
        N = n(445),
        y = n(425),
        F = n(446),
        T = n(427),
        D = n(139),
        L = n(142),
        U = n.n(L),
        G = n(436),
        I = n(219),
        M = n.n(I),
        _ = n(220),
        z = n.n(_),
        B = n(5),
        Q = ["children", "onClose"];
    var W = Object(m.a)(f.a)((function(e) { var t = e.theme; return { "& .MuDialogContent-root": { padding: t.spacing(2) }, "& .MuDialogActions-root": { padding: t.spacing(1) } } })),
        K = function(e) {
            var t = e.children,
                n = e.onClose,
                a = Object(j.a)(e, Q);
            return Object(B.jsxs)(S.a, Object(u.a)(Object(u.a)({ sx: { m: 0, p: 2 } }, a), {}, { children: [t, n ? Object(B.jsx)(G.a, { "aria-label": "close", onClick: n, sx: { position: "absolute", right: 8, top: 8, color: function(e) { return e.palette.grey[500] } }, children: Object(B.jsx)(M.a, {}) }) : null] }))
        };

    function V(e) {
        var t = c.a.useState(0),
            n = Object(l.a)(t, 2),
            i = n[0],
            s = n[1],
            u = c.a.useState(e.portfolioPositions),
            j = Object(l.a)(u, 2),
            b = j[0],
            p = (j[1], c.a.useState(!1)),
            m = Object(l.a)(p, 2),
            f = m[0],
            S = m[1],
            L = c.a.useState(0),
            G = Object(l.a)(L, 2),
            I = G[0],
            M = G[1],
            _ = c.a.useState(0),
            Q = Object(l.a)(_, 2),
            V = Q[0],
            q = Q[1],
            H = c.a.useState(0),
            J = Object(l.a)(H, 2),
            X = J[0],
            Z = J[1],
            Y = c.a.useState(null),
            $ = Object(l.a)(Y, 2),
            ee = ($[0], $[1]),
            te = c.a.useState(null),
            ne = Object(l.a)(te, 2),
            ae = (ne[0], ne[1]),
            ce = c.a.useState(null),
            ie = Object(l.a)(ce, 2),
            se = ie[0],
            re = ie[1],
            oe = c.a.useState(null),
            le = Object(l.a)(oe, 2),
            ue = le[0],
            je = le[1],
            be = c.a.useState(null),
            xe = Object(l.a)(be, 2),
            de = xe[0],
            Oe = xe[1],
            ge = c.a.useState(null),
            pe = Object(l.a)(ge, 2),
            he = pe[0],
            me = pe[1],
            fe = c.a.useState(null),
            Se = Object(l.a)(fe, 2),
            we = Se[0],
            Ae = Se[1],
            Pe = c.a.useState(e.swapfrom),
            ve = Object(l.a)(Pe, 2),
            Ce = ve[0],
            ke = ve[1],
            Re = c.a.useState(e.swapto),
            Ee = Object(l.a)(Re, 2),
            Ne = Ee[0],
            ye = (Ee[1], c.a.useState(!1)),
            Fe = Object(l.a)(ye, 2),
            Te = Fe[0],
            De = Fe[1],
            Le = Object(d.c)().connection,
            Ue = Object(g.getOrca)(Le),
            Ge = Object(d.d)(),
            Ie = Ge.publicKey,
            Me = (Ge.wallet, Ge.sendTransaction),
            _e = Object(D.b)().enqueueSnackbar,
            ze = (Object(a.useCallback)((function(e) { _e(e.message ? "".concat(e.name, ": ").concat(e.message) : e.name, { variant: "error" }), console.error(e) }), [_e]), function() { S(!1) });

        function Be(e) {
            var t = "";
            "USDC" == e ? t = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" : "SOL" == e ? t = "So11111111111111111111111111111111111111112" : "ORCA" == e && (t = "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE");
            var n = 0;
            b.portfolio.map((function(e) { e.mint == t && e.balance > 0 && (n = e.balance) })), s(n)
        }

        function Qe(e, t, n) { return We.apply(this, arguments) }

        function We() {
            return (We = Object(o.a)(x.a.mark((function e(t, n, a) {
                var c, i, s, o, l, u, j, b, d, g, p, m, f, S, w, A, P, v, C, k, R;
                return x.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, c = new O.Transaction, n) { e.next = 23; break }
                            return s = t.getTokenB(), o = new h.a(a), e.next = 7, t.getQuote(s, o);
                        case 7:
                            return l = e.sent, u = l.getMinOutputAmount(), e.next = 11, t.swap(Ie, s, o, u);
                        case 11:
                            return j = e.sent, _e("Preparing to swap ".concat(o.toString(), " ").concat(t.getTokenB().name, " for at least ").concat(u.toNumber(), " ").concat(t.getTokenA().name), { variant: "info" }), (i = j.transaction).partialSign.apply(i, Object(r.a)(j.signers)), e.next = 16, Me(j.transaction, Le);
                        case 16:
                            return b = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 20, Le.confirmTransaction(b, "processed");
                        case 20:
                            _e("Swapped: ".concat(b), { variant: "success" }), e.next = 52;
                            break;
                        case 23:
                            return p = t.getTokenA(), m = new h.a(a), e.next = 27, t.getQuote(p, m);
                        case 27:
                            return f = e.sent, S = f.getMinOutputAmount(), e.next = 31, t.swap(Ie, p, m, S);
                        case 31:
                            return w = e.sent, A = n.getTokenB(), P = new h.a(S.toNumber()), e.next = 36, n.getQuote(A, P);
                        case 36:
                            return v = e.sent, C = v.getMinOutputAmount(), e.next = 40, n.swap(Ie, A, P, C);
                        case 40:
                            return k = e.sent, _e("Preparing to swap ".concat(m.toString(), " ").concat(t.getTokenA().name, " for at least ").concat(C.toNumber(), " ").concat(n.getTokenA().name), { variant: "info" }), c = w.transaction.add(k.transaction), (d = c).partialSign.apply(d, Object(r.a)(w.signers)), (g = c).partialSign.apply(g, Object(r.a)(k.signers)), e.next = 47, Me(c, Le);
                        case 47:
                            return R = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 51, Le.confirmTransaction(R, "processed");
                        case 51:
                            _e("Swapped: ".concat(R), { variant: "success" });
                        case 52:
                            e.next = 57;
                            break;
                        case 54:
                            e.prev = 54, e.t0 = e.catch(0), _e("".concat(e.t0), { variant: "error" });
                        case 57:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 54]
                ])
            })))).apply(this, arguments)
        }

        function Ke(e, t, n) { return Ve.apply(this, arguments) }

        function Ve() {
            return (Ve = Object(o.a)(x.a.mark((function e(t, n, a) {
                var c, i, s, r, o, l, u, j, b, d, O, g, p, m, f, S, w, A, P, v, C, k, R, E, N;
                return x.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (De(!0), e.prev = 1, n) { e.next = 24; break }
                            return c = t.getTokenB(), i = new h.a(a), e.next = 7, t.getQuote(c, i);
                        case 7:
                            s = e.sent, r = s.getMinOutputAmount(), o = s.getLPFees(), l = s.getNetworkFees(), u = s.getExpectedOutputAmount(), j = s.getPriceImpact(), b = s.getRate(), ee(t.getTokenA().name), ae(t.getTokenB().name), Z(u.toNumber()), re(o.toNumber()), je(l.toNumber()), Oe(r.toNumber()), me(j.toNumber()), Ae(b.toNumber()), e.next = 54;
                            break;
                        case 24:
                            return d = t.getTokenA(), O = new h.a(a), e.next = 28, t.getQuote(d, O);
                        case 28:
                            return g = e.sent, p = g.getMinOutputAmount(), m = n.getTokenB(), f = new h.a(p.toNumber()), e.next = 34, n.getQuote(m, f);
                        case 34:
                            S = e.sent, w = S.getMinOutputAmount(), ee(t.getTokenA().name), ae(n.getTokenB().name), A = g.getLPFees(), P = g.getNetworkFees(), g.getExpectedOutputAmount(), v = g.getPriceImpact(), C = g.getRate(), k = S.getLPFees(), S.getNetworkFees(), R = S.getExpectedOutputAmount(), E = S.getPriceImpact(), N = S.getRate(), Z(R.toNumber()), re(A.toNumber() + k.toNumber()), je(P.toNumber()), Oe(w.toNumber()), me(v.toNumber() + E.toNumber()), Ae(N.toNumber() * C.toNumber());
                        case 54:
                            e.next = 59;
                            break;
                        case 56:
                            e.prev = 56, e.t0 = e.catch(1), _e("".concat(e.t0), { variant: "error" });
                        case 59:
                            De(!1);
                        case 60:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 56]
                ])
            })))).apply(this, arguments)
        }
        return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() {
            if (I > 0 && I < 99999999999999) {
                if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
                else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) }
            } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null)
        }), [I]), Object(B.jsxs)("div", {
            children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, {
                onClose: ze,
                "aria-labelledby": "customized-dialog-title",
                open: f,
                children: Object(B.jsxs)("form", {
                    onSubmit: function(e) {
                        if (e.preventDefault(), I > 0 && I < 99999999999999) {
                            if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                            else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
                        } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
                    },
                    children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
                })
            })]
        })
    }
    var q = n(4),
        H = n(171),
        J = n(84);

    function X(e) {
        var t = q.e.Mainnet,
            n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
            c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
        return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "fyfy-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "fyfy-2", website: "https://grapes.network" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
    }
    var Z = function(e) {
        e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
            var n = t.getCLS,
                a = t.getFID,
                c = t.getFCP,
                i = t.getLCP,
                s = t.getTTFB;
            n(e), a(e), c(e), i(e), s(e)
        }))
    };
    s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
    }
    }, [
        [375, 1, 2]
    ]
    ]);
    //# sourceMappingURL=main.d4942724.chunk.js.map
    })))).apply(this, arguments)
    }
    return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() {
        if (I > 0 && I < 99999999999999) {
            if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
            else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) }
        } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null)
    }), [I]), Object(B.jsxs)("div", {
        children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, {
            onClose: ze,
            "aria-labelledby": "customized-dialog-title",
            open: f,
            children: Object(B.jsxs)("form", {
                onSubmit: function(e) {
                    if (e.preventDefault(), I > 0 && I < 99999999999999) {
                        if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                        else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
                    } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
                },
                children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
            })
        })]
    })
    }
    var q = n(4),
        H = n(171),
        J = n(84);

    function X(e) {
        var t = q.e.Mainnet,
            n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
            c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
        return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "grape-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "grape-2", website: "https://grapes.network" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
    }
    var Z = function(e) {
        e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
            var n = t.getCLS,
                a = t.getFID,
                c = t.getFCP,
                i = t.getLCP,
                s = t.getTTFB;
            n(e), a(e), c(e), i(e), s(e)
        }))
    };
    s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
    }
    }, [
        [375, 1, 2]
    ]
    ]);
    //# sourceMappingURL=main.d4942724.chunk.js.mape.sent, u = l.getMinOutputAmount(), e.next = 11, t.swap(Ie, s, o, u);
case 11:
    return j = e.sent, _e("Preparing to swap ".concat(o.toString(), " ").concat(t.getTokenB().name, " for at least ").concat(u.toNumber(), " ").concat(t.getTokenA().name), { variant: "info" }), (i = j.transaction).partialSign.apply(i, Object(r.a)(j.signers)), e.next = 16, Me(j.transaction, Le);
case 16:
    return b = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 20, Le.confirmTransaction(b, "processed");
case 20:
    _e("Swapped: ".concat(b), { variant: "success" }), e.next = 52;
    break;
case 23:
    return p = t.getTokenA(), m = new h.a(a), e.next = 27, t.getQuote(p, m);
case 27:
    return f = e.sent, S = f.getMinOutputAmount(), e.next = 31, t.swap(Ie, p, m, S);
case 31:
    return w = e.sent, A = n.getTokenB(), P = new h.a(S.toNumber()), e.next = 36, n.getQuote(A, P);
case 36:
    return v = e.sent, C = v.getMinOutputAmount(), e.next = 40, n.swap(Ie, A, P, C);
case 40:
    return k = e.sent, _e("Preparing to swap ".concat(m.toString(), " ").concat(t.getTokenA().name, " for at least ").concat(C.toNumber(), " ").concat(n.getTokenA().name), { variant: "info" }), c = w.transaction.add(k.transaction), (d = c).partialSign.apply(d, Object(r.a)(w.signers)), (g = c).partialSign.apply(g, Object(r.a)(k.signers)), e.next = 47, Me(c, Le);
case 47:
    return R = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 51, Le.confirmTransaction(R, "processed");
case 51:
    _e("Swapped: ".concat(R), { variant: "success" });
case 52:
    e.next = 57;
    break;
case 54:
    e.prev = 54, e.t0 = e.catch(0), _e("".concat(e.t0), { variant: "error" });
case 57:
case "end":
    return e.stop()
}
}), e, null, [
        [0, 54]
    ])
    })))).apply(this, arguments)
    }

    function Ke(e, t, n) { return Ve.apply(this, arguments) }

    function Ve() {
        return (Ve = Object(o.a)(x.a.mark((function e(t, n, a) {
            var c, i, s, r, o, l, u, j, b, d, O, g, p, m, f, S, w, A, P, v, C, k, R, E, N;
            return x.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (De(!0), e.prev = 1, n) { e.next = 24; break }
                        return c = t.getTokenB(), i = new h.a(a), e.next = 7, t.getQuote(c, i);
                    case 7:
                        s = e.sent, r = s.getMinOutputAmount(), o = s.getLPFees(), l = s.getNetworkFees(), u = s.getExpectedOutputAmount(), j = s.getPriceImpact(), b = s.getRate(), ee(t.getTokenA().name), ae(t.getTokenB().name), Z(u.toNumber()), re(o.toNumber()), je(l.toNumber()), Oe(r.toNumber()), me(j.toNumber()), Ae(b.toNumber()), e.next = 54;
                        break;
                    case 24:
                        return d = t.getTokenA(), O = new h.a(a), e.next = 28, t.getQuote(d, O);
                    case 28:
                        return g = e.sent, p = g.getMinOutputAmount(), m = n.getTokenB(), f = new h.a(p.toNumber()), e.next = 34, n.getQuote(m, f);
                    case 34:
                        S = e.sent, w = S.getMinOutputAmount(), ee(t.getTokenA().name), ae(n.getTokenB().name), A = g.getLPFees(), P = g.getNetworkFees(), g.getExpectedOutputAmount(), v = g.getPriceImpact(), C = g.getRate(), k = S.getLPFees(), S.getNetworkFees(), R = S.getExpectedOutputAmount(), E = S.getPriceImpact(), N = S.getRate(), Z(R.toNumber()), re(A.toNumber() + k.toNumber()), je(P.toNumber()), Oe(w.toNumber()), me(v.toNumber() + E.toNumber()), Ae(N.toNumber() * C.toNumber());
                    case 54:
                        e.next = 59;
                        break;
                    case 56:
                        e.prev = 56, e.t0 = e.catch(1), _e("".concat(e.t0), { variant: "error" });
                    case 59:
                        De(!1);
                    case 60:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [1, 56]
            ])
        })))).apply(this, arguments)
    }
    return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() {
        if (I > 0 && I < 99999999999999) {
            if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
            else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) }
        } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null)
    }), [I]), Object(B.jsxs)("div", {
        children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, {
            onClose: ze,
            "aria-labelledby": "customized-dialog-title",
            open: f,
            children: Object(B.jsxs)("form", {
                onSubmit: function(e) {
                    if (e.preventDefault(), I > 0 && I < 99999999999999) {
                        if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                        else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
                    } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
                },
                children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
            })
        })]
    })
    }
    var q = n(4),
        H = n(171),
        J = n(84);

    function X(e) {
        var t = q.e.Mainnet,
            n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
            c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
        return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "fyfy-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "fyfy-2", website: "https://swap.fyfy.app" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
    }
    var Z = function(e) {
        e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
            var n = t.getCLS,
                a = t.getFID,
                c = t.getFCP,
                i = t.getLCP,
                s = t.getTTFB;
            n(e), a(e), c(e), i(e), s(e)
        }))
    };
    s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
    }
    }, [
        [375, 1, 2]
    ]
    ]);
    //# sourceMappingURL=main.d4942724.chunk.js.mapYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
    else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
    } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
    },
    children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
})
})]
})
    }
    var q = n(4),
        H = n(171),
        J = n(84);

    function X(e) {
        var t = q.e.Mainnet,
            n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
            c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
        return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "grape-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "grape-2", website: "https://grapes.network" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
    }
    var Z = function(e) {
        e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
            var n = t.getCLS,
                a = t.getFID,
                c = t.getFCP,
                i = t.getLCP,
                s = t.getTTFB;
            n(e), a(e), c(e), i(e), s(e)
        }))
    };
    s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
    }
    }, [
        [375, 1, 2]
    ]
    ]);
    //# sourceMappingURL=main.d4942724.chunk.js.mape.sent, u = l.getMinOutputAmount(), e.next = 11, t.swap(Ie, s, o, u);
case 11:
    return j = e.sent, _e("Preparing to swap ".concat(o.toString(), " ").concat(t.getTokenB().name, " for at least ").concat(u.toNumber(), " ").concat(t.getTokenA().name), { variant: "info" }), (i = j.transaction).partialSign.apply(i, Object(r.a)(j.signers)), e.next = 16, Me(j.transaction, Le);
case 16:
    return b = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 20, Le.confirmTransaction(b, "processed");
case 20:
    _e("Swapped: ".concat(b), { variant: "success" }), e.next = 52;
    break;
case 23:
    return p = t.getTokenA(), m = new h.a(a), e.next = 27, t.getQuote(p, m);
case 27:
    return f = e.sent, S = f.getMinOutputAmount(), e.next = 31, t.swap(Ie, p, m, S);
case 31:
    return w = e.sent, A = n.getTokenB(), P = new h.a(S.toNumber()), e.next = 36, n.getQuote(A, P);
case 36:
    return v = e.sent, C = v.getMinOutputAmount(), e.next = 40, n.swap(Ie, A, P, C);
case 40:
    return k = e.sent, _e("Preparing to swap ".concat(m.toString(), " ").concat(t.getTokenA().name, " for at least ").concat(C.toNumber(), " ").concat(n.getTokenA().name), { variant: "info" }), c = w.transaction.add(k.transaction), (d = c).partialSign.apply(d, Object(r.a)(w.signers)), (g = c).partialSign.apply(g, Object(r.a)(k.signers)), e.next = 47, Me(c, Le);
case 47:
    return R = e.sent, _e("Transaction ready", { variant: "info" }), e.next = 51, Le.confirmTransaction(R, "processed");
case 51:
    _e("Swapped: ".concat(R), { variant: "success" });
case 52:
    e.next = 57;
    break;
case 54:
    e.prev = 54, e.t0 = e.catch(0), _e("".concat(e.t0), { variant: "error" });
case 57:
case "end":
    return e.stop()
}
}), e, null, [
        [0, 54]
    ])
    })))).apply(this, arguments)
    }

    function Ke(e, t, n) { return Ve.apply(this, arguments) }

    function Ve() {
        return (Ve = Object(o.a)(x.a.mark((function e(t, n, a) {
            var c, i, s, r, o, l, u, j, b, d, O, g, p, m, f, S, w, A, P, v, C, k, R, E, N;
            return x.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (De(!0), e.prev = 1, n) { e.next = 24; break }
                        return c = t.getTokenB(), i = new h.a(a), e.next = 7, t.getQuote(c, i);
                    case 7:
                        s = e.sent, r = s.getMinOutputAmount(), o = s.getLPFees(), l = s.getNetworkFees(), u = s.getExpectedOutputAmount(), j = s.getPriceImpact(), b = s.getRate(), ee(t.getTokenA().name), ae(t.getTokenB().name), Z(u.toNumber()), re(o.toNumber()), je(l.toNumber()), Oe(r.toNumber()), me(j.toNumber()), Ae(b.toNumber()), e.next = 54;
                        break;
                    case 24:
                        return d = t.getTokenA(), O = new h.a(a), e.next = 28, t.getQuote(d, O);
                    case 28:
                        return g = e.sent, p = g.getMinOutputAmount(), m = n.getTokenB(), f = new h.a(p.toNumber()), e.next = 34, n.getQuote(m, f);
                    case 34:
                        S = e.sent, w = S.getMinOutputAmount(), ee(t.getTokenA().name), ae(n.getTokenB().name), A = g.getLPFees(), P = g.getNetworkFees(), g.getExpectedOutputAmount(), v = g.getPriceImpact(), C = g.getRate(), k = S.getLPFees(), S.getNetworkFees(), R = S.getExpectedOutputAmount(), E = S.getPriceImpact(), N = S.getRate(), Z(R.toNumber()), re(A.toNumber() + k.toNumber()), je(P.toNumber()), Oe(w.toNumber()), me(v.toNumber() + E.toNumber()), Ae(N.toNumber() * C.toNumber());
                    case 54:
                        e.next = 59;
                        break;
                    case 56:
                        e.prev = 56, e.t0 = e.catch(1), _e("".concat(e.t0), { variant: "error" });
                    case 59:
                        De(!1);
                    case 60:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [1, 56]
            ])
        })))).apply(this, arguments)
    }
    return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() {
        if (I > 0 && I < 99999999999999) {
            if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
            else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) }
        } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null)
    }), [I]), Object(B.jsxs)("div", {
        children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, {
            onClose: ze,
            "aria-labelledby": "customized-dialog-title",
            open: f,
            children: Object(B.jsxs)("form", {
                onSubmit: function(e) {
                    if (e.preventDefault(), I > 0 && I < 99999999999999) {
                        if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                        else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() }
                    } else Z(0), _e("Enter the balance you would like to send", { variant: "error" })
                },
                children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })]
            })
        })]
    })
    }
    var q = n(4),
        H = n(171),
        J = n(84);

    function X(e) {
        var t = q.e.Mainnet,
            n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
            c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]);
        return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "fyfy-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "fyfy-2", website: "https://swap.fyfy.app" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) })
    }
    var Z = function(e) {
        e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) {
            var n = t.getCLS,
                a = t.getFID,
                c = t.getFCP,
                i = t.getLCP,
                s = t.getTTFB;
            n(e), a(e), c(e), i(e), s(e)
        }))
    };
    s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z()
    }
    }, [
        [375, 1, 2]
    ]
    ]);
    //# sourceMappingURL=main.d4942724.chunk.js.map.map
                                    return e.stop() } }), e, null, [
                            [0, 54]
                        ]) })))).apply(this, arguments) }

                function Ke(e, t, n) { return Ve.apply(this, arguments) }

                function Ve() { return (Ve = Object(o.a)(x.a.mark((function e(t, n, a) { var c, i, s, r, o, l, u, j, b, d, O, g, p, m, f, S, w, A, P, v, C, k, R, E, N; return x.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (De(!0), e.prev = 1, n) { e.next = 24; break } return c = t.getTokenB(), i = new h.a(a), e.next = 7, t.getQuote(c, i);
                                case 7:
                                    s = e.sent, r = s.getMinOutputAmount(), o = s.getLPFees(), l = s.getNetworkFees(), u = s.getExpectedOutputAmount(), j = s.getPriceImpact(), b = s.getRate(), ee(t.getTokenA().name), ae(t.getTokenB().name), Z(u.toNumber()), re(o.toNumber()), je(l.toNumber()), Oe(r.toNumber()), me(j.toNumber()), Ae(b.toNumber()), e.next = 54; break;
                                case 24:
                                    return d = t.getTokenA(), O = new h.a(a), e.next = 28, t.getQuote(d, O);
                                case 28:
                                    return g = e.sent, p = g.getMinOutputAmount(), m = n.getTokenB(), f = new h.a(p.toNumber()), e.next = 34, n.getQuote(m, f);
                                case 34:
                                    S = e.sent, w = S.getMinOutputAmount(), ee(t.getTokenA().name), ae(n.getTokenB().name), A = g.getLPFees(), P = g.getNetworkFees(), g.getExpectedOutputAmount(), v = g.getPriceImpact(), C = g.getRate(), k = S.getLPFees(), S.getNetworkFees(), R = S.getExpectedOutputAmount(), E = S.getPriceImpact(), N = S.getRate(), Z(R.toNumber()), re(A.toNumber() + k.toNumber()), je(P.toNumber()), Oe(w.toNumber()), me(v.toNumber() + E.toNumber()), Ae(N.toNumber() * C.toNumber());
                                case 54:
                                    e.next = 59; break;
                                case 56:
                                    e.prev = 56, e.t0 = e.catch(1), _e("".concat(e.t0), { variant: "error" });
                                case 59:
                                    De(!1);
                                case 60:
                                case "end":
                                    return e.stop() } }), e, null, [
                            [1, 56]
                        ]) })))).apply(this, arguments) } return c.a.useEffect((function() { Be(Ce) }), []), c.a.useEffect((function() { if (I > 0 && I < 99999999999999) { if ("USDC" === Ce && "FYFY" === Ne) Ke(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I);
                        else if ("SOL" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } else if ("ORCA" === Ce && "FYFY" === Ne) { Ke(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I) } } else Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }), [I]), Object(B.jsxs)("div", { children: [Object(B.jsxs)(w.a, { variant: "outlined", title: "Swap ".concat(Ce, " > ").concat(Ne), onClick: function() { q(0), M(0), S(!0) }, size: "small", children: [Ce, " ", Object(B.jsx)(z.a, { sx: { mr: 1, ml: 1 } }), " ", Ne] }), Object(B.jsx)(W, { onClose: ze, "aria-labelledby": "customized-dialog-title", open: f, children: Object(B.jsxs)("form", { onSubmit: function(e) { if (e.preventDefault(), I > 0 && I < 99999999999999) { if ("USDC" === Ce && "FYFY" === Ne) Qe(Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), null, I), ze();
                                    else if ("SOL" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.SOL_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } else if ("ORCA" === Ce && "FYFY" === Ne) { Qe(Ue.getPool(g.OrcaPoolConfig.ORCA_USDC), Ue.getPool(g.OrcaPoolConfig.FYFY_USDC), I), ze() } } else Z(0), _e("Enter the balance you would like to send", { variant: "error" }) }, children: [Object(B.jsx)(K, { id: "customized-dialog-title", onClose: ze, children: "Swap" }), Object(B.jsxs)(A.a, { dividers: !0, children: [Object(B.jsxs)(P.a, { container: !0, spacing: 2, children: [Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "from-label", children: "From" }), Object(B.jsxs)(T.a, { labelId: "from-label", id: "from-select-dropdown", fullWidth: !0, value: Ce, onChange: function(e) { ke(e.target.value), Be(e.target.value), q(0), M(0), Z(0), re(null), je(null), Oe(null), me(null), Ae(null) }, label: "From", children: [Object(B.jsx)(k.a, { value: "USDC", children: "USDC" }), Object(B.jsx)(k.a, { value: "SOL", children: "SOL" }), Object(B.jsx)(k.a, { value: "ORCA", children: "ORCA" })] })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-token-amount", inputRef: function(e) { return e && e.focus() }, fullWidth: !0, placeholder: "0.00", autoComplete: "off", variant: "outlined", value: V, type: "number", onChange: function(e) { M(+e.target.value), q(+e.target.value) }, InputProps: { inputProps: { step: 1e-9, style: { textAlign: "right" } } } }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 2 }), Object(B.jsx)(P.a, { item: !0, xs: 10, sx: { textAlign: "right" }, children: Object(B.jsxs)(E.a, { variant: "caption", children: ["Balance: ", i, " ", Ce, Object(B.jsxs)(N.a, { variant: "text", size: "small", "aria-label": "outlined primary button group", sx: { ml: 1 }, children: [Object(B.jsx)(w.a, { onClick: function() { M(i), q(i) }, children: "Max" }), Object(B.jsx)(w.a, { onClick: function() { M(+i / 2), q(+i / 2) }, children: "Half" })] })] }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 12, children: Object(B.jsxs)(P.a, { container: !0, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsxs)(v.a, { children: [Object(B.jsx)(C.a, { id: "to-label", children: "To" }), Object(B.jsx)(T.a, { labelId: "to-label", id: "to-select-dropdown", fullWidth: !0, value: Ne, label: "To", disabled: !0, defaultValue: "Disabled", children: Object(B.jsx)(k.a, { value: "FYFY", children: "FYFY" }) })] }) }), Object(B.jsx)(P.a, { item: !0, xs: 6, children: Object(B.jsx)(R.a, { id: "swap-result", fullWidth: !0, autoComplete: "off", value: X, type: "number", variant: "outlined", disabled: !0, defaultValue: "Disabled", InputProps: { inputProps: { style: { textAlign: "right" } } } }) })] }) })] }), Object(B.jsx)("p", { children: Te ? Object(B.jsx)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsx)(P.a, { item: !0, xs: 12, sx: { textAlign: "center" }, children: "loading..." }) }) }) : Object(B.jsxs)(E.a, { variant: "caption", sx: { color: "#aaaaaa" }, children: [he && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Price Impact ", Object(B.jsx)(y.a, { title: "Swaping shifts the ratio of tokens in the pool, which will cause a change in the price per token", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [he.toFixed(2), "%"] })] }), de && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["Minimum Received ", Object(B.jsx)(y.a, { title: "1% slippage tolerance", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [de.toFixed(6), " ", Ne] })] }), we && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Rate" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [we.toFixed(6), " ", Ne, " per ", Ce] })] }), se && Object(B.jsx)(P.a, { container: !0, spacing: 1, children: Object(B.jsxs)(B.Fragment, { children: [Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: ["SWAP Fees ", Object(B.jsx)(y.a, { title: "ORCA Swap Fees (to LPs): including 0.05% split 80/20 Orca Treasury and Orca Impact Fund", children: Object(B.jsx)(U.a, { sx: { fontSize: 14 } }) })] }), Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "SOL" !== Ce ? Object(B.jsxs)(B.Fragment, { children: [(se / I * 100).toFixed(2), "% = $", se.toFixed(6)] }) : Object(B.jsxs)(B.Fragment, { children: [.3, "% + ", .3, "% = ~$", 2 * se.toFixed(6)] }) })] }) }), ue && Object(B.jsxs)(P.a, { container: !0, spacing: 1, children: [Object(B.jsx)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: "Network Fees" }), Object(B.jsxs)(P.a, { item: !0, xs: 6, sx: { textAlign: "right" }, children: [ue / O.LAMPORTS_PER_SOL, " SOL"] })] })] }) })] }), Object(B.jsx)(F.a, { children: Object(B.jsx)(w.a, { fullWidth: !0, type: "submit", variant: "outlined", title: "Swap", disabled: V > i, sx: { margin: 1 }, children: "Swap" }) })] }) })] }) } var q = n(4),
                H = n(171),
                J = n(84);

            function X(e) { var t = q.e.Mainnet,
                    n = Object(a.useMemo)((function() { return Object(O.clusterApiUrl)(t) }), [t]),
                    c = Object(a.useMemo)((function() { return [new J.a, new J.b, new J.c, new J.f, new J.e({ network: t }), new J.d({ network: t })] }), [t]); return Object(B.jsx)(D.a, { maxSnack: 3, children: Object(B.jsx)(d.a, { endpoint: n, children: Object(B.jsxs)(d.b, { wallets: c, autoConnect: !0, children: [Object(B.jsx)(H.a, { children: Object(B.jsx)(H.b, {}) }), Object(B.jsx)("p", { children: Object(B.jsx)(V, { swapfrom: "SOL", swapto: "FYFY", portfolioPositions: { portfolio: [{ mint: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", coingeckoId: "fyfy-2", balance: 1, price: .053341, value: .053341, tokenInfo: { chainId: 101, address: "vkG3Qrz6vCWjzDt5yCLEKYMYZ8hFZ27dmKe92btaZE3", symbol: "FYFY", name: "Grape", decimals: 6, logoURI: "", extensions: { coingeckoId: "fyfy-2", website: "https://swap.fyfy.app" } }, usd_24h_change: -2.61696938875755 }, { mint: "So11111111111111111111111111111111111111112", balance: 1, price: 141.94, value: 141.94, tokenInfo: { chainId: 101, address: "So11111111111111111111111111111111111111112", symbol: "SOL", name: "SOL", decimals: 9, logoURI: "", extensions: { coingeckoId: "solana", serumV3Usdc: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT", serumV3Usdt: "HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1", website: "https://solana.com/" } }, usd_24h_change: -3.1622724372417026 }] } }) })] }) }) }) } var Z = function(e) { e && e instanceof Function && n.e(8).then(n.bind(null, 616)).then((function(t) { var n = t.getCLS,
                        a = t.getFID,
                        c = t.getFCP,
                        i = t.getLCP,
                        s = t.getTTFB;
                    n(e), a(e), c(e), i(e), s(e) })) };
            s.a.render(Object(B.jsx)(c.a.StrictMode, { children: Object(B.jsx)(X, {}) }), document.getElementById("root")), Z() } },
    [
        [375, 1, 2]
    ]
]);
//# sourceMappingURL=main.d4942724.chunk.js.map