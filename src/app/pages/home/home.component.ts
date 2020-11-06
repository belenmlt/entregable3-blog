import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormDataTransferService } from 'src/app/services/form-data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Object[] = [];

  constructor(private formDataTransferService: FormDataTransferService) { 
    
    // Para hacer que el array de objetos que hemos recogido del Formulario se meta en la propiedad post de esta clase. Así podríamos llamar desde el HTML de Home Comp a esta propiedad e introducir cada dato (title, name, text, etc) en los campos que le indique del HTML.
    this.posts = this.formDataTransferService.getPosts();
    // this.postsInHome(this.posts);
  }

  ngOnInit(): void {}

  // postsInHome(){
  //   this.posts = this.formDataTransferService.posts;
  //   return this.posts
  // }

  // postsInHome(thePosts) {
  //   this.formDataTransferService.getAllPosts(thePosts);
  //   this.posts = thePosts;
  //   console.log(this.posts);
    
  // }

}
