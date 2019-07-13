import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('burger') burger: ElementRef;
  @ViewChild('mainnav') navcontent: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen(this.burger.nativeElement, 'click', () => {
      if (this.burger.nativeElement.classList.contains('is-active')) {
        this.renderer.removeClass(this.burger.nativeElement, 'is-active');
        this.renderer.removeClass(this.navcontent.nativeElement, 'is-active');
      } else {
        this.renderer.addClass(this.burger.nativeElement, 'is-active');
        this.renderer.addClass(this.navcontent.nativeElement, 'is-active');
      }
    });
  }
}
