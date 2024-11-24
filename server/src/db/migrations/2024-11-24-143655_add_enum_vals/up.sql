INSERT INTO extras (id, name)
VALUES (1, 'Caramel'),
       (2, 'Hazelnut'),
       (3, 'Mint'),
       (4, 'Vanilla'),
       (5, 'Cream'),
       (6, 'Chocolate'),
       (7, 'Decaf');

INSERT INTO drink_types (id, value)
VALUES (1, 'Americano'),
       (2, 'Espresso'),
       (3, 'Cappuccino'),
       (4, 'Latte'),
       (5, 'IcedLatte'),
       (6, 'Matcha');
       
INSERT INTO milk_types (id, value)
VALUES (1, 'None'),
       (2, 'Whole'),
       (3, 'Skim'),
       (4, 'Oat'),
       (5, 'Almond');

INSERT INTO size (id, value) 
VALUES (1, 'Small'),
       (2, 'Medium'),
       (3, 'Large');

INSERT INTO order_statuses
VALUES (1, 'Pending'),
       (2, 'InProgress'),
       (3, 'Completed'), 
       (4, 'Canceled');

INSERT INTO drink_statuses 
VALUES (1, 'Pending'),
       (2, 'InProgress'),
       (3, 'Completed'), 
       (4, 'Canceled');
