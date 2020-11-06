import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataTransferService {

  allPosts = [
    // {
    //   name:"asd",
    //   title:"sdf",
    //   image:"dsfdg",
    //   text:"sdfsd",
    //   tags:"sdffs"
    // }

  ];

  constructor( ) { }

  // Recoger Publicaciones de PostComp
  // getAllPosts(allPosts: Object[]) {
  //   this.posts = allPosts;
  //   console.log("POSTS DESDE SERVICIO", this.posts);

  //   return this.posts
  
  // }


  // Add object Value de Form a array de objetos allPosts
  addElement(postForm: FormGroup) {
    this.allPosts.push(postForm.value);
    console.log(this.allPosts);
  }

  // Para llamar a esta función desde Home Comp
  getPosts() {
    return this.allPosts;

  }

  // 1. Crear nuevo método en el Servicio para utilizarlo desde Componente Post para recoger todas las publicaciones
  // 2. Utilizar método del Servicio en Componente Post pasando allPosts como parámetro
  // 3. Utilizar método del Servicio en Componente Home 

  // le pasamos por parámetro la info que queremos que use del componente.
  // almacenar las publicaciones que se crean en el formulario.
  // si creo aquí un método y llamo a ese método en Post o Home.... aún así no sé cómo se recoge esa info para pasarla a Home
}
