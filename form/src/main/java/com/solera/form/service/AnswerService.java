package com.solera.form.service;

import com.solera.form.model.Answer;
import com.solera.form.model.Question;

import java.util.List;
import java.util.Optional;

public interface AnswerService {
    public Answer saveAnswer(Answer answer);
    public List<Answer> getAllAnswers();
    Optional<Answer> getAnswer(Integer id);
    public void updateAnswer(Integer id, Answer answer);
    public void deleteAnswer(Integer id);

}
