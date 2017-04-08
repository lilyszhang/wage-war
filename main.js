var payRatio = document.getElementById('payRatio');

var payRatioChart = new Chart(payRatio, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
              //Management Occupations
                x: 59696,
                y: 80028
            }, {
              //Business and Financial Operations Occupations
                x: 52936,
                y: 71396
            }, {
              //Computer and Mathetmatical Occupations
                x: 68900,
                y: 78936
            }, {
              //Computer Systems Analaysts
              x: 69056,
              y: 76700
            }, {
              //Computer Programmers
            }]
        }]
    },
    options: {
      showLines: false,
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
