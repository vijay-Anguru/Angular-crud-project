import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RSVService } from '../rsv.service';
@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
  eventList: any;
  SessionList: any;
  SpeakerList: any;
  Ids: any;
  id: number;
  UserName: any;
  Password: any;
  eventMap: {};
  sessionMap: {};
  constructor(private rsv: RSVService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.GetEventList();
    this.GetSessionList();
    this.GetSpeakerList();
  }
  // GetEventList() {
  //   this.rsv.GetEventList().subscribe(data => {
  //     if (data) {
  //       this.eventList = data['Data'];
  //       console.log(this.eventList);
  //     }
  //     console.log(data);
  //   });
  // }
  GetEventList() {
    this.rsv.GetEventList().subscribe(data => {
      if (data) {
        this.eventList = data['Data'];

        this.eventMap = {};
        this.eventList.forEach(event => {
          this.eventMap[event.EventId] = event.EventName;
        });
        console.log(this.eventMap);
      }
    });
  }

  // GetSessionList() {
  //   this.rsv.GetSessionList().subscribe(data => {
  //     if (data) {
  //       this.SessionList = data['Data'];
  //       console.log(this.SessionList);
  //     }
  //     console.log(data);
  //   });
  // }
  GetSessionList() {
    this.rsv.GetSessionList().subscribe(data => {
      if (data) {
        this.SessionList = data['Data'];

        this.sessionMap = {};
        this.SessionList.forEach(session => {
          this.sessionMap[session.SessionId] = session.SessionName;
        });
        console.log(this.sessionMap);
      }
    });
  }
  GetSpeakerList() {
    this.rsv.GetSpeakerList().subscribe(data => {
      if (data) {
        this.SpeakerList = data['Data'];
        console.log(this.SpeakerList);
      }
      console.log(data);
    });
  }

  delete(id): void {
    this.rsv.deleteEvent(id).subscribe(data => {
      console.log(data);
      this.GetEventList();
      this.GetSessionList();
      this.GetSpeakerList();
    })
    console.log('Delete id:', id);
  }
  deleteSession(id): void {

    this.rsv.deleteSession(id).subscribe(data => {
      console.log(data);
      this.GetEventList();
      this.GetSessionList();
      this.GetSpeakerList();
    })
    console.log('Delete id:', id);

  }
  deleteSpeaker(id): void {
    this.rsv.deleteSpeaker(id).subscribe(data => {
      console.log(data);
      this.GetEventList();
      this.GetSessionList();
      this.GetSpeakerList();
    })
    console.log('Delete id:', id);

  }
  onBack() {
    this.router.navigate(['Show']);
  }

}
