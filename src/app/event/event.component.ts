import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RSVService } from '../rsv.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  Eventform: FormGroup;
  id: number;
  eventdata: any;
  EventId: any;
  constructor(private fb: FormBuilder, private rsv: RSVService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Eventform = this.fb.group({
      EventId: 0,
      EventName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Organizer: ['', [Validators.required]]
    });
    this.route.params.subscribe(param => {
      console.log(param)
      if (param.id) {
        this.EventId = param.id;
        this.event();
      } else {
        this.eventdata = null;
      }
    }
    )
  }
  event() {
    this.rsv.geteventbyid(this.EventId).subscribe(data => {
      this.eventdata = data['Data'];
      this.Eventform.get("EventId").patchValue(this.eventdata.EventId)
      this.Eventform.get("EventName").patchValue(this.eventdata.EventName)
      this.Eventform.get("location").patchValue(this.eventdata.location)
      this.Eventform.get("Description").patchValue(this.eventdata.Description)
      this.Eventform.get("Organizer").patchValue(this.eventdata.Organizer)
    });
  }
  onSubmit(): void {
    if (this.Eventform.valid && !this.EventId) {

      this.rsv.saveEvent(this.Eventform.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['login-list']);
      })
      this.Eventform.reset();
    }
    else if (this.Eventform.valid && this.EventId) {
      this.rsv.UpdateEvent(this.EventId, this.Eventform.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['login-list']);
      })
    }
  }
  onCancel(): void {
    this.Eventform.reset();
  }
  onBack() {
    this.router.navigate(['Show']);
  }
}
