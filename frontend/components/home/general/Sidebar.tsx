"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";
import { useRouter as cool } from "next/router";

const drawerWidth = 200;

const Sidebar = () => {
  const router = useRouter();
  const parentPath = "home/";
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
    console.log(window.location.href);
  }, []);
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };
  const redirectTo = (link: string) => {
    console.log({ link });

    router.push(link);
  };
  return (
    <>
      {isOpen && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
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
              ].map((text, index) => (
                <Link
                  href={text.redirect}
                  sx={{ textDecoration: "none", color: "inherit" }}
                  key={"List_" + text.name}
                >
                  <ListItem key={text.name} disablePadding>
                    <ListItemButton
                      selected={currentUrl.includes(parentPath + text.redirect)}
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
              ].map((text, index) => (
                <Link
                  href={text.redirect}
                  sx={{ textDecoration: "none", color: "inherit" }}
                  key={"List_" + text.name}
                >
                  <ListItem key={text.name} disablePadding>
                    <ListItemButton
                      selected={currentUrl.includes(parentPath + text.redirect)}
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
      )}
    </>
  );
};

export default Sidebar;
