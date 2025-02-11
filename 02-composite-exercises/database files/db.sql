CREATE TABLE users (
    user_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE
);