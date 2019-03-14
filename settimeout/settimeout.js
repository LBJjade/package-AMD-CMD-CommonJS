function doSetTimeout(i) {
  setTimeout(function() {
    alert(i);
  }, 100);
}

for (var i = 1; i <= 2; ++i) doSetTimeout(i);
