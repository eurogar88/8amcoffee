document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    if (posts.length >= 2) {
      const banner = document.createElement('div');
      banner.className = 'telegram-banner';
      banner.innerHTML = `
        <div class="telegram-left">
          <img src="/assets/telegram-icon.png" alt="Telegram logo" />
          <div>
            <strong>📢 Don't miss the latest IA news!</strong>
            <p>Get your 8am Coffee updates, every day. <span>Join our community!</span></p>
          </div>
        </div>
        <a class="telegram-button" href="https://t.me/coffee8am" target="_blank" rel="noopener noreferrer">
          Join for free
        </a>
      `;

      // Track CTA with Mixpanel
      banner.querySelector('.telegram-button')
        .addEventListener('click', () => {
          if (window.mixpanel) mixpanel.track('Telegram CTA');
        });      

      posts[1].insertAdjacentElement('afterend', banner);
    }
  });
  