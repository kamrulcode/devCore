import { Check } from "@gravity-ui/icons";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { PasswordWithToggle } from "../components/PasswordWithToggle";
import { signIn } from "../lib/auth-client";

export default function SignIn() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: Record<string, string> = Object.fromEntries(
      formData.entries(),
    ) as Record<string, string>;

    const { data: devUser, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    console.log(devUser, error);
  };

  return (
    <div className="flex flex-col w-116 h-135 mx-auto  justify-center  px-20 my-20  bg-radial-[at_100%_15%] from-[#ffc3d8] via-[#cdceff] to-[#ffb1cc] to-90% rounded-2xl gap-20">
      <h3 className="text-center text-2xl font-medium">
        Get in To Choose Your Stack
      </h3>
      <Form
        className="flex w-full max-w-96 flex-col gap-5 "
        onSubmit={onSubmit}
      >
        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
          className="w-full"
        >
          <Label className="mb-2 block text-sm font-medium text-[#172554]">
            Email
          </Label>

          <Input
            placeholder="john@example.com"
            className="
            h-11
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            px-3
            text-sm
            text-[#172554]
            shadow-sm
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-[#f34b7c]
            focus:ring-2
            focus:ring-[#f34b7c]/10
          "
          />

          <FieldError className="mt-1 text-xs text-red-500" />
        </TextField>

        {/* Password */}
        <div className="w-full">
          <PasswordWithToggle />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Button
            type="submit"
            className="
            h-10
            rounded-full
            bg-[#f34b7c]
            px-6
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-[#e74373]
          "
          >
            <Check className="h-4 w-4" />
            Submit
          </Button>

          <Button
            type="reset"
            variant="secondary"
            className="
            h-10
            rounded-full
            bg-gray-100
            px-5
            text-sm
            font-medium
            text-gray-700
            transition
            hover:bg-gray-200
          "
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
