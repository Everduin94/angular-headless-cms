import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  user$;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user$ = afAuth.authState;
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigate(['/']);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }
}
