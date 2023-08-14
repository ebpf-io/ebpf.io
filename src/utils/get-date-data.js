function getMonthAndDay(date) {
  const convertedDate = new Date(date);
  const day = convertedDate.getUTCDate();
  const month = convertedDate.toLocaleString('en-US', { month: 'long' });
  return `${month} ${day}`;
}

function getYear(date) {
  const convertedDate = new Date(date);
  const year = convertedDate.getFullYear();
  return year;
}

function getHoursAndMinutes(dateTime) {
  const convertedDateTime = new Date(dateTime);
  const hours = convertedDateTime.getUTCHours();
  const minutes = convertedDateTime.getUTCMinutes();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

function getFormattedTimeWithAmPm(dateTime) {
  const convertedDateTime = new Date(dateTime);
  const hours = convertedDateTime.getUTCHours();
  const minutes = convertedDateTime.getUTCMinutes();

  const amOrPm = hours < 12 ? 'AM' : 'PM';
  const formattedHours = (hours % 12 || 12).toString();
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}

function calculateTimeDifference(startsAt, endsAt) {
  const startsAtDate = new Date(startsAt);
  const endsAtDate = new Date(endsAt);
  const timeDifferenceMilliseconds = endsAtDate - startsAtDate;
  const timeDifferenceMinutes = timeDifferenceMilliseconds / (1000 * 60);
  return timeDifferenceMinutes;
}

export {
  getMonthAndDay,
  getYear,
  getHoursAndMinutes,
  calculateTimeDifference,
  getFormattedTimeWithAmPm,
};
