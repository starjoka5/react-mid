import { Switch } from "@nextui-org/react";
import React from "react";

interface ToggleRefactoredProps {
  value?: boolean;
  handleChange?: () => void;
}

export const Toggle = ({
  value,
  handleChange,
}: ToggleRefactoredProps) => {
  const [isOn, setIsOn] = React.useState(false);

  const isControlled = value !== undefined && handleChange !== undefined;

  const handleToggle = () => {
    if (isControlled) {
      handleChange();
      return;
    }

    setIsOn(!isOn);
  };

  const finalValue = isControlled ? value : isOn;

  return (
    <Switch
      type="checkbox"
      isSelected={finalValue}
      onChange={handleToggle}
    />
  );
};
