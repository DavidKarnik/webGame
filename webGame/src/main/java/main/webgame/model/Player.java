package main.webgame.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import static javax.persistence.GenerationType.SEQUENCE; ... javax is now jakarta !!

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // some ID number for store in database
    @Column(name = "nickname")
    private String nickname;
    @Column(name = "score")
    private int score;


}
