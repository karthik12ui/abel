import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskIssueComponent } from './task-issue.component';
import {TaskIssueRoutingModule} from './task-issue-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    TaskIssueRoutingModule,
    SharedModule,
    HttpModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TaskIssueComponent]
})
export class TaskIssueModule { }
