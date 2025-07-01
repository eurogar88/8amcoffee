/* public/inject-partner.js
   Inserta al final del listado un banner de “Integra 8am Coffee” */
   document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    if (!posts.length) return;
  
    const banner = document.createElement('div');
    banner.className = 'partner-banner';
    banner.innerHTML = /* html */ `
      <div class="partner-left">
        <img src="/assets/megaphone.png" alt="Megaphone icon">
        <div>
          <strong>📣 Wnat your own 8am Coffee on your site?</strong>
          <p>Choose the topic and keywords to rank for and get your AI-powered blog</p>
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
  