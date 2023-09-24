import './StatSection.css'

interface Props {
  label: string
  leftValue: number
  rightValue: number
}

export const StatSection: React.FC<Props> = ({ label, leftValue, rightValue }): JSX.Element => {
  return (
    <section className='b-cont'>
      <h4 className='numb-inf'>{leftValue}</h4>
      <h2 className='nam-stat lab-t '>
        {label}
      </h2>
      <h4 className='numb-inf'>{rightValue}</h4>
    </section>
  )
}
