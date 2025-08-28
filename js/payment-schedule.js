// Minimal Payment Schedule button behavior (stub). Replace with your production logic.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('paymentScheduleBtn');
  const panel = document.getElementById('paymentSchedulePanel');
  if (btn && panel) {
    btn.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) {
        panel.innerHTML = '<p>Render your computed schedule table here.</p>';
      }
    });
  }
});
