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
        <a class="telegram-button" href="https://t.me/tu_canal" target="_blank" rel="noopener noreferrer">
          Join NOW for free!
        </a>
      `;
      posts[1].insertAdjacentElement('afterend', banner);
    }
  });
  