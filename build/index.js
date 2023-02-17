/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/extends/cover/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/extends/cover/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Extend core cover block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
var registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/cover-settings',
  callback: function callback(settings, name) {
    if (name !== 'core/cover') {
      return settings;
    }
    var updatedSettings = Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        // Only allow center, wide, and full alignment options
        align: ['center', 'wide', 'full']
      })
    });
    return updatedSettings;
  }
};

/**
 * Extend core cover block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
var blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/cover-edit',
  callback: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(function (BlockEdit) {
    return function (props) {
      var name = props.name;

      // Do nothing if it's another block than the cover.
      if (name !== 'core/cover') {
        return /*#__PURE__*/React.createElement(BlockEdit, props);
      }

      // Add a div above the Cover settings panel
      // so we can target the BlockEdit component with CSS
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement("div", {
        className: "block-editor-cover"
      })), /*#__PURE__*/React.createElement(BlockEdit, props));
    };
  }, 'withInspectorControl')
};
var hooks = [registerBlockTypeHook, blockEditHook];
var name = 'cover';

/***/ }),

/***/ "./src/blocks/extends/file/index.js":
/*!******************************************!*\
  !*** ./src/blocks/extends/file/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/**
 * Extend core file block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
var registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/file-settings',
  callback: function callback(settings, name) {
    if (name !== 'core/file') {
      return settings;
    }
    var updatedSettings = Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        // Only allow center, left, and right alignment options
        align: ['center', 'left', 'right']
      })
    });
    return updatedSettings;
  }
};
var hooks = [registerBlockTypeHook];
var name = 'file';

/***/ }),

/***/ "./src/blocks/extends/gallery/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/extends/gallery/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Extend core gallery block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
var registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/gallery-settings',
  callback: function callback(settings, name) {
    if (name !== 'core/gallery') {
      return settings;
    }
    var updatedSettings = Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        // Only allow center, wide, and full alignment options
        align: ['center', 'wide', 'full']
      })
    });
    return updatedSettings;
  }
};

/**
 * Extend core gallery block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
var blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/gallery-edit',
  callback: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(function (BlockEdit) {
    return function (props) {
      var name = props.name,
        setAttributes = props.setAttributes;

      // Do nothing if it's another block than the gallery.
      if (name !== 'core/gallery') {
        return /*#__PURE__*/React.createElement(BlockEdit, props);
      }

      // Set the number of columns to always be 2 so we can hide the column slider
      setAttributes({
        columns: 2
      });

      // Add a div above the Gallery settings panel
      // so we can target the BlockEdit component with CSS
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement("div", {
        className: "block-editor-gallery"
      })), /*#__PURE__*/React.createElement(BlockEdit, props));
    };
  }, 'withInspectorControl')
};
var hooks = [registerBlockTypeHook, blockEditHook];
var name = 'gallery';

/***/ }),

/***/ "./src/blocks/extends/image-layout/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/extends/image-layout/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/**
 * Extend acf image layout block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
var registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/image-layout-settings',
  callback: function callback(settings, name) {
    if (name !== 'acf/imagelayout') {
      return settings;
    }
    var updatedSettings = Object.assign({}, settings, {
      attributes: Object.assign({}, settings.attributes, {
        align: Object.assign({}, settings.attributes.align, {
          default: 'wide'
        })
      }),
      supports: Object.assign({}, settings.supports, {
        // Only allow center, wide, and full alignment options
        align: ['center', 'wide', 'full']
      })
    });
    return updatedSettings;
  }
};
var hooks = [registerBlockTypeHook];
var name = 'image-layout';

/***/ }),

/***/ "./src/blocks/extends/index.js":
/*!*************************************!*\
  !*** ./src/blocks/extends/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cover": function() { return /* reexport module object */ _cover__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "File": function() { return /* reexport module object */ _file__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "Gallery": function() { return /* reexport module object */ _gallery__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "ImageLayout": function() { return /* reexport module object */ _image_layout__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "RelatedArticles": function() { return /* reexport module object */ _related_articles__WEBPACK_IMPORTED_MODULE_4__; },
/* harmony export */   "Table": function() { return /* reexport module object */ _table__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "Video": function() { return /* reexport module object */ _video__WEBPACK_IMPORTED_MODULE_6__; }
/* harmony export */ });
/* harmony import */ var _cover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover */ "./src/blocks/extends/cover/index.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./src/blocks/extends/file/index.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ "./src/blocks/extends/gallery/index.js");
/* harmony import */ var _image_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-layout */ "./src/blocks/extends/image-layout/index.js");
/* harmony import */ var _related_articles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./related-articles */ "./src/blocks/extends/related-articles/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table */ "./src/blocks/extends/table/index.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video */ "./src/blocks/extends/video/index.js");















/***/ }),

/***/ "./src/blocks/extends/related-articles/index.js":
/*!******************************************************!*\
  !*** ./src/blocks/extends/related-articles/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/**
 * Extend acf related articles block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
var registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/related-articles-settings',
  callback: function callback(settings, name) {
    if (name !== 'acf/relatedarticles') {
      return settings;
    }
    var updatedSettings = Object.assign({}, settings, {
      attributes: Object.assign({}, settings.attributes, {
        align: Object.assign({}, settings.attributes.align, {
          default: 'center'
        })
      }),
      supports: Object.assign({}, settings.supports, {
        // Only allow center, left, and right alignment options
        align: ['center', 'left', 'right']
      })
    });
    return updatedSettings;
  }
};
var hooks = [registerBlockTypeHook];
var name = 'related-articles';

/***/ }),

/***/ "./src/blocks/extends/table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/extends/table/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/extends/table/save.js");





/**
 * Extend core table block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
var registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/table-settings',
  callback: function callback(settings, name) {
    if (name !== 'core/table') {
      return settings;
    }
    var updatedSettings = Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        // Only allow center, wide, and full alignment options
        align: ['center', 'wide', 'full']
      })
    });
    return updatedSettings;
  }
};

/**
 * Extend core table block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
var blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/table-edit',
  callback: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(function (BlockEdit) {
    return function (props) {
      var name = props.name;

      // Do nothing if it's another block than the table.
      if (name !== 'core/table') {
        return /*#__PURE__*/React.createElement(BlockEdit, props);
      }

      // Add a div above the Table settings panel
      // so we can target the BlockEdit component with CSS
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement("div", {
        className: "block-editor-table"
      })), /*#__PURE__*/React.createElement(BlockEdit, props));
    };
  }, 'withInspectorControl')
};

/**
 * Extend core table block save component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-getsaveelement
 */
var blockEditSave = {
  hookName: 'blocks.getSaveElement',
  namespace: 'ups/extend/table-save',
  callback: function callback(element, blockType, attributes) {
    if (!element) {
      return null;
    } else if (blockType.name !== 'core/table') {
      return element;
    }
    return (0,_save__WEBPACK_IMPORTED_MODULE_3__["default"])(element, blockType, attributes);
  }
};
var hooks = [registerBlockTypeHook, blockEditHook, blockEditSave];
var name = 'table';

/***/ }),

/***/ "./src/blocks/extends/table/save.js":
/*!******************************************!*\
  !*** ./src/blocks/extends/table/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/**
 * This is pulled from the `core/table` save element.
 *
 * We are updating this Section component in order to add a `data-th` attribute. This
 * enables responsive table design even when in AMP (where JS, especially attribute-mutating ones,
 * are stripped).
 *
 * @see https://github.com/WordPress/gutenberg/blob/4f804bb4c6/packages/block-library/src/table/save.js#L38-L77
 */
var Section = function Section(_ref) {
  var type = _ref.type,
    rows = _ref.rows;
  if (!rows.length) {
    return null;
  }
  var Tag = "t".concat(type);
  return /*#__PURE__*/React.createElement(Tag, null, rows.map(function (_ref2, rowIndex) {
    var cells = _ref2.cells;
    return /*#__PURE__*/React.createElement("tr", {
      key: rowIndex
    }, cells.map(function (_ref3, cellIndex) {
      var content = _ref3.content,
        tag = _ref3.tag,
        th = _ref3.th,
        align = _ref3.align;
      var cellClasses;
      var dataAttrs = {};
      if (align) {
        cellClasses = "has-text-align-".concat(align);
        dataAttrs['data-align'] = align;
      }
      if (th) {
        // Add data-th attribute for responsive tables
        dataAttrs['data-th'] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.escapeQuotes)(th);
      }
      return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, _extends({}, dataAttrs, {
        className: cellClasses,
        tagName: tag,
        value: content,
        key: cellIndex
      }));
    }));
  }));
};
Section.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  rows: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    content: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    tag: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    th: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    scope: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    align: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }))
};

/**
 * Updates the save element of the `core/table` block. If the table contains
 * a head row, this will add `data-th` to respective body cells in order to
 * achieve responsive tables.
 */
var getSaveElement = function getSaveElement(element, blockType, attributes) {
  var head = attributes.head,
    body = attributes.body;

  // If no head has been added, return base element
  if (!head.length || !head[0] || !head[0].cells.length) {
    return element;
  }

  // Get text content only (removes styles) from head cells
  var headContent = head[0].cells.map(function (cell) {
    var temp = document.createElement('span');
    temp.innerHTML = cell.content;
    return temp.textContent;
  });

  // Replace the body section components with the custom one above
  var tableWithHeadAttrs = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findAndReplaceElement)(element, function (el) {
    return el.props.type === 'body';
  }, function () {
    var bodyCells = body.map(function (row) {
      return _objectSpread(_objectSpread({}, row), {}, {
        cells: row.cells.map(function (cell, i) {
          return _objectSpread(_objectSpread({}, cell), {}, {
            // Add respective head cell content to `th` prop
            th: headContent[i]
          });
        })
      });
    });
    return /*#__PURE__*/React.createElement(Section, {
      type: "body",
      rows: bodyCells
    });
  });
  return tableWithHeadAttrs;
};
/* harmony default export */ __webpack_exports__["default"] = (getSaveElement);

/***/ }),

/***/ "./src/blocks/extends/video/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/extends/video/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "name": function() { return /* binding */ name; }
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Extend core gallery block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
var blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/video-edit',
  callback: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(function (BlockEdit) {
    return function (props) {
      var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
      if (name === 'core/video') {
        // Set the default video settings (hide controls & autoplay on loop)

        // WordPress has no inherent way to set defaults, and this function
        // runs every time the block changes, so we only set the attributes
        // if they are Undefined (read: not already set).

        if (attributes.autoplay === undefined) {
          setAttributes({
            autoplay: true
          });
        }
        // Controls is enabled by default, so instead we check the existence of
        // one of the other settings.
        if (attributes.loop === undefined) {
          setAttributes({
            loop: true
          });
          setAttributes({
            controls: false
          });
        }
        if (attributes.muted === undefined) {
          setAttributes({
            muted: true
          });
        }
        if (attributes.playsInline === undefined) {
          setAttributes({
            playsInline: true
          });
        }
      }
      return /*#__PURE__*/React.createElement(BlockEdit, props);
    };
  }, 'withAttributesOverride')
};
var hooks = [blockEditHook];
var name = 'video';

/***/ }),

/***/ "./src/components/MediaControl/index.js":
/*!**********************************************!*\
  !*** ./src/components/MediaControl/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediaControl.module.scss */ "./src/components/MediaControl/mediaControl.module.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var MediaControl = function MediaControl(_ref) {
  var allowedTypes = _ref.allowedTypes,
    asBlock = _ref.asBlock,
    fullWidth = _ref.fullWidth,
    help = _ref.help,
    hideLabelFromVision = _ref.hideLabelFromVision,
    id = _ref.id,
    label = _ref.label,
    loading = _ref.loading,
    onChange = _ref.onChange,
    value = _ref.value;
  /**
   * Handler for removing the image.
   */
  var onRemove = function onRemove() {
    onChange(null);
  };

  /**
   * Renders the preview for the media, or a placeholder if no media is available.
   */
  var renderPreview = function renderPreview() {
    if (!value) {
      return /*#__PURE__*/React.createElement("div", {
        className: _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].placeholder
      }, loading && /*#__PURE__*/React.createElement("span", {
        className: _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinner
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, null)));
    } else if (value.mime.startsWith(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.MEDIA_TYPES.video)) {
      return (
        /*#__PURE__*/
        //eslint-disable-next-line jsx-a11y/media-has-caption
        React.createElement("video", _extends({}, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.className)(_mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].previewActual, fullWidth && _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].previewActual__full), {
          autoPlay: true,
          loop: true,
          muted: true
        }), /*#__PURE__*/React.createElement("source", {
          src: value.url,
          type: value.mime
        }))
      );
    }
    return /*#__PURE__*/React.createElement("img", _extends({}, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.className)(_mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].previewActual, fullWidth && _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].previewActual__full), {
      src: value.url,
      alt: value.alt
    }));
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, _extends({}, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.className)(_mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].mediaControl, asBlock && _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].mediaControl__block), {
    label: label,
    help: help,
    hideLabelFromVision: hideLabelFromVision,
    id: id
  }), /*#__PURE__*/React.createElement("div", {
    className: _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].preview
  }, !loading && /*#__PURE__*/React.createElement("div", (0,_utils__WEBPACK_IMPORTED_MODULE_2__.className)(_mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].action, value && _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].action__hover), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onChange,
    allowedTypes: allowedTypes,
    value: value ? value.id : null,
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn,
        isSecondary: true,
        onClick: open
      }, value ? 'Edit' : 'Choose media');
    }
  })), value && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: _mediaControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn,
    isSecondary: true,
    onClick: onRemove
  }, "Remove")), renderPreview()));
};
MediaControl.propTypes = {
  allowedTypes: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)),
  asBlock: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  help: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  hideLabelFromVision: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    alt: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    mime: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)
  })
};
MediaControl.defaultProps = {
  allowedTypes: [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.MEDIA_TYPES.image, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MEDIA_TYPES.video],
  asBlock: false,
  fullWidth: false,
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (MediaControl);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaControl": function() { return /* reexport safe */ _MediaControl__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _MediaControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaControl */ "./src/components/MediaControl/index.js");


/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAuthorsQuery": function() { return /* reexport safe */ _useAuthorsQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "useFieldUtils": function() { return /* reexport safe */ _useFieldUtils__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "useMedia": function() { return /* reexport safe */ _useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "useMetaReducer": function() { return /* reexport safe */ _useMetaReducer__WEBPACK_IMPORTED_MODULE_3__["default"]; }
/* harmony export */ });
/* harmony import */ var _useAuthorsQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAuthorsQuery */ "./src/hooks/useAuthorsQuery.js");
/* harmony import */ var _useFieldUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFieldUtils */ "./src/hooks/useFieldUtils.js");
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var _useMetaReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMetaReducer */ "./src/hooks/useMetaReducer.js");





/***/ }),

/***/ "./src/hooks/useAuthorsQuery.js":
/*!**************************************!*\
  !*** ./src/hooks/useAuthorsQuery.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useAuthorsQuery; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * Hook for querying authors.
 *
 * @param {Object} options
 * @param {string} options.initialQuery Initial query string
 * @param {number[]} options.exclude List of author ids to exclude from query.
 */
function useAuthorsQuery(_ref) {
  var _ref$initialQuery = _ref.initialQuery,
    initialQuery = _ref$initialQuery === void 0 ? '' : _ref$initialQuery,
    exclude = _ref.exclude;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    authors = _useState4[0],
    setAuthors = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];

  /**
   * @async
   *
   * Search for author by query term.
   * @param {string} query Search query
   */
  var queryAuthors = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
      var results;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.next = 3;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
              path: "/wp/v2/ups_authors?search=".concat(encodeURIComponent(query), "&exclude=").concat(encodeURIComponent(exclude.join(',')))
            });
          case 3:
            results = _context.sent;
            setAuthors(results);
            setIsLoading(false);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function queryAuthors(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Update author state when the query changes.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!query) {
      setAuthors([]);
      return;
    }
    queryAuthors(query);
  }, [query]);
  return [authors, isLoading, query, setQuery];
}

/***/ }),

/***/ "./src/hooks/useFieldUtils.js":
/*!************************************!*\
  !*** ./src/hooks/useFieldUtils.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @typedef {import("@wordpress/blocks").BlockEditProps} BlockEditProps
 */

/**
 * Custom hook for providing some block attribute utilities.
 *
 * @param {BlockEditProps['attributes']} attributesOrMeta the block attributes (or post meta)
 * @param {BlockEditProps['setAttributes']} setAttributesOrMeta a setter function to update
 * the attributes of a block (or post meta)
 */
var useFieldUtils = function useFieldUtils(attributesOrMeta, setAttributesOrMeta) {
  /**
   * Helper factory for quickly creating `onChange` event handlers for elements
   * for given attributes.
   *
   * @example
   * <ToggleControl checked={attributes.isHidden} onChange={onChange('isHidden')} />
   *
   * @param {string} name the attribute or meta name to update
   * @returns {(value: any) => void} the `onChange` handler for an element
   */
  var onChange = function onChange(name) {
    return function (value) {
      setAttributesOrMeta(_defineProperty({}, name, value));
    };
  };

  /**
   * Helper function for quickly binding values and `onChange` handlers to elements.
   *
   * @example
   * <TextControl {...getFieldProps('description')} />
   * <ToggleControl {...getFieldProps('isHidden', 'checked')} />
   *
   * @param {string} name the attribute or meta name to apply
   * @param {string} [valueField="value"] the field to assign the value to (defaults to `value`)
   * @returns {{ [valueField: string]: string, onChange(value: any) => void }}
   */
  var getFieldProps = function getFieldProps(name) {
    var _ref;
    var valueField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
    return _ref = {}, _defineProperty(_ref, valueField, attributesOrMeta[name]), _defineProperty(_ref, "onChange", onChange(name)), _ref;
  };
  return {
    onChange: onChange,
    getFieldProps: getFieldProps
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useFieldUtils);

/***/ }),

/***/ "./src/hooks/useMedia.js":
/*!*******************************!*\
  !*** ./src/hooks/useMedia.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * @typedef {{ id: number, source_url: string, alt_text: string credit: string, mime_type: string, media_details: { height: number, sizes: Record<string, object>, width: number } }} MediaUpload
 */

/**
 * @typedef {{ id: number, url: string, alt?: string, mime: string, aspect?: { width: number, height: number } }} Media the Media object for the UI
 */

/**
 *
 * @param {number} id the ID of the media attachment
 * @param {(data: MediaUpload | null) => void} [onMediaUpload] a media handler for when an image is uploaded
 * @param {string} [size='large'] the size of the media to display
 * @returns {[Media|null, boolean, (media: { id: number, [x: string]: any }) => void]} the media object (or null if not found), whether
 * the media is being loaded, and a setter function (for use with the `MediaControl` component)
 */
var useMedia = function useMedia(id, onMediaUpload) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils_constants__WEBPACK_IMPORTED_MODULE_2__.SIZE.large;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(!!id),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    preview = _useState4[0],
    setPreview = _useState4[1];

  /**
   * Gets the selected media for the hook. There are three cases:
   * - If there isn't an ID, return `null`
   * - If there is a preview available, return that
   * - Otherwise (if initial media hasn't been fetched yet), return `undefined`
   */
  var selectedMedia = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (!id) {
      return null;
    } else if (preview) {
      return preview;
    }
    return undefined;
  }, [id, preview]);
  var resetMedia = function resetMedia() {
    if (onMediaUpload) {
      onMediaUpload(null);
    }
    setPreview(null);
  };

  /**
   * Handler for updating the post meta data to include the new media ID.
   *
   * @param {{ id: number, [x: string]: any }} media the media selected via a `MediaControl` component
   */
  var handleMediaUpload = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(media) {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!media) {
              _context.next = 16;
              break;
            }
            setIsLoading(true);
            _context.prev = 2;
            _context.next = 5;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
              path: "/wp/v2/media/".concat(media.id)
            });
          case 5:
            data = _context.sent;
            if (onMediaUpload) {
              onMediaUpload(data);
            }
            setPreview(data);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            resetMedia();
          case 13:
            setIsLoading(false);
            _context.next = 17;
            break;
          case 16:
            resetMedia();
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 10]]);
    }));
    return function handleMediaUpload(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (selectedMedia) {
      setIsLoading(false);
    } else if (selectedMedia === undefined) {
      // If initial media hasn't been fetched yet, fetch it
      handleMediaUpload({
        id: id
      });
    }
  }, [selectedMedia]);
  var media = null;
  if (selectedMedia) {
    var url = selectedMedia.source_url;
    var aspect = null;
    var mediaDetails = selectedMedia.media_details;
    if (mediaDetails) {
      aspect = {
        width: mediaDetails.width,
        height: mediaDetails.height
      };
      if (mediaDetails.sizes && mediaDetails.sizes[size]) {
        url = mediaDetails.sizes[size].source_url;
      }
    }
    media = {
      id: selectedMedia.id,
      url: url,
      alt: selectedMedia.alt_text,
      mime: selectedMedia.mime_type,
      aspect: aspect
    };
  }
  return [media, isLoading, handleMediaUpload];
};
/* harmony default export */ __webpack_exports__["default"] = (useMedia);

/***/ }),

/***/ "./src/hooks/useMetaReducer.js":
/*!*************************************!*\
  !*** ./src/hooks/useMetaReducer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Updates the meta for the current post, for the given meta object.
 * @typedef {(newMeta: Record<string, any>) => void} SetMeta
 */

/**
 * Custom React hook for accessing and mutating post meta data.
 *
 * @returns {[Record<string, any>, SetMeta]} a tuple of the post meta data, and a setter function
 */
var useMetaReducer = function useMetaReducer() {
  var meta = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    return select('core/editor').getEditedPostAttribute('meta');
  });
  var dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('core/editor');

  /**
   * Updates the meta for the current post, for the given field name and value.
   *
   * @param {Record<string, any>} newMeta the meta attributes to update
   */
  var setMeta = function setMeta(newMeta) {
    dispatch.editPost({
      meta: newMeta
    });
  };
  return [meta, setMeta];
};
/* harmony default export */ __webpack_exports__["default"] = (useMetaReducer);

/***/ }),

/***/ "./src/plugins/article-topper-panel/components/TopperPreview.js":
/*!**********************************************************************!*\
  !*** ./src/plugins/article-topper-panel/components/TopperPreview.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/plugins/article-topper-panel/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TextOnly = function TextOnly() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 288 189"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "#ffffff",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#DEDEDE",
    x: "73",
    y: "65",
    width: "143",
    height: "79"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#DEDEDE",
    x: "73",
    y: "151",
    width: "143",
    height: "37"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "73",
    y: "18",
    width: "143",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "73",
    y: "40",
    width: "98",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    stroke: "#000000",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  })));
};
var SmallImage = function SmallImage() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 288 189"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "#ffffff",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#CEE1EC",
    x: "73",
    y: "65",
    width: "143",
    height: "79"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#DEDEDE",
    x: "73",
    y: "151",
    width: "143",
    height: "37"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "73",
    y: "18",
    width: "143",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "73",
    y: "40",
    width: "98",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    stroke: "#000000",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  })));
};
var SiteWidthImage = function SiteWidthImage() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 288 189"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "#ffffff",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#DEDEDE",
    x: "73",
    y: "175",
    width: "143",
    height: "14"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#CEE1EC",
    x: "51",
    y: "65",
    width: "187",
    height: "101"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "51",
    y: "18",
    width: "143",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "51",
    y: "40",
    width: "98",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    stroke: "#000000",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  })));
};
var BgImage = function BgImage() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 288 189"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "#ffffff",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#DEDEDE",
    x: "73",
    y: "148",
    width: "143",
    height: "40"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#CEE1EC",
    x: "0",
    y: "0",
    width: "288",
    height: "134"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "73",
    y: "80",
    width: "143",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "#000000",
    x: "73",
    y: "102",
    width: "98",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    stroke: "#000000",
    x: "0.5",
    y: "0.5",
    width: "287",
    height: "188"
  })));
};
var TopperPreview = function TopperPreview(_ref) {
  var _previewMap;
  var value = _ref.value;
  var previewMap = (_previewMap = {}, _defineProperty(_previewMap, _constants__WEBPACK_IMPORTED_MODULE_0__.TOPPER_TYPES.TEXT_ONLY, TextOnly), _defineProperty(_previewMap, _constants__WEBPACK_IMPORTED_MODULE_0__.TOPPER_TYPES.SMALL_IMAGE, SmallImage), _defineProperty(_previewMap, _constants__WEBPACK_IMPORTED_MODULE_0__.TOPPER_TYPES.SITE_WIDTH_IMAGE, SiteWidthImage), _defineProperty(_previewMap, _constants__WEBPACK_IMPORTED_MODULE_0__.TOPPER_TYPES.BG_IMAGE, BgImage), _previewMap);
  var Preview = previewMap[value || _constants__WEBPACK_IMPORTED_MODULE_0__.TOPPER_TYPES.TEXT_ONLY];
  if (!Preview) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "topper-preview"
  }, /*#__PURE__*/React.createElement("span", {
    className: "topper-preview__window"
  }, /*#__PURE__*/React.createElement(Preview, null)));
};
TopperPreview.propTypes = {
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (TopperPreview);

/***/ }),

/***/ "./src/plugins/article-topper-panel/components/index.js":
/*!**************************************************************!*\
  !*** ./src/plugins/article-topper-panel/components/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopperPreview": function() { return /* reexport safe */ _TopperPreview__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _TopperPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopperPreview */ "./src/plugins/article-topper-panel/components/TopperPreview.js");


/***/ }),

/***/ "./src/plugins/article-topper-panel/constants.js":
/*!*******************************************************!*\
  !*** ./src/plugins/article-topper-panel/constants.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE_TOPPER_SET": function() { return /* binding */ IMAGE_TOPPER_SET; },
/* harmony export */   "TOPPER_TYPES": function() { return /* binding */ TOPPER_TYPES; },
/* harmony export */   "TOPPER_TYPE_OPTIONS": function() { return /* binding */ TOPPER_TYPE_OPTIONS; }
/* harmony export */ });
//--------------------------------------
// topper_type
//--------------------------------------
var TOPPER_TYPES = {
  TEXT_ONLY: 'text_only',
  SMALL_IMAGE: 'small_image',
  SITE_WIDTH_IMAGE: 'site_width_image',
  BG_IMAGE: 'bg_image'
};
var IMAGE_TOPPER_SET = new Set([TOPPER_TYPES.SMALL_IMAGE, TOPPER_TYPES.SITE_WIDTH_IMAGE, TOPPER_TYPES.BG_IMAGE]);
var TOPPER_TYPE_OPTIONS = [{
  value: TOPPER_TYPES.TEXT_ONLY,
  label: 'Text only'
}, {
  value: TOPPER_TYPES.SMALL_IMAGE,
  label: 'Small image'
}, {
  value: TOPPER_TYPES.SITE_WIDTH_IMAGE,
  label: 'Site-width image'
}, {
  value: TOPPER_TYPES.BG_IMAGE,
  label: 'Background image'
}];

/***/ }),

/***/ "./src/plugins/article-topper-panel/index.js":
/*!***************************************************!*\
  !*** ./src/plugins/article-topper-panel/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enabled": function() { return /* binding */ enabled; },
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/plugins/article-topper-panel/constants.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components */ "./src/plugins/article-topper-panel/components/index.js");
/* harmony import */ var _article_topper_panel_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-topper-panel.scss */ "./src/plugins/article-topper-panel/article-topper-panel.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _window$ups_editorial;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var META = {
  is_light_nav: 'is_light_nav',
  topper_type: 'topper_type',
  topper_overline: 'topper_overline',
  topper_description: 'topper_description',
  topper_image: 'topper_image',
  topper_caption: 'topper_caption',
  topper_video_poster: 'topper_video_poster',
  topper_hide_in_modal_gallery: 'topper_hide_in_modal_gallery'
};
var UNCATEGORIZED_ID = 1;
var ArticleTopperPanel = function ArticleTopperPanel() {
  var editedCategoryIds = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
    return select('core/editor').getEditedPostAttribute('categories');
  });
  var _useMetaReducer = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useMetaReducer)(),
    _useMetaReducer2 = _slicedToArray(_useMetaReducer, 2),
    meta = _useMetaReducer2[0],
    setMeta = _useMetaReducer2[1];
  var _useFieldUtils = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useFieldUtils)(meta, setMeta),
    getFieldProps = _useFieldUtils.getFieldProps;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCategoriesLoading = _useState2[0],
    setIsCategoriesLoading = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    overlineOptions = _useState6[0],
    setOverlineOptions = _useState6[1];

  /**
   * Helper factory for creating media upload handlers. Updates a given meta property
   * to the uploaded media's ID, or `0` if none.
   *
   * @param {string} name the name of the meta property to update
   * @returns {(data: { id: number }) => void} a function that sets the meta property on
   * data retrieval
   */
  var onMediaUpload = function onMediaUpload(name) {
    return function (data) {
      var id = data ? data.id : 0;
      setMeta(_defineProperty({}, name, id));
    };
  };
  var _useMedia = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useMedia)(meta[META.topper_image], onMediaUpload(META.topper_image)),
    _useMedia2 = _slicedToArray(_useMedia, 3),
    topperImage = _useMedia2[0],
    isTopperImageLoading = _useMedia2[1],
    setTopperImage = _useMedia2[2];
  var _useMedia3 = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useMedia)(meta[META.topper_video_poster], onMediaUpload(META.topper_video_poster)),
    _useMedia4 = _slicedToArray(_useMedia3, 3),
    topperVideoPoster = _useMedia4[0],
    isTopperVideoPosterLoading = _useMedia4[1],
    setTopperVideoPoster = _useMedia4[2];
  var visibleInModalGallery = !meta[META.topper_hide_in_modal_gallery];
  /**
   * Setter for whether the topper image should be visible to the modal gallery.
   *
   * @param {boolean} value the new inverse value of the `topper_hide_in_modal_gallery` meta
   */
  var setVisibleInModalGallery = function setVisibleInModalGallery(value) {
    setMeta(_defineProperty({}, META.topper_hide_in_modal_gallery, !value));
  };

  /**
   * Load post categories from the REST API
   */
  var loadPostCategories = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var results, categoryIds;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            results = [];
            setIsCategoriesLoading(true);

            // If there are no categories selected, bail early
            if (!(!editedCategoryIds || !editedCategoryIds.length)) {
              _context.next = 7;
              break;
            }
            setMeta(_defineProperty({}, META.topper_overline, 0));
            setCategories(results);
            setIsCategoriesLoading(false);
            return _context.abrupt("return");
          case 7:
            categoryIds = editedCategoryIds.length ? editedCategoryIds.join(',') : [];
            if (!categoryIds.length) {
              _context.next = 12;
              break;
            }
            _context.next = 11;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
              path: "/wp/v2/categories?include=".concat(categoryIds)
            });
          case 11:
            results = _context.sent;
          case 12:
            setCategories(results);
            setIsCategoriesLoading(false);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadPostCategories() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Fetch post categories on load
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadPostCategories();
  }, [editedCategoryIds]);

  /**
   * Once categories have been fetched, set dropdown options and default values
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // Set overline dropdown options once categories have been fetched
    var options = categories.filter(function (c) {
      return c.id !== UNCATEGORIZED_ID;
    }).map(function (c) {
      return {
        value: c.id,
        label: (0,_utils__WEBPACK_IMPORTED_MODULE_7__.unescape)(c.name)
      };
    });
    setOverlineOptions(options);

    // If no overline has been set yet, default to first option
    if (options.length && !meta[META.topper_overline]) {
      setMeta(_defineProperty({}, META.topper_overline, options[0].value));
    }
  }, [categories]);
  return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, _extends({}, getFieldProps(META.is_light_nav, 'checked'), {
    label: meta[META.is_light_nav] ? 'Using light top navigation' : 'Using dark top navigation'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row topper-type"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, _extends({
    className: "topper-type__control"
  }, getFieldProps(META.topper_type), {
    label: "Topper type",
    options: _constants__WEBPACK_IMPORTED_MODULE_9__.TOPPER_TYPE_OPTIONS
  })), /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_10__.TopperPreview, {
    value: meta[META.topper_type]
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, isCategoriesLoading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null) : overlineOptions.length ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, _extends({}, getFieldProps(META.topper_overline), {
    label: "Overline",
    help: "The article\u2019s primary category",
    options: overlineOptions
  })) : /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "overline"
  }, "Overline"), /*#__PURE__*/React.createElement("p", {
    id: "overline",
    className: "overline-empty"
  }, "Assign a", ' ', /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
    href: "https://make.wordpress.org/support/user-manual/content/categories-and-tags/"
  }, "category"), ' ', "to this post to use it for the overline"))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, _extends({}, getFieldProps(META.topper_description), {
    label: "Description"
  }))), _constants__WEBPACK_IMPORTED_MODULE_9__.IMAGE_TOPPER_SET.has(meta[META.topper_type]) && /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.MediaControl, {
    label: "Image/Video",
    loading: isTopperImageLoading,
    value: topperImage,
    onChange: setTopperImage
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    checked: visibleInModalGallery,
    onChange: setVisibleInModalGallery,
    label: "".concat(visibleInModalGallery ? 'Visible in' : 'Hidden from', " modal gallery")
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, _extends({}, getFieldProps(META.topper_caption), {
    label: "Caption",
    help: "Optional caption override"
  })), topperImage && topperImage.mime.startsWith(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.MEDIA_TYPES.video) && /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.MediaControl, {
    label: "Video Poster",
    help: "The default image to show while the video loads",
    allowedTypes: [_utils_constants__WEBPACK_IMPORTED_MODULE_8__.MEDIA_TYPES.image],
    loading: isTopperVideoPosterLoading,
    value: topperVideoPoster,
    onChange: setTopperVideoPoster
  })));
};
var name = 'article-topper-panel';

/**
 * The icon for the panel.
 * @see https://developer.wordpress.org/resource/dashicons/
 */
var icon = 'format-image';
var render = function render() {
  var currentPostType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
    return select('core/editor').getCurrentPostType();
  });

  // Only show on posts
  if (currentPostType !== 'post') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, {
    name: name,
    title: "Article Topper",
    className: "article-topper-panel"
  }, /*#__PURE__*/React.createElement(ArticleTopperPanel, null));
};
var enabled = (_window$ups_editorial = window.ups_editorial) === null || _window$ups_editorial === void 0 ? void 0 : _window$ups_editorial.article_topper_panel;

/***/ }),

/***/ "./src/plugins/authors-panel/components/AuthorList.js":
/*!************************************************************!*\
  !*** ./src/plugins/authors-panel/components/AuthorList.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AuthorList; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/plugins/authors-panel/constants.js");



function AuthorList(_ref) {
  var authors = _ref.authors,
    onRemove = _ref.onRemove,
    onMove = _ref.onMove;
  var removeAuthor = function removeAuthor(author) {
    return function () {
      return onRemove(author);
    };
  };
  var moveUp = function moveUp(author) {
    return function () {
      return onMove(author, _constants__WEBPACK_IMPORTED_MODULE_1__.AUTHOR_REORDER_DIRECTION.up);
    };
  };
  var moveDown = function moveDown(author) {
    return function () {
      return onMove(author, _constants__WEBPACK_IMPORTED_MODULE_1__.AUTHOR_REORDER_DIRECTION.down);
    };
  };
  return /*#__PURE__*/React.createElement("ul", {
    className: "author-list"
  }, authors.map(function (author, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: author.id,
      className: "author-list__item"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, {
      className: "author-list__move-menu"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      className: "button-up",
      isSmall: true,
      isLink: true,
      icon: "arrow-up-alt2",
      label: "Move Up",
      onClick: moveUp(author),
      disabled: i === 0
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      className: "button-down",
      isSmall: true,
      isLink: true,
      icon: "arrow-down-alt2",
      label: "Move Down",
      onClick: moveDown(author),
      disabled: i === authors.length - 1
    })), /*#__PURE__*/React.createElement("span", null, author.name), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      isSmall: true,
      isLink: true,
      icon: "no",
      label: "Remove",
      onClick: removeAuthor(author)
    }));
  }));
}
AuthorList.propTypes = {
  authors: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onMove: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
AuthorList.defaultProps = {
  authors: []
};

/***/ }),

/***/ "./src/plugins/authors-panel/components/AuthorSelect.js":
/*!**************************************************************!*\
  !*** ./src/plugins/authors-panel/components/AuthorSelect.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AuthorSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _SuggestionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestionList */ "./src/plugins/authors-panel/components/SuggestionList.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function AuthorSelect(_ref) {
  var exclude = _ref.exclude,
    onSelect = _ref.onSelect;
  var _useAuthorsQuery = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuthorsQuery)({
      initialQuery: '',
      exclude: exclude
    }),
    _useAuthorsQuery2 = _slicedToArray(_useAuthorsQuery, 4),
    authors = _useAuthorsQuery2[0],
    isLoading = _useAuthorsQuery2[1],
    query = _useAuthorsQuery2[2],
    setQuery = _useAuthorsQuery2[3];

  /**
   * Handle author selection.
   * @param {Object} author Selected author
   */
  var handleSelect = function handleSelect(author) {
    onSelect(author);
    setQuery('');
  };
  return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Add author",
    value: query,
    onChange: setQuery
  }), isLoading ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : /*#__PURE__*/React.createElement(_SuggestionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    suggestions: authors,
    onSelect: handleSelect
  }));
}
AuthorSelect.propTypes = {
  exclude: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
AuthorSelect.defaultProps = {
  exclude: []
};

/***/ }),

/***/ "./src/plugins/authors-panel/components/SuggestionList.js":
/*!****************************************************************!*\
  !*** ./src/plugins/authors-panel/components/SuggestionList.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SuggestionList; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


function SuggestionList(_ref) {
  var suggestions = _ref.suggestions,
    onSelect = _ref.onSelect;
  var handleClick = function handleClick(suggestion) {
    return function (event) {
      event.preventDefault();
      onSelect(suggestion);
    };
  };
  return /*#__PURE__*/React.createElement("ul", {
    className: "author-suggestions"
  }, suggestions.map(function (suggestion) {
    return /*#__PURE__*/React.createElement("li", {
      key: suggestion.id
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      isLink: true,
      icon: "admin-users",
      onClick: handleClick(suggestion),
      className: "author-suggestion__button"
    }, suggestion.name));
  }));
}
SuggestionList.propTypes = {
  suggestions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
SuggestionList.defaultProps = {
  suggestions: []
};

/***/ }),

/***/ "./src/plugins/authors-panel/constants.js":
/*!************************************************!*\
  !*** ./src/plugins/authors-panel/constants.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHOR_REORDER_DIRECTION": function() { return /* binding */ AUTHOR_REORDER_DIRECTION; }
/* harmony export */ });
var AUTHOR_REORDER_DIRECTION = {
  up: 'up',
  down: 'down'
};

/***/ }),

/***/ "./src/plugins/authors-panel/index.js":
/*!********************************************!*\
  !*** ./src/plugins/authors-panel/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enabled": function() { return /* binding */ enabled; },
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/plugins/authors-panel/constants.js");
/* harmony import */ var _components_AuthorSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AuthorSelect */ "./src/plugins/authors-panel/components/AuthorSelect.js");
/* harmony import */ var _components_AuthorList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AuthorList */ "./src/plugins/authors-panel/components/AuthorList.js");
/* harmony import */ var _authors_panel_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authors-panel.scss */ "./src/plugins/authors-panel/authors-panel.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _window$ups_editorial;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Sets up the panel in the Gutenberg editor to manage authors. The `ups_author`
 * taxonomy is defined in the \Upstatement\Editorial\Taxonomy\Author PHP class.
 */












var META = {
  // This should match the meta key value defined as the AUTHOR_META_KEY constant in the
  // \Upstatement\Editorial\Taxonomy\Author class.
  authors: 'ups_meta__authors'
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  // Remove built-in taxonomy UI for Authors
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').removeEditorPanel('taxonomy-panel-ups_authors');
});
var AuthorsPanel = function AuthorsPanel() {
  var _useMetaReducer = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMetaReducer)(),
    _useMetaReducer2 = _slicedToArray(_useMetaReducer, 2),
    meta = _useMetaReducer2[0],
    setMeta = _useMetaReducer2[1];
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    authors = _useState2[0],
    setAuthors = _useState2[1];
  var authorIds = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return authors.map(function (_ref) {
      var id = _ref.id;
      return id;
    });
  }, [authors]);

  /**
   * Add an author.
   * @param {Object} author Author to add
   */
  var addAuthor = function addAuthor(author) {
    var updatedAuthors = authors.concat(author);
    setAuthors(updatedAuthors);
  };

  /**
   * Remove an author.
   * @param {Object} author Author to remove
   */
  var removeAuthor = function removeAuthor(author) {
    var updatedAuthors = authors.filter(function (a) {
      return a !== author;
    });
    setAuthors(updatedAuthors);
  };

  /**
   * Reorder authors
   * @param {Object} author Author to move
   * @param {String} direction Direction to move author in the author list
   */
  var moveAuthor = function moveAuthor(author, direction) {
    var currIndex = authors.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === author.id;
    });
    var updatedAuthors;
    switch (direction) {
      case _constants__WEBPACK_IMPORTED_MODULE_7__.AUTHOR_REORDER_DIRECTION.up:
        // If direction is 'up', move the author to currIndex - 1
        updatedAuthors = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.move)(authors, currIndex, currIndex - 1);
        setAuthors(updatedAuthors);
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_7__.AUTHOR_REORDER_DIRECTION.down:
        // If direction is 'down', move the author to currIndex + 1
        updatedAuthors = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.move)(authors, currIndex, currIndex + 1);
        setAuthors(updatedAuthors);
        break;
      default:
        break;
    }
  };

  /**
   * Load authors by id from the REST API.
   * @param {Array} ids List of author ids
   */
  var loadAuthors = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ids) {
      var results;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
              path: "/wp/v2/ups_authors?include=".concat(encodeURIComponent(ids.join(',')), "&orderby=include")
            });
          case 2:
            results = _context.sent;
            setAuthors(results);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadAuthors(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Fetch author data on load.
   *
   * Authors are stored in post meta as an array of author term IDs. This backfulls
   * with full author details from the term.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var selectedAuthorIds = meta[META.authors] || [];
    if (selectedAuthorIds.length) {
      loadAuthors(selectedAuthorIds);
    }
  }, []);

  /**
   * Persist author changes to post meta store.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setMeta(_defineProperty({}, META.authors, authorIds));
  }, [authorIds]);
  return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/React.createElement(_components_AuthorSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    exclude: authorIds,
    onSelect: addAuthor
  }), /*#__PURE__*/React.createElement(_components_AuthorList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    authors: authors,
    onRemove: removeAuthor,
    onMove: moveAuthor
  }), /*#__PURE__*/React.createElement("a", {
    className: "components-button is-secondary",
    href: "/wp-admin/edit-tags.php?taxonomy=ups_authors"
  }, "Add New Author"));
};
var name = 'post-authors';

/**
 * The icon for the panel.
 * @see https://developer.wordpress.org/resource/dashicons/#admin-users
 */
var icon = 'admin-users';
var render = function render() {
  var currentPostType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    return select('core/editor').getCurrentPostType();
  });

  // Only show on posts
  if (currentPostType !== 'post') {
    return null;
  }
  return /*#__PURE__*/React.createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__.PluginDocumentSettingPanel, {
    name: name,
    title: "Authors",
    className: "authors-panel"
  }, /*#__PURE__*/React.createElement(AuthorsPanel, null));
};
var enabled = (_window$ups_editorial = window.ups_editorial) === null || _window$ups_editorial === void 0 ? void 0 : _window$ups_editorial.author_panel;

/***/ }),

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleTopperPanel": function() { return /* reexport module object */ _article_topper_panel__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "AuthorsPanel": function() { return /* reexport module object */ _authors_panel__WEBPACK_IMPORTED_MODULE_1__; }
/* harmony export */ });
/* harmony import */ var _article_topper_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-topper-panel */ "./src/plugins/article-topper-panel/index.js");
/* harmony import */ var _authors_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authors-panel */ "./src/plugins/authors-panel/index.js");





/***/ }),

/***/ "./src/utils/className.js":
/*!********************************!*\
  !*** ./src/utils/className.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * JSX helper function for assigning multiple class names
 * to a component. This will only assign class names that
 * resolve to strings.
 *
 * @example
 * ```jsx
 * <div {...className(s.container, open && s.open)}></div>
 * ```
 *
 * @param {...any} classes the class queries to apply
 * @returns {object} a spreadable object with a single
 * `className` property to apply to a component
 */
var className = function className() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return {
    className: classes.filter(function (className) {
      return typeof className === 'string';
    }).join(' ')
  };
};
/* harmony default export */ __webpack_exports__["default"] = (className);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALIGN": function() { return /* binding */ ALIGN; },
/* harmony export */   "MEDIA_TYPES": function() { return /* binding */ MEDIA_TYPES; },
/* harmony export */   "RICH_TEXT_FORMATS": function() { return /* binding */ RICH_TEXT_FORMATS; },
/* harmony export */   "SIZE": function() { return /* binding */ SIZE; },
/* harmony export */   "SIZE_OPTIONS": function() { return /* binding */ SIZE_OPTIONS; }
/* harmony export */ });
var ALIGN = {
  left: 'left',
  right: 'right',
  center: 'center',
  wide: 'wide',
  full: 'full'
};
var MEDIA_TYPES = {
  image: 'image',
  video: 'video'
};
var RICH_TEXT_FORMATS = {
  bold: 'core/bold',
  italic: 'core/italic',
  link: 'core/link',
  strikethrough: 'core/strikethrough'
};
var SIZE = {
  thumbnail: 'thumbnail',
  medium: 'medium',
  large: 'large',
  full: 'full'
};
var SIZE_OPTIONS = [{
  value: SIZE.thumbnail,
  label: 'Thumbnail'
}, {
  value: SIZE.medium,
  label: 'Medium'
}, {
  value: SIZE.large,
  label: 'Large'
}, {
  value: SIZE.full,
  label: 'Full size'
}];

/***/ }),

/***/ "./src/utils/escapeQuotes.js":
/*!***********************************!*\
  !*** ./src/utils/escapeQuotes.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Replaces quotes from a string with an escaped quote for use within HTML. This
 * fixes issues with quotes breaking out of `data-*` attributes.
 *
 * @param {string} value the value to escape quotes from
 * @returns {string} the escaped value
 */
var escapeQuotes = function escapeQuotes(value) {
  return (value || '').replace(/"/g, '&quot;');
};
/* harmony default export */ __webpack_exports__["default"] = (escapeQuotes);

/***/ }),

/***/ "./src/utils/findAndReplaceElement.js":
/*!********************************************!*\
  !*** ./src/utils/findAndReplaceElement.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/**
 * Performs depth-first search to find an element of a given type inside the
 * given element. Provides a callback to manipulate the element.
 *
 * @param {React.ReactNode} element the element to search
 * @param {(element: React.ReactNode) => boolean} match a match function
 * @param {(element: React.ReactNode) => React.ReactNode} callback a callback that
 * is passed the found element, and returns the modified one
 * @returns {React.ReactNode} the modified element
 */
var findAndReplaceElement = function findAndReplaceElement(element, match, callback) {
  // If element doesn't exist, return null
  if (!element) {
    return null;
  }

  // If an element has matched, stop recursing and use callback
  if (match(element)) {
    return callback(element);
  }
  var children;
  if (element.props.children) {
    children = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.map(element.props.children, function (child) {
      return findAndReplaceElement(child, match, callback);
    });
  }

  // Otherwise, clone the element and recurse with its children
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, [element, {}].concat(_toConsumableArray(children ? [children] : [])));
};
/* harmony default export */ __webpack_exports__["default"] = (findAndReplaceElement);

/***/ }),

/***/ "./src/utils/getEnum.js":
/*!******************************!*\
  !*** ./src/utils/getEnum.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @template {Record<string, any>} T
 * @typedef {{ [K in keyof T]: K }} KeyEnum
 */

/**
 * Gets an enumeration of a given record/object's keys.
 *
 * @template {Record<string, any>} T
 * @param {T} record the object to create the enumeration from
 * @returns {KeyEnum<T>} the enumeration of the given object's keys
 */
var getEnum = function getEnum(record) {
  return Object.keys(record).reduce(function (acc, key) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, key));
  }, {});
};
/* harmony default export */ __webpack_exports__["default"] = (getEnum);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "className": function() { return /* reexport safe */ _className__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "escapeQuotes": function() { return /* reexport safe */ _escapeQuotes__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "findAndReplaceElement": function() { return /* reexport safe */ _findAndReplaceElement__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "getEnum": function() { return /* reexport safe */ _getEnum__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "move": function() { return /* reexport safe */ _move__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "unescape": function() { return /* reexport safe */ _unescape__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _className__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./className */ "./src/utils/className.js");
/* harmony import */ var _escapeQuotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escapeQuotes */ "./src/utils/escapeQuotes.js");
/* harmony import */ var _findAndReplaceElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findAndReplaceElement */ "./src/utils/findAndReplaceElement.js");
/* harmony import */ var _getEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEnum */ "./src/utils/getEnum.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./move */ "./src/utils/move.js");
/* harmony import */ var _unescape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unescape */ "./src/utils/unescape.js");







/***/ }),

/***/ "./src/utils/move.js":
/*!***************************!*\
  !*** ./src/utils/move.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Utility function for moving an item in an array
 * from one index to another
 *
 * @example
 * ```js
 * move(['beep', 'boop', 'bop'], 1, 2);
 * // ['beep', 'bop', 'boop']
 * ```
 *
 * @param {Array} arr the array to perform the reordering on
 * @param {Int} from the index of the item to move
 * @param {Int} to the index to move the item to
 *
 * @returns {object} a spreadable object with a single
 * `className` property to apply to a component
 */
var move = function move(originalArr, from, to) {
  // Make a copy of the original array
  var arr = _toConsumableArray(originalArr);
  while (from < 0) {
    from += arr.length;
  }
  while (to < 0) {
    to += arr.length;
  }
  if (to >= arr.length) {
    var k = to - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  var itemToInsert = arr.splice(from, 1)[0];
  arr.splice(to, 0, itemToInsert);
  return arr;
};
/* harmony default export */ __webpack_exports__["default"] = (move);

/***/ }),

/***/ "./src/utils/unescape.js":
/*!*******************************!*\
  !*** ./src/utils/unescape.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unescape = function unescape(str) {
  var map = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };
  return str.replace(/&(?:amp|lt|gt|quot|#39);/g, function (m) {
    return map[m];
  });
};
/* harmony default export */ __webpack_exports__["default"] = (unescape);

/***/ }),

/***/ "./src/components/MediaControl/mediaControl.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/MediaControl/mediaControl.module.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"mediaControl":"maSOKrYHsPNjYS48Subg","action":"bdZkY38M12yKa_e1qE26","action__hover":"E8Cp0rkj2671OHfxXe8u","btn":"aGG4rEifuDBRA3tip1oz","preview":"jH9dbPsKRMm111cnIk5Q","previewActual":"Rar0slatbEEHoCGgrjU8","previewActual__full":"gATY0FnbsweZ7sZIAVJk","placeholder":"ETRVRNdkXWlPy4w6oYiY","spinner":"c3sb5EcghiPzJEysktBQ","mediaControl__block":"ha_Y5emLgLO3MU0VsSHo"});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/plugins/article-topper-panel/article-topper-panel.scss":
/*!********************************************************************!*\
  !*** ./src/plugins/article-topper-panel/article-topper-panel.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/plugins/authors-panel/authors-panel.scss":
/*!******************************************************!*\
  !*** ./src/plugins/authors-panel/authors-panel.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["richText"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins */ "./src/plugins/index.js");
/* harmony import */ var _blocks_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/extends */ "./src/blocks/extends/index.js");







// ========================
// Plugins


[_plugins__WEBPACK_IMPORTED_MODULE_6__.ArticleTopperPanel, _plugins__WEBPACK_IMPORTED_MODULE_6__.AuthorsPanel].filter(function (_ref) {
  var enabled = _ref.enabled;
  return enabled;
}).forEach(function (_ref2) {
  var name = _ref2.name,
    render = _ref2.render,
    icon = _ref2.icon;
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)(name, {
    icon: icon,
    render: render
  });
});

// ========================
// Blocks



/**
 * Extend existing Gutenberg blocks using block filters
 *
 * @see https://www.npmjs.com/package/@wordpress/hooks
 */
[_blocks_extends__WEBPACK_IMPORTED_MODULE_7__.Cover, _blocks_extends__WEBPACK_IMPORTED_MODULE_7__.File, _blocks_extends__WEBPACK_IMPORTED_MODULE_7__.Gallery, _blocks_extends__WEBPACK_IMPORTED_MODULE_7__.ImageLayout, _blocks_extends__WEBPACK_IMPORTED_MODULE_7__.RelatedArticles, _blocks_extends__WEBPACK_IMPORTED_MODULE_7__.Table, _blocks_extends__WEBPACK_IMPORTED_MODULE_7__.Video].filter(function (_ref3) {
  var _window$ups_editorial;
  var name = _ref3.name;
  var activeExtends = (_window$ups_editorial = window.ups_editorial) === null || _window$ups_editorial === void 0 ? void 0 : _window$ups_editorial.extended_blocks;
  return activeExtends && activeExtends.indexOf(name) > -1;
}).forEach(function (_ref4) {
  var hooks = _ref4.hooks;
  hooks.forEach(function (_ref5) {
    var hookName = _ref5.hookName,
      namespace = _ref5.namespace,
      callback = _ref5.callback;
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)(hookName, namespace, callback);
  });
});
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  // Remove quote style panel
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/quote', 'default');
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/quote', 'plain');

  // Remove separator style panel
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/separator', 'default');
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/separator', 'wide');
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/separator', 'dots');

  // Remove table style panel
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/table', 'regular');
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/table', 'stripes');

  // Updating format type
  var image = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.unregisterFormatType)('core/image');
  image.className = 'wp-rich-text-inline-image';
  (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.registerFormatType)('core/image', image);

  // Unregister all the Embed block variations.
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockVariations)('core/embed').forEach(function (variation) {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockVariation)('core/embed', variation.name);
  });
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map