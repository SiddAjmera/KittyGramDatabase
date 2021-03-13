import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { UserPost } from './../../models/user-post.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input() userPost: UserPost;
  @Output() purrClick: EventEmitter<UserPost> = new EventEmitter<UserPost>();

  handlePurr() {
    this.purrClick.emit(this.userPost);
  }
}
