import { AlunoService } from './../../services/aluno.service';
import { Aluno } from './../../models/aluno';
import { Page } from '../../models/page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  alunos: Aluno[] = [];
  count = 0;
  page: Page;
  numeroPagina = 1;

  devolucao: Page = new Page();

  constructor(
    private alunoService: AlunoService 
  ) {}

  ngOnInit(): void {
    this.fetchAlunos();
  }

  fetchAlunos() {
    
    this.alunoService.getAlunoPaginacao(this.numeroPagina).subscribe(
      (result: Page) => {
        this.alunos = result.results,
        this.count = result.count;
        this.page = result
      },
      (error) => console.log(error)
    )
  }

  pageChanged(event) {
    console.log(event)
    this.numeroPagina = event;
    this.alunoService.getAlunoPaginacao(event).subscribe(
      (result: Page) => {
        this.alunos = result.results,
        this.count = result.count;
        this.page = result
      },
      (error) => console.log(error)
    )
  }

}
