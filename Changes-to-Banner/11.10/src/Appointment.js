import React,{useState} from 'react';
import './index.css';
import './material.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

function Appointments() {


  return (
    <div>
      <h1> Appointments</h1>
      <div id ="calendar">
      <ScheduleComponent height = "500px"> 
      <ViewsDirective>
        <ViewDirective option = 'Day'/>
        <ViewDirective option = 'Week'/>
        <ViewDirective option = 'Month'/>
        <ViewDirective option = 'Agenda'/>
      </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
      </div>
       </div>
  );
}

export default Appointments;
