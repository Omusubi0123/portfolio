import type React from "react"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import Section from "./Section"

interface CareerItem {
  title: string
  company: string
  period: string
  description: string
}

const careerData: CareerItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Led development of cutting-edge AI-powered applications, improving efficiency by 40%.",
  },
  {
    title: "Full Stack Developer",
    company: "Web Solutions Co.",
    period: "2018 - 2021",
    description: "Developed and maintained over 20 high-traffic websites using React and Node.js.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description: "Contributed to the development of innovative mobile apps, gaining proficiency in React Native.",
  },
]

const Carrier: React.FC = () => {
  return (
    <Section
      id="carriers"
      title="Career Journey"
      className="bg-transparent flex justify-center py-8"
    >
      {/* <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Career Journey</h2> */}
        <div className="relative">
          {careerData.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  <Briefcase className="inline-block mr-2" size={16} />
                  {item.company}
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  <Calendar className="inline-block mr-2" size={16} />
                  {item.period}
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
          >
            View Full Resume
            <ChevronRight className="ml-2" size={16} />
          </a>
        </div>
      {/* </div> */}
    </Section>
  )
}

export default Carrier

