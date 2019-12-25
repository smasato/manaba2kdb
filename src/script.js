window.onload = function() {
    const coursecode = document.getElementsByClassName('coursecode')[0].innerText;
    const year = document.getElementsByClassName('coursedata-info')[0].innerText.split(' ')[0];
    const url = `https://kdb.tsukuba.ac.jp/syllabi/${year}/${coursecode}/jpn/`
    aTag = `<a href="${url}" target="_blank">` + coursecode + "</a>"
    var element = document.getElementsByClassName('coursecode')[0];
    element.innerHTML = aTag;
};