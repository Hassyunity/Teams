import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import "@fullcalendar/core/main.css";  
import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  

const events = [{ title: "Today", date: new Date() }];  
const Calendar = () => {  
     
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        FullCalendar In React Application  
               </div>  
                </div>  
                <FullCalendar  
                    defaultView="dayGridMonth"  
                    plugins={[dayGridPlugin]}  
                    events={events}  
                />  
                <div></div>
            </div>  
        )  
     
}  
  
export default Calendar  