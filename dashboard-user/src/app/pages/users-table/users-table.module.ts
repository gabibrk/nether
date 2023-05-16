import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersTableRoutingModule} from './users-table-routing.module';
import {UsersTableComponent} from './users-table.component';
import { CommentsComponent } from '../comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UsersTableComponent, CommentsComponent],
    imports: [CommonModule, UsersTableRoutingModule,  CommonModule,
        FormsModule,
        ReactiveFormsModule]
})
export class UsersTableModule {}
