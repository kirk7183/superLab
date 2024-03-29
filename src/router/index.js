import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'
import firebase from 'firebase/app';
// import Intro from '../components/Intro.vue';
import NotFound from '@/views/NotFound.vue';


Vue.use(VueRouter)

const routes = [

    // {
    // Sluzi za redirect sa pozvane stranice na neku drugu
    // path: '/',
    // redirect: 'home'
    // },

    {
        path: '*',
        name: 'error',
        component: NotFound
    },
    {
        // path: '/',
        // name: 'Intro',
        // components: {
        //     glavni_router: Intro
        // }

        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/home'

        // beforeEnter: (to, from, next) => {
        //     if (to.name == '/') {
        //         "redirect: 'home'" 
        //         next({ name: 'Home' })
        //     } else {
        //         next()
        //     }
        // }

    },

    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('@/views/About.vue')
    },
    {
        path: '/spermogram_i_spermokultura',
        name: 'Spermogram_i_spermokultura',
        component: () =>
            import ('@/views/Nudimo/spermogram_i_spermokultura.vue')
    },
    {
        path: '/analiza_urina',
        name: 'Analiza_urina',
        component: () =>
            import ('@/views/Nudimo/analiza_urina.vue')
    },
    {
        path: '/sakupljanje_uzorka_stolice',
        name: 'Sakupljanje_uzorka_stolice',
        component: () =>
            import ('@/views/Nudimo/sakupljanje_uzorka_stolice.vue')
    },
    {
        path: '/vadjenje_krvi',
        name: 'Vadjenje_krvi',
        component: () =>
            import ('@/views/Nudimo/vadjenje_krvi.vue')
    },
    {
        path: '/test_na_intoleranciju',
        name: 'Test_na_intoleranciju',
        component: () =>
            import ('@/views/Nudimo/test_na_intoleranciju.vue')
    },
    {
        path: '/covid_19_testiranje',
        name: 'Covid_19_testiranje',
        component: () =>
            import ('@/views/Nudimo/covid_19_testiranje.vue')
    },
    {
        path: '/najcescaPitanja',
        name: 'NajcescaPitanja',
        component: () =>
            import ('@/views/NajcescaPitanja.vue')
    },
    {
        path: '/onlineRezultati',
        name: 'OnlineRezultati',
        component: () =>
            import ('@/views/OnlineRezultati.vue')
    },
    {
        path: '/cenovnik',
        name: 'Cenovnik',
        component: () =>
            import ('@/views/Cenovnik.vue')
    },

    {
        path: '/unosObavestenja',
        name: 'UnosObavestenja',
        component: () =>
            import ('@/views/UnosObavestenja.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/unosRezultata',
        name: 'UnosRezultata',
        component: () =>
            import ('@/views/UnosRezultata.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/korisnickiPanel',
        name: 'KorisnickiPanel',
        component: () =>
            import ('@/views/KorisnickiPanel.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/uslugeCene',
        name: 'UslugeCene',
        component: () =>
            import ('@/views/UslugeCene.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/unosNajcescaPitanja',
        name: 'UnosNajcescaPitanja',
        component: () =>
            import ('@/views/UnosNajcescaPitanja.vue'),
        meta: { requiresAuth: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // hashbag: true,
    //Kada kliknes na Home page na recimo Analiza krvi ili Vadjenje krvi i kada ode na drugi page, da kada kliknes na "Nazad" za zapamti 
    //poziciju te stranice sa koje si otisao na drugi page
    scrollBehavior(to, from, savedPosition) {
        // savedPosition is only available for popstate navigations.
        if (savedPosition) return savedPosition

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        if (to.params.savePosition) return {}

        // scroll to anchor by returning the selector
        if (to.hash) {
            let position = { selector: to.hash }

            // specify offset of the element
            // if (to.hash === '#anchor2') {
            //   position.offset = { y: 100 }
            // }
            return position
        }

        // scroll to top by default
        return { x: 0, y: 0 }
    }
})


//PRAVLJENJE ROUTE GUARD

// Ako se ocitava pocetna stranica '/' a breakpoint je 'xs' onda idi na stranicu 'home' da ne ocitava Intro.vue posto se ne vidi lepo na mobilnom
router.beforeEach((to, from, next) => {
    if (to.path == '/' && window.matchMedia("(max-width: 600px)").matches)
        next({ name: 'Home' })
    else next()
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser
        //da bi se koristio VUEX mora da se i importuje na pocetku
        // const isAuthenticated = store.state.IsLoggedIn;

    if (requiresAuth & !isAuthenticated) {
        store.dispatch("Snackbar_Message", {
            boolean: true,
            message: "Potrebno je da se logujete kako bi ste pristupili ovoj stranici",
            color: "error"
        }, 500)

        next("/home")
    } else {
        next()
    }
})


export default router