"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(apiConfig) {
        var _a;
        if (apiConfig === void 0) { apiConfig = {}; }
        var _this = this;
        this.baseUrl = "https://api.newgra.ph/{basePath}";
        this.securityData = null;
        this.abortControllers = new Map();
        this.customFetch = function () {
            var fetchParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fetchParams[_i] = arguments[_i];
            }
            return fetch.apply(void 0, fetchParams);
        };
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = function (data) {
            _this.securityData = data;
        };
        this.contentFormatters = (_a = {},
            _a[ContentType.Json] = function (input) {
                return input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input;
            },
            _a[ContentType.FormData] = function (input) {
                return Object.keys(input || {}).reduce(function (formData, key) {
                    var property = input[key];
                    formData.append(key, property instanceof Blob
                        ? property
                        : typeof property === "object" && property !== null
                            ? JSON.stringify(property)
                            : "".concat(property));
                    return formData;
                }, new FormData());
            },
            _a[ContentType.UrlEncoded] = function (input) { return _this.toQueryString(input); },
            _a);
        this.createAbortSignal = function (cancelToken) {
            if (_this.abortControllers.has(cancelToken)) {
                var abortController_1 = _this.abortControllers.get(cancelToken);
                if (abortController_1) {
                    return abortController_1.signal;
                }
                return void 0;
            }
            var abortController = new AbortController();
            _this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = function (cancelToken) {
            var abortController = _this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                _this.abortControllers.delete(cancelToken);
            }
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, queryString, payloadFormatter, responseFormat;
            var _this = this;
            var body = _a.body, secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, baseUrl = _a.baseUrl, cancelToken = _a.cancelToken, params = __rest(_a, ["body", "secure", "path", "type", "query", "format", "baseUrl", "cancelToken"]);
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker(this.securityData)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        queryString = query && this.toQueryString(query);
                        payloadFormatter = this.contentFormatters[type || ContentType.Json];
                        responseFormat = format || requestParams.format;
                        return [2 /*return*/, this.customFetch("".concat(baseUrl || this.baseUrl || "").concat(path).concat(queryString ? "?".concat(queryString) : ""), __assign(__assign({}, requestParams), { headers: __assign(__assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0, body: typeof body === "undefined" || body === null ? null : payloadFormatter(body) })).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var r, data, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            r = response;
                                            r.data = null;
                                            r.error = null;
                                            if (!!responseFormat) return [3 /*break*/, 1];
                                            _a = r;
                                            return [3 /*break*/, 3];
                                        case 1: return [4 /*yield*/, response[responseFormat]()
                                                .then(function (data) {
                                                if (r.ok) {
                                                    r.data = data;
                                                }
                                                else {
                                                    r.error = data;
                                                }
                                                return r;
                                            })
                                                .catch(function (e) {
                                                r.error = e;
                                                return r;
                                            })];
                                        case 2:
                                            _a = _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            data = _a;
                                            if (cancelToken) {
                                                this.abortControllers.delete(cancelToken);
                                            }
                                            if (!response.ok)
                                                throw data;
                                            return [2 /*return*/, data];
                                    }
                                });
                            }); })];
                }
            });
        }); };
        Object.assign(this, apiConfig);
    }
    HttpClient.prototype.encodeQueryParam = function (key, value) {
        var encodedKey = encodeURIComponent(key);
        return "".concat(encodedKey, "=").concat(encodeURIComponent(typeof value === "number" ? value : "".concat(value)));
    };
    HttpClient.prototype.addQueryParam = function (query, key) {
        return this.encodeQueryParam(key, query[key]);
    };
    HttpClient.prototype.addArrayQueryParam = function (query, key) {
        var _this = this;
        var value = query[key];
        return value.map(function (v) { return _this.encodeQueryParam(key, v); }).join("&");
    };
    HttpClient.prototype.toQueryString = function (rawQuery) {
        var _this = this;
        var query = rawQuery || {};
        var keys = Object.keys(query).filter(function (key) { return "undefined" !== typeof query[key]; });
        return keys
            .map(function (key) { return (Array.isArray(query[key]) ? _this.addArrayQueryParam(query, key) : _this.addQueryParam(query, key)); })
            .join("&");
    };
    HttpClient.prototype.addQueryParams = function (rawQuery) {
        var queryString = this.toQueryString(rawQuery);
        return queryString ? "?".concat(queryString) : "";
    };
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        return __assign(__assign(__assign(__assign({}, this.baseApiParams), params1), (params2 || {})), { headers: __assign(__assign(__assign({}, (this.baseApiParams.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
/**
 * @title newgraph-api-eu-prod
 * @version 2025-01-16T16:16:47Z
 * @baseUrl https://api.newgra.ph/{basePath}
 */
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.infoAuth = {
            /**
             * No description
             *
             * @name InfoAuthList
             * @request GET:/info-auth
             * @secure
             */
            infoAuthList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info-auth", method: "GET", secure: true }, params));
            },
            /**
             * No description
             *
             * @name OptionsInfoAuth
             * @request OPTIONS:/info-auth
             */
            optionsInfoAuth: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info-auth", method: "OPTIONS" }, params));
            },
        };
        _this.mood = {
            /**
             * No description
             *
             * @name AccessGrantCreate
             * @request POST:/mood/access/grant
             * @secure
             */
            accessGrantCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/access/grant", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood
             * @request OPTIONS:/mood/access/grant
             */
            optionsMood: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/access/grant", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AccessGranteesList
             * @request GET:/mood/access/grantees
             */
            accessGranteesList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/access/grantees", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood2
             * @request OPTIONS:/mood/access/grantees
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/access/grantees", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AccessSubscribeCreate
             * @request POST:/mood/access/subscribe
             * @secure
             */
            accessSubscribeCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/access/subscribe", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood3
             * @request OPTIONS:/mood/access/subscribe
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/access/subscribe", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AttachUserUpdate
             * @request PUT:/mood/attach/user
             * @secure
             */
            attachUserUpdate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/user", method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood4
             * @request OPTIONS:/mood/attach/user
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/user", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AttachmentsList
             * @request GET:/mood/attachments
             * @secure
             */
            attachmentsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attachments", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood5
             * @request OPTIONS:/mood/attachments
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attachments", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name RateCreate
             * @request POST:/mood/rate
             * @secure
             */
            rateCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/rate", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood6
             * @request OPTIONS:/mood/rate
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/rate", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AttachPostUpdate
             * @request PUT:/mood/attach/post
             * @secure
             */
            attachPostUpdate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/post", method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood7
             * @request OPTIONS:/mood/attach/post
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/post", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name PostsList
             * @request GET:/mood/posts
             */
            postsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/posts", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood8
             * @request OPTIONS:/mood/posts
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/posts", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListTopList
             * @request GET:/mood/list/top
             */
            listTopList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/top", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood9
             * @request OPTIONS:/mood/list/top
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood9: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/top", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UploadCreate
             * @request POST:/mood/upload
             * @secure
             */
            uploadCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/upload", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood10
             * @request OPTIONS:/mood/upload
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood10: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/upload", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListSearchList
             * @request GET:/mood/list/search
             */
            listSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/search", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood11
             * @request OPTIONS:/mood/list/search
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood11: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/search", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListPublicList
             * @request GET:/mood/list/public
             */
            listPublicList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/public", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood12
             * @request OPTIONS:/mood/list/public
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood12: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/public", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name OneononeList
             * @request GET:/mood/oneonone
             * @secure
             */
            oneononeList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/oneonone", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood13
             * @request OPTIONS:/mood/oneonone
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood13: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/oneonone", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AttachMoodUpdate
             * @request PUT:/mood/attach/mood
             * @secure
             */
            attachMoodUpdate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/mood", method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood14
             * @request OPTIONS:/mood/attach/mood
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood14: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/mood", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AttachmentsPublicList
             * @request GET:/mood/attachmentsPublic
             */
            attachmentsPublicList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attachmentsPublic", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood15
             * @request OPTIONS:/mood/attachmentsPublic
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood15: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attachmentsPublic", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name MoodList
             * @request GET:/mood
             */
            moodList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name MoodUpdate
             * @request PUT:/mood
             * @secure
             */
            moodUpdate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name MoodCreate
             * @request POST:/mood
             * @secure
             */
            moodCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood16
             * @request OPTIONS:/mood
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood16: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "OPTIONS" }, params));
            },
        };
        _this.post = {
            /**
             * No description
             *
             * @name PostList
             * @request GET:/post
             */
            postList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name PostUpdate
             * @request PUT:/post
             * @secure
             */
            postUpdate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name PostCreate
             * @request POST:/post
             * @secure
             */
            postCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name PostDelete
             * @request DELETE:/post
             * @secure
             */
            postDelete: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "DELETE", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost
             * @request OPTIONS:/post
             */
            optionsPost: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name RateCreate
             * @request POST:/post/rate
             * @secure
             */
            rateCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/rate", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost2
             * @request OPTIONS:/post/rate
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/rate", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListSearchList
             * @request GET:/post/list/search
             * @secure
             */
            listSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/search", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost3
             * @request OPTIONS:/post/list/search
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/search", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListTagsSearchList
             * @request GET:/post/list/tags-search
             * @secure
             */
            listTagsSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/tags-search", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost4
             * @request OPTIONS:/post/list/tags-search
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/tags-search", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListPublicList
             * @request GET:/post/list/public
             */
            listPublicList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/public", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost5
             * @request OPTIONS:/post/list/public
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/public", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UtilsRemoteMetaProxyList
             * @request GET:/post/utils/remote-meta-proxy
             * @secure
             */
            utilsRemoteMetaProxyList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/utils/remote-meta-proxy", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost6
             * @request OPTIONS:/post/utils/remote-meta-proxy
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/utils/remote-meta-proxy", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ReportCreate
             * @request POST:/post/report
             * @secure
             */
            reportCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/report", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost7
             * @request OPTIONS:/post/report
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/report", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UploadCreate
             * @request POST:/post/upload
             * @secure
             */
            uploadCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/upload", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost8
             * @request OPTIONS:/post/upload
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/upload", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListTopList
             * @request GET:/post/list/top
             */
            listTopList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/top", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost9
             * @request OPTIONS:/post/list/top
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost9: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/top", method: "OPTIONS" }, params));
            },
        };
        _this.user = {
            /**
             * No description
             *
             * @name ActivityManifestList
             * @request GET:/user/activityManifest
             * @secure
             */
            activityManifestList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/activityManifest", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser
             * @request OPTIONS:/user/activityManifest
             */
            optionsUser: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/activityManifest", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UserUploadAvatarCreate
             * @request POST:/user/userUpload/avatar
             * @secure
             */
            userUploadAvatarCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userUpload/avatar", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser2
             * @request OPTIONS:/user/userUpload/avatar
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userUpload/avatar", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name CurrentList
             * @request GET:/user/current
             * @secure
             */
            currentList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/current", method: "GET", secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser3
             * @request OPTIONS:/user/current
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/current", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name MoodsList
             * @request GET:/user/moods
             */
            moodsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/moods", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser4
             * @request OPTIONS:/user/moods
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/moods", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name RatedOutUsersRequestsList
             * @request GET:/user/rated/out/users/requests
             * @secure
             */
            ratedOutUsersRequestsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/users/requests", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser5
             * @request OPTIONS:/user/rated/out/users/requests
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/users/requests", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name RatedInList
             * @request GET:/user/rated/in
             * @secure
             */
            ratedInList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/in", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser6
             * @request OPTIONS:/user/rated/in
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/in", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name PreupdateList
             * @request GET:/user/preupdate
             */
            preupdateList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/preupdate", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser7
             * @request OPTIONS:/user/preupdate
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/preupdate", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name InviteCreate
             * @request POST:/user/invite
             * @secure
             */
            inviteCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser8
             * @request OPTIONS:/user/invite
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name GetSpecialFolderList
             * @request GET:/user/getSpecialFolder
             * @secure
             */
            getSpecialFolderList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/getSpecialFolder", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser9
             * @request OPTIONS:/user/getSpecialFolder
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser9: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/getSpecialFolder", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListSearchList
             * @request GET:/user/list/search
             */
            listSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/search", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser10
             * @request OPTIONS:/user/list/search
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser10: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/search", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name InviteHashList
             * @request GET:/user/invite/hash
             */
            inviteHashList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite/hash", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser11
             * @request OPTIONS:/user/invite/hash
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser11: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite/hash", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name SearchexternalList
             * @request GET:/user/searchexternal
             * @secure
             */
            searchexternalList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/searchexternal", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser12
             * @request OPTIONS:/user/searchexternal
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser12: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/searchexternal", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name PreregisterCreate
             * @request POST:/user/preregister
             * @secure
             */
            preregisterCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/preregister", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser13
             * @request OPTIONS:/user/preregister
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser13: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/preregister", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name InvitorList
             * @request GET:/user/invitor
             * @secure
             */
            invitorList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitor", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser14
             * @request OPTIONS:/user/invitor
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser14: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitor", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name AvailabilityList
             * @request GET:/user/availability
             */
            availabilityList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/availability", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser15
             * @request OPTIONS:/user/availability
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser15: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/availability", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UserList
             * @request GET:/user
             */
            userList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name UserUpdate
             * @request PUT:/user
             * @secure
             */
            userUpdate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name UserCreate
             * @request POST:/user
             * @secure
             */
            userCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name UserDelete
             * @request DELETE:/user
             * @secure
             */
            userDelete: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "DELETE", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser16
             * @request OPTIONS:/user
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser16: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ClaimWattsCreate
             * @request POST:/user/claimWatts
             * @secure
             */
            claimWattsCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/claimWatts", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser17
             * @request OPTIONS:/user/claimWatts
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser17: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/claimWatts", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name StakeCreate
             * @request POST:/user/stake
             * @secure
             */
            stakeCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/stake", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser18
             * @request OPTIONS:/user/stake
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser18: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/stake", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UserRateCreate
             * @request POST:/user/userRate
             * @secure
             */
            userRateCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userRate", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser19
             * @request OPTIONS:/user/userRate
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser19: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userRate", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ActivityStreamList
             * @request GET:/user/activityStream
             * @secure
             */
            activityStreamList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/activityStream", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser20
             * @request OPTIONS:/user/activityStream
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser20: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/activityStream", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name SyncContactsCreate
             * @request POST:/user/syncContacts
             * @secure
             */
            syncContactsCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/syncContacts", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser21
             * @request OPTIONS:/user/syncContacts
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser21: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/syncContacts", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ListTopList
             * @request GET:/user/list/top
             * @secure
             */
            listTopList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/top", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser22
             * @request OPTIONS:/user/list/top
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser22: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/top", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name PrecreateCreate
             * @request POST:/user/precreate
             */
            precreateCreate: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/precreate", method: "POST" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser23
             * @request OPTIONS:/user/precreate
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser23: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/precreate", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UserRateRequestCreate
             * @request POST:/user/userRate/request
             * @secure
             */
            userRateRequestCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userRate/request", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser24
             * @request OPTIONS:/user/userRate/request
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser24: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userRate/request", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name TransferCreate
             * @request POST:/user/transfer
             * @secure
             */
            transferCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/transfer", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser25
             * @request OPTIONS:/user/transfer
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser25: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/transfer", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name RatedOutPostsList
             * @request GET:/user/rated/out/posts
             * @secure
             */
            ratedOutPostsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/posts", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser26
             * @request OPTIONS:/user/rated/out/posts
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser26: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/posts", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name UserUploadCoverCreate
             * @request POST:/user/userUpload/cover
             * @secure
             */
            userUploadCoverCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userUpload/cover", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser27
             * @request OPTIONS:/user/userUpload/cover
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser27: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userUpload/cover", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name GrantsListList
             * @request GET:/user/grants/list
             * @secure
             */
            grantsListList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/grants/list", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser28
             * @request OPTIONS:/user/grants/list
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser28: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/grants/list", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name InviteesList
             * @request GET:/user/invitees
             * @secure
             */
            inviteesList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitees", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser29
             * @request OPTIONS:/user/invitees
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser29: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitees", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ClaimWattsAllList
             * @request GET:/user/claimWattsAll
             */
            claimWattsAllList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/claimWattsAll", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser30
             * @request OPTIONS:/user/claimWattsAll
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser30: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/claimWattsAll", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name HistoryList
             * @request GET:/user/history
             */
            historyList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/history", method: "GET", query: query }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser31
             * @request OPTIONS:/user/history
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser31: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/history", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name RatedOutUsersList
             * @request GET:/user/rated/out/users
             * @secure
             */
            ratedOutUsersList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/users", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser32
             * @request OPTIONS:/user/rated/out/users
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser32: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/users", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name BadgeListList
             * @request GET:/user/badge/list
             */
            badgeListList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/badge/list", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser33
             * @request OPTIONS:/user/badge/list
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser33: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/badge/list", method: "OPTIONS" }, params));
            },
        };
        _this.payment = {
            /**
             * No description
             *
             * @name StripeCheckoutSessionCreate
             * @request POST:/payment/stripe/checkoutSession
             * @secure
             */
            stripeCheckoutSessionCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/checkoutSession", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment
             * @request OPTIONS:/payment/stripe/checkoutSession
             */
            optionsPayment: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/checkoutSession", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name StripeWebhookCreate
             * @request POST:/payment/stripe/webhook
             */
            stripeWebhookCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/webhook", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment2
             * @request OPTIONS:/payment/stripe/webhook
             * @originalName optionsPayment
             * @duplicate
             */
            optionsPayment2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/webhook", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name StripeIntentCreate
             * @request POST:/payment/stripe/intent
             * @secure
             */
            stripeIntentCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/intent", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment3
             * @request OPTIONS:/payment/stripe/intent
             * @originalName optionsPayment
             * @duplicate
             */
            optionsPayment3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/intent", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name StripeSubscriptionPaymentCreate
             * @request POST:/payment/stripe/subscription/payment
             * @secure
             */
            stripeSubscriptionPaymentCreate: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/subscription/payment", method: "POST", secure: true }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment4
             * @request OPTIONS:/payment/stripe/subscription/payment
             * @originalName optionsPayment
             * @duplicate
             */
            optionsPayment4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/subscription/payment", method: "OPTIONS" }, params));
            },
        };
        _this.auth = {
            /**
             * No description
             *
             * @name CallbackPathList
             * @request GET:/auth/callback/{path+}
             */
            callbackPathList: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/callback/{path+}", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth
             * @request OPTIONS:/auth/callback/{path+}
             */
            optionsAuth: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/callback/{path+}", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name ProviderPathList
             * @request GET:/auth/provider/{path+}
             */
            providerPathList: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/provider/{path+}", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth2
             * @request OPTIONS:/auth/provider/{path+}
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth2: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/provider/{path+}", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name InviteesList
             * @request GET:/auth/invitees
             */
            inviteesList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/invitees", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth3
             * @request OPTIONS:/auth/invitees
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/invitees", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name EvmGenerateTokenCreate
             * @request POST:/auth/evm/generateToken
             */
            evmGenerateTokenCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/evm/generateToken", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth4
             * @request OPTIONS:/auth/evm/generateToken
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/evm/generateToken", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name EstimateList
             * @request GET:/auth/estimate
             */
            estimateList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/estimate", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth5
             * @request OPTIONS:/auth/estimate
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/estimate", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name InstagramCreate
             * @request POST:/auth/instagram
             * @secure
             */
            instagramCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/instagram", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth6
             * @request OPTIONS:/auth/instagram
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/instagram", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name EvmVerifyAccountCreate
             * @request POST:/auth/evm/verifyAccount
             * @secure
             */
            evmVerifyAccountCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/evm/verifyAccount", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth7
             * @request OPTIONS:/auth/evm/verifyAccount
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/evm/verifyAccount", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name OnesignalList
             * @request GET:/auth/onesignal
             * @secure
             */
            onesignalList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/onesignal", method: "GET", secure: true }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth8
             * @request OPTIONS:/auth/onesignal
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/onesignal", method: "OPTIONS" }, params));
            },
        };
        _this.info = {
            /**
             * No description
             *
             * @name InfoList
             * @request GET:/info
             */
            infoList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsInfo
             * @request OPTIONS:/info
             */
            optionsInfo: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info", method: "OPTIONS" }, params));
            },
        };
        _this.activation = {
            /**
             * No description
             *
             * @name AddressBadgesOracleList
             * @request GET:/activation/address-badges/oracle
             */
            addressBadgesOracleList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/address-badges/oracle", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsActivation
             * @request OPTIONS:/activation/address-badges/oracle
             */
            optionsActivation: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/address-badges/oracle", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name EvmCheckBalanceCreate
             * @request POST:/activation/evm/checkBalance
             * @secure
             */
            evmCheckBalanceCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/evm/checkBalance", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsActivation2
             * @request OPTIONS:/activation/evm/checkBalance
             * @originalName optionsActivation
             * @duplicate
             */
            optionsActivation2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/evm/checkBalance", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name EstimateWattsList
             * @request GET:/activation/estimate/watts
             */
            estimateWattsList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/estimate/watts", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsActivation3
             * @request OPTIONS:/activation/estimate/watts
             * @originalName optionsActivation
             * @duplicate
             */
            optionsActivation3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/estimate/watts", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name TokenHolderOrderOracleList
             * @request GET:/activation/token-holder-order/oracle
             */
            tokenHolderOrderOracleList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/token-holder-order/oracle", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsActivation4
             * @request OPTIONS:/activation/token-holder-order/oracle
             * @originalName optionsActivation
             * @duplicate
             */
            optionsActivation4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/activation/token-holder-order/oracle", method: "OPTIONS" }, params));
            },
        };
        _this.upload = {
            /**
             * No description
             *
             * @name NodeCreate
             * @request POST:/upload/node
             * @secure
             */
            nodeCreate: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/upload/node", method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUpload
             * @request OPTIONS:/upload/node
             */
            optionsUpload: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/upload/node", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name GetUpload
             * @request GET:/upload/url
             */
            getUpload: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/upload/url", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name GetUpload2
             * @request GET:/upload/zip
             * @originalName getUpload
             * @duplicate
             */
            getUpload2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/upload/zip", method: "GET" }, params));
            },
        };
        _this.search = {
            /**
             * No description
             *
             * @name SemanticList
             * @request GET:/search/semantic
             */
            semanticList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/search/semantic", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsSearch
             * @request OPTIONS:/search/semantic
             */
            optionsSearch: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/search/semantic", method: "OPTIONS" }, params));
            },
            /**
             * No description
             *
             * @name CreativeList
             * @request GET:/search/creative
             * @secure
             */
            creativeList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/search/creative", method: "GET", query: query, secure: true, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsSearch2
             * @request OPTIONS:/search/creative
             * @originalName optionsSearch
             * @duplicate
             */
            optionsSearch2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/search/creative", method: "OPTIONS" }, params));
            },
        };
        _this.folder = {
            /**
             * No description
             *
             * @name FolderList
             * @request GET:/folder
             */
            folderList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/folder", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsFolder
             * @request OPTIONS:/folder
             */
            optionsFolder: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/folder", method: "OPTIONS" }, params));
            },
        };
        return _this;
    }
    return Api;
}(HttpClient));
exports.Api = Api;
