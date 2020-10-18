# DB


## === Langs block ========================

**words-en**

Таблица с русским переводом слов.

| name | type        |
|:-----|:------------|
| id   | increment   |
| word | varchar(50) |

---

**words-ru**

Таблица с английским переводом слов.

| name | type        |
|:-----|:------------|
| id   | increment   |
| word | varchar(50) |

---

**links**

Таблица со связями русского и английского переводов.

| name  | type      |
|:------|:----------|
| id    | increment |
| id-ru | int       |
| id-en | int       |
