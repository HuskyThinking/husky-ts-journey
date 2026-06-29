import { Divider, ListItem, ListItemText } from "@mui/material";
import type { MemoItem } from "../types/MemoItem";

export default function MemoListItem({ 
  memoItem
}: { memoItem: MemoItem }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoItem.title}
          secondary={memoItem.content}
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  );
}
