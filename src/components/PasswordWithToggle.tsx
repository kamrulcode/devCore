import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

export function PasswordWithToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      className="w-full"
      isRequired
      minLength={8}
      name="password"
      type="password"
      validate={(value) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }
        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }

        return null;
      }}
    >
      <Label className="mb-2 block text-sm font-medium text-[#172554]">
        Password
      </Label>
      <InputGroup
        className="h-11
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
            focus:ring-[#f34b7c]/10"
      >
        <InputGroup.Input type={isVisible ? "text" : "password"} />

        <InputGroup.Suffix className="pe-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <Eye className="size-4" />
            ) : (
              <EyeSlash className="size-4" />
            )}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
      <FieldError className="mt-1 text-xs text-red-500" />
    </TextField>
  );
}
