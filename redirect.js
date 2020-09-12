(function() {
    let location = window.location;
    if (location.search) {
        let parameters = new URLSearchParams(location.search.slice(1));
        let path = parameters.get('page');
        if (path) {
            let url = location.pathname + decodeURIComponent(path);
            let query = parameters.get('query');
            if (query) {
                url += '?' + decodeURIComponent(query);
            }
            if (location.hash) {
                url += location.hash;
            }
            window.history.replaceState(null, null, url);
        }
    }
}())
