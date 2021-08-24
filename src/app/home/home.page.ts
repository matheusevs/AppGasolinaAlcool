import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado";
  precoAlcool: any;
  precoGasolina: any;

  calcular(){
    if(this.precoAlcool && this.precoGasolina){
      const pAlcool = parseFloat(this.precoAlcool);
      const pGasolina = parseFloat(this.precoGasolina);

      if((pAlcool/pGasolina) >= 0.7){
        this.resultado = 'Melhor utilizar Gasolina';
      } else{
        this.resultado = 'Melhor utilizar Álcool';
      }

    } else{
      this.resultado = 'Preencha corretamente os campos!';
    }
  }

  constructor() {}

}
