import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Sort } from '@angular/material/sort';

import { Router } from '@angular/router';

export interface Users {
    id: number
    name: string
    username: string
    email: string
    phone: string
    address: string
    website: string
    numberOfAlbums: number
}

export interface Dessert {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;

}

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
    desserts: Dessert[] = [
        { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
        { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
        { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
        { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
    ];
    users: Users[] = [];
    sortedData: Dessert[];
    searchValue: string;
    filteredUsers: Users[] = [];
    sortDirection: string = 'asc';

    constructor(private usersService: UsersService, private router: Router) {
        this.searchValue = '';
        this.usersService.getUsers().subscribe(res => {
            this.users = res
            this.filteredUsers = res
        })

        this.sortedData = this.desserts.slice();

    }

    openUserComments(id: number) {
        this.router.navigate(['users-table', 'comment', id])
    }

    sortData() {
        const direction = this.sortDirection === 'asc' ? 1 : -1;
        this.filteredUsers.sort((a, b) => {
            return a.name.localeCompare(b.name) * direction;
        });
    }

    toggleSortDirection() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortData();
    }

    filterUsers() {
        if (this.searchValue.trim() === '') {
            this.filteredUsers = this.users;
        } else {
            this.filteredUsers = this.users.filter(user =>
                user.name.toLowerCase().includes(this.searchValue.toLowerCase())
            );
        }
    }

    filterPosts() {
        if (this.searchValue.trim() === '') {
            this.filteredUsers = this.users;
        } else {
            this.filteredUsers = this.users.filter(user =>
                user.name.toLowerCase().includes(this.searchValue.toLowerCase())
            );
        }
    }

    ngOnInit(): void {
    }

    sortData2(sort: any) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    return compare(a.name, b.name, isAsc);
                default:
                    return 0;
            }
        });
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

