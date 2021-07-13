import { Component } from "react";

import './style.scss';

import { Posts } from "../../components/Posts"
import { loadPosts } from "../../utils/loadPosts";

class Home extends Component {


  state = {
    posts: []
  }


  //¡ Fetch de posts utilizando promise simples dentro do componentDidMount()
  // componentDidMount(){
  //
  //   fetch('https://jsonplaceholder.cypress.io/posts')
  //     .then(resp => resp.json())
  //     .then(posts => this.setState({ posts }))
  // }


  //¡ Fetch de posts utilizando "async" fora do componentDidMount()
  // componentDidMount(){
  //   this.loadPosts();
  // }

  // loadPosts = async () => {
  //   const postsResponse = fetch('https://jsonplaceholder.cypress.io/posts');
  //   const [posts] = await Promise.all([postsResponse]);
  //   const postsJson = await posts.json();
  //   this.setState({ posts: postsJson })
  // }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos });
  }


  render(){

    const { posts } = this.state;
    //# É o mesmo que --> const posts = this.state.posts;

      return (


        <div>

            <section className="container">
               <Posts posts={posts} />
            </section>


        </div>


      );
  }
}

export default Home;
