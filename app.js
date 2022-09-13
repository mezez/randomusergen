//cc traversy media

const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);

      let newUser = results[0];
      (this.firstName = newUser.name.first),
        (this.lastName = newUser.name.last),
        (this.email = newUser.email),
        (this.gender = newUser.gender),
        (this.picture = newUser.picture.large);
    },
  },
});

app.mount("#app");
