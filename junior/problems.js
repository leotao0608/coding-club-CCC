const guide_btn = document.getElementById('guide-btn');
const code_btn = document.getElementById('code-btn');
let guide_count = 1;
let code_count = 1;
guide_btn.addEventListener('click', function() {
    const strategyContainer = document.getElementById("strategy-container");
    if(guide_count === 1){
        guide_btn.textContent = "Hide Guide";
        guide_count = 0;
        strategyContainer.style.display = "block";
    } else {
        guide_btn.textContent = "Show Guide";
        guide_count = 1;
        strategyContainer.style.display = "none";
    }
});     
code_btn.addEventListener('click', function() {
    const codeContainer = document.getElementById("code-container");
    if(code_count === 1){
        code_btn.textContent = "Hide Code";
        code_count = 0;
        codeContainer.style.display = "block";
    } else {
        code_btn.textContent = "Show Code";
        code_count = 1;
        codeContainer.style.display = "none";
    }
});