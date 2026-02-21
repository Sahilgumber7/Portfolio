
import { Download } from 'lucide-react'
import React from 'react'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full px-0">
      <a
        href="/sahilresume.pdf"
      >
        <HackerBtn label="View My Resume" />
      </a>
    </div>
  )
}

export default DownLoadResumeBtn
