const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addNum(num) {
            this.counter = this.counter + num
        },
        displayResult() {
            if (this.counter < 37) {
                return "Not there yet!"
            } else if (this.counter === 37) {
                return this.counter
            } else {
                return "Too much"
            }
        }
    },
    watch: {
        counter(value) {
            const that = this
            setTimeout(function(){
                that.counter = 0;
                console.log('resetting')
            }, 5000)
        }
    },
});

app.mount('#assignment')