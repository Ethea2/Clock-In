import React from 'react'

export default function Homepage({ params }) {
    const id = params.id
    return (
        <div>{id}</div>
    )
}
