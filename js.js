const skillData = {
  html: {
    titolo: 'HTML / CSS',
    livello: 'Intermedio — 70%',
    desc: 'Struttura e stile delle pagine web. Uso quotidiano durante i progetti scolastici.',
    voci: [
      'Struttura semantica delle pagine HTML5',
      'Styling con CSS: colori, font, spaziatura',
      'Flexbox e Grid per il layout',
      'Variabili CSS (custom properties)',
      'Design responsive con media query',
      'Animazioni e transizioni CSS',
    ]
  },
  python: {
    titolo: 'Python',
    livello: 'Base / Intermedio — 75%',
    desc: 'Linguaggio principale studiato a scuola. Usato per progetti, esercizi e automazioni.',
    voci: [
      'Variabili, tipi di dato, operatori',
      'Cicli for / while e condizioni if/else',
      'Funzioni e scope delle variabili',
      'Liste, dizionari, tuple e set',
      'Lettura e scrittura di file',
      'Libreria Pygame per giochi 2D',
      'Utilizzo di Excel con Python',
    ]
  },
  arduino: {
    titolo: 'Arduino',
    livello: 'Base — 40%',
    desc: 'Programmazione di microcontrollori con linguaggio C++. Progetti pratici in laboratorio.',
    voci: [
      'Programmazione base su IDE Arduino',
      'Controllo di LED',
      'Lettura di sensori semplici',
    ]
  },
  reti: {
    titolo: 'Reti',
    livello: 'Base — 45%',
    desc: 'Fondamenti di reti informatiche studiati durante il corso.',
    voci: [
      'Indirizzi IP e subnet mask',
      'Cablaggio e gestione cavi di rete',
      'Configurazione base di switch',
    ]
  },
  sistemi: {
    titolo: 'Sistemi operativi',
    livello: 'Base — 55%',
    desc: 'Utilizzo e configurazione di sistemi operativi Windows e Linux.',
    voci: [
      'Utilizzo avanzato di Windows 10/11',
      'Comandi base del terminale Linux',
      'Gestione di file e permessi',
      'Installazione e configurazione software',
      'Preparazione PC ad uso aziendale',
      'Configurazione NAS (Qnap)',
    ]
  },
  javascript: {
    titolo: 'JavaScript',
    livello: 'Base — 35%',
    desc: 'Linguaggio per rendere le pagine web interattive. In fase di apprendimento.',
    voci: [
      'Variabili con let e const',
      'Funzioni base',
      'Gestione degli eventi (click, input)',
    ]
  }
};

const overlay = document.getElementById('skillModal');
const modalTitolo = document.getElementById('modalTitolo');
const modalLivello = document.getElementById('modalLivello');
const modalDesc = document.getElementById('modalDesc');
const modalLista = document.getElementById('modalLista');
const btnChiudi = document.getElementById('modalChiudi');

document.querySelectorAll('.competenza-card[data-skill]').forEach(card => {
  card.addEventListener('click', () => {
    const skill = skillData[card.dataset.skill];
    if (!skill) return;

    modalTitolo.textContent = skill.titolo;
    modalLivello.textContent = skill.livello;
    modalDesc.textContent = skill.desc;
    modalLista.innerHTML = skill.voci.map(v => `<li>${v}</li>`).join('');

    overlay.classList.add('aperto');
    document.body.style.overflow = 'hidden';
  });
});

function chiudiModal() {
  overlay.classList.remove('aperto');
  document.body.style.overflow = '';
}

btnChiudi.addEventListener('click', chiudiModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) chiudiModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') chiudiModal();
});
