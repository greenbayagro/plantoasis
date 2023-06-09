// uno.config.ts
import { defineConfig } from 'unocss'

import presetUno from '@unocss/preset-uno'
import presetWind from '@unocss/preset-wind'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'
export default defineConfig({
  presets: [
    presetUno(),presetWind(), presetWebFonts({
      // use axios with an https proxy
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        sansBody:'PT Sans',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        poppins: ['Poppins'],
        mont: 'Montserrat',
        latohead: 'Lato',
        latobody: 'Open Sans',
        playfairHead: 'Playfair Display',
        playfairBody: 'Lora',
        nunitoHead: 'Nunito',
        nunitoBody:'Raleway'
        
      },
    }),
      presetIcons()
  ],
})