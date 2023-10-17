import Card from '../../Components/Card'
import Layout from '../../Components/Layout'

function Home(){

  return (
    <Layout>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          <Card></Card>
        </div>
    </Layout>
  )
}

export default Home