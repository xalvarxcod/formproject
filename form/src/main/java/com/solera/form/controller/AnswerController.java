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
@CrossOrigin
public class AnswerController {
    @Autowired
    private AnswerService answerService;

    @PostMapping()
    public ResponseEntity<String> addAnswer(@RequestBody Answer answer){
        System.out.println("Answer " + answer.toString());
        answerService.saveAnswer(answer);
        return ResponseEntity.status(HttpStatus.OK).body("Answer: " + answer.getAnswer() +" added");
    }

    @GetMapping()
    public List<Answer> getAllAnswers(){
        return answerService.getAllAnswers();
    }

    @GetMapping("{id}")
    public ResponseEntity<Answer> getAnswer(@PathVariable Integer id){
        Optional<Answer> answer = answerService.getAnswer(id);
        if(answer.isPresent())
            return ResponseEntity.status((HttpStatus.OK)).body(answer.get());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PutMapping("{id}")
    public void updateAnswer(@PathVariable Integer id, @RequestBody Answer answer) {
        answerService.updateAnswer(id,answer);
    }

    @DeleteMapping("{id}")
    public void deleteQuestion(@PathVariable Integer id) {
        answerService.deleteAnswer(id);
    }
}
