import { role } from '../../Models/role.interface';
import { AdminUserService } from './../../services/admin.user.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})

export class UserroleComponent implements OnInit {
  @Input() id;
  @Input() userrole: role[];

  roles: role[];
  buttonText: string = "Choose role"
  roleChoosed: role
  original: number
  clicked: boolean = false;

  constructor(public activeModal: NgbActiveModal, private roleService: RoleService, private adminUserService: AdminUserService) {
    roleService.getAll().subscribe(result => {
      if (result)
        this.roles = result as role[];
      //inform
      //else
      //this.invalidLogin = true;
    },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          //this.invalidLogin = true;
          //this.error = error.originalError;

        }
        else throw error;
      });
    //console.log(this.id);
  }

  deletePost(role) {
    console.log(JSON.stringify(role));
    let index = this.userrole.indexOf(role);
    this.userrole.splice(index, 1);

    if (this.original > 0 || this.userrole.length > 0) this.clicked = true;
    else this.clicked = false;
  }

  chooseRole(role) {
    this.buttonText = role.name;
    this.roleChoosed = role;
  }

  addRole() {
    if (this.buttonText != "Choose role") {
      var idL = this.userrole.map(x=>x.id);
      if (idL.indexOf(this.roleChoosed.id) === -1) {
        this.userrole.splice(0, 0, this.roleChoosed);
        this.clicked = true;
      }
    }
  }

  saveSubmit(f) {
    if (!(this.original == this.userrole.length)) {
      // At present we use function update to just for role ***************
      this.adminUserService.update(this.id, this.userrole).subscribe(result => {
        if (result)
        {
          alert("success!");
          this.clicked = false;
        }
          
        //inform
        //else
        //this.invalidLogin = true;
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            //this.invalidLogin = true;
            //this.error = error.originalError;

          }
          else throw error;
        });
    }
  }

  ngOnInit() {
    this.original = this.userrole.length;
  }
}
