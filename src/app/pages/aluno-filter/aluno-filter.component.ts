import { AlunoService } from './../../services/aluno.service';
import { Aluno } from './../../models/aluno';
import { Page } from '../../models/page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-filter',
  templateUrl: './aluno-filter.component.html',
  styleUrls: ['./aluno-filter.component.css']
})
export class AlunoFilterComponent implements OnInit {

  public alunos: Aluno[] = [];
  public count: number = 0;
  public page: Page;
  public numeroPagina: number = 1;
  public filter: string = '';

  devolucao: Page = new Page();

  constructor(
    private alunoService: AlunoService 
  ) {}

  ngOnInit(): void {
    this.fetchAlunos();
  }

  buscarAluno() {
    this.numeroPagina = 1;
    this.alunoService.getAlunoPaginacaoFilter(this.numeroPagina, this.filter).subscribe(
      (result: Page) => {
        this.alunos = result.results,
        this.count = result.count;
        this.page = result
      },
      (error) => console.log(error)
    )
  }

  fetchAlunos() {
    
    this.alunoService.getAlunoPaginacaoFilter(this.numeroPagina, this.filter).subscribe(
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
    this.alunoService.getAlunoPaginacaoFilter(event, this.filter).subscribe(
      (result: Page) => {
        this.alunos = result.results,
        this.count = result.count;
        this.page = result
      },
      (error) => console.log(error)
    )
  }

}
