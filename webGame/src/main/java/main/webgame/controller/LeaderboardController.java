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
    public List<Player> getUsers() {
        return (List<Player>) playerRepository.findAll();
    }

    @PostMapping("/users")
    void addPlayer(@RequestBody Player _player) {
        playerRepository.save(_player);
    }

    @GetMapping("/leaderboard")
    public List<Player> showLeaderboard() {
        return playerRepository.findAll();
    }

    //    @GetMapping("")
//    public String viewHomePage() {
//        return "index";
//    }


//    @GetMapping("/save")
//    public String saveDebugging() {
//        Player plr = new Player("Player1",123);
//        playerRepository.save(new Player("Player1",123));
////        return null;
//        return "index";
//    }

}
