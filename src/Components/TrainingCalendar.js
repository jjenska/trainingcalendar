import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function TrainingCalendar() {

    const localizer = momentLocalizer(moment);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        getTrainings();
    }, []);

    const getTrainings = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then((response) => response.json())
        .then((responseData) => setTrainings(responseData))
        .catch((error) => console.error(error));
    }

    const activities = trainings.map((training) => {

        return {
            title: training.activity + " " + training.customer.lastname,
            start: moment(training.date).toDate(),
            end: moment(training.date).add(training.duration, 'minutes').toDate()
        }
    })

    return (
        <div>
            <Calendar
            localizer={localizer}
            events={activities}
            style={{ height: 500 }}
            />
        </div>
    )
}

export default TrainingCalendar;