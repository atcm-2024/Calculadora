const pantalla = document.querySelector("#display");
const buttons = document.querySelector(".buttons_container")

buttons.addEventListener('click',escribir)


function escribir(e){
    if (e.target.tagName==='BUTTON')
        {   let value = e.target.value
            let pv = pantalla.value
            let simbolo = (value==='X' || value==='/' || value==='-' || value==='+' || value==='-' || value==='*' || value==='=') 
            if (value==='X' && pv.length>0)
            {  pantalla.value=pv.slice(0,pv.length-1)
            return;
            }
        
            if (simbolo && pv==='')
            {return}
            
            if (simbolo && (pv.slice(-1)==='X' || pv.slice(-1)==='/' || pv.slice(-1)==='-' || pv.slice(-1)==='+' || pv.slice(-1)==='*' || pv.slice(-1)==='='))
            {     
                    pantalla.value=pv.slice(0,pv.length-1)+value;
                    return
                }
        
            if (value!=='=')
                {pantalla.value+=value;}   
            
            if (value==='AC')
                {pantalla.value="";}          
        
            if (value==='=')
                {pantalla.value=eval(pantalla.value);}      
        }
 }
 