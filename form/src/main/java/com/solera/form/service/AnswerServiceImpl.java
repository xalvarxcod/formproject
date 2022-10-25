package com.solera.form.service;

import com.solera.form.model.Answer;
import com.solera.form.model.Question;
import com.solera.form.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerServiceImpl implements AnswerService {
    @Autowired
    AnswerRepository answerRepository;
    @Override
    public Answer saveAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    @Override
    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    @Override
    public Optional<Answer> getAnswer(String id) {
        return answerRepository.findById(id);
    }

    @Override
    public void updateAnswer(String id, Answer answer) {
        Optional<Answer> answerOptional = answerRepository.findById(id);
        if (answerOptional.isEmpty()) {
            answer.setId(Integer.valueOf(id));
            answerRepository.save(answer);
        } else {
            Answer answerFound = answerOptional.get();
            answerFound.setAnswer(answer.getAnswer());
            answerFound.setQuestion(answer.getQuestion());
            answerFound.setUser(answer.getUser());
            answerRepository.save(answerFound);
        }
    }

    @Override
    public void deleteAnswer(String id) {
        answerRepository.deleteById(id);
    }
}
