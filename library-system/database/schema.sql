CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE page_views (
  id SERIAL PRIMARY KEY,
  viewed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE logs (
  id SERIAL PRIMARY KEY,
  action TEXT,
  user_id INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

