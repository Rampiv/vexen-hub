import { useMemo, useState } from "react"
import "./Resonators.scss"
import { DataResonators } from "../../data"
import { Link } from "react-router"
import React from "react"
import { Card } from "../../components"

const CardMemo = React.memo(Card)

export const Resonators = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedElement, setSelectedElement] = useState("all")

  // Получаем уникальные значения для фильтров
  const roles = useMemo(() => {
    const allRoles = DataResonators.map(item => item.role)
    return ["all", ...Array.from(new Set(allRoles))]
  }, [])

  const elements = useMemo(() => {
    const allElements = DataResonators.map(item => item.element)
    return ["all", ...Array.from(new Set(allElements))]
  }, [])

  // Обработка фильтрации и сортировки
  const filteredAndSortedResonators = useMemo(() => {
    let result = DataResonators

    // Поиск по имени (регистронезависимый)
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(item => item.name.toLowerCase().includes(term))
    }

    // Фильтр по роли
    if (selectedRole !== "all") {
      result = result.filter(item => item.role === selectedRole)
    }

    // Фильтр по элементу
    if (selectedElement !== "all") {
      result = result.filter(item => item.element === selectedElement)
    }

    // Сортировка по имени
    return result.sort((a, b) => a.name.localeCompare(b.name, "ru"))
  }, [searchTerm, selectedRole, selectedElement])
  return (
    <section className="resonators">
      <div className="container">
        <h2 className="resonators__h2">Все персонажи</h2>
        <div className="resonators__controls">
          <input
            type="text"
            placeholder="Поиск по имени..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="resonators__search"
          />

          <select
            value={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}
            className="resonators__select resonators__role"
          >
            {roles.map(role => (
              <option key={role} value={role}>
                {role === "all" ? "Все роли" : role}
              </option>
            ))}
          </select>

          <select
            value={selectedElement}
            onChange={e => setSelectedElement(e.target.value)}
            className="resonators__select resonators__elements"
          >
            {elements.map(element => (
              <option key={element} value={element}>
                {element === "all" ? "Все элементы" : element}
              </option>
            ))}
          </select>
        </div>
        <ul className="resonators__list">
          {filteredAndSortedResonators.map(item => (
            <li className="resonators__item" key={`${item.id}resonator`}>
              <Link to={item.link}>
                <CardMemo
                  name={item.name}
                  role={item.role}
                  resonator={item.resonator}
                  element={item.elementIMG}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
