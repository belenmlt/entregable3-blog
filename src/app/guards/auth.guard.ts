import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor ( private auth: AuthService,
                private router: Router ) {}

  canActivate(): boolean {

    if (this.auth.isAuth()) {
      console.log("Acceso correcto");
      return true;
  
    } else {
      console.log("Acceso denegado");
      this.router.navigateByUrl("/login");
      // mandamos al usuario al login si es acceso es denegado
      return false
    }
    
    // console.log("Acceso permitido");
    // return true;
  }
  
}

// Se genera en l aTerminal ng g guard guards/auth
// elegimos canActivate
//  canActivate llama al servicio para comporbar si en el localstorage tenemos almacenado true o el token, con la respuesta que recibamos ya sabemos si la respuesta es o no correcta y si se nos permite acceder o no a la ruta.
