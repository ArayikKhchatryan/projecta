import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {NotFoundComponent} from '../not-found/not-found.component';
import {ProjectComponent} from './project.component';
import {ClassifierServiceService} from '../../services/classifier-service.service';


@NgModule({
  declarations: [ProjectComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [ClassifierServiceService],
})
export class ProjectModule {
}
