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
        <p><img src="/logo.png" alt="Kaldi Company Logo" width="300" /></p>
        <Header title="Coming Soon" />
        <p className="description">
          Future home of Kaldi Company - a blockchain commodity company innovating in the coffee space
        </p>
      </main>

      <Footer />
    </div>
  )
}
