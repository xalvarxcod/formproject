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
    public Optional<User> getUser(Integer id){
        return userRepository.findById(id);
    }
    @Override
    public void updateUser(Integer id, User user) {
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isEmpty()) {
            user.setId(id);
            userRepository.save(user);
        }
        else {
            User userFound = userOptional.get();
            userFound.setAnswers(user.getAnswers());
            userFound.setPassword(user.getPassword());
            userFound.setUsername(user.getUsername());
            userRepository.save(userFound);
        }
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
