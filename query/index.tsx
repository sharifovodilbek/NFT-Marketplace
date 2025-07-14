"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactNode, useState } from "react"

export const QueryProvider = ({children}:{children:ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient({
          defaultOptions:{
            queries:{
                retry:1,
                refetchOnWindowFocus:false,
                staleTime:1000 * 60 * 5,
                // @ts-ignore
                cacheTime:1000 * 60 * 10,
            }
        }
    }))
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}