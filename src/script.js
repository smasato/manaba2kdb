const getCourseCodeElement = () => document.getElementsByClassName('coursecode')[0];
const isValidCourseCode = (courseCode) => /[A-Z0-9]{7,}/.test(courseCode);

const getCourseCode = (element) => {
  let courseCode;
  if (element) {
    courseCode = element.innerText;
  }

  if (!isValidCourseCode(courseCode)) {
    return null;
  }
  return courseCode;
};

const getYear = () => document.getElementsByClassName('coursedata-info')[0].innerText.split(' ')[0];

const replaceCourseCode = (element, courseCode, year) => {
  const url = `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/jpn`;
  const aTag = `<a href="${url}" target="_blank">${courseCode}</a>`;
  // eslint-disable-next-line no-param-reassign
  element.innerHTML = aTag;
};

const element = getCourseCodeElement();
const courseCode = getCourseCode(element);
const year = getYear();

if (courseCode !== null) {
  replaceCourseCode(element, courseCode, year);
}
