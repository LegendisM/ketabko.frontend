import { Typography, Box, Paper, Button, Card, CardActions, CardContent, CardMedia, ButtonGroup, Divider, Grid } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import CategoryIcon from "@mui/icons-material/Category";

const Home: FC<PropsWithChildren> = () => {
  return (
    <Box margin={'1rem'} display={'flex'} flexDirection={'row'} gap={3}>
      home
      {
        // TODO: implement book grid items
      }
    </Box>
  );
}

export default Home;