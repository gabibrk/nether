import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersTableComponent} from './users-table.component';
import { CommentsComponent } from '../comments/comments.component';

const routes: Routes = [
    {path: '', component: UsersTableComponent},
    
    { path: 'comment/:id', component: CommentsComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersTableRoutingModule {}
