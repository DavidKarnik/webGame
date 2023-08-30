package main.webgame.controller;

import main.webgame.PlayerRepository;
import main.webgame.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
//@RequestMapping("/api") // prefix need to add to the WebSecurityConfig.java
public class LeaderboardController {

    @Autowired
    PlayerRepository playerRepository;

    /**
     * Load the main page
     * @return - index page
     */
    @GetMapping("")
    public String viewHomePage() {
        return "index";
    }

    /**
     * Load Leaderboard
     * @return - Array of Player[]
     */
    @GetMapping("/save")
    public String saveDebugging() {
        Player plr = new Player("Player1",123);
        playerRepository.save(new Player("Player1",123));
//        return null;
        return "index";
    }

    @GetMapping("/leaderboard")
    public List<Player> showLeaderboard() {
        return playerRepository.findAll();
    }

}
