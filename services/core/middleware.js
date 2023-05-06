import jwt from "jsonwebtoken";
const tokenSecret = process.env.TOKEN_SECRET;

//talent
// { userId: 18, iat: 1675006057, exp: 1675009657 }

export const tokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  } else {
    try {
      const decoded = await jwt.verify(token, tokenSecret);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid Token" });
    }
  }
};
