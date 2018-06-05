import moment from "moment-timezone";
import { getRealTime } from "./index";

describe("Ora Nera", () => {
  const timezone = "Europe/Rome";
  it("should return ON", () => {
    const m = moment.tz("08:15 pm", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("ON");
  });
  it("should return OB", () => {
    const m = moment.tz("08:15 am", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("OB");
  });
  it("should return ON1", () => {
    const m = moment.tz("08:31 pm", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("ON1");
  });
  it("should return ON13", () => {
    const m = moment.tz("11:30 pm", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("ON13");
  });
  it("should return ON15", () => {
    const m = moment.tz("00:01 am", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("ON15");
  });
  it("should return OB5", () => {
    const m = moment.tz("09:35 am", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("OB5");
  });
  it("should return ON47", () => {
    const m = moment.tz("08:14 am", "h:mm a", timezone);
    expect(getRealTime(m, timezone)).toBe("ON47");
  });
});
