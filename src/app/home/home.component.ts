import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private modalService: NgbModal) {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
