import { Button, DialogActions, TextField, Dialog, DialogContent, DialogTitle, DialogContentText, MenuItem, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function AddActivity(props) {
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

    const [training, setTraining] = useState({
        date: "",
        duration: "",
        activity: "",
        customer: "",
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
    };

    const handleClose = () => {
        console.log("in calcel function")
        setOpen(false)
    };

    const handleSave = () => {
        const newTraining = {
            ...training,
            date: new Date(training.date),
            customer: props.params.data.links[0].href,
        };
        props.addActivity(newTraining);
        handleClose();
    };

    const inputChanged = (event) => {
        console.log("let's save the value");
        setTraining({...training, [event.target.name] : event.target.value})
    };

    const availableActivities = [
        { value: "Spinning", label: "Spinning" },
        { value: "Gym training", label: "Gym training" },
        { value: "Fitness", label: "Fitness" },
        { value: "Zumba", label: "Zumba" },
        { value: "Jogging", label: "Jogging" },
    ];

    return (
        <div>
            <IconButton color="primary" onClick={handleOpen}>
            <AddIcon />
            </IconButton>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New activity</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color: '#063970'}}>
                        Please fill in the form to add a new activity.
                    </DialogContentText>
                    <TextField
                        name="date"
                        value={training.date}
                        autoFocus
                        margin="dense"
                        label="Date"
                        type="datetime-local"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="duration"
                        value={training.duration}
                        autoFocus
                        margin="dense"
                        label="Duration"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="activity"
                        value={training.activity}
                        select
                        margin="dense"
                        label="Activity"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                        >
                        {availableActivities.map((activity) => (
                            <MenuItem key={activity.value} value={activity.value}>
                                {activity.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    <TextField
                        name="customer"
                        value={customer.firstname + ' ' + customer.lastname}
                        autoFocus
                        margin="dense"
                        label="Customer"
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

export default AddActivity;