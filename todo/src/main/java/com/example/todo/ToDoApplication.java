package com.example.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ToDoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToDoApplication.class, args);
	}

	@Bean
  public CommandLineRunner demo(ToDoRepository repository) {
    return (args) -> {
      repository.save(new ToDo("Clean", false));
      repository.save(new ToDo("Store", false));
      repository.save(new ToDo("Dance", false));
    };
  }

}
