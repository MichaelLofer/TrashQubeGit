import { Component, OnInit } from '@angular/core';

// Service
import { HistoricoService } from '../../../services/historico.service';

// Class Product
import { Historico } from '../../../models/historico'; 

@Component({
  selector: 'app-historic-list',
  templateUrl: './historic-list.component.html',
  styleUrls: ['./historic-list.component.css']
})
export class HistoricListComponent implements OnInit {

  historicList: Historico[];
  constructor(
    private historicoService: HistoricoService
    ) { }

  ngOnInit() {
    this.historicoService.getHistorics()
      .snapshotChanges()
      .subscribe(item => {
        this.historicList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.historicList.push(x as Historico);
        });
      });
  }

  onEdit(historico: Historico){
    this.historicoService.selectedHistorico = Object.assign({}, historico);
  }

  onDelete($key: string){
    if(confirm('Are you sure you want to delete it?')){
      this.historicoService.deleteHistorico($key);
    }
  }

}
