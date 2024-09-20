package com.simsam.Spring.Boot.Rest.service;

import com.simsam.Spring.Boot.Rest.model.User;
import com.simsam.Spring.Boot.Rest.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;

    public User saveUser(User user){
        return repo.save(user);
    }
}