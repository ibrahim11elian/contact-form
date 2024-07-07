import success from "./assets/icon-success-check.svg";

export function SuccessMessage({ show }) {
  return (
    <div
      className={`fixed left-1/2 w-full sm:w-[26rem] ${show ? "top-0" : "-top-full"} -translate-x-1/2 transform px-2 pt-4 transition-all duration-500`}
    >
      <div className="flex flex-col gap-2 rounded-lg bg-stone-700 px-5 py-4 text-white">
        <div className="flex gap-3">
          <img src={success} alt="success icon" />
          <span className="font-bold capitalize">message sent!</span>
        </div>
        <p className="text-sm">
          {"Thanks for completing the form. We'll be in touch soon!"}
        </p>
      </div>
    </div>
  );
}
