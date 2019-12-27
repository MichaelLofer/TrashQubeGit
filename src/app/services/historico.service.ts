import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

// Model
import { Historico } from '../models/historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  
  historicList: AngularFireList<any>;
  selectedHistorico: Historico = new Historico();

  constructor(private firebase: AngularFireDatabase) { }
  
  getHistorics(){
    // guardamos los historicos en la variable 'historicos'
    return this.historicList = this.firebase.list('historicos');
  }

  insertHistorico(historico: Historico){
    this.historicList.push({
      id: historico.id,
      distanciaFondo: historico.distanciaFondo,
      distanciaTapa: historico.distanciaTapa,
      peso: historico.peso,
      fecha: historico.fecha
    });
  }

  updateHistorico(historico: Historico){
    this.historicList.update(historico.$key, {
      id: historico.id,
      distanciaFondo: historico.distanciaFondo,
      distanciaTapa: historico.distanciaTapa,
      peso: historico.peso,
      fecha: historico.fecha
    });
  }

  deleteHistorico($key: string){
    this.historicList.remove($key);
  }
}
