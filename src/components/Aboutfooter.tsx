import { Circle, Dna, Globe2, Languages } from "lucide-react"

const Aboutfooter = () => {


  const items = [
    { name: "Language", answer: "Bangla, English", icon: <Languages className="h-11 w-11" /> },
    { name: "Nationality", answer: "Bangladesh", icon: <Globe2 className="h-8 w-8" /> },
    { name: "Gender", answer: "Male", icon: <Dna className="h-8 w-8" /> },
  ]


  return (
    <>
      {
        items.map((val, index) => {
          return (
            <ul key={index}>
              <li>{val.name}</li>
              <li>{val.answer}</li>
            </ul>
          )
        })
      }

    </>
  )
}

export default Aboutfooter