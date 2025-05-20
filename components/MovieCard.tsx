import { Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

function MovieCard({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
        />
        <Text className="text-white text-base font-semibold mt-2">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
}

export default MovieCard;
