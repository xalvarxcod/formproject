package com.solera.form.controller;

import com.solera.form.model.Question;
import com.solera.form.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/question")
@CrossOrigin
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @PostMapping()
    public ResponseEntity<String> addQuestion(@RequestBody Question question){
        questionService.saveQuestion(question);
        return ResponseEntity.status(HttpStatus.OK).body("Question: " + question.getQuestion() +" added");
    }

    @GetMapping()
    public List<Question> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @GetMapping("{id}")
    public ResponseEntity<Question> getQuestion(@PathVariable Integer id){
        Optional<Question> question = questionService.getQuestion(id);
        if(question.isPresent())
            return ResponseEntity.status((HttpStatus.OK)).body(question.get());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PutMapping("{id}")
    public void updateQuestion(@PathVariable Integer id, @RequestBody Question question) {
        questionService.updateQuestion(id,question);
    }

    @DeleteMapping("{id}")
    public void deleteQuestion(@PathVariable Integer id) {
        questionService.deleteQuestion(id);
    }
}
