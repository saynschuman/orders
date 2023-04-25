import { copyToClipboard } from "@/utils";
import { Button } from "@mui/material";
import { useState } from "react";

const prompt =
  "Write a response to this job opening in such a way that the client would want to hire me." +
  "My skills: react." +
  "The response should be no more than 700 characters." +
  "Please write response in two languages: english and russian";

const about = "расскажи мне на русском языке, вкратце, о чем этот проект";

export const CopyButton = (props: {
  descr: string | null;
  type: "about" | "copy";
}) => {
  const [coppied, setCoppied] = useState(false);
  const textToCopy = `${props.descr}. ${"\n"}${
    props.type === "copy" ? prompt : about
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
