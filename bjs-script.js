const couponButtons = document.getElementsByClassName("cyDgas");
var arrayButtons = [...couponButtons];
arrayButtons.forEach((button, index) => {
  setTimeout(() => {
    button.click();
  }, 1500 * index);
});
