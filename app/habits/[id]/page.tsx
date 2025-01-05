'use client'

import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// 示例完成日期数据
const completedDates = [2, 3, 5, 7, 16, 17, 20, 21, 22, 24, 25, 26, 29]

const morandiColors = {
  sage: "#87A989",
  dustyRose: "#E8C4C4",
  softBlue: "#A0B9C6",
  warmGray: "#B0A8A6",
  muted: "#D1C6C3"
};

const HIGHLIGHT_COLOR = morandiColors.dustyRose;

export default function HabitDetailPage() {
  const router = useRouter()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const stats = {
    thisWeek: 0,
    thisMonth: 0,
    total: 47,
    streak: 5
  }

  const isDateCompleted = (day: number) => {
    return completedDates.includes(day)
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  // 创建日历网格数组
  const calendarDays = [];

  // 添加空白天数来对齐第一天
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // 添加月份的天数
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-semibold flex-1 text-center">gym 💪</h1>
        <Button variant="ghost">Edit</Button>
      </div>

      <Card className="p-4 bg-white">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-gray-600">This Week</h3>
            <p className="text-3xl font-bold" style={{color: morandiColors.dustyRose}}>{stats.thisWeek}</p>
            <p className="text-sm text-gray-500">days</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-600">This Month</h3>
            <p className="text-3xl font-bold" style={{color: morandiColors.softBlue}}>{stats.thisMonth}</p>
            <p className="text-sm text-gray-500">days</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-600">Total</h3>
            <p className="text-3xl font-bold" style={{color: morandiColors.warmGray}}>{stats.total}</p>
            <p className="text-sm text-gray-500">days</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-600">Streak</h3>
            <p className="text-3xl font-bold" style={{color: morandiColors.muted}}>{stats.streak}</p>
            <p className="text-sm text-gray-500">days</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={() => {
            const newDate = new Date(currentMonth)
            newDate.setMonth(currentMonth.getMonth() - 1)
            setCurrentMonth(newDate)
          }}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-lg font-semibold">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <Button variant="ghost" size="icon" onClick={() => {
            const newDate = new Date(currentMonth)
            newDate.setMonth(currentMonth.getMonth() + 1)
            setCurrentMonth(newDate)
          }}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center mb-2">
          {days.map(day => (
            <div key={day} className="text-sm text-gray-500">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <div key={index} className="aspect-square p-1 flex items-center justify-center">
              {day !== null ? (
                <Button
                  variant="ghost"
                  className={cn(
                    "w-8 h-8 p-0 rounded-full text-sm flex items-center justify-center",
                    isDateCompleted(day)
                      ? "bg-[#E8C4C4] text-gray-700 hover:bg-[#DEB0B0]"
                      : "hover:bg-gray-100"
                  )}
                  onClick={() => {
                    console.log(`Toggled day ${day}`)
                  }}
                >
                  {day}
                </Button>
              ) : (
                <div className="w-8 h-8" />
              )}
            </div>
          ))}
        </div>
      </Card>

      <div className="text-sm text-gray-600 space-y-2">
        <p>Scheduled check-ins 31 days</p>
        <p>Check-ins 13 days</p>
        <p>Completion 42%</p>
      </div>
    </div>
  )
}

