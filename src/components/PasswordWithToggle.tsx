import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

interface Props {
  name?: string;
}

export function PasswordWithToggle({ name = "password" }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full">
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-800">
        Password <span className="text-pink-500">*</span>
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          required
          minLength={8}
          type={visible ? "text" : "password"}
          placeholder="Create a strong password"
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
        />
        <button
          type="button"
          onClick={() => setVisible((value) => !value)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-50 hover:text-violet-600"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
        </button>
      </div>
      <p className="mt-1.5 text-xs text-slate-400">At least 8 characters.</p>
    </div>
  );
}
