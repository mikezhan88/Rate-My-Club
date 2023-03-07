import img1 from "../images/dsp.jpg"
import img2 from "../images/aiche.png"
import img3 from "../images/pp.png"

export const user = {
    name: 'Chilly Tiger',
    bookmarks: [
        {
            img: img1,
            clubName: 'Delta Sigma Pi',
            tags: ['Greek Life', 'Business']
        },
        {
            img: img2,
            clubName: 'DevX',
            tags: ['Engineering']
        },
        {
            img: img3,
            clubName: 'ACA',
            tags: ['Cultural', 'Dance']
        }
    ],
    reviews: [
        {
            rating: 5,
            clubName: 'Delta Sigma Pi',
            date: 'December 19, 2022',
            content: 'Great club with awesome people. Super welcoming!'
        },
        {
            rating: 2,
            clubName: 'Cabbage Patch Club',
            date: 'April 12, 2022',
            content: 'Terrible club!'
        },
        {
            rating: 4,
            clubName: 'DevX',
            date: 'January 25, 2022',
            content: 'Got to work on an awesome project with other developers.'
        },
    ]
}
