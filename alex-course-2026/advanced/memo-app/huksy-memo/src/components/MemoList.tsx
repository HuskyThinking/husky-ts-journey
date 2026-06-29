import List from '@mui/material/List';
import MemoListItem from './MemoListItem';
import type { MemoItem } from '../types/MemoItem';

export default function MemoList() {

  const mockMemoList : MemoItem[] = [
    {
      id: 1,
      title: 'Memo 1',
      content: 'This is the content of memo 1',
    },
    {
      id: 2,
      title: 'Memo 2',
      content: 'This is the content of memo 2',
    },
    {
      id: 3,
      title: 'Memo 3',
      content: 'This is the content of memo 3',
    },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {mockMemoList.map((memoItem: MemoItem) => (
        <MemoListItem key={memoItem.id} memoItem={memoItem} />
      ))} 
    </List>
  );
}
