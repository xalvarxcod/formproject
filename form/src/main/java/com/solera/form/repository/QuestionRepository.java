package com.solera.form.repository;

import com.solera.form.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Serializable> {
}
