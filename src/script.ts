const getCourseCodeElement = (): Element => document.getElementsByClassName('coursecode')[0];
const isValidCourseCode = (courseCode: string): boolean => /[A-Z0-9]{7,}/.test(courseCode);

const getCourseCode = (element: HTMLElement): string | null => {
  let courseCode;
  if (element) {
    courseCode = element.innerText;
    if (!isValidCourseCode(courseCode)) {
      return null;
    }
    return courseCode;
  }

  return null;
};

const getYear = () => { 
  const element = document.getElementsByClassName('coursedata-info')[0] as HTMLElement;
  return element.innerText.split(' ')[0];
 }

const replaceCourseCode = (element : HTMLElement, courseCode : string, year :string) => {
  const url = `https://kdb.tsukuba.ac.jp/syllabi/${year}/${courseCode}/jpn`;
  const aTag = `<a href="${url}" target="_blank">${courseCode}</a>`;
  // eslint-disable-next-line no-param-reassign
  element.innerHTML = aTag;
};

const main = () => {
  const element = getCourseCodeElement();
  const courseCode = getCourseCode(element as HTMLElement);
  const year = getYear();

  if (courseCode !== null) {
    replaceCourseCode(element as HTMLElement, courseCode, year);
  }
};

main();
