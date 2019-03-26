import React from 'react'

type JUSTIFY = 'start' | 'center' | 'end' | 'between' | 'around'
type ALIGN = 'start' | 'center' | 'end' | 'baseline' | 'stretch'
type DIRECTION = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type WRAP = 'nowrap' | 'wrap' | 'reverse'

interface Props {
  justify: JUSTIFY;
  align: ALIGN;
  direction: DIRECTION;
  children: React.ReactChild[];
  wrap: WRAP;
  style: React.CSSProperties;
  className: string;
}

export default function Flex(props: Partial<Props>) {
  const {
    direction = 'row',
    wrap = 'nowrap',
    justify = 'start',
    align = 'start',
    style,
    className,
  } = props

  const justifyMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
  }

  const alignMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  }

  return (
    <div className={className}
      style={style}>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: ${direction} ${wrap};
          justify-content: ${justifyMap[justify]};
          align-items: ${alignMap[align]};
        }
      `}</style>
    </div>
  )
}
