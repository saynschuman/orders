import { ABOUT, PROMPT } from "@/constants";
import { copyToClipboard } from "@/utils";
import { Button } from "@mui/material";
import { useState } from "react";

export const CopyButton = (props: {
  descr: string | null;
  type: "about" | "copy";
}) => {
  const [coppied, setCoppied] = useState(false);
  const textToCopy = `${props.descr}. ${"\n"}${
    props.type === "copy" ? PROMPT : ABOUT
  }`;

  return (
    <Button
      variant="outlined"
      sx={{ my: 1 }}
      onClick={async () => {
        try {
          await copyToClipboard(textToCopy);
          setCoppied(true);
          setTimeout(() => setCoppied(false), 2000);
        } catch (e) {
          console.log("error");
        }
      }}
    >
      {coppied ? "Copied" : props.type === "about" ? "about" : "prompt"}
    </Button>
  );
};
