import { copyToClipboard } from "@/utils";
import { Button } from "@mui/material";
import { useState } from "react";

const prompt =
  "Write a response to this job opening in such a way that the client would want to hire me." +
  "My skills: react, angular, vue. Have basic experience with python, django." +
  "The response should be no more than 700 characters.";

export const CopyButton = (props: { descr: string | null }) => {
  const [coppied, setCoppied] = useState(false);
  const textToCopy = `${props.descr}. ${prompt}`;

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
      {coppied ? "Copied" : "Copy"}
    </Button>
  );
};
