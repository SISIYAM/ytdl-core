const express = require("express");
const ytdl = require("ytdl-core");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: `Congratulations! Server running on http://localhost:${port}`,
  });
});

app.get("/formats/:videoID", async (req, res) => {
  const { videoID } = req.params;

  try {
    let info = await ytdl.getInfo(videoID);

    let audioFormats = ytdl.filterFormats(info.formats, "audioonly");

    res.json({
      success: true,
      formats: audioFormats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching video info",
      error: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
