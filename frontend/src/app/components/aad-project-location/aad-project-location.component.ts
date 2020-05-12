import {Component, Inject, OnInit} from '@angular/core';
import {ClassifierServiceService} from '../../services/classifier-service.service';
import {LocationModel} from '../../model/location.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ChildClassifierModel} from '../../model/child-classifier.model';
import {ClassifiersModel} from '../../model/classifiers.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {percentValidator} from '../project/project.component';

@Component({
  selector: 'app-aad-project-location',
  templateUrl: './aad-project-location.component.html',
  styleUrls: ['./aad-project-location.component.css']
})
export class AadProjectLocationComponent implements OnInit {

  counties: ClassifiersModel[] = [];

  districtsAll: ChildClassifierModel[] = [];

  districts: ChildClassifierModel[] = [];

  countiesAll: ClassifiersModel[] = [];

  selected: LocationModel = {};

  locationInvalid: Boolean;

  percentIncorrect: Boolean;

  percentSum: number;

  constructor(private cs: ClassifierServiceService, @Inject(MAT_DIALOG_DATA) private data: Data, public dialogRef: MatDialogRef<LocationModel[]>,) {
    this.districtsAll = this.data.districts;
    this.countiesAll = this.data.countries;
    this.percentSum = this.data.locationsPercentSum;
  }

  locationsForm = new FormGroup({
    country: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    percent: new FormControl('', [Validators.required, percentValidator()])
  });

  ngOnInit(): void {
    this.locationInvalid = false;
    this.percentIncorrect = false;
    this.counties = this.countiesAll;
    this.filteredDistricts();
    this.filteredCounties();
    this.districts = null;
  }

  filteredDistricts() {
    this.districts = this.districtsAll ? this.districtsAll.filter(district => !this.data.locations.find(location => location.districtId === district.id &&
      location.countyId === district.parentId)) : [];
  }

  filteredCounties() {
    this.counties = this.countiesAll ? this.countiesAll.filter(country => this.districts.some(district => district.parentId === country.id)) : [];
  }

  getDistrictByParentId(id: number) {
    this.filteredDistricts();
    this.districts = this.districts.filter(district=>district.parentId === id);
    return this.districts;
  }

  locationAdd() {
    if (!this.selected.countyId || !this.selected.districtId || !this.selected.percent) {
      this.locationInvalid = true;
      this.percentIncorrect = false;
    } else if (+this.selected.percent + this.percentSum <= 100 && +this.selected.percent + this.percentSum > 0 && +this.selected.percent > 0) {
      this.dialogRef.close(this.selected);
    } else {
      this.locationInvalid = false;
      this.percentIncorrect = true;
    }
  }
}

interface Data {
  locations: LocationModel[];
  districts: ChildClassifierModel[];
  countries: ClassifiersModel[];
  locationsPercentSum: number;
}
