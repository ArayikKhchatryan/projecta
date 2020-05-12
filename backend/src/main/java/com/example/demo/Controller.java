package com.example.demo;

import com.example.demo.data.ProjectDataService;
import com.example.demo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Controller {

	private final ProjectDataService projectDataService;

	@Autowired
	public Controller(ProjectDataService projectDataService) {
		this.projectDataService = projectDataService;
	}

	@GetMapping("/projects/{id}")
	public Project getProjectById(@PathVariable int id) {
		return projectDataService.getProjectById(id);
	}

	@GetMapping("/projects")
	public List<ProjectView> getAllProjects(@RequestParam String a) {
		return projectDataService.getProjectViewList();
	}

	@GetMapping("/projects/newProject")
	public Project getNewProject() {
		return projectDataService.getNewProject();
	}

	@GetMapping("/projects/impStatuses")
	public ArrayList<Classifier> getImpStatus() {
		return projectDataService.getImplementationStatus();
	}

	@GetMapping("/projects/sectors")
	public ArrayList<Classifier> getSectors() {
		return projectDataService.getSectors();
	}

	@GetMapping("/projects/countries")
	public ArrayList<Classifier> getCountries() {
		return projectDataService.getCountries();
	}

	@GetMapping("/projects/districts")
	public ArrayList<ChildClassifier> getDistricts() {
		return projectDataService.getDistricts();
	}

	@DeleteMapping("/projects/{id}")
	public Response deleteProjectById(@PathVariable Integer id) {
		return projectDataService.deleteProjectById(id) ? new Response(true, null, null) : new Response(false, null, null);
	}

	@PutMapping("/projects/{id}/{isNewProject}")
	public Response updateProjectById(@PathVariable Integer id, @PathVariable Boolean isNewProject, @RequestBody Project project) {
		return projectDataService.updateProjectById(id, isNewProject, project);
	}

	@PostMapping("/projects")
	public Response addProject(@RequestBody Project project) {
		return projectDataService.createProject(project);
	}
}
