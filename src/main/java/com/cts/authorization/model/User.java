package com.cts.authorization.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "users")
@ApiModel(value="Model to store user details")
public class User {
	
	@Id
	@GeneratedValue
	@ApiModelProperty(notes = "Id of the User")
	private int id;
	@ApiModelProperty(notes = "Name of the User")
	private String userName;
	@ApiModelProperty(notes = "Password of the User")
	private String password;
	
	public User() {
		
	}
	
	
	public User(int id, String userName, String password) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
	}


	public User(String userName,String  password) {
		
		this.userName=userName;
		this.password=password;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
}
