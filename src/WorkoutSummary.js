import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
    {
        start: moment("2024-06-13T10:00:00").toDate(),
        end: moment("2024-06-13T11:00:00").toDate(),
        title: "MRI Registration"
    },
    {
        start: moment("2024-06-13T14:00:00").toDate(),
        end: moment("2024-06-13T15:00:00").toDate(),
        title: "ENT Appointment"
    }
]

const WorkoutSummmary = () => {
    return ( 
        <div>
            <Calendar
            defaultView={'week'}
            views={['month', 'week', 'day','agenda']}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            events={events}
            //formats={{dayRangeHeaderFormat: (data)=>moment(date).format('dddd @ DD')}}
            style={{ height: 800 }}/>
        </div>
     );
}
 
export default WorkoutSummmary;