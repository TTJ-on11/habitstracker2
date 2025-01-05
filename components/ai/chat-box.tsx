'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import AiAvatar from "./ai-avatar"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // 添加用户消息
    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SILICONFLOW_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "Qwen/Qwen2.5-7B-Instruct",
          messages: [
            {
              role: "system",
              content: "你是一个可爱的小狗狗助手，名叫TT's puppy。你的任务是帮助用户建立和保持好习惯。请用友善、活泼的语气回答。"
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 1000
        }),
      })

      const data = await response.json()
      
      if (data.choices && data.choices[0]) {
        const aiMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content
        }
        setMessages(prev => [...prev, aiMessage])
      }
    } catch (error) {
      console.error('Error:', error)
      // 可以添加错误提示
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-4">
      <div className="flex items-center space-x-3 mb-4">
        <AiAvatar />
        <div>
          <h3 className="font-medium">TT's puppy</h3>
          <p className="text-sm text-gray-500">帮助你养成好习惯</p>
        </div>
      </div>

      <div className="space-y-4 mb-4 max-h-[300px] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-[#E8C4C4] text-gray-700'
                  : 'bg-gray-100'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入你的问题..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon"
          className="bg-[#E8C4C4] hover:bg-[#DEB0B0] text-gray-700"
          disabled={isLoading}
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </Card>
  )
} 