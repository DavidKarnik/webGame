package main.webgame.controller;

import main.webgame.PlayerRepository;
import main.webgame.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
//@RequestMapping("/api") // prefix need to add to the WebSecurityConfig.java
@CrossOrigin(origins = "http://localhost:4200") // allow Cross-Origin Resource Sharing (CORS) on the serve ... different ports
public class LeaderboardController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping("/users")
    @ResponseBody // Tím řeknete Springu, že výsledkem metody by měla být data a ne šablona
    public List<Player> getUsers() {
        return (List<Player>) playerRepository.findAll();
    }

    @PostMapping("/save")
    @ResponseBody
    void addPlayer(@RequestBody Player _player) {
        playerRepository.save(_player);
    }

    @GetMapping("/leaderboard")
    @ResponseBody
    public List<Player> showLeaderboard() {
        return playerRepository.findTop10ByScoreDesc();
    }

    //    @GetMapping("")
//    public String viewHomePage() {
//        return "index";
//    }

}
