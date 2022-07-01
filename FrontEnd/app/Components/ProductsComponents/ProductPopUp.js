import { useState } from "react";

export default function ProductPopUp({ setOpen}) {

  return (
      <div onClick={() => { setOpen(false) }}>
      <h1>Hello</h1>
    </div>
  );
}
