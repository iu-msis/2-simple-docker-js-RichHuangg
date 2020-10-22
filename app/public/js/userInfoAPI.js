var app = new Vue({
  el: '#userInfo',
  data: {
    userName: 'l',
    country: "test",
    y: "test",
    m: "test",
    d: "test",
    birthdate:"test",
    userEmail: "test",
    profPicture: "test",
    largeImage: "",
    thumbnail: "",
  },
  created(){
    this.fetchUser();

  },
  computed:{
    age(){
      return moment().diff(this.birthdate, 'years')
    }
  },
  methods:{
    fetchUser: function(){
      fetch("https:randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.country = userData.location.country;

        this.y = userData.dob.date.split('-')[0];
        this.m = userData.dob.date.split('-')[1];
        this.d = userData.dob.date.split('-')[2].substring(0,2);
        this.birthdate = userData.dob.date
        this.userEmail = userData.email;
        this.profPicture = userData.picture;
        this.largeImage = userData.picture.large;
        this.thumbnail = userData.picture.thumbnail;

      });

    },

}
})
