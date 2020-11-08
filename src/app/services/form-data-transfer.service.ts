import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataTransferService {

  allPosts = [];

  constructor() {
    this.allPosts = [];
    console.log('VIENE DEL SERVICIO', this.allPosts);

  }

  // Add object Value de Form a array de objetos allPosts
  addElement(postForm: FormGroup) {
    this.allPosts.push(postForm.value);
    console.log(this.allPosts);
  }

  // Para llamar a esta función desde Home Comp
  getPosts() {
    return this.allPosts;

  }

}