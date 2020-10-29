var app = new Vue({
  el: '#commentPage',
  data: {
    comments:[{
      id:'',
      commentText:''
    }],
    newComment: {
      id:'',
      commentText:''
    }
  },

  methods: {
    fetchComments(){
      fetch('api/comment/index.php')
      .then( response => response.json() )
      .then( json => {
        this.comments = json;
        console.log(this.comments)});
      },
     createComments(){
       fetch('api/comment/post.php', {
         method:'POST',
         body: JSON.stringify(this.newComment),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json);
         this.comments = json;
         this.newComment = this.newCommentForm();
       });
    console.log("Great Scott!!!");
     console.log(this.newComment);
     },
     newCommentForm() {
       return {
         id:'',
         commentText:''
       }
     }
},
 created() {
  this.fetchComments();
 }
});
