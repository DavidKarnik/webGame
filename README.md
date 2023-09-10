# Web Game

Project of simple clicking web game with a database and separate frontend and backend.

#### Logic
Load main page with score == 0, blank nickname textbox, time set to 10 seconds and svg target in the middle. When target is clicked start time t=10 until t=0 and save nickname to temporary variable. If player click in target radius, add score++. When miss-click target do miss++. After every click change target position. When t=0 stop game, show results (modal), send data to backend, do logic and store them into the MySQL database. Restart.

## Used Tools and Languages

<!--
#### Frontend
- [TypeScript](https://www.typescriptlang.org/)
- [HTML, CSS](https://html.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
#### Backend
- [Java](https://www.java.com/en/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Maven](https://maven.apache.org/)
- [Postman](https://www.postman.com/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
#### Database
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
#### Cloud hosting/ Deployment
- [AWS](https://aws.amazon.com/)
- [Ubuntu](https://ubuntu.com/aws)
- [Docker](https://www.docker.com/)
#### Git
- [Git](https://git-scm.com/)
- [Git Bash](https://gitforwindows.org/)
- [GitHub](https://github.com/)
- [GitHub Actions](https://github.com/features/actions)
#### Tests
- [Jacoco](https://www.jacoco.org/jacoco/trunk/index.html)
- [SonarCloud](https://www.sonarsource.com/products/sonarcloud/)
- [Karma](https://karma-runner.github.io/latest/index.html)
-->

<br>
<div align="center">

| Frontend | Backend | Database | Cloud hosting/ Deployment | Git | Tests |
| --- | --- | --- | --- | --- | --- |
| [TypeScript](https://www.typescriptlang.org/) | [Java](https://www.java.com/en/) | [MySQL](https://www.mysql.com/) | [AWS](https://aws.amazon.com/) | [Git](https://git-scm.com/) | Jacoco |
| [HTML, CSS](https://html.com/) | [Spring Boot](https://spring.io/projects/spring-boot) | [MySQL Workbench](https://www.mysql.com/products/workbench/) | [Ubuntu](https://ubuntu.com/aws) | [Git Bash](https://gitforwindows.org/) | SonarCloud |
| [WebStorm](https://www.jetbrains.com/webstorm/) | [Maven](https://maven.apache.org/) |  | [Docker](https://www.docker.com/) | [GitHub](https://github.com/) | Karma |
|  | [IntelliJ IDEA](https://www.jetbrains.com/idea/) |  |  | [GitHub Actions](https://github.com/features/actions) |  |

</div>

## Screenshots

![App Screenshot](https://via.placeholder.com/700x100?text=Not+Added+Yet)

## MySQL Database

#### Get all players

```
  GET /api/players
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `BIGINT` | **Required**. Player key |
| `nickname` | `VARCHAR` | Player nickname |
| `score` | `INT` | Player score |

#### Get leaderboard (Top 10 players)

```
  GET /api/leaderboard
```

SELECT * FROM databaseName ORDER BY score DESC LIMIT 10

## Running Tests

To run unit tests for frontend via [Karma](https://karma-runner.github.io), run the following command

```bash
  ng test
```

To run tests for backend and generate test coverage report from [jacoco](https://www.jacoco.org/jacoco/trunk/index.html), run the following command

```bash
  mvn clean test
```

## Deployment

#### Frontend
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. <br>
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Backend
Run `mvn package` in /webGame/webGame/ directory for build the project (/xxxFileName-0.0.x-SNAPSHOT.jar) <br>
Run `java -jar /xxxFileName-0.0.x-SNAPSHOT.jar` for start application server. Navigate to `http://localhost:8080/`.

#### All-in-One
Using [Docker](https://www.docker.com/) for automated deployment. To deploy this project run

```bash
  *not implemented yet*
```

## Author

- [Me, myself and I](https://github.com/DavidKarnik)
