package com.connect.connect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.connect.connect.entity.Enqentity;

@Repository
public interface Enqrepo extends JpaRepository<Enqentity, Long> {
    Enqentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}