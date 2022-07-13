(function () {
  function some(x, y = 10, z = 20) {
    console.log(`x=${x}, y=${y}, z=${z}`);
  }
  some(1);
  some(1, 2);
  some(1, 2, 3);
})();
