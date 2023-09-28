"use client";

import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";

const drawerWidth = "200px";

function Sidebar() {
  const pathname = usePathname();
  const parentPath = "/home/";

  const [isOpen] = useState(true);

  return (
    isOpen && (
      <Box
        borderRight={1}
        borderColor="divider"
        px={2}
        py={1}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height: "calc(100vh - 64px)",
          overflowY: "scroll",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          // For WebKit browsers
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },

          // For Firefox
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <Typography variant="h6" gutterBottom>
            Recents
          </Typography>
          <SearchBar val="" onchangeFn={() => {}} key={"Yo"} />
          <List>
            {Array.from({ length: 0 }).map((_, index) => (
              <>
                <Link
                  href={""}
                  key={`List_${""}`}
                  className="no-underline text-inherit"
                >
                  <ListItem key={"Something1"} disablePadding>
                    <ListItemButton
                      selected={pathname.includes(index.toString())}
                    >
                      <ListItemText primary={"Person"} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </>
            ))}
          </List>
        </Box>
      </Box>
    )
  );
}

export default Sidebar;
