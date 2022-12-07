const syllabusURL = (courseCode, year) =>
  `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/jpn`

const getCourseCode = (element) => element.innerText
const getYear = (element) => element.innerText.split(" ").shift()

const syllabiAnchorElement = (courseCode, year) => {
  const element = document.createElement("a")
  element.setAttribute("href", syllabusURL(courseCode, year))
  element.setAttribute("target", "_blank")
  element.setAttribute("rel", "external")
  element.innerText = courseCode

  return element
}

const isValidCourseCode = (courseCode) =>
  /[A-Z0-9]{7,}/.test(courseCode)

const replaceCourseCode = (element, courseCode, year) =>
  (element.innerHTML = syllabiAnchorElement(courseCode, year).outerHTML)

const main = () => {
    const courseCodeElement = document.querySelector(".coursecode")
    const courseDataInfoElement =
      document.querySelector(".coursedata-info")
    if (!courseCodeElement || !courseDataInfoElement) return

  const courseCode = getCourseCode(courseCodeElement)
  const year = getYear(courseDataInfoElement)
  if (!isValidCourseCode(courseCode) || !year) return

  replaceCourseCode(courseCodeElement, courseCode, year)
}

main()
