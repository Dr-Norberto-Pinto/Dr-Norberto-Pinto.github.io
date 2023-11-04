let meetingsTest = [
  {
    n: "Grupo Amor - senha: 000000",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/2228882015",
    d: [1, 2, 3, 5],
    t: "9:00",
    f: "11:00",
  },
  {
    n: "Grupo Amor - senha: 000000",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/2228882015",
    d: [4, 6, 7],
    t: "20:00",
    f: "22:00",
  },
  {
    n: "Grupo Barra da Tijuca",
    e: "Rio de Janeiro",
    l: "https://us04web.zoom.us/j/9651468518",
    d: [3],
    t: "20:00",
    f: "21:30",
  },
  {
    n: "Grupo Barra da Tijuca",
    e: "Rio de Janeiro",
    l: "https://us04web.zoom.us/j/9651468518",
    d: [1],
    t: "18:00",
    f: "19:30",
  },
  {
    n: "Grupo Condor",
    e: "Rio de Janeiro",
    l: "https://meet.google.com/wby-tzip-egw",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "8:30",
    f: "9:30",
  },
  {
    n: "Grupo Condor",
    e: "Rio de Janeiro",
    l: "https://meet.google.com/wby-tzip-egw",
    d: [1, 3, 4, 5],
    t: "17:30",
    f: "19:30",
  },
  {
    n: "Grupo Condor",
    e: "Rio de Janeiro",
    l: "https://meet.google.com/wby-tzip-egw",
    d: [2, 3, 4, 5, 6, 7],
    t: "20:00",
    f: "22:00",
  },
  {
    n: "Grupo Juntos",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/8262888483?pwd=RWFJU0xza2NaV0thcGorVUxIUDNXUT09",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "18:00",
    f: "20:00",
  },
  {
    n: "Grupo Meier",
    e: "Rio de Janeiro",
    l: "http://meet.google.com/yxj-ebir-epo",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "10:00",
    f: "12:00",
  },

  {
    n: "Grupo Posto 11",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/7253264713",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "10:30",
    f: "12:30",
  },
  {
    n: "Grupo Posto 11",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/7253264713",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "17:30",
    f: "19:30",
  },
  {
    n: "Grupo Posto 11",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/7253264713",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "20:00",
    f: "22:00",
  },
  {
    n: "Grupo Posto 11",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/7253264713",
    d: [1, 6, 7],
    t: "22:30",
    f: "00:30",
  },
  {
    n: "Grupo Rio de Janeiro",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/8147845044",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "8:30",
    f: "10:30",
  },
  {
    n: "Grupo Rio de Janeiro",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/8147845044",
    d: [1, 2, 3, 4, 5, 6, 7],
    t: "20:00",
    f: "22:00",
  },
  {
    n: "Grupo Rio de Janeiro",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/8147845044",
    d: [1, 3, 4, 5, 6, 7],
    t: "18:00",
    f: "20:00",
  },
  {
    n: "Grupo Rio de Janeiro",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/8147845044",
    d: [3, 5],
    t: "7:00",
    f: "9:00",
  },
  {
    n: "Grupo Rio de Janeiro",
    e: "Rio de Janeiro",
    l: "https://us02web.zoom.us/j/8147845044",
    d: [1, 2, 4, 6, 7],
    t: "16:00",
    f: "18:00",
  },
];

function testGetHours() {
  console.assert(getHours("21:42") == 21, "Test getHours");
  console.assert(getHours("21:42") != 20, "Test getHours");
  console.assert(getHours("1:41") == 1, "Test getHours");
}

function testGetMinutes() {
  console.assert(getMinutes("21:42") == 42, "Test getMinutes");
  console.assert(getMinutes("21:42") != 40, "Test getMinutes");
  console.assert(getMinutes("00:2") == 2, "Test getMinutes");
}

function testCompareTime() {
  console.assert(compareTime("21:41", "21:42") < 0, "testCompareTime");
  console.assert(compareTime("21:00", "21:00") == 0, "testCompareTime");
  console.assert(compareTime("21:00", "21:42") < 0, "testCompareTime");
  console.assert(compareTime("1:41", "21:12") < 0, "testCompareTime");
  console.assert(compareTime("22:41", "21:12") > 0, "testCompareTime");
}

function testCompareTimeWithDelay() {
  console.assert(
    compareTimeWithDelay("21:41", "21:42", 15) < 0,
    "testcompareTimeWithDelay"
  );
  console.assert(
    compareTimeWithDelay("21:41", "21:41", 0) == 0,
    "testcompareTimeWithDelay"
  );
  console.assert(
    compareTimeWithDelay("21:15", "21:00", 15) == 0,
    "testcompareTimeWithDelay"
  );
  console.assert(
    compareTimeWithDelay("1:41", "21:12", 15) < 0,
    "testcompareTimeWithDelay"
  );
  console.assert(
    compareTimeWithDelay("22:41", "21:12", 15) > 0,
    "testcompareTimeWithDelay"
  );
}

function testSortMeetingsByTime() {
  //   console.log(sortMeetingsByTime(meetings));
}

function testFindNextMeetings() {
  let m = findNextMeetings(2, "22:53", meetings, 120);
  // console.log(m);
}

function testfindNextDaysMeeting() {
  let m = findNextDaysMeetings(7, "21:23", meetingsTest, 30, 4);
  // console.log(m);
}

function testDayOfWeek() {
  console.assert(dayOfWeek(1) == 1, "testdayOfWeek");
  console.assert(dayOfWeek(2) == 2, "testdayOfWeek");
  console.assert(dayOfWeek(7) == 7, "testdayOfWeek");
  console.assert(dayOfWeek(8) == 1, "testdayOfWeek");
  console.assert(dayOfWeek(8) == 1, "testdayOfWeek");
}

function runTests() {
  testGetMinutes();
  testGetHours();
  testCompareTime();
  testCompareTimeWithDelay();
  testFindNextMeetings();
  testfindNextDaysMeeting();
  testDayOfWeek();
  testSortMeetingsByTime();
}
