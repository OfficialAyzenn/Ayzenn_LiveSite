function circularProgress(){
    document.addEventListener("DOMContentLoaded", function () {
        const progressBars = document.querySelectorAll(".circular-progress");

        progressBars.forEach(bar => {
            const progressValue = bar.getAttribute("data-progress");
            const progressCircle = bar.querySelector(".progress");
            const circumference = 2 * Math.PI * 50;
            const offset = circumference - (progressValue / 100) * circumference;

            progressCircle.style.strokeDashoffset = offset;
        });
    });
}

circularProgress()