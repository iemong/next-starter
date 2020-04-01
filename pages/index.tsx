import * as React from 'react'
import styled from '@emotion/styled'

type DocumentTypeEx = Document & {
    hasStorageAccess: () => Promise<any>
}

const Home = () => {
    const [access, setAccess] = React.useState()
    React.useEffect(() => {
        if ('hasStorageAccess' in document) {
            const promise = (document as DocumentTypeEx).hasStorageAccess()
            promise.then(
                (hasAccess: boolean) => {
                    console.log(hasAccess)
                    setAccess(JSON.stringify(hasAccess))
                },
                (reason: any) => {
                    console.log(reason)
                    setAccess(JSON.stringify(reason))
                },
            )
        }
    }, [])

    return <Title>{access}</Title>
}

export default Home

const Title = styled.h1`
    font-size: 20px;
    color: red;
`
