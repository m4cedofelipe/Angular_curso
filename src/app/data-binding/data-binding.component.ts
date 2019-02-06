import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular: Boolean = true;
  urlImagem = 'http://lorempixel.com/600/400/sports/';

  valorAtual: String = '';
  valorSalvo: String = '';

  isMouseOver: Boolean = false;

  nome: String = 'abc';

  nomeDoCurso: String = 'Angular';

  valorInicial = 15;


  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado !!!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvaValor(value) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  atualizaNome(value) {
    this.nome = value;
  }

  onMudouvalor(event) {
    console.log(event.novoValor);
  }


  constructor() { }

  ngOnInit() {
  }

}
