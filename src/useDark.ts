import { useMemo } from 'react'
import { usePreferredDark } from './usePreferredDark'
import type { ColorMode } from './ToggleTheme'

export function useDark(mode: ColorMode) { // 外部传入，用户选择的明暗模式
  const preferredDark = usePreferredDark() // 当前系统是否是黑暗模式
  const isDark = useMemo(() => {
    return mode === 'dark' || (preferredDark && mode !== 'light') // 简化后的逻辑
  }, [mode, preferredDark])

  return isDark
}