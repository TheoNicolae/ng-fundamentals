import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './error/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';


export const appRoutes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id' , component: EventDetailsComponent , canActivate: [EventRouteActivatorService]},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];
