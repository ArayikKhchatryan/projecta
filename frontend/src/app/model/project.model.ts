import {SectorModel} from './sector.model';
import {LocationModel} from './location.model';

export class ProjectModel {


  constructor(public projectCode: string, public  projectTitle: string, public description: string, public impStatusId: number,
              public startDate: Date, public endDate: Date, public sectors: SectorModel[], public locations: LocationModel[], public updateProject?: Date, public createProject?: Date) {

  }
}
