package com.example.todo;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class ToDoController {

  private final ToDoRepository repository;

  ToDoController(ToDoRepository repository) {
    this.repository = repository;
  }

  // Aggregate root

  @GetMapping("/to-do-items")
  List<ToDo> all() {
    return repository.findAll();
  }

  @PostMapping("/to-do-items")
  ToDo newToDo(@RequestBody ToDo newToDo) {
    return repository.save(newToDo);
  }

  // Single item

  @GetMapping("/to-do-item/{id}")
  ToDo one(@PathVariable Long id) {

    return repository.findById(id)
      .orElseThrow(() -> new ToDoNotFoundException(id));
  }

  @PutMapping("/to-do-item/{id}")
  ToDo replaceToDo(@RequestBody ToDo newToDo, @PathVariable Long id) {

    return repository.findById(id)
      .map(toDo -> {
        toDo.setName(newToDo.getName());
        toDo.setComplete(newToDo.getComplete());
        return repository.save(toDo);
      })
      .orElseGet(() -> {
        newToDo.setId(id);
        return repository.save(newToDo);
      });
  }

  @DeleteMapping("/to-do-item/{id}")
  void deleteToDo(@PathVariable Long id) {
    repository.deleteById(id);
  }
}