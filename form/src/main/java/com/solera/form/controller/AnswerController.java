package com.solera.form.controller;

import com.solera.form.model.Answer;
import com.solera.form.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/answer")
public class AnswerController {
    @Autowired
    private AnswerService answerService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Answer answer){
        System.out.println("Answer " + answer.toString());
        answerService.saveAnswer(answer);
        return ResponseEntity.status(HttpStatus.OK).body("Question:" + answer.getAnswer() +" added");
    }

    @GetMapping("/getAll")
    public List<Answer> getAllAnswers(){
        return answerService.getAllAnswers();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Answer> get(@PathVariable String id){
        Optional<Answer> answer = answerService.getAnswer(id);
        if(answer.isPresent())
            return ResponseEntity.status((HttpStatus.OK)).body(answer.get());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}