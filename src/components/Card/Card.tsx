import "./Card.scss"

interface Props {
  name: string
  role: string
  resonator: string
  element: string
}

export const Card = ({ name, role, resonator, element }: Props) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={element} alt="Элемент" className="card__element" />
        <img
          src={resonator}
          alt="Изображение резонатора"
          className="card__resonator"
        />
        <div className="card__gradient"></div>
        <h3 className="card__h3">{name}</h3>
      </div>
      <span className="card__role">{role}</span>
    </div>
  )
}
