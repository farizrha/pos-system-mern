import { Breadcrumbs } from "@mui/material";
import React from "react";
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

export const BreadComp = () => {
  return (
    <>
      <Breadcrumbs >
        <Chip sx={{fontWeight: "bold"}} label="Home" icon={<HomeIcon/>}/>
      </Breadcrumbs>
    </>
  );
};
