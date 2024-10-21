import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RSVService } from '../rsv.service';
@Component({
  selector: 'app-calendardemo',
  templateUrl: './calendardemo.component.html',
  styleUrls: ['./calendardemo.component.css']
})
export class CalendardemoComponent implements OnInit {
  form1: FormGroup;
  userdata: any[] = [];
  entry: any;
  id: number;
  loginList: any;
  Data: any;
  isEdit: boolean = false;
  constructor(private fb: FormBuilder, private rsv: RSVService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form1 = this.fb.group({
      id: 0,
      UserName: ['', [Validators.required, Validators.minLength(10)]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    if (this.userdata.length > 0) {
      this.userdata = this.userdata.filter(item => item !== null);
    }
    if (this.form1.valid) {
      // this.userdata.push(this.form1.value);
      // console.log(this.userdata);
      this.rsv.saveLogin(this.form1.value).subscribe((data) => {
        // conssole.log(data.Result);

      })
      this.form1.reset();
    }
    this.router.navigate(['Show']);
  }

  onCancel(): void {
    this.form1.reset();
  }

}
