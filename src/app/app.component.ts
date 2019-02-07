import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor: any = 5;

  deletarCiclo: Boolean = false;

  mudarValor() {
    this.valor++;
  }

  destroiCiclo() {
    this.deletarCiclo = true;
  }
}
