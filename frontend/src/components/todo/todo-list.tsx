import Box from '@mui/material/Box';
import {
  DataGrid,
  GridActionsCellItem,
  Toolbar,
  ToolbarButton,
  type GridColDef,
  type GridRowId,
} from '@mui/x-data-grid';
import type { Todo } from '../../model/todo.model';
import { useEffect, useState } from 'react';
import { getTodos } from '../../services/data-service';
import { Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const AddToolbar = () => {
  const handleClick = () => {
    alert('add record');
  };

  return (
    <Toolbar>
      <Tooltip title="Add record">
        <ToolbarButton onClick={handleClick}>
          <AddIcon fontSize="small" />
        </ToolbarButton>
      </Tooltip>
    </Toolbar>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDeleteClick = (id: GridRowId) => () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const columns: GridColDef<Todo>[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 90 },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: true,
    },
    {
      field: 'prioritylevel',
      type: 'singleSelect',
      headerName: 'Priority',
      width: 150,
      editable: true,
      valueOptions: [
        { value: 1, label: 'High' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Low' },
      ],
    },
    {
      field: 'datedue',
      headerName: 'Due Date',
      width: 110,
      editable: true,
    },
    {
      field: 'isdone',
      type: 'singleSelect',
      headerName: 'Status',
      width: 110,
      editable: true,
      valueOptions: [
        { value: 'N', label: 'No' },
        { value: 'Y', label: 'Yes' },
      ],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 100,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleProcessRowUpdate = (updatedRow: Todo) => {
    // Logic to update your data source or state
    setTodos(
      todos.map((todo) => (todo.id === updatedRow.id ? updatedRow : todo))
    );
    return updatedRow; // Must return the updated row
  };

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
          slots={{ toolbar: AddToolbar }}
          showToolbar
          processRowUpdate={handleProcessRowUpdate}
        />
      </Box>
    </div>
  );
};

export default TodoList;
