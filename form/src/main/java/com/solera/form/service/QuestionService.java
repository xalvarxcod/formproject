package com.solera.form.service;

import com.solera.form.model.Question;
import com.solera.form.model.User;

import java.util.List;
import java.util.Optional;

public interface QuestionService {
    public Question saveQuestion(Question question);
    public List<Question> getAllQuestions();
    Optional<Question> getQuestion(String id);
    public void updateQuestion(String id, Question question);
    public void deleteQuestion(String id);
}
