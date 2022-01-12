import { Box, Grid, GridProps, Stack, StackProps, Typography, FormControl } from "@mui/material";
import { Input } from "components";
import styled from "styled-components";
import { uiColor } from "styles/styles";

export const ProfileContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const UpdateProfileContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Section = styled(Box)`
	border: 1px solid ${uiColor.gray};
	border-radius: 30px;
	padding: 3em 4em;
	margin-top: 4em;
	position: relative;
	width: 80%;
	margin-left: 0;
`;

export const SectionHeading = styled(Typography)`
	position: absolute;
	top: -15px;
	background-color: white;
	font-weight: 500;
	padding: 0 0.8em;
`;

export const PersonalDetails = styled(Section)``;
export const AcademicDetails = styled(Section)``;

export const MainInfoRow = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1em;
`;

interface MainInfoProps extends StackProps {
	heading: string;
	text: string;
}

export const MainInfo = ({ heading, text }: MainInfoProps) => {
	return (
		<Stack direction={"column"} alignItems={"flex-start"}>
			<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{heading}
			</Typography>
			<Typography
				marginTop={"0.5em"}
				fontSize={"1.2rem"}
				letterSpacing={"0.5px"}
				color={uiColor.darkestGray}
				variant="body1"
			>
				{text}
			</Typography>
		</Stack>
	);
};

export const InfoGrid = styled(Grid)`
	margin-top: 3em;
`;

interface InfoProps extends GridProps {
	heading: string;
	text: string;
}

export const Info = ({ heading, text, width, xs }: InfoProps) => {
	return (
		<Grid item xs={xs} width={width}>
			<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.6rem"} variant="h6">
				{heading}
			</Typography>
			<Typography
				sx={{ wordBreak: "break-word" }}
				fontSize={"0.7rem"}
				marginTop={"0.3em"}
				color={uiColor.darkestGray}
				variant="body1"
			>
				{text}
			</Typography>
		</Grid>
	);
};

interface UpdateInfoProps extends GridProps {
	heading: string;
	text: string;
	fullWidth?: boolean;
}

export const UpdateInfo = ({ heading, text, width, xs, fullWidth }: UpdateInfoProps) => {
	return (
		<Grid
			item
			xs={xs}
			width={width}
			sx={{
				"& .MuiFormControl-root": {
					width: "100%",
				},
			}}
		>
			<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.6rem"} variant="h6">
				{heading}
			</Typography>
			<FormControl>
				<Input
					sx={{
						"& .MuiInputBase-formControl": {
							borderRadius: "8px",
							marginTop: "0.4em",
						},
						"& .MuiInputBase-inputSizeSmall": {
							fontSize: "0.7rem",
							padding: "6px 14px",
							letterSpacing: "0.5px",
						},
					}}
					size="small"
					fullWidth={fullWidth}
					defaultValue={text}
				/>
			</FormControl>
		</Grid>
	);
};

interface Parent {
	name: string;
	mobileNumber: string;
	occupation: string;
	organization: string;
}

interface Student {
	dateOfBirth: string;
	gender: string;
	caste: string;
	height: string;
	weight: string;
	learnerID: string;
	emailID: string;
	altEmailID: string;
	linkedInID: string;
	mobileNumber: string;
	altMobileNumber: string;
	skypeID: string;
	physicalDisability: string;
	father: Parent;
	mother: Parent;
	passportNumber: string;
	aadharNumber: string;
	panNumber: string;
	city: string;
	state: string;
	country: string;
	permanentAddress: string;
	currentAddress: string;
}
interface StudentDetailsProps {
	student: Student;
}

export const StudentDetails = ({ student }: StudentDetailsProps) => {
	return (
		<InfoGrid container rowGap={"3em"}>
			<Info width={"20%"} heading="Date Of Birth" text={student.dateOfBirth} />
			<Info width={"20%"} heading="Gender" text={student.gender} />
			<Info width={"20%"} heading="Caste" text={student.caste} />
			<Info width={"20%"} heading="Height" text={`${student.height} CMS`} />
			<Info width={"20%"} heading="Weight" text={`${student.weight} KGS`} />
			<Info width={"30%"} heading="Learner ID" text={student.learnerID} />
			<Info width={"33%"} heading="Email ID" text={student.emailID} />
			<Info width={"33%"} heading="Alt Email ID" text={student.altEmailID} />
			<Info width={"25%"} heading="Mobile Number" text={student.mobileNumber} />
			<Info width={"25%"} heading="Alt Mobile Number" text={student.altMobileNumber} />
			<Info width={"25%"} heading="Skype ID" text={student.skypeID} />
			<Info width={"25%"} heading="LinkedIn ID" text={student.linkedInID} />
			<Info width={"25%"} heading="Father’s Name" text={student.father.name} />
			<Info width={"25%"} heading="Father’s Mobile Number" text={student.father.mobileNumber} />
			<Info width={"25%"} heading="Father’s Occupation" text={student.father.occupation} />
			<Info width={"25%"} heading="Father’s Organization" text={student.father.organization} />
			<Info width={"25%"} heading="Mother’s Name" text={student.mother.name} />
			<Info width={"25%"} heading="Mother’s Mobile Number" text={student.mother.mobileNumber} />
			<Info width={"25%"} heading="Mother’s Occupation" text={student.mother.occupation} />
			<Info width={"25%"} heading="Mother’s Organization" text={student.mother.organization} />
			<Info width={"25%"} heading="Passport Number" text={student.passportNumber} />
			<Info width={"25%"} heading="Aadhar Number" text={student.aadharNumber} />
			<Info width={"25%"} heading="PAN Number" text={student.panNumber} />
			<Info width={"25%"} heading="Physical Disability" text={student.physicalDisability} />
			<Info width={"25%"} heading="City" text={student.city} />
			<Info width={"25%"} heading="State" text={student.country} />
			<Info width={"25%"} heading="Country" text={student.country} />
			<Info heading="Permanent Address" text={student.permanentAddress} />
			<Info heading="Current Address" text={student.currentAddress} />
		</InfoGrid>
	);
};
interface UpdateStudentDetailsProps {
	student: Student;
}

export const UpdateStudentDetails = ({ student }: UpdateStudentDetailsProps) => {
	return (
		<InfoGrid container rowGap={"3em"} columnGap={"2%"}>
			<UpdateInfo width={"18%"} heading="Date Of Birth" text={student.dateOfBirth} />
			<UpdateInfo width={"18%"} heading="Gender" text={student.gender} />
			<UpdateInfo width={"18%"} heading="Caste" text={student.caste} />
			<UpdateInfo width={"18%"} heading="Height" text={`${student.height} CMS`} />
			<UpdateInfo width={"18%"} heading="Weight" text={`${student.weight} KGS`} />
			<Info width={"30%"} heading="Learner ID" text={student.learnerID} />
			<Info width={"33%"} heading="Email ID" text={student.emailID} />
			<UpdateInfo width={"33%"} heading="Alt Email ID" text={student.altEmailID} />
			<UpdateInfo width={"23%"} heading="Mobile Number" text={student.mobileNumber} />
			<UpdateInfo width={"23%"} heading="Alt Mobile Number" text={student.altMobileNumber} />
			<UpdateInfo width={"23%"} heading="Skype ID" text={student.skypeID} />
			<UpdateInfo width={"23%"} heading="LinkedIn ID" text={student.linkedInID} />
			<UpdateInfo width={"23%"} heading="Father’s Name" text={student.father.name} />
			<UpdateInfo width={"23%"} heading="Father’s Mobile Number" text={student.father.mobileNumber} />
			<UpdateInfo width={"23%"} heading="Father’s Occupation" text={student.father.occupation} />
			<UpdateInfo width={"23%"} heading="Father’s Organization" text={student.father.organization} />
			<UpdateInfo width={"23%"} heading="Mother’s Name" text={student.mother.name} />
			<UpdateInfo width={"23%"} heading="Mother’s Mobile Number" text={student.mother.mobileNumber} />
			<UpdateInfo width={"23%"} heading="Mother’s Occupation" text={student.mother.occupation} />
			<UpdateInfo width={"23%"} heading="Mother’s Organization" text={student.mother.organization} />
			<UpdateInfo width={"23%"} heading="Passport Number" text={student.passportNumber} />
			<UpdateInfo width={"23%"} heading="Aadhar Number" text={student.aadharNumber} />
			<UpdateInfo width={"23%"} heading="PAN Number" text={student.panNumber} />
			<UpdateInfo width={"23%"} heading="Physical Disability" text={student.physicalDisability} />
			<UpdateInfo width={"23%"} heading="City" text={student.city} />
			<UpdateInfo width={"23%"} heading="State" text={student.country} />
			<UpdateInfo width={"23%"} heading="Country" text={student.country} />
			<UpdateInfo width={"100%"} heading="Permanent Address" text={student.permanentAddress} />
			<UpdateInfo width={"100%"} heading="Current Address" text={student.currentAddress} />
		</InfoGrid>
	);
};
export const AcademicInfoContainer = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
`;

export const AcademicRecordContainer = styled(Stack)`
	flex-direction: column;
	width: 80%;
	margin-top: 2em;
`;

interface SemesterProps {
	semesterNum: number;
	gpa: number;
	backlogs: number;
	dateChanges: number;
}

export const Semester = ({ semesterNum, backlogs, dateChanges, gpa }: SemesterProps) => {
	return (
		<Box sx={{ margin: "1em 0" }}>
			<Typography
				color={uiColor.gray}
				fontWeight={"600"}
				fontSize={"0.8rem"}
				variant="h5"
			>{`Semester ${semesterNum}`}</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<Info width={"30%"} heading="GPA" text={gpa.toString()} />
				<Info width={"30%"} heading="Backlogs" text={backlogs.toString()} />
				<Info width={"30%"} heading="Date Changes" text={dateChanges.toString()} />
			</Stack>
		</Box>
	);
};

interface EntranceTestProps {
	jeeMainsRank?: string;
	jeeAdvancedRank?: string;
	metRank?: string;
}

export const EntranceTest = ({ metRank, jeeAdvancedRank, jeeMainsRank }: EntranceTestProps) => {
	return (
		<Box sx={{ margin: "1em 0" }}>
			<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{"Entrance Test"}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<Info width={"30%"} heading="JEE Mains Rank" text={jeeMainsRank ?? "-"} />
				<Info width={"30%"} heading="JEE Advanced" text={jeeAdvancedRank ?? "-"} />
				<Info width={"30%"} heading="MET Rank" text={metRank ?? "-"} />
			</Stack>
		</Box>
	);
};

interface SchoolDetailProps {
	percentage: number;
	school: string;
	board: string;
	yearOfCompletion: string;
	country: string;
	heading: string;
}

export const SchoolDetails = ({ board, country, heading, percentage, school, yearOfCompletion }: SchoolDetailProps) => {
	return (
		<Box sx={{ margin: "2em 0" }}>
			<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{heading}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<Info width={"20%"} heading="Percentage" text={`${percentage.toString()}%`} />
				<Info width={"30%"} heading="School" text={school} />
				<Info width={"20%"} heading="Board" text={board} />
				<Info width={"20%"} heading="Year Of Completion" text={yearOfCompletion} />
				<Info width={"20%"} heading="Country" text={country} />
			</Stack>
		</Box>
	);
};

interface UpdateEntranceTestProps {
	jeeMainsRank?: string;
	jeeAdvancedRank?: string;
	metRank?: string;
}

export const UpdateEntranceTest = ({ metRank, jeeAdvancedRank, jeeMainsRank }: UpdateEntranceTestProps) => {
	return (
		<Box sx={{ margin: "1em 0" }}>
			<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{"Entrance Test"}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<UpdateInfo width={"30%"} heading="JEE Mains Rank" text={jeeMainsRank ?? "-"} />
				<UpdateInfo width={"30%"} heading="JEE Advanced" text={jeeAdvancedRank ?? "-"} />
				<UpdateInfo width={"30%"} heading="MET Rank" text={metRank ?? "-"} />
			</Stack>
		</Box>
	);
};

interface UpdateSchoolDetailProps {
	percentage: number;
	school: string;
	board: string;
	yearOfCompletion: string;
	country: string;
	heading: string;
}

export const UpdateSchoolDetails = ({
	board,
	country,
	heading,
	percentage,
	school,
	yearOfCompletion,
}: UpdateSchoolDetailProps) => {
	return (
		<Box sx={{ margin: "2em 0" }}>
			<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{heading}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"} gap={"2%"}>
				<UpdateInfo width={"20%"} heading="Percentage" text={`${percentage.toString()}%`} />
				<UpdateInfo width={"30%"} heading="School" text={school} />
				<UpdateInfo width={"20%"} heading="Board" text={board} />
				<UpdateInfo width={"20%"} heading="Year Of Completion" text={yearOfCompletion} />
				<UpdateInfo width={"20%"} heading="Country" text={country} />
			</Stack>
		</Box>
	);
};
