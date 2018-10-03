import {withRouter} from 'next/router'
import Layout from '../components/common/Layout'

const Page = withRouter((props) => (
  <Layout>
    You've entered {props.router.query.title}
  </Layout>
))

export default Page
