'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from 'lucide-react'
import { useState } from "react"

export default function AddHabitDialog() {
  const [open, setOpen] = useState(false)
  const [habitName, setHabitName] = useState('')
  const [frequency, setFrequency] = useState('daily')
  const [emoji, setEmoji] = useState('💪')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里添加处理新习惯的逻辑
    console.log({ habitName, frequency, emoji })
    setOpen(false)
    setHabitName('')
    setFrequency('daily')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="w-full bg-[#E8C4C4] hover:bg-[#DEB0B0] text-gray-700" 
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Habit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="habit-name">Habit Name</Label>
            <Input
              id="habit-name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="Enter habit name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="frequency">Frequency</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="emoji">Emoji</Label>
            <div className="flex gap-2">
              {['💪', '📚', '🏃', '🎨', '🎵', '🧘'].map((e) => (
                <Button
                  key={e}
                  type="button"
                  variant={emoji === e ? "default" : "outline"}
                  className="text-xl p-2 h-auto"
                  onClick={() => setEmoji(e)}
                >
                  {e}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Habit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

