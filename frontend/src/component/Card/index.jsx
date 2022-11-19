import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";


import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { AddToCartButton } from "../Button/addToCart";
import DetailProductButton from "../Button/detailProductButton";
import { useState } from "react";

export const CardComp = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Box width="260px">
      <Card elevation={12} sx={{ backgroundColor: "#0d0d0d" }}>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <CardContent>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              borderBottom: 3,
              borderColor: "white",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.name}
          </Typography>
          <Chip
            key={props.catId}
            sx={{
              backgroundColor: "#6bdb32",
              color: "white",
              fontWeight: "bolder",
              fontSize: "17px"
            }}
            label={props.catName}
            icon={<LocalOfferIcon style={{color: "white"}}/>}
          />
          <Typography
            sx={{ marginTop: 2, fontSize: "20px" }}
            fontSize="lg"
            fontWeight="lg"
            color="white"
          >
            ${props.price}
          </Typography>
        </CardContent>
        <CardActions>
          
          <AddToCartButton openDrawer={open => setOpen(open)}/>
          <DetailProductButton name={props.name} description={props.description} price={props.price}/>

        </CardActions>
      </Card>
    </Box>
  );
};
