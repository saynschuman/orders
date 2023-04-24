import { copyToClipboard } from "@/utils";
import { Button } from "@mui/material";
import { useState } from "react";

export const CopyButton = (props: { descr: string | null }) => {
  const [coppied, setCoppied] = useState(false);

  return (
    <Button
      variant="outlined"
      sx={{ my: 1 }}
      onClick={async () => {
        try {
          await copyToClipboard(props.descr);
          setCoppied(true);
          setTimeout(() => setCoppied(false), 2000);
        } catch (e) {
          console.log("error");
        }
      }}
    >
      {coppied ? "Copied" : "Copy"}
    </Button>
  );
};
