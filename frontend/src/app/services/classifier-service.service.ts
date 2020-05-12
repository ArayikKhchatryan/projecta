import {Injectable} from '@angular/core';
import {ClassifiersModel} from '../model/classifiers.model';
import {ChildClassifierModel} from '../model/child-classifier.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClassifierServiceService {

  constructor(private http: HttpClient) {
  }


  getImpStatusClassifier(): Observable<ClassifiersModel[]> {
    return this.http.get<ClassifiersModel[]>(`http://localhost:8080/projects/impStatuses`);
  }


  getDistricts(): Observable<ChildClassifierModel[]> {
    return this.http.get<ChildClassifierModel[]>(`http://localhost:8080/projects/districts`);
  }


  getSectorsClassifier(): Observable<ClassifiersModel[]> {
    return this.http.get<ClassifiersModel[]>(`http://localhost:8080/projects/sectors`);
  }

  getCountyClassifier(): Observable<ClassifiersModel[]> {
    return this.http.get<ClassifiersModel[]>(`http://localhost:8080/projects/countries`);
  }
}
