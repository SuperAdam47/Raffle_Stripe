import { useState } from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Drawer,Button , Badge } from '@mui/material';
import axios from 'axios';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import './style.css';
import { Height } from '@mui/icons-material';

export default function LandingView() {
  const theme = useTheme();

  const [cartItems, setCartItems] = useState(0);

  const handleSubmit = async(e) =>{
      e.preventDefault();

      let amount=cartItems;
      try {
        const res=await  axios.post("http://localhost:4242/create-checkout-session",{amount});
        // const res= await axios.post("http://localhost:4242/create-checkout-session");
        // console.log("Form data sent successfully!", res);
      }
      catch(error){
        console.log("error in sending formdata", error);
      }
  }
  const handleBuy = () => {
    // Increment the number of items in the cart when user clicks Buy button
    setCartItems(cartItems + 1);
  };

  const handleBuyByNum=(num)=>{
      setCartItems(cartItems+num);
  }

  
  const handleCancel = () => {
    if (cartItems > 0) {
    setCartItems(cartItems - 1);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const renderForm = (
    <>
   <Card  variant="outlined" sx={{backgroundColor: "#ffffff", p:2, m:1, borderRadius: 1,}}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{px:10}}>
          <Typography gutterBottom variant="h3" component="div">
             COMPRE 3 NÚMEROS
          </Typography>
        </Stack>
        <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography gutterBottom variant="h3" color="#2159f3" component="div">
          $9.000
          </Typography>
        </Stack>
        <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
         <Stack direction="row" alignItems="center" justifyContent="center" paddingTop="5px">
         <Button   style={{ backgroundColor: '#000000', color:'#ffffff', fontSize:"16px",}}   onClick={()=>handleBuyByNum(3)}>COMPRAR AHORA</Button>
         </Stack>
    </Card>
    <Card variant="outlined" sx={{backgroundColor: "#ffffff", p:2, m:1 ,borderRadius: 1}}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{px:10}}> 
          <Typography gutterBottom variant="h3" component="div">
             COMPRE 6 NÚMEROS
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography gutterBottom variant="h3" color="#2159f3" component="div">
          $18.000
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
      <Stack direction="row" alignItems="center" justifyContent="center" paddingTop="5px">
         <Button   style={{ backgroundColor: '#000000', color:'#ffffff', fontSize:"16px", }} onClick={()=>handleBuyByNum(6)}>COMPRAR AHORA</Button>
         </Stack>
    </Card>

    <Card variant="outlined" sx={{backgroundColor: "#ffffff", p:2, m:1 ,borderRadius: 1}}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{px:9}}>
          <Typography gutterBottom variant="h3" component="div">
             COMPRE 10 NÚMEROS
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography gutterBottom variant="h3" color="#2159f3" component="div">
          $30.000
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
      <Stack direction="row" alignItems="center" justifyContent="center" paddingTop="5px">
         <Button   style={{ backgroundColor: '#000000', color:'#ffffff', fontSize:"16px",}} onClick={()=>handleBuyByNum(10)}>COMPRAR AHORA</Button>
         </Stack>
    </Card>

    <Card variant="outlined" sx={{backgroundColor: "#ffffff", p:2, m:1}}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{px:9}}>
          <Typography gutterBottom variant="h3" component="div">
             COMPRE 30 NÚMEROS
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" color="#2159f3" justifyContent="center">
          <Typography gutterBottom variant="h3" component="div">
          $90.000
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" justifyContent="center" paddingTop="5px">
         <Button   style={{ backgroundColor: '#000000', color:'#ffffff', fontSize:"16px",}} onClick={()=>handleBuyByNum(30)}>COMPRAR AHORA</Button>
        </Stack>
    </Card>

    <Card variant="outlined" sx={{backgroundColor: "#ffffff", p:2, m:1}}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{px:8}}>
          <Typography gutterBottom variant="h3"  component="div">
             COMPRE 100 NÚMEROS
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" color="#2159f3" justifyContent="center">
          <Typography gutterBottom variant="h3" component="div">
          $300.000
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
      <Stack direction="row" alignItems="center" justifyContent="center" paddingTop="5px">
         <Button   style={{ backgroundColor: '#000000', color:'#ffffff', fontSize:"16px",}} onClick={()=>handleBuyByNum(100)}>COMPRAR AHORA</Button>
         </Stack>
    </Card>
    <Card variant="outlined" sx={{backgroundColor: "#ffffff", p:2, m:1}}>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{px:3}}>
          <Typography gutterBottom variant="h3"  component="div">
          COMPRAR +1 NÚMEROS MÁS
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
        <Stack direction="row" alignItems="center" color="#2159f3" justifyContent="center">
          <Typography gutterBottom variant="h3" component="div">
          +$3.000
          </Typography>
        </Stack>
      <Divider  orientation="horizontal" variant="fullWidth" sx={{ backgroundColor: "#000000"}}/>
      <Stack direction="row" alignItems="center" justifyContent="center" paddingTop="5px">
         <Button style={{ backgroundColor: '#000000', color:'#ffffff', fontSize:"16px",}} onClick={handleBuy}>COMPRA UNA MAS</Button>
         </Stack>
    </Card>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
          borderRadius: 1 ,
        }),
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{backgroundColor: "#0f0a0a" }}>
     <div className="anuncio">
        <img src="/assets/images/medallo2.png" alt="Logo del anuncio"/>
    </div>
    <div className="ribbon-container">
        <div className="ribbon">PREMIOS</div>
        <div className='badge' style={{position:'absolute', top:"30px" ,left:"20px"}}>
        <Button onClick={handleOpen}>
        <Badge badgeContent={cartItems} color="secondary">
             <ShoppingCartIcon />
        </Badge>
        </Button>
        </div>
        
    </div>
    
    <div className="container">
        <div className="imagen-container">
            <img src="/assets/images/bicicleta.jpg" alt="Imagen del sorteo"/>
        </div>
    </div>
    <div className="meta-rifa">PROCESS 0.0%</div>
    <div class="loader">
        <div class="loader-inner"> 
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
            <div class="loader-block"></div>
        </div>
    </div>
     <div className="container numeros-container">
        <div className="numero-premiado">
            <p>#0000</p>
        </div>
        <div className="numero-premiado">
            <p>#9999</p>
        </div>
    </div> 
    {renderForm}
    <footer className="footer">
        <div className="logo-container">
            <img src="/assets/images/medallo2.png" alt="Logo de la empresa"/>
        </div>
        <div className="footer-content">
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <p>Para cualquier duda o inquietud, no dude en contactarnos:</p>
            <ul>
                <li style={{display:"inline-block"}}><a href="https://t.me/medallostar"><img src="/assets/images/telegram.png" alt="Telegram icono" style={{height:"50px", width: "50px"}}/></a></li>
                <li style={{display:"inline-block"}}><a href="https://t.me/medallostar"><img src="/assets/images/whatsapp.png" alt="Whatsapp icono" style={{height:"50px", width: "50px"}}/></a></li>
                <li>Email: <a href="mailto:ventas@mundostunt.com">ventas@medallostars.com</a></li>
            </ul>
        </div>
    </footer>

    <div>
      <Button onClick={handleBuy}>COMPRA UNA MAS</Button>
      <div>
     
      <Drawer 
            anchor="left"
        open={open}
        onClose={handleClose}
      >
        <Box  sx={{ width: 300, p:3, marginTop: 5  }}>
          <Typography variant='h4' marginBottom="20px">Your Cart</Typography>
          <Typography>¡Puedes comprar el número aquí!</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
            marginTop={4}
          >
          <Typography marginBottom="20px">Price: $3.00</Typography>
          <Typography >Total: ${cartItems*3}.00</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-center"
            spacing={1}
            marginTop={2}
          >
            <Stack padding="2px" backgroundColor="#E0E0E0">
          <Button marginBottom="20px" color="secondary" onClick={handleCancel} >-</Button>
            </Stack>
          <Typography paddingTop="8px">Total: ${cartItems*3}.00</Typography>
          <Stack padding="2px" backgroundColor="#E0E0E0">
            <Button marginBottom="20px" onClick={handleBuy}>+</Button>
          </Stack>
          </Stack>
            <form action="http://localhost:4242/create-checkout-session" method="POST">
             <button style={{height:"40px", width:"100px", marginLeft:"80px" }} type="submit">
              Pagar
             </button>
      </form>
        </Box>
      </Drawer>
    </div>
    </div>
 
      </Stack>
    </Box>
  );
}
