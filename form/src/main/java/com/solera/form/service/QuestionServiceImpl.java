package com.solera.form.service;

import com.solera.form.model.Question;
import com.solera.form.model.User;
import com.solera.form.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService{
    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
    @Override
    public Optional<Question> getQuestion(String id){
        return questionRepository.findById(id);
    }

    @Override
    public void updateQuestion(String id, Question question) {
        Optional<Question> questionOptional = questionRepository.findById(id);
        if (questionOptional.isEmpty()) {
            question.setId(Integer.valueOf(id));
            questionRepository.save(question);
        } else {
            Question questionFound = questionOptional.get();
            questionFound.setQuestion(question.getQuestion());
            questionFound.setType(question.getType());
            questionFound.setAllPossibleAnswers(question.getAllPossibleAnswers());
            questionRepository.save(questionFound);
        }
    }

    @Override
    public void deleteQuestion(String id) {
        questionRepository.deleteById(id);
    }
}
