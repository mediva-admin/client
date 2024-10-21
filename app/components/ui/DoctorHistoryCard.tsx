import Button from "./Button"

interface HistoryCard {
    doctor: string
    reason: string
    date: string
    time: string
  }
  
export function DoctorHistoryCard({ doctor, reason, date, time }: HistoryCard) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <h3 className="font-semibold text-lg">{doctor}</h3>
        <p className="text-sm text-gray-600">Reason: {reason}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {time}
          </div>
          <Button>Prescription</Button>
        </div>
      </div>
    )
  }