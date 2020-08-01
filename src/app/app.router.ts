import { Routes, RouterModule } from '@angular/router';
import { PracasListaComponent } from './components/pracas-lista/pracas-lista.component';
import { PracaDetalheComponent } from './components/praca-detalhe/praca-detalhe.component';

const routes: Routes = [
    { path: '', component: PracasListaComponent },
    { path: 'praca/:id', component: PracaDetalheComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
