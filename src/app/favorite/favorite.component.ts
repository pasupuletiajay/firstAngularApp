import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean = false;//is-favorite is alias
  @Output('Change') change = new EventEmitter();//Change is alias
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
