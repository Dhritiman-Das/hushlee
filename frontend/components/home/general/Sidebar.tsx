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
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 200;

function Sidebar() {
  const pathname = usePathname();
  const parentPath = "/home/";

  const [isOpen2] = useState(true);

  return (
    isOpen2 && (
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { name: "Chat", icon: ChatIcon, redirect: "chat" },
              { name: "Link", icon: InsertLinkIcon, redirect: "link" },
              { name: "Feedback", icon: QuizIcon, redirect: "feedback" },
            ].map((text) => (
              <Link
                href={parentPath + text.redirect}
                key={`List_${text.name}`}
                className="no-underline text-inherit"
              >
                <ListItem key={text.name} disablePadding>
                  <ListItemButton
                    selected={pathname.includes(parentPath + text.redirect)}
                  >
                    <ListItemIcon>
                      <text.icon />
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { name: "Settings", icon: SettingsIcon, redirect: "settings" },
              {
                name: "Profile",
                icon: AccountCircleIcon,
                redirect: "profile",
              },
            ].map((text) => (
              <Link
                href={parentPath + text.redirect}
                key={`List_${text.name}`}
                className="no-underline text-inherit"
              >
                <ListItem key={text.name} disablePadding>
                  <ListItemButton
                    selected={pathname.includes(parentPath + text.redirect)}
                  >
                    <ListItemIcon>
                      <text.icon />
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    )
  );
}

export default Sidebar;
