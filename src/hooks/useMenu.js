import { useEffect, useState } from 'react'

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return { isOpen, toggle: () => setIsOpen((value) => !value), close: () => setIsOpen(false) }
}
