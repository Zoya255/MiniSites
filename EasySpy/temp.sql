
UPDATE clicks SET url = 'http://localhost:63342/Code/index.html?#about' WHERE url LIKE 'http://localhost:63342/Code/index.html?%#about';
UPDATE clicks SET url = 'http://localhost:63342/Code/index.html?#advantage' WHERE url LIKE 'http://localhost:63342/Code/index.html?%#advantage';
UPDATE clicks SET url = 'http://localhost:63342/Code/index.html?#feedback' WHERE url LIKE 'http://localhost:63342/Code/index.html?%#feedback';
UPDATE clicks SET url = 'http://localhost:63342/Code/index.html?#forms' WHERE url LIKE 'http://localhost:63342/Code/index.html?%#forms';
UPDATE clicks SET url = 'http://localhost:63342/Code/index.html?#main' WHERE url LIKE 'http://localhost:63342/Code/index.html?%#main';
UPDATE clicks SET url = 'http://localhost:63342/Code/index.html?#services' WHERE url LIKE 'http://localhost:63342/Code/index.html?%#services';

SELECT `url` FROM `clicks` WHERE `url` LIKE 'http://localhost:63342/Code/index.html?%#about';
SELECT `url` FROM `clicks` WHERE `url` LIKE 'http://localhost:63342/Code/index.html?%#advantage';
SELECT `url` FROM `clicks` WHERE `url` LIKE 'http://localhost:63342/Code/index.html?%#feedback';
SELECT `url` FROM `clicks` WHERE `url` LIKE 'http://localhost:63342/Code/index.html?%#forms';
SELECT `url` FROM `clicks` WHERE `url` LIKE 'http://localhost:63342/Code/index.html?%#main';
SELECT `url` FROM `clicks` WHERE `url` LIKE 'http://localhost:63342/Code/index.html?%#services';
