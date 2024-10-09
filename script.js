function toggleCheckboxes() {
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');

    checkbox1.addEventListener('change', () => {
        // Solo invertimos el estado de checkbox2 si ya está marcado
        if (checkbox2.checked) {
            checkbox2.checked = !checkbox1.checked;
        }
    });

    checkbox2.addEventListener('change', () => {
        // Solo invertimos el estado de checkbox1 si ya está marcado
        if (checkbox1.checked) {
            checkbox1.checked = !checkbox2.checked;
        }
    });
}

toggleCheckboxes();