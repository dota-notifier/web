import { NextPage } from 'next'
import React from 'react'

import { img_configure_dota, img_dota, img_ios_notifications } from '../assets'

const Home: NextPage = () => (
  <main>
    <header className="flex items-center p-8 bg-black">
      <img className="h-20" src={img_dota} alt="Dota Notifier" />
      <h1 className="text-4xl font-semibold ml-8">Dota Notifier</h1>
    </header>
    <section className="my-4 mt-0 px-8 pb-8 bg-black">
      <p className="text-xl">
        Get notifications on your phone when a ready check is trigger or a match
        is ready.
      </p>
    </section>
    <section className="my-12 mt-8 px-8">
      <h2 className="text-6xl font-semibold mb-8 text-accent">Setup</h2>
      <h3 className="bullet">1</h3>
      <p className="text-xl my-4">Download and install the desktop app.</p>
      <a className="button" href="#download">
        Download
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
        Open Dota 2, go to settings, then options, and enable{' '}
        <em>Bring Dota 2 to front when match found</em> and{' '}
        <em>Bring Dota 2 to front for Ready Checks</em>.
      </p>
      <a
        className="block my-4 rounded overflow-hidden"
        href={img_configure_dota}>
        <img src={img_configure_dota} alt="Configure Dota" />
      </a>
    </section>
    <section className="my-12 px-8">
      <h3 className="bullet">4</h3>
      <p className="text-xl my-4">
        Scan the QR code from the desktop app with the mobile app and you are
        good to go. Whenever you are stepping away from your computer, just{' '}
        <em>ALT+TAB</em> out of Dota.
      </p>
    </section>
    <section className="my-12 border-t-2 border-black px-8">
      <h2 className="text-6xl font-semibold my-8 text-accent">Tips</h2>
      <h3 className="bullet">1</h3>
      <p className="text-xl my-4">
        Configure iOS notifications to make sure you do not miss anything. The
        app plays the ready check and match ready sounds from Dota!
      </p>
      <a
        className="block my-4 rounded overflow-hidden"
        href={img_ios_notifications}>
        <img src={img_ios_notifications} alt="Configure iOS notifications" />
      </a>
      <h3 className="bullet">2</h3>
      <p className="text-xl mt-4">
        If your computer is slow (or fast), you can tweak the delay setting on
        the desktop client to suit your specs. Try a ready check after you
        install this app and if it does not work, tweak the setting until you
        find one that does. For me, 1.5 seconds is the ideal for both ready
        checks and match ready.
      </p>
    </section>
    <section className="my-12 border-t-2 border-black px-8">
      <h2 className="text-6xl font-semibold my-8 text-accent">How it works</h2>
      <p className="text-xl my-4">
        Dota Notifier takes a screenshot of Dota when it comes to the foreground
        and checks if it has the words <em>READY CHECK</em> or{' '}
        <em>YOUR GAME IS READY</em> and sends the appropriate notification. If
        neither of these happen, then you will not get a notification.
      </p>
      <p className="text-xl my-4">
        Right now, it is only available for English. And requires that you
        minimize your game before you go away from your computer.
      </p>
      <p className="text-xl my-4">
        In the future, I will add support for more languages (I will need
        community help for this) and find a way to check for triggers when Dota
        is in the foreground.
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
        Right now, it is only available for English. And requires that you
        minimize your game before you go away from your computer.
      </p>
      <p className="text-xl my-4">
        In the future, I will add support for more languages (I will need
        community help for this) and find a way to check for triggers when Dota
        is in the foreground.
      </p>
      <p className="text-xl my-4">
        Dota Notifier is open-source. You can find the code on{' '}
        <a href="https://github.com/dota-notifier">GitHub</a>.
      </p>
    </section>
  </main>
)

export default Home
