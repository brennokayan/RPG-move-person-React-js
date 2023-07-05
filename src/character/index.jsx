import { Box } from "@mui/material";
import char from "../assets/char.png";

// eslint-disable-next-line react/prop-types
export function Character({ x, y, side }) {

  const sides = {
    front: 0,
    back: 30,
    right: 60,
    left: 90,
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${char})`,
          backgroundPosition: `0px ${sides[side]}px`,
        }}
        height={"30px"}
        width={"30px"}
        ml={`${x * 29}px`}
        mt={`${y * 29}px`}
      >
      </Box>
    </>
  );
}
