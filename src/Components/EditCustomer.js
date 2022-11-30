import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function EditCustomer(props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        streetaddress:'',
        postcode:'',
        city:'',
    });

    const handleOpen = () => {
        setOpen(true);
        setCustomer({
            firstname: props.params.data.firstname,
            lastname: props.params.data.lastname,
            email: props.params.data.email,
            phone: props.params.data.phone,
            streetaddress: props.params.data.streetaddress,
            postcode: props.params.data.postcode,
            city: props.params.data.city,
        });
        setOpen(true);
    }

    const handleClose = () => {
        console.log("in calcel function")
        setOpen(false)
    }

    const handleSave = () => {
        props.editCustomer(props.params.value, customer);
        handleClose();
    }

    const inputChanged = (event) => {
        console.log("let's edit");
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <IconButton color="primary" onClick={handleOpen}>
            <ModeEditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Customer</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color: '#063970'}}>
                        Edit the chosen customer.
                    </DialogContentText>
                    <TextField
                        name="firstname"
                        value={customer.firstname}
                        autoFocus
                        margin="dense"
                        label="Firstname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="lastname"
                        value={customer.lastname}
                        autoFocus
                        margin="dense"
                        label="Lastname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="email"
                        value={customer.email}
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="phone"
                        value={customer.phone}
                        autoFocus
                        margin="dense"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="streetaddress"
                        value={customer.streetaddress}
                        autoFocus
                        margin="dense"
                        label="Streetaddress"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="postcode"
                        value={customer.postcode}
                        autoFocus
                        margin="dense"
                        label="Postcode"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="city"
                        value={customer.city}
                        autoFocus
                        margin="dense"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                </DialogContent>
                <DialogActions>
                <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditCustomer;