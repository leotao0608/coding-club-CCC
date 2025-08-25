/*junior*/
const yearSelect = document.getElementById('year-select');
const problemsDiv = document.getElementById('problems');

const savedYear = localStorage.getItem('selectedYearJunior');
if (savedYear) {
    yearSelect.value = savedYear;
    problemsDiv.style.display = 'block';
}

yearSelect.addEventListener('change', function() {
  const year = this.value;
  if (year) {
    problemsDiv.style.display = 'block';
    localStorage.setItem('selectedYearJunior', year);
  } else {
    problemsDiv.style.display = 'none';
    localStorage.removeItem('selectedYearJunior');
  }
});

problemsDiv.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const problemNum = e.target.getAttribute('data-problem');
    const year = yearSelect.value;
    if (year && problemNum) {
      window.location.href = `./${year}j${problemNum}/index.html`;
    }
  }
});
