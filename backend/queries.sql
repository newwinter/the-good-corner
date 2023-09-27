-- Création de la table ads 
CREATE TABLE ads 
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR(100) NOT NULL,
	description TEXT,
	owner VARCHAR(100) NOT NULL,
	price INT,
	picture VARCHAR(255),
	location VARCHAR(100),
	createdAt DATE,
	category_id INT NOT NULL,
  CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- creation de la table catégories
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);

-- Ajout des éléments dans la table
INSERT INTO ads(title,description,owner,price,picture,location,createdAt,categoryId) VALUES 
('voiture','description 1','James',10000,'https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=826&t=st=1695202577~exp=1695203177~hmac=9084b56fdd56226b2b38f3c52f4a561d9d8c76f57a33ce4408e6c1bb58d147d4','Paris','2023-09-18', 2),
('vélo vintage','description 2','Hugo',100,'https://img.freepik.com/premium-photo/orange-bicycle-with-word-bike-it_655090-80678.jpg?w=826','Bordeaux','2023-09-05', 3),
('micro-onde','description 3','Paloma',110,'https://img.freepik.com/free-photo/retro-microwaves-kitchen_23-2150711866.jpg?t=st=1695203467~exp=1695207067~hmac=fee5bf7b930f8a9c6a02d44fea40129884f66231a5bf59caf739cbf392afb3d0&w=740','Lyon','2023-09-05',3),
('MacBook Air','description 4','Punani',700,'https://img.freepik.com/premium-photo/mockup-pc-laptop-screen-contain-illustration-light-color-pastel-landing-page-generative-ai_527096-24161.jpg?w=826','Lyon','2023-09-23',3),
('Gourde neuve','description 5','Moon',20,'https://img.freepik.com/free-photo/clean-water-bottle-healthy-sports-drink-generated-by-ai_188544-13719.jpg?t=st=1695203644~exp=1695207244~hmac=fa720b58ebeb7ded36793fb4341a845a5d258fad3d97d6dfaad6c670281639e2&w=1380','Paris','2023-09-02',3),
('bureau','description 6','Isabelle',80,'https://img.freepik.com/free-photo/wireless-mouse-wheel-scrolling-data-input-tool-generated-by-ai_188544-27098.jpg?t=st=1695203916~exp=1695207516~hmac=9c53cfd698fda225917eddbbcbbca6cc62ffc3cfa05202fbdf92e648bd3a29d2&w=1380','Paris','2023-09-03',3),
('souris','description 7','Marion',60,'https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=826&t=st=1695202577~exp=1695203177~hmac=9084b56fdd56226b2b38f3c52f4a561d9d8c76f57a33ce4408e6c1bb58d147d4','Bordeaux','2023-09-01',3),
('moto','description 8','Ambre',4000,'https://img.freepik.com/free-vector/illustration-motorcycle-red-color_1308-35859.jpg?w=1380&t=st=1695203375~exp=1695203975~hmac=b1b9d8873380830ec6eebf037c7b78afa485592910d99556509eb33107c00972','Paris','2023-09-18',3),
('lit','description 9','Louise',100,'https://img.freepik.com/free-photo/bed-bedroom-decorated-with-brazilian-folklore-design_23-2150794095.jpg?t=st=1695203990~exp=1695207590~hmac=4c0775f97226116113f741e6c0bf40e1bf3ee315aabe0e4adfba46b98baf04a0&w=1380','Lyon','2023-09-18',3),
('salon de jardin','description 10','Johanne',200,'https://img.freepik.com/free-photo/rustic-patio-furniture-house-deck-with-vegetation_23-2150698282.jpg?t=st=1695204017~exp=1695207617~hmac=e05955c46daeeb1bbbe13cc6f18f8ed68e0bbff2a55cd6e4574ea46f1b43fbff&w=740','Lyon','2023-09-27',3),
('broderie','description 11','Margaux',40,'https://img.freepik.com/premium-photo/round-box-with-red-flower-design_867442-1543.jpg?w=1380','Bordeaux','2023-09-12', 3),
('pantalon','description 12','Elips',20,'https://img.freepik.com/free-photo/window-room-with-surreal-mystical-view_23-2150309272.jpg?t=st=1695204103~exp=1695207703~hmac=4c270201c6554aead68a3f11914ac6816d7a9f2ad2215c9db960fa4838f1b29f&w=740','Paris','2023-09-18',1),
('commode','description 13','Ludovic',100,'https://img.freepik.com/free-photo/home-entryway-with-modern-furnishing-design_23-2150791114.jpg?t=st=1695204124~exp=1695207724~hmac=10e8b20501298ff4d1da5634f228b798948c49bea7c6c5579e69680099587201&w=1380','Lyon','2023-09-21',3),
('lampe','description 14','Stéphane',30,'https://img.freepik.com/free-photo/lamp-with-word-lamp-it_1340-23634.jpg?t=st=1695204140~exp=1695207740~hmac=98a1a51704e30d1d17925d6f59bb4f5d2c3b7254ab6c4602f86806e0bf32d41a&w=1380','Lyon','2023-09-08',3),
('cactus','description 15','Dider',50,'https://img.freepik.com/premium-photo/world-s-most-beautiful-cactus_973612-346.jpg?w=740','Bordeaux','2023-09-11', 3),
('télévision','description 16','Salomé',120,'https://img.freepik.com/free-photo/retro-tv-indoors_23-2150711800.jpg?t=st=1695204220~exp=1695207820~hmac=532151b03431563f1e5ffb248cbc56dbdb5fcdbb0aab6855d4b8b16eaf64cfd9&w=740','Lyon','2023-09-22',3),
('table','description 17','Jules',70,'https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=826&t=st=1695202577~exp=1695203177~hmac=9084b56fdd56226b2b38f3c52f4a561d9d8c76f57a33ce4408e6c1bb58d147d4','Paris','2023-09-16',3),
('chaises','description 18','Opale',150,'https://img.freepik.com/free-photo/view-room-furniture-monochrome-palette_23-2150635152.jpg?t=st=1695204247~exp=1695207847~hmac=769f204fbfbc92b76a037479424fc083d8c87425754868af3988360e524538f8&w=1380','Lyon','2023-09-03',3),
('longboard','description 19','Saphir',100,'https://img.freepik.com/premium-photo/most-amazing-hd-8k-wallpaper-stock-photographic-image_915071-34641.jpg?w=996','Bordeaux','2023-09-17',3),
('skate','description 20','Blanche',60,'https://img.freepik.com/premium-photo/technological-design-orange-skateboard-dynamic-parking-lot_899449-55517.jpg?w=1380','Bordeaux','2023-09-10',3);

-- selectionner tout les éléments de la table
SELECT * from ads;

-- selection de tout les annonces de Bordeaux
SELECT * from ads WHERE location = "Bordeaux";

-- supprimer les annonces où le prix est supérieur à 40€
SELECT * FROM ads WHERE price < 40;

-- update du prix à 0€ pour les annonces du 1er septembre
UPDATE ads SET price = 0 WHERE createdAt = "2023-09-01";
SELECT * FROM ads WHERE price = 0;

-- Afficher la moyenne des prix des objets vendus à Paris 
SELECT AVG(price), location FROM ads WHERE location = "Paris";


-- Afficher les moyenne des prix par ville 
SELECT AVG(price), location FROM ads GROUP BY location;

-- DROP TABLE ads;

INSERT INTO categories(name) VALUES
('vêtements'),
('voiture'),
('autre');

-- selectionner tout les éléments de la table
SELECT * from categories;

-- selection de tout les articles de la catégories vêtements
SELECT * from ads WHERE category_id = 1;
SELECT * from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name = "vêtements";

-- afficher les annonces catégories vêtements et voiture
SELECT * from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name = "vêtements" OR c.name = "voiture";

-- moyenne des prix des annonces de la categorie autre
SELECT AVG(price), c.name from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name = "autre";

-- annonces dont le nom commence par V
SELECT * from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name LIKE "V%";
