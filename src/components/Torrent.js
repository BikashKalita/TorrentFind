import { useState } from "react";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Link,
} from "@mui/material";
import YtsCard from "./TCard";
const Torrent = ({ t, s }) => {
  const [isCopied, setCopied] = useState(false);
  const copyHandler = async (text) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };
  return (
    <>
      {s === "yts" ? (
        t.quality.map((q) => <YtsCard t={t} q={q} key={q.magnet} />)
      ) : (
        <Card sx={{ mb: 1 }} key={t.magnet}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t.name}
            </Typography>
            <Typography variant="body2">
              Size: {t.size} | Leech: {t.leech} | Seeds: {t.seed}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              src={t.magnet}
              underline="none"
              onClick={() => copyHandler(t.magnet)}
              sx={{ cursor: "pointer" }}
              component="button"
            >
              <Typography variant="button">
                {isCopied ? "Copied" : "Magnet"}
              </Typography>
            </Link>
          </CardActions>
        </Card>
      )}
    </>
  );
};
export default Torrent;
