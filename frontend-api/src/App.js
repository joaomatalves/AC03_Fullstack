import React, { useEffect, useState}  from 'react'
import axios from 'axios'
import './App.css';


function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    axios.get("https://alemdocodigo.herokuapp.com/list_posts")
    .then((response) => {
      setPosts(response.data.posts)
      setLoading(false)
    })

  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <div class="loadingio-spinner-spinner-qzc1xkl8axm"><div class="ldio-llbwto4tgqr">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
      </div>
    )
  }

	return(
		<div className="app">

			<div className="cards">

        {posts.map((post, key) => {
            return(
              <div className="card" key={key} >
                  <div className="card-body" >
                    <h1>{post.title}</h1>
                    <div className="line"></div>
                    <h2>{post.content}</h2>
                  </div>
				      </div>

            )
        })}

				
			
			</div>

		</div>
	)

}

export default App;



