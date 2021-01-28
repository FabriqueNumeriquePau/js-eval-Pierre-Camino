"use strict";

var _class = _interopRequireDefault(require("/js/class.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Etape 1
console.log("Go Chuck !");
var maDiv = document.querySelector("main > section > aside > div"); // console.log(maDiv);

maDiv.addEventListener('mouseenter', function () {
  maDiv.style.borderRadius = 0;
});
maDiv.addEventListener('mouseleave', function () {
  maDiv.style.borderRadius = '50%';
}); // Etape 2

var article = document.querySelectorAll("main > section > section > article > header");
article.forEach(function (fleche) {
  fleche.addEventListener("click", function (clic) {
    var div = fleche.nextSibling;

    if (div.style.visibility !== "visible") {
      div.style.visibility = "visible";
      div.style.height = "auto";
    } else {
      div.style.visibility = "hidden";
      div.style.height = "0px";
    }
  });
}); // for(let i = 0; i < fleche.length; i++) {
//     fleche.item(i).addEventListener("click", () => {
//         if(fleche.item(i).parentNode.nextElementSibling.style.visibility = "hidden"){
//             fleche.item(i).parentNode.nextElementSibling.style.visibility = "visible"
//         }
//         else {
//             fleche.item(i).parentNode.nextElementSibling.style.visibility = "hidden"
//         }
//     });
// };
// // Etape 3

var promise = fetch("data/menu.json");
console.log(promise);
var men = document.createElement("ul");
var men2 = document.createElement('ul');
promise.then(function (response) {
  return response.json();
}).then(function (data) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data.principal[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lien_head = _step.value;
      var lien_nav = new _class["default"](lien_head.nom, lien_head.lien);
      var affichage = lien_nav.volee();
      men.appendChild(affichage);
      document.querySelector("main > header > nav").appendChild(men);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = data.pied[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _lien_head = _step2.value;

      var _lien_nav = new _class["default"](_lien_head.nom, _lien_head.lien);

      var _affichage = _lien_nav.volee();

      men2.appendChild(_affichage);
      document.querySelector("main > footer").appendChild(men2);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}); // Etape 4

var sousmenu = fetch("data/menu.json");
var sous = document.createElement("ul");
sousmenu.then(function (response) {
  return response.json();
}).then(function (data) {
  var data2 = data.principal[1];
  var data3 = data2.sousmenus;
  console.log(data3);
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = data3[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var lien_sous = _step3.value;
      var lien_2 = new _class["default"](lien_sous.nom, lien_sous.lien);
      var affichage = lien_2.sousmen();
      men.appendChild(affichage);
      document.getElementsByTagName("li")[1].appendChild(sous);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
});