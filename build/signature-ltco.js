function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SignatureLTCO=/*#__PURE__*/function(){function a(){return _classCallCheck(this,a),this.themeSwitch={dark:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA1Mi4xMzggMTgiPjxyZWN0IHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIGZpbGw9IiMyMDIwMjciLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE1IDUuMDUpIj48cGF0aCBkPSJNMjQuODksMzIuMDMxaDEuN1YyNi40NDRoLTEuN1YyNS40MWgzLjAyMXY2LjYyMWgxLjcwN3YxLjAzNEgyNC44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC44OSAtMjUuMjAzKSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01Ni4zNDEsMzQuNzMxYTEuNDQ2LDEuNDQ2LDAsMCwxLTEuMTI4LS40LDEuNTIxLDEuNTIxLDAsMCwxLS4zNjItMS4wNDlWMzAuNDI3SDUzLjNWMjkuMzkzaDEuMDU1YS42NS42NSwwLDAsMCwuNDU1LS4xMjguNjIxLjYyMSwwLDAsMCwuMTM0LS40NjFWMjcuNTFoMS4yMzF2MS44ODNoMi4xNzJ2MS4wMzRINTYuMTg0VjMzLjdoMi4xNzJ2MS4wMzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNDIyIC0yNi44NjkpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTg3LjIzNCw0MS41NzZhMi45MjYsMi45MjYsMCwwLDEtMS4xLS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE5LS44NzcsMi4zLDIuMywwLDAsMSwuODI4LS41NSwyLjg3OCwyLjg3OCwwLDAsMSwxLjA5LS4yMDcsMi4zODYsMi4zODYsMCwwLDEsMS4zNjYuMzUyLDIuMjUxLDIuMjUxLDAsMCwxLC43ODYuOTMxbC0xLjAzNC41NTlhMS4zNywxLjM3LDAsMCwwLS40MTQtLjU1MiwxLjExMSwxLjExMSwwLDAsMC0uNzItLjIwNywxLjE2NywxLjE2NywwLDAsMC0uOS4zNDEsMS4zMTYsMS4zMTYsMCwwLDAtLjMxNy45MzF2Ljg5YTEuMzIyLDEuMzIyLDAsMCwwLC4zMTcuOTI3LDEuMTkyLDEuMTkyLDAsMCwwLC45MjUuMzQ2QTEuMjIzLDEuMjIzLDAsMCwwLDg4LDQwLjI4NWExLjU3NywxLjU3NywwLDAsMCwuNDU5LS41NzlsLjk5My41OWEyLjIxOCwyLjIxOCwwLDAsMS0uODExLjkyN0EyLjUzMiwyLjUzMiwwLDAsMSw4Ny4yMzQsNDEuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcyLjI1NCAtMzMuNTkyKSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTYuMjU3LDQxLjU4NGEyLjg3OCwyLjg3OCwwLDAsMS0xLjA5LS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE3LS44NzksMi4zLDIuMywwLDAsMSwuODI4LS41NTksMy4xLDMuMSwwLDAsMSwyLjE3NywwLDIuMzA3LDIuMzA3LDAsMCwxLC44MjguNTU5LDIuNTI0LDIuNTI0LDAsMCwxLC41MTcuODc5LDMuODE5LDMuODE5LDAsMCwxLDAsMi4zMTcsMi40ODIsMi40ODIsMCwwLDEtLjUxNy44NzksMi4yNTUsMi4yNTUsMCwwLDEtLjgyOC41NTlBMi44NzgsMi44NzgsMCwwLDEsMTE2LjI1Nyw0MS41ODRabTAtMS4wMTRhMS4xODYsMS4xODYsMCwwLDAsLjktLjM0NiwxLjQyMSwxLjQyMSwwLDAsMCwuMzMxLTEuMDJ2LS44MjhhMS40MTUsMS40MTUsMCwwLDAtLjMzMS0xLjAxOCwxLjMzOSwxLjMzOSwwLDAsMC0xLjgsMCwxLjQyNiwxLjQyNiwwLDAsMC0uMzMxLDEuMDE4VjM5LjJhMS40MywxLjQzLDAsMCwwLC4zMzEsMS4wMiwxLjE5MiwxLjE5MiwwLDAsMCwuOS4zNDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUuMjc4IC0zMy42KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuNDgyLDU1Ljc4MmExLjA2MSwxLjA2MSwwLDAsMS0uNzY2LS4yMjguNzU5Ljc1OSwwLDAsMS0uMjI4LS41NTl2LS4zMWEuNzY4Ljc2OCwwLDAsMSwuMjI4LS41NTksMS40LDEuNCwwLDAsMSwxLjUzMSwwLC43NjguNzY4LDAsMCwxLC4yMjguNTU5VjU1YS43NTkuNzU5LDAsMCwxLS4yMjguNTU5QTEuMDYxLDEuMDYxLDAsMCwxLDE1Mi40ODIsNTUuNzgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS4yOTYgLTQ3Ljc5OCkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTc1LjE5LDMzLjdsMy40LTkuMjloMS4xOWwtMy40LDkuMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0LjA5MyAtMjQuNDEpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIwNS41NCwzNy4yNTRsMy4yNDgtMS43NTl2LS4wNzRsLTMuMjQ4LTEuNzU5VjMyLjRsNC40NCwyLjQzM3YxLjI0MWwtNC40NCwyLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OC4xNjQgLTMwLjc0NykiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+",cursor:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABHNCSVQICAgIfAhkiAAAAHFJREFUGJV9zkEVwkAUQ9H3o4BVaV1goQ5ACUigDnACEmYcIOPTFRiYsOmybbb35CQB0HWfs+SrzSmCA1DAU+ZQYsEnq/Eoqd3WEYB79H16S22+2mkDhMB1U8NvtabH3gfN8/HVWlzA1ea3rFfwmDmUP3EEKz2FrG2WAAAAAElFTkSuQmCC"},light:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA1Mi4xMzggMTgiPjxyZWN0IHdpZHRoPSI1Mi4xMzgiIGhlaWdodD0iMTgiIGZpbGw9IiNGQUZBRkYiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE1IDUuMDUpIj48cGF0aCBkPSJNMjQuODksMzIuMDMxaDEuN1YyNi40NDRoLTEuN1YyNS40MWgzLjAyMXY2LjYyMWgxLjcwN3YxLjAzNEgyNC44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC44OSAtMjUuMjAzKSIgZmlsbD0iIzIwMjAyNyIvPjxwYXRoIGQ9Ik01Ni4zNDEsMzQuNzMxYTEuNDQ2LDEuNDQ2LDAsMCwxLTEuMTI4LS40LDEuNTIxLDEuNTIxLDAsMCwxLS4zNjItMS4wNDlWMzAuNDI3SDUzLjNWMjkuMzkzaDEuMDU1YS42NS42NSwwLDAsMCwuNDU1LS4xMjguNjIxLjYyMSwwLDAsMCwuMTM0LS40NjFWMjcuNTFoMS4yMzF2MS44ODNoMi4xNzJ2MS4wMzRINTYuMTg0VjMzLjdoMi4xNzJ2MS4wMzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNDIyIC0yNi44NjkpIiBmaWxsPSIjMjAyMDI3Ii8+PHBhdGggZD0iTTg3LjIzNCw0MS41NzZhMi45MjYsMi45MjYsMCwwLDEtMS4xLS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE5LS44NzcsMi4zLDIuMywwLDAsMSwuODI4LS41NSwyLjg3OCwyLjg3OCwwLDAsMSwxLjA5LS4yMDcsMi4zODYsMi4zODYsMCwwLDEsMS4zNjYuMzUyLDIuMjUxLDIuMjUxLDAsMCwxLC43ODYuOTMxbC0xLjAzNC41NTlhMS4zNywxLjM3LDAsMCwwLS40MTQtLjU1MiwxLjExMSwxLjExMSwwLDAsMC0uNzItLjIwNywxLjE2NywxLjE2NywwLDAsMC0uOS4zNDEsMS4zMTYsMS4zMTYsMCwwLDAtLjMxNy45MzF2Ljg5YTEuMzIyLDEuMzIyLDAsMCwwLC4zMTcuOTI3LDEuMTkyLDEuMTkyLDAsMCwwLC45MjUuMzQ2QTEuMjIzLDEuMjIzLDAsMCwwLDg4LDQwLjI4NWExLjU3NywxLjU3NywwLDAsMCwuNDU5LS41NzlsLjk5My41OWEyLjIxOCwyLjIxOCwwLDAsMS0uODExLjkyN0EyLjUzMiwyLjUzMiwwLDAsMSw4Ny4yMzQsNDEuNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcyLjI1NCAtMzMuNTkyKSIgZmlsbD0iIzIwMjAyNyIvPjxwYXRoIGQ9Ik0xMTYuMjU3LDQxLjU4NGEyLjg3OCwyLjg3OCwwLDAsMS0xLjA5LS4yLDIuMjQ3LDIuMjQ3LDAsMCwxLS44MjgtLjU1OSwyLjQyNywyLjQyNywwLDAsMS0uNTE3LS44NzksMy43NzgsMy43NzgsMCwwLDEsMC0yLjMxNywyLjQ2MiwyLjQ2MiwwLDAsMSwuNTE3LS44NzksMi4zLDIuMywwLDAsMSwuODI4LS41NTksMy4xLDMuMSwwLDAsMSwyLjE3NywwLDIuMzA3LDIuMzA3LDAsMCwxLC44MjguNTU5LDIuNTI0LDIuNTI0LDAsMCwxLC41MTcuODc5LDMuODE5LDMuODE5LDAsMCwxLDAsMi4zMTcsMi40ODIsMi40ODIsMCwwLDEtLjUxNy44NzksMi4yNTUsMi4yNTUsMCwwLDEtLjgyOC41NTlBMi44NzgsMi44NzgsMCwwLDEsMTE2LjI1Nyw0MS41ODRabTAtMS4wMTRhMS4xODYsMS4xODYsMCwwLDAsLjktLjM0NiwxLjQyMSwxLjQyMSwwLDAsMCwuMzMxLTEuMDJ2LS44MjhhMS40MTUsMS40MTUsMCwwLDAtLjMzMS0xLjAxOCwxLjMzOSwxLjMzOSwwLDAsMC0xLjgsMCwxLjQyNiwxLjQyNiwwLDAsMC0uMzMxLDEuMDE4VjM5LjJhMS40MywxLjQzLDAsMCwwLC4zMzEsMS4wMiwxLjE5MiwxLjE5MiwwLDAsMCwuOS4zNDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTUuMjc4IC0zMy42KSIgZmlsbD0iIzIwMjAyNyIvPjxwYXRoIGQ9Ik0xNTIuNDgyLDU1Ljc4MmExLjA2MSwxLjA2MSwwLDAsMS0uNzY2LS4yMjguNzU5Ljc1OSwwLDAsMS0uMjI4LS41NTl2LS4zMWEuNzY4Ljc2OCwwLDAsMSwuMjI4LS41NTksMS40LDEuNCwwLDAsMSwxLjUzMSwwLC43NjguNzY4LDAsMCwxLC4yMjguNTU5VjU1YS43NTkuNzU5LDAsMCwxLS4yMjguNTU5QTEuMDYxLDEuMDYxLDAsMCwxLDE1Mi40ODIsNTUuNzgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS4yOTYgLTQ3Ljc5OCkiIGZpbGw9IiMyMDIwMjciLz48cGF0aCBkPSJNMTc1LjE5LDMzLjdsMy40LTkuMjloMS4xOWwtMy40LDkuMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0LjA5MyAtMjQuNDEpIiBmaWxsPSIjMjAyMDI3Ii8+PHBhdGggZD0iTTIwNS41NCwzNy4yNTRsMy4yNDgtMS43NTl2LS4wNzRsLTMuMjQ4LTEuNzU5VjMyLjRsNC40NCwyLjQzM3YxLjI0MWwtNC40NCwyLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OC4xNjQgLTMwLjc0NykiIGZpbGw9IiMyMDIwMjciLz48L2c+PC9zdmc+Cg==",cursor:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQYlXWPMQ6CUBAFZ6G28ABSUdjpWTwneAATW2rvQaKBgg+7P3nWms+084p5AKSkJkK9u0Z3jRG6r6taAEtJTV3zAo788smZi0Wol7hRwIzO3DUDh9IAmCrAdiSAVWY8d63xsG3T2YyhEPnOmSt/N2d3TRHqlkUngC+aF0VXShCb0gAAAABJRU5ErkJggg=="}},this.objectParams=this.queryParamsInUrlScript()||{theme:"dark"},this.styles="\n      .ltco_dev {\n        position: absolute;\n        bottom: 10px;\n        left: 50%;\n        opacity: .04;\n        z-index: 9999;\n        transform: translateX(-50%);\n        transition: all 0.2s ease-in-out;\n      }\n\n      .ltco_dev.active,\n      .ltco_dev:active {\n        opacity: 1;\n      }\n\n      .ltco_dev,\n      .ltco_dev:active {\n        cursor: url(\"".concat(this.themeSwitch[this.objectParams.theme].cursor,"\"), auto;\n      }\n    "),this.ltcoLogoImage=this.createLogo(),this.events=["touchstart","click"],this.activeClass="active",this.activeSignature=this.activeSignature.bind(this),this.init()}return _createClass(a,[{key:"queryParamsInUrlScript",value:function queryParamsInUrlScript(){var a=_toConsumableArray(document.getElementsByTagName("script")).filter(function(a){var b=a.src;return b.includes("signature-ltco")}),b=a[0].src.slice(a[0].src.indexOf("?")+1).split("&"),c=b.map(function(a){var b=a.split("="),c=_slicedToArray(b,2),d=c[0],e=c[1];return _defineProperty({},d,e)});return Object.assign.apply(Object,[{}].concat(_toConsumableArray(c)))}},{key:"createLogo",value:function createLogo(){var a=document.createElement("img");return a.src=this.themeSwitch[this.objectParams.theme].src,a.height=18,a.alt="ltco./> - ltco.com.br",a.classList.add("ltco_dev"),a}},{key:"insertLogoImage",value:function insertLogoImage(){var a=document.getElementById("root")||document.body;a.append(this.ltcoLogoImage)}},{key:"appendStyle",value:function appendStyle(){var a=document.createElement("style");a.styleSheet?a.styleSheet.cssText=this.styles:a.appendChild(document.createTextNode(this.styles)),document.getElementsByTagName("head")[0].appendChild(a)}},{key:"outsideClick",value:function outsideClick(a,b){var c=this,d=document.documentElement,e="data-is-active",f=function(g){a.contains(g.target)||(a.removeAttribute(e),c.events.forEach(function(a){d.removeEventListener(a,f)}),b())};a.hasAttribute(e)||(this.events.forEach(function(a){setTimeout(function(){return d.addEventListener(a,f)})}),a.setAttribute(e,""))}},{key:"activeSignature",value:function activeSignature(a){var b=this;a.preventDefault();var c=a.currentTarget;c.classList.add(this.activeClass),setTimeout(function(){window.open("https://ltco.com.br","_blank")},1e3),this.outsideClick(c,function(){c.classList.remove(b.activeClass)})}},{key:"addSignatureEvent",value:function addSignatureEvent(){var a=this;this.events.forEach(function(b){a.ltcoLogoImage.addEventListener(b,a.activeSignature)})}},{key:"init",value:function init(){this.appendStyle(),this.insertLogoImage(),this.addSignatureEvent()}}]),a}();new SignatureLTCO;
