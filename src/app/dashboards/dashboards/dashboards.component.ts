import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {
  produtos = [
    {
      nome: "Produto1",
      acesso: 10
    },
    {
      nome: "Produto2",
      acesso: 9
    },
    {
      nome: "Produto3",
      acesso: 8
    },
    {
      nome: "Produto4",
      acesso: 7
    },
    {
      nome: "Produto5",
      acesso: 6
    },
    {
      nome: "Produto6",
      acesso: 5
    },
    {
      nome: "Produto7",
      acesso: 4
    },
    {
      nome: "Produto8",
      acesso: 3
    },
  ]
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
