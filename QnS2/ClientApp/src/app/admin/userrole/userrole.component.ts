import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { UserRoleService } from '../../services/userrole.service';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})

export class UserroleComponent implements OnInit{
  @Input() id;
  @Input() userrole:any[];
  
  roles;
  buttonText:string = "Choose role"
  roleChoosed: any
  original : number
  clicked:boolean = false;

  constructor(public activeModal: NgbActiveModal, private roleService: RoleService) {
    roleService.getAll().subscribe(result => {
      if (result)
        this.roles = result;
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

  deletePost(role){
    console.log(JSON.stringify(role));
    let index = this.userrole.indexOf(role);
    this.userrole.splice(index,1);
    
    if (this.original > 0 || this.userrole.length > 0) this.clicked = true;
    else this.clicked = false;
  }

  chooseRole(role){
    this.buttonText = role.name;
    this.roleChoosed = role;
  }

  addRole(){
    if(this.buttonText != "Choose role")
    {
      if(this.userrole.indexOf(this.roleChoosed) == -1)
      {
        this.userrole.splice(0,0,this.roleChoosed);
        this.clicked = true;
      }      
    }    
  }

  saveSubmit(f)
  {
    if(!(this.original == this.userrole.length))
    {
      alert("sss");
    }
  }
  
  ngOnInit(){
    this.original = this.userrole.length;
  }
}
