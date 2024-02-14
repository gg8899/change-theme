import { useState, useEffect } from "react";
import { Switch, Space } from "antd";
export type ColorMode = "light" | "dark";

const iconMap = {
  light: <div className="i-material-symbols:light-mode-outline" />,
  dark: <div className="i-material-symbols:dark-mode-outline" />,
};

interface Props {
  mode: ColorMode;
  onChange: (mode: ColorMode) => void;
}

function ToggleTheme({ mode, onChange }: Props) {
  const [checked, setChecked] = useState(mode === "light");
  useEffect(() => {
    setChecked(mode === 'light' ? true : false)
  }, [mode])
  console.log(mode, checked, 'mode');

  return (
    <Space direction="vertical">
      <Switch value={checked}
        checkedChildren={iconMap[mode]}
        unCheckedChildren={iconMap[mode]}
        onChange={(val) => onChange(val ? "light" : "dark")}
      />
    </Space>
  );
}

export default ToggleTheme;