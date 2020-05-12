package com.example.demo.model;

import java.util.Date;

public class Project {
	public String projectCode;
	public String projectTitle;
	public String description;
	public Integer impStatusId;
	public Date startDate;
	public Date endDate;
	public Sector[] sectors;
	public Location[] locations;
	public Date updateProject;
	public Date createProject;
	public int id = 0;

	public static int _id = 0;


	public Project(
			String projectCode,
			String projectTitle, String description, Integer impStatusId, Date startDate,
			Date endDate, Sector[] sectors, Location[] locations, Date updateProject, Date createProject
	) {
		this.projectCode = projectCode;
		this.projectTitle = projectTitle;
		this.description = description;
		this.impStatusId = impStatusId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.sectors = sectors;
		this.locations = locations;
		this.updateProject = updateProject;
		this.createProject = createProject;
		this.id = ++Project._id;
	}

	public Project() {
		super();
	}
}
