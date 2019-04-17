INSERT INTO users
(name, phone, username, password)
VALUES ('Marcus', '91239123', '', '');

INSERT INTO payments
(payer_id, payee_id, amount, completed)
VALUES ('','','','');

-- psql -d DATABASE_NAME -U USERNAME -f seed.sql