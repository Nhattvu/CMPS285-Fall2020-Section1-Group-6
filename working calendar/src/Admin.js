import React,{useState, useContext} from 'react';
import './index.css';
import './material.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import {Link} from 'react-router-dom';



function Admin() {
  return (
    <div id="adminback">
      <h1> Admin</h1>
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
  );
}

export default Admin;
