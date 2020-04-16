--Discount schema 

DROP TABLE student CASCADE CONSTRAINTS;
DROP TABLE discount CASCADE CONSTRAINTS;
DROP TABLE productNservice CASCADE CONSTRAINTS;
DROP TABLE vendor CASCADE CONSTRAINTS;
DROP TABLE uploads CASCADE CONSTRAINTS;
DROP TABLE selects CASCADE CONSTRAINTS;

CREATE TABLE student (
  studentname     varchar2(15) not null, 
  studentID       char(8) not null,
  primary key (studentID)
);


CREATE TABLE discount (
  discountID        char(8) not null,
  brand             varchar2(50) not null, 
  percentage_off    varchar2 (15) not null,
  discount_type     varchar2 (20) not null,
  discount_code     varchar2(15) not null,
  primary key (discountID)
);

CREATE TABLE productNservice (
  productname    varchar2(15) not null,
  product_type   varchar2(15) not null, 
  primary key (productname)
);

CREATE TABLE vendor (
  vendorname    varchar2(15) not null,
  vendorID      varchar2(15) not null,
  primary key (vendorID)
);


CREATE TABLE uploads (
  vendorID      varchar2(15) not null,
  discountID    char(8) not null,
  productname   varchar2(15) not null,
  numeric_value number(8) not null,
  primary key (discountID, vendorID),

  foreign key (vendorID) references vendor(vendorID),
  foreign key (discountID) references discount(discountID),
  foreign key (productname) references productNservice(productname)
);


CREATE TABLE selects(
    discountID char(8) not null,
    studentID  char(8) not null,
    primary key (discountID,studentID),

    foreign key (discountID) references discount (discountID),
    foreign key (studentID) references student (studentID)
);