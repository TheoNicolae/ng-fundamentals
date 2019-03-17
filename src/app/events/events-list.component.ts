import {Component} from '@angular/core';
import {EventService} from '../shared/event.service';
import {OnInit} from '@angular/core';
import {ToastrService} from '../commons/toastr.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
      <app-event-thumbnail (click)="handleThumbnailClick(event.name)"
        [event]="event" ></app-event-thumbnail>
        </div>
      </div>
    </div>`
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
   this.eventService.getEvents().subscribe( events => { this.events = events; } );
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
