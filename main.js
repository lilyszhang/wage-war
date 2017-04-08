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
