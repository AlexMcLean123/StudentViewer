package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
//we use student as this is the type we want to persist and long is the primary key
public interface StudentRepository extends JpaRepository<Student, Long> {


    //?1 is used for variables, returns the type below, in this case optional as null possible
    @Query("SELECT s FROM Student s WHERE s.email = ?1")
    Optional<Student> findStudentByEmail(String email);
}
