import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AiAvatar() {
  return (
    <Avatar className="w-24 h-24">
      <AvatarImage src="/your-new-image.png" alt="AI Assistant" />
      <AvatarFallback className="bg-blue-100 text-blue-600">AI</AvatarFallback>
    </Avatar>
  )
} 