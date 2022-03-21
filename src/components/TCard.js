import { useState } from "react";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Link,
} from "@mui/material";
const YtsCard = ({ t, q }) => {
  const [isCopied, setCopied] = useState(false);
  const copyHandler = async (text) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } else {
      document.execCommand("copy", true, text);
      setCopied(true);
    }
  };
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t.name} ({q.quality})
        </Typography>
        <Typography variant="body2">
          Size: {q.size} | Leech: {q.leech} | Seeds: {q.seed}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          src={q.magnet}
          underline="none"
          onClick={() => copyHandler(q.magnet)}
          sx={{ cursor: "pointer" }}
          component="button"
        >
          <Typography variant="button">
            {isCopied ? "Copied" : "Magnet"}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};
export default YtsCard;
