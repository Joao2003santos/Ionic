import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

cep: string = "";
estado: string = "";
cidade: string = "";
bairro: string = "";
logradouro: string = "";

  constructor() { }

  ngOnInit() {
  }

  buscarEndereco(){
   if(this.cep == ""){
     alert("Digite um CEP!")
   }
  }

}
