package com.yaschat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@SpringBootApplication
@RestController
public class UsersService {

    private List<String> users = new ArrayList<>();

    public static void main(String[] args) {
        SpringApplication.run(UsersService.class, args);
    }

    @GetMapping("/users")
    public List<String> getUsers() {
        return users;
    }

    @PostMapping("/users")
    public String addUser(@RequestBody String name) {
        users.add(name);
        return "Ajouté: " + name;
    }
}
