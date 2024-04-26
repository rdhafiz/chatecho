export default function ReviewDetails({params} : {
    params : {reviewId: string}
}){
    return (
        <>
            <h1>Review Info {params.reviewId}</h1>
        </>
    )
}