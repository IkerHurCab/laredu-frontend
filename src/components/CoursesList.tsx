import { useEffect, useState } from "react"
import { BookOpen, AlertCircle } from "lucide-react"

interface Course {
  id: number
  name: string
  description: string
}

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      setError("No token found. Please log in.")
      setIsLoading(false)
      return
    }

    fetch("http://127.0.0.1:8000/api/courses", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch courses")
        }
        return res.json()
      })
      .then((data: Course[]) => {
        setCourses(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-indigo-200 mb-4"></div>
          <div className="h-4 w-32 bg-indigo-200 rounded mb-3"></div>
          <div className="h-3 w-24 bg-indigo-100 rounded"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
        <p className="text-red-700">{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-8">
        <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">Mis Cursos</h2>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-600">No hay cursos disponibles</h3>
          <p className="text-gray-500 mt-2">Aún no tienes cursos asignados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 rounded-full p-2 mr-3">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                </div>
                <p className="text-gray-600">{course.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">ID: {course.id}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
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

