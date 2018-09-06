import { RoleService } from './../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../../common/app-error';
import { BadInput } from '../../common/bad-input';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  error;
  id='';
  role: any = { id: '', name: '' };;
  constructor(private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.roleService.get(this.id).pipe(take(1)).subscribe(r => this.role = r);
  }

  ngOnInit() {

  }

  submit(f) {
    if (this.id) {
      this.roleService.update(f.value).subscribe(result => {
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
