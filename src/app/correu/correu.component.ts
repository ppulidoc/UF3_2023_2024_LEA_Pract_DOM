import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correu',
  templateUrl: './correu.component.html',
  styleUrls: ['./correu.component.css']
})
export class CorreuComponent implements OnInit{

  correu: any;
  titleWords: any;

  constructor() {
    this.correu = {
      titol: "Aquest es el titol que vull contar",
      cos: "Lorem ipusm bla bla bla",
      emissor: "paupulido@gmail.com",
      receptor: "paupulidorecep@gmail.com"
    }

    this.titleWords = "Té " + this.correu.titol.length+" lletres";
  }

  ngOnInit(): void {

  }



}
