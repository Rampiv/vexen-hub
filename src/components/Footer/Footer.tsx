import { Discord, TG, YT } from "@assets/icons"
import { Link } from "react-router"
import "./Footer.scss"

export const Footer = () => {
  const links = [
    {
      img: TG,
      text: "ТГ канал",
      link: "https://t.me/RealVexen",
      id: "footertg",
    },
    {
      img: YT,
      text: "VEXEN",
      link: "https://www.youtube.com/channel/UC6AK8pzlGQp4h6HGEfJnRHw",
      id: "footeryt",
    },
    {
      img: Discord,
      text: "CODY",
      link: "#",
      id: "footerdiscord",
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <nav className="navigation">
          <ul className="navigation__list">
            {links.map(item => {
              return (
                <li className="navigation__item" key={item.id}>
                  <Link to={item.link} className="navigation__link">
                    {item.img()}
                    <span className="navigation__text">{item.text}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
