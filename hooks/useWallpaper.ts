export interface Wallpaper{
    url: string;
    name: string;
}
export function useWallpaper() : Wallpaper[]{
    return [{
        url: "https://c4.wallpaperflare.com/wallpaper/923/727/796/anime-digital-art-artwork-2d-portrait-display-hd-wallpaper-preview.jpg",
        name:"Ninja"
    },
    {
         url: "https://ideogram.ai/assets/progressive-image/balanced/response/uENUlOX2Qnqrth6TxEXzQg",
        name:"Cool-Cat"
    },
    {
        url: "https://c4.wallpaperflare.com/wallpaper/390/439/671/nike-cactus-jack-dark-vertical-hd-wallpaper-preview.jpg",
       name:"Shoes"
   },
   {
        url: "https://c4.wallpaperflare.com/wallpaper/386/727/720/1750x3500-px-ios-ipad-iphone-ipod-portrait-display-vertical-anime-code-geass-hd-art-wallpaper-preview.jpg",
        name:"Night-sky"
   },
   {
        url: "https://c4.wallpaperflare.com/wallpaper/945/452/836/space-earth-moon-vertical-wallpaper-preview.jpg",
        name:"Earth"
   },
]
}