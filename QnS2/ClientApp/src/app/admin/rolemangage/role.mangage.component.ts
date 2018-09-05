import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';

@Component({
  selector: 'app-role.mangage',
  templateUrl: './role.mangage.component.html',
  styleUrls: ['./role.mangage.component.css']
})
export class RoleMangageComponent implements OnInit {

  roles: any
  error:string
  constructor(private roleService: RoleService) {
    roleService.getAll().subscribe(result => {
      if (result)
        this.roles = result;
      //else
        //this.invalidLogin = true;
    },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          //this.invalidLogin = true;
          this.error = error.originalError;
        }
        else throw error;
      });
  }

  ngOnInit() {

  }

}
