package co.kr.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor

public class User {
	public User(String username2) {
		// TODO Auto-generated constructor stub
	}
	private Integer id;
	private String username;
	private String password;
    private List<Role> roles;
}