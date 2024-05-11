parcelRequire = (function (e, r, t, n) {
		var i,
			o = "function" == typeof parcelRequire && parcelRequire,
			u = "function" == typeof require && require;
		function f(t, n) {
			if (!r[t]) {
				if (!e[t]) {
					var i = "function" == typeof parcelRequire && parcelRequire;
					if (!n && i) return i(t, !0);
					if (o) return o(t, !0);
					if (u && "string" == typeof t) return u(t);
					var c = new Error("Cannot find module '" + t + "'");
					throw ((c.code = "MODULE_NOT_FOUND"), c);
				}
				(p.resolve = function (r) {
					return e[t][1][r] || r;
				}),
					(p.cache = {});
				var l = (r[t] = new f.Module(t));
				e[t][0].call(l.exports, p, l, l.exports, this);
			}
			return r[t].exports;
			function p(e) {
				return f(p.resolve(e));
			}
		}
		(f.isParcelRequire = !0),
			(f.Module = function (e) {
				(this.id = e), (this.bundle = f), (this.exports = {});
			}),
			(f.modules = e),
			(f.cache = r),
			(f.parent = o),
			(f.register = function (r, t) {
				e[r] = [
					function (e, r) {
						r.exports = t;
					},
					{},
				];
			});
		for (var c = 0; c < t.length; c++)
			try {
				f(t[c]);
			} catch (e) {
				i || (i = e);
			}
		if (t.length) {
			var l = f(t[t.length - 1]);
			"object" == typeof exports && "undefined" != typeof module
				? (module.exports = l)
				: "function" == typeof define && define.amd
					? define(function () {
						return l;
					})
					: n && (this[n] = l);
		}
		if (((parcelRequire = f), i)) throw i;
		return f;
	})(
		{
			y0Vp: [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
					var e = function (e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () { };
						if (("none" === window.getComputedStyle(e).display && ((e.style.display = "block"), (e.style.height = "0px")), (e.style.overflow = "hidden"), (e.style.transition = "height .3s"), 0 !== e.offsetHeight)) {
							var n = e.scrollHeight,
								i = e.style.transition;
							(e.style.transition = ""),
								e.addEventListener("transitionend", function n() {
									e.removeEventListener("transitionend", n, { once: !0 }),
										(e.style.display = "none"),
										requestAnimationFrame(function () {
											return t();
										});
								}),
								requestAnimationFrame(function () {
									(e.style.height = "".concat(n, "px")),
										(e.style.transition = i),
										requestAnimationFrame(function () {
											e.style.height = "0px";
										});
								});
						} else {
							var o = e.scrollHeight;
							(e.style.height = "".concat(o, "px")),
								e.addEventListener("transitionend", function n() {
									e.removeEventListener("transitionend", n, { once: !0 }),
										(e.style.height = null),
										requestAnimationFrame(function () {
											return t();
										});
								});
						}
					},
						t = e;
					exports.default = t;
				},
				{},
			],
			XZfk: [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.t3InputAccordion = void 0);
					var e = t(require("../../../../common/scripts/slideToggle"));
					function t(e) {
						return e && e.__esModule ? e : { default: e };
					}
					var c = function (t) {
						var c = function (t) {
							t.classList.toggle("is-active"), t.setAttribute("aria-expanded", t.classList.contains("is-active"));
							var c = t.parentNode.querySelector(".t3-input-accordion__content");
							(0, e.default)(c);
						};
						document.querySelectorAll(".".concat(t, " ")).forEach(function (e) {
							e.addEventListener("click", function () {
								if (e.classList.contains("is-active")) c(e);
								else {
									var o = document.querySelector(".".concat(t, ".is-active "));
									o && c(o), c(e);
								}
							});
						});
					};
					exports.t3InputAccordion = c;
				},
				{ "../../../../common/scripts/slideToggle": "y0Vp" },
			],
			Civd: [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.validateNumberInputValue = exports.validateNumberInputKeyPress = void 0);
					var e = function (e) {
						"e" === e.key.toLowerCase() && e.preventDefault();
					};
					exports.validateNumberInputKeyPress = e;
					var t = function (e) {
						var t = e.target.value;
						/^\d*\.?\d{0,2}$/.test(t) || (e.target.value = t.slice(0, -1));
					};
					exports.validateNumberInputValue = t;
				},
				{},
			],
			"8Z7M": [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
					var e = require("../../components/t3-input-accordion/t3-input-accordion.js"),
						t = require("./t3-calculators.frontend.bundle.js"),
						r = require("../../assets/js/input-validators.js");
					function s(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
					}
					function a(e, t) {
						for (var r = 0; r < t.length; r++) {
							var s = t[r];
							(s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
						}
					}
					function i(e, t, r) {
						return t && a(e.prototype, t), r && a(e, r), e;
					}
					var u = (function () {
						function a(e) {
							s(this, a),
								e &&
								((this.form = e),
									(this.spLaborTotal = this.form.querySelector("#sp_labor_cost_total")),
									(this.spLaborWorkers = this.form.querySelector("#sp_labor_workers")),
									(this.spLaborHours = this.form.querySelector("#sp_labor_hours")),
									(this.spLaborAvg = this.form.querySelector("#sp_labor_avg")),
									(this.spMaterialCosts = this.form.querySelector("#sp_material_costs")),
									(this.spOverheadTotal = this.form.querySelector("#sp_overhead_expenses_total")),
									(this.spOverheadMonthlyExpenses = this.form.querySelector("#sp_overhead_monthly_expenses")),
									(this.spOverheadMonthlyHours = this.form.querySelector("#sp_overhead_monthly_hours")),
									(this.spOverheadTotalHours = this.form.querySelector("#sp_overhead_total_hours")),
									(this.spProfit = this.form.querySelector("#sp_profit")),
									(this.spLaborSubInputs = this.form.querySelectorAll(".sp-labor-subinput")),
									(this.spOverheadSubInputs = this.form.querySelectorAll(".sp-overhead-subinputs")),
									(this.spAccordions = this.form.querySelectorAll(".service-price-accordion")),
									(this.spSummaryServicePrice = this.form.querySelector("#sp_service_price")),
									(this.spSummaryProfit = this.form.querySelector("#sp_summary_profit")),
									(this.spSummaryMarkup = this.form.querySelector("#sp_summary_markup")),
									(this.userInteracted = !1),
									this.setupEventListeners());
						}
						return (
							i(a, [
								{
									key: "calculateServicePrice",
									value: function () {
										var e = this.spLaborTotal.value ? Number(this.spLaborTotal.value) : 0,
											t = this.spMaterialCosts.value ? Number(this.spMaterialCosts.value) : 0,
											r = this.spOverheadTotal.value ? Number(this.spOverheadTotal.value) : 0,
											s = this.spProfit.value ? Number(this.spProfit.value) : 0,
											a = e + t + r,
											i = a + s,
											u = 0 === i ? 0 : (s / i) * 100,
											o = 0 === i ? 0 : (s / a) * 100;
										(this.spSummaryServicePrice.textContent = "$".concat(i.toFixed(2))),
											(this.spSummaryProfit.textContent = " ".concat(u.toFixed(2), "%")),
											(this.spSummaryMarkup.textContent = " ".concat(o.toFixed(2), "%")),
											this.amplitudeListener();
									},
								},
								{
									key: "calculateLaborCosts",
									value: function () {
										var e = (
											(this.spLaborWorkers.value ? Number(this.spLaborWorkers.value) : 0) *
											(this.spLaborHours.value ? Number(this.spLaborHours.value) : 0) *
											(this.spLaborAvg.value ? Number(this.spLaborAvg.value) : 0)
										).toFixed(2);
										(this.spLaborTotal.value = e > 0 ? e : ""), this.calculateServicePrice();
									},
								},
								{
									key: "calculateOverheadExpenses",
									value: function () {
										var e = (
											((this.spOverheadMonthlyExpenses.value ? Number(this.spOverheadMonthlyExpenses.value) : 0) / (this.spOverheadMonthlyHours.value ? Number(this.spOverheadMonthlyHours.value) : 0)) *
											(this.spOverheadTotalHours.value ? Number(this.spOverheadTotalHours.value) : 0)
										).toFixed(2);
										!isNaN(e) && e > 0 ? (this.spOverheadTotal.value = e) : (this.spOverheadTotal.value = ""), this.calculateServicePrice();
									},
								},
								{
									key: "amplitudeListener",
									value: function () {
										this.userInteracted || ((0, t.sendAmplitudeEvent)(), (this.userInteracted = !0));
									},
								},
								{
									key: "setupEventListeners",
									value: function () {
										var s = this;
										(0, e.t3InputAccordion)("service-price-accordion"),
											this.spMaterialCosts.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), s.calculateServicePrice();
											}),
											this.spProfit.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), s.calculateServicePrice();
											}),
											this.spLaborTotal.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), (0, t.clearSubInputFields)(s.spLaborSubInputs), s.calculateServicePrice();
											}),
											this.spOverheadTotal.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), (0, t.clearSubInputFields)(s.spOverheadSubInputs), s.calculateServicePrice();
											}),
											this.spMaterialCosts.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.spProfit.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.spLaborTotal.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.spOverheadTotal.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.spLaborSubInputs.forEach(function (e) {
												e.addEventListener("keydown", function (e) {
													return (0, r.validateNumberInputKeyPress)(e);
												}),
													e.addEventListener("input", function (e) {
														(0, r.validateNumberInputValue)(e), s.calculateLaborCosts();
													});
											}),
											this.spOverheadSubInputs.forEach(function (e) {
												e.addEventListener("keydown", function (e) {
													return (0, r.validateNumberInputKeyPress)(e);
												}),
													e.addEventListener("input", function (e) {
														(0, r.validateNumberInputValue)(e), s.calculateOverheadExpenses();
													});
											}),
											this.spAccordions.forEach(function (e) {
												e.addEventListener("click", function () {
													return s.amplitudeListener();
												});
											});
									},
								},
							]),
							a
						);
					})(),
						o = u;
					exports.default = o;
				},
				{ "../../components/t3-input-accordion/t3-input-accordion.js": "XZfk", "./t3-calculators.frontend.bundle.js": "cnOH", "../../assets/js/input-validators.js": "Civd" },
			],
			p5rG: [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
					var e = require("../../components/t3-input-accordion/t3-input-accordion.js"),
						t = require("./t3-calculators.frontend.bundle.js"),
						r = require("../../assets/js/input-validators.js");
					function a(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
					}
					function i(e, t) {
						for (var r = 0; r < t.length; r++) {
							var a = t[r];
							(a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
						}
					}
					function o(e, t, r) {
						return t && i(e.prototype, t), r && i(e, r), e;
					}
					var u = (function () {
						function i(e) {
							a(this, i),
								e &&
								((this.form = e),
									(this.pmLaborTotal = this.form.querySelector("#pm_labor_cost_total")),
									(this.pmLaborWorkers = this.form.querySelector("#pm_labor_workers")),
									(this.pmLaborHours = this.form.querySelector("#pm_labor_hours")),
									(this.pmLaborAvg = this.form.querySelector("#pm_labor_avg")),
									(this.pmMaterialCosts = this.form.querySelector("#pm_material_costs")),
									(this.pmOverheadTotal = this.form.querySelector("#pm_overhead_expenses_total")),
									(this.pmOverheadMonthlyExpenses = this.form.querySelector("#pm_overhead_monthly_expenses")),
									(this.pmOverheadMonthlyHours = this.form.querySelector("#pm_overhead_monthly_hours")),
									(this.pmOverheadTotalHours = this.form.querySelector("#pm_overhead_total_hours")),
									(this.pmServicePrice = this.form.querySelector("#pm_service_price")),
									(this.pmLaborSubInputs = this.form.querySelectorAll(".pm-labor-subinput")),
									(this.pmOverheadSubInputs = this.form.querySelectorAll(".pm-overhead-subinputs")),
									(this.pmAccordions = this.form.querySelectorAll(".profit-margin-accordion")),
									(this.pmSummaryProfitMargin = this.form.querySelector("#pm_profit_margin")),
									(this.pmSummaryProfit = this.form.querySelector("#pm_profit")),
									(this.pmSummaryMarkup = this.form.querySelector("#pm_markup")),
									(this.userInteracted = !1),
									this.setupEventListeners());
						}
						return (
							o(i, [
								{
									key: "calculateProfitMargin",
									value: function () {
										var e = this.pmLaborTotal.value ? Number(this.pmLaborTotal.value) : 0,
											t = this.pmMaterialCosts.value ? Number(this.pmMaterialCosts.value) : 0,
											r = this.pmOverheadTotal.value ? Number(this.pmOverheadTotal.value) : 0,
											a = this.pmServicePrice.value ? Number(this.pmServicePrice.value) : 0,
											i = e + t + r,
											o = 0 === a ? 0 : ((a - i) / a) * 100,
											u = a - e - t - r,
											n = 0 === i ? 0 : (u / i) * 100;
										(this.pmSummaryProfitMargin.textContent = " ".concat(o.toFixed(2), "%")),
											(this.pmSummaryProfit.textContent = " $".concat(u.toFixed(2), " ")),
											(this.pmSummaryMarkup.textContent = " ".concat(n.toFixed(2), "%")),
											this.amplitudeListener();
									},
								},
								{
									key: "calculateLaborCosts",
									value: function () {
										var e = (
											(this.pmLaborWorkers.value ? Number(this.pmLaborWorkers.value) : 0) *
											(this.pmLaborHours.value ? Number(this.pmLaborHours.value) : 0) *
											(this.pmLaborAvg.value ? Number(this.pmLaborAvg.value) : 0)
										).toFixed(2);
										(this.pmLaborTotal.value = e > 0 ? e : ""), this.calculateProfitMargin();
									},
								},
								{
									key: "calculateOverheadExpenses",
									value: function () {
										var e = (
											((this.pmOverheadMonthlyExpenses.value ? Number(this.pmOverheadMonthlyExpenses.value) : 0) / (this.pmOverheadMonthlyHours.value ? Number(this.pmOverheadMonthlyHours.value) : 0)) *
											(this.pmOverheadTotalHours.value ? Number(this.pmOverheadTotalHours.value) : 0)
										).toFixed(2);
										!isNaN(e) && e > 0 ? (this.pmOverheadTotal.value = e) : (this.pmOverheadTotal.value = ""), this.calculateProfitMargin();
									},
								},
								{
									key: "amplitudeListener",
									value: function () {
										this.userInteracted || ((0, t.sendAmplitudeEvent)(), (this.userInteracted = !0));
									},
								},
								{
									key: "setupEventListeners",
									value: function () {
										var a = this;
										(0, e.t3InputAccordion)("profit-margin-accordion"),
											this.pmMaterialCosts.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), a.calculateProfitMargin();
											}),
											this.pmServicePrice.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), a.calculateProfitMargin();
											}),
											this.pmLaborTotal.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), (0, t.clearSubInputFields)(a.pmLaborSubInputs), a.calculateProfitMargin();
											}),
											this.pmOverheadTotal.addEventListener("input", function (e) {
												(0, r.validateNumberInputValue)(e), (0, t.clearSubInputFields)(a.pmOverheadSubInputs), a.calculateProfitMargin();
											}),
											this.pmMaterialCosts.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.pmServicePrice.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.pmLaborTotal.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.pmOverheadTotal.addEventListener("keydown", function (e) {
												return (0, r.validateNumberInputKeyPress)(e);
											}),
											this.pmLaborSubInputs.forEach(function (e) {
												e.addEventListener("keydown", function (e) {
													return (0, r.validateNumberInputKeyPress)(e);
												}),
													e.addEventListener("input", function (e) {
														(0, r.validateNumberInputValue)(e), a.calculateLaborCosts();
													});
											}),
											this.pmOverheadSubInputs.forEach(function (e) {
												e.addEventListener("keydown", function (e) {
													return (0, r.validateNumberInputKeyPress)(e);
												}),
													e.addEventListener("input", function (e) {
														(0, r.validateNumberInputValue)(e), a.calculateOverheadExpenses();
													});
											}),
											this.pmAccordions.forEach(function (e) {
												e.addEventListener("click", function () {
													return a.amplitudeListener();
												});
											});
									},
								},
							]),
							i
						);
					})(),
						n = u;
					exports.default = n;
				},
				{ "../../components/t3-input-accordion/t3-input-accordion.js": "XZfk", "./t3-calculators.frontend.bundle.js": "cnOH", "../../assets/js/input-validators.js": "Civd" },
			],
			Hcyc: [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
					var t = require("./t3-calculators.frontend.bundle.js"),
						e = require("../../assets/js/input-validators.js");
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function l(t, e) {
						for (var r = 0; r < e.length; r++) {
							var l = e[r];
							(l.enumerable = l.enumerable || !1), (l.configurable = !0), "value" in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
						}
					}
					function u(t, e, r) {
						return e && l(t.prototype, e), r && l(t, r), t;
					}
					var i = (function () {
						function l(t) {
							r(this, l),
								t &&
								((this.form = t),
									(this.lcHourlySalary = this.form.querySelector("#lc_hourly_salary")),
									(this.lcDirectHourlyTotal = this.form.querySelector("#lc_direct_hourly_costs")),
									(this.lcIndirectHourlyTotal = this.form.querySelector("#lc_indirect_hourly_costs")),
									(this.lcProfit = this.form.querySelector("#lc_profit")),
									(this.lcInputs = this.form.querySelectorAll(".js-labor-cost-input")),
									(this.lcSummaryHourlyRate = this.form.querySelector("#lc_hourly_rate")),
									(this.userInteracted = !1),
									this.setupEventListeners());
						}
						return (
							u(l, [
								{
									key: "calculateLaborCost",
									value: function () {
										var t =
											(this.lcHourlySalary.value ? Number(this.lcHourlySalary.value) : 0) +
											(this.lcDirectHourlyTotal.value ? Number(this.lcDirectHourlyTotal.value) : 0) +
											(this.lcIndirectHourlyTotal.value ? Number(this.lcIndirectHourlyTotal.value) : 0) +
											(this.lcProfit.value ? Number(this.lcProfit.value) : 0);
										(this.lcSummaryHourlyRate.textContent = "$".concat(t.toFixed(2))), this.amplitudeListener();
									},
								},
								{
									key: "amplitudeListener",
									value: function () {
										this.userInteracted || ((0, t.sendAmplitudeEvent)(), (this.userInteracted = !0));
									},
								},
								{
									key: "setupEventListeners",
									value: function () {
										var t = this;
										this.lcInputs.forEach(function (r) {
											r.addEventListener("keydown", function (t) {
												return (0, e.validateNumberInputKeyPress)(t);
											}),
												r.addEventListener("input", function (r) {
													(0, e.validateNumberInputValue)(r), t.calculateLaborCost();
												});
										});
									},
								},
							]),
							l
						);
					})(),
						o = i;
					exports.default = o;
				},
				{ "./t3-calculators.frontend.bundle.js": "cnOH", "../../assets/js/input-validators.js": "Civd" },
			],
			cnOH: [
				function (require, module, exports) {
					"use strict";
					Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.clearSubInputFields = exports.sendAmplitudeEvent = void 0);
					var e = a(require("./t3-calculators.frontend.service-price.js")),
						t = a(require("./t3-calculators.frontend.profit-margin.js")),
						r = a(require("./t3-calculators.frontend.labor-cost.js"));
					function a(e) {
						return e && e.__esModule ? e : { default: e };
					}
					var o = ".wp-block-jobber-t3-calculators";
					document.addEventListener("DOMContentLoaded", function () {
						document.querySelectorAll("".concat(o)).forEach(function (a) {
							switch (a.dataset.type) {
								case "service-price":
									new e.default(a);
									break;
								case "profit-margin":
									new t.default(a);
									break;
								case "labor-cost":
									new r.default(a);
							}
						});
					});
					var n = function () {
						"undefined" != typeof JobberAnalytics && window.JobberAnalytics.track("Calculator Interaction", { source: window.location.hostname + window.location.pathname });
					};
					exports.sendAmplitudeEvent = n;
					var c = function () {
						(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function (e) {
							if ("" !== e.value) {
								e.value = "";
								var t = e.parentElement.querySelector("label");
								e.classList.remove("form__input--contains-data"), t.classList.remove("form__label--contains-data");
							}
						});
					};
					exports.clearSubInputFields = c;
				},
				{ "./t3-calculators.frontend.service-price.js": "8Z7M", "./t3-calculators.frontend.profit-margin.js": "p5rG", "./t3-calculators.frontend.labor-cost.js": "Hcyc" },
			],
		},
		{},
		["cnOH"],
		null
	);