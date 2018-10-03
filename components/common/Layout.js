import Header from './Header'

const styles = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <main style={styles}>
    <Header />    
    {props.children}
  </main>
)

export default Layout
