package main.webgame;

import main.webgame.model.Player;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
public class WebGameApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebGameApplication.class, args);
    }

    /**
     * Runs when application starts
     * @param playerRepository
     * @return
     */
    @Bean
    CommandLineRunner init(PlayerRepository playerRepository) {
        return args -> {
            Stream.of("Clark", "Mary", "Steven", "Rachel", "Morgen").forEach(name -> {
                Player user = new Player(name, (int) (Math.random() * 10)); // Math.random() => 0.0 - 1.0
                playerRepository.save(user);
            });
            List<Player> list = playerRepository.findAll();
            for (Player player : list) {
                System.out.println(player);
            }
        };
    }

}
