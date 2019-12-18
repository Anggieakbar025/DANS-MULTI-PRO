module.exports = function (app, fetch) {

    fetch('https://jobs.github.com/positions.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            console.log(json);
        });
}