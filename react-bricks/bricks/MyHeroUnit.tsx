import React from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'


// Local Types

type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}


// Component to be rendered for Hero unit image added in MERN AI

const MyHeroUnit: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <div className={`max-w-xl mx-auto px-6 ${padding === 'big' ? 'py-20' : 'py-12'}`}>
      <div>
        <Image
          propName="icon"
          alt="Icon"
          maxWidth={80}
          aspectRatio={1}
          imageClassName="w-20 mb-5 mx-auto"
        />
        <Text
          renderBlock={(props) => (
            <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3">
              {props.children}
            </h1>
          )}
          placeholder="Type a title..."
          propName="title"
        />
        <RichText
          renderBlock={(props) => (
            <p className="text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
              {props.children}
            </p>
          )}
          placeholder="Type a text..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
          ]}
          renderCode={(props) => (
            <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
              {props.children}
            </code>
          )}
        />
      </div>
    </div>
  )
}

//=============================
//=============================
// Brick Schema
//=============================
//=============================
// Hero Section added new project:
// Summarizer AI
// QrCode Generator App
// Data Analysiis toolbot and other projects
// Discover & Share AI Powered Prompts
// updated images
// added new changes
// added cognito-ai
// https://github.com/crocmons/PromptWorld
// fixed image UI for every devices
// added new projects
// Headstarter projects
// npm 

MyHeroUnit.schema = {
  name: 'my-hero-unit',
  label: 'Custom Hero Unit',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default MyHeroUnit


