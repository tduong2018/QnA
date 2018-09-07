import { RoleComponent } from './../role/role.component';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role.mangage',
  templateUrl: './role.mangage.component.html',
  styleUrls: ['./role.mangage.component.css']
})
export class RoleMangageComponent implements OnInit {

  roles: any
  error: string
  constructor(private roleService: RoleService, private router: Router, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.get();
  }

  get(){
    this.roleService.getAll().subscribe(result => {
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

  delete(id) {
    if (!confirm('Are you sure want to delete this role?')) return;
    this.roleService.delete(id).subscribe(result => {
      this.get();
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

  editRole(mode,role){
    const modalRef = this.modalService.open(RoleComponent);
    modalRef.componentInstance.original = role;
    modalRef.componentInstance.mode = mode;
  }
}
