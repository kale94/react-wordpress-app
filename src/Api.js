const baseUrl = 'http://admin.app.localhost/wp-json/wp/v2/';
const navBaseUrl = 'http://admin.app.localhost/wp-json/menus/v1/menus/';
const optionsUrl = 'http://admin.app.localhost/wp-json/acf/v3/options/options/'

export default class Api {

    posts(id) {
        let url = `${baseUrl}posts`;

        if (id !== undefined) {
            url += `/${id}`;
        }
        
        return fetch(url).then(res => res.json());
    }

    pages(options = {}) {
        let url = `${baseUrl}pages`;

        if (options.id !== undefined) {
            url += `?slug=${options.id}`;
        }

        if (options.category !== undefined) {
            url += `&categories=${options.category}`
        }

        return fetch(url).then(res => res.json());
    }

    menu(slug) {
        let url = `${navBaseUrl + slug}`;
        return fetch(url).then(res => res.json());
    }

    options(spec) {
        let url = `${optionsUrl + spec}`;
        return fetch(url).then(res => res.json());
    }
}