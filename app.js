// Einfaches Passwort
const ADMIN_PASSWORD = "minecraft123";

function checkProtectedPage(){
  const protectedArea = document.getElementById('protected');
  const gate = document.getElementById('authGate');
  if(!protectedArea) return;

  gate.classList.remove('hidden');
  const btn = document.getElementById('authBtn');
  const input = document.getElementById('authInput');
  const error = document.getElementById('authError');

  btn.addEventListener('click', ()=>{
    if(input.value === ADMIN_PASSWORD){
      gate.classList.add('hidden');
      protectedArea.classList.remove('hidden');
      error.classList.add('hidden');
    } else {
      error.classList.remove('hidden');
      gate.querySelector('.auth-box').classList.add('error');
      setTimeout(()=>gate.querySelector('.auth-box').classList.remove('error'), 1000);
    }
  });
}

// Theme Toggle global
(function(){
  const themeToggle = document.getElementById('themeToggle');
  if(themeToggle){
    const saved = localStorage.getItem('theme');
    if(saved === 'dark'){ document.body.classList.add('dark'); themeToggle.checked = true; }

    themeToggle.addEventListener('change', ()=>{
      const isDark = themeToggle.checked;
      document.body.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
})();

checkProtectedPage();
