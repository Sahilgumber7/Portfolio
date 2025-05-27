
import { Download } from 'lucide-react'
import React from 'react'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a
        href="/sahilresume.pdf" 
      >
        <HackerBtn label="View My Resume" />
      </a>
    </div>
  )
}

export default DownLoadResumeBtn
