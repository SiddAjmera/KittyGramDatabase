import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserPost } from './../../models/user-post.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private userPostsCollection: AngularFirestoreCollection<UserPost>;
  userPosts$: Observable<UserPost[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.userPostsCollection = afs.collection<UserPost>('user-posts');
    this.userPosts$ = this.userPostsCollection.valueChanges({ idField: 'id' });
  }

  addUserPost(userPost: UserPost): Observable<DocumentReference> {
    return from(this.userPostsCollection.add(userPost));
  }

  updatePost(userPost: UserPost): Observable<void> {
    return from(
      this.afs.doc<UserPost>(`user-posts/${userPost.id}`).update({
        purrs: ++userPost.purrs,
      }),
    );
  }
}
