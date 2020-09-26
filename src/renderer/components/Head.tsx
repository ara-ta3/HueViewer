import * as React from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Device } from "../../Contract";

export interface HeadProps {
  name: string;
  ip: string;
  devices: Device[] | null;
  updateName: (name: string) => any;
  updateIP: (ip: string) => any;
  fetchDevices: (ip: string, name: string) => any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0),
  },
  base: {
    margin: theme.spacing(4, 0),
  },
}));

export const Head: React.FC<HeadProps> = (props: HeadProps) => {
  const s = useStyles();
  return (
    <div className={s.root}>
      <Box className={s.base}>
        <Typography variant="h6" component="h3">
          Hue Device Manager
        </Typography>
        <TextField
          label="Address with http or https of Hue Device"
          fullWidth={true}
          onChange={(e) => props.updateIP(e.target.value)}
        />
        <TextField
          label="UserName"
          fullWidth={true}
          onChange={(e) => props.updateName(e.target.value)}
        />
      </Box>
      <Box>
        <FetchButton
          ip={props.ip}
          name={props.name}
          fetchDevices={props.fetchDevices}
        />
      </Box>
    </div>
  );
};

const FetchButton: React.FC<{
  name: string;
  ip: string;
  fetchDevices: (ip: string, name: string) => any;
}> = ({ name, ip, fetchDevices }) => {
  return name.length === 0 || ip.length === 0 ? (
    <Button variant="contained" color="primary" disabled>
      Fetch Devices
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => fetchDevices(ip, name)}
    >
      Fetch Devices
    </Button>
  );
};
