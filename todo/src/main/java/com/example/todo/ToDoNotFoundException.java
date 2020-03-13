package com.example.todo;

class ToDoNotFoundException extends RuntimeException {

  ToDoNotFoundException(Long id) {
    super("Could not find to-do " + id);
  }
}