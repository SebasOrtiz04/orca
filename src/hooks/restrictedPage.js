'use client'

import { useRouter } from "next/navigation"
import {useEffect } from "react"
import { useSelector } from "react-redux"

export const restrictedPage = ready =>{

    const router = useRouter();

    const {user, status} = useSelector(state => state.auth)

    useEffect(()=>{
        const {getAuthUser} = status
        if(!ready || getAuthUser === -1 ||  user !== null ) return
        router.push('/')
    },[user,ready,status])

    return 
}