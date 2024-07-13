import React from "react";

import { Toggle } from "./components/toggle";

export const ControlProps = () => {
    const [isOn, setIsOn] = React.useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "true") {
            setIsOn(true);
            return;
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h1>Control Props</h1>
            <Toggle value={isOn} handleChange={handleToggle} />

            <input className="p-4 border border-slate-500" type="text" onChange={handleInputChange} />

        </div>
    );
};
