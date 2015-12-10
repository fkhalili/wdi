SELECT * FROM players WHERE team='NYK';

SELECT * FROM players WHERE team='IND' AND age<26;

SELECT * FROM players ORDER BY points;

SELECT SUM(points) FROM players;

SELECT SUM(points) FROM players WHERE age > 25;

SELECT SUM(points) FROM players WHERE team='CHI' AND age < 25;

SELECT AVG(age) FROM players;

SELECT AVG(age) FROM players WHERE team='OKC';

SELECT AVG(age) FROM players WHERE games_played > 40;