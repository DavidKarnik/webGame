package main.webgame.controller;

import main.webgame.PlayerRepository;
import main.webgame.model.Player;
import main.webgame.model.PlayerDTO;
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

//    @PostMapping("/save")
//    @ResponseBody
//    void addPlayer(@RequestBody Player _player) {
//        System.out.println("addPlayer() called -> player:");
//        System.out.println(_player);
////        _player.setId();
//        playerRepository.save(_player);
//    }

//    @PostMapping("/save")
//    @ResponseBody
//    void addPlayer(@RequestParam("nickname") String _nickname, @RequestParam("_score") int _score) {
//        System.out.println("addPlayer() called -> player:");
//        Player _player = new Player();
//        _player.setNickname(_nickname);
//        _player.setScore(_score);
//        System.out.println(_player);
//
//        playerRepository.save(_player);
//    }

    @PostMapping("/save")
    @ResponseBody
    void addPlayer(@RequestBody PlayerDTO playerRequest) {
        System.out.println("addPlayer() called -> player:");
        Player player = new Player(playerRequest.getNickname(), playerRequest.getScore());
        playerRepository.save(player);
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
