import { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => (
  <main>
    <header className="flex items-center p-8 bg-black">
      <img className="h-20" src="/img/dota.svg" alt="Dota Notifier" />
      <h1 className="text-4xl font-semibold ml-8">Dota Notifier</h1>
    </header>
    <section className="my-4 mt-0 px-8 pb-8 bg-black">
      <p className="text-xl">
        Get notifications on your phone when a ready check is triggered or a
        match is ready.
      </p>
    </section>
    <section className="my-12 mt-8 px-8">
      <h2 className="text-6xl font-semibold mb-8 text-accent">Features</h2>
      <ul className="text-3xl">
        <li>Ready check</li>
        <li>Match found</li>
      </ul>
    </section>
    <section className="my-12 mt-8 px-8">
      <h2 className="text-6xl font-semibold mb-8 text-accent">Setup</h2>
      <h3 className="bullet">1</h3>
      <p className="text-xl my-4">Download and install the desktop app.</p>
      <a className="button" href="#download">
        Windows
      </a>
    </section>
    <section className="my-12 px-8">
      <h3 className="bullet">2</h3>
      <p className="text-xl my-4">Download the mobile app.</p>
      <div className="my-4">
        <a className="button" href="#app-store">
          App Store
        </a>
        <a className="button ml-8" href="#google-play">
          Google Play
        </a>
      </div>
    </section>
    <section className="my-12 px-8">
      <h3 className="bullet">3</h3>
      <p className="text-xl my-4">Configure Dota 2.</p>
      <p className="my-4 text-xl">
        Open Dota 2, go to settings, then options, and enable all{' '}
        <em>Bring Dota 2 to front</em> settings.
      </p>
      <a className="block my-4" href="/img/configure_dota.jpg">
        <img
          className="rounded"
          src="/img/configure_dota.jpg"
          alt="Configure Dota"
        />
      </a>
    </section>
    <section className="my-12 px-8">
      <h3 className="bullet">4</h3>
      <p className="text-xl my-4">
        Scan the QR code from the desktop app with the mobile app once and you
        are good to go. Whenever you are stepping away from your computer, just
        press <em>I&apos;m away</em> on the app.
      </p>
      <p className="text-xl my-4">
        You should also press <em>I&apos;m back</em> when you are back else Dota
        Notifier will keep running in the background. While it does not use a
        lot of resources, it might impact your computer performance depending on
        your specs.
      </p>
      <a className="block my-4  " href="/img/dota_notifier.png">
        <img
          className="w-100"
          src="/img/dota_notifier.png"
          alt="Dota Notifier"
        />
      </a>
    </section>
    <section className="my-12 border-t-2 border-black px-8">
      <h2 className="text-6xl font-semibold my-8 text-accent">Tips</h2>
      <h3 className="bullet">1</h3>
      <p className="text-xl my-4">
        Configure iOS notifications to make sure you do not miss anything. The
        app plays the ready check and match ready sounds from Dota!
      </p>
      <a className="block my-4 " href="/img/ios_notifications.jpg">
        <img
          className="rounded w-100"
          src="/img/ios_notifications.jpg"
          alt="Configure iOS notifications"
        />
      </a>
    </section>
    <section className="my-12 border-t-2 border-black px-8">
      <h2 className="text-6xl font-semibold my-8 text-accent">How it works</h2>
      <p className="text-xl my-4">
        When you press <em>I&apos;m away</em>, Dota Notifier takes a screenshot
        of Dota every few seconds and checks it for keywords (ready check, game
        is ready) and sends the appropriate notification.
      </p>
      <p className="text-xl my-4">
        Right now, it is only available for English. In the future, I will add
        support for more languages.
      </p>
    </section>
    <section className="my-12 border-t-2 border-black px-8">
      <h2 className="text-6xl font-semibold my-8 text-accent">About</h2>
      <p className="text-xl my-4">
        I built this app because sometimes, the queue can be very long and I
        want to go get a drink or go to the bathroom or do other things will I
        queue. Sometimes, I miss the game because I could not make it back in
        time. This app takes care of that.
      </p>
      <p className="text-xl my-4">
        Dota Notifier is open-source. You can find the code on{' '}
        <a href="https://github.com/dota-notifier">GitHub</a>.
      </p>
      <p className="text-xl my-4">
        I&apos;m Ali Zahid (mildpanda), an{' '}
        <a
          href="https://alizahid.dev"
          target="_blank"
          rel="noopener noreferrer">
          app developer
        </a>{' '}
        and a{' '}
        <a
          href="https://www.dotabuff.com/players/62906711"
          target="_blank"
          rel="noopener noreferrer">
          Dota player
        </a>
        .
      </p>
    </section>
  </main>
)

export default Home
