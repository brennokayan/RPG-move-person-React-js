import { useState } from "react";
import { MapPots } from "../data/cenario";

export function useCharacter() {
  const [pos, setPos] = useState({ x: 1, y: 3 });
  const [side, setSide] = useState("front");
  const [is, setIs] = useState({ ativo: false, tipo: 1 });

  function moveLeft() {
    setPos((pos) => ({
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y
    }));
    setSide("left");
  }

  function moveRight() {
    setPos((pos) => ({
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y
    }));
    setSide("right");
  }

  function moveDown() {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
    }));
    setSide("front");
  }

  function moveUP() {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
    }));
    setSide("back");
  }

  const canMove = (x, y) => {
    if (x < 0 || y < 0 || x > 15 || y > 15) return false;
    if (MapPots[y][x] === 1) {
      setIs({ ativo: false, tipo: 0 });
      return true;
    }
    if (MapPots[y][x] === 2) {
      setIs({ ativo: true, tipo: 1 });
      return true;
    }
    if (MapPots[y][x] === 3) {
      setIs({ ativo: true, tipo: 2 });
      return true;
    }
    if (MapPots[y][x] === 4) {
      setIs({ ativo: true, tipo: 3 });
      return true;
    }
    return false;
  };

  const getIs = () => {
    return is;
  };

  return {
    x: pos.x,
    y: pos.y,
    side,
    ativo: is.ativo,
    tipo: is.tipo,
    moveUP,
    moveDown,
    moveLeft,
    moveRight,
    getIs
  };
}
