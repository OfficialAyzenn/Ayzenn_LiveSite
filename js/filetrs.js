function filters(){
    document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll("#portfolio-filters li");
        const portfolioItems = document.querySelectorAll(".portfolio-item");
    
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
    
                const filterValue = this.getAttribute("data-filter");
    
                portfolioItems.forEach(item => {
                    const category = item.getAttribute("data-category");
    
                    if (filterValue === "all" || category === filterValue) {
                        item.style.display = "block"; 
                    } else {
                        item.style.display = "none"; 
                    }
                });
            });
        });
    });
}

filters()