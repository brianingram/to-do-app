package com.example.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ToDo {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;
  private String name;
  private Boolean complete;

  protected ToDo() {}

  public ToDo(String name, Boolean complete) {
    this.name = name;
    this.complete = complete;
  }

  @Override
  public String toString() {
    return String.format(
        "To-Do[id=%d, name='%s', complete='%b']",
        id, name, complete);
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Boolean getComplete() {
    return complete;
  }

  public void setComplete(Boolean complete) {
    this.complete = complete;
  }
}
