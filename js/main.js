$('#payRatio').remove();
document.onload = renderRatioChart();

$('#ratioChart').on("click", function() {
  $('#payRatio').remove()
  $('#hoursC').remove()
  renderRatioChart();
  $(this).addClass('highlight');
  $('#hoursChart').removeClass('highlight');
})

$('#hoursChart').on("click", function() {
  $('#payRatio').remove()
  $('#hoursC').remove()
  renderHoursChart();
  $(this).addClass('highlight');
  $('#ratioChart').removeClass('highlight');
})

function renderRatioChart() {
  $('#hoursC').remove();
  $('#graph-container').append('<canvas id="payRatio"><canvas>');
  var payRatio = document.getElementById('payRatio').getContext('2d');
  payRatio.canvas.width = window.innerWidth;
  payRatio.canvas.height = window.innerHeight-120;
  var data = [{
      type: 'bubble',
      label: 'Gender Pay Ratio',
      data: [{
        //Management Occupations
        x: 80028,
        y: 59696,
        r: 6,
        label: 'Management'
      }, {
        //Business and Financial Operations Occupations
        x: 71396,
        y: 52936,
        r: 6,
        label: 'Business and Finance'
      }, {
        //Computer and Mathetmatical Occupations
        x: 78936,
        y: 68900,
        r: 6,
        label: 'Mathematics'
      }, {
        //Computer Systems Analysts
        x: 76700,
        y: 69056,
        r: 6,
        label: 'Computer Systems Analyst'
      }, {
        //Software developers, applications and systems software
        x: 96876,
        y: 80756,
        r: 6,
        label: 'Software Developer'
      }, {
        //Computer support specialists
        x: 56056,
        y: 52728,
        r: 6,
        label: 'Computer Support'
      }, {
        //Computer occupations, all other
        x: 64688,
        y: 54860,
        r: 6,
        label: 'Other Computer Occupations'
      }, {
        //Operations research analysts
        x: 71864,
        y: 67600,
        r: 6,
        label: 'Operations Research Analyst'
      }, {
        //Architecture and engineering occupations
        x: 79508,
        y: 62764,
        r: 6,
        label: 'Architecture and Engineering'
      }, {
        //Life, physical, and social science occupations
        x: 68588,
        y: 58188,
        r: 6,
        label: 'Sciences'
      }, {
        //Community and social service occupations
        x: 52208,
        y: 45760,
        r: 6,
        label: 'Community and Social Service'
      }, {
        //Legal occupations
        x: 99008,
        y: 59904,
        r: 6,
        label: 'Legal'
      }, {
        //Education, training, and library occupations
        x: 60008,
        y: 48516,
        r: 6,
        label: 'Education'
      }, {
        //Arts, design, entertainment, sports, and media occupations
        x: 59228,
        y: 49452,
        r: 6,
        label: 'Arts, Media, and Sports'
      }, {
        //Healthcare practitioners and technical occupations
        x: 69264,
        y: 53872,
        r: 6,
        label: 'Healthcare Practitioner'
      }, {
        //Healthcare support occupations
        x: 31304,
        y: 26988,
        r: 6,
        label: 'Healthcare Support'
      }, {
        //Protective service occupations
        x: 44408,
        y: 35776,
        r: 6,
        label: 'Protective Services'
      }, {
        //Food preparation and serving related occupations
        x: 25532,
        y: 22568,
        r: 6,
        label: 'Food and Food Service'
      }, {
        //Building and grounds cleaning and maintenance occupations
        x: 28496,
        y: 23608,
        r: 6,
        label: 'Building and Grounds Maintenance'
      }, {
        //Personal care and service occupations
        x: 31876,
        y: 25064,
        r: 6,
        label: 'Personal Care and Service'
      }, {
        //Sales and related occupations
        x: 47008,
        y: 30680,
        r: 6,
        label: 'Sales'
      }, {
        //Office and administrative support occupations
        x: 36816,
        y: 34788,
        r: 6,
        label: 'Office and Administration'
      }, {
        //Natural resources, construction, and maintenance occupations
        x: 41288,
        y: 30160,
        r: 6,
        label: 'Natural Resources and Construction'
      }, {
        //Production, transportation, and material moving occupations
        x: 36608,
        y: 27612,
        r: 6,
        label: 'Transportation and Production'
      }],
        borderColor: "transparent",
        backgroundColor: '#91A8d0',
        fill: false,
      },
      {
        type: 'line',
        label: "Equal Pay",
        data: [{
          x: 1,
          y: 1
        }, {
          x: 100000,
          y: 100000
        }],
        borderColor: "transparent",
        pointHoverRadius: 0,
      }]

      var payRatioChart = new Chart(payRatio, {
          type: 'bubble',
          data: {
              datasets: data
          },
          options: {
            title: {
              display: true,
              text: 'Gender Pay Gap'
            },
            tooltips: {
              enabled: false,
              mode: 'index',
              position: 'nearest',
              custom: function(tooltip) {
                      // tooltip will be false if tooltip is not visible or should be hidden
                      var tooltipEl = document.getElementById('chartjs-tooltip');
                			if (!tooltipEl) {
                				tooltipEl = document.createElement('div');
                				tooltipEl.id = 'chartjs-tooltip';
                				tooltipEl.innerHTML = "<table></table>"
                				this._chart.canvas.parentNode.appendChild(tooltipEl);
                			}
                			// Hide if no tooltip
                			if (tooltip.opacity === 0) {
                				tooltipEl.style.opacity = 0;
                				return;
                			}
                			// Set caret Position
                			tooltipEl.classList.remove('above', 'below', 'no-transform');
                			if (tooltip.yAlign) {
                				tooltipEl.classList.add(tooltip.yAlign);
                			} else {
                				tooltipEl.classList.add('no-transform');
                			}
                			function getBody(bodyItem) {
                				return bodyItem.lines;
                			}
                			// Set Text
                			if (tooltip.body) {
                				var titleLines = tooltip.title || [];
                        var male = tooltip.body[0].lines[0].slice(19,24)
                        var female = tooltip.body[0].lines[0].slice(26,31)
                        var ratio = (female/male).toFixed(2)
                				var bodyLines = tooltip.body.map(getBody);
                        var occupation = 'Test'
                        for (i = 0; i < 24; i++) {
                          if (payRatioChart.data["datasets"][0]["data"][i]["x"] == male) {
                            occupation = payRatioChart.data["datasets"][0]["data"][i]["label"];
                          }
                        }
                        tooltipEl.innerHTML = '<tr><td><span class="chartjs-tooltip-key"></span>'+ occupation +'</td></tr><br><tr><td><span class="chartjs-tooltip-key"></span>Male: $'+ male +'</td></tr><br><tr><td><span class="chartjs-tooltip-key"></span>Female: $'+ female +'</td></tr><br><tr><td><span class="chartjs-tooltip-key"></span>Ratio: '+ ratio +'</td></tr>';
                			}
                			var positionY = this._chart.canvas.offsetTop;
                			var positionX = this._chart.canvas.offsetLeft;
                			// Display, position, and set styles for font
                			tooltipEl.style.opacity = 1;
                			tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                			tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                			tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
                		}
            },
            showLines: true,
            responsive: true,
            maintainAspectRatio:false,
            scales: {
             xAxes: [{
                     type: 'linear',
                     position: 'bottom',
                     ticks: {
                         callback: function(label, index, labels) {
                             return '$'+ label;
                         }
                     },
                     scaleLabel: {
                       display: true,
                       labelString: 'Mens Median Annual Earnings'
                     }
                   }],
             yAxes: [{
                     scaleLabel: {
                       display: true,
                       labelString: 'Womens Median Annual Earnings'
                     },
                     ticks: {
                         callback: function(label, index, labels) {
                             return '$' + label;
                         }
                     }
             }]
           }
          }
      });
    }

function renderHoursChart() {
  $('#payRatio').remove();
  $('#graph-container').append('<canvas id="hoursC"><canvas>');
  var hoursC = document.getElementById('hoursC').getContext('2d');
  hoursC.canvas.width = window.innerWidth;
  hoursC.canvas.height = window.innerHeight-40;
  var ctx = document.getElementById("hoursC").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Management", "Business and Finance", "Mathematics", "Computer Systems Analyst", "Software Developer", "Computer Support", "Other Computer Occupations", "Operations Research Analyst", "Architecture and Engineering", "Sciences", "Community and Social Service", "Legal", "Education", "Arts, Media, and Sports", "Healthcare Practitioner", "Healthcare Support", "Protective Services", "Food and Food Service", "Building and Grounds Maintenance", "Personal Care and Service", "Sales", "Office and Administration", "Natural Resources and Construction", "Production and Transportation"],
      datasets: [{
        label: 'Extra hours',
        backgroundColor: "rgba(52,187,199,0.8)",
        data: [1.34, 1.35, 1.15, 1.11, 1.20, 1.06, 1.18, 1.06, 1.27, 1.18, 1.14, 1.65, 1.24, 1.20, 1.29, 1.16, 1.24, 1.13, 1.21, 1.27, 1.53, 1.06, 1.37, 1.33]
      },]
    },
    options: {
      title: {
        display: true,
        text: 'For every 1 hour men work, women have to work...'
      },
      showLines: true,
      responsive: true,
      scales: {
           xAxes: [{
               stacked: true,
               scaleLabel: {
                 display: true,
                 labelString: 'Occupation'
               },
               ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
           }],
           yAxes: [{
               stacked: true,
               scaleLabel: {
                 display: true,
                 labelString: 'Extra Hours'
               },
           }]
       }
    }
  });
};
