package com.solera.form.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String question;
    private String answerChosen;
    private String allPossibleAnswers;
    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswerChosen() {
        return answerChosen;
    }

    public void setAnswerChosen(String answerChosen) {
        this.answerChosen = answerChosen;
    }

    public String getAllPossibleAnswers() {
        return allPossibleAnswers;
    }

    public void setAllPossibleAnswers(String allPossibleAnswers) {
        this.allPossibleAnswers = allPossibleAnswers;
    }

    public void addPossibleAnswer(String newAnswer){
        this.allPossibleAnswers = allPossibleAnswers + newAnswer + ",";
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
