/* public/inject-partner.js
   Inserta al final del listado un banner de “Integra 8am Coffee” */
   document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    if (!posts.length) return;
  
    const banner = document.createElement('div');
    banner.className = 'partner-banner';
    banner.innerHTML = /* html */ `
      <div class="partner-left">
        <img src="/assets/megaphone-icon.png" alt="Megaphone icon">
        <div>
          <strong>📣 ¿Quieres tu propio 8am Coffee en tu web?</strong>
          <p>Elige la temática y las keywords y ten un blog automatizado y basado en AI.</p>
        </div>
      </div>
  
      <a href="mailto:8amcoffeeai@gmail.com"
         class="partner-button"
         target="_blank" rel="noopener noreferrer">
        Contact
      </a>
    `;
    /* ⬇ lo colocamos justo DESPUÉS del último post */
    posts[posts.length - 1].insertAdjacentElement('afterend', banner);
  });
  