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
      <Editor />
    </Admin>
  )
}

export default AdminEditor
