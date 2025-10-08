document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('video.project-video');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});



