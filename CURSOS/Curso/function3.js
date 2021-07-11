(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name:'nome no objeto de execução',
        getNameArrowFn,
        getName
    }
    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();