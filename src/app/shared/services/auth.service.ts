import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, take, map, tap } from 'rxjs/operators';
import { auth } from 'firebase';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user$ = new BehaviorSubject<User>(null);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: Router
  ) {
    this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.isLoggedIn$.next(true);
          this.user$.next(user);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          this.isLoggedIn$.next(false);
          this.user$.next(null);
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    if (credential.user) {
      this.isLoggedIn$.next(true);
      this.user$.next(credential.user);
    }
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.isLoggedIn$.next(false);
    this.user$.next(null);
    return this.route.navigate(['/login']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }
}