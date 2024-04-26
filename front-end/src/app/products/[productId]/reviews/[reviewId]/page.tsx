export default function ReviewDetails({params} : {
    params : {
        productId: string,
        reviewId: string
    }
}){
    return (
        <>
            <h1>Product Info {params.productId} Review Info {params.reviewId}</h1>
        </>
    )
}