import { Component, OnInit } from '@angular/core';
import { RSVService } from '../rsv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  Sessionform: FormGroup;
  EventList: any[] = [];
  SessionId: any;
  Sessiondata: any;
  constructor(private fb: FormBuilder, private rsv: RSVService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Sessionform = this.fb.group({
      SessionId: 0,
      EventId: 0,
      SessionName: ['', [Validators.required]]
    });
    this.GetEventList();
    this.route.params.subscribe(param => {
      console.log(param)
      if (param.id) {
        this.SessionId = param.id;
        this.Session();
      } else {
        this.Sessiondata = null;
      }
    })
  }
  Session() {
    this.rsv.getsessionbyid(this.SessionId).subscribe(data => {
      this.Sessiondata = data['Data'];
      this.Sessionform.get("SessionId").patchValue(this.Sessiondata.SessionId)
      this.Sessionform.get("EventId").patchValue(this.Sessiondata.EventId)
      this.Sessionform.get("SessionName").patchValue(this.Sessiondata.SessionName)
    });
  }
  GetEventList() {
    this.rsv.GetEventList().subscribe((data) => {
      this.EventList = data['Data'];
      console.log(this.EventList)
    })
  }
  onSubmit() {
    if (this.Sessionform.valid && !this.SessionId) {
      // this.eventdata.push(this.Eventform.value);
      // console.log(this.eventdata);
      this.rsv.saveSession(this.Sessionform.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['login-list']);
      })
      this.Sessionform.reset();
    }
    else if (this.Sessionform.valid && this.SessionId) {
      this.rsv.UpdateSession(this.SessionId, this.Sessionform.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['login-list']);
      })
    }
  }
  onCancel(): void {
    this.Sessionform.reset();
  }
  onBack() {
    this.router.navigate(['Show']);
  }
}
