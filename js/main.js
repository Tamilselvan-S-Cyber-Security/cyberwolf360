(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  const themeToggle = document.querySelector('.theme-toggle');
  const HEADER_OFFSET = 80;

  function setDropdownActive(active) {
    header?.classList.toggle('dropdown-active', active);
  }

  function closeAllDropdowns() {
    dropdownItems.forEach(item => {
      item.classList.remove('open');
      item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
    });
    setDropdownActive(false);
  }

  function closeMobileNav() {
    mainNav?.classList.remove('open');
    navToggle?.classList.remove('active');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  // Mobile nav toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
      if (!isOpen) closeAllDropdowns();
    });
  }

  // Dropdown menus — click toggle
  dropdownItems.forEach(item => {
    const trigger = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');

    if (!trigger || !dropdown) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('open');

      dropdownItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
      setDropdownActive(!isOpen);

      if (!isOpen) {
        positionDropdown(item, dropdown);
      }
    });

    // Desktop hover open
    if (window.matchMedia('(min-width: 769px)').matches) {
      item.addEventListener('mouseenter', () => {
        dropdownItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        setDropdownActive(true);
        positionDropdown(item, dropdown);
      });

      item.addEventListener('mouseleave', () => {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        const anyOpen = [...dropdownItems].some(i => i.classList.contains('open'));
        setDropdownActive(anyOpen);
      });
    }

    // Keep scroll inside dropdown — don't scroll the page behind
    dropdown.addEventListener('wheel', (e) => {
      const { scrollTop, scrollHeight, clientHeight } = dropdown;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
      if (!atTop && !atBottom) {
        e.stopPropagation();
      }
    }, { passive: true });
  });

  // Auto-scroll long link columns inside dropdowns
  document.querySelectorAll('.dropdown-links').forEach(list => {
    if (list.children.length > 6) {
      list.classList.add('dropdown-links-scroll');
    }
  });

  // Position dropdown to stay in viewport
  function positionDropdown(item, dropdown) {
    if (window.innerWidth <= 768) return;

    dropdown.style.left = '';
    dropdown.style.right = '';

    const itemRect = item.getBoundingClientRect();
    const dropdownWidth = dropdown.offsetWidth;

    if (itemRect.left + dropdownWidth > window.innerWidth - 16) {
      dropdown.style.left = 'auto';
      dropdown.style.right = '0';
    }
  }

  window.addEventListener('resize', () => {
    document.querySelectorAll('.has-dropdown.open .dropdown').forEach(dropdown => {
      const item = dropdown.closest('.has-dropdown');
      if (item) positionDropdown(item, dropdown);
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      closeAllDropdowns();
    }
  });

  // Smooth scroll for anchor links (tools, getting-started sections)
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const pathPart = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex);
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const targetPage = pathPart ? pathPart.split('/').pop() : currentPage;

      if (targetPage !== currentPage) return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      closeAllDropdowns();
      closeMobileNav();

      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });

      history.pushState(null, '', hash);
    });
  });

  // Close mobile nav on link click (non-anchor)
  mainNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && !link.getAttribute('href')?.includes('#')) {
        closeMobileNav();
        closeAllDropdowns();
      }
    });
  });

  // Header shadow on page scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 10);
    lastScroll = y;
  }, { passive: true });

  // Theme toggle
  const savedTheme = localStorage.getItem('cw360-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    if (next === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('cw360-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('cw360-theme', 'light');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Highlight sidebar links on scroll
  const sections = document.querySelectorAll('[id]');
  if (sections.length > 5) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.sidebar a[href*="#"]').forEach(link => {
              link.style.fontWeight = link.getAttribute('href').endsWith('#' + id) ? '600' : '';
            });
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach(s => observer.observe(s));
  }

  // Scroll to hash on page load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 100);
    }
  }

  // Escape key closes menus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      closeMobileNav();
    }
  });

  // Initial header state
  header?.classList.toggle('scrolled', window.scrollY > 10);

  // Entry popup advertisement
  const AD_STORAGE_KEY = 'cw360-ad-dismissed';

  function resolveAsset(path) {
    const script = document.querySelector('script[src*="main.js"]');
    const src = script?.getAttribute('src') || 'js/main.js';
    return src.replace(/js\/main\.js(\?.*)?$/, path);
  }

  function closeAdPopup(popup) {
    if (!popup) return;
    popup.classList.remove('is-visible');
    document.body.classList.remove('ad-popup-open');
    sessionStorage.setItem(AD_STORAGE_KEY, '1');
  }

  function initAdPopup() {
    if (sessionStorage.getItem(AD_STORAGE_KEY)) return;

    const popup = document.createElement('div');
    popup.className = 'ad-popup';
    popup.id = 'ad-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-label', 'Cyber Wolf promotion');

    const adPath = resolveAsset('ads/ads.png');
    const adLink = resolveAsset('getting-started.html');

    popup.innerHTML = `
      <div class="ad-popup-backdrop" data-ad-close></div>
      <div class="ad-popup-dialog">
        <button type="button" class="ad-popup-close" aria-label="Close advertisement" data-ad-close>
          <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <a href="${adLink}" class="ad-popup-link">
          <img src="${adPath}" alt="Cyber Wolf Hacker Team — Join Now at www.cyberwolf360.in" width="1734" height="907" loading="eager">
        </a>
      </div>
    `;

    document.body.appendChild(popup);

    popup.querySelectorAll('[data-ad-close]').forEach(el => {
      el.addEventListener('click', () => closeAdPopup(popup));
    });

    popup.querySelector('.ad-popup-link')?.addEventListener('click', () => {
      closeAdPopup(popup);
    });

    document.addEventListener('keydown', function adEscape(e) {
      if (e.key === 'Escape' && popup.classList.contains('is-visible')) {
        closeAdPopup(popup);
      }
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        popup.classList.add('is-visible');
        document.body.classList.add('ad-popup-open');
      }, 400);
    });
  }

  initAdPopup();
})();
