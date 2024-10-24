import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { X, MapPin, ChevronDown } from "lucide-react";
import Button from "./Button";
import { DatesProvider, DateInput, TimeInput, DateValue } from "@mantine/dates";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`} {...props} />
);

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={`px-6 py-4 ${className}`} {...props} />;

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => <h3 className={`text-lg font-semibold ${className}`} {...props} />;

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={`px-6 py-4 ${className}`} {...props} />;

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  className,
  ...props
}) => (
  <div className="relative">
    <select
      className={`block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md appearance-none ${className}`}
      {...props}
    />
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
  </div>
);

export default function AppointmentBookingCard() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedAppointmentType, setSelectedAppointmentType] = useState<
    "SLOT" | "TOKEN"
  >("SLOT");

  useEffect(() => {
    console.log(selectedDate, selectedTime);
  }, [selectedDate, selectedTime]);

  // const router = useRouter();
  return (
    <Card className="w-full max-w-md " style={{ borderRadius: "20px" }}>
      <CardHeader className="flex items-center justify-between border-b border-gray-200">
        <CardTitle>Book an Appointment / Token</CardTitle>
        <Button variant="outline" className="p-1">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">
          Get a good and trusted experience
        </p>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="specialty"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              For Speciality
            </label>
            <Select id="specialty">
              <option value="dentist">Dentist</option>
            </Select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location (View in map)
            </label>
            <div className="flex items-center space-x-2 bg-emerald-50 p-2 rounded-md">
              <MapPin className="h-5 w-5 text-emerald-500" />
              <span className="text-sm">Indiranagar, Bangalore</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className={`w-full ${
                selectedAppointmentType === "SLOT" &&
                "bg-emerald-500 text-white hover:bg-emerald-600"
              }`}
              onClick={() => setSelectedAppointmentType("SLOT")}
            >
              Slot book
            </Button>
            <Button
              variant="outline"
              className={`w-full ${
                selectedAppointmentType === "TOKEN" &&
                "bg-emerald-500 text-white hover:bg-emerald-600"
              }`}
              onClick={() => setSelectedAppointmentType("TOKEN")}
            >
              Token book
            </Button>
          </div>

          <div className="mb-4 flex items-center">
            <div className="flex flex-col mr-4">
              <label className="block font-medium text-sm">Date</label>
              <div
                className="flex items-center mt-1 max-w-[150px] border border-black-600 rounded-md"
                style={{ borderRadius: "8px" }}
              >
                <div
                  className="flex items-center justify-center p-2 rounded-l-md "
                  style={{ backgroundColor: "#51b4a1" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </div>
                <DatesProvider
                  settings={{
                    firstDayOfWeek: 0,
                    weekendDays: [0],
                    timezone: "Asia/Kolkata",
                  }}
                >
                  <DateInput
                    clearable
                    defaultValue={new Date()}
                    minDate={dayjs(new Date()).add(1, "day").toDate()}
                    maxDate={dayjs(new Date())
                      .add(1, "day")
                      .add(1, "week")
                      .toDate()}
                    onChange={(date: DateValue) =>
                      setSelectedDate(new Date(date?.toDateString() as string))
                    }
                  />
                </DatesProvider>
              </div>
            </div>

            <div className="flex flex-col ml-8">
              <label className="block font-medium text-sm">Time Slot</label>
              <div
                className="text-sm mt-1 p-2 rounded-md "
                style={{ borderRadius: "8px" }}
              >
                <TimeInput
                  withAsterisk
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
            >
              Book
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
