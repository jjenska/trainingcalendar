import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Traininglist from './Traininglist';
import CustomerList from './Customerlist';
import TrainingCalendar from './TrainingCalendar';

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
                <Tab value="calendar" label="calendar"/>    
            </Tabs>
            {value === "customers" && <CustomerList />}
            {value === "trainings" && <Traininglist />}
            {value === "calendar" && <TrainingCalendar />}
        </div>
    )
}

export default TabApp;