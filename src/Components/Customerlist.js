import { AgGridReact } from 'ag-grid-react';
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function CustomerList() {

    const [customers, setCustomers] = useState([]);

    
    const fetchCustomers = () => {
        
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then((response) => response.json())
        .then((responseData) => setCustomers(responseData.content));
    };
    
    useEffect(() => {
        fetchCustomers();
    }, []);

    const columns = [
        { field: "actions", width: 120},
        { field: "firstname", sortable: true, filter: true, width: 130 },
        { field: "lastname", sortable: true, filter: true, width: 130 },
        { field: "email", sortable: true, filter: true, width: 180 },
        { field: "phone", sortable: true, filter: true, width: 130 },
        { field: "streetaddress", sortable: true, filter: true, width: 160 },
        { field: "postcode", sortable: true, filter: true, width: 130 },
        { field: "city", sortable: true, filter: true, width: 120 },
        
    ];

    return (
        <div >
            <div style={{ height: "100%", boxSizing: "border-box" }}>
                <div style={{ height: 600, width: '100%' }} className="ag-theme-material">
                    <AgGridReact
                        rowData={customers}
                        columnDefs={columns}
                        paginationPageSize={10}
                        pagination={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomerList;