const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) =>{
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains("aberto")
        
        if (isOpen) {
            acordeon.classList.remove('aberto')
        }else{
            acordeon.classList.add('aberto')
        }
        console.log('show')
    })
})