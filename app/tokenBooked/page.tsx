'use client';
import Button from "../components/ui/Button";
import { useRouter } from "next/navigation";

export default function SlotBooked() {
    const router = useRouter();
  
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-2xl font-semibold">Token Booked Successfully</h1>
        <h2 className="text-2xl font-semibold">Token Number is : 1331 </h2>
        <p className="text-gray-500">Your token has been booked successfully. You will receive a confirmation message shortly.</p>
        <Button
          className="bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-2 rounded-full"
          onClick={() => router.push('/doctors')}
        >
          Book another slot
        </Button>
      </div>
    );
  }