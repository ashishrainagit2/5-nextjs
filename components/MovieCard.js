const MovieCard = (props) => {
    // console.log("1000000", (props.list));
     const ImagePath = "https://image.tmdb.org/t/p/w300/" + props.list.poster_path;
     const title = props.title
    return (
        <div className="masterImage">
            <div>
                <img src={ImagePath} alt="Main Poster"/>
            </div>
            <div>
                {props.list.title}
            </div>
            
            <style jsx>{`
                .masterImage {
                    text-align: center;
                    margin: 0 auto;
                    overflow: hidden;
                    border: 1px solid grey;
                    display: inline-block;
                }
                .masterImage img {
                }
            `}
            </style>
        </div>
    )
}

export default MovieCard