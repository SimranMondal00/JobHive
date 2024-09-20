package com.simsam.Spring.Boot.Rest.repo;

import com.simsam.Spring.Boot.Rest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}