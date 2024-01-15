'use client'
/*
    Description: This is Error page .it will show up when and error occurs

*/

import { useEffect } from 'react'

const Error = ({ error, reset }) => {

    useEffect(() => {

        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong with add meal page baire!</h2>
            <button
                onClick={
                    () => reset()}  >
                Try again
            </button>
        </div>
    )
}
export default Error;