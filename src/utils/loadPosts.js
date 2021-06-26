export const loadPosts = async () => {

    const postsResponse = fetch('https://jsonplaceholder.cypress.io/posts');
    const photosResponse = fetch('https://jsonplaceholder.cypress.io/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return{ ...post, cover: photosJson[index].url }
    });

    return postAndPhotos;

}