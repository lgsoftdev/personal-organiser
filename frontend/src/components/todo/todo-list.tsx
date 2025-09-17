import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { TodoItem } from '../../model/todo.model';
import { useEffect, useState } from 'react';
import { getTodos } from '../../services/data-service';

const columns: GridColDef<TodoItem>[] = [
  { field: 'id', headerName: 'ID', type: 'number', width: 90 },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'prioritydescription',
    headerName: 'Priority',
    width: 150,
    editable: true,
  },
  {
    field: 'datedue',
    headerName: 'Due Date',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: true,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  return (
    <div className="content">
      <h2>To Do List</h2>
      <Box sx={{ height: 400, width: 'auto' }}>
        <DataGrid
          rows={todos}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default TodoList;
