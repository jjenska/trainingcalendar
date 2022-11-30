import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Traininglist from './Traininglist';
import CustomerList from './Customerlist';

function TabApp(){

    const [value, setValue] = useState("");

    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="customers" label="customers"/>
                <Tab value="trainings" label="trainings"/>

            </Tabs>
            {value === "customers" && <CustomerList />}
            {value === "trainings" && <Traininglist />}
        </div>
    )
}

export default TabApp;