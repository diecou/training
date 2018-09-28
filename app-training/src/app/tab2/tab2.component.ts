import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FeriadosService } from  '../feriados.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})

export class Tab2Component implements OnInit {
  
  private  feriados:  Array<object> = [];
  constructor(private  feriadosService:  FeriadosService) { }
  ngOnInit() {
      this.getFeriados();
  }
  public  getFeriados(){
      this.feriadosService.getFeriados().subscribe((data:  Array<object>) => {
          this.feriados  =  data;
          console.log(data);
      });
  }

}