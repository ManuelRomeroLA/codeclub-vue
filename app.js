new Vue({
    el: '#exercise',
    data: {
        name: 'Manuel',
        age: 42,
        image: 'http://simplesend.com/images/simplesend_logo.gif'
    },
    methods: {
        rando: function () {
            return Math.random();
        }
    }
});
