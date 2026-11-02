document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', async () => {
  const email = document.getElementById('email').textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = 'Copied!';
    setTimeout(() => { copyButton.innerHTML = 'Copy <span aria-hidden="true">⧉</span>'; }, 1800);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('email'));
    selection.removeAllRanges(); selection.addRange(range);
    copyButton.textContent = 'Select & copy email';
  }
});
