-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    
    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

INSERT INTO "user" ("user_id", "username", "name", "password") VALUES
('018f3f70-8c44-7f4b-bc3b-b8e4a8f1d201', 'acha', 'Miguel Vargas', 'secret123'),
('018f3f70-8c44-7f4b-bc3b-b8e4a8f1d202', 'alopez', 'Ana López', 'admin2025'),
('018f3f70-8c44-7f4b-bc3b-b8e4a8f1d203', 'cperez', 'Carlos Pérez', 'pass789'),
('018f3f70-8c44-7f4b-bc3b-b8e4a8f1d204', 'lgomez', 'Laura Gómez', 'clave456'),
('018f3f70-8c44-7f4b-bc3b-b8e4a8f1d205', 'jramirez', 'Jorge Ramírez', 'testpass');
