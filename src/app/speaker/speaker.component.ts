import { Component, OnInit } from '@angular/core';
import { RSVService } from '../rsv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  Speakerform: FormGroup;
  SessionList: any;
  SpeakerId: any;
  Speakerdata: any;
  constructor(private fb: FormBuilder, private rsv: RSVService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Speakerform = this.fb.group({
      SessionId: 0,
      SpeakerId: 0,
      SpeakerName: ['', [Validators.required]]
    });
    this.GetSessionList();
    this.route.params.subscribe(param => {
      console.log(param)
      if (param.id) {
        this.SpeakerId = param.id;
        this.Session();
      } else {
        this.Speakerdata = null;
      }
    })
  }
  Session() {
    this.rsv.getspeakerbyid(this.SpeakerId).subscribe(data => {
      this.Speakerdata = data['Data'];
      this.Speakerform.get("SpeakerId").patchValue(this.Speakerdata.SpeakerId)
      this.Speakerform.get("SessionId").patchValue(this.Speakerdata.SessionId)
      this.Speakerform.get("SpeakerName").patchValue(this.Speakerdata.SpeakerName)
    });
  }
  GetSessionList() {
    this.rsv.GetSessionList().subscribe((data) => {
      this.SessionList = data['Data'];
      console.log(this.SessionList)
    })
  }
  onSubmit() {
    if (this.Speakerform.valid && !this.SpeakerId) {
      // this.eventdata.push(this.Eventform.value);
      // console.log(this.eventdata);
      this.rsv.saveSpeaker(this.Speakerform.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['login-list']);
      })
      this.Speakerform.reset();
    }
    else if (this.Speakerform.valid && this.SpeakerId) {
      this.rsv.UpdateSpeaker(this.SpeakerId, this.Speakerform.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['login-list']);
      })
    }

  }
  onCancel(): void {
    this.Speakerform.reset();
  }
  onBack() {
    this.router.navigate(['Show']);
  }
}
