import { Typography, Paper, Button, Stack, Box, } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Home: FC<PropsWithChildren> = () => {
  const test = 'ت اتتوضیح اتتوض یحاتتو ضیحات وضیحات توضیحات توضیح اتتوضیحاتتوضیح اتتوضیح اتتوض یحاتتو ضیحات';
  return (
    <>
      <Box margin={'1rem'}>
        <Typography marginLeft={'0.2rem'} marginBottom={'0.8rem'} fontWeight={'bold'}>رایگان مشاهده کنید</Typography>
        <Stack className="horizontal-mask" display={'flex'} flexDirection={'row'} gap={2} overflow={'auto'} paddingBottom={'12px'}>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
        </Stack >
      </Box>
      <Box margin={'1rem'} marginTop={'1.5rem'}>
        <Typography marginLeft={'0.2rem'} marginBottom={'0.8rem'} fontWeight={'bold'}>مشهور ترین ها را بشناسید</Typography>
        <Stack className="horizontal-mask" display={'flex'} flexDirection={'row'} gap={2} overflow={'auto'} paddingBottom={'12px'}>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
          <Paper
            elevation={0}
            sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
          >
            <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <img
                src="/images/book/book-flat.png"
                style={{ width: '110px', height: '150px' }}
              />
              <Stack direction={'column'} gap={1}>
                <Typography fontWeight={'bold'}>اثر مرکب</Typography>
                <Typography variant="caption">
                  {`${test.slice(0, 90)}...`}
                </Typography>
              </Stack>
            </Stack>
            <Button variant="contained" fullWidth>مشاهده</Button>
          </Paper>
        </Stack >
      </Box>
    </>
  );
}

export default Home;