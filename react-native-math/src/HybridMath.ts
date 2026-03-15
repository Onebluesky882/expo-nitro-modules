import { NitroModules } from 'react-native-nitro-modules'
import type { Math } from './specs/Math.nitro'

export const HybridMath = NitroModules.createHybridObject<Math>('Math')
