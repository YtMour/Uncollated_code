(function (window, html) {
  // 规定默认的设计稿宽度720px
  const designWidth = 750;

  function recalc() {
    const windowWidth =
      html.clientWidth < designWidth ? html.clientWidth : designWidth;

    // *100 之后，则样式中rem的值就需要相应的缩小100倍
    // 即：设计稿中的20px，在样式中就要写成0.2rem
    const fontSize = (windowWidth / designWidth) * 100;

    setFontSize(fontSize);
  }

  function setFontSize(fontSize) {
    html.style.fontSize = `${fontSize}px`;
  }

  // 监听resize
  window.addEventListener("resize", recalc);
  recalc();
})(window, document.documentElement);
