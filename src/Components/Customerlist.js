import { AgGridReact } from 'ag-grid-react';
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import AddCustomer from './AddCustomer';
import { IconButton, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditCustomer from './EditCustomer';
import AddActivity from './AddActivity';
import { CSVLink } from 'react-csv';

function CustomerList() {

    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchCustomers();
    }, []);
    
    const fetchCustomers = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then((response) => response.json())
        .then((responseData) => setCustomers(responseData.content))
        .catch((error) => console.error(error));
    };
    
    const addCustomer = (customer) => {
        fetch("https://customerrest.herokuapp.com/api/customers", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customer),
    })
      .then((response) => {
        if (response.ok) {
          fetchCustomers();
          setOpen(true);
          setMessage("A customer added succesfully.")
        } else {
            alert("Adding a customer failed.");
        }
      })
      .catch((err) => console.error(err));
  };

  const deleteCustomer = (link) => {
    console.log(link);
    if(window.confirm("Are you sure you want to delete selected customer?"))
    fetch(link, { method: "DELETE"})
        .then((response) => {
            if (response.ok) {
                fetchCustomers();
                setOpen(true);
                setMessage("Customer deleted succesfully.")
            } else {
                alert("Deleting the customer failed.");
            }
        })
        .catch((error) => console.error(error));
    };

    const editCustomer = (link, editedCustomer) => {
        console.log(link);
        fetch(link, { 
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(editedCustomer)
        })
            .then((response) => {
                if (response.ok) {
                    fetchCustomers();
                    setOpen(true);
                    setMessage("Customer edited succesfully.")
                } else {
                    alert("Editing the customer failed.");
                }
            })
            .catch((error) => console.error(error));
        };

        const addActivity = (link) => {
            fetch("https://customerrest.herokuapp.com/api/trainings", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(link)
            })
                .then((response) => {
                    if(response.ok) {
                        fetchCustomers();
                        setOpen(true);
                        setMessage("Activity added succesfully! Open trainings to see all the activies.")
                    } else {
                        alert("Adding an activity failed.")
                    }
                })
            .catch((error) => console.error(error));
        };

    const columns = [
        { 
            headerName: "Delete", 
            field: "links.0.href", 
            width: 90,
            cellRenderer: (params) => (
                <IconButton color="error" onClick={() => deleteCustomer(params.value)} params={params}>
                    <DeleteIcon />
                </IconButton>
            ),
        },
        { 
            headerName: "Edit", 
            field: "links.0.href", 
            width: 90,
            cellRenderer: (params) => (
                <EditCustomer editCustomer={editCustomer} params={params} />
            ),
        },
        { 
            headerName: "Add activity", 
            field: "links.0.href", 
            width: 120,
            cellRenderer: (params) => (
                <AddActivity addActivity={addActivity} params={params} />
            ),
        },
        
        { field: "firstname", sortable: true, filter: true, width: 130 },
        { field: "lastname", sortable: true, filter: true, width: 130 },
        { field: "email", sortable: true, filter: true, width: 180 },
        { field: "phone", sortable: true, filter: true, width: 130 },
        { field: "streetaddress", sortable: true, filter: true, width: 160 },
        { field: "postcode", sortable: true, filter: true, width: 130 },
        { field: "city", sortable: true, filter: true, width: 120 },
    ];

    const headers = [
        { label: "Firstname", key: "firstname" },
        { label: "Lastname", key: "lastname"},
        { label: "Email", key: "email"},
        { label: "Phone", key: "phone"},
        { label: "Streetaddress", key: "streetaddress"},
        { label: "Postcode", key: "postcode"},
        { label: "City", key: "city"},
    ];

    const csvFile = {
        filename: "PTCustomers.csv",
        headers: headers,
        data: customers,
    };

    return (
        <div >
            <AddCustomer addCustomer={addCustomer} />
            <div style={{ height: "100%", boxSizing: "border-box" }}>
                <div style={{ height: 600, width: "100%" }} className="ag-theme-material">
                    <AgGridReact
                        rowData={customers}
                        columnDefs={columns}
                        paginationPageSize={10}
                        pagination={true}
                    />
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message={message}
                    >
                </Snackbar>
                <CSVLink style={{ textDecoration: "none" }} {...csvFile}>Export customers to CSV</CSVLink>
            </div>
        </div>
    )
}

export default CustomerList;