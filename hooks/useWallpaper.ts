export interface Wallpaper{
    url: string;
    name: string;
}
export function useWallpaper() : Wallpaper[]{
    return [{
        url: "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-thumb.jpg",
        name:"ninja"
    },
    {
         url: "https://ideogram.ai/assets/progressive-image/balanced/response/uENUlOX2Qnqrth6TxEXzQg",
        name:"bat-cat"
    }]
}