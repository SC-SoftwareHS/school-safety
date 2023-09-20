import Image from 'next/image'
import { motion } from 'framer-motion'

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
          textAlign: 'left',
          paddingTop: '35px', // Add 'px' to the paddingTop value
          color: '#0e3e67',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Improve Your Safety Without Spending a Fortune.
      </h2>
      <p style={{ textAlign: 'left', paddingTop: '10px', color: '#0e3e67', fontSize: '20px' }}>
        - Immediate crisis alerts and communication <br />
        - Simple immediate alert activation alert uses Amber Alert style alarm <br />
        - Customizable alert includes location of threat <br />
        - Includes SRO's and police for faster response <br />
        - Live messaging to share crisis updates
        <br />
        - Easily accommodates multiple campuses
        <br />- Affordable!
      </p>
    </div>
  )
}

export default MainPage
