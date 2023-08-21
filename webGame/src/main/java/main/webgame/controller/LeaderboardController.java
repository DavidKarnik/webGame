package main.webgame.controller;

import main.webgame.UserRepository;
import main.webgame.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api") // prefix need to add to the WebSecurityConfig.java
public class LeaderboardController {

    @Autowired
    UserRepository userRepository;

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
    public Player[] saveDebugging() {
        Player plr = new Player("Player1",123);
        userRepository.save(new Player("Player1",123));
        return null;
    }

    @GetMapping("/leaderboard")
    public List<Player> showLeaderboard() {
        return userRepository.findAll();
    }

}
