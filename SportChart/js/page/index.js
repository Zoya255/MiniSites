/* ------------------------------- index ------------------------------- */

/* -------------------- chart -------------------- */

var ctx1 = document.getElementById('sportLineChart').getContext('2d');

var sportLineChart = new Chart(ctx1, {
	type: 'line',
	data: {
		labels: [ '12.10.2020', '13.10.2020', '14.10.2020', '15.10.2020', '16.10.2020', '17.10.2020', '18.10.2020',
				  '19.10.2020', '20.10.2020', '21.10.2020', '22.10.2020', '23.10.2020', '24.10.2020', '25.10.2020' ],
		datasets: [{
			label: 'Отжимания',
			data: [ 10, 20, 40, 10, 30, 60, 45,
					20, 10, 10, 10, 0,  20, 40 ],
			backgroundColor: 'rgba(50, 50, 50, 0.05)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 3,
			lineTension: 0,
		},
		{
			label: 'Приседания',
			data: [ 15, 35, 100, 25, 60, 100, 70,
					15, 60, 0,   0,  0,  30,  50 ],
			backgroundColor: 'rgba(50, 50, 50, 0.05)',
			borderColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 3,
			lineTension: 0,
		},
		{
			label: 'Пресс',
			data: [ 0, 20, 40, 40, 40, 85, 50,
					0, 0,  0,  0,  0,  0,  20 ],
			backgroundColor: 'rgba(50, 50, 50, 0.05)',
			borderColor: 'rgba(255, 159, 64, 1)',
			borderWidth: 3,
			lineTension: 0,
		},
		{
			label: 'Гантели',
			data: [ 0, 20, 30, 20, 10, 20, 10,
					0, 0,  0,  0,  0,  0,  10 ],
			backgroundColor: 'rgba(50, 50, 50, 0.05)',
			borderColor: 'rgba(153, 102, 255, 1)',
			borderWidth: 3,
			lineTension: 0,
		},
		{
			label: 'Подтягивания',
			data: [ 6,  0,  3, 5, 1, 0, 0,
					15, 20, 0, 0, 0, 0, 0 ],
			backgroundColor: 'rgba(50, 50, 50, 0.05)',
			borderColor: 'rgba(255, 206, 86, 1)',
			borderWidth: 3,
			lineTension: 0,
		}],
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
          			beginAtZero: true
        		}
			}]
		}
	}
});

var ctx2 = document.getElementById('planksLineChart').getContext('2d');

var planksLineChart = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: [ '12.10.2020', '13.10.2020', '14.10.2020', '15.10.2020', '16.10.2020', '17.10.2020', '18.10.2020',
				  '19.10.2020', '20.10.2020', '21.10.2020', '22.10.2020', '23.10.2020', '24.10.2020', '25.10.2020' ],
		datasets: [{
			label: 'Планка',
			data: [ 0, 115, 225, 50, 140, 100, 75,
					0, 0,   0,   60, 0,   0,   0 ],
			backgroundColor: 'rgba(255, 99, 132, 0.1)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 3,
			lineTension: 0,
		}],
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
          			beginAtZero: true
        		}
			}]
		}
	}
});
