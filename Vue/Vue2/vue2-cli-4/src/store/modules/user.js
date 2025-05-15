const state = {
    name: "XDXZ",
    age: 23
}

const mutations = {
    output () {
        console.log("This is user mutations");
    }
}

const actions = {
    asyncOutput () {
        setTimeout(() => {
            console.log("This is user actions");
        }, 1000);
    }
}

const getters = {
    getter () {
        return "This is user getters";
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}