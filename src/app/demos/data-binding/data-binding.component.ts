import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',

})
export class DataBindingComponent {

  public contadorClick: number = 0;
  urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  nome: string = "";

  public contador() {
    this.contadorClick++;
  }

  public zerarContadorClick() {
    this.contadorClick = 0;
  }
}
