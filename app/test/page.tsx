'use client'
import React from 'react'
import counter from '@/components/counter'

import Counter from '@/components/counter'; // import the counter component

const TestPage = () => {
  return (
    <div>
      <Counter /> {/* use the counter component */}
      <h1>This is the Test Page</h1>
    </div>
  )
}

export default TestPage
