//Nominal GDP Chart
var ctx = document.getElementById("nominalGdpChart");
var nominalGdpChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Germany", "United Kingdom", "France", "Italy", "Spain", "Netherlands","Sweden","Poland","Belgium","Austria"],
        datasets: [{
            label: 'Nominal GDP for top 10 EU countries in 2018(in billion USD)',
            data: [4029, 2808, 2794, 2086, 1437, 909, 554, 549, 536, 459],
            hoverBackgroundColor: 'rgba(8, 90, 251, 1)',
            backgroundColor:'rgba(0, 51, 153, 1)',
            borderColor:'rgba(0, 51, 153, 1)',
            hoverBorderColor: 'rgba(8, 90, 251, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                }
            }],
            xAxes: [{
            	ticks: {
            		autoSkip: false
            	}
            }]
        }
    }
});

//Inflation Rates
var ctx = document.getElementById("inflationChart");
var inflationChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
    	labels:["Romania", "Hungary", "Bulgaria", "Estonia", "Latvia", "Belgium", "Slowakia","United Kingdom","Luxemburg"],
    	datasets: [{
    		label:'2018 EU inflation rates by top 10 countries (%)',
    		data: [4.7,3.7,3.6,3.5,3.3,2.8,2.7,2.7,2.7],
    		hoverBackgroundColor: 'rgba(8, 90, 251, 1)',
    		backgroundColor: 'rgba(0, 51, 153, 1)',
    		borderColor:'rgba(0, 51, 153, 1)',
    		hoverBorderColor: 'rgba(8, 90, 251, 1)',
    		borderWidth: 1
    	}]
    },
    options: {
    	scales:{
    		yAxes: [{
    			ticks: {
    				beginAtZero:true,
    			}
    		}],
    		xAxes: [{
    			ticks: {
    				autoSkip:false
    			}
    		}]
    	}
    }
});

//Budget Chart
var ctx = document.getElementById("euBudgetChart");
var euBudgetChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    	labels:["Germany","France","Italy","United Kingdom","Spain","Netherlands","Belgium","Poland","Sweden","Austria"],
    	datasets: [{
    		label: 'EU Budget in top 10 countries(&euro; millions)',
    		data: [144350,128839,98475,77655,66343,27397,22949,22249,19464,16921],
    		backgroundColor: 
    		['rgb(255, 215, 0, 1)',
    		 'rgba(0, 85, 164, 1)',
    		 'rgba(0, 146, 70, 1)',
    		 'rgba(200, 16, 46, 1)',
    		 'rgba(241, 191, 0, 1)',
    		 'rgba(255, 79, 0, 1)',
    		 'rgba(0, 0, 0, 1)',
    		 'rgba(220, 20, 60, 1)',
    		 'rgba(0, 105, 167, 1)',
    		 'rgba(237, 41, 57, 1)'],
    		borderColor:
    		['rgb(255, 215, 0, 1)',
    		 'rgba(0, 85, 164, 1)',
    		 'rgba(0, 146, 70, 1)',
    		 'rgba(200, 16, 46, 1)',
    		 'rgba(241, 191, 0, 1)',
    		 'rgba(255, 79, 0, 1)',
    		 'rgba(0, 0, 0, 1)',
    		 'rgba(220, 20, 60, 1)',
    		 'rgba(0, 105, 167, 1)',
    		 'rgba(237, 41, 57, 1)'],
    		hoverBackgroundColor: 
    		['rgba(255, 231, 100, 1)',
    		 'rgba(12, 138, 251, 1)',
    		 'rgba(56, 181, 118, 1)',
    		 'rgba(241, 96, 119, 1)',
    		 'rgba(255, 221, 94, 1)',
    		 'rgba(255, 148, 100, 1)',
    		 'rgba(127, 126, 126, 1)',
    		 'rgba(241, 106, 133, 1)',
    		 'rgba(11, 162, 251, 1)',
    		 'rgba(251, 122, 131, 1)'],
    		hoverBorderColor: 
    		['rgba(255, 231, 100, 1)',
    		 'rgba(12, 138, 251, 1)',
    		 'rgba(56, 181, 118, 1)',
    		 'rgba(241, 96, 119, 1)',
    		 'rgba(255, 221, 94, 1)',
    		 'rgba(255, 148, 100, 1)',
    		 'rgba(127, 126, 126, 1)',
    		 'rgba(241, 106, 133, 1)',
    		 'rgba(11, 162, 251, 1)',
    		 'rgba(251, 122, 131, 1)'],
    		borderWidth: 1
    	}]
    },
    options: {
    	title: {
        display: true,
        text: 'Top 10 EU budget contributors(millions euros)'
      }
    }
});

//Top by population
var ctx = document.getElementById("euPopulationChart");
var euPopulationChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
    datasets: [{
        data: [82850000, 67221943, 66238007, 60483973, 46659302, 37976687, 19523621, 17118084, 11413058, 10738868],
        backgroundColor: 
        ['rgb(255, 215, 0, 1)',
        'rgba(0, 85, 164, 1)',
        'rgba(200, 16, 46, 1)',
        'rgba(0, 146, 70, 1)',
        'rgba(241, 191, 0, 1)',
        'rgba(220, 20, 60, 1)',
        'rgba(252, 209, 22, 1)',
        'rgba(255, 79, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(13, 94, 175, 1)'],
        hoverBackgroundColor: 
        ['rgba(255, 231, 100, 1)',
        'rgba(12, 138, 251, 1)',
        'rgba(241, 96, 119, 1)',
        'rgba(56, 181, 118, 1)',
        'rgba(255, 221, 94, 1)',
        'rgba(241, 106, 133, 1)',
        'rgba(255, 228, 110, 1)',
        'rgba(255, 148, 100, 1)',
        'rgba(127, 126, 126, 1)',
        'rgba(84, 141, 196, 1)'],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)'
    }],
    labels: [
        "Germany",
        "France",
        "United Kingdom",
        "Italy",
        "Spain",
        "Poland",
        "Romania",
        "Netherlands",
        "Belgium",
        "Greece"
    ],
    options: {
    	title: {
        display: true,
        text: 'Top 10 EU countries by population'
    	}
    }
}});