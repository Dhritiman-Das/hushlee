import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface IProp {
  val: string;
  onchangeFn: (x: string) => void;
}

const SearchBar: React.FC<IProp> = ({ val, onchangeFn }) => {
  //   const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onchangeFn(event.target.value);
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        // width: 300,
      }}
    >
      <InputBase
        value={val}
        onChange={handleSearchChange}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
