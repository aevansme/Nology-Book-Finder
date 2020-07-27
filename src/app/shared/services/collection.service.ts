import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private afs: AngularFirestore, private authSvc: AuthService) { }

  addOrUpdateCollection(book): Promise<void> {
    const userId = this.authSvc.user$.value.uid;
    const collectionRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${userId}/collection/${book.id}`);

    return collectionRef.set(book, { merge: true });
  }

  getUserCollection(userId): Observable<any> {
    const collectionRef: AngularFirestoreCollection<any> = this.afs.collection(`user/${userId}/collection`);

    return collectionRef.get()
  }
}
