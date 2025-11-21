// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const JWT_SECRET = "super-secret-key"; // เปลี่ยนตอน deploy!

export const authController = {
    register: async (req, res) => {
        try {
            const { username, password, role } = req.body;

            const existing = await User.findByUsername(username);
            if (existing) return res.status(400).json({ message: "Username already exists" });

            const hash = await bcrypt.hash(password, 10);

            await User.create(username, hash, role || "user");

            res.json({ message: "User registered successfully" });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            const user = await User.findByUsername(username);
            if (!user) return res.status(404).json({ message: "User not found" });

            const match = await bcrypt.compare(password, user.password_hash);
            if (!match) return res.status(400).json({ message: "Wrong password" });

            const token = jwt.sign(
                {
                    id: user.id,
                    username: user.username,
                    role: user.role
                },
                JWT_SECRET,
                { expiresIn: "7d" }
            );

            res.json({
                message: "Login success",
                token
            });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    me: async (req, res) => {
        const user = await User.findById(req.user.id);
        res.json(user);
    }
};
