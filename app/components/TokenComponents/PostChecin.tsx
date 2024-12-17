export default function PostCheckin({
  position,
  tokenNumber,
  tokenTime,
}: {
  position: number;
  tokenNumber: number;
  tokenTime: string;
}) {
  return (
    <div className="h-[300px] w-[80%] md:w-[60%] lg:w-[40%] border-[3px] border-solid border-black rounded-xl self-center m-[50px] flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        {" "}
        <p className="font-semibold">Token no.</p>
        <h1 className="text-[2.4rem] sm:text-[3rem] font-bold text-[#000000] ">
          {tokenNumber}
        </h1>
        <p className="font-semibold">Alloted Time</p>
        <h1 className="text-[2.4rem] sm:text-[3rem] font-semibold text-[#2FA58E] ">
          {tokenTime}
        </h1>
      </div>
      <div className="h-[10%] w-full bg-black flex flex-row items-center justify-center text-white text-[0.9rem]">
        <span className="font-bold text-[1rem] mx-[5px]">{position}</span>{" "}
        patient(s) in front of you
      </div>
    </div>
  );
}
