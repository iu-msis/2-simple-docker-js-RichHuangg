var app = new Vue({
  el: '#userInfo',
  data: {
    userName: 'l',
    country: "test",
    birthdate: "test",
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
        this.birthdate = userData.dob.date;
        this.userEmail = userData.email;
        this.profPicture = userData.picture;
        this.largeImage = userData.picture.large;
        this.thumbnail = userData.picture.thumbnail;

      });

    },

  formatDate(d){
    return moment(d).format("MM/DD/YYYY");
  }
}
})
