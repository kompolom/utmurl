import React, { MouseEventHandler, useCallback, useRef, Ref } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent, InputAdornment, IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

interface GenetatedLinkProps {
  url: string;
}

export const GeneratedLink = (props: GenetatedLinkProps) => {
  const inputRef: Ref<HTMLTextAreaElement> = useRef(null);
  const onCopyClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      const inputElement = inputRef.current;
      if (!inputElement) return;
      inputElement.select();
      navigator.clipboard.writeText(inputElement.value);
    },
    [inputRef]
  );
  return (
    <Card sx={{ backgroundColor: "#dbf7e0" }}>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          Поделитесь сгенерированным URL кампании
        </Typography>
        <TextField
          inputRef={inputRef}
          color="success"
          sx={{ mt: 1, mb: 1 }}
          multiline
          fullWidth
          label="Сгенерированный URL"
          value={props.url}
          InputProps={{
            sx: { fontWeight: "bold" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton title="Копировать" onClick={onCopyClick}>
                  <ContentCopyOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="body2">
          Используйте этот URL в любых рекламных каналах, которые вы хотите
          связать с этой настраиваемой кампанией.
        </Typography>
      </CardContent>
    </Card>
  );
};
