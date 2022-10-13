import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kaldi Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p><img src="/Kaldi_Company_Logo_-_Black.png" alt="Kaldi Company Logo" /></p>
        <Header title="Welcome to the future home of Kaldi Company!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
