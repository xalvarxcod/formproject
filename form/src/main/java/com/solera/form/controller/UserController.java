package com.solera.form.controller;

import com.solera.form.model.User;
import com.solera.form.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody User user){
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body("User:" + user.getUsername() +" added");
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> get(@PathVariable String id){
        Optional<User> user = userService.getUser(id);
        if(user.isPresent())
            return ResponseEntity.status((HttpStatus.OK)).body(user.get());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

}
