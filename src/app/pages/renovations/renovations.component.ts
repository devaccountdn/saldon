import { Component } from '@angular/core';

@Component({
  selector: 'app-renovations',
  templateUrl: './renovations.component.html',
  styleUrls: ['./renovations.component.scss']
})
export class RenovationsComponent {
  ngAfterViewInit(): void {
    this.startAutoplay();
  }

  startAutoplay(): void {
    const carousel = document.querySelector('.carousel');
    const interval = 3000; // Change this to adjust the interval

    setInterval(() => {
      if (carousel) {
        const activeSlide = carousel.querySelector('.carousel-item.active');
        const nextSlide = activeSlide?.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
        activeSlide?.classList.remove('active');
        nextSlide?.classList.add('active');
      }
    }, interval);
  }
}
