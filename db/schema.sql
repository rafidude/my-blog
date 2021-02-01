CREATE DATABASE IF NOT EXISTS blog;

USE blog;

CREATE TABLE IF NOT EXISTS posts (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO posts (id, title, content)
VALUES (1, 'Using the Serverless Next.js', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque veritatis fugiat iure exercitationem rem aut sit, delectus obcaecati mollitia reiciendis architecto, nostrum est veniam at vitae laboriosam error vel eligendi!');