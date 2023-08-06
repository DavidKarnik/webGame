package main.webgame.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import javax.persistence.*;
//import static javax.persistence.GenerationType.SEQUENCE;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "Player")
@Table(
        name = "player",
        uniqueConstraints = {
                @UniqueConstraint(name = "player_id_unique", columnNames = "email")
        }
)
public class Player {
    
    private String nickname;
    private int score;
    @Id
    private Long id; // some ID number for store in database

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
