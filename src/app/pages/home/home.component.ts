import { Component, OnInit } from '@angular/core';
import { FormDataTransferService } from 'src/app/services/form-data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formDataTransferService: FormDataTransferService) { }
  
  posts: any = this.formDataTransferService.getPosts();

  ngOnInit(): void {}


}