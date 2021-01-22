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

var fleche = document.getElementsByClassName("picto"); // console.log(fleche);

var _loop = function _loop(i) {
  fleche.item(i).addEventListener("click", function () {
    fleche.item(i).parentNode.nextElementSibling.style.visibility = "visible";
  });
};

for (var i = 0; i < fleche.length; i++) {
  _loop(i);
}

; // // Etape 3

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
});
var promise2 = fetch("data/menu.json");
promise2.then(function (response) {
  return response.json();
}).then(function (data) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = data.pied[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var lien_head = _step2.value;
      var lien_nav = new _class["default"](lien_head.nom, lien_head.lien);
      var affichage = lien_nav.volee();
      men2.appendChild(affichage);
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
}); // Test
// const requete = new XMLHttpRequest;
// requete.open("GET", "data/menu.json");
// requete.responseType = "json";
// requete.send();
// requete.onload = () => {
//     if(requete.status != 200) {
//         alert("Erreur " + requete.status + " : " + requete.statusText);
//     }
//     else {
//         const donnee = requete.response;
//         volee(donnee);
//     }
// }
// function volee(donnee) {
//     for (let i = 0; i< donnee.length; i++) {
//         console.log(donnee);
//         const men = document.createElement('ul');
//         const li = document.createElement('li');
//         const nav = document.createElement('a');
//         li.textContent = donnee[i]['principal'].nom;
//         nav.textContent = donnee[i].principal.lien;
//         li.appendChild(nav);
//         men.appendChild(li);
//         document.querySelector("main > header > nav").appendChild(men);
//     }
// }