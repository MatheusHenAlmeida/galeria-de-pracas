import { Routes, RouterModule } from '@angular/router';
import { PracasListaComponent } from './components/pracas-lista/pracas-lista.component';
import { UsuarioDetalheComponent } from './components/usuario-detalhe/usuario-detalhe.component';

const routes: Routes = [
    { path: '', component: PracasListaComponent },
    { path: 'praca/:id', component: UsuarioDetalheComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
