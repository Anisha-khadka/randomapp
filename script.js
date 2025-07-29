
const magic=(event,text)=>{
    const dict={
    lover:'to love',
    clothes:'something to wear',
    house:'where we live'
}

    event.preventDefault();
    for (x in dict){
        if(text==[x]){
            mydata=dict[x]
        }
    document.getElementById('outputArea').innerHTML=mydata;
    

}

}

