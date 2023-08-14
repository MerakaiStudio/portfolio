import React, { useState, useEffect} from 'react'

const useNavbarSeleted = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const addClassList = (cond, ref) => {
        if(cond){
            const nav = document.getElementById(`navbar-${ref?.id}`)
            nav.classList.add('navbar-active')
        } else {
            const nav = document.getElementById(`navbar-${ref?.id}`)
            nav.classList.remove('navbar-active')
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting, ref.current?.id);
        observer.observe(ref?.current);

        addClassList(isIntersecting, ref?.current)

        return () => {
            addClassList(isIntersecting, ref?.current)
            observer.disconnect();
        }
    }, [isIntersecting]);
}

export default useNavbarSeleted