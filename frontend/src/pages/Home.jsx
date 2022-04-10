import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row'
import PostItem from "../components/PostItem"

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    const getPosts = async () => {
        fetch('http://localhost:5000/api/posts')
            .then(response => {
                return response.json()
            })
            .then(json => {
                setLoading(false)
                setData(json.body)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
                setError('Ha ocurrido un error al obtener los posts')
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <Row className="home">
            {loading ? <h1>Loading</h1> : error ? <h1>Error</h1> :
                data.map(post => <PostItem key={post.id} post={post} />)
            }
        </Row>
    )
}

export default Home