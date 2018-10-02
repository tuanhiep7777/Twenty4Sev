use twenty4sev;

create table sanpham(
	
    id varchar(10) primary key,
    ten nvarchar(100) not null,
    tinhtrang nvarchar(5) not null,
    soluong varchar(10) not null,
    mota nvarchar(300) not null,
    gia varchar(10) not null
);

create table nguoidung(
	
    sodienthoai varchar(11) primary key,
    ten nvarchar(30) not null,
    email varchar(50) not null,
    diachishop varchar(10) not null,
    mota nvarchar(300) not null,
    gia varchar(10) not null
)