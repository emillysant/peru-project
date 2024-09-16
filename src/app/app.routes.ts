import { Routes } from '@angular/router';
import { PeruComponent } from './pages/peru/peru.component';
import { CulturaComponent } from './pages/cultura/cultura.component';
import { GeografiaComponent } from './pages/geografia/geografia.component';
import { TurismoComponent } from './pages/turismo/turismo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'peru', pathMatch: 'full' },
  {
    path: 'peru',
    component: PeruComponent,
    children: [
      { path: 'cultura', component: CulturaComponent },
      { path: 'geografia', component: GeografiaComponent },
      { path: 'turismo', component: TurismoComponent },
    ],
  },
  { path: '**', redirectTo: 'peru' },
];
