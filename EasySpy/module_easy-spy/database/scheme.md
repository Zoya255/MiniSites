# DB


## === Logs block ========================

**logs**

Таблица с собираемыми системой логами.

| name                | a | ky | type         |
|:--------------------|:-:|:--:|:-------------|
| id                  | A | PK | increment    |
| ip                  |   |    | varchar(15)  |
| port                |   |    | int          |
| real_ip             |   |    | varchar(15)  |
| url                 |   |    | varchar(100) |
| datetime            |   |    | datestamp    |
| browser_family      |   |    | varchar(30)  |
| browser_name        |   |    | varchar(35)  |
| browser_version     |   |    | int          |
| device_type         |   |    | varchar(50)  |
| device_family       |   |    | varchar(50)  |
| device_name         |   |    | varchar(50)  |
| device_manufacturer |   |    | varchar(50)  |
| os_family           |   |    | varchar(30)  |
| os_name             |   |    | varchar(30)  |
| os_version          |   |    | int          |
| os_platform         |   |    | varchar(20)  |
| screen_width        |   |    | int          |
| screen_height       |   |    | int          |
| screen_depth        |   |    | int          |
