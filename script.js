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

// 預約日期不可選擇今天以前的日期。
const preferredDate = document.getElementById('preferredDate');
if (preferredDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().slice(0, 10);
  preferredDate.min = localToday;
}

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (event) => {
    const formAction = form.getAttribute('action') || '';

    // 防止尚未設定收件信箱就送出，避免預約資料寄送失敗。
    if (formAction.includes('REPLACE_WITH_OFFICE_EMAIL')) {
      event.preventDefault();
      formNote.textContent = '網站管理者尚未設定事務所收件信箱。請先在 index.html 將 REPLACE_WITH_OFFICE_EMAIL 改成正式電子郵件地址。';
      formNote.classList.add('notice');
      formNote.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = '資料送出中…';
    }
    formNote.textContent = '正在送出預約需求，請稍候。送出後仍須等待事務所確認時段。';
  });
}
