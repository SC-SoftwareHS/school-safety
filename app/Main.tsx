'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiOutlineOfficeBuilding, HiUserGroup } from 'react-icons/hi'
import { PiGearSixBold } from 'react-icons/pi'
import Counter from '@/components/counter'

const MainPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'left', paddingTop: '50px' }}>
      <h2
        style={{
          color: '#000',
          fontSize: '15px',
          textAlign: 'center',
          letterSpacing: '1.4px',
          fontWeight: 'bold',
        }}
      >
        EMERGENCY MANAGEMENT SOFTWARE
      </h2>
      <h1 style={{ color: '#0e3e67', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
        Improved Safety For All Facilities
      </h1>
      <div style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
        Currently protecting <Counter /> People
      </div>

      <div
        style={{
          overflow: 'hidden',
          width: '700px', // Set your desired width
          height: '400px', // Set your desired height
          position: 'relative',
          margin: '0 auto', // Center the image horizontally
          paddingTop: '20px', // Add space between text and image
        }}
      >
        <Image
          src="/static/images/canada/school-image.jpeg"
          alt="Alt text for the picture"
          width={700} // Match the width of the parent div
          height={400} // Match the height of the parent div
          // layout="responsive"
          // objectFit="cover"
          quality={100}
        />
      </div>
      <h2
        style={{
          textAlign: 'center',
          paddingTop: '35px', // Add 'px' to the paddingTop value
          color: '#0e3e67',
          fontSize: '30px',
          fontWeight: 'bold',
          paddingBottom: '20px',
        }}
      >
        Improve Your Safety Without Spending a Fortune.
      </h2>
      <div className="bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:pt-24 ">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            The Locknow Safety App
          </h2>
          <p className="text-lg font-medium text-white">
            The Locknow Safety App provides the most critical abilities to your facility during any
            emergency.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <HiOutlineOfficeBuilding size={25} color="white" />
              </span>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {' '}
                  Immediate Awareness Facility-Wide
                </h3>
                <p className="mt-2 text-base text-primary-200">more text</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <HiUserGroup size={25} color="white" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  Ongoing Communication for Everyone
                </h3>
                <p className="mt-2 text-base text-primary-200">more text</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Customizable Features</h3>
                <p className="mt-2 text-base text-primary-200">more text</p>
              </div>
            </div>
            <div>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <PiGearSixBold size={25} color="white" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Affordable</h3>
                <p className="mt-2 text-base text-primary-200">more text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
