import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MapComponent } from './map/map.component';
import { CampusComponent } from './campus/campus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'mapa', component: MapComponent },
  { path: 'campus', component: CampusComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
