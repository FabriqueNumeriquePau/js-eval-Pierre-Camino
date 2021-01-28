"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SousMenu = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu =
/*#__PURE__*/
function () {
  function Menu(nom, lien) {
    _classCallCheck(this, Menu);

    this.nom = nom;
    this.lien = lien;
  }

  _createClass(Menu, [{
    key: "volee",
    value: function volee() {
      var li = document.createElement('li');
      var nav = document.createElement('a');
      nav.textContent = this.nom;
      nav.href = this.lien;
      li.appendChild(nav);
      return li;
    }
  }]);

  return Menu;
}();

var SousMenu =
/*#__PURE__*/
function () {
  function SousMenu(nom, lien) {
    _classCallCheck(this, SousMenu);

    this.nom = nom;
    this.lien = lien;
  }

  _createClass(SousMenu, [{
    key: "sousmen",
    value: function sousmen() {
      var li = document.createElement('li');
      var nav = document.createElement('a');
      nav.textContent = this.nom;
      nav.href = this.lien;
      li.appendChild(nav);
      return li;
    }
  }]);

  return SousMenu;
}();

exports.SousMenu = SousMenu;
var _default = Menu;
exports["default"] = _default;