import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

type PaginationProps = {
    totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
    const [params] = useSearchParams()
    const page = params.get('page')
    return (
        <div className='pagination'>
            {Array.from({ length: totalPages }, (_, i) => (
                <Link key={i + 1} to={`?page=${i + 1}`} className={parseInt(page || '1') === i + 1 ? 'active' : ''}>
                    {i + 1}
                </Link>
            ))}
        </div>
    )
}

export default Pagination
