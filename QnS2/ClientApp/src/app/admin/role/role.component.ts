import { RoleService } from './../../services/role.service';
import { Component, OnInit, Input } from '@angular/core';
import { AppError } from '../../common/app-error';
import { BadInput } from '../../common/bad-input';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { role } from '../../Models/role.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  error;
  id='';
  rolw;
  @Input() mode:boolean
  @Input() original: role = { id: '', name: '' };
  role: role = { id: '', name: '' };
  constructor(private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal) {
/*     this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.roleService.get(this.id).pipe(take(1)).subscribe(r => this.role = r as role); */
  }

  ngOnInit() {
    if (this.original == null) this.role = { id: '', name: '' };
    else this.role = JSON.parse(JSON.stringify(this.original));
  }

  submit(f) {
    if (this.mode) {
      this.roleService.update('',f.value).subscribe(result => {
        alert("success!!!");
        this.activeModal.dismiss();
      });
    }
    else {
      this.roleService.create(f.value).subscribe(result => {

      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.error = error.originalError;
          }
          else throw error;
        });
    }
    this.router.navigate(['/admin/roles'])
  }
}
