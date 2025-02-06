function cupVolume(d1, d2, height){
    //Find the volume
    let r1=d1/2
    let r2=d2/2
    const pi=3.14
    let volume= (1/3)*(pi*height)*((r1**2)+(r1*r2)+(r2**2))
    volume=volume.toFixed(3)

    return Math.round(volume*100)/100
    }
    // console.log(Math.round((cupVolume(1,1,1))*1000)/1000)
    console.log(cupVolume(1000,1000,1000))
