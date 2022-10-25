package com.solera.form.controller;

import com.solera.form.model.Answer;
import com.solera.form.model.User;
import com.solera.form.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<String> addUser(@RequestBody User user){
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body("User: " + user.getUsername() +" added");
    }

    @GetMapping()
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUser(@PathVariable Integer id){
        Optional<User> user = userService.getUser(id);
        if(user.isPresent())
            return ResponseEntity.status((HttpStatus.OK)).body(user.get());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @GetMapping("{id}/responses")
    public List<Answer> getUserResponses(@PathVariable Integer id){
        return userService.getResponsesUser(id);
    }
    @PutMapping("{id}")
    public void updateUser(@PathVariable Integer id, @RequestBody User user) {
        userService.updateUser(id,user);
    }

    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }
}
