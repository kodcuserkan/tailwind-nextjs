import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => <Layout>
  <h1 className="text-5xl font-bold text-purple-500">Merhaba!</h1>
  
  <ul className="list-disc pl-4">
  <li>
    <Link href="/">
      <a>Anasayfa</a>
    </Link>
  </li>
  <li>
    <Link href="/catPage">
      <a>Cat Page</a>
    </Link>
  </li>
  <li>
    <Link href="/pixabayimages">
      <a>Pixabay Resim Çekme</a>
    </Link>
  </li>
</ul>
</Layout>;


export default Index;
