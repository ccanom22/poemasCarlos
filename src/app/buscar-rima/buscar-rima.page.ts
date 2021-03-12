import { Component, OnInit } from '@angular/core';
import { ValidadorService } from '../validador.service';

@Component({
  selector: 'app-buscar-rima',
  templateUrl: './buscar-rima.page.html',
  styleUrls: ['./buscar-rima.page.scss'],
})
export class BuscarRimaPage implements OnInit {
  Palabra:string;
  pattern:RegExp= /^[ a-zA-ZñÑáÁéÉíÍóÓúÚÜü ]{1,}/;
  Mensaje:string;
  constructor(private validador:ValidadorService) { }
  
  ngOnInit() {
  }
  mensaje(){
    alert(this.Mensaje="Esta parte de la app aún se encuentra en vías de desarrollo. Disculpen las molestias.")
  }
}
