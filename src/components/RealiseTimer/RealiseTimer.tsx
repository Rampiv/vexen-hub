import { useState, useEffect } from "react"
import './RealiseTimer.scss'

const PATCH_2_7_RELEASE = new Date("2025-11-28T10:00:00Z").getTime()

export const RealiseTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = PATCH_2_7_RELEASE - now

      if (diff <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown">
      <div className="countdown__item">
        <span className="countdown__value">{timeLeft.days}</span>
        <span className="countdown__label">дн</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__value">{timeLeft.hours}</span>
        <span className="countdown__label">ч</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__value">{timeLeft.minutes}</span>
        <span className="countdown__label">мин</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__value">{timeLeft.seconds}</span>
        <span className="countdown__label">сек</span>
      </div>
    </div>
  )
}
