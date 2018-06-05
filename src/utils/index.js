import moment from "moment-timezone";

export function getRealTime(m, timezone) {
  let mOB, mON, diffMinutes, symbol;
  const minute = 15;
  mOB = moment.tz(`08:${minute} am`, "h:mm a", timezone);
  mON = moment.tz(`08:${minute} pm`, "h:mm a", timezone);
  const durOB = moment.duration(m.diff(mOB));
  const durON = moment.duration(m.diff(mON));
  const diffMinutesOB = durOB.asMinutes();
  const diffMinutesON = durON.asMinutes();

  if (diffMinutesOB < 0 && diffMinutesON < 0) {
    mON = mON.subtract(1, "day");
    diffMinutes = moment.duration(m.diff(mON)).asMinutes();
    symbol = "ON";
  } else if (diffMinutesOB > 0 && diffMinutesON > 0) {
    diffMinutes = diffMinutesON;
    symbol = "ON";
  } else if (diffMinutesOB > 0 && diffMinutesON < 0) {
    diffMinutes = diffMinutesOB;
    symbol = "OB";
  } else if (diffMinutesON === 0) {
    diffMinutes = 0;
    symbol = "ON";
  } else if (diffMinutesOB === 0) {
    diffMinutes = 0;
    symbol = "OB";
  } else {
    throw new Error("this should never happen");
  }

  const digit = Math.floor(diffMinutes / minute);
  const timeON = digit ? `${symbol}${digit}` : `${symbol}`;
  // const time = m.tz(this.props.tz).format("LLL");
  return timeON;
}

export function getFakeTime(timezone) {
  const m = moment.tz("08:15 am", "h:mm a", timezone);
  return m;
}
