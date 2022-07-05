Use Railway;
  
  Create Table AdminLoginPage(
		         UserName varchar(50) NOT NULL  primary key,
				 Password Varchar(50) NOT NULL,

               );

			   
  Create Table UserLogin(
	            UserName varchar(50) NOT NULL  primary key,
				 Password Varchar(50) NOT NULL,
               );

CREATE TABLE Train(
    TrainNo VARCHAR(10) NOT NULL PRIMARY KEY,
    TrainName VARCHAR(50) NOT NULL,
    Origin VARCHAR(10) NOT NULL,
    Destination VARCHAR (15) NOT NULL,
    ArrivalTime TIME,
    DepartureTime TIME,
    Fare int,
    SeatAvailability varchar(100),
   );


   CREATE TABLE Ticket
    (
     UserName VARCHAR(100),
    TrainNo VARCHAR(10),
    PNR int   Identity(1,1) NOT NULL,
    Origin VARCHAR(10) NOT NULL,
    Destination VARCHAR (15) NOT NULL,
    Fare int,
    ArrivalTime time,
    DepartureTime time,
    SeatNo int,
    FOREIGN KEY (TrainNo) REFERENCES Train (TrainNo)
);

Create Table RegisterUser(
		FirstName Varchar(50) ,
		LastName Varchar(50),
		PhoneNumber int ,
		UserName Varchar(50) Primary Key,
		Email Varchar(50),
		Password Varchar(50)
);