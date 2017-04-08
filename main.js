var payRatio = document.getElementById('payRatio');

Chart.pluginService.register({
    beforeInit: function(chart) {
        // We get the chart data
        var data = chart.config.data;

        // For every dataset ...
        for (var i = 0; i < data.datasets.length; i++) {

            // For every label ...
            for (var j = 0; j < data.labels.length; j++) {

                // We get the dataset's function and calculate the value
                var fct = data.datasets[i].function,
                    x = data.labels[j],
                    y = fct(x);
                // Then we add the value to the dataset data
                data.datasets[i].data.push(y);
            }
        }
    }
});

var payRatioChart = new Chart(payRatio, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Gender Pay Ratio',
            data: [{
              //Management Occupations
                x: 80028,
                y: 59696
            }, {
              //Business and Financial Operations Occupations
                x: 71396,
                y: 52936
            }, {
              //Computer and Mathetmatical Occupations
                x: 78936,
                y: 68900
            }, {
              //Computer Systems Analaysts
              x: 76700,
              y: 69056
            }, {
              //Software developers, applications and systems software
              x: 96876,
              y: 80756
            }, {
              //Computer support specialists
              x: 56056,
              y: 52728
            }, {
              //Computer occupations, all other
              x: 64688,
              y: 54860
            }, {
              //Operations research analysts
              x: 71864,
              y: 67600
            }, {
              //Architecture and engineering occupations
              x: 79508,
              y: 79508
            }, {
              //Life, physical, and social science occupations
              x: 68588,
              y: 58188
            }, {
              //Community and social service occupations
              x: 52208,
              y: 45760
            }, {
              //Legal occupations
              x: 99008,
              y: 59904
            }, {
              //Education, training, and library occupations
              x: 60008,
              y: 48516
            }, {
              //Arts, design, entertainment, sports, and media occupations
              x: 59228,
              y: 49452
            }, {
              //Healthcare practitioners and technical occupations
              x: 69264,
              y: 69264
            }, {
              //Healthcare support occupations
              x: 31304,
              y: 26988
            }, {
              //Protective service occupations
              x: 44408,
              y: 35776
            }, {
              //Food preparation and serving related occupations
              x: 25532,
              y: 22568
            }, {
              //Building and grounds cleaning and maintenance occupations
              x: 28496,
              y: 23608
            }, {
              //Personal care and service occupations
              x: 31876,
              y: 25064
            }, {
              //Sales and related occupations
              x: 47008,
              y: 30680
            }, {
              //Office and administrative support occupations
              x: 36816,
              y: 34788
            }, {
              //Natural resources, construction, and maintenance occupations
              x: 41288,
              y: 30160
            }, {
              //Production, transportation, and material moving occupations
              x: 36608,
              y: 27612
            }]
        },
      {
        label: "Equal Pay",
        function: function(x) { return x },
        data: [],
        borderColor: "rgba(153, 102, 255, 1)",
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
