import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { Routes } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contato', component: ContatoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    {path: 'features-data-binding', component:DataBindingComponent}
];