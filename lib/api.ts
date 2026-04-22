
export type Data = {
    message:string
    from:string
}

export async function getData(){
    const data:Data = {
        message: "hello world",
        from:"sanku"
    }
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data),7000)
    })
}