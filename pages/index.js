import Layout from '../components/common/Layout'
import Post from '../components/index/Post'
import fetch from 'isomorphic-unfetch'

export Index = (props) => (
  <Layout>
    <h2>Welcome to the first Next.js app.</h2>
    <ul>
      <Post id='first' title='First'/>
      <Post id='second' title='Second'/>
      <Post id='third' title='Third'/>
    </ul>
  </Layout>
)
