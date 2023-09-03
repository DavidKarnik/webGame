package main.webgame;

import main.webgame.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// JPA provides you with the CRUD operations (CREATE,...)
@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

    // can add custom query

    @Query(value = "SELECT * FROM player ORDER BY score DESC LIMIT 100", nativeQuery = true)
    List<Player> findTop100ByScoreDesc();
}