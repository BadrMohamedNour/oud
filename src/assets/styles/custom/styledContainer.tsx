import React, { ReactNode } from "react";
import { Stack, StackProps, Container } from "@mui/material";

interface ContainerProps extends StackProps {
  children: ReactNode;
  backgroundColor?: string; // Fix the type definition
}

const ContainerBox = ({ children, sx, backgroundColor }: ContainerProps) => {
  return (
    <Stack
      className="container-box"
      sx={{
        paddingX: {
          xs: "16px",
          md: "100px",
        },
        backgroundColor: backgroundColor || "#ffff",
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters={true}
        sx={{
          ...sx,
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default ContainerBox;
