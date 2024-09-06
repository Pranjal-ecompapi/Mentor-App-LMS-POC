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
                    _id: 1,
                    mediaId: "media_001",
                    lessonId: "lesson_001",
                    videoUrl: "http://localhost:5000/uploads/courses/57a9f323-07e8-4eed-b4e1-ab3ab5dcc500/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing",
                },
                {
                    _id: 2,
                    mediaId: "2",
                    lessonId: "2",
                    videoUrl: "http://localhost:5000/uploads/courses/57a9f323-07e8-4eed-b4e1-ab3ab5dcc500/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing",
                },
                {
                    _id: 3,
                    mediaId: "3",
                    lessonId: "3",
                    videoUrl: "http://localhost:5000/uploads/courses/57a9f323-07e8-4eed-b4e1-ab3ab5dcc500/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing",
                },
                {
                    _id: 4,
                    mediaId: "4",
                    lessonId: "4",
                    videoUrl: "http://localhost:5000/uploads/courses/57a9f323-07e8-4eed-b4e1-ab3ab5dcc500/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing",
                },
                {
                    _id: 5,
                    mediaId: "5",
                    lessonId: "5",
                    videoUrl: "http://localhost:5000/uploads/courses/57a9f323-07e8-4eed-b4e1-ab3ab5dcc500/index.m3u8",
                    title: "Testing",
                    description: "This is the description of testing",
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