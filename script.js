const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`盾安律師事務所網站諮詢：${data.get('topic')}`);
  const body = encodeURIComponent(
    `姓名：${data.get('name')}\n電話：${data.get('phone')}\n電子郵件：${data.get('email') || '未提供'}\n諮詢類別：${data.get('topic')}\n需求簡述：${data.get('message') || '未提供'}`
  );
  // 上線前請將下方信箱替換成事務所正式收件信箱。
  const officeEmail = 'contact@example.com';
  if (officeEmail === 'contact@example.com') {
    formNote.textContent = '表單欄位驗證成功。正式上線前，請先在 script.js 將 contact@example.com 改成事務所收件信箱。';
    formNote.classList.add('notice');
    return;
  }
  window.location.href = `mailto:${officeEmail}?subject=${subject}&body=${body}`;
});
