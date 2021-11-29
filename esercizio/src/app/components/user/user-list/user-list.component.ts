import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() inputUsers!: IUser[];
  @Output() outputUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

}
