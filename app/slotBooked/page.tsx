'use client';

import { useRouter } from "next/navigation";
import Button from "../components/ui/Button";

export default function SlotBooked() {
    const router = useRouter();

    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-2xl font-semibold">Slot Booked Successfully</h1>
        <h2 className="text-2xl font-semibold">Slot Time 5:30pm - 6:00pm</h2>
        <p className="text-gray-500">Your slot has been booked successfully. You will receive a confirmation message shortly.</p>
        <Button
          className="bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-2 rounded-full"
          onClick={() => router.push('/doctors')}
        >
          Book another slot
        </Button>
      </div>
    );
}
