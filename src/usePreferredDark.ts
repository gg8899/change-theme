import { useState } from 'react'

export function usePreferredDark() {
    // 使用系统当前的明暗模式作为初始值
    const [matches, setMatches] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

    // 监听系统的明暗模式变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        setMatches(e.matches)
    })

    return matches
}