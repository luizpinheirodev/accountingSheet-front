import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartAt = [];
  chartPa = [];
  chartPl = [];
  chartOk = [];

  constructor(private router: Router) {
  }

  ngOnInit() {




    /*this.chartAt = new Chart('canvasAt', {
      type: 'bar',
      data: {
        labels: ['Circulante', 'Não circulante'],
        datasets: [{
          data: [84.300, 44.100],
          backgroundColor: [
            'rgba(0, 230, 64, 1)',
            'rgba(46, 204, 113, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Circulante e não circulante'
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgba(191, 191, 191, 1)'
          },
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              display: true
            }
          }],
          yAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              beginAtZero: true,
              display: false
            }
          }]
        }
      }
    });


    this.chartPa = new Chart('canvasPa', {
      type: 'bar',
      data: {
        labels: ['Circ', 'NãoCirc', 'PL'],
        datasets: [{
          data: [35.500, 58.500, 34.600],
          backgroundColor: [
            'rgba(242, 38, 19, 1)',
            'rgba(255, 148, 120, 1)',
            'rgba(52, 152, 219, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Circulante e não circulante e PL'
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgba(191, 191, 191, 1)'
          },
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              display: true
            }
          }],
          yAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              beginAtZero: true,
              display: false
            }
          }]
        }
      }
    });


    this.chartPl = new Chart('canvasPl', {
      type: 'bar',
      data: {
        labels: ['Ativo', 'Passivo', 'PL'],
        datasets: [{
          data: [128.400, 93.800, 34.600],
          backgroundColor: [
            'rgba(0, 230, 64, 1)',
            'rgba(242, 38, 19, 1)',
            'rgba(52, 152, 219, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Ativo, passivo e PL'
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgba(191, 191, 191, 1)'
          },
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              display: true
            }
          }],
          yAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              beginAtZero: true,
              display: false
            }
          }]
        }
      }
    });


    this.chartOk = new Chart('canvasOk', {
      type: 'pie',
      data: {
        labels: ['Ativo', 'Passivo', 'PL'],
        datasets: [{
          data: [128.400, 93.800, 34.600],
          backgroundColor: [
            'rgba(0, 230, 64, 1)',
            'rgba(242, 38, 19, 1)',
            'rgba(52, 152, 219, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Ativo, passivo e PL'
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgba(191, 191, 191, 1)'
          },
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              lineWidth: 0
            },
            ticks: {
              beginAtZero: true,
              display: false
            }
          }]
        }
      }
    });
    */

  }


  goToAccount(number: string) {
    this.router.navigate([`contas/${number}`]);
  }

}
