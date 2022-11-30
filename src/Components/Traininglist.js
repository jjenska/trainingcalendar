import { AgGridReact } from 'ag-grid-react';
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import moment from "moment";
import 'moment/locale/fi'
import { IconButton, Snackbar} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

function Traininglist() {

    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchTrainings();
    }, []);
    
    const fetchTrainings = () => {
        
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then((response) => response.json())
        .then((responseData) => setTrainings(responseData))
        .catch((error) => console.error(error));
    };

    const deleteTraining = (id) => {
        fetch("https://customerrest.herokuapp.com/api/trainings/" + id, { method: 'DELETE'})
        .then((response) => {
            if (response.ok) {
                fetchTrainings();
                setOpen(true);
                setMessage("Activity deleted succesfully.")
            } else {
                alert("Deleting the activity failed.")
            }
        })
        .catch((error) => console.error(error));
    };
    
    const columns = [
        { 
            headerName: "Delete",
            field: 'id',  
            width: 90,
            cellRenderer: (params) => (
                <IconButton color="error" onClick={() => deleteTraining(params.value)}>
                    <DeleteIcon />
                </IconButton>
            ),
        },
        { 
            field: "date", 
            sortable: true, 
            filter: true,
            width: 250, 
            cellRenderer: (date) => {
                return moment(date.value).format("LLL");
            },
        },
        { headerName:'Duration (min)', field: "duration", sortable: true, filter: true, width: 160 },
        { field: "activity", sortable: true, filter: true, width: 140 },
        {
            headerName: "Customer",
            field: "customer.lastname",
            width: 120,
            sortable: true,
    },
    ];

    return (
       
        <div>
            <div className="ag-theme-material">
                <div style={{ height: 600, width: '100%', margin: 'auto' }}>
                    <AgGridReact
                        rowData={trainings}
                        columnDefs={columns}
                        pagination={true}
                        paginationPageSize={10}
                        suppressCellSelection={true}
                    />
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={2500}
                    onClose={() => setOpen(false)}
                    message={message}
                    >
                </Snackbar>
            </div>
        </div>
    )
}

export default Traininglist;