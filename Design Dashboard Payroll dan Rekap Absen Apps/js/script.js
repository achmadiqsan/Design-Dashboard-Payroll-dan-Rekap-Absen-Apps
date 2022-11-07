var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Laki-Laki",
        "Perempuan"
    ],
    datasets: [
        {
            data: [10, 8],
            backgroundColor: [
                "#574EB0",
                "#68D141"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});

// 


var ctx = document.getElementById("absenbulanChart").getContext('2d');
        var absenbulanChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AGS", "SEP", "OKT", "NOV", "DES"],
                datasets: [{
                    label: 'Masuk',
                    data: [35, 30, 40, 12, 15, 20, 25, 5, 11, 10, 22, 27],
                    backgroundColor: [
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        ],
                    borderColor: [
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        ],
                    borderWidth: 1
                },{
                    label: 'Sakit',
                    data: [12, 19, 23, 35, 30, 40, 12, 15, 20, 25, 5, 11],
                    backgroundColor: [
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        ],
                    borderColor: [
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        ],
                    borderWidth: 1
                },{
                    label: 'Alpha',
                    data: [25, 19, 9, 12, 15, 20, 25, 5, 11, 10, 22, 27],
                    backgroundColor: [
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        ],
                    borderColor: [
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

var ctx2 = document.getElementById("chartabsenperkaryawanChart").getContext('2d');
        var chartabsenperkaryawanChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AGS", "SEP", "OKT", "NOV", "DES"],
                datasets: [{
                    label: 'Masuk',
                    data: [35, 30, 40, 12, 15, 20, 25, 5, 11, 10, 22, 27],
                    backgroundColor: [
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        ],
                    borderColor: [
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        'rgba(104, 209, 65, 1)',
                        ],
                    borderWidth: 1
                },{
                    label: 'Sakit',
                    data: [12, 19, 23, 35, 30, 40, 12, 15, 20, 25, 5, 11],
                    backgroundColor: [
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        ],
                    borderColor: [
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        'rgba(87, 78, 176, 1)',
                        ],
                    borderWidth: 1
                },{
                    label: 'Alpha',
                    data: [25, 19, 9, 12, 15, 20, 25, 5, 11, 10, 22, 27],
                    backgroundColor: [
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        ],
                    borderColor: [
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        'rgba(255, 168, 75, 1)',
                        ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
