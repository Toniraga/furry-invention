// Chart Options
const options = {
	chart: {
		height: 400,
		widdth: "100%",
		type: "bar",
		background: "#f4f4f4",
		foreColor: "#000",
	},
	series: [
		{
			name: "population",
			data: [
				855040,
				234567,
				345677,
				345667,
				987654,
				876543,
				876543,
				987654,
				987654,
				234567,
			],
		},
	],
	xaxis: {
		categories: [
			"Lagos",
			"Benin",
			"Abuja",
			"Kwara",
			"Niger",
			"Benue",
			"Borno",
			"Imo",
			"Delta",
			"Ondo",
		],
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	fill: {
		colors: ["#9C27B0"],
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Largest Citites In Nigeria By Population',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
};

// Init Chart
const charts = new ApexCharts(document.getElementById('chart'), options) 

// Render Chart
charts.render();

// Event Method Example
document.querySelector('button').addEventListener('click', () => charts.updateOptions({
    plotOptions: {
		bar: {
			horizontal: true,
        }
    }
}))