// Configuración del modal
const modal = document.getElementById('modalEventos');
const imagenAmpliada = document.querySelector('.imagen-completa');
const cerrarBtn = document.querySelector('.cerrar-modal-eventos');

// Abrir modal al hacer clic en cualquier imagen
document.querySelectorAll('.contenedor-imagenes img').forEach(img => {
    img.addEventListener('click', () => {
        imagenAmpliada.src = img.src;
        modal.style.display = 'block';
        document.body.style.overflow = 'none'; // Para bloquear el scroll se usa el hidden
    });
});

// Cerrar modal
cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
});

// Cerrar al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});