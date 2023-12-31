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

    @Query(value = "SELECT * FROM player ORDER BY score DESC LIMIT 10", nativeQuery = true)
    List<Player> findTop10ByScoreDesc();
    // nativeQuery = true -> příkazy se berou jako výchozí SQL jazyk pro můj konkrétní databázový systém, ne jako JPQL
    // výhoda pro složitější příkazy, nevýhoda -> nepřenositelné na jiné datab. systémy, nutnost ochrany vstupů před SQL injections
}