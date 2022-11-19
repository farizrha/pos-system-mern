import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export const AddToCartButton = (props) => {

  return (
    <>
      <Button
        size="small"
        sx={{
          backgroundColor: "#696969",
          color: "white",
          ":hover": { backgroundColor: "#7fff00", color: "white" },
          marginRight: "35px",
        }}
        onChange={() => props.openDrawer(true)}
      >
        <AddIcon sx={{ color: "white" }} />
        Add to cart {open}
      </Button>
    </>
  );
};
