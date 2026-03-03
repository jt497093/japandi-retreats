// Edit this file to add / remove workshop dates.
// Format: { start: '2026-04-10', end: '2026-04-12', status: 'Open', notes: 'Spring edition' }

const WORKSHOPS = [
  { start: '2026-04-10', end: '2026-04-12', status: 'Open', notes: 'Spring reset (nature walks + sauna)' },
  { start: '2026-06-05', end: '2026-06-07', status: 'Waitlist', notes: 'Early summer (deep breathwork focus)' },
  { start: '2026-09-18', end: '2026-09-20', status: 'Open', notes: 'Autumn grounding (yin + silence)' },
];

function formatDate(iso){
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString(undefined, { weekday:'short', year:'numeric', month:'short', day:'numeric' });
}

function render(){
  const el = document.querySelector('#workshopRows');
  if(!el) return;
  el.innerHTML = '';

  WORKSHOPS.forEach(w => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${formatDate(w.start)} → ${formatDate(w.end)}</td>
      <td><span class="tag">${w.status}</span></td>
      <td>${w.notes || ''}</td>
      <td>€938 p.p.</td>
      <td><a class="btn" href="contact.html">Reserve</a></td>
    `;
    el.appendChild(tr);
  });

  if(WORKSHOPS.length === 0){
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="5" class="small">New dates will be added soon. Message us to request a private group date.</td>`;
    el.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', render);
