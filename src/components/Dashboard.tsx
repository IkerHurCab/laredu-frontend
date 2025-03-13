import { Link } from "react-router-dom"
import { BookOpen, BookText, FileText, Send, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function Dashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenido a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Laredu</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tu plataforma educativa para gestionar cursos, asignaturas, tareas y comunicación.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={item}>
            <Link to="/courses" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-indigo-100 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cursos</h3>
                  <p className="text-gray-600 mb-4">Accede a todos tus cursos y explora el contenido disponible.</p>
                  <div className="mt-auto">
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors duration-300">
                      Ver cursos →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link to="/subjects" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <BookText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Asignaturas</h3>
                  <p className="text-gray-600 mb-4">Revisa las asignaturas en las que estás inscrito.</p>
                  <div className="mt-auto">
                    <span className="text-purple-600 font-medium group-hover:text-purple-800 transition-colors duration-300">
                      Ver asignaturas →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link to="/assignments" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Tareas</h3>
                  <p className="text-gray-600 mb-4">Consulta las tareas pendientes y sus fechas de entrega.</p>
                  <div className="mt-auto">
                    <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300">
                      Ver tareas →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link to="/submissions" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Send className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Entregas</h3>
                  <p className="text-gray-600 mb-4">Revisa el estado de tus entregas y calificaciones.</p>
                  <div className="mt-auto">
                    <span className="text-amber-600 font-medium group-hover:text-amber-800 transition-colors duration-300">
                      Ver entregas →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link to="/messages" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-rose-100 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                    <MessageSquare className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mensajes</h3>
                  <p className="text-gray-600 mb-4">Comunícate con profesores y compañeros de clase.</p>
                  <div className="mt-auto">
                    <span className="text-rose-600 font-medium group-hover:text-rose-800 transition-colors duration-300">
                      Ver mensajes →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

