package main.webgame.controller;

import main.webgame.model.Player;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api") // prefix need to add to the WebSecurityConfig.java
public class LeaderboardController {


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
    @GetMapping("/leaderboard")
    public Player[] showLeaderboard() {

        return null;
    }
}
