import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Franklin Onyenechere All rights reserved.</p>

      <div className="mt-2 flex justify-center items-center gap-4">
        <Link href="https://github.com/franklynxchill" 
          className="hover:text-cyan-500"
        >
          GitHub
        </Link>
        <span>|</span>
        <Link href="https://www.linkedin.com/in/franklynxchill/"
          className="hover:text-cyan-500"
        >
          LinkedIn
        </Link>
        {/* <span>|</span>
        <Link href="https://github.com/franklynxchill" target="_blank" className="hover:text-cyan-500">Portfolio</Link> */}
      </div>
    </footer>
  )
}

export default Footer