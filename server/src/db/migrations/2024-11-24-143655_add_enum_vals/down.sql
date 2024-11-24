DELETE FROM drink_types WHERE value IN ('Americano', 'Espresso', 'Cappuccino', 'Latte', 'IcedLatte', 'Mocha');
DELETE FROM milk_types WHERE value IN ('None', 'Whole', 'Skim', 'Oat', 'Almond');
DELETE FROM size WHERE value IN ('Small', 'Medium', 'Large');
DELETE FROM extras WHERE name IN ('Caramel', 'Hazelnut', 'Mint', 'Vanilla', 'Cream', 'Chocolate', 'Decaf');
DELETE FROM order_statuses WHERE value IN ('Pending', 'InProgress', 'Completed', 'Cancelled');
DELETE FROM drink_statuses WHERE value IN ('Pending', 'InProgress', 'Completed', 'Cancelled');