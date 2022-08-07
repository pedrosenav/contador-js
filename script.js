function contador(){
    let start = Number(document.getElementById('start').value)
    let end = Number(document.getElementById('end').value)
    let jump  = Number(document.getElementById('jump').value)
    let res = document.getElementById('res')
    res.innerHTML = ''

    if(start == null || end == null || jump == null){
        window.alert('[ERRO] Preencha os dados corretamento!')
    }else{
        if(start < end){
            for(start=start ; start < end ; start+=jump){
                res.innerHTML += `<em>${start}</em> &#x1F449;`
            }
            if(start == end){
                res.innerHTML += `<em>${start}</em> &#x1F3C1;`
            }else{
                res.innerHTML += `&#x1F3C1;`
            }
        }else if(start > end){
            for(start=start ; start > end ; start-=jump){
                res.innerHTML += `<em>${start}</em> &#x1F449;`
            }
            if(start == end){
                res.innerHTML += `<em>${start}</em> &#x1F3C1;`
            }else{
                res.innerHTML += `&#x1F3C1;`
            }
        }else{
            window.alert('[ERRO] Utilize valores distintos!')
        }
    }

    
}
