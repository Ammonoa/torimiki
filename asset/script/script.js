window.onscroll = function() {
  var btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block"; // スクロール位置が300px以上で表示
  } else {
    btn.style.display = "none"; // スクロール位置が300px未満で非表示
  }
};
document.getElementById("scrollTopBtn").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
