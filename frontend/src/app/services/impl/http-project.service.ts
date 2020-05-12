import {ProjectService, Response} from '../project.service';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpProjectService extends ProjectService {

  constructor(private http: HttpClient) {
    super();
  }

  a: string = '5';

  addProject(project: ProjectModel): Observable<Response> {
    return this.http.post<Response>(`http://localhost:8080/projects`, project);
  }

  deleteProjectById(id: number): Observable<Response> {
    return this.http.delete<Response>(`http://localhost:8080/projects/${id}`);
  }

  getProjectById(id: number): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`http://localhost:8080/projects/${id}`);
  }

  getProjects(): Observable<ProjectViewModel[]> {
    return this.http.get<ProjectViewModel[]>(`http://localhost:8080/projects?a=${this.a}`);
  }

  updateProject(id: number, project: ProjectModel, isNewTitle: Boolean): Observable<Response> {
    return this.http.put<Response>(`http://localhost:8080/projects/${id}/${isNewTitle}`, project);
  }

  getNewProject(): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`http://localhost:8080/projects/newProject`);
  }
}
