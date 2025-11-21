# save_book
library-system/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── bookController.js
│   │   ├── borrowController.js
│   │   ├── statsController.js
│   │   ├── adminController.js
│   │   └── authController.js        <-- ⭐ NEW (Login)
│
│   ├── middlewares/
│   │   └── authMiddleware.js        <-- ⭐ NEW (JWT / Role)
│
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── bookRoutes.js
│   │   ├── borrowRoutes.js
│   │   ├── statsRoutes.js
│   │   ├── adminRoutes.js
│   │   └── authRoutes.js            <-- ⭐ NEW (/auth/login)
│
│   ├── models/
│   │   ├── User.js                  <-- ⭐ UPDATED (auth model)
│   │   ├── Book.js
│   │   ├── Borrow.js
│   │   └── Stats.js
│
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── main.js
│
│   ├── pages/
│   │   ├── checkin.html
│   │   ├── usage.html
│   │   ├── borrow.html
│   │   ├── books.html
│   │   ├── report.html
│   │   └── admin.html
│
│   └── components/
│       ├── navbar.html
│       └── card.html
│
│
├── database/
│   ├── schema.sql      <-- ⭐ UPDATED (add users table)
│   └── seed.sql
│
└── README.md (ยกเว้นตามที่บอก)
