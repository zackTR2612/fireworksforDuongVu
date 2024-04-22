
function creaetBurst(){
    const animationComtainer = document.querySelector('.amination-container')
    const burst = document.querySelector('.burst')
    const line = document.querySelector('.line')

    burst.style.top = Math.random() * innerHeight + 'px'
    burst.style.left = Math.random() * innerWidth + 'px'

    const colors =["#ea5e55", "#34a854", "4285f4", "#fbbc05", "#fdfdfd", "ocean"]

    line.forEach(line=> {
        const randomColor = colors[Math.floor(Math.random()*colors.lenght)]
        line.style.background = randomColor
    })
    const burstClone = burst.cloneNode(true);
    animationComtainer.appendChild(burstClone)
    setTimeout(()=>{
        burstClone.remove();
    },3000)
}
setInterval(creaetBurst,400)