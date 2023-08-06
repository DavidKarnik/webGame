package main.webgame.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Player {
    private int playerID; // some ID number for store in database
    private String nickname;
    private int score;
}
