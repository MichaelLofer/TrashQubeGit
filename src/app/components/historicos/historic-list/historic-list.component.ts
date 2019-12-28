import { Component, OnInit } from '@angular/core';

// Service
import { HistoricoService } from '../../../services/historico.service';

// Class Product
import { Historico } from '../../../models/historico'; 

// Grafica 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-historic-list',
  templateUrl: './historic-list.component.html',
  styleUrls: ['./historic-list.component.css']
})
export class HistoricListComponent implements OnInit {

  chartHistorico: any = null;
  chartEstado: any = null;

  historicList: Historico[];
  prueba: any[];
  // CONSTRUCTOR
  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
      this.chartHistorico = new Chart('historicoFondo', {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
            label: 'Data 1',
            fill: false,
            data: [],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
            }
          ]
          },
          options: {
          tooltips: {
            enabled: false
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: 'white'
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: "white"
              }
            }],
            xAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
            }]
          }
          }
      });

      this.chartEstado = new Chart('estadoCubo', {
        type: 'pie',
        data: {
          labels: ["Ocupado", "Libre"],
          datasets: [
          {
              label: "Capacidad (porcentaje)",
              backgroundColor: ["#3e95cd", "#8e5ea2"],
              data: []
          }
          ]
        },
        options: {
          responsive: true
        }
      });

      this.historicoService.getHistorics()
      .snapshotChanges()
      .subscribe(item => {
        this.historicList = [];
        this.prueba = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.historicList.push(x as Historico);

          this.showHistorico();
          if(item.indexOf(element)==item.length-1){
            this.showEstado();
          }
        });
      });
  }

	private showHistorico(): void {
    let chartTime: any = new Date();
    chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
    if(this.chartHistorico.data.labels.length > 15) {
        this.chartHistorico.data.labels.shift();
        this.chartHistorico.data.datasets[0].data.shift();
    }
    this.chartHistorico.data.labels.push(chartTime);
    this.chartHistorico.data.datasets[0].data.push(this.historicList[this.historicList.length-1].peso);
    this.chartHistorico.update();
  }

  private showEstado(): void {
    this.chartEstado.data.datasets[0].data.pop();
    this.chartEstado.data.datasets[0].data.pop();
    this.chartEstado.data.datasets[0].data.push(this.historicList[this.historicList.length-1].distanciaFondo);
    this.chartEstado.data.datasets[0].data.push(100-(this.historicList[this.historicList.length-1].distanciaFondo));
    this.chartEstado.update();
  }

  onEdit(historico: Historico){
    this.historicoService.selectedHistorico = Object.assign({}, historico);
  }

  onDelete($key: string){
    this.historicoService.deleteHistorico($key);
  }

}
