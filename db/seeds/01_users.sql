-- Users table seeds here (Example)
INSERT INTO users (id, name, phone, admin)
VALUES (1, 'Alice', 6471982738, false);
(2, 'Alan', 2471927327, false),
(3, 'David', 6427729838, false),
(4, 'Kira', 4039582039, true);


INSERT INTO orders (id, client_id, menu_item_id, order_time, prep_time, note, is_paid, total_price, order_status)
VALUES (1, 1, 1, '2021-08-22 13:10:00.208497+07', '2021-08-22 13:25:00.208497+07', "peanut allergy", true, 35, 3);

INSERT INTO menu_items (id, category_id, name, price, image, description)
VALUES (1, 1, 'Green Salad', 2, 'https://images-gmi-pmc.edge-generalmills.com/5ac90f8f-9454-42d0-bc5f-30469cb67827.jpg'),
(1, 2, 'Salmon', 4, 'https://aubreyskitchen.com/wp-content/uploads/2021/01/salmon-sashimi.jpg'), '2pices',
(2, 2, 'Tuna', 4, 'https://japan.recipetineats.com/wp-content/uploads/2019/01/Marinated_Tuna_Sashimi_0265.jpg', '2pices'),
(3, 3, 'Smoked Salmon Roll', 11, 'https://savorthebest.com/wp-content/uploads/2018/07/smoked-salmon-Philadelphia-roll-_2218-735x1101.jpg', 'Salmon, tobiko, green onion & avocado. 8 pieces'),
(4, 3, 'Dynamite Roll', 12, 'https://savorthebest.com/wp-content/uploads/2018/07/smoked-salmon-Philadelphia-roll-_2218-735x1101.jpg', 'Tempura shrimp, tobiko, avocado& mayonnaise. 8 pieces'),
(4, 4, 'Matcha Ice Cream', 6, 'https://www.thespruceeats.com/thmb/9L4UIsQ_cIfgHUzBFC-tzKBLKQU=/2624x2624/smart/filters:no_upscale()/green-tea-matcha-ice-cream-2031118-hero-01-14e95fdc74154590b112b62048ba8f67.jpg');



INSERT INTO categories (id, name)
VALUES (1, Sashimi),
(2, Sushi),
(3, Dessert),
(4, Appetizer);
