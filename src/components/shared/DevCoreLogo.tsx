import Logo from "../../assets/logo.png";
export function DevCoreLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-violet-600 to-pink-500 shadow-lg shadow-violet-500/20">
        <span className="text-lg font-black tracking-tight text-white">
          <img src={Logo} alt="" />
        </span>
      </div>
      <span
        className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}
      >
        dev<span className="text-pink-500">Core</span>
      </span>
    </div>
  );
}
