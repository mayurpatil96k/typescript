interface size{
    height: number,
    breadth: number
}

interface triangle extends size{
    base: number
}

const tri : triangle={
    height:50,
    breadth:40,
    base:50
}
console.log(tri)