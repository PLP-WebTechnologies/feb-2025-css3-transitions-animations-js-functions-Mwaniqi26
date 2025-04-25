function setMood(mood) {
    localStorage.setItem('mood', mood);
    animateMood(mood);
  }
  
  function animateMood(mood) {
    document.querySelectorAll('.mood').forEach(el => {
      el.classList.remove('animate');
      if (el.classList.contains(mood)) {
        void el.offsetWidth; // reflow trick
        el.classList.add('animate');
      }
    });
  }
  
  window.onload = function() {
    const savedMood = localStorage.getItem('mood');
    if (savedMood) {
      animateMood(savedMood);
    }
  };
  