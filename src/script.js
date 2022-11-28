const syllabiURL = (courseCode, year) =>
  `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/jpn`

const getCourseCode = (element) => element.innerText
const getYear = (element) => element.innerText.split(" ")[0]

const isValidCourseCode = (courseCode) =>
  /[A-Z0-9]{7,}/.test(courseCode)

const replaceCourseCode = (element, courseCode, year) =>
  (element.innerHTML = `<a href="${syllabiURL(
    courseCode, year
  )}" target="_blank">${courseCode}</a>`)

const main = () => {
    const courseCodeElement = document.querySelector(".coursecode")
    const courseDataInfoElement =
      document.querySelector(".coursedatainfo")
    if (!courseCodeElement || !courseDataInfoElement) return

  const courseCode = getCourseCode(courseCodeElement)
  const year = getYear(courseDataInfoElement)
  if (!isValidCourseCode(courseCode)) return

  replaceCourseCode(courseCodeElement, courseCode, year)
}

main()
