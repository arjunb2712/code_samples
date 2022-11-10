
CREATE TABLE `demo__users` (
  `userPkId` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `pwd` varchar(60) NOT NULL COMMENT 'Encrypted password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `demo__users` (`userPkId`, `name`, `email`, `pwd`) VALUES
(1, 'Ipsita', 'ipsita@gmail.com', '$2a$10$wochIdhpIhley7AXG29h1.upMg8TG0w..eydK/MAQcuStBaMJAYuS'),
(2, 'Ipsita', 'ipsita@capitalnumbers.com', '$2a$10$LW9dedhZ5P0m7iThFqI1XuzueKusjyDNcAitP7BcEdXzT2AyUzLXW');

ALTER TABLE `demo__users`
  ADD PRIMARY KEY (`userPkId`);

ALTER TABLE `demo__users`
  MODIFY `userPkId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
