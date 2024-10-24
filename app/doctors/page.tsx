"use client";
import { Search, MapPin, Calendar } from "lucide-react";
import { DoctorComponent } from "../components/DoctorComponent"; // Assuming this is your component
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Doctors() {
  const [selectedFilter, setSelectedFilter] = useState("Location");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const filters = ["Location", "Speciality", "Doctor Name"];

  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setDropdownOpen(false);
    setSearchQuery(""); // Clear search query when changing filter
  };

  const doctors = [
    {
      id: 1,
      doctorName: "Dr. Mukesh Sharma",
      etaMins: 41,
      location: "Chennai",
      minsFar: 38,
      queueLength: 7,
      rating: 4.6,
      ratingcount: 12,
      speciality: "Dentist",
      insuranceCovered: true,
    },
    {
      id: 2,
      doctorName: "Dr. Aditi Rao",
      etaMins: 25,
      location: "Bangalore",
      minsFar: 20,
      queueLength: 4,
      rating: 4.8,
      ratingcount: 30,
      speciality: "Cardiologist",
      insuranceCovered: true,
    },
    {
      id: 3,
      doctorName: "Dr. Rakesh Kapoor",
      etaMins: 15,
      location: "Mumbai",
      minsFar: 10,
      queueLength: 3,
      rating: 4.5,
      ratingcount: 40,
      speciality: "Orthopedic",
      insuranceCovered: false,
    },
    {
      id: 4,
      doctorName: "Dr. Sunita Verma",
      etaMins: 60,
      location: "Delhi",
      minsFar: 45,
      queueLength: 5,
      rating: 4.9,
      ratingcount: 25,
      speciality: "Pediatrician",
      insuranceCovered: false,
    },
    {
      id: 5,
      doctorName: "Dr. Kiran Naik",
      etaMins: 30,
      location: "Hyderabad",
      minsFar: 25,
      queueLength: 6,
      rating: 4.7,
      ratingcount: 18,
      speciality: "Neurologist",
      insuranceCovered: false,
    },
    {
      id: 6,
      doctorName: "Dr. Swati Joshi",
      etaMins: 20,
      location: "Pune",
      minsFar: 15,
      queueLength: 2,
      rating: 4.4,
      ratingcount: 10,
      speciality: "Dermatologist",
      insuranceCovered: false,
    },
  ];

  // Filtering logic
  const filteredDoctors = doctors.filter((doctor) => {
    if (selectedFilter === "Location") {
      return doctor.location.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (selectedFilter === "Speciality") {
      return doctor.speciality
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    } else if (selectedFilter === "Doctor Name") {
      return doctor.doctorName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative mb-4">
            {/* Search input */}
            <Input
              type="text"
              value={searchQuery} // Bind the input to state
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              placeholder={`Search for ${selectedFilter.toLowerCase()}`}
              className="w-full pl-10 pr-10 py-3 rounded-full border-2 border-emerald-200 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />

            {/* Dropdown for filters */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button
                className="flex items-center text-emerald-500 hover:text-emerald-600"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{selectedFilter}</span>
                <ChevronDown className="ml-2" size={20} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-emerald-200 rounded-lg shadow-lg z-10">
                  {filters.map((filter) => (
                    <div
                      key={filter}
                      className="px-4 py-2 text-sm hover:bg-emerald-50 cursor-pointer"
                      onClick={() => handleSelectFilter(filter)}
                    >
                      {filter}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Other UI elements */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <MapPin className="text-emerald-500 mr-2" size={16} />
              <span className="text-sm">Indiranagar, Bangalore</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <Calendar className="text-emerald-500 mr-2" size={16} />
              <span className="text-sm">Sept 23, 2024</span>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {["Period", "Urgent", "Gender"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Display filtered doctor cards */}
        <h2 className="text-2xl font-semibold mb-4">
          Showing results for {selectedFilter}
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-[20px] justify-center mb-[100px]">
          {filteredDoctors.map((doctor) => (
            <DoctorComponent
              key={doctor.id}
              doctorName={doctor.doctorName}
              etaMins={doctor.etaMins}
              location={doctor.location}
              minsFar={doctor.minsFar}
              queueLength={doctor.queueLength}
              rating={doctor.rating}
              ratingcount={doctor.ratingcount}
              speciality={doctor.speciality}
              insuranceCovered={doctor.insuranceCovered}
            />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-emerald-100 rounded-tl-full"></div>
      <div className="fixed top-20 left-4 w-16 h-16 bg-emerald-100 rounded-full opacity-50"></div>
    </div>
  );
}
