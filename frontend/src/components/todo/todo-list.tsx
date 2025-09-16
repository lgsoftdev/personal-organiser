import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', type: 'number', width: 90 },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'prioritylevel',
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
    field: 'isdone',
    headerName: 'Status',
    width: 110,
    editable: true,
  },
  //   {
  //     field: 'isdone',
  //     headerName: 'State',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  //   },
];

const rows = [
  {
    id: 1,
    description: 'Buy milk',
    prioritylevel: 'High',
    datedue: null,
    isdone: 'Y',
  },
  {
    id: 2,
    description: 'Finish coding',
    priority: 'Medium',
    datedue: '20250930',
    isdone: 'N',
  },
  {
    id: 3,
    description: 'Do assignment 1',
    prioritylevel: 'High',
    datedue: '20250920',
    isdone: 'N',
  },
  {
    id: 4,
    description: 'Clean bedroom',
    prioritylevel: 'Medium',
    datedue: null,
    isdone: 'Y',
  },
  {
    id: 5,
    description: 'Sit for exam',
    prioritylevel: 'High',
    datedue: '20251110',
    isdone: 'N',
  },
  {
    id: 6,
    description: 'Call mum',
    prioritylevel: 'High',
    datedue: null,
    isdone: 'Y',
  },
  {
    id: 7,
    description: 'Study for quiz 10 about SQL scripting',
    prioritylevel: 'Medium',
    datedue: '20250928',
    isdone: 'N',
  },
  {
    id: 8,
    description: 'Mend hole on shirt',
    prioritylevel: 'Low',
    datedue: null,
    isdone: 'N',
  },
  {
    id: 9,
    description: 'Buy tickets to musical',
    prioritylevel: 'Low',
    datedue: null,
    isdone: 'N',
  },
];

const TodoList = () => {
  return (
    <div className="content">
      <h2>To Do List</h2>
      <Box sx={{ height: 400, width: 'auto' }}>
        <DataGrid
          rows={rows}
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
