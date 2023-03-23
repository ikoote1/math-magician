import { useState, useEffect } from "react"

function Display() {
  const [data, setData] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const json = await res.json()
        setData(json)
      } catch (error) {
        setHasError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [setData, setIsLoading])

  if (hasError) return <div>Something went wrong!</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default Display