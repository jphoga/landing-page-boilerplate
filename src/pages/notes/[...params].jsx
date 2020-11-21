import React from 'react';
import  { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
    const router = useRouter();
    
    const { params } = router.query

    return (
        <div>
            <h1>
                Note: {params}
            </h1>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
            <button onClick={e => router.push('/')}>
                Go Home
            </button>

            <button onClick={e => router.push('/user/[id]', `/user/${id}`)}>
                Dashboard
            </button>

        </div>
    )
}

export default Page
