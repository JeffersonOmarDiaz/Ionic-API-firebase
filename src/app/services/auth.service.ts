import { Injectable } from '@angular/core';
//importaciones
import {AngularFireAuth} from '@angular/fire/auth';
//importamos el fichero user
import { User } from '../shared/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any =false;

  constructor(public afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user =>(this.isLogged = user));
  }

  //login
async onLogin (user:User){
  try {
    return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  } catch (error) {
    console.log('Error de login user', error);
    
  }
}

  //registro
  async onRegister (user:User){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error de registro', error);
    }
  }
}
