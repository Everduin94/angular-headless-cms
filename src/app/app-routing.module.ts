import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './appComponents/page-not-found/page-not-found.component';
import { LoginComponent } from './appComponents/login/login.component';
import { ShellComponent } from './appComponents/header/shell.component';
import { MainComponent } from './appComponents/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        component: MainComponent,
        children: [
          {
            path: 'examples',
            loadChildren: () => import('./featureComponents/examples/examples.module').then(mod => mod.ExamplesModule),
          },
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
