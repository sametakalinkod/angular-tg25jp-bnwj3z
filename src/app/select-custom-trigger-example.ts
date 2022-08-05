import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  data = ['2009-2010', '2010-2011', '2011-2012'];
  value = new FormControl();
  delete(event: any, year: any) {
    console.log(year);
    event.preventDefault();
    event.stopPropagation();
    // this.data=this.data.filter(x=>x!=year)
    if (this.value.value == year) this.value.setValue(null);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
