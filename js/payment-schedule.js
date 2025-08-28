// Optional. Only useful if you add a Payment Schedule panel.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('paymentScheduleBtn');
  const panel = document.getElementById('paymentSchedulePanel');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
  });
});
