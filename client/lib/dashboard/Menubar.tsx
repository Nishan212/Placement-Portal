import React from "react";
import Stack from "@mui/material/Stack";
import { Button as SimpleButton } from "@mui/material";

import SearchBar from "./../../components/SearchBar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { useTheme, styled } from "@mui/material";
import AddJob from "./AddJob";
const Menubar = () => {
	const theme = useTheme();
	const StyledButton = styled(SimpleButton)({ color: theme.uiColor.darkGray });

	return (
		<Stack direction="row" justifyContent="space-between" sx={{ marginTop: "1%" }}>
			<AddJob />
			<SearchBar />
			<StyledButton endIcon={<FilterAltIcon />}>Filter</StyledButton>
			<StyledButton endIcon={<SortByAlphaIcon />}>Sort</StyledButton>
		</Stack>
	);
};

export default Menubar;
