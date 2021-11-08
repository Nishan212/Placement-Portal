import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";
import { ApolloContext } from "./context";

export type PayloadData = {
	id: string;
	email: string;
	userType: "STUDENT" | "FACULTY" | "ADMIN";
};

const checkAuth = (req: ApolloContext["req"]) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split("Bearer ")[1];
		if (token) {
			try {
				const user = jwt.verify(token, process.env.SECRET_KEY!) as PayloadData;
				return user;
			} catch (error) {
				throw new AuthenticationError("Invalid Authentication token");
			}
		}
		throw new Error("Authentication token must be 'Bearer <token>' ");
	}

	throw new Error("Authorization header must be provided");
};
export default checkAuth;
