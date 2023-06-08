import React, { useState } from 'react'

const useSelected = () => {
    const [cond, setCond] = useState(false)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            console.log(id);
        })
    })
    return cond
}
    

export default useSelected