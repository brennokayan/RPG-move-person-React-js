import { Box, Button, Typography } from "@mui/material";
import { useCharacter } from "./hooks/character";
import { useEffect, useState } from "react";
import { Character } from "./character";
import { useInteract } from "./functions/Interca";
import mapBackground from "./assets/map.png";

export default function App() {
  const char = useCharacter();
  const [isInteract, setIsInteract] = useState(char.getIs());
  const interact = useInteract();

  const handleKeyDow = (e) => {
    if (e.code === "KeyW" || e.code === "ArrowUp") {
      char.moveUP();
    }
    if (e.code === "KeyS" || e.code === "ArrowDown") {
      char.moveDown();
    }
    if (e.code === "KeyA" || e.code === "ArrowLeft") {
      char.moveLeft();
    }
    if (e.code === "KeyD" || e.code === "ArrowRight") {
      char.moveRight();
    }
    if (e.code === "KeyC") {
      setIsInteract((prevInteract) => {
        console.log(prevInteract.tipo, prevInteract.ativo);
        interact.Interact(prevInteract.tipo);
        return prevInteract;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDow);
    return () => {
      window.removeEventListener("keydown", handleKeyDow);
    };
  }, []);

  useEffect(() => {
    setIsInteract(char.getIs());
  }, [char.getIs()]);

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Box
          sx={{ background: `url(${mapBackground})` }}
          height={"480px"}
          width={"480px"}
        >
          <Character
            x={char.x}
            y={char.y}
            side={char.side}
            isInteract={isInteract.ativo}
            tipo={isInteract.tipo}
          />
        </Box>
        <Box
          ml={4}
          borderRadius={2}
          height={"480px"}
          width={"240px"}
          bgcolor={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            textAlign={"center"}
            display={"flex"}
            flex={3}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={5}
          >
            <Typography fontWeight={"bold"} sx={{fontSize: "2.3rem"}}>{isInteract.ativo ? interact.getMessage().title : ""}</Typography>
            <Typography sx={{ mx: 2, textAlign: "center" }}>
              {isInteract.ativo ? interact.getMessage().body : ""}
            </Typography>
          </Box>

          <Box display={"flex"} flex={1} alignItems={"end"} mb={4}>
            <Typography>
              {isInteract.ativo ? "Aperte C para interagir." : ""}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
