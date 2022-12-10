import { Component } from '@angular/core';
import { RegisterService } from 'src/app/shared/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-useradminlogin',
  templateUrl: './useradminlogin.component.html',
  styleUrls: ['./useradminlogin.component.css']
})
export class UseradminloginComponent {
  loginForm!: FormGroup;
  constructor(public auth:RegisterService, private fb: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      AName: ['',Validators.required],
      Password: ['',Validators.required]
    })
  }
  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.adminlogin(this.loginForm.value).subscribe({
        next:(res)=>{
          // alert("Login Success!!");
          Swal.fire('Log In Successful!!!','','success')
          this.loginForm.reset();
          this.router.navigate(['/admin/scheduledisplay'])
        },
        error:(err)=>{
          // alert(err?.error.message);
          Swal.fire('Invalid Credentials','','warning')
        }
      })
    }
    else{
      alert("Unsuccessful");
    }
  }
}
