function showSection(sectionId) {
  document.querySelectorAll('.info-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

const ctxPie = document.getElementById('crimePieChart').getContext('2d');
new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Assault', 'Theft', 'Burglary', 'Vandalism'],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

const ctxBar = document.getElementById('crimeComparisonChart').getContext('2d');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Assault', 'Theft', 'Burglary', 'Vandalism'],
    datasets: [
      { label: '2023', data: [30, 25, 15, 5], backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
      { label: '2024', data: [40, 30, 20, 10], backgroundColor: 'rgba(255, 99, 132, 0.5)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true }
    },
    plugins: { legend: { position: 'top' } }
  }
});

showSection('overview');
