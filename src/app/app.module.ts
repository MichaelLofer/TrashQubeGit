import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// components
import { HistoricosComponent } from './components/historicos/historicos.component';
import { HistoricListComponent } from './components/historicos/historic-list/historic-list.component';
import { HistoricoComponent } from './components/historicos/historico/historico.component';

// services
import { HistoricoService } from './services/historico.service'

@NgModule({
  declarations: [
    AppComponent,
    HistoricoComponent,
    HistoricListComponent,
    HistoricosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    HistoricoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
