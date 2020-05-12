import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {DeleteProjectComponent} from './components/delete-project/delete-project.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {DontSavedComponent} from './components/dont-saved/dont-saved.component';
import {AadProjectLocationComponent} from './components/aad-project-location/aad-project-location.component';
import {ProjectModule} from './components/project/project.module';
import {ProjectListComponent} from './components/project-list/project-list.component';
import {HttpProjectService} from './services/impl/http-project.service';
import {ProjectService} from './services/project.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    AadProjectLocationComponent,
    DeleteProjectComponent,
    DontSavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ProjectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [
    [{provide: ProjectService, useClass: HttpProjectService}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
