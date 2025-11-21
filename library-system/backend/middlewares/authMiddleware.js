// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";

const JWT_SECRET = "super-secret-key";

export const requireAuth = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) return res.status(401).json({ message: "No token provided" });

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export const requireRole = (roleName) => {
    return (req, res, next) => {
        if (req.user.role !== roleName) {
            return res.status(403).json({ message: "Forbidden: insufficient permissions" });
        }
        next();
    };
};
