package main.webgame;

import main.webgame.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// JPA provides you with the CRUD operations
@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

    // can add custom query

}