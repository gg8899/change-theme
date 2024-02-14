import { useEffect } from "react";
import { useLocalStorageState } from 'ahooks'
import { Button, ColorPicker, ConfigProvider, ThemeConfig, theme } from 'antd'
import ToggleTheme, { ColorMode } from "../components/ToggleTheme";
import { usePreferredDark } from "../my-hooks/usePreferredDark"
import { useDark } from "../my-hooks/useDark";

// 定义key常量
const PRIMARY_COLOR_KEY = "app_primary_color";
const COLOR_MODE_KEY = "app_color_mode";

function App() {
  const preferreDark = usePreferredDark()
  const [primaryColor, setPrimaryColor] = useLocalStorageState(
    PRIMARY_COLOR_KEY,
    {
      defaultValue: "#01bfff",
      serializer: (v) => v, // 因为我们存的本身就是字符串，不需要 JSON 序列化
      deserializer: (v) => v,
    }
  );
  const [mode, setMode] = useLocalStorageState<ColorMode>(COLOR_MODE_KEY, {
    defaultValue: "light",
    serializer: (v) => v,
    deserializer: (v) => v as ColorMode,
  });
  // 当前是否处于黑暗模式
  const isDark = useDark(mode!);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);
  const themeColor: ThemeConfig = {
    token: { colorPrimary: primaryColor },
    algorithm: mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      primaryColor! // 注意这里非空断言
    );
  }, [primaryColor]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", preferreDark)
  }, [preferreDark]);

  return (
    <>
      <ConfigProvider theme={themeColor}>
        <div className="p-4 flex items-center gap-x-3 mb-4">
          <ColorPicker
            value={primaryColor}
            onChange={(_, c) => setPrimaryColor(c)}
          />

          <span className="p-2 text-primary border border-primary">{primaryColor}</span>
          <Button type="primary">主题颜色</Button>
          <Button>主题</Button>

          <ToggleTheme mode={mode!} onChange={(m) => setMode(m)} />
        </div>
        {/* 使用 dark:text-yellow 指定黑暗模式下的文字颜色 */}
        <h1 className="dark:text-yellow m-4 text-10">Light or dark</h1>
      </ConfigProvider>
    </>
  )
}

export default App
