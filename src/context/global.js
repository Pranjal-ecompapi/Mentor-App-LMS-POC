import React, { useEffect } from "react";

const GlobalContext = React.createContext()

//actions
const LOADING = 'LOADING'
const SET_VIDEOS = 'SET_VIDEOS'
const SET_SELECTED_VIDEO = 'SET_SELECTED_VIDEO'

const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case SET_VIDEOS:
            return {
                ...state,
                loading: false,
                videos: [
                    ...action.payload.map((video) => {
                        return {
                            ...video
                            // videoUrl: `http://localhost:8000/public/videos/${video.filename}`
                        }
                    })
                ]
            }
        default:
            return state
    }

    return state
}

export const GlobalProvider = ({ children }) => {


    const initialState = {
        videos: [],
        loading: false,
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    //get videos
    const getAllVideos = () => {
        const data = {
            videos: [
                {
                    _id: "1",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                },
                {
                    _id: "2",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                },
                {
                    _id: "3",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                },
                {
                    _id: "4",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                },
                {
                    _id: "5",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                }, {
                    _id: "6",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                },
                {
                    _id: "7",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                },
                {
                    _id: "8",
                    videoUrl: "http://localhost:5000/uploads/courses/dadb4fa9-02fb-46fe-b833-2347118e6709/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing"
                }
            ]
        }

        dispatch({ type: SET_VIDEOS, payload: data.videos })

    }

    useEffect(() => {
        getAllVideos()
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
            getAllVideos
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}