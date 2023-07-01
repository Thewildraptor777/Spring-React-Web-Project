package com.raptor.webpage;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")
public class MyController {
  
  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/my-variable")
  public ResponseEntity<String> getMyVariable() {
    String myVariable = "Hello, world!";
    return ResponseEntity.ok().body(myVariable);
  }
  
}