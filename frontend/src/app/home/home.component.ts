import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideShowLength: number = 4;
  currentSlideIndex: number = 0;
  slideDuration: number = 3000;

  constructor() {}

  ngOnInit(): void {
    var slideShow = document.getElementsByClassName("slide");
    
    console.log(this.slideShowLength);
    this.rotateImage();
  }

  rotateImage() {
    if (this.currentSlideIndex + 1 > this.slideShowLength) this.currentSlideIndex = 1;
    else this.currentSlideIndex++;

    setTimeout(this.rotateImage.bind(this), this.slideDuration);
  }
}
