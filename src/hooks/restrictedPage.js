'use client'

import { useRouter } from "next/navigation"
import {useEffect } from "react"
import { useSelector } from "react-redux"

export const restrictedPage = ready =>{

    const router = useRouter();

    const {user, status} = useSelector(state => state.auth)

    useEffect(()=>{
        if(!ready || status!== 200 || user ) return
        router.push('/')
    },[user,ready,status])

    return 
}