const initalState = [
    {
        id: crypto.randomUUID(),
        image: "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/video-stills/season-01/game-of-thrones-season-1-episode-1-full-stitched-607175_PRO35_10-1920.jpg",
        title: "Game of throns",
        price: 3,
        rate: 7.0,
    },
    {
        id: crypto.randomUUID(),
        image: "https://media.npr.org/assets/img/2014/11/13/fl-17895r_wide-d745edc663a75ddc961f66684631a621dc148566.jpg",
        title: "Interstellar",
        price: 30,
        rate: 9.9,
    },
    {
        id: crypto.randomUUID(),
        image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0._UY500_UX667_RI_TTW_.jpg",
        title: "Inception",
        price: 25,
        rate: 9.3,
    }
];





export const movieReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, action.movie];

        case "EDIT_MOVIE":
            return state.map(i=>{
                if (i.id === action.id) {
                    return {
                        ...i,...action.update
                    }
                }else{
                    return i;
                }
            })

        case "REMOVE_MOVIE":
            return state.filter(item => item.id !== action.myid)

        default:
            return state;
    }
}