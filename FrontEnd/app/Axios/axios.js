import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuth from '../Auth/useAuth';
import auth from '../Firebase/FirebaseAppConfig'

export default function useAxios() {

    // useEffect(() => {
    //     auth.onAuthStateChanged(function (userResponse) {
    //         if (userResponse) {
    //             setUser(userResponse)
    //             setLoading(false)
    //         }
    //     });
    // }, [])

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/',
        headers: {
            'Authorization': `Bearer ${getCurrentUser()}`
        }
    })

    return { axiosInstance };
}


