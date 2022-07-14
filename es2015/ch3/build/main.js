"use strict";

(function () {
  function some(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    console.log("x=".concat(x, ", y=").concat(y, ", z=").concat(z));
  }

  some(1);
  some(1, 2);
  some(1, 2, 3);
})();