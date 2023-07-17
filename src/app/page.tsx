import { Typography, Box, Paper, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import CategoryIcon from "@mui/icons-material/Category";

export const Home: FC<PropsWithChildren> = () => {
  return (
    <Box padding={'1rem'} paddingRight={'2.5rem'} display={'flex'} flexDirection={'row'} gap={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/common/logo-text.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            عنوان کتاب
          </Typography>
          <Typography variant="body2" color="text.secondary">
            توضیحات تستی درباره کتاب به صورت چند خطی
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">خرید</Button>
          <Button size="small">مشاهده</Button> 
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/common/logo-text.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            عنوان کتاب
          </Typography>
          <Typography variant="body2" color="text.secondary">
            توضیحات تستی درباره کتاب به صورت چند خطی
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">خرید</Button>
          <Button size="small">مشاهده</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Home;