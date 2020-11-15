import React,{Component, useState} from 'react';
import './index.css';
import './material.css';
import Request from "./Request";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

class Appointments extends React.Component {

  constructor() {
    super(...arguments);
    this.calendarId = 'tsmmcqhu5gi9iluocm8n05kfug@group.calendar.google.com';
    this.publicKey = 'AIzaSyDJar3eTFYVqJ-qO2pIBXKqL9tFeKTMgy8';
    this.dataManger = new DataManager({
        url: 'https://www.googleapis.com/calendar/v3/calendars/' + this.calendarId + '/events?key=' + this.publicKey,
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
}
onPopupOpen(args) {
    if (args.type === 'Editor') {
        args.duration = 59;
    }
    
    
  }
  onDataBinding(e) {
  let items = e.result.items;
  let scheduleData = [];
  if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
          let event = items[i];
          let when = event.start.dateTime;
          let start = event.start.dateTime;
          let end = event.end.dateTime;
          if (!when) {
              when = event.start.date;
              start = event.start.date;
              end = event.end.date;
          }
          scheduleData.push({
              Id: event.id,
              Subject: event.summary,
              StartTime: new Date(start),
              EndTime: new Date(end),
              IsAllDay: !event.start.dateTime
          });
      }
  }
  e.result = scheduleData;
  
  }
render(){
  return (
    <div>
      <div id ="calendar">
        <div id="schedule">
      <ScheduleComponent height='550px' startHour='07:00' endHour='18:00' readonly={true} showQuickInfo={true} popupOpen={this.onPopupOpen.bind(this)} timeScale={{ enable: true, interval: 60, slotCount: 2 }} ref={schedule => this.scheduleObj = schedule} eventSettings={{ dataSource: this.dataManger }} dataBinding={this.onDataBinding.bind(this)}>
      <ViewsDirective>
        <ViewDirective option = 'Day'/>
        <ViewDirective option = 'Week'/>
        <ViewDirective option = 'Month'/>
        <ViewDirective option = 'Agenda'/>
      </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
      </div>
      <div id="requestback">
        <Request />
      </div>
      </div>
       </div>
  );
}
}

export default Appointments;

