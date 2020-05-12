package com.example.demo.model;

public class Response {
	public Boolean status;
	public String validations;
	public Integer newId;

	public Response(Boolean Status, String Validations, Integer NewId) {
		this.status = Status;
		this.validations = Validations;
		this.newId = NewId;
	}
}
