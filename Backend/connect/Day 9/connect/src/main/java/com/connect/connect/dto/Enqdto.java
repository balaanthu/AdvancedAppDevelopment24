package com.connect.connect.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Enqdto {
    private Long id;
    private String name;
    private String email;
    private String course;
    private String message;

}