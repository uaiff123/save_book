// models/User.js
import db from "../db.js";

export const User = {
    findByUsername: async (username) => {
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );
        return rows[0];
    },

    create: async (username, passwordHash, role) => {
        await db.execute(
            "INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)",
            [username, passwordHash, role]
        );
    },

    findById: async (id) => {
        const [rows] = await db.execute(
            "SELECT id, username, role FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    }
};
