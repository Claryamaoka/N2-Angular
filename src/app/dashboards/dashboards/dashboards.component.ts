import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {
  produtos = [
    {
      nome: "Cereal Nestle",
      acesso: 10
    },
    {
      nome: "Caixa Chocolate",
      acesso: 9
    },
    {
      nome: "Sabonete",
      acesso: 8
    },
    {
      nome: "Arroz Branco",
      acesso: 7
    },
    {
      nome: "Queijo branco",
      acesso: 6
    },
    {
      nome: "Presunto",
      acesso: 5
    },
    {
      nome: "Achocolatado",
      acesso: 4
    },
    {
      nome: "Vinagre",
      acesso: 3
    },
    {
      nome: "Pão",
      acesso: 2
    },
    {
      nome: "Maçã",
      acesso: 1
    },
  ];

  token: any

  constructor() { 
    
  }

  ngOnInit(){
   this.token = localStorage.getItem("token");
  }

}
