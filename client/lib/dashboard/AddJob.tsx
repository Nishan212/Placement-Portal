import * as React from "react";
import Menu from "@mui/material/Menu";
import Button from "./../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import Radio from "./../../components/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function AddMenuButton() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [courseVal, setCourseVal] = React.useState<string>("");
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button endIcon={<AddIcon />} text="New Job" variant="outlined" rounded onClick={handleClick} />
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<RadioGroup value={courseVal} onChange={e => setCourseVal(e.target.value)}>
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
					<FormControlLabel value="other" control={<Radio />} label="Other" />
				</RadioGroup>
			</Menu>
		</>
	);
}
