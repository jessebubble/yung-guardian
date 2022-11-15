import { SlSocialTwitter, SlSocialFacebook, SlSocialInstagram, SlSocialSpotify } from "react-icons/sl";
import { SiApplemusic, SiSoundcloud, SiYoutubemusic } from "react-icons/si";
import { IconContext } from 'react-icons';

export default function Nav() {

  return (
    <>
    <main class="bg-slate-900">
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-0">
        <div class="flex justify-center space-x-6 md:order-2">
          <IconContext.Provider value={{ className: 'hover:text-indigo-600 h-6 w-6' }}>
            <a href="/" class="text-white">
              <span class="sr-only">Instagram</span>
                <SlSocialInstagram />
            </a>
            <a href="/" class="text-white">
              <span class="sr-only">Facebook</span>
                <SlSocialFacebook />
            </a>
            <a href="/" class="text-white">
              <span class="sr-only">Twitter</span>
                <SlSocialTwitter />
            </a>
            <a href="/" class="text-white">
              <span class="sr-only">Spotify</span>
                <SlSocialSpotify />
            </a>
            <a href="/" class="text-white">
              <span class="sr-only">Youtube</span>
                <SiYoutubemusic />
            </a>
            <a href="/" class="text-white">
              <span class="sr-only">Apple</span>
                <SiApplemusic />
            </a>
            <a href="https://soundcloud.com/yungguardian" class="text-white">
              <span class="sr-only">Soundcloud</span>
                <SiSoundcloud />
            </a>
          </IconContext.Provider>
        </div>
        <div class="mt-8 md:order-2 md:mt-0 flex items-center justify-center gap-4 md:gap-6">
          <a href="/" class="hover:text-rose-500 text-white text-md md:text-lg font-medium">
            ASK 
          </a>
          <a href="/" class="hover:text-rose-500 text-white text-md md:text-lg font-medium">
            STORE
          </a>
          <a href="/" class="hover:text-rose-500 text-white text-md md:text-lg font-medium">
            LIVE
          </a>
        </div>
      </div>
    </main>
    </>
  );
}