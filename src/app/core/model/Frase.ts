
export class Frase {
  
   private _numeroSilabas:number;
   constructor( private _cadena: string){
   }
   get cadena(){
       
           return this._cadena;
       }
   
       set cadena(value: string) {
           this._cadena = value;
       }
   
     get numeroSilabas(): number {
           return this._numeroSilabas;
       }
   
       set numeroSilabas(value: number) {
           this._numeroSilabas = value;
       }
  
quitarespacios(cadenaLlena:string){
        cadenaLlena=cadenaLlena.split(" ").join("");
      return cadenaLlena;
 }
 isVocal(silaba){
    let _vocal: String[] = ["a","e","i","o","u","A","E","I","O","U","á","é","í","ó","ú","Á","É","Í","Ó","Ú"] 
     for(let i=0; i<_vocal.length;i++)  {
         if(silaba==_vocal[i]){
         return true } 
        } return false;
    };
    isConsonante(silaba){
        let _consonante: String[] = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z","B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"];
         for(let i=0; i<_consonante.length;i++)  {
             if(silaba==_consonante[i]){
             return true } 
            } return false;
        };
 llenarSilabas(cadena:String){

       cadena=this.quitarespacios(this.cadena);
       let posicion=0;
       let divisionSilabas: String[] = [];

      for(let i=0; i<cadena.length; i++){
          let letra=cadena[i];
          if(i!=0 && this.isConsonante(letra)){
              let silabas;
                 if(i==cadena.length -1){
                    silabas= cadena.substring(posicion,i +1);
        } else{
             silabas= cadena.substring(posicion,i);
        }
        divisionSilabas.push(silabas);
        posicion=i;
          } 
      } console.log(divisionSilabas)
      return divisionSilabas;
   }
   }