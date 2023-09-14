import React from 'react';
import YouTubeVideo from '@/components/YouTubeVideo';
import siteMetadata from '@/data/siteMetadata'
// import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { components } from '@/components/MDXComponents';

const MAX_DISPLAY = 2

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h2 className="text font-extrabold leading-9 tracking-tight text-black-500 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-4
        xl md:leading-14">
          Safety is Priority #1
          </h2>

        <h2 className="text font-extrabold leading-9 tracking-tight text-orange-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4
        xl md:leading-14">
          Mission
          </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Our mission is very simple, to create a tool that will help schools and businesses respond immediately to active threat situations! It is our goal produce and sell this technology in a manner that is affordable to all schools. Currently, technology is very expensive and many schools are limited in funding. The LockNow Safety App is a crisis and communication tool that schools will value and can reasonably afford. Communication during a crisis is proving to be difficult, often failing during the worst situations. Any delay in communication can be very costly and dangerous to all involved. Our solution is a simple phone application that will alert users of a lockdown immediately and allow for continued exchange of critical information. Not only will it assist schools with intruders, it will assist them with other emergencies as well. When used in conjunction with an intercom, our app can help save costly seconds in a crisis. We hope you will be a part of our school safety community! 
          </p>
        </div>
      </div>
      
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
