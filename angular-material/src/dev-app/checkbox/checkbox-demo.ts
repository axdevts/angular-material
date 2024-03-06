/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';


export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  moduleId: module.id,
  selector: 'mat-checkbox-demo-nested-checklist',
  styles: [`
    li {
      margin-bottom: 4px;
    }
  `],
  templateUrl: 'nested-checklist.html',
})
export class MatCheckboxDemoNestedChecklist {
  tasks: Task[] = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        {name: 'Cook Dinner', completed: false},
        {name: 'Read the Material Design Spec', completed: false},
        {name: 'Upgrade Application to Angular', completed: false}
      ]
    },
    {
      name: 'Groceries',
      completed: false,
      subtasks: [
        {name: 'Organic Eggs', completed: false},
        {name: 'Protein Powder', completed: false},
        {name: 'Almond Meal Flour', completed: false}
      ]
    }
  ];

  allComplete(task: Task): boolean {
    const subtasks = task.subtasks;

    return task.completed || (subtasks != null && subtasks.every(t => t.completed));
  }

  someComplete(tasks: Task[]): boolean {
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    tasks.forEach(t => t.completed = completed);
  }
}

@Component({
  moduleId: module.id,
  selector: 'mat-checkbox-demo',
  templateUrl: 'checkbox-demo.html',
  styleUrls: ['checkbox-demo.css'],
})
export class CheckboxDemo {
  isIndeterminate: boolean = false;
  isChecked: boolean = false;
  isDisabled: boolean = false;
  labelPosition: string = 'after';
  useAlternativeColor: boolean = false;

  printResult() {
    if (this.isIndeterminate) {
      return 'Maybe!';
    }
    return this.isChecked ? 'Yes!' : 'No!';
  }

  checkboxColor() {
    return this.useAlternativeColor ? 'primary' : 'accent';
  }
}
