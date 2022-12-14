package com.solera.form.service;

import com.solera.form.model.Answer;
import com.solera.form.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public Optional<User> getUser(Integer id);
    public void updateUser(Integer id,User user);
    public void deleteUser(Integer id);
    List<Answer> getResponsesUser(Integer id);
}
