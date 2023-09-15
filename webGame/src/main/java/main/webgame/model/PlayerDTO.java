package main.webgame.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlayerDTO {
    //Data Transfer Object
    private String nickname;
    private int score;
    // Gettery a settery pro nickname a score
}
