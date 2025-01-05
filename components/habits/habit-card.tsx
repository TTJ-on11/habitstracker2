import { Card } from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import type { Habit } from "@/types/habit"
import Link from "next/link"

interface HabitCardProps {
  habit: Habit
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <Link href={`/habits/${habit.id}`}>
      <Card className="p-4 hover:bg-card-hover transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
              {habit.icon}
            </div>
            <div>
              <h3 className="font-medium">{habit.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {habit.frequency}
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-semibold">{habit.totalDays}</span>
            <p className="text-sm text-gray-500">Total Days</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}

