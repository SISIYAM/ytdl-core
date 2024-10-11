const ytdl = require("ytdl-core");

const url = "http://www.youtube.com/watch?v=aqz-KE-bpKQ";
const videoID = "aqz-KE-bpKQ";

async function fetchAudioFormats() {
  try {
    // Retrieve video information
    let info = await ytdl.getInfo(videoID);

    // Filter formats to get audio-only formats
    let audioFormats = ytdl.filterFormats(info.formats, "audioonly");

    console.log("Formats with only audio: " + audioFormats.length);
    console.log(audioFormats); // Optional: Log audio formats for more details
  } catch (error) {
    console.error("Error fetching video info:", error);
  }
}

// Call the function
fetchAudioFormats();
