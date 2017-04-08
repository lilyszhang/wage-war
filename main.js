$('#payRatio').remove();
document.onload = renderRatioChart();

function renderRatioChart() {
  $('#hoursC').remove();
  $('#graph-container').append('<canvas id="payRatio"><canvas>');
  var payRatio = document.getElementById('payRatio').getContext('2d');
  payRatio.canvas.width = window.innerWidth;
  payRatio.canvas.height = window.innerHeight-40;
  var data = [{
      type: 'bubble',
      label: 'Gender Pay Ratio',
      data: [{
        //Management Occupations
        x: 80028, y: 59696, r: 6
      }, {
        //Business and Financial Operations Occupations
        x: 71396, y: 52936, r: 6
      }, {
        //Computer and Mathetmatical Occupations
        x: 78936, y: 68900, r: 6
      }, {
        //Computer Systems Analaysts
        x: 76700, y: 69056, r: 6
      }, {
        //Software developers, applications and systems software
        x: 96876, y: 80756, r: 6
      }, {
        //Computer support specialists
        x: 56056, y: 52728, r: 6
      }, {
        //Computer occupations, all other
        x: 64688, y: 54860, r: 6
      }, {
        //Operations research analysts
        x: 71864, y: 67600, r: 6
      }, {
        //Architecture and engineering occupations
        x: 79508, y: 62764, r: 6
      }, {
        //Life, physical, and social science occupations
        x: 68588, y: 58188, r: 6
      }, {
        //Community and social service occupations
        x: 52208, y: 45760, r: 6
      }, {
        //Legal occupations
        x: 99008, y: 59904, r: 6
      }, {
        //Education, training, and library occupations
        x: 60008, y: 48516, r: 6
      }, {
        //Arts, design, entertainment, sports, and media occupations
        x: 59228, y: 49452, r: 6
      }, {
        //Healthcare practitioners and technical occupations
        x: 69264, y: 53872, r: 6
      }, {
        //Healthcare support occupations
        x: 31304, y: 26988, r: 6
      }, {
        //Protective service occupations
        x: 44408, y: 35776, r: 6
      }, {
        //Food preparation and serving related occupations
        x: 25532, y: 22568, r: 6
      }, {
        //Building and grounds cleaning and maintenance occupations
        x: 28496, y: 23608, r: 6
      }, {
        //Personal care and service occupations
        x: 31876, y: 25064, r: 6
      }, {
        //Sales and related occupations
        x: 47008, y: 30680, r: 6
      }, {
        //Office and administrative support occupations
        x: 36816, y: 34788, r: 6
      }, {
        //Natural resources, construction, and maintenance occupations
        x: 41288, y: 30160, r: 6
      }, {
        //Production, transportation, and material moving occupations
        x: 36608, y: 27612, r: 6
      }],
        borderColor: "transparent",
        backgroundColor: "rgb(255,90,90)",
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
      }]

      var customTooltips = function(tooltip) {
      			// Tooltip Element
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
      				var bodyLines = tooltip.body.map(getBody);
      				var innerHtml = '<thead>';
      				titleLines.forEach(function(title) {
      					innerHtml += '<tr><th>' + title + '</th></tr>';
      				});
      				innerHtml += '</thead><tbody>';
      				bodyLines.forEach(function(body, i) {
      					var colors = tooltip.labelColors[i];
      					var style = 'background:' + colors.backgroundColor;
      					style += '; border-color:' + colors.borderColor;
      					style += '; border-width: 2px';
      					var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
      					innerHtml += '<tr><td>' + span + body + '</td></tr>';
      				});
      				innerHtml += '</tbody>';
      				var tableRoot = tooltipEl.querySelector('table');
      				tableRoot.innerHTML = innerHtml;
      			}
      			var positionY = this._chart.canvas.offsetTop;
      			var positionX = this._chart.canvas.offsetLeft;
      			// Display, position, and set styles for font
      			tooltipEl.style.opacity = 1;
      			tooltipEl.style.left = positionX + tooltip.caretX + 'px';
      			tooltipEl.style.top = positionY + tooltip.caretY + 'px';
      			tooltipEl.style.fontFamily = tooltip._fontFamily;
      			tooltipEl.style.fontSize = tooltip.fontSize;
      			tooltipEl.style.fontStyle = tooltip._fontStyle;
      			tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      		};

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
          custom: customTooltips
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
};

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
      labels: ["Management occupations", "Business and financial operations occupations", "Computer and mathematical occupations", "Computer systems analysts", "Computer programmers", "Software developers, applications and systems software", "Computer support specialists", "Computer occupations, all other", "Operations research analysts", "Architecture and engineering occupations", "Life, physical, and social science occupations", "Community and social service occupations", "Legal occupations", "Education, training, and library occupations", "Arts, design, entertainment, sports, and media occupations", "Healthcare practitioners and technical occupations", "Healthcare support occupations", "Protective service occupations", "Food preparation and serving related occupations", "Building and grounds cleaning and maintenance occupations", "Personal care and service occupations", "Sales and related occupations", "Office and administrative support occupations", "Natural resources, construction, and maintenance occupations", "Production, transportation, and material moving occupations"],
      datasets: [{
        label: 'Extra hours',
        backgroundColor: "rgba(52,187,199,0.8)",
        data: [1.340592334, 1.348722986, 1.145660377, 1.110692771, 1.117378049, 1.199613651, 1.063116371, 1.179146919, 1.063076923, 1.266777133, 1.17873101, 1.140909091, 1.652777778, 1.236870311, 1.197686646, 1.285714286, 1.159922929, 1.24127907, 1.131336406, 1.207048458, 1.271784232, 1.53220339, 1.058295964, 1.368965517, 1.325800377]
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
