import { Button, Typography} from '@mui/material';
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function AddCustomer (props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        streetaddress: "",
        postcode: "",
        city: "",
    });

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        console.log("cancel")
        setOpen(false)
    }

    const handleSave = () => {
        props.addCustomer(customer);
        handleClose();
    }

    const inputChanged = (event) => {
        console.log("let's save the value");
        setCustomer({...customer, [event.target.name] : event.target.value})
    }

    return (
        <div>
            <Typography align="center">
            <Button variant="outlined" onClick={handleOpen}>Add a new customer</Button>
            </Typography>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New Customer</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color: "#063970"}}>
                        Please fill in the form to add a new customer.
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
export default AddCustomer;