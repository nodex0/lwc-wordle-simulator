(function () {
  'use strict';

  /* proxy-compat-disable */

  /**
   * Copyright (C) 2018 salesforce.com, inc.
   */

  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  function invariant(value, msg) {
    if (!value) {
      throw new Error(`Invariant Violation: ${msg}`);
    }
  }

  function isTrue$1(value, msg) {
    if (!value) {
      throw new Error(`Assert Violation: ${msg}`);
    }
  }

  function isFalse$1(value, msg) {
    if (value) {
      throw new Error(`Assert Violation: ${msg}`);
    }
  }

  function fail(msg) {
    throw new Error(msg);
  }

  var assert = /*#__PURE__*/Object.freeze({
    __proto__: null,
    invariant: invariant,
    isTrue: isTrue$1,
    isFalse: isFalse$1,
    fail: fail
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  const {
    assign,
    create,
    defineProperties,
    defineProperty,
    freeze,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
    getOwnPropertyNames: getOwnPropertyNames$1,
    getPrototypeOf: getPrototypeOf$1,
    hasOwnProperty: hasOwnProperty$1,
    isFrozen,
    keys,
    seal,
    setPrototypeOf
  } = Object;
  const {
    isArray: isArray$1
  } = Array;
  const {
    filter: ArrayFilter,
    find: ArrayFind,
    indexOf: ArrayIndexOf,
    join: ArrayJoin,
    map: ArrayMap,
    push: ArrayPush$1,
    reduce: ArrayReduce,
    reverse: ArrayReverse,
    slice: ArraySlice,
    splice: ArraySplice,
    unshift: ArrayUnshift,
    forEach
  } = Array.prototype;
  const {
    fromCharCode: StringFromCharCode
  } = String;
  const {
    charCodeAt: StringCharCodeAt,
    replace: StringReplace,
    slice: StringSlice,
    toLowerCase: StringToLowerCase
  } = String.prototype;

  function isUndefined$1(obj) {
    return obj === undefined;
  }

  function isNull(obj) {
    return obj === null;
  }

  function isTrue(obj) {
    return obj === true;
  }

  function isFalse(obj) {
    return obj === false;
  }

  function isFunction$1(obj) {
    return typeof obj === 'function';
  }

  function isObject(obj) {
    return typeof obj === 'object';
  }

  function isString(obj) {
    return typeof obj === 'string';
  }

  function isNumber(obj) {
    return typeof obj === 'number';
  }

  function noop() {
    /* Do nothing */
  }

  const OtS$1 = {}.toString;

  function toString$1(obj) {
    if (obj && obj.toString) {
      // Arrays might hold objects with "null" prototype So using
      // Array.prototype.toString directly will cause an error Iterate through
      // all the items and handle individually.
      if (isArray$1(obj)) {
        return ArrayJoin.call(ArrayMap.call(obj, toString$1), ',');
      }

      return obj.toString();
    } else if (typeof obj === 'object') {
      return OtS$1.call(obj);
    } else {
      return obj + '';
    }
  }

  function getPropertyDescriptor(o, p) {
    do {
      const d = getOwnPropertyDescriptor$1(o, p);

      if (!isUndefined$1(d)) {
        return d;
      }

      o = getPrototypeOf$1(o);
    } while (o !== null);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  /**
   * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
   * ariaGrabbed) are deprecated:
   * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
   *
   * The above list of 46 aria attributes is consistent with the following resources:
   * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
   * https://wicg.github.io/aom/spec/aria-reflection.html
   */


  const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];

  const {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  } = /*@__PURE__*/(() => {
    const AriaAttrNameToPropNameMap = create(null);
    const AriaPropNameToAttrNameMap = create(null); // Synthetic creation of all AOM property descriptors for Custom Elements

    forEach.call(AriaPropertyNames, propName => {
      const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
      AriaAttrNameToPropNameMap[attrName] = propName;
      AriaPropNameToAttrNameMap[propName] = attrName;
    });
    return {
      AriaAttrNameToPropNameMap,
      AriaPropNameToAttrNameMap
    };
  })();
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // Inspired from: https://mathiasbynens.be/notes/globalthis


  const _globalThis = /*@__PURE__*/function () {
    // On recent browsers, `globalThis` is already defined. In this case return it directly.
    if (typeof globalThis === 'object') {
      return globalThis;
    }

    let _globalThis;

    try {
      // eslint-disable-next-line no-extend-native
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this;
        },
        configurable: true
      }); // __magic__ is undefined in Safari 10 and IE10 and older.
      // @ts-ignore
      // eslint-disable-next-line no-undef

      _globalThis = __magic__; // @ts-ignore

      delete Object.prototype.__magic__;
    } catch (ex) {// In IE8, Object.defineProperty only works on DOM objects.
    } finally {
      // If the magic above fails for some reason we assume that we are in a legacy browser.
      // Assume `window` exists in this case.
      if (typeof _globalThis === 'undefined') {
        // @ts-ignore
        _globalThis = window;
      }
    }

    return _globalThis;
  }();
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const KEY__IS_NATIVE_SHADOW_ROOT_DEFINED = '$isNativeShadowRootDefined$';
  const KEY__SHADOW_RESOLVER = '$shadowResolver$';
  const KEY__SHADOW_TOKEN = '$shadowToken$';
  const KEY__SYNTHETIC_MODE = '$$lwc-synthetic-mode';
  const KEY__SCOPED_CSS = '$scoped$';
  /**
   * Map composed of properties to attributes not following the HTML property to attribute mapping
   * convention.
   */

  const NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING = new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
  /**
   * Map associating previously transformed HTML property into HTML attribute.
   */

  const CACHED_PROPERTY_ATTRIBUTE_MAPPING = new Map();

  function htmlPropertyToAttribute(propName) {
    const ariaAttributeName = AriaPropNameToAttrNameMap[propName];

    if (!isUndefined$1(ariaAttributeName)) {
      return ariaAttributeName;
    }

    const specialAttributeName = NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING.get(propName);

    if (!isUndefined$1(specialAttributeName)) {
      return specialAttributeName;
    }

    const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);

    if (!isUndefined$1(cachedAttributeName)) {
      return cachedAttributeName;
    }

    let attributeName = '';

    for (let i = 0, len = propName.length; i < len; i++) {
      const code = StringCharCodeAt.call(propName, i);

      if (code >= 65 && // "A"
      code <= 90 // "Z"
      ) {
        attributeName += '-' + StringFromCharCode(code + 32);
      } else {
        attributeName += StringFromCharCode(code);
      }
    }

    CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
    return attributeName;
  }

  const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
  const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // Increment whenever the LWC template compiler changes

  const LWC_VERSION = "2.11.3";
  const LWC_VERSION_COMMENT_REGEX = /\/\*LWC compiler v([\d.]+)\*\/\s*}/;
  /** version: 2.11.3 */

  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  function detect(propName) {
    return Object.getOwnPropertyDescriptor(Element.prototype, propName) === undefined;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const nodeToAriaPropertyValuesMap = new WeakMap();

  function getAriaPropertyMap(elm) {
    let map = nodeToAriaPropertyValuesMap.get(elm);

    if (map === undefined) {
      map = {};
      nodeToAriaPropertyValuesMap.set(elm, map);
    }

    return map;
  }

  function getNormalizedAriaPropertyValue(value) {
    return value == null ? null : String(value);
  }

  function createAriaPropertyPropertyDescriptor(propName, attrName) {
    return {
      get() {
        const map = getAriaPropertyMap(this);

        if (hasOwnProperty$1.call(map, propName)) {
          return map[propName];
        } // otherwise just reflect what's in the attribute


        return this.hasAttribute(attrName) ? this.getAttribute(attrName) : null;
      },

      set(newValue) {
        const normalizedValue = getNormalizedAriaPropertyValue(newValue);
        const map = getAriaPropertyMap(this);
        map[propName] = normalizedValue; // reflect into the corresponding attribute

        if (newValue === null) {
          this.removeAttribute(attrName);
        } else {
          this.setAttribute(attrName, newValue);
        }
      },

      configurable: true,
      enumerable: true
    };
  }

  function patch$1(propName) {
    // Typescript is inferring the wrong function type for this particular
    // overloaded method: https://github.com/Microsoft/TypeScript/issues/27972
    // @ts-ignore type-mismatch
    const attrName = AriaPropNameToAttrNameMap[propName];
    const descriptor = createAriaPropertyPropertyDescriptor(propName, attrName);
    Object.defineProperty(Element.prototype, propName, descriptor);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const ElementPrototypeAriaPropertyNames = keys(AriaPropNameToAttrNameMap);

  for (let i = 0, len = ElementPrototypeAriaPropertyNames.length; i < len; i += 1) {
    const propName = ElementPrototypeAriaPropertyNames[i];

    if (detect(propName)) {
      patch$1(propName);
    }
  }

  if (!_globalThis.lwcRuntimeFlags) {
    Object.defineProperty(_globalThis, 'lwcRuntimeFlags', {
      value: create(null)
    });
  }

  const runtimeFlags = _globalThis.lwcRuntimeFlags;
  /** version: 2.11.3 */

  /* proxy-compat-disable */

  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  let nextTickCallbackQueue = [];
  const SPACE_CHAR = 32;
  const EmptyObject = seal(create(null));
  const EmptyArray = seal([]);

  function flushCallbackQueue() {
    {
      if (nextTickCallbackQueue.length === 0) {
        throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
      }
    }

    const callbacks = nextTickCallbackQueue;
    nextTickCallbackQueue = []; // reset to a new queue

    for (let i = 0, len = callbacks.length; i < len; i += 1) {
      callbacks[i]();
    }
  }

  function addCallbackToNextTick(callback) {
    {
      if (!isFunction$1(callback)) {
        throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
      }
    }

    if (nextTickCallbackQueue.length === 0) {
      Promise.resolve().then(flushCallbackQueue);
    }

    ArrayPush$1.call(nextTickCallbackQueue, callback);
  }
  // https://github.com/vuejs/vue/blob/531371b818b0e31a989a06df43789728f23dc4e8/src/platforms/web/util/style.js#L5-L16


  const DECLARATION_DELIMITER = /;(?![^(]*\))/g;
  const PROPERTY_DELIMITER = /:(.+)/;

  function parseStyleText(cssText) {
    const styleMap = {};
    const declarations = cssText.split(DECLARATION_DELIMITER);

    for (const declaration of declarations) {
      if (declaration) {
        const [prop, value] = declaration.split(PROPERTY_DELIMITER);

        if (prop !== undefined && value !== undefined) {
          styleMap[prop.trim()] = value.trim();
        }
      }
    }

    return styleMap;
  } // Make a shallow copy of an object but omit the given key


  function cloneAndOmitKey(object, keyToOmit) {
    const result = {};

    for (const key of Object.keys(object)) {
      if (key !== keyToOmit) {
        result[key] = object[key];
      }
    }

    return result;
  }

  function flattenStylesheets(stylesheets) {
    const list = [];

    for (const stylesheet of stylesheets) {
      if (!Array.isArray(stylesheet)) {
        list.push(stylesheet);
      } else {
        list.push(...flattenStylesheets(stylesheet));
      }
    }

    return list;
  } //
  // Primitives
  //


  let ssr$1;

  function setSsr(ssrImpl) {
    ssr$1 = ssrImpl;
  }

  let isNativeShadowDefined$1;

  function setIsNativeShadowDefined(isNativeShadowDefinedImpl) {
    isNativeShadowDefined$1 = isNativeShadowDefinedImpl;
  }

  let isSyntheticShadowDefined$1;

  function setIsSyntheticShadowDefined(isSyntheticShadowDefinedImpl) {
    isSyntheticShadowDefined$1 = isSyntheticShadowDefinedImpl;
  }

  let HTMLElementExported$1;

  function setHTMLElement(HTMLElementImpl) {
    HTMLElementExported$1 = HTMLElementImpl;
  }

  let isHydrating$1;

  function setIsHydrating$1(isHydratingImpl) {
    isHydrating$1 = isHydratingImpl;
  }

  let insert$1;

  function setInsert(insertImpl) {
    insert$1 = insertImpl;
  }

  let remove$1;

  function setRemove(removeImpl) {
    remove$1 = removeImpl;
  }

  let createElement$2;

  function setCreateElement(createElementImpl) {
    createElement$2 = createElementImpl;
  }

  let createText$1;

  function setCreateText(createTextImpl) {
    createText$1 = createTextImpl;
  }

  let createComment$1;

  function setCreateComment(createCommentImpl) {
    createComment$1 = createCommentImpl;
  }

  let nextSibling$1;

  function setNextSibling(nextSiblingImpl) {
    nextSibling$1 = nextSiblingImpl;
  }

  let attachShadow$1;

  function setAttachShadow(attachShadowImpl) {
    attachShadow$1 = attachShadowImpl;
  }

  let getProperty$1;

  function setGetProperty(getPropertyImpl) {
    getProperty$1 = getPropertyImpl;
  }

  let setProperty$1;

  function setSetProperty(setPropertyImpl) {
    setProperty$1 = setPropertyImpl;
  }

  let setText$1;

  function setSetText(setTextImpl) {
    setText$1 = setTextImpl;
  }

  let getAttribute$1;

  function setGetAttribute(getAttributeImpl) {
    getAttribute$1 = getAttributeImpl;
  }

  let setAttribute$1;

  function setSetAttribute(setAttributeImpl) {
    setAttribute$1 = setAttributeImpl;
  }

  let removeAttribute$1;

  function setRemoveAttribute(removeAttributeImpl) {
    removeAttribute$1 = removeAttributeImpl;
  }

  let addEventListener$1;

  function setAddEventListener(addEventListenerImpl) {
    addEventListener$1 = addEventListenerImpl;
  }

  let removeEventListener$1;

  function setRemoveEventListener(removeEventListenerImpl) {
    removeEventListener$1 = removeEventListenerImpl;
  }

  let dispatchEvent$1;

  function setDispatchEvent(dispatchEventImpl) {
    dispatchEvent$1 = dispatchEventImpl;
  }

  let getClassList$1;

  function setGetClassList(getClassListImpl) {
    getClassList$1 = getClassListImpl;
  }

  let setCSSStyleProperty$1;

  function setSetCSSStyleProperty(setCSSStylePropertyImpl) {
    setCSSStyleProperty$1 = setCSSStylePropertyImpl;
  }

  let getBoundingClientRect$1;

  function setGetBoundingClientRect(getBoundingClientRectImpl) {
    getBoundingClientRect$1 = getBoundingClientRectImpl;
  }

  let querySelector$1;

  function setQuerySelector(querySelectorImpl) {
    querySelector$1 = querySelectorImpl;
  }

  let querySelectorAll$1;

  function setQuerySelectorAll(querySelectorAllImpl) {
    querySelectorAll$1 = querySelectorAllImpl;
  }

  let getElementsByTagName$1;

  function setGetElementsByTagName(getElementsByTagNameImpl) {
    getElementsByTagName$1 = getElementsByTagNameImpl;
  }

  let getElementsByClassName$1;

  function setGetElementsByClassName(getElementsByClassNameImpl) {
    getElementsByClassName$1 = getElementsByClassNameImpl;
  }

  let getChildren$1;

  function setGetChildren(getChildrenImpl) {
    getChildren$1 = getChildrenImpl;
  }

  let getChildNodes$1;

  function setGetChildNodes(getChildNodesImpl) {
    getChildNodes$1 = getChildNodesImpl;
  }

  let getFirstChild$1;

  function setGetFirstChild(getFirstChildImpl) {
    getFirstChild$1 = getFirstChildImpl;
  }

  let getFirstElementChild$1;

  function setGetFirstElementChild(getFirstElementChildImpl) {
    getFirstElementChild$1 = getFirstElementChildImpl;
  }

  let getLastChild$1;

  function setGetLastChild(getLastChildImpl) {
    getLastChild$1 = getLastChildImpl;
  }

  let getLastElementChild$1;

  function setGetLastElementChild(getLastElementChildImpl) {
    getLastElementChild$1 = getLastElementChildImpl;
  }

  let isConnected$1;

  function setIsConnected(isConnectedImpl) {
    isConnected$1 = isConnectedImpl;
  }

  let insertGlobalStylesheet$1;

  function setInsertGlobalStylesheet(insertGlobalStylesheetImpl) {
    insertGlobalStylesheet$1 = insertGlobalStylesheetImpl;
  }

  let insertStylesheet$1;

  function setInsertStylesheet(insertStylesheetImpl) {
    insertStylesheet$1 = insertStylesheetImpl;
  }

  let assertInstanceOfHTMLElement$1;

  function setAssertInstanceOfHTMLElement(assertInstanceOfHTMLElementImpl) {
    assertInstanceOfHTMLElement$1 = assertInstanceOfHTMLElementImpl;
  }

  let defineCustomElement$1;

  function setDefineCustomElement(defineCustomElementImpl) {
    defineCustomElement$1 = defineCustomElementImpl;
  }

  let getCustomElement$1;

  function setGetCustomElement(getCustomElementImpl) {
    getCustomElement$1 = getCustomElementImpl;
  }
  /*
   * Copyright (c) 2019, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const TargetToReactiveRecordMap = new WeakMap();

  function getReactiveRecord(target) {
    let reactiveRecord = TargetToReactiveRecordMap.get(target);

    if (isUndefined$1(reactiveRecord)) {
      const newRecord = create(null);
      reactiveRecord = newRecord;
      TargetToReactiveRecordMap.set(target, newRecord);
    }

    return reactiveRecord;
  }

  let currentReactiveObserver = null;

  function valueMutated(target, key) {
    const reactiveRecord = TargetToReactiveRecordMap.get(target);

    if (!isUndefined$1(reactiveRecord)) {
      const reactiveObservers = reactiveRecord[key];

      if (!isUndefined$1(reactiveObservers)) {
        for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
          const ro = reactiveObservers[i];
          ro.notify();
        }
      }
    }
  }

  function valueObserved(target, key) {
    // We should determine if an active Observing Record is present to track mutations.
    if (currentReactiveObserver === null) {
      return;
    }

    const ro = currentReactiveObserver;
    const reactiveRecord = getReactiveRecord(target);
    let reactiveObservers = reactiveRecord[key];

    if (isUndefined$1(reactiveObservers)) {
      reactiveObservers = [];
      reactiveRecord[key] = reactiveObservers;
    } else if (reactiveObservers[0] === ro) {
      return; // perf optimization considering that most subscriptions will come from the same record
    }

    if (ArrayIndexOf.call(reactiveObservers, ro) === -1) {
      ro.link(reactiveObservers);
    }
  }

  class ReactiveObserver {
    constructor(callback) {
      this.listeners = [];
      this.callback = callback;
    }

    observe(job) {
      const inceptionReactiveRecord = currentReactiveObserver;
      currentReactiveObserver = this;
      let error;

      try {
        job();
      } catch (e) {
        error = Object(e);
      } finally {
        currentReactiveObserver = inceptionReactiveRecord;

        if (error !== undefined) {
          throw error; // eslint-disable-line no-unsafe-finally
        }
      }
    }
    /**
     * This method is responsible for disconnecting the Reactive Observer
     * from any Reactive Record that has a reference to it, to prevent future
     * notifications about previously recorded access.
     */


    reset() {
      const {
        listeners
      } = this;
      const len = listeners.length;

      if (len > 0) {
        for (let i = 0; i < len; i += 1) {
          const set = listeners[i];
          const pos = ArrayIndexOf.call(listeners[i], this);
          ArraySplice.call(set, pos, 1);
        }

        listeners.length = 0;
      }
    } // friend methods


    notify() {
      this.callback.call(undefined, this);
    }

    link(reactiveObservers) {
      ArrayPush$1.call(reactiveObservers, this); // we keep track of observing records where the observing record was added to so we can do some clean up later on

      ArrayPush$1.call(this.listeners, reactiveObservers);
    }

  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function componentValueMutated(vm, key) {
    valueMutated(vm.component, key);
  }

  function componentValueObserved(vm, key) {
    valueObserved(vm.component, key);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function getComponentTag(vm) {
    return `<${StringToLowerCase.call(vm.tagName)}>`;
  } // TODO [#1695]: Unify getComponentStack and getErrorComponentStack


  function getComponentStack(vm) {
    const stack = [];
    let prefix = '';

    while (!isNull(vm.owner)) {
      ArrayPush$1.call(stack, prefix + getComponentTag(vm));
      vm = vm.owner;
      prefix += '\t';
    }

    return ArrayJoin.call(stack, '\n');
  }

  function getErrorComponentStack(vm) {
    const wcStack = [];
    let currentVm = vm;

    while (!isNull(currentVm)) {
      ArrayPush$1.call(wcStack, getComponentTag(currentVm));
      currentVm = currentVm.owner;
    }

    return wcStack.reverse().join('\n\t');
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function addErrorComponentStack(vm, error) {
    if (!isFrozen(error) && isUndefined$1(error.wcStack)) {
      const wcStack = getErrorComponentStack(vm);
      defineProperty(error, 'wcStack', {
        get() {
          return wcStack;
        }

      });
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function log(method, message, vm) {
    let msg = `[LWC ${method}]: ${message}`;

    if (!isUndefined$1(vm)) {
      msg = `${msg}\n${getComponentStack(vm)}`;
    }

    try {
      throw new Error(msg);
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console[method](e);
    }
  }

  function logError(message, vm) {
    log('error', message, vm);
  }

  function logWarn(message, vm) {
    log('warn', message, vm);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
  // to inject at runtime.


  const HTMLElementConstructor$1 = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
  const HTMLElementPrototype = HTMLElementConstructor$1.prototype;
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // These properties get added to LWCElement.prototype publicProps automatically

  const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];

  function offsetPropertyErrorMessage(name) {
    return `Using the \`${name}\` property is an anti-pattern because it rounds the value to an integer. Instead, use the \`getBoundingClientRect\` method to obtain fractional values for the size of an element and its position relative to the viewport.`;
  } // Global HTML Attributes & Properties
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement


  const globalHTMLProperties = assign(create(null), {
    accessKey: {
      attribute: 'accesskey'
    },
    accessKeyLabel: {
      readOnly: true
    },
    className: {
      attribute: 'class',
      error: 'Using the `className` property is an anti-pattern because of slow runtime behavior and potential conflicts with classes provided by the owner element. Use the `classList` API instead.'
    },
    contentEditable: {
      attribute: 'contenteditable'
    },
    dataset: {
      readOnly: true,
      error: "Using the `dataset` property is an anti-pattern because it can't be statically analyzed. Expose each property individually using the `@api` decorator instead."
    },
    dir: {
      attribute: 'dir'
    },
    draggable: {
      attribute: 'draggable'
    },
    dropzone: {
      attribute: 'dropzone',
      readOnly: true
    },
    hidden: {
      attribute: 'hidden'
    },
    id: {
      attribute: 'id'
    },
    inputMode: {
      attribute: 'inputmode'
    },
    lang: {
      attribute: 'lang'
    },
    slot: {
      attribute: 'slot',
      error: 'Using the `slot` property is an anti-pattern.'
    },
    spellcheck: {
      attribute: 'spellcheck'
    },
    style: {
      attribute: 'style'
    },
    tabIndex: {
      attribute: 'tabindex'
    },
    title: {
      attribute: 'title'
    },
    translate: {
      attribute: 'translate'
    },
    // additional "global attributes" that are not present in the link above.
    isContentEditable: {
      readOnly: true
    },
    offsetHeight: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetHeight')
    },
    offsetLeft: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetLeft')
    },
    offsetParent: {
      readOnly: true
    },
    offsetTop: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetTop')
    },
    offsetWidth: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetWidth')
    },
    role: {
      attribute: 'role'
    }
  });
  let controlledElement = null;
  let controlledAttributeName;

  function isAttributeLocked(elm, attrName) {
    return elm !== controlledElement || attrName !== controlledAttributeName;
  }

  function lockAttribute(_elm, _key) {
    controlledElement = null;
    controlledAttributeName = undefined;
  }

  function unlockAttribute(elm, key) {
    controlledElement = elm;
    controlledAttributeName = key;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  /**
   * This is a descriptor map that contains
   * all standard properties that a Custom Element can support (including AOM properties), which
   * determines what kind of capabilities the Base HTML Element and
   * Base Lightning Element should support.
   */


  const HTMLElementOriginalDescriptors = create(null);
  forEach.call(keys(AriaPropNameToAttrNameMap), propName => {
    // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
    // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
    const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);

    if (!isUndefined$1(descriptor)) {
      HTMLElementOriginalDescriptors[propName] = descriptor;
    }
  });
  forEach.call(defaultDefHTMLPropertyNames, propName => {
    // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
    // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
    // this category, so, better to be sure.
    const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);

    if (!isUndefined$1(descriptor)) {
      HTMLElementOriginalDescriptors[propName] = descriptor;
    }
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  function generateDataDescriptor(options) {
    return assign({
      configurable: true,
      enumerable: true,
      writable: true
    }, options);
  }

  function generateAccessorDescriptor(options) {
    return assign({
      configurable: true,
      enumerable: true
    }, options);
  }

  let isDomMutationAllowed = false;

  function unlockDomMutation() {

    isDomMutationAllowed = true;
  }

  function lockDomMutation() {

    isDomMutationAllowed = false;
  }

  function logMissingPortalError(name, type) {
    return logError(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
  }

  function patchElementWithRestrictions(elm, options) {

    const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
    const descriptors = {
      outerHTML: generateAccessorDescriptor({
        get() {
          return originalOuterHTMLDescriptor.get.call(this);
        },

        set(_value) {
          throw new TypeError(`Invalid attempt to set outerHTML on Element.`);
        }

      })
    }; // Apply extra restriction related to DOM manipulation if the element is not a portal.

    if (!options.isLight && !options.isPortal) {
      const {
        appendChild,
        insertBefore,
        removeChild,
        replaceChild
      } = elm;
      const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
      const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
      const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
      assign(descriptors, {
        appendChild: generateDataDescriptor({
          value(aChild) {
            logMissingPortalError('appendChild', 'method');
            return appendChild.call(this, aChild);
          }

        }),
        insertBefore: generateDataDescriptor({
          value(newNode, referenceNode) {
            if (!isDomMutationAllowed) {
              logMissingPortalError('insertBefore', 'method');
            }

            return insertBefore.call(this, newNode, referenceNode);
          }

        }),
        removeChild: generateDataDescriptor({
          value(aChild) {
            if (!isDomMutationAllowed) {
              logMissingPortalError('removeChild', 'method');
            }

            return removeChild.call(this, aChild);
          }

        }),
        replaceChild: generateDataDescriptor({
          value(newChild, oldChild) {
            logMissingPortalError('replaceChild', 'method');
            return replaceChild.call(this, newChild, oldChild);
          }

        }),
        nodeValue: generateAccessorDescriptor({
          get() {
            return originalNodeValueDescriptor.get.call(this);
          },

          set(value) {
            if (!isDomMutationAllowed) {
              logMissingPortalError('nodeValue', 'property');
            }

            originalNodeValueDescriptor.set.call(this, value);
          }

        }),
        textContent: generateAccessorDescriptor({
          get() {
            return originalTextContentDescriptor.get.call(this);
          },

          set(value) {
            logMissingPortalError('textContent', 'property');
            originalTextContentDescriptor.set.call(this, value);
          }

        }),
        innerHTML: generateAccessorDescriptor({
          get() {
            return originalInnerHTMLDescriptor.get.call(this);
          },

          set(value) {
            logMissingPortalError('innerHTML', 'property');
            return originalInnerHTMLDescriptor.set.call(this, value);
          }

        })
      });
    }

    defineProperties(elm, descriptors);
  }

  function getShadowRootRestrictionsDescriptors(sr) {
    // thing when using the real shadow root, because if that's the case,
    // the component will not work when running with synthetic shadow.


    const originalAddEventListener = sr.addEventListener;
    const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
    return {
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },

        set(_value) {
          throw new TypeError(`Invalid attempt to set innerHTML on ShadowRoot.`);
        }

      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },

        set(_value) {
          throw new TypeError(`Invalid attempt to set textContent on ShadowRoot.`);
        }

      }),
      addEventListener: generateDataDescriptor({
        value(type, listener, options) {
          // TODO [#420]: this is triggered when the component author attempts to add a listener
          // programmatically into its Component's shadow root
          if (!isUndefined$1(options)) {
            logError('The `addEventListener` method on ShadowRoot does not support any options.', getAssociatedVMIfPresent(this));
          } // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch


          return originalAddEventListener.apply(this, arguments);
        }

      })
    };
  } // Custom Elements Restrictions:
  // -----------------------------


  function getCustomElementRestrictionsDescriptors(elm) {

    const originalAddEventListener = elm.addEventListener;
    const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
    const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
    return {
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },

        set(_value) {
          throw new TypeError(`Invalid attempt to set innerHTML on HTMLElement.`);
        }

      }),
      outerHTML: generateAccessorDescriptor({
        get() {
          return originalOuterHTMLDescriptor.get.call(this);
        },

        set(_value) {
          throw new TypeError(`Invalid attempt to set outerHTML on HTMLElement.`);
        }

      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },

        set(_value) {
          throw new TypeError(`Invalid attempt to set textContent on HTMLElement.`);
        }

      }),
      addEventListener: generateDataDescriptor({
        value(type, listener, options) {
          // TODO [#420]: this is triggered when the component author attempts to add a listener
          // programmatically into a lighting element node
          if (!isUndefined$1(options)) {
            logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
          } // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch


          return originalAddEventListener.apply(this, arguments);
        }

      })
    };
  }

  function getComponentRestrictionsDescriptors() {

    return {
      tagName: generateAccessorDescriptor({
        get() {
          throw new Error(`Usage of property \`tagName\` is disallowed because the component itself does` + ` not know which tagName will be used to create the element, therefore writing` + ` code that check for that value is error prone.`);
        },

        configurable: true,
        enumerable: false // no enumerable properties on component

      })
    };
  }

  function getLightningElementPrototypeRestrictionsDescriptors(proto) {

    const originalDispatchEvent = proto.dispatchEvent;
    const descriptors = {
      dispatchEvent: generateDataDescriptor({
        value(event) {
          const vm = getAssociatedVM(this);

          if (!isNull(event) && isObject(event)) {
            const {
              type
            } = event;

            if (!/^[a-z][a-z0-9_]*$/.test(type)) {
              logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
            }
          } // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch


          return originalDispatchEvent.apply(this, arguments);
        }

      })
    };
    forEach.call(getOwnPropertyNames$1(globalHTMLProperties), propName => {
      if (propName in proto) {
        return; // no need to redefine something that we are already exposing
      }

      descriptors[propName] = generateAccessorDescriptor({
        get() {
          const {
            error,
            attribute
          } = globalHTMLProperties[propName];
          const msg = [];
          msg.push(`Accessing the global HTML property "${propName}" is disabled.`);

          if (error) {
            msg.push(error);
          } else if (attribute) {
            msg.push(`Instead access it via \`this.getAttribute("${attribute}")\`.`);
          }

          logError(msg.join('\n'), getAssociatedVM(this));
        },

        set() {
          const {
            readOnly
          } = globalHTMLProperties[propName];

          if (readOnly) {
            logError(`The global HTML property \`${propName}\` is read-only.`, getAssociatedVM(this));
          }
        }

      });
    });
    return descriptors;
  } // This routine will prevent access to certain properties on a shadow root instance to guarantee
  // that all components will work fine in IE11 and other browsers without shadow dom support.


  function patchShadowRootWithRestrictions(sr) {
    defineProperties(sr, getShadowRootRestrictionsDescriptors(sr));
  }

  function patchCustomElementWithRestrictions(elm) {
    const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
    const elmProto = getPrototypeOf$1(elm);
    setPrototypeOf(elm, create(elmProto, restrictionsDescriptors));
  }

  function patchComponentWithRestrictions(cmp) {
    defineProperties(cmp, getComponentRestrictionsDescriptors());
  }

  function patchLightningElementPrototypeWithRestrictions(proto) {
    defineProperties(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
  }
  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */


  const {
    isArray
  } = Array;
  const {
    prototype: ObjectDotPrototype,
    getPrototypeOf,
    create: ObjectCreate,
    defineProperty: ObjectDefineProperty,
    isExtensible,
    getOwnPropertyDescriptor,
    getOwnPropertyNames,
    getOwnPropertySymbols,
    preventExtensions,
    hasOwnProperty
  } = Object;
  const {
    push: ArrayPush,
    concat: ArrayConcat
  } = Array.prototype;
  const OtS = {}.toString;

  function toString(obj) {
    if (obj && obj.toString) {
      return obj.toString();
    } else if (typeof obj === 'object') {
      return OtS.call(obj);
    } else {
      return obj + '';
    }
  }

  function isUndefined(obj) {
    return obj === undefined;
  }

  function isFunction(obj) {
    return typeof obj === 'function';
  }

  const proxyToValueMap = new WeakMap();

  function registerProxy(proxy, value) {
    proxyToValueMap.set(proxy, value);
  }

  const unwrap$1 = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  class BaseProxyHandler {
    constructor(membrane, value) {
      this.originalTarget = value;
      this.membrane = membrane;
    } // Shared utility methods


    wrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
        descriptor.value = this.wrapValue(descriptor.value);
      } else {
        const {
          set: originalSet,
          get: originalGet
        } = descriptor;

        if (!isUndefined(originalGet)) {
          descriptor.get = this.wrapGetter(originalGet);
        }

        if (!isUndefined(originalSet)) {
          descriptor.set = this.wrapSetter(originalSet);
        }
      }

      return descriptor;
    }

    copyDescriptorIntoShadowTarget(shadowTarget, key) {
      const {
        originalTarget
      } = this; // Note: a property might get defined multiple times in the shadowTarget
      //       but it will always be compatible with the previous descriptor
      //       to preserve the object invariants, which makes these lines safe.

      const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key); // TODO: it should be impossible for the originalDescriptor to ever be undefined, this `if` can be removed

      /* istanbul ignore else */

      if (!isUndefined(originalDescriptor)) {
        const wrappedDesc = this.wrapDescriptor(originalDescriptor);
        ObjectDefineProperty(shadowTarget, key, wrappedDesc);
      }
    }

    lockShadowTarget(shadowTarget) {
      const {
        originalTarget
      } = this;
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach(key => {
        this.copyDescriptorIntoShadowTarget(shadowTarget, key);
      });
      const {
        membrane: {
          tagPropertyKey
        }
      } = this;

      if (!isUndefined(tagPropertyKey) && !hasOwnProperty.call(shadowTarget, tagPropertyKey)) {
        ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
      }

      preventExtensions(shadowTarget);
    } // Shared Traps
    // TODO: apply() is never called

    /* istanbul ignore next */


    apply(shadowTarget, thisArg, argArray) {
      /* No op */
    } // TODO: construct() is never called

    /* istanbul ignore next */


    construct(shadowTarget, argArray, newTarget) {
      /* No op */
    }

    get(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          valueObserved
        }
      } = this;
      const value = originalTarget[key];
      valueObserved(originalTarget, key);
      return this.wrapValue(value);
    }

    has(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          tagPropertyKey,
          valueObserved
        }
      } = this;
      valueObserved(originalTarget, key); // since key is never going to be undefined, and tagPropertyKey might be undefined
      // we can simply compare them as the second part of the condition.

      return key in originalTarget || key === tagPropertyKey;
    }

    ownKeys(shadowTarget) {
      const {
        originalTarget,
        membrane: {
          tagPropertyKey
        }
      } = this; // if the membrane tag key exists and it is not in the original target, we add it to the keys.

      const keys = isUndefined(tagPropertyKey) || hasOwnProperty.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey]; // small perf optimization using push instead of concat to avoid creating an extra array

      ArrayPush.apply(keys, getOwnPropertyNames(originalTarget));
      ArrayPush.apply(keys, getOwnPropertySymbols(originalTarget));
      return keys;
    }

    isExtensible(shadowTarget) {
      const {
        originalTarget
      } = this; // optimization to avoid attempting to lock down the shadowTarget multiple times

      if (!isExtensible(shadowTarget)) {
        return false; // was already locked down
      }

      if (!isExtensible(originalTarget)) {
        this.lockShadowTarget(shadowTarget);
        return false;
      }

      return true;
    }

    getPrototypeOf(shadowTarget) {
      const {
        originalTarget
      } = this;
      return getPrototypeOf(originalTarget);
    }

    getOwnPropertyDescriptor(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          valueObserved,
          tagPropertyKey
        }
      } = this; // keys looked up via getOwnPropertyDescriptor need to be reactive

      valueObserved(originalTarget, key);
      let desc = getOwnPropertyDescriptor(originalTarget, key);

      if (isUndefined(desc)) {
        if (key !== tagPropertyKey) {
          return undefined;
        } // if the key is the membrane tag key, and is not in the original target,
        // we produce a synthetic descriptor and install it on the shadow target


        desc = {
          value: undefined,
          writable: false,
          configurable: false,
          enumerable: false
        };
        ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
        return desc;
      }

      if (desc.configurable === false) {
        // updating the descriptor to non-configurable on the shadow
        this.copyDescriptorIntoShadowTarget(shadowTarget, key);
      } // Note: by accessing the descriptor, the key is marked as observed
      // but access to the value, setter or getter (if available) cannot observe
      // mutations, just like regular methods, in which case we just do nothing.


      return this.wrapDescriptor(desc);
    }

  }

  const getterMap$1 = new WeakMap();
  const setterMap$1 = new WeakMap();
  const reverseGetterMap = new WeakMap();
  const reverseSetterMap = new WeakMap();

  class ReactiveProxyHandler extends BaseProxyHandler {
    wrapValue(value) {
      return this.membrane.getProxy(value);
    }

    wrapGetter(originalGet) {
      const wrappedGetter = getterMap$1.get(originalGet);

      if (!isUndefined(wrappedGetter)) {
        return wrappedGetter;
      }

      const handler = this;

      const get = function () {
        // invoking the original getter with the original target
        return handler.wrapValue(originalGet.call(unwrap$1(this)));
      };

      getterMap$1.set(originalGet, get);
      reverseGetterMap.set(get, originalGet);
      return get;
    }

    wrapSetter(originalSet) {
      const wrappedSetter = setterMap$1.get(originalSet);

      if (!isUndefined(wrappedSetter)) {
        return wrappedSetter;
      }

      const set = function (v) {
        // invoking the original setter with the original target
        originalSet.call(unwrap$1(this), unwrap$1(v));
      };

      setterMap$1.set(originalSet, set);
      reverseSetterMap.set(set, originalSet);
      return set;
    }

    unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
        // dealing with a data descriptor
        descriptor.value = unwrap$1(descriptor.value);
      } else {
        const {
          set,
          get
        } = descriptor;

        if (!isUndefined(get)) {
          descriptor.get = this.unwrapGetter(get);
        }

        if (!isUndefined(set)) {
          descriptor.set = this.unwrapSetter(set);
        }
      }

      return descriptor;
    }

    unwrapGetter(redGet) {
      const reverseGetter = reverseGetterMap.get(redGet);

      if (!isUndefined(reverseGetter)) {
        return reverseGetter;
      }

      const handler = this;

      const get = function () {
        // invoking the red getter with the proxy of this
        return unwrap$1(redGet.call(handler.wrapValue(this)));
      };

      getterMap$1.set(get, redGet);
      reverseGetterMap.set(redGet, get);
      return get;
    }

    unwrapSetter(redSet) {
      const reverseSetter = reverseSetterMap.get(redSet);

      if (!isUndefined(reverseSetter)) {
        return reverseSetter;
      }

      const handler = this;

      const set = function (v) {
        // invoking the red setter with the proxy of this
        redSet.call(handler.wrapValue(this), handler.wrapValue(v));
      };

      setterMap$1.set(set, redSet);
      reverseSetterMap.set(redSet, set);
      return set;
    }

    set(shadowTarget, key, value) {
      const {
        originalTarget,
        membrane: {
          valueMutated
        }
      } = this;
      const oldValue = originalTarget[key];

      if (oldValue !== value) {
        originalTarget[key] = value;
        valueMutated(originalTarget, key);
      } else if (key === 'length' && isArray(originalTarget)) {
        // fix for issue #236: push will add the new index, and by the time length
        // is updated, the internal length is already equal to the new length value
        // therefore, the oldValue is equal to the value. This is the forking logic
        // to support this use case.
        valueMutated(originalTarget, key);
      }

      return true;
    }

    deleteProperty(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          valueMutated
        }
      } = this;
      delete originalTarget[key];
      valueMutated(originalTarget, key);
      return true;
    }

    setPrototypeOf(shadowTarget, prototype) {
      /* istanbul ignore else */
      {
        throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
      }
    }

    preventExtensions(shadowTarget) {
      if (isExtensible(shadowTarget)) {
        const {
          originalTarget
        } = this;
        preventExtensions(originalTarget); // if the originalTarget is a proxy itself, it might reject
        // the preventExtension call, in which case we should not attempt to lock down
        // the shadow target.
        // TODO: It should not actually be possible to reach this `if` statement.
        // If a proxy rejects extensions, then calling preventExtensions will throw an error:
        // https://codepen.io/nolanlawson-the-selector/pen/QWMOjbY

        /* istanbul ignore if */

        if (isExtensible(originalTarget)) {
          return false;
        }

        this.lockShadowTarget(shadowTarget);
      }

      return true;
    }

    defineProperty(shadowTarget, key, descriptor) {
      const {
        originalTarget,
        membrane: {
          valueMutated,
          tagPropertyKey
        }
      } = this;

      if (key === tagPropertyKey && !hasOwnProperty.call(originalTarget, key)) {
        // To avoid leaking the membrane tag property into the original target, we must
        // be sure that the original target doesn't have yet.
        // NOTE: we do not return false here because Object.freeze and equivalent operations
        // will attempt to set the descriptor to the same value, and expect no to throw. This
        // is an small compromise for the sake of not having to diff the descriptors.
        return true;
      }

      ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor)); // intentionally testing if false since it could be undefined as well

      if (descriptor.configurable === false) {
        this.copyDescriptorIntoShadowTarget(shadowTarget, key);
      }

      valueMutated(originalTarget, key);
      return true;
    }
    /*LWC compiler v2.11.3*/


  }

  const getterMap = new WeakMap();
  const setterMap = new WeakMap();

  class ReadOnlyHandler extends BaseProxyHandler {
    wrapValue(value) {
      return this.membrane.getReadOnlyProxy(value);
    }

    wrapGetter(originalGet) {
      const wrappedGetter = getterMap.get(originalGet);

      if (!isUndefined(wrappedGetter)) {
        return wrappedGetter;
      }

      const handler = this;

      const get = function () {
        // invoking the original getter with the original target
        return handler.wrapValue(originalGet.call(unwrap$1(this)));
      };

      getterMap.set(originalGet, get);
      return get;
    }

    wrapSetter(originalSet) {
      const wrappedSetter = setterMap.get(originalSet);

      if (!isUndefined(wrappedSetter)) {
        return wrappedSetter;
      }

      const handler = this;

      const set = function (v) {
        /* istanbul ignore else */
        {
          const {
            originalTarget
          } = handler;
          throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);
        }
      };

      setterMap.set(originalSet, set);
      return set;
    }

    set(shadowTarget, key, value) {
      /* istanbul ignore else */
      {
        const {
          originalTarget
        } = this;
        const msg = isArray(originalTarget) ? `Invalid mutation: Cannot mutate array at index ${key.toString()}. Array is read-only.` : `Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`;
        throw new Error(msg);
      }
    }

    deleteProperty(shadowTarget, key) {
      /* istanbul ignore else */
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    }

    setPrototypeOf(shadowTarget, prototype) {
      /* istanbul ignore else */
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
      }
    }

    preventExtensions(shadowTarget) {
      /* istanbul ignore else */
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
      }
    }

    defineProperty(shadowTarget, key, descriptor) {
      /* istanbul ignore else */
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    }
    /*LWC compiler v2.11.3*/


  }

  function extract(objectOrArray) {
    if (isArray(objectOrArray)) {
      return objectOrArray.map(item => {
        const original = unwrap$1(item);

        if (original !== item) {
          return extract(original);
        }

        return item;
      });
    }

    const obj = ObjectCreate(getPrototypeOf(objectOrArray));
    const names = getOwnPropertyNames(objectOrArray);
    return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
      const item = objectOrArray[key];
      const original = unwrap$1(item);

      if (original !== item) {
        seed[key] = extract(original);
      } else {
        seed[key] = item;
      }

      return seed;
    }, obj);
  }

  const formatter = {
    header: plainOrProxy => {
      const originalTarget = unwrap$1(plainOrProxy); // if originalTarget is falsy or not unwrappable, exit

      if (!originalTarget || originalTarget === plainOrProxy) {
        return null;
      }

      const obj = extract(plainOrProxy);
      return ['object', {
        object: obj
      }];
    },
    hasBody: () => {
      return false;
    },
    body: () => {
      return null;
    }
  }; // Inspired from paulmillr/es6-shim
  // https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L176-L185

  /* istanbul ignore next */

  function getGlobal() {
    // the only reliable means to get the global object is `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof globalThis !== 'undefined') {
      return globalThis;
    }

    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    } // Gracefully degrade if not able to locate the global object


    return {};
  }

  function init() {

    const global = getGlobal(); // Custom Formatter for Dev Tools. To enable this, open Chrome Dev Tools
    //  - Go to Settings,
    //  - Under console, select "Enable custom formatters"
    // For more information, https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview

    const devtoolsFormatters = global.devtoolsFormatters || [];
    ArrayPush.call(devtoolsFormatters, formatter);
    global.devtoolsFormatters = devtoolsFormatters;
  }
  /* istanbul ignore else */


  {
    init();
  }

  function defaultValueIsObservable(value) {
    // intentionally checking for null
    if (value === null) {
      return false;
    } // treat all non-object types, including undefined, as non-observable values


    if (typeof value !== 'object') {
      return false;
    }

    if (isArray(value)) {
      return true;
    }

    const proto = getPrototypeOf(value);
    return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
  }

  const defaultValueObserved = (obj, key) => {
    /* do nothing */
  };

  const defaultValueMutated = (obj, key) => {
    /* do nothing */
  };

  function createShadowTarget(value) {
    return isArray(value) ? [] : {};
  }

  class ObservableMembrane {
    constructor(options = {}) {
      this.readOnlyObjectGraph = new WeakMap();
      this.reactiveObjectGraph = new WeakMap();
      const {
        valueMutated,
        valueObserved,
        valueIsObservable,
        tagPropertyKey
      } = options;
      this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
      this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
      this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
      this.tagPropertyKey = tagPropertyKey;
    }

    getProxy(value) {
      const unwrappedValue = unwrap$1(value);

      if (this.valueIsObservable(unwrappedValue)) {
        // When trying to extract the writable version of a readonly we return the readonly.
        if (this.readOnlyObjectGraph.get(unwrappedValue) === value) {
          return value;
        }

        return this.getReactiveHandler(unwrappedValue);
      }

      return unwrappedValue;
    }

    getReadOnlyProxy(value) {
      value = unwrap$1(value);

      if (this.valueIsObservable(value)) {
        return this.getReadOnlyHandler(value);
      }

      return value;
    }

    unwrapProxy(p) {
      return unwrap$1(p);
    }

    getReactiveHandler(value) {
      let proxy = this.reactiveObjectGraph.get(value);

      if (isUndefined(proxy)) {
        // caching the proxy after the first time it is accessed
        const handler = new ReactiveProxyHandler(this, value);
        proxy = new Proxy(createShadowTarget(value), handler);
        registerProxy(proxy, value);
        this.reactiveObjectGraph.set(value, proxy);
      }

      return proxy;
    }

    getReadOnlyHandler(value) {
      let proxy = this.readOnlyObjectGraph.get(value);

      if (isUndefined(proxy)) {
        // caching the proxy after the first time it is accessed
        const handler = new ReadOnlyHandler(this, value);
        proxy = new Proxy(createShadowTarget(value), handler);
        registerProxy(proxy, value);
        this.readOnlyObjectGraph.set(value, proxy);
      }

      return proxy;
    }

  }
  /** version: 2.0.0 */

  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');
  const reactiveMembrane = new ObservableMembrane({
    valueObserved,
    valueMutated,
    tagPropertyKey: lockerLivePropertyKey
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  /**
   * This operation is called with a descriptor of an standard html property
   * that a Custom Element can support (including AOM properties), which
   * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
   * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
   */


  function createBridgeToElementDescriptor(propName, descriptor) {
    const {
      get,
      set,
      enumerable,
      configurable
    } = descriptor;

    if (!isFunction$1(get)) {
      {
        assert.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
      }

      throw new TypeError();
    }

    if (!isFunction$1(set)) {
      {
        assert.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
      }

      throw new TypeError();
    }

    return {
      enumerable,
      configurable,

      get() {
        const vm = getAssociatedVM(this);

        if (isBeingConstructed(vm)) {
          {
            logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
          }

          return;
        }

        componentValueObserved(vm, propName);
        return get.call(vm.elm);
      },

      set(newValue) {
        const vm = getAssociatedVM(this);

        {
          const vmBeingRendered = getVMBeingRendered();
          assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
          assert.invariant(!isUpdatingTemplate, `When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
          assert.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
          assert.invariant(!isObject(newValue) || isNull(newValue), `Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
        }

        if (newValue !== vm.cmpProps[propName]) {
          vm.cmpProps[propName] = newValue;
          componentValueMutated(vm, propName);
        }

        return set.call(vm.elm, newValue);
      }

    };
  }
  /**
   * This class is the base class for any LWC element.
   * Some elements directly extends this class, others implement it via inheritance.
   **/
  // @ts-ignore


  const LightningElement = function () {
    // This should be as performant as possible, while any initialization should be done lazily
    if (isNull(vmBeingConstructed)) {
      throw new ReferenceError('Illegal constructor');
    }

    const vm = vmBeingConstructed;
    const {
      def,
      elm
    } = vm;
    const {
      bridge
    } = def;

    {
      assertInstanceOfHTMLElement$1(vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
    }

    const component = this;
    setPrototypeOf(elm, bridge.prototype);
    vm.component = this; // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
    // component creation and passes hooks to instrument all the component interactions with the
    // engine. We are intentionally hiding this argument from the formal API of LightningElement
    // because we don't want folks to know about it just yet.

    if (arguments.length === 1) {
      const {
        callHook,
        setHook,
        getHook
      } = arguments[0];
      vm.callHook = callHook;
      vm.setHook = setHook;
      vm.getHook = getHook;
    } // Making the component instance a live value when using Locker to support expandos.


    this[lockerLivePropertyKey] = undefined; // Linking elm, shadow root and component with the VM.

    associateVM(component, vm);
    associateVM(elm, vm);

    if (vm.renderMode === 1
    /* Shadow */
    ) {
      vm.renderRoot = doAttachShadow(vm);
    } else {
      vm.renderRoot = elm;
    } // Adding extra guard rails in DEV mode.


    {
      patchCustomElementWithRestrictions(elm);
      patchComponentWithRestrictions(component);
    }

    return this;
  };

  function doAttachShadow(vm) {
    const {
      elm,
      mode,
      shadowMode,
      def: {
        ctor
      }
    } = vm;
    const shadowRoot = attachShadow$1(elm, {
      [KEY__SYNTHETIC_MODE]: shadowMode === 1
      /* Synthetic */
      ,
      delegatesFocus: Boolean(ctor.delegatesFocus),
      mode
    });
    vm.shadowRoot = shadowRoot;
    associateVM(shadowRoot, vm);

    {
      patchShadowRootWithRestrictions(shadowRoot);
    }

    return shadowRoot;
  }

  function warnIfInvokedDuringConstruction(vm, methodOrPropName) {
    if (isBeingConstructed(vm)) {
      logError(`this.${methodOrPropName} should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM or has no children yet.`);
    }
  } // @ts-ignore


  LightningElement.prototype = {
    constructor: LightningElement,

    dispatchEvent(event) {
      const {
        elm
      } = getAssociatedVM(this);
      return dispatchEvent$1(elm, event);
    },

    addEventListener(type, listener, options) {
      const vm = getAssociatedVM(this);
      const {
        elm
      } = vm;

      {
        const vmBeingRendered = getVMBeingRendered();
        assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
        assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
        assert.invariant(isFunction$1(listener), `Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
      }

      const wrappedListener = getWrappedComponentsListener(vm, listener);
      addEventListener$1(elm, type, wrappedListener, options);
    },

    removeEventListener(type, listener, options) {
      const vm = getAssociatedVM(this);
      const {
        elm
      } = vm;
      const wrappedListener = getWrappedComponentsListener(vm, listener);
      removeEventListener$1(elm, type, wrappedListener, options);
    },

    hasAttribute(name) {
      const {
        elm
      } = getAssociatedVM(this);
      return !isNull(getAttribute$1(elm, name));
    },

    hasAttributeNS(namespace, name) {
      const {
        elm
      } = getAssociatedVM(this);
      return !isNull(getAttribute$1(elm, name, namespace));
    },

    removeAttribute(name) {
      const {
        elm
      } = getAssociatedVM(this);
      unlockAttribute(elm, name);
      removeAttribute$1(elm, name);
      lockAttribute();
    },

    removeAttributeNS(namespace, name) {
      const {
        elm
      } = getAssociatedVM(this);
      unlockAttribute(elm, name);
      removeAttribute$1(elm, name, namespace);
      lockAttribute();
    },

    getAttribute(name) {
      const {
        elm
      } = getAssociatedVM(this);
      return getAttribute$1(elm, name);
    },

    getAttributeNS(namespace, name) {
      const {
        elm
      } = getAssociatedVM(this);
      return getAttribute$1(elm, name, namespace);
    },

    setAttribute(name, value) {
      const vm = getAssociatedVM(this);
      const {
        elm
      } = vm;

      {
        assert.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }

      unlockAttribute(elm, name);
      setAttribute$1(elm, name, value);
      lockAttribute();
    },

    setAttributeNS(namespace, name, value) {
      const vm = getAssociatedVM(this);
      const {
        elm
      } = vm;

      {
        assert.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }

      unlockAttribute(elm, name);
      setAttribute$1(elm, name, value, namespace);
      lockAttribute();
    },

    getBoundingClientRect() {
      const vm = getAssociatedVM(this);
      const {
        elm
      } = vm;

      {
        warnIfInvokedDuringConstruction(vm, 'getBoundingClientRect()');
      }

      return getBoundingClientRect$1(elm);
    },

    get isConnected() {
      const {
        elm
      } = getAssociatedVM(this);
      return isConnected$1(elm);
    },

    get classList() {
      const vm = getAssociatedVM(this);
      const {
        elm
      } = vm;

      {
        // TODO [#1290]: this still fails in dev but works in production, eventually, we should
        // just throw in all modes
        assert.isFalse(isBeingConstructed(vm), `Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
      }

      return getClassList$1(elm);
    },

    get template() {
      const vm = getAssociatedVM(this);

      {
        if (vm.renderMode === 0
        /* Light */
        ) {
          logError('`this.template` returns null for light DOM components. Since there is no shadow, the rendered content can be accessed via `this` itself. e.g. instead of `this.template.querySelector`, use `this.querySelector`.');
        }
      }

      return vm.shadowRoot;
    },

    get shadowRoot() {
      // From within the component instance, the shadowRoot is always reported as "closed".
      // Authors should rely on this.template instead.
      return null;
    },

    render() {
      const vm = getAssociatedVM(this);
      return vm.def.template;
    },

    toString() {
      const vm = getAssociatedVM(this);
      return `[object ${vm.def.name}]`;
    }

  };
  const queryAndChildGetterDescriptors = create(null); // The reason we don't just call `import * as renderer from '../renderer'` here is that the bundle size
  // is smaller if we reference each function individually. Otherwise Rollup will create one big frozen
  // object representing the renderer, with a lot of methods we don't actually need.

  const childGetters = ['children', 'childNodes', 'firstChild', 'firstElementChild', 'lastChild', 'lastElementChild'];

  function getChildGetter(methodName) {
    switch (methodName) {
      case 'children':
        return getChildren$1;

      case 'childNodes':
        return getChildNodes$1;

      case 'firstChild':
        return getFirstChild$1;

      case 'firstElementChild':
        return getFirstElementChild$1;

      case 'lastChild':
        return getLastChild$1;

      case 'lastElementChild':
        return getLastElementChild$1;
    }
  } // Generic passthrough for child getters on HTMLElement to the relevant Renderer APIs


  for (const childGetter of childGetters) {
    queryAndChildGetterDescriptors[childGetter] = {
      get() {
        const vm = getAssociatedVM(this);
        const {
          elm
        } = vm;

        {
          warnIfInvokedDuringConstruction(vm, childGetter);
        }

        return getChildGetter(childGetter)(elm);
      },

      configurable: true,
      enumerable: true
    };
  }

  const queryMethods = ['getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'];

  function getQueryMethod(methodName) {
    switch (methodName) {
      case 'getElementsByClassName':
        return getElementsByClassName$1;

      case 'getElementsByTagName':
        return getElementsByTagName$1;

      case 'querySelector':
        return querySelector$1;

      case 'querySelectorAll':
        return querySelectorAll$1;
    }
  } // Generic passthrough for query APIs on HTMLElement to the relevant Renderer APIs


  for (const queryMethod of queryMethods) {
    queryAndChildGetterDescriptors[queryMethod] = {
      value(arg) {
        const vm = getAssociatedVM(this);
        const {
          elm
        } = vm;

        {
          warnIfInvokedDuringConstruction(vm, `${queryMethod}()`);
        }

        return getQueryMethod(queryMethod)(elm, arg);
      },

      configurable: true,
      enumerable: true,
      writable: true
    };
  }

  defineProperties(LightningElement.prototype, queryAndChildGetterDescriptors);
  const lightningBasedDescriptors = create(null);

  for (const propName in HTMLElementOriginalDescriptors) {
    lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
  }

  defineProperties(LightningElement.prototype, lightningBasedDescriptors);
  defineProperty(LightningElement, 'CustomElementConstructor', {
    get() {
      // If required, a runtime-specific implementation must be defined.
      throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
    },

    configurable: true
  });

  {
    patchLightningElementPrototypeWithRestrictions(LightningElement.prototype);
  }

  function internalWireFieldDecorator(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
        componentValueObserved(vm, key);
        return vm.cmpFields[key];
      },

      set(value) {
        const vm = getAssociatedVM(this);
        /**
         * Reactivity for wired fields is provided in wiring.
         * We intentionally add reactivity here since this is just
         * letting the author to do the wrong thing, but it will keep our
         * system to be backward compatible.
         */

        if (value !== vm.cmpFields[key]) {
          vm.cmpFields[key] = value;
          componentValueMutated(vm, key);
        }
      },

      enumerable: true,
      configurable: true
    };
  }

  function internalTrackDecorator(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
        componentValueObserved(vm, key);
        return vm.cmpFields[key];
      },

      set(newValue) {
        const vm = getAssociatedVM(this);

        {
          const vmBeingRendered = getVMBeingRendered();
          assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
          assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }

        const reactiveOrAnyValue = reactiveMembrane.getProxy(newValue);

        if (reactiveOrAnyValue !== vm.cmpFields[key]) {
          vm.cmpFields[key] = reactiveOrAnyValue;
          componentValueMutated(vm, key);
        }
      },

      enumerable: true,
      configurable: true
    };
  }

  function createPublicPropertyDescriptor(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);

        if (isBeingConstructed(vm)) {
          {
            logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
          }

          return;
        }

        componentValueObserved(vm, key);
        return vm.cmpProps[key];
      },

      set(newValue) {
        const vm = getAssociatedVM(this);

        {
          const vmBeingRendered = getVMBeingRendered();
          assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
          assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }

        vm.cmpProps[key] = newValue;
        componentValueMutated(vm, key);
      },

      enumerable: true,
      configurable: true
    };
  }

  class AccessorReactiveObserver extends ReactiveObserver {
    constructor(vm, set) {
      super(() => {
        if (isFalse(this.debouncing)) {
          this.debouncing = true;
          addCallbackToNextTick(() => {
            if (isTrue(this.debouncing)) {
              const {
                value
              } = this;
              const {
                isDirty: dirtyStateBeforeSetterCall,
                component,
                idx
              } = vm;
              set.call(component, value); // de-bouncing after the call to the original setter to prevent
              // infinity loop if the setter itself is mutating things that
              // were accessed during the previous invocation.

              this.debouncing = false;

              if (isTrue(vm.isDirty) && isFalse(dirtyStateBeforeSetterCall) && idx > 0) {
                // immediate rehydration due to a setter driven mutation, otherwise
                // the component will get rendered on the second tick, which it is not
                // desirable.
                rerenderVM(vm);
              }
            }
          });
        }
      });
      this.debouncing = false;
    }

    reset(value) {
      super.reset();
      this.debouncing = false;

      if (arguments.length > 0) {
        this.value = value;
      }
    }
    /*LWC compiler v2.11.3*/


  }

  function createPublicAccessorDescriptor(key, descriptor) {
    const {
      get,
      set,
      enumerable,
      configurable
    } = descriptor;

    if (!isFunction$1(get)) {
      {
        assert.invariant(isFunction$1(get), `Invalid compiler output for public accessor ${toString$1(key)} decorated with @api`);
      }

      throw new Error();
    }

    return {
      get() {
        {
          // Assert that the this value is an actual Component with an associated VM.
          getAssociatedVM(this);
        }

        return get.call(this);
      },

      set(newValue) {
        const vm = getAssociatedVM(this);

        {
          const vmBeingRendered = getVMBeingRendered();
          assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
          assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }

        if (set) {
          if (runtimeFlags.ENABLE_REACTIVE_SETTER) {
            let ro = vm.oar[key];

            if (isUndefined$1(ro)) {
              ro = vm.oar[key] = new AccessorReactiveObserver(vm, set);
            } // every time we invoke this setter from outside (through this wrapper setter)
            // we should reset the value and then debounce just in case there is a pending
            // invocation the next tick that is not longer relevant since the value is changing
            // from outside.


            ro.reset(newValue);
            ro.observe(() => {
              set.call(this, newValue);
            });
          } else {
            set.call(this, newValue);
          }
        } else {
          assert.fail(`Invalid attempt to set a new value for property ${toString$1(key)} of ${vm} that does not has a setter decorated with @api.`);
        }
      },

      enumerable,
      configurable
    };
  }

  function createObservedFieldPropertyDescriptor(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
        componentValueObserved(vm, key);
        return vm.cmpFields[key];
      },

      set(newValue) {
        const vm = getAssociatedVM(this);

        if (newValue !== vm.cmpFields[key]) {
          vm.cmpFields[key] = newValue;
          componentValueMutated(vm, key);
        }
      },

      enumerable: true,
      configurable: true
    };
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function getClassDescriptorType(descriptor) {
    if (isFunction$1(descriptor.value)) {
      return "method"
      /* Method */
      ;
    } else if (isFunction$1(descriptor.set) || isFunction$1(descriptor.get)) {
      return "accessor"
      /* Accessor */
      ;
    } else {
      return "field"
      /* Field */
      ;
    }
  }

  function validateObservedField(Ctor, fieldName, descriptor) {
    if (!isUndefined$1(descriptor)) {
      const type = getClassDescriptorType(descriptor);
      const message = `Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`; // [W-9927596] Ideally we always throw an error when detecting duplicate observed field.
      // This branch is only here for backward compatibility reasons.

      if (type === "accessor"
      /* Accessor */
      ) {
        logError(message);
      } else {
        assert.fail(message);
      }
    }
  }

  function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
    if (!isUndefined$1(descriptor)) {
      const type = getClassDescriptorType(descriptor);
      assert.fail(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);
    }
  }

  function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
    if (!isUndefined$1(descriptor)) {
      const type = getClassDescriptorType(descriptor);
      assert.fail(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);
    }
  }

  function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
    if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
      assert.fail(`Invalid @wire ${methodName} method.`);
    }
  }

  function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
    if (!isUndefined$1(descriptor)) {
      const type = getClassDescriptorType(descriptor);
      const message = `Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`; // [W-9927596] Ideally we always throw an error when detecting duplicate public properties.
      // This branch is only here for backward compatibility reasons.

      if (type === "accessor"
      /* Accessor */
      ) {
        logError(message);
      } else {
        assert.fail(message);
      }
    }
  }

  function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
    if (isUndefined$1(descriptor)) {
      assert.fail(`Invalid @api get ${fieldName} accessor.`);
    } else if (isFunction$1(descriptor.set)) {
      assert.isTrue(isFunction$1(descriptor.get), `Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
    } else if (!isFunction$1(descriptor.get)) {
      assert.fail(`Missing @api get ${fieldName} accessor.`);
    }
  }

  function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
    if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
      assert.fail(`Invalid @api ${methodName} method.`);
    }
  }
  /**
   * INTERNAL: This function can only be invoked by compiled code. The compiler
   * will prevent this function from being imported by user-land code.
   */


  function registerDecorators(Ctor, meta) {
    const proto = Ctor.prototype;
    const {
      publicProps,
      publicMethods,
      wire,
      track,
      fields
    } = meta;
    const apiMethods = create(null);
    const apiFields = create(null);
    const wiredMethods = create(null);
    const wiredFields = create(null);
    const observedFields = create(null);
    const apiFieldsConfig = create(null);
    let descriptor;

    if (!isUndefined$1(publicProps)) {
      for (const fieldName in publicProps) {
        const propConfig = publicProps[fieldName];
        apiFieldsConfig[fieldName] = propConfig.config;
        descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

        if (propConfig.config > 0) {
          // accessor declaration
          {
            validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
          }

          if (isUndefined$1(descriptor)) {
            throw new Error();
          }

          descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
        } else {
          // field declaration
          {
            validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
          } // [W-9927596] If a component has both a public property and a private setter/getter
          // with the same name, the property is defined as a public accessor. This branch is
          // only here for backward compatibility reasons.


          if (!isUndefined$1(descriptor) && !isUndefined$1(descriptor.get)) {
            descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
          } else {
            descriptor = createPublicPropertyDescriptor(fieldName);
          }
        }

        apiFields[fieldName] = descriptor;
        defineProperty(proto, fieldName, descriptor);
      }
    }

    if (!isUndefined$1(publicMethods)) {
      forEach.call(publicMethods, methodName => {
        descriptor = getOwnPropertyDescriptor$1(proto, methodName);

        {
          validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
        }

        if (isUndefined$1(descriptor)) {
          throw new Error();
        }

        apiMethods[methodName] = descriptor;
      });
    }

    if (!isUndefined$1(wire)) {
      for (const fieldOrMethodName in wire) {
        const {
          adapter,
          method,
          config: configCallback,
          dynamic = []
        } = wire[fieldOrMethodName];
        descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);

        if (method === 1) {
          {
            assert.isTrue(adapter, `@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
            validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
          }

          if (isUndefined$1(descriptor)) {
            throw new Error();
          }

          wiredMethods[fieldOrMethodName] = descriptor;
          storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
        } else {
          {
            assert.isTrue(adapter, `@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
            validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
          }

          descriptor = internalWireFieldDecorator(fieldOrMethodName);
          wiredFields[fieldOrMethodName] = descriptor;
          storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
          defineProperty(proto, fieldOrMethodName, descriptor);
        }
      }
    }

    if (!isUndefined$1(track)) {
      for (const fieldName in track) {
        descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

        {
          validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
        }

        descriptor = internalTrackDecorator(fieldName);
        defineProperty(proto, fieldName, descriptor);
      }
    }

    if (!isUndefined$1(fields)) {
      for (let i = 0, n = fields.length; i < n; i++) {
        const fieldName = fields[i];
        descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

        {
          validateObservedField(Ctor, fieldName, descriptor);
        } // [W-9927596] Only mark a field as observed whenever it isn't a duplicated public nor
        // tracked property. This is only here for backward compatibility purposes.


        const isDuplicatePublicProp = !isUndefined$1(publicProps) && fieldName in publicProps;
        const isDuplicateTrackedProp = !isUndefined$1(track) && fieldName in track;

        if (!isDuplicatePublicProp && !isDuplicateTrackedProp) {
          observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
        }
      }
    }

    setDecoratorsMeta(Ctor, {
      apiMethods,
      apiFields,
      apiFieldsConfig,
      wiredMethods,
      wiredFields,
      observedFields
    });
    return Ctor;
  }

  const signedDecoratorToMetaMap = new Map();

  function setDecoratorsMeta(Ctor, meta) {
    signedDecoratorToMetaMap.set(Ctor, meta);
  }

  const defaultMeta = {
    apiMethods: EmptyObject,
    apiFields: EmptyObject,
    apiFieldsConfig: EmptyObject,
    wiredMethods: EmptyObject,
    wiredFields: EmptyObject,
    observedFields: EmptyObject
  };

  function getDecoratorsMeta(Ctor) {
    const meta = signedDecoratorToMetaMap.get(Ctor);
    return isUndefined$1(meta) ? defaultMeta : meta;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  let warned = false;

  {
    // @ts-ignore
    window.__lwcResetWarnedOnVersionMismatch = () => {
      warned = false;
    };
  }

  function checkVersionMismatch(func, type) {
    const versionMatcher = func.toString().match(LWC_VERSION_COMMENT_REGEX);

    if (!isNull(versionMatcher) && !warned) {
      const version = versionMatcher[1];
      const [major, minor] = version.split('.');
      const [expectedMajor, expectedMinor] = LWC_VERSION.split('.');

      if (major !== expectedMajor || minor !== expectedMinor) {
        warned = true; // only warn once to avoid flooding the console
        // stylesheets and templates do not have user-meaningful names, but components do

        const friendlyName = type === 'component' ? `${type} ${func.name}` : type;
        logError(`LWC WARNING: current engine is v${LWC_VERSION}, but ${friendlyName} was compiled with v${version}.\nPlease update your compiled code or LWC engine so that the versions match.\nNo further warnings will appear.`);
      }
    }
  }

  const signedTemplateSet = new Set();

  function defaultEmptyTemplate() {
    return [];
  }

  signedTemplateSet.add(defaultEmptyTemplate);

  function isTemplateRegistered(tpl) {
    return signedTemplateSet.has(tpl);
  }
  /**
   * INTERNAL: This function can only be invoked by compiled code. The compiler
   * will prevent this function from being imported by userland code.
   */


  function registerTemplate(tpl) {
    {
      checkVersionMismatch(tpl, 'template');
    }

    signedTemplateSet.add(tpl); // chaining this method as a way to wrap existing
    // assignment of templates easily, without too much transformation

    return tpl;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // A bridge descriptor is a descriptor whose job is just to get the component instance
  // from the element instance, and get the value or set a new value on the component.
  // This means that across different elements, similar names can get the exact same
  // descriptor, so we can cache them:


  const cachedGetterByKey = create(null);
  const cachedSetterByKey = create(null);

  function createGetter(key) {
    let fn = cachedGetterByKey[key];

    if (isUndefined$1(fn)) {
      fn = cachedGetterByKey[key] = function () {
        const vm = getAssociatedVM(this);
        const {
          getHook
        } = vm;
        return getHook(vm.component, key);
      };
    }

    return fn;
  }

  function createSetter(key) {
    let fn = cachedSetterByKey[key];

    if (isUndefined$1(fn)) {
      fn = cachedSetterByKey[key] = function (newValue) {
        const vm = getAssociatedVM(this);
        const {
          setHook
        } = vm;
        newValue = reactiveMembrane.getReadOnlyProxy(newValue);
        setHook(vm.component, key, newValue);
      };
    }

    return fn;
  }

  function createMethodCaller(methodName) {
    return function () {
      const vm = getAssociatedVM(this);
      const {
        callHook,
        component
      } = vm;
      const fn = component[methodName];
      return callHook(vm.component, fn, ArraySlice.call(arguments));
    };
  }

  function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
    return function attributeChangedCallback(attrName, oldValue, newValue) {
      if (oldValue === newValue) {
        // Ignore same values.
        return;
      }

      const propName = attributeToPropMap[attrName];

      if (isUndefined$1(propName)) {
        if (!isUndefined$1(superAttributeChangedCallback)) {
          // delegate unknown attributes to the super.
          // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch
          superAttributeChangedCallback.apply(this, arguments);
        }

        return;
      }

      if (!isAttributeLocked(this, attrName)) {
        // Ignore changes triggered by the engine itself during:
        // * diffing when public props are attempting to reflect to the DOM
        // * component via `this.setAttribute()`, should never update the prop
        // Both cases, the setAttribute call is always wrapped by the unlocking of the
        // attribute to be changed
        return;
      } // Reflect attribute change to the corresponding property when changed from outside.


      this[propName] = newValue;
    };
  }

  function HTMLBridgeElementFactory(SuperClass, props, methods) {
    let HTMLBridgeElement;
    /**
     * Modern browsers will have all Native Constructors as regular Classes
     * and must be instantiated with the new keyword. In older browsers,
     * specifically IE11, those are objects with a prototype property defined,
     * since they are not supposed to be extended or instantiated with the
     * new keyword. This forking logic supports both cases, specifically because
     * wc.ts relies on the construction path of the bridges to create new
     * fully qualifying web components.
     */

    if (isFunction$1(SuperClass)) {
      HTMLBridgeElement = class extends SuperClass {
        /*LWC compiler v2.11.3*/
      };
    } else {
      HTMLBridgeElement = function () {
        // Bridge classes are not supposed to be instantiated directly in
        // browsers that do not support web components.
        throw new TypeError('Illegal constructor');
      }; // prototype inheritance dance


      setPrototypeOf(HTMLBridgeElement, SuperClass);
      setPrototypeOf(HTMLBridgeElement.prototype, SuperClass.prototype);
      defineProperty(HTMLBridgeElement.prototype, 'constructor', {
        writable: true,
        configurable: true,
        value: HTMLBridgeElement
      });
    } // generating the hash table for attributes to avoid duplicate fields and facilitate validation
    // and false positives in case of inheritance.


    const attributeToPropMap = create(null);
    const {
      attributeChangedCallback: superAttributeChangedCallback
    } = SuperClass.prototype;
    const {
      observedAttributes: superObservedAttributes = []
    } = SuperClass;
    const descriptors = create(null); // expose getters and setters for each public props on the new Element Bridge

    for (let i = 0, len = props.length; i < len; i += 1) {
      const propName = props[i];
      attributeToPropMap[htmlPropertyToAttribute(propName)] = propName;
      descriptors[propName] = {
        get: createGetter(propName),
        set: createSetter(propName),
        enumerable: true,
        configurable: true
      };
    } // expose public methods as props on the new Element Bridge


    for (let i = 0, len = methods.length; i < len; i += 1) {
      const methodName = methods[i];
      descriptors[methodName] = {
        value: createMethodCaller(methodName),
        writable: true,
        configurable: true
      };
    } // creating a new attributeChangedCallback per bridge because they are bound to the corresponding
    // map of attributes to props. We do this after all other props and methods to avoid the possibility
    // of getting overrule by a class declaration in user-land, and we make it non-writable, non-configurable
    // to preserve this definition.


    descriptors.attributeChangedCallback = {
      value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
    }; // Specify attributes for which we want to reflect changes back to their corresponding
    // properties via attributeChangedCallback.

    defineProperty(HTMLBridgeElement, 'observedAttributes', {
      get() {
        return [...superObservedAttributes, ...keys(attributeToPropMap)];
      }

    });
    defineProperties(HTMLBridgeElement.prototype, descriptors);
    return HTMLBridgeElement;
  }

  const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor$1, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), []);
  freeze(BaseBridgeElement);
  seal(BaseBridgeElement.prototype);
  /*
   * Copyright (c) 2020, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  function resolveCircularModuleDependency(fn) {
    const module = fn();
    return (module === null || module === void 0 ? void 0 : module.__esModule) ? module.default : module;
  }

  function isCircularModuleDependency(obj) {
    return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
  }
  /*
   * Copyright (c) 2020, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const swappedTemplateMap = new WeakMap();
  const swappedComponentMap = new WeakMap();
  const swappedStyleMap = new WeakMap();
  const activeTemplates = new WeakMap();
  const activeComponents = new WeakMap();
  const activeStyles = new WeakMap();

  function getTemplateOrSwappedTemplate(tpl) {

    if (runtimeFlags.ENABLE_HMR) {
      const visited = new Set();

      while (swappedTemplateMap.has(tpl) && !visited.has(tpl)) {
        visited.add(tpl);
        tpl = swappedTemplateMap.get(tpl);
      }
    }

    return tpl;
  }

  function getComponentOrSwappedComponent(Ctor) {

    if (runtimeFlags.ENABLE_HMR) {
      const visited = new Set();

      while (swappedComponentMap.has(Ctor) && !visited.has(Ctor)) {
        visited.add(Ctor);
        Ctor = swappedComponentMap.get(Ctor);
      }
    }

    return Ctor;
  }

  function getStyleOrSwappedStyle(style) {

    if (runtimeFlags.ENABLE_HMR) {
      const visited = new Set();

      while (swappedStyleMap.has(style) && !visited.has(style)) {
        visited.add(style);
        style = swappedStyleMap.get(style);
      }
    }

    return style;
  }

  function setActiveVM(vm) {

    if (runtimeFlags.ENABLE_HMR) {
      // tracking active component
      const Ctor = vm.def.ctor;
      let componentVMs = activeComponents.get(Ctor);

      if (isUndefined$1(componentVMs)) {
        componentVMs = new Set();
        activeComponents.set(Ctor, componentVMs);
      } // this will allow us to keep track of the hot components


      componentVMs.add(vm); // tracking active template

      const tpl = vm.cmpTemplate;

      if (tpl) {
        let templateVMs = activeTemplates.get(tpl);

        if (isUndefined$1(templateVMs)) {
          templateVMs = new Set();
          activeTemplates.set(tpl, templateVMs);
        } // this will allow us to keep track of the templates that are
        // being used by a hot component


        templateVMs.add(vm); // tracking active styles associated to template

        const stylesheets = tpl.stylesheets;

        if (!isUndefined$1(stylesheets)) {
          flattenStylesheets(stylesheets).forEach(stylesheet => {
            // this is necessary because we don't hold the list of styles
            // in the vm, we only hold the selected (already swapped template)
            // but the styles attached to the template might not be the actual
            // active ones, but the swapped versions of those.
            stylesheet = getStyleOrSwappedStyle(stylesheet);
            let stylesheetVMs = activeStyles.get(stylesheet);

            if (isUndefined$1(stylesheetVMs)) {
              stylesheetVMs = new Set();
              activeStyles.set(stylesheet, stylesheetVMs);
            } // this will allow us to keep track of the stylesheet that are
            // being used by a hot component


            stylesheetVMs.add(vm);
          });
        }
      }
    }
  }

  function removeActiveVM(vm) {

    if (runtimeFlags.ENABLE_HMR) {
      // tracking inactive component
      const Ctor = vm.def.ctor;
      let list = activeComponents.get(Ctor);

      if (!isUndefined$1(list)) {
        // deleting the vm from the set to avoid leaking memory
        list.delete(vm);
      } // removing inactive template


      const tpl = vm.cmpTemplate;

      if (tpl) {
        list = activeTemplates.get(tpl);

        if (!isUndefined$1(list)) {
          // deleting the vm from the set to avoid leaking memory
          list.delete(vm);
        } // removing active styles associated to template


        const styles = tpl.stylesheets;

        if (!isUndefined$1(styles)) {
          flattenStylesheets(styles).forEach(style => {
            list = activeStyles.get(style);

            if (!isUndefined$1(list)) {
              // deleting the vm from the set to avoid leaking memory
              list.delete(vm);
            }
          });
        }
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const CtorToDefMap = new WeakMap();

  function getCtorProto(Ctor) {
    let proto = getPrototypeOf$1(Ctor);

    if (isNull(proto)) {
      throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
    } // covering the cases where the ref is circular in AMD


    if (isCircularModuleDependency(proto)) {
      const p = resolveCircularModuleDependency(proto);

      {
        if (isNull(p)) {
          throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
        }
      } // escape hatch for Locker and other abstractions to provide their own base class instead
      // of our Base class without having to leak it to user-land. If the circular function returns
      // itself, that's the signal that we have hit the end of the proto chain, which must always
      // be base.


      proto = p === proto ? LightningElement : p;
    }

    return proto;
  }

  function createComponentDef(Ctor) {
    const {
      shadowSupportMode: ctorShadowSupportMode,
      renderMode: ctorRenderMode
    } = Ctor;

    {
      const ctorName = Ctor.name; // Removing the following assert until https://bugs.webkit.org/show_bug.cgi?id=190140 is fixed.
      // assert.isTrue(ctorName && isString(ctorName), `${toString(Ctor)} should have a "name" property with string value, but found ${ctorName}.`);

      assert.isTrue(Ctor.constructor, `Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);

      if (!isUndefined$1(ctorShadowSupportMode)) {
        assert.invariant(ctorShadowSupportMode === "any"
        /* Any */
        || ctorShadowSupportMode === "reset"
        /* Default */
        , `Invalid value for static property shadowSupportMode: '${ctorShadowSupportMode}'`);
      }

      if (!isUndefined$1(ctorRenderMode)) {
        assert.invariant(ctorRenderMode === 'light' || ctorRenderMode === 'shadow', `Invalid value for static property renderMode: '${ctorRenderMode}'. renderMode must be either 'light' or 'shadow'.`);
      }
    }

    const decoratorsMeta = getDecoratorsMeta(Ctor);
    const {
      apiFields,
      apiFieldsConfig,
      apiMethods,
      wiredFields,
      wiredMethods,
      observedFields
    } = decoratorsMeta;
    const proto = Ctor.prototype;
    let {
      connectedCallback,
      disconnectedCallback,
      renderedCallback,
      errorCallback,
      render
    } = proto;
    const superProto = getCtorProto(Ctor);
    const superDef = superProto !== LightningElement ? getComponentInternalDef(superProto) : lightingElementDef;
    const bridge = HTMLBridgeElementFactory(superDef.bridge, keys(apiFields), keys(apiMethods));
    const props = assign(create(null), superDef.props, apiFields);
    const propsConfig = assign(create(null), superDef.propsConfig, apiFieldsConfig);
    const methods = assign(create(null), superDef.methods, apiMethods);
    const wire = assign(create(null), superDef.wire, wiredFields, wiredMethods);
    connectedCallback = connectedCallback || superDef.connectedCallback;
    disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
    renderedCallback = renderedCallback || superDef.renderedCallback;
    errorCallback = errorCallback || superDef.errorCallback;
    render = render || superDef.render;
    let shadowSupportMode = superDef.shadowSupportMode;

    if (!isUndefined$1(ctorShadowSupportMode)) {
      shadowSupportMode = ctorShadowSupportMode;
    }

    let renderMode = superDef.renderMode;

    if (!isUndefined$1(ctorRenderMode)) {
      renderMode = ctorRenderMode === 'light' ? 0
      /* Light */
      : 1
      /* Shadow */
      ;
    }

    const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
    const name = Ctor.name || superDef.name; // installing observed fields into the prototype.

    defineProperties(proto, observedFields);
    const def = {
      ctor: Ctor,
      name,
      wire,
      props,
      propsConfig,
      methods,
      bridge,
      template,
      renderMode,
      shadowSupportMode,
      connectedCallback,
      disconnectedCallback,
      renderedCallback,
      errorCallback,
      render
    };

    {
      freeze(Ctor.prototype);
    }

    return def;
  }
  /**
   * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
   * subject to change or being removed.
   */


  function isComponentConstructor(ctor) {
    if (!isFunction$1(ctor)) {
      return false;
    } // Fast path: LightningElement is part of the prototype chain of the constructor.


    if (ctor.prototype instanceof LightningElement) {
      return true;
    } // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
    // climb up the constructor prototype chain to check in case there are circular dependencies
    // to resolve.


    let current = ctor;

    do {
      if (isCircularModuleDependency(current)) {
        const circularResolved = resolveCircularModuleDependency(current); // If the circular function returns itself, that's the signal that we have hit the end
        // of the proto chain, which must always be a valid base constructor.

        if (circularResolved === current) {
          return true;
        }

        current = circularResolved;
      }

      if (current === LightningElement) {
        return true;
      }
    } while (!isNull(current) && (current = getPrototypeOf$1(current))); // Finally return false if the LightningElement is not part of the prototype chain.


    return false;
  }

  function getComponentInternalDef(Ctor) {
    {
      Ctor = getComponentOrSwappedComponent(Ctor);
    }

    let def = CtorToDefMap.get(Ctor);

    if (isUndefined$1(def)) {
      if (isCircularModuleDependency(Ctor)) {
        const resolvedCtor = resolveCircularModuleDependency(Ctor);
        def = getComponentInternalDef(resolvedCtor); // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
        // look up the definition in cache instead of re-resolving and recreating the def.

        CtorToDefMap.set(Ctor, def);
        return def;
      }

      if (!isComponentConstructor(Ctor)) {
        throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
      }

      def = createComponentDef(Ctor);
      CtorToDefMap.set(Ctor, def);
    }

    return def;
  }

  function getComponentHtmlPrototype(Ctor) {
    const def = getComponentInternalDef(Ctor);
    return def.bridge;
  }

  const lightingElementDef = {
    ctor: LightningElement,
    name: LightningElement.name,
    props: lightningBasedDescriptors,
    propsConfig: EmptyObject,
    methods: EmptyObject,
    renderMode: 1
    /* Shadow */
    ,
    shadowSupportMode: "reset"
    /* Default */
    ,
    wire: EmptyObject,
    bridge: BaseBridgeElement,
    template: defaultEmptyTemplate,
    render: LightningElement.prototype.render
  };
  /*
   * Copyright (c) 2020, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function getUpgradableConstructor(tagName) {
    // Should never get a tag with upper case letter at this point, the compiler should
    // produce only tags with lowercase letters
    // But, for backwards compatibility, we will lower case the tagName
    tagName = tagName.toLowerCase();
    let CE = getCustomElement$1(tagName);

    if (!isUndefined$1(CE)) {
      return CE;
    }
    /**
     * LWC Upgradable Element reference to an element that was created
     * via the scoped registry mechanism, and that is ready to be upgraded.
     */


    CE = class LWCUpgradableElement extends HTMLElementExported$1 {
      constructor(upgradeCallback) {
        super();

        if (isFunction$1(upgradeCallback)) {
          upgradeCallback(this); // nothing to do with the result for now
        }
      }
      /*LWC compiler v2.11.3*/


    };
    defineCustomElement$1(tagName, CE);
    return CE;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function isVBaseElement(vnode) {
    const {
      type
    } = vnode;
    return type === 2
    /* Element */
    || type === 3
    /* CustomElement */
    ;
  }

  function isSameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const ColonCharCode = 58;

  function patchAttributes(oldVnode, vnode) {
    const {
      attrs
    } = vnode.data;

    if (isUndefined$1(attrs)) {
      return;
    }

    const oldAttrs = isNull(oldVnode) ? EmptyObject : oldVnode.data.attrs;

    if (oldAttrs === attrs) {
      return;
    }

    const {
      elm
    } = vnode;

    for (const key in attrs) {
      const cur = attrs[key];
      const old = oldAttrs[key];

      if (old !== cur) {
        unlockAttribute(elm, key);

        if (StringCharCodeAt.call(key, 3) === ColonCharCode) {
          // Assume xml namespace
          setAttribute$1(elm, key, cur, XML_NAMESPACE);
        } else if (StringCharCodeAt.call(key, 5) === ColonCharCode) {
          // Assume xlink namespace
          setAttribute$1(elm, key, cur, XLINK_NAMESPACE);
        } else if (isNull(cur) || isUndefined$1(cur)) {
          removeAttribute$1(elm, key);
        } else {
          setAttribute$1(elm, key, cur);
        }

        lockAttribute();
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function isLiveBindingProp(sel, key) {
    // For properties with live bindings, we read values from the DOM element
    // instead of relying on internally tracked values.
    return sel === 'input' && (key === 'value' || key === 'checked');
  }

  function patchProps(oldVnode, vnode) {
    const {
      props
    } = vnode.data;

    if (isUndefined$1(props)) {
      return;
    }

    const oldProps = isNull(oldVnode) ? EmptyObject : oldVnode.data.props;

    if (oldProps === props) {
      return;
    }

    const isFirstPatch = isNull(oldVnode);
    const {
      elm,
      sel
    } = vnode;

    for (const key in props) {
      const cur = props[key]; // Set the property if it's the first time is is patched or if the previous property is
      // different than the one previously set.

      if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? getProperty$1(elm, key) : oldProps[key])) {
        setProperty$1(elm, key, cur);
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const classNameToClassMap = create(null);

  function getMapFromClassName(className) {
    // Intentionally using == to match undefined and null values from computed style attribute
    if (className == null) {
      return EmptyObject;
    } // computed class names must be string


    className = isString(className) ? className : className + '';
    let map = classNameToClassMap[className];

    if (map) {
      return map;
    }

    map = create(null);
    let start = 0;
    let o;
    const len = className.length;

    for (o = 0; o < len; o++) {
      if (StringCharCodeAt.call(className, o) === SPACE_CHAR) {
        if (o > start) {
          map[StringSlice.call(className, start, o)] = true;
        }

        start = o + 1;
      }
    }

    if (o > start) {
      map[StringSlice.call(className, start, o)] = true;
    }

    classNameToClassMap[className] = map;

    {
      // just to make sure that this object never changes as part of the diffing algo
      freeze(map);
    }

    return map;
  }

  function patchClassAttribute(oldVnode, vnode) {
    const {
      elm,
      data: {
        className: newClass
      }
    } = vnode;
    const oldClass = isNull(oldVnode) ? undefined : oldVnode.data.className;

    if (oldClass === newClass) {
      return;
    }

    const classList = getClassList$1(elm);
    const newClassMap = getMapFromClassName(newClass);
    const oldClassMap = getMapFromClassName(oldClass);
    let name;

    for (name in oldClassMap) {
      // remove only if it is not in the new class collection and it is not set from within the instance
      if (isUndefined$1(newClassMap[name])) {
        classList.remove(name);
      }
    }

    for (name in newClassMap) {
      if (isUndefined$1(oldClassMap[name])) {
        classList.add(name);
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // The style property is a string when defined via an expression in the template.


  function patchStyleAttribute(oldVnode, vnode) {
    const {
      elm,
      data: {
        style: newStyle
      }
    } = vnode;
    const oldStyle = isNull(oldVnode) ? undefined : oldVnode.data.style;

    if (oldStyle === newStyle) {
      return;
    }

    if (!isString(newStyle) || newStyle === '') {
      removeAttribute$1(elm, 'style');
    } else {
      setAttribute$1(elm, 'style', newStyle);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function applyEventListeners(vnode) {
    const {
      elm,
      data: {
        on
      }
    } = vnode;

    if (isUndefined$1(on)) {
      return;
    }

    for (const name in on) {
      const handler = on[name];
      addEventListener$1(elm, name, handler);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // The HTML class property becomes the vnode.data.classMap object when defined as a string in the template.
  // The compiler takes care of transforming the inline classnames into an object. It's faster to set the
  // different classnames properties individually instead of via a string.


  function applyStaticClassAttribute(vnode) {
    const {
      elm,
      data: {
        classMap
      }
    } = vnode;

    if (isUndefined$1(classMap)) {
      return;
    }

    const classList = getClassList$1(elm);

    for (const name in classMap) {
      classList.add(name);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // The HTML style property becomes the vnode.data.styleDecls object when defined as a string in the template.
  // The compiler takes care of transforming the inline style into an object. It's faster to set the
  // different style properties individually instead of via a string.


  function applyStaticStyleAttribute(vnode) {
    const {
      elm,
      data: {
        styleDecls
      }
    } = vnode;

    if (isUndefined$1(styleDecls)) {
      return;
    }

    for (let i = 0; i < styleDecls.length; i++) {
      const [prop, value, important] = styleDecls[i];
      setCSSStyleProperty$1(elm, prop, value, important);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  function patchChildren(c1, c2, parent) {
    if (hasDynamicChildren(c2)) {
      updateDynamicChildren(c1, c2, parent);
    } else {
      updateStaticChildren(c1, c2, parent);
    }
  }

  function patch(n1, n2) {
    if (n1 === n2) {
      return;
    }

    {
      if (!isSameVnode(n1, n2)) {
        throw new Error('Expected these VNodes to be the same: ' + JSON.stringify({
          sel: n1.sel,
          key: n1.key
        }) + ', ' + JSON.stringify({
          sel: n2.sel,
          key: n2.key
        }));
      }
    }

    switch (n2.type) {
      case 0
      /* Text */
      :
        patchText(n1, n2);
        break;

      case 1
      /* Comment */
      :
        patchComment(n1, n2);
        break;

      case 2
      /* Element */
      :
        patchElement(n1, n2);
        break;

      case 3
      /* CustomElement */
      :
        patchCustomElement(n1, n2);
        break;
    }
  }

  function mount(node, parent, anchor) {
    switch (node.type) {
      case 0
      /* Text */
      :
        mountText(node, parent, anchor);
        break;

      case 1
      /* Comment */
      :
        mountComment(node, parent, anchor);
        break;

      case 2
      /* Element */
      :
        mountElement(node, parent, anchor);
        break;

      case 3
      /* CustomElement */
      :
        mountCustomElement(node, parent, anchor);
        break;
    }
  }

  function patchText(n1, n2) {
    n2.elm = n1.elm;

    if (n2.text !== n1.text) {
      updateTextContent(n2);
    }
  }

  function mountText(node, parent, anchor) {
    const {
      owner
    } = node;
    const textNode = node.elm = createText$1(node.text);
    linkNodeToShadow(textNode, owner);
    insertNode(textNode, parent, anchor);
  }

  function patchComment(n1, n2) {
    n2.elm = n1.elm; // FIXME: Comment nodes should be static, we shouldn't need to diff them together. However
    // it is the case today.

    if (n2.text !== n1.text) {
      updateTextContent(n2);
    }
  }

  function mountComment(node, parent, anchor) {
    const {
      owner
    } = node;
    const commentNode = node.elm = createComment$1(node.text);
    linkNodeToShadow(commentNode, owner);
    insertNode(commentNode, parent, anchor);
  }

  function mountElement(vnode, parent, anchor) {
    const {
      sel,
      owner,
      data: {
        svg
      }
    } = vnode;
    const namespace = isTrue(svg) ? SVG_NAMESPACE : undefined;
    const elm = createElement$2(sel, namespace);
    linkNodeToShadow(elm, owner);
    fallbackElmHook(elm, vnode);
    vnode.elm = elm;
    patchElementPropsAndAttrs$1(null, vnode);
    insertNode(elm, parent, anchor);
    mountVNodes(vnode.children, elm, null);
  }

  function patchElement(n1, n2) {
    const elm = n2.elm = n1.elm;
    patchElementPropsAndAttrs$1(n1, n2);
    patchChildren(n1.children, n2.children, elm);
  }

  function mountCustomElement(vnode, parent, anchor) {
    const {
      sel,
      owner
    } = vnode;
    const UpgradableConstructor = getUpgradableConstructor(sel);
    /**
     * Note: if the upgradable constructor does not expect, or throw when we new it
     * with a callback as the first argument, we could implement a more advanced
     * mechanism that only passes that argument if the constructor is known to be
     * an upgradable custom element.
     */

    let vm;
    const elm = new UpgradableConstructor(elm => {
      // the custom element from the registry is expecting an upgrade callback
      vm = createViewModelHook(elm, vnode);
    });
    linkNodeToShadow(elm, owner);
    vnode.elm = elm;
    vnode.vm = vm;

    if (vm) {
      allocateChildren(vnode, vm);
    } else if (vnode.ctor !== UpgradableConstructor) {
      throw new TypeError(`Incorrect Component Constructor`);
    }

    patchElementPropsAndAttrs$1(null, vnode);
    insertNode(elm, parent, anchor);

    if (vm) {
      {
        assert.isTrue(vm.state === 0
        /* created */
        , `${vm} cannot be recycled.`);
      }

      runConnectedCallback(vm);
    }

    mountVNodes(vnode.children, elm, null);

    if (vm) {
      appendVM(vm);
    }
  }

  function patchCustomElement(n1, n2) {
    const elm = n2.elm = n1.elm;
    const vm = n2.vm = n1.vm;
    patchElementPropsAndAttrs$1(n1, n2);

    if (!isUndefined$1(vm)) {
      // in fallback mode, the allocation will always set children to
      // empty and delegate the real allocation to the slot elements
      allocateChildren(n2, vm);
    } // in fallback mode, the children will be always empty, so, nothing
    // will happen, but in native, it does allocate the light dom


    patchChildren(n1.children, n2.children, elm);

    if (!isUndefined$1(vm)) {
      // this will probably update the shadowRoot, but only if the vm is in a dirty state
      // this is important to preserve the top to bottom synchronous rendering phase.
      rerenderVM(vm);
    }
  }

  function mountVNodes(vnodes, parent, anchor, start = 0, end = vnodes.length) {
    for (; start < end; ++start) {
      const vnode = vnodes[start];

      if (isVNode(vnode)) {
        mount(vnode, parent, anchor);
      }
    }
  }

  function unmount(vnode, parent, doRemove = false) {
    const {
      type,
      elm
    } = vnode; // When unmounting a VNode subtree not all the elements have to removed from the DOM. The
    // subtree root, is the only element worth unmounting from the subtree.

    if (doRemove) {
      removeNode(elm, parent);
    }

    switch (type) {
      case 2
      /* Element */
      :
        unmountVNodes(vnode.children, elm);
        break;

      case 3
      /* CustomElement */
      :
        {
          const {
            vm
          } = vnode; // No need to unmount the children here, `removeVM` will take care of removing the
          // children.

          if (!isUndefined$1(vm)) {
            removeVM(vm);
          }
        }
    }
  }

  function unmountVNodes(vnodes, parent, doRemove = false, start = 0, end = vnodes.length) {
    for (; start < end; ++start) {
      const ch = vnodes[start];

      if (isVNode(ch)) {
        unmount(ch, parent, doRemove);
      }
    }
  }

  function isVNode(vnode) {
    return vnode != null;
  }

  function observeElementChildNodes(elm) {
    elm.$domManual$ = true;
  }

  function setElementShadowToken(elm, token) {
    elm.$shadowToken$ = token;
  } // Set the scope token class for *.scoped.css styles


  function setScopeTokenClassIfNecessary(elm, owner) {
    const {
      cmpTemplate,
      context
    } = owner;
    const token = cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.stylesheetToken;

    if (!isUndefined$1(token) && context.hasScopedStyles) {
      getClassList$1(elm).add(token);
    }
  }

  function linkNodeToShadow(elm, owner) {
    const {
      renderRoot,
      renderMode,
      shadowMode
    } = owner; // TODO [#1164]: this should eventually be done by the polyfill directly

    if (isSyntheticShadowDefined$1) {
      if (shadowMode === 1
      /* Synthetic */
      || renderMode === 0
      /* Light */
      ) {
        elm[KEY__SHADOW_RESOLVER] = renderRoot[KEY__SHADOW_RESOLVER];
      }
    }
  }

  function updateTextContent(vnode) {
    const {
      elm,
      text
    } = vnode;

    {
      unlockDomMutation();
    }

    setText$1(elm, text);

    {
      lockDomMutation();
    }
  }

  function insertNode(node, parent, anchor) {
    {
      unlockDomMutation();
    }

    insert$1(node, parent, anchor);

    {
      lockDomMutation();
    }
  }

  function removeNode(node, parent) {
    {
      unlockDomMutation();
    }

    remove$1(node, parent);

    {
      lockDomMutation();
    }
  }

  function patchElementPropsAndAttrs$1(oldVnode, vnode) {
    if (isNull(oldVnode)) {
      applyEventListeners(vnode);
      applyStaticClassAttribute(vnode);
      applyStaticStyleAttribute(vnode);
    } // Attrs need to be applied to element before props IE11 will wipe out value on radio inputs if
    // value is set before type=radio.


    patchClassAttribute(oldVnode, vnode);
    patchStyleAttribute(oldVnode, vnode);
    patchAttributes(oldVnode, vnode);
    patchProps(oldVnode, vnode);
  }

  function fallbackElmHook(elm, vnode) {
    const {
      owner
    } = vnode;
    setScopeTokenClassIfNecessary(elm, owner);

    if (owner.shadowMode === 1
    /* Synthetic */
    ) {
      const {
        data: {
          context
        }
      } = vnode;
      const {
        stylesheetToken
      } = owner.context;

      if (!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual"
      /* Manual */
      ) {
        // this element will now accept any manual content inserted into it
        observeElementChildNodes(elm);
      }

      if (!isUndefined$1(stylesheetToken)) {
        // when running in synthetic shadow mode, we need to set the shadowToken value
        // into each element from the template, so they can be styled accordingly.
        setElementShadowToken(elm, stylesheetToken);
      }
    }

    {
      const {
        data: {
          context
        }
      } = vnode;
      const isPortal = !isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual"
      /* Manual */
      ;
      const isLight = owner.renderMode === 0
      /* Light */
      ;
      patchElementWithRestrictions(elm, {
        isPortal,
        isLight
      });
    }
  }

  function allocateChildren(vnode, vm) {
    // A component with slots will re-render because:
    // 1- There is a change of the internal state.
    // 2- There is a change on the external api (ex: slots)
    //
    // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
    // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
    // in a reused VCustomElement, there won't be any slotted children.
    // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
    //
    // In case #2, we will always get a fresh VCustomElement.
    const children = vnode.aChildren || vnode.children;
    vm.aChildren = children;
    const {
      renderMode,
      shadowMode
    } = vm;

    if (shadowMode === 1
    /* Synthetic */
    || renderMode === 0
    /* Light */
    ) {
      // slow path
      allocateInSlot(vm, children); // save the allocated children in case this vnode is reused.

      vnode.aChildren = children; // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!

      vnode.children = EmptyArray;
    }
  }

  function createViewModelHook(elm, vnode) {
    let vm = getAssociatedVMIfPresent(elm); // There is a possibility that a custom element is registered under tagName, in which case, the
    // initialization is already carry on, and there is nothing else to do here since this hook is
    // called right after invoking `document.createElement`.

    if (!isUndefined$1(vm)) {
      return vm;
    }

    const {
      sel,
      mode,
      ctor,
      owner
    } = vnode;
    setScopeTokenClassIfNecessary(elm, owner);

    if (owner.shadowMode === 1
    /* Synthetic */
    ) {
      const {
        stylesheetToken
      } = owner.context; // when running in synthetic shadow mode, we need to set the shadowToken value
      // into each element from the template, so they can be styled accordingly.

      if (!isUndefined$1(stylesheetToken)) {
        setElementShadowToken(elm, stylesheetToken);
      }
    }

    vm = createVM(elm, ctor, {
      mode,
      owner,
      tagName: sel
    });

    {
      assert.isTrue(isArray$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
    }

    return vm;
  }

  function allocateInSlot(vm, children) {
    var _a;

    const {
      cmpSlots: oldSlots
    } = vm;
    const cmpSlots = vm.cmpSlots = create(null);

    for (let i = 0, len = children.length; i < len; i += 1) {
      const vnode = children[i];

      if (isNull(vnode)) {
        continue;
      }

      let slotName = '';

      if (isVBaseElement(vnode)) {
        slotName = ((_a = vnode.data.attrs) === null || _a === void 0 ? void 0 : _a.slot) || '';
      }

      const vnodes = cmpSlots[slotName] = cmpSlots[slotName] || []; // re-keying the vnodes is necessary to avoid conflicts with default content for the slot
      // which might have similar keys. Each vnode will always have a key that
      // starts with a numeric character from compiler. In this case, we add a unique
      // notation for slotted vnodes keys, e.g.: `@foo:1:1`

      if (!isUndefined$1(vnode.key)) {
        vnode.key = `@${slotName}:${vnode.key}`;
      }

      ArrayPush$1.call(vnodes, vnode);
    }

    if (isFalse(vm.isDirty)) {
      // We need to determine if the old allocation is really different from the new one
      // and mark the vm as dirty
      const oldKeys = keys(oldSlots);

      if (oldKeys.length !== keys(cmpSlots).length) {
        markComponentAsDirty(vm);
        return;
      }

      for (let i = 0, len = oldKeys.length; i < len; i += 1) {
        const key = oldKeys[i];

        if (isUndefined$1(cmpSlots[key]) || oldSlots[key].length !== cmpSlots[key].length) {
          markComponentAsDirty(vm);
          return;
        }

        const oldVNodes = oldSlots[key];
        const vnodes = cmpSlots[key];

        for (let j = 0, a = cmpSlots[key].length; j < a; j += 1) {
          if (oldVNodes[j] !== vnodes[j]) {
            markComponentAsDirty(vm);
            return;
          }
        }
      }
    }
  } // Using a WeakMap instead of a WeakSet because this one works in IE11 :(


  const FromIteration = new WeakMap(); // dynamic children means it was generated by an iteration
  // in a template, and will require a more complex diffing algo.

  function markAsDynamicChildren(children) {
    FromIteration.set(children, 1);
  }

  function hasDynamicChildren(children) {
    return FromIteration.has(children);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    const map = {}; // TODO [#1637]: simplify this by assuming that all vnodes has keys

    for (let j = beginIdx; j <= endIdx; ++j) {
      const ch = children[j];

      if (isVNode(ch)) {
        const {
          key
        } = ch;

        if (key !== undefined) {
          map[key] = j;
        }
      }
    }

    return map;
  }

  function updateDynamicChildren(oldCh, newCh, parent) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    const newChEnd = newCh.length - 1;
    let newEndIdx = newChEnd;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx;
    let idxInOld;
    let elmToMove;
    let before;
    let clonedOldCh = false;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (!isVNode(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
      } else if (!isVNode(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (!isVNode(newStartVnode)) {
        newStartVnode = newCh[++newStartIdx];
      } else if (!isVNode(newEndVnode)) {
        newEndVnode = newCh[--newEndIdx];
      } else if (isSameVnode(oldStartVnode, newStartVnode)) {
        patch(oldStartVnode, newStartVnode);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (isSameVnode(oldEndVnode, newEndVnode)) {
        patch(oldEndVnode, newEndVnode);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (isSameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patch(oldStartVnode, newEndVnode);
        insertNode(oldStartVnode.elm, parent, nextSibling$1(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (isSameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patch(oldEndVnode, newStartVnode);
        insertNode(newStartVnode.elm, parent, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = oldKeyToIdx[newStartVnode.key];

        if (isUndefined$1(idxInOld)) {
          // New element
          mount(newStartVnode, parent, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];

          if (isVNode(elmToMove)) {
            if (elmToMove.sel !== newStartVnode.sel) {
              // New element
              mount(newStartVnode, parent, oldStartVnode.elm);
            } else {
              patch(elmToMove, newStartVnode); // Delete the old child, but copy the array since it is read-only.
              // The `oldCh` will be GC'ed after `updateDynamicChildren` is complete,
              // so we only care about the `oldCh` object inside this function.
              // To avoid cloning over and over again, we check `clonedOldCh`
              // and only clone once.

              if (!clonedOldCh) {
                clonedOldCh = true;
                oldCh = [...oldCh];
              } // We've already cloned at least once, so it's no longer read-only


              oldCh[idxInOld] = undefined;
              insertNode(elmToMove.elm, parent, oldStartVnode.elm);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }
    }

    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
      if (oldStartIdx > oldEndIdx) {
        // There's some cases in which the sub array of vnodes to be inserted is followed by null(s) and an
        // already processed vnode, in such cases the vnodes to be inserted should be before that processed vnode.
        let i = newEndIdx;
        let n;

        do {
          n = newCh[++i];
        } while (!isVNode(n) && i < newChEnd);

        before = isVNode(n) ? n.elm : null;
        mountVNodes(newCh, parent, before, newStartIdx, newEndIdx + 1);
      } else {
        unmountVNodes(oldCh, parent, true, oldStartIdx, oldEndIdx + 1);
      }
    }
  }

  function updateStaticChildren(c1, c2, parent) {
    const c1Length = c1.length;
    const c2Length = c2.length;

    if (c1Length === 0) {
      // the old list is empty, we can directly insert anything new
      mountVNodes(c2, parent, null);
      return;
    }

    if (c2Length === 0) {
      // the old list is nonempty and the new list is empty so we can directly remove all old nodes
      // this is the case in which the dynamic children of an if-directive should be removed
      unmountVNodes(c1, parent, true);
      return;
    } // if the old list is not empty, the new list MUST have the same
    // amount of nodes, that's why we call this static children


    let anchor = null;

    for (let i = c2Length - 1; i >= 0; i -= 1) {
      const n1 = c1[i];
      const n2 = c2[i];

      if (n2 !== n1) {
        if (isVNode(n1)) {
          if (isVNode(n2)) {
            // both vnodes are equivalent, and we just need to patch them
            patch(n1, n2);
            anchor = n2.elm;
          } else {
            // removing the old vnode since the new one is null
            unmount(n1, parent, true);
          }
        } else if (isVNode(n2)) {
          mount(n2, parent, anchor);
          anchor = n2.elm;
        }
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const SymbolIterator = Symbol.iterator;

  function addVNodeToChildLWC(vnode) {
    ArrayPush$1.call(getVMBeingRendered().velements, vnode);
  } // [h]tml node


  function h(sel, data, children = EmptyArray) {
    const vmBeingRendered = getVMBeingRendered();

    {
      assert.isTrue(isString(sel), `h() 1st argument sel must be a string.`);
      assert.isTrue(isObject(data), `h() 2nd argument data must be an object.`);
      assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
      assert.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`); // checking reserved internal data properties

      assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
      assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);

      if (data.style && !isString(data.style)) {
        logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
      }

      forEach.call(children, childVnode => {
        if (childVnode != null) {
          assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
        }
      });
    }

    let elm;
    const {
      key
    } = data;
    return {
      type: 2
      /* Element */
      ,
      sel,
      data,
      children,
      elm,
      key,
      owner: vmBeingRendered
    };
  } // [t]ab[i]ndex function


  function ti(value) {
    // if value is greater than 0, we normalize to 0
    // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
    // If value is less than -1, we don't care
    const shouldNormalize = value > 0 && !(isTrue(value) || isFalse(value));

    {
      const vmBeingRendered = getVMBeingRendered();

      if (shouldNormalize) {
        logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
      }
    }

    return shouldNormalize ? 0 : value;
  } // [s]lot element node


  function s(slotName, data, children, slotset) {
    {
      assert.isTrue(isString(slotName), `s() 1st argument slotName must be a string.`);
      assert.isTrue(isObject(data), `s() 2nd argument data must be an object.`);
      assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
    }

    if (!isUndefined$1(slotset) && !isUndefined$1(slotset[slotName]) && slotset[slotName].length !== 0) {
      children = slotset[slotName];
    }

    const vmBeingRendered = getVMBeingRendered();
    const {
      renderMode,
      shadowMode
    } = vmBeingRendered;

    if (renderMode === 0
    /* Light */
    ) {
      sc(children);
      return children;
    }

    if (shadowMode === 1
    /* Synthetic */
    ) {
      // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
      sc(children);
    }

    return h('slot', data, children);
  } // [c]ustom element node


  function c(sel, Ctor, data, children = EmptyArray) {
    const vmBeingRendered = getVMBeingRendered();

    {
      assert.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
      assert.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
      assert.isTrue(isObject(data), `c() 3nd argument data must be an object.`);
      assert.isTrue(arguments.length === 3 || isArray$1(children), `c() 4nd argument data must be an array.`); // checking reserved internal data properties

      assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
      assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);

      if (data.style && !isString(data.style)) {
        logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
      }

      if (arguments.length === 4) {
        forEach.call(children, childVnode => {
          if (childVnode != null) {
            assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
          }
        });
      }
    }

    const {
      key
    } = data;
    let elm, aChildren, vm;
    const vnode = {
      type: 3
      /* CustomElement */
      ,
      sel,
      data,
      children,
      elm,
      key,
      ctor: Ctor,
      owner: vmBeingRendered,
      mode: 'open',
      aChildren,
      vm
    };
    addVNodeToChildLWC(vnode);
    return vnode;
  } // [i]terable node


  function i(iterable, factory) {
    const list = []; // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic

    sc(list);
    const vmBeingRendered = getVMBeingRendered();

    if (isUndefined$1(iterable) || iterable === null) {
      {
        logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
      }

      return list;
    }

    {
      assert.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
    }

    const iterator = iterable[SymbolIterator]();

    {
      assert.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
    }

    let next = iterator.next();
    let j = 0;
    let {
      value,
      done: last
    } = next;
    let keyMap;
    let iterationError;

    {
      keyMap = create(null);
    }

    while (last === false) {
      // implementing a look-back-approach because we need to know if the element is the last
      next = iterator.next();
      last = next.done; // template factory logic based on the previous collected value

      const vnode = factory(value, j, j === 0, last === true);

      if (isArray$1(vnode)) {
        ArrayPush$1.apply(list, vnode);
      } else {
        ArrayPush$1.call(list, vnode);
      }

      {
        const vnodes = isArray$1(vnode) ? vnode : [vnode];
        forEach.call(vnodes, childVnode => {
          if (!isNull(childVnode) && isObject(childVnode) && !isUndefined$1(childVnode.sel)) {
            const {
              key
            } = childVnode;

            if (isString(key) || isNumber(key)) {
              if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
                iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
              }

              keyMap[key] = 1;
            } else if (isUndefined$1(iterationError)) {
              iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
            }
          }
        });
      } // preparing next value


      j += 1;
      value = next.value;
    }

    {
      if (!isUndefined$1(iterationError)) {
        logError(iterationError, vmBeingRendered);
      }
    }

    return list;
  }
  /**
   * [f]lattening
   */


  function f(items) {
    {
      assert.isTrue(isArray$1(items), 'flattening api can only work with arrays.');
    }

    const len = items.length;
    const flattened = []; // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic

    sc(flattened);

    for (let j = 0; j < len; j += 1) {
      const item = items[j];

      if (isArray$1(item)) {
        ArrayPush$1.apply(flattened, item);
      } else {
        ArrayPush$1.call(flattened, item);
      }
    }

    return flattened;
  } // [t]ext node


  function t(text) {
    let sel, key, elm;
    return {
      type: 0
      /* Text */
      ,
      sel,
      text,
      elm,
      key,
      owner: getVMBeingRendered()
    };
  } // [co]mment node


  function co(text) {
    let sel, key, elm;
    return {
      type: 1
      /* Comment */
      ,
      sel,
      text,
      elm,
      key,
      owner: getVMBeingRendered()
    };
  } // [d]ynamic text


  function d(value) {
    return value == null ? '' : String(value);
  } // [b]ind function


  function b(fn) {
    const vmBeingRendered = getVMBeingRendered();

    if (isNull(vmBeingRendered)) {
      throw new Error();
    }

    const vm = vmBeingRendered;
    return function (event) {
      invokeEventListener(vm, fn, vm.component, event);
    };
  } // [k]ey function


  function k(compilerKey, obj) {
    switch (typeof obj) {
      case 'number':
      case 'string':
        return compilerKey + ':' + obj;

      case 'object':
        {
          assert.fail(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
        }

    }
  } // [g]lobal [id] function


  function gid(id) {
    const vmBeingRendered = getVMBeingRendered();

    if (isUndefined$1(id) || id === '') {
      {
        logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
      }

      return id;
    } // We remove attributes when they are assigned a value of null


    if (isNull(id)) {
      return null;
    }

    const {
      idx,
      shadowMode
    } = vmBeingRendered;

    if (shadowMode === 1
    /* Synthetic */
    ) {
      return StringReplace.call(id, /\S+/g, id => `${id}-${idx}`);
    }

    return id;
  } // [f]ragment [id] function


  function fid(url) {
    const vmBeingRendered = getVMBeingRendered();

    if (isUndefined$1(url) || url === '') {
      {
        if (isUndefined$1(url)) {
          logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
        }
      }

      return url;
    } // We remove attributes when they are assigned a value of null


    if (isNull(url)) {
      return null;
    }

    const {
      idx,
      shadowMode
    } = vmBeingRendered; // Apply transformation only for fragment-only-urls, and only in shadow DOM

    if (shadowMode === 1
    /* Synthetic */
    && /^#/.test(url)) {
      return `${url}-${idx}`;
    }

    return url;
  }
  /**
   * Map to store an index value assigned to any dynamic component reference ingested
   * by dc() api. This allows us to generate a unique unique per template per dynamic
   * component reference to avoid diffing algo mismatches.
   */


  const DynamicImportedComponentMap = new Map();
  let dynamicImportedComponentCounter = 0;
  /**
   * create a dynamic component via `<x-foo lwc:dynamic={Ctor}>`
   */

  function dc(sel, Ctor, data, children = EmptyArray) {
    {
      assert.isTrue(isString(sel), `dc() 1st argument sel must be a string.`);
      assert.isTrue(isObject(data), `dc() 3nd argument data must be an object.`);
      assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 4nd argument data must be an array.`);
    } // null or undefined values should produce a null value in the VNodes


    if (Ctor == null) {
      return null;
    }

    if (!isComponentConstructor(Ctor)) {
      throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
    }

    let idx = DynamicImportedComponentMap.get(Ctor);

    if (isUndefined$1(idx)) {
      idx = dynamicImportedComponentCounter++;
      DynamicImportedComponentMap.set(Ctor, idx);
    } // the new vnode key is a mix of idx and compiler key, this is required by the diffing algo
    // to identify different constructors as vnodes with different keys to avoid reusing the
    // element used for previous constructors.
    // Shallow clone is necessary here becuase VElementData may be shared across VNodes due to
    // hoisting optimization.


    const newData = Object.assign(Object.assign({}, data), {
      key: `dc:${idx}:${data.key}`
    });
    return c(sel, Ctor, newData, children);
  }
  /**
   * slow children collection marking mechanism. this API allows the compiler to signal
   * to the engine that a particular collection of children must be diffed using the slow
   * algo based on keys due to the nature of the list. E.g.:
   *
   *   - slot element's children: the content of the slot has to be dynamic when in synthetic
   *                              shadow mode because the `vnode.children` might be the slotted
   *                              content vs default content, in which case the size and the
   *                              keys are not matching.
   *   - children that contain dynamic components
   *   - children that are produced by iteration
   *
   */


  function sc(vnodes) {
    {
      assert.isTrue(isArray$1(vnodes), 'sc() api can only work with arrays.');
    } // We have to mark the vnodes collection as dynamic so we can later on
    // choose to use the snabbdom virtual dom diffing algo instead of our
    // static dummy algo.


    markAsDynamicChildren(vnodes);
    return vnodes;
  }
  /**
   * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
   * libraries to sanitize HTML content. This hook process the content passed via the template to
   * lwc:inner-html directive.
   * It is meant to be overridden with setSanitizeHtmlContentHook, it throws an error by default.
   */


  let sanitizeHtmlContentHook = () => {
    // locker-service patches this function during runtime to sanitize HTML content.
    throw new Error('sanitizeHtmlContent hook must be implemented.');
  };


  function shc(content) {
    return sanitizeHtmlContentHook();
  }

  const api = freeze({
    s,
    h,
    c,
    i,
    f,
    t,
    d,
    b,
    k,
    co,
    dc,
    ti,
    gid,
    fid,
    shc
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  function makeHostToken(token) {
    return `${token}-host`;
  }

  function createInlineStyleVNode(content) {
    return api.h('style', {
      key: 'style',
      attrs: {
        type: 'text/css'
      }
    }, [api.t(content)]);
  }

  function updateStylesheetToken(vm, template) {
    const {
      elm,
      context,
      renderMode,
      shadowMode
    } = vm;
    const {
      stylesheets: newStylesheets,
      stylesheetToken: newStylesheetToken
    } = template;
    const isSyntheticShadow = renderMode === 1
    /* Shadow */
    && shadowMode === 1
    /* Synthetic */
    ;
    const {
      hasScopedStyles
    } = context;
    let newToken;
    let newHasTokenInClass;
    let newHasTokenInAttribute; // Reset the styling token applied to the host element.

    const {
      stylesheetToken: oldToken,
      hasTokenInClass: oldHasTokenInClass,
      hasTokenInAttribute: oldHasTokenInAttribute
    } = context;

    if (!isUndefined$1(oldToken)) {
      if (oldHasTokenInClass) {
        getClassList$1(elm).remove(makeHostToken(oldToken));
      }

      if (oldHasTokenInAttribute) {
        removeAttribute$1(elm, makeHostToken(oldToken));
      }
    } // Apply the new template styling token to the host element, if the new template has any
    // associated stylesheets. In the case of light DOM, also ensure there is at least one scoped stylesheet.


    if (!isUndefined$1(newStylesheets) && newStylesheets.length !== 0) {
      newToken = newStylesheetToken;
    } // Set the new styling token on the host element


    if (!isUndefined$1(newToken)) {
      if (hasScopedStyles) {
        getClassList$1(elm).add(makeHostToken(newToken));
        newHasTokenInClass = true;
      }

      if (isSyntheticShadow) {
        setAttribute$1(elm, makeHostToken(newToken), '');
        newHasTokenInAttribute = true;
      }
    } // Update the styling tokens present on the context object.


    context.stylesheetToken = newToken;
    context.hasTokenInClass = newHasTokenInClass;
    context.hasTokenInAttribute = newHasTokenInAttribute;
  }

  function evaluateStylesheetsContent(stylesheets, stylesheetToken, vm) {
    const content = [];
    let root;

    for (let i = 0; i < stylesheets.length; i++) {
      let stylesheet = stylesheets[i];

      if (isArray$1(stylesheet)) {
        ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, stylesheetToken, vm));
      } else {
        {
          // Check for compiler version mismatch in dev mode only
          checkVersionMismatch(stylesheet, 'stylesheet'); // in dev-mode, we support hot swapping of stylesheet, which means that
          // the component instance might be attempting to use an old version of
          // the stylesheet, while internally, we have a replacement for it.

          stylesheet = getStyleOrSwappedStyle(stylesheet);
        }

        const isScopedCss = stylesheet[KEY__SCOPED_CSS]; // Apply the scope token only if the stylesheet itself is scoped, or if we're rendering synthetic shadow.

        const scopeToken = isScopedCss || vm.shadowMode === 1
        /* Synthetic */
        && vm.renderMode === 1
        /* Shadow */
        ? stylesheetToken : undefined; // Use the actual `:host` selector if we're rendering global CSS for light DOM, or if we're rendering
        // native shadow DOM. Synthetic shadow DOM never uses `:host`.

        const useActualHostSelector = vm.renderMode === 0
        /* Light */
        ? !isScopedCss : vm.shadowMode === 0
        /* Native */
        ; // Use the native :dir() pseudoclass only in native shadow DOM. Otherwise, in synthetic shadow,
        // we use an attribute selector on the host to simulate :dir().

        let useNativeDirPseudoclass;

        if (vm.renderMode === 1
        /* Shadow */
        ) {
          useNativeDirPseudoclass = vm.shadowMode === 0
          /* Native */
          ;
        } else {
          // Light DOM components should only render `[dir]` if they're inside of a synthetic shadow root.
          // At the top level (root is null) or inside of a native shadow root, they should use `:dir()`.
          if (isUndefined$1(root)) {
            // Only calculate the root once as necessary
            root = getNearestShadowComponent(vm);
          }

          useNativeDirPseudoclass = isNull(root) || root.shadowMode === 0
          /* Native */
          ;
        }

        ArrayPush$1.call(content, stylesheet(scopeToken, useActualHostSelector, useNativeDirPseudoclass));
      }
    }

    return content;
  }

  function getStylesheetsContent(vm, template) {
    const {
      stylesheets,
      stylesheetToken
    } = template;
    let content = [];

    if (!isUndefined$1(stylesheets) && stylesheets.length !== 0) {
      content = evaluateStylesheetsContent(stylesheets, stylesheetToken, vm);
    }

    return content;
  } // It might be worth caching this to avoid doing the lookup repeatedly, but
  // perf testing has not shown it to be a huge improvement yet:
  // https://github.com/salesforce/lwc/pull/2460#discussion_r691208892


  function getNearestShadowComponent(vm) {
    let owner = vm;

    while (!isNull(owner)) {
      if (owner.renderMode === 1
      /* Shadow */
      ) {
        return owner;
      }

      owner = owner.owner;
    }

    return owner;
  }

  function getNearestNativeShadowComponent(vm) {
    const owner = getNearestShadowComponent(vm);

    if (!isNull(owner) && owner.shadowMode === 1
    /* Synthetic */
    ) {
      // Synthetic-within-native is impossible. So if the nearest shadow component is
      // synthetic, we know we won't find a native component if we go any further.
      return null;
    }

    return owner;
  }

  function createStylesheet(vm, stylesheets) {
    const {
      renderMode,
      shadowMode
    } = vm;

    if (renderMode === 1
    /* Shadow */
    && shadowMode === 1
    /* Synthetic */
    ) {
      for (let i = 0; i < stylesheets.length; i++) {
        insertGlobalStylesheet$1(stylesheets[i]);
      }
    } else if (ssr$1 || isHydrating$1()) {
      // Note: We need to ensure that during hydration, the stylesheets method is the same as those in ssr.
      //       This works in the client, because the stylesheets are created, and cached in the VM
      //       the first time the VM renders.
      // native shadow or light DOM, SSR
      const combinedStylesheetContent = ArrayJoin.call(stylesheets, '\n');
      return createInlineStyleVNode(combinedStylesheetContent);
    } else {
      // native shadow or light DOM, DOM renderer
      const root = getNearestNativeShadowComponent(vm);
      const isGlobal = isNull(root);

      for (let i = 0; i < stylesheets.length; i++) {
        if (isGlobal) {
          insertGlobalStylesheet$1(stylesheets[i]);
        } else {
          // local level
          insertStylesheet$1(stylesheets[i], root.shadowRoot);
        }
      }
    }

    return null;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const operationIdNameMapping = ['constructor', 'render', 'patch', 'connectedCallback', 'renderedCallback', 'disconnectedCallback', 'errorCallback', 'lwc-hydrate', 'lwc-rehydrate']; // Even if all the browser the engine supports implements the UserTiming API, we need to guard the measure APIs.
  // JSDom (used in Jest) for example doesn't implement the UserTiming APIs.

  const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
  const start = !isUserTimingSupported ? noop : markName => {
    performance.mark(markName);
  };
  const end = !isUserTimingSupported ? noop : (measureName, markName) => {
    performance.measure(measureName, markName); // Clear the created marks and measure to avoid filling the performance entries buffer.
    // Note: Even if the entries get deleted, existing PerformanceObservers preserve a copy of those entries.

    performance.clearMarks(markName);
    performance.clearMeasures(measureName);
  };

  function getOperationName(opId) {
    return operationIdNameMapping[opId];
  }

  function getMeasureName(opId, vm) {
    return `${getComponentTag(vm)} - ${getOperationName(opId)}`;
  }

  function getMarkName(opId, vm) {
    // Adding the VM idx to the mark name creates a unique mark name component instance. This is necessary to produce
    // the right measures for components that are recursive.
    return `${getMeasureName(opId, vm)} - ${vm.idx}`;
  }

  function logOperationStart(opId, vm) {
    {
      const markName = getMarkName(opId, vm);
      start(markName);
    }
  }

  function logOperationEnd(opId, vm) {
    {
      const markName = getMarkName(opId, vm);
      const measureName = getMeasureName(opId, vm);
      end(measureName, markName);
    }
  }

  function logGlobalOperationStart(opId, vm) {
    {
      const opName = getOperationName(opId);
      const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
      start(markName);
    }
  }

  function logGlobalOperationEnd(opId, vm) {
    {
      const opName = getOperationName(opId);
      const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
      end(opName, markName);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  let isUpdatingTemplate = false;
  let vmBeingRendered = null;

  function getVMBeingRendered() {
    return vmBeingRendered;
  }

  function setVMBeingRendered(vm) {
    vmBeingRendered = vm;
  }

  function validateSlots(vm, html) {

    const {
      cmpSlots
    } = vm;
    const {
      slots = EmptyArray
    } = html;

    for (const slotName in cmpSlots) {
      // eslint-disable-next-line lwc-internal/no-production-assert
      assert.isTrue(isArray$1(cmpSlots[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots[slotName])} for slot "${slotName}" in ${vm}.`);

      if (slotName !== '' && ArrayIndexOf.call(slots, slotName) === -1) {
        // TODO [#1297]: this should never really happen because the compiler should always validate
        // eslint-disable-next-line lwc-internal/no-production-assert
        logError(`Ignoring unknown provided slot name "${slotName}" in ${vm}. Check for a typo on the slot attribute.`, vm);
      }
    }
  }

  function validateLightDomTemplate(template, vm) {
    if (template === defaultEmptyTemplate) return;

    if (vm.renderMode === 0
    /* Light */
    ) {
      assert.isTrue(template.renderMode === 'light', `Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${getComponentTag(vm)}.`);
    } else {
      assert.isTrue(isUndefined$1(template.renderMode), `Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${getComponentTag(vm)} or set it to 'lwc:render-mode="shadow"`);
    }
  }

  function evaluateTemplate(vm, html) {
    {
      assert.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`); // in dev-mode, we support hot swapping of templates, which means that
      // the component instance might be attempting to use an old version of
      // the template, while internally, we have a replacement for it.

      html = getTemplateOrSwappedTemplate(html);
    }

    const isUpdatingTemplateInception = isUpdatingTemplate;
    const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
    let vnodes = [];
    runWithBoundaryProtection(vm, vm.owner, () => {
      // pre
      vmBeingRendered = vm;
      logOperationStart(1
      /* Render */
      , vm);
    }, () => {
      // job
      const {
        component,
        context,
        cmpSlots,
        cmpTemplate,
        tro
      } = vm;
      tro.observe(() => {
        // Reset the cache memoizer for template when needed.
        if (html !== cmpTemplate) {
          if ("development" !== 'production') {
            validateLightDomTemplate(html, vm);
          } // Perf opt: do not reset the shadow root during the first rendering (there is
          // nothing to reset).


          if (!isNull(cmpTemplate)) {
            // It is important to reset the content to avoid reusing similar elements
            // generated from a different template, because they could have similar IDs,
            // and snabbdom just rely on the IDs.
            resetComponentRoot(vm);
          } // Check that the template was built by the compiler.


          if (!isTemplateRegistered(html)) {
            throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
          }

          vm.cmpTemplate = html; // Create a brand new template cache for the swapped templated.

          context.tplCache = create(null); // Set the computeHasScopedStyles property in the context, to avoid recomputing it repeatedly.

          context.hasScopedStyles = computeHasScopedStyles(html); // Update the scoping token on the host element.

          updateStylesheetToken(vm, html); // Evaluate, create stylesheet and cache the produced VNode for future
          // re-rendering.

          const stylesheetsContent = getStylesheetsContent(vm, html);
          context.styleVNode = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
        }

        if ("development" !== 'production') {
          // validating slots in every rendering since the allocated content might change over time
          validateSlots(vm, html); // add the VM to the list of host VMs that can be re-rendered if html is swapped

          setActiveVM(vm);
        } // right before producing the vnodes, we clear up all internal references
        // to custom elements from the template.


        vm.velements = []; // Set the global flag that template is being updated

        isUpdatingTemplate = true;
        vnodes = html.call(undefined, api, component, cmpSlots, context.tplCache);
        const {
          styleVNode
        } = context;

        if (!isNull(styleVNode)) {
          ArrayUnshift.call(vnodes, styleVNode);
        }
      });
    }, () => {
      // post
      isUpdatingTemplate = isUpdatingTemplateInception;
      vmBeingRendered = vmOfTemplateBeingUpdatedInception;
      logOperationEnd(1
      /* Render */
      , vm);
    });

    {
      assert.invariant(isArray$1(vnodes), `Compiler should produce html functions that always return an array.`);
    }

    return vnodes;
  }

  function computeHasScopedStyles(template) {
    const {
      stylesheets
    } = template;

    if (!isUndefined$1(stylesheets)) {
      for (let i = 0; i < stylesheets.length; i++) {
        if (isTrue(stylesheets[i][KEY__SCOPED_CSS])) {
          return true;
        }
      }
    }

    return false;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  let isInvokingRender = false;
  let vmBeingConstructed = null;

  function isBeingConstructed(vm) {
    return vmBeingConstructed === vm;
  }

  function invokeComponentCallback(vm, fn, args) {
    const {
      component,
      callHook,
      owner
    } = vm;
    runWithBoundaryProtection(vm, owner, noop, () => {
      callHook(component, fn, args);
    }, noop);
  }

  function invokeComponentConstructor(vm, Ctor) {
    const vmBeingConstructedInception = vmBeingConstructed;
    let error;
    logOperationStart(0
    /* Constructor */
    , vm);
    vmBeingConstructed = vm;
    /**
     * Constructors don't need to be wrapped with a boundary because for root elements
     * it should throw, while elements from template are already wrapped by a boundary
     * associated to the diffing algo.
     */

    try {
      // job
      const result = new Ctor(); // Check indirectly if the constructor result is an instance of LightningElement. Using
      // the "instanceof" operator would not work here since Locker Service provides its own
      // implementation of LightningElement, so we indirectly check if the base constructor is
      // invoked by accessing the component on the vm.

      if (vmBeingConstructed.component !== result) {
        throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
      }
    } catch (e) {
      error = Object(e);
    } finally {
      logOperationEnd(0
      /* Constructor */
      , vm);
      vmBeingConstructed = vmBeingConstructedInception;

      if (!isUndefined$1(error)) {
        addErrorComponentStack(vm, error); // re-throwing the original error annotated after restoring the context

        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  }

  function invokeComponentRenderMethod(vm) {
    const {
      def: {
        render
      },
      callHook,
      component,
      owner
    } = vm;
    const isRenderBeingInvokedInception = isInvokingRender;
    const vmBeingRenderedInception = getVMBeingRendered();
    let html;
    let renderInvocationSuccessful = false;
    runWithBoundaryProtection(vm, owner, () => {
      // pre
      isInvokingRender = true;
      setVMBeingRendered(vm);
    }, () => {
      // job
      vm.tro.observe(() => {
        html = callHook(component, render);
        renderInvocationSuccessful = true;
      });
    }, () => {
      // post
      isInvokingRender = isRenderBeingInvokedInception;
      setVMBeingRendered(vmBeingRenderedInception);
    }); // If render() invocation failed, process errorCallback in boundary and return an empty template

    return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
  }

  function invokeEventListener(vm, fn, thisValue, event) {
    const {
      callHook,
      owner
    } = vm;
    runWithBoundaryProtection(vm, owner, noop, () => {
      // job
      if ("development" !== 'production') {
        assert.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
      }

      callHook(thisValue, fn, [event]);
    }, noop);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const signedTemplateMap = new Map();
  /**
   * INTERNAL: This function can only be invoked by compiled code. The compiler
   * will prevent this function from being imported by userland code.
   */

  function registerComponent( // We typically expect a LightningElementConstructor, but technically you can call this with anything
  Ctor, {
    tmpl
  }) {
    if (isFunction$1(Ctor)) {
      {
        checkVersionMismatch(Ctor, 'component');
      }

      signedTemplateMap.set(Ctor, tmpl);
    } // chaining this method as a way to wrap existing assignment of component constructor easily,
    // without too much transformation


    return Ctor;
  }

  function getComponentRegisteredTemplate(Ctor) {
    return signedTemplateMap.get(Ctor);
  }

  function getTemplateReactiveObserver(vm) {
    return new ReactiveObserver(() => {
      const {
        isDirty
      } = vm;

      if (isFalse(isDirty)) {
        markComponentAsDirty(vm);
        scheduleRehydration(vm);
      }
    });
  }

  function renderComponent(vm) {
    {
      assert.invariant(vm.isDirty, `${vm} is not dirty.`);
    }

    vm.tro.reset();
    const vnodes = invokeComponentRenderMethod(vm);
    vm.isDirty = false;
    vm.isScheduled = false;
    return vnodes;
  }

  function markComponentAsDirty(vm) {
    {
      const vmBeingRendered = getVMBeingRendered();
      assert.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
      assert.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
      assert.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
    }

    vm.isDirty = true;
  }

  const cmpEventListenerMap = new WeakMap();

  function getWrappedComponentsListener(vm, listener) {
    if (!isFunction$1(listener)) {
      throw new TypeError(); // avoiding problems with non-valid listeners
    }

    let wrappedListener = cmpEventListenerMap.get(listener);

    if (isUndefined$1(wrappedListener)) {
      wrappedListener = function (event) {
        invokeEventListener(vm, listener, undefined, event);
      };

      cmpEventListenerMap.set(listener, wrappedListener);
    }

    return wrappedListener;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const Services = create(null);

  function invokeServiceHook(vm, cbs) {
    {
      assert.isTrue(isArray$1(cbs) && cbs.length > 0, `Optimize invokeServiceHook() to be invoked only when needed`);
    }

    const {
      component,
      def,
      context
    } = vm;

    for (let i = 0, len = cbs.length; i < len; ++i) {
      cbs[i].call(undefined, component, {}, def, context);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  let idx = 0;
  /** The internal slot used to associate different objects the engine manipulates with the VM */

  const ViewModelReflection = new WeakMap();

  function callHook(cmp, fn, args = []) {
    return fn.apply(cmp, args);
  }

  function setHook(cmp, prop, newValue) {
    cmp[prop] = newValue;
  }

  function getHook(cmp, prop) {
    return cmp[prop];
  }

  function rerenderVM(vm) {
    rehydrate(vm);
  }

  function connectRootElement(elm) {
    const vm = getAssociatedVM(elm);
    logGlobalOperationStart(7
    /* GlobalHydrate */
    , vm); // Usually means moving the element from one place to another, which is observable via
    // life-cycle hooks.

    if (vm.state === 1
    /* connected */
    ) {
      disconnectRootElement(elm);
    }

    runConnectedCallback(vm);
    rehydrate(vm);
    logGlobalOperationEnd(7
    /* GlobalHydrate */
    , vm);
  }

  function disconnectRootElement(elm) {
    const vm = getAssociatedVM(elm);
    resetComponentStateWhenRemoved(vm);
  }

  function appendVM(vm) {
    rehydrate(vm);
  } // just in case the component comes back, with this we guarantee re-rendering it
  // while preventing any attempt to rehydration until after reinsertion.


  function resetComponentStateWhenRemoved(vm) {
    const {
      state
    } = vm;

    if (state !== 2
    /* disconnected */
    ) {
      const {
        oar,
        tro
      } = vm; // Making sure that any observing record will not trigger the rehydrated on this vm

      tro.reset(); // Making sure that any observing accessor record will not trigger the setter to be reinvoked

      for (const key in oar) {
        oar[key].reset();
      }

      runDisconnectedCallback(vm); // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)

      runChildNodesDisconnectedCallback(vm);
      runLightChildNodesDisconnectedCallback(vm);
    }

    {
      removeActiveVM(vm);
    }
  } // this method is triggered by the diffing algo only when a vnode from the
  // old vnode.children is removed from the DOM.


  function removeVM(vm) {
    {
      assert.isTrue(vm.state === 1
      /* connected */
      || vm.state === 2
      /* disconnected */
      , `${vm} must have been connected.`);
    }

    resetComponentStateWhenRemoved(vm);
  }

  function getNearestShadowAncestor(vm) {
    let ancestor = vm.owner;

    while (!isNull(ancestor) && ancestor.renderMode === 0
    /* Light */
    ) {
      ancestor = ancestor.owner;
    }

    return ancestor;
  }

  function createVM(elm, ctor, options) {
    const {
      mode,
      owner,
      tagName
    } = options;
    const def = getComponentInternalDef(ctor);
    const vm = {
      elm,
      def,
      idx: idx++,
      state: 0
      /* created */
      ,
      isScheduled: false,
      isDirty: true,
      tagName,
      mode,
      owner,
      children: EmptyArray,
      aChildren: EmptyArray,
      velements: EmptyArray,
      cmpProps: create(null),
      cmpFields: create(null),
      cmpSlots: create(null),
      oar: create(null),
      cmpTemplate: null,
      renderMode: def.renderMode,
      context: {
        stylesheetToken: undefined,
        hasTokenInClass: undefined,
        hasTokenInAttribute: undefined,
        hasScopedStyles: undefined,
        styleVNode: null,
        tplCache: EmptyObject,
        wiredConnecting: EmptyArray,
        wiredDisconnecting: EmptyArray
      },
      // Properties set right after VM creation.
      tro: null,
      shadowMode: null,
      // Properties set by the LightningElement constructor.
      component: null,
      shadowRoot: null,
      renderRoot: null,
      callHook,
      setHook,
      getHook
    };
    vm.shadowMode = computeShadowMode(vm);
    vm.tro = getTemplateReactiveObserver(vm);

    {
      vm.toString = () => {
        return `[object:vm ${def.name} (${vm.idx})]`;
      };

      if (runtimeFlags.ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST) {
        vm.shadowMode = 0
        /* Native */
        ;
      }
    } // Create component instance associated to the vm and the element.


    invokeComponentConstructor(vm, def.ctor); // Initializing the wire decorator per instance only when really needed

    if (hasWireAdapters(vm)) {
      installWireAdapters(vm);
    }

    return vm;
  }

  function computeShadowMode(vm) {
    const {
      def
    } = vm;
    let shadowMode;

    if (isSyntheticShadowDefined$1) {
      if (def.renderMode === 0
      /* Light */
      ) {
        // ShadowMode.Native implies "not synthetic shadow" which is consistent with how
        // everything defaults to native when the synthetic shadow polyfill is unavailable.
        shadowMode = 0
        /* Native */
        ;
      } else if (isNativeShadowDefined$1) {
        // Not combined with above condition because @lwc/features only supports identifiers in
        // the if-condition.
        if (runtimeFlags.ENABLE_MIXED_SHADOW_MODE) {
          if (def.shadowSupportMode === "any"
          /* Any */
          ) {
            shadowMode = 0
            /* Native */
            ;
          } else {
            const shadowAncestor = getNearestShadowAncestor(vm);

            if (!isNull(shadowAncestor) && shadowAncestor.shadowMode === 0
            /* Native */
            ) {
              // Transitive support for native Shadow DOM. A component in native mode
              // transitively opts all of its descendants into native.
              shadowMode = 0
              /* Native */
              ;
            } else {
              // Synthetic if neither this component nor any of its ancestors are configured
              // to be native.
              shadowMode = 1
              /* Synthetic */
              ;
            }
          }
        } else {
          shadowMode = 1
          /* Synthetic */
          ;
        }
      } else {
        // Synthetic if there is no native Shadow DOM support.
        shadowMode = 1
        /* Synthetic */
        ;
      }
    } else {
      // Native if the synthetic shadow polyfill is unavailable.
      shadowMode = 0
      /* Native */
      ;
    }

    return shadowMode;
  }

  function assertIsVM(obj) {
    if (isNull(obj) || !isObject(obj) || !('renderRoot' in obj)) {
      throw new TypeError(`${obj} is not a VM.`);
    }
  }

  function associateVM(obj, vm) {
    ViewModelReflection.set(obj, vm);
  }

  function getAssociatedVM(obj) {
    const vm = ViewModelReflection.get(obj);

    {
      assertIsVM(vm);
    }

    return vm;
  }

  function getAssociatedVMIfPresent(obj) {
    const maybeVm = ViewModelReflection.get(obj);

    {
      if (!isUndefined$1(maybeVm)) {
        assertIsVM(maybeVm);
      }
    }

    return maybeVm;
  }

  function rehydrate(vm) {
    if (isTrue(vm.isDirty)) {
      const children = renderComponent(vm);
      patchShadowRoot(vm, children);
    }
  }

  function patchShadowRoot(vm, newCh) {
    const {
      renderRoot,
      children: oldCh
    } = vm; // caching the new children collection

    vm.children = newCh;

    if (newCh.length > 0 || oldCh.length > 0) {
      // patch function mutates vnodes by adding the element reference,
      // however, if patching fails it contains partial changes.
      if (oldCh !== newCh) {
        runWithBoundaryProtection(vm, vm, () => {
          // pre
          logOperationStart(2
          /* Patch */
          , vm);
        }, () => {
          // job
          patchChildren(oldCh, newCh, renderRoot);
        }, () => {
          // post
          logOperationEnd(2
          /* Patch */
          , vm);
        });
      }
    }

    if (vm.state === 1
    /* connected */
    ) {
      // If the element is connected, that means connectedCallback was already issued, and
      // any successive rendering should finish with the call to renderedCallback, otherwise
      // the connectedCallback will take care of calling it in the right order at the end of
      // the current rehydration process.
      runRenderedCallback(vm);
    }
  }

  function runRenderedCallback(vm) {
    const {
      def: {
        renderedCallback
      }
    } = vm;

    if (isTrue(ssr$1)) {
      return;
    }

    const {
      rendered
    } = Services;

    if (rendered) {
      invokeServiceHook(vm, rendered);
    }

    if (!isUndefined$1(renderedCallback)) {
      logOperationStart(4
      /* RenderedCallback */
      , vm);
      invokeComponentCallback(vm, renderedCallback);
      logOperationEnd(4
      /* RenderedCallback */
      , vm);
    }
  }

  let rehydrateQueue = [];

  function flushRehydrationQueue() {
    logGlobalOperationStart(8
    /* GlobalRehydrate */
    );

    {
      assert.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
    }

    const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
    rehydrateQueue = []; // reset to a new queue

    for (let i = 0, len = vms.length; i < len; i += 1) {
      const vm = vms[i];

      try {
        rehydrate(vm);
      } catch (error) {
        if (i + 1 < len) {
          // pieces of the queue are still pending to be rehydrated, those should have priority
          if (rehydrateQueue.length === 0) {
            addCallbackToNextTick(flushRehydrationQueue);
          }

          ArrayUnshift.apply(rehydrateQueue, ArraySlice.call(vms, i + 1));
        } // we need to end the measure before throwing.


        logGlobalOperationEnd(8
        /* GlobalRehydrate */
        ); // re-throwing the original error will break the current tick, but since the next tick is
        // already scheduled, it should continue patching the rest.

        throw error; // eslint-disable-line no-unsafe-finally
      }
    }

    logGlobalOperationEnd(8
    /* GlobalRehydrate */
    );
  }

  function runConnectedCallback(vm) {
    const {
      state
    } = vm;

    if (state === 1
    /* connected */
    ) {
      return; // nothing to do since it was already connected
    }

    vm.state = 1
    /* connected */
    ; // reporting connection

    const {
      connected
    } = Services;

    if (connected) {
      invokeServiceHook(vm, connected);
    }

    if (hasWireAdapters(vm)) {
      connectWireAdapters(vm);
    }

    const {
      connectedCallback
    } = vm.def;

    if (!isUndefined$1(connectedCallback)) {
      logOperationStart(3
      /* ConnectedCallback */
      , vm);
      invokeComponentCallback(vm, connectedCallback);
      logOperationEnd(3
      /* ConnectedCallback */
      , vm);
    }
  }

  function hasWireAdapters(vm) {
    return getOwnPropertyNames$1(vm.def.wire).length > 0;
  }

  function runDisconnectedCallback(vm) {
    {
      assert.isTrue(vm.state !== 2
      /* disconnected */
      , `${vm} must be inserted.`);
    }

    if (isFalse(vm.isDirty)) {
      // this guarantees that if the component is reused/reinserted,
      // it will be re-rendered because we are disconnecting the reactivity
      // linking, so mutations are not automatically reflected on the state
      // of disconnected components.
      vm.isDirty = true;
    }

    vm.state = 2
    /* disconnected */
    ; // reporting disconnection

    const {
      disconnected
    } = Services;

    if (disconnected) {
      invokeServiceHook(vm, disconnected);
    }

    if (hasWireAdapters(vm)) {
      disconnectWireAdapters(vm);
    }

    const {
      disconnectedCallback
    } = vm.def;

    if (!isUndefined$1(disconnectedCallback)) {
      logOperationStart(5
      /* DisconnectedCallback */
      , vm);
      invokeComponentCallback(vm, disconnectedCallback);
      logOperationEnd(5
      /* DisconnectedCallback */
      , vm);
    }
  }

  function runChildNodesDisconnectedCallback(vm) {
    const {
      velements: vCustomElementCollection
    } = vm; // Reporting disconnection for every child in inverse order since they are
    // inserted in reserved order.

    for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
      const {
        elm
      } = vCustomElementCollection[i]; // There are two cases where the element could be undefined:
      // * when there is an error during the construction phase, and an error
      //   boundary picks it, there is a possibility that the VCustomElement
      //   is not properly initialized, and therefore is should be ignored.
      // * when slotted custom element is not used by the element where it is
      //   slotted into it, as  a result, the custom element was never
      //   initialized.

      if (!isUndefined$1(elm)) {
        const childVM = getAssociatedVMIfPresent(elm); // The VM associated with the element might be associated undefined
        // in the case where the VM failed in the middle of its creation,
        // eg: constructor throwing before invoking super().

        if (!isUndefined$1(childVM)) {
          resetComponentStateWhenRemoved(childVM);
        }
      }
    }
  }

  function runLightChildNodesDisconnectedCallback(vm) {
    const {
      aChildren: adoptedChildren
    } = vm;
    recursivelyDisconnectChildren(adoptedChildren);
  }
  /**
   * The recursion doesn't need to be a complete traversal of the vnode graph,
   * instead it can be partial, when a custom element vnode is found, we don't
   * need to continue into its children because by attempting to disconnect the
   * custom element itself will trigger the removal of anything slotted or anything
   * defined on its shadow.
   */


  function recursivelyDisconnectChildren(vnodes) {
    for (let i = 0, len = vnodes.length; i < len; i += 1) {
      const vnode = vnodes[i];

      if (!isNull(vnode) && !isUndefined$1(vnode.elm)) {
        switch (vnode.type) {
          case 2
          /* Element */
          :
            recursivelyDisconnectChildren(vnode.children);
            break;

          case 3
          /* CustomElement */
          :
            {
              const vm = getAssociatedVM(vnode.elm);
              resetComponentStateWhenRemoved(vm);
              break;
            }
        }
      }
    }
  } // This is a super optimized mechanism to remove the content of the root node (shadow root
  // for shadow DOM components and the root element itself for light DOM) without having to go
  // into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
  // children VNodes might not be representing the current state of the DOM.


  function resetComponentRoot(vm) {
    const {
      children,
      renderRoot
    } = vm;

    for (let i = 0, len = children.length; i < len; i++) {
      const child = children[i];

      if (!isNull(child) && !isUndefined$1(child.elm)) {
        remove$1(child.elm, renderRoot);
      }
    }

    vm.children = EmptyArray;
    runChildNodesDisconnectedCallback(vm);
    vm.velements = EmptyArray;
  }

  function scheduleRehydration(vm) {
    if (isTrue(ssr$1) || isTrue(vm.isScheduled)) {
      return;
    }

    vm.isScheduled = true;

    if (rehydrateQueue.length === 0) {
      addCallbackToNextTick(flushRehydrationQueue);
    }

    ArrayPush$1.call(rehydrateQueue, vm);
  }

  function getErrorBoundaryVM(vm) {
    let currentVm = vm;

    while (!isNull(currentVm)) {
      if (!isUndefined$1(currentVm.def.errorCallback)) {
        return currentVm;
      }

      currentVm = currentVm.owner;
    }
  }

  function runWithBoundaryProtection(vm, owner, pre, job, post) {
    let error;
    pre();

    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      post();

      if (!isUndefined$1(error)) {
        addErrorComponentStack(vm, error);
        const errorBoundaryVm = isNull(owner) ? undefined : getErrorBoundaryVM(owner);

        if (isUndefined$1(errorBoundaryVm)) {
          throw error; // eslint-disable-line no-unsafe-finally
        }

        resetComponentRoot(vm); // remove offenders

        logOperationStart(6
        /* ErrorCallback */
        , vm); // error boundaries must have an ErrorCallback

        const errorCallback = errorBoundaryVm.def.errorCallback;
        invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
        logOperationEnd(6
        /* ErrorCallback */
        , vm);
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
  const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
  const WireMetaMap = new Map();

  class WireContextRegistrationEvent extends CustomEvent {
    constructor(adapterToken, {
      setNewContext,
      setDisconnectedCallback
    }) {
      super(adapterToken, {
        bubbles: true,
        composed: true
      });
      defineProperties(this, {
        setNewContext: {
          value: setNewContext
        },
        setDisconnectedCallback: {
          value: setDisconnectedCallback
        }
      });
    }
    /*LWC compiler v2.11.3*/


  }

  function createFieldDataCallback(vm, name) {
    const {
      cmpFields
    } = vm;
    return value => {
      if (value !== vm.cmpFields[name]) {
        // storing the value in the underlying storage
        cmpFields[name] = value;
        componentValueMutated(vm, name);
      }
    };
  }

  function createMethodDataCallback(vm, method) {
    return value => {
      // dispatching new value into the wired method
      runWithBoundaryProtection(vm, vm.owner, noop, () => {
        // job
        method.call(vm.component, value);
      }, noop);
    };
  }

  function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
    let hasPendingConfig = false; // creating the reactive observer for reactive params when needed

    const ro = new ReactiveObserver(() => {
      if (hasPendingConfig === false) {
        hasPendingConfig = true; // collect new config in the micro-task

        Promise.resolve().then(() => {
          hasPendingConfig = false; // resetting current reactive params

          ro.reset(); // dispatching a new config due to a change in the configuration

          computeConfigAndUpdate();
        });
      }
    });

    const computeConfigAndUpdate = () => {
      let config;
      ro.observe(() => config = configCallback(component)); // eslint-disable-next-line lwc-internal/no-invalid-todo
      // TODO: dev-mode validation of config based on the adapter.configSchema
      // @ts-ignore it is assigned in the observe() callback

      callbackWhenConfigIsReady(config);
    };

    return {
      computeConfigAndUpdate,
      ro
    };
  }

  function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
    const {
      adapter
    } = wireDef;
    const adapterContextToken = getAdapterToken(adapter);

    if (isUndefined$1(adapterContextToken)) {
      return; // no provider found, nothing to be done
    }

    const {
      elm,
      context: {
        wiredConnecting,
        wiredDisconnecting
      }
    } = vm; // waiting for the component to be connected to formally request the context via the token

    ArrayPush$1.call(wiredConnecting, () => {
      // This event is responsible for connecting the host element with another
      // element in the composed path that is providing contextual data. The provider
      // must be listening for a special dom event with the name corresponding to the value of
      // `adapterContextToken`, which will remain secret and internal to this file only to
      // guarantee that the linkage can be forged.
      const contextRegistrationEvent = new WireContextRegistrationEvent(adapterContextToken, {
        setNewContext(newContext) {
          // eslint-disable-next-line lwc-internal/no-invalid-todo
          // TODO: dev-mode validation of config based on the adapter.contextSchema
          callbackWhenContextIsReady(newContext);
        },

        setDisconnectedCallback(disconnectCallback) {
          // adds this callback into the disconnect bucket so it gets disconnected from parent
          // the the element hosting the wire is disconnected
          ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
        }

      });
      dispatchEvent$1(elm, contextRegistrationEvent);
    });
  }

  function createConnector(vm, name, wireDef) {
    const {
      method,
      adapter,
      configCallback,
      dynamic
    } = wireDef;
    const dataCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
    let context;
    let connector; // Workaround to pass the component element associated to this wire adapter instance.

    defineProperty(dataCallback, DeprecatedWiredElementHost, {
      value: vm.elm
    });
    defineProperty(dataCallback, DeprecatedWiredParamsMeta, {
      value: dynamic
    });
    runWithBoundaryProtection(vm, vm, noop, () => {
      // job
      connector = new adapter(dataCallback);
    }, noop);

    const updateConnectorConfig = config => {
      // every time the config is recomputed due to tracking,
      // this callback will be invoked with the new computed config
      runWithBoundaryProtection(vm, vm, noop, () => {
        // job
        connector.update(config, context);
      }, noop);
    }; // Computes the current wire config and calls the update method on the wire adapter.
    // If it has params, we will need to observe changes in the next tick.


    const {
      computeConfigAndUpdate,
      ro
    } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig); // if the adapter needs contextualization, we need to watch for new context and push it alongside the config

    if (!isUndefined$1(adapter.contextSchema)) {
      createContextWatcher(vm, wireDef, newContext => {
        // every time the context is pushed into this component,
        // this callback will be invoked with the new computed context
        if (context !== newContext) {
          context = newContext; // Note: when new context arrives, the config will be recomputed and pushed along side the new
          // context, this is to preserve the identity characteristics, config should not have identity
          // (ever), while context can have identity

          if (vm.state === 1
          /* connected */
          ) {
            computeConfigAndUpdate();
          }
        }
      });
    }

    return {
      // @ts-ignore the boundary protection executes sync, connector is always defined
      connector,
      computeConfigAndUpdate,
      resetConfigWatcher: () => ro.reset()
    };
  }

  const AdapterToTokenMap = new Map();

  function getAdapterToken(adapter) {
    return AdapterToTokenMap.get(adapter);
  }

  function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
    // support for callable adapters
    if (adapter.adapter) {
      adapter = adapter.adapter;
    }

    const method = descriptor.value;
    const def = {
      adapter,
      method,
      configCallback,
      dynamic
    };
    WireMetaMap.set(descriptor, def);
  }

  function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
    // support for callable adapters
    if (adapter.adapter) {
      adapter = adapter.adapter;
    }

    const def = {
      adapter,
      configCallback,
      dynamic
    };
    WireMetaMap.set(descriptor, def);
  }

  function installWireAdapters(vm) {
    const {
      context,
      def: {
        wire
      }
    } = vm;
    const wiredConnecting = context.wiredConnecting = [];
    const wiredDisconnecting = context.wiredDisconnecting = [];

    for (const fieldNameOrMethod in wire) {
      const descriptor = wire[fieldNameOrMethod];
      const wireDef = WireMetaMap.get(descriptor);

      {
        assert.invariant(wireDef, `Internal Error: invalid wire definition found.`);
      }

      if (!isUndefined$1(wireDef)) {
        const {
          connector,
          computeConfigAndUpdate,
          resetConfigWatcher
        } = createConnector(vm, fieldNameOrMethod, wireDef);
        const hasDynamicParams = wireDef.dynamic.length > 0;
        ArrayPush$1.call(wiredConnecting, () => {
          connector.connect();

          if (!runtimeFlags.ENABLE_WIRE_SYNC_EMIT) {
            if (hasDynamicParams) {
              Promise.resolve().then(computeConfigAndUpdate);
              return;
            }
          }

          computeConfigAndUpdate();
        });
        ArrayPush$1.call(wiredDisconnecting, () => {
          connector.disconnect();
          resetConfigWatcher();
        });
      }
    }
  }

  function connectWireAdapters(vm) {
    const {
      wiredConnecting
    } = vm.context;

    for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
      wiredConnecting[i]();
    }
  }

  function disconnectWireAdapters(vm) {
    const {
      wiredDisconnecting
    } = vm.context;
    runWithBoundaryProtection(vm, vm, noop, () => {
      // job
      for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
        wiredDisconnecting[i]();
      }
    }, noop);
  }
  /*
   * Copyright (c) 2022, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // flag indicating if the hydration recovered from the DOM mismatch


  let hasMismatch = false;

  function hydrateRoot(vm) {
    hasMismatch = false;
    runConnectedCallback(vm);
    hydrateVM(vm);

    if (hasMismatch) {
      logError('Hydration completed with errors.', vm);
    }
  }

  function hydrateVM(vm) {
    const children = renderComponent(vm);
    vm.children = children;
    const parentNode = vm.renderRoot;
    hydrateChildren(getFirstChild$1(parentNode), children, parentNode, vm);
    runRenderedCallback(vm);
  }

  function hydrateNode(node, vnode) {
    let hydratedNode;

    switch (vnode.type) {
      case 0
      /* Text */
      :
        hydratedNode = hydrateText(node, vnode);
        break;

      case 1
      /* Comment */
      :
        hydratedNode = hydrateComment(node, vnode);
        break;

      case 2
      /* Element */
      :
        hydratedNode = hydrateElement(node, vnode);
        break;

      case 3
      /* CustomElement */
      :
        hydratedNode = hydrateCustomElement(node, vnode);
        break;
    }

    return nextSibling$1(hydratedNode);
  }

  function hydrateText(node, vnode) {
    var _a;

    if (!hasCorrectNodeType(vnode, node, 3
    /* TEXT */
    )) {
      return handleMismatch(node, vnode);
    }

    {
      const nodeValue = getProperty$1(node, 'nodeValue');

      if (nodeValue !== vnode.text && !(nodeValue === '\u200D' && vnode.text === '')) {
        logWarn('Hydration mismatch: text values do not match, will recover from the difference', vnode.owner);
      }
    }

    setText$1(node, (_a = vnode.text) !== null && _a !== void 0 ? _a : null);
    vnode.elm = node;
    return node;
  }

  function hydrateComment(node, vnode) {
    var _a;

    if (!hasCorrectNodeType(vnode, node, 8
    /* COMMENT */
    )) {
      return handleMismatch(node, vnode);
    }

    {
      const nodeValue = getProperty$1(node, 'nodeValue');

      if (nodeValue !== vnode.text) {
        logWarn('Hydration mismatch: comment values do not match, will recover from the difference', vnode.owner);
      }
    }

    setProperty$1(node, 'nodeValue', (_a = vnode.text) !== null && _a !== void 0 ? _a : null);
    vnode.elm = node;
    return node;
  }

  function hydrateElement(elm, vnode) {
    if (!hasCorrectNodeType(vnode, elm, 1
    /* ELEMENT */
    ) || !isMatchingElement(vnode, elm)) {
      return handleMismatch(elm, vnode);
    }

    vnode.elm = elm;
    const {
      context
    } = vnode.data;
    const isDomManual = Boolean(!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual"
    /* Manual */
    );

    if (isDomManual) {
      // it may be that this element has lwc:inner-html, we need to diff and in case are the same,
      // remove the innerHTML from props so it reuses the existing dom elements.
      const {
        props
      } = vnode.data;

      if (!isUndefined$1(props) && !isUndefined$1(props.innerHTML)) {
        if (getProperty$1(elm, 'innerHTML') === props.innerHTML) {
          // Do a shallow clone since VNodeData may be shared across VNodes due to hoist optimization
          vnode.data = Object.assign(Object.assign({}, vnode.data), {
            props: cloneAndOmitKey(props, 'innerHTML')
          });
        } else {
          {
            logWarn(`Mismatch hydrating element <${getProperty$1(elm, 'tagName').toLowerCase()}>: innerHTML values do not match for element, will recover from the difference`, vnode.owner);
          }
        }
      }
    }

    patchElementPropsAndAttrs(vnode);

    if (!isDomManual) {
      hydrateChildren(getFirstChild$1(elm), vnode.children, elm, vnode.owner);
    }

    return elm;
  }

  function hydrateCustomElement(elm, vnode) {
    if (!hasCorrectNodeType(vnode, elm, 1
    /* ELEMENT */
    ) || !isMatchingElement(vnode, elm)) {
      return handleMismatch(elm, vnode);
    }

    const {
      sel,
      mode,
      ctor,
      owner
    } = vnode;
    const vm = createVM(elm, ctor, {
      mode,
      owner,
      tagName: sel
    });
    vnode.elm = elm;
    vnode.vm = vm;
    allocateChildren(vnode, vm);
    patchElementPropsAndAttrs(vnode); // Insert hook section:

    {
      assert.isTrue(vm.state === 0
      /* created */
      , `${vm} cannot be recycled.`);
    }

    runConnectedCallback(vm);

    if (vm.renderMode !== 0
    /* Light */
    ) {
      // VM is not rendering in Light DOM, we can proceed and hydrate the slotted content.
      // Note: for Light DOM, this is handled while hydrating the VM
      hydrateChildren(getFirstChild$1(elm), vnode.children, elm, vm);
    }

    hydrateVM(vm);
    return elm;
  }

  function hydrateChildren(node, children, parentNode, owner) {
    let hasWarned = false;
    let nextNode = node;
    let anchor = null;

    for (let i = 0; i < children.length; i++) {
      const childVnode = children[i];

      if (!isNull(childVnode)) {
        if (nextNode) {
          nextNode = hydrateNode(nextNode, childVnode);
          anchor = childVnode.elm;
        } else {
          hasMismatch = true;

          {
            if (!hasWarned) {
              hasWarned = true;
              logError(`Hydration mismatch: incorrect number of rendered nodes. Client produced more nodes than the server.`, owner);
            }
          }

          mount(childVnode, parentNode, anchor);
          anchor = childVnode.elm;
        }
      }
    }

    if (nextNode) {
      hasMismatch = true;

      {
        if (!hasWarned) {
          logError(`Hydration mismatch: incorrect number of rendered nodes. Server rendered more nodes than the client.`, owner);
        }
      }

      do {
        const current = nextNode;
        nextNode = nextSibling$1(nextNode);
        removeNode(current, parentNode);
      } while (nextNode);
    }
  }

  function handleMismatch(node, vnode, msg) {
    hasMismatch = true;

    if (!isUndefined$1(msg)) {
      {
        logError(msg, vnode.owner);
      }
    }

    const parentNode = getProperty$1(node, 'parentNode');
    mount(vnode, parentNode, node);
    removeNode(node, parentNode);
    return vnode.elm;
  }

  function patchElementPropsAndAttrs(vnode) {
    applyEventListeners(vnode);
    patchProps(null, vnode);
  }

  function hasCorrectNodeType(vnode, node, nodeType) {
    if (getProperty$1(node, 'nodeType') !== nodeType) {
      {
        logError('Hydration mismatch: incorrect node type received', vnode.owner);
      }

      return false;
    }

    return true;
  }

  function isMatchingElement(vnode, elm) {
    if (vnode.sel.toLowerCase() !== getProperty$1(elm, 'tagName').toLowerCase()) {
      {
        logError(`Hydration mismatch: expecting element with tag "${vnode.sel.toLowerCase()}" but found "${getProperty$1(elm, 'tagName').toLowerCase()}".`, vnode.owner);
      }

      return false;
    }

    const hasIncompatibleAttrs = validateAttrs(vnode, elm);
    const hasIncompatibleClass = validateClassAttr(vnode, elm);
    const hasIncompatibleStyle = validateStyleAttr(vnode, elm);
    return hasIncompatibleAttrs && hasIncompatibleClass && hasIncompatibleStyle;
  }

  function validateAttrs(vnode, elm) {
    const {
      data: {
        attrs = {}
      }
    } = vnode;
    let nodesAreCompatible = true; // Validate attributes, though we could always recovery from those by running the update mods.
    // Note: intentionally ONLY matching vnodes.attrs to elm.attrs, in case SSR is adding extra attributes.

    for (const [attrName, attrValue] of Object.entries(attrs)) {
      const elmAttrValue = getAttribute$1(elm, attrName);

      if (String(attrValue) !== elmAttrValue) {
        {
          logError(`Mismatch hydrating element <${getProperty$1(elm, 'tagName').toLowerCase()}>: attribute "${attrName}" has different values, expected "${attrValue}" but found "${elmAttrValue}"`, vnode.owner);
        }

        nodesAreCompatible = false;
      }
    }

    return nodesAreCompatible;
  }

  function validateClassAttr(vnode, elm) {
    const {
      data: {
        className,
        classMap
      }
    } = vnode;
    let nodesAreCompatible = true;
    let vnodeClassName;

    if (!isUndefined$1(className) && String(className) !== getProperty$1(elm, 'className')) {
      // className is used when class is bound to an expr.
      nodesAreCompatible = false;
      vnodeClassName = className;
    } else if (!isUndefined$1(classMap)) {
      // classMap is used when class is set to static value.
      const classList = getClassList$1(elm);
      let computedClassName = ''; // all classes from the vnode should be in the element.classList

      for (const name in classMap) {
        computedClassName += ' ' + name;

        if (!classList.contains(name)) {
          nodesAreCompatible = false;
        }
      }

      vnodeClassName = computedClassName.trim();

      if (classList.length > keys(classMap).length) {
        nodesAreCompatible = false;
      }
    }

    if (!nodesAreCompatible) {
      {
        logError(`Mismatch hydrating element <${getProperty$1(elm, 'tagName').toLowerCase()}>: attribute "class" has different values, expected "${vnodeClassName}" but found "${getProperty$1(elm, 'className')}"`, vnode.owner);
      }
    }

    return nodesAreCompatible;
  }

  function validateStyleAttr(vnode, elm) {
    const {
      data: {
        style,
        styleDecls
      }
    } = vnode;
    const elmStyle = getAttribute$1(elm, 'style') || '';
    let vnodeStyle;
    let nodesAreCompatible = true;

    if (!isUndefined$1(style) && style !== elmStyle) {
      nodesAreCompatible = false;
      vnodeStyle = style;
    } else if (!isUndefined$1(styleDecls)) {
      const parsedVnodeStyle = parseStyleText(elmStyle);
      const expectedStyle = []; // styleMap is used when style is set to static value.

      for (let i = 0, n = styleDecls.length; i < n; i++) {
        const [prop, value, important] = styleDecls[i];
        expectedStyle.push(`${prop}: ${value + (important ? ' important!' : '')}`);
        const parsedPropValue = parsedVnodeStyle[prop];

        if (isUndefined$1(parsedPropValue)) {
          nodesAreCompatible = false;
        } else if (!parsedPropValue.startsWith(value)) {
          nodesAreCompatible = false;
        } else if (important && !parsedPropValue.endsWith('!important')) {
          nodesAreCompatible = false;
        }
      }

      if (keys(parsedVnodeStyle).length > styleDecls.length) {
        nodesAreCompatible = false;
      }

      vnodeStyle = ArrayJoin.call(expectedStyle, ';');
    }

    if (!nodesAreCompatible) {
      {
        logError(`Mismatch hydrating element <${getProperty$1(elm, 'tagName').toLowerCase()}>: attribute "style" has different values, expected "${vnodeStyle}" but found "${elmStyle}".`, vnode.owner);
      }
    }

    return nodesAreCompatible;
  }
  /* version: 2.11.3 */

  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const globalStylesheets = create(null);

  {
    // @ts-ignore
    window.__lwcResetGlobalStylesheets = () => {
      for (const key of Object.keys(globalStylesheets)) {
        delete globalStylesheets[key];
      }
    };
  }

  const globalStylesheetsParentElement = document.head || document.body || document; // This check for constructable stylesheets is similar to Fast's:
  // https://github.com/microsoft/fast/blob/d49d1ec/packages/web-components/fast-element/src/dom.ts#L51-L53
  // See also: https://github.com/whatwg/webidl/issues/1027#issuecomment-934510070

  const supportsConstructableStyleSheets = isFunction$1(CSSStyleSheet.prototype.replaceSync) && isArray$1(document.adoptedStyleSheets);
  const supportsMutableAdoptedStyleSheets = supportsConstructableStyleSheets && getOwnPropertyDescriptor$1(document.adoptedStyleSheets, 'length').writable;
  const styleElements = create(null);
  const styleSheets = create(null);
  const shadowRootsToStyleSheets = new WeakMap();
  let getCustomElement;
  let defineCustomElement;
  let HTMLElementConstructor;

  function isCustomElementRegistryAvailable() {
    if (typeof customElements === 'undefined') {
      return false;
    }

    try {
      // dereference HTMLElement global because babel wraps globals in compat mode with a
      // _wrapNativeSuper()
      // This is a problem because LWCUpgradableElement extends renderer.HTMLElement which does not
      // get wrapped by babel.
      const HTMLElementAlias = HTMLElement; // In case we use compat mode with a modern browser, the compat mode transformation
      // invokes the DOM api with an .apply() or .call() to initialize any DOM api sub-classing,
      // which are not equipped to be initialized that way.

      class clazz extends HTMLElementAlias {
        /*LWC compiler v2.11.3*/
      }

      customElements.define('lwc-test-' + Math.floor(Math.random() * 1000000), clazz);
      new clazz();
      return true;
    } catch (_a) {
      return false;
    }
  }

  function insertConstructableStyleSheet(content, target) {
    // It's important for CSSStyleSheets to be unique based on their content, so that
    // `shadowRoot.adoptedStyleSheets.includes(sheet)` works.
    let styleSheet = styleSheets[content];

    if (isUndefined$1(styleSheet)) {
      styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(content);
      styleSheets[content] = styleSheet;
    }

    const {
      adoptedStyleSheets
    } = target;

    if (!adoptedStyleSheets.includes(styleSheet)) {
      if (supportsMutableAdoptedStyleSheets) {
        // This is only supported in later versions of Chromium:
        // https://chromestatus.com/feature/5638996492288000
        adoptedStyleSheets.push(styleSheet);
      } else {
        target.adoptedStyleSheets = [...adoptedStyleSheets, styleSheet];
      }
    }
  }

  function insertStyleElement(content, target) {
    // Avoid inserting duplicate `<style>`s
    let sheets = shadowRootsToStyleSheets.get(target);

    if (isUndefined$1(sheets)) {
      sheets = create(null);
      shadowRootsToStyleSheets.set(target, sheets);
    }

    if (sheets[content]) {
      return;
    }

    sheets[content] = true; // This `<style>` may be repeated multiple times in the DOM, so cache it. It's a bit
    // faster to call `cloneNode()` on an existing node than to recreate it every time.

    let elm = styleElements[content];

    if (isUndefined$1(elm)) {
      elm = document.createElement('style');
      elm.type = 'text/css';
      elm.textContent = content;
      styleElements[content] = elm;
    } else {
      elm = elm.cloneNode(true);
    }

    target.appendChild(elm);
  }

  if (isCustomElementRegistryAvailable()) {
    getCustomElement = customElements.get.bind(customElements);
    defineCustomElement = customElements.define.bind(customElements);
    HTMLElementConstructor = HTMLElement;
  } else {
    const registry = create(null);
    const reverseRegistry = new WeakMap();

    defineCustomElement = function define(name, ctor) {
      if (name !== StringToLowerCase.call(name) || registry[name]) {
        throw new TypeError(`Invalid Registration`);
      }

      registry[name] = ctor;
      reverseRegistry.set(ctor, name);
    };

    getCustomElement = function get(name) {
      return registry[name];
    };

    HTMLElementConstructor = function HTMLElement() {
      if (!(this instanceof HTMLElement)) {
        throw new TypeError(`Invalid Invocation`);
      }

      const {
        constructor
      } = this;
      const name = reverseRegistry.get(constructor);

      if (!name) {
        throw new TypeError(`Invalid Construction`);
      }

      const elm = document.createElement(name);
      setPrototypeOf(elm, constructor.prototype);
      return elm;
    };

    HTMLElementConstructor.prototype = HTMLElement.prototype;
  }

  let hydrating = false;

  function setIsHydrating(value) {
    hydrating = value;
  }

  const ssr = false;

  function isHydrating() {
    return hydrating;
  }

  const isNativeShadowDefined = _globalThis[KEY__IS_NATIVE_SHADOW_ROOT_DEFINED];
  const isSyntheticShadowDefined = hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN);

  function createElement$1(tagName, namespace) {
    return isUndefined$1(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
  }

  function createText(content) {
    return document.createTextNode(content);
  }

  function createComment(content) {
    return document.createComment(content);
  }

  function insert(node, parent, anchor) {
    parent.insertBefore(node, anchor);
  }

  function remove(node, parent) {
    parent.removeChild(node);
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function attachShadow(element, options) {
    if (hydrating) {
      return element.shadowRoot;
    }

    return element.attachShadow(options);
  }

  function setText(node, content) {
    node.nodeValue = content;
  }

  function getProperty(node, key) {
    return node[key];
  }

  function setProperty(node, key, value) {
    {
      if (node instanceof Element && !(key in node)) {
        // TODO [#1297]: Move this validation to the compiler
        assert.fail(`Unknown public property "${key}" of element <${node.tagName}>. This is likely a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}".`);
      }
    }

    node[key] = value;
  }

  function getAttribute(element, name, namespace) {
    return isUndefined$1(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
  }

  function setAttribute(element, name, value, namespace) {
    return isUndefined$1(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
  }

  function removeAttribute(element, name, namespace) {
    if (isUndefined$1(namespace)) {
      element.removeAttribute(name);
    } else {
      element.removeAttributeNS(namespace, name);
    }
  }

  function addEventListener(target, type, callback, options) {
    target.addEventListener(type, callback, options);
  }

  function removeEventListener(target, type, callback, options) {
    target.removeEventListener(type, callback, options);
  }

  function dispatchEvent(target, event) {
    return target.dispatchEvent(event);
  }

  function getClassList(element) {
    return element.classList;
  }

  function setCSSStyleProperty(element, name, value, important) {
    // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
    // represent elements in the engine?
    element.style.setProperty(name, value, important ? 'important' : '');
  }

  function getBoundingClientRect(element) {
    return element.getBoundingClientRect();
  }

  function querySelector(element, selectors) {
    return element.querySelector(selectors);
  }

  function querySelectorAll(element, selectors) {
    return element.querySelectorAll(selectors);
  }

  function getElementsByTagName(element, tagNameOrWildCard) {
    return element.getElementsByTagName(tagNameOrWildCard);
  }

  function getElementsByClassName(element, names) {
    return element.getElementsByClassName(names);
  }

  function getChildren(element) {
    return element.children;
  }

  function getChildNodes(element) {
    return element.childNodes;
  }

  function getFirstChild(element) {
    return element.firstChild;
  }

  function getFirstElementChild(element) {
    return element.firstElementChild;
  }

  function getLastChild(element) {
    return element.lastChild;
  }

  function getLastElementChild(element) {
    return element.lastElementChild;
  }

  function isConnected(node) {
    return node.isConnected;
  }

  function insertGlobalStylesheet(content) {
    if (!isUndefined$1(globalStylesheets[content])) {
      return;
    }

    globalStylesheets[content] = true;
    const elm = document.createElement('style');
    elm.type = 'text/css';
    elm.textContent = content;
    globalStylesheetsParentElement.appendChild(elm);
  }

  function insertStylesheet(content, target) {
    if (supportsConstructableStyleSheets) {
      insertConstructableStyleSheet(content, target);
    } else {
      // Fall back to <style> element
      insertStyleElement(content, target);
    }
  }

  function assertInstanceOfHTMLElement(elm, msg) {
    assert.invariant(elm instanceof HTMLElement, msg);
  }

  const HTMLElementExported = HTMLElementConstructor;
  /*
   * Copyright (c) 2020, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  setAssertInstanceOfHTMLElement(assertInstanceOfHTMLElement);
  setAttachShadow(attachShadow);
  setCreateComment(createComment);
  setCreateElement(createElement$1);
  setCreateText(createText);
  setDefineCustomElement(defineCustomElement);
  setDispatchEvent(dispatchEvent);
  setGetAttribute(getAttribute);
  setGetBoundingClientRect(getBoundingClientRect);
  setGetChildNodes(getChildNodes);
  setGetChildren(getChildren);
  setGetClassList(getClassList);
  setGetCustomElement(getCustomElement);
  setGetElementsByClassName(getElementsByClassName);
  setGetElementsByTagName(getElementsByTagName);
  setGetFirstChild(getFirstChild);
  setGetFirstElementChild(getFirstElementChild);
  setGetLastChild(getLastChild);
  setGetLastElementChild(getLastElementChild);
  setGetProperty(getProperty);
  setHTMLElement(HTMLElementExported);
  setInsert(insert);
  setInsertGlobalStylesheet(insertGlobalStylesheet);
  setInsertStylesheet(insertStylesheet);
  setIsConnected(isConnected);
  setIsHydrating$1(isHydrating);
  setIsNativeShadowDefined(isNativeShadowDefined);
  setIsSyntheticShadowDefined(isSyntheticShadowDefined);
  setNextSibling(nextSibling);
  setQuerySelector(querySelector);
  setQuerySelectorAll(querySelectorAll);
  setRemove(remove);
  setRemoveAttribute(removeAttribute);
  setRemoveEventListener(removeEventListener);
  setSetAttribute(setAttribute);
  setSetCSSStyleProperty(setCSSStyleProperty);
  setSetProperty(setProperty);
  setSetText(setText);
  setSsr(ssr);
  setAddEventListener(addEventListener);
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */

  function resetShadowRootAndLightDom(element, Ctor) {
    if (element.shadowRoot) {
      const shadowRoot = element.shadowRoot;

      while (!isNull(shadowRoot.firstChild)) {
        shadowRoot.removeChild(shadowRoot.firstChild);
      }
    }

    if (Ctor.renderMode === 'light') {
      while (!isNull(element.firstChild)) {
        element.removeChild(element.firstChild);
      }
    }
  }

  function createVMWithProps(element, Ctor, props) {
    const vm = createVM(element, Ctor, {
      mode: 'open',
      owner: null,
      tagName: element.tagName.toLowerCase()
    });

    for (const [key, value] of Object.entries(props)) {
      element[key] = value;
    }

    return vm;
  }

  function hydrateComponent(element, Ctor, props = {}) {
    if (!(element instanceof Element)) {
      throw new TypeError(`"hydrateComponent" expects a valid DOM element as the first parameter but instead received ${element}.`);
    }

    if (!isFunction$1(Ctor)) {
      throw new TypeError(`"hydrateComponent" expects a valid component constructor as the second parameter but instead received ${Ctor}.`);
    }

    if (!isObject(props) || isNull(props)) {
      throw new TypeError(`"hydrateComponent" expects an object as the third parameter but instead received ${props}.`);
    }

    if (getAssociatedVMIfPresent(element)) {
      /* eslint-disable-next-line no-console */
      console.warn(`"hydrateComponent" expects an element that is not hydrated.`, element);
      return;
    }

    try {
      // Let the renderer know we are hydrating, so it does not replace the existing shadowRoot
      // and uses the same algo to create the stylesheets as in SSR.
      setIsHydrating(true);
      const vm = createVMWithProps(element, Ctor, props);
      hydrateRoot(vm); // set it back since now we finished hydration.

      setIsHydrating(false);
    } catch (e) {
      // Fallback: In case there's an error while hydrating, let's log the error, and replace the element content
      //           with the client generated DOM.

      /* eslint-disable-next-line no-console */
      console.error('Recovering from error while hydrating: ', e); // We want to preserve the element, so we need to reset the shadowRoot and light dom.

      resetShadowRootAndLightDom(element, Ctor); // we need to recreate the vm with the hydration flag on, so it re-uses the existing shadowRoot.

      createVMWithProps(element, Ctor, props);
      setIsHydrating(false);
      connectRootElement(element);
    } finally {
      // in case there's an error during recovery
      setIsHydrating(false);
    }
  }
  //       This WeakSet usage is valid because this functionality is not meant to run in IE11.


  const hydratedCustomElements = new WeakSet();

  function buildCustomElementConstructor(Ctor) {
    const HtmlPrototype = getComponentHtmlPrototype(Ctor);
    return class extends HtmlPrototype {
      constructor() {
        super();

        if (this.isConnected) {
          // this if block is hit when there's already an un-upgraded element in the DOM with the same tag name.
          hydrateComponent(this, Ctor, {});
          hydratedCustomElements.add(this);
        } else {
          createVM(this, Ctor, {
            mode: 'open',
            owner: null,
            tagName: this.tagName
          });
        }
      }

      connectedCallback() {
        if (hydratedCustomElements.has(this)) {
          // This is an un-upgraded element that was hydrated in the constructor.
          hydratedCustomElements.delete(this);
        } else {
          connectRootElement(this);
        }
      }

      disconnectedCallback() {
        disconnectRootElement(this);
      }
      /*LWC compiler v2.11.3*/


    };
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // TODO [#2472]: Remove this workaround when appropriate.
  // eslint-disable-next-line lwc-internal/no-global-node


  const _Node$1 = Node;
  const ConnectingSlot = new WeakMap();
  const DisconnectingSlot = new WeakMap();

  function callNodeSlot(node, slot) {
    {
      assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
    }

    const fn = slot.get(node);

    if (!isUndefined$1(fn)) {
      fn(node);
    }

    return node; // for convenience
  } // Monkey patching Node methods to be able to detect the insertions and removal of root elements
  // created via createElement.


  const {
    appendChild,
    insertBefore,
    removeChild,
    replaceChild
  } = _Node$1.prototype;
  assign(_Node$1.prototype, {
    appendChild(newChild) {
      const appendedNode = appendChild.call(this, newChild);
      return callNodeSlot(appendedNode, ConnectingSlot);
    },

    insertBefore(newChild, referenceNode) {
      const insertedNode = insertBefore.call(this, newChild, referenceNode);
      return callNodeSlot(insertedNode, ConnectingSlot);
    },

    removeChild(oldChild) {
      const removedNode = removeChild.call(this, oldChild);
      return callNodeSlot(removedNode, DisconnectingSlot);
    },

    replaceChild(newChild, oldChild) {
      const replacedNode = replaceChild.call(this, newChild, oldChild);
      callNodeSlot(replacedNode, DisconnectingSlot);
      callNodeSlot(newChild, ConnectingSlot);
      return replacedNode;
    }

  });
  /**
   * EXPERIMENTAL: This function is almost identical to document.createElement with the slightly
   * difference that in the options, you can pass the `is` property set to a Constructor instead of
   * just a string value. The intent is to allow the creation of an element controlled by LWC without
   * having to register the element as a custom element.
   *
   * @example
   * ```
   * const el = createElement('x-foo', { is: FooCtor });
   * ```
   */

  function createElement(sel, options) {
    if (!isObject(options) || isNull(options)) {
      throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString$1(options)}".`);
    }

    const Ctor = options.is;

    if (!isFunction$1(Ctor)) {
      throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);
    }

    const UpgradableConstructor = getUpgradableConstructor(sel);
    let wasComponentUpgraded = false; // the custom element from the registry is expecting an upgrade callback

    /**
     * Note: if the upgradable constructor does not expect, or throw when we new it
     * with a callback as the first argument, we could implement a more advanced
     * mechanism that only passes that argument if the constructor is known to be
     * an upgradable custom element.
     */

    const element = new UpgradableConstructor(elm => {
      createVM(elm, Ctor, {
        tagName: sel,
        mode: options.mode !== 'closed' ? 'open' : 'closed',
        owner: null
      });
      ConnectingSlot.set(elm, connectRootElement);
      DisconnectingSlot.set(elm, disconnectRootElement);
      wasComponentUpgraded = true;
    });

    if (!wasComponentUpgraded) {
      /* eslint-disable-next-line no-console */
      console.error(`Unexpected tag name "${sel}". This name is a registered custom element, preventing LWC to upgrade the element.`);
    }

    return element;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */


  const ComponentConstructorToCustomElementConstructorMap = new Map();

  function getCustomElementConstructor(Ctor) {
    if (Ctor === LightningElement) {
      throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
    }

    let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);

    if (isUndefined$1(ce)) {
      ce = buildCustomElementConstructor(Ctor);
      ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
    }

    return ce;
  }
  /**
   * This static getter builds a Web Component class from a LWC constructor so it can be registered
   * as a new element via customElements.define() at any given time. E.g.:
   *
   *      import Foo from 'ns/foo';
   *      customElements.define('x-foo', Foo.CustomElementConstructor);
   *      const elm = document.createElement('x-foo');
   *
   */


  defineProperty(LightningElement, 'CustomElementConstructor', {
    get() {
      return getCustomElementConstructor(this);
    }

  });
  freeze(LightningElement);
  seal(LightningElement.prototype);
  /* version: 2.11.3 */

  function stylesheet$1(token, useActualHostSelector, useNativeDirPseudoclass) {
    var shadowSelector = token ? ("[" + token + "]") : "";
    return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #084E93;}h3" + shadowSelector + " {margin-bottom: 0;}.title" + shadowSelector + " {margin-bottom: 0;}.language-selector" + shadowSelector + " {margin-bottom: 2em;}.container" + shadowSelector + " {font-family: 'Segoe UI';text-align: center;max-width: 32rem;margin: auto;}.plays" + shadowSelector + " {margin-bottom: 1em;}.pool" + shadowSelector + " {max-height: 100px;overflow-x: hidden;overflow-y: scroll;border: 1px solid #c6e5ff;background: aliceblue;padding: 10px;font-size: 1.5em;letter-spacing: 0.5em;font-family: 'Courier New';}.pool-word" + shadowSelector + " {display: inline-block;}.pool-word" + shadowSelector + "::after {content: ',';}.simulator" + shadowSelector + " {text-align: center;}.new-word-button" + shadowSelector + " {padding-left: 5em;padding-right: 5em;}.new-word-button" + shadowSelector + " input" + shadowSelector + " {width: 100%;height: 50px;font-size: inherit;}";
    /*LWC compiler v2.11.3*/
  }
  var _implicitStylesheets$1 = [stylesheet$1];

  var _implicitScopedStylesheets$1 = undefined;

  function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
    var shadowSelector = token ? ("[" + token + "]") : "";
    return ".letter" + shadowSelector + " {width: 1.5em;display: inline-flex;font-size: 2em;border: 2px solid lightgray;height: 1.5em;text-align: center;vertical-align: center;justify-content: center;align-items: center;font-weight: 700;margin: 0.25em;}.letter-solved" + shadowSelector + " {color: white;border: none;padding: 2px;}.letter-oop" + shadowSelector + " {background-color: rgb(201, 180, 88);}.letter-hit" + shadowSelector + " {background-color: rgb(106, 170, 100);}.letter-miss" + shadowSelector + " {background-color: rgb(120, 124, 126);}.letter" + shadowSelector + " input" + shadowSelector + " {width: inherit;font-family: inherit;font-size: inherit;text-align: center;font-weight: inherit;background: transparent;border: none;color: inherit;}.letter" + shadowSelector + " input:focus" + shadowSelector + " {outline: 0;border: 0;}";
    /*LWC compiler v2.11.3*/
  }
  var _implicitStylesheets = [stylesheet];

  var _implicitScopedStylesheets = undefined;

  function tmpl$1($api, $cmp, $slotset, $ctx) {
    const {k: api_key, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, i: api_iterator} = $api;
    const {_m0, _m1, _m2} = $ctx;
    return api_iterator($cmp.renderableWord, function (letter) {
      return [!$cmp.isEditable ? api_element("span", {
        className: letter.classes,
        key: api_key(0, letter.index)
      }, [api_text(api_dynamic_text(letter.character))]) : null, $cmp.isEditable ? api_element("span", {
        className: letter.classes,
        key: api_key(1, letter.index)
      }, [api_element("input", {
        attrs: {
          "type": "text",
          "data-index": letter.index,
          "maxlength": "1",
          "minlength": "1"
        },
        props: {
          "value": letter.character
        },
        key: 2,
        on: {
          "beforeinput": _m0 || ($ctx._m0 = api_bind($cmp.handleBeforeInput)),
          "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange)),
          "click": _m2 || ($ctx._m2 = api_bind($cmp.handleClick))
        }
      })]) : null];
    });
    /*LWC compiler v2.11.3*/
  }
  var _tmpl$2 = registerTemplate(tmpl$1);
  tmpl$1.stylesheets = [];


  if (_implicitStylesheets) {
    tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
  }
  if (_implicitStylesheets || _implicitScopedStylesheets) {
    tmpl$1.stylesheetToken = "ui-wordDisplay_wordDisplay";
  }

  const WORD_LENGTH = 5;
  const DIRECTORY_PATH = 'assets/directory.json';
  const DICTIONARIES_PATH = 'assets/dictionaries';

  const LETTER_CSS_CLASS = 'letter';
  const RESULT_TO_LETTER_CSS_CLASS = {
    '-': ['letter-solved', 'letter-miss'],
    'x': ['letter-solved', 'letter-oop'],
    'o': ['letter-solved', 'letter-hit'],
    '#': ['letter-empty']
  };
  const RESULT_ORDER = ['-', 'x', 'o'];
  const NBSP = '\u00A0';

  const stringReplaceAt = (string, index, character) => {
    return string.substr(0, index) + character + string.substr(index + 1);
  };

  class WordDisplay extends LightningElement {
    constructor(...args) {
      super(...args);
      this.isEditable = false;
      this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this._word = void 0;
      this._result = void 0;
    }

    // Public properties
    get word() {
      return this._word;
    }

    set word(value) {
      this._word = value;

      this._fireChangeEvent();
    }

    get result() {
      return this._result;
    }

    set result(value) {
      this._result = value;

      this._fireChangeEvent();
    }

    reset() {
      this.word = '#'.repeat(WORD_LENGTH);
      this.result = '#'.repeat(WORD_LENGTH);
    } // Private properties


    // Lifecycle hooks
    connectedCallback() {
      if (this.isEditable) {
        this.reset();
      }
    }

    get renderableWord() {
      const resultPerChar = this.result.split('');
      return this.word.split('').map((character, index) => ({
        index,
        character: character === '#' ? this.isEditable ? '' : NBSP : character,
        isMiss: resultPerChar[index] === '-',
        isOop: resultPerChar[index] === 'x',
        isHit: resultPerChar[index] === 'o',
        isEmpty: resultPerChar[index] === '#',
        classes: [LETTER_CSS_CLASS].concat(RESULT_TO_LETTER_CSS_CLASS[resultPerChar[index]]).join(' ')
      }));
    }

    get _characterSet() {
      return new Set(this.characters.split(''));
    } // Private methods


    _focusInput(index) {
      const nextInput = this.template.querySelector(`[data-index="${index}"]`);

      if (nextInput) {
        nextInput.focus();
      }
    }

    _fireChangeEvent() {
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          word: this.word,
          result: this.result
        }
      }));
    } // Events


    handleBeforeInput(event) {
      const data = event.data ? event.data.toUpperCase() : event.data;
      const index = parseInt(event.target.dataset.index);

      if (data === null || data === '') {
        if (this.word[index] === '#') {
          this._focusInput(index - 1);
        } else {
          this.word = stringReplaceAt(this.word, index, '#');
        }
      } else if (this._characterSet.has(data)) {
        this.word = stringReplaceAt(this.word, index, data);

        this._focusInput(index + 1);
      } else {
        event.preventDefault();
      }
    }

    handleChange(event) {
      const allInputs = Array.from(this.template.querySelectorAll('[data-index]'));
      const existingWord = allInputs.map(input => input.value === '' ? '#' : input.value);
      this.word = existingWord.join('');
    }

    handleClick(event) {
      const index = parseInt(event.target.dataset.index);
      const hasFocus = event.target === this.template.activeElement;

      if (this.isEditable && hasFocus) {
        const nextResult = RESULT_ORDER[(RESULT_ORDER.indexOf(this.result[index]) + 1) % RESULT_ORDER.length];
        this.result = stringReplaceAt(this.result, index, nextResult);
      }
    }
    /*LWC compiler v2.11.3*/


  }

  registerDecorators(WordDisplay, {
    publicProps: {
      word: {
        config: 3
      },
      result: {
        config: 3
      },
      isEditable: {
        config: 0
      },
      characters: {
        config: 0
      }
    },
    publicMethods: ["reset"],
    fields: ["_word", "_result"]
  });

  var _uiWordDisplay = registerComponent(WordDisplay, {
    tmpl: _tmpl$2
  });

  const stc0 = {
    classMap: {
      "container": true
    },
    key: 0
  };
  const stc1 = {
    classMap: {
      "title": true
    },
    key: 1
  };
  const stc2 = {
    classMap: {
      "language-selector": true
    },
    key: 2
  };
  const stc3 = {
    key: 3
  };
  const stc4 = {
    classMap: {
      "simulator": true
    },
    key: 6
  };
  const stc5 = {
    classMap: {
      "plays": true
    },
    key: 7
  };
  const stc6 = {
    "played-word": true
  };
  const stc7 = {
    classMap: {
      "pool": true
    },
    attrs: {
      "data-render": "pool"
    },
    key: 10
  };
  const stc8 = {
    "pool-word": true
  };
  const stc9 = {
    classMap: {
      "panel": true
    },
    key: 12
  };
  const stc10 = {
    classMap: {
      "new-word": true
    },
    key: 13
  };
  const stc11 = {
    key: 14
  };
  const stc12 = {
    key: 15
  };
  const stc13 = {
    classMap: {
      "new-word-button": true
    },
    key: 17
  };
  function tmpl($api, $cmp, $slotset, $ctx) {
    const {d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, k: api_key, i: api_iterator, c: api_custom_element} = $api;
    const {_m0, _m1, _m2} = $ctx;
    return [api_element("div", stc0, [api_element("h1", stc1, [api_text(api_dynamic_text($cmp.labels.appTitle))]), api_element("div", stc2, [api_element("label", stc3, [api_text(api_dynamic_text($cmp.labels.dictionary) + " " + api_dynamic_text($cmp.dictionaryFile)), api_element("select", {
      key: 4,
      on: {
        "change": _m0 || ($ctx._m0 = api_bind($cmp.handleLanguageChange))
      }
    }, api_iterator($cmp.languages, function (language) {
      return api_element("option", {
        attrs: {
          "value": language.value
        },
        key: api_key(5, language.value)
      }, [api_text(api_dynamic_text(language.label))]);
    }))])]), api_element("div", stc4, [api_element("div", stc5, api_iterator($cmp.moves, function (move) {
      return api_element("div", {
        classMap: stc6,
        key: api_key(8, move.index)
      }, [api_custom_element("ui-word-display", _uiWordDisplay, {
        props: {
          "word": move.word,
          "result": move.result,
          "characters": $cmp.characters
        },
        key: 9
      })]);
    })), $cmp.pool ? api_element("div", stc7, api_iterator($cmp.pool, function (word) {
      return api_element("span", {
        classMap: stc8,
        key: api_key(11, word)
      }, [api_text(api_dynamic_text(word))]);
    })) : null]), api_element("div", stc9, [api_element("div", stc10, [api_element("h3", stc11, [api_text(api_dynamic_text($cmp.labels.newWordTitle))]), api_element("p", stc12, [api_text(api_dynamic_text($cmp.labels.newWordDescription))]), api_custom_element("ui-word-display", _uiWordDisplay, {
      props: {
        "characters": $cmp.characters,
        "isEditable": "true"
      },
      key: 16,
      on: {
        "change": _m1 || ($ctx._m1 = api_bind($cmp.handleInputWordChange))
      }
    })]), api_element("div", stc13, [api_element("input", {
      attrs: {
        "type": "button",
        "disabled": $cmp.isAddMoveDisabled ? "" : null
      },
      props: {
        "value": $cmp.labels.newWordButton
      },
      key: 18,
      on: {
        "click": _m2 || ($ctx._m2 = api_bind($cmp.addMove))
      }
    })])])])];
    /*LWC compiler v2.11.3*/
  }
  var _tmpl$1 = registerTemplate(tmpl);
  tmpl.stylesheets = [];


  if (_implicitStylesheets$1) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
  }
  if (_implicitStylesheets$1 || _implicitScopedStylesheets$1) {
    tmpl.stylesheetToken = "ui-app_app";
  }

  class WordleSimulator {
    constructor(dictionary, wordLength = 5, characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
      this._allChars = void 0;
      this._wordLength = void 0;
      this._dictionary = void 0;
      this._state = void 0;
      this._wordLength = wordLength;
      this._dictionary = dictionary;
      this._allChars = characterSet.split('');
      this.reset();
    }

    reset() {
      this._state = {
        pool: Array.from(this._dictionary),
        moves: [],
        letterFrequencies: this._allChars.reduce((prev, cur) => Object.assign(prev, {
          [cur]: {
            quantity: 0,
            orMore: true
          }
        }), {}),
        letterPredicitions: Array(this._wordLength).fill(false).map(el => new Set(this._allChars))
      };
      return this;
    }

    addMove({
      word,
      result
    }) {
      word = word.toUpperCase();
      result = result.toLowerCase();

      this._state.moves.push({
        word,
        result
      });

      this._calculateFrequencies({
        word,
        result
      });

      this._calculatePredictions({
        word,
        result
      });

      this._filterPool({
        word,
        result
      });

      return this;
    }

    get wordsLeft() {
      return Array.from(this._state.pool);
    }

    get moves() {
      return Array.from(this._state.moves);
    }
    /*get bestWord() {
    	const previousState = JSON.parse(JSON.stringify(this._state));
    	const poolToTest = this._state.pool.reduce((obj, word) => Object.assign(obj, {[word]: 0}), {});
    	for (const word of poolToTest) {
    		this.addMove();
    	}
    }*/


    _calculateFrequencies({
      word,
      result
    }) {
      const localFrequencies = this._allChars.reduce((prev, cur) => Object.assign(prev, {
        [cur]: 0
      }), {});

      for (let index = 0; index < result.length; index++) {
        const char = word[index];

        if (result[index] === 'o' || result[index] === 'x') {
          this._state.letterFrequencies[char].quantity = Math.max(++localFrequencies[char], this._state.letterFrequencies[char].quantity);
        } else if (result[index] === '-') {
          this._state.letterFrequencies[char].orMore = false;
        }
      }
    }

    _calculatePredictions({
      word,
      result
    }) {
      for (let index = 0; index < result.length; index++) {
        if (result[index] === 'o') {
          this._state.letterPredicitions[index] = new Set(word[index]);
        } else if (result[index] === 'x') {
          this._state.letterPredicitions[index].delete(word[index]);
        } else if (result[index] === '-') ;
      }
    }

    _filterPool() {
      for (var i = this._state.pool.length - 1; i >= 0; i--) {
        if (!this._isValidWord(this._state.pool[i])) {
          this._state.pool.splice(i, 1);
        }
      }
    }

    _isValidWord(word) {
      // Validate frequencies first
      for (const letter of Object.keys(this._state.letterFrequencies)) {
        const letterFrequency = this._state.letterFrequencies[letter];
        const letterCount = WordleSimulator.countLetters(word, letter);

        if (!letterFrequency.orMore && letterCount !== letterFrequency.quantity || letterFrequency.orMore && letterCount < letterFrequency.quantity) {
          return false;
        }
      } // Validate positions after


      return Array(this._wordLength).fill(false).map((_, i) => this._state.letterPredicitions[i].has(word[i])).every(val => val);
    }

    static countLetters(word, letter) {
      return word.split('').reduce((total, current) => total + (current === letter ? 1 : 0), 0);
    }

  }

  registerDecorators(WordleSimulator, {
    fields: ["_allChars", "_wordLength", "_dictionary", "_state"]
  });

  var _tmpl = void 0;

  class getDirectory {
    constructor(dataCallback) {
      this.connected = false;
      this.directory = void 0;
      this.dataCallback = dataCallback;
    }

    connect() {
      this.connected = true;
      this.refreshData();
    }

    disconnect() {
      this.connected = false;
    }

    update() {
      this.refreshData();
    }

    async refreshData() {
      if (this.connected) {
        if (!this.directory) {
          this.directory = await (await fetch(DIRECTORY_PATH)).json();
        }

        this.dataCallback(this.directory);
      }
    }

  }

  registerDecorators(getDirectory, {
    fields: ["connected", "directory"]
  });

  var getDirectory$1 = registerComponent(getDirectory, {
    tmpl: _tmpl
  });

  class getDictionary {
    constructor(dataCallback) {
      this.connected = false;
      this.directory = void 0;
      this.dataCallback = dataCallback;
    }

    connect() {
      this.connected = true;
    }

    disconnect() {
      this.connected = false;
    }

    update(config) {
      if (config.file) {
        this.refreshData(config.file);
      }
    }

    async refreshData(dictionary) {
      if (this.connected) {
        const content = await (await fetch(`${DICTIONARIES_PATH}/${dictionary}`)).json();
        this.dataCallback(content);
      }
    }

  }

  registerDecorators(getDictionary, {
    fields: ["connected", "directory"]
  });

  var getDictionary$1 = registerComponent(getDictionary, {
    tmpl: _tmpl
  });

  var strings = {
    appTitle: 'Wordle Simulator',
    dictionary: 'Dictionary:',
    newWordTitle: 'Include a obtained result:',
    newWordDescription: 'Click the squares to change the result for each letter!',
    newWordButton: 'Add new word'
  };

  class App extends LightningElement {
    constructor(...args) {
      super(...args);
      this.labels = strings;
      this._dictionaryFile = void 0;
      this._inputMove = void 0;
      this._simulator = void 0;
      this.directory = void 0;
      this._language = void 0;
      this._moves = [];
      this._pool = void 0;
    }

    get language() {
      return this._language;
    }

    set language(value) {
      console.log(`Language set to ${value}`);
      this._language = value;

      if (value) {
        this._dictionaryFile = this.directory[this.language].filename;
      }
    }

    get moves() {
      const renderableMoves = this._moves.concat(new Array(6 - this._moves.length).fill({
        word: '#'.repeat(WORD_LENGTH),
        result: '#'.repeat(WORD_LENGTH)
      }));

      return renderableMoves.map((move, index) => ({
        index,
        word: move.word,
        result: move.result
      }));
    }

    get pool() {
      return this._moves && this._moves.length > 0 ? this._pool : null;
    }

    get _isMoveAddable() {
      return this._inputMove && !this._inputMove.word.includes('#') && !this._inputMove.result.includes('#');
    }

    get isAddMoveDisabled() {
      return !this._isMoveAddable;
    }

    get characters() {
      return this.directory && this.language ? this.directory[this.language].characterSet : null;
    }

    get languages() {
      return this.directory ? Object.keys(this.directory).map(key => ({
        label: this.directory[key].label,
        value: key
      })) : [];
    } // Wires


    _directoryWire(directory) {
      this.directory = directory;
      this.language = Object.keys(directory)[0];
    }

    _dictionaryWire(dictionary) {
      console.log(`Loaded dictionary for ${this.language}`);
      console.log(dictionary);
      this._simulator = new WordleSimulator(dictionary, WORD_LENGTH, this.characters);

      this._refreshSimulatorUi();
    }

    // Main logic
    addMove() {
      const inputWord = this.template.querySelector('.new-word ui-word-display');

      this._simulator.addMove(this._inputMove);

      inputWord.reset();

      this._refreshSimulatorUi();
    }

    _refreshSimulatorUi() {
      this._moves = this._simulator.moves;
      this._pool = this._simulator.wordsLeft;
    } // Events


    handleLanguageChange(event) {
      console.log(event);
      this.language = event.target.value;
    }

    handleInputWordChange(event) {
      this._inputMove = {
        word: event.detail.word,
        result: event.detail.result
      };
    }
    /*LWC compiler v2.11.3*/


  }

  registerDecorators(App, {
    wire: {
      _directoryWire: {
        adapter: getDirectory$1,
        method: 1,
        config: function ($cmp) {
          return {};
        }
      },
      _dictionaryWire: {
        adapter: getDictionary$1,
        dynamic: ["file"],
        method: 1,
        config: function ($cmp) {
          return {
            file: $cmp._dictionaryFile
          };
        }
      }
    },
    fields: ["labels", "_dictionaryFile", "_inputMove", "_simulator", "directory", "_language", "_moves", "_pool"]
  });

  var App$1 = registerComponent(App, {
    tmpl: _tmpl$1
  });

  const elm = createElement('ui-app', {
    is: App$1
  });
  document.body.appendChild(elm);

})();