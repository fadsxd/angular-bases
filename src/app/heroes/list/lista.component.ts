import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deleteHero?: string;
  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
    
  }



}
