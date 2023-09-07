import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public heroNames : string[] = ['Spiderman','Iroman','She Hulk', 'Thor'];
    public deletehero?:string;

    removeLastHero():void{
      this.deletehero = this.heroNames.pop();
      //console.log(deleteHero);
    }
}
