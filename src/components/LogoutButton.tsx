import { LogOut } from "lucide-react"

interface LogoutProps {
  onLogout: () => void
}

export default function LogoutButton({ onLogout }: LogoutProps) {
  return (
    <button
      onClick={onLogout}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200"
    >
      <LogOut className="h-4 w-4" />
      <span>Cerrar Sesión</span>
    </button>
  )
}

