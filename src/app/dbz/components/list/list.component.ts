import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onNewDeleteCharacter: EventEmitter<number>= new EventEmitter();
  @Output()
  public onNewDeleteCharacter: EventEmitter<string>= new EventEmitter();

  @Input()
  public characterList : Character[] = [{name:'Trunks',power:10}]

  // onDeleteId( id:number):void{
  //   this.onNewDeleteCharacter.emit(id);
    onDeleteId( id?:string):void{

      if (!id) return;

      this.onNewDeleteCharacter.emit(id);
  }

  // onDeleteCharacter(index: number):void{
  //   console.log({index});
  onDeleteCharacter(index: string):void{
      console.log({index});

  }
}
