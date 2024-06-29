const buttons = document.querySelectorAll('#btn');
        const body = document.querySelector('body')
      
        buttons.forEach(btn=> {
            btn.addEventListener('click', (e)=>{
                //console.log(e.target);
                body.style.backgroundColor = e.target.innerText
            })
        })