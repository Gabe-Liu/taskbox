import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';

const components = [
  TaskComponent,
  TaskListComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
