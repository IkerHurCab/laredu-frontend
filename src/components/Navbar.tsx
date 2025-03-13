import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"
import { BookOpen, BookText, FileText, MessageSquare, Send, Menu } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  onLogout: () => void
}

export default function Navbar({ onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Laredu</span>
              <span className="text-yellow-300">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
              to="/courses"
            >
              <BookOpen className="h-4 w-4" />
              <span>Cursos</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
              to="/subjects"
            >
              <BookText className="h-4 w-4" />
              <span>Asignaturas</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
              to="/assignments"
            >
              <FileText className="h-4 w-4" />
              <span>Tareas</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
              to="/submissions"
            >
              <Send className="h-4 w-4" />
              <span>Entregas</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
              to="/messages"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Mensajes</span>
            </Link>
            <LogoutButton onLogout={onLogout} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 pb-3">
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 py-2"
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              <span>Cursos</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 py-2"
              to="/subjects"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookText className="h-4 w-4" />
              <span>Asignaturas</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 py-2"
              to="/assignments"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>Tareas</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 py-2"
              to="/submissions"
              onClick={() => setIsMenuOpen(false)}
            >
              <Send className="h-4 w-4" />
              <span>Entregas</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 py-2"
              to="/messages"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Mensajes</span>
            </Link>
            <div className="pt-2">
              <LogoutButton onLogout={onLogout} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

