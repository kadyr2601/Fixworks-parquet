"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, ChevronRight, ChevronLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContactAppointment() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Generate calendar days
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, date: null })
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      days.push({ day: i, date })
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  // Month navigation
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  }

  // Handle appointment submission
  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  // Reset form
  const resetForm = () => {
    setSelectedDate(null)
    setSelectedTime(null)
    setStep(1)
    setIsSubmitted(false)
  }

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-black">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-500 text-sm uppercase tracking-widest mb-4">Schedule</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-12 text-center rounded-sm"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Appointment Scheduled</h3>
              <p className="text-zinc-400 mb-4">Your consultation has been scheduled for:</p>
              <p className="text-xl text-amber-500 font-medium mb-8">
                {selectedDate && formatDate(selectedDate)} at {selectedTime}
              </p>
              <p className="text-zinc-400 mb-8">We'll send you a confirmation email with all the details.</p>
              <Button onClick={resetForm} className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg">
                Schedule Another Appointment
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 md:p-12 rounded-sm"
            >
              {step === 1 ? (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                    Select a Date
                  </h3>

                  <div className="mb-8">
                    {/* Calendar header */}
                    <div className="flex items-center justify-between mb-6">
                      <button onClick={prevMonth} className="p-2 text-zinc-400 hover:text-amber-500 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <h4 className="text-lg font-medium text-white">
                        {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                      </h4>

                      <button onClick={nextMonth} className="p-2 text-zinc-400 hover:text-amber-500 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                        <div key={index} className="text-center text-zinc-500 text-sm py-2">
                          {day}
                        </div>
                      ))}

                      {calendarDays.map((day, index) => (
                        <div key={index} className="text-center">
                          {day.day ? (
                            <button
                              onClick={() => setSelectedDate(day.date)}
                              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                selectedDate && day.date?.getTime() === selectedDate.getTime()
                                  ? "bg-amber-500 text-black"
                                  : "text-white hover:bg-amber-500/20"
                              }`}
                            >
                              {day.day}
                            </button>
                          ) : (
                            <div className="w-10 h-10"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedDate}
                      className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2"
                    >
                      Next
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-amber-500" />
                    Select a Time
                  </h3>

                  {selectedDate && (
                    <p className="text-zinc-300 mb-6">
                      Selected Date: <span className="text-amber-500">{formatDate(selectedDate)}</span>
                    </p>
                  )}

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border transition-colors ${
                          selectedTime === time
                            ? "bg-amber-500 text-black border-amber-500"
                            : "border-zinc-700 text-zinc-300 hover:border-amber-500/50 hover:bg-amber-500/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:border-amber-500/50 hover:bg-amber-500/10"
                    >
                      <ChevronLeft className="mr-2 w-4 h-4" />
                      Back
                    </Button>

                    <Button
                      onClick={handleSubmit}
                      disabled={!selectedTime}
                      className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
