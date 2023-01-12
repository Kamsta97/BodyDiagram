import { Component, HostListener, OnInit } from '@angular/core';

const RIGHTARROW_CODE = 39;
const ENTER_CODE = 13;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === RIGHTARROW_CODE) {
        if(this.activeElement === null || this.activeElement === undefined) {
          this.activeElement = document.getElementsByClassName('head')[0];
          this.activeElement.classList.toggle("is-active");
        } else {
          this.activeElement.classList.toggle("is-active");
          let nextIndex = this.activeIndex + 1;
          if(nextIndex >= this.elements.length) {
            nextIndex = 0;
          }
          this.activeIndex = nextIndex;
          this.activeElement = document.getElementsByClassName(this.elements[nextIndex])[0];
          this.activeElement.classList.toggle("is-active");
        }
    }
    if (event.keyCode === ENTER_CODE) {
      console.log("Enter is cliced")
      if(this.activeElement !== null && this.activeElement !== undefined) {
        this.activeElement.classList.toggle("is-selected");
      }
    }
  }

  

  selected: string[] = [];
  title = 'pointers';
  activeElement: any;
  activeIndex: number = 0;
  elements = ['head', 'armR', 'armL']

  selectPart(part: any, el: any) {
    this.activeElement = el;
    if(this.selected.indexOf(part) > -1) {
      this.removeElementFromStringArray(part);
      el.classList.toggle("is-active");
      el
    } else {
      this.selected.push(part);
      el.classList.toggle("is-active");
    }

    console.log(this.selected);
  }

  showMsg(part:any) {
    console.log(part);
  }

  makeActive(part: string, event: KeyboardEvent): void {
    console.log(event.key);
    if (event.keyCode === 13) {
        console.log(part);
    }
  }



  removeElementFromStringArray(element: string) {
    this.selected.forEach((value,index)=>{
        if(value==element) this.selected.splice(index,1);
    });
}
}
