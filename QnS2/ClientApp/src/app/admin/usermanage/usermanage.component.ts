import { AdminUserService } from './../../services/admin.user.service';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Router } from '@angular/router';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { user } from '../../Models/user.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserroleComponent } from '../userrole/userrole.component';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.css']
})
export class UsermanageComponent implements OnInit {
  users: user[]
  error: string
  constructor(private adminService: AdminUserService,
    private roleService: RoleService,
    private router: Router,
    private modalService: NgbModal) { }

  get() {
    this.adminService.getAll().subscribe(result => {
      if (result)
        this.users = result as user[];
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

  delete(id) {
    if (!confirm('Are you sure want to delete this role?')) return;
    this.adminService.delete(id).subscribe(result => {
      if (result) { }
      //this.roles = result;
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
    this.router.navigate(['/admin/roles']);
  }

  editRole(iduser, r) {
    const modalRef = this.modalService.open(UserroleComponent);
    modalRef.componentInstance.userrole = JSON.parse(JSON.stringify(r));
    modalRef.componentInstance.id = iduser;
    modalRef.result.then((result) => {
      let closeResult = result;
      if (closeResult === 'Save') this.get();
    }, (reason) => { });
  }

  ngOnInit() {
    this.get();
  }
}
