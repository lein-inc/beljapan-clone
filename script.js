// ドロワーメニュー
document.addEventListener('DOMContentLoaded', function() {
  const drawerIcon = document.querySelector('.drawer-icon');
  const drawerContent = document.querySelector('.drawer-content');
  const drawerBackground = document.querySelector('.drawer-background');
  const body = document.body;

  if (drawerIcon) {
    drawerIcon.addEventListener('click', function() {
      drawerIcon.classList.toggle('is-active');
      drawerContent.classList.toggle('is-active');
      drawerBackground.classList.toggle('is-active');
      body.classList.toggle('is-active');
    });
  }

  if (drawerBackground) {
    drawerBackground.addEventListener('click', function() {
      drawerIcon.classList.remove('is-active');
      drawerContent.classList.remove('is-active');
      drawerBackground.classList.remove('is-active');
      body.classList.remove('is-active');
    });
  }

  // ドロワーメニュー内のリンクをクリックしたら閉じる
  const drawerLinks = document.querySelectorAll('.drawer-menu a, .drawer-contact a');
  drawerLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      drawerIcon.classList.remove('is-active');
      drawerContent.classList.remove('is-active');
      drawerBackground.classList.remove('is-active');
      body.classList.remove('is-active');
    });
  });
});
