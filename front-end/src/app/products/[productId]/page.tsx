export default function ProductDetails({params} : {
    params : {productId: string}
}){
    return (
        <>
            <h1>Product Info {params.productId}</h1>
        </>
    )
}