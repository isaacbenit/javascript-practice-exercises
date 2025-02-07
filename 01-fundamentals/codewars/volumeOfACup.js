function cupVolume(d1, d2, height){
    //Find the volume
    let r1=d1/2
    let r2=d2/2
    const pi=Math.PI   
    let volume= (1/3)*(pi*height)*((r1**2)+(r1*r2)+(r2**2))
    return Math.round(volume*100)/100
    }

    console.log(cupVolume(5,12,31))
