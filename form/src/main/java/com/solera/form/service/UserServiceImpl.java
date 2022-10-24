package com.solera.form.service;

import com.solera.form.model.User;
import com.solera.form.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @Override
    public Optional<User> getUser(String id){
        return userRepository.findById(id);
    }
    public Optional<User> updateUser(User user) {
        Integer userId = user.getId();
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isEmpty())
            return Optional.empty();

        User userFound = userOptional.get();
        userFound.setAnswers(userFound.getAnswers());
        userFound.setPassword(userFound.getPassword());
        userFound.setUsername(userFound.getUsername());
        return Optional.of(userFound);
    }
}
