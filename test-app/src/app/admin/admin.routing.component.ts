import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../user/home/home.component';
import { AdminComponent } from './admin.component';
import { AdminbookappointmentComponent } from './adminbookappointment/adminbookappointment.component';
import { CancelDisplayComponent } from './cancel-display/cancel-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsDisplayComponent } from './doctors-display/doctors-display.component';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { FeedbackdisplayComponent } from './feedbackdisplay/feedbackdisplay.component';
import { ScheduleDisplayComponent } from './schedule-display/schedule-display.component';

const routes: Routes = [
    {
        path:'admin',component:AdminComponent,
        children:[
            {
                path:'dashboard',component:DashboardComponent
            },
            {path:'scheduledisplay',component:ScheduleDisplayComponent},
            {path:'home',component:HomeComponent},
            {path:'canceldisplay',component:CancelDisplayComponent},
            {path:'doctors',component:DoctorsRegisterComponent},
            {path:'doctorsdisplay',component:DoctorsDisplayComponent},
            {path:'adminbookappointment',component:AdminbookappointmentComponent},
            {path:'feedbackdisplay',component:FeedbackdisplayComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
