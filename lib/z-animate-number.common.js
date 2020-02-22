module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f5dc87e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/z-animate-number/ZAnimateNumber.vue?vue&type=template&id=0eeb2a8e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v(" "+_vm._s(_vm.displayValue)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/z-animate-number/ZAnimateNumber.vue?vue&type=template&id=0eeb2a8e&scoped=true&

// CONCATENATED MODULE: ./packages/z-animate-number/utils.js
let lastTime = 0;
const prefixes = "webkit moz ms o".split(" "); // 各浏览器前缀

let request;
let cancel;

request = window.requestAnimationFrame;
cancel = window.cancelAnimationFrame;
let prefix;
// 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
for (let i = 0; i < prefixes.length; i++) {
  if (request && cancel) {
    break;
  }
  prefix = prefixes[i];
  request = request || window[prefix + "RequestAnimationFrame"];
  cancel =
    cancel ||
    window[prefix + "CancelAnimationFrame"] ||
    window[prefix + "CancelRequestAnimationFrame"];
}

// 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
if (!request || !cancel) {
  request = function(callback) {
    const currTime = new Date().getTime();
    // 为了使setTimteout的尽可能的接近每秒60帧的效果
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(() => {
      // eslint-disable-next-line
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  cancel = function(id) {
    window.clearTimeout(id);
  };
}

const requestAnimationFrame = request;
const cancelAnimationFrame = cancel;

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/z-animate-number/ZAnimateNumber.vue?vue&type=script&lang=ts&









/* harmony default export */ var ZAnimateNumbervue_type_script_lang_ts_ = ({
  name: "ZAnimateNumber",
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    decimals: {
      type: Number,
      default: 0,
      validator: val => val >= 0
    },
    decimal: {
      type: String,
      default: "."
    },
    separator: {
      type: String,
      default: ","
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    easingFn: {
      type: Function,
      default(t, b, c, d) {
        return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
      }
    }
  },
  data() {
    return {
      localStart: this.start,
      displayValue: "",
      printVal: null,
      paused: false,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null
    };
  },

  computed: {
    countDown() {
      return this.start > this.end;
    }
  },

  watch: {
    start() {
      if (this.autoplay) {
        this.run();
      }
    },
    end() {
      if (this.autoplay) {
        this.run();
      }
    }
  },

  created() {
    this.displayValue = this.formatNumber(this.start);
  },

  mounted() {
    if (this.autoplay) {
      this.run();
    }
    this.$emit("mountedCallback");
  },

  destroyed() {
    cancelAnimationFrame(this.rAF);
  },

  methods: {
    run() {
      this.localStart = this.start;
      this.startTime = null;
      this.localDuration = this.duration;
      this.paused = false;
      this.rAF = requestAnimationFrame(this.count);
    },

    pauseResume() {
      if (this.paused) {
        this.resume();
        this.paused = false;
      } else {
        this.pause();
        this.paused = true;
      }
    },

    pause() {
      cancelAnimationFrame(this.rAF);
    },

    resume() {
      this.startTime = null;
      this.localDuration = +(this.remaining || 0);
      this.localStart = +(this.printVal || 0);
      requestAnimationFrame(this.count);
    },

    reset() {
      this.startTime = null;
      cancelAnimationFrame(this.rAF);
      this.displayValue = this.formatNumber(this.start);
    },

    count(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      this.timestamp = timestamp;
      const progress = timestamp - (this.startTime || 0);
      this.remaining = this.localDuration - progress;
      if (this.useEasing) {
        if (this.countDown) {
          this.printVal =
            this.localStart -
            this.easingFn(
              progress,
              0,
              this.localStart - this.end,
              this.localDuration
            );
        } else {
          this.printVal = this.easingFn(
            progress,
            this.localStart,
            this.end - this.localStart,
            this.localDuration
          );
        }
      } else {
        if (this.countDown) {
          this.printVal =
            this.localStart -
            (this.localStart - this.end) * (progress / this.localDuration);
        } else {
          this.printVal =
            this.localStart +
            (this.end - this.localStart) * (progress / this.localDuration);
        }
      }
      if (this.countDown) {
        this.printVal =
          (this.printVal || 0) < this.end ? this.end : this.printVal;
      } else {
        this.printVal =
          (this.printVal || 0) > this.end ? this.end : this.printVal;
      }
      this.displayValue = this.formatNumber(this.printVal);
      if (progress < this.localDuration) {
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.$emit("callback");
      }
    },

    isNumber(val) {
      return !isNaN(parseFloat(val));
    },

    formatNumber(num) {
      num = num.toFixed(this.decimals);
      num += "";
      const x = num.split(".");
      let x1 = x[0];
      const x2 = x.length > 1 ? this.decimal + x[1] : "";
      const rgx = /(\d+)(\d{3})/;
      if (this.separator && !this.isNumber(this.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + this.separator + "$2");
        }
      }
      return this.prefix + x1 + x2 + this.suffix;
    }
  }
});

// CONCATENATED MODULE: ./packages/z-animate-number/ZAnimateNumber.vue?vue&type=script&lang=ts&
 /* harmony default export */ var z_animate_number_ZAnimateNumbervue_type_script_lang_ts_ = (ZAnimateNumbervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/z-animate-number/ZAnimateNumber.vue





/* normalize component */

var component = normalizeComponent(
  z_animate_number_ZAnimateNumbervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "0eeb2a8e",
  null
  
)

/* harmony default export */ var ZAnimateNumber = (component.exports);
// CONCATENATED MODULE: ./packages/z-animate-number/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
ZAnimateNumber.install = function(Vue) {
  Vue.component(ZAnimateNumber.name, ZAnimateNumber);
};

// 默认导出组件
/* harmony default export */ var z_animate_number = (ZAnimateNumber);

// CONCATENATED MODULE: ./packages/index.js


// 存储组件列表
const components = [z_animate_number];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const packages_ZAnimateNumber = z_animate_number;

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ZAnimateNumber: z_animate_number
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport ZAnimateNumber */__webpack_require__.d(__webpack_exports__, "ZAnimateNumber", function() { return packages_ZAnimateNumber; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=z-animate-number.common.js.map