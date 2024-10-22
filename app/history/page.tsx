'use client';
import { Search } from "lucide-react"
import Input from "../components/ui/Input";
import { DoctorHistoryCard } from "../components/ui/DoctorHistoryCard";

export default function Component() {
  const visits = [
    { doctor: "Dr. Vignesh Stanley", reason: "Tooth checkup", date: "Jan 18, 2024", time: "15:00 to 15:15" },
    { doctor: "Dr. Vignesh Stanley", reason: "Tooth checkup", date: "Jan 18, 2024", time: "15:00 to 15:15" },
    { doctor: "Dr. Vignesh Stanley", reason: "Tooth checkup", date: "Jan 18, 2024", time: "15:00 to 15:15" },
    { doctor: "Dr. Vignesh Stanley", reason: "Tooth checkup", date: "Jan 18, 2024", time: "15:00 to 15:15" },
    { doctor: "Dr. Vignesh Stanley", reason: "Tooth checkup", date: "Jan 18, 2024", time: "15:00 to 15:15" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-100 pt-16">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-1">History</h1>
        <p className="text-gray-600 mb-6">Information of your past visits to doctors</p>
        <div className="relative mb-6">
          <Input
            className="pl-10"
            placeholder="Search doctor / date"
            type="text"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="space-y-4">
          {visits.map((visit, index) => (
            <DoctorHistoryCard key={index} {...visit} />
          ))}
        </div>
      </div>
    </div>
  )
}