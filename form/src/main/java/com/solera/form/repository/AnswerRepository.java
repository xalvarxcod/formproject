package com.solera.form.repository;

import com.solera.form.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Serializable> {

}
