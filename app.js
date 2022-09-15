const config = {
    rootMargin: '0px',
    threshold: 0.01
  };

const inteserction = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
}, config)


const items = document.querySelectorAll(".hidden")
items.forEach(item => inteserction.observe(item));