import { AppBar, Avatar, Button, Container, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

import Popover from '@mui/material/Popover';
import { useState } from "react";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";

const sx = {
  MainAppbar: {
    bgcolor: '#FFFFFF',
    boxShadow: 1,
  }
};

export default function MainAppBar() {

  const naviate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar position="absolute" open sx={sx.MainAppbar}>
      <Container maxWidth="100%">
        <Toolbar disableGutters sx={{
          color: 'black'
        }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>DataAktual.com</Typography>
          <Button color="inherit" onClick={() => naviate('/')}>Dashboard DPR RI</Button>
          <Button color="inherit" onClick={() => naviate('/data')}>Input DATA DPR RI</Button>
          <Divider orientation="vertical" flexItem sx={{ marginLeft: 1, margin: "20px 4px 20px 12px", color: '#98A2B3', border: "1px solid #98A2B3" }} />
          <ListItem sx={{ width: 'auto', cursor: 'pointer' }} onClick={(e) => setAnchorEl(e.currentTarget)} >
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src="/images/avatar.jpeg" />
            </ListItemAvatar>
          </ListItem>

          <Popover
            id={Boolean(anchorEl) ? 'simple-popover' : undefined}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            elevation={4}
          >
            <List style={{ width: 300 }}>
              <ListItemButton onClick={() => naviate('/login')} sx={{ color: "red" }}>
                <ListItemAvatar>
                  <ExitToAppIcon sx={{ fontSize: 24, ml: 1, mt: "6px" }} />
                </ListItemAvatar>
                <ListItemText primary={
                  <Typography variant='button' >
                    Logout
                  </Typography>
                } secondary="Exit Aplication" />
              </ListItemButton>

            </List>
          </Popover>

        </Toolbar>
      </Container>
    </AppBar>
  );

}