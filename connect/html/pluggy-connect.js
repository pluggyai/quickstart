(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var zoid_frameworks_frame = createCommonjsModule(function (module, exports) {
	!function(root, factory) {
	     module.exports = factory() ;
	}("undefined" != typeof self ? self : commonjsGlobal, (function() {
	    return function(modules) {
	        var installedModules = {};
	        function __webpack_require__(moduleId) {
	            if (installedModules[moduleId]) return installedModules[moduleId].exports;
	            var module = installedModules[moduleId] = {
	                i: moduleId,
	                l: !1,
	                exports: {}
	            };
	            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	            module.l = !0;
	            return module.exports;
	        }
	        __webpack_require__.m = modules;
	        __webpack_require__.c = installedModules;
	        __webpack_require__.d = function(exports, name, getter) {
	            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
	                enumerable: !0,
	                get: getter
	            });
	        };
	        __webpack_require__.r = function(exports) {
	            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
	                value: "Module"
	            });
	            Object.defineProperty(exports, "__esModule", {
	                value: !0
	            });
	        };
	        __webpack_require__.t = function(value, mode) {
	            1 & mode && (value = __webpack_require__(value));
	            if (8 & mode) return value;
	            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
	            var ns = Object.create(null);
	            __webpack_require__.r(ns);
	            Object.defineProperty(ns, "default", {
	                enumerable: !0,
	                value: value
	            });
	            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
	                return value[key];
	            }.bind(null, key));
	            return ns;
	        };
	        __webpack_require__.n = function(module) {
	            var getter = module && module.__esModule ? function() {
	                return module.default;
	            } : function() {
	                return module;
	            };
	            __webpack_require__.d(getter, "a", getter);
	            return getter;
	        };
	        __webpack_require__.o = function(object, property) {
	            return {}.hasOwnProperty.call(object, property);
	        };
	        __webpack_require__.p = "";
	        return __webpack_require__(__webpack_require__.s = 0);
	    }([ function(module, __webpack_exports__, __webpack_require__) {
	        __webpack_require__.r(__webpack_exports__);
	        __webpack_require__.d(__webpack_exports__, "PopupOpenError", (function() {
	            return dom_PopupOpenError;
	        }));
	        __webpack_require__.d(__webpack_exports__, "create", (function() {
	            return create;
	        }));
	        __webpack_require__.d(__webpack_exports__, "destroy", (function() {
	            return component_destroy;
	        }));
	        __webpack_require__.d(__webpack_exports__, "destroyComponents", (function() {
	            return destroyComponents;
	        }));
	        __webpack_require__.d(__webpack_exports__, "destroyAll", (function() {
	            return destroyAll;
	        }));
	        __webpack_require__.d(__webpack_exports__, "PROP_TYPE", (function() {
	            return PROP_TYPE;
	        }));
	        __webpack_require__.d(__webpack_exports__, "PROP_SERIALIZATION", (function() {
	            return PROP_SERIALIZATION;
	        }));
	        __webpack_require__.d(__webpack_exports__, "CONTEXT", (function() {
	            return CONTEXT;
	        }));
	        __webpack_require__.d(__webpack_exports__, "EVENT", (function() {
	            return EVENT;
	        }));
	        function _inheritsLoose(subClass, superClass) {
	            subClass.prototype = Object.create(superClass.prototype);
	            subClass.prototype.constructor = subClass;
	            subClass.__proto__ = superClass;
	        }
	        function _extends() {
	            return (_extends = Object.assign || function(target) {
	                for (var i = 1; i < arguments.length; i++) {
	                    var source = arguments[i];
	                    for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
	                }
	                return target;
	            }).apply(this, arguments);
	        }
	        function utils_isPromise(item) {
	            try {
	                if (!item) return !1;
	                if ("undefined" != typeof Promise && item instanceof Promise) return !0;
	                if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
	                if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
	                var _toString = {}.toString;
	                if (_toString) {
	                    var name = _toString.call(item);
	                    if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
	                }
	                if ("function" == typeof item.then) return !0;
	            } catch (err) {
	                return !1;
	            }
	            return !1;
	        }
	        var dispatchedErrors = [];
	        var possiblyUnhandledPromiseHandlers = [];
	        var activeCount = 0;
	        var flushPromise;
	        function flushActive() {
	            if (!activeCount && flushPromise) {
	                var promise = flushPromise;
	                flushPromise = null;
	                promise.resolve();
	            }
	        }
	        function startActive() {
	            activeCount += 1;
	        }
	        function endActive() {
	            activeCount -= 1;
	            flushActive();
	        }
	        var promise_ZalgoPromise = function() {
	            function ZalgoPromise(handler) {
	                var _this = this;
	                this.resolved = void 0;
	                this.rejected = void 0;
	                this.errorHandled = void 0;
	                this.value = void 0;
	                this.error = void 0;
	                this.handlers = void 0;
	                this.dispatching = void 0;
	                this.stack = void 0;
	                this.resolved = !1;
	                this.rejected = !1;
	                this.errorHandled = !1;
	                this.handlers = [];
	                if (handler) {
	                    var _result;
	                    var _error;
	                    var resolved = !1;
	                    var rejected = !1;
	                    var isAsync = !1;
	                    startActive();
	                    try {
	                        handler((function(res) {
	                            if (isAsync) _this.resolve(res); else {
	                                resolved = !0;
	                                _result = res;
	                            }
	                        }), (function(err) {
	                            if (isAsync) _this.reject(err); else {
	                                rejected = !0;
	                                _error = err;
	                            }
	                        }));
	                    } catch (err) {
	                        endActive();
	                        this.reject(err);
	                        return;
	                    }
	                    endActive();
	                    isAsync = !0;
	                    resolved ? this.resolve(_result) : rejected && this.reject(_error);
	                }
	            }
	            var _proto = ZalgoPromise.prototype;
	            _proto.resolve = function(result) {
	                if (this.resolved || this.rejected) return this;
	                if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
	                this.resolved = !0;
	                this.value = result;
	                this.dispatch();
	                return this;
	            };
	            _proto.reject = function(error) {
	                var _this2 = this;
	                if (this.resolved || this.rejected) return this;
	                if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
	                if (!error) {
	                    var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
	                    error = new Error("Expected reject to be called with Error, got " + _err);
	                }
	                this.rejected = !0;
	                this.error = error;
	                this.errorHandled || setTimeout((function() {
	                    _this2.errorHandled || function(err, promise) {
	                        if (-1 === dispatchedErrors.indexOf(err)) {
	                            dispatchedErrors.push(err);
	                            setTimeout((function() {
	                                throw err;
	                            }), 1);
	                            for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
	                        }
	                    }(error, _this2);
	                }), 1);
	                this.dispatch();
	                return this;
	            };
	            _proto.asyncReject = function(error) {
	                this.errorHandled = !0;
	                this.reject(error);
	                return this;
	            };
	            _proto.dispatch = function() {
	                var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
	                if (!this.dispatching && (resolved || rejected)) {
	                    this.dispatching = !0;
	                    startActive();
	                    var chain = function(firstPromise, secondPromise) {
	                        return firstPromise.then((function(res) {
	                            secondPromise.resolve(res);
	                        }), (function(err) {
	                            secondPromise.reject(err);
	                        }));
	                    };
	                    for (var i = 0; i < handlers.length; i++) {
	                        var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
	                        var _result2 = void 0;
	                        if (resolved) try {
	                            _result2 = onSuccess ? onSuccess(this.value) : this.value;
	                        } catch (err) {
	                            promise.reject(err);
	                            continue;
	                        } else if (rejected) {
	                            if (!onError) {
	                                promise.reject(this.error);
	                                continue;
	                            }
	                            try {
	                                _result2 = onError(this.error);
	                            } catch (err) {
	                                promise.reject(err);
	                                continue;
	                            }
	                        }
	                        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
	                            _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error);
	                            _result2.errorHandled = !0;
	                        } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
	                    }
	                    handlers.length = 0;
	                    this.dispatching = !1;
	                    endActive();
	                }
	            };
	            _proto.then = function(onSuccess, onError) {
	                if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
	                if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
	                var promise = new ZalgoPromise;
	                this.handlers.push({
	                    promise: promise,
	                    onSuccess: onSuccess,
	                    onError: onError
	                });
	                this.errorHandled = !0;
	                this.dispatch();
	                return promise;
	            };
	            _proto.catch = function(onError) {
	                return this.then(void 0, onError);
	            };
	            _proto.finally = function(onFinally) {
	                if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
	                return this.then((function(result) {
	                    return ZalgoPromise.try(onFinally).then((function() {
	                        return result;
	                    }));
	                }), (function(err) {
	                    return ZalgoPromise.try(onFinally).then((function() {
	                        throw err;
	                    }));
	                }));
	            };
	            _proto.timeout = function(time, err) {
	                var _this3 = this;
	                if (this.resolved || this.rejected) return this;
	                var timeout = setTimeout((function() {
	                    _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
	                }), time);
	                return this.then((function(result) {
	                    clearTimeout(timeout);
	                    return result;
	                }));
	            };
	            _proto.toPromise = function() {
	                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
	                return Promise.resolve(this);
	            };
	            ZalgoPromise.resolve = function(value) {
	                return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
	                    return value.then(resolve, reject);
	                })) : (new ZalgoPromise).resolve(value);
	            };
	            ZalgoPromise.reject = function(error) {
	                return (new ZalgoPromise).reject(error);
	            };
	            ZalgoPromise.asyncReject = function(error) {
	                return (new ZalgoPromise).asyncReject(error);
	            };
	            ZalgoPromise.all = function(promises) {
	                var promise = new ZalgoPromise;
	                var count = promises.length;
	                var results = [];
	                if (!count) {
	                    promise.resolve(results);
	                    return promise;
	                }
	                var chain = function(i, firstPromise, secondPromise) {
	                    return firstPromise.then((function(res) {
	                        results[i] = res;
	                        0 == (count -= 1) && promise.resolve(results);
	                    }), (function(err) {
	                        secondPromise.reject(err);
	                    }));
	                };
	                for (var i = 0; i < promises.length; i++) {
	                    var prom = promises[i];
	                    if (prom instanceof ZalgoPromise) {
	                        if (prom.resolved) {
	                            results[i] = prom.value;
	                            count -= 1;
	                            continue;
	                        }
	                    } else if (!utils_isPromise(prom)) {
	                        results[i] = prom;
	                        count -= 1;
	                        continue;
	                    }
	                    chain(i, ZalgoPromise.resolve(prom), promise);
	                }
	                0 === count && promise.resolve(results);
	                return promise;
	            };
	            ZalgoPromise.hash = function(promises) {
	                var result = {};
	                var awaitPromises = [];
	                var _loop = function(key) {
	                    if (promises.hasOwnProperty(key)) {
	                        var value = promises[key];
	                        utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
	                            result[key] = res;
	                        }))) : result[key] = value;
	                    }
	                };
	                for (var key in promises) _loop(key);
	                return ZalgoPromise.all(awaitPromises).then((function() {
	                    return result;
	                }));
	            };
	            ZalgoPromise.map = function(items, method) {
	                return ZalgoPromise.all(items.map(method));
	            };
	            ZalgoPromise.onPossiblyUnhandledException = function(handler) {
	                return function(handler) {
	                    possiblyUnhandledPromiseHandlers.push(handler);
	                    return {
	                        cancel: function() {
	                            possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
	                        }
	                    };
	                }(handler);
	            };
	            ZalgoPromise.try = function(method, context, args) {
	                if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
	                var result;
	                startActive();
	                try {
	                    result = method.apply(context, args || []);
	                } catch (err) {
	                    endActive();
	                    return ZalgoPromise.reject(err);
	                }
	                endActive();
	                return ZalgoPromise.resolve(result);
	            };
	            ZalgoPromise.delay = function(_delay) {
	                return new ZalgoPromise((function(resolve) {
	                    setTimeout(resolve, _delay);
	                }));
	            };
	            ZalgoPromise.isPromise = function(value) {
	                return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
	            };
	            ZalgoPromise.flush = function() {
	                return function(Zalgo) {
	                    var promise = flushPromise = flushPromise || new Zalgo;
	                    flushActive();
	                    return promise;
	                }(ZalgoPromise);
	            };
	            return ZalgoPromise;
	        }();
	        function isRegex(item) {
	            return "[object RegExp]" === {}.toString.call(item);
	        }
	        var WINDOW_TYPE = {
	            IFRAME: "iframe",
	            POPUP: "popup"
	        };
	        var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
	        function isAboutProtocol(win) {
	            void 0 === win && (win = window);
	            return "about:" === win.location.protocol;
	        }
	        function utils_getParent(win) {
	            void 0 === win && (win = window);
	            if (win) try {
	                if (win.parent && win.parent !== win) return win.parent;
	            } catch (err) {}
	        }
	        function getOpener(win) {
	            void 0 === win && (win = window);
	            if (win && !utils_getParent(win)) try {
	                return win.opener;
	            } catch (err) {}
	        }
	        function canReadFromWindow(win) {
	            try {
	                return !0;
	            } catch (err) {}
	            return !1;
	        }
	        function getActualDomain(win) {
	            void 0 === win && (win = window);
	            var location = win.location;
	            if (!location) throw new Error("Can not read window location");
	            var protocol = location.protocol;
	            if (!protocol) throw new Error("Can not read window protocol");
	            if ("file:" === protocol) return "file://";
	            if ("about:" === protocol) {
	                var parent = utils_getParent(win);
	                return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
	            }
	            var host = location.host;
	            if (!host) throw new Error("Can not read window host");
	            return protocol + "//" + host;
	        }
	        function getDomain(win) {
	            void 0 === win && (win = window);
	            var domain = getActualDomain(win);
	            return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
	        }
	        function isSameDomain(win) {
	            if (!function(win) {
	                try {
	                    if (win === window) return !0;
	                } catch (err) {}
	                try {
	                    var desc = Object.getOwnPropertyDescriptor(win, "location");
	                    if (desc && !1 === desc.enumerable) return !1;
	                } catch (err) {}
	                try {
	                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
	                } catch (err) {}
	                try {
	                    if (getActualDomain(win) === getActualDomain(window)) return !0;
	                } catch (err) {}
	                return !1;
	            }(win)) return !1;
	            try {
	                if (win === window) return !0;
	                if (isAboutProtocol(win) && canReadFromWindow()) return !0;
	                if (getDomain(window) === getDomain(win)) return !0;
	            } catch (err) {}
	            return !1;
	        }
	        function assertSameDomain(win) {
	            if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
	            return win;
	        }
	        function isAncestorParent(parent, child) {
	            if (!parent || !child) return !1;
	            var childParent = utils_getParent(child);
	            return childParent ? childParent === parent : -1 !== function(win) {
	                var result = [];
	                try {
	                    for (;win.parent !== win; ) {
	                        result.push(win.parent);
	                        win = win.parent;
	                    }
	                } catch (err) {}
	                return result;
	            }(child).indexOf(parent);
	        }
	        function getFrames(win) {
	            var result = [];
	            var frames;
	            try {
	                frames = win.frames;
	            } catch (err) {
	                frames = win;
	            }
	            var len;
	            try {
	                len = frames.length;
	            } catch (err) {}
	            if (0 === len) return result;
	            if (len) {
	                for (var i = 0; i < len; i++) {
	                    var frame = void 0;
	                    try {
	                        frame = frames[i];
	                    } catch (err) {
	                        continue;
	                    }
	                    result.push(frame);
	                }
	                return result;
	            }
	            for (var _i = 0; _i < 100; _i++) {
	                var _frame = void 0;
	                try {
	                    _frame = frames[_i];
	                } catch (err) {
	                    return result;
	                }
	                if (!_frame) return result;
	                result.push(_frame);
	            }
	            return result;
	        }
	        function getAllChildFrames(win) {
	            var result = [];
	            for (var _i3 = 0, _getFrames2 = getFrames(win); _i3 < _getFrames2.length; _i3++) {
	                var frame = _getFrames2[_i3];
	                result.push(frame);
	                for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame); _i5 < _getAllChildFrames2.length; _i5++) result.push(_getAllChildFrames2[_i5]);
	            }
	            return result;
	        }
	        function getTop(win) {
	            void 0 === win && (win = window);
	            try {
	                if (win.top) return win.top;
	            } catch (err) {}
	            if (utils_getParent(win) === win) return win;
	            try {
	                if (isAncestorParent(window, win) && window.top) return window.top;
	            } catch (err) {}
	            try {
	                if (isAncestorParent(win, window) && window.top) return window.top;
	            } catch (err) {}
	            for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win); _i7 < _getAllChildFrames4.length; _i7++) {
	                var frame = _getAllChildFrames4[_i7];
	                try {
	                    if (frame.top) return frame.top;
	                } catch (err) {}
	                if (utils_getParent(frame) === frame) return frame;
	            }
	        }
	        function getAllFramesInWindow(win) {
	            var top = getTop(win);
	            if (!top) throw new Error("Can not determine top window");
	            var result = [].concat(getAllChildFrames(top), [ top ]);
	            -1 === result.indexOf(win) && (result = [].concat(result, [ win ], getAllChildFrames(win)));
	            return result;
	        }
	        var iframeWindows = [];
	        var iframeFrames = [];
	        function isWindowClosed(win, allowMock) {
	            void 0 === allowMock && (allowMock = !0);
	            try {
	                if (win === window) return !1;
	            } catch (err) {
	                return !0;
	            }
	            try {
	                if (!win) return !0;
	            } catch (err) {
	                return !0;
	            }
	            try {
	                if (win.closed) return !0;
	            } catch (err) {
	                return !err || err.message !== IE_WIN_ACCESS_ERROR;
	            }
	            if (allowMock && isSameDomain(win)) try {
	                if (win.mockclosed) return !0;
	            } catch (err) {}
	            try {
	                if (!win.parent || !win.top) return !0;
	            } catch (err) {}
	            var iframeIndex = function(collection, item) {
	                for (var i = 0; i < collection.length; i++) try {
	                    if (collection[i] === item) return i;
	                } catch (err) {}
	                return -1;
	            }(iframeWindows, win);
	            if (-1 !== iframeIndex) {
	                var frame = iframeFrames[iframeIndex];
	                if (frame && function(frame) {
	                    if (!frame.contentWindow) return !0;
	                    if (!frame.parentNode) return !0;
	                    var doc = frame.ownerDocument;
	                    if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
	                        var parent = frame;
	                        for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
	                        if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
	                    }
	                    return !1;
	                }(frame)) return !0;
	            }
	            return !1;
	        }
	        function getAncestor(win) {
	            void 0 === win && (win = window);
	            return getOpener(win = win || window) || utils_getParent(win) || void 0;
	        }
	        function anyMatch(collection1, collection2) {
	            for (var _i17 = 0; _i17 < collection1.length; _i17++) {
	                var item1 = collection1[_i17];
	                for (var _i19 = 0; _i19 < collection2.length; _i19++) if (item1 === collection2[_i19]) return !0;
	            }
	            return !1;
	        }
	        function getDistanceFromTop(win) {
	            void 0 === win && (win = window);
	            var distance = 0;
	            var parent = win;
	            for (;parent; ) (parent = utils_getParent(parent)) && (distance += 1);
	            return distance;
	        }
	        function isSameTopWindow(win1, win2) {
	            var top1 = getTop(win1) || win1;
	            var top2 = getTop(win2) || win2;
	            try {
	                if (top1 && top2) return top1 === top2;
	            } catch (err) {}
	            var allFrames1 = getAllFramesInWindow(win1);
	            var allFrames2 = getAllFramesInWindow(win2);
	            if (anyMatch(allFrames1, allFrames2)) return !0;
	            var opener1 = getOpener(top1);
	            var opener2 = getOpener(top2);
	            return opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2) || opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1), 
	            !1;
	        }
	        function matchDomain(pattern, origin) {
	            if ("string" == typeof pattern) {
	                if ("string" == typeof origin) return "*" === pattern || origin === pattern;
	                if (isRegex(origin)) return !1;
	                if (Array.isArray(origin)) return !1;
	            }
	            return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some((function(subpattern) {
	                return matchDomain(subpattern, origin);
	            })));
	        }
	        function getDomainFromUrl(url) {
	            return url.match(/^(https?|mock|file):\/\//) ? url.split("/").slice(0, 3).join("/") : getDomain();
	        }
	        function onCloseWindow(win, callback, delay, maxtime) {
	            void 0 === delay && (delay = 1e3);
	            void 0 === maxtime && (maxtime = 1 / 0);
	            var timeout;
	            !function check() {
	                if (isWindowClosed(win)) {
	                    timeout && clearTimeout(timeout);
	                    return callback();
	                }
	                if (maxtime <= 0) clearTimeout(timeout); else {
	                    maxtime -= delay;
	                    timeout = setTimeout(check, delay);
	                }
	            }();
	            return {
	                cancel: function() {
	                    timeout && clearTimeout(timeout);
	                }
	            };
	        }
	        function isWindow(obj) {
	            try {
	                if (obj === window) return !0;
	            } catch (err) {
	                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
	            }
	            try {
	                if ("[object Window]" === {}.toString.call(obj)) return !0;
	            } catch (err) {
	                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
	            }
	            try {
	                if (window.Window && obj instanceof window.Window) return !0;
	            } catch (err) {
	                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
	            }
	            try {
	                if (obj && obj.self === obj) return !0;
	            } catch (err) {
	                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
	            }
	            try {
	                if (obj && obj.parent === obj) return !0;
	            } catch (err) {
	                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
	            }
	            try {
	                if (obj && obj.top === obj) return !0;
	            } catch (err) {
	                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
	            }
	            try {
	                if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
	            } catch (err) {
	                return !0;
	            }
	            try {
	                if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
	            } catch (err) {}
	            return !1;
	        }
	        function closeWindow(win) {
	            try {
	                win.close();
	            } catch (err) {}
	        }
	        function util_safeIndexOf(collection, item) {
	            for (var i = 0; i < collection.length; i++) try {
	                if (collection[i] === item) return i;
	            } catch (err) {}
	            return -1;
	        }
	        var weakmap_CrossDomainSafeWeakMap = function() {
	            function CrossDomainSafeWeakMap() {
	                this.name = void 0;
	                this.weakmap = void 0;
	                this.keys = void 0;
	                this.values = void 0;
	                this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
	                if (function() {
	                    if ("undefined" == typeof WeakMap) return !1;
	                    if (void 0 === Object.freeze) return !1;
	                    try {
	                        var testWeakMap = new WeakMap;
	                        var testKey = {};
	                        Object.freeze(testKey);
	                        testWeakMap.set(testKey, "__testvalue__");
	                        return "__testvalue__" === testWeakMap.get(testKey);
	                    } catch (err) {
	                        return !1;
	                    }
	                }()) try {
	                    this.weakmap = new WeakMap;
	                } catch (err) {}
	                this.keys = [];
	                this.values = [];
	            }
	            var _proto = CrossDomainSafeWeakMap.prototype;
	            _proto._cleanupClosedWindows = function() {
	                var weakmap = this.weakmap;
	                var keys = this.keys;
	                for (var i = 0; i < keys.length; i++) {
	                    var value = keys[i];
	                    if (isWindow(value) && isWindowClosed(value)) {
	                        if (weakmap) try {
	                            weakmap.delete(value);
	                        } catch (err) {}
	                        keys.splice(i, 1);
	                        this.values.splice(i, 1);
	                        i -= 1;
	                    }
	                }
	            };
	            _proto.isSafeToReadWrite = function(key) {
	                return !isWindow(key);
	            };
	            _proto.set = function(key, value) {
	                if (!key) throw new Error("WeakMap expected key");
	                var weakmap = this.weakmap;
	                if (weakmap) try {
	                    weakmap.set(key, value);
	                } catch (err) {
	                    delete this.weakmap;
	                }
	                if (this.isSafeToReadWrite(key)) try {
	                    var name = this.name;
	                    var entry = key[name];
	                    entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
	                        value: [ key, value ],
	                        writable: !0
	                    });
	                    return;
	                } catch (err) {}
	                this._cleanupClosedWindows();
	                var keys = this.keys;
	                var values = this.values;
	                var index = util_safeIndexOf(keys, key);
	                if (-1 === index) {
	                    keys.push(key);
	                    values.push(value);
	                } else values[index] = value;
	            };
	            _proto.get = function(key) {
	                if (!key) throw new Error("WeakMap expected key");
	                var weakmap = this.weakmap;
	                if (weakmap) try {
	                    if (weakmap.has(key)) return weakmap.get(key);
	                } catch (err) {
	                    delete this.weakmap;
	                }
	                if (this.isSafeToReadWrite(key)) try {
	                    var entry = key[this.name];
	                    return entry && entry[0] === key ? entry[1] : void 0;
	                } catch (err) {}
	                this._cleanupClosedWindows();
	                var index = util_safeIndexOf(this.keys, key);
	                if (-1 !== index) return this.values[index];
	            };
	            _proto.delete = function(key) {
	                if (!key) throw new Error("WeakMap expected key");
	                var weakmap = this.weakmap;
	                if (weakmap) try {
	                    weakmap.delete(key);
	                } catch (err) {
	                    delete this.weakmap;
	                }
	                if (this.isSafeToReadWrite(key)) try {
	                    var entry = key[this.name];
	                    entry && entry[0] === key && (entry[0] = entry[1] = void 0);
	                } catch (err) {}
	                this._cleanupClosedWindows();
	                var keys = this.keys;
	                var index = util_safeIndexOf(keys, key);
	                if (-1 !== index) {
	                    keys.splice(index, 1);
	                    this.values.splice(index, 1);
	                }
	            };
	            _proto.has = function(key) {
	                if (!key) throw new Error("WeakMap expected key");
	                var weakmap = this.weakmap;
	                if (weakmap) try {
	                    if (weakmap.has(key)) return !0;
	                } catch (err) {
	                    delete this.weakmap;
	                }
	                if (this.isSafeToReadWrite(key)) try {
	                    var entry = key[this.name];
	                    return !(!entry || entry[0] !== key);
	                } catch (err) {}
	                this._cleanupClosedWindows();
	                return -1 !== util_safeIndexOf(this.keys, key);
	            };
	            _proto.getOrSet = function(key, getter) {
	                if (this.has(key)) return this.get(key);
	                var value = getter();
	                this.set(key, value);
	                return value;
	            };
	            return CrossDomainSafeWeakMap;
	        }();
	        function _getPrototypeOf(o) {
	            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
	                return o.__proto__ || Object.getPrototypeOf(o);
	            })(o);
	        }
	        function _setPrototypeOf(o, p) {
	            return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
	                o.__proto__ = p;
	                return o;
	            })(o, p);
	        }
	        function _isNativeReflectConstruct() {
	            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
	            if (Reflect.construct.sham) return !1;
	            if ("function" == typeof Proxy) return !0;
	            try {
	                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
	                return !0;
	            } catch (e) {
	                return !1;
	            }
	        }
	        function construct_construct(Parent, args, Class) {
	            return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
	                var a = [ null ];
	                a.push.apply(a, args);
	                var instance = new (Function.bind.apply(Parent, a));
	                Class && _setPrototypeOf(instance, Class.prototype);
	                return instance;
	            }).apply(null, arguments);
	        }
	        function wrapNativeSuper_wrapNativeSuper(Class) {
	            var _cache = "function" == typeof Map ? new Map : void 0;
	            return (wrapNativeSuper_wrapNativeSuper = function(Class) {
	                if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
	                var fn;
	                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
	                if (void 0 !== _cache) {
	                    if (_cache.has(Class)) return _cache.get(Class);
	                    _cache.set(Class, Wrapper);
	                }
	                function Wrapper() {
	                    return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
	                }
	                Wrapper.prototype = Object.create(Class.prototype, {
	                    constructor: {
	                        value: Wrapper,
	                        enumerable: !1,
	                        writable: !0,
	                        configurable: !0
	                    }
	                });
	                return _setPrototypeOf(Wrapper, Class);
	            })(Class);
	        }
	        function getFunctionName(fn) {
	            return fn.name || fn.__name__ || fn.displayName || "anonymous";
	        }
	        function setFunctionName(fn, name) {
	            try {
	                delete fn.name;
	                fn.name = name;
	            } catch (err) {}
	            fn.__name__ = fn.displayName = name;
	            return fn;
	        }
	        function base64encode(str) {
	            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
	                return String.fromCharCode(parseInt(p1, 16));
	            })));
	            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
	            throw new Error("Can not find window.btoa or Buffer");
	        }
	        function uniqueID() {
	            var chars = "0123456789abcdef";
	            return "xxxxxxxxxx".replace(/./g, (function() {
	                return chars.charAt(Math.floor(Math.random() * chars.length));
	            })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	        }
	        var objectIDs;
	        function serializeArgs(args) {
	            try {
	                return JSON.stringify([].slice.call(args), (function(subkey, val) {
	                    return "function" == typeof val ? "memoize[" + function(obj) {
	                        objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
	                        if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
	                        var uid = objectIDs.get(obj);
	                        if (!uid) {
	                            uid = typeof obj + ":" + uniqueID();
	                            objectIDs.set(obj, uid);
	                        }
	                        return uid;
	                    }(val) + "]" : val;
	                }));
	            } catch (err) {
	                throw new Error("Arguments not serializable -- can not be used to memoize");
	            }
	        }
	        function getEmptyObject() {
	            return {};
	        }
	        var memoizeGlobalIndex = 0;
	        var memoizeGlobalIndexValidFrom = 0;
	        function memoize(method, options) {
	            void 0 === options && (options = {});
	            var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
	            var simpleCache;
	            var thisCache;
	            var memoizeIndex = memoizeGlobalIndex;
	            memoizeGlobalIndex += 1;
	            var memoizedFunction = function() {
	                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	                if (memoizeIndex < memoizeGlobalIndexValidFrom) {
	                    simpleCache = null;
	                    thisCache = null;
	                    memoizeIndex = memoizeGlobalIndex;
	                    memoizeGlobalIndex += 1;
	                }
	                var cache;
	                cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
	                var cacheKey = serializeArgs(args);
	                var cacheResult = cache[cacheKey];
	                if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
	                    delete cache[cacheKey];
	                    cacheResult = null;
	                }
	                if (cacheResult) return cacheResult.value;
	                var time = Date.now();
	                var value = method.apply(this, arguments);
	                cache[cacheKey] = {
	                    time: time,
	                    value: value
	                };
	                return value;
	            };
	            memoizedFunction.reset = function() {
	                simpleCache = null;
	                thisCache = null;
	            };
	            return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
	        }
	        memoize.clear = function() {
	            memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
	        };
	        function memoizePromise(method) {
	            var cache = {};
	            function memoizedPromiseFunction() {
	                var _arguments = arguments, _this = this;
	                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
	                var key = serializeArgs(args);
	                if (cache.hasOwnProperty(key)) return cache[key];
	                cache[key] = promise_ZalgoPromise.try((function() {
	                    return method.apply(_this, _arguments);
	                })).finally((function() {
	                    delete cache[key];
	                }));
	                return cache[key];
	            }
	            memoizedPromiseFunction.reset = function() {
	                cache = {};
	            };
	            return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
	        }
	        function inlineMemoize(method, logic, args) {
	            void 0 === args && (args = []);
	            var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
	            var key = serializeArgs(args);
	            return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
	        }
	        function src_util_noop() {}
	        function once(method) {
	            var called = !1;
	            return setFunctionName((function() {
	                if (!called) {
	                    called = !0;
	                    return method.apply(this, arguments);
	                }
	            }), getFunctionName(method) + "::once");
	        }
	        function stringifyError(err, level) {
	            void 0 === level && (level = 1);
	            if (level >= 3) return "stringifyError stack overflow";
	            try {
	                if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
	                if ("string" == typeof err) return err;
	                if (err instanceof Error) {
	                    var stack = err && err.stack;
	                    var message = err && err.message;
	                    if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
	                    if (stack) return stack;
	                    if (message) return message;
	                }
	                return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
	            } catch (newErr) {
	                return "Error while stringifying error: " + stringifyError(newErr, level + 1);
	            }
	        }
	        function stringify(item) {
	            return "string" == typeof item ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item);
	        }
	        function extend(obj, source) {
	            if (!source) return obj;
	            if (Object.assign) return Object.assign(obj, source);
	            for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
	            return obj;
	        }
	        memoize((function(obj) {
	            if (Object.values) return Object.values(obj);
	            var result = [];
	            for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
	            return result;
	        }));
	        function identity(item) {
	            return item;
	        }
	        function safeInterval(method, time) {
	            var timeout;
	            !function loop() {
	                timeout = setTimeout((function() {
	                    method();
	                    loop();
	                }), time);
	            }();
	            return {
	                cancel: function() {
	                    clearTimeout(timeout);
	                }
	            };
	        }
	        function defineLazyProp(obj, key, getter) {
	            if (Array.isArray(obj)) {
	                if ("number" != typeof key) throw new TypeError("Array key must be number");
	            } else if ("object" == typeof obj && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
	            Object.defineProperty(obj, key, {
	                configurable: !0,
	                enumerable: !0,
	                get: function() {
	                    delete obj[key];
	                    var value = getter();
	                    obj[key] = value;
	                    return value;
	                },
	                set: function(value) {
	                    delete obj[key];
	                    obj[key] = value;
	                }
	            });
	        }
	        function arrayFrom(item) {
	            return [].slice.call(item);
	        }
	        function isObjectObject(obj) {
	            return "object" == typeof (item = obj) && null !== item && "[object Object]" === {}.toString.call(obj);
	            var item;
	        }
	        function isPlainObject(obj) {
	            if (!isObjectObject(obj)) return !1;
	            var constructor = obj.constructor;
	            if ("function" != typeof constructor) return !1;
	            var prototype = constructor.prototype;
	            return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
	        }
	        function replaceObject(item, replacer, fullKey) {
	            void 0 === fullKey && (fullKey = "");
	            if (Array.isArray(item)) {
	                var length = item.length;
	                var result = [];
	                var _loop2 = function(i) {
	                    defineLazyProp(result, i, (function() {
	                        var itemKey = fullKey ? fullKey + "." + i : "" + i;
	                        var child = replacer(item[i], i, itemKey);
	                        (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
	                        return child;
	                    }));
	                };
	                for (var i = 0; i < length; i++) _loop2(i);
	                return result;
	            }
	            if (isPlainObject(item)) {
	                var _result = {};
	                var _loop3 = function(key) {
	                    if (!item.hasOwnProperty(key)) return "continue";
	                    defineLazyProp(_result, key, (function() {
	                        var itemKey = fullKey ? fullKey + "." + key : "" + key;
	                        var child = replacer(item[key], key, itemKey);
	                        (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
	                        return child;
	                    }));
	                };
	                for (var key in item) _loop3(key);
	                return _result;
	            }
	            throw new Error("Pass an object or array");
	        }
	        function isDefined(value) {
	            return null != value;
	        }
	        function util_isRegex(item) {
	            return "[object RegExp]" === {}.toString.call(item);
	        }
	        function util_getOrSet(obj, key, getter) {
	            if (obj.hasOwnProperty(key)) return obj[key];
	            var val = getter();
	            obj[key] = val;
	            return val;
	        }
	        function cleanup(obj) {
	            var tasks = [];
	            var cleaned = !1;
	            var cleanErr;
	            return {
	                set: function(name, item) {
	                    if (!cleaned) {
	                        obj[name] = item;
	                        this.register((function() {
	                            delete obj[name];
	                        }));
	                    }
	                    return item;
	                },
	                register: function(method) {
	                    cleaned ? method(cleanErr) : tasks.push(once((function() {
	                        return method(cleanErr);
	                    })));
	                },
	                all: function(err) {
	                    cleanErr = err;
	                    var results = [];
	                    cleaned = !0;
	                    for (;tasks.length; ) {
	                        var task = tasks.shift();
	                        results.push(task());
	                    }
	                    return promise_ZalgoPromise.all(results).then(src_util_noop);
	                }
	            };
	        }
	        function assertExists(name, thing) {
	            if (null == thing) throw new Error("Expected " + name + " to be present");
	            return thing;
	        }
	        var util_ExtendableError = function(_Error) {
	            _inheritsLoose(ExtendableError, _Error);
	            function ExtendableError(message) {
	                var _this6;
	                (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
	                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
	                    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	                    return self;
	                }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
	                return _this6;
	            }
	            return ExtendableError;
	        }(wrapNativeSuper_wrapNativeSuper(Error));
	        function isDocumentReady() {
	            return Boolean(document.body) && "complete" === document.readyState;
	        }
	        function isDocumentInteractive() {
	            return Boolean(document.body) && "interactive" === document.readyState;
	        }
	        function urlEncode(str) {
	            return str.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B");
	        }
	        memoize((function() {
	            return new promise_ZalgoPromise((function(resolve) {
	                if (isDocumentReady() || isDocumentInteractive()) return resolve();
	                var interval = setInterval((function() {
	                    if (isDocumentReady() || isDocumentInteractive()) {
	                        clearInterval(interval);
	                        return resolve();
	                    }
	                }), 10);
	            }));
	        }));
	        function parseQuery(queryString) {
	            return inlineMemoize(parseQuery, (function() {
	                var params = {};
	                if (!queryString) return params;
	                if (-1 === queryString.indexOf("=")) return params;
	                for (var _i2 = 0, _queryString$split2 = queryString.split("&"); _i2 < _queryString$split2.length; _i2++) {
	                    var pair = _queryString$split2[_i2];
	                    (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
	                }
	                return params;
	            }), [ queryString ]);
	        }
	        function extendQuery(originalQuery, props) {
	            void 0 === props && (props = {});
	            return props && Object.keys(props).length ? function(obj) {
	                void 0 === obj && (obj = {});
	                return Object.keys(obj).filter((function(key) {
	                    return "string" == typeof obj[key];
	                })).map((function(key) {
	                    return urlEncode(key) + "=" + urlEncode(obj[key]);
	                })).join("&");
	            }(_extends({}, parseQuery(originalQuery), props)) : originalQuery;
	        }
	        function appendChild(container, child) {
	            container.appendChild(child);
	        }
	        function isElement(element) {
	            return element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument;
	        }
	        function getElementSafe(id, doc) {
	            void 0 === doc && (doc = document);
	            return isElement(id) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
	        }
	        function elementReady(id) {
	            return new promise_ZalgoPromise((function(resolve, reject) {
	                var name = stringify(id);
	                var el = getElementSafe(id);
	                if (el) return resolve(el);
	                if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
	                var interval = setInterval((function() {
	                    if (el = getElementSafe(id)) {
	                        clearInterval(interval);
	                        return resolve(el);
	                    }
	                    if (isDocumentReady()) {
	                        clearInterval(interval);
	                        return reject(new Error("Document is ready and element " + name + " does not exist"));
	                    }
	                }), 10);
	            }));
	        }
	        var dom_PopupOpenError = function(_ExtendableError) {
	            _inheritsLoose(PopupOpenError, _ExtendableError);
	            function PopupOpenError() {
	                return _ExtendableError.apply(this, arguments) || this;
	            }
	            return PopupOpenError;
	        }(util_ExtendableError);
	        var awaitFrameLoadPromises;
	        function awaitFrameLoad(frame) {
	            if ((awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap).has(frame)) {
	                var _promise = awaitFrameLoadPromises.get(frame);
	                if (_promise) return _promise;
	            }
	            var promise = new promise_ZalgoPromise((function(resolve, reject) {
	                frame.addEventListener("load", (function() {
	                    !function(frame) {
	                        !function() {
	                            for (var i = 0; i < iframeWindows.length; i++) {
	                                var closed = !1;
	                                try {
	                                    closed = iframeWindows[i].closed;
	                                } catch (err) {}
	                                if (closed) {
	                                    iframeFrames.splice(i, 1);
	                                    iframeWindows.splice(i, 1);
	                                }
	                            }
	                        }();
	                        if (frame && frame.contentWindow) try {
	                            iframeWindows.push(frame.contentWindow);
	                            iframeFrames.push(frame);
	                        } catch (err) {}
	                    }(frame);
	                    resolve(frame);
	                }));
	                frame.addEventListener("error", (function(err) {
	                    frame.contentWindow ? resolve(frame) : reject(err);
	                }));
	            }));
	            awaitFrameLoadPromises.set(frame, promise);
	            return promise;
	        }
	        function awaitFrameWindow(frame) {
	            return awaitFrameLoad(frame).then((function(loadedFrame) {
	                if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
	                return loadedFrame.contentWindow;
	            }));
	        }
	        function dom_iframe(options, container) {
	            void 0 === options && (options = {});
	            var style = options.style || {};
	            var frame = function(tag, options, container) {
	                void 0 === tag && (tag = "div");
	                void 0 === options && (options = {});
	                tag = tag.toLowerCase();
	                var element = document.createElement(tag);
	                options.style && extend(element.style, options.style);
	                options.class && (element.className = options.class.join(" "));
	                options.id && element.setAttribute("id", options.id);
	                if (options.attributes) for (var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++) {
	                    var key = _Object$keys2[_i10];
	                    element.setAttribute(key, options.attributes[key]);
	                }
	                options.styleSheet && function(el, styleText, doc) {
	                    void 0 === doc && (doc = window.document);
	                    el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
	                }(element, options.styleSheet);
	                if (options.html) {
	                    if ("iframe" === tag) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
	                    element.innerHTML = options.html;
	                }
	                return element;
	            }("iframe", {
	                attributes: _extends({
	                    allowTransparency: "true"
	                }, options.attributes || {}),
	                style: _extends({
	                    backgroundColor: "transparent",
	                    border: "none"
	                }, style),
	                html: options.html,
	                class: options.class
	            });
	            var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);
	            frame.hasAttribute("id") || frame.setAttribute("id", uniqueID());
	            awaitFrameLoad(frame);
	            container && function(id, doc) {
	                void 0 === doc && (doc = document);
	                var element = getElementSafe(id, doc);
	                if (element) return element;
	                throw new Error("Can not find element: " + stringify(id));
	            }(container).appendChild(frame);
	            (options.url || isIE) && frame.setAttribute("src", options.url || "about:blank");
	            return frame;
	        }
	        function addEventListener(obj, event, handler) {
	            obj.addEventListener(event, handler);
	            return {
	                cancel: function() {
	                    obj.removeEventListener(event, handler);
	                }
	            };
	        }
	        function showElement(element) {
	            element.style.setProperty("display", "");
	        }
	        function hideElement(element) {
	            element.style.setProperty("display", "none", "important");
	        }
	        function destroyElement(element) {
	            element && element.parentNode && element.parentNode.removeChild(element);
	        }
	        function isElementClosed(el) {
	            return !(el && el.parentNode && el.ownerDocument && el.ownerDocument.documentElement && el.ownerDocument.documentElement.contains(el));
	        }
	        function onResize(el, handler, _temp) {
	            var _ref2 = void 0 === _temp ? {} : _temp, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win;
	            var currentWidth = el.offsetWidth;
	            var currentHeight = el.offsetHeight;
	            var canceled = !1;
	            handler({
	                width: currentWidth,
	                height: currentHeight
	            });
	            var check = function() {
	                if (!canceled && function(el) {
	                    return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	                }(el)) {
	                    var newWidth = el.offsetWidth;
	                    var newHeight = el.offsetHeight;
	                    (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
	                        width: newWidth,
	                        height: newHeight
	                    });
	                    currentWidth = newWidth;
	                    currentHeight = newHeight;
	                }
	            };
	            var observer;
	            var timeout;
	            win.addEventListener("resize", check);
	            if (void 0 !== win.ResizeObserver) {
	                (observer = new win.ResizeObserver(check)).observe(el);
	                timeout = safeInterval(check, 10 * interval);
	            } else if (void 0 !== win.MutationObserver) {
	                (observer = new win.MutationObserver(check)).observe(el, {
	                    attributes: !0,
	                    childList: !0,
	                    subtree: !0,
	                    characterData: !1
	                });
	                timeout = safeInterval(check, 10 * interval);
	            } else timeout = safeInterval(check, interval);
	            return {
	                cancel: function() {
	                    canceled = !0;
	                    observer.disconnect();
	                    window.removeEventListener("resize", check);
	                    timeout.cancel();
	                }
	            };
	        }
	        function isShadowElement(element) {
	            for (;element.parentNode; ) element = element.parentNode;
	            return "[object ShadowRoot]" === element.toString();
	        }
	        var currentScript = "undefined" != typeof document ? document.currentScript : null;
	        var getCurrentScript = memoize((function() {
	            if (currentScript) return currentScript;
	            if (currentScript = function() {
	                try {
	                    var stack = function() {
	                        try {
	                            throw new Error("_");
	                        } catch (err) {
	                            return err.stack || "";
	                        }
	                    }();
	                    var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
	                    var scriptLocation = stackDetails && stackDetails[1];
	                    if (!scriptLocation) return;
	                    for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
	                        var script = _Array$prototype$slic2[_i22];
	                        if (script.src && script.src === scriptLocation) return script;
	                    }
	                } catch (err) {}
	            }()) return currentScript;
	            throw new Error("Can not determine current script");
	        }));
	        var currentUID = uniqueID();
	        memoize((function() {
	            var script;
	            try {
	                script = getCurrentScript();
	            } catch (err) {
	                return currentUID;
	            }
	            var uid = script.getAttribute("data-uid");
	            if (uid && "string" == typeof uid) return uid;
	            if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
	            uid = uniqueID();
	            script.setAttribute("data-uid-auto", uid);
	            return uid;
	        }));
	        function toPx(val) {
	            return function(val) {
	                if ("number" == typeof val) return val;
	                var match = val.match(/^([0-9]+)(px|%)$/);
	                if (!match) throw new Error("Could not match css value from " + val);
	                return parseInt(match[1], 10);
	            }(val) + "px";
	        }
	        function toCSS(val) {
	            return "number" == typeof val ? toPx(val) : "string" == typeof (str = val) && /^[0-9]+%$/.test(str) ? val : toPx(val);
	            var str;
	        }
	        function global_getGlobal(win) {
	            void 0 === win && (win = window);
	            var globalKey = "__post_robot_10_0_42__";
	            return win !== window ? win[globalKey] : win[globalKey] = win[globalKey] || {};
	        }
	        var getObj = function() {
	            return {};
	        };
	        function globalStore(key, defStore) {
	            void 0 === key && (key = "store");
	            void 0 === defStore && (defStore = getObj);
	            return util_getOrSet(global_getGlobal(), key, (function() {
	                var store = defStore();
	                return {
	                    has: function(storeKey) {
	                        return store.hasOwnProperty(storeKey);
	                    },
	                    get: function(storeKey, defVal) {
	                        return store.hasOwnProperty(storeKey) ? store[storeKey] : defVal;
	                    },
	                    set: function(storeKey, val) {
	                        store[storeKey] = val;
	                        return val;
	                    },
	                    del: function(storeKey) {
	                        delete store[storeKey];
	                    },
	                    getOrSet: function(storeKey, getter) {
	                        return util_getOrSet(store, storeKey, getter);
	                    },
	                    reset: function() {
	                        store = defStore();
	                    },
	                    keys: function() {
	                        return Object.keys(store);
	                    }
	                };
	            }));
	        }
	        var WildCard = function() {};
	        function getWildcard() {
	            var global = global_getGlobal();
	            global.WINDOW_WILDCARD = global.WINDOW_WILDCARD || new WildCard;
	            return global.WINDOW_WILDCARD;
	        }
	        function windowStore(key, defStore) {
	            void 0 === key && (key = "store");
	            void 0 === defStore && (defStore = getObj);
	            return globalStore("windowStore").getOrSet(key, (function() {
	                var winStore = new weakmap_CrossDomainSafeWeakMap;
	                var getStore = function(win) {
	                    return winStore.getOrSet(win, defStore);
	                };
	                return {
	                    has: function(win) {
	                        return getStore(win).hasOwnProperty(key);
	                    },
	                    get: function(win, defVal) {
	                        var store = getStore(win);
	                        return store.hasOwnProperty(key) ? store[key] : defVal;
	                    },
	                    set: function(win, val) {
	                        getStore(win)[key] = val;
	                        return val;
	                    },
	                    del: function(win) {
	                        delete getStore(win)[key];
	                    },
	                    getOrSet: function(win, getter) {
	                        return util_getOrSet(getStore(win), key, getter);
	                    }
	                };
	            }));
	        }
	        function getInstanceID() {
	            return globalStore("instance").getOrSet("instanceID", uniqueID);
	        }
	        function resolveHelloPromise(win, _ref) {
	            var domain = _ref.domain;
	            var helloPromises = windowStore("helloPromises");
	            var existingPromise = helloPromises.get(win);
	            existingPromise && existingPromise.resolve({
	                domain: domain
	            });
	            var newPromise = promise_ZalgoPromise.resolve({
	                domain: domain
	            });
	            helloPromises.set(win, newPromise);
	            return newPromise;
	        }
	        function sayHello(win, _ref4) {
	            return (0, _ref4.send)(win, "postrobot_hello", {
	                instanceID: getInstanceID()
	            }, {
	                domain: "*",
	                timeout: -1
	            }).then((function(_ref5) {
	                var origin = _ref5.origin, instanceID = _ref5.data.instanceID;
	                resolveHelloPromise(win, {
	                    domain: origin
	                });
	                return {
	                    win: win,
	                    domain: origin,
	                    instanceID: instanceID
	                };
	            }));
	        }
	        function getWindowInstanceID(win, _ref6) {
	            var send = _ref6.send;
	            return windowStore("windowInstanceIDPromises").getOrSet(win, (function() {
	                return sayHello(win, {
	                    send: send
	                }).then((function(_ref7) {
	                    return _ref7.instanceID;
	                }));
	            }));
	        }
	        function markWindowKnown(win) {
	            windowStore("knownWindows").set(win, !0);
	        }
	        function isSerializedType(item) {
	            return "object" == typeof item && null !== item && "string" == typeof item.__type__;
	        }
	        function determineType(val) {
	            return void 0 === val ? "undefined" : null === val ? "null" : Array.isArray(val) ? "array" : "function" == typeof val ? "function" : "object" == typeof val ? val instanceof Error ? "error" : "function" == typeof val.then ? "promise" : "[object RegExp]" === {}.toString.call(val) ? "regex" : "[object Date]" === {}.toString.call(val) ? "date" : "object" : "string" == typeof val ? "string" : "number" == typeof val ? "number" : "boolean" == typeof val ? "boolean" : void 0;
	        }
	        function serializeType(type, val) {
	            return {
	                __type__: type,
	                __val__: val
	            };
	        }
	        var _SERIALIZER;
	        var SERIALIZER = ((_SERIALIZER = {}).function = function() {}, _SERIALIZER.error = function(_ref) {
	            return serializeType("error", {
	                message: _ref.message,
	                stack: _ref.stack,
	                code: _ref.code,
	                data: _ref.data
	            });
	        }, _SERIALIZER.promise = function() {}, _SERIALIZER.regex = function(val) {
	            return serializeType("regex", val.source);
	        }, _SERIALIZER.date = function(val) {
	            return serializeType("date", val.toJSON());
	        }, _SERIALIZER.array = function(val) {
	            return val;
	        }, _SERIALIZER.object = function(val) {
	            return val;
	        }, _SERIALIZER.string = function(val) {
	            return val;
	        }, _SERIALIZER.number = function(val) {
	            return val;
	        }, _SERIALIZER.boolean = function(val) {
	            return val;
	        }, _SERIALIZER.null = function(val) {
	            return val;
	        }, _SERIALIZER);
	        var defaultSerializers = {};
	        var _DESERIALIZER;
	        var DESERIALIZER = ((_DESERIALIZER = {}).function = function() {
	            throw new Error("Function serialization is not implemented; nothing to deserialize");
	        }, _DESERIALIZER.error = function(_ref2) {
	            var stack = _ref2.stack, code = _ref2.code, data = _ref2.data;
	            var error = new Error(_ref2.message);
	            error.code = code;
	            data && (error.data = data);
	            error.stack = stack + "\n\n" + error.stack;
	            return error;
	        }, _DESERIALIZER.promise = function() {
	            throw new Error("Promise serialization is not implemented; nothing to deserialize");
	        }, _DESERIALIZER.regex = function(val) {
	            return new RegExp(val);
	        }, _DESERIALIZER.date = function(val) {
	            return new Date(val);
	        }, _DESERIALIZER.array = function(val) {
	            return val;
	        }, _DESERIALIZER.object = function(val) {
	            return val;
	        }, _DESERIALIZER.string = function(val) {
	            return val;
	        }, _DESERIALIZER.number = function(val) {
	            return val;
	        }, _DESERIALIZER.boolean = function(val) {
	            return val;
	        }, _DESERIALIZER.null = function(val) {
	            return val;
	        }, _DESERIALIZER);
	        var defaultDeserializers = {};
	        new promise_ZalgoPromise((function(resolve) {
	            if (window.document && window.document.body) return resolve(window.document.body);
	            var interval = setInterval((function() {
	                if (window.document && window.document.body) {
	                    clearInterval(interval);
	                    return resolve(window.document.body);
	                }
	            }), 10);
	        }));
	        function cleanupProxyWindows() {
	            var idToProxyWindow = globalStore("idToProxyWindow");
	            for (var _i2 = 0, _idToProxyWindow$keys2 = idToProxyWindow.keys(); _i2 < _idToProxyWindow$keys2.length; _i2++) {
	                var id = _idToProxyWindow$keys2[_i2];
	                idToProxyWindow.get(id).shouldClean() && idToProxyWindow.del(id);
	            }
	        }
	        function getSerializedWindow(winPromise, _ref) {
	            var send = _ref.send, _ref$id = _ref.id, id = void 0 === _ref$id ? uniqueID() : _ref$id;
	            var windowNamePromise = winPromise.then((function(win) {
	                if (isSameDomain(win)) return assertSameDomain(win).name;
	            }));
	            var windowTypePromise = winPromise.then((function(window) {
	                if (isWindowClosed(window)) throw new Error("Window is closed, can not determine type");
	                return getOpener(window) ? WINDOW_TYPE.POPUP : WINDOW_TYPE.IFRAME;
	            }));
	            windowNamePromise.catch(src_util_noop);
	            windowTypePromise.catch(src_util_noop);
	            return {
	                id: id,
	                getType: function() {
	                    return windowTypePromise;
	                },
	                getInstanceID: memoizePromise((function() {
	                    return winPromise.then((function(win) {
	                        return getWindowInstanceID(win, {
	                            send: send
	                        });
	                    }));
	                })),
	                close: function() {
	                    return winPromise.then(closeWindow);
	                },
	                getName: function() {
	                    return winPromise.then((function(win) {
	                        if (!isWindowClosed(win)) return isSameDomain(win) ? assertSameDomain(win).name : windowNamePromise;
	                    }));
	                },
	                focus: function() {
	                    return winPromise.then((function(win) {
	                        win.focus();
	                    }));
	                },
	                isClosed: function() {
	                    return winPromise.then((function(win) {
	                        return isWindowClosed(win);
	                    }));
	                },
	                setLocation: function(href) {
	                    return winPromise.then((function(win) {
	                        var domain = window.location.protocol + "//" + window.location.host;
	                        if (0 === href.indexOf("/")) href = "" + domain + href; else if (!href.match(/^https?:\/\//) && 0 !== href.indexOf(domain)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(href));
	                        if (isSameDomain(win)) try {
	                            if (win.location && "function" == typeof win.location.replace) {
	                                win.location.replace(href);
	                                return;
	                            }
	                        } catch (err) {}
	                        win.location = href;
	                    }));
	                },
	                setName: function(name) {
	                    return winPromise.then((function(win) {
	                        var sameDomain = isSameDomain(win);
	                        var frame = function(win) {
	                            if (isSameDomain(win)) return assertSameDomain(win).frameElement;
	                            for (var _i21 = 0, _document$querySelect2 = document.querySelectorAll("iframe"); _i21 < _document$querySelect2.length; _i21++) {
	                                var frame = _document$querySelect2[_i21];
	                                if (frame && frame.contentWindow && frame.contentWindow === win) return frame;
	                            }
	                        }(win);
	                        if (!sameDomain) throw new Error("Can not set name for cross-domain window: " + name);
	                        assertSameDomain(win).name = name;
	                        frame && frame.setAttribute("name", name);
	                        windowNamePromise = promise_ZalgoPromise.resolve(name);
	                    }));
	                }
	            };
	        }
	        var window_ProxyWindow = function() {
	            function ProxyWindow(_ref2) {
	                var send = _ref2.send, win = _ref2.win, serializedWindow = _ref2.serializedWindow;
	                this.id = void 0;
	                this.isProxyWindow = !0;
	                this.serializedWindow = void 0;
	                this.actualWindow = void 0;
	                this.actualWindowPromise = void 0;
	                this.send = void 0;
	                this.name = void 0;
	                this.actualWindowPromise = new promise_ZalgoPromise;
	                this.serializedWindow = serializedWindow || getSerializedWindow(this.actualWindowPromise, {
	                    send: send
	                });
	                globalStore("idToProxyWindow").set(this.getID(), this);
	                win && this.setWindow(win, {
	                    send: send
	                });
	            }
	            var _proto = ProxyWindow.prototype;
	            _proto.getID = function() {
	                return this.serializedWindow.id;
	            };
	            _proto.getType = function() {
	                return this.serializedWindow.getType();
	            };
	            _proto.isPopup = function() {
	                return this.getType().then((function(type) {
	                    return type === WINDOW_TYPE.POPUP;
	                }));
	            };
	            _proto.setLocation = function(href) {
	                var _this = this;
	                return this.serializedWindow.setLocation(href).then((function() {
	                    return _this;
	                }));
	            };
	            _proto.getName = function() {
	                return this.serializedWindow.getName();
	            };
	            _proto.setName = function(name) {
	                var _this2 = this;
	                return this.serializedWindow.setName(name).then((function() {
	                    return _this2;
	                }));
	            };
	            _proto.close = function() {
	                var _this3 = this;
	                return this.serializedWindow.close().then((function() {
	                    return _this3;
	                }));
	            };
	            _proto.focus = function() {
	                var _this4 = this;
	                var isPopupPromise = this.isPopup();
	                var getNamePromise = this.getName();
	                var reopenPromise = promise_ZalgoPromise.hash({
	                    isPopup: isPopupPromise,
	                    name: getNamePromise
	                }).then((function(_ref3) {
	                    var name = _ref3.name;
	                    _ref3.isPopup && name && window.open("", name);
	                }));
	                var focusPromise = this.serializedWindow.focus();
	                return promise_ZalgoPromise.all([ reopenPromise, focusPromise ]).then((function() {
	                    return _this4;
	                }));
	            };
	            _proto.isClosed = function() {
	                return this.serializedWindow.isClosed();
	            };
	            _proto.getWindow = function() {
	                return this.actualWindow;
	            };
	            _proto.setWindow = function(win, _ref4) {
	                var send = _ref4.send;
	                this.actualWindow = win;
	                this.actualWindowPromise.resolve(this.actualWindow);
	                this.serializedWindow = getSerializedWindow(this.actualWindowPromise, {
	                    send: send,
	                    id: this.getID()
	                });
	                windowStore("winToProxyWindow").set(win, this);
	            };
	            _proto.awaitWindow = function() {
	                return this.actualWindowPromise;
	            };
	            _proto.matchWindow = function(win, _ref5) {
	                var _this5 = this;
	                var send = _ref5.send;
	                return promise_ZalgoPromise.try((function() {
	                    return _this5.actualWindow ? win === _this5.actualWindow : promise_ZalgoPromise.hash({
	                        proxyInstanceID: _this5.getInstanceID(),
	                        knownWindowInstanceID: getWindowInstanceID(win, {
	                            send: send
	                        })
	                    }).then((function(_ref6) {
	                        var match = _ref6.proxyInstanceID === _ref6.knownWindowInstanceID;
	                        match && _this5.setWindow(win, {
	                            send: send
	                        });
	                        return match;
	                    }));
	                }));
	            };
	            _proto.unwrap = function() {
	                return this.actualWindow || this;
	            };
	            _proto.getInstanceID = function() {
	                return this.serializedWindow.getInstanceID();
	            };
	            _proto.shouldClean = function() {
	                return Boolean(this.actualWindow && isWindowClosed(this.actualWindow));
	            };
	            _proto.serialize = function() {
	                return this.serializedWindow;
	            };
	            ProxyWindow.unwrap = function(win) {
	                return ProxyWindow.isProxyWindow(win) ? win.unwrap() : win;
	            };
	            ProxyWindow.serialize = function(win, _ref7) {
	                var send = _ref7.send;
	                cleanupProxyWindows();
	                return ProxyWindow.toProxyWindow(win, {
	                    send: send
	                }).serialize();
	            };
	            ProxyWindow.deserialize = function(serializedWindow, _ref8) {
	                var send = _ref8.send;
	                cleanupProxyWindows();
	                return globalStore("idToProxyWindow").get(serializedWindow.id) || new ProxyWindow({
	                    serializedWindow: serializedWindow,
	                    send: send
	                });
	            };
	            ProxyWindow.isProxyWindow = function(obj) {
	                return Boolean(obj && !isWindow(obj) && obj.isProxyWindow);
	            };
	            ProxyWindow.toProxyWindow = function(win, _ref9) {
	                var send = _ref9.send;
	                cleanupProxyWindows();
	                if (ProxyWindow.isProxyWindow(win)) return win;
	                var actualWindow = win;
	                return windowStore("winToProxyWindow").get(actualWindow) || new ProxyWindow({
	                    win: actualWindow,
	                    send: send
	                });
	            };
	            return ProxyWindow;
	        }();
	        function addMethod(id, val, name, source, domain) {
	            var methodStore = windowStore("methodStore");
	            var proxyWindowMethods = globalStore("proxyWindowMethods");
	            if (window_ProxyWindow.isProxyWindow(source)) proxyWindowMethods.set(id, {
	                val: val,
	                name: name,
	                domain: domain,
	                source: source
	            }); else {
	                proxyWindowMethods.del(id);
	                methodStore.getOrSet(source, (function() {
	                    return {};
	                }))[id] = {
	                    domain: domain,
	                    name: name,
	                    val: val,
	                    source: source
	                };
	            }
	        }
	        function lookupMethod(source, id) {
	            var methodStore = windowStore("methodStore");
	            var proxyWindowMethods = globalStore("proxyWindowMethods");
	            return methodStore.getOrSet(source, (function() {
	                return {};
	            }))[id] || proxyWindowMethods.get(id);
	        }
	        function function_serializeFunction(destination, domain, val, key, _ref3) {
	            on = (_ref = {
	                on: _ref3.on,
	                send: _ref3.send
	            }).on, send = _ref.send, globalStore("builtinListeners").getOrSet("functionCalls", (function() {
	                return on("postrobot_method", {
	                    domain: "*"
	                }, (function(_ref2) {
	                    var source = _ref2.source, origin = _ref2.origin, data = _ref2.data;
	                    var id = data.id, name = data.name;
	                    var meth = lookupMethod(source, id);
	                    if (!meth) throw new Error("Could not find method '" + name + "' with id: " + data.id + " in " + getDomain(window));
	                    var methodSource = meth.source, domain = meth.domain, val = meth.val;
	                    return promise_ZalgoPromise.try((function() {
	                        if (!matchDomain(domain, origin)) throw new Error("Method '" + data.name + "' domain " + JSON.stringify(util_isRegex(meth.domain) ? meth.domain.source : meth.domain) + " does not match origin " + origin + " in " + getDomain(window));
	                        if (window_ProxyWindow.isProxyWindow(methodSource)) return methodSource.matchWindow(source, {
	                            send: send
	                        }).then((function(match) {
	                            if (!match) throw new Error("Method call '" + data.name + "' failed - proxy window does not match source in " + getDomain(window));
	                        }));
	                    })).then((function() {
	                        return val.apply({
	                            source: source,
	                            origin: origin
	                        }, data.args);
	                    }), (function(err) {
	                        return promise_ZalgoPromise.try((function() {
	                            if (val.onError) return val.onError(err);
	                        })).then((function() {
	                            err.stack && (err.stack = "Remote call to " + name + "(" + function(args) {
	                                void 0 === args && (args = []);
	                                return arrayFrom(args).map((function(arg) {
	                                    return "string" == typeof arg ? "'" + arg + "'" : void 0 === arg ? "undefined" : null === arg ? "null" : "boolean" == typeof arg ? arg.toString() : Array.isArray(arg) ? "[ ... ]" : "object" == typeof arg ? "{ ... }" : "function" == typeof arg ? "() => { ... }" : "<" + typeof arg + ">";
	                                })).join(", ");
	                            }(data.args) + ") failed\n\n" + err.stack);
	                            throw err;
	                        }));
	                    })).then((function(result) {
	                        return {
	                            result: result,
	                            id: id,
	                            name: name
	                        };
	                    }));
	                }));
	            }));
	            var _ref, on, send;
	            var id = val.__id__ || uniqueID();
	            destination = window_ProxyWindow.unwrap(destination);
	            var name = val.__name__ || val.name || key;
	            "string" == typeof name && "function" == typeof name.indexOf && 0 === name.indexOf("anonymous::") && (name = name.replace("anonymous::", key + "::"));
	            if (window_ProxyWindow.isProxyWindow(destination)) {
	                addMethod(id, val, name, destination, domain);
	                destination.awaitWindow().then((function(win) {
	                    addMethod(id, val, name, win, domain);
	                }));
	            } else addMethod(id, val, name, destination, domain);
	            return serializeType("cross_domain_function", {
	                id: id,
	                name: name
	            });
	        }
	        function serializeMessage(destination, domain, obj, _ref) {
	            var _serialize;
	            var on = _ref.on, send = _ref.send;
	            return function(obj, serializers) {
	                void 0 === serializers && (serializers = defaultSerializers);
	                var result = JSON.stringify(obj, (function(key) {
	                    var val = this[key];
	                    if (isSerializedType(this)) return val;
	                    var type = determineType(val);
	                    if (!type) return val;
	                    var serializer = serializers[type] || SERIALIZER[type];
	                    return serializer ? serializer(val, key) : val;
	                }));
	                return void 0 === result ? "undefined" : result;
	            }(obj, ((_serialize = {}).promise = function(val, key) {
	                return function(destination, domain, val, key, _ref) {
	                    return serializeType("cross_domain_zalgo_promise", {
	                        then: function_serializeFunction(destination, domain, (function(resolve, reject) {
	                            return val.then(resolve, reject);
	                        }), key, {
	                            on: _ref.on,
	                            send: _ref.send
	                        })
	                    });
	                }(destination, domain, val, key, {
	                    on: on,
	                    send: send
	                });
	            }, _serialize.function = function(val, key) {
	                return function_serializeFunction(destination, domain, val, key, {
	                    on: on,
	                    send: send
	                });
	            }, _serialize.object = function(val) {
	                return isWindow(val) || window_ProxyWindow.isProxyWindow(val) ? serializeType("cross_domain_window", window_ProxyWindow.serialize(val, {
	                    send: send
	                })) : val;
	            }, _serialize));
	        }
	        function deserializeMessage(source, origin, message, _ref2) {
	            var _deserialize;
	            var send = _ref2.send;
	            return function(str, deserializers) {
	                void 0 === deserializers && (deserializers = defaultDeserializers);
	                if ("undefined" !== str) return JSON.parse(str, (function(key, val) {
	                    if (isSerializedType(this)) return val;
	                    var type;
	                    var value;
	                    if (isSerializedType(val)) {
	                        type = val.__type__;
	                        value = val.__val__;
	                    } else {
	                        type = determineType(val);
	                        value = val;
	                    }
	                    if (!type) return value;
	                    var deserializer = deserializers[type] || DESERIALIZER[type];
	                    return deserializer ? deserializer(value, key) : value;
	                }));
	            }(message, ((_deserialize = {}).cross_domain_zalgo_promise = function(serializedPromise) {
	                return function(source, origin, _ref2) {
	                    return new promise_ZalgoPromise(_ref2.then);
	                }(0, 0, serializedPromise);
	            }, _deserialize.cross_domain_function = function(serializedFunction) {
	                return function(source, origin, _ref4, _ref5) {
	                    var id = _ref4.id, name = _ref4.name;
	                    var send = _ref5.send;
	                    var getDeserializedFunction = function(opts) {
	                        void 0 === opts && (opts = {});
	                        function crossDomainFunctionWrapper() {
	                            var _arguments = arguments;
	                            return window_ProxyWindow.toProxyWindow(source, {
	                                send: send
	                            }).awaitWindow().then((function(win) {
	                                var meth = lookupMethod(win, id);
	                                if (meth && meth.val !== crossDomainFunctionWrapper) return meth.val.apply({
	                                    source: window,
	                                    origin: getDomain()
	                                }, _arguments);
	                                var _args = [].slice.call(_arguments);
	                                return opts.fireAndForget ? send(win, "postrobot_method", {
	                                    id: id,
	                                    name: name,
	                                    args: _args
	                                }, {
	                                    domain: origin,
	                                    fireAndForget: !0
	                                }) : send(win, "postrobot_method", {
	                                    id: id,
	                                    name: name,
	                                    args: _args
	                                }, {
	                                    domain: origin,
	                                    fireAndForget: !1
	                                }).then((function(res) {
	                                    return res.data.result;
	                                }));
	                            })).catch((function(err) {
	                                throw err;
	                            }));
	                        }
	                        crossDomainFunctionWrapper.__name__ = name;
	                        crossDomainFunctionWrapper.__origin__ = origin;
	                        crossDomainFunctionWrapper.__source__ = source;
	                        crossDomainFunctionWrapper.__id__ = id;
	                        crossDomainFunctionWrapper.origin = origin;
	                        return crossDomainFunctionWrapper;
	                    };
	                    var crossDomainFunctionWrapper = getDeserializedFunction();
	                    crossDomainFunctionWrapper.fireAndForget = getDeserializedFunction({
	                        fireAndForget: !0
	                    });
	                    return crossDomainFunctionWrapper;
	                }(source, origin, serializedFunction, {
	                    send: send
	                });
	            }, _deserialize.cross_domain_window = function(serializedWindow) {
	                return window_ProxyWindow.deserialize(serializedWindow, {
	                    send: send
	                });
	            }, _deserialize));
	        }
	        var SEND_MESSAGE_STRATEGIES = {};
	        SEND_MESSAGE_STRATEGIES.postrobot_post_message = function(win, serializedMessage, domain) {
	            0 === domain.indexOf("file:") && (domain = "*");
	            win.postMessage(serializedMessage, domain);
	        };
	        SEND_MESSAGE_STRATEGIES.postrobot_global = function(win, serializedMessage) {
	            if (!function(win) {
	                return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
	            }(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
	            if (!isSameDomain(win)) throw new Error("Post message through global disabled between different domain windows");
	            if (!1 !== isSameTopWindow(window, win)) throw new Error("Can only use global to communicate between two different windows, not between frames");
	            var foreignGlobal = global_getGlobal(win);
	            if (!foreignGlobal) throw new Error("Can not find postRobot global on foreign window");
	            foreignGlobal.receiveMessage({
	                source: window,
	                origin: getDomain(),
	                data: serializedMessage
	            });
	        };
	        function send_sendMessage(win, domain, message, _ref2) {
	            var on = _ref2.on, send = _ref2.send;
	            return promise_ZalgoPromise.try((function() {
	                var domainBuffer = windowStore().getOrSet(win, (function() {
	                    return {};
	                }));
	                domainBuffer.buffer = domainBuffer.buffer || [];
	                domainBuffer.buffer.push(message);
	                domainBuffer.flush = domainBuffer.flush || promise_ZalgoPromise.flush().then((function() {
	                    if (isWindowClosed(win)) throw new Error("Window is closed");
	                    var serializedMessage = serializeMessage(win, domain, ((_ref = {}).__post_robot_10_0_42__ = domainBuffer.buffer || [], 
	                    _ref), {
	                        on: on,
	                        send: send
	                    });
	                    var _ref;
	                    delete domainBuffer.buffer;
	                    var strategies = Object.keys(SEND_MESSAGE_STRATEGIES);
	                    var errors = [];
	                    for (var _i2 = 0; _i2 < strategies.length; _i2++) {
	                        var strategyName = strategies[_i2];
	                        try {
	                            SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
	                        } catch (err) {
	                            errors.push(err);
	                        }
	                    }
	                    if (errors.length === strategies.length) throw new Error("All post-robot messaging strategies failed:\n\n" + errors.map((function(err, i) {
	                        return i + ". " + stringifyError(err);
	                    })).join("\n\n"));
	                }));
	                return domainBuffer.flush.then((function() {
	                    delete domainBuffer.flush;
	                }));
	            })).then(src_util_noop);
	        }
	        function getResponseListener(hash) {
	            return globalStore("responseListeners").get(hash);
	        }
	        function deleteResponseListener(hash) {
	            globalStore("responseListeners").del(hash);
	        }
	        function isResponseListenerErrored(hash) {
	            return globalStore("erroredResponseListeners").has(hash);
	        }
	        function getRequestListener(_ref) {
	            var name = _ref.name, win = _ref.win, domain = _ref.domain;
	            var requestListeners = windowStore("requestListeners");
	            "*" === win && (win = null);
	            "*" === domain && (domain = null);
	            if (!name) throw new Error("Name required to get request listener");
	            for (var _i4 = 0, _ref3 = [ win, getWildcard() ]; _i4 < _ref3.length; _i4++) {
	                var winQualifier = _ref3[_i4];
	                if (winQualifier) {
	                    var nameListeners = requestListeners.get(winQualifier);
	                    if (nameListeners) {
	                        var domainListeners = nameListeners[name];
	                        if (domainListeners) {
	                            if (domain && "string" == typeof domain) {
	                                if (domainListeners[domain]) return domainListeners[domain];
	                                if (domainListeners.__domain_regex__) for (var _i6 = 0, _domainListeners$__DO2 = domainListeners.__domain_regex__; _i6 < _domainListeners$__DO2.length; _i6++) {
	                                    var _domainListeners$__DO3 = _domainListeners$__DO2[_i6], listener = _domainListeners$__DO3.listener;
	                                    if (matchDomain(_domainListeners$__DO3.regex, domain)) return listener;
	                                }
	                            }
	                            if (domainListeners["*"]) return domainListeners["*"];
	                        }
	                    }
	                }
	            }
	        }
	        function handleRequest(source, origin, message, _ref) {
	            var on = _ref.on, send = _ref.send;
	            var options = getRequestListener({
	                name: message.name,
	                win: source,
	                domain: origin
	            });
	            var logName = "postrobot_method" === message.name && message.data && "string" == typeof message.data.name ? message.data.name + "()" : message.name;
	            function sendResponse(ack, data, error) {
	                return promise_ZalgoPromise.flush().then((function() {
	                    if (!message.fireAndForget && !isWindowClosed(source)) try {
	                        return send_sendMessage(source, origin, {
	                            id: uniqueID(),
	                            origin: getDomain(window),
	                            type: "postrobot_message_response",
	                            hash: message.hash,
	                            name: message.name,
	                            ack: ack,
	                            data: data,
	                            error: error
	                        }, {
	                            on: on,
	                            send: send
	                        });
	                    } catch (err) {
	                        throw new Error("Send response message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
	                    }
	                }));
	            }
	            return promise_ZalgoPromise.all([ promise_ZalgoPromise.flush().then((function() {
	                if (!message.fireAndForget && !isWindowClosed(source)) try {
	                    return send_sendMessage(source, origin, {
	                        id: uniqueID(),
	                        origin: getDomain(window),
	                        type: "postrobot_message_ack",
	                        hash: message.hash,
	                        name: message.name
	                    }, {
	                        on: on,
	                        send: send
	                    });
	                } catch (err) {
	                    throw new Error("Send ack message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
	                }
	            })), promise_ZalgoPromise.try((function() {
	                if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
	                if (!matchDomain(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
	                return options.handler({
	                    source: source,
	                    origin: origin,
	                    data: message.data
	                });
	            })).then((function(data) {
	                return sendResponse("success", data);
	            }), (function(error) {
	                return sendResponse("error", null, error);
	            })) ]).then(src_util_noop).catch((function(err) {
	                if (options && options.handleError) return options.handleError(err);
	                throw err;
	            }));
	        }
	        function handleAck(source, origin, message) {
	            if (!isResponseListenerErrored(message.hash)) {
	                var options = getResponseListener(message.hash);
	                if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
	                try {
	                    if (!matchDomain(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
	                    if (source !== options.win) throw new Error("Ack source does not match registered window");
	                } catch (err) {
	                    options.promise.reject(err);
	                }
	                options.ack = !0;
	            }
	        }
	        function handleResponse(source, origin, message) {
	            if (!isResponseListenerErrored(message.hash)) {
	                var options = getResponseListener(message.hash);
	                if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
	                if (!matchDomain(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + (pattern = options.domain, 
	                Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString()));
	                var pattern;
	                if (source !== options.win) throw new Error("Response source does not match registered window");
	                deleteResponseListener(message.hash);
	                "error" === message.ack ? options.promise.reject(message.error) : "success" === message.ack && options.promise.resolve({
	                    source: source,
	                    origin: origin,
	                    data: message.data
	                });
	            }
	        }
	        function receive_receiveMessage(event, _ref2) {
	            var on = _ref2.on, send = _ref2.send;
	            var receivedMessages = globalStore("receivedMessages");
	            try {
	                if (!window || window.closed || !event.source) return;
	            } catch (err) {
	                return;
	            }
	            var source = event.source, origin = event.origin;
	            var messages = function(message, source, origin, _ref) {
	                var on = _ref.on, send = _ref.send;
	                var parsedMessage;
	                try {
	                    parsedMessage = deserializeMessage(source, origin, message, {
	                        on: on,
	                        send: send
	                    });
	                } catch (err) {
	                    return;
	                }
	                if (parsedMessage && "object" == typeof parsedMessage && null !== parsedMessage) {
	                    var parseMessages = parsedMessage.__post_robot_10_0_42__;
	                    if (Array.isArray(parseMessages)) return parseMessages;
	                }
	            }(event.data, source, origin, {
	                on: on,
	                send: send
	            });
	            if (messages) {
	                markWindowKnown(source);
	                for (var _i2 = 0; _i2 < messages.length; _i2++) {
	                    var message = messages[_i2];
	                    if (receivedMessages.has(message.id)) return;
	                    receivedMessages.set(message.id, !0);
	                    if (isWindowClosed(source) && !message.fireAndForget) return;
	                    0 === message.origin.indexOf("file:") && (origin = "file://");
	                    try {
	                        "postrobot_message_request" === message.type ? handleRequest(source, origin, message, {
	                            on: on,
	                            send: send
	                        }) : "postrobot_message_response" === message.type ? handleResponse(source, origin, message) : "postrobot_message_ack" === message.type && handleAck(source, origin, message);
	                    } catch (err) {
	                        setTimeout((function() {
	                            throw err;
	                        }), 0);
	                    }
	                }
	            }
	        }
	        function on_on(name, options, handler) {
	            if (!name) throw new Error("Expected name");
	            if ("function" == typeof (options = options || {})) {
	                handler = options;
	                options = {};
	            }
	            if (!handler) throw new Error("Expected handler");
	            (options = options || {}).name = name;
	            options.handler = handler || options.handler;
	            var win = options.window;
	            var domain = options.domain;
	            var requestListener = function addRequestListener(_ref4, listener) {
	                var name = _ref4.name, win = _ref4.win, domain = _ref4.domain;
	                var requestListeners = windowStore("requestListeners");
	                if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
	                if (Array.isArray(win)) {
	                    var listenersCollection = [];
	                    for (var _i8 = 0, _win2 = win; _i8 < _win2.length; _i8++) listenersCollection.push(addRequestListener({
	                        name: name,
	                        domain: domain,
	                        win: _win2[_i8]
	                    }, listener));
	                    return {
	                        cancel: function() {
	                            for (var _i10 = 0; _i10 < listenersCollection.length; _i10++) listenersCollection[_i10].cancel();
	                        }
	                    };
	                }
	                if (Array.isArray(domain)) {
	                    var _listenersCollection = [];
	                    for (var _i12 = 0, _domain2 = domain; _i12 < _domain2.length; _i12++) _listenersCollection.push(addRequestListener({
	                        name: name,
	                        win: win,
	                        domain: _domain2[_i12]
	                    }, listener));
	                    return {
	                        cancel: function() {
	                            for (var _i14 = 0; _i14 < _listenersCollection.length; _i14++) _listenersCollection[_i14].cancel();
	                        }
	                    };
	                }
	                var existingListener = getRequestListener({
	                    name: name,
	                    win: win,
	                    domain: domain
	                });
	                win && "*" !== win || (win = getWildcard());
	                domain = domain || "*";
	                if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
	                var nameListeners = requestListeners.getOrSet(win, (function() {
	                    return {};
	                }));
	                var domainListeners = util_getOrSet(nameListeners, name, (function() {
	                    return {};
	                }));
	                var strDomain = domain.toString();
	                var regexListeners;
	                var regexListener;
	                util_isRegex(domain) ? (regexListeners = util_getOrSet(domainListeners, "__domain_regex__", (function() {
	                    return [];
	                }))).push(regexListener = {
	                    regex: domain,
	                    listener: listener
	                }) : domainListeners[strDomain] = listener;
	                return {
	                    cancel: function() {
	                        delete domainListeners[strDomain];
	                        if (regexListener) {
	                            regexListeners.splice(regexListeners.indexOf(regexListener, 1));
	                            regexListeners.length || delete domainListeners.__domain_regex__;
	                        }
	                        Object.keys(domainListeners).length || delete nameListeners[name];
	                        win && !Object.keys(nameListeners).length && requestListeners.del(win);
	                    }
	                };
	            }({
	                name: name,
	                win: win,
	                domain: domain
	            }, {
	                handler: options.handler,
	                handleError: options.errorHandler || function(err) {
	                    throw err;
	                },
	                window: win,
	                domain: domain || "*",
	                name: name
	            });
	            return {
	                cancel: function() {
	                    requestListener.cancel();
	                }
	            };
	        }
	        var send_send = function send(win, name, data, options) {
	            var domainMatcher = (options = options || {}).domain || "*";
	            var responseTimeout = options.timeout || -1;
	            var childTimeout = options.timeout || 5e3;
	            var fireAndForget = options.fireAndForget || !1;
	            return promise_ZalgoPromise.try((function() {
	                !function(name, win, domain) {
	                    if (!name) throw new Error("Expected name");
	                    if (domain && "string" != typeof domain && !Array.isArray(domain) && !util_isRegex(domain)) throw new TypeError("Can not send " + name + ". Expected domain " + JSON.stringify(domain) + " to be a string, array, or regex");
	                    if (isWindowClosed(win)) throw new Error("Can not send " + name + ". Target window is closed");
	                }(name, win, domainMatcher);
	                if (function(parent, child) {
	                    var actualParent = getAncestor(child);
	                    if (actualParent) return actualParent === parent;
	                    if (child === parent) return !1;
	                    if (getTop(child) === child) return !1;
	                    for (var _i15 = 0, _getFrames8 = getFrames(parent); _i15 < _getFrames8.length; _i15++) if (_getFrames8[_i15] === child) return !0;
	                    return !1;
	                }(window, win)) return function(win, timeout, name) {
	                    void 0 === timeout && (timeout = 5e3);
	                    void 0 === name && (name = "Window");
	                    var promise = function(win) {
	                        return windowStore("helloPromises").getOrSet(win, (function() {
	                            return new promise_ZalgoPromise;
	                        }));
	                    }(win);
	                    -1 !== timeout && (promise = promise.timeout(timeout, new Error(name + " did not load after " + timeout + "ms")));
	                    return promise;
	                }(win, childTimeout);
	            })).then((function(_temp) {
	                return function(win, targetDomain, actualDomain, _ref) {
	                    var send = _ref.send;
	                    return promise_ZalgoPromise.try((function() {
	                        return "string" == typeof targetDomain ? targetDomain : promise_ZalgoPromise.try((function() {
	                            return actualDomain || sayHello(win, {
	                                send: send
	                            }).then((function(_ref2) {
	                                return _ref2.domain;
	                            }));
	                        })).then((function(normalizedDomain) {
	                            if (!matchDomain(targetDomain, targetDomain)) throw new Error("Domain " + stringify(targetDomain) + " does not match " + stringify(targetDomain));
	                            return normalizedDomain;
	                        }));
	                    }));
	                }(win, domainMatcher, (void 0 === _temp ? {} : _temp).domain, {
	                    send: send
	                });
	            })).then((function(targetDomain) {
	                var domain = targetDomain;
	                var logName = "postrobot_method" === name && data && "string" == typeof data.name ? data.name + "()" : name;
	                var promise = new promise_ZalgoPromise;
	                var hash = name + "_" + uniqueID();
	                if (!fireAndForget) {
	                    var responseListener = {
	                        name: name,
	                        win: win,
	                        domain: domain,
	                        promise: promise
	                    };
	                    !function(hash, listener) {
	                        globalStore("responseListeners").set(hash, listener);
	                    }(hash, responseListener);
	                    var reqPromises = windowStore("requestPromises").getOrSet(win, (function() {
	                        return [];
	                    }));
	                    reqPromises.push(promise);
	                    promise.catch((function() {
	                        !function(hash) {
	                            globalStore("erroredResponseListeners").set(hash, !0);
	                        }(hash);
	                        deleteResponseListener(hash);
	                    }));
	                    var totalAckTimeout = function(win) {
	                        return windowStore("knownWindows").get(win, !1);
	                    }(win) ? 1e4 : 2e3;
	                    var totalResTimeout = responseTimeout;
	                    var ackTimeout = totalAckTimeout;
	                    var resTimeout = totalResTimeout;
	                    var interval = safeInterval((function() {
	                        if (isWindowClosed(win)) return promise.reject(new Error("Window closed for " + name + " before " + (responseListener.ack ? "response" : "ack")));
	                        if (responseListener.cancelled) return promise.reject(new Error("Response listener was cancelled for " + name));
	                        ackTimeout = Math.max(ackTimeout - 500, 0);
	                        -1 !== resTimeout && (resTimeout = Math.max(resTimeout - 500, 0));
	                        return responseListener.ack || 0 !== ackTimeout ? 0 === resTimeout ? promise.reject(new Error("No response for postMessage " + logName + " in " + getDomain() + " in " + totalResTimeout + "ms")) : void 0 : promise.reject(new Error("No ack for postMessage " + logName + " in " + getDomain() + " in " + totalAckTimeout + "ms"));
	                    }), 500);
	                    promise.finally((function() {
	                        interval.cancel();
	                        reqPromises.splice(reqPromises.indexOf(promise, 1));
	                    })).catch(src_util_noop);
	                }
	                return send_sendMessage(win, domain, {
	                    id: uniqueID(),
	                    origin: getDomain(window),
	                    type: "postrobot_message_request",
	                    hash: hash,
	                    name: name,
	                    data: data,
	                    fireAndForget: fireAndForget
	                }, {
	                    on: on_on,
	                    send: send
	                }).then((function() {
	                    return fireAndForget ? promise.resolve() : promise;
	                }), (function(err) {
	                    throw new Error("Send request message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
	                }));
	            }));
	        };
	        function setup_serializeMessage(destination, domain, obj) {
	            return serializeMessage(destination, domain, obj, {
	                on: on_on,
	                send: send_send
	            });
	        }
	        function setup_deserializeMessage(source, origin, message) {
	            return deserializeMessage(source, origin, message, {
	                on: on_on,
	                send: send_send
	            });
	        }
	        function setup_toProxyWindow(win) {
	            return window_ProxyWindow.toProxyWindow(win, {
	                send: send_send
	            });
	        }
	        function lib_global_getGlobal(win) {
	            void 0 === win && (win = window);
	            if (!isSameDomain(win)) throw new Error("Can not get global for window on different domain");
	            win.__zoid_9_0_63__ || (win.__zoid_9_0_63__ = {});
	            return win.__zoid_9_0_63__;
	        }
	        function getProxyObject(obj) {
	            return {
	                get: function() {
	                    var _this = this;
	                    return promise_ZalgoPromise.try((function() {
	                        if (_this.source && _this.source !== window) throw new Error("Can not call get on proxy object from a remote window");
	                        return obj;
	                    }));
	                }
	            };
	        }
	        var PROP_TYPE = {
	            STRING: "string",
	            OBJECT: "object",
	            FUNCTION: "function",
	            BOOLEAN: "boolean",
	            NUMBER: "number",
	            ARRAY: "array"
	        };
	        var PROP_SERIALIZATION = {
	            JSON: "json",
	            DOTIFY: "dotify",
	            BASE64: "base64"
	        };
	        var CONTEXT = WINDOW_TYPE;
	        var EVENT = {
	            RENDER: "zoid-render",
	            RENDERED: "zoid-rendered",
	            DISPLAY: "zoid-display",
	            ERROR: "zoid-error",
	            CLOSE: "zoid-close",
	            DESTROY: "zoid-destroy",
	            PROPS: "zoid-props",
	            RESIZE: "zoid-resize",
	            FOCUS: "zoid-focus"
	        };
	        function normalizeChildProp(propsDef, props, key, value, helpers) {
	            if (!propsDef.hasOwnProperty(key)) return value;
	            var prop = propsDef[key];
	            return "function" == typeof prop.childDecorate ? prop.childDecorate({
	                value: value,
	                uid: helpers.uid,
	                close: helpers.close,
	                focus: helpers.focus,
	                onError: helpers.onError,
	                onProps: helpers.onProps,
	                resize: helpers.resize,
	                getParent: helpers.getParent,
	                getParentDomain: helpers.getParentDomain,
	                show: helpers.show,
	                hide: helpers.hide
	            }) : value;
	        }
	        function parseChildWindowName(windowName) {
	            return inlineMemoize(parseChildWindowName, (function() {
	                if (!windowName) throw new Error("No window name");
	                var _windowName$split = windowName.split("__"), zoidcomp = _windowName$split[1], name = _windowName$split[2], encodedPayload = _windowName$split[3];
	                if ("zoid" !== zoidcomp) throw new Error("Window not rendered by zoid - got " + zoidcomp);
	                if (!name) throw new Error("Expected component name");
	                if (!encodedPayload) throw new Error("Expected encoded payload");
	                try {
	                    return JSON.parse(function(str) {
	                        if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(str), (function(c) {
	                            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
	                        })).join(""));
	                        if ("undefined" != typeof Buffer) return Buffer.from(str, "base64").toString("utf8");
	                        throw new Error("Can not find window.atob or Buffer");
	                    }(encodedPayload));
	                } catch (err) {
	                    throw new Error("Can not decode window name payload: " + encodedPayload + ": " + stringifyError(err));
	                }
	            }), [ windowName ]);
	        }
	        function getChildPayload() {
	            try {
	                return parseChildWindowName(window.name);
	            } catch (err) {}
	        }
	        function child_focus() {
	            return promise_ZalgoPromise.try((function() {
	                window.focus();
	            }));
	        }
	        function child_destroy() {
	            return promise_ZalgoPromise.try((function() {
	                window.close();
	            }));
	        }
	        function props_getQueryParam(prop, key, value) {
	            return promise_ZalgoPromise.try((function() {
	                return "function" == typeof prop.queryParam ? prop.queryParam({
	                    value: value
	                }) : "string" == typeof prop.queryParam ? prop.queryParam : key;
	            }));
	        }
	        function getQueryValue(prop, key, value) {
	            return promise_ZalgoPromise.try((function() {
	                return "function" == typeof prop.queryValue && isDefined(value) ? prop.queryValue({
	                    value: value
	                }) : value;
	            }));
	        }
	        function parentComponent(options, overrides, parentWin) {
	            void 0 === overrides && (overrides = {});
	            void 0 === parentWin && (parentWin = window);
	            var propsDef = options.propsDef, containerTemplate = options.containerTemplate, prerenderTemplate = options.prerenderTemplate, tag = options.tag, name = options.name, attributes = options.attributes, dimensions = options.dimensions, autoResize = options.autoResize, url = options.url, domainMatch = options.domain;
	            var initPromise = new promise_ZalgoPromise;
	            var handledErrors = [];
	            var clean = cleanup();
	            var state = {};
	            var internalState = {
	                visible: !0
	            };
	            var event = overrides.event ? overrides.event : (triggered = {}, handlers = {}, 
	            {
	                on: function(eventName, handler) {
	                    var handlerList = handlers[eventName] = handlers[eventName] || [];
	                    handlerList.push(handler);
	                    var cancelled = !1;
	                    return {
	                        cancel: function() {
	                            if (!cancelled) {
	                                cancelled = !0;
	                                handlerList.splice(handlerList.indexOf(handler), 1);
	                            }
	                        }
	                    };
	                },
	                once: function(eventName, handler) {
	                    var listener = this.on(eventName, (function() {
	                        listener.cancel();
	                        handler();
	                    }));
	                    return listener;
	                },
	                trigger: function(eventName) {
	                    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
	                    var handlerList = handlers[eventName];
	                    var promises = [];
	                    if (handlerList) {
	                        var _loop = function(_i2) {
	                            var handler = handlerList[_i2];
	                            promises.push(promise_ZalgoPromise.try((function() {
	                                return handler.apply(void 0, args);
	                            })));
	                        };
	                        for (var _i2 = 0; _i2 < handlerList.length; _i2++) _loop(_i2);
	                    }
	                    return promise_ZalgoPromise.all(promises).then(src_util_noop);
	                },
	                triggerOnce: function(eventName) {
	                    if (triggered[eventName]) return promise_ZalgoPromise.resolve();
	                    triggered[eventName] = !0;
	                    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
	                    return this.trigger.apply(this, [ eventName ].concat(args));
	                },
	                reset: function() {
	                    handlers = {};
	                }
	            });
	            var triggered, handlers;
	            var props = overrides.props ? overrides.props : {};
	            var currentProxyWin;
	            var currentProxyContainer;
	            var childComponent;
	            var onErrorOverride = overrides.onError;
	            var getProxyContainerOverride = overrides.getProxyContainer;
	            var showOverride = overrides.show;
	            var hideOverride = overrides.hide;
	            var closeOverride = overrides.close;
	            var renderContainerOverride = overrides.renderContainer;
	            var getProxyWindowOverride = overrides.getProxyWindow;
	            var setProxyWinOverride = overrides.setProxyWin;
	            var openFrameOverride = overrides.openFrame;
	            var openPrerenderFrameOverride = overrides.openPrerenderFrame;
	            var prerenderOverride = overrides.prerender;
	            var openOverride = overrides.open;
	            var openPrerenderOverride = overrides.openPrerender;
	            var watchForUnloadOverride = overrides.watchForUnload;
	            var getInternalStateOverride = overrides.getInternalState;
	            var setInternalStateOverride = overrides.setInternalState;
	            var getPropsForChild = function(domain) {
	                var result = {};
	                for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
	                    var key = _Object$keys2[_i2];
	                    var prop = propsDef[key];
	                    prop && !1 === prop.sendToChild || prop && prop.sameDomain && !matchDomain(domain, getDomain(window)) || (result[key] = props[key]);
	                }
	                return promise_ZalgoPromise.hash(result);
	            };
	            var getInternalState = function() {
	                return promise_ZalgoPromise.try((function() {
	                    return getInternalStateOverride ? getInternalStateOverride() : internalState;
	                }));
	            };
	            var setInternalState = function(newInternalState) {
	                return promise_ZalgoPromise.try((function() {
	                    return setInternalStateOverride ? setInternalStateOverride(newInternalState) : internalState = _extends({}, internalState, newInternalState);
	                }));
	            };
	            var getProxyWindow = function() {
	                return getProxyWindowOverride ? getProxyWindowOverride() : promise_ZalgoPromise.try((function() {
	                    var windowProp = props.window;
	                    if (windowProp) {
	                        var _proxyWin = setup_toProxyWindow(windowProp);
	                        clean.register((function() {
	                            return windowProp.close();
	                        }));
	                        return _proxyWin;
	                    }
	                    return new window_ProxyWindow({
	                        send: send_send
	                    });
	                }));
	            };
	            var getProxyContainer = function(container) {
	                return getProxyContainerOverride ? getProxyContainerOverride(container) : promise_ZalgoPromise.try((function() {
	                    return elementReady(container);
	                })).then((function(containerElement) {
	                    isShadowElement(containerElement) && (containerElement = function(element) {
	                        var shadowHost = function(element) {
	                            var shadowRoot = function(element) {
	                                for (;element.parentNode; ) element = element.parentNode;
	                                if (isShadowElement(element)) return element;
	                            }(element);
	                            if (shadowRoot.host) return shadowRoot.host;
	                        }(element);
	                        if (!shadowHost) throw new Error("Element is not in shadow dom");
	                        if (isShadowElement(shadowHost)) throw new Error("Host element is also in shadow dom");
	                        var slotName = "shadow-slot-" + uniqueID();
	                        var slot = document.createElement("slot");
	                        slot.setAttribute("name", slotName);
	                        element.appendChild(slot);
	                        var slotProvider = document.createElement("div");
	                        slotProvider.setAttribute("slot", slotName);
	                        shadowHost.appendChild(slotProvider);
	                        return slotProvider;
	                    }(containerElement));
	                    return getProxyObject(containerElement);
	                }));
	            };
	            var setProxyWin = function(proxyWin) {
	                return setProxyWinOverride ? setProxyWinOverride(proxyWin) : promise_ZalgoPromise.try((function() {
	                    currentProxyWin = proxyWin;
	                }));
	            };
	            var show = function() {
	                return showOverride ? showOverride() : promise_ZalgoPromise.hash({
	                    setState: setInternalState({
	                        visible: !0
	                    }),
	                    showElement: currentProxyContainer ? currentProxyContainer.get().then(showElement) : null
	                }).then(src_util_noop);
	            };
	            var hide = function() {
	                return hideOverride ? hideOverride() : promise_ZalgoPromise.hash({
	                    setState: setInternalState({
	                        visible: !1
	                    }),
	                    showElement: currentProxyContainer ? currentProxyContainer.get().then(hideElement) : null
	                }).then(src_util_noop);
	            };
	            var getUrl = function() {
	                return "function" == typeof url ? url({
	                    props: props
	                }) : url;
	            };
	            var getAttributes = function() {
	                return "function" == typeof attributes ? attributes({
	                    props: props
	                }) : attributes;
	            };
	            var getChildDomain = function() {
	                return domainMatch && "string" == typeof domainMatch ? domainMatch : getDomainFromUrl(getUrl());
	            };
	            var getDomainMatcher = function() {
	                return domainMatch && util_isRegex(domainMatch) ? domainMatch : getChildDomain();
	            };
	            var openFrame = function(context, _ref) {
	                var windowName = _ref.windowName;
	                return openFrameOverride ? openFrameOverride(context, {
	                    windowName: windowName
	                }) : promise_ZalgoPromise.try((function() {
	                    if (context === CONTEXT.IFRAME) return getProxyObject(dom_iframe({
	                        attributes: _extends({
	                            name: windowName,
	                            title: name
	                        }, getAttributes().iframe)
	                    }));
	                }));
	            };
	            var openPrerenderFrame = function(context) {
	                return openPrerenderFrameOverride ? openPrerenderFrameOverride(context) : promise_ZalgoPromise.try((function() {
	                    if (context === CONTEXT.IFRAME) return getProxyObject(dom_iframe({
	                        attributes: _extends({
	                            name: "__zoid_prerender_frame__" + name + "_" + uniqueID() + "__",
	                            title: "prerender__" + name
	                        }, getAttributes().iframe)
	                    }));
	                }));
	            };
	            var openPrerender = function(context, proxyWin, proxyPrerenderFrame) {
	                return openPrerenderOverride ? openPrerenderOverride(context, proxyWin, proxyPrerenderFrame) : promise_ZalgoPromise.try((function() {
	                    if (context === CONTEXT.IFRAME) {
	                        if (!proxyPrerenderFrame) throw new Error("Expected proxy frame to be passed");
	                        return proxyPrerenderFrame.get().then((function(prerenderFrame) {
	                            clean.register((function() {
	                                return destroyElement(prerenderFrame);
	                            }));
	                            return awaitFrameWindow(prerenderFrame).then((function(prerenderFrameWindow) {
	                                return assertSameDomain(prerenderFrameWindow);
	                            })).then((function(win) {
	                                return setup_toProxyWindow(win);
	                            }));
	                        }));
	                    }
	                    throw new Error("No render context available for " + context);
	                }));
	            };
	            var focus = function() {
	                return promise_ZalgoPromise.try((function() {
	                    if (currentProxyWin) return promise_ZalgoPromise.all([ event.trigger(EVENT.FOCUS), currentProxyWin.focus() ]).then(src_util_noop);
	                }));
	            };
	            var getWindowRef = function(target, domain, uid, context) {
	                if (domain === getDomain(window)) {
	                    var global = lib_global_getGlobal(window);
	                    global.windows = global.windows || {};
	                    global.windows[uid] = window;
	                    clean.register((function() {
	                        delete global.windows[uid];
	                    }));
	                    return {
	                        type: "global",
	                        uid: uid
	                    };
	                }
	                return context === CONTEXT.POPUP ? {
	                    type: "opener"
	                } : {
	                    type: "parent",
	                    distance: getDistanceFromTop(window)
	                };
	            };
	            var initChild = function(childExports) {
	                return promise_ZalgoPromise.try((function() {
	                    childComponent = childExports;
	                    initPromise.resolve();
	                    clean.register((function() {
	                        return childExports.close.fireAndForget().catch(src_util_noop);
	                    }));
	                }));
	            };
	            var resize = function(_ref2) {
	                var width = _ref2.width, height = _ref2.height;
	                return promise_ZalgoPromise.try((function() {
	                    event.trigger(EVENT.RESIZE, {
	                        width: width,
	                        height: height
	                    });
	                }));
	            };
	            var destroy = function(err) {
	                return promise_ZalgoPromise.try((function() {
	                    return event.trigger(EVENT.DESTROY);
	                })).catch(src_util_noop).then((function() {
	                    return clean.all(err);
	                })).then((function() {
	                    initPromise.asyncReject(err || new Error("Component destroyed"));
	                }));
	            };
	            var close = memoize((function(err) {
	                return promise_ZalgoPromise.try((function() {
	                    if (closeOverride) {
	                        if (isWindowClosed(closeOverride.__source__)) return;
	                        return closeOverride();
	                    }
	                    return promise_ZalgoPromise.try((function() {
	                        return event.trigger(EVENT.CLOSE);
	                    })).then((function() {
	                        return destroy(err || new Error("Component closed"));
	                    }));
	                }));
	            }));
	            var open = function(context, _ref3) {
	                var proxyWin = _ref3.proxyWin, proxyFrame = _ref3.proxyFrame;
	                return openOverride ? openOverride(context, {
	                    proxyWin: proxyWin,
	                    proxyFrame: proxyFrame,
	                    windowName: _ref3.windowName
	                }) : promise_ZalgoPromise.try((function() {
	                    if (context === CONTEXT.IFRAME) {
	                        if (!proxyFrame) throw new Error("Expected proxy frame to be passed");
	                        return proxyFrame.get().then((function(frame) {
	                            return awaitFrameWindow(frame).then((function(win) {
	                                clean.register((function() {
	                                    return destroyElement(frame);
	                                }));
	                                clean.register((function() {
	                                    return function(win) {
	                                        for (var _i2 = 0, _requestPromises$get2 = windowStore("requestPromises").get(win, []); _i2 < _requestPromises$get2.length; _i2++) _requestPromises$get2[_i2].reject(new Error("Window " + (isWindowClosed(win) ? "closed" : "cleaned up") + " before response")).catch(src_util_noop);
	                                    }(win);
	                                }));
	                                return win;
	                            }));
	                        }));
	                    }
	                    throw new Error("No render context available for " + context);
	                })).then((function(win) {
	                    proxyWin.setWindow(win, {
	                        send: send_send
	                    });
	                    return proxyWin;
	                }));
	            };
	            var watchForUnload = function() {
	                return promise_ZalgoPromise.try((function() {
	                    var unloadWindowListener = addEventListener(window, "unload", once((function() {
	                        destroy(new Error("Window navigated away"));
	                    })));
	                    var closeParentWindowListener = onCloseWindow(parentWin, destroy, 3e3);
	                    clean.register(closeParentWindowListener.cancel);
	                    clean.register(unloadWindowListener.cancel);
	                    if (watchForUnloadOverride) return watchForUnloadOverride();
	                }));
	            };
	            var checkWindowClose = function(proxyWin) {
	                var closed = !1;
	                return proxyWin.isClosed().then((function(isClosed) {
	                    if (isClosed) {
	                        closed = !0;
	                        return close(new Error("Detected component window close"));
	                    }
	                    return promise_ZalgoPromise.delay(200).then((function() {
	                        return proxyWin.isClosed();
	                    })).then((function(secondIsClosed) {
	                        if (secondIsClosed) {
	                            closed = !0;
	                            return close(new Error("Detected component window close"));
	                        }
	                    }));
	                })).then((function() {
	                    return closed;
	                }));
	            };
	            var onError = function(err) {
	                return onErrorOverride ? onErrorOverride(err) : promise_ZalgoPromise.try((function() {
	                    if (-1 === handledErrors.indexOf(err)) {
	                        handledErrors.push(err);
	                        initPromise.asyncReject(err);
	                        return event.trigger(EVENT.ERROR, err);
	                    }
	                }));
	            };
	            initChild.onError = onError;
	            var renderTemplate = function(renderer, _ref6) {
	                return renderer({
	                    container: _ref6.container,
	                    context: _ref6.context,
	                    uid: _ref6.uid,
	                    doc: _ref6.doc,
	                    frame: _ref6.frame,
	                    prerenderFrame: _ref6.prerenderFrame,
	                    focus: focus,
	                    close: close,
	                    state: state,
	                    props: props,
	                    tag: tag,
	                    dimensions: dimensions,
	                    event: event
	                });
	            };
	            var prerender = function(proxyPrerenderWin, _ref7) {
	                var context = _ref7.context, uid = _ref7.uid;
	                return prerenderOverride ? prerenderOverride(proxyPrerenderWin, {
	                    context: context,
	                    uid: uid
	                }) : promise_ZalgoPromise.try((function() {
	                    if (prerenderTemplate) {
	                        var prerenderWindow = proxyPrerenderWin.getWindow();
	                        if (prerenderWindow && isSameDomain(prerenderWindow) && function(win) {
	                            try {
	                                if (!win.location.href) return !0;
	                                if ("about:blank" === win.location.href) return !0;
	                            } catch (err) {}
	                            return !1;
	                        }(prerenderWindow)) {
	                            var doc = (prerenderWindow = assertSameDomain(prerenderWindow)).document;
	                            var el = renderTemplate(prerenderTemplate, {
	                                context: context,
	                                uid: uid,
	                                doc: doc
	                            });
	                            if (el) {
	                                if (el.ownerDocument !== doc) throw new Error("Expected prerender template to have been created with document from child window");
	                                !function(win, el) {
	                                    var tag = el.tagName.toLowerCase();
	                                    if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
	                                    var documentElement = win.document.documentElement;
	                                    for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) documentElement.removeChild(_arrayFrom2[_i6]);
	                                    for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) documentElement.appendChild(_arrayFrom4[_i8]);
	                                }(prerenderWindow, el);
	                                var _autoResize$width = autoResize.width, width = void 0 !== _autoResize$width && _autoResize$width, _autoResize$height = autoResize.height, height = void 0 !== _autoResize$height && _autoResize$height, _autoResize$element = autoResize.element, element = void 0 === _autoResize$element ? "body" : _autoResize$element;
	                                if ((element = getElementSafe(element, doc)) && (width || height)) {
	                                    var prerenderResizeListener = onResize(element, (function(_ref8) {
	                                        resize({
	                                            width: width ? _ref8.width : void 0,
	                                            height: height ? _ref8.height : void 0
	                                        });
	                                    }), {
	                                        width: width,
	                                        height: height,
	                                        win: prerenderWindow
	                                    });
	                                    event.on(EVENT.RENDERED, prerenderResizeListener.cancel);
	                                }
	                            }
	                        }
	                    }
	                }));
	            };
	            var renderContainer = function(proxyContainer, _ref9) {
	                var proxyFrame = _ref9.proxyFrame, proxyPrerenderFrame = _ref9.proxyPrerenderFrame, context = _ref9.context, uid = _ref9.uid;
	                return renderContainerOverride ? renderContainerOverride(proxyContainer, {
	                    proxyFrame: proxyFrame,
	                    proxyPrerenderFrame: proxyPrerenderFrame,
	                    context: context,
	                    uid: uid
	                }) : promise_ZalgoPromise.hash({
	                    container: proxyContainer.get(),
	                    frame: proxyFrame ? proxyFrame.get() : null,
	                    prerenderFrame: proxyPrerenderFrame ? proxyPrerenderFrame.get() : null,
	                    internalState: getInternalState()
	                }).then((function(_ref10) {
	                    var container = _ref10.container, visible = _ref10.internalState.visible;
	                    var innerContainer = renderTemplate(containerTemplate, {
	                        context: context,
	                        uid: uid,
	                        container: container,
	                        frame: _ref10.frame,
	                        prerenderFrame: _ref10.prerenderFrame,
	                        doc: document
	                    });
	                    if (innerContainer) {
	                        visible || hideElement(innerContainer);
	                        appendChild(container, innerContainer);
	                        var containerWatcher = function(element, handler) {
	                            handler = once(handler);
	                            var cancelled = !1;
	                            var mutationObservers = [];
	                            var interval;
	                            var sacrificialFrame;
	                            var sacrificialFrameWin;
	                            var cancel = function() {
	                                cancelled = !0;
	                                for (var _i18 = 0; _i18 < mutationObservers.length; _i18++) mutationObservers[_i18].disconnect();
	                                interval && interval.cancel();
	                                sacrificialFrameWin && sacrificialFrameWin.removeEventListener("unload", elementClosed);
	                                sacrificialFrame && destroyElement(sacrificialFrame);
	                            };
	                            var elementClosed = function() {
	                                if (!cancelled) {
	                                    handler();
	                                    cancel();
	                                }
	                            };
	                            if (isElementClosed(element)) {
	                                elementClosed();
	                                return {
	                                    cancel: cancel
	                                };
	                            }
	                            if (window.MutationObserver) {
	                                var mutationElement = element.parentElement;
	                                for (;mutationElement; ) {
	                                    var mutationObserver = new window.MutationObserver((function() {
	                                        isElementClosed(element) && elementClosed();
	                                    }));
	                                    mutationObserver.observe(mutationElement, {
	                                        childList: !0
	                                    });
	                                    mutationObservers.push(mutationObserver);
	                                    mutationElement = mutationElement.parentElement;
	                                }
	                            }
	                            (sacrificialFrame = document.createElement("iframe")).setAttribute("name", "__detect_close_" + uniqueID() + "__");
	                            sacrificialFrame.style.display = "none";
	                            awaitFrameWindow(sacrificialFrame).then((function(frameWin) {
	                                (sacrificialFrameWin = assertSameDomain(frameWin)).addEventListener("unload", elementClosed);
	                            }));
	                            element.appendChild(sacrificialFrame);
	                            interval = safeInterval((function() {
	                                isElementClosed(element) && elementClosed();
	                            }), 1e3);
	                            return {
	                                cancel: cancel
	                            };
	                        }(innerContainer, (function() {
	                            return close(new Error("Detected container element removed from DOM"));
	                        }));
	                        clean.register((function() {
	                            return containerWatcher.cancel();
	                        }));
	                        clean.register((function() {
	                            return destroyElement(innerContainer);
	                        }));
	                        return currentProxyContainer = getProxyObject(innerContainer);
	                    }
	                }));
	            };
	            var getHelpers = function() {
	                return {
	                    state: state,
	                    event: event,
	                    close: close,
	                    focus: focus,
	                    resize: resize,
	                    onError: onError,
	                    updateProps: updateProps,
	                    show: show,
	                    hide: hide
	                };
	            };
	            var setProps = function(newProps, isUpdate) {
	                void 0 === isUpdate && (isUpdate = !1);
	                var helpers = getHelpers();
	                !function(propsDef, props, inputProps, helpers, isUpdate) {
	                    void 0 === isUpdate && (isUpdate = !1);
	                    extend(props, inputProps = inputProps || {});
	                    var propNames = isUpdate ? [] : [].concat(Object.keys(propsDef));
	                    for (var _i2 = 0, _Object$keys2 = Object.keys(inputProps); _i2 < _Object$keys2.length; _i2++) {
	                        var key = _Object$keys2[_i2];
	                        -1 === propNames.indexOf(key) && propNames.push(key);
	                    }
	                    var aliases = [];
	                    var state = helpers.state, close = helpers.close, focus = helpers.focus, event = helpers.event, onError = helpers.onError;
	                    for (var _i4 = 0; _i4 < propNames.length; _i4++) {
	                        var _key = propNames[_i4];
	                        var propDef = propsDef[_key];
	                        var value = inputProps[_key];
	                        if (propDef) {
	                            var alias = propDef.alias;
	                            if (alias) {
	                                !isDefined(value) && isDefined(inputProps[alias]) && (value = inputProps[alias]);
	                                aliases.push(alias);
	                            }
	                            propDef.value && (value = propDef.value({
	                                props: props,
	                                state: state,
	                                close: close,
	                                focus: focus,
	                                event: event,
	                                onError: onError
	                            }));
	                            !isDefined(value) && propDef.default && (value = propDef.default({
	                                props: props,
	                                state: state,
	                                close: close,
	                                focus: focus,
	                                event: event,
	                                onError: onError
	                            }));
	                            if (isDefined(value) && ("array" === propDef.type ? !Array.isArray(value) : typeof value !== propDef.type)) throw new TypeError("Prop is not of type " + propDef.type + ": " + _key);
	                            props[_key] = value;
	                        }
	                    }
	                    for (var _i6 = 0; _i6 < aliases.length; _i6++) delete props[aliases[_i6]];
	                    for (var _i8 = 0, _Object$keys4 = Object.keys(props); _i8 < _Object$keys4.length; _i8++) {
	                        var _key2 = _Object$keys4[_i8];
	                        var _propDef = propsDef[_key2];
	                        var _value = props[_key2];
	                        _propDef && isDefined(_value) && _propDef.decorate && (props[_key2] = _propDef.decorate({
	                            value: _value,
	                            props: props,
	                            state: state,
	                            close: close,
	                            focus: focus,
	                            event: event,
	                            onError: onError
	                        }));
	                    }
	                    for (var _i10 = 0, _Object$keys6 = Object.keys(propsDef); _i10 < _Object$keys6.length; _i10++) {
	                        var _key3 = _Object$keys6[_i10];
	                        if (!1 !== propsDef[_key3].required && !isDefined(props[_key3])) throw new Error('Expected prop "' + _key3 + '" to be defined');
	                    }
	                }(propsDef, props, newProps, helpers, isUpdate);
	            };
	            var updateProps = function(newProps) {
	                setProps(newProps, !0);
	                return initPromise.then((function() {
	                    var child = childComponent;
	                    var proxyWin = currentProxyWin;
	                    if (child && proxyWin) return getPropsForChild(getDomainMatcher()).then((function(childProps) {
	                        return child.updateProps(childProps).catch((function(err) {
	                            return checkWindowClose(proxyWin).then((function(closed) {
	                                if (!closed) throw err;
	                            }));
	                        }));
	                    }));
	                }));
	            };
	            return {
	                init: function() {
	                    !function() {
	                        event.on(EVENT.RENDER, (function() {
	                            return props.onRender();
	                        }));
	                        event.on(EVENT.DISPLAY, (function() {
	                            return props.onDisplay();
	                        }));
	                        event.on(EVENT.RENDERED, (function() {
	                            return props.onRendered();
	                        }));
	                        event.on(EVENT.CLOSE, (function() {
	                            return props.onClose();
	                        }));
	                        event.on(EVENT.DESTROY, (function() {
	                            return props.onDestroy();
	                        }));
	                        event.on(EVENT.RESIZE, (function() {
	                            return props.onResize();
	                        }));
	                        event.on(EVENT.FOCUS, (function() {
	                            return props.onFocus();
	                        }));
	                        event.on(EVENT.PROPS, (function(newProps) {
	                            return props.onProps(newProps);
	                        }));
	                        event.on(EVENT.ERROR, (function(err) {
	                            return props && props.onError ? props.onError(err) : initPromise.reject(err).then((function() {
	                                setTimeout((function() {
	                                    throw err;
	                                }), 1);
	                            }));
	                        }));
	                        clean.register(event.reset);
	                    }();
	                },
	                render: function(target, container, context) {
	                    return promise_ZalgoPromise.try((function() {
	                        var uid = "zoid-" + tag + "-" + uniqueID();
	                        var domain = getDomainMatcher();
	                        var childDomain = getChildDomain();
	                        !function(target, domain, container) {
	                            if (target !== window) {
	                                if (!isSameTopWindow(window, target)) throw new Error("Can only renderTo an adjacent frame");
	                                var origin = getDomain();
	                                if (!matchDomain(domain, origin) && !isSameDomain(target)) throw new Error("Can not render remotely to " + domain.toString() + " - can only render to " + origin);
	                                if (container && "string" != typeof container) throw new Error("Container passed to renderTo must be a string selector, got " + typeof container + " }");
	                            }
	                        }(target, domain, container);
	                        var delegatePromise = promise_ZalgoPromise.try((function() {
	                            if (target !== window) return function(context, target) {
	                                var delegateProps = {};
	                                for (var _i4 = 0, _Object$keys4 = Object.keys(props); _i4 < _Object$keys4.length; _i4++) {
	                                    var propName = _Object$keys4[_i4];
	                                    var propDef = propsDef[propName];
	                                    propDef && propDef.allowDelegate && (delegateProps[propName] = props[propName]);
	                                }
	                                var childOverridesPromise = send_send(target, "zoid_delegate_" + name, {
	                                    overrides: {
	                                        props: delegateProps,
	                                        event: event,
	                                        close: close,
	                                        onError: onError,
	                                        getInternalState: getInternalState,
	                                        setInternalState: setInternalState
	                                    }
	                                }).then((function(_ref11) {
	                                    var parentComp = _ref11.data.parent;
	                                    clean.register((function(err) {
	                                        if (!isWindowClosed(target)) return parentComp.destroy(err);
	                                    }));
	                                    return parentComp.getDelegateOverrides();
	                                })).catch((function(err) {
	                                    throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + stringifyError(err));
	                                }));
	                                getProxyContainerOverride = function() {
	                                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	                                    return childOverridesPromise.then((function(childOverrides) {
	                                        return childOverrides.getProxyContainer.apply(childOverrides, args);
	                                    }));
	                                };
	                                renderContainerOverride = function() {
	                                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
	                                    return childOverridesPromise.then((function(childOverrides) {
	                                        return childOverrides.renderContainer.apply(childOverrides, args);
	                                    }));
	                                };
	                                showOverride = function() {
	                                    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
	                                    return childOverridesPromise.then((function(childOverrides) {
	                                        return childOverrides.show.apply(childOverrides, args);
	                                    }));
	                                };
	                                hideOverride = function() {
	                                    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
	                                    return childOverridesPromise.then((function(childOverrides) {
	                                        return childOverrides.hide.apply(childOverrides, args);
	                                    }));
	                                };
	                                watchForUnloadOverride = function() {
	                                    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) args[_key5] = arguments[_key5];
	                                    return childOverridesPromise.then((function(childOverrides) {
	                                        return childOverrides.watchForUnload.apply(childOverrides, args);
	                                    }));
	                                };
	                                if (context === CONTEXT.IFRAME) {
	                                    getProxyWindowOverride = function() {
	                                        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
	                                        return childOverridesPromise.then((function(childOverrides) {
	                                            return childOverrides.getProxyWindow.apply(childOverrides, args);
	                                        }));
	                                    };
	                                    openFrameOverride = function() {
	                                        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) args[_key7] = arguments[_key7];
	                                        return childOverridesPromise.then((function(childOverrides) {
	                                            return childOverrides.openFrame.apply(childOverrides, args);
	                                        }));
	                                    };
	                                    openPrerenderFrameOverride = function() {
	                                        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) args[_key8] = arguments[_key8];
	                                        return childOverridesPromise.then((function(childOverrides) {
	                                            return childOverrides.openPrerenderFrame.apply(childOverrides, args);
	                                        }));
	                                    };
	                                    prerenderOverride = function() {
	                                        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) args[_key9] = arguments[_key9];
	                                        return childOverridesPromise.then((function(childOverrides) {
	                                            return childOverrides.prerender.apply(childOverrides, args);
	                                        }));
	                                    };
	                                    openOverride = function() {
	                                        for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) args[_key10] = arguments[_key10];
	                                        return childOverridesPromise.then((function(childOverrides) {
	                                            return childOverrides.open.apply(childOverrides, args);
	                                        }));
	                                    };
	                                    openPrerenderOverride = function() {
	                                        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) args[_key11] = arguments[_key11];
	                                        return childOverridesPromise.then((function(childOverrides) {
	                                            return childOverrides.openPrerender.apply(childOverrides, args);
	                                        }));
	                                    };
	                                }
	                                return childOverridesPromise;
	                            }(context, target);
	                        }));
	                        var windowProp = props.window;
	                        var watchForUnloadPromise = watchForUnload();
	                        var buildUrlPromise = function(propsDef, props) {
	                            var params = {};
	                            var keys = Object.keys(props);
	                            return promise_ZalgoPromise.all(keys.map((function(key) {
	                                var prop = propsDef[key];
	                                if (prop) return promise_ZalgoPromise.resolve().then((function() {
	                                    var value = props[key];
	                                    if (value && prop.queryParam) return value;
	                                })).then((function(value) {
	                                    if (null != value) return promise_ZalgoPromise.all([ props_getQueryParam(prop, key, value), getQueryValue(prop, 0, value) ]).then((function(_ref) {
	                                        var queryParam = _ref[0], queryValue = _ref[1];
	                                        var result;
	                                        if ("boolean" == typeof queryValue) result = queryValue.toString(); else if ("string" == typeof queryValue) result = queryValue.toString(); else if ("object" == typeof queryValue && null !== queryValue) {
	                                            if (prop.serialization === PROP_SERIALIZATION.JSON) result = JSON.stringify(queryValue); else if (prop.serialization === PROP_SERIALIZATION.BASE64) result = btoa(JSON.stringify(queryValue)); else if (prop.serialization === PROP_SERIALIZATION.DOTIFY || !prop.serialization) {
	                                                result = function dotify(obj, prefix, newobj) {
	                                                    void 0 === prefix && (prefix = "");
	                                                    void 0 === newobj && (newobj = {});
	                                                    prefix = prefix ? prefix + "." : prefix;
	                                                    for (var key in obj) obj.hasOwnProperty(key) && null != obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every((function(val) {
	                                                        return "object" != typeof val;
	                                                    })) ? newobj["" + prefix + key + "[]"] = obj[key].join(",") : obj[key] && "object" == typeof obj[key] ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = obj[key].toString());
	                                                    return newobj;
	                                                }(queryValue, key);
	                                                for (var _i12 = 0, _Object$keys8 = Object.keys(result); _i12 < _Object$keys8.length; _i12++) {
	                                                    var dotkey = _Object$keys8[_i12];
	                                                    params[dotkey] = result[dotkey];
	                                                }
	                                                return;
	                                            }
	                                        } else "number" == typeof queryValue && (result = queryValue.toString());
	                                        params[queryParam] = result;
	                                    }));
	                                }));
	                            }))).then((function() {
	                                return params;
	                            }));
	                        }(propsDef, props).then((function(query) {
	                            return function(url, options) {
	                                var query = options.query || {};
	                                var hash = options.hash || {};
	                                var originalUrl;
	                                var originalHash;
	                                var _url$split = url.split("#");
	                                originalHash = _url$split[1];
	                                var _originalUrl$split = (originalUrl = _url$split[0]).split("?");
	                                originalUrl = _originalUrl$split[0];
	                                var queryString = extendQuery(_originalUrl$split[1], query);
	                                var hashString = extendQuery(originalHash, hash);
	                                queryString && (originalUrl = originalUrl + "?" + queryString);
	                                hashString && (originalUrl = originalUrl + "#" + hashString);
	                                return originalUrl;
	                            }(function(url) {
	                                if (!(domain = getDomainFromUrl(url), 0 === domain.indexOf("mock:"))) return url;
	                                var domain;
	                                throw new Error("Mock urls not supported out of test mode");
	                            }(getUrl()), {
	                                query: query
	                            });
	                        }));
	                        var onRenderPromise = event.trigger(EVENT.RENDER);
	                        var getProxyContainerPromise = getProxyContainer(container);
	                        var getProxyWindowPromise = getProxyWindow();
	                        var buildWindowNamePromise = getProxyWindowPromise.then((function(proxyWin) {
	                            return function(_temp) {
	                                var _ref4 = void 0 === _temp ? {} : _temp, proxyWin = _ref4.proxyWin, childDomain = _ref4.childDomain, domain = _ref4.domain, context = (void 0 === _ref4.target && window, 
	                                _ref4.context), uid = _ref4.uid;
	                                return function(proxyWin, childDomain, domain, uid) {
	                                    return getPropsForChild(domain).then((function(childProps) {
	                                        var value = setup_serializeMessage(proxyWin, domain, childProps);
	                                        var propRef = childDomain === getDomain() ? {
	                                            type: "uid",
	                                            uid: uid
	                                        } : {
	                                            type: "raw",
	                                            value: value
	                                        };
	                                        if ("uid" === propRef.type) {
	                                            var global = lib_global_getGlobal(window);
	                                            global.props = global.props || {};
	                                            global.props[uid] = value;
	                                            clean.register((function() {
	                                                delete global.props[uid];
	                                            }));
	                                        }
	                                        return propRef;
	                                    }));
	                                }(proxyWin, childDomain, domain, uid).then((function(propsRef) {
	                                    return {
	                                        uid: uid,
	                                        context: context,
	                                        tag: tag,
	                                        version: "9_0_63",
	                                        childDomain: childDomain,
	                                        parentDomain: getDomain(window),
	                                        parent: getWindowRef(0, childDomain, uid, context),
	                                        props: propsRef,
	                                        exports: setup_serializeMessage(proxyWin, domain, (win = proxyWin, {
	                                            init: initChild,
	                                            close: close,
	                                            checkClose: function() {
	                                                return checkWindowClose(win);
	                                            },
	                                            resize: resize,
	                                            onError: onError,
	                                            show: show,
	                                            hide: hide
	                                        }))
	                                    };
	                                    var win;
	                                }));
	                            }({
	                                proxyWin: (_ref5 = {
	                                    proxyWin: proxyWin,
	                                    childDomain: childDomain,
	                                    domain: domain,
	                                    target: target,
	                                    context: context,
	                                    uid: uid
	                                }).proxyWin,
	                                childDomain: _ref5.childDomain,
	                                domain: _ref5.domain,
	                                target: _ref5.target,
	                                context: _ref5.context,
	                                uid: _ref5.uid
	                            }).then((function(childPayload) {
	                                return "__zoid__" + name + "__" + base64encode(JSON.stringify(childPayload)) + "__";
	                            }));
	                            var _ref5;
	                        }));
	                        var openFramePromise = buildWindowNamePromise.then((function(windowName) {
	                            return openFrame(context, {
	                                windowName: windowName
	                            });
	                        }));
	                        var openPrerenderFramePromise = openPrerenderFrame(context);
	                        var renderContainerPromise = promise_ZalgoPromise.hash({
	                            proxyContainer: getProxyContainerPromise,
	                            proxyFrame: openFramePromise,
	                            proxyPrerenderFrame: openPrerenderFramePromise
	                        }).then((function(_ref12) {
	                            return renderContainer(_ref12.proxyContainer, {
	                                context: context,
	                                uid: uid,
	                                proxyFrame: _ref12.proxyFrame,
	                                proxyPrerenderFrame: _ref12.proxyPrerenderFrame
	                            });
	                        })).then((function(proxyContainer) {
	                            return proxyContainer;
	                        }));
	                        var openPromise = promise_ZalgoPromise.hash({
	                            windowName: buildWindowNamePromise,
	                            proxyFrame: openFramePromise,
	                            proxyWin: getProxyWindowPromise
	                        }).then((function(_ref13) {
	                            var proxyWin = _ref13.proxyWin;
	                            return windowProp ? proxyWin : open(context, {
	                                windowName: _ref13.windowName,
	                                proxyWin: proxyWin,
	                                proxyFrame: _ref13.proxyFrame
	                            });
	                        }));
	                        var openPrerenderPromise = promise_ZalgoPromise.hash({
	                            proxyWin: openPromise,
	                            proxyPrerenderFrame: openPrerenderFramePromise
	                        }).then((function(_ref14) {
	                            return openPrerender(context, _ref14.proxyWin, _ref14.proxyPrerenderFrame);
	                        }));
	                        var setStatePromise = openPromise.then((function(proxyWin) {
	                            currentProxyWin = proxyWin;
	                            return setProxyWin(proxyWin);
	                        }));
	                        var prerenderPromise = promise_ZalgoPromise.hash({
	                            proxyPrerenderWin: openPrerenderPromise,
	                            state: setStatePromise
	                        }).then((function(_ref15) {
	                            return prerender(_ref15.proxyPrerenderWin, {
	                                context: context,
	                                uid: uid
	                            });
	                        }));
	                        var setWindowNamePromise = promise_ZalgoPromise.hash({
	                            proxyWin: openPromise,
	                            windowName: buildWindowNamePromise
	                        }).then((function(_ref16) {
	                            if (windowProp) return _ref16.proxyWin.setName(_ref16.windowName);
	                        }));
	                        var loadUrlPromise = promise_ZalgoPromise.hash({
	                            proxyWin: openPromise,
	                            builtUrl: buildUrlPromise,
	                            windowName: setWindowNamePromise,
	                            prerender: prerenderPromise
	                        }).then((function(_ref17) {
	                            return _ref17.proxyWin.setLocation(_ref17.builtUrl);
	                        }));
	                        var watchForClosePromise = openPromise.then((function(proxyWin) {
	                            !function watchForClose(proxyWin, context) {
	                                var cancelled = !1;
	                                clean.register((function() {
	                                    cancelled = !0;
	                                }));
	                                return promise_ZalgoPromise.delay(2e3).then((function() {
	                                    return proxyWin.isClosed();
	                                })).then((function(isClosed) {
	                                    return isClosed ? close(new Error("Detected " + context + " close")) : cancelled ? void 0 : watchForClose(proxyWin, context);
	                                }));
	                            }(proxyWin, context);
	                        }));
	                        var onDisplayPromise = promise_ZalgoPromise.hash({
	                            container: renderContainerPromise,
	                            prerender: prerenderPromise
	                        }).then((function() {
	                            return event.trigger(EVENT.DISPLAY);
	                        }));
	                        var openBridgePromise = openPromise.then((function(proxyWin) {}));
	                        var runTimeoutPromise = loadUrlPromise.then((function() {
	                            return promise_ZalgoPromise.try((function() {
	                                var timeout = props.timeout;
	                                if (timeout) return initPromise.timeout(timeout, new Error("Loading component timed out after " + timeout + " milliseconds"));
	                            }));
	                        }));
	                        var onRenderedPromise = initPromise.then((function() {
	                            return event.trigger(EVENT.RENDERED);
	                        }));
	                        return promise_ZalgoPromise.hash({
	                            initPromise: initPromise,
	                            buildUrlPromise: buildUrlPromise,
	                            onRenderPromise: onRenderPromise,
	                            getProxyContainerPromise: getProxyContainerPromise,
	                            openFramePromise: openFramePromise,
	                            openPrerenderFramePromise: openPrerenderFramePromise,
	                            renderContainerPromise: renderContainerPromise,
	                            openPromise: openPromise,
	                            openPrerenderPromise: openPrerenderPromise,
	                            setStatePromise: setStatePromise,
	                            prerenderPromise: prerenderPromise,
	                            loadUrlPromise: loadUrlPromise,
	                            buildWindowNamePromise: buildWindowNamePromise,
	                            setWindowNamePromise: setWindowNamePromise,
	                            watchForClosePromise: watchForClosePromise,
	                            onDisplayPromise: onDisplayPromise,
	                            openBridgePromise: openBridgePromise,
	                            runTimeoutPromise: runTimeoutPromise,
	                            onRenderedPromise: onRenderedPromise,
	                            delegatePromise: delegatePromise,
	                            watchForUnloadPromise: watchForUnloadPromise
	                        });
	                    })).catch((function(err) {
	                        return promise_ZalgoPromise.all([ onError(err), destroy(err) ]).then((function() {
	                            throw err;
	                        }), (function() {
	                            throw err;
	                        }));
	                    })).then(src_util_noop);
	                },
	                destroy: destroy,
	                setProps: setProps,
	                getHelpers: getHelpers,
	                getDelegateOverrides: function() {
	                    return promise_ZalgoPromise.try((function() {
	                        return {
	                            getProxyContainer: getProxyContainer,
	                            show: show,
	                            hide: hide,
	                            renderContainer: renderContainer,
	                            getProxyWindow: getProxyWindow,
	                            watchForUnload: watchForUnload,
	                            openFrame: openFrame,
	                            openPrerenderFrame: openPrerenderFrame,
	                            prerender: prerender,
	                            open: open,
	                            openPrerender: openPrerender,
	                            setProxyWin: setProxyWin
	                        };
	                    }));
	                }
	            };
	        }
	        var react = {
	            register: function(tag, propsDef, init, _ref) {
	                var React = _ref.React, ReactDOM = _ref.ReactDOM;
	                return function(_React$Component) {
	                    _inheritsLoose(_class, _React$Component);
	                    function _class() {
	                        return _React$Component.apply(this, arguments) || this;
	                    }
	                    var _proto = _class.prototype;
	                    _proto.render = function() {
	                        return React.createElement("div", null);
	                    };
	                    _proto.componentDidMount = function() {
	                        var el = ReactDOM.findDOMNode(this);
	                        var parent = init(extend({}, this.props));
	                        parent.render(el, CONTEXT.IFRAME);
	                        this.setState({
	                            parent: parent
	                        });
	                    };
	                    _proto.componentDidUpdate = function() {
	                        this.state && this.state.parent && this.state.parent.updateProps(extend({}, this.props)).catch(src_util_noop);
	                    };
	                    return _class;
	                }(React.Component);
	            }
	        };
	        var vue = {
	            register: function(tag, propsDef, init, Vue) {
	                return Vue.component(tag, {
	                    render: function(createElement) {
	                        return createElement("div");
	                    },
	                    inheritAttrs: !1,
	                    mounted: function() {
	                        var el = this.$el;
	                        this.parent = init(_extends({}, this.$attrs));
	                        this.parent.render(el, CONTEXT.IFRAME);
	                    },
	                    watch: {
	                        $attrs: {
	                            handler: function() {
	                                this.parent && this.$attrs && this.parent.updateProps(_extends({}, this.$attrs)).catch(src_util_noop);
	                            },
	                            deep: !0
	                        }
	                    }
	                });
	            }
	        };
	        var angular = {
	            register: function(tag, propsDef, init, ng) {
	                return ng.module(tag, []).directive(tag.replace(/-([a-z])/g, (function(g) {
	                    return g[1].toUpperCase();
	                })), (function() {
	                    var scope = {};
	                    for (var _i2 = 0, _Object$keys2 = Object.keys(propsDef); _i2 < _Object$keys2.length; _i2++) scope[_Object$keys2[_i2]] = "=";
	                    scope.props = "=";
	                    return {
	                        scope: scope,
	                        restrict: "E",
	                        controller: [ "$scope", "$element", function($scope, $element) {
	                            function safeApply() {
	                                if ("$apply" !== $scope.$root.$$phase && "$digest" !== $scope.$root.$$phase) try {
	                                    $scope.$apply();
	                                } catch (err) {}
	                            }
	                            var getProps = function() {
	                                return replaceObject($scope.props, (function(item) {
	                                    return "function" == typeof item ? function() {
	                                        var result = item.apply(this, arguments);
	                                        safeApply();
	                                        return result;
	                                    } : item;
	                                }));
	                            };
	                            var instance = init(getProps());
	                            instance.render($element[0], CONTEXT.IFRAME);
	                            $scope.$watch((function() {
	                                instance.updateProps(getProps()).catch(src_util_noop);
	                            }));
	                        } ]
	                    };
	                }));
	            }
	        };
	        var angular2 = {
	            register: function(tag, propsDef, init, _ref) {
	                var NgModule = _ref.NgModule, ElementRef = _ref.ElementRef, NgZone = _ref.NgZone;
	                var getProps = function(component) {
	                    return replaceObject(_extends({}, component.internalProps, component.props), (function(item) {
	                        return "function" == typeof item ? function() {
	                            var _arguments = arguments, _this = this;
	                            return component.zone.run((function() {
	                                return item.apply(_this, _arguments);
	                            }));
	                        } : item;
	                    }));
	                };
	                var ComponentInstance = (0, _ref.Component)({
	                    selector: tag,
	                    template: "<div></div>",
	                    inputs: [ "props" ]
	                }).Class({
	                    constructor: [ ElementRef, NgZone, function(elementRef, zone) {
	                        this._props = {};
	                        this.elementRef = elementRef;
	                        this.zone = zone;
	                    } ],
	                    ngOnInit: function() {
	                        var targetElement = this.elementRef.nativeElement;
	                        this.parent = init(getProps(this));
	                        this.parent.render(targetElement, CONTEXT.IFRAME);
	                    },
	                    ngDoCheck: function() {
	                        if (this.parent && !function(obj1, obj2) {
	                            var checked = {};
	                            for (var key in obj1) if (obj1.hasOwnProperty(key)) {
	                                checked[key] = !0;
	                                if (obj1[key] !== obj2[key]) return !1;
	                            }
	                            for (var _key in obj2) if (!checked[_key]) return !1;
	                            return !0;
	                        }(this._props, this.props)) {
	                            this._props = _extends({}, this.props);
	                            this.parent.updateProps(getProps(this));
	                        }
	                    }
	                });
	                return NgModule({
	                    declarations: [ ComponentInstance ],
	                    exports: [ ComponentInstance ]
	                }).Class({
	                    constructor: function() {}
	                });
	            }
	        };
	        function defaultContainerTemplate(_ref) {
	            var uid = _ref.uid, frame = _ref.frame, prerenderFrame = _ref.prerenderFrame, doc = _ref.doc, props = _ref.props, event = _ref.event, _ref$dimensions = _ref.dimensions, width = _ref$dimensions.width, height = _ref$dimensions.height;
	            if (frame && prerenderFrame) {
	                var div = doc.createElement("div");
	                div.setAttribute("id", uid);
	                var style = doc.createElement("style");
	                props.cspNonce && style.setAttribute("nonce", props.cspNonce);
	                style.appendChild(doc.createTextNode("\n            #" + uid + " {\n                display: inline-block;\n                position: relative;\n                width: " + width + ";\n                height: " + height + ";\n            }\n\n            #" + uid + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + uid + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + uid + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "));
	                div.appendChild(frame);
	                div.appendChild(prerenderFrame);
	                div.appendChild(style);
	                prerenderFrame.classList.add("zoid-visible");
	                frame.classList.add("zoid-invisible");
	                event.on(EVENT.RENDERED, (function() {
	                    prerenderFrame.classList.remove("zoid-visible");
	                    prerenderFrame.classList.add("zoid-invisible");
	                    frame.classList.remove("zoid-invisible");
	                    frame.classList.add("zoid-visible");
	                    setTimeout((function() {
	                        destroyElement(prerenderFrame);
	                    }), 1);
	                }));
	                event.on(EVENT.RESIZE, (function(_ref2) {
	                    var newWidth = _ref2.width, newHeight = _ref2.height;
	                    "number" == typeof newWidth && (div.style.width = toCSS(newWidth));
	                    "number" == typeof newHeight && (div.style.height = toCSS(newHeight));
	                }));
	                return div;
	            }
	        }
	        function defaultPrerenderTemplate(_ref) {
	            var doc = _ref.doc, props = _ref.props;
	            var html = doc.createElement("html");
	            var body = doc.createElement("body");
	            var style = doc.createElement("style");
	            var spinner = doc.createElement("div");
	            spinner.classList.add("spinner");
	            props.cspNonce && style.setAttribute("nonce", props.cspNonce);
	            html.appendChild(body);
	            body.appendChild(spinner);
	            body.appendChild(style);
	            style.appendChild(doc.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "));
	            return html;
	        }
	        var props_defaultNoop = function() {
	            return src_util_noop;
	        };
	        var props_decorateOnce = function(_ref) {
	            return once(_ref.value);
	        };
	        var cleanInstances = cleanup();
	        var cleanZoid = cleanup();
	        function component_component(opts) {
	            var options = function(options) {
	                var tag = options.tag, url = options.url, domain = options.domain, bridgeUrl = options.bridgeUrl, _options$props = options.props, propsDef = void 0 === _options$props ? {} : _options$props, _options$dimensions = options.dimensions, dimensions = void 0 === _options$dimensions ? {} : _options$dimensions, _options$autoResize = options.autoResize, autoResize = void 0 === _options$autoResize ? {} : _options$autoResize, _options$allowedParen = options.allowedParentDomains, allowedParentDomains = void 0 === _options$allowedParen ? "*" : _options$allowedParen, _options$attributes = options.attributes, attributes = void 0 === _options$attributes ? {} : _options$attributes, _options$defaultConte = options.defaultContext, defaultContext = void 0 === _options$defaultConte ? CONTEXT.IFRAME : _options$defaultConte, _options$containerTem = options.containerTemplate, containerTemplate = void 0 === _options$containerTem ? defaultContainerTemplate : _options$containerTem, _options$prerenderTem = options.prerenderTemplate, prerenderTemplate = void 0 === _options$prerenderTem ? defaultPrerenderTemplate : _options$prerenderTem, validate = options.validate, _options$eligible = options.eligible, eligible = void 0 === _options$eligible ? function() {
	                    return {
	                        eligible: !0
	                    };
	                } : _options$eligible, _options$logger = options.logger, logger = void 0 === _options$logger ? {
	                    info: src_util_noop
	                } : _options$logger;
	                var name = tag.replace(/-/g, "_");
	                var _dimensions$width = dimensions.width, width = void 0 === _dimensions$width ? "300px" : _dimensions$width, _dimensions$height = dimensions.height, height = void 0 === _dimensions$height ? "150px" : _dimensions$height;
	                propsDef = _extends({}, {
	                    window: {
	                        type: "object",
	                        sendToChild: !1,
	                        required: !1,
	                        allowDelegate: !0,
	                        validate: function(_ref2) {
	                            var value = _ref2.value;
	                            if (!isWindow(value) && !window_ProxyWindow.isProxyWindow(value)) throw new Error("Expected Window or ProxyWindow");
	                            if (isWindow(value)) {
	                                if (isWindowClosed(value)) throw new Error("Window is closed");
	                                if (!isSameDomain(value)) throw new Error("Window is not same domain");
	                            }
	                        },
	                        decorate: function(_ref3) {
	                            return setup_toProxyWindow(_ref3.value);
	                        }
	                    },
	                    timeout: {
	                        type: "number",
	                        required: !1,
	                        sendToChild: !1
	                    },
	                    close: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref4) {
	                            return _ref4.close;
	                        }
	                    },
	                    focus: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref5) {
	                            return _ref5.focus;
	                        }
	                    },
	                    resize: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref6) {
	                            return _ref6.resize;
	                        }
	                    },
	                    uid: {
	                        type: "string",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref7) {
	                            return _ref7.uid;
	                        }
	                    },
	                    cspNonce: {
	                        type: "string",
	                        required: !1
	                    },
	                    getParent: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref8) {
	                            return _ref8.getParent;
	                        }
	                    },
	                    getParentDomain: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref9) {
	                            return _ref9.getParentDomain;
	                        }
	                    },
	                    show: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref10) {
	                            return _ref10.show;
	                        }
	                    },
	                    hide: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref11) {
	                            return _ref11.hide;
	                        }
	                    },
	                    onDisplay: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        allowDelegate: !0,
	                        default: props_defaultNoop,
	                        decorate: props_decorateOnce
	                    },
	                    onRendered: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        default: props_defaultNoop,
	                        decorate: props_decorateOnce
	                    },
	                    onRender: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        default: props_defaultNoop,
	                        decorate: props_decorateOnce
	                    },
	                    onClose: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        allowDelegate: !0,
	                        default: props_defaultNoop,
	                        decorate: props_decorateOnce
	                    },
	                    onDestroy: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        allowDelegate: !0,
	                        default: props_defaultNoop,
	                        decorate: props_decorateOnce
	                    },
	                    onResize: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        allowDelegate: !0,
	                        default: props_defaultNoop
	                    },
	                    onFocus: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        allowDelegate: !0,
	                        default: props_defaultNoop
	                    },
	                    onError: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        childDecorate: function(_ref12) {
	                            return _ref12.onError;
	                        }
	                    },
	                    onProps: {
	                        type: "function",
	                        required: !1,
	                        sendToChild: !1,
	                        default: props_defaultNoop,
	                        childDecorate: function(_ref13) {
	                            return _ref13.onProps;
	                        }
	                    }
	                }, propsDef);
	                if (!containerTemplate) throw new Error("Container template required");
	                return {
	                    name: name,
	                    tag: tag,
	                    url: url,
	                    domain: domain,
	                    bridgeUrl: bridgeUrl,
	                    propsDef: propsDef,
	                    dimensions: {
	                        width: width,
	                        height: height
	                    },
	                    autoResize: autoResize,
	                    allowedParentDomains: allowedParentDomains,
	                    attributes: attributes,
	                    defaultContext: defaultContext,
	                    containerTemplate: containerTemplate,
	                    prerenderTemplate: prerenderTemplate,
	                    validate: validate,
	                    logger: logger,
	                    eligible: eligible
	                };
	            }(opts);
	            var name = options.name, tag = options.tag, defaultContext = options.defaultContext, propsDef = options.propsDef, eligible = options.eligible;
	            var global = lib_global_getGlobal();
	            var driverCache = {};
	            var instances = [];
	            var isChild = function() {
	                var payload = getChildPayload();
	                return Boolean(payload && payload.tag === tag && payload.childDomain === getDomain());
	            };
	            var registerChild = memoize((function() {
	                if (isChild()) {
	                    if (window.xprops) {
	                        delete global.components[tag];
	                        throw new Error("Can not register " + name + " as child - child already registered");
	                    }
	                    var child = function(options) {
	                        var propsDef = options.propsDef, autoResize = options.autoResize, allowedParentDomains = options.allowedParentDomains;
	                        var onPropHandlers = [];
	                        var childPayload = getChildPayload();
	                        var props;
	                        if (!childPayload) throw new Error("No child payload found");
	                        if ("9_0_63" !== childPayload.version) throw new Error("Parent window has zoid version " + childPayload.version + ", child window has version 9_0_63");
	                        var uid = childPayload.uid, parentDomain = childPayload.parentDomain, exports = childPayload.exports, context = childPayload.context, propsRef = childPayload.props;
	                        var parentComponentWindow = function(ref) {
	                            var type = ref.type;
	                            if ("opener" === type) return assertExists("opener", getOpener(window));
	                            if ("parent" === type && "number" == typeof ref.distance) return assertExists("parent", function(win, n) {
	                                void 0 === n && (n = 1);
	                                return function(win, n) {
	                                    void 0 === n && (n = 1);
	                                    var parent = win;
	                                    for (var i = 0; i < n; i++) {
	                                        if (!parent) return;
	                                        parent = utils_getParent(parent);
	                                    }
	                                    return parent;
	                                }(win, getDistanceFromTop(win) - n);
	                            }(window, ref.distance));
	                            if ("global" === type && ref.uid && "string" == typeof ref.uid) {
	                                var uid = ref.uid;
	                                var ancestor = getAncestor(window);
	                                if (!ancestor) throw new Error("Can not find ancestor window");
	                                for (var _i2 = 0, _getAllFramesInWindow2 = getAllFramesInWindow(ancestor); _i2 < _getAllFramesInWindow2.length; _i2++) {
	                                    var frame = _getAllFramesInWindow2[_i2];
	                                    if (isSameDomain(frame)) {
	                                        var global = lib_global_getGlobal(frame);
	                                        if (global && global.windows && global.windows[uid]) return global.windows[uid];
	                                    }
	                                }
	                            }
	                            throw new Error("Unable to find " + type + " parent component window");
	                        }(childPayload.parent);
	                        var parent = setup_deserializeMessage(parentComponentWindow, parentDomain, exports);
	                        var show = parent.show, hide = parent.hide, close = parent.close;
	                        var getParent = function() {
	                            return parentComponentWindow;
	                        };
	                        var getParentDomain = function() {
	                            return parentDomain;
	                        };
	                        var onProps = function(handler) {
	                            onPropHandlers.push(handler);
	                        };
	                        var onError = function(err) {
	                            return promise_ZalgoPromise.try((function() {
	                                if (parent && parent.onError) return parent.onError(err);
	                                throw err;
	                            }));
	                        };
	                        var resize = function(_ref2) {
	                            return parent.resize.fireAndForget({
	                                width: _ref2.width,
	                                height: _ref2.height
	                            });
	                        };
	                        var setProps = function(newProps, origin, isUpdate) {
	                            void 0 === isUpdate && (isUpdate = !1);
	                            var normalizedProps = function(parentComponentWindow, propsDef, props, origin, helpers, isUpdate) {
	                                void 0 === isUpdate && (isUpdate = !1);
	                                var result = {};
	                                for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
	                                    var key = _Object$keys2[_i2];
	                                    var prop = propsDef[key];
	                                    if (!prop || !prop.sameDomain || origin === getDomain(window) && isSameDomain(parentComponentWindow)) {
	                                        var value = normalizeChildProp(propsDef, 0, key, props[key], helpers);
	                                        result[key] = value;
	                                        prop && prop.alias && !result[prop.alias] && (result[prop.alias] = value);
	                                    }
	                                }
	                                if (!isUpdate) for (var _i4 = 0, _Object$keys4 = Object.keys(propsDef); _i4 < _Object$keys4.length; _i4++) {
	                                    var _key = _Object$keys4[_i4];
	                                    props.hasOwnProperty(_key) || (result[_key] = normalizeChildProp(propsDef, 0, _key, void 0, helpers));
	                                }
	                                return result;
	                            }(parentComponentWindow, propsDef, newProps, origin, {
	                                show: show,
	                                hide: hide,
	                                close: close,
	                                focus: child_focus,
	                                onError: onError,
	                                resize: resize,
	                                onProps: onProps,
	                                getParent: getParent,
	                                getParentDomain: getParentDomain,
	                                uid: uid
	                            }, isUpdate);
	                            props ? extend(props, normalizedProps) : props = normalizedProps;
	                            for (var _i4 = 0; _i4 < onPropHandlers.length; _i4++) (0, onPropHandlers[_i4])(props);
	                        };
	                        var updateProps = function(newProps) {
	                            return promise_ZalgoPromise.try((function() {
	                                return setProps(newProps, parentDomain, !0);
	                            }));
	                        };
	                        return {
	                            init: function() {
	                                return promise_ZalgoPromise.try((function() {
	                                    !function(allowedParentDomains, domain) {
	                                        if (!matchDomain(allowedParentDomains, domain)) throw new Error("Can not be rendered by domain: " + domain);
	                                    }(allowedParentDomains, parentDomain);
	                                    markWindowKnown(parentComponentWindow);
	                                    !function() {
	                                        window.addEventListener("beforeunload", (function() {
	                                            parent.checkClose.fireAndForget();
	                                        }));
	                                        window.addEventListener("unload", (function() {
	                                            parent.checkClose.fireAndForget();
	                                        }));
	                                        onCloseWindow(parentComponentWindow, (function() {
	                                            child_destroy();
	                                        }));
	                                    }();
	                                    return parent.init({
	                                        updateProps: updateProps,
	                                        close: child_destroy
	                                    });
	                                })).then((function() {
	                                    return (_autoResize$width = autoResize.width, width = void 0 !== _autoResize$width && _autoResize$width, 
	                                    _autoResize$height = autoResize.height, height = void 0 !== _autoResize$height && _autoResize$height, 
	                                    _autoResize$element = autoResize.element, elementReady(void 0 === _autoResize$element ? "body" : _autoResize$element).catch(src_util_noop).then((function(element) {
	                                        return {
	                                            width: width,
	                                            height: height,
	                                            element: element
	                                        };
	                                    }))).then((function(_ref3) {
	                                        var width = _ref3.width, height = _ref3.height, element = _ref3.element;
	                                        element && (width || height) && context !== CONTEXT.POPUP && onResize(element, (function(_ref4) {
	                                            resize({
	                                                width: width ? _ref4.width : void 0,
	                                                height: height ? _ref4.height : void 0
	                                            });
	                                        }), {
	                                            width: width,
	                                            height: height
	                                        });
	                                    }));
	                                    var _autoResize$width, width, _autoResize$height, height, _autoResize$element;
	                                })).catch((function(err) {
	                                    onError(err);
	                                }));
	                            },
	                            getProps: function() {
	                                if (props) return props;
	                                setProps(function(parentComponentWindow, domain, _ref) {
	                                    var type = _ref.type, uid = _ref.uid;
	                                    var props;
	                                    if ("raw" === type) props = _ref.value; else if ("uid" === type) {
	                                        if (!isSameDomain(parentComponentWindow)) throw new Error("Parent component window is on a different domain - expected " + getDomain() + " - can not retrieve props");
	                                        var global = lib_global_getGlobal(parentComponentWindow);
	                                        props = assertExists("props", global && global.props[uid]);
	                                    }
	                                    if (!props) throw new Error("Could not find props");
	                                    return setup_deserializeMessage(parentComponentWindow, domain, props);
	                                }(parentComponentWindow, parentDomain, propsRef), parentDomain);
	                                return props;
	                            }
	                        };
	                    }(options);
	                    child.init();
	                    return child;
	                }
	            }));
	            var init = function init(props) {
	                var instance;
	                var _eligible = eligible({
	                    props: props = props || {}
	                }), eligibility = _eligible.eligible, reason = _eligible.reason;
	                var onDestroy = props.onDestroy;
	                props.onDestroy = function() {
	                    instance && eligibility && instances.splice(instances.indexOf(instance), 1);
	                    if (onDestroy) return onDestroy.apply(void 0, arguments);
	                };
	                var parent = parentComponent(options);
	                parent.init();
	                eligibility ? parent.setProps(props) : props.onDestroy && props.onDestroy();
	                cleanInstances.register((function(err) {
	                    parent.destroy(err || new Error("zoid destroyed all components"));
	                }));
	                var _render = function(target, container, context) {
	                    return promise_ZalgoPromise.try((function() {
	                        if (!eligibility) {
	                            var err = new Error(reason || name + " component is not eligible");
	                            return parent.destroy(err).then((function() {
	                                throw err;
	                            }));
	                        }
	                        if (!isWindow(target)) throw new Error("Must pass window to renderTo");
	                        return function(props, context) {
	                            return promise_ZalgoPromise.try((function() {
	                                if (props.window) return setup_toProxyWindow(props.window).getType();
	                                if (context) {
	                                    if (context !== CONTEXT.IFRAME && context !== CONTEXT.POPUP) throw new Error("Unrecognized context: " + context);
	                                    return context;
	                                }
	                                return defaultContext;
	                            }));
	                        }(props, context);
	                    })).then((function(finalContext) {
	                        container = function(context, container) {
	                            if (container) {
	                                if ("string" != typeof container && !isElement(container)) throw new TypeError("Expected string or element selector to be passed");
	                                return container;
	                            }
	                            if (context === CONTEXT.POPUP) return "body";
	                            throw new Error("Expected element to be passed to render iframe");
	                        }(finalContext, container);
	                        return parent.render(target, container, finalContext);
	                    })).catch((function(err) {
	                        return parent.destroy(err).then((function() {
	                            throw err;
	                        }));
	                    }));
	                };
	                instance = _extends({}, parent.getHelpers(), {
	                    isEligible: function() {
	                        return eligibility;
	                    },
	                    clone: function(_temp) {
	                        var _ref3$decorate = (void 0 === _temp ? {} : _temp).decorate;
	                        return init((void 0 === _ref3$decorate ? identity : _ref3$decorate)(props));
	                    },
	                    render: function(container, context) {
	                        return _render(window, container, context);
	                    },
	                    renderTo: function(target, container, context) {
	                        return _render(target, container, context);
	                    }
	                });
	                eligibility && instances.push(instance);
	                return instance;
	            };
	            registerChild();
	            !function() {
	                var allowDelegateListener = on_on("zoid_allow_delegate_" + name, (function() {
	                    return !0;
	                }));
	                var delegateListener = on_on("zoid_delegate_" + name, (function(_ref) {
	                    return {
	                        parent: parentComponent(options, _ref.data.overrides, _ref.source)
	                    };
	                }));
	                cleanZoid.register(allowDelegateListener.cancel);
	                cleanZoid.register(delegateListener.cancel);
	            }();
	            global.components = global.components || {};
	            if (global.components[tag]) throw new Error("Can not register multiple components with the same tag: " + tag);
	            global.components[tag] = !0;
	            return {
	                init: init,
	                instances: instances,
	                driver: function(driverName, dep) {
	                    var drivers = {
	                        react: react,
	                        angular: angular,
	                        vue: vue,
	                        angular2: angular2
	                    };
	                    if (!drivers[driverName]) throw new Error("Could not find driver for framework: " + driverName);
	                    driverCache[driverName] || (driverCache[driverName] = drivers[driverName].register(tag, propsDef, init, dep));
	                    return driverCache[driverName];
	                },
	                isChild: isChild,
	                canRenderTo: function(win) {
	                    return send_send(win, "zoid_allow_delegate_" + name).then((function(_ref2) {
	                        return _ref2.data;
	                    })).catch((function() {
	                        return !1;
	                    }));
	                },
	                registerChild: registerChild
	            };
	        }
	        function create(options) {
	            !function() {
	                if (!global_getGlobal().initialized) {
	                    global_getGlobal().initialized = !0;
	                    on = (_ref3 = {
	                        on: on_on,
	                        send: send_send
	                    }).on, send = _ref3.send, (global = global_getGlobal()).receiveMessage = global.receiveMessage || function(message) {
	                        return receive_receiveMessage(message, {
	                            on: on,
	                            send: send
	                        });
	                    };
	                    !function(_ref5) {
	                        var on = _ref5.on, send = _ref5.send;
	                        globalStore().getOrSet("postMessageListener", (function() {
	                            return addEventListener(window, "message", (function(event) {
	                                !function(event, _ref4) {
	                                    var on = _ref4.on, send = _ref4.send;
	                                    promise_ZalgoPromise.try((function() {
	                                        var source = event.source || event.sourceElement;
	                                        var origin = event.origin || event.originalEvent && event.originalEvent.origin;
	                                        var data = event.data;
	                                        "null" === origin && (origin = "file://");
	                                        if (source) {
	                                            if (!origin) throw new Error("Post message did not have origin domain");
	                                            receive_receiveMessage({
	                                                source: source,
	                                                origin: origin,
	                                                data: data
	                                            }, {
	                                                on: on,
	                                                send: send
	                                            });
	                                        }
	                                    }));
	                                }(event, {
	                                    on: on,
	                                    send: send
	                                });
	                            }));
	                        }));
	                    }({
	                        on: on_on,
	                        send: send_send
	                    });
	                    !function(_ref8) {
	                        var on = _ref8.on, send = _ref8.send;
	                        globalStore("builtinListeners").getOrSet("helloListener", (function() {
	                            var listener = on("postrobot_hello", {
	                                domain: "*"
	                            }, (function(_ref3) {
	                                resolveHelloPromise(_ref3.source, {
	                                    domain: _ref3.origin
	                                });
	                                return {
	                                    instanceID: getInstanceID()
	                                };
	                            }));
	                            var parent = getAncestor();
	                            parent && sayHello(parent, {
	                                send: send
	                            }).catch((function(err) {}));
	                            return listener;
	                        }));
	                    }({
	                        on: on_on,
	                        send: send_send
	                    });
	                }
	                var _ref3, on, send, global;
	            }();
	            var comp = component_component(options);
	            var init = function(props) {
	                return comp.init(props);
	            };
	            init.driver = function(name, dep) {
	                return comp.driver(name, dep);
	            };
	            init.isChild = function() {
	                return comp.isChild();
	            };
	            init.canRenderTo = function(win) {
	                return comp.canRenderTo(win);
	            };
	            init.instances = comp.instances;
	            var child = comp.registerChild();
	            child && (window.xprops = init.xprops = child.getProps());
	            return init;
	        }
	        function destroyComponents(err) {
	            var destroyPromise = cleanInstances.all(err);
	            cleanInstances = cleanup();
	            return destroyPromise;
	        }
	        var destroyAll = destroyComponents;
	        function component_destroy(err) {
	            destroyAll();
	            delete window.__zoid_9_0_63__;
	            !function() {
	                !function() {
	                    var responseListeners = globalStore("responseListeners");
	                    for (var _i2 = 0, _responseListeners$ke2 = responseListeners.keys(); _i2 < _responseListeners$ke2.length; _i2++) {
	                        var hash = _responseListeners$ke2[_i2];
	                        var listener = responseListeners.get(hash);
	                        listener && (listener.cancelled = !0);
	                        responseListeners.del(hash);
	                    }
	                }();
	                (listener = globalStore().get("postMessageListener")) && listener.cancel();
	                var listener;
	                delete window.__post_robot_10_0_42__;
	            }();
	            return cleanZoid.all(err);
	        }
	    } ]);
	}));
	});

	const getCSS = ({ uid, themeColor, height, width, }) => `
/* Modal Content/Box */
@keyframes ${uid}_fadeIn {
  0% {
    opacity: 0;
  }
  50% {
   visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

#${uid} {
  /* prevent container el from taking site space */
  height: 0;
}

.${uid}_has_modal_visible {
  overflow: hidden;
}

.${uid}_close:hover,
.${uid}_close:focus {
  color: white;
  background: #${themeColor};
  text-decoration: none;
  cursor: pointer;
}

.${uid}_modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5000000000;
  background: rgba(0, 0, 0, 0.7);
}

.${uid}_modal-container {
  /* center the modal content */
  display: flex;
  justify-content: center;
  align-items: center;
}

.${uid}_modal {
  width: ${width};
  max-width: 500px;
  height: ${height};
  max-height: 100%;
  z-index: 100;
  background: white;
  border: none;
  border-radius: 10px;

  /* modal box-shadow */
  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  -moz-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
}

.${uid}_closed {
  display: none;
}

.${uid}_modal-content {
  width: 100%;
  height: 100%;
  overflow: auto;

  border-radius: 10px;
}

.${uid}_modal .close-button {
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 20px;
  background: black;
  color: white;
  padding: 5px 10px;
  font-size: 1.3rem;
}

.${uid}_container {
    height: 100%;
    width: 100%;
}

.${uid}_container iframe {
    height: 100%;
    width: 100%;
}

@media all and (max-width: ${width}) {
  .${uid}_modal {
    height: 100%;
    max-height:${height};
    top: 53%;
  }
}
`;

	const getModalWrapper = ({ uid }) => `
<div class="${uid}_modal-overlay ${uid}_modal-container" id="${uid}_modal-overlay"/>
<div class="${uid}_modal" id="${uid}_modal">
    <div class="${uid}_modal-content">
        <div class="${uid}_container"/>
    </div>
</div>
`;

	// this is the URL where the widget component is being hosted
	const urlByEnv = {
	    local: 'http://localhost:3000',
	    development: 'https://dev.connect.pluggy.ai',
	    production: 'https://connect.pluggy.ai',
	};
	let zoidComponentInstance;
	/**
	 * Instantiates a singleton ZoidComponent reference, that will take care of
	 * wrapping and rendering the actual ZoidComponentInstance.
	 *
	 * This reference should only be instantiated once per page/context.
	 */
	const init = () => {
	    if (!zoidComponentInstance) {
	        zoidComponentInstance = zoid_frameworks_frame.create({
	            // The html tag used to render the component
	            tag: 'pluggy-connect-widget',
	            // The url of the page that will show in the iframe or popup, when someone includes the component on their site
	            url: ({ props }) => {
	                const { env, url: urlByProp } = props;
	                if (urlByProp) {
	                    // url defined by prop, use it
	                    return urlByProp;
	                }
	                // use url from 'env', default to 'production'
	                const envOrDefault = env || 'production';
	                return urlByEnv[envOrDefault];
	            },
	            dimensions: {
	                width: '320px',
	                height: '645px',
	            },
	            props: {
	                url: {
	                    type: 'string',
	                    required: false,
	                },
	                env: {
	                    type: 'string',
	                    required: false,
	                },
	                connectToken: {
	                    type: 'string',
	                },
	                includeSandbox: {
	                    type: 'boolean',
	                    default: () => false,
	                },
	                onSuccess: {
	                    type: 'function',
	                    required: false,
	                    default: () => null,
	                },
	                onError: {
	                    type: 'function',
	                    required: false,
	                    default: () => null,
	                },
	                onOpen: {
	                    type: 'function',
	                    required: false,
	                    default: () => null,
	                },
	                onClose: {
	                    type: 'function',
	                    required: false,
	                    default: () => null,
	                },
	            },
	            attributes: {
	                iframe: {
	                    scrolling: 'no',
	                    title: 'Pluggy',
	                },
	                popup: {
	                    scrolling: 'no',
	                    title: 'Pluggy',
	                },
	            },
	            prerenderTemplate({ doc }) {
	                // TODO check why not working
	                // const htmlWrapper = doc.createElement('html')
	                // // const html = doc.querySelector('html');
	                // // if (!html) {
	                // //   return null;
	                // // }
	                // const container = doc.createElement('div');
	                // const p = doc.createElement('p');
	                // p.innerText = 'Loading connectors, hang tight...';
	                // container.appendChild(p);
	                // htmlWrapper.appendChild(container);
	                // doc.appendChild(htmlWrapper)
	                // return doc as HTMLElement;
	                const html = doc.querySelector('html');
	                if (!html) {
	                    return null;
	                }
	                const container = doc.createElement('div');
	                const p = doc.createElement('p');
	                p.innerText = 'Loading connectors, hang tight...';
	                container.appendChild(p);
	                html.appendChild(container);
	                return html;
	            },
	            containerTemplate({ doc, dimensions: { height, width }, close, uid, frame, prerenderFrame, event, props, }) {
	                const container = doc.createElement('div');
	                container.id = uid;
	                container.innerHTML = getModalWrapper({ uid });
	                if (prerenderFrame) {
	                    container.appendChild(prerenderFrame);
	                }
	                if (frame) {
	                    const frameContainer = container.querySelector(`.${uid}_container`);
	                    if (!frameContainer) {
	                        throw new Error('Not found frame container');
	                    }
	                    frameContainer.appendChild(frame);
	                }
	                // Add styles
	                const style = doc.createElement('style');
	                style.innerHTML = getCSS({ uid, themeColor: 'fafafa', height, width });
	                container.appendChild(style);
	                // Remove scrolling from document body when visible
	                const modalVisibleClassName = `${uid}_has_modal_visible`;
	                event.on(zoid_frameworks_frame.EVENT.DISPLAY, () => {
	                    document.body.classList.add(modalVisibleClassName);
	                    const { onOpen } = props;
	                    if (typeof onOpen === 'function') {
	                        onOpen();
	                    }
	                });
	                event.on(zoid_frameworks_frame.EVENT.CLOSE, () => {
	                    document.body.classList.remove(modalVisibleClassName);
	                    const { onClose } = props;
	                    if (typeof onClose === 'function') {
	                        onClose();
	                    }
	                });
	                // Register close event handlers
	                const overlay = container.querySelector(`.${uid}_modal-overlay`);
	                if (!overlay) {
	                    console.log('WARNING - no close overlay found');
	                }
	                else {
	                    // When the user clicks anywhere outside of the modal, close it
	                    overlay.onclick = () => {
	                        close();
	                    };
	                }
	                return container;
	            },
	        });
	    }
	    return zoidComponentInstance;
	};
	class PluggyConnect {
	    constructor(props) {
	        this.zoidComponent = init();
	        this.componentProps = props;
	    }
	    /**
	     * Render the component using the specified component props,
	     * as a modal with an iframe, appended to the page body (or the DOM uppermost element).
	     */
	    init() {
	        const container = (document.getElementsByTagName('body') ||
	            document.getElementsByTagName('html') ||
	            document.getElementsByTagName('div'))[0];
	        this.componentInstance = this.zoidComponent(this.componentProps);
	        this.componentInstance
	            .render(container)
	            .catch((error) => console.error(`Failed to render <PluggyConnect /> component`, error));
	    }
	    /**
	     * Helper method to be executed from the child component.
	     * Used to just create the zoid instance, needed for the internal handshake
	     * with the parent instance that will be rendering it.
	     */
	    static register() {
	        init();
	    }
	}

	exports.PluggyConnect = PluggyConnect;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy96b2lkL2Rpc3Qvem9pZC5mcmFtZXdvcmtzLmZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoXCJ6b2lkXCIsIFtdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzLnpvaWQgPSBmYWN0b3J5KCkgOiByb290LnpvaWQgPSBmYWN0b3J5KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgICAgIGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgICAgICAgaTogbW9kdWxlSWQsXG4gICAgICAgICAgICAgICAgbDogITEsXG4gICAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiAgICAgICAgICAgIG1vZHVsZS5sID0gITA7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gICAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiAgICAgICAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gICAgICAgICAgICAxICYgbW9kZSAmJiAodmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKSk7XG4gICAgICAgICAgICBpZiAoOCAmIG1vZGUpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGlmICg0ICYgbW9kZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKDIgJiBtb2RlICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIHZhbHVlKSBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIH0uYmluZChudWxsLCBrZXkpKTtcbiAgICAgICAgICAgIHJldHVybiBucztcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgXCJhXCIsIGdldHRlcik7XG4gICAgICAgICAgICByZXR1cm4gZ2V0dGVyO1xuICAgICAgICB9O1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4gICAgfShbIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb3B1cE9wZW5FcnJvclwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tX1BvcHVwT3BlbkVycm9yO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNyZWF0ZVwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlc3Ryb3lcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudF9kZXN0cm95O1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlc3Ryb3lDb21wb25lbnRzXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0cm95Q29tcG9uZW50cztcbiAgICAgICAgfSkpO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZXN0cm95QWxsXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0cm95QWxsO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBST1BfVFlQRVwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUFJPUF9UWVBFO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBST1BfU0VSSUFMSVpBVElPTlwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUFJPUF9TRVJJQUxJWkFUSU9OO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNPTlRFWFRcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIENPTlRFWFQ7XG4gICAgICAgIH0pKTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRVZFTlRcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIEVWRU5UO1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgICAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICAgICAgICAgICAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkgJiYgKHRhcmdldFtrZXldID0gc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1dGlsc19pc1Byb21pc2UoaXRlbSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgUHJvbWlzZSAmJiBpdGVtIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB3aW5kb3cuV2luZG93ICYmIGl0ZW0gaW5zdGFuY2VvZiB3aW5kb3cuV2luZG93KSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHdpbmRvdy5jb25zdHJ1Y3RvciAmJiBpdGVtIGluc3RhbmNlb2Ygd2luZG93LmNvbnN0cnVjdG9yKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIF90b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChfdG9TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfdG9TdHJpbmcuY2FsbChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiW29iamVjdCBXaW5kb3ddXCIgPT09IG5hbWUgfHwgXCJbb2JqZWN0IGdsb2JhbF1cIiA9PT0gbmFtZSB8fCBcIltvYmplY3QgRE9NV2luZG93XVwiID09PSBuYW1lKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZW0udGhlbikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXNwYXRjaGVkRXJyb3JzID0gW107XG4gICAgICAgIHZhciBwb3NzaWJseVVuaGFuZGxlZFByb21pc2VIYW5kbGVycyA9IFtdO1xuICAgICAgICB2YXIgYWN0aXZlQ291bnQgPSAwO1xuICAgICAgICB2YXIgZmx1c2hQcm9taXNlO1xuICAgICAgICBmdW5jdGlvbiBmbHVzaEFjdGl2ZSgpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZlQ291bnQgJiYgZmx1c2hQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBmbHVzaFByb21pc2U7XG4gICAgICAgICAgICAgICAgZmx1c2hQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdGFydEFjdGl2ZSgpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZW5kQWN0aXZlKCkge1xuICAgICAgICAgICAgYWN0aXZlQ291bnQgLT0gMTtcbiAgICAgICAgICAgIGZsdXNoQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2VfWmFsZ29Qcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBaYWxnb1Byb21pc2UoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVkID0gITE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3RlZCA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVkID0gITE7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2Vycm9yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlamVjdGVkID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FzeW5jID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBc3luYykgX3RoaXMucmVzb2x2ZShyZXMpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdCA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FzeW5jKSBfdGhpcy5yZWplY3QoZXJyKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVuZEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID8gdGhpcy5yZXNvbHZlKF9yZXN1bHQpIDogcmVqZWN0ZWQgJiYgdGhpcy5yZWplY3QoX2Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3Byb3RvID0gWmFsZ29Qcm9taXNlLnByb3RvdHlwZTtcbiAgICAgICAgICAgIF9wcm90by5yZXNvbHZlID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWQgfHwgdGhpcy5yZWplY3RlZCkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzX2lzUHJvbWlzZShyZXN1bHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGFub3RoZXIgcHJvbWlzZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVkID0gITA7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWQgfHwgdGhpcy5yZWplY3RlZCkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzX2lzUHJvbWlzZShlcnJvcikpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVqZWN0IHByb21pc2Ugd2l0aCBhbm90aGVyIHByb21pc2VcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2VyciA9IGVycm9yICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZXJyb3IudG9TdHJpbmcgPyBlcnJvci50b1N0cmluZygpIDoge30udG9TdHJpbmcuY2FsbChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKFwiRXhwZWN0ZWQgcmVqZWN0IHRvIGJlIGNhbGxlZCB3aXRoIEVycm9yLCBnb3QgXCIgKyBfZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3RlZCA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlZCB8fCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmVycm9ySGFuZGxlZCB8fCBmdW5jdGlvbihlcnIsIHByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PT0gZGlzcGF0Y2hlZEVycm9ycy5pbmRleE9mKGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaGVkRXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvc3NpYmx5VW5oYW5kbGVkUHJvbWlzZUhhbmRsZXJzLmxlbmd0aDsgaisrKSBwb3NzaWJseVVuaGFuZGxlZFByb21pc2VIYW5kbGVyc1tqXShlcnIsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGVycm9yLCBfdGhpczIpO1xuICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmFzeW5jUmVqZWN0ID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlZCA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVkLCByZWplY3RlZCA9IHRoaXMucmVqZWN0ZWQsIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGF0Y2hpbmcgJiYgKHJlc29sdmVkIHx8IHJlamVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoaW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFpbiA9IGZ1bmN0aW9uKGZpcnN0UHJvbWlzZSwgc2Vjb25kUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0UHJvbWlzZS50aGVuKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9oYW5kbGVycyRpID0gaGFuZGxlcnNbaV0sIG9uU3VjY2VzcyA9IF9oYW5kbGVycyRpLm9uU3VjY2Vzcywgb25FcnJvciA9IF9oYW5kbGVycyRpLm9uRXJyb3IsIHByb21pc2UgPSBfaGFuZGxlcnMkaS5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZXN1bHQyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXN1bHQyID0gb25TdWNjZXNzID8gb25TdWNjZXNzKHRoaXMudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdDIgPSBvbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3Jlc3VsdDIgaW5zdGFuY2VvZiBaYWxnb1Byb21pc2UgJiYgKF9yZXN1bHQyLnJlc29sdmVkIHx8IF9yZXN1bHQyLnJlamVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXN1bHQyLnJlc29sdmVkID8gcHJvbWlzZS5yZXNvbHZlKF9yZXN1bHQyLnZhbHVlKSA6IHByb21pc2UucmVqZWN0KF9yZXN1bHQyLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVzdWx0Mi5lcnJvckhhbmRsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB1dGlsc19pc1Byb21pc2UoX3Jlc3VsdDIpID8gX3Jlc3VsdDIgaW5zdGFuY2VvZiBaYWxnb1Byb21pc2UgJiYgKF9yZXN1bHQyLnJlc29sdmVkIHx8IF9yZXN1bHQyLnJlamVjdGVkKSA/IF9yZXN1bHQyLnJlc29sdmVkID8gcHJvbWlzZS5yZXNvbHZlKF9yZXN1bHQyLnZhbHVlKSA6IHByb21pc2UucmVqZWN0KF9yZXN1bHQyLmVycm9yKSA6IGNoYWluKF9yZXN1bHQyLCBwcm9taXNlKSA6IHByb21pc2UucmVzb2x2ZShfcmVzdWx0Mik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICBlbmRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbihvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAob25TdWNjZXNzICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb25TdWNjZXNzICYmICFvblN1Y2Nlc3MuY2FsbCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZS50aGVuIGV4cGVjdGVkIGEgZnVuY3Rpb24gZm9yIHN1Y2Nlc3MgaGFuZGxlclwiKTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvciAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIG9uRXJyb3IgJiYgIW9uRXJyb3IuY2FsbCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZS50aGVuIGV4cGVjdGVkIGEgZnVuY3Rpb24gZm9yIGVycm9yIGhhbmRsZXJcIik7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzczogb25TdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmNhdGNoID0gZnVuY3Rpb24ob25FcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZmluYWxseSA9IGZ1bmN0aW9uKG9uRmluYWxseSkge1xuICAgICAgICAgICAgICAgIGlmIChvbkZpbmFsbHkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBvbkZpbmFsbHkgJiYgIW9uRmluYWxseS5jYWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlLmZpbmFsbHkgZXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFphbGdvUHJvbWlzZS50cnkob25GaW5hbGx5KS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLnRyeShvbkZpbmFsbHkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by50aW1lb3V0ID0gZnVuY3Rpb24odGltZSwgZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWQgfHwgdGhpcy5yZWplY3RlZCkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlc29sdmVkIHx8IF90aGlzMy5yZWplY3RlZCB8fCBfdGhpczMucmVqZWN0KGVyciB8fCBuZXcgRXJyb3IoXCJQcm9taXNlIHRpbWVkIG91dCBhZnRlciBcIiArIHRpbWUgKyBcIm1zXCIpKTtcbiAgICAgICAgICAgICAgICB9KSwgdGltZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbigoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnRvUHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBQcm9taXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ291bGQgbm90IGZpbmQgUHJvbWlzZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBaYWxnb1Byb21pc2UgPyB2YWx1ZSA6IHV0aWxzX2lzUHJvbWlzZSh2YWx1ZSkgPyBuZXcgWmFsZ29Qcm9taXNlKChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KSkgOiAobmV3IFphbGdvUHJvbWlzZSkucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgWmFsZ29Qcm9taXNlKS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5hc3luY1JlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgWmFsZ29Qcm9taXNlKS5hc3luY1JlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IHByb21pc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoYWluID0gZnVuY3Rpb24oaSwgZmlyc3RQcm9taXNlLCBzZWNvbmRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdFByb21pc2UudGhlbigoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2ldID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSAoY291bnQgLT0gMSkgJiYgcHJvbWlzZS5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbSA9IHByb21pc2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbSBpbnN0YW5jZW9mIFphbGdvUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb20ucmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2ldID0gcHJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF1dGlsc19pc1Byb21pc2UocHJvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbaV0gPSBwcm9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoYWluKGksIFphbGdvUHJvbWlzZS5yZXNvbHZlKHByb20pLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMCA9PT0gY291bnQgJiYgcHJvbWlzZS5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5oYXNoID0gZnVuY3Rpb24ocHJvbWlzZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGF3YWl0UHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb21pc2VzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsc19pc1Byb21pc2UodmFsdWUpID8gYXdhaXRQcm9taXNlcy5wdXNoKHZhbHVlLnRoZW4oKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSA6IHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9taXNlcykgX2xvb3Aoa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLmFsbChhd2FpdFByb21pc2VzKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLm1hcCA9IGZ1bmN0aW9uKGl0ZW1zLCBtZXRob2QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLmFsbChpdGVtcy5tYXAobWV0aG9kKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLm9uUG9zc2libHlVbmhhbmRsZWRFeGNlcHRpb24gPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libHlVbmhhbmRsZWRQcm9taXNlSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libHlVbmhhbmRsZWRQcm9taXNlSGFuZGxlcnMuc3BsaWNlKHBvc3NpYmx5VW5oYW5kbGVkUHJvbWlzZUhhbmRsZXJzLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0oaGFuZGxlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLnRyeSA9IGZ1bmN0aW9uKG1ldGhvZCwgY29udGV4dCwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBtZXRob2QgJiYgIW1ldGhvZC5jYWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlLnRyeSBleHBlY3RlZCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgc3RhcnRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJncyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBaYWxnb1Byb21pc2UuZGVsYXkgPSBmdW5jdGlvbihfZGVsYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFphbGdvUHJvbWlzZSgoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIF9kZWxheSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5pc1Byb21pc2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFphbGdvUHJvbWlzZSkgfHwgdXRpbHNfaXNQcm9taXNlKHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBaYWxnb1Byb21pc2UuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oWmFsZ28pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBmbHVzaFByb21pc2UgPSBmbHVzaFByb21pc2UgfHwgbmV3IFphbGdvO1xuICAgICAgICAgICAgICAgICAgICBmbHVzaEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9KFphbGdvUHJvbWlzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFphbGdvUHJvbWlzZTtcbiAgICAgICAgfSgpO1xuICAgICAgICBmdW5jdGlvbiBpc1JlZ2V4KGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgUmVnRXhwXVwiID09PSB7fS50b1N0cmluZy5jYWxsKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBXSU5ET1dfVFlQRSA9IHtcbiAgICAgICAgICAgIElGUkFNRTogXCJpZnJhbWVcIixcbiAgICAgICAgICAgIFBPUFVQOiBcInBvcHVwXCJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIElFX1dJTl9BQ0NFU1NfRVJST1IgPSBcIkNhbGwgd2FzIHJlamVjdGVkIGJ5IGNhbGxlZS5cXHJcXG5cIjtcbiAgICAgICAgZnVuY3Rpb24gaXNBYm91dFByb3RvY29sKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICByZXR1cm4gXCJhYm91dDpcIiA9PT0gd2luLmxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHV0aWxzX2dldFBhcmVudCh3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgaWYgKHdpbikgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luLnBhcmVudCAmJiB3aW4ucGFyZW50ICE9PSB3aW4pIHJldHVybiB3aW4ucGFyZW50O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5lcih3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgaWYgKHdpbiAmJiAhdXRpbHNfZ2V0UGFyZW50KHdpbikpIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbi5vcGVuZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FuUmVhZEZyb21XaW5kb3cod2luKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRBY3R1YWxEb21haW4od2luKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IHdpbiAmJiAod2luID0gd2luZG93KTtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbiAgICAgICAgICAgIGlmICghbG9jYXRpb24pIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVhZCB3aW5kb3cgbG9jYXRpb25cIik7XG4gICAgICAgICAgICB2YXIgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgICAgIGlmICghcHJvdG9jb2wpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVhZCB3aW5kb3cgcHJvdG9jb2xcIik7XG4gICAgICAgICAgICBpZiAoXCJmaWxlOlwiID09PSBwcm90b2NvbCkgcmV0dXJuIFwiZmlsZTovL1wiO1xuICAgICAgICAgICAgaWYgKFwiYWJvdXQ6XCIgPT09IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHV0aWxzX2dldFBhcmVudCh3aW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQgJiYgY2FuUmVhZEZyb21XaW5kb3coKSA/IGdldEFjdHVhbERvbWFpbihwYXJlbnQpIDogXCJhYm91dDovL1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhvc3QgPSBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgaWYgKCFob3N0KSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHJlYWQgd2luZG93IGhvc3RcIik7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldERvbWFpbih3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgdmFyIGRvbWFpbiA9IGdldEFjdHVhbERvbWFpbih3aW4pO1xuICAgICAgICAgICAgcmV0dXJuIGRvbWFpbiAmJiB3aW4ubW9ja0RvbWFpbiAmJiAwID09PSB3aW4ubW9ja0RvbWFpbi5pbmRleE9mKFwibW9jazpcIikgPyB3aW4ubW9ja0RvbWFpbiA6IGRvbWFpbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NhbWVEb21haW4od2luKSB7XG4gICAgICAgICAgICBpZiAoIWZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW4gPT09IHdpbmRvdykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luLCBcImxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYyAmJiAhMSA9PT0gZGVzYy5lbnVtZXJhYmxlKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Fib3V0UHJvdG9jb2wod2luKSAmJiBjYW5SZWFkRnJvbVdpbmRvdygpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRBY3R1YWxEb21haW4od2luKSA9PT0gZ2V0QWN0dWFsRG9tYWluKHdpbmRvdykpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSh3aW4pKSByZXR1cm4gITE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh3aW4gPT09IHdpbmRvdykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIGlmIChpc0Fib3V0UHJvdG9jb2wod2luKSAmJiBjYW5SZWFkRnJvbVdpbmRvdygpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgaWYgKGdldERvbWFpbih3aW5kb3cpID09PSBnZXREb21haW4od2luKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFzc2VydFNhbWVEb21haW4od2luKSB7XG4gICAgICAgICAgICBpZiAoIWlzU2FtZURvbWFpbih3aW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB3aW5kb3cgdG8gYmUgc2FtZSBkb21haW5cIik7XG4gICAgICAgICAgICByZXR1cm4gd2luO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzQW5jZXN0b3JQYXJlbnQocGFyZW50LCBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gITE7XG4gICAgICAgICAgICB2YXIgY2hpbGRQYXJlbnQgPSB1dGlsc19nZXRQYXJlbnQoY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUGFyZW50ID8gY2hpbGRQYXJlbnQgPT09IHBhcmVudCA6IC0xICE9PSBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7d2luLnBhcmVudCAhPT0gd2luOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHdpbi5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luID0gd2luLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfShjaGlsZCkuaW5kZXhPZihwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEZyYW1lcyh3aW4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHZhciBmcmFtZXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZyYW1lcyA9IHdpbi5mcmFtZXM7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmcmFtZXMgPSB3aW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGVuO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZW4gPSBmcmFtZXMubGVuZ3RoO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgaWYgKDAgPT09IGxlbikgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCAxMDA7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IGZyYW1lc1tfaV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghX2ZyYW1lKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKF9mcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEFsbENoaWxkRnJhbWVzKHdpbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kzID0gMCwgX2dldEZyYW1lczIgPSBnZXRGcmFtZXMod2luKTsgX2kzIDwgX2dldEZyYW1lczIubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IF9nZXRGcmFtZXMyW19pM107XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZnJhbWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pNSA9IDAsIF9nZXRBbGxDaGlsZEZyYW1lczIgPSBnZXRBbGxDaGlsZEZyYW1lcyhmcmFtZSk7IF9pNSA8IF9nZXRBbGxDaGlsZEZyYW1lczIubGVuZ3RoOyBfaTUrKykgcmVzdWx0LnB1c2goX2dldEFsbENoaWxkRnJhbWVzMltfaTVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9wKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh3aW4udG9wKSByZXR1cm4gd2luLnRvcDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIGlmICh1dGlsc19nZXRQYXJlbnQod2luKSA9PT0gd2luKSByZXR1cm4gd2luO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBbmNlc3RvclBhcmVudCh3aW5kb3csIHdpbikgJiYgd2luZG93LnRvcCkgcmV0dXJuIHdpbmRvdy50b3A7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FuY2VzdG9yUGFyZW50KHdpbiwgd2luZG93KSAmJiB3aW5kb3cudG9wKSByZXR1cm4gd2luZG93LnRvcDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIGZvciAodmFyIF9pNyA9IDAsIF9nZXRBbGxDaGlsZEZyYW1lczQgPSBnZXRBbGxDaGlsZEZyYW1lcyh3aW4pOyBfaTcgPCBfZ2V0QWxsQ2hpbGRGcmFtZXM0Lmxlbmd0aDsgX2k3KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSBfZ2V0QWxsQ2hpbGRGcmFtZXM0W19pN107XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lLnRvcCkgcmV0dXJuIGZyYW1lLnRvcDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzX2dldFBhcmVudChmcmFtZSkgPT09IGZyYW1lKSByZXR1cm4gZnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsRnJhbWVzSW5XaW5kb3cod2luKSB7XG4gICAgICAgICAgICB2YXIgdG9wID0gZ2V0VG9wKHdpbik7XG4gICAgICAgICAgICBpZiAoIXRvcCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBkZXRlcm1pbmUgdG9wIHdpbmRvd1wiKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXS5jb25jYXQoZ2V0QWxsQ2hpbGRGcmFtZXModG9wKSwgWyB0b3AgXSk7XG4gICAgICAgICAgICAtMSA9PT0gcmVzdWx0LmluZGV4T2Yod2luKSAmJiAocmVzdWx0ID0gW10uY29uY2F0KHJlc3VsdCwgWyB3aW4gXSwgZ2V0QWxsQ2hpbGRGcmFtZXMod2luKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWZyYW1lV2luZG93cyA9IFtdO1xuICAgICAgICB2YXIgaWZyYW1lRnJhbWVzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGlzV2luZG93Q2xvc2VkKHdpbiwgYWxsb3dNb2NrKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGFsbG93TW9jayAmJiAoYWxsb3dNb2NrID0gITApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luID09PSB3aW5kb3cpIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW4pIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbi5jbG9zZWQpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhZXJyIHx8IGVyci5tZXNzYWdlICE9PSBJRV9XSU5fQUNDRVNTX0VSUk9SO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFsbG93TW9jayAmJiBpc1NhbWVEb21haW4od2luKSkgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luLm1vY2tjbG9zZWQpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW4ucGFyZW50IHx8ICF3aW4udG9wKSByZXR1cm4gITA7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICB2YXIgaWZyYW1lSW5kZXggPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbltpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0oaWZyYW1lV2luZG93cywgd2luKTtcbiAgICAgICAgICAgIGlmICgtMSAhPT0gaWZyYW1lSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSBpZnJhbWVGcmFtZXNbaWZyYW1lSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZSAmJiBmdW5jdGlvbihmcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lLmNvbnRlbnRXaW5kb3cpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcmFtZS5wYXJlbnROb2RlKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2MgPSBmcmFtZS5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQgJiYgIWRvYy5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtwYXJlbnQucGFyZW50Tm9kZSAmJiBwYXJlbnQucGFyZW50Tm9kZSAhPT0gcGFyZW50OyApIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQuaG9zdCB8fCAhZG9jLmRvY3VtZW50RWxlbWVudC5jb250YWlucyhwYXJlbnQuaG9zdCkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfShmcmFtZSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRBbmNlc3Rvcih3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgcmV0dXJuIGdldE9wZW5lcih3aW4gPSB3aW4gfHwgd2luZG93KSB8fCB1dGlsc19nZXRQYXJlbnQod2luKSB8fCB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYW55TWF0Y2goY29sbGVjdGlvbjEsIGNvbGxlY3Rpb24yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaTE3ID0gMDsgX2kxNyA8IGNvbGxlY3Rpb24xLmxlbmd0aDsgX2kxNysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0xID0gY29sbGVjdGlvbjFbX2kxN107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kxOSA9IDA7IF9pMTkgPCBjb2xsZWN0aW9uMi5sZW5ndGg7IF9pMTkrKykgaWYgKGl0ZW0xID09PSBjb2xsZWN0aW9uMltfaTE5XSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldERpc3RhbmNlRnJvbVRvcCh3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB3aW47XG4gICAgICAgICAgICBmb3IgKDtwYXJlbnQ7ICkgKHBhcmVudCA9IHV0aWxzX2dldFBhcmVudChwYXJlbnQpKSAmJiAoZGlzdGFuY2UgKz0gMSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTYW1lVG9wV2luZG93KHdpbjEsIHdpbjIpIHtcbiAgICAgICAgICAgIHZhciB0b3AxID0gZ2V0VG9wKHdpbjEpIHx8IHdpbjE7XG4gICAgICAgICAgICB2YXIgdG9wMiA9IGdldFRvcCh3aW4yKSB8fCB3aW4yO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodG9wMSAmJiB0b3AyKSByZXR1cm4gdG9wMSA9PT0gdG9wMjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIHZhciBhbGxGcmFtZXMxID0gZ2V0QWxsRnJhbWVzSW5XaW5kb3cod2luMSk7XG4gICAgICAgICAgICB2YXIgYWxsRnJhbWVzMiA9IGdldEFsbEZyYW1lc0luV2luZG93KHdpbjIpO1xuICAgICAgICAgICAgaWYgKGFueU1hdGNoKGFsbEZyYW1lczEsIGFsbEZyYW1lczIpKSByZXR1cm4gITA7XG4gICAgICAgICAgICB2YXIgb3BlbmVyMSA9IGdldE9wZW5lcih0b3AxKTtcbiAgICAgICAgICAgIHZhciBvcGVuZXIyID0gZ2V0T3BlbmVyKHRvcDIpO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5lcjEgJiYgYW55TWF0Y2goZ2V0QWxsRnJhbWVzSW5XaW5kb3cob3BlbmVyMSksIGFsbEZyYW1lczIpIHx8IG9wZW5lcjIgJiYgYW55TWF0Y2goZ2V0QWxsRnJhbWVzSW5XaW5kb3cob3BlbmVyMiksIGFsbEZyYW1lczEpLCBcbiAgICAgICAgICAgICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hdGNoRG9tYWluKHBhdHRlcm4sIG9yaWdpbikge1xuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygb3JpZ2luKSByZXR1cm4gXCIqXCIgPT09IHBhdHRlcm4gfHwgb3JpZ2luID09PSBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZ2V4KG9yaWdpbikpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW4pKSByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNSZWdleChwYXR0ZXJuKSA/IGlzUmVnZXgob3JpZ2luKSA/IHBhdHRlcm4udG9TdHJpbmcoKSA9PT0gb3JpZ2luLnRvU3RyaW5nKCkgOiAhQXJyYXkuaXNBcnJheShvcmlnaW4pICYmIEJvb2xlYW4ob3JpZ2luLm1hdGNoKHBhdHRlcm4pKSA6ICEhQXJyYXkuaXNBcnJheShwYXR0ZXJuKSAmJiAoQXJyYXkuaXNBcnJheShvcmlnaW4pID8gSlNPTi5zdHJpbmdpZnkocGF0dGVybikgPT09IEpTT04uc3RyaW5naWZ5KG9yaWdpbikgOiAhaXNSZWdleChvcmlnaW4pICYmIHBhdHRlcm4uc29tZSgoZnVuY3Rpb24oc3VicGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaERvbWFpbihzdWJwYXR0ZXJuLCBvcmlnaW4pO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXREb21haW5Gcm9tVXJsKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHVybC5tYXRjaCgvXihodHRwcz98bW9ja3xmaWxlKTpcXC9cXC8vKSA/IHVybC5zcGxpdChcIi9cIikuc2xpY2UoMCwgMykuam9pbihcIi9cIikgOiBnZXREb21haW4oKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbkNsb3NlV2luZG93KHdpbiwgY2FsbGJhY2ssIGRlbGF5LCBtYXh0aW1lKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGRlbGF5ICYmIChkZWxheSA9IDFlMyk7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG1heHRpbWUgJiYgKG1heHRpbWUgPSAxIC8gMCk7XG4gICAgICAgICAgICB2YXIgdGltZW91dDtcbiAgICAgICAgICAgICFmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQod2luKSkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXh0aW1lIDw9IDApIGNsZWFyVGltZW91dCh0aW1lb3V0KTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heHRpbWUgLT0gZGVsYXk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNoZWNrLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqID09PSB3aW5kb3cpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLm1lc3NhZ2UgPT09IElFX1dJTl9BQ0NFU1NfRVJST1IpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiW29iamVjdCBXaW5kb3ddXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwob2JqKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LldpbmRvdyAmJiBvYmogaW5zdGFuY2VvZiB3aW5kb3cuV2luZG93KSByZXR1cm4gITA7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICYmIGVyci5tZXNzYWdlID09PSBJRV9XSU5fQUNDRVNTX0VSUk9SKSByZXR1cm4gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLnNlbGYgPT09IG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIG9iai5wYXJlbnQgPT09IG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIG9iai50b3AgPT09IG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIFwiX191bmxpa2VseV92YWx1ZV9fXCIgPT09IG9iai5fX2Nyb3NzX2RvbWFpbl91dGlsc193aW5kb3dfY2hlY2tfXykgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoXCJwb3N0TWVzc2FnZVwiIGluIG9iaiAmJiBcInNlbGZcIiBpbiBvYmogJiYgXCJsb2NhdGlvblwiIGluIG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlV2luZG93KHdpbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3aW4uY2xvc2UoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1dGlsX3NhZmVJbmRleE9mKGNvbGxlY3Rpb24sIGl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbltpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlYWttYXBfQ3Jvc3NEb21haW5TYWZlV2Vha01hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gQ3Jvc3NEb21haW5TYWZlV2Vha01hcCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWFrbWFwID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBcIl9fd2Vha21hcF9cIiArICgxZTkgKiBNYXRoLnJhbmRvbSgpID4+PiAwKSArIFwiX19cIjtcbiAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBXZWFrTWFwKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IE9iamVjdC5mcmVlemUpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0V2Vha01hcCA9IG5ldyBXZWFrTWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RLZXkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUodGVzdEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0V2Vha01hcC5zZXQodGVzdEtleSwgXCJfX3Rlc3R2YWx1ZV9fXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiX190ZXN0dmFsdWVfX1wiID09PSB0ZXN0V2Vha01hcC5nZXQodGVzdEtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSgpKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYWttYXAgPSBuZXcgV2Vha01hcDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfcHJvdG8gPSBDcm9zc0RvbWFpblNhZmVXZWFrTWFwLnByb3RvdHlwZTtcbiAgICAgICAgICAgIF9wcm90by5fY2xlYW51cENsb3NlZFdpbmRvd3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2luZG93KHZhbHVlKSAmJiBpc1dpbmRvd0Nsb3NlZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ZWFrbWFwKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYWttYXAuZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5pc1NhZmVUb1JlYWRXcml0ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNXaW5kb3coa2V5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWFrTWFwIGV4cGVjdGVkIGtleVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICBpZiAod2Vha21hcCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2Vha21hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndlYWttYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2FmZVRvUmVhZFdyaXRlKGtleSkpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBrZXlbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkgPyBlbnRyeVsxXSA9IHZhbHVlIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KGtleSwgbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFsga2V5LCB2YWx1ZSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFudXBDbG9zZWRXaW5kb3dzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHV0aWxfc2FmZUluZGV4T2Yoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoLTEgPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXkpIHRocm93IG5ldyBFcnJvcihcIldlYWtNYXAgZXhwZWN0ZWQga2V5XCIpO1xuICAgICAgICAgICAgICAgIHZhciB3ZWFrbWFwID0gdGhpcy53ZWFrbWFwO1xuICAgICAgICAgICAgICAgIGlmICh3ZWFrbWFwKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Vha21hcC5oYXMoa2V5KSkgcmV0dXJuIHdlYWttYXAuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndlYWttYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2FmZVRvUmVhZFdyaXRlKGtleSkpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMF0gPT09IGtleSA/IGVudHJ5WzFdIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwQ2xvc2VkV2luZG93cygpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHV0aWxfc2FmZUluZGV4T2YodGhpcy5rZXlzLCBrZXkpO1xuICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gaW5kZXgpIHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmRlbGV0ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWFrTWFwIGV4cGVjdGVkIGtleVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICBpZiAod2Vha21hcCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2Vha21hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTYWZlVG9SZWFkV3JpdGUoa2V5KSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMubmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkgJiYgKGVudHJ5WzBdID0gZW50cnlbMV0gPSB2b2lkIDApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwQ2xvc2VkV2luZG93cygpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHV0aWxfc2FmZUluZGV4T2Yoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWFrTWFwIGV4cGVjdGVkIGtleVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICBpZiAod2Vha21hcCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdlYWttYXAuaGFzKGtleSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTYWZlVG9SZWFkV3JpdGUoa2V5KSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMubmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhKCFlbnRyeSB8fCBlbnRyeVswXSAhPT0ga2V5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cENsb3NlZFdpbmRvd3MoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IHV0aWxfc2FmZUluZGV4T2YodGhpcy5rZXlzLCBrZXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXRPclNldCA9IGZ1bmN0aW9uKGtleSwgZ2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldHRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gQ3Jvc3NEb21haW5TYWZlV2Vha01hcDtcbiAgICAgICAgfSgpO1xuICAgICAgICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgICAgICAgcmV0dXJuIChfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICAgICAgICAgIH0pKG8pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihvLCBwKSB7XG4gICAgICAgICAgICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfSkobywgcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBSZWZsZWN0IHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuICExO1xuICAgICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIChmdW5jdGlvbigpIHt9KSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0X2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnN0cnVjdF9jb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdCA6IGZ1bmN0aW9uKFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IFsgbnVsbCBdO1xuICAgICAgICAgICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgKEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKSk7XG4gICAgICAgICAgICAgICAgQ2xhc3MgJiYgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd3JhcE5hdGl2ZVN1cGVyX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgICAgICAgICAgdmFyIF9jYWNoZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgTWFwID8gbmV3IE1hcCA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiAod3JhcE5hdGl2ZVN1cGVyX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uKENsYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IENsYXNzIHx8ICEoZm4gPSBDbGFzcywgLTEgIT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKSkgcmV0dXJuIENsYXNzO1xuICAgICAgICAgICAgICAgIHZhciBmbjtcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBDbGFzcykgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IF9jYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgICAgICAgICAgIH0pKENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5uYW1lIHx8IGZuLl9fbmFtZV9fIHx8IGZuLmRpc3BsYXlOYW1lIHx8IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0RnVuY3Rpb25OYW1lKGZuLCBuYW1lKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBmbi5uYW1lO1xuICAgICAgICAgICAgICAgIGZuLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgZm4uX19uYW1lX18gPSBmbi5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYmFzZTY0ZW5jb2RlKHN0cikge1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYnRvYSkgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgKGZ1bmN0aW9uKG0sIHAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQocDEsIDE2KSk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEJ1ZmZlcikgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0ciwgXCJ1dGY4XCIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBmaW5kIHdpbmRvdy5idG9hIG9yIEJ1ZmZlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1bmlxdWVJRCgpIHtcbiAgICAgICAgICAgIHZhciBjaGFycyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgICAgICAgICAgcmV0dXJuIFwieHh4eHh4eHh4eFwiLnJlcGxhY2UoLy4vZywgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9KSkgKyBcIl9cIiArIGJhc2U2NGVuY29kZSgobmV3IERhdGUpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KS5yZXBsYWNlKFwiVFwiLCBcIi5cIikpLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvYmplY3RJRHM7XG4gICAgICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZUFyZ3MoYXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoW10uc2xpY2UuY2FsbChhcmdzKSwgKGZ1bmN0aW9uKHN1YmtleSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHZhbCA/IFwibWVtb2l6ZVtcIiArIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SURzID0gb2JqZWN0SURzIHx8IG5ldyB3ZWFrbWFwX0Nyb3NzRG9tYWluU2FmZVdlYWtNYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBvYmogfHwgXCJvYmplY3RcIiAhPSB0eXBlb2Ygb2JqICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb2JqKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1aWQgPSBvYmplY3RJRHMuZ2V0KG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZCA9IHR5cGVvZiBvYmogKyBcIjpcIiArIHVuaXF1ZUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SURzLnNldChvYmosIHVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdWlkO1xuICAgICAgICAgICAgICAgICAgICB9KHZhbCkgKyBcIl1cIiA6IHZhbDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudHMgbm90IHNlcmlhbGl6YWJsZSAtLSBjYW4gbm90IGJlIHVzZWQgdG8gbWVtb2l6ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRFbXB0eU9iamVjdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWVtb2l6ZUdsb2JhbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIG1lbW9pemVHbG9iYWxJbmRleFZhbGlkRnJvbSA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIG1lbW9pemUobWV0aG9kLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG9wdGlvbnMgJiYgKG9wdGlvbnMgPSB7fSk7XG4gICAgICAgICAgICB2YXIgX29wdGlvbnMkdGhpc05hbWVzcGFjID0gb3B0aW9ucy50aGlzTmFtZXNwYWNlLCB0aGlzTmFtZXNwYWNlID0gdm9pZCAwICE9PSBfb3B0aW9ucyR0aGlzTmFtZXNwYWMgJiYgX29wdGlvbnMkdGhpc05hbWVzcGFjLCBjYWNoZVRpbWUgPSBvcHRpb25zLnRpbWU7XG4gICAgICAgICAgICB2YXIgc2ltcGxlQ2FjaGU7XG4gICAgICAgICAgICB2YXIgdGhpc0NhY2hlO1xuICAgICAgICAgICAgdmFyIG1lbW9pemVJbmRleCA9IG1lbW9pemVHbG9iYWxJbmRleDtcbiAgICAgICAgICAgIG1lbW9pemVHbG9iYWxJbmRleCArPSAxO1xuICAgICAgICAgICAgdmFyIG1lbW9pemVkRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgaWYgKG1lbW9pemVJbmRleCA8IG1lbW9pemVHbG9iYWxJbmRleFZhbGlkRnJvbSkge1xuICAgICAgICAgICAgICAgICAgICBzaW1wbGVDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9pemVJbmRleCA9IG1lbW9pemVHbG9iYWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbWVtb2l6ZUdsb2JhbEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjYWNoZTtcbiAgICAgICAgICAgICAgICBjYWNoZSA9IHRoaXNOYW1lc3BhY2UgPyAodGhpc0NhY2hlID0gdGhpc0NhY2hlIHx8IG5ldyB3ZWFrbWFwX0Nyb3NzRG9tYWluU2FmZVdlYWtNYXApLmdldE9yU2V0KHRoaXMsIGdldEVtcHR5T2JqZWN0KSA6IHNpbXBsZUNhY2hlID0gc2ltcGxlQ2FjaGUgfHwge307XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gc2VyaWFsaXplQXJncyhhcmdzKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVSZXN1bHQgPSBjYWNoZVtjYWNoZUtleV07XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlUmVzdWx0ICYmIGNhY2hlVGltZSAmJiBEYXRlLm5vdygpIC0gY2FjaGVSZXN1bHQudGltZSA8IGNhY2hlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVbY2FjaGVLZXldO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWNoZVJlc3VsdCkgcmV0dXJuIGNhY2hlUmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBjYWNoZVtjYWNoZUtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1lbW9pemVkRnVuY3Rpb24ucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzaW1wbGVDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lKG1lbW9pemVkRnVuY3Rpb24sIChvcHRpb25zLm5hbWUgfHwgZ2V0RnVuY3Rpb25OYW1lKG1ldGhvZCkpICsgXCI6Om1lbW9pemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9pemUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1lbW9pemVHbG9iYWxJbmRleFZhbGlkRnJvbSA9IG1lbW9pemVHbG9iYWxJbmRleDtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbWVtb2l6ZVByb21pc2UobWV0aG9kKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lbW9pemVkUHJvbWlzZUZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzLCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHNlcmlhbGl6ZUFyZ3MoYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiBjYWNoZVtrZXldO1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KF90aGlzLCBfYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9KSkuZmluYWxseSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtrZXldO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9pemVkUHJvbWlzZUZ1bmN0aW9uLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUgPSB7fTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lKG1lbW9pemVkUHJvbWlzZUZ1bmN0aW9uLCBnZXRGdW5jdGlvbk5hbWUobWV0aG9kKSArIFwiOjpwcm9taXNlTWVtb2l6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5saW5lTWVtb2l6ZShtZXRob2QsIGxvZ2ljLCBhcmdzKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGFyZ3MgJiYgKGFyZ3MgPSBbXSk7XG4gICAgICAgICAgICB2YXIgY2FjaGUgPSBtZXRob2QuX19pbmxpbmVfbWVtb2l6ZV9jYWNoZV9fID0gbWV0aG9kLl9faW5saW5lX21lbW9pemVfY2FjaGVfXyB8fCB7fTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBzZXJpYWxpemVBcmdzKGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmhhc093blByb3BlcnR5KGtleSkgPyBjYWNoZVtrZXldIDogY2FjaGVba2V5XSA9IGxvZ2ljLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3JjX3V0aWxfbm9vcCgpIHt9XG4gICAgICAgIGZ1bmN0aW9uIG9uY2UobWV0aG9kKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGVkID0gITE7XG4gICAgICAgICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCBnZXRGdW5jdGlvbk5hbWUobWV0aG9kKSArIFwiOjpvbmNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ2lmeUVycm9yKGVyciwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gbGV2ZWwgJiYgKGxldmVsID0gMSk7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPj0gMykgcmV0dXJuIFwic3RyaW5naWZ5RXJyb3Igc3RhY2sgb3ZlcmZsb3dcIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHJldHVybiBcIjx1bmtub3duIGVycm9yOiBcIiArIHt9LnRvU3RyaW5nLmNhbGwoZXJyKSArIFwiPlwiO1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlcnIpIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFjayA9IGVyciAmJiBlcnIuc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gZXJyICYmIGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2sgJiYgbWVzc2FnZSkgcmV0dXJuIC0xICE9PSBzdGFjay5pbmRleE9mKG1lc3NhZ2UpID8gc3RhY2sgOiBtZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2spIHJldHVybiBzdGFjaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyICYmIGVyci50b1N0cmluZyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGVyci50b1N0cmluZyA/IGVyci50b1N0cmluZygpIDoge30udG9TdHJpbmcuY2FsbChlcnIpO1xuICAgICAgICAgICAgfSBjYXRjaCAobmV3RXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3Igd2hpbGUgc3RyaW5naWZ5aW5nIGVycm9yOiBcIiArIHN0cmluZ2lmeUVycm9yKG5ld0VyciwgbGV2ZWwgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdHJpbmdpZnkoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGl0ZW0gPyBpdGVtIDogaXRlbSAmJiBpdGVtLnRvU3RyaW5nICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlbS50b1N0cmluZyA/IGl0ZW0udG9TdHJpbmcoKSA6IHt9LnRvU3RyaW5nLmNhbGwoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kKG9iaiwgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIGlmIChPYmplY3QuYXNzaWduKSByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHNvdXJjZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAob2JqW2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9pemUoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMpIHJldHVybiBPYmplY3QudmFsdWVzKG9iaik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiByZXN1bHQucHVzaChvYmpba2V5XSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIGlkZW50aXR5KGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNhZmVJbnRlcnZhbChtZXRob2QsIHRpbWUpIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgICAgICAgIWZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICAgICAgICAgIH0pLCB0aW1lKTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lTGF6eVByb3Aob2JqLCBrZXksIGdldHRlcikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiICE9IHR5cGVvZiBrZXkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheSBrZXkgbXVzdCBiZSBudW1iZXJcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIG9iaiAmJiBudWxsICE9PSBvYmogJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2Yga2V5KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGtleSBtdXN0IGJlIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJyYXlGcm9tKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIChpdGVtID0gb2JqKSAmJiBudWxsICE9PSBpdGVtICYmIFwiW29iamVjdCBPYmplY3RdXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgICAgIHZhciBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgICAgICAgICBpZiAoIWlzT2JqZWN0T2JqZWN0KG9iaikpIHJldHVybiAhMTtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGNvbnN0cnVjdG9yKSByZXR1cm4gITE7XG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICAgICAgcmV0dXJuICEhaXNPYmplY3RPYmplY3QocHJvdG90eXBlKSAmJiAhIXByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShcImlzUHJvdG90eXBlT2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZU9iamVjdChpdGVtLCByZXBsYWNlciwgZnVsbEtleSkge1xuICAgICAgICAgICAgdm9pZCAwID09PSBmdWxsS2V5ICYmIChmdWxsS2V5ID0gXCJcIik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTGF6eVByb3AocmVzdWx0LCBpLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUtleSA9IGZ1bGxLZXkgPyBmdWxsS2V5ICsgXCIuXCIgKyBpIDogXCJcIiArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSByZXBsYWNlcihpdGVtW2ldLCBpLCBpdGVtS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc1BsYWluT2JqZWN0KGNoaWxkKSB8fCBBcnJheS5pc0FycmF5KGNoaWxkKSkgJiYgKGNoaWxkID0gcmVwbGFjZU9iamVjdChjaGlsZCwgcmVwbGFjZXIsIGl0ZW1LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgX2xvb3AyKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTGF6eVByb3AoX3Jlc3VsdCwga2V5LCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUtleSA9IGZ1bGxLZXkgPyBmdWxsS2V5ICsgXCIuXCIgKyBrZXkgOiBcIlwiICsga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gcmVwbGFjZXIoaXRlbVtrZXldLCBrZXksIGl0ZW1LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGlzUGxhaW5PYmplY3QoY2hpbGQpIHx8IEFycmF5LmlzQXJyYXkoY2hpbGQpKSAmJiAoY2hpbGQgPSByZXBsYWNlT2JqZWN0KGNoaWxkLCByZXBsYWNlciwgaXRlbUtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaXRlbSkgX2xvb3AzKGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXNzIGFuIG9iamVjdCBvciBhcnJheVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsICE9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHV0aWxfaXNSZWdleChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJbb2JqZWN0IFJlZ0V4cF1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1dGlsX2dldE9yU2V0KG9iaiwga2V5LCBnZXR0ZXIpIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuIG9ialtrZXldO1xuICAgICAgICAgICAgdmFyIHZhbCA9IGdldHRlcigpO1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXAob2JqKSB7XG4gICAgICAgICAgICB2YXIgdGFza3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBjbGVhbmVkID0gITE7XG4gICAgICAgICAgICB2YXIgY2xlYW5FcnI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24obmFtZSwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsZWFuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtuYW1lXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbmVkID8gbWV0aG9kKGNsZWFuRXJyKSA6IHRhc2tzLnB1c2gob25jZSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kKGNsZWFuRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuRXJyID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbmVkID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO3Rhc2tzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGFzaygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhc3NlcnRFeGlzdHMobmFtZSwgdGhpbmcpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHRoaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBcIiArIG5hbWUgKyBcIiB0byBiZSBwcmVzZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1dGlsX0V4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uKF9FcnJvcikge1xuICAgICAgICAgICAgX2luaGVyaXRzTG9vc2UoRXh0ZW5kYWJsZUVycm9yLCBfRXJyb3IpO1xuICAgICAgICAgICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXM2O1xuICAgICAgICAgICAgICAgIChfdGhpczYgPSBfRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzKS5uYW1lID0gX3RoaXM2LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA/IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gc2VsZikgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgICAgICAgICB9KF90aGlzNiksIF90aGlzNi5jb25zdHJ1Y3RvcikgOiBfdGhpczYuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG4gICAgICAgIH0od3JhcE5hdGl2ZVN1cGVyX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuICAgICAgICBmdW5jdGlvbiBpc0RvY3VtZW50UmVhZHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudC5ib2R5KSAmJiBcImNvbXBsZXRlXCIgPT09IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNEb2N1bWVudEludGVyYWN0aXZlKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQuYm9keSkgJiYgXCJpbnRlcmFjdGl2ZVwiID09PSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVybEVuY29kZShzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFw/L2csIFwiJTNGXCIpLnJlcGxhY2UoLyYvZywgXCIlMjZcIikucmVwbGFjZSgvIy9nLCBcIiUyM1wiKS5yZXBsYWNlKC9cXCsvZywgXCIlMkJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbWVtb2l6ZSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb21pc2VfWmFsZ29Qcm9taXNlKChmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpIHx8IGlzRG9jdW1lbnRJbnRlcmFjdGl2ZSgpKSByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpIHx8IGlzRG9jdW1lbnRJbnRlcmFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgMTApO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUXVlcnkocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmxpbmVNZW1vaXplKHBhcnNlUXVlcnksIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgaWYgKCFxdWVyeVN0cmluZykgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgICAgICAgICBpZiAoLTEgPT09IHF1ZXJ5U3RyaW5nLmluZGV4T2YoXCI9XCIpKSByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9xdWVyeVN0cmluZyRzcGxpdDIgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIik7IF9pMiA8IF9xdWVyeVN0cmluZyRzcGxpdDIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFpciA9IF9xdWVyeVN0cmluZyRzcGxpdDJbX2kyXTtcbiAgICAgICAgICAgICAgICAgICAgKHBhaXIgPSBwYWlyLnNwbGl0KFwiPVwiKSlbMF0gJiYgcGFpclsxXSAmJiAocGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgfSksIFsgcXVlcnlTdHJpbmcgXSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kUXVlcnkob3JpZ2luYWxRdWVyeSwgcHJvcHMpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gcHJvcHMgJiYgKHByb3BzID0ge30pO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzICYmIE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPyBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IG9iaiAmJiAob2JqID0ge30pO1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9KSkubWFwKChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybEVuY29kZShrZXkpICsgXCI9XCIgKyB1cmxFbmNvZGUob2JqW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiJlwiKTtcbiAgICAgICAgICAgIH0oX2V4dGVuZHMoe30sIHBhcnNlUXVlcnkob3JpZ2luYWxRdWVyeSksIHByb3BzKSkgOiBvcmlnaW5hbFF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkKGNvbnRhaW5lciwgY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkVsZW1lbnQgfHwgbnVsbCAhPT0gZWxlbWVudCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlbGVtZW50ICYmIDEgPT09IGVsZW1lbnQubm9kZVR5cGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZWxlbWVudC5zdHlsZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0RWxlbWVudFNhZmUoaWQsIGRvYykge1xuICAgICAgICAgICAgdm9pZCAwID09PSBkb2MgJiYgKGRvYyA9IGRvY3VtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBpc0VsZW1lbnQoaWQpID8gaWQgOiBcInN0cmluZ1wiID09IHR5cGVvZiBpZCA/IGRvYy5xdWVyeVNlbGVjdG9yKGlkKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBlbGVtZW50UmVhZHkoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2UoKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gc3RyaW5naWZ5KGlkKTtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBnZXRFbGVtZW50U2FmZShpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsKSByZXR1cm4gcmVzb2x2ZShlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpKSByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIkRvY3VtZW50IGlzIHJlYWR5IGFuZCBlbGVtZW50IFwiICsgbmFtZSArIFwiIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCA9IGdldEVsZW1lbnRTYWZlKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiRG9jdW1lbnQgaXMgcmVhZHkgYW5kIGVsZW1lbnQgXCIgKyBuYW1lICsgXCIgZG9lcyBub3QgZXhpc3RcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIDEwKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9tX1BvcHVwT3BlbkVycm9yID0gZnVuY3Rpb24oX0V4dGVuZGFibGVFcnJvcikge1xuICAgICAgICAgICAgX2luaGVyaXRzTG9vc2UoUG9wdXBPcGVuRXJyb3IsIF9FeHRlbmRhYmxlRXJyb3IpO1xuICAgICAgICAgICAgZnVuY3Rpb24gUG9wdXBPcGVuRXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9FeHRlbmRhYmxlRXJyb3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFBvcHVwT3BlbkVycm9yO1xuICAgICAgICB9KHV0aWxfRXh0ZW5kYWJsZUVycm9yKTtcbiAgICAgICAgdmFyIGF3YWl0RnJhbWVMb2FkUHJvbWlzZXM7XG4gICAgICAgIGZ1bmN0aW9uIGF3YWl0RnJhbWVMb2FkKGZyYW1lKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0RnJhbWVMb2FkUHJvbWlzZXMgPSBhd2FpdEZyYW1lTG9hZFByb21pc2VzIHx8IG5ldyB3ZWFrbWFwX0Nyb3NzRG9tYWluU2FmZVdlYWtNYXApLmhhcyhmcmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3Byb21pc2UgPSBhd2FpdEZyYW1lTG9hZFByb21pc2VzLmdldChmcmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKF9wcm9taXNlKSByZXR1cm4gX3Byb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBwcm9taXNlX1phbGdvUHJvbWlzZSgoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlmcmFtZVdpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkID0gaWZyYW1lV2luZG93c1tpXS5jbG9zZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lRnJhbWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZVdpbmRvd3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lICYmIGZyYW1lLmNvbnRlbnRXaW5kb3cpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lV2luZG93cy5wdXNoKGZyYW1lLmNvbnRlbnRXaW5kb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICAgICAgfShmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhbWUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb250ZW50V2luZG93ID8gcmVzb2x2ZShmcmFtZSkgOiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBhd2FpdEZyYW1lTG9hZFByb21pc2VzLnNldChmcmFtZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhd2FpdEZyYW1lV2luZG93KGZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXRGcmFtZUxvYWQoZnJhbWUpLnRoZW4oKGZ1bmN0aW9uKGxvYWRlZEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2FkZWRGcmFtZS5jb250ZW50V2luZG93KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCB3aW5kb3cgaW4gaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZWRGcmFtZS5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRvbV9pZnJhbWUob3B0aW9ucywgY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG9wdGlvbnMgJiYgKG9wdGlvbnMgPSB7fSk7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBvcHRpb25zLnN0eWxlIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGZyYW1lID0gZnVuY3Rpb24odGFnLCBvcHRpb25zLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHRhZyAmJiAodGFnID0gXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBvcHRpb25zICYmIChvcHRpb25zID0ge30pO1xuICAgICAgICAgICAgICAgIHRhZyA9IHRhZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUgJiYgZXh0ZW5kKGVsZW1lbnQuc3R5bGUsIG9wdGlvbnMuc3R5bGUpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY2xhc3MgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzcy5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5pZCAmJiBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIG9wdGlvbnMuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZXMpIGZvciAodmFyIF9pMTAgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKTsgX2kxMCA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTEwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5czJbX2kxMF07XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0eWxlU2hlZXQgJiYgZnVuY3Rpb24oZWwsIHN0eWxlVGV4dCwgZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZG9jICYmIChkb2MgPSB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVNoZWV0ID8gZWwuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVUZXh0IDogZWwuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHN0eWxlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH0oZWxlbWVudCwgb3B0aW9ucy5zdHlsZVNoZWV0KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5odG1sKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImlmcmFtZVwiID09PSB0YWcpIHRocm93IG5ldyBFcnJvcihcIklmcmFtZSBodG1sIGNhbiBub3QgYmUgd3JpdHRlbiB1bmxlc3MgY29udGFpbmVyIHByb3ZpZGVkIGFuZCBpZnJhbWUgaW4gRE9NXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMuaHRtbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9KFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VHJhbnNwYXJlbmN5OiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fSksXG4gICAgICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9LCBzdHlsZSksXG4gICAgICAgICAgICAgICAgaHRtbDogb3B0aW9ucy5odG1sLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBvcHRpb25zLmNsYXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpc0lFID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUV8RWRnZS9pKTtcbiAgICAgICAgICAgIGZyYW1lLmhhc0F0dHJpYnV0ZShcImlkXCIpIHx8IGZyYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIHVuaXF1ZUlEKCkpO1xuICAgICAgICAgICAgYXdhaXRGcmFtZUxvYWQoZnJhbWUpO1xuICAgICAgICAgICAgY29udGFpbmVyICYmIGZ1bmN0aW9uKGlkLCBkb2MpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGRvYyAmJiAoZG9jID0gZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudFNhZmUoaWQsIGRvYyk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgZmluZCBlbGVtZW50OiBcIiArIHN0cmluZ2lmeShpZCkpO1xuICAgICAgICAgICAgfShjb250YWluZXIpLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAgICAgICAgIChvcHRpb25zLnVybCB8fCBpc0lFKSAmJiBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgb3B0aW9ucy51cmwgfHwgXCJhYm91dDpibGFua1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG9iaiwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0VsZW1lbnRDbG9zZWQoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAhKGVsICYmIGVsLnBhcmVudE5vZGUgJiYgZWwub3duZXJEb2N1bWVudCAmJiBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKGVsLCBoYW5kbGVyLCBfdGVtcCkge1xuICAgICAgICAgICAgdmFyIF9yZWYyID0gdm9pZCAwID09PSBfdGVtcCA/IHt9IDogX3RlbXAsIF9yZWYyJHdpZHRoID0gX3JlZjIud2lkdGgsIHdpZHRoID0gdm9pZCAwID09PSBfcmVmMiR3aWR0aCB8fCBfcmVmMiR3aWR0aCwgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LCBoZWlnaHQgPSB2b2lkIDAgPT09IF9yZWYyJGhlaWdodCB8fCBfcmVmMiRoZWlnaHQsIF9yZWYyJGludGVydmFsID0gX3JlZjIuaW50ZXJ2YWwsIGludGVydmFsID0gdm9pZCAwID09PSBfcmVmMiRpbnRlcnZhbCA/IDEwMCA6IF9yZWYyJGludGVydmFsLCBfcmVmMiR3aW4gPSBfcmVmMi53aW4sIHdpbiA9IHZvaWQgMCA9PT0gX3JlZjIkd2luID8gd2luZG93IDogX3JlZjIkd2luO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY2FuY2VsZWQgPSAhMTtcbiAgICAgICAgICAgIGhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXJyZW50SGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQgJiYgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oZWwub2Zmc2V0V2lkdGggfHwgZWwub2Zmc2V0SGVpZ2h0IHx8IGVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9KGVsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgKHdpZHRoICYmIG5ld1dpZHRoICE9PSBjdXJyZW50V2lkdGggfHwgaGVpZ2h0ICYmIG5ld0hlaWdodCAhPT0gY3VycmVudEhlaWdodCkgJiYgaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcjtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2spO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gd2luLlJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgKG9ic2VydmVyID0gbmV3IHdpbi5SZXNpemVPYnNlcnZlcihjaGVjaykpLm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzYWZlSW50ZXJ2YWwoY2hlY2ssIDEwICogaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IHdpbi5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgKG9ic2VydmVyID0gbmV3IHdpbi5NdXRhdGlvbk9ic2VydmVyKGNoZWNrKSkub2JzZXJ2ZShlbCwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6ICExXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNhZmVJbnRlcnZhbChjaGVjaywgMTAgKiBpbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2UgdGltZW91dCA9IHNhZmVJbnRlcnZhbChjaGVjaywgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dC5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2hhZG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3IgKDtlbGVtZW50LnBhcmVudE5vZGU7ICkgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgU2hhZG93Um9vdF1cIiA9PT0gZWxlbWVudC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50U2NyaXB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0IDogbnVsbDtcbiAgICAgICAgdmFyIGdldEN1cnJlbnRTY3JpcHQgPSBtZW1vaXplKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2NyaXB0KSByZXR1cm4gY3VycmVudFNjcmlwdDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2NyaXB0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIl9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyLnN0YWNrIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWNrRGV0YWlscyA9IC8uKmF0IFteKF0qXFwoKC4qKTooLispOiguKylcXCkkL2dpLmV4ZWMoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0TG9jYXRpb24gPSBzdGFja0RldGFpbHMgJiYgc3RhY2tEZXRhaWxzWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNjcmlwdExvY2F0aW9uKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMjIgPSAwLCBfQXJyYXkkcHJvdG90eXBlJHNsaWMyID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucmV2ZXJzZSgpOyBfaTIyIDwgX0FycmF5JHByb3RvdHlwZSRzbGljMi5sZW5ndGg7IF9pMjIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IF9BcnJheSRwcm90b3R5cGUkc2xpYzJbX2kyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0LnNyYyAmJiBzY3JpcHQuc3JjID09PSBzY3JpcHRMb2NhdGlvbikgcmV0dXJuIHNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIH0oKSkgcmV0dXJuIGN1cnJlbnRTY3JpcHQ7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGRldGVybWluZSBjdXJyZW50IHNjcmlwdFwiKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgY3VycmVudFVJRCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIG1lbW9pemUoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNjcmlwdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gZ2V0Q3VycmVudFNjcmlwdCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRVSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdWlkID0gc2NyaXB0LmdldEF0dHJpYnV0ZShcImRhdGEtdWlkXCIpO1xuICAgICAgICAgICAgaWYgKHVpZCAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB1aWQpIHJldHVybiB1aWQ7XG4gICAgICAgICAgICBpZiAoKHVpZCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVpZC1hdXRvXCIpKSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB1aWQpIHJldHVybiB1aWQ7XG4gICAgICAgICAgICB1aWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtdWlkLWF1dG9cIiwgdWlkKTtcbiAgICAgICAgICAgIHJldHVybiB1aWQ7XG4gICAgICAgIH0pKTtcbiAgICAgICAgZnVuY3Rpb24gdG9QeCh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgdmFsKSByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHZhbC5tYXRjaCgvXihbMC05XSspKHB4fCUpJC8pO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBtYXRjaCBjc3MgdmFsdWUgZnJvbSBcIiArIHZhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgICAgICAgICB9KHZhbCkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9DU1ModmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgdmFsID8gdG9QeCh2YWwpIDogXCJzdHJpbmdcIiA9PSB0eXBlb2YgKHN0ciA9IHZhbCkgJiYgL15bMC05XSslJC8udGVzdChzdHIpID8gdmFsIDogdG9QeCh2YWwpO1xuICAgICAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnbG9iYWxfZ2V0R2xvYmFsKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsS2V5ID0gXCJfX3Bvc3Rfcm9ib3RfMTBfMF80Ml9fXCI7XG4gICAgICAgICAgICByZXR1cm4gd2luICE9PSB3aW5kb3cgPyB3aW5bZ2xvYmFsS2V5XSA6IHdpbltnbG9iYWxLZXldID0gd2luW2dsb2JhbEtleV0gfHwge307XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdldE9iaiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnbG9iYWxTdG9yZShrZXksIGRlZlN0b3JlKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGtleSAmJiAoa2V5ID0gXCJzdG9yZVwiKTtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZGVmU3RvcmUgJiYgKGRlZlN0b3JlID0gZ2V0T2JqKTtcbiAgICAgICAgICAgIHJldHVybiB1dGlsX2dldE9yU2V0KGdsb2JhbF9nZXRHbG9iYWwoKSwga2V5LCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gZGVmU3RvcmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoYXM6IGZ1bmN0aW9uKHN0b3JlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuaGFzT3duUHJvcGVydHkoc3RvcmVLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKHN0b3JlS2V5LCBkZWZWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5oYXNPd25Qcm9wZXJ0eShzdG9yZUtleSkgPyBzdG9yZVtzdG9yZUtleV0gOiBkZWZWYWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24oc3RvcmVLZXksIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVbc3RvcmVLZXldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVsOiBmdW5jdGlvbihzdG9yZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3N0b3JlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JTZXQ6IGZ1bmN0aW9uKHN0b3JlS2V5LCBnZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsX2dldE9yU2V0KHN0b3JlLCBzdG9yZUtleSwgZ2V0dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBkZWZTdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBXaWxkQ2FyZCA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIGZ1bmN0aW9uIGdldFdpbGRjYXJkKCkge1xuICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGdsb2JhbF9nZXRHbG9iYWwoKTtcbiAgICAgICAgICAgIGdsb2JhbC5XSU5ET1dfV0lMRENBUkQgPSBnbG9iYWwuV0lORE9XX1dJTERDQVJEIHx8IG5ldyBXaWxkQ2FyZDtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwuV0lORE9XX1dJTERDQVJEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd1N0b3JlKGtleSwgZGVmU3RvcmUpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0ga2V5ICYmIChrZXkgPSBcInN0b3JlXCIpO1xuICAgICAgICAgICAgdm9pZCAwID09PSBkZWZTdG9yZSAmJiAoZGVmU3RvcmUgPSBnZXRPYmopO1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0b3JlKFwid2luZG93U3RvcmVcIikuZ2V0T3JTZXQoa2V5LCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpblN0b3JlID0gbmV3IHdlYWttYXBfQ3Jvc3NEb21haW5TYWZlV2Vha01hcDtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0U3RvcmUgPSBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblN0b3JlLmdldE9yU2V0KHdpbiwgZGVmU3RvcmUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzOiBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdG9yZSh3aW4pLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24od2luLCBkZWZWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IGdldFN0b3JlKHdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSA/IHN0b3JlW2tleV0gOiBkZWZWYWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24od2luLCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0b3JlKHdpbilba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbDogZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2V0U3RvcmUod2luKVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRPclNldDogZnVuY3Rpb24od2luLCBnZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsX2dldE9yU2V0KGdldFN0b3JlKHdpbiksIGtleSwgZ2V0dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2VJRCgpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdG9yZShcImluc3RhbmNlXCIpLmdldE9yU2V0KFwiaW5zdGFuY2VJRFwiLCB1bmlxdWVJRCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZUhlbGxvUHJvbWlzZSh3aW4sIF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBkb21haW4gPSBfcmVmLmRvbWFpbjtcbiAgICAgICAgICAgIHZhciBoZWxsb1Byb21pc2VzID0gd2luZG93U3RvcmUoXCJoZWxsb1Byb21pc2VzXCIpO1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nUHJvbWlzZSA9IGhlbGxvUHJvbWlzZXMuZ2V0KHdpbik7XG4gICAgICAgICAgICBleGlzdGluZ1Byb21pc2UgJiYgZXhpc3RpbmdQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGVsbG9Qcm9taXNlcy5zZXQod2luLCBuZXdQcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNheUhlbGxvKHdpbiwgX3JlZjQpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX3JlZjQuc2VuZCkod2luLCBcInBvc3Ryb2JvdF9oZWxsb1wiLCB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJRDogZ2V0SW5zdGFuY2VJRCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZG9tYWluOiBcIipcIixcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAtMVxuICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjUpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gX3JlZjUub3JpZ2luLCBpbnN0YW5jZUlEID0gX3JlZjUuZGF0YS5pbnN0YW5jZUlEO1xuICAgICAgICAgICAgICAgIHJlc29sdmVIZWxsb1Byb21pc2Uod2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogb3JpZ2luXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2luOiB3aW4sXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlEOiBpbnN0YW5jZUlEXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRXaW5kb3dJbnN0YW5jZUlEKHdpbiwgX3JlZjYpIHtcbiAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjYuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dTdG9yZShcIndpbmRvd0luc3RhbmNlSURQcm9taXNlc1wiKS5nZXRPclNldCh3aW4sIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F5SGVsbG8od2luLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbihfcmVmNykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjcuaW5zdGFuY2VJRDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFya1dpbmRvd0tub3duKHdpbikge1xuICAgICAgICAgICAgd2luZG93U3RvcmUoXCJrbm93bldpbmRvd3NcIikuc2V0KHdpbiwgITApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2VyaWFsaXplZFR5cGUoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGl0ZW0gJiYgbnVsbCAhPT0gaXRlbSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBpdGVtLl9fdHlwZV9fO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRldGVybWluZVR5cGUodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSB2YWwgPyBcInVuZGVmaW5lZFwiIDogbnVsbCA9PT0gdmFsID8gXCJudWxsXCIgOiBBcnJheS5pc0FycmF5KHZhbCkgPyBcImFycmF5XCIgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHZhbCA/IFwiZnVuY3Rpb25cIiA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIHZhbCA/IHZhbCBpbnN0YW5jZW9mIEVycm9yID8gXCJlcnJvclwiIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiB2YWwudGhlbiA/IFwicHJvbWlzZVwiIDogXCJbb2JqZWN0IFJlZ0V4cF1cIiA9PT0ge30udG9TdHJpbmcuY2FsbCh2YWwpID8gXCJyZWdleFwiIDogXCJbb2JqZWN0IERhdGVdXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwodmFsKSA/IFwiZGF0ZVwiIDogXCJvYmplY3RcIiA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHZhbCA/IFwic3RyaW5nXCIgOiBcIm51bWJlclwiID09IHR5cGVvZiB2YWwgPyBcIm51bWJlclwiIDogXCJib29sZWFuXCIgPT0gdHlwZW9mIHZhbCA/IFwiYm9vbGVhblwiIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZVR5cGUodHlwZSwgdmFsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIF9fdHlwZV9fOiB0eXBlLFxuICAgICAgICAgICAgICAgIF9fdmFsX186IHZhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX1NFUklBTElaRVI7XG4gICAgICAgIHZhciBTRVJJQUxJWkVSID0gKChfU0VSSUFMSVpFUiA9IHt9KS5mdW5jdGlvbiA9IGZ1bmN0aW9uKCkge30sIF9TRVJJQUxJWkVSLmVycm9yID0gZnVuY3Rpb24oX3JlZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVR5cGUoXCJlcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogX3JlZi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHN0YWNrOiBfcmVmLnN0YWNrLFxuICAgICAgICAgICAgICAgIGNvZGU6IF9yZWYuY29kZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBfcmVmLmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBfU0VSSUFMSVpFUi5wcm9taXNlID0gZnVuY3Rpb24oKSB7fSwgX1NFUklBTElaRVIucmVnZXggPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwicmVnZXhcIiwgdmFsLnNvdXJjZSk7XG4gICAgICAgIH0sIF9TRVJJQUxJWkVSLmRhdGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwiZGF0ZVwiLCB2YWwudG9KU09OKCkpO1xuICAgICAgICB9LCBfU0VSSUFMSVpFUi5hcnJheSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIub2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LCBfU0VSSUFMSVpFUi5zdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sIF9TRVJJQUxJWkVSLm51bWJlciA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIuYm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIubnVsbCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIpO1xuICAgICAgICB2YXIgZGVmYXVsdFNlcmlhbGl6ZXJzID0ge307XG4gICAgICAgIHZhciBfREVTRVJJQUxJWkVSO1xuICAgICAgICB2YXIgREVTRVJJQUxJWkVSID0gKChfREVTRVJJQUxJWkVSID0ge30pLmZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBzZXJpYWxpemF0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZDsgbm90aGluZyB0byBkZXNlcmlhbGl6ZVwiKTtcbiAgICAgICAgfSwgX0RFU0VSSUFMSVpFUi5lcnJvciA9IGZ1bmN0aW9uKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBfcmVmMi5zdGFjaywgY29kZSA9IF9yZWYyLmNvZGUsIGRhdGEgPSBfcmVmMi5kYXRhO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKF9yZWYyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gICAgICAgICAgICBkYXRhICYmIChlcnJvci5kYXRhID0gZGF0YSk7XG4gICAgICAgICAgICBlcnJvci5zdGFjayA9IHN0YWNrICsgXCJcXG5cXG5cIiArIGVycm9yLnN0YWNrO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9LCBfREVTRVJJQUxJWkVSLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb21pc2Ugc2VyaWFsaXphdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQ7IG5vdGhpbmcgdG8gZGVzZXJpYWxpemVcIik7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIucmVnZXggPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHZhbCk7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIuZGF0ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbCk7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIuYXJyYXkgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIub2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LCBfREVTRVJJQUxJWkVSLnN0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX0RFU0VSSUFMSVpFUi5udW1iZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIuYm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX0RFU0VSSUFMSVpFUi5udWxsID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LCBfREVTRVJJQUxJWkVSKTtcbiAgICAgICAgdmFyIGRlZmF1bHREZXNlcmlhbGl6ZXJzID0ge307XG4gICAgICAgIG5ldyBwcm9taXNlX1phbGdvUHJvbWlzZSgoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keSkgcmV0dXJuIHJlc29sdmUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHdpbmRvdy5kb2N1bWVudC5ib2R5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgMTApO1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXBQcm94eVdpbmRvd3MoKSB7XG4gICAgICAgICAgICB2YXIgaWRUb1Byb3h5V2luZG93ID0gZ2xvYmFsU3RvcmUoXCJpZFRvUHJveHlXaW5kb3dcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfaWRUb1Byb3h5V2luZG93JGtleXMyID0gaWRUb1Byb3h5V2luZG93LmtleXMoKTsgX2kyIDwgX2lkVG9Qcm94eVdpbmRvdyRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gX2lkVG9Qcm94eVdpbmRvdyRrZXlzMltfaTJdO1xuICAgICAgICAgICAgICAgIGlkVG9Qcm94eVdpbmRvdy5nZXQoaWQpLnNob3VsZENsZWFuKCkgJiYgaWRUb1Byb3h5V2luZG93LmRlbChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZFdpbmRvdyh3aW5Qcm9taXNlLCBfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWYuc2VuZCwgX3JlZiRpZCA9IF9yZWYuaWQsIGlkID0gdm9pZCAwID09PSBfcmVmJGlkID8gdW5pcXVlSUQoKSA6IF9yZWYkaWQ7XG4gICAgICAgICAgICB2YXIgd2luZG93TmFtZVByb21pc2UgPSB3aW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEb21haW4od2luKSkgcmV0dXJuIGFzc2VydFNhbWVEb21haW4od2luKS5uYW1lO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIHdpbmRvd1R5cGVQcm9taXNlID0gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQod2luZG93KSkgdGhyb3cgbmV3IEVycm9yKFwiV2luZG93IGlzIGNsb3NlZCwgY2FuIG5vdCBkZXRlcm1pbmUgdHlwZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0T3BlbmVyKHdpbmRvdykgPyBXSU5ET1dfVFlQRS5QT1BVUCA6IFdJTkRPV19UWVBFLklGUkFNRTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHdpbmRvd05hbWVQcm9taXNlLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgd2luZG93VHlwZVByb21pc2UuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBnZXRUeXBlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1R5cGVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5zdGFuY2VJRDogbWVtb2l6ZVByb21pc2UoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRXaW5kb3dJbnN0YW5jZUlEKHdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblByb21pc2UudGhlbihjbG9zZVdpbmRvdyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXROYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblByb21pc2UudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2luZG93Q2xvc2VkKHdpbikpIHJldHVybiBpc1NhbWVEb21haW4od2luKSA/IGFzc2VydFNhbWVEb21haW4od2luKS5uYW1lIDogd2luZG93TmFtZVByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblByb21pc2UudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1dpbmRvd0Nsb3NlZCh3aW4pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbjogZnVuY3Rpb24oaHJlZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBocmVmLmluZGV4T2YoXCIvXCIpKSBocmVmID0gXCJcIiArIGRvbWFpbiArIGhyZWY7IGVsc2UgaWYgKCFocmVmLm1hdGNoKC9eaHR0cHM/OlxcL1xcLy8pICYmIDAgIT09IGhyZWYuaW5kZXhPZihkb21haW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB1cmwgdG8gYmUgaHR0cCBvciBodHRwcyB1cmwsIG9yIGFic29sdXRlIHBhdGgsIGdvdCBcIiArIEpTT04uc3RyaW5naWZ5KGhyZWYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEb21haW4od2luKSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luLmxvY2F0aW9uICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luLmxvY2F0aW9uLnJlcGxhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luLmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW4ubG9jYXRpb24gPSBocmVmO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXROYW1lOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVEb21haW4gPSBpc1NhbWVEb21haW4od2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEb21haW4od2luKSkgcmV0dXJuIGFzc2VydFNhbWVEb21haW4od2luKS5mcmFtZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyMSA9IDAsIF9kb2N1bWVudCRxdWVyeVNlbGVjdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lXCIpOyBfaTIxIDwgX2RvY3VtZW50JHF1ZXJ5U2VsZWN0Mi5sZW5ndGg7IF9pMjErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSBfZG9jdW1lbnQkcXVlcnlTZWxlY3QyW19pMjFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWUgJiYgZnJhbWUuY29udGVudFdpbmRvdyAmJiBmcmFtZS5jb250ZW50V2luZG93ID09PSB3aW4pIHJldHVybiBmcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhbWVEb21haW4pIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3Qgc2V0IG5hbWUgZm9yIGNyb3NzLWRvbWFpbiB3aW5kb3c6IFwiICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnRTYW1lRG9tYWluKHdpbikubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZSAmJiBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93TmFtZVByb21pc2UgPSBwcm9taXNlX1phbGdvUHJvbWlzZS5yZXNvbHZlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2luZG93X1Byb3h5V2luZG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBQcm94eVdpbmRvdyhfcmVmMikge1xuICAgICAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjIuc2VuZCwgd2luID0gX3JlZjIud2luLCBzZXJpYWxpemVkV2luZG93ID0gX3JlZjIuc2VyaWFsaXplZFdpbmRvdztcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQcm94eVdpbmRvdyA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplZFdpbmRvdyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbFdpbmRvdyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbFdpbmRvd1Byb21pc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbFdpbmRvd1Byb21pc2UgPSBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVkV2luZG93ID0gc2VyaWFsaXplZFdpbmRvdyB8fCBnZXRTZXJpYWxpemVkV2luZG93KHRoaXMuYWN0dWFsV2luZG93UHJvbWlzZSwge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsU3RvcmUoXCJpZFRvUHJveHlXaW5kb3dcIikuc2V0KHRoaXMuZ2V0SUQoKSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgd2luICYmIHRoaXMuc2V0V2luZG93KHdpbiwge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3Byb3RvID0gUHJveHlXaW5kb3cucHJvdG90eXBlO1xuICAgICAgICAgICAgX3Byb3RvLmdldElEID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5pZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZ2V0VHlwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZWRXaW5kb3cuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5pc1BvcHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSgpLnRoZW4oKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09IFdJTkRPV19UWVBFLlBPUFVQO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uc2V0TG9jYXRpb24gPSBmdW5jdGlvbihocmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVkV2luZG93LnNldExvY2F0aW9uKGhyZWYpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5nZXROYW1lKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnNldE5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5zZXROYW1lKG5hbWUpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVkV2luZG93LmNsb3NlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczM7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBpc1BvcHVwUHJvbWlzZSA9IHRoaXMuaXNQb3B1cCgpO1xuICAgICAgICAgICAgICAgIHZhciBnZXROYW1lUHJvbWlzZSA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIHZhciByZW9wZW5Qcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlzUG9wdXA6IGlzUG9wdXBQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBnZXROYW1lUHJvbWlzZVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgX3JlZjMuaXNQb3B1cCAmJiBuYW1lICYmIHdpbmRvdy5vcGVuKFwiXCIsIG5hbWUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNQcm9taXNlID0gdGhpcy5zZXJpYWxpemVkV2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmFsbChbIHJlb3BlblByb21pc2UsIGZvY3VzUHJvbWlzZSBdKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmlzQ2xvc2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5pc0Nsb3NlZCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXRXaW5kb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxXaW5kb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnNldFdpbmRvdyA9IGZ1bmN0aW9uKHdpbiwgX3JlZjQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY0LnNlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxXaW5kb3cgPSB3aW47XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxXaW5kb3dQcm9taXNlLnJlc29sdmUodGhpcy5hY3R1YWxXaW5kb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplZFdpbmRvdyA9IGdldFNlcmlhbGl6ZWRXaW5kb3codGhpcy5hY3R1YWxXaW5kb3dQcm9taXNlLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmdldElEKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3dTdG9yZShcIndpblRvUHJveHlXaW5kb3dcIikuc2V0KHdpbiwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmF3YWl0V2luZG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsV2luZG93UHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8ubWF0Y2hXaW5kb3cgPSBmdW5jdGlvbih3aW4sIF9yZWY1KSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHNlbmQgPSBfcmVmNS5zZW5kO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM1LmFjdHVhbFdpbmRvdyA/IHdpbiA9PT0gX3RoaXM1LmFjdHVhbFdpbmRvdyA6IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlJbnN0YW5jZUlEOiBfdGhpczUuZ2V0SW5zdGFuY2VJRCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAga25vd25XaW5kb3dJbnN0YW5jZUlEOiBnZXRXaW5kb3dJbnN0YW5jZUlEKHdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBfcmVmNi5wcm94eUluc3RhbmNlSUQgPT09IF9yZWY2Lmtub3duV2luZG93SW5zdGFuY2VJRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoICYmIF90aGlzNS5zZXRXaW5kb3cod2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdHVhbFdpbmRvdyB8fCB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXRJbnN0YW5jZUlEID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5nZXRJbnN0YW5jZUlEKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnNob3VsZENsZWFuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5hY3R1YWxXaW5kb3cgJiYgaXNXaW5kb3dDbG9zZWQodGhpcy5hY3R1YWxXaW5kb3cpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uc2VyaWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBQcm94eVdpbmRvdy51bndyYXAgPSBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyh3aW4pID8gd2luLnVud3JhcCgpIDogd2luO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFByb3h5V2luZG93LnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHdpbiwgX3JlZjcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY3LnNlbmQ7XG4gICAgICAgICAgICAgICAgY2xlYW51cFByb3h5V2luZG93cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm94eVdpbmRvdy50b1Byb3h5V2luZG93KHdpbiwge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSkuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUHJveHlXaW5kb3cuZGVzZXJpYWxpemUgPSBmdW5jdGlvbihzZXJpYWxpemVkV2luZG93LCBfcmVmOCkge1xuICAgICAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjguc2VuZDtcbiAgICAgICAgICAgICAgICBjbGVhbnVwUHJveHlXaW5kb3dzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0b3JlKFwiaWRUb1Byb3h5V2luZG93XCIpLmdldChzZXJpYWxpemVkV2luZG93LmlkKSB8fCBuZXcgUHJveHlXaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkV2luZG93OiBzZXJpYWxpemVkV2luZG93LFxuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKG9iaiAmJiAhaXNXaW5kb3cob2JqKSAmJiBvYmouaXNQcm94eVdpbmRvdyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUHJveHlXaW5kb3cudG9Qcm94eVdpbmRvdyA9IGZ1bmN0aW9uKHdpbiwgX3JlZjkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY5LnNlbmQ7XG4gICAgICAgICAgICAgICAgY2xlYW51cFByb3h5V2luZG93cygpO1xuICAgICAgICAgICAgICAgIGlmIChQcm94eVdpbmRvdy5pc1Byb3h5V2luZG93KHdpbikpIHJldHVybiB3aW47XG4gICAgICAgICAgICAgICAgdmFyIGFjdHVhbFdpbmRvdyA9IHdpbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93U3RvcmUoXCJ3aW5Ub1Byb3h5V2luZG93XCIpLmdldChhY3R1YWxXaW5kb3cpIHx8IG5ldyBQcm94eVdpbmRvdyh7XG4gICAgICAgICAgICAgICAgICAgIHdpbjogYWN0dWFsV2luZG93LFxuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFByb3h5V2luZG93O1xuICAgICAgICB9KCk7XG4gICAgICAgIGZ1bmN0aW9uIGFkZE1ldGhvZChpZCwgdmFsLCBuYW1lLCBzb3VyY2UsIGRvbWFpbikge1xuICAgICAgICAgICAgdmFyIG1ldGhvZFN0b3JlID0gd2luZG93U3RvcmUoXCJtZXRob2RTdG9yZVwiKTtcbiAgICAgICAgICAgIHZhciBwcm94eVdpbmRvd01ldGhvZHMgPSBnbG9iYWxTdG9yZShcInByb3h5V2luZG93TWV0aG9kc1wiKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3dfUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyhzb3VyY2UpKSBwcm94eVdpbmRvd01ldGhvZHMuc2V0KGlkLCB7XG4gICAgICAgICAgICAgICAgdmFsOiB2YWwsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgICAgICAgfSk7IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3h5V2luZG93TWV0aG9kcy5kZWwoaWQpO1xuICAgICAgICAgICAgICAgIG1ldGhvZFN0b3JlLmdldE9yU2V0KHNvdXJjZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfSkpW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbDogdmFsLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbG9va3VwTWV0aG9kKHNvdXJjZSwgaWQpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2RTdG9yZSA9IHdpbmRvd1N0b3JlKFwibWV0aG9kU3RvcmVcIik7XG4gICAgICAgICAgICB2YXIgcHJveHlXaW5kb3dNZXRob2RzID0gZ2xvYmFsU3RvcmUoXCJwcm94eVdpbmRvd01ldGhvZHNcIik7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kU3RvcmUuZ2V0T3JTZXQoc291cmNlLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfSkpW2lkXSB8fCBwcm94eVdpbmRvd01ldGhvZHMuZ2V0KGlkKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmdW5jdGlvbl9zZXJpYWxpemVGdW5jdGlvbihkZXN0aW5hdGlvbiwgZG9tYWluLCB2YWwsIGtleSwgX3JlZjMpIHtcbiAgICAgICAgICAgIG9uID0gKF9yZWYgPSB7XG4gICAgICAgICAgICAgICAgb246IF9yZWYzLm9uLFxuICAgICAgICAgICAgICAgIHNlbmQ6IF9yZWYzLnNlbmRcbiAgICAgICAgICAgIH0pLm9uLCBzZW5kID0gX3JlZi5zZW5kLCBnbG9iYWxTdG9yZShcImJ1aWx0aW5MaXN0ZW5lcnNcIikuZ2V0T3JTZXQoXCJmdW5jdGlvbkNhbGxzXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb24oXCJwb3N0cm9ib3RfbWV0aG9kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBcIipcIlxuICAgICAgICAgICAgICAgIH0sIChmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gX3JlZjIuc291cmNlLCBvcmlnaW4gPSBfcmVmMi5vcmlnaW4sIGRhdGEgPSBfcmVmMi5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBkYXRhLmlkLCBuYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aCA9IGxvb2t1cE1ldGhvZChzb3VyY2UsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXRoKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBtZXRob2QgJ1wiICsgbmFtZSArIFwiJyB3aXRoIGlkOiBcIiArIGRhdGEuaWQgKyBcIiBpbiBcIiArIGdldERvbWFpbih3aW5kb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZFNvdXJjZSA9IG1ldGguc291cmNlLCBkb21haW4gPSBtZXRoLmRvbWFpbiwgdmFsID0gbWV0aC52YWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaERvbWFpbihkb21haW4sIG9yaWdpbikpIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCAnXCIgKyBkYXRhLm5hbWUgKyBcIicgZG9tYWluIFwiICsgSlNPTi5zdHJpbmdpZnkodXRpbF9pc1JlZ2V4KG1ldGguZG9tYWluKSA/IG1ldGguZG9tYWluLnNvdXJjZSA6IG1ldGguZG9tYWluKSArIFwiIGRvZXMgbm90IG1hdGNoIG9yaWdpbiBcIiArIG9yaWdpbiArIFwiIGluIFwiICsgZ2V0RG9tYWluKHdpbmRvdykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd19Qcm94eVdpbmRvdy5pc1Byb3h5V2luZG93KG1ldGhvZFNvdXJjZSkpIHJldHVybiBtZXRob2RTb3VyY2UubWF0Y2hXaW5kb3coc291cmNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoKSB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2QgY2FsbCAnXCIgKyBkYXRhLm5hbWUgKyBcIicgZmFpbGVkIC0gcHJveHkgd2luZG93IGRvZXMgbm90IG1hdGNoIHNvdXJjZSBpbiBcIiArIGdldERvbWFpbih3aW5kb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5hcHBseSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRhdGEuYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLm9uRXJyb3IpIHJldHVybiB2YWwub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyci5zdGFjayAmJiAoZXJyLnN0YWNrID0gXCJSZW1vdGUgY2FsbCB0byBcIiArIG5hbWUgKyBcIihcIiArIGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBhcmdzICYmIChhcmdzID0gW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlGcm9tKGFyZ3MpLm1hcCgoZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYXJnID8gXCInXCIgKyBhcmcgKyBcIidcIiA6IHZvaWQgMCA9PT0gYXJnID8gXCJ1bmRlZmluZWRcIiA6IG51bGwgPT09IGFyZyA/IFwibnVsbFwiIDogXCJib29sZWFuXCIgPT0gdHlwZW9mIGFyZyA/IGFyZy50b1N0cmluZygpIDogQXJyYXkuaXNBcnJheShhcmcpID8gXCJbIC4uLiBdXCIgOiBcIm9iamVjdFwiID09IHR5cGVvZiBhcmcgPyBcInsgLi4uIH1cIiA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYXJnID8gXCIoKSA9PiB7IC4uLiB9XCIgOiBcIjxcIiArIHR5cGVvZiBhcmcgKyBcIj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGRhdGEuYXJncykgKyBcIikgZmFpbGVkXFxuXFxuXCIgKyBlcnIuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciBfcmVmLCBvbiwgc2VuZDtcbiAgICAgICAgICAgIHZhciBpZCA9IHZhbC5fX2lkX18gfHwgdW5pcXVlSUQoKTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uID0gd2luZG93X1Byb3h5V2luZG93LnVud3JhcChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHZhbC5fX25hbWVfXyB8fCB2YWwubmFtZSB8fCBrZXk7XG4gICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBuYW1lICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbmFtZS5pbmRleE9mICYmIDAgPT09IG5hbWUuaW5kZXhPZihcImFub255bW91czo6XCIpICYmIChuYW1lID0gbmFtZS5yZXBsYWNlKFwiYW5vbnltb3VzOjpcIiwga2V5ICsgXCI6OlwiKSk7XG4gICAgICAgICAgICBpZiAod2luZG93X1Byb3h5V2luZG93LmlzUHJveHlXaW5kb3coZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgYWRkTWV0aG9kKGlkLCB2YWwsIG5hbWUsIGRlc3RpbmF0aW9uLCBkb21haW4pO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmF3YWl0V2luZG93KCkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE1ldGhvZChpZCwgdmFsLCBuYW1lLCB3aW4sIGRvbWFpbik7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIGFkZE1ldGhvZChpZCwgdmFsLCBuYW1lLCBkZXN0aW5hdGlvbiwgZG9tYWluKTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2VyaWFsaXplTWVzc2FnZShkZXN0aW5hdGlvbiwgZG9tYWluLCBvYmosIF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfc2VyaWFsaXplO1xuICAgICAgICAgICAgdmFyIG9uID0gX3JlZi5vbiwgc2VuZCA9IF9yZWYuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihvYmosIHNlcmlhbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBzZXJpYWxpemVycyAmJiAoc2VyaWFsaXplcnMgPSBkZWZhdWx0U2VyaWFsaXplcnMpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShvYmosIChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VyaWFsaXplZFR5cGUodGhpcykpIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZGV0ZXJtaW5lVHlwZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGUpIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVyID0gc2VyaWFsaXplcnNbdHlwZV0gfHwgU0VSSUFMSVpFUlt0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXIgPyBzZXJpYWxpemVyKHZhbCwga2V5KSA6IHZhbDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gcmVzdWx0ID8gXCJ1bmRlZmluZWRcIiA6IHJlc3VsdDtcbiAgICAgICAgICAgIH0ob2JqLCAoKF9zZXJpYWxpemUgPSB7fSkucHJvbWlzZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBkb21haW4sIHZhbCwga2V5LCBfcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwiY3Jvc3NfZG9tYWluX3phbGdvX3Byb21pc2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbjogZnVuY3Rpb25fc2VyaWFsaXplRnVuY3Rpb24oZGVzdGluYXRpb24sIGRvbWFpbiwgKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBfcmVmLm9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IF9yZWYuc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfShkZXN0aW5hdGlvbiwgZG9tYWluLCB2YWwsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIF9zZXJpYWxpemUuZnVuY3Rpb24gPSBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbl9zZXJpYWxpemVGdW5jdGlvbihkZXN0aW5hdGlvbiwgZG9tYWluLCB2YWwsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIF9zZXJpYWxpemUub2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzV2luZG93KHZhbCkgfHwgd2luZG93X1Byb3h5V2luZG93LmlzUHJveHlXaW5kb3codmFsKSA/IHNlcmlhbGl6ZVR5cGUoXCJjcm9zc19kb21haW5fd2luZG93XCIsIHdpbmRvd19Qcm94eVdpbmRvdy5zZXJpYWxpemUodmFsLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KSkgOiB2YWw7XG4gICAgICAgICAgICB9LCBfc2VyaWFsaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVzZXJpYWxpemVNZXNzYWdlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlLCBfcmVmMikge1xuICAgICAgICAgICAgdmFyIF9kZXNlcmlhbGl6ZTtcbiAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjIuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzdHIsIGRlc2VyaWFsaXplcnMpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGRlc2VyaWFsaXplcnMgJiYgKGRlc2VyaWFsaXplcnMgPSBkZWZhdWx0RGVzZXJpYWxpemVycyk7XG4gICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHN0cikgcmV0dXJuIEpTT04ucGFyc2Uoc3RyLCAoZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VyaWFsaXplZFR5cGUodGhpcykpIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NlcmlhbGl6ZWRUeXBlKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YWwuX190eXBlX187XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbC5fX3ZhbF9fO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGRldGVybWluZVR5cGUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzZXJpYWxpemVyID0gZGVzZXJpYWxpemVyc1t0eXBlXSB8fCBERVNFUklBTElaRVJbdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZXIgPyBkZXNlcmlhbGl6ZXIodmFsdWUsIGtleSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KG1lc3NhZ2UsICgoX2Rlc2VyaWFsaXplID0ge30pLmNyb3NzX2RvbWFpbl96YWxnb19wcm9taXNlID0gZnVuY3Rpb24oc2VyaWFsaXplZFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oc291cmNlLCBvcmlnaW4sIF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2UoX3JlZjIudGhlbik7XG4gICAgICAgICAgICAgICAgfSgwLCAwLCBzZXJpYWxpemVkUHJvbWlzZSk7XG4gICAgICAgICAgICB9LCBfZGVzZXJpYWxpemUuY3Jvc3NfZG9tYWluX2Z1bmN0aW9uID0gZnVuY3Rpb24oc2VyaWFsaXplZEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZSwgb3JpZ2luLCBfcmVmNCwgX3JlZjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX3JlZjQuaWQsIG5hbWUgPSBfcmVmNC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY1LnNlbmQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnZXREZXNlcmlhbGl6ZWRGdW5jdGlvbiA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gb3B0cyAmJiAob3B0cyA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dfUHJveHlXaW5kb3cudG9Qcm94eVdpbmRvdyhzb3VyY2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmF3YWl0V2luZG93KCkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXRoID0gbG9va3VwTWV0aG9kKHdpbiwgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0aCAmJiBtZXRoLnZhbCAhPT0gY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIpIHJldHVybiBtZXRoLnZhbC5hcHBseSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHdpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogZ2V0RG9tYWluKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2FyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXJncyA9IFtdLnNsaWNlLmNhbGwoX2FyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmZpcmVBbmRGb3JnZXQgPyBzZW5kKHdpbiwgXCJwb3N0cm9ib3RfbWV0aG9kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBfYXJnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVBbmRGb3JnZXQ6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogc2VuZCh3aW4sIFwicG9zdHJvYm90X21ldGhvZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogX2FyZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlQW5kRm9yZ2V0OiAhMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIuX19uYW1lX18gPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIuX19vcmlnaW5fXyA9IG9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyLl9fc291cmNlX18gPSBzb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc0RvbWFpbkZ1bmN0aW9uV3JhcHBlci5fX2lkX18gPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcm9zc0RvbWFpbkZ1bmN0aW9uV3JhcHBlcjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyID0gZ2V0RGVzZXJpYWxpemVkRnVuY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIuZmlyZUFuZEZvcmdldCA9IGdldERlc2VyaWFsaXplZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVBbmRGb3JnZXQ6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXI7XG4gICAgICAgICAgICAgICAgfShzb3VyY2UsIG9yaWdpbiwgc2VyaWFsaXplZEZ1bmN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIF9kZXNlcmlhbGl6ZS5jcm9zc19kb21haW5fd2luZG93ID0gZnVuY3Rpb24oc2VyaWFsaXplZFdpbmRvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dfUHJveHlXaW5kb3cuZGVzZXJpYWxpemUoc2VyaWFsaXplZFdpbmRvdywge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBfZGVzZXJpYWxpemUpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgU0VORF9NRVNTQUdFX1NUUkFURUdJRVMgPSB7fTtcbiAgICAgICAgU0VORF9NRVNTQUdFX1NUUkFURUdJRVMucG9zdHJvYm90X3Bvc3RfbWVzc2FnZSA9IGZ1bmN0aW9uKHdpbiwgc2VyaWFsaXplZE1lc3NhZ2UsIGRvbWFpbikge1xuICAgICAgICAgICAgMCA9PT0gZG9tYWluLmluZGV4T2YoXCJmaWxlOlwiKSAmJiAoZG9tYWluID0gXCIqXCIpO1xuICAgICAgICAgICAgd2luLnBvc3RNZXNzYWdlKHNlcmlhbGl6ZWRNZXNzYWdlLCBkb21haW4pO1xuICAgICAgICB9O1xuICAgICAgICBTRU5EX01FU1NBR0VfU1RSQVRFR0lFUy5wb3N0cm9ib3RfZ2xvYmFsID0gZnVuY3Rpb24od2luLCBzZXJpYWxpemVkTWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKCFmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHdpbiA9IHdpbiB8fCB3aW5kb3cpLm5hdmlnYXRvci5tb2NrVXNlckFnZW50IHx8IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgfSh3aW5kb3cpLm1hdGNoKC9NU0lFfHJ2OjExfHRyaWRlbnR8ZWRnZVxcLzEyfGVkZ2VcXC8xMy9pKSkgdGhyb3cgbmV3IEVycm9yKFwiR2xvYmFsIG1lc3NhZ2luZyBub3QgbmVlZGVkIGZvciBicm93c2VyXCIpO1xuICAgICAgICAgICAgaWYgKCFpc1NhbWVEb21haW4od2luKSkgdGhyb3cgbmV3IEVycm9yKFwiUG9zdCBtZXNzYWdlIHRocm91Z2ggZ2xvYmFsIGRpc2FibGVkIGJldHdlZW4gZGlmZmVyZW50IGRvbWFpbiB3aW5kb3dzXCIpO1xuICAgICAgICAgICAgaWYgKCExICE9PSBpc1NhbWVUb3BXaW5kb3cod2luZG93LCB3aW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSB1c2UgZ2xvYmFsIHRvIGNvbW11bmljYXRlIGJldHdlZW4gdHdvIGRpZmZlcmVudCB3aW5kb3dzLCBub3QgYmV0d2VlbiBmcmFtZXNcIik7XG4gICAgICAgICAgICB2YXIgZm9yZWlnbkdsb2JhbCA9IGdsb2JhbF9nZXRHbG9iYWwod2luKTtcbiAgICAgICAgICAgIGlmICghZm9yZWlnbkdsb2JhbCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBmaW5kIHBvc3RSb2JvdCBnbG9iYWwgb24gZm9yZWlnbiB3aW5kb3dcIik7XG4gICAgICAgICAgICBmb3JlaWduR2xvYmFsLnJlY2VpdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHdpbmRvdyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IGdldERvbWFpbigpLFxuICAgICAgICAgICAgICAgIGRhdGE6IHNlcmlhbGl6ZWRNZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gc2VuZF9zZW5kTWVzc2FnZSh3aW4sIGRvbWFpbiwgbWVzc2FnZSwgX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBvbiA9IF9yZWYyLm9uLCBzZW5kID0gX3JlZjIuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBkb21haW5CdWZmZXIgPSB3aW5kb3dTdG9yZSgpLmdldE9yU2V0KHdpbiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGRvbWFpbkJ1ZmZlci5idWZmZXIgPSBkb21haW5CdWZmZXIuYnVmZmVyIHx8IFtdO1xuICAgICAgICAgICAgICAgIGRvbWFpbkJ1ZmZlci5idWZmZXIucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBkb21haW5CdWZmZXIuZmx1c2ggPSBkb21haW5CdWZmZXIuZmx1c2ggfHwgcHJvbWlzZV9aYWxnb1Byb21pc2UuZmx1c2goKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2luZG93Q2xvc2VkKHdpbikpIHRocm93IG5ldyBFcnJvcihcIldpbmRvdyBpcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVkTWVzc2FnZSA9IHNlcmlhbGl6ZU1lc3NhZ2Uod2luLCBkb21haW4sICgoX3JlZiA9IHt9KS5fX3Bvc3Rfcm9ib3RfMTBfMF80Ml9fID0gZG9tYWluQnVmZmVyLmJ1ZmZlciB8fCBbXSwgXG4gICAgICAgICAgICAgICAgICAgIF9yZWYpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRvbWFpbkJ1ZmZlci5idWZmZXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJhdGVnaWVzID0gT2JqZWN0LmtleXMoU0VORF9NRVNTQUdFX1NUUkFURUdJRVMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHN0cmF0ZWdpZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmF0ZWd5TmFtZSA9IHN0cmF0ZWdpZXNbX2kyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU0VORF9NRVNTQUdFX1NUUkFURUdJRVNbc3RyYXRlZ3lOYW1lXSh3aW4sIHNlcmlhbGl6ZWRNZXNzYWdlLCBkb21haW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gc3RyYXRlZ2llcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcIkFsbCBwb3N0LXJvYm90IG1lc3NhZ2luZyBzdHJhdGVnaWVzIGZhaWxlZDpcXG5cXG5cIiArIGVycm9ycy5tYXAoKGZ1bmN0aW9uKGVyciwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyBcIi4gXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSkuam9pbihcIlxcblxcblwiKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb21haW5CdWZmZXIuZmx1c2gudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkb21haW5CdWZmZXIuZmx1c2g7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2VMaXN0ZW5lcihoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RvcmUoXCJyZXNwb25zZUxpc3RlbmVyc1wiKS5nZXQoaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlUmVzcG9uc2VMaXN0ZW5lcihoYXNoKSB7XG4gICAgICAgICAgICBnbG9iYWxTdG9yZShcInJlc3BvbnNlTGlzdGVuZXJzXCIpLmRlbChoYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1Jlc3BvbnNlTGlzdGVuZXJFcnJvcmVkKGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdG9yZShcImVycm9yZWRSZXNwb25zZUxpc3RlbmVyc1wiKS5oYXMoaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmVxdWVzdExpc3RlbmVyKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLCB3aW4gPSBfcmVmLndpbiwgZG9tYWluID0gX3JlZi5kb21haW47XG4gICAgICAgICAgICB2YXIgcmVxdWVzdExpc3RlbmVycyA9IHdpbmRvd1N0b3JlKFwicmVxdWVzdExpc3RlbmVyc1wiKTtcbiAgICAgICAgICAgIFwiKlwiID09PSB3aW4gJiYgKHdpbiA9IG51bGwpO1xuICAgICAgICAgICAgXCIqXCIgPT09IGRvbWFpbiAmJiAoZG9tYWluID0gbnVsbCk7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcihcIk5hbWUgcmVxdWlyZWQgdG8gZ2V0IHJlcXVlc3QgbGlzdGVuZXJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwLCBfcmVmMyA9IFsgd2luLCBnZXRXaWxkY2FyZCgpIF07IF9pNCA8IF9yZWYzLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgd2luUXVhbGlmaWVyID0gX3JlZjNbX2k0XTtcbiAgICAgICAgICAgICAgICBpZiAod2luUXVhbGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lTGlzdGVuZXJzID0gcmVxdWVzdExpc3RlbmVycy5nZXQod2luUXVhbGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW5MaXN0ZW5lcnMgPSBuYW1lTGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpbkxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW4gJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5MaXN0ZW5lcnNbZG9tYWluXSkgcmV0dXJuIGRvbWFpbkxpc3RlbmVyc1tkb21haW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluTGlzdGVuZXJzLl9fZG9tYWluX3JlZ2V4X18pIGZvciAodmFyIF9pNiA9IDAsIF9kb21haW5MaXN0ZW5lcnMkX19ETzIgPSBkb21haW5MaXN0ZW5lcnMuX19kb21haW5fcmVnZXhfXzsgX2k2IDwgX2RvbWFpbkxpc3RlbmVycyRfX0RPMi5sZW5ndGg7IF9pNisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2RvbWFpbkxpc3RlbmVycyRfX0RPMyA9IF9kb21haW5MaXN0ZW5lcnMkX19ETzJbX2k2XSwgbGlzdGVuZXIgPSBfZG9tYWluTGlzdGVuZXJzJF9fRE8zLmxpc3RlbmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoRG9tYWluKF9kb21haW5MaXN0ZW5lcnMkX19ETzMucmVnZXgsIGRvbWFpbikpIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluTGlzdGVuZXJzW1wiKlwiXSkgcmV0dXJuIGRvbWFpbkxpc3RlbmVyc1tcIipcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChzb3VyY2UsIG9yaWdpbiwgbWVzc2FnZSwgX3JlZikge1xuICAgICAgICAgICAgdmFyIG9uID0gX3JlZi5vbiwgc2VuZCA9IF9yZWYuc2VuZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0UmVxdWVzdExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgd2luOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgZG9tYWluOiBvcmlnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGxvZ05hbWUgPSBcInBvc3Ryb2JvdF9tZXRob2RcIiA9PT0gbWVzc2FnZS5uYW1lICYmIG1lc3NhZ2UuZGF0YSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBtZXNzYWdlLmRhdGEubmFtZSA/IG1lc3NhZ2UuZGF0YS5uYW1lICsgXCIoKVwiIDogbWVzc2FnZS5uYW1lO1xuICAgICAgICAgICAgZnVuY3Rpb24gc2VuZFJlc3BvbnNlKGFjaywgZGF0YSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuZmx1c2goKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlLmZpcmVBbmRGb3JnZXQgJiYgIWlzV2luZG93Q2xvc2VkKHNvdXJjZSkpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZF9zZW5kTWVzc2FnZShzb3VyY2UsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1bmlxdWVJRCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogZ2V0RG9tYWluKHdpbmRvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0cm9ib3RfbWVzc2FnZV9yZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IG1lc3NhZ2UuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNrOiBhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VuZCByZXNwb25zZSBtZXNzYWdlIGZhaWxlZCBmb3IgXCIgKyBsb2dOYW1lICsgXCIgaW4gXCIgKyBnZXREb21haW4oKSArIFwiXFxuXFxuXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5hbGwoWyBwcm9taXNlX1phbGdvUHJvbWlzZS5mbHVzaCgpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZS5maXJlQW5kRm9yZ2V0ICYmICFpc1dpbmRvd0Nsb3NlZChzb3VyY2UpKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZF9zZW5kTWVzc2FnZShzb3VyY2UsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVuaXF1ZUlEKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGdldERvbWFpbih3aW5kb3cpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0cm9ib3RfbWVzc2FnZV9hY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IG1lc3NhZ2UuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2UubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZW5kIGFjayBtZXNzYWdlIGZhaWxlZCBmb3IgXCIgKyBsb2dOYW1lICsgXCIgaW4gXCIgKyBnZXREb21haW4oKSArIFwiXFxuXFxuXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBoYW5kbGVyIGZvdW5kIGZvciBwb3N0IG1lc3NhZ2U6IFwiICsgbWVzc2FnZS5uYW1lICsgXCIgZnJvbSBcIiArIG9yaWdpbiArIFwiIGluIFwiICsgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hEb21haW4ob3B0aW9ucy5kb21haW4sIG9yaWdpbikpIHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3Qgb3JpZ2luIFwiICsgb3JpZ2luICsgXCIgZG9lcyBub3QgbWF0Y2ggZG9tYWluIFwiICsgb3B0aW9ucy5kb21haW4udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJzdWNjZXNzXCIsIGRhdGEpO1xuICAgICAgICAgICAgfSksIChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJlcnJvclwiLCBudWxsLCBlcnJvcik7XG4gICAgICAgICAgICB9KSkgXSkudGhlbihzcmNfdXRpbF9ub29wKS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oYW5kbGVFcnJvcikgcmV0dXJuIG9wdGlvbnMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQWNrKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAoIWlzUmVzcG9uc2VMaXN0ZW5lckVycm9yZWQobWVzc2FnZS5oYXNoKSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0UmVzcG9uc2VMaXN0ZW5lcihtZXNzYWdlLmhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykgdGhyb3cgbmV3IEVycm9yKFwiTm8gaGFuZGxlciBmb3VuZCBmb3IgcG9zdCBtZXNzYWdlIGFjayBmb3IgbWVzc2FnZTogXCIgKyBtZXNzYWdlLm5hbWUgKyBcIiBmcm9tIFwiICsgb3JpZ2luICsgXCIgaW4gXCIgKyB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaERvbWFpbihvcHRpb25zLmRvbWFpbiwgb3JpZ2luKSkgdGhyb3cgbmV3IEVycm9yKFwiQWNrIG9yaWdpbiBcIiArIG9yaWdpbiArIFwiIGRvZXMgbm90IG1hdGNoIGRvbWFpbiBcIiArIG9wdGlvbnMuZG9tYWluLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlICE9PSBvcHRpb25zLndpbikgdGhyb3cgbmV3IEVycm9yKFwiQWNrIHNvdXJjZSBkb2VzIG5vdCBtYXRjaCByZWdpc3RlcmVkIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLmFjayA9ICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAoIWlzUmVzcG9uc2VMaXN0ZW5lckVycm9yZWQobWVzc2FnZS5oYXNoKSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0UmVzcG9uc2VMaXN0ZW5lcihtZXNzYWdlLmhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykgdGhyb3cgbmV3IEVycm9yKFwiTm8gaGFuZGxlciBmb3VuZCBmb3IgcG9zdCBtZXNzYWdlIHJlc3BvbnNlIGZvciBtZXNzYWdlOiBcIiArIG1lc3NhZ2UubmFtZSArIFwiIGZyb20gXCIgKyBvcmlnaW4gKyBcIiBpbiBcIiArIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoRG9tYWluKG9wdGlvbnMuZG9tYWluLCBvcmlnaW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJSZXNwb25zZSBvcmlnaW4gXCIgKyBvcmlnaW4gKyBcIiBkb2VzIG5vdCBtYXRjaCBkb21haW4gXCIgKyAocGF0dGVybiA9IG9wdGlvbnMuZG9tYWluLCBcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHBhdHRlcm4pID8gXCIoXCIgKyBwYXR0ZXJuLmpvaW4oXCIgfCBcIikgKyBcIilcIiA6IGlzUmVnZXgocGF0dGVybikgPyBcIlJlZ0V4cChcIiArIHBhdHRlcm4udG9TdHJpbmcoKSA6IHBhdHRlcm4udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIHZhciBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09IG9wdGlvbnMud2luKSB0aHJvdyBuZXcgRXJyb3IoXCJSZXNwb25zZSBzb3VyY2UgZG9lcyBub3QgbWF0Y2ggcmVnaXN0ZXJlZCB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgZGVsZXRlUmVzcG9uc2VMaXN0ZW5lcihtZXNzYWdlLmhhc2gpO1xuICAgICAgICAgICAgICAgIFwiZXJyb3JcIiA9PT0gbWVzc2FnZS5hY2sgPyBvcHRpb25zLnByb21pc2UucmVqZWN0KG1lc3NhZ2UuZXJyb3IpIDogXCJzdWNjZXNzXCIgPT09IG1lc3NhZ2UuYWNrICYmIG9wdGlvbnMucHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZWNlaXZlX3JlY2VpdmVNZXNzYWdlKGV2ZW50LCBfcmVmMikge1xuICAgICAgICAgICAgdmFyIG9uID0gX3JlZjIub24sIHNlbmQgPSBfcmVmMi5zZW5kO1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVkTWVzc2FnZXMgPSBnbG9iYWxTdG9yZShcInJlY2VpdmVkTWVzc2FnZXNcIik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93IHx8IHdpbmRvdy5jbG9zZWQgfHwgIWV2ZW50LnNvdXJjZSkgcmV0dXJuO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2ZW50LnNvdXJjZSwgb3JpZ2luID0gZXZlbnQub3JpZ2luO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gZnVuY3Rpb24obWVzc2FnZSwgc291cmNlLCBvcmlnaW4sIF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgb24gPSBfcmVmLm9uLCBzZW5kID0gX3JlZi5zZW5kO1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRNZXNzYWdlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZE1lc3NhZ2UgPSBkZXNlcmlhbGl6ZU1lc3NhZ2Uoc291cmNlLCBvcmlnaW4sIG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZE1lc3NhZ2UgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgcGFyc2VkTWVzc2FnZSAmJiBudWxsICE9PSBwYXJzZWRNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJzZU1lc3NhZ2VzID0gcGFyc2VkTWVzc2FnZS5fX3Bvc3Rfcm9ib3RfMTBfMF80Ml9fO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZU1lc3NhZ2VzKSkgcmV0dXJuIHBhcnNlTWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfShldmVudC5kYXRhLCBzb3VyY2UsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgIG9uOiBvbixcbiAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcykge1xuICAgICAgICAgICAgICAgIG1hcmtXaW5kb3dLbm93bihzb3VyY2UpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1lc3NhZ2VzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBtZXNzYWdlc1tfaTJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZWRNZXNzYWdlcy5oYXMobWVzc2FnZS5pZCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRNZXNzYWdlcy5zZXQobWVzc2FnZS5pZCwgITApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQoc291cmNlKSAmJiAhbWVzc2FnZS5maXJlQW5kRm9yZ2V0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIDAgPT09IG1lc3NhZ2Uub3JpZ2luLmluZGV4T2YoXCJmaWxlOlwiKSAmJiAob3JpZ2luID0gXCJmaWxlOi8vXCIpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0cm9ib3RfbWVzc2FnZV9yZXF1ZXN0XCIgPT09IG1lc3NhZ2UudHlwZSA/IGhhbmRsZVJlcXVlc3Qoc291cmNlLCBvcmlnaW4sIG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcInBvc3Ryb2JvdF9tZXNzYWdlX3Jlc3BvbnNlXCIgPT09IG1lc3NhZ2UudHlwZSA/IGhhbmRsZVJlc3BvbnNlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSA6IFwicG9zdHJvYm90X21lc3NhZ2VfYWNrXCIgPT09IG1lc3NhZ2UudHlwZSAmJiBoYW5kbGVBY2soc291cmNlLCBvcmlnaW4sIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbl9vbihuYW1lLCBvcHRpb25zLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG5hbWVcIik7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiAob3B0aW9ucyA9IG9wdGlvbnMgfHwge30pKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYW5kbGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBoYW5kbGVyXCIpO1xuICAgICAgICAgICAgKG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9KS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIG9wdGlvbnMuaGFuZGxlciA9IGhhbmRsZXIgfHwgb3B0aW9ucy5oYW5kbGVyO1xuICAgICAgICAgICAgdmFyIHdpbiA9IG9wdGlvbnMud2luZG93O1xuICAgICAgICAgICAgdmFyIGRvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3RMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZFJlcXVlc3RMaXN0ZW5lcihfcmVmNCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWY0Lm5hbWUsIHdpbiA9IF9yZWY0LndpbiwgZG9tYWluID0gX3JlZjQuZG9tYWluO1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0TGlzdGVuZXJzID0gd2luZG93U3RvcmUoXCJyZXF1ZXN0TGlzdGVuZXJzXCIpO1xuICAgICAgICAgICAgICAgIGlmICghbmFtZSB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiBuYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJOYW1lIHJlcXVpcmVkIHRvIGFkZCByZXF1ZXN0IGxpc3RlbmVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyc0NvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2k4ID0gMCwgX3dpbjIgPSB3aW47IF9pOCA8IF93aW4yLmxlbmd0aDsgX2k4KyspIGxpc3RlbmVyc0NvbGxlY3Rpb24ucHVzaChhZGRSZXF1ZXN0TGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luOiBfd2luMltfaThdXG4gICAgICAgICAgICAgICAgICAgIH0sIGxpc3RlbmVyKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMTAgPSAwOyBfaTEwIDwgbGlzdGVuZXJzQ29sbGVjdGlvbi5sZW5ndGg7IF9pMTArKykgbGlzdGVuZXJzQ29sbGVjdGlvbltfaTEwXS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9tYWluKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpc3RlbmVyc0NvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kxMiA9IDAsIF9kb21haW4yID0gZG9tYWluOyBfaTEyIDwgX2RvbWFpbjIubGVuZ3RoOyBfaTEyKyspIF9saXN0ZW5lcnNDb2xsZWN0aW9uLnB1c2goYWRkUmVxdWVzdExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW46IHdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogX2RvbWFpbjJbX2kxMl1cbiAgICAgICAgICAgICAgICAgICAgfSwgbGlzdGVuZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kxNCA9IDA7IF9pMTQgPCBfbGlzdGVuZXJzQ29sbGVjdGlvbi5sZW5ndGg7IF9pMTQrKykgX2xpc3RlbmVyc0NvbGxlY3Rpb25bX2kxNF0uY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ0xpc3RlbmVyID0gZ2V0UmVxdWVzdExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgd2luOiB3aW4sXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luICYmIFwiKlwiICE9PSB3aW4gfHwgKHdpbiA9IGdldFdpbGRjYXJkKCkpO1xuICAgICAgICAgICAgICAgIGRvbWFpbiA9IGRvbWFpbiB8fCBcIipcIjtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdMaXN0ZW5lcikgdGhyb3cgd2luICYmIGRvbWFpbiA/IG5ldyBFcnJvcihcIlJlcXVlc3QgbGlzdGVuZXIgYWxyZWFkeSBleGlzdHMgZm9yIFwiICsgbmFtZSArIFwiIG9uIGRvbWFpbiBcIiArIGRvbWFpbi50b1N0cmluZygpICsgXCIgZm9yIFwiICsgKHdpbiA9PT0gZ2V0V2lsZGNhcmQoKSA/IFwid2lsZGNhcmRcIiA6IFwic3BlY2lmaWVkXCIpICsgXCIgd2luZG93XCIpIDogd2luID8gbmV3IEVycm9yKFwiUmVxdWVzdCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0cyBmb3IgXCIgKyBuYW1lICsgXCIgZm9yIFwiICsgKHdpbiA9PT0gZ2V0V2lsZGNhcmQoKSA/IFwid2lsZGNhcmRcIiA6IFwic3BlY2lmaWVkXCIpICsgXCIgd2luZG93XCIpIDogZG9tYWluID8gbmV3IEVycm9yKFwiUmVxdWVzdCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0cyBmb3IgXCIgKyBuYW1lICsgXCIgb24gZG9tYWluIFwiICsgZG9tYWluLnRvU3RyaW5nKCkpIDogbmV3IEVycm9yKFwiUmVxdWVzdCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0cyBmb3IgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUxpc3RlbmVycyA9IHJlcXVlc3RMaXN0ZW5lcnMuZ2V0T3JTZXQod2luLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdmFyIGRvbWFpbkxpc3RlbmVycyA9IHV0aWxfZ2V0T3JTZXQobmFtZUxpc3RlbmVycywgbmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHZhciBzdHJEb21haW4gPSBkb21haW4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhMaXN0ZW5lcnM7XG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4TGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgdXRpbF9pc1JlZ2V4KGRvbWFpbikgPyAocmVnZXhMaXN0ZW5lcnMgPSB1dGlsX2dldE9yU2V0KGRvbWFpbkxpc3RlbmVycywgXCJfX2RvbWFpbl9yZWdleF9fXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH0pKSkucHVzaChyZWdleExpc3RlbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICByZWdleDogZG9tYWluLFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXJcbiAgICAgICAgICAgICAgICB9KSA6IGRvbWFpbkxpc3RlbmVyc1tzdHJEb21haW5dID0gbGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkb21haW5MaXN0ZW5lcnNbc3RyRG9tYWluXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdleExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhMaXN0ZW5lcnMuc3BsaWNlKHJlZ2V4TGlzdGVuZXJzLmluZGV4T2YocmVnZXhMaXN0ZW5lciwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4TGlzdGVuZXJzLmxlbmd0aCB8fCBkZWxldGUgZG9tYWluTGlzdGVuZXJzLl9fZG9tYWluX3JlZ2V4X187XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkb21haW5MaXN0ZW5lcnMpLmxlbmd0aCB8fCBkZWxldGUgbmFtZUxpc3RlbmVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbiAmJiAhT2JqZWN0LmtleXMobmFtZUxpc3RlbmVycykubGVuZ3RoICYmIHJlcXVlc3RMaXN0ZW5lcnMuZGVsKHdpbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICB3aW46IHdpbixcbiAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpblxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG9wdGlvbnMuaGFuZGxlcixcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcjogb3B0aW9ucy5lcnJvckhhbmRsZXIgfHwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpbmRvdzogd2luLFxuICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluIHx8IFwiKlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0TGlzdGVuZXIuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VuZF9zZW5kID0gZnVuY3Rpb24gc2VuZCh3aW4sIG5hbWUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBkb21haW5NYXRjaGVyID0gKG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9KS5kb21haW4gfHwgXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IC0xO1xuICAgICAgICAgICAgdmFyIGNoaWxkVGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCA1ZTM7XG4gICAgICAgICAgICB2YXIgZmlyZUFuZEZvcmdldCA9IG9wdGlvbnMuZmlyZUFuZEZvcmdldCB8fCAhMTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICFmdW5jdGlvbihuYW1lLCB3aW4sIGRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW4gJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZG9tYWluICYmICFBcnJheS5pc0FycmF5KGRvbWFpbikgJiYgIXV0aWxfaXNSZWdleChkb21haW4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FuIG5vdCBzZW5kIFwiICsgbmFtZSArIFwiLiBFeHBlY3RlZCBkb21haW4gXCIgKyBKU09OLnN0cmluZ2lmeShkb21haW4pICsgXCIgdG8gYmUgYSBzdHJpbmcsIGFycmF5LCBvciByZWdleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2luZG93Q2xvc2VkKHdpbikpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3Qgc2VuZCBcIiArIG5hbWUgKyBcIi4gVGFyZ2V0IHdpbmRvdyBpcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgfShuYW1lLCB3aW4sIGRvbWFpbk1hdGNoZXIpO1xuICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3R1YWxQYXJlbnQgPSBnZXRBbmNlc3RvcihjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3R1YWxQYXJlbnQpIHJldHVybiBhY3R1YWxQYXJlbnQgPT09IHBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkID09PSBwYXJlbnQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFRvcChjaGlsZCkgPT09IGNoaWxkKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMTUgPSAwLCBfZ2V0RnJhbWVzOCA9IGdldEZyYW1lcyhwYXJlbnQpOyBfaTE1IDwgX2dldEZyYW1lczgubGVuZ3RoOyBfaTE1KyspIGlmIChfZ2V0RnJhbWVzOFtfaTE1XSA9PT0gY2hpbGQpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH0od2luZG93LCB3aW4pKSByZXR1cm4gZnVuY3Rpb24od2luLCB0aW1lb3V0LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gdGltZW91dCAmJiAodGltZW91dCA9IDVlMyk7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gbmFtZSAmJiAobmFtZSA9IFwiV2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1N0b3JlKFwiaGVsbG9Qcm9taXNlc1wiKS5nZXRPclNldCh3aW4sIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHByb21pc2VfWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KHdpbik7XG4gICAgICAgICAgICAgICAgICAgIC0xICE9PSB0aW1lb3V0ICYmIChwcm9taXNlID0gcHJvbWlzZS50aW1lb3V0KHRpbWVvdXQsIG5ldyBFcnJvcihuYW1lICsgXCIgZGlkIG5vdCBsb2FkIGFmdGVyIFwiICsgdGltZW91dCArIFwibXNcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgfSh3aW4sIGNoaWxkVGltZW91dCk7XG4gICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oX3RlbXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24od2luLCB0YXJnZXREb21haW4sIGFjdHVhbERvbWFpbiwgX3JlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWYuc2VuZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdGFyZ2V0RG9tYWluID8gdGFyZ2V0RG9tYWluIDogcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsRG9tYWluIHx8IHNheUhlbGxvKHdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYyLmRvbWFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24obm9ybWFsaXplZERvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hEb21haW4odGFyZ2V0RG9tYWluLCB0YXJnZXREb21haW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gXCIgKyBzdHJpbmdpZnkodGFyZ2V0RG9tYWluKSArIFwiIGRvZXMgbm90IG1hdGNoIFwiICsgc3RyaW5naWZ5KHRhcmdldERvbWFpbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkRG9tYWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSh3aW4sIGRvbWFpbk1hdGNoZXIsICh2b2lkIDAgPT09IF90ZW1wID8ge30gOiBfdGVtcCkuZG9tYWluLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbih0YXJnZXREb21haW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tYWluID0gdGFyZ2V0RG9tYWluO1xuICAgICAgICAgICAgICAgIHZhciBsb2dOYW1lID0gXCJwb3N0cm9ib3RfbWV0aG9kXCIgPT09IG5hbWUgJiYgZGF0YSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBkYXRhLm5hbWUgPyBkYXRhLm5hbWUgKyBcIigpXCIgOiBuYW1lO1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHByb21pc2VfWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gbmFtZSArIFwiX1wiICsgdW5pcXVlSUQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcmVBbmRGb3JnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlTGlzdGVuZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luOiB3aW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGhhc2gsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxTdG9yZShcInJlc3BvbnNlTGlzdGVuZXJzXCIpLnNldChoYXNoLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0oaGFzaCwgcmVzcG9uc2VMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXFQcm9taXNlcyA9IHdpbmRvd1N0b3JlKFwicmVxdWVzdFByb21pc2VzXCIpLmdldE9yU2V0KHdpbiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuY2F0Y2goKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxTdG9yZShcImVycm9yZWRSZXNwb25zZUxpc3RlbmVyc1wiKS5zZXQoaGFzaCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShoYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlc3BvbnNlTGlzdGVuZXIoaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsQWNrVGltZW91dCA9IGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1N0b3JlKFwia25vd25XaW5kb3dzXCIpLmdldCh3aW4sICExKTtcbiAgICAgICAgICAgICAgICAgICAgfSh3aW4pID8gMWU0IDogMmUzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxSZXNUaW1lb3V0ID0gcmVzcG9uc2VUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNrVGltZW91dCA9IHRvdGFsQWNrVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc1RpbWVvdXQgPSB0b3RhbFJlc1RpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNhZmVJbnRlcnZhbCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQod2luKSkgcmV0dXJuIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIldpbmRvdyBjbG9zZWQgZm9yIFwiICsgbmFtZSArIFwiIGJlZm9yZSBcIiArIChyZXNwb25zZUxpc3RlbmVyLmFjayA/IFwicmVzcG9uc2VcIiA6IFwiYWNrXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VMaXN0ZW5lci5jYW5jZWxsZWQpIHJldHVybiBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJSZXNwb25zZSBsaXN0ZW5lciB3YXMgY2FuY2VsbGVkIGZvciBcIiArIG5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFja1RpbWVvdXQgPSBNYXRoLm1heChhY2tUaW1lb3V0IC0gNTAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSByZXNUaW1lb3V0ICYmIChyZXNUaW1lb3V0ID0gTWF0aC5tYXgocmVzVGltZW91dCAtIDUwMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlTGlzdGVuZXIuYWNrIHx8IDAgIT09IGFja1RpbWVvdXQgPyAwID09PSByZXNUaW1lb3V0ID8gcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZm9yIHBvc3RNZXNzYWdlIFwiICsgbG9nTmFtZSArIFwiIGluIFwiICsgZ2V0RG9tYWluKCkgKyBcIiBpbiBcIiArIHRvdGFsUmVzVGltZW91dCArIFwibXNcIikpIDogdm9pZCAwIDogcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYWNrIGZvciBwb3N0TWVzc2FnZSBcIiArIGxvZ05hbWUgKyBcIiBpbiBcIiArIGdldERvbWFpbigpICsgXCIgaW4gXCIgKyB0b3RhbEFja1RpbWVvdXQgKyBcIm1zXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuZmluYWxseSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbC5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcVByb21pc2VzLnNwbGljZShyZXFQcm9taXNlcy5pbmRleE9mKHByb21pc2UsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZF9zZW5kTWVzc2FnZSh3aW4sIGRvbWFpbiwge1xuICAgICAgICAgICAgICAgICAgICBpZDogdW5pcXVlSUQoKSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBnZXREb21haW4od2luZG93KSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0cm9ib3RfbWVzc2FnZV9yZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpcmVBbmRGb3JnZXQ6IGZpcmVBbmRGb3JnZXRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiBvbl9vbixcbiAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyZUFuZEZvcmdldCA/IHByb21pc2UucmVzb2x2ZSgpIDogcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZW5kIHJlcXVlc3QgbWVzc2FnZSBmYWlsZWQgZm9yIFwiICsgbG9nTmFtZSArIFwiIGluIFwiICsgZ2V0RG9tYWluKCkgKyBcIlxcblxcblwiICsgc3RyaW5naWZ5RXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBzZXR1cF9zZXJpYWxpemVNZXNzYWdlKGRlc3RpbmF0aW9uLCBkb21haW4sIG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZU1lc3NhZ2UoZGVzdGluYXRpb24sIGRvbWFpbiwgb2JqLCB7XG4gICAgICAgICAgICAgICAgb246IG9uX29uLFxuICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRfc2VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBfZGVzZXJpYWxpemVNZXNzYWdlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzZXJpYWxpemVNZXNzYWdlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgb246IG9uX29uLFxuICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRfc2VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBfdG9Qcm94eVdpbmRvdyh3aW4pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dfUHJveHlXaW5kb3cudG9Qcm94eVdpbmRvdyh3aW4sIHtcbiAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGxpYl9nbG9iYWxfZ2V0R2xvYmFsKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICBpZiAoIWlzU2FtZURvbWFpbih3aW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGdldCBnbG9iYWwgZm9yIHdpbmRvdyBvbiBkaWZmZXJlbnQgZG9tYWluXCIpO1xuICAgICAgICAgICAgd2luLl9fem9pZF85XzBfNjNfXyB8fCAod2luLl9fem9pZF85XzBfNjNfXyA9IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB3aW4uX196b2lkXzlfMF82M19fO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFByb3h5T2JqZWN0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb3VyY2UgJiYgX3RoaXMuc291cmNlICE9PSB3aW5kb3cpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgY2FsbCBnZXQgb24gcHJveHkgb2JqZWN0IGZyb20gYSByZW1vdGUgd2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFBST1BfVFlQRSA9IHtcbiAgICAgICAgICAgIFNUUklORzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIE9CSkVDVDogXCJvYmplY3RcIixcbiAgICAgICAgICAgIEZVTkNUSU9OOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICBCT09MRUFOOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIE5VTUJFUjogXCJudW1iZXJcIixcbiAgICAgICAgICAgIEFSUkFZOiBcImFycmF5XCJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFBST1BfU0VSSUFMSVpBVElPTiA9IHtcbiAgICAgICAgICAgIEpTT046IFwianNvblwiLFxuICAgICAgICAgICAgRE9USUZZOiBcImRvdGlmeVwiLFxuICAgICAgICAgICAgQkFTRTY0OiBcImJhc2U2NFwiXG4gICAgICAgIH07XG4gICAgICAgIHZhciBDT05URVhUID0gV0lORE9XX1RZUEU7XG4gICAgICAgIHZhciBFVkVOVCA9IHtcbiAgICAgICAgICAgIFJFTkRFUjogXCJ6b2lkLXJlbmRlclwiLFxuICAgICAgICAgICAgUkVOREVSRUQ6IFwiem9pZC1yZW5kZXJlZFwiLFxuICAgICAgICAgICAgRElTUExBWTogXCJ6b2lkLWRpc3BsYXlcIixcbiAgICAgICAgICAgIEVSUk9SOiBcInpvaWQtZXJyb3JcIixcbiAgICAgICAgICAgIENMT1NFOiBcInpvaWQtY2xvc2VcIixcbiAgICAgICAgICAgIERFU1RST1k6IFwiem9pZC1kZXN0cm95XCIsXG4gICAgICAgICAgICBQUk9QUzogXCJ6b2lkLXByb3BzXCIsXG4gICAgICAgICAgICBSRVNJWkU6IFwiem9pZC1yZXNpemVcIixcbiAgICAgICAgICAgIEZPQ1VTOiBcInpvaWQtZm9jdXNcIlxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVDaGlsZFByb3AocHJvcHNEZWYsIHByb3BzLCBrZXksIHZhbHVlLCBoZWxwZXJzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzRGVmLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHByb3AuY2hpbGREZWNvcmF0ZSA/IHByb3AuY2hpbGREZWNvcmF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHVpZDogaGVscGVycy51aWQsXG4gICAgICAgICAgICAgICAgY2xvc2U6IGhlbHBlcnMuY2xvc2UsXG4gICAgICAgICAgICAgICAgZm9jdXM6IGhlbHBlcnMuZm9jdXMsXG4gICAgICAgICAgICAgICAgb25FcnJvcjogaGVscGVycy5vbkVycm9yLFxuICAgICAgICAgICAgICAgIG9uUHJvcHM6IGhlbHBlcnMub25Qcm9wcyxcbiAgICAgICAgICAgICAgICByZXNpemU6IGhlbHBlcnMucmVzaXplLFxuICAgICAgICAgICAgICAgIGdldFBhcmVudDogaGVscGVycy5nZXRQYXJlbnQsXG4gICAgICAgICAgICAgICAgZ2V0UGFyZW50RG9tYWluOiBoZWxwZXJzLmdldFBhcmVudERvbWFpbixcbiAgICAgICAgICAgICAgICBzaG93OiBoZWxwZXJzLnNob3csXG4gICAgICAgICAgICAgICAgaGlkZTogaGVscGVycy5oaWRlXG4gICAgICAgICAgICB9KSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQ2hpbGRXaW5kb3dOYW1lKHdpbmRvd05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmxpbmVNZW1vaXplKHBhcnNlQ2hpbGRXaW5kb3dOYW1lLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dOYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJObyB3aW5kb3cgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgX3dpbmRvd05hbWUkc3BsaXQgPSB3aW5kb3dOYW1lLnNwbGl0KFwiX19cIiksIHpvaWRjb21wID0gX3dpbmRvd05hbWUkc3BsaXRbMV0sIG5hbWUgPSBfd2luZG93TmFtZSRzcGxpdFsyXSwgZW5jb2RlZFBheWxvYWQgPSBfd2luZG93TmFtZSRzcGxpdFszXTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ6b2lkXCIgIT09IHpvaWRjb21wKSB0aHJvdyBuZXcgRXJyb3IoXCJXaW5kb3cgbm90IHJlbmRlcmVkIGJ5IHpvaWQgLSBnb3QgXCIgKyB6b2lkY29tcCk7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBjb21wb25lbnQgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVuY29kZWRQYXlsb2FkKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBlbmNvZGVkIHBheWxvYWRcIik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBhdG9iKSByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFtdLm1hcC5jYWxsKGF0b2Ioc3RyKSwgKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIlXCIgKyAoXCIwMFwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEJ1ZmZlcikgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0ciwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGY4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBmaW5kIHdpbmRvdy5hdG9iIG9yIEJ1ZmZlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfShlbmNvZGVkUGF5bG9hZCkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGRlY29kZSB3aW5kb3cgbmFtZSBwYXlsb2FkOiBcIiArIGVuY29kZWRQYXlsb2FkICsgXCI6IFwiICsgc3RyaW5naWZ5RXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIFsgd2luZG93TmFtZSBdKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRDaGlsZFBheWxvYWQoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUNoaWxkV2luZG93TmFtZSh3aW5kb3cubmFtZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRfZm9jdXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGlsZF9kZXN0cm95KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJvcHNfZ2V0UXVlcnlQYXJhbShwcm9wLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBwcm9wLnF1ZXJ5UGFyYW0gPyBwcm9wLnF1ZXJ5UGFyYW0oe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICB9KSA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHByb3AucXVlcnlQYXJhbSA/IHByb3AucXVlcnlQYXJhbSA6IGtleTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRRdWVyeVZhbHVlKHByb3AsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHByb3AucXVlcnlWYWx1ZSAmJiBpc0RlZmluZWQodmFsdWUpID8gcHJvcC5xdWVyeVZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJlbnRDb21wb25lbnQob3B0aW9ucywgb3ZlcnJpZGVzLCBwYXJlbnRXaW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gb3ZlcnJpZGVzICYmIChvdmVycmlkZXMgPSB7fSk7XG4gICAgICAgICAgICB2b2lkIDAgPT09IHBhcmVudFdpbiAmJiAocGFyZW50V2luID0gd2luZG93KTtcbiAgICAgICAgICAgIHZhciBwcm9wc0RlZiA9IG9wdGlvbnMucHJvcHNEZWYsIGNvbnRhaW5lclRlbXBsYXRlID0gb3B0aW9ucy5jb250YWluZXJUZW1wbGF0ZSwgcHJlcmVuZGVyVGVtcGxhdGUgPSBvcHRpb25zLnByZXJlbmRlclRlbXBsYXRlLCB0YWcgPSBvcHRpb25zLnRhZywgbmFtZSA9IG9wdGlvbnMubmFtZSwgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcywgZGltZW5zaW9ucyA9IG9wdGlvbnMuZGltZW5zaW9ucywgYXV0b1Jlc2l6ZSA9IG9wdGlvbnMuYXV0b1Jlc2l6ZSwgdXJsID0gb3B0aW9ucy51cmwsIGRvbWFpbk1hdGNoID0gb3B0aW9ucy5kb21haW47XG4gICAgICAgICAgICB2YXIgaW5pdFByb21pc2UgPSBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2U7XG4gICAgICAgICAgICB2YXIgaGFuZGxlZEVycm9ycyA9IFtdO1xuICAgICAgICAgICAgdmFyIGNsZWFuID0gY2xlYW51cCgpO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgICAgICB2YXIgaW50ZXJuYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG92ZXJyaWRlcy5ldmVudCA/IG92ZXJyaWRlcy5ldmVudCA6ICh0cmlnZ2VyZWQgPSB7fSwgaGFuZGxlcnMgPSB7fSwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBoYW5kbGVyc1tldmVudE5hbWVdID0gaGFuZGxlcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckxpc3Quc3BsaWNlKGhhbmRsZXJMaXN0LmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLm9uKGV2ZW50TmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBoYW5kbGVyc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbihfaTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJMaXN0W19pMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgaGFuZGxlckxpc3QubGVuZ3RoOyBfaTIrKykgX2xvb3AoX2kyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uY2U6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcmVkW2V2ZW50TmFtZV0pIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZFtldmVudE5hbWVdID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmFwcGx5KHRoaXMsIFsgZXZlbnROYW1lIF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyZWQsIGhhbmRsZXJzO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gb3ZlcnJpZGVzLnByb3BzID8gb3ZlcnJpZGVzLnByb3BzIDoge307XG4gICAgICAgICAgICB2YXIgY3VycmVudFByb3h5V2luO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQcm94eUNvbnRhaW5lcjtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbXBvbmVudDtcbiAgICAgICAgICAgIHZhciBvbkVycm9yT3ZlcnJpZGUgPSBvdmVycmlkZXMub25FcnJvcjtcbiAgICAgICAgICAgIHZhciBnZXRQcm94eUNvbnRhaW5lck92ZXJyaWRlID0gb3ZlcnJpZGVzLmdldFByb3h5Q29udGFpbmVyO1xuICAgICAgICAgICAgdmFyIHNob3dPdmVycmlkZSA9IG92ZXJyaWRlcy5zaG93O1xuICAgICAgICAgICAgdmFyIGhpZGVPdmVycmlkZSA9IG92ZXJyaWRlcy5oaWRlO1xuICAgICAgICAgICAgdmFyIGNsb3NlT3ZlcnJpZGUgPSBvdmVycmlkZXMuY2xvc2U7XG4gICAgICAgICAgICB2YXIgcmVuZGVyQ29udGFpbmVyT3ZlcnJpZGUgPSBvdmVycmlkZXMucmVuZGVyQ29udGFpbmVyO1xuICAgICAgICAgICAgdmFyIGdldFByb3h5V2luZG93T3ZlcnJpZGUgPSBvdmVycmlkZXMuZ2V0UHJveHlXaW5kb3c7XG4gICAgICAgICAgICB2YXIgc2V0UHJveHlXaW5PdmVycmlkZSA9IG92ZXJyaWRlcy5zZXRQcm94eVdpbjtcbiAgICAgICAgICAgIHZhciBvcGVuRnJhbWVPdmVycmlkZSA9IG92ZXJyaWRlcy5vcGVuRnJhbWU7XG4gICAgICAgICAgICB2YXIgb3BlblByZXJlbmRlckZyYW1lT3ZlcnJpZGUgPSBvdmVycmlkZXMub3BlblByZXJlbmRlckZyYW1lO1xuICAgICAgICAgICAgdmFyIHByZXJlbmRlck92ZXJyaWRlID0gb3ZlcnJpZGVzLnByZXJlbmRlcjtcbiAgICAgICAgICAgIHZhciBvcGVuT3ZlcnJpZGUgPSBvdmVycmlkZXMub3BlbjtcbiAgICAgICAgICAgIHZhciBvcGVuUHJlcmVuZGVyT3ZlcnJpZGUgPSBvdmVycmlkZXMub3BlblByZXJlbmRlcjtcbiAgICAgICAgICAgIHZhciB3YXRjaEZvclVubG9hZE92ZXJyaWRlID0gb3ZlcnJpZGVzLndhdGNoRm9yVW5sb2FkO1xuICAgICAgICAgICAgdmFyIGdldEludGVybmFsU3RhdGVPdmVycmlkZSA9IG92ZXJyaWRlcy5nZXRJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgICAgdmFyIHNldEludGVybmFsU3RhdGVPdmVycmlkZSA9IG92ZXJyaWRlcy5zZXRJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgICAgdmFyIGdldFByb3BzRm9yQ2hpbGQgPSBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCAmJiAhMSA9PT0gcHJvcC5zZW5kVG9DaGlsZCB8fCBwcm9wICYmIHByb3Auc2FtZURvbWFpbiAmJiAhbWF0Y2hEb21haW4oZG9tYWluLCBnZXREb21haW4od2luZG93KSkgfHwgKHJlc3VsdFtrZXldID0gcHJvcHNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5oYXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGVPdmVycmlkZSA/IGdldEludGVybmFsU3RhdGVPdmVycmlkZSgpIDogaW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHNldEludGVybmFsU3RhdGUgPSBmdW5jdGlvbihuZXdJbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnRlcm5hbFN0YXRlT3ZlcnJpZGUgPyBzZXRJbnRlcm5hbFN0YXRlT3ZlcnJpZGUobmV3SW50ZXJuYWxTdGF0ZSkgOiBpbnRlcm5hbFN0YXRlID0gX2V4dGVuZHMoe30sIGludGVybmFsU3RhdGUsIG5ld0ludGVybmFsU3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0UHJveHlXaW5kb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJveHlXaW5kb3dPdmVycmlkZSA/IGdldFByb3h5V2luZG93T3ZlcnJpZGUoKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dQcm9wID0gcHJvcHMud2luZG93O1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9wcm94eVdpbiA9IHNldHVwX3RvUHJveHlXaW5kb3cod2luZG93UHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1Byb3AuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcHJveHlXaW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3dfUHJveHlXaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZF9zZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0UHJveHlDb250YWluZXIgPSBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJveHlDb250YWluZXJPdmVycmlkZSA/IGdldFByb3h5Q29udGFpbmVyT3ZlcnJpZGUoY29udGFpbmVyKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50UmVhZHkoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpc1NoYWRvd0VsZW1lbnQoY29udGFpbmVyRWxlbWVudCkgJiYgKGNvbnRhaW5lckVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93SG9zdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93Um9vdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZWxlbWVudC5wYXJlbnROb2RlOyApIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NoYWRvd0VsZW1lbnQoZWxlbWVudCkpIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QuaG9zdCkgcmV0dXJuIHNoYWRvd1Jvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYWRvd0hvc3QpIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXMgbm90IGluIHNoYWRvdyBkb21cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTaGFkb3dFbGVtZW50KHNoYWRvd0hvc3QpKSB0aHJvdyBuZXcgRXJyb3IoXCJIb3N0IGVsZW1lbnQgaXMgYWxzbyBpbiBzaGFkb3cgZG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsb3ROYW1lID0gXCJzaGFkb3ctc2xvdC1cIiArIHVuaXF1ZUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHNsb3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xvdFByb3ZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm92aWRlci5zZXRBdHRyaWJ1dGUoXCJzbG90XCIsIHNsb3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0hvc3QuYXBwZW5kQ2hpbGQoc2xvdFByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbG90UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgIH0oY29udGFpbmVyRWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJveHlPYmplY3QoY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzZXRQcm94eVdpbiA9IGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFByb3h5V2luT3ZlcnJpZGUgPyBzZXRQcm94eVdpbk92ZXJyaWRlKHByb3h5V2luKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm94eVdpbiA9IHByb3h5V2luO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG93T3ZlcnJpZGUgPyBzaG93T3ZlcnJpZGUoKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZTogc2V0SW50ZXJuYWxTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnQ6IGN1cnJlbnRQcm94eUNvbnRhaW5lciA/IGN1cnJlbnRQcm94eUNvbnRhaW5lci5nZXQoKS50aGVuKHNob3dFbGVtZW50KSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KS50aGVuKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBoaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpZGVPdmVycmlkZSA/IGhpZGVPdmVycmlkZSgpIDogcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlOiBzZXRJbnRlcm5hbFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6ICExXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudDogY3VycmVudFByb3h5Q29udGFpbmVyID8gY3VycmVudFByb3h5Q29udGFpbmVyLmdldCgpLnRoZW4oaGlkZUVsZW1lbnQpIDogbnVsbFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGdldFVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHVybCA/IHVybCh7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICAgICAgICAgIH0pIDogdXJsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYXR0cmlidXRlcyA/IGF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgICAgICAgICB9KSA6IGF0dHJpYnV0ZXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGdldENoaWxkRG9tYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbWFpbk1hdGNoICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGRvbWFpbk1hdGNoID8gZG9tYWluTWF0Y2ggOiBnZXREb21haW5Gcm9tVXJsKGdldFVybCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0RG9tYWluTWF0Y2hlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb21haW5NYXRjaCAmJiB1dGlsX2lzUmVnZXgoZG9tYWluTWF0Y2gpID8gZG9tYWluTWF0Y2ggOiBnZXRDaGlsZERvbWFpbigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvcGVuRnJhbWUgPSBmdW5jdGlvbihjb250ZXh0LCBfcmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd05hbWUgPSBfcmVmLndpbmRvd05hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5GcmFtZU92ZXJyaWRlID8gb3BlbkZyYW1lT3ZlcnJpZGUoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiB3aW5kb3dOYW1lXG4gICAgICAgICAgICAgICAgfSkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHJldHVybiBnZXRQcm94eU9iamVjdChkb21faWZyYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aW5kb3dOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnZXRBdHRyaWJ1dGVzKCkuaWZyYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvcGVuUHJlcmVuZGVyRnJhbWUgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5QcmVyZW5kZXJGcmFtZU92ZXJyaWRlID8gb3BlblByZXJlbmRlckZyYW1lT3ZlcnJpZGUoY29udGV4dCkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHJldHVybiBnZXRQcm94eU9iamVjdChkb21faWZyYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIl9fem9pZF9wcmVyZW5kZXJfZnJhbWVfX1wiICsgbmFtZSArIFwiX1wiICsgdW5pcXVlSUQoKSArIFwiX19cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJwcmVyZW5kZXJfX1wiICsgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2V0QXR0cmlidXRlcygpLmlmcmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb3BlblByZXJlbmRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHByb3h5V2luLCBwcm94eVByZXJlbmRlckZyYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5QcmVyZW5kZXJPdmVycmlkZSA/IG9wZW5QcmVyZW5kZXJPdmVycmlkZShjb250ZXh0LCBwcm94eVdpbiwgcHJveHlQcmVyZW5kZXJGcmFtZSkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlQcmVyZW5kZXJGcmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcHJveHkgZnJhbWUgdG8gYmUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5UHJlcmVuZGVyRnJhbWUuZ2V0KCkudGhlbigoZnVuY3Rpb24ocHJlcmVuZGVyRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXN0cm95RWxlbWVudChwcmVyZW5kZXJGcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdEZyYW1lV2luZG93KHByZXJlbmRlckZyYW1lKS50aGVuKChmdW5jdGlvbihwcmVyZW5kZXJGcmFtZVdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXJ0U2FtZURvbWFpbihwcmVyZW5kZXJGcmFtZVdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXBfdG9Qcm94eVdpbmRvdyh3aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZW5kZXIgY29udGV4dCBhdmFpbGFibGUgZm9yIFwiICsgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBmb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFByb3h5V2luKSByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKFsgZXZlbnQudHJpZ2dlcihFVkVOVC5GT0NVUyksIGN1cnJlbnRQcm94eVdpbi5mb2N1cygpIF0pLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRXaW5kb3dSZWYgPSBmdW5jdGlvbih0YXJnZXQsIGRvbWFpbiwgdWlkLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbiA9PT0gZ2V0RG9tYWluKHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGxpYl9nbG9iYWxfZ2V0R2xvYmFsKHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC53aW5kb3dzID0gZ2xvYmFsLndpbmRvd3MgfHwge307XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC53aW5kb3dzW3VpZF0gPSB3aW5kb3c7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWwud2luZG93c1t1aWRdO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdsb2JhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQgPT09IENPTlRFWFQuUE9QVVAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib3BlbmVyXCJcbiAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogZ2V0RGlzdGFuY2VGcm9tVG9wKHdpbmRvdylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBpbml0Q2hpbGQgPSBmdW5jdGlvbihjaGlsZEV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnQgPSBjaGlsZEV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkRXhwb3J0cy5jbG9zZS5maXJlQW5kRm9yZ2V0KCkuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihFVkVOVC5SRVNJWkUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZGVzdHJveSA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQudHJpZ2dlcihFVkVOVC5ERVNUUk9ZKTtcbiAgICAgICAgICAgICAgICB9KSkuY2F0Y2goc3JjX3V0aWxfbm9vcCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhbi5hbGwoZXJyKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLmFzeW5jUmVqZWN0KGVyciB8fCBuZXcgRXJyb3IoXCJDb21wb25lbnQgZGVzdHJveWVkXCIpKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNsb3NlID0gbWVtb2l6ZSgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZU92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQoY2xvc2VPdmVycmlkZS5fX3NvdXJjZV9fKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3NlT3ZlcnJpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC50cmlnZ2VyKEVWRU5ULkNMT1NFKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc3Ryb3koZXJyIHx8IG5ldyBFcnJvcihcIkNvbXBvbmVudCBjbG9zZWRcIikpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIG9wZW4gPSBmdW5jdGlvbihjb250ZXh0LCBfcmVmMykge1xuICAgICAgICAgICAgICAgIHZhciBwcm94eVdpbiA9IF9yZWYzLnByb3h5V2luLCBwcm94eUZyYW1lID0gX3JlZjMucHJveHlGcmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3Blbk92ZXJyaWRlID8gb3Blbk92ZXJyaWRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IHByb3h5V2luLFxuICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBwcm94eUZyYW1lLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBfcmVmMy53aW5kb3dOYW1lXG4gICAgICAgICAgICAgICAgfSkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlGcmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcHJveHkgZnJhbWUgdG8gYmUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5RnJhbWUuZ2V0KCkudGhlbigoZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXRGcmFtZVdpbmRvdyhmcmFtZSkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXN0cm95RWxlbWVudChmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9yZXF1ZXN0UHJvbWlzZXMkZ2V0MiA9IHdpbmRvd1N0b3JlKFwicmVxdWVzdFByb21pc2VzXCIpLmdldCh3aW4sIFtdKTsgX2kyIDwgX3JlcXVlc3RQcm9taXNlcyRnZXQyLmxlbmd0aDsgX2kyKyspIF9yZXF1ZXN0UHJvbWlzZXMkZ2V0MltfaTJdLnJlamVjdChuZXcgRXJyb3IoXCJXaW5kb3cgXCIgKyAoaXNXaW5kb3dDbG9zZWQod2luKSA/IFwiY2xvc2VkXCIgOiBcImNsZWFuZWQgdXBcIikgKyBcIiBiZWZvcmUgcmVzcG9uc2VcIikpLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh3aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlbmRlciBjb250ZXh0IGF2YWlsYWJsZSBmb3IgXCIgKyBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5V2luLnNldFdpbmRvdyh3aW4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRfc2VuZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5V2luO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgd2F0Y2hGb3JVbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVubG9hZFdpbmRvd0xpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwidW5sb2FkXCIsIG9uY2UoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJveShuZXcgRXJyb3IoXCJXaW5kb3cgbmF2aWdhdGVkIGF3YXlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VQYXJlbnRXaW5kb3dMaXN0ZW5lciA9IG9uQ2xvc2VXaW5kb3cocGFyZW50V2luLCBkZXN0cm95LCAzZTMpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcihjbG9zZVBhcmVudFdpbmRvd0xpc3RlbmVyLmNhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKHVubG9hZFdpbmRvd0xpc3RlbmVyLmNhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXRjaEZvclVubG9hZE92ZXJyaWRlKSByZXR1cm4gd2F0Y2hGb3JVbmxvYWRPdmVycmlkZSgpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY2hlY2tXaW5kb3dDbG9zZSA9IGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb3NlZCA9ICExO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm94eVdpbi5pc0Nsb3NlZCgpLnRoZW4oKGZ1bmN0aW9uKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Nsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2UobmV3IEVycm9yKFwiRGV0ZWN0ZWQgY29tcG9uZW50IHdpbmRvdyBjbG9zZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmRlbGF5KDIwMCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJveHlXaW4uaXNDbG9zZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHNlY29uZElzQ2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Vjb25kSXNDbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2UobmV3IEVycm9yKFwiRGV0ZWN0ZWQgY29tcG9uZW50IHdpbmRvdyBjbG9zZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3JPdmVycmlkZSA/IG9uRXJyb3JPdmVycmlkZShlcnIpIDogcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBoYW5kbGVkRXJyb3JzLmluZGV4T2YoZXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5hc3luY1JlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRyaWdnZXIoRVZFTlQuRVJST1IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW5pdENoaWxkLm9uRXJyb3IgPSBvbkVycm9yO1xuICAgICAgICAgICAgdmFyIHJlbmRlclRlbXBsYXRlID0gZnVuY3Rpb24ocmVuZGVyZXIsIF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBfcmVmNi5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IF9yZWY2LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogX3JlZjYudWlkLFxuICAgICAgICAgICAgICAgICAgICBkb2M6IF9yZWY2LmRvYyxcbiAgICAgICAgICAgICAgICAgICAgZnJhbWU6IF9yZWY2LmZyYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZTogX3JlZjYucHJlcmVuZGVyRnJhbWUsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGNsb3NlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwcmVyZW5kZXIgPSBmdW5jdGlvbihwcm94eVByZXJlbmRlcldpbiwgX3JlZjcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IF9yZWY3LmNvbnRleHQsIHVpZCA9IF9yZWY3LnVpZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlcmVuZGVyT3ZlcnJpZGUgPyBwcmVyZW5kZXJPdmVycmlkZShwcm94eVByZXJlbmRlcldpbiwge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgIH0pIDogcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXJlbmRlclRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJlcmVuZGVyV2luZG93ID0gcHJveHlQcmVyZW5kZXJXaW4uZ2V0V2luZG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlcmVuZGVyV2luZG93ICYmIGlzU2FtZURvbWFpbihwcmVyZW5kZXJXaW5kb3cpICYmIGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luLmxvY2F0aW9uLmhyZWYpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiYWJvdXQ6YmxhbmtcIiA9PT0gd2luLmxvY2F0aW9uLmhyZWYpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcmVyZW5kZXJXaW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvYyA9IChwcmVyZW5kZXJXaW5kb3cgPSBhc3NlcnRTYW1lRG9tYWluKHByZXJlbmRlcldpbmRvdykpLmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHJlbmRlclRlbXBsYXRlKHByZXJlbmRlclRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2M6IGRvY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwub3duZXJEb2N1bWVudCAhPT0gZG9jKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBwcmVyZW5kZXIgdGVtcGxhdGUgdG8gaGF2ZSBiZWVuIGNyZWF0ZWQgd2l0aCBkb2N1bWVudCBmcm9tIGNoaWxkIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKHdpbiwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJodG1sXCIgIT09IHRhZykgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgZWxlbWVudCB0byBiZSBodG1sLCBnb3QgXCIgKyB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHdpbi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTYgPSAwLCBfYXJyYXlGcm9tMiA9IGFycmF5RnJvbShkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW4pOyBfaTYgPCBfYXJyYXlGcm9tMi5sZW5ndGg7IF9pNisrKSBkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX2FycmF5RnJvbTJbX2k2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTggPSAwLCBfYXJyYXlGcm9tNCA9IGFycmF5RnJvbShlbC5jaGlsZHJlbik7IF9pOCA8IF9hcnJheUZyb200Lmxlbmd0aDsgX2k4KyspIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChfYXJyYXlGcm9tNFtfaThdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcmVyZW5kZXJXaW5kb3csIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hdXRvUmVzaXplJHdpZHRoID0gYXV0b1Jlc2l6ZS53aWR0aCwgd2lkdGggPSB2b2lkIDAgIT09IF9hdXRvUmVzaXplJHdpZHRoICYmIF9hdXRvUmVzaXplJHdpZHRoLCBfYXV0b1Jlc2l6ZSRoZWlnaHQgPSBhdXRvUmVzaXplLmhlaWdodCwgaGVpZ2h0ID0gdm9pZCAwICE9PSBfYXV0b1Jlc2l6ZSRoZWlnaHQgJiYgX2F1dG9SZXNpemUkaGVpZ2h0LCBfYXV0b1Jlc2l6ZSRlbGVtZW50ID0gYXV0b1Jlc2l6ZS5lbGVtZW50LCBlbGVtZW50ID0gdm9pZCAwID09PSBfYXV0b1Jlc2l6ZSRlbGVtZW50ID8gXCJib2R5XCIgOiBfYXV0b1Jlc2l6ZSRlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQgPSBnZXRFbGVtZW50U2FmZShlbGVtZW50LCBkb2MpKSAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXJlbmRlclJlc2l6ZUxpc3RlbmVyID0gb25SZXNpemUoZWxlbWVudCwgKGZ1bmN0aW9uKF9yZWY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoID8gX3JlZjgud2lkdGggOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ID8gX3JlZjguaGVpZ2h0IDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW46IHByZXJlbmRlcldpbmRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5SRU5ERVJFRCwgcHJlcmVuZGVyUmVzaXplTGlzdGVuZXIuY2FuY2VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVuZGVyQ29udGFpbmVyID0gZnVuY3Rpb24ocHJveHlDb250YWluZXIsIF9yZWY5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3h5RnJhbWUgPSBfcmVmOS5wcm94eUZyYW1lLCBwcm94eVByZXJlbmRlckZyYW1lID0gX3JlZjkucHJveHlQcmVyZW5kZXJGcmFtZSwgY29udGV4dCA9IF9yZWY5LmNvbnRleHQsIHVpZCA9IF9yZWY5LnVpZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQ29udGFpbmVyT3ZlcnJpZGUgPyByZW5kZXJDb250YWluZXJPdmVycmlkZShwcm94eUNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBwcm94eUZyYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcm94eVByZXJlbmRlckZyYW1lOiBwcm94eVByZXJlbmRlckZyYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgIH0pIDogcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogcHJveHlDb250YWluZXIuZ2V0KCksXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lOiBwcm94eUZyYW1lID8gcHJveHlGcmFtZS5nZXQoKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByZXJlbmRlckZyYW1lOiBwcm94eVByZXJlbmRlckZyYW1lID8gcHJveHlQcmVyZW5kZXJGcmFtZS5nZXQoKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsU3RhdGU6IGdldEludGVybmFsU3RhdGUoKVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX3JlZjEwLmNvbnRhaW5lciwgdmlzaWJsZSA9IF9yZWYxMC5pbnRlcm5hbFN0YXRlLnZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbm5lckNvbnRhaW5lciA9IHJlbmRlclRlbXBsYXRlKGNvbnRhaW5lclRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBfcmVmMTAuZnJhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZTogX3JlZjEwLnByZXJlbmRlckZyYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlIHx8IGhpZGVFbGVtZW50KGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKGNvbnRhaW5lciwgaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcldhdGNoZXIgPSBmdW5jdGlvbihlbGVtZW50LCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9IG9uY2UoaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FjcmlmaWNpYWxGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FjcmlmaWNpYWxGcmFtZVdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTE4ID0gMDsgX2kxOCA8IG11dGF0aW9uT2JzZXJ2ZXJzLmxlbmd0aDsgX2kxOCsrKSBtdXRhdGlvbk9ic2VydmVyc1tfaTE4XS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsICYmIGludGVydmFsLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWNyaWZpY2lhbEZyYW1lV2luICYmIHNhY3JpZmljaWFsRnJhbWVXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCBlbGVtZW50Q2xvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FjcmlmaWNpYWxGcmFtZSAmJiBkZXN0cm95RWxlbWVudChzYWNyaWZpY2lhbEZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50Q2xvc2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRWxlbWVudENsb3NlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xvc2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGNhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7bXV0YXRpb25FbGVtZW50OyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VsZW1lbnRDbG9zZWQoZWxlbWVudCkgJiYgZWxlbWVudENsb3NlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG11dGF0aW9uRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlcnMucHVzaChtdXRhdGlvbk9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uRWxlbWVudCA9IG11dGF0aW9uRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzYWNyaWZpY2lhbEZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIl9fZGV0ZWN0X2Nsb3NlX1wiICsgdW5pcXVlSUQoKSArIFwiX19cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FjcmlmaWNpYWxGcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRGcmFtZVdpbmRvdyhzYWNyaWZpY2lhbEZyYW1lKS50aGVuKChmdW5jdGlvbihmcmFtZVdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2FjcmlmaWNpYWxGcmFtZVdpbiA9IGFzc2VydFNhbWVEb21haW4oZnJhbWVXaW4pKS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIGVsZW1lbnRDbG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNhY3JpZmljaWFsRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gc2FmZUludGVydmFsKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbGVtZW50Q2xvc2VkKGVsZW1lbnQpICYmIGVsZW1lbnRDbG9zZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMWUzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGNhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGlubmVyQ29udGFpbmVyLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3NlKG5ldyBFcnJvcihcIkRldGVjdGVkIGNvbnRhaW5lciBlbGVtZW50IHJlbW92ZWQgZnJvbSBET01cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJXYXRjaGVyLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXN0cm95RWxlbWVudChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFByb3h5Q29udGFpbmVyID0gZ2V0UHJveHlPYmplY3QoaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRIZWxwZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZvY3VzLFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHJlc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvcHM6IHVwZGF0ZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2V0UHJvcHMgPSBmdW5jdGlvbihuZXdQcm9wcywgaXNVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGlzVXBkYXRlICYmIChpc1VwZGF0ZSA9ICExKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVscGVycyA9IGdldEhlbHBlcnMoKTtcbiAgICAgICAgICAgICAgICAhZnVuY3Rpb24ocHJvcHNEZWYsIHByb3BzLCBpbnB1dFByb3BzLCBoZWxwZXJzLCBpc1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGlzVXBkYXRlICYmIChpc1VwZGF0ZSA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHByb3BzLCBpbnB1dFByb3BzID0gaW5wdXRQcm9wcyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZXMgPSBpc1VwZGF0ZSA/IFtdIDogW10uY29uY2F0KE9iamVjdC5rZXlzKHByb3BzRGVmKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyhpbnB1dFByb3BzKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX09iamVjdCRrZXlzMltfaTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IHByb3BOYW1lcy5pbmRleE9mKGtleSkgJiYgcHJvcE5hbWVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxpYXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBoZWxwZXJzLnN0YXRlLCBjbG9zZSA9IGhlbHBlcnMuY2xvc2UsIGZvY3VzID0gaGVscGVycy5mb2N1cywgZXZlbnQgPSBoZWxwZXJzLmV2ZW50LCBvbkVycm9yID0gaGVscGVycy5vbkVycm9yO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBwcm9wTmFtZXMubGVuZ3RoOyBfaTQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9rZXkgPSBwcm9wTmFtZXNbX2k0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wRGVmID0gcHJvcHNEZWZbX2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFByb3BzW19rZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxpYXMgPSBwcm9wRGVmLmFsaWFzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQoaW5wdXRQcm9wc1thbGlhc10pICYmICh2YWx1ZSA9IGlucHV0UHJvcHNbYWxpYXNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXNlcy5wdXNoKGFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcERlZi52YWx1ZSAmJiAodmFsdWUgPSBwcm9wRGVmLnZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZvY3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IG9uRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGVmaW5lZCh2YWx1ZSkgJiYgcHJvcERlZi5kZWZhdWx0ICYmICh2YWx1ZSA9IHByb3BEZWYuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIChcImFycmF5XCIgPT09IHByb3BEZWYudHlwZSA/ICFBcnJheS5pc0FycmF5KHZhbHVlKSA6IHR5cGVvZiB2YWx1ZSAhPT0gcHJvcERlZi50eXBlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb3AgaXMgbm90IG9mIHR5cGUgXCIgKyBwcm9wRGVmLnR5cGUgKyBcIjogXCIgKyBfa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pNiA9IDA7IF9pNiA8IGFsaWFzZXMubGVuZ3RoOyBfaTYrKykgZGVsZXRlIHByb3BzW2FsaWFzZXNbX2k2XV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pOCA9IDAsIF9PYmplY3Qka2V5czQgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pOCA8IF9PYmplY3Qka2V5czQubGVuZ3RoOyBfaTgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9rZXkyID0gX09iamVjdCRrZXlzNFtfaThdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9wcm9wRGVmID0gcHJvcHNEZWZbX2tleTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF92YWx1ZSA9IHByb3BzW19rZXkyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcm9wRGVmICYmIGlzRGVmaW5lZChfdmFsdWUpICYmIF9wcm9wRGVmLmRlY29yYXRlICYmIChwcm9wc1tfa2V5Ml0gPSBfcHJvcERlZi5kZWNvcmF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czogZm9jdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IG9uRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTEwID0gMCwgX09iamVjdCRrZXlzNiA9IE9iamVjdC5rZXlzKHByb3BzRGVmKTsgX2kxMCA8IF9PYmplY3Qka2V5czYubGVuZ3RoOyBfaTEwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfa2V5MyA9IF9PYmplY3Qka2V5czZbX2kxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IHByb3BzRGVmW19rZXkzXS5yZXF1aXJlZCAmJiAhaXNEZWZpbmVkKHByb3BzW19rZXkzXSkpIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcHJvcCBcIicgKyBfa2V5MyArICdcIiB0byBiZSBkZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KHByb3BzRGVmLCBwcm9wcywgbmV3UHJvcHMsIGhlbHBlcnMsIGlzVXBkYXRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdXBkYXRlUHJvcHMgPSBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgICAgICAgICAgICAgIHNldFByb3BzKG5ld1Byb3BzLCAhMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXRQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZENvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3h5V2luID0gY3VycmVudFByb3h5V2luO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgJiYgcHJveHlXaW4pIHJldHVybiBnZXRQcm9wc0ZvckNoaWxkKGdldERvbWFpbk1hdGNoZXIoKSkudGhlbigoZnVuY3Rpb24oY2hpbGRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnVwZGF0ZVByb3BzKGNoaWxkUHJvcHMpLmNhdGNoKChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tXaW5kb3dDbG9zZShwcm94eVdpbikudGhlbigoZnVuY3Rpb24oY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULlJFTkRFUiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vblJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQub24oRVZFTlQuRElTUExBWSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vbkRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULlJFTkRFUkVELCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uUmVuZGVyZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULkNMT1NFLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULkRFU1RST1ksIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25EZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5SRVNJWkUsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25SZXNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULkZPQ1VTLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULlBST1BTLCAoZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25Qcm9wcyhuZXdQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5FUlJPUiwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcyAmJiBwcm9wcy5vbkVycm9yID8gcHJvcHMub25FcnJvcihlcnIpIDogaW5pdFByb21pc2UucmVqZWN0KGVycikudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoZXZlbnQucmVzZXQpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKHRhcmdldCwgY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVpZCA9IFwiem9pZC1cIiArIHRhZyArIFwiLVwiICsgdW5pcXVlSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW4gPSBnZXREb21haW5NYXRjaGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGREb21haW4gPSBnZXRDaGlsZERvbWFpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKHRhcmdldCwgZG9tYWluLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NhbWVUb3BXaW5kb3cod2luZG93LCB0YXJnZXQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSByZW5kZXJUbyBhbiBhZGphY2VudCBmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGdldERvbWFpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoRG9tYWluKGRvbWFpbiwgb3JpZ2luKSAmJiAhaXNTYW1lRG9tYWluKHRhcmdldCkpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVuZGVyIHJlbW90ZWx5IHRvIFwiICsgZG9tYWluLnRvU3RyaW5nKCkgKyBcIiAtIGNhbiBvbmx5IHJlbmRlciB0byBcIiArIG9yaWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgY29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgcGFzc2VkIHRvIHJlbmRlclRvIG11c3QgYmUgYSBzdHJpbmcgc2VsZWN0b3IsIGdvdCBcIiArIHR5cGVvZiBjb250YWluZXIgKyBcIiB9XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0odGFyZ2V0LCBkb21haW4sIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGVQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB3aW5kb3cpIHJldHVybiBmdW5jdGlvbihjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlUHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2k0ID0gMCwgX09iamVjdCRrZXlzNCA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2k0IDwgX09iamVjdCRrZXlzNC5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBfT2JqZWN0JGtleXM0W19pNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcERlZiA9IHByb3BzRGVmW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BEZWYgJiYgcHJvcERlZi5hbGxvd0RlbGVnYXRlICYmIChkZWxlZ2F0ZVByb3BzW3Byb3BOYW1lXSA9IHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZSA9IHNlbmRfc2VuZCh0YXJnZXQsIFwiem9pZF9kZWxlZ2F0ZV9cIiArIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBkZWxlZ2F0ZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRJbnRlcm5hbFN0YXRlOiBnZXRJbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVybmFsU3RhdGU6IHNldEludGVybmFsU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Q29tcCA9IF9yZWYxMS5kYXRhLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2luZG93Q2xvc2VkKHRhcmdldCkpIHJldHVybiBwYXJlbnRDb21wLmRlc3Ryb3koZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb21wLmdldERlbGVnYXRlT3ZlcnJpZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZGVsZWdhdGUgcmVuZGVyaW5nLiBQb3NzaWJseSB0aGUgY29tcG9uZW50IGlzIG5vdCBsb2FkZWQgaW4gdGhlIHRhcmdldCB3aW5kb3cuXFxuXFxuXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm94eUNvbnRhaW5lck92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzLmdldFByb3h5Q29udGFpbmVyLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyT3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5yZW5kZXJDb250YWluZXIuYXBwbHkoY2hpbGRPdmVycmlkZXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93T3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5zaG93LmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2UudGhlbigoZnVuY3Rpb24oY2hpbGRPdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXMuaGlkZS5hcHBseShjaGlsZE92ZXJyaWRlcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yVW5sb2FkT3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy53YXRjaEZvclVubG9hZC5hcHBseShjaGlsZE92ZXJyaWRlcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0ID09PSBDT05URVhULklGUkFNRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJveHlXaW5kb3dPdmVycmlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2UudGhlbigoZnVuY3Rpb24oY2hpbGRPdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzLmdldFByb3h5V2luZG93LmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkZyYW1lT3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5vcGVuRnJhbWUuYXBwbHkoY2hpbGRPdmVycmlkZXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJlcmVuZGVyRnJhbWVPdmVycmlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuOCksIF9rZXk4ID0gMDsgX2tleTggPCBfbGVuODsgX2tleTgrKykgYXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2UudGhlbigoZnVuY3Rpb24oY2hpbGRPdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzLm9wZW5QcmVyZW5kZXJGcmFtZS5hcHBseShjaGlsZE92ZXJyaWRlcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXJlbmRlck92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW45KSwgX2tleTkgPSAwOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXMucHJlcmVuZGVyLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjEwID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSBhcmdzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5vcGVuLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblByZXJlbmRlck92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjExID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMTEpLCBfa2V5MTEgPSAwOyBfa2V5MTEgPCBfbGVuMTE7IF9rZXkxMSsrKSBhcmdzW19rZXkxMV0gPSBhcmd1bWVudHNbX2tleTExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5vcGVuUHJlcmVuZGVyLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShjb250ZXh0LCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpbmRvd1Byb3AgPSBwcm9wcy53aW5kb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2F0Y2hGb3JVbmxvYWRQcm9taXNlID0gd2F0Y2hGb3JVbmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWlsZFVybFByb21pc2UgPSBmdW5jdGlvbihwcm9wc0RlZiwgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmFsbChrZXlzLm1hcCgoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHByb3AucXVlcnlQYXJhbSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IHZhbHVlKSByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKFsgcHJvcHNfZ2V0UXVlcnlQYXJhbShwcm9wLCBrZXksIHZhbHVlKSwgZ2V0UXVlcnlWYWx1ZShwcm9wLCAwLCB2YWx1ZSkgXSkudGhlbigoZnVuY3Rpb24oX3JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtID0gX3JlZlswXSwgcXVlcnlWYWx1ZSA9IF9yZWZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJib29sZWFuXCIgPT0gdHlwZW9mIHF1ZXJ5VmFsdWUpIHJlc3VsdCA9IHF1ZXJ5VmFsdWUudG9TdHJpbmcoKTsgZWxzZSBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcXVlcnlWYWx1ZSkgcmVzdWx0ID0gcXVlcnlWYWx1ZS50b1N0cmluZygpOyBlbHNlIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBxdWVyeVZhbHVlICYmIG51bGwgIT09IHF1ZXJ5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3Auc2VyaWFsaXphdGlvbiA9PT0gUFJPUF9TRVJJQUxJWkFUSU9OLkpTT04pIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5VmFsdWUpOyBlbHNlIGlmIChwcm9wLnNlcmlhbGl6YXRpb24gPT09IFBST1BfU0VSSUFMSVpBVElPTi5CQVNFNjQpIHJlc3VsdCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZSkpOyBlbHNlIGlmIChwcm9wLnNlcmlhbGl6YXRpb24gPT09IFBST1BfU0VSSUFMSVpBVElPTi5ET1RJRlkgfHwgIXByb3Auc2VyaWFsaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuY3Rpb24gZG90aWZ5KG9iaiwgcHJlZml4LCBuZXdvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHByZWZpeCAmJiAocHJlZml4ID0gXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBuZXdvYmogJiYgKG5ld29iaiA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXggPSBwcmVmaXggPyBwcmVmaXggKyBcIi5cIiA6IHByZWZpeDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiBudWxsICE9IG9ialtrZXldICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb2JqW2tleV0gJiYgKG9ialtrZXldICYmIEFycmF5LmlzQXJyYXkob2JqW2tleV0pICYmIG9ialtrZXldLmxlbmd0aCAmJiBvYmpba2V5XS5ldmVyeSgoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdFwiICE9IHR5cGVvZiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpID8gbmV3b2JqW1wiXCIgKyBwcmVmaXggKyBrZXkgKyBcIltdXCJdID0gb2JqW2tleV0uam9pbihcIixcIikgOiBvYmpba2V5XSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBvYmpba2V5XSA/IG5ld29iaiA9IGRvdGlmeShvYmpba2V5XSwgXCJcIiArIHByZWZpeCArIGtleSwgbmV3b2JqKSA6IG5ld29ialtcIlwiICsgcHJlZml4ICsga2V5XSA9IG9ialtrZXldLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdvYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHF1ZXJ5VmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTEyID0gMCwgX09iamVjdCRrZXlzOCA9IE9iamVjdC5rZXlzKHJlc3VsdCk7IF9pMTIgPCBfT2JqZWN0JGtleXM4Lmxlbmd0aDsgX2kxMisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvdGtleSA9IF9PYmplY3Qka2V5czhbX2kxMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2RvdGtleV0gPSByZXN1bHRbZG90a2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBcIm51bWJlclwiID09IHR5cGVvZiBxdWVyeVZhbHVlICYmIChyZXN1bHQgPSBxdWVyeVZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1txdWVyeVBhcmFtXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9wc0RlZiwgcHJvcHMpLnRoZW4oKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5IHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IG9wdGlvbnMuaGFzaCB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxIYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3VybCRzcGxpdCA9IHVybC5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSGFzaCA9IF91cmwkc3BsaXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfb3JpZ2luYWxVcmwkc3BsaXQgPSAob3JpZ2luYWxVcmwgPSBfdXJsJHNwbGl0WzBdKS5zcGxpdChcIj9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsVXJsID0gX29yaWdpbmFsVXJsJHNwbGl0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBleHRlbmRRdWVyeShfb3JpZ2luYWxVcmwkc3BsaXRbMV0sIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc2hTdHJpbmcgPSBleHRlbmRRdWVyeShvcmlnaW5hbEhhc2gsIGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyAmJiAob3JpZ2luYWxVcmwgPSBvcmlnaW5hbFVybCArIFwiP1wiICsgcXVlcnlTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoU3RyaW5nICYmIChvcmlnaW5hbFVybCA9IG9yaWdpbmFsVXJsICsgXCIjXCIgKyBoYXNoU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGRvbWFpbiA9IGdldERvbWFpbkZyb21VcmwodXJsKSwgMCA9PT0gZG9tYWluLmluZGV4T2YoXCJtb2NrOlwiKSkpIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1vY2sgdXJscyBub3Qgc3VwcG9ydGVkIG91dCBvZiB0ZXN0IG1vZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShnZXRVcmwoKSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25SZW5kZXJQcm9taXNlID0gZXZlbnQudHJpZ2dlcihFVkVOVC5SRU5ERVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFByb3h5Q29udGFpbmVyUHJvbWlzZSA9IGdldFByb3h5Q29udGFpbmVyKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2V0UHJveHlXaW5kb3dQcm9taXNlID0gZ2V0UHJveHlXaW5kb3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWlsZFdpbmRvd05hbWVQcm9taXNlID0gZ2V0UHJveHlXaW5kb3dQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKF90ZW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNCA9IHZvaWQgMCA9PT0gX3RlbXAgPyB7fSA6IF90ZW1wLCBwcm94eVdpbiA9IF9yZWY0LnByb3h5V2luLCBjaGlsZERvbWFpbiA9IF9yZWY0LmNoaWxkRG9tYWluLCBkb21haW4gPSBfcmVmNC5kb21haW4sIGNvbnRleHQgPSAodm9pZCAwID09PSBfcmVmNC50YXJnZXQgJiYgd2luZG93LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQuY29udGV4dCksIHVpZCA9IF9yZWY0LnVpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb3h5V2luLCBjaGlsZERvbWFpbiwgZG9tYWluLCB1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRQcm9wc0ZvckNoaWxkKGRvbWFpbikudGhlbigoZnVuY3Rpb24oY2hpbGRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNldHVwX3NlcmlhbGl6ZU1lc3NhZ2UocHJveHlXaW4sIGRvbWFpbiwgY2hpbGRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BSZWYgPSBjaGlsZERvbWFpbiA9PT0gZ2V0RG9tYWluKCkgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ1aWRcIiA9PT0gcHJvcFJlZi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnbG9iYWwgPSBsaWJfZ2xvYmFsX2dldEdsb2JhbCh3aW5kb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwucHJvcHMgPSBnbG9iYWwucHJvcHMgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5wcm9wc1t1aWRdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWwucHJvcHNbdWlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcm94eVdpbiwgY2hpbGREb21haW4sIGRvbWFpbiwgdWlkKS50aGVuKChmdW5jdGlvbihwcm9wc1JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IFwiOV8wXzYzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREb21haW46IGNoaWxkRG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERvbWFpbjogZ2V0RG9tYWluKHdpbmRvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBnZXRXaW5kb3dSZWYoMCwgY2hpbGREb21haW4sIHVpZCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHNldHVwX3NlcmlhbGl6ZU1lc3NhZ2UocHJveHlXaW4sIGRvbWFpbiwgKHdpbiA9IHByb3h5V2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGluaXRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0Nsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1dpbmRvd0Nsb3NlKHdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogcmVzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogKF9yZWY1ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IHByb3h5V2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREb21haW46IGNoaWxkRG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5wcm94eVdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREb21haW46IF9yZWY1LmNoaWxkRG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IF9yZWY1LmRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBfcmVmNS50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IF9yZWY1LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogX3JlZjUudWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oY2hpbGRQYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIl9fem9pZF9fXCIgKyBuYW1lICsgXCJfX1wiICsgYmFzZTY0ZW5jb2RlKEpTT04uc3RyaW5naWZ5KGNoaWxkUGF5bG9hZCkpICsgXCJfX1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbkZyYW1lUHJvbWlzZSA9IGJ1aWxkV2luZG93TmFtZVByb21pc2UudGhlbigoZnVuY3Rpb24od2luZG93TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuRnJhbWUoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiB3aW5kb3dOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlblByZXJlbmRlckZyYW1lUHJvbWlzZSA9IG9wZW5QcmVyZW5kZXJGcmFtZShjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJDb250YWluZXJQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlDb250YWluZXI6IGdldFByb3h5Q29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBvcGVuRnJhbWVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5UHJlcmVuZGVyRnJhbWU6IG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJDb250YWluZXIoX3JlZjEyLnByb3h5Q29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBfcmVmMTIucHJveHlGcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlQcmVyZW5kZXJGcmFtZTogX3JlZjEyLnByb3h5UHJlcmVuZGVyRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbihwcm94eUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm94eUNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVuUHJvbWlzZSA9IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd05hbWU6IGJ1aWxkV2luZG93TmFtZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlGcmFtZTogb3BlbkZyYW1lUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogZ2V0UHJveHlXaW5kb3dQcm9taXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbihfcmVmMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJveHlXaW4gPSBfcmVmMTMucHJveHlXaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1Byb3AgPyBwcm94eVdpbiA6IG9wZW4oY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBfcmVmMTMud2luZG93TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IHByb3h5V2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBfcmVmMTMucHJveHlGcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW5QcmVyZW5kZXJQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IG9wZW5Qcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5UHJlcmVuZGVyRnJhbWU6IG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuUHJlcmVuZGVyKGNvbnRleHQsIF9yZWYxNC5wcm94eVdpbiwgX3JlZjE0LnByb3h5UHJlcmVuZGVyRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNldFN0YXRlUHJvbWlzZSA9IG9wZW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb3h5V2luID0gcHJveHlXaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFByb3h5V2luKHByb3h5V2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmVyZW5kZXJQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlQcmVyZW5kZXJXaW46IG9wZW5QcmVyZW5kZXJQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzZXRTdGF0ZVByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmVyZW5kZXIoX3JlZjE1LnByb3h5UHJlcmVuZGVyV2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0V2luZG93TmFtZVByb21pc2UgPSBwcm9taXNlX1phbGdvUHJvbWlzZS5oYXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogb3BlblByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93TmFtZTogYnVpbGRXaW5kb3dOYW1lUHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjE2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1Byb3ApIHJldHVybiBfcmVmMTYucHJveHlXaW4uc2V0TmFtZShfcmVmMTYud2luZG93TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZFVybFByb21pc2UgPSBwcm9taXNlX1phbGdvUHJvbWlzZS5oYXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogb3BlblByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbHRVcmw6IGJ1aWxkVXJsUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBzZXRXaW5kb3dOYW1lUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXI6IHByZXJlbmRlclByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMTcucHJveHlXaW4uc2V0TG9jYXRpb24oX3JlZjE3LmJ1aWx0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXRjaEZvckNsb3NlUHJvbWlzZSA9IG9wZW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uIHdhdGNoRm9yQ2xvc2UocHJveHlXaW4sIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuZGVsYXkoMmUzKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm94eVdpbi5pc0Nsb3NlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oaXNDbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0Nsb3NlZCA/IGNsb3NlKG5ldyBFcnJvcihcIkRldGVjdGVkIFwiICsgY29udGV4dCArIFwiIGNsb3NlXCIpKSA6IGNhbmNlbGxlZCA/IHZvaWQgMCA6IHdhdGNoRm9yQ2xvc2UocHJveHlXaW4sIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcm94eVdpbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25EaXNwbGF5UHJvbWlzZSA9IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogcmVuZGVyQ29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXI6IHByZXJlbmRlclByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC50cmlnZ2VyKEVWRU5ULkRJU1BMQVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW5CcmlkZ2VQcm9taXNlID0gb3BlblByb21pc2UudGhlbigoZnVuY3Rpb24ocHJveHlXaW4pIHt9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnVuVGltZW91dFByb21pc2UgPSBsb2FkVXJsUHJvbWlzZS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkgcmV0dXJuIGluaXRQcm9taXNlLnRpbWVvdXQodGltZW91dCwgbmV3IEVycm9yKFwiTG9hZGluZyBjb21wb25lbnQgdGltZWQgb3V0IGFmdGVyIFwiICsgdGltZW91dCArIFwiIG1pbGxpc2Vjb25kc1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uUmVuZGVyZWRQcm9taXNlID0gaW5pdFByb21pc2UudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRyaWdnZXIoRVZFTlQuUkVOREVSRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlOiBpbml0UHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZFVybFByb21pc2U6IGJ1aWxkVXJsUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbmRlclByb21pc2U6IG9uUmVuZGVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm94eUNvbnRhaW5lclByb21pc2U6IGdldFByb3h5Q29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRnJhbWVQcm9taXNlOiBvcGVuRnJhbWVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2U6IG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyUHJvbWlzZTogcmVuZGVyQ29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJvbWlzZTogb3BlblByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblByZXJlbmRlclByb21pc2U6IG9wZW5QcmVyZW5kZXJQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUHJvbWlzZTogc2V0U3RhdGVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXJlbmRlclByb21pc2U6IHByZXJlbmRlclByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFVybFByb21pc2U6IGxvYWRVcmxQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkV2luZG93TmFtZVByb21pc2U6IGJ1aWxkV2luZG93TmFtZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2luZG93TmFtZVByb21pc2U6IHNldFdpbmRvd05hbWVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yQ2xvc2VQcm9taXNlOiB3YXRjaEZvckNsb3NlUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpc3BsYXlQcm9taXNlOiBvbkRpc3BsYXlQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5CcmlkZ2VQcm9taXNlOiBvcGVuQnJpZGdlUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5UaW1lb3V0UHJvbWlzZTogcnVuVGltZW91dFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW5kZXJlZFByb21pc2U6IG9uUmVuZGVyZWRQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlUHJvbWlzZTogZGVsZWdhdGVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yVW5sb2FkUHJvbWlzZTogd2F0Y2hGb3JVbmxvYWRQcm9taXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5hbGwoWyBvbkVycm9yKGVyciksIGRlc3Ryb3koZXJyKSBdKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgICAgIHNldFByb3BzOiBzZXRQcm9wcyxcbiAgICAgICAgICAgICAgICBnZXRIZWxwZXJzOiBnZXRIZWxwZXJzLFxuICAgICAgICAgICAgICAgIGdldERlbGVnYXRlT3ZlcnJpZGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb3h5Q29udGFpbmVyOiBnZXRQcm94eUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU6IGhpZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyOiByZW5kZXJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJveHlXaW5kb3c6IGdldFByb3h5V2luZG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yVW5sb2FkOiB3YXRjaEZvclVubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRnJhbWU6IG9wZW5GcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJlcmVuZGVyRnJhbWU6IG9wZW5QcmVyZW5kZXJGcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXI6IHByZXJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBvcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QcmVyZW5kZXI6IG9wZW5QcmVyZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJveHlXaW46IHNldFByb3h5V2luXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVhY3QgPSB7XG4gICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24odGFnLCBwcm9wc0RlZiwgaW5pdCwgX3JlZikge1xuICAgICAgICAgICAgICAgIHZhciBSZWFjdCA9IF9yZWYuUmVhY3QsIFJlYWN0RE9NID0gX3JlZi5SZWFjdERPTTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfaW5oZXJpdHNMb29zZShfY2xhc3MsIF9SZWFjdCRDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcm90byA9IF9jbGFzcy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGluaXQoZXh0ZW5kKHt9LCB0aGlzLnByb3BzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVuZGVyKGVsLCBDT05URVhULklGUkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5wYXJlbnQgJiYgdGhpcy5zdGF0ZS5wYXJlbnQudXBkYXRlUHJvcHMoZXh0ZW5kKHt9LCB0aGlzLnByb3BzKSkuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgICAgICAgICAgICAgfShSZWFjdC5Db21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdnVlID0ge1xuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKHRhZywgcHJvcHNEZWYsIGluaXQsIFZ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBWdWUuY29tcG9uZW50KHRhZywge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbmhlcml0QXR0cnM6ICExLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuJGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBpbml0KF9leHRlbmRzKHt9LCB0aGlzLiRhdHRycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVuZGVyKGVsLCBDT05URVhULklGUkFNRSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy4kYXR0cnMgJiYgdGhpcy5wYXJlbnQudXBkYXRlUHJvcHMoX2V4dGVuZHMoe30sIHRoaXMuJGF0dHJzKSkuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVwOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhbmd1bGFyID0ge1xuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKHRhZywgcHJvcHNEZWYsIGluaXQsIG5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5nLm1vZHVsZSh0YWcsIFtdKS5kaXJlY3RpdmUodGFnLnJlcGxhY2UoLy0oW2Etel0pL2csIChmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSkpLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29wZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMocHJvcHNEZWYpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHNjb3BlW19PYmplY3Qka2V5czJbX2kyXV0gPSBcIj1cIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMgPSBcIj1cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsgXCIkc2NvcGVcIiwgXCIkZWxlbWVudFwiLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUFwcGx5KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIkYXBwbHlcIiAhPT0gJHNjb3BlLiRyb290LiQkcGhhc2UgJiYgXCIkZGlnZXN0XCIgIT09ICRzY29wZS4kcm9vdC4kJHBoYXNlKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZU9iamVjdCgkc2NvcGUucHJvcHMsIChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVtID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZW0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWZlQXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGluaXQoZ2V0UHJvcHMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UucmVuZGVyKCRlbGVtZW50WzBdLCBDT05URVhULklGUkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZVByb3BzKGdldFByb3BzKCkpLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFuZ3VsYXIyID0ge1xuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKHRhZywgcHJvcHNEZWYsIGluaXQsIF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgTmdNb2R1bGUgPSBfcmVmLk5nTW9kdWxlLCBFbGVtZW50UmVmID0gX3JlZi5FbGVtZW50UmVmLCBOZ1pvbmUgPSBfcmVmLk5nWm9uZTtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0UHJvcHMgPSBmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VPYmplY3QoX2V4dGVuZHMoe30sIGNvbXBvbmVudC5pbnRlcm5hbFByb3BzLCBjb21wb25lbnQucHJvcHMpLCAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlbSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzLCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC56b25lLnJ1bigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFwcGx5KF90aGlzLCBfYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIENvbXBvbmVudEluc3RhbmNlID0gKDAsIF9yZWYuQ29tcG9uZW50KSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czogWyBcInByb3BzXCIgXVxuICAgICAgICAgICAgICAgIH0pLkNsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IFsgRWxlbWVudFJlZiwgTmdab25lLCBmdW5jdGlvbihlbGVtZW50UmVmLCB6b25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgbmdPbkluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50ID0gaW5pdChnZXRQcm9wcyh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW5kZXIodGFyZ2V0RWxlbWVudCwgQ09OVEVYVC5JRlJBTUUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZ0RvQ2hlY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmICFmdW5jdGlvbihvYmoxLCBvYmoyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqMSkgaWYgKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkW2tleV0gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iajFba2V5XSAhPT0gb2JqMltrZXldKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9rZXkgaW4gb2JqMikgaWYgKCFjaGVja2VkW19rZXldKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSh0aGlzLl9wcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC51cGRhdGVQcm9wcyhnZXRQcm9wcyh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTmdNb2R1bGUoe1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFsgQ29tcG9uZW50SW5zdGFuY2UgXSxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogWyBDb21wb25lbnRJbnN0YW5jZSBdXG4gICAgICAgICAgICAgICAgfSkuQ2xhc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oKSB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBkZWZhdWx0Q29udGFpbmVyVGVtcGxhdGUoX3JlZikge1xuICAgICAgICAgICAgdmFyIHVpZCA9IF9yZWYudWlkLCBmcmFtZSA9IF9yZWYuZnJhbWUsIHByZXJlbmRlckZyYW1lID0gX3JlZi5wcmVyZW5kZXJGcmFtZSwgZG9jID0gX3JlZi5kb2MsIHByb3BzID0gX3JlZi5wcm9wcywgZXZlbnQgPSBfcmVmLmV2ZW50LCBfcmVmJGRpbWVuc2lvbnMgPSBfcmVmLmRpbWVuc2lvbnMsIHdpZHRoID0gX3JlZiRkaW1lbnNpb25zLndpZHRoLCBoZWlnaHQgPSBfcmVmJGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGZyYW1lICYmIHByZXJlbmRlckZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB1aWQpO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICAgICAgcHJvcHMuY3NwTm9uY2UgJiYgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgcHJvcHMuY3NwTm9uY2UpO1xuICAgICAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShcIlxcbiAgICAgICAgICAgICNcIiArIHVpZCArIFwiIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIiArIHdpZHRoICsgXCI7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIgKyBoZWlnaHQgKyBcIjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI1wiICsgdWlkICsgXCIgPiBpZnJhbWUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI1wiICsgdWlkICsgXCIgPiBpZnJhbWUuem9pZC1pbnZpc2libGUge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjXCIgKyB1aWQgKyBcIiA+IGlmcmFtZS56b2lkLXZpc2libGUge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgXCIpKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcmVyZW5kZXJGcmFtZSk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZS5jbGFzc0xpc3QuYWRkKFwiem9pZC12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoXCJ6b2lkLWludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5SRU5ERVJFRCwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiem9pZC12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZS5jbGFzc0xpc3QuYWRkKFwiem9pZC1pbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJ6b2lkLWludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcInpvaWQtdmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0cm95RWxlbWVudChwcmVyZW5kZXJGcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgZXZlbnQub24oRVZFTlQuUkVTSVpFLCAoZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dpZHRoID0gX3JlZjIud2lkdGgsIG5ld0hlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgbmV3V2lkdGggJiYgKGRpdi5zdHlsZS53aWR0aCA9IHRvQ1NTKG5ld1dpZHRoKSk7XG4gICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIG5ld0hlaWdodCAmJiAoZGl2LnN0eWxlLmhlaWdodCA9IHRvQ1NTKG5ld0hlaWdodCkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRQcmVyZW5kZXJUZW1wbGF0ZShfcmVmKSB7XG4gICAgICAgICAgICB2YXIgZG9jID0gX3JlZi5kb2MsIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICAgICAgICAgIHZhciBodG1sID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2MuY3JlYXRlRWxlbWVudChcImJvZHlcIik7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgICAgdmFyIHNwaW5uZXIgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZChcInNwaW5uZXJcIik7XG4gICAgICAgICAgICBwcm9wcy5jc3BOb25jZSAmJiBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBwcm9wcy5jc3BOb25jZSk7XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzcGlubmVyKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKFwiXFxuICAgICAgICAgICAgaHRtbCwgYm9keSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zcGlubmVyIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHZtaW47XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjB2bWluO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgzMywgMTI4LCAxOTIsIDAuOCk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gLjdzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAgICAgICAgICAgICAgIGZyb20ge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHRvIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgzNTlkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wc19kZWZhdWx0Tm9vcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNyY191dGlsX25vb3A7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwcm9wc19kZWNvcmF0ZU9uY2UgPSBmdW5jdGlvbihfcmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gb25jZShfcmVmLnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNsZWFuSW5zdGFuY2VzID0gY2xlYW51cCgpO1xuICAgICAgICB2YXIgY2xlYW5ab2lkID0gY2xlYW51cCgpO1xuICAgICAgICBmdW5jdGlvbiBjb21wb25lbnRfY29tcG9uZW50KG9wdHMpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSBvcHRpb25zLnRhZywgdXJsID0gb3B0aW9ucy51cmwsIGRvbWFpbiA9IG9wdGlvbnMuZG9tYWluLCBicmlkZ2VVcmwgPSBvcHRpb25zLmJyaWRnZVVybCwgX29wdGlvbnMkcHJvcHMgPSBvcHRpb25zLnByb3BzLCBwcm9wc0RlZiA9IHZvaWQgMCA9PT0gX29wdGlvbnMkcHJvcHMgPyB7fSA6IF9vcHRpb25zJHByb3BzLCBfb3B0aW9ucyRkaW1lbnNpb25zID0gb3B0aW9ucy5kaW1lbnNpb25zLCBkaW1lbnNpb25zID0gdm9pZCAwID09PSBfb3B0aW9ucyRkaW1lbnNpb25zID8ge30gOiBfb3B0aW9ucyRkaW1lbnNpb25zLCBfb3B0aW9ucyRhdXRvUmVzaXplID0gb3B0aW9ucy5hdXRvUmVzaXplLCBhdXRvUmVzaXplID0gdm9pZCAwID09PSBfb3B0aW9ucyRhdXRvUmVzaXplID8ge30gOiBfb3B0aW9ucyRhdXRvUmVzaXplLCBfb3B0aW9ucyRhbGxvd2VkUGFyZW4gPSBvcHRpb25zLmFsbG93ZWRQYXJlbnREb21haW5zLCBhbGxvd2VkUGFyZW50RG9tYWlucyA9IHZvaWQgMCA9PT0gX29wdGlvbnMkYWxsb3dlZFBhcmVuID8gXCIqXCIgOiBfb3B0aW9ucyRhbGxvd2VkUGFyZW4sIF9vcHRpb25zJGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMgPSB2b2lkIDAgPT09IF9vcHRpb25zJGF0dHJpYnV0ZXMgPyB7fSA6IF9vcHRpb25zJGF0dHJpYnV0ZXMsIF9vcHRpb25zJGRlZmF1bHRDb250ZSA9IG9wdGlvbnMuZGVmYXVsdENvbnRleHQsIGRlZmF1bHRDb250ZXh0ID0gdm9pZCAwID09PSBfb3B0aW9ucyRkZWZhdWx0Q29udGUgPyBDT05URVhULklGUkFNRSA6IF9vcHRpb25zJGRlZmF1bHRDb250ZSwgX29wdGlvbnMkY29udGFpbmVyVGVtID0gb3B0aW9ucy5jb250YWluZXJUZW1wbGF0ZSwgY29udGFpbmVyVGVtcGxhdGUgPSB2b2lkIDAgPT09IF9vcHRpb25zJGNvbnRhaW5lclRlbSA/IGRlZmF1bHRDb250YWluZXJUZW1wbGF0ZSA6IF9vcHRpb25zJGNvbnRhaW5lclRlbSwgX29wdGlvbnMkcHJlcmVuZGVyVGVtID0gb3B0aW9ucy5wcmVyZW5kZXJUZW1wbGF0ZSwgcHJlcmVuZGVyVGVtcGxhdGUgPSB2b2lkIDAgPT09IF9vcHRpb25zJHByZXJlbmRlclRlbSA/IGRlZmF1bHRQcmVyZW5kZXJUZW1wbGF0ZSA6IF9vcHRpb25zJHByZXJlbmRlclRlbSwgdmFsaWRhdGUgPSBvcHRpb25zLnZhbGlkYXRlLCBfb3B0aW9ucyRlbGlnaWJsZSA9IG9wdGlvbnMuZWxpZ2libGUsIGVsaWdpYmxlID0gdm9pZCAwID09PSBfb3B0aW9ucyRlbGlnaWJsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxpZ2libGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSA6IF9vcHRpb25zJGVsaWdpYmxlLCBfb3B0aW9ucyRsb2dnZXIgPSBvcHRpb25zLmxvZ2dlciwgbG9nZ2VyID0gdm9pZCAwID09PSBfb3B0aW9ucyRsb2dnZXIgPyB7XG4gICAgICAgICAgICAgICAgICAgIGluZm86IHNyY191dGlsX25vb3BcbiAgICAgICAgICAgICAgICB9IDogX29wdGlvbnMkbG9nZ2VyO1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGFnLnJlcGxhY2UoLy0vZywgXCJfXCIpO1xuICAgICAgICAgICAgICAgIHZhciBfZGltZW5zaW9ucyR3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGgsIHdpZHRoID0gdm9pZCAwID09PSBfZGltZW5zaW9ucyR3aWR0aCA/IFwiMzAwcHhcIiA6IF9kaW1lbnNpb25zJHdpZHRoLCBfZGltZW5zaW9ucyRoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodCwgaGVpZ2h0ID0gdm9pZCAwID09PSBfZGltZW5zaW9ucyRoZWlnaHQgPyBcIjE1MHB4XCIgOiBfZGltZW5zaW9ucyRoZWlnaHQ7XG4gICAgICAgICAgICAgICAgcHJvcHNEZWYgPSBfZXh0ZW5kcyh7fSwge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0RlbGVnYXRlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNXaW5kb3codmFsdWUpICYmICF3aW5kb3dfUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIFdpbmRvdyBvciBQcm94eVdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3codmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1dpbmRvd0Nsb3NlZCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihcIldpbmRvdyBpcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTYW1lRG9tYWluKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKFwiV2luZG93IGlzIG5vdCBzYW1lIGRvbWFpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldHVwX3RvUHJveHlXaW5kb3coX3JlZjMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERlY29yYXRlOiBmdW5jdGlvbihfcmVmNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNC5jbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWY1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY1LmZvY3VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY2LnJlc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREZWNvcmF0ZTogZnVuY3Rpb24oX3JlZjcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjcudWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjc3BOb25jZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY4LmdldFBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyZW50RG9tYWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERlY29yYXRlOiBmdW5jdGlvbihfcmVmOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmOS5nZXRQYXJlbnREb21haW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWYxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMTAuc2hvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREZWNvcmF0ZTogZnVuY3Rpb24oX3JlZjExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYxMS5oaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkRpc3BsYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVsZWdhdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0ZTogcHJvcHNfZGVjb3JhdGVPbmNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uUmVuZGVyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHByb3BzX2RlZmF1bHROb29wLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGU6IHByb3BzX2RlY29yYXRlT25jZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvblJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0ZTogcHJvcHNfZGVjb3JhdGVPbmNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVsZWdhdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0ZTogcHJvcHNfZGVjb3JhdGVPbmNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uRGVzdHJveToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dEZWxlZ2F0ZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBwcm9wc19kZWZhdWx0Tm9vcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29yYXRlOiBwcm9wc19kZWNvcmF0ZU9uY2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25SZXNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVsZWdhdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3BcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dEZWxlZ2F0ZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBwcm9wc19kZWZhdWx0Tm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERlY29yYXRlOiBmdW5jdGlvbihfcmVmMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjEyLm9uRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHByb3BzX2RlZmF1bHROb29wLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREZWNvcmF0ZTogZnVuY3Rpb24oX3JlZjEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYxMy5vblByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcHJvcHNEZWYpO1xuICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyVGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciB0ZW1wbGF0ZSByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VVcmw6IGJyaWRnZVVybCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNEZWY6IHByb3BzRGVmLFxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdXRvUmVzaXplOiBhdXRvUmVzaXplLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUGFyZW50RG9tYWluczogYWxsb3dlZFBhcmVudERvbWFpbnMsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZXh0OiBkZWZhdWx0Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVGVtcGxhdGU6IGNvbnRhaW5lclRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJUZW1wbGF0ZTogcHJlcmVuZGVyVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIGVsaWdpYmxlOiBlbGlnaWJsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KG9wdHMpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUsIHRhZyA9IG9wdGlvbnMudGFnLCBkZWZhdWx0Q29udGV4dCA9IG9wdGlvbnMuZGVmYXVsdENvbnRleHQsIHByb3BzRGVmID0gb3B0aW9ucy5wcm9wc0RlZiwgZWxpZ2libGUgPSBvcHRpb25zLmVsaWdpYmxlO1xuICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGxpYl9nbG9iYWxfZ2V0R2xvYmFsKCk7XG4gICAgICAgICAgICB2YXIgZHJpdmVyQ2FjaGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBpc0NoaWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBnZXRDaGlsZFBheWxvYWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbihwYXlsb2FkICYmIHBheWxvYWQudGFnID09PSB0YWcgJiYgcGF5bG9hZC5jaGlsZERvbWFpbiA9PT0gZ2V0RG9tYWluKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZWdpc3RlckNoaWxkID0gbWVtb2l6ZSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hpbGQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lnhwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdsb2JhbC5jb21wb25lbnRzW3RhZ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHJlZ2lzdGVyIFwiICsgbmFtZSArIFwiIGFzIGNoaWxkIC0gY2hpbGQgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wc0RlZiA9IG9wdGlvbnMucHJvcHNEZWYsIGF1dG9SZXNpemUgPSBvcHRpb25zLmF1dG9SZXNpemUsIGFsbG93ZWRQYXJlbnREb21haW5zID0gb3B0aW9ucy5hbGxvd2VkUGFyZW50RG9tYWlucztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvblByb3BIYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkUGF5bG9hZCA9IGdldENoaWxkUGF5bG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFBheWxvYWQpIHRocm93IG5ldyBFcnJvcihcIk5vIGNoaWxkIHBheWxvYWQgZm91bmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCI5XzBfNjNcIiAhPT0gY2hpbGRQYXlsb2FkLnZlcnNpb24pIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCB3aW5kb3cgaGFzIHpvaWQgdmVyc2lvbiBcIiArIGNoaWxkUGF5bG9hZC52ZXJzaW9uICsgXCIsIGNoaWxkIHdpbmRvdyBoYXMgdmVyc2lvbiA5XzBfNjNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdWlkID0gY2hpbGRQYXlsb2FkLnVpZCwgcGFyZW50RG9tYWluID0gY2hpbGRQYXlsb2FkLnBhcmVudERvbWFpbiwgZXhwb3J0cyA9IGNoaWxkUGF5bG9hZC5leHBvcnRzLCBjb250ZXh0ID0gY2hpbGRQYXlsb2FkLmNvbnRleHQsIHByb3BzUmVmID0gY2hpbGRQYXlsb2FkLnByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudENvbXBvbmVudFdpbmRvdyA9IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib3BlbmVyXCIgPT09IHR5cGUpIHJldHVybiBhc3NlcnRFeGlzdHMoXCJvcGVuZXJcIiwgZ2V0T3BlbmVyKHdpbmRvdykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInBhcmVudFwiID09PSB0eXBlICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIHJlZi5kaXN0YW5jZSkgcmV0dXJuIGFzc2VydEV4aXN0cyhcInBhcmVudFwiLCBmdW5jdGlvbih3aW4sIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBuICYmIChuID0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih3aW4sIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gbiAmJiAobiA9IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB1dGlsc19nZXRQYXJlbnQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0od2luLCBnZXREaXN0YW5jZUZyb21Ub3Aod2luKSAtIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0od2luZG93LCByZWYuZGlzdGFuY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJnbG9iYWxcIiA9PT0gdHlwZSAmJiByZWYudWlkICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIHJlZi51aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVpZCA9IHJlZi51aWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvciA9IGdldEFuY2VzdG9yKHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYW5jZXN0b3IpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgZmluZCBhbmNlc3RvciB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9nZXRBbGxGcmFtZXNJbldpbmRvdzIgPSBnZXRBbGxGcmFtZXNJbldpbmRvdyhhbmNlc3Rvcik7IF9pMiA8IF9nZXRBbGxGcmFtZXNJbldpbmRvdzIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyYW1lID0gX2dldEFsbEZyYW1lc0luV2luZG93MltfaTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2FtZURvbWFpbihmcmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2xvYmFsID0gbGliX2dsb2JhbF9nZXRHbG9iYWwoZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwgJiYgZ2xvYmFsLndpbmRvd3MgJiYgZ2xvYmFsLndpbmRvd3NbdWlkXSkgcmV0dXJuIGdsb2JhbC53aW5kb3dzW3VpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgXCIgKyB0eXBlICsgXCIgcGFyZW50IGNvbXBvbmVudCB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGNoaWxkUGF5bG9hZC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHNldHVwX2Rlc2VyaWFsaXplTWVzc2FnZShwYXJlbnRDb21wb25lbnRXaW5kb3csIHBhcmVudERvbWFpbiwgZXhwb3J0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdyA9IHBhcmVudC5zaG93LCBoaWRlID0gcGFyZW50LmhpZGUsIGNsb3NlID0gcGFyZW50LmNsb3NlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFBhcmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb21wb25lbnRXaW5kb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFBhcmVudERvbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnREb21haW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uUHJvcHMgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9wSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5vbkVycm9yKSByZXR1cm4gcGFyZW50Lm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzaXplID0gZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnJlc2l6ZS5maXJlQW5kRm9yZ2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IF9yZWYyLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF9yZWYyLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXRQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzLCBvcmlnaW4sIGlzVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBpc1VwZGF0ZSAmJiAoaXNVcGRhdGUgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRQcm9wcyA9IGZ1bmN0aW9uKHBhcmVudENvbXBvbmVudFdpbmRvdywgcHJvcHNEZWYsIHByb3BzLCBvcmlnaW4sIGhlbHBlcnMsIGlzVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gaXNVcGRhdGUgJiYgKGlzVXBkYXRlID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvcCB8fCAhcHJvcC5zYW1lRG9tYWluIHx8IG9yaWdpbiA9PT0gZ2V0RG9tYWluKHdpbmRvdykgJiYgaXNTYW1lRG9tYWluKHBhcmVudENvbXBvbmVudFdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBub3JtYWxpemVDaGlsZFByb3AocHJvcHNEZWYsIDAsIGtleSwgcHJvcHNba2V5XSwgaGVscGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wICYmIHByb3AuYWxpYXMgJiYgIXJlc3VsdFtwcm9wLmFsaWFzXSAmJiAocmVzdWx0W3Byb3AuYWxpYXNdID0gdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVcGRhdGUpIGZvciAodmFyIF9pNCA9IDAsIF9PYmplY3Qka2V5czQgPSBPYmplY3Qua2V5cyhwcm9wc0RlZik7IF9pNCA8IF9PYmplY3Qka2V5czQubGVuZ3RoOyBfaTQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9rZXkgPSBfT2JqZWN0JGtleXM0W19pNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYXNPd25Qcm9wZXJ0eShfa2V5KSB8fCAocmVzdWx0W19rZXldID0gbm9ybWFsaXplQ2hpbGRQcm9wKHByb3BzRGVmLCAwLCBfa2V5LCB2b2lkIDAsIGhlbHBlcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ocGFyZW50Q29tcG9uZW50V2luZG93LCBwcm9wc0RlZiwgbmV3UHJvcHMsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBoaWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBjaGlsZF9mb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiByZXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvcHM6IG9uUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBhcmVudDogZ2V0UGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnREb21haW46IGdldFBhcmVudERvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpc1VwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPyBleHRlbmQocHJvcHMsIG5vcm1hbGl6ZWRQcm9wcykgOiBwcm9wcyA9IG5vcm1hbGl6ZWRQcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBvblByb3BIYW5kbGVycy5sZW5ndGg7IF9pNCsrKSAoMCwgb25Qcm9wSGFuZGxlcnNbX2k0XSkocHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRQcm9wcyhuZXdQcm9wcywgcGFyZW50RG9tYWluLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGFsbG93ZWRQYXJlbnREb21haW5zLCBkb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoRG9tYWluKGFsbG93ZWRQYXJlbnREb21haW5zLCBkb21haW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGJlIHJlbmRlcmVkIGJ5IGRvbWFpbjogXCIgKyBkb21haW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbGxvd2VkUGFyZW50RG9tYWlucywgcGFyZW50RG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtXaW5kb3dLbm93bihwYXJlbnRDb21wb25lbnRXaW5kb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNoZWNrQ2xvc2UuZmlyZUFuZEZvcmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5jaGVja0Nsb3NlLmZpcmVBbmRGb3JnZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZVdpbmRvdyhwYXJlbnRDb21wb25lbnRXaW5kb3csIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvcHM6IHVwZGF0ZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjaGlsZF9kZXN0cm95XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfYXV0b1Jlc2l6ZSR3aWR0aCA9IGF1dG9SZXNpemUud2lkdGgsIHdpZHRoID0gdm9pZCAwICE9PSBfYXV0b1Jlc2l6ZSR3aWR0aCAmJiBfYXV0b1Jlc2l6ZSR3aWR0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXV0b1Jlc2l6ZSRoZWlnaHQgPSBhdXRvUmVzaXplLmhlaWdodCwgaGVpZ2h0ID0gdm9pZCAwICE9PSBfYXV0b1Jlc2l6ZSRoZWlnaHQgJiYgX2F1dG9SZXNpemUkaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hdXRvUmVzaXplJGVsZW1lbnQgPSBhdXRvUmVzaXplLmVsZW1lbnQsIGVsZW1lbnRSZWFkeSh2b2lkIDAgPT09IF9hdXRvUmVzaXplJGVsZW1lbnQgPyBcImJvZHlcIiA6IF9hdXRvUmVzaXplJGVsZW1lbnQpLmNhdGNoKHNyY191dGlsX25vb3ApLnRoZW4oKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkudGhlbigoZnVuY3Rpb24oX3JlZjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBfcmVmMy53aWR0aCwgaGVpZ2h0ID0gX3JlZjMuaGVpZ2h0LCBlbGVtZW50ID0gX3JlZjMuZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ICYmICh3aWR0aCB8fCBoZWlnaHQpICYmIGNvbnRleHQgIT09IENPTlRFWFQuUE9QVVAgJiYgb25SZXNpemUoZWxlbWVudCwgKGZ1bmN0aW9uKF9yZWY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggPyBfcmVmNC53aWR0aCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ID8gX3JlZjQuaGVpZ2h0IDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXV0b1Jlc2l6ZSR3aWR0aCwgd2lkdGgsIF9hdXRvUmVzaXplJGhlaWdodCwgaGVpZ2h0LCBfYXV0b1Jlc2l6ZSRlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcykgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyhmdW5jdGlvbihwYXJlbnRDb21wb25lbnRXaW5kb3csIGRvbWFpbiwgX3JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsIHVpZCA9IF9yZWYudWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwicmF3XCIgPT09IHR5cGUpIHByb3BzID0gX3JlZi52YWx1ZTsgZWxzZSBpZiAoXCJ1aWRcIiA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTYW1lRG9tYWluKHBhcmVudENvbXBvbmVudFdpbmRvdykpIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBjb21wb25lbnQgd2luZG93IGlzIG9uIGEgZGlmZmVyZW50IGRvbWFpbiAtIGV4cGVjdGVkIFwiICsgZ2V0RG9tYWluKCkgKyBcIiAtIGNhbiBub3QgcmV0cmlldmUgcHJvcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGxpYl9nbG9iYWxfZ2V0R2xvYmFsKHBhcmVudENvbXBvbmVudFdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBhc3NlcnRFeGlzdHMoXCJwcm9wc1wiLCBnbG9iYWwgJiYgZ2xvYmFsLnByb3BzW3VpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9wcykgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgcHJvcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXBfZGVzZXJpYWxpemVNZXNzYWdlKHBhcmVudENvbXBvbmVudFdpbmRvdywgZG9tYWluLCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ocGFyZW50Q29tcG9uZW50V2luZG93LCBwYXJlbnREb21haW4sIHByb3BzUmVmKSwgcGFyZW50RG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0ob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgX2VsaWdpYmxlID0gZWxpZ2libGUoe1xuICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHMgPSBwcm9wcyB8fCB7fVxuICAgICAgICAgICAgICAgIH0pLCBlbGlnaWJpbGl0eSA9IF9lbGlnaWJsZS5lbGlnaWJsZSwgcmVhc29uID0gX2VsaWdpYmxlLnJlYXNvbjtcbiAgICAgICAgICAgICAgICB2YXIgb25EZXN0cm95ID0gcHJvcHMub25EZXN0cm95O1xuICAgICAgICAgICAgICAgIHByb3BzLm9uRGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSAmJiBlbGlnaWJpbGl0eSAmJiBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkRlc3Ryb3kpIHJldHVybiBvbkRlc3Ryb3kuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHBhcmVudENvbXBvbmVudChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5pdCgpO1xuICAgICAgICAgICAgICAgIGVsaWdpYmlsaXR5ID8gcGFyZW50LnNldFByb3BzKHByb3BzKSA6IHByb3BzLm9uRGVzdHJveSAmJiBwcm9wcy5vbkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBjbGVhbkluc3RhbmNlcy5yZWdpc3RlcigoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5kZXN0cm95KGVyciB8fCBuZXcgRXJyb3IoXCJ6b2lkIGRlc3Ryb3llZCBhbGwgY29tcG9uZW50c1wiKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHZhciBfcmVuZGVyID0gZnVuY3Rpb24odGFyZ2V0LCBjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsaWdpYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihyZWFzb24gfHwgbmFtZSArIFwiIGNvbXBvbmVudCBpcyBub3QgZWxpZ2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5kZXN0cm95KGVycikudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2luZG93KHRhcmdldCkpIHRocm93IG5ldyBFcnJvcihcIk11c3QgcGFzcyB3aW5kb3cgdG8gcmVuZGVyVG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLndpbmRvdykgcmV0dXJuIHNldHVwX3RvUHJveHlXaW5kb3cocHJvcHMud2luZG93KS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCAhPT0gQ09OVEVYVC5JRlJBTUUgJiYgY29udGV4dCAhPT0gQ09OVEVYVC5QT1BVUCkgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGNvbnRleHQ6IFwiICsgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbihmaW5hbENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGNvbnRhaW5lciAmJiAhaXNFbGVtZW50KGNvbnRhaW5lcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgb3IgZWxlbWVudCBzZWxlY3RvciB0byBiZSBwYXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0ID09PSBDT05URVhULlBPUFVQKSByZXR1cm4gXCJib2R5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgZWxlbWVudCB0byBiZSBwYXNzZWQgdG8gcmVuZGVyIGlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZmluYWxDb250ZXh0LCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5yZW5kZXIodGFyZ2V0LCBjb250YWluZXIsIGZpbmFsQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmRlc3Ryb3koZXJyKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gX2V4dGVuZHMoe30sIHBhcmVudC5nZXRIZWxwZXJzKCksIHtcbiAgICAgICAgICAgICAgICAgICAgaXNFbGlnaWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpZ2liaWxpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbihfdGVtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYzJGRlY29yYXRlID0gKHZvaWQgMCA9PT0gX3RlbXAgPyB7fSA6IF90ZW1wKS5kZWNvcmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0KCh2b2lkIDAgPT09IF9yZWYzJGRlY29yYXRlID8gaWRlbnRpdHkgOiBfcmVmMyRkZWNvcmF0ZSkocHJvcHMpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVuZGVyKHdpbmRvdywgY29udGFpbmVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG86IGZ1bmN0aW9uKHRhcmdldCwgY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlbmRlcih0YXJnZXQsIGNvbnRhaW5lciwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGlnaWJpbGl0eSAmJiBpbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlZ2lzdGVyQ2hpbGQoKTtcbiAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWxsb3dEZWxlZ2F0ZUxpc3RlbmVyID0gb25fb24oXCJ6b2lkX2FsbG93X2RlbGVnYXRlX1wiICsgbmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZUxpc3RlbmVyID0gb25fb24oXCJ6b2lkX2RlbGVnYXRlX1wiICsgbmFtZSwgKGZ1bmN0aW9uKF9yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50Q29tcG9uZW50KG9wdGlvbnMsIF9yZWYuZGF0YS5vdmVycmlkZXMsIF9yZWYuc291cmNlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBjbGVhblpvaWQucmVnaXN0ZXIoYWxsb3dEZWxlZ2F0ZUxpc3RlbmVyLmNhbmNlbCk7XG4gICAgICAgICAgICAgICAgY2xlYW5ab2lkLnJlZ2lzdGVyKGRlbGVnYXRlTGlzdGVuZXIuY2FuY2VsKTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIGdsb2JhbC5jb21wb25lbnRzID0gZ2xvYmFsLmNvbXBvbmVudHMgfHwge307XG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmNvbXBvbmVudHNbdGFnXSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCByZWdpc3RlciBtdWx0aXBsZSBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgdGFnOiBcIiArIHRhZyk7XG4gICAgICAgICAgICBnbG9iYWwuY29tcG9uZW50c1t0YWddID0gITA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluaXQ6IGluaXQsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG4gICAgICAgICAgICAgICAgZHJpdmVyOiBmdW5jdGlvbihkcml2ZXJOYW1lLCBkZXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlcnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdDogcmVhY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyOiBhbmd1bGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdnVlOiB2dWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyMjogYW5ndWxhcjJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJzW2RyaXZlck5hbWVdKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBkcml2ZXIgZm9yIGZyYW1ld29yazogXCIgKyBkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZHJpdmVyQ2FjaGVbZHJpdmVyTmFtZV0gfHwgKGRyaXZlckNhY2hlW2RyaXZlck5hbWVdID0gZHJpdmVyc1tkcml2ZXJOYW1lXS5yZWdpc3Rlcih0YWcsIHByb3BzRGVmLCBpbml0LCBkZXApKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlckNhY2hlW2RyaXZlck5hbWVdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNDaGlsZDogaXNDaGlsZCxcbiAgICAgICAgICAgICAgICBjYW5SZW5kZXJUbzogZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kX3NlbmQod2luLCBcInpvaWRfYWxsb3dfZGVsZWdhdGVfXCIgKyBuYW1lKS50aGVuKChmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYyLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyQ2hpbGQ6IHJlZ2lzdGVyQ2hpbGRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbF9nZXRHbG9iYWwoKS5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxfZ2V0R2xvYmFsKCkuaW5pdGlhbGl6ZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgb24gPSAoX3JlZjMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb25fb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSkub24sIHNlbmQgPSBfcmVmMy5zZW5kLCAoZ2xvYmFsID0gZ2xvYmFsX2dldEdsb2JhbCgpKS5yZWNlaXZlTWVzc2FnZSA9IGdsb2JhbC5yZWNlaXZlTWVzc2FnZSB8fCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZV9yZWNlaXZlTWVzc2FnZShtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oX3JlZjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IF9yZWY1Lm9uLCBzZW5kID0gX3JlZjUuc2VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFN0b3JlKCkuZ2V0T3JTZXQoXCJwb3N0TWVzc2FnZUxpc3RlbmVyXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwibWVzc2FnZVwiLCAoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGV2ZW50LCBfcmVmNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gX3JlZjQub24sIHNlbmQgPSBfcmVmNC5zZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZXZlbnQuc291cmNlIHx8IGV2ZW50LnNvdXJjZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGV2ZW50Lm9yaWdpbiB8fCBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51bGxcIiA9PT0gb3JpZ2luICYmIChvcmlnaW4gPSBcImZpbGU6Ly9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9yaWdpbikgdGhyb3cgbmV3IEVycm9yKFwiUG9zdCBtZXNzYWdlIGRpZCBub3QgaGF2ZSBvcmlnaW4gZG9tYWluXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX3JlY2VpdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb25fb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihfcmVmOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gX3JlZjgub24sIHNlbmQgPSBfcmVmOC5zZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU3RvcmUoXCJidWlsdGluTGlzdGVuZXJzXCIpLmdldE9yU2V0KFwiaGVsbG9MaXN0ZW5lclwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gb24oXCJwb3N0cm9ib3RfaGVsbG9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGZ1bmN0aW9uKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVIZWxsb1Byb21pc2UoX3JlZjMuc291cmNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IF9yZWYzLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSUQ6IGdldEluc3RhbmNlSUQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0QW5jZXN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgJiYgc2F5SGVsbG8ocGFyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7fSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb25fb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfcmVmMywgb24sIHNlbmQsIGdsb2JhbDtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHZhciBjb21wID0gY29tcG9uZW50X2NvbXBvbmVudChvcHRpb25zKTtcbiAgICAgICAgICAgIHZhciBpbml0ID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcC5pbml0KHByb3BzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0LmRyaXZlciA9IGZ1bmN0aW9uKG5hbWUsIGRlcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wLmRyaXZlcihuYW1lLCBkZXApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGluaXQuaXNDaGlsZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wLmlzQ2hpbGQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0LmNhblJlbmRlclRvID0gZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2FuUmVuZGVyVG8od2luKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0Lmluc3RhbmNlcyA9IGNvbXAuaW5zdGFuY2VzO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY29tcC5yZWdpc3RlckNoaWxkKCk7XG4gICAgICAgICAgICBjaGlsZCAmJiAod2luZG93Lnhwcm9wcyA9IGluaXQueHByb3BzID0gY2hpbGQuZ2V0UHJvcHMoKSk7XG4gICAgICAgICAgICByZXR1cm4gaW5pdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95Q29tcG9uZW50cyhlcnIpIHtcbiAgICAgICAgICAgIHZhciBkZXN0cm95UHJvbWlzZSA9IGNsZWFuSW5zdGFuY2VzLmFsbChlcnIpO1xuICAgICAgICAgICAgY2xlYW5JbnN0YW5jZXMgPSBjbGVhbnVwKCk7XG4gICAgICAgICAgICByZXR1cm4gZGVzdHJveVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlc3Ryb3lBbGwgPSBkZXN0cm95Q29tcG9uZW50cztcbiAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50X2Rlc3Ryb3koZXJyKSB7XG4gICAgICAgICAgICBkZXN0cm95QWxsKCk7XG4gICAgICAgICAgICBkZWxldGUgd2luZG93Ll9fem9pZF85XzBfNjNfXztcbiAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAhZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZUxpc3RlbmVycyA9IGdsb2JhbFN0b3JlKFwicmVzcG9uc2VMaXN0ZW5lcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9yZXNwb25zZUxpc3RlbmVycyRrZTIgPSByZXNwb25zZUxpc3RlbmVycy5rZXlzKCk7IF9pMiA8IF9yZXNwb25zZUxpc3RlbmVycyRrZTIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc2ggPSBfcmVzcG9uc2VMaXN0ZW5lcnMka2UyW19pMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSByZXNwb25zZUxpc3RlbmVycy5nZXQoaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciAmJiAobGlzdGVuZXIuY2FuY2VsbGVkID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VMaXN0ZW5lcnMuZGVsKGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIChsaXN0ZW5lciA9IGdsb2JhbFN0b3JlKCkuZ2V0KFwicG9zdE1lc3NhZ2VMaXN0ZW5lclwiKSkgJiYgbGlzdGVuZXIuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuX19wb3N0X3JvYm90XzEwXzBfNDJfXztcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHJldHVybiBjbGVhblpvaWQuYWxsKGVycik7XG4gICAgICAgIH1cbiAgICB9IF0pO1xufSkpOyJdLCJuYW1lcyI6WyJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUFBLENBQUMsU0FBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0NBQ3pCLEtBQThELGlCQUFpQixPQUFPLEVBQUUsQ0FBMEosQ0FBQztDQUNuUCxDQUFDLENBQUMsV0FBVyxJQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBR0EsY0FBSSxHQUFHLFdBQVc7Q0FDeEQsSUFBSSxPQUFPLFNBQVMsT0FBTyxFQUFFO0NBQzdCLFFBQVEsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Q0FDbEMsUUFBUSxTQUFTLG1CQUFtQixDQUFDLFFBQVEsRUFBRTtDQUMvQyxZQUFZ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