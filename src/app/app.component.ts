import { Component, OnInit } from '@angular/core';
// import { foo } from 'src/angular';

export const obj = {
  a: 10
}

export namespace obb {
  export const a = 10;
  export function hi() {

  }
}
// 轉換
// export var obb;
// (function (obb) {
//     obb.a = 10;
//     function hi() {
//     }
//     obb.hi = hi;
// })(obb || (obb = {}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'intro-storybook-angular-template';

  ngOnInit(): void {
    // let cat = new Animal('Tom');
    // jQuery('test');
    // jQuery = (selector) => {
    //   return document.querySelector(selector);
    // };
    // console.log(jQuery('#app'))
    // jQuery('hi')
    // $('test')
    // console.log((window as any).ga)

    // Nestable('sss');
    // foo.bar
  }
}
