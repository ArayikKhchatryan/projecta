package com.example.demo.model;

public class Location {
	public Integer countyId;
	public Integer districtId;
	public Integer percent;

	public Location(Integer CountyId, Integer DistrictId, Integer Percent) {
		this.countyId = CountyId;
		this.districtId = DistrictId;
		this.percent = Percent;
	}
}
