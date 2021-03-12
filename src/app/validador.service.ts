import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {

  constructor() { }
  
  validarDato(datoAvalidar: string, pattern: RegExp): Boolean {
    return pattern.test(datoAvalidar);
  }
}
