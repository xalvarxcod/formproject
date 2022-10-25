package com.solera.form.repository;

import com.solera.form.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    @Query("SELECT a FROM Answer a WHERE a.user.id = ?1")
    List<Answer> findAnswerByUserId(Integer id);
}
