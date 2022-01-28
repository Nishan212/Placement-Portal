import { ApolloContext } from "../../../context";
import { Job, JobDetails, QueryResolvers } from "../../../types/graphql";

export const queries: QueryResolvers<ApolloContext, Job> = {
	getAllJobs: async (_, {}, { prisma }) => {
		const jobs: Job[] | null = await prisma.job.findMany({
			include: {
				company: true,
				eligibility: {
					include: {
						branches: true,
					},
				},
			},
		});

		return jobs;
	},
	getJobDetails: async (_, { jobID }, { prisma }) => {
		const jobs: JobDetails | null = await prisma.job.findUnique({
			where: {
			  id: jobID,
			},
			include: {
				company: true,
				eligibility: {
					include: {
						branches: true,
					},
				},
			},
		  })

		return jobs;
	},
};
