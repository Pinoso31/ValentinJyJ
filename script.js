document.addEventListener('DOMContentLoaded', () => {

    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const mensajeNo = document.getElementById('mensajeNo');

    const mensajes = [
        "jeje como asi",
        "Espera que",
        "Watajai💜",
        "Y todavía me dices que no ;(",
        "Osea que no quieres ;(",
        "Dios santo, bueno ya no te molesto más 😔"
    ];

    let intentos = 0;

    // Botón SÍ
        // Botón SÍ → ahora va directo a "Nuestra Historia"
    siBtn.addEventListener('click', () => {
        siBtn.innerHTML = "EPAAAAAA";
        siBtn.style.transform = "scale(1.4)";
        
        setTimeout(() => {
            openTab(1);  // Cambia a la pestaña de Nuestra Historia
        }, 800);
    });

    // Botón NO que se escapa
    noBtn.addEventListener('mouseenter', () => {
        intentos++;
        
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);
        
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        mensajeNo.textContent = mensajes[intentos % mensajes.length];
        
        if (intentos >= 8) {
            noBtn.style.display = 'none';
            mensajeNo.innerHTML = "Se te fueron las opciones mi amor, solo queda una opción mi princesa bella ;)";
        }
    });

    // Tabs
    window.openTab = function(n) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById('tab' + n).classList.add('active');
        document.querySelectorAll('.tab-btn')[n].classList.add('active');
    };

        
    // ==================== MODAL DE EVENTOS ====================
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    function openEventModal(title, imageSrc, text) {
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalText.textContent = text;
        modal.style.display = 'block';
    }

    // Cerrar modal
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Activar las cards
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const image = card.getAttribute('data-image');
            const text = card.getAttribute('data-text');
            openEventModal(title, image, text);
        });
    });

        // ==================== BOTÓN COMENTARIO - PALABRAS SABIAS ====================
        // ==================== BOTÓN COMENTARIO - TUS PALABRAS ====================
    const comentBtn = document.getElementById('comentBtn');
    const modalSabias = document.getElementById('modalSabias');
    const closeSabias = document.querySelector('.close-sabias');
    const sabiasText = document.getElementById('sabias-text');

    // ==================== AQUÍ ESCRIBE TU MENSAJE ====================
    // Borra todo lo que está entre las comillas y pega tu texto largo
    const miMensajePersonal = `
        Mi amor Jireh Hurtado, mi amada futura esposa, mi novia linda, mi mujer de mi sueños, 
        he creado este mini sitio Web, con mucho amor para ti mi vida, se que es algo sencillo pero es algo muy especial que queria hacerte
        para celebrar nuestro amor y nuestra primera vez un 14 de febrero juntos y de verdad que me hace feliz estar y celebrarlo contigo mi amor
        Asi que disfruta de este detalle y que con mucho amor hice para tí :)
    `;
    // ============================================================

    comentBtn.addEventListener('click', () => {
        sabiasText.innerHTML = `<p>${miMensajePersonal}</p>`;
        modalSabias.style.display = 'block';
    });

    closeSabias.addEventListener('click', () => {
        modalSabias.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalSabias) {
            modalSabias.style.display = 'none';
        }
    });
});