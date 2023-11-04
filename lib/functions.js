let daysNames = [
  "NOT USED",
  "Domigo",
  "Segunda-feira",
  "Terça-feira",
  "Quanta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function getHours(t) {
  return parseInt(t.substring(0, t.search(":")));
}

function getMinutes(t) {
  return parseInt(t.substring(t.search(":") + 1, t.length));
}

function compareTime(t1, t2) {
  if (getHours(t1) == getHours(t2)) {
    return getMinutes(t1) - getMinutes(t2);
  }
  return getHours(t1) - getHours(t2);
}

function subtractMinutes(time, minutes) {
  var dt = new Date(`December 31, 2017 ${time}:00`);
  dt.setMinutes(dt.getMinutes() - minutes);
  return `${dt.getHours()}:${dt.getMinutes()}`;
}

function compareTimeWithDelay(t1, t2, delayMinutes) {
  let t1MinusDelay = subtractMinutes(t1, delayMinutes);
  return compareTime(t1MinusDelay, t2);
}

function sortMeetingsByTime(meetings) {
  meetings.sort(function (a, b) {
    return compareTime(a.t, b.t);
  });
  return meetings;
}

function dayOfWeek(day) {
  return ((day - 1) % 7) + 1;
}

// If no meeting avaliable on the same day finds the next day
function findNextMeetings(day, time, meetings, maxLateMinutes) {
  let nextMeetings = [];
  let meet = {};
  for (let i = 0; i < meetings.length; ++i) {
    if (
      meetings[i].d.includes(day) &&
      compareTimeWithDelay(time, meetings[i].t, maxLateMinutes) <= 0
    ) {
      meet = _.cloneDeep(meetings[i]);
      meet.dn = daysNames[day];
      nextMeetings.push(meet);
    }
  }

  if (nextMeetings.length > 1) {
    nextMeetings.sort(function (a, b) {
      return compareTime(a.t, b.t);
    });
  }
  return nextMeetings;
}

function findNextDaysMeetings(day, time, meetings, maxLateMinutes, days) {
  let allNextMeetings = [];
  let nextMeetings = [];

  for (let i = 0; i < days; ++i) {
    if (i > 0) {
      time = "00:00";
      maxLateMinutes = 0;
    }
    // if (i == 2) {
    //   console.log("para");
    // }
    nextMeetings = findNextMeetings(
      dayOfWeek(day + i),
      time,
      meetings,
      maxLateMinutes
    );
    allNextMeetings = allNextMeetings.concat(nextMeetings);
  }
  return allNextMeetings;
}
