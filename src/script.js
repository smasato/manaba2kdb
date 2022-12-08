const getLanguage = () => {
  const language = document.querySelector("html").getAttribute("lang")
  if (language === "ja") return "jpn"
  if (language === "en") return "eng"
  return "jpn"
}

const syllabusURL = (courseCode, year, lang) =>
  `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/${lang}`

const getCourseCode = (element) => element.innerText
const getYear = (element) => element.innerText.split(" ").shift()

const syllabiAnchorElement = (courseCode, year, lang) => {
  const element = document.createElement("a")
  element.setAttribute("href", syllabusURL(courseCode, year, lang))
  element.setAttribute("target", "_blank")
  element.setAttribute("rel", "external")
  element.innerText = courseCode

  return element
}

const isValidCourseCode = (courseCode) =>
  /[A-Z0-9]{7,}/.test(courseCode)

const replaceCourseCode = (element, courseCode, year, lang) =>
  (element.innerHTML = syllabiAnchorElement(courseCode, year, lang).outerHTML)

const main = () => {
  const courseCodeElement = document.querySelector(".coursecode")
  const courseDataInfoElement =
    document.querySelector(".coursedata-info")
  if (!courseCodeElement || !courseDataInfoElement) return

  const lang = "jpn" // TODO: getLanguage()
  const courseCode = getCourseCode(courseCodeElement)
  const year = getYear(courseDataInfoElement)
  if (!isValidCourseCode(courseCode) || !year) return

  replaceCourseCode(courseCodeElement, courseCode, year, lang)
}

main()
