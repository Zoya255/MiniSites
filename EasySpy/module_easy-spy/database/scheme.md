# DB


## === Federal block ========================

**projects**

Таблица с проектами, известными системе.

| name     | a | ky | type         |
|:---------|:-:|:--:|:-------------|
| id       | A | PK | increment    |
| uuid     | A |    | uuid         |
| project  | A |    | varchar(100) |
| datetime | A |    | datestamp    |


## === Logs block ========================

**clicks**

Таблица с собираемыми системой кликами.

| name       | a | ky | type         |
|:-----------|:-:|:--:|:-------------|
| id         | A | PK | increment    |
| id_project | A | FK | int          |
| ip         | A |    | varchar(15)  |
| url        | A |    | varchar(100) |
| click_x    | A |    | int          |
| click_y    | A |    | int          |
| datetime   | A |    | datestamp    |

**requests**

Таблица с собираемыми логами обращений к системе.

| name                | a | ky | type         |
|:--------------------|:-:|:--:|:-------------|
| id                  | A | PK | increment    |
| id_project          | A |    | int          |
| ip                  | A |    | varchar(15)  |
| port                | A |    | int          |
| real_ip             | A |    | varchar(15)  |
| url                 | A |    | varchar(100) |
| datetime            | A |    | datestamp    |
| browser_family      | A |    | varchar(30)  |
| browser_name        | A |    | varchar(35)  |
| browser_version     | A |    | int          |
| device_type         | A |    | varchar(50)  |
| device_family       | A |    | varchar(50)  |
| device_name         | A |    | varchar(50)  |
| device_manufacturer | A |    | varchar(50)  |
| os_family           | A |    | varchar(30)  |
| os_name             | A |    | varchar(30)  |
| os_version          | A |    | int          |
| os_platform         | A |    | varchar(20)  |
| screen_width        | A |    | int          |
| screen_height       | A |    | int          |
| screen_depth        | A |    | int          |

**ips**

Таблица с полученными соотношениями ip и geo.

| name             | a | ky | type          |
|:-----------------|:-:|:--:|:--------------|
| id               | A | PK | increment     |
| id_project       | A | FK | int           |
| ip               | A |    | varchar(15)   |
| postal_code      | A |    | int           |
| country          | A |    | varchar(50)   |
| country_iso_code | A |    | char(2)       | 
| region           | A |    | varchar(100)  |
| region_type_full | A |    | varchar(20)   |
| region_iso_code  | A |    | char(2)       |
| city             | A |    | varchar(100)  |
| city_type_full   | A |    | varchar(20)   |
| geo_lat          | A |    | decimal(11,7) |
| geo_lon          | A |    | decimal(11,7) |
| datetime         | A |    | datestamp     |
