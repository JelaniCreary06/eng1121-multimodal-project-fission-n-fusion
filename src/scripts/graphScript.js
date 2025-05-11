const ctx = document.getElementById('fusion-chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['0s', '1s', '2s', '3s', '4s', '5s'],
    datasets: [{
        label: 'Fusion Output (MW)',
        data: [10, 12, 14, 13, 12, 15],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3
    }]
    },
    options: {
    responsive: true,
    scales: {
        y: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Energy Output (MW)'
        }
        },
        x: {
        title: {
            display: true,
            text: 'Time (s)'
        }
        }
    }
    }
});

function syncMassInput(val) {
    document.getElementById('mass-input').value = val;
}

function syncMassSlider(val) {
    document.getElementById('mass-slider').value = val;
}

function syncEfficiencyInput(val) {
    document.getElementById('efficiency-input').value = val;
}

function syncEfficiencySlider(val) {
    document.getElementById('efficiency-slider').value = val;
}

function updateGraph() {
    const mass = parseFloat(document.getElementById('mass-input').value);
    const efficiency = parseFloat(document.getElementById('efficiency-input').value) / 100;
    if (isNaN(mass) || isNaN(efficiency)) return;

    const c = 299792458; // speed of light 
    const totalEnergy = mass * c * c * efficiency; // E = mc² * efficiency
    const averagePower = totalEnergy / 6; 
    const powerMW = averagePower / 1e6;

    const newData = [
        powerMW * 0.9,
        powerMW * 1.1,
        powerMW,
        powerMW * 1.05,
        powerMW * 0.95,
        powerMW
    ];

    chart.data.datasets[0].data = newData;
    chart.update();
}