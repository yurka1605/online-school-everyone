import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib-ui-lib',
  template: `
    <p>
      ui-lib good works!
    </p>
  `,
  styles: [
  ]
})
export class UiLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    return;
  }

}
