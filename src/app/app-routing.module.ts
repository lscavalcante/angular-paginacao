import { AlunoFilterComponent } from './pages/aluno-filter/aluno-filter.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'aluno-filter', component: AlunoFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
