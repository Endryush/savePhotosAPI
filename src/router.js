import Vue from 'vue';
import Router from 'vue-router';
import loginPage from './components/login/loginPage.vue'
import bookListPage from './components/book/bookListPage.vue'
import bookEntryPage from './components/book/bookEntryPage.vue'

Vue.use(Router);

const routes = [
    { path: '/', name:'login', component: loginPage },
    { path: '/book', name:'bookList', component: bookListPage },
    { path: '/book/:id', name:'bookEntry', component: bookEntryPage },

];

export default new Router ({
    routes,
})