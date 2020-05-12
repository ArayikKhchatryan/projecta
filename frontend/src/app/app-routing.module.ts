import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './components/project-list/project-list.component';


export const routes: Routes = [
  {path: 'projects/:id', loadChildren: () => import('./components/project/projectroutingmodule.module').then(m => m.Projectroutingmodule)},
  {path: 'projects', component: ProjectListComponent},
  {path: '**', redirectTo: 'projects'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
