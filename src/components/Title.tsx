import { Link, Typography } from "@mui/material";

export const Title = (props: { seo_url: string; title: string }) => {
  return (
    <Link
      href={`https://www.freelancer.com/projects/${props.seo_url}`}
      target="_blank"
    >
      <Typography sx={{ fontWeight: "bold" }}>{props.title} </Typography>
    </Link>
  );
};
