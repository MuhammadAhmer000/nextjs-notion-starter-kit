import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7c9d593f4d894569940a5e0527568607',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ahmer\'s Programming Portfolio',
  domain: 'muhammad-ahmer',
  author: 'Muhammad Ahmer',

  // open graph metadata (optional)
  description: 'Welcome to my Computer Science Portfolio! My name is Ahmer, and I am a Junior II studying Computer Science at the American University of Sharjah. I am set to graduate in May 2024, and I am passionate about data science, healthcare, specifically cancer research and genomics, and music production.\n Through my portfolio, you\'ll find a collection of my projects, assignments, and personal explorations in these fields. As a computer science student, I have gained a solid foundation in various programming languages, data structures, algorithms, and software development methodologies. I am constantly learning new technologies and experimenting with different programming paradigms.\n My interest in healthcare stems from my desire to use my technical skills to make a positive impact on society. I am fascinated by the potential of data science and genomics to revolutionize cancer research and improve patient outcomes. In addition, I have a keen interest in music production and have spent time honing my skills in this area. \nI hope my portfolio provides you with an insight into my skills, interests, and passion for using technology to drive positive change. Please feel free to explore my work, and don\'t hesitate to reach out to me if you have any questions or would like to collaborate.',

  // social usernames (optional)
  twitter: 'muhammad_ahmer',
  github: 'https://github.com/MuhammadAhmer000',
  linkedin: 'https://www.linkedin.com/in/muhammad-ahmer-/',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
