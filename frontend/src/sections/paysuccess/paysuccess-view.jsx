import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

export default function PaysuccessView() {
  const theme = useTheme();

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  const renderForm = (
    <>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Return 
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
        
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        marginTop:20,
        height: 1,
      }}
    >
      
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">¡Pagado con éxito!</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
          Compraste exitosamente 3 números, 
          </Typography>
          <Typography variant="h4" sx={{ mt: 2}}>
             números: 
          </Typography>
          <Typography variant="h5">#2932</Typography>
          <Typography variant="h5">#3233</Typography>
          <Typography variant="h5">#4223</Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
