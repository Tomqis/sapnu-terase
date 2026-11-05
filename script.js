// Automātiski atjauno gadu lapas apakšā.
document.getElementById('year').textContent = new Date().getFullYear();

// Parāda elementus, kad apmeklētājs aizritina līdz tiem.
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

// Neliela aizkave starp pakalpojumu kartīšu parādīšanos.
document.querySelectorAll('.reveal').forEach((element, index) => {
    element.style.transitionDelay = (index % 3) * 90 + 'ms';
    observer.observe(element);
});
