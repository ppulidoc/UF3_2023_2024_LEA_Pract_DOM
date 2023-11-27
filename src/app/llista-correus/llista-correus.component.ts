import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-llista-correus',
  templateUrl: './llista-correus.component.html',
  styleUrls: ['./llista-correus.component.css']
})
export class LlistaCorreusComponent implements OnInit{

 /* correus: any[];
  contadorLlegits : number;
  contadorNoLlegits : number;
*/

contador: number;


  constructor() {

    this.contador = 0;

   /* this.contadorLlegits = 0;
    this.contadorNoLlegits = 0;

      const correu1 = {
        titol: "Titol del 1",
        cos: "cos email, cos email,cos email, cos email,cos email, cos email,cos email, cos email,cos email, cos email,cos email, cos email",
        emissor: 'adria@gmail.com',
        destinatari: 'adria@gmail.com',
        llegit: true
      }

      const correu2 = {
        titol: "Titol del 2",
        cos: "cos email, cos email,cos email, cos email,cos email, cos email,cos email, cos email,cos email, cos email,cos email, cos email",
        emissor: 'adria2@gmail.com',
        destinatari: 'adria2@gmail.com',
        llegit: false
      };
      this.correus = [];
      this.correus.push(correu1);
      this.correus.push(correu2);*/






    }

    ngOnInit(): void {
      /*this.contarLlegits();
      this.contarNoLlegits();*/

      this.sumatori();

    }



  sumatori(){
    return this.contador += 1;
  }







    /*contarLlegits(){
    for (let i = 0; i < this.correus.length; ++i){
      if (this.correus[i].llegit == true)  {
        this.contadorLlegits += 1;
      }
    }
  }
  contarNoLlegits(){
    for (let i = 0; i < this.correus.length; ++i){
      if (this.correus[i].llegit == false)  {
        this.contadorNoLlegits += 1;
      }
    }
  }*/
}
