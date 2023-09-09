import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkIcon from '@mui/icons-material/Link';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItem, ListItemProps, styled } from '@mui/material';
import Link from 'next/link';

const style = {
  width: 250,
  maxWidth: 360,
  bgcolor: 'background.paper',
  padding: 0,
};

const StyledListItem = styled(ListItem)<ListItemProps>(() => ({
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
}));

export default function MoreOptions() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <Link href="/links">
        <StyledListItem>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Links" />
        </StyledListItem>
      </Link>
      <Divider />
      <Link href="/profile">
        <StyledListItem divider>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </StyledListItem>
      </Link>
      <Link href="/settings">
        <StyledListItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledListItem>
      </Link>
      <Divider light />
      <Link href="/logout">
        <StyledListItem>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledListItem>
      </Link>
    </List>
  );
}
