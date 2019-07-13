import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  async login(email: string, password: string) {
    try {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      return Promise.reject(false);
    }
  }

  async signUp(email: string, password: string) {
    console.dir(email);
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      const acc = this.afs.collection<any>(`accounts`);
      const data = {
        email: email,
        password: password
      }
      return acc.add(data);
    } catch (e) {
      return Promise.reject(false);
    }
  }

  async gLogin() {
    try {
      const provider = new auth.GoogleAuthProvider();
      const usr = await this.afAuth.auth.signInWithPopup(provider);
      const acc = this.afs.doc<any>(`accounts/${usr.user.uid}`);
      const data = {
        uid: usr.user.uid,
        email: usr.user.email,
        displayName: usr.user.displayName,
        photoURL: usr.user.photoURL
      }
      return acc.get().toPromise().then(doc => {
        if (!doc.exists) {
          return acc.set(data, { merge: true });
        } 
        return Promise.resolve(false) as any;
      }
      ).catch(err => {
        return Promise.reject(false);
      });
    } catch (e) {
      return Promise.reject(false);
    }
  }

  async signout() {
    await this.afAuth.auth.signOut();
  }
}
