function promiseFunction() {
  const couponButtons = document.querySelectorAll(".mt-2.btn.gray-btn");
  if (couponButtons)
    return Promise((resolve) => {
      couponButtons.forEach((button, index) => {
        setTimeout(() => {
          button.click();
        }, 500 * index);
      });
    });

}

setTimeout(() => {
  //   button.click();
  location.reload();
}, 500 * 31);
