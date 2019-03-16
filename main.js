
// Создание функции для вывода сообщения будильника
function setDailyRhythm (wakeUpTime, bedTime) {
  if (wakeUpTime == "7:30") {
    alert('Доброе утро!');
  } 
  if (bedTime == "23:30") {
    alert('Пора спать!');
  }
  
}

// Создание функции для определения текущего времени
function checkTime()
{
const timeNow = new Date();
const hours = timeNow.getHours();
const minutes = timeNow.getMinutes();
const result = hours + ':' + minutes;
return result;
}


// Для автоматического вызова функции каждые 10 сек
setInterval("setDailyRhythm(checkTime(), checkTime())", 10000)
