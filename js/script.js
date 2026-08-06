

// スクロールリビール
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e,i) =>{
      if(e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.08});

  document.querySelectorAll('.reveal').forEach(el => 
    observer.observe(el));


// モーダルを開く・閉じる
  function openModal(type) {
    document.getElementById('modal-' + type).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(type) {
    document.getElementById('modal-' + type).classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeOnOverlay(e, type) {
    if (e.target === document.getElementById('modal-' + type)) closeModal(type);
  }

// カードクリックで開く
  document.getElementById('card-banner').addEventListener('click', () => {
    openModal('banner');
  });
  document.getElementById('card-illust').addEventListener('click', () => {
    openModal('illust');
  });

// 閉じるボタン
  document.querySelector('#modal-banner .modal_close').addEventListener('click', () => {
    closeModal('banner');
  });
  document.querySelector('#modal-illust .modal_close').addEventListener('click', () => {
    closeModal('illust');
  });

// オーバーレイクリックで閉じる
  document.getElementById('modal-banner').addEventListener('click', (e) => {
    closeOnOverlay(e, 'banner');
  });
  document.getElementById('modal-illust').addEventListener('click', (e) => {
    closeOnOverlay(e, 'illust');
  });

// キーボードのEscapeで閉じる
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal('banner');
      closeModal('illust');
    }
  });

