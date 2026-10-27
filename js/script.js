// Datos del Tablero Operativo (Práctica Demostrativa)
const opsData = [
    {
        module: "Atenciones Corporativas B2B",
        volume: "520 reg.",
        status: "Cumplido",
        statusClass: "rating-5",
        type: "positive",
        metric: "SLA: 94.2%",
        action: "Consolidación en Excel y sincronización CRM ok"
    },
    {
        module: "Soporte Operativo & Tickets",
        volume: "680 reg.",
        status: "Cumplido",
        statusClass: "rating-5",
        type: "positive",
        metric: "CSAT: 91.5%",
        action: "Monitoreo continuo de respuesta al usuario"
    },
    {
        module: "Auditoría de Registros",
        volume: "180 reg.",
        status: "En Alerta",
        statusClass: "rating-3",
        type: "neutral",
        metric: "Precisión: 98.0%",
        action: "Normalización de duplicados en base de datos"
    },
    {
        module: "Validación de Inconsistencias",
        volume: "70 reg.",
        status: "Requiere Ajuste",
        statusClass: "rating-1",
        type: "negative",
        metric: "Revisión Manual",
        action: "Implementar regla de validación automatizada"
    }
];

function filterFeedback(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const tbody = document.getElementById('csat-table-body');
    tbody.innerHTML = '';

    const filtered = type === 'all' 
        ? opsData 
        : opsData.filter(item => item.type === type);

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.module}</strong></td>
            <td>${item.volume}</td>
            <td><span class="badge-rating ${item.statusClass}">${item.status}</span></td>
            <td><strong>${item.metric}</strong></td>
            <td><em>${item.action}</em></td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterFeedback('all');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});