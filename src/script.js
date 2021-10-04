const getCourseCodeElement = () => {
    return document.getElementsByClassName('coursecode')[0]
}

const getCourseCode = (element) => {
    let courseCode
    if (element) {
        courseCode = element.innerText
    }

    if (!isValidCourseCode(courseCode)) {
        return null
    }
    return courseCode
}

const getYear = () => {
    return document.getElementsByClassName('coursedata-info')[0].innerText.split(' ')[0]
}

const isValidCourseCode = (courseCode) => {
    return /[A-Z0-9]{7,}/.test(courseCode)
}

const replaceCourseCode = (element, courseCode, year) => {
    const url = `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/jpn`
    aTag = `<a href="${url}" target="_blank">` + courseCode + "</a>"
    element.innerHTML = aTag
}

const element = getCourseCodeElement()
const courseCode = getCourseCode(element)
const year = getYear()

if (courseCode !== null) {
    replaceCourseCode(element, courseCode, year)
}
