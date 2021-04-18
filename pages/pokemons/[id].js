import { useRouter } from 'next/router'

export default function Pokemon() {
    const router = useRouter()
    const { id , postData } = router.query;

    return (
        <>
            <p>pokemon id  {id} {postData}</p>
        </>
    )
}