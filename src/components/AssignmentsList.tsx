import { useEffect, useState } from "react"
import { FileText, Calendar, AlertCircle } from "lucide-react"

interface Assignment {
  id: number
  title: string
  due_date: string
  subject_id: number
}

export default function AssignmentsList() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/assignments", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data)
        setIsLoading(false)
      })
      .catch(() => {
        setError("Error al obtener las tareas")
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-blue-200 mb-4"></div>
          <div className="h-4 w-32 bg-blue-200 rounded mb-3"></div>
          <div className="h-3 w-24 bg-blue-100 rounded"></div>
        </div>
      </div>
    )
  }

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  // Calculate if an assignment is due soon (within 3 days)
  const isDueSoon = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays >= 0 && diffDays <= 3
  }

  // Calculate if an assignment is overdue
  const isOverdue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    return due < today
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-8">
        <FileText className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">Mis Tareas</h2>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start mb-6">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {assignments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-600">No hay tareas disponibles</h3>
          <p className="text-gray-500 mt-2">No tienes tareas pendientes.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${
                isOverdue(assignment.due_date)
                  ? "border-l-4 border-red-500"
                  : isDueSoon(assignment.due_date)
                    ? "border-l-4 border-amber-500"
                    : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{assignment.title}</h3>
                </div>
                <div className="flex items-center mt-4 text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span
                    className={`text-sm ${
                      isOverdue(assignment.due_date)
                        ? "text-red-600 font-medium"
                        : isDueSoon(assignment.due_date)
                          ? "text-amber-600 font-medium"
                          : ""
                    }`}
                  >
                    {formatDate(assignment.due_date)}
                    {isOverdue(assignment.due_date) && " (Vencida)"}
                    {!isOverdue(assignment.due_date) && isDueSoon(assignment.due_date) && " (Pronto)"}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Asignatura ID: {assignment.subject_id}</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                    Ver detalles →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

