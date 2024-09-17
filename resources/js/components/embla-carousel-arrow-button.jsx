import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { IconChevronLeft, IconChevronRight } from '@irsyadadl/paranoid'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <Button variant="outline" size="icon" className="rounded-full"
      type="button"
      {...restProps}
    >
    <IconChevronLeft></IconChevronLeft>
      {children}
    </Button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <Button variant="outline" size="icon" className="rounded-full"
      type="button"
      {...restProps}
    >
    <IconChevronRight/>
      {children}
    </Button>
  )
}
