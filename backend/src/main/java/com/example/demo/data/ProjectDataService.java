package com.example.demo.data;

import com.example.demo.model.*;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Component
public class ProjectDataService {

	private ArrayList<Project> projectsList = new ArrayList<>();
	private ArrayList<Classifier> sectors = new ArrayList<>();
	private ArrayList<Classifier> countries = new ArrayList<>();
	private ArrayList<Classifier> implementationStatus = new ArrayList<>();
	private ArrayList<ChildClassifier> districts = new ArrayList<>();

	{
		implementationStatus.add(new Classifier(1, "Planned"));
		implementationStatus.add(new Classifier(2, "Pipelined"));
		implementationStatus.add(new Classifier(3, "Ongoing"));
		implementationStatus.add(new Classifier(4, "Stalled"));
		implementationStatus.add(new Classifier(5, "Extended"));
		implementationStatus.add(new Classifier(6, "Terminated"));
		implementationStatus.add(new Classifier(7, "Suspended"));
		implementationStatus.add(new Classifier(8, "Compladed"));
	}

	{
		districts.add(new ChildClassifier(1, 1, "Lori"));
		districts.add(new ChildClassifier(1, 2, "Ararat"));
		districts.add(new ChildClassifier(1, 3, "Syuniq"));
		districts.add(new ChildClassifier(1, 4, "Armavir"));
		districts.add(new ChildClassifier(2, 1, "Krasnodar"));
		districts.add(new ChildClassifier(2, 2, "Tver"));
		districts.add(new ChildClassifier(2, 3, "Stavropol"));
		districts.add(new ChildClassifier(3, 1, "California"));
	}

	{
		countries.add(new Classifier(1, "Hayastan"));
		countries.add(new Classifier(2, "Rusastan"));
		countries.add(new Classifier(3, "AMN"));
	}

	{
		sectors.add(new Classifier(1, "Health"));
		sectors.add(new Classifier(2, "Agriculture"));
		sectors.add(new Classifier(3, "Economy"));
		sectors.add(new Classifier(4, "Administrative"));
	}

	{
		projectsList.add(new Project( "project code 1", "project title 1", "project description 1", 1, new Date(10), new Date(1955554545),
				new Sector[]{new Sector(1, 21), new Sector(2, 79)},
				new Location[]{new Location(1, 2, 11), new Location(3, 1, 50), new Location(1, 3, 20)},
				new Date(1912345670), new Date(1)));
		projectsList.add(new Project("project code 2", "project title 2", "project description 2", 2, new Date(1), new Date(12546821),
				new Sector[]{new Sector(3, 35), new Sector(1, 14)},
				new Location[]{new Location(3, 1, 11), new Location(2, 1, 10), new Location(1, 2, 20)},
				new Date(1121461654), new Date(10)));
		projectsList.add(new Project( "project code 3", "project title 3", "project description 3", 3, new Date(1000000), new Date(12546821),
				new Sector[]{new Sector(3, 35), new Sector(1, 14)},
				new Location[]{new Location(3, 1, 11), new Location(2, 1, 10), new Location(1, 2, 20)},
				new Date(1121461654), new Date(10)));
	}


	private Boolean uniqueName(String name) {
		for (Project project : projectsList) {
			if ((project.projectTitle).equals(name)) {
				return false;
			}
		}
		return true;
	}

	public List<ProjectView> getProjectViewList() {
		ArrayList<ProjectView> projectViewList = new ArrayList<>();
		for (Project project : projectsList) {
			projectViewList.add(new ProjectView(project.id, project.projectTitle));
		}
		return projectViewList;
	}

	public Project getProjectById(Integer id) {
		for (Project project : projectsList) {
			if (project.id == id) {
				return project;
			}
		}
		return null;
	}

	public ArrayList<Classifier> getSectors() {
		return this.sectors;
	}

	public ArrayList<Classifier> getImplementationStatus() {
		return this.implementationStatus;
	}

	public ArrayList<ChildClassifier> getDistricts() {
		return this.districts;
	}

	public ArrayList<Classifier> getCountries() {
		return this.countries;
	}

	public Project getNewProject() {
		return new Project( null, null, null, null, null, null, null, null, null, null);
	}

	public Response createProject(Project project) {
		if (uniqueName(project.projectTitle)) {
			project.id = Project._id;
			projectsList.add(project);
			return new Response(true, null, project.id);
		}
		return new Response(false, null, null);
	}

	public Response updateProjectById(int id, boolean isNewTitle, Project project) {
		if (uniqueName(project.projectTitle) || !isNewTitle) {
			project.id = id;
			for (int i = 0; i < projectsList.size(); i++) {
				if (projectsList.get(i).id == id) {
					projectsList.set(i, project);
				}
			}
			return new Response(true, null, project.id);
		}
		return new Response(false, null, null);
	}

	public boolean deleteProjectById(Integer id) {
		for (Project project : projectsList) {
			if (project.id == id) {
				projectsList.remove(project);
				return true;
			}
		}
		return false;
	}
}
