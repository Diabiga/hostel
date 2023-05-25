import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginModalContent', { static: false }) loginModalContent!: ElementRef;

  constructor(private modalService: NgbModal) {}

  openModal(): void {
    this.modalService.open(this.loginModalContent);
  }
  
}
