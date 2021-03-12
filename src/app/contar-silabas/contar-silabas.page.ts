import { ValidadorService } from './../validador.service';
import { Component, OnInit } from '@angular/core';
import {Frase} from '../core/model/Frase';

@Component({
  selector: 'app-contar-silabas',
  templateUrl: './contar-silabas.page.html',
  styleUrls: ['./contar-silabas.page.scss'],
})
export class ContarSilabasPage implements OnInit {
Verso:string;
VersoSinEspacios:string;
pattern:RegExp= /^[ a-zA-ZñÑáÁéÉíÍóÓúÚÜü ]{1,}/;
cadenaSeparada:string;
numeroDeVersos:number;
constructor(private validador:ValidadorService) { }

  ngOnInit() {
  }
  llenarSilabas(){
    let frase:Frase = new Frase(this.Verso);
    let array=frase.llenarSilabas(this.Verso);
    this.cadenaSeparada=array.join("-");
    this.numeroDeVersos=array.length;
  }

   
  validarDato(Verso: string) {

    if(this.validador.validarDato(Verso, this.pattern)==true){
      alert("El verso introducido es correcto")
    } else{
      alert("El verso introducido contiene números o caracteres especiales")
    }
  }
 
}
