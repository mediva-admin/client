'use client';
import { DoctorComponent } from '../components/DoctorComponent';
export default function Doctors() {
  const doctors = [
    {
      id: 1,
      doctorName: 'Dr. Mukesh Sharma',
      etaMins: 41,
      location: 'Chennai',
      minsFar: 38,
      queueLength: 7,
      rating: 4.6,
      ratingcount: 12,
      speciality: 'Dentist',
    },
    {
      id: 2,
      doctorName: 'Dr. Aditi Rao',
      etaMins: 25,
      location: 'Bangalore',
      minsFar: 20,
      queueLength: 4,
      rating: 4.8,
      ratingcount: 30,
      speciality: 'Cardiologist',
    },
    {
      id: 3,
      doctorName: 'Dr. Rakesh Kapoor',
      etaMins: 15,
      location: 'Mumbai',
      minsFar: 10,
      queueLength: 3,
      rating: 4.5,
      ratingcount: 40,
      speciality: 'Orthopedic',
    },
    {
      id: 4,
      doctorName: 'Dr. Sunita Verma',
      etaMins: 60,
      location: 'Delhi',
      minsFar: 45,
      queueLength: 5,
      rating: 4.9,
      ratingcount: 25,
      speciality: 'Pediatrician',
    },
    {
      id: 5,
      doctorName: 'Dr. Kiran Naik',
      etaMins: 30,
      location: 'Hyderabad',
      minsFar: 25,
      queueLength: 6,
      rating: 4.7,
      ratingcount: 18,
      speciality: 'Neurologist',
    },
    {
      id: 6,
      doctorName: 'Dr. Swati Joshi',
      etaMins: 20,
      location: 'Pune',
      minsFar: 15,
      queueLength: 2,
      rating: 4.4,
      ratingcount: 10,
      speciality: 'Dermatologist',
    },
  ];
  return (
    <div className='flex h-screen w-screen  bg-background overflow-y-scroll px-[0px] xl:px-[10%] pt-[140px] font-montserrat relative '>
      <div className='absolute top-[150px] left-0 h-[280px] w-full bg-[#51b4a042]'></div>
      <div className='flex flex-wrap mt-[350px] gap-[20px] justify-center mb-[100px]'>
        {doctors.map((doctor) => {
          return (
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
            />
          );
        })}
      </div>
    </div>
  );
}
