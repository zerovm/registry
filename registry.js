function swift_url() {
    var path = window.location.pathname;
    var parts = path.split('/');
    while (parts.length > 3) {
        parts.pop();
    }
    return parts.join('/');
}

function load_zapps(container) {
    var param = $.param({'delimiter': '/'});
    var url = swift_url() + '/' + container + '?' + param;
    var q = $.getJSON(url).then(function (data) {
        return $.map(data, function (item) {
            if (item.subdir) {
                var dir = item.subdir;
                return {'name': dir.substr(0, dir.length - 1)};
            }
        });
    });
    return q;
}
