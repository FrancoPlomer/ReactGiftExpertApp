

const GetGifs = async(category) =>
{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ukzi7JHMHcx7AAjHJffLmBkQN5amm1M7&q=${category}`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gif = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gif;
}

export default GetGifs;