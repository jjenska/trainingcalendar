import { AgGridReact } from 'ag-grid-react';
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import moment from "moment";
import 'moment/locale/fi'

function Traininglist() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
    }, []);
    
    const fetchTrainings = () => {
        
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then((response) => response.json())
        .then((responseData) => setTrainings(responseData))
        .catch((error) => console.error(error));
    };
    
    const columns = [
        { 
            field: "date", 
            sortable: true, 
            filter: true,
            width: 250, 
            cellRenderer: (date) => {
                return moment(date.value).format("LLL");
            },
        },
        { field: "duration", sortable: true, filter: true, width: 120 },
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
            </div>
        </div>
    )
}

export default Traininglist;