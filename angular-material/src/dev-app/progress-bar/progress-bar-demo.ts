/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';


// TODO(josephperrott): Add an automatically filling example progress bar.

@Component({
  moduleId: module.id,
  selector: 'progress-bar-demo',
  templateUrl: 'progress-bar-demo.html',
  styleUrls: ['progress-bar-demo.css'],
})
export class ProgressBarDemo {
  color: string = 'primary';
  determinateProgressValue: number = 30;
  determinateAnimationEndValue: number;
  bufferAnimationEndValue: number;
  bufferProgressValue: number = 30;
  bufferBufferValue: number = 40;

  stepDeterminateProgressVal(val: number) {
    this.determinateProgressValue = this.clampValue(val + this.determinateProgressValue);
  }

  stepBufferProgressVal(val: number) {
    this.bufferProgressValue = this.clampValue(val + this.bufferProgressValue);
  }

  stepBufferBufferVal(val: number) {
    this.bufferBufferValue = this.clampValue(val + this.bufferBufferValue);
  }

  private clampValue(value: number) {
    return Math.max(0, Math.min(100, value));
  }
}
