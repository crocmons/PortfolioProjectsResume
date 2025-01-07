import React from 'react'
import Head from 'next/head'
import { Admin, Editor } from 'react-bricks'

const AdminEditor: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>Editor</title>
      </Head>
      // new project added
      // Fixed typos
      {/* fixed new project image */}
      <Editor />
    </Admin>
  )
}

export default AdminEditor
