DROP DATABASE IF EXISTS dead_celeb;

CREATE DATABASE dead_celeb;

DROP TABLE IF EXISTS celeb;
DROP TABLE IF EXISTS death;

CREATE TABLE celeb
(
    firstName TEXT,
    lastName TEXT,
    celebId  SERIAL,
    deathId INTEGER
);

CREATE TABLE death
(
    typeOfDeath TEXT,
    deathId INTEGER
);

INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Chris', 'Farley', 111);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Jimi', 'Hendrix', 111);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Robin', 'Williams', 222);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Sharon', 'Tate', 333);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Ritchie', 'Valens', 444);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Joan', 'Rivers', 666);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Sonny', 'Bono', 555);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Shirley', 'Temple', 777);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Sid', 'Vicious', 222);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Tupac', 'Shakur', 333);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Freddy', 'Mercury', 888);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Lisa', 'Lefteye', 999);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Heath', 'Ledger', 111);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Katharine', 'Hepburn', 777);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Princess', 'Diana', 999);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Rock', 'Hudson', 888);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Biggie', 'Smalls', 333);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('John', 'Denver', 444);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Buddy', 'Holly', 444);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Steve', 'McQueen', 666);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Rodney', 'Dangerfield', 666);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('Andy', 'Warhol', 666);
INSERT INTO celeb (firstName, lastName, deathId) VALUES ('C.S.', 'Lewis', 777);

INSERT INTO death (typeOfDeath, deathId) VALUES ('Drug_Overdose', 111);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Suicide', 222);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Murder', 333);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Plane_Crash', 444);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Skiing_Accident', 555);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Botched_Surgery', 666);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Natural_Causes', 777);
INSERT INTO death (typeOfDeath, deathId) VALUES ('AIDS', 888);
INSERT INTO death (typeOfDeath, deathId) VALUES ('Car_Crash', 999);
