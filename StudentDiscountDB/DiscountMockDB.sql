--discount database

INSERT INTO student VALUES ('CharlieBrown', '01800000');
INSERT INTO student VALUES ('Snoopy', '02700001');

INSERT INTO discount VALUES ('abcd0000', 'Adobe','60%','Electronics','STU60');
INSERT INTO discount VALUES ('abcd0001', 'Pottery Barn Teen','15%','Home Decor','STU15pb');
INSERT INTO discount VALUES ('abcd0002', 'Madewell','15%','Retail','STU15md');
INSERT INTO discount VALUES ('abcd0003', 'Penske','10%','Services','STU10pn');
INSERT INTO discount VALUES ('abcd0004', 'Amtrak','10%','Transportation','STU10am');
INSERT INTO discount VALUES ('abcd0005', 'JCrew','15%','Retail','STU15jc');
INSERT INTO discount VALUES ('abcd0006', 'FedEx','20%','Retail','STU20fe');
INSERT INTO discount VALUES ('abcd0007', 'Amazon','50%','Retail','STU50ap');
INSERT INTO discount VALUES ('abcd0008', 'Banana Republic','15%','Retail','STU15br');
INSERT INTO discount VALUES ('abcd0009', '1800Flowers','20%','Services','STU15f');


INSERT INTO productNservice VALUES('AdobeCloud','Electronics');
INSERT INTO productNservice VALUES('PBTeen','Home Decor');
INSERT INTO productNservice VALUES('Madewell','Fashion');
INSERT INTO productNservice VALUES('PenskeMoving','Serives');
INSERT INTO productNservice VALUES('Amtrak','Transportation');
INSERT INTO productNservice VALUES('JCrew','Fashion');
INSERT INTO productNservice VALUES('FedEx','Services');
INSERT INTO productNservice VALUES('AmazonPrime','Retail');
INSERT INTO productNservice VALUES('BananaRepublic','Fashion');
INSERT INTO productNservice VALUES('1800Flowers','Services');

INSERT INTO vendor VALUES('Adobe','adobe0000');
INSERT INTO vendor VALUES('PBTeen','pb0000');
INSERT INTO vendor VALUES('Madewell','md0000');
INSERT INTO vendor VALUES('Penske','pn0000');
INSERT INTO vendor VALUES('Amtrak','am0000');
INSERT INTO vendor VALUES('JCrew','jc0000');
INSERT INTO vendor VALUES('FedEx','fe0000');
INSERT INTO vendor VALUES('Amazon','ap0000');
INSERT INTO vendor VALUES('Banana Republic','br0000');
INSERT INTO vendor VALUES('1800Flowers','1800f0000');

INSERT INTO uploads VALUES('adobe0000','abcd0000','AdobeCloud','60');
INSERT INTO uploads VALUES('pb0000','abcd0001','PBTeen','15');
INSERT INTO uploads VALUES('md0000','abcd0002','Madewell','15');
INSERT INTO uploads VALUES('pn0000','abcd0003','PenskeMoving','10');
INSERT INTO uploads VALUES('am0000','abcd0004','Amtrak','10');
INSERT INTO uploads VALUES('jc0000','abcd0005','JCrew','15');
INSERT INTO uploads VALUES('fe0000','abcd0006','FedEx','20');
INSERT INTO uploads VALUES('ap0000','abcd0007','AmazonPrime','50');
INSERT INTO uploads VALUES('br0000','abcd0008','BananaRepublic','15');
INSERT INTO uploads VALUES('1800f0000','abcd0009','1800Flowers','20');

INSERT INTO selects VALUES('abcd0000','01800000');
INSERT INTO selects VALUES('abcd0001','01800000');
INSERT INTO selects VALUES('abcd0002','01800000');
INSERT INTO selects VALUES('abcd0003','01800000');
INSERT INTO selects VALUES('abcd0004','01800000');
INSERT INTO selects VALUES('abcd0005','02700001');
INSERT INTO selects VALUES('abcd0006','02700001');
INSERT INTO selects VALUES('abcd0007','02700001');
INSERT INTO selects VALUES('abcd0008','02700001');
INSERT INTO selects VALUES('abcd0009','02700001');