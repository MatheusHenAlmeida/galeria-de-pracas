import { Routes, RouterModule } from '@angular/router';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { UsuarioDetalheComponent } from './components/usuario-detalhe/usuario-detalhe.component';

const routes: Routes = [
    { path: '', component: UsuariosListaComponent },
    { path: 'usuario/:id', component: UsuarioDetalheComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
