import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('loginModalContent', { static: false }) loginModalContent!: ElementRef;
  @ViewChild('registerModalContent', { static: false }) registerModalContent!: ElementRef;
  modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  openModal1() {
    this.modalRef = this.modalService.open(this.loginModalContent);
  }
  openModal2() {
    this.modalRef = this.modalService.open(this.registerModalContent);
  }
  closeModal() {
    this.modalRef.close();
  }



  
}
