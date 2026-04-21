// Dark / Light mode toggle dengan localStorage
const toggleBtn = document.getElementById('darkModeToggle');

function toggleMode() {
    document.body.classList.toggle('light');
    
    if (document.body.classList.contains('light')) {
        localStorage.setItem('mode', 'light');
        toggleBtn.innerHTML = '☀️';
    } else {
        localStorage.setItem('mode', 'dark');
        toggleBtn.innerHTML = '🌙';
    }
}

toggleBtn.addEventListener('click', toggleMode);

// Load saved mode
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        document.body.classList.add('light');
        toggleBtn.innerHTML = '☀️';
    } else {
        toggleBtn.innerHTML = '🌙';
    }
});

// Modal functions untuk konsultasi
function showModal() {
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideModal() {
    const modal = document.getElementById('consultModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event listeners untuk tombol konsultasi
document.addEventListener('DOMContentLoaded', () => {
    const consultBtns = document.querySelectorAll('#consultBtn, #consultBtnNav');
    consultBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    // Close modal on overlay click
    const modalOverlay = document.getElementById('consultModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) hideModal();
        });
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });
});

// Social link functions (called from HTML buttons)
function openWhatsApp() {
    window.open('https://wa.me/6281541131863?text=Halo%20J-TECH%2C%20saya%20ingin%20konsultasi', '_blank');
}

function openInstagram() {
    window.open('https://instagram.com/jtech.official', '_blank');
}

function openEmail() {
    window.location.href = 'mailto:jtech@digital.com?subject=Konsultasi%20J-TECH&body=Saya%20ingin%20berkonsultasi%20mengenai...';
}
