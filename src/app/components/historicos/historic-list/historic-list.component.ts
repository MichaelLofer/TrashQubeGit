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
            datasets: [{
              label: 'Historico',
              backgroundColor: "#3e95cd",
              borderColor: "#3e95cd",
              fill: false,
              data: [
              ],
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: 'Datos Históricos de Distancia al Fondo'
            },
            scales: {
              xAxes: [{
                display: true,
						    scaleLabel: {
                  display: true,
                  labelString: 'Fecha'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Valor'
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
          responsive: true,
          title: {
            display: true,
            text: 'Estado Acutal del Cubo'
          },
        },
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
    this.chartHistorico.data.labels.push(this.historicList[this.historicList.length-1].fecha);
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
