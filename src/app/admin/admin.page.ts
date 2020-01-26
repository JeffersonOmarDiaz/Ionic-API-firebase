import { Component, OnInit } from '@angular/core';
//importaciones para ver si esta o no logueado y volever al home
//importacoines para el login
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../shared/user.class";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  user : User = new User;
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }
  async onLogin(){
      console.log('Regreso con exito');
      window.history.back();
  }

}
