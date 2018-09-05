import { RoleService } from './../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../../common/app-error';
import { BadInput } from '../../common/bad-input';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  error
  constructor(private roleService:RoleService) { }

  ngOnInit() {

  }
  submit(f)
  {
    this.roleService.create(f.value).subscribe(result => { 
       
    },
    (error: AppError) => {
      if (error instanceof BadInput) {
        this.error = error.originalError;
      }
      else throw error;
    });
  }
}
