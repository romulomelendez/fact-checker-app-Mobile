import { createContext, ReactNode, useState } from 'react'

interface SearchContextProps {
    children: ReactNode
}

export type NewsProps = {

    "originalNews": {
        "originalTitle": string,
        "originalClaimant": string | undefined,
        "originalClaimDate": string | undefined
    },
    "newsReview": [
        {
            "publisherName": string,
            "publisherSite": string,
            "reviewDate": string,
            "textualRating": string,
            "title": string,
            "urlNews": string,
            "languageCode": string
        }
    ]
}

type SearchContextType = {
    search: string,
    news: Array<NewsProps>,

    setSearch: (search: string) => void,
    setNews: (news: NewsProps[]) => void,
    fetchNewsOnBackend: () => void
}

const SearchContextInitialValues = {
    search: '',
    news: [],

    setSearch: () => {},
    setNews: () => {},
    fetchNewsOnBackend: () => {}
}

export const SearchContext = createContext<SearchContextType>(SearchContextInitialValues)

export const SearchProvider = ({ children }: SearchContextProps) => {

    const [search, setSearch] = useState('')
    const [news, setNews] = useState<NewsProps[]>([])

    const fetchNewsOnBackend = async () => {

        try {

            // Making request to backend to get news and set them in the variable
            await fetch('http://10.0.2.2:5000/search/' + search)
              .then(response => response.json())
              .then(newsData => setNews(newsData))
              .catch(error => console.error(error))

        } catch (err: any) {
            console.error(err.message)
        }
        
    }

    return (

        <SearchContext.Provider value={{ search, setSearch, fetchNewsOnBackend, news, setNews }}>
            { children }
        </SearchContext.Provider>

    )
}