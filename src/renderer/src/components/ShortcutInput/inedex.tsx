import React, { useState, useCallback, KeyboardEvent, useEffect, useRef } from 'react'
import { Input } from 'antd'
import styles from './styles.module.scss'

interface ShortcutInputProps {
  value?: string
  onChange?: (value: string) => void
}

const ShortcutInput: React.FC<ShortcutInputProps> = ({ value, onChange }) => {
  const [shortcut, setShortcut] = useState(value || '')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<Input>(null)

  useEffect(() => {
    setShortcut(value || '')
  }, [value])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()

      const { key, ctrlKey, shiftKey, altKey, metaKey } = e

      if (key === 'Backspace') {
        setShortcut('')
        onChange?.('')
        return
      }

      if (key === 'Control' || key === 'Shift' || key === 'Alt' || key === 'Meta') {
        return
      }

      const modifiers = []
      if (ctrlKey) modifiers.push('Ctrl')
      if (shiftKey) modifiers.push('Shift')
      if (altKey) modifiers.push('Alt')
      if (metaKey) modifiers.push('Meta')

      const newShortcut = [...modifiers, key].join('+')
      setShortcut(newShortcut)
      onChange?.(newShortcut)
    },
    [onChange]
  )

  const renderShortcut = () => {
    if (!shortcut) return <span className={styles.placeholder}>按下快捷键组合</span>
    return shortcut.split('+').map((key, index) => (
      <span key={index} className={`${styles.keyBlock} ${isFocused ? styles.focused : ''}`}>
        {key}
      </span>
    ))
  }

  const handleWrapperClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className={`${styles.shortcutInputWrapper} ${isFocused ? styles.focused : ''}`}
      onClick={handleWrapperClick}
    >
      <Input
        ref={inputRef}
        className={styles.hiddenInput}
        value={shortcut}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        readOnly
      />
      <div className={styles.shortcutDisplay}>{renderShortcut()}</div>
    </div>
  )
}

export default ShortcutInput
