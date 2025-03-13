"use client"

import { useEffect, useState } from "react"
import { BookText, AlertCircle } from "lucide-react"

interface Subject {
  id: number
  name: string
  course_id: number
  teacher_id: number
}

export default function SubjectsList() {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/subjects", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data)
        setIsLoading(false)
      })
      .catch(() => {
        setError("Error al obtener las asignaturas")
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-purple-200 mb-4"></div>
          <div className="h-4 w-32 bg-purple-200 rounded mb-3"></div>
          <div className="h-3 w-24 bg-purple-100 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-8">
        <BookText className="h-8 w-8 text-purple-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">Mis Asignaturas</h2>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start mb-6">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {subjects.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <BookText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-600">No hay asignaturas disponibles</h3>
          <p className="text-gray-500 mt-2">Aún no tienes asignaturas asignadas.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <BookText className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500 block">ID Curso: {subject.course_id}</span>
                    <span className="text-sm text-gray-500 block mt-1">ID Profesor: {subject.teacher_id}</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-200">
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

