// IntersectionObserver fade-in for illustrations and clip loops, plus a
// scroll-based progress bar at the top of the chapter view. No framework
// runtime — this script ships once per chapter page.

const FADE_THRESHOLD = 0.15;

function armFadeIns(): void {
  const targets = document.querySelectorAll<HTMLElement>('.illustration, .clip-loop');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: FADE_THRESHOLD, rootMargin: '0px 0px -10% 0px' });

  for (const t of targets) observer.observe(t);
}

function armClipAutoplay(): void {
  const clips = document.querySelectorAll<HTMLVideoElement>('.clip-loop video');
  if (!clips.length) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, { threshold: 0.4 });

  for (const v of clips) observer.observe(v);
}

function armProgressBar(): void {
  const bar = document.querySelector<HTMLElement>('.progress-bar');
  if (!bar) return;

  const update = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  };

  document.addEventListener('scroll', update, { passive: true });
  update();
}

const init = () => {
  armFadeIns();
  armClipAutoplay();
  armProgressBar();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
