import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataTransferService } from 'src/app/services/form-data-transfer.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForm: FormGroup;
  allPosts: Object[] = [];

  constructor(private postFb: FormBuilder,
              private formDataTransferService: FormDataTransferService,
              private router: Router) { 
    this.createPostForm();
  }

  ngOnInit(): void { }

  get invalidName(): boolean {
    return this.postForm.get("name").invalid && this.postForm.get("name").touched;
  }

  get invalidTitle(): boolean {
    return this.postForm.get("title").invalid && this.postForm.get("title").touched;
  }

  get invalidImage(): boolean {
    return this.postForm.get("image").invalid && this.postForm.get("image").touched;
  }
  
  get invalidText(): boolean {
    return this.postForm.get("text").invalid && this.postForm.get("text").touched;
  }

  get tags(): FormArray {
    return this.postForm.get("tags") as FormArray;
  }

  createPostForm(): void {
    this.postForm = this.postFb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      image: ["", Validators.required],
      text: ["",[Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
      tags: this.postFb.array([])
    });
  }

  // Event onclick submit
  savePostForm(): void {
    if (this.postForm.status === "INVALID") {
      alert("Por favor, rellena los campos requeridos para hacer la publicación.");
    } else {

      console.log("Todo bien");
      this.transfer();
      this.postForm.reset();
      this.router.navigateByUrl("/home")

      // console.log("ALL POSTS desde POST Comp", this.addPosts()); 
      
    }
  }

  addTag(): void {    
    this.tags.push(this.postFb.control(""));
  }

  deleteTag(id: number): void {
    this.tags.removeAt(id);
  }

  // Take form to Service
  transfer(){
    this.formDataTransferService.addElement(this.postForm)
  }

}