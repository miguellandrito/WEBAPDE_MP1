     // JSON link: "https://api.npoint.io/8f849f5dc338b6648648"
                var labels = [];
                var data = [];
                
                //burger_sales CHART
                $.getJSON("https://api.npoint.io/8f849f5dc338b6648648", function (json) {
                    
                    // For each item in your object
                    for (var key in json.burger_sales) {
                        if (json.burger_sales.hasOwnProperty(key)) {
                            labels.push(key);
                            data.push(json.burger_sales[key]);
                        }
                    }
                    
                });
                
                   var chart = new Chart($('canvas-1'), {
                      type: 'line',
                      data: {
                         labels: labels,
                         datasets: [{
                            backgroundColor: 'rgb(0, 220, 222)',
                            borderColor: 'rgb(0, 198, 222)',
                            data: data
                         }]
                      },
                      options: {
                         responsive: 'true',
                      }
                   });