import Realisations from '@/components/realisations/Realisations'
import RealisationOmega from '@/components/realisations/RealisationOmega'
import RealisationSaasKaros from '@/components/realisations/RealisationSaasKaros'
import RealisationAfk from '@/components/realisations/RealisationAfk'
import RealisationApm from '@/components/realisations/RealisationApm'
import RealisationNuitInfo from '@/components/realisations/RealisationNuitInfo'

const basePath = '/realisations'

export default [{
  path: basePath,
  component: Realisations,
  name: 'realisations'
}, {
  path: `${basePath}/omega`,
  component: RealisationOmega,
  name: 'omega'
}, {
  path: `${basePath}/saas-karos`,
  component: RealisationSaasKaros,
  name: 'saasKaros'
}, {
  path: `${basePath}/afk`,
  component: RealisationAfk,
  name: 'afk'
}, {
  path: `${basePath}/apm`,
  component: RealisationApm,
  name: 'apm'
}, {
  path: `${basePath}/nuit-info`,
  component: RealisationNuitInfo,
  name: 'nuit-info'
}]