import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const EduCalendar = () => {
return(
  <div className='mypage-body'>
    <div className='body-wrapper box'>
      <div className='body-info-container'>
        <div className='calendar-wrapper'>
          <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}   events={[
  ]}
          />
        </div>
      </div>
    </div>
  </div>
)
};

export default EduCalendar;