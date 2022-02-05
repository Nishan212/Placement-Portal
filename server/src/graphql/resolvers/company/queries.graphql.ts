import { ApolloContext } from "../../../context";
import { Company,QueryResolvers } from "../../../types/graphql";

export const queries: QueryResolvers<ApolloContext, Company> = {
	getAllCompanies: async (_, {}, { prisma }) => {
		const companies: Company[] | null = await prisma.company.findMany({
				
		});

		return companies;
	},
	
};
