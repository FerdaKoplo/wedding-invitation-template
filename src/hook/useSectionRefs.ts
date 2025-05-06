import React, { useRef, createRef } from 'react'

export const useSectionRefs = (navList: { key: string }[]) => {
  const refs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({})

  navList.forEach((section) => {
    if (!refs.current[section.key]) {
      refs.current[section.key] = createRef<HTMLDivElement>()
    }
  })

  return refs.current
}
