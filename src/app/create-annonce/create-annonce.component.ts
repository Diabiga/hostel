import { Component,OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { pipe } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent {
  fileName!:File;
  addForm!:FormGroup;
  progress:number=0;
  msgs:any;

  constructor(private formBuilder:FormBuilder ,
 
    private router: Router,
    private http: HttpClient,
    public  dialog: MatDialog
    ){}


    ngOnInit(){
      this.addForm= this.formBuilder.group({

        contact_name:['',Validators.required],
        email:['',Validators.required],
        message:['',Validators.required],
        cv:[null,[]],


      });}


      uploadFile(event:any){

        this.fileName = event.target.files? event.target.files[0]:'';


      }

      onSubmit(){
     

      }}
