import { Card } from "@/components/ui/card"
import { Heart, Paperclip, Lightbulb, Bell, Search, Settings, MoreHorizontal, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

const categories = [
  { name: 'Wishes', icon: Heart, count: 0 },
  { name: 'Big Moments', icon: Paperclip, count: 0 },
  { name: 'Ideas', icon: Lightbulb, count: 0 },
  { name: 'Reminders', icon: Bell, count: 0 },
]

export default function MindsPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Minds</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="p-4">
            <div className="flex flex-col items-start space-y-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <category.icon className="w-5 h-5 text-[#0066FF]" />
              </div>
              <h3 className="font-medium">{category.name}</h3>
              <span className="text-2xl font-semibold">{category.count}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Notes</h2>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center py-8 text-gray-500">
          <p>Empty Folder</p>
        </div>
      </div>

      <Button
        className="fixed bottom-20 right-4 rounded-full w-12 h-12 bg-[#0066FF]"
        size="icon"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  )
}

