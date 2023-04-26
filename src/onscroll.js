const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

items.forEach((el) => observer.observe(el));