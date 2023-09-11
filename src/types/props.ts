export interface IconProps {
    className?: string
  }

export interface ElementProps<T> extends React.HTMLProps<T> {}

export type DivProps = ElementProps<HTMLDivElement> 