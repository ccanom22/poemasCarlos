import { Component, OnInit } from '@angular/core';
import { Frase } from '../core/model/Frase';
import { ValidadorService } from '../validador.service';

@Component({
  selector: 'app-comprobar-rimas',
  templateUrl: './comprobar-rimas.page.html',
  styleUrls: ['./comprobar-rimas.page.scss'],
})
export class ComprobarRimasPage implements OnInit {
  Verso1:string;
  Verso2:string;
  pattern:RegExp= /^[ a-zA-ZñÑáÁéÉíÍóÓúÚÜü ]{1,}/;
  cadenaSeparada1:string;
  numeroDeVersos1:number;
  cadenaSeparada2:string;
  numeroDeVersos2:number;
  respuesta:boolean;
  mensaje:string;
  constructor(private validador:ValidadorService) { }

  ngOnInit() {
  }
  llenarSilabas(){
    let frase1:Frase = new Frase(this.Verso1);
    let array1=frase1.llenarSilabas(this.Verso1);
    this.cadenaSeparada1=array1.join("-");
    this.numeroDeVersos1=array1.length;

    let frase2:Frase = new Frase(this.Verso2);
    let array2=frase2.llenarSilabas(this.Verso2);
    this.cadenaSeparada2=array2.join("-");
    this.numeroDeVersos2=array2.length;
    let rima1=this.Verso1.slice(this.Verso1.length-4);
    let rima2=this.Verso2.slice(this.Verso2.length-4)
    if(rima1===rima2){
     console.log(rima1)
     console.log(rima2)
      this.respuesta=true;
       this.mensaje="Las dos últimas sílabas de los versos riman.";
    }

  }
  validarDato(Verso1: string, Verso2:string){
    if(this.validador.validarDato(Verso1, this.pattern) && this.validador.validarDato(Verso2, this.pattern)){
      alert("El verso introducido es correcto")
    } else{
      alert("El verso introducido contiene números o caracteres especiales")
    }
    
  }
}
