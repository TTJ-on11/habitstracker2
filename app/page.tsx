import AddHabitDialog from "@/components/habits/add-habit-dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HabitCard from "@/components/habits/habit-card"
import ChatBox from "@/components/ai/chat-box"

export default function HabitsPage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Habits</h1>
      </div>

      <AddHabitDialog />

      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ongoing">On going</TabsTrigger>
          <TabsTrigger value="suspended">Suspended</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-3">
        <HabitCard
          habit={{
            id: '1',
            name: 'gym',
            icon: '💪',
            frequency: 'Everyday',
            totalDays: 47,
            status: 'ongoing',
            checkIns: []
          }}
        />
      </div>

      <ChatBox />
    </div>
  )
}

