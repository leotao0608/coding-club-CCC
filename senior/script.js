/*senior*/
const yearSelect = document.getElementById('year-select');
const problemsDiv = document.getElementById('problems');

yearSelect.addEventListener('change', function() {
  if (this.value) {
    problemsDiv.style.display = 'block';
  } else {
    problemsDiv.style.display = 'none';
  }
});

problemsDiv.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const problemNum = e.target.getAttribute('data-problem');
    const year = yearSelect.value;
    if (year && problemNum) {
      window.location.href = `./${year}s${problemNum}/index.html`;
    }
  }
});