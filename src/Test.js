import {useEffect} from 'react';

export default function Test() {
    useEffect(() => {
        return () => {
            console.log("je suis supprimé!")
        }
    }, [])


    return (
        <span>Ceci est un test</span>
    )
}
