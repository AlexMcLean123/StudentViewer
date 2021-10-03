package com.example.demo.student;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {

    @Bean
    //using command line to create some lines in the Db after the app has started
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student Martin = new Student(
                    1L, "Murt", LocalDate.of(2000, Month.JANUARY, 5),
                    "murt@gmail.com"
            );

            Student Alex = new Student(
                    "Alex", LocalDate.of(1998, Month.FEBRUARY, 6), "alimclean22@gmail.com"
            );
            repository.saveAll(List.of(Martin, Alex));
        };
    }
}
