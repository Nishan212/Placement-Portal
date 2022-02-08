import React from "react";
import moment from "moment";
import TableCell from "./../TableCell";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { TableCellProps as MaterialTableCellProps } from "@mui/material/TableCell";
import getBadgeColor from "../../utils/getBadgeColor";
interface TableCellProps extends MaterialTableCellProps {
	registrationStartDate: string;
	registrationDeadline: string;
}

const StatusCell = ({ registrationStartDate, registrationDeadline }: TableCellProps) => {
	console.log("registrationStartDate", moment(registrationStartDate).format());
	console.log("registrationDeadline", moment(registrationDeadline).format());
	let today = new Date();
	console.log("today", moment(today).format());
	const theme = useTheme();
	const colors = getBadgeColor(theme.badgeColor, "PENDING");
	return (
		<TableCell>
			<span
				style={{
					color: colors?.textColor,
					backgroundColor: colors?.backgroundColor,
					padding: "0.6rem 0.8rem",
					fontSize: "0.5rem",
					fontWeight: 600,
					borderRadius: "2rem",
					maxWidth: "fit-content",
					whiteSpace: "nowrap",
				}}
			>
				{status}
			</span>
			<Typography sx={{ fontSize: "0.5rem", marginTop: "0.75rem" }}> </Typography>
		</TableCell>
	);
};

export default StatusCell;
