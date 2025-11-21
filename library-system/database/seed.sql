-- seed.sql — ตัวอย่างข้อมูลเริ่มต้น
INSERT INTO Users (fullname, studentId, year, major) VALUES
('นฤพนธ์ ใจดี','6201001','1','วิทยาการคอมพิวเตอร์'),
('จิราพร สมทรง','6201002','2','สารสนเทศศาสตร์');

INSERT INTO Books (title, authors, isbn, copies) VALUES
('พื้นฐานโปรแกรมมิ่ง','อาจารย์ก', '978-111', 3),
('สถิติพื้นฐาน','ดร.สถิติ', '978-222', 2);

INSERT INTO Borrows (timeIn, timeOut, bookName, libraryName, UserId, BookId) VALUES
('08:55','10:10','พื้นฐานโปรแกรมมิ่ง','ห้องสมุดกลาง',1,1),
('09:10','11:00','สถิติพื้นฐาน','ห้องสมุดคณะ',2,2);
