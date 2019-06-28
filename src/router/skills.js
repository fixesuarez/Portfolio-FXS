import Skills from '@/components/skills/Skills'

import Perseverance from '@/components/skills/soft-skills/Perseverance'
import OpenMinded from '@/components/skills/soft-skills/OpenMinded'
import GoodMood from '@/components/skills/soft-skills/GoodMood'

import Vuejs from '@/components/skills/technical-skills/Vuejs'
import CSharp from '@/components/skills/technical-skills/CSharp'
import HtmlCss from '@/components/skills/technical-skills/HtmlCss'

const basePath = '/skills'

export default [{
  path: '/skills',
  component: Skills,
  name: 'skills'
},

{
  path: `${basePath}/perseverence`,
  component: Perseverance,
  name: 'perseverence'
}, {
  path: `${basePath}/open-minded`,
  component: OpenMinded,
  name: 'openMinded'
}, {
  path: `${basePath}/good-mood`,
  component: GoodMood,
  name: 'goodMood'
},

{
  path: `${basePath}/vuejs`,
  component: Vuejs,
  name: 'vuejs'
}, {
  path: `${basePath}/c-sharp`,
  component: CSharp,
  name: 'cSharp'
}, {
  path: `${basePath}/html-css`,
  component: HtmlCss,
  name: 'htmlCss'
}]