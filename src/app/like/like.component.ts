import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isActive: boolean = false;
  @Input('likesCount') likesCount: number = 10;
  onClicked() {
    this.isActive = !this.isActive;
    if (this.isActive)
      this.likesCount++;
    else
      this.likesCount--;
    //console.log(this.isActive, this.likesCount);
  }
}
