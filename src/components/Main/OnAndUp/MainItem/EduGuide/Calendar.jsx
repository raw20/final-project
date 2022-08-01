import React from 'react';
import RevoCalendar from 'revo-calendar';

const Calendar = () => {
  const events = [
    {
      name: "M2 선배와 관계 형성과 팔로워십",
      date: Date.now(),
      extra: {
        text: "10:00 - 12:00 ZOOM"
      }
    },  
    {
      name: "M1 신입사원의 매너",
      date: "2022-08-15",
      extra: {
        text: "ZOOM"
      }
    },
    {
      name: "M4 조직 커뮤니케이션 스킬",
      date: "2022-08-15",
      extra: {
        text: "webex"
      }
    },
    {
      name: "M8 셀프 리더십 스킬",
      date: "2022-08-09",
      extra: {
        text: "zep"
      }
    }
  ]

  const translations = {
    korean: {
      days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
      daysShort:["일","월","화","수","목","금","토"],
      daysMin:["일","월","화","수","목","금","토"],
      months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
      monthsShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
      noEventForThisDay:"강의 일정이 없습니다.",
      allDay:"하루종일",
      previousYear:"작년",
      nextYear:"내년",
      toggleSidebar:"사이드바",
      toggleDetails:"자세히 보기"
    },
  };
  return (
    <div>
      <RevoCalendar 
      events={events}
      detailDateFormat='YYYY . MM . DD'
      languages={translations} lang="korean"
      style={{
        borderRadius:"5px",
        boxShadow: "8px 2px 62px 0px rgb(34 51 89 / 9%)"}}
      highlightToday={true}
      primaryColor='#868abf'
      secondaryColor="#ffffff"
      todayColor="#ffffff"
      textColor="#5a5a5a"
      indicatorColor="orange"
      openDetailsOnDateSelection={true}
      onePanelAtATime={false}
      sidebarWidth={120}
      detailWidth={320}

      />
    </div>
  );
};

export default Calendar;