import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductAsync } from "../../app/features/Product/actions";

import { Box, Grid } from "@mui/material";

import NavbarComp from "../../component/Navbar";
import { CardComp } from "../../component/Card";
import { BreadComp } from "../../component/Breadcrumbs";
import { DrawerOrderComp } from "../../component/Drawer/drawerOrder";

export const Home = () => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductAsync());
  }, []);

  // {product.data && product.data.map((item) => <h2 key={item._id}>{item.name}</h2>)}
  return (
    <>
      {/* display={"flex"} */}
      <Box >
        <NavbarComp />

        <Box
          component="main"
          sx={{ marginTop: 15, marginLeft: 35, marginBottom: 10 }}
        >
          <Box sx={{ marginBottom: 5 }}>
            <BreadComp />
          </Box>

          <Grid
            container
            spacing={{ xs: 5, sm: 5, md: 5 }}
            columns={{ xs: 4, sm: 4, md: 3 }}
          >
            {product.data &&
              product.data.map((item) => (
                <Grid item key={item._id}>
                  <CardComp
                    catId={item.category._id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    catName={item.category.name}
                  />
                </Grid>
              ))}
          </Grid>
          <DrawerOrderComp />
        </Box>
      </Box>
    </>
  );
};
